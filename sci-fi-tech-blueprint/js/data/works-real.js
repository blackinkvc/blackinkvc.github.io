// ============================================================
// 真实世界历史演进 · 7 个现实世界观
// 原始地球 → 石器时代 → 火器时代 → 工业革命I(蒸汽) → II(电力) → III(网络) → IV(智能)
// 作为全站"世界观演进逻辑链"的基底：各阶段科技通过 dependencies 串成主轴。
// physicalDivergences 为空（真实世界不偏离物理）；techLevels 全为 L1（皆已实现）。
// ============================================================
WORKS.push(
  {
    id: "primordial-earth",
    title: "原始地球",
    creator: "人类文明",
    media: "历史 / 现实",
    year: -3000000,
    era: "约 300 万年前 — 用火之前",
    setting: "人类与直立人祖先以采集狩猎为生，尚无稳定用火与成形工具。这是文明的零点：一切后续技术都建立在对自然物质的粗糙操控之上。",
    physicalDivergences: [],
    techLevels: ["L1"],
    treeLit: ["B1"],
    representativeTechs: ["primordial-earth-stone-tool"]
  },
  {
    id: "stone-age",
    title: "石器时代",
    creator: "人类文明",
    media: "历史 / 现实",
    year: -1000000,
    era: "约 100 万年前 — 公元前 3000 年",
    setting: "稳定用火、磨制石器、复合工具（弓箭）与新石器农业相继出现。人类从被动适应自然，转向主动改造环境，定居与人口增长由此启动。",
    physicalDivergences: [],
    techLevels: ["L1"],
    treeLit: ["B1", "M1", "E1"],
    representativeTechs: ["stone-age-fire"]
  },
  {
    id: "firearms-age",
    title: "火器时代",
    creator: "人类文明",
    media: "历史 / 现实",
    year: 1300,
    era: "约 13 世纪 — 18 世纪",
    setting: "冶金从青铜走向成熟钢铁，黑火药与火绳枪改写战争形态。金属加工与化学能武器成为国家实力的硬指标，为机械工业积累材料与工艺底座。",
    physicalDivergences: [],
    techLevels: ["L1"],
    treeLit: ["B1", "M1", "E1", "W1"],
    representativeTechs: ["firearms-age-metallurgy"]
  },
  {
    id: "industrial-1-steam",
    title: "工业革命 I（蒸汽）",
    creator: "人类文明",
    media: "历史 / 现实",
    year: 1760,
    era: "1760 — 1840",
    setting: "瓦特式往复蒸汽机把燃料热能转为旋转机械功，工厂、铁路与轮船随之诞生。人类首次摆脱肌肉、风与水的地方性限制，进入化石能源驱动的指数增长。",
    physicalDivergences: [],
    techLevels: ["L1"],
    treeLit: ["B1", "M1", "E1", "W1"],
    representativeTechs: ["industrial-1-steam-steam-engine"]
  },
  {
    id: "industrial-2-electric",
    title: "工业革命 II（电力）",
    creator: "人类文明",
    media: "历史 / 现实",
    year: 1870,
    era: "1870 — 1950",
    setting: "发电机与电动机让机械能、电能双向转换，电网把电厂功率无损配送到千家万户。内燃机补齐移动动力，第二次工业革命把\"通用能源\"铺到每一台设备。",
    physicalDivergences: [],
    techLevels: ["L1"],
    treeLit: ["B1", "M1", "E1", "E2", "I1", "W1"],
    representativeTechs: ["industrial-2-electric-generator"]
  },
  {
    id: "industrial-3-network",
    title: "工业革命 III（网络）",
    creator: "人类文明",
    media: "历史 / 现实",
    year: 1970,
    era: "1970 — 2010",
    setting: "半导体与电子计算机把信息从机械载体移到硅上，互联网把全球终端连成一张网。数据成为新的生产资料，自动化与远程协作取代大量体力与文书劳动。",
    physicalDivergences: [],
    techLevels: ["L1"],
    treeLit: ["B1", "M1", "E1", "E2", "I1", "W1"],
    representativeTechs: ["industrial-3-network-semiconductor"]
  },
  {
    id: "industrial-4-ai",
    title: "工业革命 IV（智能）",
    creator: "人类文明",
    media: "历史 / 现实",
    year: 2010,
    era: "2010 — 至今",
    setting: "机器学习，尤其大模型，把推理与生成从规则编程转向数据驱动。智能首次可作为通用服务被调用，自动化从体力延伸到认知劳动，人机协作进入新阶段。",
    physicalDivergences: [],
    techLevels: ["L1"],
    treeLit: ["B1", "M1", "E1", "E2", "I1", "I2", "I3", "W1"],
    representativeTechs: ["industrial-4-ai-ml"]
  }
);
