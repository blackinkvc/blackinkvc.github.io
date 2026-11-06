/* =========================================================================
   浙江 · 三维历史地图 — 主程序（真实数据版）
   地形：DEM（真实米数，可调垂直夸张）
   河网：OSM waterway（真实走向）
   建筑：OSM footprint + height（4 个片区，LOD 按需加载）
   历史层：城池 / 海塘 / 事件为史料复原，明确标注
   ========================================================================= */
(function () {
  'use strict';

  const D = window.DATA;
  const TK = window.TerrainKit;
  const BK = window.BuildingKit;
  const ERA_COUNT = D.ERAS.length;
  // 「幻想 1 号」只展示当代（最后一个时代）的推测复原状态，不再做时代切换。
  const ERA_MODERN = ERA_COUNT - 1;

  let scene, camera, renderer, canvas, terrain, clock;
  let t = ERA_MODERN;
  let raycaster, labelCache = {}, hovered = -1;
  let riverGroup = null, lakeGroup = null;
  let riverMesh = null, riverPairs = [], lastRiverDistrict = null;
  let streetGroup = null, streetMesh = null, streetVisible = true, streetPoints = 0;
  let cityObjs = [], itemObjs = [], eventObjs = [], featureLabels = [], allLabels = [];
  let openEvent = -1;
  let camAnim = null;
  let introStarted = false;
  let elapsed = 0;
  let focusedDistrict = null;
  let veValue = 10;
  // 建筑楼高专用垂直夸张：街道级降到接近 1:1 的楼高/基底比，远景仍与地形同倍。
  // 地形始终用 veValue；两者不同时在图例（#scale-note）标注。
  let bldVE = 10, lastBldVE = 10;
  // ?diag=water：强制加载全部块，统计修复前后落水建筑（不改变渲染）
  let diagWater = false;
  const waterRows = [];             // 诊断行
  let waterScan = 0;                // 诊断扫描的楼栋总数
  const waterDry = {};              // 采样点落在水体多边形内、但楼基高于水面（站在河带里的陆地建筑）
  const waterTouch = [];            // 上述建筑的明细（用于回答「为什么截图里一堆楼在江里」）
  // ?legacy=1：复现修复前的两条规则（质心单点底面、楼高与地形同倍夸张），仅用于同机位「修复前」对照
  let legacyBase = false;
  let hideBld = false;              // ?hide=bld：截图对照用，隐藏全部建筑
  let loadStart = (window.__ATLAS_T0__ || performance.now());

  const cam = { theta: 0.55, phi: 1.02, radius: 620, tx: 0, tz: 0 };

  const stats = { frames: 0, fps: 0, lastFpsTime: 0, tris: 0, drawCalls: 0 };

  /* ------------------------------------------------------------------ */
  function clamp(v, a, b) { return v < a ? a : (v > b ? b : v); }
  function lerp(a, b, f) { return a + (b - a) * f; }
  function smoothstep(a, b, x) { const s = clamp((x - a) / (b - a), 0, 1); return s * s * (3 - 2 * s); }

  function paramsAt(v) {
    const x = clamp(v, 0, ERA_COUNT - 1);
    const i = Math.min(ERA_COUNT - 2, Math.floor(x));
    const f = x - i;
    const a = D.ERAS[i].params, b = D.ERAS[i + 1].params;
    const o = {};
    ['sea', 'coast', 'lagoon', 'lake', 'estuary', 'silt', 'till'].forEach(function (k) {
      const av = a[k] == null ? 0 : a[k];
      const bv = b[k] == null ? av : b[k];
      o[k] = av + (bv - av) * f;
    });
    return o;
  }

  /* 时代接口：供「浙江历史地图」的时间轴（js/era-ui.js）调用。
     「幻想 1 号」不加载 era-ui.js，所以 t 一直停在当代。 */
  window.__ATLAS_ERA__ = {
    count: ERA_COUNT,
    eras: D.ERAS,
    get: function () { return t; },
    set: function (v) {
      t = clamp(v, 0, ERA_COUNT - 1);
      if (terrain) terrain.apply(paramsAt(t));
      if (openEvent >= 0 && Math.abs(t - D.EVENTS[openEvent].era) > 0.95) closeEventCard();
    }
  };

  function fail(msg) {
    const fb = document.getElementById('fallback');
    fb.classList.add('show');
    if (msg) document.getElementById('fallback-msg').innerHTML = msg;
    document.getElementById('intro').classList.add('hide');
  }

  /* ---------------------------- 文字标签 ---------------------------- */
  function roundRect(g, x, y, w, h, r) {
    g.beginPath();
    g.moveTo(x + r, y);
    g.arcTo(x + w, y, x + w, y + h, r);
    g.arcTo(x + w, y + h, x, y + h, r);
    g.arcTo(x, y + h, x, y, r);
    g.arcTo(x, y, x + w, y, r);
    g.closePath();
  }

  const KIND = {
    city: { size: 46, color: '#f5e2b4', plate: 0.62, weight: 620, scale: 1.0 },
    feature: { size: 34, color: '#93b1b9', plate: 0.30, weight: 500, scale: 0.72 },
    item: { size: 30, color: '#e8dfcb', plate: 0.55, weight: 500, scale: 0.66 },
    event: { size: 30, color: '#ffc98a', plate: 0.58, weight: 600, scale: 0.66 },
    district: { size: 34, color: '#f3dda9', plate: 0.70, weight: 600, scale: 0.8 }
  };

  function labelTexture(text, kindName) {
    const kind = KIND[kindName] || KIND.city;
    const key = kindName + '|' + text;
    if (labelCache[key]) return labelCache[key];
    const font = kind.weight + ' ' + kind.size + 'px "Songti SC","STSong","SimSun",serif';
    const measure = document.createElement('canvas').getContext('2d');
    measure.font = font;
    const tw = Math.ceil(measure.measureText(text).width);
    const cw = tw + 34, ch = kind.size + 30;
    const c = document.createElement('canvas');
    c.width = cw; c.height = ch;
    const g = c.getContext('2d');
    g.font = font;
    g.textAlign = 'center';
    g.textBaseline = 'middle';
    if (kind.plate > 0.05) {
      roundRect(g, 2, 4, cw - 4, ch - 8, 7);
      g.fillStyle = 'rgba(4,9,13,' + kind.plate + ')';
      g.fill();
      g.strokeStyle = 'rgba(217,185,121,0.18)';
      g.lineWidth = 1;
      g.stroke();
    }
    g.shadowColor = 'rgba(0,0,0,0.95)';
    g.shadowBlur = 8;
    g.fillStyle = kind.color;
    g.fillText(text, cw / 2, ch / 2 + 1);
    const tex = new THREE.CanvasTexture(c);
    tex.minFilter = THREE.LinearFilter;
    tex.magFilter = THREE.LinearFilter;
    tex.generateMipmaps = false;
    labelCache[key] = { tex: tex, w: cw, h: ch };
    return labelCache[key];
  }

  function makeLabel(text, kindName, scale) {
    const info = labelTexture(text, kindName);
    const mat = new THREE.SpriteMaterial({
      map: info.tex, transparent: true, depthTest: false, depthWrite: false, fog: false
    });
    const sprite = new THREE.Sprite(mat);
    const kind = KIND[kindName] || KIND.city;
    const unit = 0.105 * (scale || 1) * kind.scale;
    sprite.scale.set(info.w * unit, info.h * unit, 1);
    sprite.renderOrder = 14;
    sprite.userData.labelInfo = info;
    sprite.userData.kind = kindName;
    sprite.userData.scale = scale || 1;
    sprite.userData.base = { x: info.w * unit, y: info.h * unit };
    allLabels.push(sprite);
    return sprite;
  }

  function setLabelText(sprite, text) {
    const kindName = sprite.userData.kind || 'city';
    const info = labelTexture(text, kindName);
    if (sprite.material.map !== info.tex) {
      sprite.material.map = info.tex;
      sprite.material.needsUpdate = true;
      const unit = 0.105 * (sprite.userData.scale || 1) * (KIND[kindName] || KIND.city).scale;
      sprite.scale.set(info.w * unit, info.h * unit, 1);
      sprite.userData.base = { x: info.w * unit, y: info.h * unit };
    }
  }

  // 标签随视距缩放：保持屏幕上的字号大致恒定，避免拉近后被巨大的地名遮挡
  const _lv = new THREE.Vector3();
  function updateLabelScale() {
    for (let i = 0; i < allLabels.length; i++) {
      const s = allLabels[i];
      if (!s.visible) continue;
      s.getWorldPosition(_lv);
      const d = camera.position.distanceTo(_lv) || 1;
      const f = clamp(d / 620, 0.02, 1.4);
      const b = s.userData.base;
      if (b) s.scale.set(b.x * f, b.y * f, 1);
    }
  }

  /* ---------------------------- 场景 ---------------------------- */
  function createScene() {
    const canvasEl = document.getElementById('scene');
    canvas = canvasEl;
    renderer = new THREE.WebGLRenderer({ canvas: canvasEl, antialias: true, alpha: false, powerPreference: 'high-performance' });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.88;

    scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0a1620, 0.00058);

    camera = new THREE.PerspectiveCamera(38, window.innerWidth / window.innerHeight, 1, 6000);

    const sky = new THREE.Mesh(
      new THREE.SphereGeometry(2600, 32, 20),
      new THREE.ShaderMaterial({
        side: THREE.BackSide, depthWrite: false, fog: false,
        vertexShader: 'varying vec3 vP; void main(){ vP = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
        fragmentShader:
          'varying vec3 vP;' +
          'void main(){' +
          ' float h = normalize(vP).y;' +
          ' vec3 top = vec3(0.028,0.055,0.076);' +
          ' vec3 mid = vec3(0.070,0.118,0.140);' +
          ' vec3 low = vec3(0.012,0.022,0.030);' +
          ' vec3 c = h > 0.0 ? mix(mid, top, smoothstep(0.0,0.70,h)) : mix(low, mid, smoothstep(-0.22,0.0,h));' +
          ' gl_FragColor = vec4(c,1.0);' +
          '}'
      })
    );
    sky.frustumCulled = false;
    scene.add(sky);

    scene.add(new THREE.HemisphereLight(0x9dc2db, 0x2a231b, 0.46));
    const dir = new THREE.DirectionalLight(0xffe0b0, 0.92);
    dir.position.set(-260, 340, 200);
    scene.add(dir);
    const fill = new THREE.DirectionalLight(0x5d8ca8, 0.30);
    fill.position.set(300, 160, -260);
    scene.add(fill);
    scene.add(new THREE.AmbientLight(0x2a3a45, 0.30));

    raycaster = new THREE.Raycaster();
    clock = new THREE.Clock();
  }

  /* ---------------------------- 经纬网 / 图框 ---------------------------- */
  function createGraticule() {
    const g = new THREE.Group();
    const y = 0.06;
    const mat = new THREE.LineBasicMaterial({ color: 0x3f6670, transparent: true, opacity: 0.16 });
    const verts = [];
    for (let lon = 118; lon <= 123.001; lon += 0.5) {
      verts.push(D.toX(lon), y, D.toZ(D.MAP.lat0), D.toX(lon), y, D.toZ(D.MAP.lat1));
    }
    for (let lat = 27; lat <= 31.451; lat += 0.5) {
      verts.push(D.toX(D.MAP.lon0), y, D.toZ(lat), D.toX(D.MAP.lon1), y, D.toZ(lat));
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(verts, 3));
    g.add(new THREE.LineSegments(geo, mat));

    const frameMat = new THREE.LineBasicMaterial({ color: 0xd9b979, transparent: true, opacity: 0.15 });
    const fv = [
      D.toX(118.05), 0.12, D.toZ(27.05), D.toX(123.05), 0.12, D.toZ(27.05),
      D.toX(123.05), 0.12, D.toZ(27.05), D.toX(123.05), 0.12, D.toZ(31.38),
      D.toX(123.05), 0.12, D.toZ(31.38), D.toX(118.05), 0.12, D.toZ(31.38),
      D.toX(118.05), 0.12, D.toZ(31.38), D.toX(118.05), 0.12, D.toZ(27.05)
    ];
    const fgeo = new THREE.BufferGeometry();
    fgeo.setAttribute('position', new THREE.Float32BufferAttribute(fv, 3));
    g.add(new THREE.LineSegments(fgeo, frameMat));
    scene.add(g);
  }

  /* ---------------------------- 河流（OSM 真实几何） ---------------------------- */
  // 河面高程由 TerrainKit 在「河道下切」阶段逐点算好（rv.wl，单位米），
  // 取左右岸较低者，入海口钉在 0 m。这里不再现场采样地形，避免与下切结果不一致。

  // 垂直夸张变化后按水面米数重算 y；片区切换不再影响水面（下切已统一）
  function refreshRiverHeights() {
    if (!riverMesh || !riverPairs.length) return;
    const pa = riverMesh.geometry.getAttribute('position');
    for (let k = 0; k < riverPairs.length; k++) {
      const p = riverPairs[k];
      const y = TK.toUnits(p[2]) + 0.004;
      pa.array[k * 6 + 1] = y;
      pa.array[k * 6 + 4] = y;
    }
    pa.needsUpdate = true;
    riverMesh.geometry.computeBoundingSphere();
  }

  function buildRivers() {
    const data = window.OSMR;
    if (!data || !data.length) return;
    riverPairs = [];
    riverGroup = new THREE.Group();
    scene.add(riverGroup);

    const pos = [];
    const col = [];
    const idx = [];
    let vbase = 0;
    const cMajor = [0.050, 0.160, 0.190];
    const cMinor = [0.030, 0.100, 0.125];
    const cCanal = [0.075, 0.110, 0.120];

    for (let r = 0; r < data.length; r++) {
      const rv = data[r];
      const p = rv.p;
      const n = p.length / 2;
      if (n < 2) continue;
      // 宽度按 OSM/名称表给出的真实米数（1 单位 = 1 km）；无名小溪给 110 m 的最小可见宽度
      const wu = Math.max(0.11, rv.w / 1000);
      const half = wu / 2;
      const c = rv.canal ? cCanal : (rv.w >= 260 ? cMajor : cMinor);
      let prevX = null, prevZ = null;
      for (let i = 0; i < n; i++) {
        const lon = p[i * 2], lat = p[i * 2 + 1];
        const x = D.toX(lon), z = D.toZ(lat);
        let dx = 0, dz = 0;
        if (i === 0) { dx = D.toX(p[2]) - x; dz = D.toZ(p[3]) - z; }
        else if (i === n - 1) { dx = x - prevX; dz = z - prevZ; }
        else { dx = D.toX(p[i * 2 + 2]) - prevX; dz = D.toZ(p[i * 2 + 3]) - prevZ; }
        const len = Math.sqrt(dx * dx + dz * dz) || 1;
        const nx = -dz / len, nz = dx / len;
        // 河面高程来自下切阶段的水面表（rv.wl），两岸较低者为水面，入海口为 0 m。
        const wlm = (rv.wl && rv.wl[i] != null) ? rv.wl[i] : Math.max(0, terrain.heightAt(lon, lat));
        const y = TK.toUnits(wlm) + 0.004;
        riverPairs.push([lon, lat, wlm]);
        pos.push(x + nx * half, y, z + nz * half);
        pos.push(x - nx * half, y, z - nz * half);
        col.push(c[0], c[1], c[2], c[0], c[1], c[2]);
        prevX = x; prevZ = z;
      }
      for (let i = 0; i < n - 1; i++) {
        const a = vbase + i * 2, b = a + 1, cc = a + 2, d = a + 3;
        idx.push(a, cc, b, b, cc, d);
      }
      vbase += n * 2;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    geo.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
    geo.setIndex(idx);
    geo.computeVertexNormals();
    const mat = new THREE.MeshStandardMaterial({
      vertexColors: true, roughness: 0.86, metalness: 0.02,
      transparent: true, opacity: 0.95, side: THREE.DoubleSide
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.name = 'rivers';
    mesh.renderOrder = 2;
    riverGroup.add(mesh);
    riverGroup.userData.count = data.length;
    riverMesh = mesh;
    window.__ATLAS_RIVER__ = mesh;
    lastRiverDistrict = null;
  }

  /* ---------------------------- 湖泊（OSM 轮廓） ---------------------------- */
  function buildLakes() {
    const data = window.OSML;
    if (!data || !data.length) return;
    lakeGroup = new THREE.Group();
    scene.add(lakeGroup);
    window.__ATLAS_LAKES__ = lakeGroup;

    // 第一步：逐环生成 alpha 遮罩纹理，并采样环内地形高程。
    // 同一湖泊（如鉴湖、东钱湖、千岛湖）在 OSM 里可能拆成多个 outer 环，
    // 先按名字分组，合并采样后定一个水位，避免相邻湖面出现高度台阶。
    const items = [];
    for (let l = 0; l < data.length; l++) {
      const p = data[l].p;
      const n = p.length / 2;
      if (n < 3) continue;

      let lon0 = 1e9, lon1 = -1e9, lat0 = 1e9, lat1 = -1e9;
      for (let i = 0; i < n; i++) {
        const lo = p[i * 2], la = p[i * 2 + 1];
        if (lo < lon0) lon0 = lo; if (lo > lon1) lon1 = lo;
        if (la < lat0) lat0 = la; if (la > lat1) lat1 = la;
      }
      const x0 = D.toX(lon0), x1 = D.toX(lon1);
      const z0 = D.toZ(lat0), z1 = D.toZ(lat1);
      const bw = Math.abs(x1 - x0), bh = Math.abs(z1 - z0);
      if (bw < 0.01 || bh < 0.01) continue;

      // 用 canvas 填充多边形生成 alpha 遮罩：OSM 岸线在堤岸处会自交，
      // 直接 earcut 三角化会出现长三角形；画布填充对自交更稳健。
      const cw = 768, ch = Math.max(64, Math.round(768 * bh / bw));
      const cv = document.createElement('canvas');
      cv.width = cw; cv.height = ch;
      const g = cv.getContext('2d');
      g.fillStyle = '#ffffff';
      g.beginPath();
      for (let i = 0; i < n; i++) {
        const px = (p[i * 2] - lon0) / (lon1 - lon0) * cw;
        const py = (lat1 - p[i * 2 + 1]) / (lat1 - lat0) * ch;
        if (i === 0) g.moveTo(px, py); else g.lineTo(px, py);
      }
      g.closePath();
      g.fill();
      const tex = new THREE.CanvasTexture(cv);
      tex.minFilter = THREE.LinearFilter;
      tex.magFilter = THREE.LinearFilter;
      tex.generateMipmaps = false;

      const hs = [];
      const GS = 40;
      for (let gj = 0; gj <= GS; gj++) {
        const lat = lat0 + (lat1 - lat0) * gj / GS;
        for (let gi = 0; gi <= GS; gi++) {
          const lon = lon0 + (lon1 - lon0) * gi / GS;
          let inside = false;
          for (let a = 0, b = n - 1; a < n; b = a++) {
            const ya = p[a * 2 + 1], yb = p[b * 2 + 1];
            if (((ya > lat) !== (yb > lat)) &&
                (lon < (p[b * 2] - p[a * 2]) * (lat - ya) / (yb - ya) + p[a * 2])) inside = !inside;
          }
          if (inside) hs.push(terrain.heightAt(lon, lat));
        }
      }
      // 岸线高程：OSM 湖岸即水边线，取环上顶点（每 ~50 点抽 1 个）作为「岸」
      const bank = [];
      const bstep = Math.max(1, Math.floor(n / 400));
      for (let i = 0; i < n; i += bstep) bank.push(terrain.heightAt(p[i * 2], p[i * 2 + 1]));
      items.push({ name: data[l].n, n: n, bw: bw, bh: bh, x0: x0, x1: x1, z0: z0, z1: z1, tex: tex, hs: hs, bank: bank, p: p, lb: [lon0, lat0, lon1, lat1] });
    }

    // 第二步：同一湖泊的多个环合并采样，定水面高程。
    // 湖面是湖盆里最平坦、采样出现频次最高的高程，故取 1 m 直方图众数
    // （大湖（千岛湖）环内含岛屿、小湖（西湖）环内含孤山，众数比高分位数稳）。
    const groups = {};
    for (let i = 0; i < items.length; i++) {
      const it = items[i];
      const gr = groups[it.name] || (groups[it.name] = { hs: [], bank: [] });
      for (let k = 0; k < it.hs.length; k++) gr.hs.push(it.hs[k]);
      for (let k = 0; k < it.bank.length; k++) gr.bank.push(it.bank[k]);
    }
    const levels = {};
    for (const nm in groups) {
      const hs = groups[nm].hs;
      if (!hs.length) { levels[nm] = 2; continue; }
      let h0 = hs[0], h1 = hs[0];
      for (let q = 1; q < hs.length; q++) {
        if (hs[q] < h0) h0 = hs[q];
        if (hs[q] > h1) h1 = hs[q];
      }
      const nb = Math.min(4096, Math.floor(h1 - h0) + 2);
      const bins = new Int32Array(nb);
      let bestBin = 0, bestN = 0;
      for (let q = 0; q < hs.length; q++) {
        let bi = Math.floor(hs[q] - h0);
        if (bi < 0) bi = 0; else if (bi >= nb) bi = nb - 1;
        bins[bi]++;
        if (bins[bi] > bestN) { bestN = bins[bi]; bestBin = bi; }
      }
      // 众数可能落到岸坡上（湖盆被 780 m 粗网格抬高），故用水位不超过「岸线高程 10 分位 +1 m」
      // 兜底，保证水位低于九成岸线、不漫过湖岸；大湖（千岛湖）岸线高于众数时不生效。
      const bank = groups[nm].bank.slice().sort(function (a, b) { return a - b; });
      const bankP10 = bank.length ? bank[Math.floor(bank.length * 0.1)] : h0;
      levels[nm] = Math.max(Math.min(h0 + bestBin + 1.0, bankP10 + 1.0), 2);
    }

    // 第三步：建湖面网格
    lakeGroup.userData.water = [];
    for (let i = 0; i < items.length; i++) {
      const it = items[i];
      const hRefM = levels[it.name] || 2;
      lakeGroup.userData.water.push({
        name: it.name, n: it.n, p: it.p, level: hRefM, box: it.lb
      });
      // 湖面抬升要跟着「渲染出来的」湖底走：片区 patch 顶点整体抬高 0.03 单位（VE=10 时 3 m），
      // 湖面必须抬 0.038 才不会被 patch 盖住；不在片区内的湖（千岛湖/南湖/鉴湖）只抬 0.008。
      // 旧代码这里误用了第一步循环里的 lon0/lat0（已出作用域），判断恒不成立 → 西湖永远走 0.008 分支，
      // 整个湖面被 patch 埋掉（只剩湖岸陡坡处露出几块碎片）。改用本湖自己的 bbox。
      const lb = it.lb;
      let inPatch = false;
      const dp = window.DEMD || {};
      for (const id in dp) {
        const pd = dp[id];
        if (lb[0] >= pd.lon0 && lb[2] <= pd.lon1 && lb[1] >= pd.lat0 && lb[3] <= pd.lat1) { inPatch = true; break; }
      }
      const lakeLift = inPatch ? 0.038 : 0.008;
      const y = TK.toUnits(hRefM) + lakeLift;
      const mat = new THREE.MeshStandardMaterial({
        map: it.tex, color: 0x1a3a44, roughness: 0.78, metalness: 0.03,
        transparent: true, opacity: 0.95, depthWrite: false,
        emissive: 0x050e12, emissiveIntensity: 0.15, side: THREE.DoubleSide
      });
      const geo = new THREE.PlaneGeometry(it.bw, it.bh);
      const mesh = new THREE.Mesh(geo, mat);
      mesh.rotation.x = -Math.PI / 2;
      mesh.position.set((it.x0 + it.x1) / 2, y, (it.z0 + it.z1) / 2);
      mesh.renderOrder = 2;
      mesh.userData.hRefM = hRefM;
      mesh.userData.lakeLift = lakeLift;
      mesh.userData.lakeName = it.name;
      lakeGroup.add(mesh);
    }
  }

  // 垂直夸张变化后，湖面按记录的水位米数重新抬升。
  function refreshLakeHeights() {
    if (!lakeGroup) return;
    for (let i = 0; i < lakeGroup.children.length; i++) {
      const m = lakeGroup.children[i];
      if (m.userData.hRefM != null) m.position.y = TK.toUnits(m.userData.hRefM) + (m.userData.lakeLift || 0.008);
    }
  }

  /* ---------------------------- 水体高程查询 ---------------------------- */
  // 用于两件事：① 诊断建筑底面的落水情况；② 修建筑底面时把 base 钳到水面之上。
  // 河流水位取 rv.wl（terrain 下切阶段算好的米数），湖泊水位取 buildLakes 的 levels，
  // 海面 0 m。建筑 base 恒 ≥1.2 m（terrain.heightAt 下限 0 再 +1.2），所以海面不是落水来源。
  const WATER_CELL = 0.02;    // ≈2 km 网格索引
  let riverIdx = null;
  const riverNames = [];

  // 按「河段」索引（不是折点）：钱塘江折点间距 3–8 km，只查折点距离时，
  // 河带中间一大片离两端折点都 >450 m，会漏判成海面（这也是诊断只报 3 栋、
  // 而俯视图里却有几十栋泡在江里的原因）。这里把每段存进它覆盖的所有网格，
  // 查询时算点到线段距离，并对两端水位线性插值。
  function buildRiverIndex() {
    riverIdx = new Map();
    const data = window.OSMR;
    if (!data) return;
    for (let r = 0; r < data.length; r++) {
      const rv = data[r], p = rv.p, n = p.length / 2;
      if (!rv.wl || n < 2) continue;
      const halfM = Math.max(55, (rv.w || 90) / 2);
      riverNames[r] = rv.n || '';
      const padLon = halfM / 96000, padLat = halfM / 111000;
      for (let i = 0; i < n - 1; i++) {
        const ax = p[i * 2], ay = p[i * 2 + 1], bx = p[i * 2 + 2], by = p[i * 2 + 3];
        const i0 = Math.floor((Math.min(ax, bx) - padLon) / WATER_CELL);
        const i1 = Math.floor((Math.max(ax, bx) + padLon) / WATER_CELL);
        const j0 = Math.floor((Math.min(ay, by) - padLat) / WATER_CELL);
        const j1 = Math.floor((Math.max(ay, by) + padLat) / WATER_CELL);
        const rec = [ax, ay, bx, by, rv.wl[i], rv.wl[i + 1], halfM, r];
        for (let jj = j0; jj <= j1; jj++) {
          for (let ii = i0; ii <= i1; ii++) {
            const key = ii + ',' + jj;
            let arr = riverIdx.get(key);
            if (!arr) riverIdx.set(key, arr = []);
            if (arr.indexOf(rec) < 0) arr.push(rec);
          }
        }
      }
    }
  }

  // 返回所在河面的水位（米）；不在任何河带内 → null
  function riverWaterAt(lon, lat) {
    if (!riverIdx) return null;
    const ci = Math.floor(lon / WATER_CELL), cj = Math.floor(lat / WATER_CELL);
    let best = null, bestD = 1e18, bLon = 0, bLat = 0, bestN = '';
    for (let dj = -1; dj <= 1; dj++) {
      for (let di = -1; di <= 1; di++) {
        const arr = riverIdx.get((ci + di) + ',' + (cj + dj));
        if (!arr) continue;
        for (let k = 0; k < arr.length; k++) {
          const s = arr[k];
          const ax = s[0], ay = s[1], bx = s[2], by = s[3];
          const ux = (bx - ax) * 96, uy = (by - ay) * 111;      // km
          const vx = (lon - ax) * 96, vy = (lat - ay) * 111;
          const len2 = ux * ux + uy * uy;
          let t = len2 > 1e-12 ? (vx * ux + vy * uy) / len2 : 0;
          if (t < 0) t = 0; else if (t > 1) t = 1;
          const dx = (vx - ux * t) * 1000, dy = (vy - uy * t) * 1000;
          const d2 = dx * dx + dy * dy;
          if (d2 <= s[6] * s[6] && d2 < bestD) {
            bestD = d2;
            best = s[4] + (s[5] - s[4]) * t;
            bLon = ax + (bx - ax) * t; bLat = ay + (by - ay) * t;
            bestN = riverNames[s[7]] || '';
          }
        }
      }
    }
    if (best == null) return null;
    return { w: best, name: bestN, lon: bLon, lat: bLat };
  }

  function lakeWaterAt(lon, lat) {
    const list = lakeGroup && lakeGroup.userData.water;
    if (!list) return null;
    for (let q = 0; q < list.length; q++) {
      const it = list[q], b = it.box;
      if (lon < b[0] || lon > b[2] || lat < b[1] || lat > b[3]) continue;
      const p = it.p, n = it.n;
      let inside = false;
      for (let a = 0, bb = n - 1; a < n; bb = a++) {
        const ya = p[a * 2 + 1], yb = p[bb * 2 + 1];
        if (((ya > lat) !== (yb > lat)) &&
            (lon < (p[bb * 2] - p[a * 2]) * (lat - ya) / (yb - ya) + p[a * 2])) inside = !inside;
      }
      if (inside) return { w: it.level, name: it.name };
    }
    return null;
  }

  // { w: 水面高程 m, kind: 'river'|'lake'|'sea', name }
  function waterAt(lon, lat) {
    const rw = riverWaterAt(lon, lat);
    const lw = lakeWaterAt(lon, lat);
    if (lw != null && (rw == null || lw.w > rw.w)) return { w: lw.w, kind: 'lake', name: lw.name };
    if (rw != null) return { w: rw.w, kind: 'river', name: rw.name, lon: rw.lon, lat: rw.lat };
    return { w: 0, kind: 'sea', name: '' };
  }

  // 建筑底面：footprint 内多点 DEM 取 75 分位，再用水面兜底。
  // 旧规则只用质心单点 → 质心落在被 DEM 下切的河槽/湖盆时，整栋楼沉到水下。
  function siteBaseM(sampLon, sampLat) {
    // 修复前规则（对照用）：只取质心单点 DEM，+1.2 m，不看水面
    if (legacyBase) {
      const m = Math.max(terrain.heightAt(sampLon[0], sampLat[0]), 0) + 1.2;
      const wt = waterAt(sampLon[0], sampLat[0]);
      return {
        m: m, water: wt.w, kind: wt.kind, name: wt.name,
        wet: wt.kind === 'sea' ? 0 : 1, n: 1, wlon: wt.lon || 0, wlat: wt.lat || 0
      };
    }
    const hs = [];
    let wmax = -1e9, wkind = null, wet = 0, wname = '', wlon = 0, wlat = 0;
    for (let i = 0; i < sampLon.length; i++) {
      hs.push(Math.max(terrain.heightAt(sampLon[i], sampLat[i]), 0));
      const wt = waterAt(sampLon[i], sampLat[i]);
      if (wt.kind !== 'sea') wet++;
      if (wt.w > wmax) { wmax = wt.w; wkind = wt.kind; wname = wt.name; wlon = wt.lon || 0; wlat = wt.lat || 0; }
    }
    hs.sort(function (a, b) { return a - b; });
    const q = hs[Math.min(hs.length - 1, Math.floor(hs.length * 0.75))];
    let m = q + 1.2;
    if (wmax > -1e8 && m < wmax + 0.6) m = wmax + 0.6;
    return { m: m, water: wmax, kind: wkind, name: wname, wet: wet, n: sampLon.length, wlon: wlon, wlat: wlat };
  }

  /* ---------------------------- 落水诊断（?diag=water） ---------------------------- */
  // 只统计、不参与渲染：每栋楼记旧/新 base、所在水面高程、footprint 面积、落在水里的采样点比例。
  function recordWater(id, lon, lat, ring, baseOld, site) {
    waterScan++;
    const dropOld = site.water - baseOld;
    const dropNew = site.water - site.m;
    if (site.wet > 0) {
      const tag = site.kind + ':' + (site.name || '无名');
      if (!waterDry[tag]) waterDry[tag] = { wet: 0, dry: 0 };
      waterDry[tag].wet++;
      if (dropOld <= 0.3) waterDry[tag].dry++;
    }
    if (dropOld <= 0.15 && dropNew <= 0.15) {
      // 采样点进了水体多边形、但楼基高于水面：记入「站在水带里的陆地建筑」，用于解释截图观感
      if (site.wet > 0) {
        let ar = 0;
        for (let i = 0; i < ring.length; i++) {
          const a = ring[i], b = ring[(i + 1) % ring.length];
          ar += a[0] * b[1] - b[0] * a[1];
        }
        waterTouch.push({
          blk: id, lon: +lon.toFixed(5), lat: +lat.toFixed(5),
          area: Math.round(Math.abs(ar) * 1e6), old: +baseOld.toFixed(2),
          w: +site.water.toFixed(2), level: +site.m.toFixed(2),
          kind: site.kind, name: site.name || '', wet: site.wet, n: site.n,
          dropOld: +dropOld.toFixed(2)
        });
      }
      return;
    }
    let area = 0;
    for (let i = 0; i < ring.length; i++) {
      const a = ring[i], b = ring[(i + 1) % ring.length];
      area += a[0] * b[1] - b[0] * a[1];
    }
    waterRows.push({
      blk: id, lon: +lon.toFixed(5), lat: +lat.toFixed(5),
      area: Math.round(Math.abs(area) * 1e6),       // ring 单位 km → m²
      old: +baseOld.toFixed(2), new: +site.m.toFixed(2),
      w: +site.water.toFixed(2), kind: site.kind, name: site.name || '',
      rlon: +site.wlon.toFixed(5), rlat: +site.wlat.toFixed(5),
      wet: site.wet, n: site.n,
      dropOld: +dropOld.toFixed(2), dropNew: +dropNew.toFixed(2)
    });
  }

  // 诊断模式：把 70 个分块按顺序注入，全部构建后汇总（file:// 下不能用 fetch）
  function runWaterDiag() {
    const list = window.OSMBL;
    if (!list || !list.length) { finishWaterDiag(); return; }
    let i = 0;
    (function next() {
      while (i < list.length) {
        const m = list[i++];
        if (window.OSMBLK && window.OSMBLK[m.id]) { buildBlock(m.id); continue; }
        const s = document.createElement('script');
        s.src = m.f;
        s.async = true;
        s.onload = function () { buildBlock(m.id); next(); };
        s.onerror = function () { next(); };
        document.body.appendChild(s);
        return;
      }
      finishWaterDiag();
    })();
  }

  // ?diag=probe&lon=&lat=：输出该点 ±1 km 高程网格与水体判定，用于定位落水根因
  function probeAt(lon, lat) {
    const g = [];
    for (let dj = -4; dj <= 4; dj++) {
      const row = [];
      for (let di = -4; di <= 4; di++) row.push(+terrain.heightAt(lon + di * 0.0025, lat + dj * 0.0025).toFixed(1));
      g.push(row);
    }
    const out = {
      lon: lon, lat: lat, stepDeg: 0.0025,
      h: +terrain.heightAt(lon, lat).toFixed(2),
      water: waterAt(lon, lat),
      grid: g
    };
    document.documentElement.setAttribute('data-atlas-probe', JSON.stringify(out));
    console.log('[probe] ' + JSON.stringify(out));
  }

  // ?diag=lake：核对每个湖面网格与地形的相对高度（判断湖面是否被地形埋没）
  function diagLakes() {
    const out = [];
    if (lakeGroup && lakeGroup.userData.water) {
      for (let i = 0; i < lakeGroup.children.length; i++) {
        const m = lakeGroup.children[i];
        const w = lakeGroup.userData.water[i];
        if (!w) continue;
        const b = w.box;
        const mid = [(b[0] + b[2]) / 2, (b[1] + b[3]) / 2];
        let buried = 0, above = 0, hmax = -1e9, hmin = 1e9;
        for (let a = 1; a <= 10; a++) {
          for (let c = 1; c <= 10; c++) {
            const lon = b[0] + (b[2] - b[0]) * a / 11;
            const lat = b[1] + (b[3] - b[1]) * c / 11;
            if (!lakeWaterAt(lon, lat)) continue;
            const h = terrain.heightAt(lon, lat);
            if (h > hmax) hmax = h;
            if (h < hmin) hmin = h;
            if (h > w.level + 0.05) buried++; else above++;
          }
        }
        out.push({
          name: w.name, n: w.n, level: +w.level.toFixed(2),
          y: +m.position.y.toFixed(4),
          hc: +terrain.heightAt(mid[0], mid[1]).toFixed(2),
          lift: m.userData.lakeLift,
          hmin: +hmin.toFixed(2), hmax: +hmax.toFixed(2),
          buried: buried, above: above,
          box: b.map(function (v) { return +v.toFixed(4); })
        });
      }
    }
    out.sort(function (a, b2) { return b2.buried - a.buried; });
    const agg = { lakes: out.length, buriedLakes: 0, meshes: lakeGroup ? lakeGroup.children.length : 0 };
    for (let i = 0; i < out.length; i++) if (out[i].buried > out[i].above) agg.buriedLakes++;
    const root = document.documentElement;
    root.setAttribute('data-atlas-lakediag', JSON.stringify({ agg: agg, list: out.slice(0, 40) }));
    console.log('[lake-diag] ' + JSON.stringify({ agg: agg, list: out.slice(0, 40) }));
  }

  function finishWaterDiag() {
    const rows = waterRows;
    const byKind = {}, byBlk = {}, byWater = {};
    let oldN = 0, newN = 0, crossN = 0;
    function group(kind, name) {
      if (kind === 'lake') return /西湖/.test(name) ? '西湖' : (/千岛湖/.test(name) ? '千岛湖' : '其他湖泊');
      if (kind === 'river') return /钱塘/.test(name) ? '钱塘江' : (/运河/.test(name) ? '运河' : '其他河流');
      return '近海';
    }
    for (let i = 0; i < rows.length; i++) {
      const r = rows[i];
      if (r.dropOld > 0.3) {
        oldN++;
        byKind[r.kind] = (byKind[r.kind] || 0) + 1;
        byBlk[r.blk] = (byBlk[r.blk] || 0) + 1;
        const gk = group(r.kind, r.name);
        byWater[gk] = (byWater[gk] || 0) + 1;
        if (r.wet > 0 && r.wet >= r.n * 0.6) crossN++;
      }
      if (r.dropNew > 0.3) newN++;
    }
    rows.sort(function (a, b) { return b.dropOld - a.dropOld; });
    const cases = rows.filter(function (r) { return r.dropOld > 0.3; });
    let wetTotal = 0, dryTotal = 0;
    for (const k in waterDry) { wetTotal += waterDry[k].wet; dryTotal += waterDry[k].dry; }
    const summary = {
      scanned: waterScan, suspicious: rows.length, oldN: oldN, newN: newN, crossN: crossN,
      wetTotal: wetTotal, dryTotal: dryTotal, byWaterDry: waterDry,
      byKind: byKind, byBlk: byBlk, byWater: byWater, cases: cases,
      touch: waterTouch.slice(0, 240)
    };
    // 取最严重案例做 9×9 高程探针（±1 km，250 m 步长），用于判断「水面抬升过高」还是「楼基采样错」
    if (cases.length) {
      const c = cases[0], g = [];
      for (let dj = -4; dj <= 4; dj++) {
        const row = [];
        for (let di = -4; di <= 4; di++) row.push(+terrain.heightAt(c.lon + di * 0.0025, c.lat + dj * 0.0025).toFixed(1));
        g.push(row);
      }
      summary.probe = { lon: c.lon, lat: c.lat, stepDeg: 0.0025, grid: g };
      if (c.rlon) summary.probe.riverH = +terrain.heightAt(c.rlon, c.rlat).toFixed(2);
      if (c.rlon) summary.probe.river = [c.rlon, c.rlat];
    }
    const root = document.documentElement;
    root.setAttribute('data-atlas-water-old', String(oldN));
    root.setAttribute('data-atlas-water-new', String(newN));
    root.setAttribute('data-atlas-water-cross', String(crossN));
    root.setAttribute('data-atlas-water', JSON.stringify(summary));
    console.log('[water-diag] ' + JSON.stringify(summary));
  }

  /* ---------------------------- 街道级行政边界（OSM admin_level 8/9/10） ---------------------------- */
  // 用 80 m 宽的半透明色带绘制（LineSegments 在近景只有 1 px，几乎看不见）
  function buildStreets() {
    const data = window.OSMS;
    if (!data || !data.streets || !data.streets.length) return;
    const pos = [], elev = [], idx = [];
    const HALF = 0.040;   // km，总宽约 80 m
    let pts = 0, vbase = 0;
    for (let s = 0; s < data.streets.length; s++) {
      const st = data.streets[s];
      const p = st.p;
      const n = p.length / 2;
      if (n < 3) continue;
      pts += n;
      for (let i = 0; i < n; i++) {
        const j = (i + 1) % n, k = (i - 1 + n) % n;
        const lo = p[i * 2], la = p[i * 2 + 1];
        const lo1 = p[k * 2], la1 = p[k * 2 + 1], lo2 = p[j * 2], la2 = p[j * 2 + 1];
        const ax = D.toX(lo2) - D.toX(lo1), az = D.toZ(la2) - D.toZ(la1);
        const len = Math.sqrt(ax * ax + az * az) || 1;
        const nx = -az / len, nz = ax / len;
        const h = Math.max(terrain.heightAt(lo, la), 0);
        const y = TK.toUnits(h) + 0.02;
        const x = D.toX(lo), z = D.toZ(la);
        pos.push(x + nx * HALF, y, z + nz * HALF, x - nx * HALF, y, z - nz * HALF);
        elev.push(h, h);
      }
      for (let i = 0; i < n; i++) {
        const a = vbase + i * 2, b = a + 1;
        const c = vbase + ((i + 1) % n) * 2, d = c + 1;
        idx.push(a, c, b, b, c, d);
      }
      vbase += n * 2;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    geo.setIndex(idx);
    const mat = new THREE.MeshBasicMaterial({
      color: 0x2f9aa4, transparent: true, opacity: 0.55, depthWrite: false,
      side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: -2
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.name = 'streets';
    mesh.renderOrder = 3;
    mesh.userData.elev = elev;
    streetGroup = new THREE.Group();
    streetGroup.add(mesh);
    streetGroup.visible = streetVisible;
    scene.add(streetGroup);
    streetMesh = mesh;
    streetPoints = pts;
    const root = document.documentElement;
    root.setAttribute('data-atlas-street-count', String(data.streets.length));
    root.setAttribute('data-atlas-street-pts', String(pts));
    root.setAttribute('data-atlas-streets', streetVisible ? '1' : '0');
  }

  function refreshStreetHeights() {
    if (!streetMesh) return;
    const arr = streetMesh.geometry.getAttribute('position').array;
    const e = streetMesh.userData.elev;
    if (!e) return;
    for (let i = 0; i < e.length; i++) arr[i * 3 + 1] = TK.toUnits(e[i]) + 0.02;
    streetMesh.geometry.getAttribute('position').needsUpdate = true;
    streetMesh.geometry.computeBoundingSphere();
  }

  function setStreetVisible(v) {
    streetVisible = !!v;
    if (streetGroup) streetGroup.visible = streetVisible;
    const b = document.getElementById('btn-streets');
    if (b) b.classList.toggle('on', streetVisible);
    document.documentElement.setAttribute('data-atlas-streets', streetVisible ? '1' : '0');
  }

  /* ---------------------------- 现代建筑（OSM footprint） ---------------------------- */
  function decodeI16(b64) {
    const s = atob(b64);
    const n = Math.floor(s.length / 2);
    const out = new Int16Array(n);
    for (let i = 0; i < n; i++) {
      let v = s.charCodeAt(i * 2) + s.charCodeAt(i * 2 + 1) * 256;
      if (v >= 32768) v -= 65536;
      out[i] = v;
    }
    return out;
  }

  function decodeI32(b64) {
    const s = atob(b64);
    const n = Math.floor(s.length / 4);
    const out = new Int32Array(n);
    for (let i = 0; i < n; i++) {
      let v = s.charCodeAt(i * 4) + s.charCodeAt(i * 4 + 1) * 256 + s.charCodeAt(i * 4 + 2) * 65536 + s.charCodeAt(i * 4 + 3) * 16777216;
      if (v >= 2147483648) v -= 4294967296;
      out[i] = v;
    }
    return out;
  }

  // LOD：相机到目标距离（场景单位 = km）。全省视角（≥150 km）不加载任何楼群数据，
  // 只显示地形 / 河网 / 城市标记；进入阈值后按片区按需注入独立数据文件。
  const districtBuildings = {};   // id → 已构建的网格对象
  const districtLoading = {};     // id → { state, t0, dataMs }
  const blockBuildings = {};      // 杭州主城区分块建筑 id → 网格对象
  const blockLoading = {};        // id → { state, t0, dataMs }
  const blockProxy = {};          // id → 远景代理（400 m 网格箱体）
  const proxyLoading = {};        // id → { state, t0, dataMs }
  const DISTRICT_SCRIPT = { nb: 'js/bld-nb.js', wz: 'js/bld-wz.js', sx: 'js/bld-sx.js' };
  const LOD_LOAD_RADIUS = 150;    // 相机半径阈值（km）
  const LOD_SPAN = 0.55;          // 片区激活半径 = 相机半径 × 0.55 + 6 km
  const LOD_SPAN_MIN = 6;
  // 杭州 6 区分块建筑：两级 LOD
  //   远级：半径 < 80 km 注入 400 m 网格箱体代理（每块 1 mesh）
  //   近级：半径 < 26 km 注入真实 footprint（每块 1 mesh），近级可见时压掉同块代理
  const BLK_MAX_RADIUS = 26;
  const BLK_REACH_K = 0.8;
  const BLK_REACH_MIN = 3.5;
  const BLK_REACH_MAX = 20;
  const BLK_PX_RADIUS = 80;
  const BLK_PX_REACH_K = 0.9;
  const BLK_PX_REACH_MIN = 10;
  const BLK_PX_REACH_MAX = 35;
  let lastChipText = '';

  function pointInTri(p, a, b, c) {
    const d1 = (p[0] - b[0]) * (a[1] - b[1]) - (a[0] - b[0]) * (p[1] - b[1]);
    const d2 = (p[0] - c[0]) * (b[1] - c[1]) - (b[0] - c[0]) * (p[1] - c[1]);
    const d3 = (p[0] - a[0]) * (c[1] - a[1]) - (c[0] - a[0]) * (p[1] - a[1]);
    const neg = (d1 < 0) || (d2 < 0) || (d3 < 0);
    const pos = (d1 > 0) || (d2 > 0) || (d3 > 0);
    return !(neg && pos);
  }

  function earClip(pts) {
    const n = pts.length;
    if (n < 3) return [];
    let area = 0;
    for (let i = 0; i < n; i++) {
      const a = pts[i], b = pts[(i + 1) % n];
      area += a[0] * b[1] - b[0] * a[1];
    }
    const idx = [];
    for (let i = 0; i < n; i++) idx.push(area > 0 ? i : n - 1 - i);
    const out = [];
    let guard = n * n * 3;
    while (idx.length > 3 && guard-- > 0) {
      let clipped = false;
      for (let i = 0; i < idx.length; i++) {
        const i0 = idx[(i - 1 + idx.length) % idx.length], i1 = idx[i], i2 = idx[(i + 1) % idx.length];
        const a = pts[i0], b = pts[i1], c = pts[i2];
        const cross = (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0]);
        if (cross <= 0) continue;
        let ok = true;
        for (let k = 0; k < idx.length; k++) {
          const q = idx[k];
          if (q === i0 || q === i1 || q === i2) continue;
          if (pointInTri(pts[q], a, b, c)) { ok = false; break; }
        }
        if (ok) {
          out.push(i0, i1, i2);
          idx.splice(i, 1);
          clipped = true;
          break;
        }
      }
      if (!clipped) break;
    }
    if (idx.length === 3) out.push(idx[0], idx[1], idx[2]);
    return out;
  }

  function buildGeometry(id, d, gridN) {
    const buildStart = performance.now();

    const verts = decodeI16(d.verts);
    const meta = decodeI32(d.meta);
    const clon = d.clon, clat = d.clat;
    const kx = Math.cos(clat * Math.PI / 180) * 111.32;
    const baseX = D.toX(clon), baseZ = D.toZ(clat);

    const groups = [];
    for (let k = 0; k < gridN * gridN; k++) groups.push({ pos: [], col: [], idx: [], elev: [], hoff: [] });

    const metaCount = d.count;
    for (let b = 0; b < metaCount; b++) {
      const off = meta[b * 3];
      const nv = meta[b * 3 + 1];
      const hs = meta[b * 3 + 2];
      const hM = Math.abs(hs) * 0.5;
      const tagged = hs > 0;
      if (nv < 3 || nv > 128) continue;

      // 读环
      const ring = [];
      let cx = 0, cz = 0;
      for (let i = 0; i < nv; i++) {
        const dx = verts[(off + i) * 2] * 0.5 / 1000;   // dm → km
        const dy = verts[(off + i) * 2 + 1] * 0.5 / 1000;
        ring.push([dx, -dy]);   // 世界 z 轴向南为负，lat 向北增大
        cx += dx; cz += -dy;
      }
      cx /= nv; cz /= nv;

      // 集群
      const lon = clon + cx / kx;
      const lat = clat + (-cz) / 111.32;
      const fx = (lon - d.lon0) / (d.lon1 - d.lon0);
      const fz = (lat - d.lat0) / (d.lat1 - d.lat0);
      const gi = Math.min(gridN - 1, Math.max(0, Math.floor(fx * gridN)));
      const gj = Math.min(gridN - 1, Math.max(0, Math.floor(fz * gridN)));
      const g = groups[gj * gridN + gi];

      // 底面：footprint 内多点采样（质心 + 环上最多 6 点），取 75 分位并用水面兜底。
      // 旧规则只用质心单点，质心落进被下切的河槽/湖盆时整栋楼会沉到水面以下。
      const spLon = [lon], spLat = [lat];
      const pstep = Math.max(1, Math.floor(nv / 6));
      // 注意：ring 的坐标是「相对块中心」的 km 偏移，cx/cz 已是质心偏移，
      // 采样点必须用 ring 本身，不能再加 cx/cz（否则整圈被平移 1 km 量级）。
      for (let i = 0; i < nv; i += pstep) {
        spLon.push(clon + ring[i][0] / kx);
        spLat.push(clat - ring[i][1] / 111.32);
      }
      const site = siteBaseM(spLon, spLat);
      const baseM = site.m;
      const baseY = TK.toUnits(baseM);
      if (diagWater) recordWater(id, lon, lat, ring, Math.max(terrain.heightAt(lon, lat), 0) + 1.2, site);
      // 真实高度（OSM height / building:levels）与估算高度用色相区分：
      // 真实 = 暖灰（略亮），估算 = 冷灰青（略暗），并在图例中单独标注。
      const shade = (tagged ? 0.176 : 0.131) + ((b % 5) - 2) * 0.006;
      const wallC = tagged ? [shade * 0.97, shade * 0.94, shade * 0.88] : [shade * 0.88, shade * 0.95, shade * 0.98];
      const roofC = tagged ? [0.205, 0.198, 0.172] : [0.138, 0.168, 0.176];

      const vBase = g.pos.length / 3;
      for (let i = 0; i < nv; i++) {
        g.pos.push(baseX + cx + ring[i][0], baseY, baseZ + cz + ring[i][1]);
        g.elev.push(baseM); g.hoff.push(0);
        g.col.push(wallC[0], wallC[1], wallC[2]);
      }
      for (let i = 0; i < nv; i++) {
        g.pos.push(baseX + cx + ring[i][0], baseY, baseZ + cz + ring[i][1]);
        g.elev.push(baseM); g.hoff.push(hM);
        g.col.push(roofC[0], roofC[1], roofC[2]);
      }
      // 侧墙
      for (let i = 0; i < nv; i++) {
        const a = vBase + i, b2 = vBase + (i + 1) % nv;
        const a2 = vBase + nv + i, b3 = vBase + nv + (i + 1) % nv;
        g.idx.push(a, b2, a2);
        g.idx.push(b2, b3, a2);
      }
      // 屋顶
      const tris = earClip(ring);
      for (let i = 0; i < tris.length; i += 3) {
        g.idx.push(vBase + nv + tris[i], vBase + nv + tris[i + 1], vBase + nv + tris[i + 2]);
      }
    }

    const obj = { groups: [], meshes: [], count: metaCount, tagged: d.tagged, id: id, tris: 0 };
    for (let k = 0; k < gridN * gridN; k++) {
      const g = groups[k];
      if (!g.idx.length) continue;
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.Float32BufferAttribute(g.pos, 3));
      geo.setAttribute('color', new THREE.Float32BufferAttribute(g.col, 3));
      geo.setIndex(g.idx);
      geo.computeVertexNormals();
      geo.computeBoundingSphere();
      const mesh = new THREE.Mesh(geo, buildingMaterial());
      mesh.name = 'bld-' + id + '-' + k;
      mesh.visible = false;
      mesh.frustumCulled = true;
      scene.add(mesh);
      obj.groups.push(g);
      obj.meshes.push(mesh);
      obj.tris += g.idx.length / 3;
    }
    obj.buildMs = Math.round(performance.now() - buildStart);
    return obj;
  }

  function buildDistrict(id) {
    if (districtBuildings[id]) return districtBuildings[id];
    const d = window.OSMB && window.OSMB[id];
    if (!d) return null;
    const obj = buildGeometry(id, d, 3);
    districtBuildings[id] = obj;
    // 新片区按当前垂直夸张一次性抬升（否则楼体会停在基准面、看起来像平贴的薄片）
    applyVEToObj(obj);
    publishDistrictStats(id, obj);
    return obj;
  }

  // 杭州主城区分块：每块合批成一个 mesh（1 draw call）
  function buildBlock(id) {
    if (blockBuildings[id]) return blockBuildings[id];
    const d = window.OSMBLK && window.OSMBLK[id];
    if (!d) return null;
    const obj = buildGeometry(id, d, 1);
    blockBuildings[id] = obj;
    applyVEToObj(obj);
    updateBlocks();          // 立刻按当前镜头判定可见性，避免首帧统计滞后
    publishBlockStats();
    return obj;
  }

  // 远景代理：每 400 m 网格 1 个箱体，整块合批成 1 个 mesh（远级 LOD，成本约真实几何的 1/10）
  function buildProxy(id) {
    if (blockProxy[id]) return blockProxy[id];
    const d = window.OSMPX && window.OSMPX[id];
    if (!d) return null;
    const q = d.q;
    const baseX = D.toX(d.clon), baseZ = D.toZ(d.clat);
    const kx = Math.cos(d.clat * Math.PI / 180) * 111.32;
    const pos = [], col = [], idx = [], elev = [], hoff = [];
    const n = Math.floor(q.length / 6);
    for (let k = 0; k < n; k++) {
      const o = k * 6;
      const x0 = q[o] * 0.5 / 1000, y0 = q[o + 1] * 0.5 / 1000;
      const x1 = q[o + 2] * 0.5 / 1000, y1 = q[o + 3] * 0.5 / 1000;
      const hM = q[o + 4] * 0.5;
      const tagged = q[o + 5] === 1;
      const lon = d.clon + ((x0 + x1) / 2) / kx;
      const lat = d.clat + ((y0 + y1) / 2) / 111.32;
      // 代理箱体是 400 m 网格的包围盒，同样用 5 点采样 + 水面兜底，
      // 否则远级 LOD 在江边会出现整排「半沉」的箱子。
      const site = siteBaseM(
        [lon, d.clon + x0 / kx, d.clon + x1 / kx, d.clon + x0 / kx, d.clon + x1 / kx],
        [lat, d.clat + y0 / 111.32, d.clat + y0 / 111.32, d.clat + y1 / 111.32, d.clat + y1 / 111.32]
      );
      const baseM = site.m;
      const baseY = TK.toUnits(baseM);
      const shade = (tagged ? 0.176 : 0.131) + ((k % 5) - 2) * 0.005;
      const wallC = tagged ? [shade * 0.97, shade * 0.94, shade * 0.88] : [shade * 0.88, shade * 0.95, shade * 0.98];
      const roofC = tagged ? [0.205, 0.198, 0.172] : [0.138, 0.168, 0.176];
      const v = pos.length / 3;
      const rr = [[x0, y0], [x1, y0], [x1, y1], [x0, y1]];
      for (let i = 0; i < 4; i++) {
        pos.push(baseX + rr[i][0], baseY, baseZ - rr[i][1]);
        elev.push(baseM); hoff.push(0);
        col.push(wallC[0], wallC[1], wallC[2]);
      }
      for (let i = 0; i < 4; i++) {
        pos.push(baseX + rr[i][0], baseY, baseZ - rr[i][1]);
        elev.push(baseM); hoff.push(hM);
        col.push(roofC[0], roofC[1], roofC[2]);
      }
      idx.push(v, v + 1, v + 5, v, v + 5, v + 4);
      idx.push(v + 1, v + 2, v + 6, v + 1, v + 6, v + 5);
      idx.push(v + 2, v + 3, v + 7, v + 2, v + 7, v + 6);
      idx.push(v + 3, v, v + 4, v + 3, v + 4, v + 7);
      idx.push(v + 4, v + 5, v + 6, v + 4, v + 6, v + 7);
    }
    const obj = { meshes: [], cells: n, tris: 0, id: id, elev: elev, hoff: hoff };
    if (idx.length) {
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
      geo.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
      geo.setIndex(idx);
      geo.computeVertexNormals();
      geo.computeBoundingSphere();
      const mesh = new THREE.Mesh(geo, buildingMaterial());
      mesh.name = 'bldpx-' + id;
      mesh.visible = false;
      scene.add(mesh);
      obj.meshes.push(mesh);
      obj.tris = idx.length / 3;
    }
    blockProxy[id] = obj;
    return obj;
  }

  function requestProxyData(id, src) {
    if (blockProxy[id] || proxyLoading[id]) return;
    const rec = { state: 'loading', t0: performance.now(), dataMs: 0 };
    proxyLoading[id] = rec;
    const s = document.createElement('script');
    s.src = src;
    s.async = true;
    s.onload = function () {
      rec.dataMs = Math.round(performance.now() - rec.t0);
      rec.state = 'loaded';
      buildProxy(id);
      updateBlocks();
      publishBlockStats();
    };
    s.onerror = function () {
      rec.state = 'failed';
      document.documentElement.setAttribute('data-atlas-px-error', id);
    };
    document.body.appendChild(s);
  }


  function publishDistrictStats(id, obj) {
    const rec = districtLoading[id] || {};
    const root = document.documentElement;
    root.setAttribute('data-atlas-lod', id);
    root.setAttribute('data-atlas-bld-loaded', '1');
    root.setAttribute('data-atlas-bld-count', String(obj.count));
    root.setAttribute('data-atlas-bld-tagged', String(obj.tagged));
    root.setAttribute('data-atlas-bld-est', String(obj.count - obj.tagged));
    root.setAttribute('data-atlas-bld-tris', String(obj.tris));
    root.setAttribute('data-atlas-bld-draws', String(obj.meshes.length));
    root.setAttribute('data-atlas-bld-datams', String(rec.dataMs || 0));
    root.setAttribute('data-atlas-bld-buildms', String(obj.buildMs));
    window.__ATLAS_BLD__ = {
      id: id, count: obj.count, tagged: obj.tagged, est: obj.count - obj.tagged,
      tris: obj.tris, draws: obj.meshes.length, dataMs: rec.dataMs || 0, buildMs: obj.buildMs
    };
  }

  // 按需加载：进入片区视野才注入对应独立数据文件（file:// 下用 <script> 注入，不用 fetch）
  function requestDistrictData(id) {
    if (window.OSMB && window.OSMB[id]) return;
    if (districtLoading[id]) return;
    const src = DISTRICT_SCRIPT[id];
    if (!src) return;
    const rec = { state: 'loading', t0: performance.now(), dataMs: 0 };
    districtLoading[id] = rec;
    const s = document.createElement('script');
    s.src = src;
    s.async = true;
    s.onload = function () {
      rec.dataMs = Math.round(performance.now() - rec.t0);
      rec.state = 'loaded';
      buildDistrict(id);
    };
    s.onerror = function () {
      rec.state = 'failed';
      document.documentElement.setAttribute('data-atlas-bld-error', id);
    };
    document.body.appendChild(s);
  }

  function blockTotals() {
    let count = 0, tagged = 0, tris = 0, draws = 0, loaded = 0, visible = 0, all = 0, dataMs = 0;
    for (const id in blockBuildings) {
      const o = blockBuildings[id];
      loaded++;
      all += o.count;
      const rec = blockLoading[id];
      if (rec && rec.dataMs) dataMs += rec.dataMs;
      const vis = o.meshes.length && o.meshes[0].visible;
      if (vis) {
        visible++;
        count += o.count; tagged += o.tagged; tris += o.tris; draws += o.meshes.length;
      }
    }
    return { count: count, tagged: tagged, tris: tris, draws: draws, loaded: loaded, visible: visible, all: all, dataMs: dataMs };
  }

  function publishBlockStats() {
    const s = blockTotals();
    const root = document.documentElement;
    root.setAttribute('data-atlas-blk-loaded', String(s.loaded));
    root.setAttribute('data-atlas-blk-visible', String(s.visible));
    root.setAttribute('data-atlas-blk-all', String(s.all));
    root.setAttribute('data-atlas-blk-count', String(s.count));
    root.setAttribute('data-atlas-blk-tagged', String(s.tagged));
    root.setAttribute('data-atlas-blk-est', String(s.count - s.tagged));
    root.setAttribute('data-atlas-blk-tris', String(s.tris));
    root.setAttribute('data-atlas-blk-draws', String(s.draws));
    root.setAttribute('data-atlas-blk-datams', String(s.dataMs));
    window.__ATLAS_BLKS__ = s;
    const p = proxyTotals();
    root.setAttribute('data-atlas-px-loaded', String(p.loaded));
    root.setAttribute('data-atlas-px-visible', String(p.visible));
    root.setAttribute('data-atlas-px-tris', String(p.tris));
    root.setAttribute('data-atlas-px-draws', String(p.draws));
    root.setAttribute('data-atlas-px-datams', String(p.dataMs));
    window.__ATLAS_PX__ = p;
    // 可见性刚变化时立刻补一帧，保证导出的 draw call / 三角形数与画面一致
    if (renderer) {
      renderer.render(scene, camera);
      root.setAttribute('data-atlas-calls', String(renderer.info.render.calls));
      root.setAttribute('data-atlas-tris-live', String(renderer.info.render.triangles));
    }
  }

  function proxyTotals() {
    let tris = 0, draws = 0, loaded = 0, visible = 0, dataMs = 0;
    for (const id in blockProxy) {
      const o = blockProxy[id];
      loaded++;
      const rec = proxyLoading[id];
      if (rec && rec.dataMs) dataMs += rec.dataMs;
      if (o.meshes.length && o.meshes[0].visible) {
        visible++;
        tris += o.tris;
        draws += o.meshes.length;
      }
    }
    return { tris: tris, draws: draws, loaded: loaded, visible: visible, dataMs: dataMs };
  }

  // 分块数据注入：file:// 下用 <script>，运行时零联网
  function requestBlockData(id, src) {
    if (blockBuildings[id] || blockLoading[id]) return;
    const rec = { state: 'loading', t0: performance.now(), dataMs: 0 };
    blockLoading[id] = rec;
    const s = document.createElement('script');
    s.src = src;
    s.async = true;
    s.onload = function () {
      rec.dataMs = Math.round(performance.now() - rec.t0);
      rec.state = 'loaded';
      buildBlock(id);
    };
    s.onerror = function () {
      rec.state = 'failed';
      document.documentElement.setAttribute('data-atlas-blk-error', id);
    };
    document.body.appendChild(s);
  }

  // 分块 LOD（两级）：远级按 400 m 代理，半径 < 26 km 才换成真实 footprint
  function updateBlocks() {
    const list = window.OSMBL;
    if (!list || !list.length) return;
    const eraModern = smoothstep(7.55, 7.85, t);
    const showFull = eraModern > 0.02 && cam.radius < BLK_MAX_RADIUS;
    const showPx = eraModern > 0.02 && cam.radius < BLK_PX_RADIUS;
    const reach = Math.min(BLK_REACH_MAX, Math.max(BLK_REACH_MIN, cam.radius * BLK_REACH_K));
    const reachPx = Math.min(BLK_PX_REACH_MAX, Math.max(BLK_PX_REACH_MIN, cam.radius * BLK_PX_REACH_K));
    let changed = false;
    for (let i = 0; i < list.length; i++) {
      const meta = list[i];
      const b = meta.b;
      const x0 = D.toX(b[0]), x1 = D.toX(b[2]);
      const z0 = D.toZ(b[3]), z1 = D.toZ(b[1]);
      const dx = Math.max(x0 - cam.tx, 0, cam.tx - x1);
      const dz = Math.max(z0 - cam.tz, 0, cam.tz - z1);
      const dist = Math.sqrt(dx * dx + dz * dz);
      const on = showFull && dist < reach;
      const onPx = showPx && dist < reachPx && meta.px;
      const obj = blockBuildings[meta.id];
      const px = blockProxy[meta.id];
      if (on && !hideBld) {
        if (!obj) requestBlockData(meta.id, meta.f);
        else if (!obj.meshes[0].visible) {
          for (let k = 0; k < obj.meshes.length; k++) obj.meshes[k].visible = true;
          changed = true;
        }
      } else if (obj && obj.meshes[0].visible) {
        for (let k = 0; k < obj.meshes.length; k++) obj.meshes[k].visible = false;
        changed = true;
      }
      // 近级存在（已构建或正在注入）时，代理让位，避免同块重复叠色
      const wantPx = onPx && !hideBld && !(on && (obj || blockLoading[meta.id]));
      if (wantPx) {
        if (!px) requestProxyData(meta.id, meta.px);
        else if (!px.meshes[0].visible) { px.meshes[0].visible = true; changed = true; }
      } else if (px && px.meshes[0].visible) {
        px.meshes[0].visible = false;
        changed = true;
      }
    }
    if (changed) publishBlockStats();
  }

  let bldMat = null;
  function buildingMaterial() {
    if (!bldMat) {
      bldMat = new THREE.MeshStandardMaterial({
        vertexColors: true, roughness: 0.82, metalness: 0.04,
        flatShading: true, side: THREE.DoubleSide
      });
    }
    return bldMat;
  }

  function applyVEToObj(obj) {
    if (!obj) return;
    for (let k = 0; k < obj.groups.length; k++) {
      const g = obj.groups[k];
      const mesh = obj.meshes[k];
      const pa = mesh.geometry.getAttribute('position').array;
      for (let i = 0; i < g.elev.length; i++) {
        // 地面用 TK.toUnits（地形 VE），楼高用 bldVE：街道级楼高接近 1:1，
        // 避免 100 m 塔楼被拉成 1 km "巨柱"。
        pa[i * 3 + 1] = TK.toUnits(g.elev[i]) + g.hoff[i] * bldVE / 1000;
      }
      mesh.geometry.getAttribute('position').needsUpdate = true;
      mesh.geometry.computeVertexNormals();
      mesh.geometry.computeBoundingSphere();
    }
  }

  function applyVEToBuildings() {
    for (const id in districtBuildings) applyVEToObj(districtBuildings[id]);
    for (const id in blockBuildings) applyVEToObj(blockBuildings[id]);
    for (const id in blockProxy) applyVEToProxy(blockProxy[id]);
  }

  // 代理箱体：按 elev（地面米）+ hoff（建筑高，米）重算 y
  function applyVEToProxy(obj) {
    if (!obj || !obj.meshes.length) return;
    const mesh = obj.meshes[0];
    const pa = mesh.geometry.getAttribute('position').array;
    for (let i = 0; i < obj.elev.length; i++) {
      pa[i * 3 + 1] = TK.toUnits(obj.elev[i]) + obj.hoff[i] * bldVE / 1000;
    }
    mesh.geometry.getAttribute('position').needsUpdate = true;
    mesh.geometry.computeVertexNormals();
    mesh.geometry.computeBoundingSphere();
  }

  function updateDistrictVisibility() {
    const eraModern = smoothstep(7.55, 7.85, t);
    let active = null;
    if (cam.radius < LOD_LOAD_RADIUS) {
      let best = 1e9;
      for (let i = 0; i < D.DISTRICTS.length; i++) {
        const dd = D.DISTRICTS[i];
        const dx = cam.tx - D.toX(dd.lon), dz = cam.tz - D.toZ(dd.lat);
        const dist = Math.sqrt(dx * dx + dz * dz);
        const lim = Math.max(LOD_SPAN_MIN, cam.radius * LOD_SPAN);
        if (dist < lim && dist < best) { best = dist; active = dd.id; }
      }
    }
    focusedDistrict = active;
    for (let i = 0; i < D.DISTRICTS.length; i++) {
      const dd = D.DISTRICTS[i];
      const isOn = (active === dd.id) && eraModern > 0.02;
      if (isOn) {
        const obj = districtBuildings[dd.id];
        if (!obj) requestDistrictData(dd.id);
        else for (let m = 0; m < obj.meshes.length; m++) obj.meshes[m].visible = true;
      } else {
        const obj = districtBuildings[dd.id];
        if (obj) for (let m = 0; m < obj.meshes.length; m++) obj.meshes[m].visible = false;
      }
      terrain.setDistrict(dd.id, !!active && active === dd.id);
    }
    // 片区地形切换后河面基准会变（60 m 网格 vs 780 m 网格），只在切换瞬间重算一次。
    if (active !== lastRiverDistrict) {
      lastRiverDistrict = active;
      refreshRiverHeights();
    }
    const chip = document.getElementById('district-state');
    if (chip) {
      const bl = blockTotals();
      const blkOn = cam.radius < BLK_MAX_RADIUS && bl.loaded > 0;
      let text;
      if (active === 'hz') {
        const dd = D.DISTRICTS.filter(function (x) { return x.id === active; })[0];
        text = blkOn
          ? 'LOD · ' + dd.name + ' · 分块建筑 ' + bl.count + ' 栋（真实 ' + bl.tagged + ' / 估算 ' + (bl.count - bl.tagged) + '）· draw ' + bl.draws
          : 'LOD · ' + dd.name + ' · 正在加载分块建筑…';
      } else if (active) {
        const dd = D.DISTRICTS.filter(function (x) { return x.id === active; })[0];
        const obj = districtBuildings[active];
        if (obj) {
          text = 'LOD · ' + dd.name + ' · 建筑 ' + obj.count + ' 栋（真实 ' + obj.tagged + ' / 估算 ' + (obj.count - obj.tagged) + '）· draw ' + obj.meshes.length;
        } else {
          const rec = districtLoading[active];
          text = 'LOD · ' + dd.name + ' · ' + (rec && rec.state === 'loading' ? '加载建筑数据…' : '等待建筑数据');
        }
      } else if (blkOn) {
        text = 'LOD · 杭州主城区 · 分块建筑 ' + bl.count + ' 栋（真实 ' + bl.tagged + ' / 估算 ' + (bl.count - bl.tagged) + '）· draw ' + bl.draws;
      } else {
        text = cam.radius < LOD_LOAD_RADIUS ? 'LOD · 视野内暂无片区（拖动到杭州 / 宁波 / 温州 / 绍兴）' : 'LOD · 全省视角（仅地形 / 河网 / 城市标记，无楼群）';
      }
      if (text !== lastChipText) {
        chip.textContent = text;
        lastChipText = text;
      }
      chip.classList.toggle('on', blkOn || (!!active && !!districtBuildings[active]));
    }
  }

  /* ---------------------------- 构筑物（历史层） ---------------------------- */
  function createItems() {
    for (let i = 0; i < D.ITEMS.length; i++) {
      const item = D.ITEMS[i];
      const buildT = clamp(item.from + 0.45, 0, ERA_COUNT - 1);
      const buildParams = paramsAt(buildT);
      const ctx = { groundY: function (lon, lat) { return terrain.heightForPoint(lon, lat, buildParams); } };
      const group = BK.create(item, ctx);
      const scaleF = (item.size || 1) * 2.9;
      scene.add(group);

      let anchor = new THREE.Vector3(0, 2, 0);
      const isPoint = group.position.lengthSq() > 0.0001;
      if (isPoint) {
        anchor.copy(group.position);
        anchor.y += (group.userData.labelY || 3) * scaleF;
      } else if (item.pts) {
        const m = item.pts[Math.floor(item.pts.length / 2)];
        anchor.set(D.toX(m[0]), ctx.groundY(m[0], m[1]) + (group.userData.labelY || 3), D.toZ(m[1]));
      }
      const label = makeLabel(item.label, 'item', item.type === 'fort' ? 0.78 : 0.92);
      label.position.copy(anchor);
      label.position.y += 1.4;
      scene.add(label);

      const mats = [];
      group.traverse(function (o) { if (o.material) mats.push(o.material); });
      itemObjs.push({
        item: item, group: group, label: label, mats: mats,
        baseScale: scaleF, isPoint: isPoint, alpha: 0,
        labelBaseY: anchor.y + 1.4
      });
    }
  }

  function updateItems(now) {
    const zoomed = cam.radius < 110;   // 片区视距下隐藏省级尺度的历史构筑物
    for (let i = 0; i < itemObjs.length; i++) {
      const o = itemObjs[i];
      const it = o.item;
      const a = Math.min(smoothstep(it.from, it.from + 0.30, t), 1 - smoothstep(it.to - 0.30, it.to, t));
      o.alpha = a;
      const vis = a > 0.015 && !zoomed;
      o.group.visible = vis;
      o.label.visible = a > 0.15 && !zoomed;
      if (!vis) continue;
      for (let k = 0; k < o.mats.length; k++) {
        const m = o.mats[k];
        if (m.transparent) m.opacity = a;
      }
      if (o.isPoint) {
        const s = o.baseScale * (0.72 + 0.28 * a);
        o.group.scale.set(s, s, s);
      }
      o.label.material.opacity = a * 0.92;
      o.label.position.y = o.labelBaseY + 0.18 * Math.sin(now * 0.7 + i);
    }
  }

  /* ---------------------------- 城市 / 地名 ---------------------------- */
  function createCities() {
    const modern = paramsAt(ERA_COUNT - 1);
    for (let i = 0; i < D.CITIES.length; i++) {
      const c = D.CITIES[i];
      const gy = terrain.heightForPoint(c.lon, c.lat, modern);
      const x = D.toX(c.lon), z = D.toZ(c.lat);
      const dot = new THREE.Mesh(
        new THREE.SphereGeometry(1.5, 12, 12),
        new THREE.MeshBasicMaterial({ color: 0xf4dfae, transparent: true, opacity: 1 })
      );
      dot.position.set(x, Math.max(gy, 0.15) + 1.5, z);
      scene.add(dot);
      const sprite = makeLabel(c.names[0] || '', 'city', c.size);
      sprite.position.set(x, Math.max(gy, 0.15) + 7.0, z);
      sprite.visible = false;
      scene.add(sprite);
      cityObjs.push({ city: c, dot: dot, sprite: sprite, nameIdx: -1, gy: gy });
    }
  }

  function updateCities() {
    const idx = clamp(Math.round(t), 0, ERA_COUNT - 1);
    for (let i = 0; i < cityObjs.length; i++) {
      const o = cityObjs[i];
      const a = smoothstep(o.city.from - 0.08, o.city.from + 0.22, t);
      let vis = a > 0.02;
      if (cam.radius < 120) {
        const dd = focusedDistrict ? D.DISTRICTS.filter(function (x) { return x.id === focusedDistrict; })[0] : null;
        if (!dd) vis = false;
        else {
          const dx = o.city.lon - dd.lon, dy = o.city.lat - dd.lat;
          if (Math.sqrt(dx * dx + dy * dy) > 0.6) vis = false;
        }
      }
      o.dot.visible = vis;
      o.sprite.visible = vis;
      // 城市圆点随视距缩小，并在片区视角贴地，避免拉近后变成悬空的大白球
      o.dot.scale.setScalar(clamp(cam.radius / 620, 0.06, 1));
      o.dot.position.y = Math.max(o.gy, 0.15) + (cam.radius < LOD_LOAD_RADIUS ? 0.18 : 1.5);
      if (!vis) continue;
      o.dot.material.opacity = a;
      o.sprite.material.opacity = a * 0.95;
      const name = o.city.names[idx];
      if (!name) { o.sprite.visible = false; o.dot.visible = false; continue; }
      if (o.nameIdx !== idx) { o.nameIdx = idx; setLabelText(o.sprite, name); }
    }
  }

  function createFeatures() {
    for (let i = 0; i < D.FEATURES.length; i++) {
      const f = D.FEATURES[i];
      const x = D.toX(f.lon), z = D.toZ(f.lat);
      let y = 0.7;
      if (f.kind === 'relief') y = Math.max(terrain.heightForPoint(f.lon, f.lat, paramsAt(ERA_COUNT - 1)), 1) + 2.2;
      const s = makeLabel(f.text, 'feature', f.size);
      s.position.set(x, y + 1.2, z);
      s.material.opacity = 0.88;
      scene.add(s);
      featureLabels.push(s);
    }
  }

  /* ---------------------------- 历史事件 ---------------------------- */
  function createEvents() {
    const markerGeo = new THREE.OctahedronGeometry(4.2, 0);
    const hitGeo = new THREE.SphereGeometry(10.5, 8, 8);
    for (let i = 0; i < D.EVENTS.length; i++) {
      const ev = D.EVENTS[i];
      const p = paramsAt(ev.era);
      const gy = terrain.heightForPoint(ev.lon, ev.lat, p);
      const x = D.toX(ev.lon), z = D.toZ(ev.lat);
      const baseY = Math.max(gy, 0.2) + 7.0;

      const g = new THREE.Group();
      g.position.set(x, baseY, z);
      const stem = new THREE.Mesh(
        new THREE.CylinderGeometry(0.09, 0.09, Math.max(3.5, baseY - Math.max(gy, 0.1)), 4),
        new THREE.MeshBasicMaterial({ color: 0xe0a15c, transparent: true, opacity: 0.36 })
      );
      stem.position.y = -(baseY - Math.max(gy, 0.1)) / 2;
      g.add(stem);

      const mat = new THREE.MeshStandardMaterial({
        color: 0xe8b06e, emissive: 0x9a5c16, emissiveIntensity: 0.85,
        metalness: 0.35, roughness: 0.35, transparent: true, opacity: 1
      });
      const mark = new THREE.Mesh(markerGeo, mat);
      g.add(mark);

      const ringMat = new THREE.MeshBasicMaterial({
        color: 0xe0a15c, transparent: true, opacity: 0.42, side: THREE.DoubleSide, depthWrite: false
      });
      const ring = new THREE.Mesh(new THREE.RingGeometry(4.6, 6.0, 26), ringMat);
      ring.rotation.x = -Math.PI / 2;
      ring.position.y = -6.6;
      g.add(ring);

      const hitMat = new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.001, depthWrite: false });
      const hit = new THREE.Mesh(hitGeo, hitMat);
      hit.userData.eventIndex = i;
      g.add(hit);

      const label = makeLabel(ev.title, 'event', 0.8);
      label.position.y = 4.8;
      g.add(label);

      scene.add(g);
      eventObjs.push({ ev: ev, group: g, mark: mark, ring: ring, label: label, baseY: baseY, mats: [mat, ringMat], idx: i, alpha: 0 });
    }
  }

  function updateEvents(now) {
    for (let i = 0; i < eventObjs.length; i++) {
      const o = eventObjs[i];
      const d = Math.abs(t - o.ev.era);
      const a = 1 - smoothstep(0.42, 0.92, d);
      o.alpha = a;
      const vis = a > 0.03 && cam.radius > 90;
      o.group.visible = vis;
      if (!vis) continue;
      o.mats[0].opacity = a;
      o.mats[1].opacity = a * (0.34 + 0.16 * Math.sin(now * 2.4 + i));
      o.label.material.opacity = a * 0.95;
      o.group.position.y = o.baseY + Math.sin(now * 1.5 + i * 0.8) * 0.3;
      o.mark.rotation.y = now * 0.5 + i;
      o.ring.rotation.z = now * 0.35;
      const sc = (hovered === i ? 1.32 : 1.0) * (1 + 0.05 * Math.sin(now * 2 + i));
      o.mark.scale.setScalar(sc);
    }
  }

  /* ---------------------------- UI ---------------------------- */
  /* 时代切换（时间轴 / 刻度 / 方向键）已移除：本页固定展示当代推测复原状态 */

  // 建筑楼高夸张系数：街道级（≤6 km）取地形的 0.2 倍（VE=10 时 ×2，100 m 楼 ≈ 0.2 单位，
  // 与 30–40 m 的 footprint 比例接近真实）；≥20 km 与地形同倍，保证远景城市体量与地形一致。
  function bldVEAt(radius) {
    let k;
    if (radius <= 6) k = 0.2;
    else if (radius >= 20) k = 1;
    else k = 0.2 + 0.8 * (Math.log(radius / 6) / Math.log(20 / 6));
    return veValue * k;
  }

  function updateBldVE() {
    const want = legacyBase ? veValue : bldVEAt(cam.radius);
    if (Math.abs(want - bldVE) < 0.2) return;
    bldVE = want;
    applyVEToBuildings();
    updateScaleNote();
    document.documentElement.setAttribute('data-atlas-bldve', bldVE.toFixed(1));
  }

  function updateScaleNote() {
    const lab = document.getElementById('ve-val');
    if (lab) lab.textContent = '×' + veValue.toFixed(0);
    const sc = document.getElementById('scale-note');
    if (!sc) return;
    const same = Math.abs(bldVE - veValue) < 0.2;
    sc.textContent = same
      ? '垂直夸张 ×' + veValue.toFixed(0) + '（地形与楼高相同，1 km 水平 ≈ ' + (1000 / veValue).toFixed(0) + ' m 高差）'
      : '地形 ×' + veValue.toFixed(0) + ' · 楼高 ×' + bldVE.toFixed(1) + '（街道级楼高近 1:1）';
    document.documentElement.setAttribute('data-atlas-ve', veValue.toFixed(1));
    document.documentElement.setAttribute('data-atlas-bldve', bldVE.toFixed(1));
  }

  function setVE(v) {
    veValue = v;
    bldVE = bldVEAt(cam.radius);
    terrain.setVerticalExaggeration(v);
    applyVEToBuildings();
    refreshRiverHeights();
    refreshLakeHeights();
    refreshStreetHeights();
    updateScaleNote();
  }

  function bindUI() {
    window.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { closeEventCard(); closeAbout(); closePrecision(); }
    });

    document.getElementById('ev-close').addEventListener('click', closeEventCard);
    document.getElementById('btn-about').addEventListener('click', function () {
      document.getElementById('about').classList.add('show');
    });
    document.getElementById('btn-about-close').addEventListener('click', closeAbout);
    document.getElementById('about').addEventListener('click', function (e) {
      if (e.target.id === 'about') closeAbout();
    });

    const openPrecision = function () { document.getElementById('precision').classList.add('show'); };
    document.getElementById('btn-precision').addEventListener('click', openPrecision);
    document.getElementById('btn-precision-inline').addEventListener('click', openPrecision);
    document.getElementById('btn-precision-close').addEventListener('click', closePrecision);
    document.getElementById('precision').addEventListener('click', function (e) {
      if (e.target.id === 'precision') closePrecision();
    });

    document.getElementById('btn-reset').addEventListener('click', resetCamera);
    const bst = document.getElementById('btn-streets');
    if (bst) bst.addEventListener('click', function () { setStreetVisible(!streetVisible); });

    const ve = document.getElementById('ve-range');
    if (ve) {
      ve.addEventListener('input', function () {
        const lab = document.getElementById('ve-val');
        if (lab) lab.textContent = '×' + ve.value;
      });
      ve.addEventListener('change', function () { setVE(parseFloat(ve.value)); });
    }

    const chips = document.getElementById('district-chips');
    if (chips) {
      D.DISTRICTS.forEach(function (dd) {
        const b = document.createElement('button');
        b.className = 'dchip';
        b.dataset.id = dd.id;
        b.textContent = dd.short;
        b.title = dd.name;
        b.addEventListener('click', function () { focusDistrict(dd.id); });
        chips.appendChild(b);
      });
      const prov = document.createElement('button');
      prov.className = 'dchip prov';
      prov.textContent = '全省';
      prov.addEventListener('click', function () { resetCamera(); });
      chips.insertBefore(prov, chips.firstChild);
    }

    document.getElementById('btn-start').addEventListener('click', function () {
      if (introStarted) return;
      introStarted = true;
      document.getElementById('intro').classList.add('hide');
      setTimeout(function () { document.getElementById('intro').style.display = 'none'; }, 800);
      setTimeout(function () {
        const h = document.getElementById('hint');
        if (h) h.classList.add('hide');
      }, 9000);
    });
  }

  function closeAbout() {
    document.getElementById('about').classList.remove('show');
  }

  function closePrecision() {
    document.getElementById('precision').classList.remove('show');
  }

  function showEvent(i) {
    const ev = D.EVENTS[i];
    openEvent = i;
    document.getElementById('ev-time').textContent = ev.time;
    document.getElementById('ev-title').textContent = ev.title;
    document.getElementById('ev-place').textContent = '地点 · ' + ev.place;
    document.getElementById('ev-fact').textContent = ev.fact;
    document.getElementById('ev-meaning').textContent = ev.meaning;
    document.getElementById('event-card').classList.add('show');
  }

  function closeEventCard() {
    openEvent = -1;
    document.getElementById('event-card').classList.remove('show');
  }

  /* ---------------------------- 相机 ---------------------------- */
  function updateCamera() {
    const sp = Math.sin(cam.phi), cp = Math.cos(cam.phi);
    camera.position.set(
      cam.tx + cam.radius * sp * Math.sin(cam.theta),
      cam.radius * cp,
      cam.tz + cam.radius * sp * Math.cos(cam.theta)
    );
    camera.lookAt(cam.tx, 0, cam.tz);
    // 雾按视距缩放：省域视角（620）保持原密度，街道级（3–5 km）按 1/r 降低，
    // 否则 FogExp2 在 3 km 处已把整幅画面吃掉（近景只剩一片暗绿）。
    if (scene && scene.fog) scene.fog.density = 0.00058 * clamp(620 / cam.radius, 0.10, 1);
  }

  function resetCamera() {
    focusedDistrict = null;
    camAnim = {
      t: 0, dur: 0.9,
      from: { theta: cam.theta, phi: cam.phi, radius: cam.radius, tx: cam.tx, tz: cam.tz },
      to: { theta: 0.55, phi: 1.02, radius: 620, tx: 0, tz: 0 }
    };
    syncDistrictChips(null);
  }

  function focusDistrict(id) {
    const dd = D.DISTRICTS.filter(function (x) { return x.id === id; })[0];
    if (!dd) return;
    requestDistrictData(id);
    camAnim = {
      t: 0, dur: 1.1,
      from: { theta: cam.theta, phi: cam.phi, radius: cam.radius, tx: cam.tx, tz: cam.tz },
      to: { theta: 0.62, phi: 0.72, radius: dd.zoom || dd.radius, tx: D.toX(dd.lon), tz: D.toZ(dd.lat) }
    };
    syncDistrictChips(id);
    const hint = document.getElementById('hint');
    if (hint) hint.classList.add('hide');
  }

  function syncDistrictChips(id) {
    const chips = document.getElementById('district-chips');
    if (!chips) return;
    Array.prototype.forEach.call(chips.children, function (b) {
      b.classList.toggle('on', (b.dataset.id === id) || (id === null && b.classList.contains('prov')));
    });
  }

  function bindCameraControls() {
    let pointers = new Map();
    let drag = null;
    let pinchDist = 0;

    canvas.addEventListener('contextmenu', function (e) { e.preventDefault(); });
    canvas.addEventListener('pointerdown', function (e) {
      canvas.setPointerCapture(e.pointerId);
      pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (pointers.size === 2) {
        const pts = Array.from(pointers.values());
        pinchDist = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
        drag = { mode: 'pinch' };
        return;
      }
      drag = {
        mode: (e.button === 2 || e.shiftKey) ? 'pan' : 'rotate',
        lastX: e.clientX, lastY: e.clientY,
        startX: e.clientX, startY: e.clientY, moved: 0
      };
    });

    canvas.addEventListener('pointermove', function (e) {
      if (pointers.has(e.pointerId)) pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (drag && drag.mode === 'pinch' && pointers.size === 2) {
        const pts = Array.from(pointers.values());
        const d = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
        if (pinchDist > 0) cam.radius = clamp(cam.radius * (pinchDist / d), 14, 1400);
        pinchDist = d;
        return;
      }
      if (!drag) { hoverTest(e); return; }
      const dx = e.clientX - drag.lastX;
      const dy = e.clientY - drag.lastY;
      drag.lastX = e.clientX; drag.lastY = e.clientY;
      drag.moved += Math.abs(dx) + Math.abs(dy);
      if (drag.mode === 'rotate') {
        cam.theta -= dx * 0.0062;
        cam.phi = clamp(cam.phi - dy * 0.0042, 0.16, 1.44);
        camAnim = null;
      } else if (drag.mode === 'pan') {
        const s = cam.radius * 0.00125;
        const sinT = Math.sin(cam.theta), cosT = Math.cos(cam.theta);
        cam.tx -= (dx * cosT - dy * sinT) * s * 0.9;
        cam.tz += (dx * sinT + dy * cosT) * s * 0.9;
        cam.tx = clamp(cam.tx, -280, 280);
        cam.tz = clamp(cam.tz, -260, 260);
        camAnim = null;
      }
      hoverTest(e);
    });

    function endPointer(e) {
      if (pointers.has(e.pointerId)) pointers.delete(e.pointerId);
      if (drag && drag.mode !== 'pinch' && drag.moved < 7 && e.button === 0) pickEvent(e);
      if (pointers.size === 0) drag = null;
    }
    canvas.addEventListener('pointerup', endPointer);
    canvas.addEventListener('pointercancel', function (e) {
      pointers.delete(e.pointerId);
      if (pointers.size === 0) drag = null;
    });

    canvas.addEventListener('wheel', function (e) {
      e.preventDefault();
      const before = cam.radius;
      cam.radius = clamp(cam.radius * Math.exp(e.deltaY * 0.0011), 2, 1400);
      // 缩放时朝指针方向轻微推进，便于进入片区
      if (cam.radius < before) {
        const nd = toNDC(e);
        cam.tx += (nd.x * 0.6) * (before - cam.radius) * 0.35 * Math.sin(cam.theta);
        cam.tz += (nd.y * 0.6) * (before - cam.radius) * 0.35 * Math.cos(cam.theta);
      }
      camAnim = null;
      hoverTest(e);
    }, { passive: false });

    // 双击 = 朝指针方向放大一步（与地图/地球仪惯例一致）。
    // 原来这里绑的是 resetCamera：用户想双击放大时会被反复拉回全省起始取景，
    // 是「跳回首屏」的直接触发点。复位只保留右上角 ⟲ 与「全省」chip。
    canvas.addEventListener('dblclick', function (e) {
      e.preventDefault();
      const before = cam.radius;
      cam.radius = clamp(cam.radius * 0.55, 2, 1400);
      const nd = toNDC(e);
      cam.tx += (nd.x * 0.6) * (before - cam.radius) * 0.35 * Math.sin(cam.theta);
      cam.tz += (nd.y * 0.6) * (before - cam.radius) * 0.35 * Math.cos(cam.theta);
      camAnim = null;
    });
  }

  function toNDC(e) {
    const r = canvas.getBoundingClientRect();
    return { x: ((e.clientX - r.left) / r.width) * 2 - 1, y: -((e.clientY - r.top) / r.height) * 2 + 1 };
  }

  function visibleEventHits() {
    const out = [];
    for (let i = 0; i < eventObjs.length; i++) {
      if (eventObjs[i].group.visible) eventObjs[i].group.children.forEach(function (ch) {
        if (ch.userData && ch.userData.eventIndex != null) out.push(ch);
      });
    }
    return out;
  }

  function hoverTest(e) {
    raycaster.setFromCamera(toNDC(e), camera);
    const hits = raycaster.intersectObjects(visibleEventHits(), false);
    const id = hits.length ? hits[0].object.userData.eventIndex : -1;
    hovered = id;
    canvas.style.cursor = id >= 0 ? 'pointer' : 'grab';
  }

  function pickEvent(e) {
    raycaster.setFromCamera(toNDC(e), camera);
    const hits = raycaster.intersectObjects(visibleEventHits(), false);
    if (hits.length) showEvent(hits[0].object.userData.eventIndex);
  }

  /* ---------------------------- 主循环 ---------------------------- */
  function animate() {
    requestAnimationFrame(animate);
    const dt = Math.min(0.05, clock.getDelta());
    elapsed += dt;

    if (camAnim) {
      camAnim.t += dt;
      const f = clamp(camAnim.t / camAnim.dur, 0, 1);
      const e = 1 - Math.pow(1 - f, 3);
      cam.theta = lerp(camAnim.from.theta, camAnim.to.theta, e);
      cam.phi = lerp(camAnim.from.phi, camAnim.to.phi, e);
      cam.radius = lerp(camAnim.from.radius, camAnim.to.radius, e);
      cam.tx = lerp(camAnim.from.tx, camAnim.to.tx, e);
      cam.tz = lerp(camAnim.from.tz, camAnim.to.tz, e);
      if (f >= 1) camAnim = null;
    }
    updateCamera();
    updateBldVE();

    updateItems(elapsed);
    updateCities();
    updateEvents(elapsed);
    updateDistrictVisibility();
    updateBlocks();
    updateLabelScale();

    if (openEvent >= 0 && Math.abs(t - D.EVENTS[openEvent].era) > 0.95) closeEventCard();

    terrain.sea.material.uniforms.uTime.value = elapsed;

    renderer.render(scene, camera);

    // 实时 draw call / 三角形数：逐帧比对，值变化才写 DOM（虚拟时间下 1 s 采样会滞后）
    stats.frames++;
    const rCalls = renderer.info.render.calls, rTris = renderer.info.render.triangles;
    if (rCalls !== stats.drawCalls) {
      stats.drawCalls = rCalls;
      document.documentElement.setAttribute('data-atlas-calls', String(rCalls));
    }
    if (rTris !== stats.tris) {
      stats.tris = rTris;
      document.documentElement.setAttribute('data-atlas-tris-live', String(rTris));
    }
    const nowMs = performance.now();
    if (nowMs - stats.lastFpsTime > 1000) {
      stats.fps = Math.round(stats.frames * 1000 / (nowMs - stats.lastFpsTime));
      stats.frames = 0;
      stats.lastFpsTime = nowMs;
      window.__ATLAS_STATS__ = {
        fps: stats.fps,
        tris: renderer.info.render.triangles,
        calls: renderer.info.render.calls,
        radius: Math.round(cam.radius),
        district: focusedDistrict
      };
      document.documentElement.setAttribute('data-atlas-fps', stats.fps);
      document.documentElement.setAttribute('data-atlas-tris-live', renderer.info.render.triangles);
      document.documentElement.setAttribute('data-atlas-calls', renderer.info.render.calls);
    }
  }

  /* ---------------------------- 启动 ---------------------------- */
  function init() {
    if (typeof THREE === 'undefined') {
      fail('未能加载 <b>vendor/three.min.js</b>。请确认该文件与 index.html 一起复制，并保持目录结构不变。');
      return;
    }
    try { createScene(); } catch (err) {
      fail('无法创建 WebGL 渲染器：' + (err && err.message ? err.message : err));
      return;
    }

    try {
      terrain = TK.create(scene);
      window.__ATLAS_TERRAIN__ = terrain;
    } catch (err) {
      fail('真实高程数据加载失败：' + (err && err.message ? err.message : err) +
        '<br>请确认 <b>js/dem.js</b> 与 <b>js/dem-districts.js</b> 存在。');
      return;
    }
    terrain.apply(paramsAt(t));

    createGraticule();
    buildRivers();
    buildRiverIndex();
    buildLakes();
    buildStreets();
    createItems();
    createCities();
    createFeatures();
    createEvents();
    bindUI();
    bindCameraControls();
    setVE(10);
    updateCamera();

    var q = {};
    location.search.replace(/[?&]([^=&]+)=([^&]*)/g, function (m, k, v) { q[k] = decodeURIComponent(v); });
    if (q.hide === 'streets') setStreetVisible(false);
    if (q.ve != null && q.ve !== '') setVE(clamp(parseFloat(q.ve) || 10, 4, 24));
    if (q.district) { setTimeout(function () { focusDistrict(q.district); camAnim = null; var dd = D.DISTRICTS.filter(function (x) { return x.id === q.district; })[0]; if (dd) { cam.tx = D.toX(dd.lon); cam.tz = D.toZ(dd.lat); cam.radius = parseFloat(q.zoom) || (dd.zoom || dd.radius); cam.phi = 0.72; updateCamera(); } }, 10); }
    if (q.lon != null && q.lat != null) {
      camAnim = null;
      setTimeout(function () {
        cam.tx = D.toX(parseFloat(q.lon)); cam.tz = D.toZ(parseFloat(q.lat));
        cam.radius = parseFloat(q.radius) || cam.radius;
        cam.phi = q.phi != null ? parseFloat(q.phi) : 0.02;
        if (q.theta != null) cam.theta = parseFloat(q.theta);
        updateCamera();
      }, 30);
    }
    if (q.view === 'top') {
      camAnim = null;
      setTimeout(function () {
        cam.theta = 0; cam.phi = 0.02; cam.radius = parseFloat(q.radius) || 760;
        cam.tx = 0; cam.tz = 0; updateCamera();
      }, 30);
    }
    if (q.bare === '1') document.body.classList.add('bare');
    if (q.diag === 'water') { diagWater = true; setTimeout(runWaterDiag, 40); }
    if (q.legacy === '1') {
      legacyBase = true;
      bldVE = veValue; lastBldVE = veValue;
      applyVEToBuildings();
      updateScaleNote();
    }
    if (q.diag === 'lake') setTimeout(diagLakes, 40);
    if (q.diag === 'probe') probeAt(parseFloat(q.lon || '120.384'), parseFloat(q.lat || '30.269'));
    if (q.panel === 'precision') setTimeout(function () {
      document.getElementById('precision').classList.add('show');
    }, 30);
    if (q.hide === 'sea' && terrain.sea) terrain.sea.visible = false;
    if (q.hide === 'lake' && lakeGroup) lakeGroup.visible = false;
    if (q.hide === 'river' && riverGroup) riverGroup.visible = false;
    if (q.hide === 'bld') hideBld = true;
    if (q.autostart === '1') {
      introStarted = true;
      document.getElementById('intro').classList.add('hide');
      document.getElementById('intro').style.display = 'none';
      var hh = document.getElementById('hint'); if (hh) hh.classList.add('hide');
    }

    window.addEventListener('resize', function () {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    renderer.render(scene, camera);
    requestAnimationFrame(animate);

    const loadMs = Math.round(performance.now() - loadStart);
    window.__ATLAS_READY__ = true;
    window.__ATLAS_READY_MS__ = Math.round(performance.now());
    document.documentElement.setAttribute('data-atlas-ready', '1');
    document.documentElement.setAttribute('data-atlas-ready-ms', String(window.__ATLAS_READY_MS__));
    document.documentElement.setAttribute('data-atlas-eras', String(ERA_COUNT));
    document.documentElement.setAttribute('data-atlas-events', String(D.EVENTS.length));
    document.documentElement.setAttribute('data-atlas-items', String(D.ITEMS.length));
    document.documentElement.setAttribute('data-atlas-dem', window.DEM ? 'real' : 'none');
    document.documentElement.setAttribute('data-atlas-loadms', String(loadMs));
    document.documentElement.setAttribute('data-atlas-rivers', window.OSMR ? String(window.OSMR.length) : '0');
    var st = terrain.stats();
    document.documentElement.setAttribute('data-atlas-tris', String(st.tris));
    console.log('[Atlas] ready · eras=' + ERA_COUNT + ' · events=' + D.EVENTS.length +
      ' · rivers=' + (window.OSMR ? window.OSMR.length : 0) +
      ' · terrainTris=' + st.tris + ' · load=' + loadMs + 'ms');

    // 不在首屏预热片区：建筑数据按 LOD 阈值按需注入，全省视角保持零建筑数据
  }

  window.addEventListener('load', function () {
    setTimeout(init, 60);
  });
})();
