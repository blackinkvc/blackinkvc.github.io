// ============================================================
// 世界观关联数据
// 科幻作品之间真实的致敬 / 影响 / 同源谱系关系。
// type: "致敬" = from 明确致敬或受启发于 to（创作影响，含方向）
//       "谱系" = from 与 to 同属一个科幻子类型家族（并列，无明确时序）
//       "母题" = 共享同一核心母题，互文而生
// 关系网图将每条边作无向处理（连线），线型按 type 区分。
// ============================================================

const RELATIONS = [
  // —— 硬科幻致敬 2001 / 基地 ——
  { from: "interstellar", to: "odyssey", type: "致敬" },
  { from: "three-body", to: "odyssey", type: "致敬" },
  { from: "the-expanse", to: "odyssey", type: "谱系" },
  { from: "foundation", to: "star-trek", type: "致敬" },
  { from: "hitchhikers-guide", to: "foundation", type: "致敬" },
  { from: "childhoods-end", to: "foundation", type: "谱系" },
  { from: "hyperion", to: "foundation", type: "谱系" },
  { from: "three-body", to: "foundation", type: "致敬" },

  // —— 沙丘的传承 ——
  { from: "dune", to: "star-wars", type: "致敬" },
  { from: "three-body", to: "dune", type: "致敬" },
  { from: "foundation", to: "dune", type: "谱系" },

  // —— 赛博朋克 / 电子脑谱系 ——
  { from: "true-names", to: "neuromancer", type: "致敬" },
  { from: "neuromancer", to: "the-matrix", type: "致敬" },
  { from: "neuromancer", to: "snow-crash", type: "谱系" },
  { from: "true-names", to: "ready-player-one", type: "谱系" },
  { from: "blade-runner", to: "ghost-in-shell", type: "致敬" },
  { from: "the-matrix", to: "ghost-in-shell", type: "致敬" },
  { from: "akira", to: "ghost-in-shell", type: "谱系" },
  { from: "ghost-in-shell", to: "altered-carbon", type: "谱系" },
  { from: "snow-crash", to: "the-matrix", type: "谱系" },

  // —— 造物失控 / 仿生人母题（弗兰肯斯坦谱系）——
  { from: "frankenstein", to: "blade-runner", type: "母题" },
  { from: "frankenstein", to: "ex-machina", type: "母题" },
  { from: "frankenstein", to: "westworld", type: "母题" },
  { from: "i-robot", to: "westworld", type: "谱系" },
  { from: "i-robot", to: "terminator", type: "谱系" },
  { from: "i-robot", to: "ex-machina", type: "谱系" },
  { from: "metropolis", to: "blade-runner", type: "致敬" },
  { from: "the-matrix", to: "metropolis", type: "致敬" },

  // —— 模拟世界母题 ——
  { from: "the-matrix", to: "truman-show", type: "母题" },
  { from: "the-matrix", to: "inception", type: "母题" },
  { from: "the-matrix", to: "source-code", type: "谱系" },
  { from: "the-matrix", to: "upload", type: "谱系" },

  // —— 梦境 / 意识 ——
  { from: "inception", to: "paprika", type: "致敬" },
  { from: "tron", to: "the-matrix", type: "谱系" },

  // —— 异星生态 / 区域 ——
  { from: "avatar", to: "nausicaa", type: "致敬" },
  { from: "avatar", to: "rendezvous-with-rama", type: "谱系" },
  { from: "solaris", to: "annihilation", type: "母题" },
  { from: "roadside-picnic", to: "annihilation", type: "母题" },

  // —— 寄生 / 猎手外星人 ——
  { from: "alien", to: "the-thing", type: "谱系" },
  { from: "predator", to: "alien", type: "谱系" },

  // —— 太空歌剧 / 赏金猎人 ——
  { from: "cowboy-bebop", to: "firefly", type: "谱系" },
  { from: "firefly", to: "the-expanse", type: "谱系" },
  { from: "star-wars", to: "star-trek", type: "谱系" },

  // —— 巨型兵器 / 机甲 ——
  { from: "gundam", to: "evangelion", type: "谱系" },

  // —— 环形世界 / 巨型结构 ——
  { from: "ringworld", to: "childhoods-end", type: "谱系" },
  { from: "a-fire-upon-the-deep", to: "ringworld", type: "谱系" },

  // —— 时间旅行谱系 ——
  { from: "doraemon", to: "back-to-the-future", type: "谱系" },
  { from: "predestination", to: "back-to-the-future", type: "谱系" },

  // —— 反乌托邦谱系 ——
  { from: "we", to: "nineteen-eighty-four", type: "谱系" },
  { from: "brave-new-world", to: "nineteen-eighty-four", type: "谱系" },
  { from: "fahrenheit-451", to: "nineteen-eighty-four", type: "谱系" },
  { from: "black-mirror", to: "nineteen-eighty-four", type: "谱系" },
  { from: "psycho-pass", to: "minority-report", type: "谱系" }
];

// 确定性伪随机
function mulberry32(a) {
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// 力导向布局（Fruchterman-Reingold 简化版，固定 seed → 确定性）
function forceLayout(ids, edges, W, H, seed) {
  const rand = mulberry32(seed || 42);
  const pos = {};
  const n = ids.length;
  ids.forEach((id) => {
    const ang = (ids.indexOf(id) / n) * Math.PI * 2;
    const r = Math.min(W, H) * 0.36;
    pos[id] = {
      x: W / 2 + Math.cos(ang) * r + (rand() - 0.5) * 40,
      y: H / 2 + Math.sin(ang) * r + (rand() - 0.5) * 40
    };
  });
  const k = Math.sqrt((W * H) / n);
  const ITER = 380;
  for (let it = 0; it < ITER; it++) {
    const disp = {};
    ids.forEach(id => disp[id] = { x: 0, y: 0 });
    // 斥力
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        const a = ids[i], b = ids[j];
        let dx = pos[a].x - pos[b].x, dy = pos[a].y - pos[b].y;
        let d = Math.hypot(dx, dy) || 0.01;
        const f = (k * k) / d;
        const ux = dx / d, uy = dy / d;
        disp[a].x += ux * f; disp[a].y += uy * f;
        disp[b].x -= ux * f; disp[b].y -= uy * f;
      }
    }
    // 引力（边）
    edges.forEach(e => {
      const a = e.from, b = e.to;
      if (!pos[a] || !pos[b]) return;
      let dx = pos[a].x - pos[b].x, dy = pos[a].y - pos[b].y;
      let d = Math.hypot(dx, dy) || 0.01;
      const f = (d - k * 1.1) * 0.08;
      const ux = dx / d, uy = dy / d;
      disp[a].x -= ux * f; disp[a].y -= uy * f;
      disp[b].x += ux * f; disp[b].y += uy * f;
    });
    // 位移 + 中心引力 + 边界
    const temp = Math.max(W * 0.04, 2);
    ids.forEach(id => {
      disp[id].x += (W / 2 - pos[id].x) * 0.012;
      disp[id].y += (H / 2 - pos[id].y) * 0.012;
      const len = Math.hypot(disp[id].x, disp[id].y) || 1;
      const step = Math.min(len, temp);
      pos[id].x += disp[id].x / len * step;
      pos[id].y += disp[id].y / len * step;
      pos[id].x = Math.max(36, Math.min(W - 36, pos[id].x));
      pos[id].y = Math.max(36, Math.min(H - 36, pos[id].y));
    });
  }
  return pos;
}

// 取某作品的全部关系（双向）
function getRelations(id) {
  const out = [], inc = [];
  RELATIONS.forEach(r => {
    if (r.from === id) out.push(r);
    if (r.to === id) inc.push(r);
  });
  return { out, inc };
}
