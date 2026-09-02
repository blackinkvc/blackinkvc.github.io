// ============================================================
// 实现可能性覆盖数据（L2 研发中 / L3 未来可能实现）
// 站点自动按 verdict/level/blockers 派生默认估计；
// 此处仅对需要"差异化标注"的条目做人工覆盖，
// 例如同属聚变态的「可控核聚变 / 小型聚变 / 冷聚变」可能性各不相同。
// 字段：estimate 实现可能性、partialEstimate 部分实现可能性
//       取值 high(高) / medium(中) / low(低)
// ============================================================
const FEASIBILITY = {
  // —— 聚变分支：同一物理目标，尺度与设定不同 → 可能性不同 ——
  "fusion-power": {
    estimate: "medium",
    note: "2022 年以来已实现 Q>1 净能量增益（NIF 惯性约束、JET/ITER 路线），但稳态燃烧、氚自持与工程经济性仍远。",
    partialEstimate: "high",
    partialNote: "点火与净增益已演示；紧凑托卡马克、高温超导磁体、医用中子源等子集已在推进。"
  },
  "interstellar-fusion-rocket": {
    estimate: "medium",
    note: "聚变推进原理可行，难点在净增益叠加小型化与长时运行，Direct Fusion Drive 等概念已有实验。",
    partialEstimate: "high",
    partialNote: "小功率聚变推进与地面级净增益验证可在近期以受限形式出现。"
  },
  "heavy-fusion": {
    estimate: "low",
    note: "重元素聚变点火温度极高、反应截面小、约束更难，远超当前工程可达范围。",
    partialEstimate: "medium",
    partialNote: "若引入催化或奇异约束方案，理论截面可提升，但仍处远期探索。"
  },
  "mcu-arc-reactor": {
    estimate: "low",
    note: "「微型冷聚变」依赖违背已知核物理的常温净增益，无实验支撑，属漫画设定。",
    partialEstimate: "low",
    partialNote: "仅能取其现实工程外壳（小型化能源、先进电池/电容）做类比，冷聚变核心不可行。"
  },

  // —— 若干跨域示范覆盖 ——
  "replicant": {
    estimate: "medium",
    note: "生物工程合成体方向可行，但「意识/人格」本质未解，全面复制人受科学与伦理双重约束。",
    partialEstimate: "high",
    partialNote: "功能型仿生体、脑机接口义体已在临床，受限形态近年可期。"
  },
  "cryo-sleep": {
    estimate: "low",
    note: "哺乳动物全身深低温长期保存的冰晶损伤与复温均匀性尚无可行解。",
    partialEstimate: "medium",
    partialNote: "器官级玻璃化冷冻、部分组织低温保存已有进展。"
  },
  "psychohistory": {
    estimate: "low",
    note: "对开放复杂系统做精确长程预测，受混沌发散与数据覆盖不足限制。",
    partialEstimate: "medium",
    partialNote: "受限场景（市场、舆情）的大数据建模已有近似应用。"
  }
};
