// ============================================================
// 达芬奇棕墨手稿插图映射
// 全站图片资源统一放在 assets/images/davinci/，按分支 + 主题分配
// 世界观页按主导分支或主题覆盖；科技页按领域或主题覆盖
// ============================================================
const DAVINCI_IMAGES = {
  // 7 大分支默认图
  branch: {
    E: "energy.png",       // 能源
    M: "material.png",     // 材料
    I: "intelligence.png", // 智能
    B: "biology.png",      // 生命
    S: "space.png",        // 空间
    W: "weapon.png",       // 武力
    X: "singularity.png"   // 奇点
  },

  // 世界观主题覆盖（标志性作品优先配图）
  work: {
    // 能源 / 行星发动机
    "three-body": "energy.png",
    "wandering-earth": "energy.png",

    // 空间 / 星际航行
    "star-trek": "space.png",
    "star-wars": "space.png",
    "foundation": "space.png",
    "dune": "space.png",
    "2001": "space.png",
    "expanse": "space.png",
    "forever-war": "space.png",

    // 超光速 / 曲率
    "interstellar": "warp.png",

    // 太空电梯
    "fountains-of-paradise": "elevator.png",
    "red-mars": "elevator.png",

    // 戴森球 / 环世界
    "ringworld": "dysonsphere.png",

    // 虚拟意识 / AI
    "the-matrix": "virtualmind.png",
    "ghost-in-shell": "virtualmind.png",
    "neuromancer": "virtualmind.png",
    "her": "virtualmind.png",
    "transcendence": "virtualmind.png",

    // 人造生命 / 仿生人
    "blade-runner": "android.png",
    "westworld": "android.png",
    "ex-machina": "android.png",
    "frankenstein": "android.png",
    "do-androids-dream": "android.png",

    // 生物工程
    "jurassic-park": "biology.png",
    "uplift-war": "biology.png",
    "ander": "biology.png",

    // 武器 / 战争
    "starship-troopers": "weapon.png",
    "terminator": "weapon.png",
    "enders-game": "weapon.png",

    // 时间旅行
    "time-machine": "timemachine.png",
    "back-to-the-future": "timemachine.png",
    "predestination": "timemachine.png",
    "primer": "timemachine.png",

    // 机械城 / 玩具式万物
    "doraemon": "clockwork.png",

    // 材料 / 晶体
    "diamond-age": "material.png"
  },

  // 科技条目主题覆盖
  tech: {
    "planet-engine": "energy.png",
    "fusion-power-basic": "energy.png",
    "heavy-fusion": "energy.png",
    "warp-drive": "warp.png",
    "space-elevator": "elevator.png",
    "dyson-sphere": "dysonsphere.png",
    "time-travel": "timemachine.png",
    "replicant": "android.png",
    "matrix-sim": "virtualmind.png",
    "mecha-city": "clockwork.png"
  }
};

const DaVinciImg = {
  // 由作品 treeLit 推导主导分支（首字母计数取最大）
  branchForWork(workId) {
    const w = WORKS.find(x => x.id === workId);
    if (!w || !w.treeLit || !w.treeLit.length) return "X";
    const cnt = {};
    w.treeLit.forEach(k => {
      const b = k.charAt(0);
      if ("EMIBSW".includes(b)) cnt[b] = (cnt[b] || 0) + 1;
    });
    let best = "X", bestN = -1;
    "EMIBSW".split("").forEach(b => { if ((cnt[b] || 0) > bestN) { bestN = cnt[b] || 0; best = b; } });
    return bestN > 0 ? best : "X";
  },

  // 由科技领域映射分支
  branchForTech(tech) {
    return ({ energy: "E", material: "M", info: "I", bio: "B", aerospace: "S", weapon: "W" })[tech.domain] || "X";
  },

  // 世界观页图片路径
  forWork(workId) {
    const file = DAVINCI_IMAGES.work[workId]
      || DAVINCI_IMAGES.branch[this.branchForWork(workId)]
      || "singularity.png";
    return "assets/images/davinci/" + file;
  },

  // 科技页图片路径
  forTech(tech) {
    const file = DAVINCI_IMAGES.tech[tech.id]
      || DAVINCI_IMAGES.branch[this.branchForTech(tech)]
      || "singularity.png";
    return "assets/images/davinci/" + file;
  }
};
