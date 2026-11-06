/* 巴黎 · 著名景点专题图层
   依赖 city-app.js 暴露的 window.__ATLAS_CITY__（场景 / 相机 / 高程查询）。
   每个景点按真实体量在米制坐标里建模，再整体按 VE 竖向夸张，与周边 OSM 建筑同尺度。 */
/* 14 座精细模型同步建完约 0.45 s，会把首帧一起堵掉；
   先让地形/水系/道路那一帧上屏，隔两帧再建。 */
requestAnimationFrame(function () {
  requestAnimationFrame(function () {
(function () {
  'use strict';
  const C = window.__ATLAS_CITY__;
  const LIST = window.CITY_LANDMARKS;
  if (!C || !LIST) return;
  const THREE = C.THREE, VE = C.VE;

  /* ------------------------------ 主题 ------------------------------ */
  const THEMES = {
    bronze: { label: '铜金', main: 0xa8894f, accent: 0xd8b878, dark: 0x3b3128, emissive: 0x140e05, ring: 0xe8c98a },
    ivory:  { label: '石膏白', main: 0xd2ccbe, accent: 0xefe7d4, dark: 0x4a453d, emissive: 0x121210, ring: 0xf3ecdd },
    steel:  { label: '冷蓝钢', main: 0x7d97ab, accent: 0xaac8dc, dark: 0x263340, emissive: 0x08161f, ring: 0x9dc6dd },
    neon:   { label: '霓虹', main: 0x22c9bd, accent: 0xff5fa2, dark: 0x102a2e, emissive: 0x0b4a45, ring: 0x46f2df }
  };
  const M = {
    main: new THREE.MeshPhongMaterial({ color: THEMES.bronze.main, shininess: 24, specular: 0x2a2a2a, emissive: THEMES.bronze.emissive }),
    accent: new THREE.MeshPhongMaterial({ color: THEMES.bronze.accent, shininess: 70, specular: 0x6a6a6a, emissive: THEMES.bronze.emissive }),
    dark: new THREE.MeshPhongMaterial({ color: THEMES.bronze.dark, shininess: 8, specular: 0x101010 }),
    /* 单面开口的弧墙（夏乐宫）需要双面 */
    shell: new THREE.MeshPhongMaterial({ color: THEMES.bronze.main, shininess: 18, specular: 0x202020, emissive: THEMES.bronze.emissive, side: THREE.DoubleSide }),
    glass: new THREE.MeshPhongMaterial({ color: 0x9fc2d6, transparent: true, opacity: 0.62, shininess: 110, specular: 0xcfe4ef, side: THREE.DoubleSide, emissive: 0x0a1a24 }),
    /* 蓬皮杜的外露管道是真实配色，不随主题变化 */
    pipeBlue: new THREE.MeshPhongMaterial({ color: 0x2f6fd0, shininess: 40 }),
    pipeGreen: new THREE.MeshPhongMaterial({ color: 0x2f9c5a, shininess: 40 }),
    pipeYellow: new THREE.MeshPhongMaterial({ color: 0xdfb03a, shininess: 40 }),
    pipeRed: new THREE.MeshPhongMaterial({ color: 0xc4453f, shininess: 40 })
  };
  const ringMat = new THREE.MeshBasicMaterial({ color: THEMES.bronze.ring, transparent: true, opacity: 0.38, side: THREE.DoubleSide, depthWrite: false });

  /* ------------------------------ 几何助手（单位：米） ------------------------------ */
  /* 盒子：x / z 为中心，b 为底面高程 */
  function bx(g, w, h, d, x, b, z, m, ry) {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m);
    mesh.position.set(x, b + h / 2, z);
    if (ry) mesh.rotation.y = ry;
    g.add(mesh); return mesh;
  }
  function cy(g, rt, rb, h, seg, x, b, z, m) {
    const mesh = new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, seg), m);
    mesh.position.set(x, b + h / 2, z);
    g.add(mesh); return mesh;
  }
  function cn(g, r, h, seg, x, b, z, m) {
    const mesh = new THREE.Mesh(new THREE.ConeGeometry(r, h, seg), m);
    mesh.position.set(x, b + h / 2, z);
    g.add(mesh); return mesh;
  }
  function dm(g, r, sy, x, b, z, m) {
    const mesh = new THREE.Mesh(new THREE.SphereGeometry(r, 22, 12, 0, Math.PI * 2, 0, Math.PI / 2), m);
    mesh.scale.set(1, sy, 1);
    mesh.position.set(x, b, z);
    g.add(mesh); return mesh;
  }
  /* 方形锥柱：halfBot / halfTop 为半边长，sx / sz 为整根柱子顶部相对底部的水平偏移（做内倾） */
  function taper(g, halfBot, halfTop, h, x, b, z, m, sx, sz) {
    const geo = new THREE.CylinderGeometry(halfTop * Math.SQRT2, halfBot * Math.SQRT2, h, 4, 1, false);
    if (sx || sz) {
      const p = geo.attributes.position;
      for (let i = 0; i < p.count; i++) {
        const t = (p.getY(i) + h / 2) / h;
        p.setX(i, p.getX(i) + (sx || 0) * t);
        p.setZ(i, p.getZ(i) + (sz || 0) * t);
      }
      p.needsUpdate = true;
    }
    geo.computeVertexNormals();
    const mesh = new THREE.Mesh(geo, m);
    mesh.rotation.y = Math.PI / 4;
    mesh.position.set(x, b + h / 2, z);
    g.add(mesh); return mesh;
  }
  /* 任意平面形状沿 z 挤出（剖面在 XY 平面） */
  function prism(g, pts, depth, x, b, z, m, ry) {
    const s = new THREE.Shape();
    s.moveTo(pts[0][0], pts[0][1]);
    for (let i = 1; i < pts.length; i++) s.lineTo(pts[i][0], pts[i][1]);
    s.closePath();
    const geo = new THREE.ExtrudeGeometry(s, { depth: depth, bevelEnabled: false });
    geo.translate(0, 0, -depth / 2);
    const mesh = new THREE.Mesh(geo, m);
    mesh.position.set(x, b, z);
    if (ry) mesh.rotation.y = ry;
    g.add(mesh); return mesh;
  }
  /* 双坡屋顶 */
  function gable(g, w, h, d, x, b, z, m, ry) {
    return prism(g, [[-w / 2, 0], [w / 2, 0], [0, h]], d, x, b, z, m, ry);
  }
  /* 法式折线屋顶（四坡） */
  function mansard(g, w, d, h, inset, x, b, z, m, ry) {
    return prism(g, [[-w / 2, 0], [w / 2, 0], [w / 2 - inset, h], [-w / 2 + inset, h]], d, x, b, z, m, ry);
  }
  /* 带拱洞的墙（拱洞 = 矩形 + 半圆） */
  function archWall(g, w, h, d, aw, ah, x, b, z, m) {
    const s = new THREE.Shape();
    s.moveTo(-w / 2, 0); s.lineTo(w / 2, 0); s.lineTo(w / 2, h); s.lineTo(-w / 2, h); s.closePath();
    const hole = new THREE.Path();
    hole.moveTo(-aw / 2, 0);
    hole.lineTo(-aw / 2, ah);
    hole.absarc(0, ah, aw / 2, Math.PI, 0, true);
    hole.lineTo(aw / 2, 0);
    hole.closePath();
    s.holes.push(hole);
    const geo = new THREE.ExtrudeGeometry(s, { depth: d, bevelEnabled: false, curveSegments: 14 });
    geo.translate(0, 0, -d / 2);
    const mesh = new THREE.Mesh(geo, m);
    mesh.position.set(x, b, z);
    g.add(mesh); return mesh;
  }
  /* 半圆筒拱顶，轴向沿 x */
  function vault(g, r, len, x, b, z, m) {
    const geo = new THREE.CylinderGeometry(r, r, len, 26, 1, true, 0, Math.PI);
    geo.rotateZ(Math.PI / 2);
    const mesh = new THREE.Mesh(geo, m);
    mesh.position.set(x, b, z);
    g.add(mesh); return mesh;
  }
  function disc(g, r, x, y, z, m, ry) {
    const mesh = new THREE.Mesh(new THREE.CircleGeometry(r, 24), m);
    mesh.position.set(x, y, z);
    if (ry) mesh.rotation.y = ry;
    g.add(mesh); return mesh;
  }

  /* ------------------------------ 各景点体量 ------------------------------ */
  const BUILD = {
    /* 埃菲尔铁塔：四条外撇塔腿 + 三层平台 + 收束塔身 + 天线（真实剖面，底宽 125 m） */
    eiffel(g) {
      const SEG = [
        [0, 57.6, 9.2, 7.2, 53.3, 27.5],
        [57.6, 115.7, 7.2, 5.2, 27.5, 14.5],
        [115.7, 180, 5.2, 4.0, 14.5, 8.0],
        [180, 276.1, 4.0, 2.4, 8.0, 3.2]
      ];
      for (const dx of [-1, 1]) for (const dz of [-1, 1]) {
        for (const s of SEG) {
          const [y0, y1, h0, h1, o0, o1] = s;
          taper(g, h0, h1, y1 - y0, dx * o0, y0, dz * o0, M.main, -dx * (o0 - o1), -dz * (o0 - o1));
        }
      }
      [57.6, 115.7, 276.1].forEach(function (y, i) {
        const w = [70, 42, 13][i];
        bx(g, w, 2.6, w, 0, y, 0, M.accent);
      });
      /* 四面的装饰拱（塔腿之间的半圆） */
      const archGeo = new THREE.TorusGeometry(38, 1.6, 8, 30, Math.PI);
      [[0, 41, 0], [0, -41, 0], [41, 0, Math.PI / 2], [-41, 0, Math.PI / 2]].forEach(function (a) {
        const mesh = new THREE.Mesh(archGeo, M.main);
        mesh.position.set(a[0], 3, a[1]);
        mesh.rotation.y = a[2];
        g.add(mesh);
      });
      /* 顶部塔身与天线 */
      taper(g, 2.6, 1.3, 18, 0, 278.7, 0, M.main);
      cy(g, 0.5, 1.0, 33, 10, 0, 296.7, 0, M.main);
      cy(g, 0.28, 0.5, 6, 8, 0, 329.7, 0, M.accent);
    },

    /* 凯旋门：整块石墙掏出大拱洞 + 内收阁楼与双重檐口 */
    arc(g) {
      archWall(g, 48, 30, 22, 15.5, 24, 0, 0, 0, M.main);
      bx(g, 50, 1.5, 24, 0, 30, 0, M.accent);
      bx(g, 44, 18.5, 20, 0, 31.5, 0, M.main);
      bx(g, 46, 1.6, 22, 0, 50, 0, M.accent);
      /* 四面浮雕带（避开拱洞） */
      for (const z of [11.2, -11.2]) {
        for (const x of [-17, 17]) bx(g, 10, 11, 0.6, x, 12, z, M.dark);
      }
      for (const x of [24.2, -24.2]) {
        for (const z of [-6, 6]) bx(g, 0.6, 11, 10, x, 12, z, M.dark);
      }
    },

    /* 巴黎圣母院：西立面双塔 + 中殿 + 十字翼 + 后殿 + 尖塔 + 飞扶壁 */
    notredame(g) {
      bx(g, 42, 45, 12, 0, 0, 0, M.main);                // 西立面
      for (const x of [-11, 11]) {
        bx(g, 15, 24, 12, x, 45, 0, M.main);             // 双塔
        bx(g, 16, 1.6, 13, x, 69, 0, M.accent);
      }
      disc(g, 6.6, 0, 30, 6.2, M.dark);                  // 玫瑰窗
      for (const x of [-14, 0, 14]) bx(g, 6.4, 11, 1.2, x, 0, 6.1, M.dark); // 三座门洞
      bx(g, 17, 33, 56, 0, 0, -34, M.main);              // 中殿
      gable(g, 18.5, 13, 56, 0, 33, -34, M.accent);
      bx(g, 42, 33, 14, 0, 0, -60, M.main);              // 十字翼
      gable(g, 43, 11, 14, 0, 33, -60, M.accent);
      cy(g, 8.6, 8.6, 33, 20, 0, 0, -70, M.main);        // 后殿
      dm(g, 8.6, 0.55, 0, 33, -70, M.accent);
      /* 交叉处尖塔 */
      cy(g, 2.8, 4.6, 20, 8, 0, 45, -60, M.main);
      cn(g, 2.8, 22, 8, 0, 65, -60, M.accent);
      cy(g, 0.25, 0.6, 9, 6, 0, 87, -60, M.accent);
      /* 飞扶壁 */
      for (const sx of [-1, 1]) {
        for (let i = 0; i < 7; i++) {
          const z = -10 - i * 8;
          bx(g, 1.4, 20, 7, sx * 12.6, 14, z, M.main);
          const rib = bx(g, 1.2, 9, 6, sx * 12.6, 24, z + 3, M.main);
          rib.rotation.z = sx * 0.62;
        }
      }
    },

    /* 卢浮宫：沿塞纳河大画廊 + 黎塞留翼 + 方形庭院 + 玻璃金字塔 */
    louvre(g) {
      bx(g, 218, 20, 17, -8, 0, 18, M.main);             // 大画廊（南）
      mansard(g, 218, 17, 6, 2.6, -8, 20, 18, M.accent);
      bx(g, 150, 20, 17, -30, 0, -26, M.main);           // 黎塞留翼（北）
      mansard(g, 150, 17, 6, 2.6, -30, 20, -26, M.accent);
      /* 方形庭院：东、南、北三面围合 */
      bx(g, 17, 20, 96, 100, 0, 0, M.main);
      bx(g, 96, 20, 17, 52, 0, 48, M.main);
      bx(g, 96, 20, 17, 52, 0, -48, M.main);
      mansard(g, 96, 17, 6, 2.6, 52, 20, 48, M.accent);
      mansard(g, 96, 17, 6, 2.6, 52, 20, -48, M.accent);
      /* 转角楼阁 */
      for (const p of [[-60, 18], [40, 18], [-60, -26], [40, -26], [100, 44], [100, -44]]) {
        bx(g, 26, 28, 26, p[0], 0, p[1], M.main);
        mansard(g, 26, 26, 5, 3, p[0], 28, p[1], M.accent);
      }
      /* 拿破仑庭院玻璃金字塔：置于三面围合的庭院中央 */
      const pyr = new THREE.Mesh(new THREE.ConeGeometry(24, 21.6, 4), M.glass);
      pyr.rotation.y = Math.PI / 4;
      pyr.position.set(50, 10.8, 0);
      g.add(pyr);
      for (const p of [[30, -26], [70, -26], [70, 26]]) {
        const s = new THREE.Mesh(new THREE.ConeGeometry(7, 6.2, 4), M.glass);
        s.rotation.y = Math.PI / 4;
        s.position.set(p[0], 3.1, p[1]);
        g.add(s);
      }
    },

    /* 圣心堂：阶梯基座 + 中央大穹顶 + 四角小穹顶 + 钟楼 */
    sacrecoeur(g) {
      bx(g, 78, 5, 62, 0, -1, 0, M.main);
      bx(g, 60, 6, 46, 0, 4, 0, M.main);
      bx(g, 48, 20, 32, 0, 10, 0, M.main);
      /* 正面三座门廊 */
      archWall(g, 22, 15, 4, 5.4, 9, 0, 10, 15.4, M.main);
      /* 主穹顶 */
      cy(g, 13.5, 14, 20, 20, 0, 30, 0, M.main);
      dm(g, 13.8, 1.05, 0, 50, 0, M.accent);
      cy(g, 2.8, 3.4, 5, 10, 0, 63, 0, M.main);
      cn(g, 2.8, 7, 10, 0, 68, 0, M.accent);
      /* 四角小穹顶 */
      for (const p of [[-16, 11], [16, 11], [-16, -11], [16, -11]]) {
        cy(g, 5.4, 5.4, 8, 14, p[0], 30, p[1], M.main);
        dm(g, 5.6, 1, p[0], 38, p[1], M.accent);
      }
      /* 钟楼 */
      bx(g, 8, 44, 8, -27, 10, 8, M.main);
      cn(g, 5.6, 10, 4, -27, 54, 8, M.accent);
      /* 后殿 */
      cy(g, 10, 10, 22, 16, 0, 10, -16, M.main);
      dm(g, 10, 0.5, 0, 32, -16, M.accent);
    },

    /* 加尼叶歌剧院：柱廊 + 山花 + 折线屋顶 + 铜绿穹顶 + 舞台后台 */
    opera(g) {
      bx(g, 58, 26, 40, 0, 0, 0, M.main);
      mansard(g, 58, 40, 7, 4, 0, 26, 0, M.accent);
      /* 正立面柱廊 */
      for (let i = 0; i < 8; i++) cy(g, 1, 1.1, 18, 10, -24 + i * 6.9, 0, 22, M.accent);
      bx(g, 56, 4, 10, 0, 18, 22, M.accent);
      gable(g, 56, 6, 10, 0, 22, 22, M.accent);
      /* 铜绿穹顶 */
      cy(g, 11, 12, 8, 18, 0, 33, -4, M.main);
      dm(g, 11.4, 1.25, 0, 41, -4, M.accent);
      cn(g, 2, 5, 10, 0, 55, -4, M.accent);
      /* 舞台后台 */
      bx(g, 40, 30, 24, 0, 0, -30, M.main);
      gable(g, 41, 8, 24, 0, 30, -30, M.accent);
      /* 两侧亭阁 */
      for (const x of [-31, 31]) {
        bx(g, 14, 24, 22, x, 0, 6, M.main);
        dm(g, 7, 0.8, x, 24, 6, M.accent);
      }
    },

    /* 荣军院：长排营房 + 中央穹顶教堂（金顶） */
    invalides(g) {
      bx(g, 158, 16, 15, 0, 0, 34, M.main);
      bx(g, 158, 16, 15, 0, 0, -34, M.main);
      bx(g, 34, 26, 32, 0, 0, 0, M.main);
      bx(g, 30, 6, 28, 0, 26, 0, M.accent);
      cy(g, 14, 15, 22, 22, 0, 26, 0, M.main);
      dm(g, 15.2, 1.2, 0, 48, 0, M.accent);
      cy(g, 3.2, 3.8, 12, 12, 0, 64, 0, M.accent);
      cn(g, 3.2, 9, 12, 0, 76, 0, M.accent);
      cy(g, 0.3, 0.8, 18, 8, 0, 85, 0, M.accent);
      /* 前庭柱廊 */
      for (let i = 0; i < 6; i++) cy(g, 0.9, 1, 12, 8, -12 + i * 4.8, 0, 17, M.accent);
    },

    /* 先贤祠：柱廊 + 山花 + 鼓座 + 大穹顶 + 采光亭 */
    pantheon(g) {
      bx(g, 38, 28, 44, 0, 0, -6, M.main);
      bx(g, 52, 28, 15, 0, 0, -24, M.main);
      for (let i = 0; i < 6; i++) cy(g, 1.3, 1.4, 21, 12, -15 + i * 6, 0, 20, M.accent);
      bx(g, 38, 5, 9, 0, 21, 20, M.accent);
      gable(g, 38, 6, 9, 0, 26, 20, M.accent);
      cy(g, 17, 18, 14, 26, 0, 28, -6, M.main);
      dm(g, 17.4, 0.95, 0, 42, -6, M.accent);
      cy(g, 4.6, 5, 9, 14, 0, 58, -6, M.accent);
      cn(g, 4.4, 8, 14, 0, 67, -6, M.accent);
      cy(g, 0.3, 0.7, 8, 8, 0, 75, -6, M.accent);
    },

    /* 奥赛博物馆：长条大厅 + 拱形玻璃顶 + 尽端钟楼 */
    orsay(g) {
      bx(g, 152, 18, 26, 0, 0, 0, M.main);
      vault(g, 13, 152, 0, 18, 0, M.glass);
      bx(g, 30, 30, 34, -74, 0, 0, M.main);
      gable(g, 31, 8, 34, -74, 30, 0, M.accent);
      disc(g, 7, -89.2, 20, 0, M.dark, -Math.PI / 2);
      for (const x of [-40, 40]) {
        bx(g, 20, 22, 34, x, 0, 0, M.main);
        mansard(g, 20, 34, 5, 3, x, 22, 0, M.accent);
      }
    },

    /* 大皇宫：石基座 + 巨型玻璃筒拱 + 角部穹顶 */
    grandpalais(g) {
      bx(g, 182, 16, 56, 0, 0, 0, M.main);
      bx(g, 110, 5, 40, -20, 16, 0, M.main);
      vault(g, 19, 110, -20, 21, 0, M.glass);
      for (const p of [[-70, 16], [-70, -16], [30, 16], [30, -16]]) dm(g, 7.4, 1, p[0], 16, p[1], M.accent);
      dm(g, 12, 1, -20, 21, 0, M.glass);
      for (let i = 0; i < 10; i++) cy(g, 1.1, 1.2, 14, 8, -80 + i * 17, 0, 27, M.accent);
    },

    /* 蓬皮杜中心：白色盒子 + 外露管道 + 斜向自动扶梯管 */
    pompidou(g) {
      bx(g, 58, 40, 44, 0, 0, 0, M.main);
      /* 立面钢架 */
      for (let i = 0; i < 5; i++) bx(g, 60, 0.9, 0.9, 0, 6 + i * 8, 22.2, M.accent);
      for (let i = 0; i < 8; i++) bx(g, 0.9, 42, 0.9, -26 + i * 7.2, 0, 22.2, M.accent);
      /* 彩色管道：蓝空调 / 绿水管 / 黄电力 / 红电梯 */
      const pipes = [M.pipeBlue, M.pipeGreen, M.pipeYellow, M.pipeRed, M.pipeBlue, M.pipeYellow];
      for (let i = 0; i < pipes.length; i++) cy(g, 1.3, 1.3, 30, 10, -22 + i * 8.4, 2, 24.4, pipes[i]);
      /* 斜向扶梯管 */
      const esc = new THREE.Mesh(new THREE.CylinderGeometry(3.2, 3.2, 52, 14), M.glass);
      esc.position.set(20, 22, 26);
      esc.rotation.z = 0.62;
      g.add(esc);
      bx(g, 50, 3, 40, 0, 40, 0, M.accent);
      for (const x of [-14, 0, 14]) cy(g, 2.4, 2.4, 3, 10, x, 43, 0, M.dark);
    },

    /* 蒙帕纳斯大楼：深色板式塔楼 + 基座 */
    montparnasse(g) {
      bx(g, 66, 18, 50, 0, 0, 0, M.main);
      bx(g, 48, 192, 34, 0, 18, 0, M.dark);
      bx(g, 50, 3, 36, 0, 209, 0, M.accent);
      for (let i = 0; i < 18; i++) bx(g, 48.6, 0.6, 34.6, 0, 30 + i * 9.6, 0, M.main);
    },

    /* 圣礼拜堂：高窗 + 陡屋顶 + 纤细尖塔 */
    chapel(g) {
      bx(g, 17, 12, 27, 0, 0, 0, M.main);
      bx(g, 15, 21, 27, 0, 12, 0, M.glass);
      for (const x of [-7.6, 7.6]) bx(g, 1.4, 21, 27, x, 12, 0, M.main);
      gable(g, 16, 12, 27, 0, 33, 0, M.accent);
      cy(g, 0.6, 1.8, 30, 8, 0, 41, 0, M.accent);
      cn(g, 0.6, 6, 8, 0, 70, 0, M.accent);
      disc(g, 4.4, 0, 27, 13.6, M.dark);
      bx(g, 20, 3, 14, 0, 0, 18, M.main);
    },

    /* 夏乐宫：两翼弧墙环抱广场 + 喷泉水池 */
    chaillot(g) {
      bx(g, 150, 4, 44, 0, -4, 0, M.main);
      for (const s of [1, -1]) {
        const geo = new THREE.CylinderGeometry(84, 84, 22, 40, 1, true, s > 0 ? Math.PI * 0.12 : Math.PI * 1.12, Math.PI * 0.76);
        const mesh = new THREE.Mesh(geo, M.shell);
        mesh.position.set(0, 11, 26);
        if (s > 0) mesh.scale.x = -1;
        g.add(mesh);
        bx(g, 26, 26, 26, s * 46, 0, 20, M.main);
        mansard(g, 26, 26, 5, 3, s * 46, 26, 20, M.accent);
      }
      cy(g, 22, 22, 3, 26, 0, -2, 0, M.main);
      disc(g, 20, 0, 1.6, 0, M.glass);
    }
  };

  /* ------------------------------ 生成模型 ------------------------------ */
  const group = new THREE.Group();
  group.name = 'landmarks';
  C.world.add(group);

  const items = [];
  LIST.forEach(function (d, idx) {
    const g = new THREE.Group();
    const x = C.xOf(d.lon), z = C.zOf(d.lat);
    const baseY = (C.hAt(d.lon, d.lat) - 1.0) * VE;
    g.position.set(x, baseY, z);
    g.rotation.y = d.rot || 0;
    g.scale.set(1, VE, 1);
    const build = BUILD[d.kind];
    if (build) build(g);
    group.add(g);

    /* 地面光环：按实际体量的平面外接尺寸取半径，让景点在密集街区里一眼可辨 */
    g.updateMatrixWorld(true);
    const bb = new THREE.Box3().setFromObject(g);
    const span = Math.max(bb.max.x - bb.min.x, bb.max.z - bb.min.z);
    const rad = Math.min(140, Math.max(36, span * 0.5 + 10));
    const ring = new THREE.Mesh(new THREE.RingGeometry(rad, rad + 12, 56), ringMat);
    ring.rotation.x = -Math.PI / 2;
    ring.position.set(x, baseY + 2.6, z);   // 略高于地表，压住地形与水面
    C.world.add(ring);

    items.push({
      d: d, obj: g, ring: ring,
      x: x, z: z, baseY: baseY,
      topY: baseY + d.h * VE,
      viewDist: Math.max(420, d.h * VE * 2.0 + 300, span * VE * 1.30 + 150)
    });
  });

  /* ------------------------------ 标记与面板 ------------------------------ */
  const layer = document.getElementById('lm-markers');
  const panel = document.getElementById('lm-panel');
  const elName = document.getElementById('lm-name');
  const elEn = document.getElementById('lm-en');
  const elMeta = document.getElementById('lm-meta');
  const elIntro = document.getElementById('lm-intro');
  const elIndex = document.getElementById('lm-index');
  let selected = -1;

  items.forEach(function (it, i) {
    const b = document.createElement('button');
    b.className = 'mk';
    b.type = 'button';
    b.dataset.id = it.d.id;
    b.innerHTML = '<span class="dot"></span><span class="name">' + it.d.name + '</span>';
    b.addEventListener('click', function (e) { e.stopPropagation(); select(i, true); });
    layer.appendChild(b);
    it.marker = b;
  });

  function select(i, fly) {
    selected = i;
    items.forEach(function (it, k) { it.marker.classList.toggle('on', k === i); });
    const it = items[i];
    elName.textContent = it.d.name;
    elEn.textContent = it.d.en;
    elMeta.textContent = it.d.year + ' · 高 ' + it.d.h + ' m';
    elIntro.textContent = it.d.intro;
    elIndex.textContent = String(i + 1).padStart(2, '0') + ' / ' + String(items.length).padStart(2, '0');
    panel.classList.add('on');
    /* 选中光环放大提亮 */
    items.forEach(function (o) { o.ring.scale.setScalar(o === it ? 1.25 : 1); });
    ringMat.opacity = 0.38;
    if (fly) flyTo(it);
  }

  /* 列表联动 */
  const listEl = document.getElementById('lm-list');
  if (listEl) {
    items.forEach(function (it, i) {
      const li = document.createElement('button');
      li.type = 'button';
      li.className = 'li';
      li.innerHTML = '<i>' + String(i + 1).padStart(2, '0') + '</i><span>' + it.d.name + '</span><em>' + it.d.year + '</em>';
      li.addEventListener('click', function () { select(i, true); });
      listEl.appendChild(li);
    });
  }

  /* ------------------------------ 相机飞行 ------------------------------ */
  let fly = null;
  function flyTo(it) {
    fly = {
      t0: performance.now(), dur: 1100,
      from: { tx: C.cam.tx, ty: C.cam.ty, tz: C.cam.tz, dist: C.cam.dist, az: C.cam.az, pol: C.cam.pol },
      to: { tx: it.x, ty: it.baseY + it.d.h * VE * 0.42, tz: it.z, dist: it.viewDist, az: it.d.rot - 0.85, pol: 0.86 }
    };
  }
  function ease(t) { return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2; }

  /* ------------------------------ 主题 ------------------------------ */
  const themeBox = document.getElementById('lm-theme');
  function applyTheme(key) {
    const t = THEMES[key];
    if (!t) return;
    M.main.color.setHex(t.main); M.main.emissive.setHex(t.emissive);
    M.accent.color.setHex(t.accent); M.accent.emissive.setHex(t.emissive);
    M.shell.color.setHex(t.main); M.shell.emissive.setHex(t.emissive);
    M.dark.color.setHex(t.dark);
    ringMat.color.setHex(t.ring);
    document.documentElement.style.setProperty('--accent', '#' + t.ring.toString(16).padStart(6, '0'));
    document.documentElement.setAttribute('data-atlas-theme', key);
    if (themeBox) {
      Array.prototype.forEach.call(themeBox.querySelectorAll('button'), function (b) {
        b.classList.toggle('on', b.dataset.theme === key);
      });
    }
  }
  if (themeBox) {
    Array.prototype.forEach.call(themeBox.querySelectorAll('button'), function (b) {
      b.addEventListener('click', function () { applyTheme(b.dataset.theme); });
    });
    applyTheme('bronze');
  }

  /* ------------------------------ 每帧：标记投影 / 飞行 ------------------------------ */
  const v3 = new THREE.Vector3();
  function frame() {
    requestAnimationFrame(frame);
    if (fly) {
      const k = Math.min(1, (performance.now() - fly.t0) / fly.dur);
      const e = ease(k);
      C.cam.tx = fly.from.tx + (fly.to.tx - fly.from.tx) * e;
      C.cam.ty = fly.from.ty + (fly.to.ty - fly.from.ty) * e;
      C.cam.tz = fly.from.tz + (fly.to.tz - fly.from.tz) * e;
      C.cam.dist = fly.from.dist + (fly.to.dist - fly.from.dist) * e;
      C.cam.az = fly.from.az + (fly.to.az - fly.from.az) * e;
      C.cam.pol = fly.from.pol + (fly.to.pol - fly.from.pol) * e;
      C.applyCamera();
      C.updateScale();
      if (k >= 1) fly = null;
    }
    const w = window.innerWidth, h = window.innerHeight;
    for (let i = 0; i < items.length; i++) {
      const it = items[i];
      v3.set(it.x, it.topY + 26 * VE, it.z).project(C.camera);
      const vis = v3.z < 1 && v3.z > -1;
      if (!vis) { it.marker.style.display = 'none'; continue; }
      it.marker.style.display = '';
      it.marker.style.transform = 'translate(-50%,-100%) translate(' +
        Math.round((v3.x * 0.5 + 0.5) * w) + 'px,' + Math.round((-v3.y * 0.5 + 0.5) * h) + 'px)';
    }
  }
  frame();

  /* ------------------------------ 对外指标 ------------------------------ */
  const de = document.documentElement;
  de.setAttribute('data-atlas-landmarks', String(items.length));
  const cEl = document.getElementById('lm-count');
  if (cEl) cEl.textContent = String(items.length);

  /* 支持 ?lm=<id> 直接定位某处（截图与分享用） */
  const q = new URLSearchParams(location.search);
  if (q.has('lm')) {
    const i = items.findIndex(function (it) { return it.d.id === q.get('lm'); });
    if (i >= 0) setTimeout(function () { select(i, false); }, 80);
  }
})();
  });
});