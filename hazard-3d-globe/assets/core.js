/* =========================================================
   全球自然灾害 3D 地球监测 — Core
   Three.js scene, Earth, borders, camera controls, picking.
   ========================================================= */
(function () {
  'use strict';
  const HZ = window.HZ = window.HZ || {};
  const diag = HZ.diag = { errors: [], warnings: [], started: Date.now(), ready: false, fps: 0 };

  window.addEventListener('error', function (e) {
    diag.errors.push((e.message || 'error') + ' @' + (e.filename || '') + ':' + (e.lineno || 0));
  });
  window.addEventListener('unhandledrejection', function (e) {
    diag.errors.push('Promise: ' + (e.reason && e.reason.message ? e.reason.message : String(e.reason)));
  });

  if (!window.THREE) {
    const intro = document.getElementById('intro');
    if (intro) intro.innerHTML = '<div class="intro-card"><h1>三维组件加载失败</h1>' +
      '<div class="sub">渲染引擎未能启动</div><div class="intro-load">本地渲染文件缺失或被浏览器拦截，请确认 assets/ 目录完整。</div></div>';
    return;
  }

  const THREE = window.THREE;
  HZ.THREE = THREE;
  const D2R = Math.PI / 180;
  const R = 1.0;                 // 地球半径（场景单位）
  const WORLD_Y = new THREE.Vector3(0, 1, 0);
  const WORLD_X = new THREE.Vector3(1, 0, 0);
  const WORLD_Z = new THREE.Vector3(0, 0, 1);

  /* ---------------- math helpers ---------------- */
  HZ.latLonToVec3 = function (lat, lon, radius) {
    const r = radius == null ? R : radius;
    const phi = (90 - lat) * D2R;
    const theta = (lon + 180) * D2R;
    return new THREE.Vector3(
      -r * Math.sin(phi) * Math.cos(theta),
      r * Math.cos(phi),
      r * Math.sin(phi) * Math.sin(theta)
    );
  };
  HZ.vec3ToLatLon = function (v) {
    const r = v.length();
    const lat = 90 - Math.acos(v.y / r) / D2R;
    let lon = Math.atan2(v.z, -v.x) / D2R - 180;
    while (lon < -180) lon += 360;
    while (lon > 180) lon -= 360;
    return { lat: lat, lon: lon };
  };
  HZ.surfaceQuat = function (p) {
    return new THREE.Quaternion().setFromUnitVectors(WORLD_Z, p.clone().normalize());
  };
  HZ.rand = function (seed) {
    // deterministic pseudo random (mulberry32)
    let t = seed >>> 0;
    return function () {
      t += 0x6D2B79F5;
      let r = Math.imul(t ^ (t >>> 15), 1 | t);
      r = r + Math.imul(r ^ (r >>> 7), 61 | r) ^ r;
      return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
    };
  };
  HZ.hashStr = function (s) {
    let h = 2166136261;
    for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
    return h >>> 0;
  };
  HZ.colorForMag = function (m) {
    if (m >= 7) return '#c94b63';
    if (m >= 6) return '#dd6b5c';
    if (m >= 5) return '#e8a05c';
    if (m >= 4) return '#e6c67a';
    if (m >= 2.5) return '#79c9c0';
    return '#7fa8c4';
  };
  HZ.fmtTime = function (t) {
    if (t == null) return '演示';
    const d = new Date(t);
    const pad = n => String(n).padStart(2, '0');
    return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()) + ' ' +
      pad(d.getHours()) + ':' + pad(d.getMinutes()) + ':' + pad(d.getSeconds());
  };
  HZ.relativeTime = function (t) {
    if (t == null) return '示例事件';
    const anchor = (HZ.data && HZ.data.referenceNow) ? HZ.data.referenceNow : Date.now();
    const diff = Math.max(0, anchor - t);
    const min = diff / 60000;
    if (min < 1) return '刚刚';
    if (min < 60) return Math.round(min) + ' 分钟前';
    if (min < 1440) return Math.round(min / 60) + ' 小时前';
    return Math.round(min / 1440) + ' 天前';
  };
  HZ.debounce = function (fn, ms) {
    let id = 0;
    return function () {
      const args = arguments, self = this;
      clearTimeout(id);
      id = setTimeout(function () { fn.apply(self, args); }, ms);
    };
  };

  /* ---------------- renderer / scene ---------------- */
  const canvas = document.getElementById('globe');
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: false, powerPreference: 'high-performance' });
  } catch (err) {
    diag.errors.push('WebGL init failed: ' + err.message);
    document.getElementById('introLoad').textContent = '当前浏览器/显卡无法初始化 WebGL，请开启硬件加速后重试。';
    return;
  }
  HZ.renderer = renderer;
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setSize(window.innerWidth, window.innerHeight, false);
  renderer.setClearColor(0x070a12, 1);
  renderer.outputEncoding = THREE.LinearEncoding;

  const scene = new THREE.Scene();
  HZ.scene = scene;
  const camera = new THREE.PerspectiveCamera(42, window.innerWidth / window.innerHeight, 0.1, 300);
  camera.position.set(0, 0, 2.92);
  HZ.camera = camera;

  const globe = new THREE.Group();
  scene.add(globe);
  HZ.globe = globe;

  /* ---------------- starfield ---------------- */
  (function stars() {
    const COUNT = 2200;
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(COUNT * 3);
    const col = new Float32Array(COUNT * 3);
    const rand = HZ.rand(90210);
    for (let i = 0; i < COUNT; i++) {
      const theta = rand() * Math.PI * 2;
      const z = rand() * 2 - 1;
      const r = 16 + rand() * 40;
      const s = Math.sqrt(1 - z * z);
      pos[i * 3] = Math.cos(theta) * s * r;
      pos[i * 3 + 1] = z * r;
      pos[i * 3 + 2] = Math.sin(theta) * s * r;
      const b = 0.35 + rand() * 0.65;
      const tint = rand();
      col[i * 3] = b * (tint > .8 ? 0.72 : 0.85);
      col[i * 3 + 1] = b * 0.92;
      col[i * 3 + 2] = b;
    }
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
    const mat = new THREE.PointsMaterial({ size: 0.055, vertexColors: true, transparent: true, opacity: .72,
      depthWrite: false, blending: THREE.AdditiveBlending, sizeAttenuation: true });
    const pts = new THREE.Points(geo, mat);
    scene.add(pts);
    HZ.stars = pts;
  })();

  /* ---------------- earth shader ---------------- */
  const sunDir = new THREE.Vector3(0.94, 0.32, 0.52).normalize();
  const earthUniforms = {
    uDay: { value: null },
    uNight: { value: null },
    uNightMix: { value: 1.0 },
    uSunDir: { value: sunDir },
    uTime: { value: 0 },
    uHasTex: { value: 0 }
  };
  const earthMat = new THREE.ShaderMaterial({
    uniforms: earthUniforms,
    vertexShader: [
      'varying vec2 vUv;',
      'varying vec3 vN;',
      'varying vec3 vP;',
      'void main(){',
      '  vUv = uv;',
      '  vN = normalize(mat3(modelMatrix) * normal);',
      '  vec4 wp = modelMatrix * vec4(position,1.0);',
      '  vP = wp.xyz;',
      '  gl_Position = projectionMatrix * viewMatrix * wp;',
      '}'
    ].join('\n'),
    fragmentShader: [
      'uniform sampler2D uDay;',
      'uniform sampler2D uNight;',
      'uniform float uNightMix;',
      'uniform vec3 uSunDir;',
      'uniform float uHasTex;',
      'varying vec2 vUv;',
      'varying vec3 vN;',
      'varying vec3 vP;',
      'void main(){',
      '  vec3 n = normalize(vN);',
      '  vec3 v = normalize(cameraPosition - vP);',
      '  float sun = dot(n, normalize(uSunDir));',
      '  float lit = smoothstep(-0.22, 0.52, sun);',
      '  vec3 day = vec3(0.055, 0.115, 0.17);',
      '  vec3 night = vec3(0.0);',
      '  if (uHasTex > 0.5) {',
      '    day = texture2D(uDay, vUv).rgb;',
      '    night = texture2D(uNight, vUv).rgb;',
      '  } else {',
      '    float band = smoothstep(0.5,0.0,abs(vUv.y-0.5));',
      '    day = mix(vec3(0.03,0.10,0.17), vec3(0.12,0.26,0.30), band);',
      '  }',
      '  vec3 col = day * mix(0.075, 1.03, lit);',
      '  col = mix(col, col * vec3(0.82,0.88,1.06), (1.0 - lit) * 0.8);',
      '  col += night * uNightMix * (1.0 - lit) * 1.05;',
      '  float rim = pow(1.0 - clamp(dot(n, v), 0.0, 1.0), 3.2);',
      '  col += vec3(0.10, 0.21, 0.31) * rim * 0.5;',
      '  float spec = pow(max(dot(reflect(-normalize(uSunDir), n), v), 0.0), 18.0);',
      '  col += vec3(0.55,0.48,0.36) * spec * 0.2 * lit;',
      '  gl_FragColor = vec4(col, 1.0);',
      '}'
    ].join('\n')
  });
  const earth = new THREE.Mesh(new THREE.SphereGeometry(R, 128, 96), earthMat);
  globe.add(earth);
  HZ.earth = earth;

  // textures (embedded data URIs; still works when offline)
  (function loadTex() {
    if (!window.__TEX || !window.__TEX.day) {
      diag.warnings.push('textures.js missing, using procedural globe');
      return;
    }
    const loader = new THREE.TextureLoader();
    loader.load(window.__TEX.day, function (t) {
      t.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy());
      t.wrapS = THREE.RepeatWrapping;
      t.wrapT = THREE.ClampToEdgeWrapping;
      earthUniforms.uDay.value = t;
      checkTexReady();
    }, undefined, function () { diag.warnings.push('day texture decode failed'); });
    loader.load(window.__TEX.night, function (t) {
      t.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy());
      t.wrapS = THREE.RepeatWrapping;
      earthUniforms.uNight.value = t;
      checkTexReady();
    }, undefined, function () { diag.warnings.push('night texture decode failed'); });
    function checkTexReady() {
      if (earthUniforms.uDay.value) earthUniforms.uHasTex.value = 1;
    }
  })();

  // atmosphere glow (back side fresnel)
  (function atmosphere() {
    const uniforms = { uColor: { value: new THREE.Color(0x3c5f8c) }, uPow: { value: 3.2 }, uStrength: { value: 0.78 } };
    const mat = new THREE.ShaderMaterial({
      uniforms: uniforms,
      side: THREE.BackSide, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
      vertexShader: [
        'varying vec3 vNV;',
        'void main(){ vNV = normalize(normalMatrix * normal);',
        ' gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }'
      ].join('\n'),
      fragmentShader: [
        'uniform vec3 uColor; uniform float uPow; uniform float uStrength;',
        'varying vec3 vNV;',
        'void main(){',
        '  float f = pow(1.0 - abs(normalize(vNV).z), uPow);',
        '  gl_FragColor = vec4(uColor, f * 0.85 * uStrength);',
        '}'
      ].join('\n')
    });
    const m = new THREE.Mesh(new THREE.SphereGeometry(R * 1.075, 96, 64), mat);
    scene.add(m);
    // thin inner cyan rim
    const mat2 = new THREE.ShaderMaterial({
      uniforms: { uColor: { value: new THREE.Color(0x9db4c4) } },
      side: THREE.BackSide, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
      vertexShader: 'varying vec3 vNV; void main(){ vNV = normalize(normalMatrix * normal); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
      fragmentShader: 'uniform vec3 uColor; varying vec3 vNV; void main(){ float f = pow(1.0-abs(normalize(vNV).z), 7.0); gl_FragColor=vec4(uColor, f*0.42); }'
    });
    scene.add(new THREE.Mesh(new THREE.SphereGeometry(R * 1.012, 96, 64), mat2));
  })();

  /* ---------------- graticule ---------------- */
  (function graticule() {
    const segs = [];
    const r = R * 1.0035;
    function pushLL(lat1, lon1, lat2, lon2) {
      const a = HZ.latLonToVec3(lat1, lon1, r);
      const b = HZ.latLonToVec3(lat2, lon2, r);
      segs.push(a.x, a.y, a.z, b.x, b.y, b.z);
    }
    for (let lat = -75; lat <= 75; lat += 15) {
      for (let lon = -180; lon < 180; lon += 4) pushLL(lat, lon, lat, lon + 4);
    }
    for (let lon = -180; lon < 180; lon += 15) {
      for (let lat = -88; lat < 88; lat += 4) pushLL(lat, lon, lat + 4, lon);
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(segs, 3));
    const mat = new THREE.LineBasicMaterial({ color: 0x6a7f90, transparent: true, opacity: 0.22, depthWrite: false });
    globe.add(new THREE.LineSegments(geo, mat));

    // equator + tropics
    const extra = [];
    [0, 23.44, -23.44].forEach(function (lat) {
      const rr = R * 1.004;
      for (let lon = -180; lon < 180; lon += 3) {
        const a = HZ.latLonToVec3(lat, lon, rr), b = HZ.latLonToVec3(lat, lon + 3, rr);
        extra.push(a.x, a.y, a.z, b.x, b.y, b.z);
      }
    });
    const g2 = new THREE.BufferGeometry();
    g2.setAttribute('position', new THREE.Float32BufferAttribute(extra, 3));
    globe.add(new THREE.LineSegments(g2, new THREE.LineBasicMaterial({
      color: 0x9a8268, transparent: true, opacity: 0.15, depthWrite: false
    })));
  })();

  /* ---------------- country borders (TopoJSON) ---------------- */
  (function borders() {
    if (!window.__WORLD_TOPO || !window.topojson) {
      diag.warnings.push('country borders source missing');
      return;
    }
    try {
      const topo = window.__WORLD_TOPO;
      const objects = topo.objects || {};
      const key = Object.keys(objects)[0];
      if (!key) return;
      const meshBorders = topojson.mesh(topo, objects[key], function (a, b) { return a !== b; });
      const meshCoast = topojson.mesh(topo, objects[key], function (a, b) { return a === b; });
      function addMesh(mesh, color, opacity, width) {
        if (!mesh || !mesh.coordinates) return;
        const segs = [];
        const r = R * 1.0055;
        const lines = mesh.type === 'MultiLineString' ? mesh.coordinates : [mesh.coordinates];
        for (let li = 0; li < lines.length; li++) {
          const line = lines[li];
          for (let i = 0; i < line.length - 1; i++) {
            const p1 = line[i], p2 = line[i + 1];
            if (Math.abs(p1[0] - p2[0]) > 180) continue; // avoid dateline smear
            const a = HZ.latLonToVec3(p1[1], p1[0], r);
            const b = HZ.latLonToVec3(p2[1], p2[0], r);
            segs.push(a.x, a.y, a.z, b.x, b.y, b.z);
          }
        }
        const geo = new THREE.BufferGeometry();
        geo.setAttribute('position', new THREE.Float32BufferAttribute(segs, 3));
        const mat = new THREE.LineBasicMaterial({ color: color, transparent: true, opacity: opacity, depthWrite: false });
        globe.add(new THREE.LineSegments(geo, mat));
      }
      addMesh(meshBorders, 0x8798a6, 0.26);
      addMesh(meshCoast, 0xc3ced6, 0.5);
    } catch (e) {
      diag.warnings.push('borders parse failed: ' + e.message);
    }
  })();

  /* ---------------- hazard groups ---------------- */
  HZ.groups = {};
  ['earthquake', 'cyclone', 'tsunami', 'landslide', 'volcano', 'flood', 'wildfire'].forEach(function (k) {
    const g = new THREE.Group();
    g.name = 'layer-' + k;
    globe.add(g);
    HZ.groups[k] = g;
  });

  /* ---------------- selection / hover markers ---------------- */
  const markers = new THREE.Group();
  globe.add(markers);
  HZ.markers = markers;
  const selGroup = new THREE.Group();
  selGroup.visible = false;
  markers.add(selGroup);
  (function buildMarker() {
    const ring = new THREE.Mesh(
      new THREE.RingGeometry(0.020, 0.0245, 64),
      new THREE.MeshBasicMaterial({ color: 0xf2cd98, transparent: true, opacity: .95, side: THREE.DoubleSide,
        depthWrite: false, blending: THREE.AdditiveBlending })
    );
    selGroup.add(ring);
    const ring2 = new THREE.Mesh(
      new THREE.RingGeometry(0.030, 0.0315, 64),
      new THREE.MeshBasicMaterial({ color: 0xd8a86a, transparent: true, opacity: .45, side: THREE.DoubleSide,
        depthWrite: false, blending: THREE.AdditiveBlending })
    );
    selGroup.add(ring2);
    const beamGeo = new THREE.BufferGeometry();
    beamGeo.setAttribute('position', new THREE.Float32BufferAttribute([0, 0, 0, 0, 0, 0.10], 3));
    const beam = new THREE.Line(beamGeo, new THREE.LineBasicMaterial({ color: 0xf2cd98, transparent: true,
      opacity: .55, depthWrite: false, blending: THREE.AdditiveBlending }));
    selGroup.add(beam);
  })();
  const hoverGroup = new THREE.Group();
  hoverGroup.visible = false;
  markers.add(hoverGroup);
  (function () {
    const ring = new THREE.Mesh(new THREE.RingGeometry(0.014, 0.017, 48),
      new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: .8, side: THREE.DoubleSide,
        depthWrite: false, blending: THREE.AdditiveBlending }));
    hoverGroup.add(ring);
  })();

  HZ.selectMarker = function (lat, lon, visible, color) {
    if (!visible) { selGroup.visible = false; return; }
    const p = HZ.latLonToVec3(lat, lon, R * 1.006);
    selGroup.position.copy(p);
    selGroup.quaternion.copy(HZ.surfaceQuat(p));
    selGroup.visible = true;
    if (color) {
      selGroup.children[0].material.color.set(color);
      selGroup.children[1].material.color.set(color);
    }
  };
  HZ.hoverMarker = function (lat, lon, visible) {
    if (!visible) { hoverGroup.visible = false; return; }
    const p = HZ.latLonToVec3(lat, lon, R * 1.007);
    hoverGroup.position.copy(p);
    hoverGroup.quaternion.copy(HZ.surfaceQuat(p));
    hoverGroup.visible = true;
  };

  /* ---------------- camera controls ---------------- */
  const ctl = HZ.controls = {
    dragging: false, moved: false, lastX: 0, lastY: 0, downX: 0, downY: 0,
    pointers: {}, pinchDist: 0, lastInteraction: 0, autoRotate: true,
    zoom: 2.92, targetZoom: 2.92
  };
  const raycaster = new THREE.Raycaster();
  const ndc = new THREE.Vector2();

  function rotateBy(dx, dy) {
    const k = 0.0044;
    const qy = new THREE.Quaternion().setFromAxisAngle(WORLD_Y, dx * k);
    const qx = new THREE.Quaternion().setFromAxisAngle(WORLD_X, dy * k);
    globe.quaternion.premultiply(qy).premultiply(qx).normalize();
  }
  HZ.rotateBy = rotateBy;

  function setPointer(e) {
    ctl.pointers[e.pointerId] = { x: e.clientX, y: e.clientY };
  }
  function pointerCount() { return Object.keys(ctl.pointers).length; }
  function pinchDistance() {
    const p = Object.values(ctl.pointers);
    if (p.length < 2) return 0;
    return Math.hypot(p[0].x - p[1].x, p[0].y - p[1].y);
  }

  canvas.addEventListener('pointerdown', function (e) {
    if (e.button !== 0 && e.pointerType === 'mouse') return;
    canvas.setPointerCapture && canvas.setPointerCapture(e.pointerId);
    setPointer(e);
    ctl.dragging = true;
    ctl.moved = false;
    ctl.lastX = e.clientX; ctl.lastY = e.clientY;
    ctl.downX = e.clientX; ctl.downY = e.clientY;
    ctl.lastInteraction = performance.now();
    ctl.autoRotate = false;
    HZ.cancelFly();
    canvas.classList.add('dragging');
    if (pointerCount() === 2) ctl.pinchDist = pinchDistance();
    if (HZ.onPointerDown) HZ.onPointerDown(e);
  });

  canvas.addEventListener('pointermove', function (e) {
    if (ctl.pointers[e.pointerId]) ctl.pointers[e.pointerId] = { x: e.clientX, y: e.clientY };
    if (ctl.dragging) {
      if (pointerCount() >= 2) {
        const d = pinchDistance();
        if (ctl.pinchDist > 0 && d > 0) {
          ctl.targetZoom = THREE.MathUtils.clamp(ctl.targetZoom * (ctl.pinchDist / d), 1.72, 5.6);
        }
        ctl.pinchDist = d;
      } else {
        const dx = e.clientX - ctl.lastX;
        const dy = e.clientY - ctl.lastY;
        if (Math.abs(e.clientX - ctl.downX) + Math.abs(e.clientY - ctl.downY) > 5) ctl.moved = true;
        rotateBy(dx, dy);
        ctl.lastX = e.clientX; ctl.lastY = e.clientY;
      }
      ctl.lastInteraction = performance.now();
      ctl.autoRotate = false;
    } else {
      ctl.lastX = e.clientX; ctl.lastY = e.clientY;
    }
    if (HZ.onPointerMove) HZ.onPointerMove(e.clientX, e.clientY, ctl.dragging);
  });

  function endPointer(e) {
    if (ctl.pointers[e.pointerId]) delete ctl.pointers[e.pointerId];
    if (pointerCount() === 0) {
      ctl.dragging = false;
      canvas.classList.remove('dragging');
      ctl.lastInteraction = performance.now();
      if (!ctl.moved && Math.abs(e.clientX - ctl.downX) + Math.abs(e.clientY - ctl.downY) < 5) {
        if (HZ.onClick) HZ.onClick(e.clientX, e.clientY, e);
      }
    }
  }
  canvas.addEventListener('pointerup', endPointer);
  canvas.addEventListener('pointercancel', function (e) {
    if (ctl.pointers[e.pointerId]) delete ctl.pointers[e.pointerId];
    if (pointerCount() === 0) { ctl.dragging = false; canvas.classList.remove('dragging'); }
  });
  canvas.addEventListener('pointerleave', function () { if (HZ.onPointerLeave) HZ.onPointerLeave(); });

  canvas.addEventListener('wheel', function (e) {
    e.preventDefault();
    ctl.targetZoom = THREE.MathUtils.clamp(ctl.targetZoom + e.deltaY * 0.0015, 1.72, 5.6);
    ctl.lastInteraction = performance.now();
    ctl.autoRotate = false;
  }, { passive: false });

  window.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      if (HZ.onEscape) HZ.onEscape();
    }
  });

  // reset view helper
  HZ.resetView = function () {
    HZ.flyTo(0, 0, { zoom: 2.92, duration: 1.1 });
    ctl.autoRotate = true;
  };

  /* ---------------- fly to ---------------- */
  let fly = null;
  HZ.cancelFly = function () { fly = null; };
  HZ.flyTo = function (lat, lon, opts) {
    opts = opts || {};
    const target = HZ.latLonToVec3(lat, lon, R).normalize();
    const q = new THREE.Quaternion().setFromUnitVectors(target, WORLD_Z);
    fly = {
      t: 0, dur: opts.duration || 1.15,
      q0: globe.quaternion.clone(), q1: q,
      z0: camera.position.z, z1: opts.zoom || 2.15, onDone: opts.onDone || null
    };
    ctl.targetZoom = fly.z1;
    ctl.autoRotate = false;
    ctl.lastInteraction = performance.now();
  };
  HZ.focusEvent = function (ev) {
    if (!ev) return;
    HZ.selected = ev;
    HZ.selectMarker(ev.lat, ev.lon, true, ev.color || null);
    HZ.flyTo(ev.lat, ev.lon, { zoom: ev.type === 'earthquake' ? 1.95 : 2.02 });
    if (HZ.onSelect) HZ.onSelect(ev);
  };

  /* ---------------- labels (DOM projected) ---------------- */
  HZ.labels = [];
  const labelRoot = document.getElementById('labels');
  HZ.addLabel = function (text, lat, lon, isDemo, minZoom) {
    if (HZ.suppressLabels) return null;
    const el = document.createElement('div');
    el.className = 'map-label' + (isDemo ? ' demo' : '');
    el.textContent = text;
    labelRoot.appendChild(el);
    const obj = { el: el, lat: lat, lon: lon, minZoom: minZoom || 0, visible: false };
    HZ.labels.push(obj);
    return obj;
  };
  HZ.clearLabels = function () {
    HZ.labels.forEach(function (l) { if (l.el.parentNode) l.el.parentNode.removeChild(l.el); });
    HZ.labels = [];
  };
  const tmpV = new THREE.Vector3();
  function updateLabels() {
    for (let i = 0; i < HZ.labels.length; i++) {
      const l = HZ.labels[i];
      if (camera.position.z > l.minZoom && l.minZoom > 0) { l.el.style.opacity = 0; continue; }
      tmpV.copy(HZ.latLonToVec3(l.lat, l.lon, R * 1.02)).applyMatrix4(globe.matrixWorld);
      const camDir = tmpV.clone().normalize();
      const toCam = camera.position.clone().sub(tmpV).normalize();
      if (camDir.dot(toCam) < 0.02) { l.el.style.opacity = 0; continue; }
      tmpV.project(camera);
      if (tmpV.z > 1 || tmpV.z < -1) { l.el.style.opacity = 0; continue; }
      const x = (tmpV.x * 0.5 + 0.5) * window.innerWidth;
      const y = (-tmpV.y * 0.5 + 0.5) * window.innerHeight;
      l.el.style.transform = 'translate(' + x.toFixed(1) + 'px,' + y.toFixed(1) + 'px) translate(-50%,-140%)';
      l.el.style.opacity = 0.88;
    }
  }

  /* ---------------- frame loop ---------------- */
  HZ.updaters = [];
  const clock = new THREE.Clock();
  let fpsAcc = 0, fpsCount = 0, lastFpsT = performance.now();
  const fpsEl = document.getElementById('fps');

  HZ.onFrame = function (fn) { HZ.updaters.push(fn); };

  function animate() {
    requestAnimationFrame(animate);
    const dt = Math.min(clock.getDelta(), 0.08);
    const t = clock.elapsedTime;

    // camera zoom easing
    camera.position.z += (ctl.targetZoom - camera.position.z) * Math.min(1, dt * 9);
    ctl.zoom = camera.position.z;

    // fly tween
    if (fly) {
      fly.t += dt;
      let k = Math.min(1, fly.t / fly.dur);
      k = k < 0.5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2;
      globe.quaternion.slerpQuaternions(fly.q0, fly.q1, k);
      camera.position.z = fly.z0 + (fly.z1 - fly.z0) * k;
      if (fly.t >= fly.dur) {
        const cb = fly.onDone; fly = null;
        if (cb) cb();
      }
    } else if (ctl.autoRotate && performance.now() - ctl.lastInteraction > 6500 && !ctl.dragging) {
      globe.quaternion.premultiply(new THREE.Quaternion().setFromAxisAngle(WORLD_Y, dt * 0.075));
    }

    earthUniforms.uTime.value = t;
    for (let i = 0; i < HZ.updaters.length; i++) {
      try { HZ.updaters[i](t, dt); } catch (e) { diag.errors.push('updater: ' + e.message); }
    }
    if (HZ.updateHazardUniforms) HZ.updateHazardUniforms(t, dt);

    updateLabels();
    HZ.renderer.render(scene, camera);

    fpsAcc += dt; fpsCount++;
    const now = performance.now();
    if (now - lastFpsT > 1000) {
      const fps = Math.round(fpsCount / ((now - lastFpsT) / 1000));
      diag.fps = fps;
      if (fpsEl) fpsEl.textContent = fps + ' 帧/秒';
      fpsAcc = 0; fpsCount = 0; lastFpsT = now;
    }
    if (!diag.ready && earthUniforms.uHasTex.value) diag.ready = true;
  }
  animate();

  /* ---------------- resize ---------------- */
  window.addEventListener('resize', function () {
    const w = window.innerWidth, h = window.innerHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(w, h, false);
  });

  /* ---------------- screen-space picking helpers ---------------- */
  HZ.project = function (lat, lon, out) {
    out = out || new THREE.Vector3();
    out.copy(HZ.latLonToVec3(lat, lon, R * 1.006)).applyMatrix4(globe.matrixWorld).project(camera);
    return out;
  };
  HZ.isFrontFacing = function (lat, lon) {
    const p = HZ.latLonToVec3(lat, lon, R).applyMatrix4(globe.matrixWorld);
    const n = p.clone().normalize();
    const toCam = camera.position.clone().sub(p);
    return n.dot(toCam) > 0.01;
  };
  HZ.canvas = canvas;
  HZ.raycaster = raycaster;
  HZ.ndc = ndc;
  HZ.sunDir = sunDir;

  /* ---------------- verification snapshot ---------------- */
  HZ.snapshot = function () {
    const st = HZ.data ? HZ.data.status : null;
    return {
      ready: diag.ready,
      fps: diag.fps,
      errors: diag.errors.slice(),
      warnings: diag.warnings.slice(),
      texture: earthUniforms.uHasTex.value,
      rendered: HZ.renderedEvents ? HZ.renderedEvents.length : 0,
      hud: HZ.hud || null,
      events: HZ.data ? HZ.data.events.length : 0,
      counts: HZ.data && HZ.data.counts ? HZ.data.counts : null,
      sources: st ? {
        usgs: { state: st.usgs.state, count: st.usgs.count, updated: st.usgs.updated },
        eonet: { state: st.eonet.state, count: st.eonet.count, updated: st.eonet.updated },
        nws: { state: st.nws.state, count: st.nws.count, updated: st.nws.updated }
      } : null,
      windowHours: HZ.state ? HZ.state.hours : null,
      selected: HZ.state && HZ.state.selected ? HZ.state.selected.title : null
    };
  };
  setInterval(function () {
    const s = HZ.snapshot();
    document.documentElement.setAttribute('data-hz-ready', s.ready ? '1' : '0');
    document.documentElement.setAttribute('data-hz-errors', s.errors.length ? s.errors.join(' | ').slice(0, 400) : '0');
    document.documentElement.setAttribute('data-hz-events', String(s.events));
    document.documentElement.setAttribute('data-hz-usgs', stString(s.sources && s.sources.usgs));
    document.documentElement.setAttribute('data-hz-raw', JSON.stringify({
      rawEq: HZ.data ? HZ.data.raw.earthquakes.length : -1,
      rawEonet: HZ.data ? HZ.data.raw.eonet.length : -1,
      rawNws: HZ.data ? HZ.data.raw.tsunami.length : -1,
      stamp: HZ.data ? (HZ.data.lastLoadedStamp || 0) : 0,
      hours: HZ.state ? HZ.state.hours : -1,
      firstEq: (HZ.data && HZ.data.raw.earthquakes[0]) ? {
        t: HZ.data.raw.earthquakes[0].time, mag: HZ.data.raw.earthquakes[0].mag,
        lat: HZ.data.raw.earthquakes[0].lat, lon: HZ.data.raw.earthquakes[0].lon
      } : null,
      now: Date.now()
    }));
  }, 1000);
  function stString(x) { return x ? x.state + ':' + x.count : 'na'; }
})();
