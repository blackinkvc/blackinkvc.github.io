/* =========================================================================
   真实城市三维视图（巴黎 / 悉尼共用）
   数据：window.CITY_DEM / CITY_BLD / CITY_ROADS / CITY_WATER（离线 <script> 注入）
   全部为真实 DEM + OSM 数据，不做推测性复原。
   ========================================================================= */
(function () {
  'use strict';

  const T0 = performance.now();
  window.addEventListener('error', function (e) {
    document.documentElement.setAttribute('data-js-error', String(e.message || e));
  });

  const DEM = window.CITY_DEM, RD = window.CITY_ROADS, WT = window.CITY_WATER;
  const PAGE = window.CITY_PAGE || {};
  /* 建筑数据体量最大（巴黎 11.7 MB），允许页面把它推迟到首帧之后再加载：
     PAGE.bld 给出脚本地址，city-app 会在画面上屏后自行注入。 */
  let BLD = window.CITY_BLD || null;
  if (!DEM || !RD || !WT) {
    document.getElementById('loading').textContent = '数据缺失：城市数据脚本未加载';
    return;
  }

  const M = DEM.meta;
  const CLON = (M.lon0 + M.lon1) / 2, CLAT = (M.lat0 + M.lat1) / 2;
  const KX = RD.kx, KY = RD.ky;
  /* 纵向夸张倍数（真实米 × VE）：城市总览页用 3 便于看清地形起伏；
     景点专题页用 1（真实比例），否则普通建筑会被拉成细针、挡住地标轮廓。 */
  const VE = typeof PAGE.ve === 'number' ? PAGE.ve : 3;
  const OFF = M.offset || 1000;

  /* ------------------------------ 解码 ------------------------------ */
  function b64buf(s) {
    const bin = atob(s);
    const out = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
    return out.buffer;
  }
  function i16(s) { return new Int16Array(b64buf(s)); }
  function i32(s) { return new Int32Array(b64buf(s)); }

  const NX = M.nx, NZ = M.nz;
  const u16 = new Uint16Array(b64buf(DEM.data));
  const heights = new Float32Array(NX * NZ);
  for (let k = 0; k < heights.length; k++) heights[k] = u16[k] - OFF;
  const wbits = new Uint8Array(b64buf(DEM.water));
  const ubits = DEM.urban ? new Uint8Array(b64buf(DEM.urban)) : null;
  function isWater(i, j) { const k = j * NX + i; return (wbits[k >> 3] >> (k & 7)) & 1; }
  function isUrban(i, j) { const k = j * NX + i; return ubits ? (ubits[k >> 3] >> (k & 7)) & 1 : 0; }

  function hAt(lon, lat) {
    let fi = (lon - M.lon0) / (M.lon1 - M.lon0) * (NX - 1);
    let fj = (lat - M.lat0) / (M.lat1 - M.lat0) * (NZ - 1);
    fi = Math.max(0, Math.min(NX - 1.0001, fi));
    fj = Math.max(0, Math.min(NZ - 1.0001, fj));
    const i = Math.floor(fi), j = Math.floor(fj);
    const tx = fi - i, tz = fj - j;
    const k = j * NX + i;
    return (heights[k] * (1 - tx) + heights[k + 1] * tx) * (1 - tz) +
           (heights[k + NX] * (1 - tx) + heights[k + NX + 1] * tx) * tz;
  }
  function xOf(lon) { return (lon - CLON) * KX; }
  function zOf(lat) { return -(lat - CLAT) * KY; }

  /* ------------------------------ 场景 ------------------------------ */
  const canvas = document.getElementById('scene');
  const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
  renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
  renderer.setSize(window.innerWidth, window.innerHeight);

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x0a1117);
  scene.fog = new THREE.Fog(0x0a1117, 15000, 62000);

  const camera = new THREE.PerspectiveCamera(42, window.innerWidth / window.innerHeight, 30, 90000);

  scene.add(new THREE.HemisphereLight(0xdfe8ee, 0x2a2a22, 0.95));
  const sun = new THREE.DirectionalLight(0xffe9c8, 1.0);
  sun.position.set(-0.55, 0.78, 0.42).normalize();
  scene.add(sun);
  const fill = new THREE.DirectionalLight(0x88a8c0, 0.35);
  fill.position.set(0.6, 0.35, -0.7);
  scene.add(fill);

  const world = new THREE.Group();
  scene.add(world);

  const stats = { tris: 0, bld: 0, roads: RD.n };

  /* ------------------------------ 地形 ------------------------------ */
  function buildTerrain() {
    const pos = new Float32Array(NX * NZ * 3);
    const col = new Float32Array(NX * NZ * 3);
    const idx = new Uint32Array((NX - 1) * (NZ - 1) * 6);
    const xs = new Float32Array(NX), zs = new Float32Array(NZ);
    for (let i = 0; i < NX; i++) xs[i] = xOf(M.lon0 + (M.lon1 - M.lon0) * i / (NX - 1));
    for (let j = 0; j < NZ; j++) zs[j] = zOf(M.lat0 + (M.lat1 - M.lat0) * j / (NZ - 1));

    // 高程配色：城市低地偏灰绿，高处转褐；水体按掩码涂冷色
    const RAMP = [
      [-30, 0.050, 0.095, 0.120],
      [0, 0.100, 0.122, 0.108],
      [6, 0.118, 0.135, 0.112],
      [25, 0.132, 0.145, 0.116],
      [60, 0.152, 0.158, 0.124],
      [110, 0.196, 0.190, 0.146],
      [180, 0.252, 0.232, 0.172],
      [320, 0.330, 0.292, 0.222]
    ];
    function ramp(h, out) {
      if (h <= RAMP[0][0]) { out[0] = RAMP[0][1]; out[1] = RAMP[0][2]; out[2] = RAMP[0][3]; return; }
      for (let r = 1; r < RAMP.length; r++) {
        if (h <= RAMP[r][0]) {
          const a = RAMP[r - 1], b = RAMP[r];
          const f = (h - a[0]) / (b[0] - a[0]);
          out[0] = a[1] + (b[1] - a[1]) * f;
          out[1] = a[2] + (b[2] - a[2]) * f;
          out[2] = a[3] + (b[3] - a[3]) * f;
          return;
        }
      }
      const l = RAMP[RAMP.length - 1];
      out[0] = l[1]; out[1] = l[2]; out[2] = l[3];
    }
    const c = [0, 0, 0];
    for (let j = 0; j < NZ; j++) {
      for (let i = 0; i < NX; i++) {
        const k = j * NX + i;
        const h = heights[k];
        pos[k * 3] = xs[i];
        pos[k * 3 + 1] = h * VE;
        pos[k * 3 + 2] = zs[j];
        ramp(h, c);
        // 坡度明暗：东西向差分
        const hx = heights[j * NX + Math.min(NX - 1, i + 1)] - heights[j * NX + Math.max(0, i - 1)];
        const sh = Math.max(-0.35, Math.min(0.35, hx / 60));
        let r = c[0] * (1 + sh), g = c[1] * (1 + sh), b = c[2] * (1 + sh);
        if (isWater(i, j)) { r = 0.050; g = 0.130; b = 0.175; }
        else if (isUrban(i, j)) {
          // 城市地面：向中性灰靠拢，避免建筑像铺在草地上
          const u = 0.62;
          r = r * (1 - u) + 0.215 * u;
          g = g * (1 - u) + 0.208 * u;
          b = b * (1 - u) + 0.190 * u;
        }
        col[k * 3] = r; col[k * 3 + 1] = g; col[k * 3 + 2] = b;
      }
    }
    let q = 0;
    for (let j = 0; j < NZ - 1; j++) {
      for (let i = 0; i < NX - 1; i++) {
        const a = j * NX + i, b = a + 1, d = a + NX, e = d + 1;
        // z 随 j 增大而减小 → 用 (a,b,d)/(b,e,d) 得到朝上的面
        idx[q++] = a; idx[q++] = b; idx[q++] = d;
        idx[q++] = b; idx[q++] = e; idx[q++] = d;
      }
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    g.setAttribute('color', new THREE.BufferAttribute(col, 3));
    g.setIndex(new THREE.BufferAttribute(idx, 1));
    g.computeVertexNormals();
    const m = new THREE.MeshPhongMaterial({ vertexColors: true, shininess: 4, specular: 0x101010 });
    const mesh = new THREE.Mesh(g, m);
    mesh.receiveShadow = false;
    world.add(mesh);
    stats.tris += idx.length / 3;
  }

  /* ------------------------------ 海面 ------------------------------ */
  /* OSM 的海岸线是线要素，构不成水面多边形。沿海城市直接用一张高程平面兜住
     DEM 中低于海平面的区域，海岸线由真实地形决定。 */
  function buildSea() {
    if (typeof PAGE.seaLevel !== 'number') return;
    const x0 = xOf(M.lon0), x1 = xOf(M.lon1);
    const z0 = zOf(M.lat1), z1 = zOf(M.lat0);
    const g = new THREE.PlaneGeometry(x1 - x0, z1 - z0);
    g.rotateX(-Math.PI / 2);
    const mesh = new THREE.Mesh(g, new THREE.MeshLambertMaterial({ color: 0x15384a }));
    mesh.position.set((x0 + x1) / 2, PAGE.seaLevel * VE, (z0 + z1) / 2);
    world.add(mesh);
  }

  /* ------------------------------ 水体 ------------------------------ */
  function buildWater() {
    const surface = 0.8;                 // 水面高出 DEM 的米数（避免 z-fighting）
    const posArr = [], idxArr = [];
    const vert = (xi, zi) => {
      const lon = CLON + xi / 2 / KX, lat = CLAT - zi / 2 / KY;
      posArr.push(xi / 2, (hAt(lon, lat) + surface) * VE, zi / 2);
    };
    for (const poly of WT.polys) {
      const base = posArr.length / 3;
      const outer = [];
      for (let i = 0; i < poly.o.length; i += 2) {
        outer.push(new THREE.Vector2(poly.o[i] / 2, poly.o[i + 1] / 2));
        vert(poly.o[i], poly.o[i + 1]);
      }
      const holes = (poly.h || []).map(hr => {
        const ring = [];
        for (let i = 0; i < hr.length; i += 2) {
          ring.push(new THREE.Vector2(hr[i] / 2, hr[i + 1] / 2));
          vert(hr[i], hr[i + 1]);
        }
        return ring;
      });
      let tris = [];
      try { tris = THREE.ShapeUtils.triangulateShape(outer, holes); } catch (e) { tris = []; }
      for (const t of tris) idxArr.push(base + t[0], base + t[1], base + t[2]);
    }
    if (!idxArr.length) return;
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(posArr, 3));
    g.setIndex(idxArr);
    g.computeVertexNormals();
    // 水面用无高光的 Lambert：Phong 的高光在大片水面上会过曝成发光线带
    const mat = new THREE.MeshLambertMaterial({
      color: 0x173c4b,
      transparent: true, opacity: 0.95, side: THREE.DoubleSide,
      polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2
    });
    world.add(new THREE.Mesh(g, mat));
    stats.tris += idxArr.length / 3;
  }

  /* ------------------------------ 道路 ------------------------------ */
  function buildRoads() {
    const v = i16(RD.v), m = i32(RD.m);
    const widths = RD.cls || [26, 20, 14, 9, 6];
    const CLS_COL = [
      [0.62, 0.60, 0.54], [0.55, 0.53, 0.48], [0.48, 0.46, 0.42],
      [0.40, 0.39, 0.36], [0.36, 0.35, 0.33]
    ];
    const pos = [], col = [], idx = [];
    let vertBase = 0;
    for (let w = 0; w < m.length; w += 3) {
      const off = m[w], n = m[w + 1], cls = m[w + 2];
      const hw = (widths[cls] || 8) / 2;
      const c = CLS_COL[cls] || CLS_COL[3];
      let prevL = null, prevR = null;
      for (let s = 0; s < n - 1; s++) {
        const ax = v[(off + s) * 2] / 2, az = v[(off + s) * 2 + 1] / 2;
        const bx = v[(off + s + 1) * 2] / 2, bz = v[(off + s + 1) * 2 + 1] / 2;
        const dx = bx - ax, dz = bz - az;
        const len = Math.hypot(dx, dz);
        if (len < 0.4) continue;
        const nx = -dz / len * hw, nz = dx / len * hw;
        // 端点外扩，避免折角缺口
        const ex = dx / len * hw * 0.6, ez = dz / len * hw * 0.6;
        const p = [
          [ax - ex + nx, az - ez + nz], [ax - ex - nx, az - ez - nz],
          [bx + ex + nx, bz + ez + nz], [bx + ex - nx, bz + ez - nz]
        ];
        const yrs = p.map(q => (hAt(CLON + q[0] / KX, CLAT - q[1] / KY) + 0.9) * VE);
        for (let t = 0; t < 4; t++) {
          pos.push(p[t][0], yrs[t], p[t][1]);
          col.push(c[0], c[1], c[2]);
        }
        idx.push(vertBase, vertBase + 1, vertBase + 2, vertBase + 1, vertBase + 3, vertBase + 2);
        vertBase += 4;
        prevL = prevR = null;
      }
    }
    // 铁路：细线
    const rv = RD.rv ? i16(RD.rv) : null;
    let railBase = vertBase;
    if (rv && rv.length) {
      const hw = (RD.railW || 3) / 2;
      for (let s = 0; s + 3 < rv.length; s += 4) {
        const ax = rv[s] / 2, az = rv[s + 1] / 2, bx = rv[s + 2] / 2, bz = rv[s + 3] / 2;
        const len = Math.hypot(bx - ax, bz - az);
        if (len < 0.5) continue;
        const nx = -(bz - az) / len * hw, nz = (bx - ax) / len * hw;
        const p = [[ax + nx, az + nz], [ax - nx, az - nz], [bx + nx, bz + nz], [bx - nx, bz - nz]];
        const yrs = p.map(q => (hAt(CLON + q[0] / KX, CLAT - q[1] / KY) + 0.8) * VE);
        for (let t = 0; t < 4; t++) {
          pos.push(p[t][0], yrs[t], p[t][1]);
          col.push(0.30, 0.27, 0.24);
        }
        idx.push(railBase, railBase + 1, railBase + 2, railBase + 1, railBase + 3, railBase + 2);
        railBase += 4;
      }
    }
    if (!idx.length) return;
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
    g.setIndex(idx);
    const mat = new THREE.MeshBasicMaterial({
      vertexColors: true, polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -6,
      side: THREE.DoubleSide
    });
    world.add(new THREE.Mesh(g, mat));
    stats.tris += idx.length / 3;
  }

  /* ------------------------------ 建筑 ------------------------------ */
  /* 183k 栋建筑一次性建完会形成 1 秒级长任务，把首帧堵死。
     解码只做一次，几何按 features 区间分块构建，块间让出主线程。 */
  let BL = null;
  function prepBuildings() {
    if (!BLD) return false;
    BL = { v: i16(BLD.v), m: i32(BLD.m) };
    window.CITY_BLD = null;          // 释放 11.7 MB 的 base64 字符串
    BLD = null;
    return true;
  }
  function buildBuildings(from, to) {
    if (!BL) return 0;
    const v = BL.v, m = BL.m;
    /* 景点专题页：OSM 里同一栋地标的简易体块会和精细模型重叠，按 clear 半径剔除 */
    const CLEAR = (window.CITY_LANDMARKS || [])
      .filter(function (l) { return l.clear > 0; })
      .map(function (l) { return { x: xOf(l.lon), z: zOf(l.lat), r: l.clear }; });
    const wall = { pos: [], nor: [], idx: [] };
    const roof = { pos: [], nor: [], idx: [] };
    let wBase = 0, rBase = 0;
    let rendered = 0;
    const cap = 560;   // 高度上限（米），防止异常标签把地块拉飞

    for (let e = from; e < to; e += 3) {
      const off = m[e], nv = m[e + 1], hs = m[e + 2];
      const h = Math.min(cap, Math.abs(hs) / 2);
      let sx = 0, sz = 0;
      for (let i = 0; i < nv; i++) { sx += v[(off + i) * 2]; sz += v[(off + i) * 2 + 1]; }
      sx /= nv * 2; sz /= nv * 2;                   // 中心（米）
      if (CLEAR.length) {
        let hit = false;
        for (let ci = 0; ci < CLEAR.length; ci++) {
          const c = CLEAR[ci];
          if ((sx - c.x) * (sx - c.x) + (sz - c.z) * (sz - c.z) < c.r * c.r) { hit = true; break; }
        }
        if (hit) continue;
      }
      const baseY = (hAt(CLON + sx / KX, CLAT - sz / KY) - 1.0) * VE;
      const topY = baseY + h * VE;
      // 墙：底环 + 顶环（每点两个顶点）
      for (let i = 0; i < nv; i++) {
        const x = v[(off + i) * 2] / 2, z = v[(off + i) * 2 + 1] / 2;
        wall.pos.push(x, baseY, z, x, topY, z);
        // 该点两侧边的法线平均（水平面内）
        const px = v[(off + (i - 1 + nv) % nv) * 2] / 2, pz = v[(off + (i - 1 + nv) % nv) * 2 + 1] / 2;
        const nx2 = v[(off + (i + 1) % nv) * 2] / 2, nz2 = v[(off + (i + 1) % nv) * 2 + 1] / 2;
        let ax = x - px, az = z - pz, bx = nx2 - x, bz = nz2 - z;
        let la = Math.hypot(ax, az) || 1, lb = Math.hypot(bx, bz) || 1;
        let nnx = az / la + bz / lb, nnz = -ax / la - bx / lb;
        const ln = Math.hypot(nnx, nnz) || 1;
        wall.nor.push(nnx / ln, 0, nnz / ln, nnx / ln, 0, nnz / ln);
      }
      for (let i = 0; i < nv; i++) {
        const a = wBase + i * 2, b = a + 1;
        const c = wBase + ((i + 1) % nv) * 2, d = c + 1;
        wall.idx.push(a, c, b, b, c, d);
      }
      wBase += nv * 2;
      // 屋顶：中心点 + 环，扇形
      roof.pos.push(sx, topY, sz);
      roof.nor.push(0, 1, 0);
      for (let i = 0; i < nv; i++) {
        roof.pos.push(v[(off + i) * 2] / 2, topY, v[(off + i) * 2 + 1] / 2);
        roof.nor.push(0, 1, 0);
      }
      for (let i = 0; i < nv; i++) {
        roof.idx.push(rBase, rBase + 1 + i, rBase + 1 + (i + 1) % nv);
      }
      rBase += nv + 1;
      rendered++;
    }

    function mesh(d, color, spec) {
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.Float32BufferAttribute(d.pos, 3));
      g.setAttribute('normal', new THREE.Float32BufferAttribute(d.nor, 3));
      g.setIndex(d.idx);
      const mat = new THREE.MeshPhongMaterial({ color: color, shininess: 6, specular: spec });
      world.add(new THREE.Mesh(g, mat));
      stats.tris += d.idx.length / 3;
    }
    mesh(wall, 0x8e857a, 0x151515);
    mesh(roof, 0x555049, 0x101010);
    stats.bld += rendered;
    return rendered;
  }

  /* ------------------------------ 相机 ------------------------------ */
  const cam = { az: Math.PI * 0.34, pol: 0.92, dist: 10500, tx: 0, ty: 0, tz: 0 };
  /* 页面级默认机位（景点专题页用），URL 参数优先 */
  (function () {
    const v = PAGE.view;
    if (!v) return;
    if (v.dist) cam.dist = v.dist;
    if (typeof v.ty === 'number') cam.ty = v.ty;
    cam.az = v.az;
    cam.pol = v.pol;
    if (typeof v.lon === 'number' && typeof v.lat === 'number') {
      cam.tx = xOf(v.lon);
      cam.tz = zOf(v.lat);
    }
  })();
  /* 可选定位参数（便于截图与分享机位） */
  (function () {
    const q = new URLSearchParams(location.search);
    if (q.has('lon') && q.has('lat')) { cam.tx = xOf(parseFloat(q.get('lon'))); cam.tz = zOf(parseFloat(q.get('lat'))); }
    if (q.has('dist')) cam.dist = parseFloat(q.get('dist')) || cam.dist;
    if (q.has('az')) cam.az = parseFloat(q.get('az'));
    if (q.has('pol')) cam.pol = parseFloat(q.get('pol'));
    if (q.has('ty')) cam.ty = parseFloat(q.get('ty'));   // 目标高程（场景单位，VE=1 时即米）
  })();
  const HOME = Object.assign({}, cam);
  function applyCamera() {
    const sp = Math.sin(cam.pol);
    camera.position.set(
      cam.tx + cam.dist * sp * Math.sin(cam.az),
      cam.ty + cam.dist * Math.cos(cam.pol),
      cam.tz + cam.dist * sp * Math.cos(cam.az)
    );
    camera.lookAt(cam.tx, cam.ty, cam.tz);
  }

  let drag = null;
  canvas.addEventListener('contextmenu', e => e.preventDefault());
  canvas.addEventListener('pointerdown', e => {
    canvas.setPointerCapture(e.pointerId);
    drag = { x: e.clientX, y: e.clientY, pan: e.button === 2 || e.shiftKey };
  });
  canvas.addEventListener('pointermove', e => {
    if (!drag) return;
    const dx = e.clientX - drag.x, dy = e.clientY - drag.y;
    drag.x = e.clientX; drag.y = e.clientY;
    if (drag.pan) {
      const k = cam.dist / Math.max(320, window.innerHeight) * 1.6;
      const right = new THREE.Vector3().setFromMatrixColumn(camera.matrix, 0);
      const fwd = new THREE.Vector3(0, 0, -1).applyQuaternion(camera.quaternion);
      fwd.y = 0; fwd.normalize();
      cam.tx += (-right.x * dx + fwd.x * dy) * k;
      cam.tz += (-right.z * dx + fwd.z * dy) * k;
      const lim = 12000;
      cam.tx = Math.max(-lim, Math.min(lim, cam.tx));
      cam.tz = Math.max(-lim, Math.min(lim, cam.tz));
    } else {
      cam.az -= dx * 0.005;
      cam.pol = Math.max(0.12, Math.min(1.44, cam.pol - dy * 0.004));
    }
    applyCamera();
  });
  canvas.addEventListener('pointerup', () => { drag = null; });
  canvas.addEventListener('pointercancel', () => { drag = null; });
  canvas.addEventListener('wheel', e => {
    e.preventDefault();
    cam.dist = Math.max(420, Math.min(26000, cam.dist * Math.exp(e.deltaY * 0.0011)));
    applyCamera();
    updateScale();
  }, { passive: false });

  /* 触屏双指缩放 */
  let pinch = null;
  canvas.addEventListener('touchstart', e => {
    if (e.touches.length === 2) {
      pinch = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY);
    }
  }, { passive: true });
  canvas.addEventListener('touchmove', e => {
    if (e.touches.length === 2 && pinch) {
      const d = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY);
      cam.dist = Math.max(420, Math.min(26000, cam.dist * (pinch / Math.max(1, d))));
      pinch = d;
      applyCamera();
      updateScale();
      e.preventDefault();
    }
  }, { passive: false });
  canvas.addEventListener('touchend', () => { pinch = null; }, { passive: true });

  const btnReset = document.getElementById('btn-reset');
  if (btnReset) btnReset.addEventListener('click', () => {
    Object.assign(cam, HOME);
    applyCamera();
    updateScale();
  });

  /* ------------------------------ 比例尺 ------------------------------ */
  const scaleEl = document.getElementById('scale-text');
  const barEl = document.getElementById('scale-bar');
  function updateScale() {
    if (!scaleEl || !barEl) return;
    const h = window.innerHeight;
    const mPerPx = 2 * cam.dist * Math.tan(camera.fov * Math.PI / 360) / h;
    const target = mPerPx * 130;           // 约 130 px
    const pow = Math.pow(10, Math.floor(Math.log10(Math.max(1, target))));
    const nice = [1, 2, 5, 10].map(n => n * pow).filter(v => v <= target * 1.4).pop() || pow;
    const px = nice / mPerPx;
    barEl.style.width = Math.round(px) + 'px';
    scaleEl.textContent = nice >= 1000 ? (nice / 1000) + ' km' : nice + ' m';
  }

  /* ------------------------------ 启动 ------------------------------ */
  const de = document.documentElement;
  de.setAttribute('data-atlas-city', PAGE.id || '');
  de.setAttribute('data-atlas-ve', String(VE));

  /* 专题图层（景点等）挂载点：页面可按需加载 js/landmarks.js，
     用这里暴露的场景对象往 world 里加模型，并复用同一台相机。
     必须同步挂上，因为 landmarks.js 紧随本脚本执行。 */
  window.__ATLAS_CITY__ = {
    THREE: THREE, scene: scene, world: world, camera: camera, renderer: renderer,
    hAt: hAt, xOf: xOf, zOf: zOf, VE: VE, M: M, cam: cam,
    applyCamera: applyCamera, updateScale: updateScale, stats: stats
  };

  const statEl = document.getElementById('stat-line');
  function setStatus(t) { if (statEl) statEl.textContent = t; }

  window.addEventListener('resize', function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    updateScale();
  });

  function nextFrame() {
    return new Promise(function (res) { requestAnimationFrame(function () { res(); }); });
  }
  function loadScript(src) {
    return new Promise(function (res) {
      const s = document.createElement('script');
      s.src = src;
      s.onload = res;
      s.onerror = res;                    // 失败也要往下走，至少保留地形/水系/道路
      document.body.appendChild(s);
    });
  }

  let first = true;
  function loop() {
    requestAnimationFrame(loop);
    renderer.render(scene, camera);
    if (first) {
      /* 首帧：地形已经在场，先把画面放出来，建筑随后分块补上 */
      first = false;
      const ld = document.getElementById('loading');
      if (ld) ld.classList.add('gone');
      de.setAttribute('data-atlas-first', '1');
      de.setAttribute('data-atlas-first-ms', String(Math.round(performance.now() - T0)));
    }
  }

  function finish() {
    de.setAttribute('data-atlas-ready', '1');
    de.setAttribute('data-atlas-ready-ms', String(Math.round(performance.now() - T0)));
    de.setAttribute('data-atlas-bld', String(stats.bld));
    de.setAttribute('data-atlas-tris', String(Math.round(stats.tris)));
    setStatus(`建筑 ${stats.bld.toLocaleString()} 栋 · 三角面 ${(Math.round(stats.tris) / 10000).toFixed(0)} 万 · 高程 ${Math.round(M.minM)}–${Math.round(M.maxM)} m`);
  }

  /* 分阶段构建：地形 → 首帧 → 水系/道路 → 建筑（可延迟加载 + 分块）→ 就绪 */
  (async function boot() {
    buildTerrain();
    buildSea();
    applyCamera();
    updateScale();
    loop();

    await nextFrame();
    buildWater();
    buildRoads();
    setStatus('正在加载建筑数据…');
    await nextFrame();

    if (!BLD && PAGE.bld) {
      await loadScript(PAGE.bld);
      BLD = window.CITY_BLD || null;
    }
    if (prepBuildings()) {
      const total = BL.m.length / 3;
      const CHUNKS = 6;
      const per = Math.ceil(total / CHUNKS) * 3;
      for (let c = 0; c < CHUNKS; c++) {
        const hit = buildBuildings(c * per, Math.min(BL.m.length, (c + 1) * per));
        setStatus(`建筑 ${Math.round((c + 1) / CHUNKS * 100)}% · ${stats.bld.toLocaleString()} 栋 · 三角面 ${(Math.round(stats.tris) / 10000).toFixed(0)} 万`);
        if (hit) await nextFrame();
      }
    }
    finish();
  })();
})();