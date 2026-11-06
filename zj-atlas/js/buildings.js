/* =========================================================================
   BuildingKit — 用简化体块表示历史构筑物
   尺度为示意（横向约 1 单位 = 1 km，纵向与塔高明显夸张）
   ========================================================================= */
window.BuildingKit = (function () {
  'use strict';
  const D = window.DATA;

  function Mat(color, opts) {
    return new THREE.MeshStandardMaterial(Object.assign({
      color: color, roughness: 0.88, metalness: 0.05,
      transparent: true, opacity: 1
    }, opts || {}));
  }
  const C = {
    stone: 0xb2a48d, stoneDark: 0x8b7f6c, earth: 0x9c8561,
    timber: 0x8a6242, tile: 0x4b443b, roof: 0x5b5044,
    gold: 0xd7b06b, jade: 0x8fae9c, water: 0x4f97a6,
    glass: 0x9dc4cf, steel: 0x7c8a90, brick: 0xa6785c,
    container: [0xc4563f, 0x2f6f86, 0xbf8f3c, 0x4f7d5c]
  };

  function addMesh(group, geo, mat, x, y, z, ry) {
    const m = new THREE.Mesh(geo, mat);
    m.position.set(x, y, z);
    if (ry) m.rotation.y = ry;
    m.castShadow = true;
    m.receiveShadow = true;
    group.add(m);
    return m;
  }

  function box(group, mat, w, h, d, x, y, z, ry) {
    return addMesh(group, new THREE.BoxGeometry(w, h, d), mat, x, y, z, ry);
  }
  function cyl(group, mat, rt, rb, h, seg, x, y, z) {
    return addMesh(group, new THREE.CylinderGeometry(rt, rb, h, seg), mat, x, y, z);
  }

  /* ---------------- 塔 ---------------- */
  function pagoda(item) {
    const g = new THREE.Group();
    const H = item.h || 7;
    const body = Mat(C.stone);
    const roof = Mat(C.tile, { roughness: 0.95 });
    const gold = Mat(C.gold, { metalness: 0.35, roughness: 0.45, emissive: 0x4a3412, emissiveIntensity: 0.25 });
    const baseH = 0.7;
    cyl(g, Mat(C.stoneDark), 3.0, 3.4, baseH, 8, 0, baseH / 2, 0);
    let y = baseH;
    const tiers = 5;
    for (let i = 0; i < tiers; i++) {
      const r = 2.25 * (1 - i * 0.125);
      const bh = (H - baseH - 1.6) / tiers * 0.82;
      cyl(g, body, r * 0.93, r, bh, 8, 0, y + bh / 2, 0);
      addMesh(g, new THREE.ConeGeometry(r * 1.42, 0.55, 8), roof, 0, y + bh + 0.2, 0);
      y += bh + 0.34;
    }
    cyl(g, body, 0.32, 0.5, 1.15, 6, 0, y + 0.55, 0);
    addMesh(g, new THREE.ConeGeometry(0.55, 0.9, 6), gold, 0, y + 1.3, 0);
    g.userData.labelY = H + 1.0;
    return g;
  }

  /* ---------------- 城墙 ---------------- */
  function walled(item) {
    const g = new THREE.Group();
    const w = item.w || 10, d = item.d || 8, h = item.h || 1.8;
    const t = 1.15;
    const wallMat = Mat(C.earth);
    const capMat = Mat(C.stoneDark);
    box(g, wallMat, w, h, t, 0, h / 2, -d / 2);
    box(g, wallMat, w, h, t, 0, h / 2, d / 2);
    box(g, wallMat, t, h, d, -w / 2, h / 2, 0);
    box(g, wallMat, t, h, d, w / 2, h / 2, 0);
    // 城楼 / 角楼
    const towerMat = Mat(C.timber);
    const roofMat = Mat(C.tile);
    [[-w / 2, -d / 2], [w / 2, -d / 2], [-w / 2, d / 2], [w / 2, d / 2]].forEach(p => {
      box(g, towerMat, 1.6, 1.6, 1.6, p[0], h + 0.8, p[1]);
      addMesh(g, new THREE.ConeGeometry(1.45, 0.55, 4), roofMat, p[0], h + 1.8, p[1], Math.PI / 4);
    });
    // 城内主厅
    box(g, Mat(C.timber), 3.2, 1.1, 2.2, 0, 0.55, 0);
    addMesh(g, new THREE.BoxGeometry(w * 0.55, 0.1, d * 0.55), capMat, 0, 0.05, 0);
    g.userData.labelY = h + 2.6;
    return g;
  }

  /* ---------------- 卫所 ---------------- */
  function fort(item) {
    const g = new THREE.Group();
    const s = item.s || 3.2;
    const wallMat = Mat(0x9d9080);
    const h = 1.3, t = 0.7;
    box(g, wallMat, s * 2, h, t, 0, h / 2, -s);
    box(g, wallMat, s * 2, h, t, 0, h / 2, s);
    box(g, wallMat, t, h, s * 2, -s, h / 2, 0);
    box(g, wallMat, t, h, s * 2, s, h / 2, 0);
    box(g, Mat(C.stoneDark), 1.5, 1.5, 1.5, s - 0.7, h + 0.7, s - 0.7);
    cyl(g, Mat(C.steel), 0.08, 0.08, 3.2, 5, 0, 2.4, 0);
    box(g, Mat(0xc46a52, { emissive: 0x5a1a12, emissiveIntensity: 0.3 }), 0.75, 0.42, 0.04, 0.45, 3.3, 0);
    g.userData.labelY = 3.8;
    return g;
  }

  /* ---------------- 河姆渡干栏式聚落 ---------------- */
  function stilt(item) {
    const g = new THREE.Group();
    const wood = Mat(C.timber);
    const roofMat = Mat(0x7d6a4c);
    const houses = 6;
    for (let i = 0; i < houses; i++) {
      const a = i / houses * Math.PI * 2;
      const x = Math.cos(a) * 4.2 * (i % 2 ? 0.55 : 0.95);
      const z = Math.sin(a) * 3.0 * (i % 2 ? 0.55 : 0.95);
      for (let p = 0; p < 4; p++) {
        const px = (p % 2 ? 0.45 : -0.45), pz = (p < 2 ? 0.35 : -0.35);
        cyl(g, wood, 0.06, 0.07, 1.1, 4, x + px, 0.55, z + pz);
      }
      box(g, wood, 1.35, 0.12, 1.0, x, 1.12, z);
      addMesh(g, new THREE.ConeGeometry(1.15, 0.55, 4), roofMat, x, 1.55, z, Math.PI / 4);
    }
    // 中央公共干栏
    for (let p = 0; p < 4; p++) cyl(g, wood, 0.1, 0.1, 1.6, 5, (p % 2 ? 0.8 : -0.8), 0.8, (p < 2 ? 0.6 : -0.6));
    box(g, wood, 2.3, 0.16, 1.6, 0, 1.65, 0);
    addMesh(g, new THREE.ConeGeometry(2.0, 0.9, 4), roofMat, 0, 2.2, 0, Math.PI / 4);
    g.userData.labelY = 3.2;
    return g;
  }

  /* ---------------- 良渚古城 ---------------- */
  function liangzhu(item) {
    const g = new THREE.Group();
    const earth = Mat(0x9a8767, { roughness: 0.98 });
    const jade = Mat(0x93b3a1, { emissive: 0x243b30, emissiveIntensity: 0.2, roughness: 0.5 });
    // 外城垣（圆角土垣）
    addMesh(g, new THREE.CylinderGeometry(7.4, 8.0, 1.6, 36, 1, true), earth, 0, 0.8, 0);
    addMesh(g, new THREE.RingGeometry(7.2, 8.1, 40), Mat(0x8a795e), 0, 1.58, 0, 0).rotation.x = -Math.PI / 2;
    // 内城台基
    box(g, Mat(0xa8926d), 6.2, 0.7, 5.2, 0, 0.35, 0);
    box(g, Mat(C.timber), 3.2, 1.5, 2.4, 0, 1.35, 0);
    addMesh(g, new THREE.ConeGeometry(2.6, 0.8, 4), Mat(C.roof), 0, 2.55, 0, Math.PI / 4);
    // 玉琮意象
    for (let i = 0; i < 3; i++) {
      const a = i / 3 * Math.PI * 2 + 0.4;
      box(g, jade, 0.5, 0.8, 0.5, Math.cos(a) * 2.4, 1.0, Math.sin(a) * 2.0);
    }
    g.userData.labelY = 4.0;
    return g;
  }

  /* ---------------- 港口 ---------------- */
  function port(item) {
    const g = new THREE.Group();
    const modern = !!item.modern;
    const quay = Mat(0x8f8d84);
    box(g, quay, 12, 0.55, 5.5, 0, 0.30, 0);
    if (!modern) {
      const timber = Mat(C.timber);
      for (let i = -1; i <= 1; i++) {
        box(g, timber, 2.4, 1.0, 2.0, i * 3.4, 1.0, 0.6);
        addMesh(g, new THREE.ConeGeometry(1.9, 0.5, 4), Mat(C.roof), i * 3.4, 1.75, 0.6, Math.PI / 4);
      }
      // 木栈桥与桅杆
      for (let i = 0; i < 3; i++) {
        box(g, timber, 0.9, 0.12, 3.2, -4 + i * 4, 0.62, -3.4);
        cyl(g, timber, 0.07, 0.07, 2.6, 5, -4 + i * 4, 2.0, -4.2);
      }
    } else {
      const contMats = C.container.map(c => Mat(c, { roughness: 0.6 }));
      for (let i = 0; i < 12; i++) {
        box(g, contMats[i % contMats.length], 1.5, 0.8, 0.75,
          -5.2 + (i % 6) * 1.85, 0.95 + (i >= 6 ? 0.8 : 0), -1.6);
      }
      const steel = Mat(0x6a7d84, { metalness: 0.5, roughness: 0.5 });
      for (let i = 0; i < 2; i++) {
        const x = -3.4 + i * 6.8;
        box(g, steel, 0.18, 4.2, 0.18, x, 2.4, 1.7);
        box(g, steel, 0.18, 4.2, 0.18, x + 3.2, 2.4, 1.7);
        box(g, steel, 3.7, 0.28, 0.28, x + 1.6, 4.5, 1.7);
        box(g, steel, 0.5, 1.0, 0.5, x + 1.6, 3.9, 1.7);
      }
    }
    g.userData.labelY = modern ? 5.6 : 3.4;
    return g;
  }

  /* ---------------- 商埠街区 ---------------- */
  function bund(item) {
    const g = new THREE.Group();
    const mats = [Mat(C.brick), Mat(0xb08f72), Mat(0x9d8a78)];
    for (let i = 0; i < 6; i++) {
      const x = -4.5 + i * 1.8;
      box(g, mats[i % 3], 1.4, 1.5 + (i % 2) * 0.5, 2.2, x, (1.5 + (i % 2) * 0.5) / 2, 0);
      addMesh(g, new THREE.ConeGeometry(1.15, 0.4, 4), Mat(C.roof), x, 1.85 + (i % 2) * 0.5, 0, Math.PI / 4);
    }
    g.userData.labelY = 2.6;
    return g;
  }

  /* ---------------- 现代楼群 ---------------- */
  function towers(item) {
    const g = new THREE.Group();
    const n = item.n || 6, hmax = item.hmax || 10;
    const glass = Mat(C.glass, { metalness: 0.45, roughness: 0.35, emissive: 0x1d4b58, emissiveIntensity: 0.45 });
    const glass2 = Mat(0x8fb2b8, { metalness: 0.4, roughness: 0.4, emissive: 0x2a4c52, emissiveIntensity: 0.3 });
    for (let i = 0; i < n; i++) {
      const a = i / n * Math.PI * 2 + 0.3;
      const r = 2.4 + (i % 3) * 1.7;
      const x = Math.cos(a) * r, z = Math.sin(a) * r;
      const h = hmax * (0.32 + ((i * 37) % 10) / 15);
      const w = 1.15 + (i % 2) * 0.45;
      box(g, i % 3 === 0 ? glass : glass2, w, h, w, x, h / 2, z);
      const light = new THREE.Mesh(
        new THREE.SphereGeometry(0.16, 6, 6),
        new THREE.MeshBasicMaterial({ color: 0xffd9a0, transparent: true })
      );
      light.position.set(x, h + 0.2, z);
      g.add(light);
    }
    g.userData.labelY = hmax + 1.5;
    return g;
  }

  /* ---------------- 线状要素 ---------------- */
  function groundAt(ctx, lon, lat) {
    return ctx.groundY(lon, lat);
  }

  function ribbon(group, pts, width, yOff, color, ctx, opts) {
    const half = width / 2;
    const mat = Mat(color, Object.assign({ roughness: 0.7 }, opts || {}));
    const verts = [], idx = [];
    for (let i = 0; i < pts.length; i++) {
      const p = pts[i];
      const prev = pts[Math.max(0, i - 1)], next = pts[Math.min(pts.length - 1, i + 1)];
      const dx = D.toX(next[0]) - D.toX(prev[0]);
      const dz = D.toZ(next[1]) - D.toZ(prev[1]);
      const len = Math.sqrt(dx * dx + dz * dz) || 1;
      const nx = -dz / len, nz = dx / len;
      const x = D.toX(p[0]), z = D.toZ(p[1]);
      const gy = groundAt(ctx, p[0], p[1]);
      const y = (opts && opts.absoluteY != null) ? opts.absoluteY : gy + yOff;
      verts.push(x + nx * half, y, z + nz * half, x - nx * half, y, z - nz * half);
    }
    for (let i = 0; i < pts.length - 1; i++) {
      const a = i * 2, b = a + 1, c = a + 2, d = a + 3;
      idx.push(a, c, b, b, c, d);
    }
    // 使用非索引三角形，避免法线错误
    const arr = [];
    for (let i = 0; i < idx.length; i++) arr.push(verts[idx[i] * 3], verts[idx[i] * 3 + 1], verts[idx[i] * 3 + 2]);
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(arr, 3));
    geo.computeVertexNormals();
    const mesh = new THREE.Mesh(geo, mat);
    mesh.receiveShadow = true;
    group.add(mesh);
    return mesh;
  }

  function canal(item, ctx) {
    const g = new THREE.Group();
    ribbon(g, item.pts, 2.6, 0.32, C.water, ctx, { roughness: 0.35, metalness: 0.1 });
    // 河岸
    ribbon(g, item.pts, 3.4, 0.18, 0x6c6552, ctx, { roughness: 0.95 });
    g.userData.labelY = 1.2;
    return g;
  }

  function seawall(item, ctx) {
    const g = new THREE.Group();
    for (let i = 0; i < item.pts.length - 1; i++) {
      const a = item.pts[i], b = item.pts[i + 1];
      const ax = D.toX(a[0]), az = D.toZ(a[1]);
      const bx = D.toX(b[0]), bz = D.toZ(b[1]);
      const dx = bx - ax, dz = bz - az;
      const len = Math.sqrt(dx * dx + dz * dz);
      const mx = (ax + bx) / 2, mz = (az + bz) / 2;
      const gy = ctx.groundY((a[0] + b[0]) / 2, (a[1] + b[1]) / 2);
      const h = 1.25;
      const ry = Math.atan2(-dz, dx);
      box(g, Mat(C.stoneDark), len + 0.6, h, 2.3, mx, gy + h / 2, mz, ry);
      box(g, Mat(C.stone), len + 0.8, 0.28, 2.7, mx, gy + h + 0.1, mz, ry);
    }
    g.userData.labelY = 2.0;
    return g;
  }

  function railway(item, ctx) {
    const g = new THREE.Group();
    ribbon(g, item.pts, 2.0, 0.16, 0x4a4038, ctx, { roughness: 0.95 });
    ribbon(g, item.pts, 0.7, 0.22, 0xbca57c, ctx, { metalness: 0.3, roughness: 0.55 });
    // 枕木
    for (let i = 0; i < item.pts.length - 1; i++) {
      const a = item.pts[i], b = item.pts[i + 1];
      const ax = D.toX(a[0]), az = D.toZ(a[1]);
      const bx = D.toX(b[0]), bz = D.toZ(b[1]);
      const dx = bx - ax, dz = bz - az;
      const len = Math.sqrt(dx * dx + dz * dz);
      const ry = Math.atan2(-dz, dx);
      const count = Math.max(2, Math.round(len / 2.2));
      for (let k = 0; k < count; k++) {
        const t = (k + 0.5) / count;
        const lon = a[0] + (b[0] - a[0]) * t;
        const lat = a[1] + (b[1] - a[1]) * t;
        const x = ax + dx * t, z = az + dz * t;
        const gy = ctx.groundY(lon, lat);
        box(g, Mat(C.timber), 0.28, 0.12, 1.5, x, gy + 0.28, z, ry);
      }
    }
    g.userData.labelY = 1.3;
    return g;
  }

  function bridge(item, ctx) {
    const g = new THREE.Group();
    const deckMat = Mat(item.long ? 0xc9bfa8 : 0x8f9a96, { roughness: 0.6, metalness: 0.15 });
    const pierMat = Mat(0x8b8f8c);
    const isLong = !!item.long;
    const y = isLong ? 3.0 : 2.3;
    for (let i = 0; i < item.pts.length - 1; i++) {
      const a = item.pts[i], b = item.pts[i + 1];
      const ax = D.toX(a[0]), az = D.toZ(a[1]);
      const bx = D.toX(b[0]), bz = D.toZ(b[1]);
      const dx = bx - ax, dz = bz - az;
      const len = Math.sqrt(dx * dx + dz * dz);
      const mx = (ax + bx) / 2, mz = (az + bz) / 2;
      const ry = Math.atan2(-dz, dx);
      box(g, deckMat, len + 0.4, 0.22, 1.7, mx, y, mz, ry);
      const n = Math.max(1, Math.round(len / 6));
      for (let k = 0; k <= n; k++) {
        const t = k / n;
        const x = ax + dx * t, z = az + dz * t;
        const gy = Math.min(0.1, ctx.groundY(a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t));
        box(g, pierMat, 0.4, Math.max(1.2, y - gy), 0.4, x, (y + gy) / 2, z, ry);
      }
      if (isLong) {
        const t = 0.5;
        box(g, pierMat, 0.55, y + 2.4, 0.55, ax + dx * t, (y + 2.4) / 2, az + dz * t, ry);
      }
    }
    // 桥塔（长桥）
    if (isLong) {
      const p0 = item.pts[0], p1 = item.pts[item.pts.length - 1];
      [p0, p1].forEach(p => {
        const x = D.toX(p[0]), z = D.toZ(p[1]);
        box(g, pierMat, 0.6, 5.5, 0.6, x, 2.8, z);
      });
    }
    g.userData.labelY = isLong ? 7.0 : 3.2;
    return g;
  }

  /* ---------------- 入口 ---------------- */
  function create(item, ctx) {
    let g;
    switch (item.type) {
      case 'pagoda': g = pagoda(item); break;
      case 'walled': g = walled(item); break;
      case 'fort': g = fort(item); break;
      case 'stilt': g = stilt(item); break;
      case 'liangzhu': g = liangzhu(item); break;
      case 'port': g = port(item); break;
      case 'bund': g = bund(item); break;
      case 'towers': g = towers(item); break;
      case 'canal': g = canal(item, ctx); break;
      case 'seawall': g = seawall(item, ctx); break;
      case 'railway': g = railway(item, ctx); break;
      case 'bridge': g = bridge(item, ctx); break;
      default: g = new THREE.Group();
    }

    if (item.type !== 'canal' && item.type !== 'seawall' && item.type !== 'railway' && item.type !== 'bridge') {
      const gy = Math.max(0.12, ctx.groundY(item.lon, item.lat));
      g.position.set(D.toX(item.lon), gy, D.toZ(item.lat));
      if (item.size) g.scale.multiplyScalar(item.size);
    }
    g.name = 'item-' + item.id;
    return g;
  }

  return { create };
})();
