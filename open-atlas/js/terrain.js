/* =========================================================================
   TerrainKit — 真实 DEM 地形（离线）
   高程来源：AWS Terrain Tiles / Terrarium（Mapzen 衍生 SRTM + GMTED + ETOPO1）
   海平面随时代升降 → 古代海岸线由「现代 DEM + 重建海平面」求得，属推断。
   ========================================================================= */
window.TerrainKit = (function () {
  'use strict';

  const D = window.DATA;
  const DEM = window.DEM || null;
  const MAP = D.MAP;

  let NX = 0, NZ = 0, OFF = 1000;
  let heights = null;               // Float32Array，米
  let heights0 = null;              // 下切前的省网格副本（校验「周边陆地」用）
  let seaLevel = 0;                 // 当前海平面（米，相对现代）
  // 垂直夸张倍数：平面 1 单位 = 1 km（真实），高程 1 m = VE/1000 单位。
  // VE=10 表示把真实高程放大 10 倍以便肉眼分辨山形；页面「纵向 ×10」即为该值。
  let VE = 10;
  let sceneRef = null;

  const chunks = [];
  const coastGroup = { line: null, halo: null };
  const patches = {};               // 片区高精度地形
  let lastCoastSea = -999;

  function clamp(v, a, b) { return v < a ? a : (v > b ? b : v); }
  function smoothstep(a, b, x) {
    const t = clamp((x - a) / (b - a), 0, 1);
    return t * t * (3 - 2 * t);
  }
  // 米 → 场景单位（水平 1 单位 = 1 km，垂直按 VE 倍夸张）
  function toUnits(m) { return m * VE / 1000.0; }

  /* ---------------------------- 解码 ---------------------------- */
  function decodeU16(b64) {
    const s = atob(b64);
    const n = Math.floor(s.length / 2);
    const out = new Uint16Array(n);
    for (let i = 0; i < n; i++) out[i] = s.charCodeAt(i * 2) + s.charCodeAt(i * 2 + 1) * 256;
    return out;
  }

  // 3×3 加权平滑（一次或多次）：削弱 DEM 高频噪声在垂直夸张下形成的「针状」尖峰
  function smoothGrid(src, nx, nz, passes) {
    let a = src, b = new Float32Array(src.length);
    for (let p = 0; p < passes; p++) {
      for (let j = 0; j < nz; j++) {
        for (let i = 0; i < nx; i++) {
          let s = 0, w = 0;
          for (let dj = -1; dj <= 1; dj++) {
            const jj = j + dj; if (jj < 0 || jj >= nz) continue;
            for (let di = -1; di <= 1; di++) {
              const ii = i + di; if (ii < 0 || ii >= nx) continue;
              const k = (di === 0 && dj === 0) ? 4 : ((di !== 0 && dj !== 0) ? 1 : 2);
              s += a[jj * nx + ii] * k; w += k;
            }
          }
          b[j * nx + i] = s / w;
        }
      }
      const t2 = a; a = b; b = t2;
    }
    return a;
  }

  function initGrid() {
    if (!DEM) throw new Error('缺少 js/dem.js（真实高程数据）');
    NX = DEM.meta.nx; NZ = DEM.meta.nz; OFF = DEM.meta.offset || 1000;
    const u = decodeU16(DEM.data);
    heights = new Float32Array(u.length);
    for (let i = 0; i < u.length; i++) heights[i] = u[i] - OFF;
    heights = smoothGrid(heights, NX, NZ, 2);

    // 把片区高精度 DEM 合并进全省网格。
    // 780 m 粗网格在城区与湖面上会把周围的丘陵一并平均进去（西湖一带可达 20–30 m），
    // 而片区 patch 只有约 10 m；粗网格永远显示在上方，会把 patch 与湖面遮住
    // （西湖湖面曾因此只露出两块碎片）。合并后粗网格与 patch 的高程一致。
    if (window.DEMD) {
      for (const id in window.DEMD) {
        const pd = window.DEMD[id];
        const n2 = pd.n;
        const u2 = decodeU16(pd.data);
        const raw2 = new Float32Array(u2.length);
        for (let k = 0; k < u2.length; k++) raw2[k] = u2[k] - OFF;
        const loc = smoothGrid(raw2, n2, n2, 1);
        const fi0 = (pd.lon0 - MAP.lon0) / (MAP.lon1 - MAP.lon0) * (NX - 1);
        const fi1 = (pd.lon1 - MAP.lon0) / (MAP.lon1 - MAP.lon0) * (NX - 1);
        const fj0 = (pd.lat0 - MAP.lat0) / (MAP.lat1 - MAP.lat0) * (NZ - 1);
        const fj1 = (pd.lat1 - MAP.lat0) / (MAP.lat1 - MAP.lat0) * (NZ - 1);
        const i0 = Math.max(0, Math.floor(fi0)), i1 = Math.min(NX - 1, Math.ceil(fi1));
        const j0 = Math.max(0, Math.floor(fj0)), j1 = Math.min(NZ - 1, Math.ceil(fj1));
        const ie = Math.max(1, i1 - i0), je = Math.max(1, j1 - j0);
        for (let j = j0; j <= j1; j++) {
          const lat = MAP.lat0 + (MAP.lat1 - MAP.lat0) * j / (NZ - 1);
          const fz = (lat - pd.lat0) / (pd.lat1 - pd.lat0) * (n2 - 1);
          const jz = clamp(Math.floor(fz), 0, n2 - 2), tz2 = clamp(fz - jz, 0, 1);
          // 边缘羽化：避免粗/细网格接缝处出现台阶
          const wj = smoothstep(0, 0.10, Math.min(j - j0, j1 - j) / je);
          for (let i = i0; i <= i1; i++) {
            const lon = MAP.lon0 + (MAP.lon1 - MAP.lon0) * i / (NX - 1);
            const fx2 = (lon - pd.lon0) / (pd.lon1 - pd.lon0) * (n2 - 1);
            const ix = clamp(Math.floor(fx2), 0, n2 - 2), tx2 = clamp(fx2 - ix, 0, 1);
            const wi = smoothstep(0, 0.10, Math.min(i - i0, i1 - i) / ie);
            const w = wi * wj;
            const kk = jz * n2 + ix;
            const det = (loc[kk] * (1 - tx2) + loc[kk + 1] * tx2) * (1 - tz2) +
                        (loc[kk + n2] * (1 - tx2) + loc[kk + n2 + 1] * tx2) * tz2;
            const k = j * NX + i;
            heights[k] = heights[k] * (1 - w) + det * w;
          }
        }
      }
    }

    for (let c = 0; c <= CX; c++) BX.push(Math.min(NX - 1, Math.round((NX - 1) * c / CX / STEP) * STEP));
    for (let c = 0; c <= CZ; c++) BZ.push(Math.min(NZ - 1, Math.round((NZ - 1) * c / CZ / STEP) * STEP));
    heights0 = heights.slice();      // 下切会就地改 heights，先留一份原始高程
  }

  /* ---------------------------- 采样 ---------------------------- */
  function gridCoords(lon, lat) {
    const fi = (lon - MAP.lon0) / (MAP.lon1 - MAP.lon0) * (NX - 1);
    const fj = (lat - MAP.lat0) / (MAP.lat1 - MAP.lat0) * (NZ - 1);
    return [fi, fj];
  }

  function demAt(lon, lat) {
    const g = gridCoords(lon, lat);
    let fi = clamp(g[0], 0, NX - 1.0001), fj = clamp(g[1], 0, NZ - 1.0001);
    const i = Math.floor(fi), j = Math.floor(fj);
    const tx = fi - i, tz = fj - j;
    const k = j * NX + i;
    const h00 = heights[k], h10 = heights[k + 1];
    const h01 = heights[k + NX], h11 = heights[k + NX + 1];
    return (h00 * (1 - tx) + h10 * tx) * (1 - tz) + (h01 * (1 - tx) + h11 * tx) * tz;
  }

  function yAt(lon, lat) { return toUnits(demAt(lon, lat)); }

  // 校验用：下切前的原始省网格高程（未做河道下切，已含平滑与片区合并）
  function demRawAt(lon, lat) {
    const src = heights0 || heights;
    const g = gridCoords(lon, lat);
    let fi = clamp(g[0], 0, NX - 1.0001), fj = clamp(g[1], 0, NZ - 1.0001);
    const i = Math.floor(fi), j = Math.floor(fj);
    const tx = fi - i, tz = fj - j;
    const k = j * NX + i;
    return (src[k] * (1 - tx) + src[k + 1] * tx) * (1 - tz) +
           (src[k + NX] * (1 - tx) + src[k + NX + 1] * tx) * tz;
  }

  /* ---------------------------- 配色 ---------------------------- */
  // 颜色为线性空间值（渲染器输出 sRGB）。低地偏暗绿，山地转褐，与深色海面形成对比。
  const RAMP = [
    [-220, 0.002, 0.006, 0.012],
    [-60, 0.004, 0.020, 0.030],
    [-8, 0.008, 0.045, 0.055],
    [0, 0.115, 0.130, 0.070],
    [4, 0.100, 0.150, 0.070],
    [16, 0.085, 0.140, 0.065],
    [60, 0.085, 0.150, 0.068],
    [170, 0.095, 0.140, 0.070],
    [340, 0.125, 0.140, 0.080],
    [620, 0.175, 0.155, 0.100],
    [980, 0.200, 0.180, 0.125],
    [1350, 0.310, 0.278, 0.205],
    [1750, 0.450, 0.415, 0.330],
    [2100, 0.620, 0.590, 0.520]
  ];

  function rampColor(elevAboveSea, out) {
    const e = elevAboveSea;
    if (e <= RAMP[0][0]) {
      out[0] = RAMP[0][1]; out[1] = RAMP[0][2]; out[2] = RAMP[0][3];
      return;
    }
    for (let i = 1; i < RAMP.length; i++) {
      if (e <= RAMP[i][0]) {
        const a = RAMP[i - 1], b = RAMP[i];
        const f = (e - a[0]) / (b[0] - a[0]);
        out[0] = a[1] + (b[1] - a[1]) * f;
        out[1] = a[2] + (b[2] - a[2]) * f;
        out[2] = a[3] + (b[3] - a[3]) * f;
        return;
      }
    }
    const l = RAMP[RAMP.length - 1];
    out[0] = l[1]; out[1] = l[2]; out[2] = l[3];
  }

  // 坡度光照：用 DEM 局部差分做一点明暗，增强山形（即使无实时阴影也清晰）
  function computeColors(geo, elevArr) {
    const col = geo.getAttribute('color');
    const ca = col.array;
    const cut = geo.userData.cutMask;      // 下切河床掩码（见 carveRivers）
    const tmp = [0, 0, 0];
    for (let k = 0; k < elevArr.length; k++) {
      let e = elevArr[k] - seaLevel;
      // 河床不按真实高程着色：宽河下切后床底常低于海平面，照高程会整片涂成水色，
      // 近景里变成「蓝色平台 + 陡壁」。河床已被水面网格覆盖，按河滩（低地绿）着色。
      if (cut && cut[k] && e < 1.2) e = 1.2;
      rampColor(e, tmp);
      ca[k * 3] = tmp[0]; ca[k * 3 + 1] = tmp[1]; ca[k * 3 + 2] = tmp[2];
    }
    col.needsUpdate = true;
  }

  /* ---------------------------- 分块地形 ---------------------------- */
  const CX = 5, CZ = 5;
  const STEP = 2;                       // 全省网格降采样（780m → 1.56km），细节交给片区 patch
  const BX = [], BZ = [];

  function buildChunk(ci, cj) {
    const i0 = BX[ci], i1 = BX[ci + 1];
    const j0 = BZ[cj], j1 = BZ[cj + 1];
    const w = (i1 - i0) / STEP + 1, h = (j1 - j0) / STEP + 1;
    const count = w * h;
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const elev = new Float32Array(count);
    const idx = new Uint32Array((w - 1) * (h - 1) * 6);
    let p = 0;

    for (let j = j0, jj = 0; j <= j1; j += STEP, jj++) {
      const lat = MAP.lat0 + (MAP.lat1 - MAP.lat0) * j / (NZ - 1);
      const z = D.toZ(lat);
      for (let i = i0, ii = 0; i <= i1; i += STEP, ii++) {
        const lon = MAP.lon0 + (MAP.lon1 - MAP.lon0) * i / (NX - 1);
        const k = jj * w + ii;
        const hm = heights[j * NX + i];
        elev[k] = hm;
        pos[k * 3] = D.toX(lon);
        pos[k * 3 + 1] = toUnits(hm);
        pos[k * 3 + 2] = z;
      }
    }
    let q = 0;
    for (let j = 0; j < h - 1; j++) {
      for (let i = 0; i < w - 1; i++) {
        const a = j * w + i, b = a + 1, c = a + w, d = c + 1;
        // 注意：z 轴向南为负，行号增大 = z 减小；必须用 (a,b,c)/(b,d,c) 才能得到朝上的法线
        idx[q++] = a; idx[q++] = b; idx[q++] = c;
        idx[q++] = b; idx[q++] = d; idx[q++] = c;
      }
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
    geo.setIndex(new THREE.BufferAttribute(idx, 1));
    // 把省网格的河床掩码抽稀到本块顶点，着色时河床不涂成水色
    if (carveMaskProv) {
      const cut = new Uint8Array(count);
      for (let j = j0, jj = 0; j <= j1; j += STEP, jj++) {
        for (let i = i0, ii = 0; i <= i1; i += STEP, ii++) cut[jj * w + ii] = carveMaskProv[j * NX + i];
      }
      geo.userData.cutMask = cut;
    }
    geo.computeVertexNormals();
    geo.computeBoundingSphere();

    const mat = new THREE.MeshStandardMaterial({
      vertexColors: true, roughness: 0.97, metalness: 0.02, dithering: true
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.receiveShadow = true;
    mesh.frustumCulled = true;
    mesh.name = 'terrain-chunk-' + ci + '-' + cj;
    sceneRef.add(mesh);
    const tmp = [0, 0, 0];
    computeColors(geo, elev);
    chunks.push({ mesh: geo, obj: mesh, elev: elev });
  }

  function rebuildHeights() {
    // 垂直夸张变化 → 重写顶点 y
    for (let c = 0; c < chunks.length; c++) {
      const ch = chunks[c];
      const pos = ch.mesh.getAttribute('position');
      const pa = pos.array;
      const n = ch.elev.length;
      for (let k = 0; k < n; k++) pa[k * 3 + 1] = toUnits(ch.elev[k]);
      pos.needsUpdate = true;
      ch.mesh.computeVertexNormals();
      ch.mesh.computeBoundingSphere();
    }
    for (const id in patches) {
      const pt = patches[id];
      const pos = pt.geo.getAttribute('position');
      const pa = pos.array;
      for (let k = 0; k < pt.elev.length; k++) pa[k * 3 + 1] = toUnits(pt.elev[k]) + 0.03;
      pos.needsUpdate = true;
      pt.geo.computeVertexNormals();
      pt.geo.computeBoundingSphere();
    }
  }

  /* ---------------------------- 海岸线 ---------------------------- */
  function buildCoast(level) {
    const nx = NX, nz = NZ;
    const segs = [];
    const lonPer = (MAP.lon1 - MAP.lon0) / (nx - 1);
    const latPer = (MAP.lat1 - MAP.lat0) / (nz - 1);
    for (let j = 0; j < nz - 1; j++) {
      const lat0 = MAP.lat0 + latPer * j;
      for (let i = 0; i < nx - 1; i++) {
        const k = j * nx + i;
        const h00 = heights[k], h10 = heights[k + 1], h01 = heights[k + nx], h11 = heights[k + nx + 1];
        const v0 = h00 - level, v1 = h10 - level, v2 = h11 - level, v3 = h01 - level;
        if ((v0 > 0) === (v1 > 0) && (v1 > 0) === (v2 > 0) && (v2 > 0) === (v3 > 0)) continue;
        const lonA = MAP.lon0 + lonPer * i, lonB = lonA + lonPer;
        const latA = lat0, latB = lat0 + latPer;
        const pts = [];
        // 边 0: (i,j)->(i+1,j)  纵向不延伸
        if ((v0 > 0) !== (v1 > 0)) {
          const t = v0 / (v0 - v1);
          pts.push([D.toX(lonA + lonPer * t), D.toZ(latA)]);
        }
        // 边 1: (i+1,j)->(i+1,j+1)
        if ((v1 > 0) !== (v2 > 0)) {
          const t = v1 / (v1 - v2);
          pts.push([D.toX(lonB), D.toZ(latA + latPer * t)]);
        }
        // 边 2: (i,j+1)->(i+1,j+1)
        if ((v3 > 0) !== (v2 > 0)) {
          const t = v3 / (v3 - v2);
          pts.push([D.toX(lonA + lonPer * t), D.toZ(latB)]);
        }
        // 边 3: (i,j)->(i,j+1)
        if ((v0 > 0) !== (v3 > 0)) {
          const t = v0 / (v0 - v3);
          pts.push([D.toX(lonA), D.toZ(latA + latPer * t)]);
        }
        if (pts.length === 2) {
          segs.push(pts[0][0], pts[0][1], pts[1][0], pts[1][1]);
        } else if (pts.length === 4) {
          // 鞍部：按中心值配对
          const vc = (v0 + v1 + v2 + v3) / 4;
          if ((vc > 0) === (v0 > 0)) {
            segs.push(pts[0][0], pts[0][1], pts[1][0], pts[1][1]);
            segs.push(pts[2][0], pts[2][1], pts[3][0], pts[3][1]);
          } else {
            segs.push(pts[0][0], pts[0][1], pts[3][0], pts[3][1]);
            segs.push(pts[1][0], pts[1][1], pts[2][0], pts[2][1]);
          }
        }
      }
    }
    return segs;
  }

  function updateCoast(force) {
    if (!coastGroup.line) return;
    if (!force && Math.abs(seaLevel - lastCoastSea) < 0.08) return;
    lastCoastSea = seaLevel;
    const segs = buildCoast(seaLevel);

    if (coastGroup.line.geometry) coastGroup.line.geometry.dispose();
    const lg = new THREE.BufferGeometry();
    // LineSegments 需要 y 与海面同高
    const arr = new Float32Array(segs.length / 2 * 3);
    for (let i = 0, j = 0; i < segs.length; i += 2, j += 3) {
      arr[j] = segs[i];
      arr[j + 1] = toUnits(seaLevel) + 0.02;
      arr[j + 2] = segs[i + 1];
    }
    lg.setAttribute('position', new THREE.BufferAttribute(arr, 3));
    coastGroup.line.geometry = lg;

    // 浅色海岸光晕（每个线段生成一条窄四边形）
    if (coastGroup.halo.geometry) coastGroup.halo.geometry.dispose();
    const nseg = segs.length / 4;
    const hpos = new Float32Array(nseg * 4 * 3);
    const hidx = new Uint32Array(nseg * 6);
    const halfW = 0.62;
    for (let s = 0; s < nseg; s++) {
      const x1 = segs[s * 4], z1 = segs[s * 4 + 1], x2 = segs[s * 4 + 2], z2 = segs[s * 4 + 3];
      let dx = x2 - x1, dz = z2 - z1;
      const l = Math.sqrt(dx * dx + dz * dz) || 1;
      const nxv = -dz / l * halfW, nzv = dx / l * halfW;
      const y = toUnits(seaLevel) + 0.035;
      const b = s * 12;
      hpos[b] = x1 + nxv; hpos[b + 1] = y; hpos[b + 2] = z1 + nzv;
      hpos[b + 3] = x1 - nxv; hpos[b + 4] = y; hpos[b + 5] = z1 - nzv;
      hpos[b + 6] = x2 + nxv; hpos[b + 7] = y; hpos[b + 8] = z2 + nzv;
      hpos[b + 9] = x2 - nxv; hpos[b + 10] = y; hpos[b + 11] = z2 - nzv;
      const o = s * 4, ii = s * 6;
      hidx[ii] = o; hidx[ii + 1] = o + 2; hidx[ii + 2] = o + 1;
      hidx[ii + 3] = o + 1; hidx[ii + 4] = o + 2; hidx[ii + 5] = o + 3;
    }
    const hg = new THREE.BufferGeometry();
    hg.setAttribute('position', new THREE.BufferAttribute(hpos, 3));
    hg.setIndex(new THREE.BufferAttribute(hidx, 1));
    coastGroup.halo.geometry = hg;
    coastGroup.halo.visible = true;
    coastGroup.line.visible = true;
  }

  /* ---------------------------- 片区高精度地形 ---------------------------- */
  function buildPatches() {
    if (!window.DEMD) return;
    const HALF = 8; // 以全局网格为单位，覆盖 16 格 ≈ 12.5 km
    for (const id in window.DEMD) {
      const pd = window.DEMD[id];
      const c = gridCoords(pd.lon0 + (pd.lon1 - pd.lon0) / 2, pd.lat0 + (pd.lat1 - pd.lat0) / 2);
      const i0 = Math.max(0, Math.min(NX - 17, Math.round(c[0]) - HALF));
      const j0 = Math.max(0, Math.min(NZ - 17, Math.round(c[1]) - HALF));
      const lonA = MAP.lon0 + (MAP.lon1 - MAP.lon0) * i0 / (NX - 1);
      const latA = MAP.lat0 + (MAP.lat1 - MAP.lat0) * j0 / (NZ - 1);
      const lonB = MAP.lon0 + (MAP.lon1 - MAP.lon0) * (i0 + 16) / (NX - 1);
      const latB = MAP.lat0 + (MAP.lat1 - MAP.lat0) * (j0 + 16) / (NZ - 1);
      const n = pd.n;
      const u = decodeU16(pd.data);
      const raw = new Float32Array(u.length);
      for (let k = 0; k < u.length; k++) raw[k] = u[k] - (DEM.meta.offset || 1000);
      const local = smoothGrid(raw, n, n, 1);

      function locAt(lon, lat) {
        const fx = (lon - pd.lon0) / (pd.lon1 - pd.lon0) * (n - 1);
        const fz = (lat - pd.lat0) / (pd.lat1 - pd.lat0) * (n - 1);
        const i = clamp(Math.floor(fx), 0, n - 2), j = clamp(Math.floor(fz), 0, n - 2);
        const tx = clamp(fx - i, 0, 1), tz = clamp(fz - j, 0, 1);
        const k = j * n + i;
        return (local[k] * (1 - tx) + local[k + 1] * tx) * (1 - tz) +
               (local[k + n] * (1 - tx) + local[k + n + 1] * tx) * tz;
      }

      const count = n * n;
      const pos = new Float32Array(count * 3);
      const col = new Float32Array(count * 3);
      const elev = new Float32Array(count);
      const idx = new Uint32Array((n - 1) * (n - 1) * 6);
      for (let j = 0; j < n; j++) {
        const lat = latA + (latB - latA) * j / (n - 1);
        for (let i = 0; i < n; i++) {
          const lon = lonA + (lonB - lonA) * i / (n - 1);
          const k = j * n + i;
          const gl = demAt(lon, lat);
          const det = locAt(lon, lat);
          const edge = Math.min(i, j, n - 1 - i, n - 1 - j) / (n - 1);
          const wgt = smoothstep(0.0, 0.13, edge);
          const h = gl + (det - gl) * wgt;
          elev[k] = h;
          pos[k * 3] = D.toX(lon);
          pos[k * 3 + 1] = toUnits(h) + 0.03;
          pos[k * 3 + 2] = D.toZ(lat);
        }
      }
      let q = 0;
      for (let j = 0; j < n - 1; j++) {
        for (let i = 0; i < n - 1; i++) {
          const a = j * n + i, b = a + 1, c2 = a + n, d = c2 + 1;
          idx[q++] = a; idx[q++] = b; idx[q++] = c2;
          idx[q++] = b; idx[q++] = d; idx[q++] = c2;
        }
      }
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
      geo.setIndex(new THREE.BufferAttribute(idx, 1));
      computeColors(geo, elev);
      geo.computeVertexNormals();
      geo.computeBoundingSphere();
      const mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.96, metalness: 0.02 });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.receiveShadow = true;
      mesh.visible = false;
      mesh.name = 'terrain-patch-' + id;
      sceneRef.add(mesh);
      patches[id] = { geo: geo, obj: mesh, elev: elev, box: [lonA, latA, lonB, latB], n: n };
    }
  }

  // 取地表高度：优先用片区高精度网格（与 patch 显示面一致），否则用全省网格
  function heightAt(lon, lat) {
    for (const id in patches) {
      const pt = patches[id];
      const b = pt.box;
      if (lon < b[0] || lon > b[2] || lat < b[1] || lat > b[3]) continue;
      const n = pt.n;
      const fx = (lon - b[0]) / (b[2] - b[0]) * (n - 1);
      const fz = (lat - b[1]) / (b[3] - b[1]) * (n - 1);
      const i = clamp(Math.floor(fx), 0, n - 2), j = clamp(Math.floor(fz), 0, n - 2);
      const tx = fx - i, tz = fz - j;
      const k = j * n + i, e = pt.elev;
      return (e[k] * (1 - tx) + e[k + 1] * tx) * (1 - tz) + (e[k + n] * (1 - tx) + e[k + n + 1] * tx) * tz;
    }
    return demAt(lon, lat);
  }

  // 校验用：当前「可见」地表高程（米）。片区可见时取 patch，否则取省网格渲染顶点（STEP=2）插值。
  function heightAtRendered(lon, lat) {
    for (const id in patches) {
      const pt = patches[id];
      if (!pt.obj.visible) continue;
      const b = pt.box;
      if (lon < b[0] || lon > b[2] || lat < b[1] || lat > b[3]) continue;
      const n = pt.n;
      const fx = (lon - b[0]) / (b[2] - b[0]) * (n - 1);
      const fz = (lat - b[1]) / (b[3] - b[1]) * (n - 1);
      const i = clamp(Math.floor(fx), 0, n - 2), j = clamp(Math.floor(fz), 0, n - 2);
      const tx = clamp(fx - i, 0, 1), tz = clamp(fz - j, 0, 1);
      const k = j * n + i, e = pt.elev;
      return (e[k] * (1 - tx) + e[k + 1] * tx) * (1 - tz) + (e[k + n] * (1 - tx) + e[k + n + 1] * tx) * tz;
    }
    const fx = (lon - MAP.lon0) / (MAP.lon1 - MAP.lon0) * (NX - 1);
    const fz = (lat - MAP.lat0) / (MAP.lat1 - MAP.lat0) * (NZ - 1);
    const gi = clamp(Math.floor(fx / STEP) * STEP, 0, NX - 1 - STEP);
    const gj = clamp(Math.floor(fz / STEP) * STEP, 0, NZ - 1 - STEP);
    const tx = clamp((fx - gi) / STEP, 0, 1), tz = clamp((fz - gj) / STEP, 0, 1);
    const k = gj * NX + gi;
    return (heights[k] * (1 - tx) + heights[k + 1] * tx) * (1 - tz) +
           (heights[k + NX] * (1 - tx) + heights[k + NX + 1] * tx) * tz;
  }

  /* ---------------------------- 河道下切（阶段 5） ---------------------------- */
  // 目的：宽河在 0.75 km / 1.56 km 网格上不再落到单侧低岸、不再偏窄。
  // 做法：沿线把河床切到水面以下 depth 米（|d| <= half），half 之外用 shoulder 米过渡回原地形；
  //      水面高程 W 取影响带内 DEM 最低点（不高于任一岸），入海口钉在 0 m。
  // 省网格渲染时按 STEP=2 采样（顶点间距 1.56 km），因此河床最小半宽取 850 m：
  // 保证每个靠近河心的渲染顶点都落在床底（否则插值面会高过水面，河又被埋回地里）。
  // 过渡带放宽到 1.2 km，让「深窄河槽 + 陡壁」变成缓坡河谷，避免近景出现平台边缘。
  // 片区 patch（60 m 网格）按真实河宽切，过渡带只留 180 m，保留真实岸坡。
  const CUT_DEPTH_K = 0.012, CUT_DEPTH_MIN = 2.5, CUT_DEPTH_MAX = 10;
  const CUT_SHOULDER_K = 0.4, CUT_SHOULDER_MIN = 180;
  const CUT_PROVINCE_MIN_HALF = 850;    // 米，>= 省网格渲染半格（780 m）
  const CUT_PROVINCE_SHOULDER_K = 1.2, CUT_PROVINCE_SHOULDER_MIN = 1200;
  const CUT_PROVINCE_MIN_WIDTH = 200;   // 只切 200 m 以上的河，细溪不切
  const CUT_WL_MIN_SEARCH = 900;        // 水面高程采样窗口，跨过 0.75 km DEM 一格以上
  const CUT_ENABLED = location.search.indexOf('cut=0') < 0;

  let carveInfo = { provinceNodes: 0, provinceDrop: 0, patchNodes: 0, patchDrop: 0, segs: 0, rivers: 0 };
  let carveMaskProv = null;             // 省网格河床掩码，供着色使用

  // 逐点水面高程 W：在影响带内沿法线取低点（0.75 km DEM 解不出窄河谷，
  // 只取两岸会把山坡当水面，导致山间河流浮空几十米）。
  // 采样窗口至少跨 0.9 km（DEM 一格），取最低值 ≈ 河床 thalweg；再沿河 3 点平均去噪。
  function computeRiverWaterLevels() {
    const data = window.OSMR;
    if (!data) return;
    for (let r = 0; r < data.length; r++) {
      const rv = data[r], p = rv.p, n = p.length / 2;
      if (n < 2) continue;
      const half = (rv.w || 90) / 2;
      // 未下切的细河也取 0.9 km 窗口最低点：水面落在谷底，省视图里可能被粗网格
      // 局部遮住（100 m 溪在 1.56 km 网格上本来就只剩 1 px），但在片区 patch 里
      // 它们同样会被下切，近景不受影响。
      const search = Math.max(half, CUT_WL_MIN_SEARCH);
      const wl = new Float32Array(n);
      for (let i = 0; i < n; i++) {
        const lon = p[i * 2], lat = p[i * 2 + 1];
        let dx, dz;
        if (i === 0) { dx = D.toX(p[2]) - D.toX(lon); dz = D.toZ(p[3]) - D.toZ(lat); }
        else if (i === n - 1) { dx = D.toX(lon) - D.toX(p[i * 2 - 2]); dz = D.toZ(lat) - D.toZ(p[i * 2 - 1]); }
        else { dx = D.toX(p[i * 2 + 2]) - D.toX(p[i * 2 - 2]); dz = D.toZ(p[i * 2 + 3]) - D.toZ(p[i * 2 - 1]); }
        const len = Math.sqrt(dx * dx + dz * dz) || 1;
        const nx = -dz / len, nz = dx / len;
        let w0 = Infinity;
        const offs = [0, half * 0.4, -half * 0.4, half, -half, search, -search];
        for (let q = 0; q < offs.length; q++) {
          const o = offs[q];
          const dLon = nx * (o / 1000) / MAP.kmPerLon, dLat = -nz * (o / 1000) / MAP.kmPerLat;
          const h = heightAt(lon + dLon, lat + dLat);
          if (h < w0) w0 = h;
        }
        // 口门水面抬到 0.9 m：与海面（0 m）留出间隙，避免共面 z-fighting 和海面灌槽
        if (!(w0 > 0.9)) w0 = 0.9;
        wl[i] = w0;
      }
      // 沿河 3 点平均去噪，但不允许高过本点原始低值（避免把水面抬到岸上）
      const sm = new Float32Array(n);
      for (let i = 0; i < n; i++) {
        const a = wl[i > 0 ? i - 1 : i], b = wl[i < n - 1 ? i + 1 : i];
        sm[i] = Math.min(wl[i], (a + wl[i] + b) / 3);
      }
      rv.wl = sm;
      carveInfo.rivers++;
    }
  }

  // 在任意规则网格上按河宽下切；lonA..lonB / latA..latB 为该网格的范围
  // mask（可选）：记录被下切的顶点，供着色阶段区分河床与陆地
  function carveField(elev, nx, nz, lonA, lonB, latA, latB, isProvince, mask) {
    const data = window.OSMR;
    if (!data) return;
    const mLon = 96, mLat = 111;   // km/度
    const tag = isProvince ? 'provinceNodes' : 'patchNodes';
    const tagDrop = isProvince ? 'provinceDrop' : 'patchDrop';
    let touched = 0, drop = 0;

    for (let r = 0; r < data.length; r++) {
      const rv = data[r], p = rv.p, n = p.length / 2, wl = rv.wl;
      if (!wl || n < 2) continue;
      const width = rv.w || 90;
      const depth = clamp(width * CUT_DEPTH_K, CUT_DEPTH_MIN, CUT_DEPTH_MAX);
      const half = isProvince ? Math.max(width / 2, CUT_PROVINCE_MIN_HALF) : width / 2;
      const shoulder = isProvince
        ? Math.max(width * CUT_PROVINCE_SHOULDER_K, CUT_PROVINCE_SHOULDER_MIN)
        : Math.max(width * CUT_SHOULDER_K, CUT_SHOULDER_MIN);
      if (isProvince && width < CUT_PROVINCE_MIN_WIDTH) continue;

      for (let i = 0; i < n - 1; i++) {
        const W0 = wl[i], W1 = wl[i + 1];
        if (W0 < 0.6 && W1 < 0.6) continue;
        const ax = p[i * 2], ay = p[i * 2 + 1], bx = p[i * 2 + 2], by = p[i * 2 + 3];
        const padLon = (half + shoulder) / 1000 / mLon;
        const padLat = (half + shoulder) / 1000 / mLat;
        const lonMin = Math.min(ax, bx) - padLon, lonMax = Math.max(ax, bx) + padLon;
        const latMin = Math.min(ay, by) - padLat, latMax = Math.max(ay, by) + padLat;
        if (latMax < latA || latMin > latB || lonMax < lonA || lonMin > lonB) continue;

        const i0 = Math.max(0, Math.floor((lonMin - lonA) / (lonB - lonA) * (nx - 1)));
        const i1 = Math.min(nx - 1, Math.ceil((lonMax - lonA) / (lonB - lonA) * (nx - 1)));
        const j0 = Math.max(0, Math.floor((latMin - latA) / (latB - latA) * (nz - 1)));
        const j1 = Math.min(nz - 1, Math.ceil((latMax - latA) / (latB - latA) * (nz - 1)));

        const ux = (bx - ax) * mLon, uy = (by - ay) * mLat;
        const len2 = ux * ux + uy * uy || 1e-9;
        const reach = half + shoulder;

        for (let j = j0; j <= j1; j++) {
          const lat = latA + (latB - latA) * j / (nz - 1);
          const py = (lat - ay) * mLat;
          for (let i2 = i0; i2 <= i1; i2++) {
            const k = j * nx + i2;
            const h0 = elev[k];
            const px = ((lonA + (lonB - lonA) * i2 / (nx - 1)) - ax) * mLon;
            let t = (px * ux + py * uy) / len2;
            if (t < 0) t = 0; else if (t > 1) t = 1;
            const qx = ux * t, qy = uy * t;
            let d = Math.sqrt((px - qx) * (px - qx) + (py - qy) * (py - qy)) * 1000;
            if (d > reach) continue;
            const W = W0 + (W1 - W0) * t;
            if (W < 0.6) continue;
            const bed = W - depth;
            let target;
            if (d <= half) target = bed;
            else {
              const s = (d - half) / shoulder;
              target = bed + (h0 - bed) * s;
            }
            if (target < -20) target = -20;
            // 河床不切到海平面以下：否则海面（y=0 的大平面）会顺着河槽灌进来，
            // 在河口附近把 0.6 km 的江面渲染成 1.7–2.4 km 宽的「蓝色平台」。
            if (target < seaLevel + 0.25) target = seaLevel + 0.25;
            if (target < h0) {
              drop += h0 - target;
              elev[k] = target;
              if (mask) mask[k] = 1;
              touched++;
            }
          }
        }
      }
    }
    carveInfo[tag] += touched;
    carveInfo[tagDrop] += drop;
  }

  function refreshPatchGeometry(pt) {
    const pos = pt.geo.getAttribute('position');
    const pa = pos.array;
    for (let k = 0; k < pt.elev.length; k++) {
      // 河床顶点不抬 3 m（抬升量是 patch 压在省网格之上的防 z-fighting 偏移），
      // 否则窄河的 2.5 m 下切会被抬高，水面重新被埋进地里。
      const lift = (pt.cutMask && pt.cutMask[k]) ? 0.006 : 0.03;
      pa[k * 3 + 1] = toUnits(pt.elev[k]) + lift;
    }
    pos.needsUpdate = true;
    computeColors(pt.geo, pt.elev);
    pt.geo.computeVertexNormals();
    pt.geo.computeBoundingSphere();
  }

  function carveRivers() {
    if (!window.OSMR || !window.OSMR.length) return;
    computeRiverWaterLevels();
    if (!CUT_ENABLED) {
      carveInfo.enabled = false;
      window.__ATLAS_CARVE__ = carveInfo;
      return;
    }
    carveInfo.enabled = true;
    carveMaskProv = new Uint8Array(NX * NZ);
    carveField(heights, NX, NZ, MAP.lon0, MAP.lon1, MAP.lat0, MAP.lat1, true, carveMaskProv);
    for (const id in patches) {
      const pt = patches[id];
      pt.cutMask = new Uint8Array(pt.n * pt.n);
      carveField(pt.elev, pt.n, pt.n, pt.box[0], pt.box[2], pt.box[1], pt.box[3], false, pt.cutMask);
      pt.geo.userData.cutMask = pt.cutMask;
      refreshPatchGeometry(pt);
    }
    carveInfo.segs = window.OSMR.length;
    if (carveInfo.provinceNodes) {
      carveInfo.provinceAvgDrop = carveInfo.provinceDrop / carveInfo.provinceNodes;
    }
    if (carveInfo.patchNodes) {
      carveInfo.patchAvgDrop = carveInfo.patchDrop / carveInfo.patchNodes;
    }
    window.__ATLAS_CARVE__ = carveInfo;
  }

  function colorPatches() {
    for (const id in patches) {
      const pt = patches[id];
      computeColors(pt.geo, pt.elev);
    }
  }

  /* ---------------------------- 创建 ---------------------------- */
  function create(scene) {
    sceneRef = scene;
    initGrid();
    // 先建片区 patch（用未下切的粗网格做边缘混合），再统一下切河床，最后建省网格分块。
    // 这样省网格与 patch 都吃到同一条河道，水面不会一边悬空、一边被埋。
    buildPatches();
    carveRivers();

    for (let cj = 0; cj < CZ; cj++) for (let ci = 0; ci < CX; ci++) buildChunk(ci, cj);

    // 海岸线（线 + 光晕）
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x8fc4cc, transparent: true, opacity: 0.55, depthWrite: false
    });
    const line = new THREE.LineSegments(new THREE.BufferGeometry(), lineMat);
    line.frustumCulled = false;
    line.renderOrder = 3;
    scene.add(line);

    const haloMat = new THREE.MeshBasicMaterial({
      color: 0x86c3cd, transparent: true, opacity: 0.16, depthWrite: false, side: THREE.DoubleSide
    });
    const halo = new THREE.Mesh(new THREE.BufferGeometry(), haloMat);
    halo.frustumCulled = false;
    halo.renderOrder = 2;
    scene.add(halo);

    coastGroup.line = line;
    coastGroup.halo = halo;

    // 海面
    const seaMat = new THREE.ShaderMaterial({
      uniforms: { uTime: { value: 0 }, uDeep: { value: new THREE.Color(0x021018) }, uShal: { value: new THREE.Color(0x0d4250) } },
      transparent: true,
      depthWrite: true,
      vertexShader:
        'varying vec3 vW;' +
        'void main(){ vW=(modelMatrix*vec4(position,1.0)).xyz; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }',
      fragmentShader:
        'uniform float uTime; uniform vec3 uDeep; uniform vec3 uShal; varying vec3 vW;' +
        'void main(){' +
        '  float a=sin(vW.x*0.031+uTime*0.30);' +
        '  float b=sin(vW.z*0.038-uTime*0.24);' +
        '  float c=sin((vW.x+vW.z)*0.012+uTime*0.12);' +
        '  float w=a*b*0.5+c*0.5;' +
        '  vec3 col=mix(uDeep,uShal,0.30+0.20*w);' +
        '  gl_FragColor=vec4(col,0.93);' +
        '}'
    });
    const sea = new THREE.Mesh(new THREE.PlaneGeometry(1900, 1900, 1, 1), seaMat);
    sea.rotation.x = -Math.PI / 2;
    sea.position.y = 0;
    sea.name = 'sea';
    sea.renderOrder = 1;
    scene.add(sea);

    updateCoast(true);

    let lastSeaApplied = -999;

    function apply(p) {
      const s = (p && p.sea != null) ? p.sea : 0;
      if (Math.abs(s - seaLevel) < 0.004 && lastSeaApplied > -900) return;
      seaLevel = s;
      lastSeaApplied = s;
      sea.position.y = toUnits(s);
      for (let c = 0; c < chunks.length; c++) computeColors(chunks[c].mesh, chunks[c].elev);
      colorPatches();
      updateCoast(false);
    }

    function sampleY(x, z) {
      const lon = MAP.originLon + x / MAP.kmPerLon;
      const lat = MAP.originLat - z / MAP.kmPerLat;
      return yAt(lon, lat);
    }

    function heightForPoint(lon, lat) {
      return yAt(lon, lat);
    }

    function setDistrict(id, on) {
      const pt = patches[id];
      if (pt) pt.obj.visible = !!on;
    }

    function setVerticalExaggeration(v) {
      VE = v;
      rebuildHeights();
      for (let c = 0; c < chunks.length; c++) computeColors(chunks[c].mesh, chunks[c].elev);
      colorPatches();
      updateCoast(true);
    }

    return {
      chunks, patches, sea, apply, sampleY, heightForPoint, setDistrict, setVerticalExaggeration,
      getVE: function () { return VE; },
      getSeaLevel: function () { return seaLevel; },
      isLand: function (lon, lat, p) {
        const s = p && p.sea != null ? p.sea : 0;
        return demAt(lon, lat) > s;
      },
      demAt: demAt,
      demRawAt: demRawAt,
      heightAt: heightAt,
      heightAtRendered: heightAtRendered,
      carveInfo: function () { return carveInfo; },
      stats: function () {
        let tris = 0, verts = 0;
        for (let c = 0; c < chunks.length; c++) {
          verts += chunks[c].mesh.getAttribute('position').count;
          tris += chunks[c].mesh.index.count / 3;
        }
        return { verts: verts, tris: tris, chunks: chunks.length };
      }
    };
  }

  return { create, toUnits, clamp, smoothstep };
})();
