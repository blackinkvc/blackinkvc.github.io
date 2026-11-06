/* =========================================================
   灾种图层：每种灾害使用不同的形态语言
   ========================================================= */
(function () {
  'use strict';
  const HZ = window.HZ;
  if (!HZ || !HZ.THREE) return;
  const THREE = HZ.THREE;
  const R = 1.0;
  const D2R = Math.PI / 180;

  HZ.renderedEvents = [];
  HZ.hazardObjects = [];

  const pointScaleUniform = { value: 1 };
  HZ.pointScaleUniform = pointScaleUniform;
  function updatePointScale() {
    const h = window.innerHeight;
    pointScaleUniform.value = h * 0.5 / Math.tan((HZ.camera.fov * Math.PI / 180) / 2);
  }
  updatePointScale();
  window.addEventListener('resize', updatePointScale);

  /* ---------------- generic helpers ---------------- */
  function clearGroup(g) {
    while (g.children.length) {
      const c = g.children.pop();
      c.traverse(function (o) {
        if (o.geometry) o.geometry.dispose();
        if (o.material) {
          if (Array.isArray(o.material)) o.material.forEach(function (m) { m.dispose(); });
          else o.material.dispose();
        }
      });
    }
  }
  function makeTangentGroup(lat, lon, offset) {
    const g = new THREE.Group();
    const p = HZ.latLonToVec3(lat, lon, R + (offset || 0.004));
    g.position.copy(p);
    g.quaternion.copy(HZ.surfaceQuat(p));
    return g;
  }
  function addCircleRing(parent, inner, outer, color, opacity) {
    const m = new THREE.Mesh(
      new THREE.RingGeometry(inner, outer, 64),
      new THREE.MeshBasicMaterial({ color: color, transparent: true, opacity: opacity, side: THREE.DoubleSide,
        depthWrite: false, blending: THREE.AdditiveBlending })
    );
    parent.add(m);
    return m;
  }
  function glslNum(n) {
    const v = Number(n);
    return (isFinite(v) ? v : 0).toFixed(3);
  }
  function pointShaderMaterial(opts) {
    return new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uPointScale: pointScaleUniform,
        uSize: { value: opts.size || 0.01 },
        uColorA: { value: new THREE.Color(opts.colorA || 0x9fb8c8) },
        uColorB: { value: new THREE.Color(opts.colorB || 0xffffff) },
        uOpacity: { value: opts.opacity == null ? 0.8 : opts.opacity }
      },
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
      vertexShader: [
        'attribute float aSeed;',
        'attribute float aAngle;',
        'attribute float aDist;',
        'attribute float aLift;',
        'attribute float aSway;',
        'uniform float uTime; uniform float uPointScale; uniform float uSize;',
        'varying float vT; varying float vSeed;',
        'void main(){',
        '  float t = fract(uTime * ' + glslNum(opts.speed || 0.1) + ' + aSeed);',
        '  float ang = aAngle + t * ' + glslNum(opts.swing || 1.2) + ';',
        '  float rr = aDist * (' + glslNum(opts.grow || 0.9) + ' + t * ' + glslNum(opts.growT || 0.6) + ');',
        '  vec3 p = vec3(cos(ang) * rr + sin(t*6.283 + aSeed*10.0) * aSway * t,',
        '                sin(ang) * rr + cos(t*6.283 + aSeed*8.0) * aSway * t,',
        '                aLift + t * ' + glslNum(opts.rise || 0.10) + ');',
        '  vec4 mv = modelViewMatrix * vec4(p, 1.0);',
        '  gl_PointSize = (uSize * (0.4 + aSeed * 0.9)) * uPointScale / max(0.35, -mv.z);',
        '  gl_Position = projectionMatrix * mv;',
        '  vT = t; vSeed = aSeed;',
        '}'
      ].join('\n'),
      fragmentShader: [
        'uniform vec3 uColorA; uniform vec3 uColorB; uniform float uOpacity;',
        'varying float vT; varying float vSeed;',
        'void main(){',
        '  vec2 q = gl_PointCoord - 0.5;',
        '  float d = length(q);',
        '  if (d > 0.5) discard;',
        '  float soft = pow(1.0 - d * 2.0, 1.6);',
        '  vec3 c = mix(uColorA, uColorB, parity(vT));',
        '  float a = soft * uOpacity * (' + (opts.fade || '1.0') + ');',
        '  gl_FragColor = vec4(c, a);',
        '}'
      ].join('\n').replace('parity(vT)', 'vT')
    });
  }

  /* =========================================================
     地震：同心 P/S 波纹 + 震级色阶
     ========================================================= */
  let eqMat = null;
  function buildEarthquakes(events, minMag, cutoffMs) {
    const group = HZ.groups.earthquake;
    clearGroup(group);
    let list = events.filter(function (e) { return e.type === 'earthquake' && e.mag >= minMag; });
    let capped = false;
    if (list.length > 4200) {
      list = list.slice().sort(function (a, b) { return b.mag - a.mag; }).slice(0, 4200);
      capped = true;
    }
    if (!list.length) { eqMat = null; return { count: 0, capped: false }; }

    const geo = new THREE.PlaneGeometry(1, 1);
    const phases = new Float32Array(list.length);
    const mags = new Float32Array(list.length);
    const times = new Float32Array(list.length);
    const colors = new Float32Array(list.length * 3);
    const rand = HZ.rand(1234567);
    const mat = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uCutoff: { value: cutoffMs || 1e15 }
      },
      transparent: true, depthWrite: false, depthTest: true, blending: THREE.AdditiveBlending,
      vertexShader: [
        'attribute float aPhase; attribute float aMag; attribute float aTime; attribute vec3 aColor;',
        'uniform float uTime; uniform float uCutoff;',
        'varying vec2 vUv; varying vec3 vColor; varying float vT; varying float vMag;',
        'void main(){',
        '  vUv = uv; vColor = aColor; vMag = aMag;',
        '  float t = fract(uTime * 0.30 + aPhase);',
        '  vT = t;',
        '  float grow = 0.20 + t * 1.78;',
        '  vec3 p = vec3(position.xy * grow, position.z);',
        '  vec4 mv = modelViewMatrix * instanceMatrix * vec4(p, 1.0);',
        '  gl_Position = projectionMatrix * mv;',
        '  if (aTime > uCutoff) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);',
        '}'
      ].join('\n'),
      fragmentShader: [
        'varying vec2 vUv; varying vec3 vColor; varying float vT; varying float vMag;',
        'void main(){',
        '  vec2 q = vUv - 0.5;',
        '  float d = length(q) * 2.0;',
        '  float t = vT;',
        '  float r1 = 0.16 + 0.84 * t;',
        '  float w1 = smoothstep(0.030, 0.0, abs(d - r1)) * pow(1.0 - t, 1.25);',
        '  float t2 = fract(t + 0.42);',
        '  float r2 = 0.10 + 0.88 * t2;',
        '  float w2 = smoothstep(0.022, 0.0, abs(d - r2)) * pow(1.0 - t2, 1.1) * 0.62;',
        '  float core = smoothstep(0.115, 0.0, d) * 0.9;',
        '  float glow = smoothstep(0.42, 0.0, d) * 0.08;',
        '  vec3 c1 = vColor;',
        '  vec3 c2 = vec3(0.45, 0.90, 1.0);',
        '  vec3 col = c1 * (w1 + core * 1.25 + glow) + c2 * w2;',
        '  float a = w1 * 0.95 + w2 * 0.62 + core * 0.95 + glow;',
        '  if (a < 0.01) discard;',
        '  gl_FragColor = vec4(col * (0.35 + 0.65 * a), a);',
        '}'
      ].join('\n')
    });
    eqMat = mat;
    HZ.eqMat = mat;

    const mesh = new THREE.InstancedMesh(geo, mat, list.length);
    mesh.frustumCulled = false;
    mesh.instanceMatrix.setUsage(THREE.StaticDrawUsage);
    const m4 = new THREE.Matrix4();
    const pos = new THREE.Vector3();
    const quat = new THREE.Quaternion();
    const scale = new THREE.Vector3();
    list.forEach(function (e, i) {
      pos.copy(HZ.latLonToVec3(e.lat, e.lon, R * 1.006));
      quat.copy(HZ.surfaceQuat(pos));
      const size = 0.004 + Math.pow(Math.max(0, e.mag) / 8, 3) * 0.056;
      scale.set(size, size, size);
      m4.compose(pos, quat, scale);
      mesh.setMatrixAt(i, m4);
      phases[i] = rand();
      mags[i] = e.mag;
      times[i] = e.time || 0;
      const c = new THREE.Color(e.color || HZ.colorForMag(e.mag));
      colors[i * 3] = c.r; colors[i * 3 + 1] = c.g; colors[i * 3 + 2] = c.b;
      e._rendered = true;
      e._layer = 'earthquake';
      HZ.renderedEvents.push(e);
    });
    geo.setAttribute('aPhase', new THREE.InstancedBufferAttribute(phases, 1));
    geo.setAttribute('aMag', new THREE.InstancedBufferAttribute(mags, 1));
    geo.setAttribute('aTime', new THREE.InstancedBufferAttribute(times, 1));
    geo.setAttribute('aColor', new THREE.InstancedBufferAttribute(colors, 3));
    mesh.instanceMatrix.needsUpdate = true;
    group.add(mesh);
    HZ.eqMesh = mesh;
    return { count: list.length, capped: capped, total: events.filter(function (e) { return e.type === 'earthquake'; }).length };
  }

  /* =========================================================
     台风：螺旋云系粒子 + 过去路径 + 外推路径/不确定性锥
     ========================================================= */
  function buildCyclones(events) {
    const group = HZ.groups.cyclone;
    clearGroup(group);
    let count = 0;
    events.filter(function (e) { return e.type === 'cyclone'; }).forEach(function (e) {
      const track = e.track && e.track.length ? e.track : [{ lat: e.lat, lon: e.lon, time: e.time, wind: e.wind }];
      const eg = new THREE.Group();
      group.add(eg);

      // ---- past track (tube) ----
      if (track.length > 1) {
        const pts = track.map(function (p) { return HZ.latLonToVec3(p.lat, p.lon, R * 1.012); });
        const curve = new THREE.CatmullRomCurve3(pts, false, 'catmullrom', 0.4);
        const tube = new THREE.Mesh(
          new THREE.TubeGeometry(curve, Math.max(48, pts.length * 10), 0.0024, 6, false),
          new THREE.MeshBasicMaterial({ color: e.isDemo ? 0xffb454 : 0x6ecfbe, transparent: true, opacity: .82,
            depthWrite: false, blending: THREE.AdditiveBlending })
        );
        eg.add(tube);
        const glow = new THREE.Mesh(
          new THREE.TubeGeometry(curve, Math.max(48, pts.length * 10), 0.006, 6, false),
          new THREE.MeshBasicMaterial({ color: e.isDemo ? 0xffb454 : 0x6ecfbe, transparent: true, opacity: .14,
            depthWrite: false, blending: THREE.AdditiveBlending })
        );
        eg.add(glow);
        // track dots
        const dotGeo = new THREE.BufferGeometry();
        const dp = [];
        pts.forEach(function (p) { dp.push(p.x, p.y, p.z); });
        dotGeo.setAttribute('position', new THREE.Float32BufferAttribute(dp, 3));
        eg.add(new THREE.Points(dotGeo, new THREE.PointsMaterial({
          color: e.isDemo ? 0xffd190 : 0xa8fff0, size: 0.007, transparent: true, opacity: .85,
          depthWrite: false, blending: THREE.AdditiveBlending, sizeAttenuation: true
        })));
      }

      // ---- forecast extrapolation + cone (explicitly non-official, schematic) ----
      let fc = null;
      if (track.length >= 2) {
        const a = track[track.length - 2], b = track[track.length - 1];
        let dLat = b.lat - a.lat, dLon = b.lon - a.lon;
        if (Math.abs(dLon) > 180) dLon = -Math.sign(dLon) * (360 - Math.abs(dLon));
        fc = [];
        for (let i = 1; i <= 5; i++) {
          const k = i * 1.02;
          let lat = b.lat + dLat * k;
          let lon = b.lon + dLon * k;
          lat = Math.max(-80, Math.min(80, lat));
          if (lon > 180) lon -= 360; if (lon < -180) lon += 360;
          fc.push({ lat: lat, lon: lon });
        }
      }
      if (fc && fc.length) {
        const fp = fc.map(function (p) { return HZ.latLonToVec3(p.lat, p.lon, R * 1.010); });
        const all = [HZ.latLonToVec3(track[track.length - 1].lat, track[track.length - 1].lon, R * 1.010)].concat(fp);
        const lineGeo = new THREE.BufferGeometry().setFromPoints(all);
        const line = new THREE.Line(lineGeo, new THREE.LineDashedMaterial({
          color: e.isDemo ? 0xffcf6b : 0xffd166, dashSize: 0.016, gapSize: 0.012,
          transparent: true, opacity: .85, depthWrite: false
        }));
        line.computeLineDistances();
        eg.add(line);

        // cone strip
        const verts = [];
        const left = [], right = [];
        all.forEach(function (p, idx) {
          const n = p.clone().normalize();
          const east = new THREE.Vector3(0, 0, 1).cross(n).normalize();
          const widthRad = (idx === 0 ? 1.8 : 2.2 + idx * 1.5) * D2R;
          left.push(p.clone().add(east.clone().multiplyScalar(widthRad)));
          right.push(p.clone().sub(east.clone().multiplyScalar(widthRad)));
        });
        for (let i = 0; i < all.length - 1; i++) {
          verts.push(left[i].x, left[i].y, left[i].z, right[i].x, right[i].y, right[i].z, left[i + 1].x, left[i + 1].y, left[i + 1].z);
          verts.push(right[i].x, right[i].y, right[i].z, right[i + 1].x, right[i + 1].y, right[i + 1].z, left[i + 1].x, left[i + 1].y, left[i + 1].z);
        }
        const coneGeo = new THREE.BufferGeometry();
        coneGeo.setAttribute('position', new THREE.Float32BufferAttribute(verts, 3));
        eg.add(new THREE.Mesh(coneGeo, new THREE.MeshBasicMaterial({
          color: 0xffcf6b, transparent: true, opacity: e.isDemo ? .14 : .11, side: THREE.DoubleSide,
          depthWrite: false, blending: THREE.AdditiveBlending
        })));
        const edgeGeo = new THREE.BufferGeometry().setFromPoints(left.concat(right.slice().reverse()));
        eg.add(new THREE.Line(edgeGeo, new THREE.LineBasicMaterial({
          color: 0xffcf6b, transparent: true, opacity: .32, depthWrite: false
        })));
      }

      // ---- spiral cloud particles ----
      const rg = HZ.rand(HZ.hashStr('cyc' + e.id));
      const N = e.isDemo ? 760 : 560;
      const pos = new Float32Array(N * 3);
      const seed = new Float32Array(N);
      const angle = new Float32Array(N);
      const dist = new Float32Array(N);
      const lift = new Float32Array(N);
      const sway = new Float32Array(N);
      const arms = 3;
      for (let i = 0; i < N; i++) {
        const arm = i % arms;
        const u = Math.pow(rg(), 0.62);
        const d = (0.10 + u * 0.90) * (e.isDemo ? 0.092 : 0.080);
        const th = arm * (Math.PI * 2 / arms) + u * 5.2 + (rg() - 0.5) * 0.55;
        seed[i] = rg();
        angle[i] = th;
        dist[i] = d;
        lift[i] = 0.0035 + (1 - u) * 0.020 + rg() * 0.006;
        sway[i] = 0.001 + rg() * 0.0035;
      }
      const pg = new THREE.BufferGeometry();
      pg.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      pg.setAttribute('aSeed', new THREE.BufferAttribute(seed, 1));
      pg.setAttribute('aAngle', new THREE.BufferAttribute(angle, 1));
      pg.setAttribute('aDist', new THREE.BufferAttribute(dist, 1));
      pg.setAttribute('aLift', new THREE.BufferAttribute(lift, 1));
      pg.setAttribute('aSway', new THREE.BufferAttribute(sway, 1));
      const pm = pointShaderMaterial({
        size: 0.012, speed: 0.16, swing: 1.0, grow: 0.96, growT: 0.10, rise: 0.0,
        colorA: e.isDemo ? 0xffb454 : 0x9fe0d2, colorB: e.isDemo ? 0xffe9c8 : 0xffffff,
        opacity: e.isDemo ? .42 : .50, fade: 'pow(1.0 - vT * 0.55, 1.0)'
      });
      const cloud = new THREE.Points(pg, pm);
      const cloudGroup = makeTangentGroup(e.lat, e.lon, 0.006);
      cloudGroup.add(cloud);
      eg.add(cloudGroup);

      // wind eye
      const eye = makeTangentGroup(e.lat, e.lon, 0.0045);
      eye.add(new THREE.Mesh(new THREE.CircleGeometry(0.016, 32),
        new THREE.MeshBasicMaterial({ color: 0x041019, transparent: true, opacity: .75, depthWrite: false })));
      addCircleRing(eye, 0.017, 0.022, e.isDemo ? 0xffb454 : 0x8fd9c8, .8);
      addCircleRing(eye, 0.028, 0.030, e.isDemo ? 0xffb454 : 0x6ecfbe, .3);
      eg.add(eye);

      HZ.hazardObjects.push({ group: eg, time: e.time, uniforms: [pm] });
      e._rendered = true;
      e._layer = 'cyclone';
      HZ.renderedEvents.push(e);
      HZ.addLabel(e.isDemo ? '示例 · 台风轨迹' : (e.title ? '热带气旋路径' : '热带气旋'), e.lat, e.lon, e.isDemo, 0);
      count++;
    });
    return { count: count };
  }

  /* =========================================================
     海啸：源点向外扩散的多重波前
     ========================================================= */
  function buildTsunamis(events) {
    const group = HZ.groups.tsunami;
    clearGroup(group);
    let count = 0;
    events.filter(function (e) { return e.type === 'tsunami'; }).forEach(function (e) {
      const seed = HZ.hashStr(e.id) % 1000 / 1000;
      const size = 0.12 + (e.waveHeightM || 0) * 0.004;
      const mat = new THREE.ShaderMaterial({
        uniforms: { uTime: { value: 0 }, uSeed: { value: seed }, uFade: { value: 1 },
          uColor: { value: new THREE.Color(e.isDemo ? 0xa8cbe0 : 0x9fb8c8) } },
        transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
        vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
        fragmentShader: [
          'uniform float uTime; uniform float uSeed; uniform vec3 uColor; uniform float uFade;',
          'varying vec2 vUv;',
          'void main(){',
          '  vec2 q = vUv - 0.5; float d = length(q) * 2.0;',
          '  float t = fract(uTime * 0.085 + uSeed);',
          '  float a = 0.0;',
          '  for (int i = 0; i < 4; i++) {',
          '    float ti = fract(t + float(i) * 0.25);',
          '    float r = 0.12 + ti * 0.88;',
          '    float w = smoothstep(0.040, 0.0, abs(d - r));',
          '    a += w * pow(1.0 - ti, 1.4);',
          '  }',
          '  a = a * 0.42;',
          '  float fill = smoothstep(0.95, 0.18, d) * 0.10;',
          '  float core = smoothstep(0.10, 0.0, d) * 0.7;',
          '  if (a + fill + core < 0.01) discard;',
          '  gl_FragColor = vec4(uColor, (a + fill + core) * uFade);',
          '}'
        ].join('\n')
      });
      const g = makeTangentGroup(e.lat, e.lon, 0.005);
      const quad = new THREE.Mesh(new THREE.PlaneGeometry(size * 2, size * 2), mat);
      g.add(quad);
      addCircleRing(g, 0.006, 0.009, e.isDemo ? 0xffb454 : 0xb8d6e6, .95);
      group.add(g);
      mat.uniforms.uTime2 = { value: 0 };
      HZ.hazardObjects.push({ group: g, time: e.time, uniforms: [mat] });
      e._rendered = true;
      e._layer = 'tsunami';
      HZ.renderedEvents.push(e);
      HZ.addLabel((e.isDemo ? '示例 · ' : '') + (e.waveHeightM ? '波高 ' + e.waveHeightM + ' 米' : '海啸预警'),
        e.lat, e.lon, e.isDemo, 0);
      count++;
    });
    return { count: count };
  }

  /* =========================================================
     滑坡：扇形影响区 + 强度色阶
     ========================================================= */
  function buildLandslides(events) {
    const group = HZ.groups.landslide;
    clearGroup(group);
    let count = 0;
    events.filter(function (e) { return e.type === 'landslide'; }).forEach(function (e) {
      const rg = HZ.rand(HZ.hashStr('ls' + e.id));
      const radius = (e.areaR || 1.6) * 0.01745 * 1.45;
      const dir = rg() * Math.PI * 2;
      const span = (55 + rg() * 35) * D2R;
      const g = makeTangentGroup(e.lat, e.lon, 0.0045);
      const rings = 7, seg = 26;
      const verts = [], cols = [], indices = [];
      const cInner = new THREE.Color(0xffe0a0);
      const cOuter = new THREE.Color(e.isDemo ? 0xcf8c52 : 0xd99a62);
      for (let ri = 0; ri <= rings; ri++) {
        const rr = radius * (0.06 + 0.94 * ri / rings);
        for (let si = 0; si <= seg; si++) {
          const a = dir - span / 2 + span * si / seg;
          verts.push(Math.cos(a) * rr, Math.sin(a) * rr, 0.001);
          const k = ri / rings;
          const c = cInner.clone().lerp(cOuter, k);
          cols.push(c.r, c.g, c.b);
          if (ri < rings && si < seg) {
            const a0 = ri * (seg + 1) + si;
            const a1 = a0 + 1;
            const b0 = (ri + 1) * (seg + 1) + si;
            const b1 = b0 + 1;
            indices.push(a0, b0, a1, a1, b0, b1);
          }
        }
      }
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.Float32BufferAttribute(verts, 3));
      geo.setAttribute('color', new THREE.Float32BufferAttribute(cols, 3));
      geo.setIndex(indices);
      const mesh = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({
        vertexColors: true, transparent: true, opacity: .42, side: THREE.DoubleSide,
        depthWrite: false, blending: THREE.AdditiveBlending
      }));
      g.add(mesh);
      // arc edges
      const edge = [];
      for (let si = 0; si <= seg; si++) {
        const a = dir - span / 2 + span * si / seg;
        edge.push(new THREE.Vector3(Math.cos(a) * radius, Math.sin(a) * radius, 0.001));
      }
      g.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(edge),
        new THREE.LineBasicMaterial({ color: 0xffc070, transparent: true, opacity: .55, depthWrite: false })));
      // debris points
      const N = 70;
      const dp = [], dc = [];
      for (let i = 0; i < N; i++) {
        const rr = radius * (0.15 + rg() * 0.9);
        const a = dir - span / 2 + rg() * span;
        dp.push(Math.cos(a) * rr, Math.sin(a) * rr, 0.0015 + rg() * 0.004);
        const c = cOuter.clone().lerp(cInner, rg());
        dc.push(c.r, c.g, c.b);
      }
      const pg = new THREE.BufferGeometry();
      pg.setAttribute('position', new THREE.Float32BufferAttribute(dp, 3));
      pg.setAttribute('color', new THREE.Float32BufferAttribute(dc, 3));
      g.add(new THREE.Points(pg, new THREE.PointsMaterial({
        size: 0.004, vertexColors: true, transparent: true, opacity: .8,
        depthWrite: false, blending: THREE.AdditiveBlending, sizeAttenuation: true
      })));
      group.add(g);
      HZ.hazardObjects.push({ group: g, time: e.time });
      e._rendered = true;
      e._layer = 'landslide';
      HZ.renderedEvents.push(e);
      HZ.addLabel((e.isDemo ? '示例 · ' : '') + '滑坡影响区', e.lat, e.lon, e.isDemo, 0);
      count++;
    });
    return { count: count };
  }

  /* =========================================================
     火山：喷发羽流
     ========================================================= */
  function buildVolcanoes(events) {
    const group = HZ.groups.volcano;
    clearGroup(group);
    let count = 0;
    events.filter(function (e) { return e.type === 'volcano'; }).forEach(function (e) {
      const rg = HZ.rand(HZ.hashStr('vol' + e.id));
      const N = 300;
      const pos = new Float32Array(N * 3);
      const seed = new Float32Array(N);
      const angle = new Float32Array(N);
      const dist = new Float32Array(N);
      const lift = new Float32Array(N);
      const sway = new Float32Array(N);
      for (let i = 0; i < N; i++) {
        seed[i] = rg();
        angle[i] = rg() * Math.PI * 2;
        dist[i] = rg() * 0.018;
        lift[i] = rg() * 0.006;
        sway[i] = 0.004 + rg() * 0.008;
      }
      const pg = new THREE.BufferGeometry();
      pg.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      pg.setAttribute('aSeed', new THREE.BufferAttribute(seed, 1));
      pg.setAttribute('aAngle', new THREE.BufferAttribute(angle, 1));
      pg.setAttribute('aDist', new THREE.BufferAttribute(dist, 1));
      pg.setAttribute('aLift', new THREE.BufferAttribute(lift, 1));
      pg.setAttribute('aSway', new THREE.BufferAttribute(sway, 1));
      const mat = pointShaderMaterial({
        size: 0.010, speed: 0.09, swing: 0.6, grow: 0.8, growT: 1.2, rise: 0.14,
        colorA: 0xffcf6b, colorB: 0x8a97a0, opacity: .55, fade: 'pow(1.0 - vT, 1.4)'
      });
      const g = makeTangentGroup(e.lat, e.lon, 0.004);
      g.add(new THREE.Points(pg, mat));
      addCircleRing(g, 0.004, 0.007, 0xcf8c52, .9);
      addCircleRing(g, 0.010, 0.012, 0xc65f6c, .35);
      group.add(g);
      HZ.hazardObjects.push({ group: g, time: e.time, uniforms: [mat] });
      e._rendered = true;
      e._layer = 'volcano';
      HZ.renderedEvents.push(e);
      HZ.addLabel((e.isDemo ? '示例 · ' : '') + '火山', e.lat, e.lon, e.isDemo, 0);
      count++;
    });
    return { count: count };
  }

  /* =========================================================
     洪水：洪泛区着色
     ========================================================= */
  function buildFloods(events) {
    const group = HZ.groups.flood;
    clearGroup(group);
    let count = 0;
    events.filter(function (e) { return e.type === 'flood'; }).forEach(function (e) {
      const rg = HZ.rand(HZ.hashStr('fl' + e.id));
      const radius = (e.areaR || 1.9) * 0.01745 * 1.35;
      const g = makeTangentGroup(e.lat, e.lon, 0.0042);
      const seg = 64, rings = 5;
      const verts = [], uvs = [], indices = [];
      for (let ri = 0; ri <= rings; ri++) {
        for (let si = 0; si <= seg; si++) {
          const a = si / seg * Math.PI * 2;
          const wob = 1 + 0.12 * Math.sin(a * 5 + rg() * 0.1) + 0.05 * Math.sin(a * 9);
          const rr = radius * (ri / rings) * wob;
          verts.push(Math.cos(a) * rr, Math.sin(a) * rr, 0.001);
          uvs.push(si / seg, ri / rings);
          if (ri < rings && si < seg) {
            const a0 = ri * (seg + 1) + si, a1 = a0 + 1;
            const b0 = (ri + 1) * (seg + 1) + si, b1 = b0 + 1;
            indices.push(a0, b0, a1, a1, b0, b1);
          }
        }
      }
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.Float32BufferAttribute(verts, 3));
      geo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
      geo.setIndex(indices);
      const mat = new THREE.ShaderMaterial({
        uniforms: { uTime: { value: 0 }, uFade: { value: 1 },
          uColor: { value: new THREE.Color(e.isDemo ? 0x93c4e6 : 0x6fa9d6) },
          uDemo: { value: e.isDemo ? 1 : 0 } },
        transparent: true, depthWrite: false, side: THREE.DoubleSide,
        blending: THREE.AdditiveBlending,
        vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
        fragmentShader: [
          'uniform float uTime; uniform vec3 uColor; uniform float uDemo; uniform float uFade;',
          'varying vec2 vUv;',
          'void main(){',
          '  float edge = smoothstep(1.0, 0.55, vUv.y);',
          '  float shimmer = 0.5 + 0.5 * sin(vUv.x * 38.0 + uTime * 0.8 + vUv.y * 8.0);',
          '  float a = (0.18 + 0.13 * shimmer) * edge * uFade;',
          '  gl_FragColor = vec4(uColor, a);',
          '}'
        ].join('\n')
      });
      const mesh = new THREE.Mesh(geo, mat);
      g.add(mesh);
      // outline
      const outline = [];
      for (let si = 0; si <= seg; si++) {
        const a = si / seg * Math.PI * 2;
        const wob = 1 + 0.12 * Math.sin(a * 5 + rg() * 0.1) + 0.05 * Math.sin(a * 9);
        outline.push(new THREE.Vector3(Math.cos(a) * radius * wob, Math.sin(a) * radius * wob, 0.001));
      }
      g.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(outline),
        new THREE.LineBasicMaterial({ color: 0x6fa9d6, transparent: true, opacity: .5, depthWrite: false })));
      group.add(g);
      HZ.hazardObjects.push({ group: g, time: e.time, uniforms: [mat] });
      e._rendered = true;
      e._layer = 'flood';
      HZ.renderedEvents.push(e);
      HZ.addLabel((e.isDemo ? '示例 · ' : '') + '洪泛区', e.lat, e.lon, e.isDemo, 0);
      count++;
    });
    return { count: count };
  }

  /* =========================================================
     野火（附赠真实图层）：余烬闪烁
     ========================================================= */
  function buildWildfires(events) {
    const group = HZ.groups.wildfire;
    clearGroup(group);
    let count = 0;
    events.filter(function (e) { return e.type === 'wildfire'; }).forEach(function (e) {
      const rg = HZ.rand(HZ.hashStr('wf' + e.id));
      const N = 42;
      const pos = new Float32Array(N * 3);
      const seed = new Float32Array(N), angle = new Float32Array(N), dist = new Float32Array(N),
        lift = new Float32Array(N), sway = new Float32Array(N);
      for (let i = 0; i < N; i++) {
        seed[i] = rg(); angle[i] = rg() * Math.PI * 2; dist[i] = rg() * 0.020;
        lift[i] = 0.002 + rg() * 0.004; sway[i] = 0.002;
      }
      const pg = new THREE.BufferGeometry();
      pg.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      pg.setAttribute('aSeed', new THREE.BufferAttribute(seed, 1));
      pg.setAttribute('aAngle', new THREE.BufferAttribute(angle, 1));
      pg.setAttribute('aDist', new THREE.BufferAttribute(dist, 1));
      pg.setAttribute('aLift', new THREE.BufferAttribute(lift, 1));
      pg.setAttribute('aSway', new THREE.BufferAttribute(sway, 1));
      const mat = pointShaderMaterial({
        size: 0.008, speed: 0.22, swing: 0.15, grow: 0.9, growT: 0.2, rise: 0.030,
        colorA: 0xff7a2f, colorB: 0xffe08a, opacity: .8, fade: 'pow(1.0 - vT, 1.2)'
      });
      const g = makeTangentGroup(e.lat, e.lon, 0.004);
      g.add(new THREE.Points(pg, mat));
      addCircleRing(g, 0.003, 0.0055, 0xd99a62, .7);
      group.add(g);
      HZ.hazardObjects.push({ group: g, time: e.time, uniforms: [mat] });
      e._rendered = true;
      e._layer = 'wildfire';
      HZ.renderedEvents.push(e);
      count++;
    });
    return { count: count };
  }

  /* =========================================================
     总装配与逐帧更新
     ========================================================= */
  const hud = HZ.hud = { eq: 0, eqTotal: 0, eqCapped: false, cyclone: 0, tsunami: 0, landslide: 0, volcano: 0, flood: 0, wildfire: 0 };

  HZ.renderHazards = function (events, opts) {
    opts = opts || {};
    HZ.renderedEvents = [];
    HZ.hazardObjects = [];
    HZ.renderInfo = { count: 0 };
    HZ.clearLabels();
    HZ.selectMarker(0, 0, false);
    HZ.hoverMarker(0, 0, false);

    const minMag = opts.minMag == null ? 2 : opts.minMag;
    const eqRes = buildEarthquakes(events, minMag, opts.cutoffMs || 1e15);
    hud.eq = eqRes.count; hud.eqTotal = eqRes.total || 0; hud.eqCapped = !!eqRes.capped;
    hud.cyclone = buildCyclones(events).count;
    hud.tsunami = buildTsunamis(events).count;
    hud.landslide = buildLandslides(events).count;
    hud.volcano = buildVolcanoes(events).count;
    hud.flood = buildFloods(events).count;
    hud.wildfire = buildWildfires(events).count;

    // 历史长轴同屏事件多，收缩非地震灾种的形态并降低透明度，避免叠色过曝
    if (opts.history) {
      HZ.hazardObjects.forEach(function (o) {
        if (!o.group) return;
        o.group.scale.multiplyScalar(0.76);
        o.group.traverse(function (obj) {
          const m = obj.material;
          if (!m) return;
          if (m.uniforms && m.uniforms.uFade) m.uniforms.uFade.value *= 0.72;
          else if (m.uniforms && m.uniforms.uOpacity) m.uniforms.uOpacity.value *= 0.72;
          else if (typeof m.opacity === 'number') m.opacity *= 0.72;
        });
      });
    }

    // layer switches
    Object.keys(HZ.groups).forEach(function (k) {
      HZ.groups[k].visible = opts.layers ? opts.layers[k] !== false : true;
    });
    if (HZ.onHazardsRendered) HZ.onHazardsRendered();
  };

  HZ.updateCutoff = function (cutoffMs) {
    HZ.pickCutoff = cutoffMs == null ? 1e15 : cutoffMs;
    if (HZ.eqMat) HZ.eqMat.uniforms.uCutoff.value = HZ.pickCutoff;
    for (let i = 0; i < HZ.hazardObjects.length; i++) {
      const o = HZ.hazardObjects[i];
      if (!o.group) continue;
      o.group.visible = (o.time == null || o.time <= HZ.pickCutoff);
    }
  };
  HZ.updateLayerVisibility = function (layers) {
    Object.keys(HZ.groups).forEach(function (k) {
      HZ.groups[k].visible = layers ? layers[k] !== false : true;
    });
  };

  HZ.updateHazardUniforms = function (t, dt) {
    if (HZ.eqMat) HZ.eqMat.uniforms.uTime.value = t;
    for (let i = 0; i < HZ.hazardObjects.length; i++) {
      const u = HZ.hazardObjects[i].uniforms;
      if (!u) continue;
      for (let j = 0; j < u.length; j++) {
        if (u[j].uniforms && u[j].uniforms.uTime) u[j].uniforms.uTime.value = t;
      }
    }
  };

  /* ---------------- picking (screen-space) ---------------- */
  HZ.pickEvent = function (x, y) {
    const best = { ev: null, dist: 1e9 };
    const v = new THREE.Vector3();
    const list = HZ.renderedEvents;
    for (let i = 0; i < list.length; i++) {
      const e = list[i];
      if (HZ.state && HZ.state.layers && HZ.state.layers[e.type] === false) continue;
      if (e.time != null && e.time > (HZ.pickCutoff == null ? 1e15 : HZ.pickCutoff)) continue;
      if (!HZ.isFrontFacing(e.lat, e.lon)) continue;
      HZ.project(e.lat, e.lon, v);
      if (v.z > 1 || v.z < -1) continue;
      const sx = (v.x * 0.5 + 0.5) * window.innerWidth;
      const sy = (-v.y * 0.5 + 0.5) * window.innerHeight;
      let threshold = 15;
      if (e.type === 'earthquake') threshold = e.mag >= 5 ? 20 : 13;
      if (e.type === 'cyclone') threshold = 26;
      if (e.type === 'tsunami' || e.type === 'flood') threshold = 20;
      const d = Math.hypot(sx - x, sy - y);
      if (d < threshold && d < best.dist) { best.ev = e; best.dist = d; }
    }
    return best.ev;
  };
})();
