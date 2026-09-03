// 技术可行性分级体系（5 级）
// 这是整个项目的基础元数据，所有技术条目按此归类。
window.SCICAT_CATEGORIES = [
  {
    id: "implemented",
    name: "已实现",
    nameEn: "Implemented",
    color: "#2e9e5b",
    short: "已落地",
    desc: "已有可工作原型、商业化产品或经同行验证的实验室系统。工程问题已解决或接近解决，重点转向成本、规模与可靠性。",
    principle: "现实物理 + 成熟工程。可直接作为其他技术的基石。",
    roadmap: "量产化 / 降本 / 集成 / 下一代迭代"
  },
  {
    id: "feasible-now",
    name: "目前技术可实现",
    nameEn: "Technically Feasible Now",
    color: "#3a8fd0",
    short: "技术可行",
    desc: "物理原理清晰、关键材料/工艺已出现，暂无不可逾越的根本性障碍。受限于成本、规模、可靠性或系统集成，但 10–30 年内有望工程化。",
    principle: "现实物理已支撑原理验证（PoC），缺工程化与规模化。",
    roadmap: "原理验证 → 工程样机 → 系统集成 → 规模验证"
  },
  {
    id: "future-possible",
    name: "未来可能实现",
    nameEn: "Possibly Implementable",
    color: "#c7902a",
    short: "未来可能",
    desc: "不违反已知物理定律，但依赖尚未存在或极不成熟的技术突破（如材料科学、能源密度、算力）。需多项前置技术协同成熟，时间尺度 50–200+ 年。",
    principle: "不违背物理，但依赖尚未出现的使能技术（enabler）。",
    roadmap: "前置使能技术突破 → 原理重估 → 长周期工程化"
  },
  {
    id: "future-difficult",
    name: "未来较难实现",
    nameEn: "Difficult to Implement",
    color: "#c9542f",
    short: "未来较难",
    desc: "理论上未完全证伪，但与当前物理框架存在张力，或需要逼近理论极限的能量/精度/尺度。实现概率低，需范式级突破或新物理。",
    principle: "与现有物理有张力或需逼近理论极限；需新物理或范式转移。",
    roadmap: "新物理探索 → 极限工况验证 → 极高成本原型"
  },
  {
    id: "worldview-only",
    name: "仅限该世界观",
    nameEn: "Worldview-Only",
    color: "#8a5cd0",
    short: "世界观限定",
    desc: "依赖该虚构宇宙特有的“设定法则”（如原力、灵能、魔法、时空重置），这些法则在现实物理中无对应机制。作为创作素材与思想实验保留，并标注其“破壁”所需替换的物理公设。",
    principle: "依赖虚构设定法则；若要现实化需显式替换基础物理公设。",
    roadmap: "设定解构 → 公设替换 → 判定能否进入其他分级"
  }
];

// 分级顺序（用于排序与科技树层级）
window.SCICAT_ORDER = ["implemented", "feasible-now", "future-possible", "future-difficult", "worldview-only"];
