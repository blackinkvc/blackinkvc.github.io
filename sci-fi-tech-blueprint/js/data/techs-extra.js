// ============================================================
// 科技条目补充（批量生成 · 200 条）
// 覆盖 100 个此前无深度条目的世界观，各 2 条核心科技。
// 字段规范与 techs.js 一致：level(L1-L5) / domain / firstPrinciples(achieved|breakthrough|violated) / implementation / dependencies / tags
// 由 techs-extra.js 在 techs.js 之后加载并执行 TECHS.push(...) 合并。
// ============================================================
const TECHS_EXTRA = [
  {
    id: "frankenstein-t0",
    name: "体细胞克隆与体复制",
    aliases: ["弗兰肯斯坦·体细胞克隆与体复制"],
    workId: "frankenstein",
    level: "L2",
    domain: "bio",
    summary: "由体细胞培育完整个体，现实已克隆动物，人类生殖性克隆被伦理禁止。",
    description: "弗兰肯斯坦 中，「体细胞克隆与体复制」为核心设定之一。由体细胞培育完整个体，现实已克隆动物，人类生殖性克隆被伦理禁止。",
    firstPrinciples: [
      { principle: "体细胞核移植", verdict: "achieved", note: "多莉羊已证实技术可行。" },
      { principle: "人类生殖性克隆", verdict: "breakthrough", note: "技术可行但伦理与发育异常受限。" }
    ],
    implementation: {
      current: "动物克隆成熟；人类克隆被国际禁止。",
      path: ["现实参考：动物克隆成熟；人类克隆被国际禁止。"],
      blockers: ["伦理限制", "表观遗传异常"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["生物", "克隆"]
  },
  {
    id: "frankenstein-t1",
    name: "通用人工智能",
    aliases: ["弗兰肯斯坦·通用人工智能"],
    workId: "frankenstein",
    level: "L3",
    domain: "info",
    summary: "具备跨领域推理与自主目标的机器智能，现实大模型已逼近窄域通用，AGI 仍在攻关。",
    description: "弗兰肯斯坦 中，「通用人工智能」为核心设定之一。具备跨领域推理与自主目标的机器智能，现实大模型已逼近窄域通用，AGI 仍在攻关。",
    firstPrinciples: [
      { principle: "大规模神经网络推理", verdict: "achieved", note: "Transformer 大模型展现涌现能力。" },
      { principle: "自主目标与常识", verdict: "breakthrough", note: "因果与具身常识仍是鸿沟。" }
    ],
    implementation: {
      current: "LLM 在窄域通用，AGI 未达成。",
      path: ["现实参考：LLM 在窄域通用，AGI 未达成。"],
      blockers: ["常识与因果", "对齐"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["信息", "AI"]
  },
  {
    id: "from-earth-to-moon-t0",
    name: "常驻太空与殖民航行",
    aliases: ["从地球到月球·常驻太空与殖民航行"],
    workId: "from-earth-to-moon",
    level: "L2",
    domain: "aerospace",
    summary: "人类常驻近地空间并向行星殖民，现实 ISS 与商业航天已开启，火星任务规划中。",
    description: "从地球到月球 中，「常驻太空与殖民航行」为核心设定之一。人类常驻近地空间并向行星殖民，现实 ISS 与商业航天已开启，火星任务规划中。",
    firstPrinciples: [
      { principle: "近地空间常驻", verdict: "achieved", note: "ISS 持续载人二十余年。" },
      { principle: "行星际载人航行", verdict: "breakthrough", note: "辐射、补给与着陆仍难。" }
    ],
    implementation: {
      current: "SpaceX 等推动低成本发射与火星计划。",
      path: ["现实参考：SpaceX 等推动低成本发射与火星计划。"],
      blockers: ["深空辐射", "生命保障"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["航天", "殖民"]
  },
  {
    id: "from-earth-to-moon-t1",
    name: "反重力与引力操控",
    aliases: ["从地球到月球·反重力与引力操控"],
    workId: "from-earth-to-moon",
    level: "L5",
    domain: "energy",
    summary: "抵消或操控引力场，无已知物理机制，广义相对论下引力即时空几何不可局部屏蔽。",
    description: "从地球到月球 中，「反重力与引力操控」为核心设定之一。抵消或操控引力场，无已知物理机制，广义相对论下引力即时空几何不可局部屏蔽。",
    firstPrinciples: [
      { principle: "局部引力屏蔽", verdict: "violated", note: "引力无负质量源可屏蔽。" },
      { principle: "反重力推进", verdict: "violated", note: "无对应机制。" }
    ],
    implementation: {
      current: "仅等效失重（自由落体）。",
      path: ["现实参考：仅等效失重（自由落体）。"],
      blockers: ["无负质量", "引力本质"],
      sopStage: "SOP-2 原理分析"
    },
    dependencies: [],
    tags: ["能源", "引力", "设定"]
  },
  {
    id: "twenty-thousand-leagues-t0",
    name: "恒星能量采集",
    aliases: ["海底两万里·恒星能量采集"],
    workId: "twenty-thousand-leagues",
    level: "L4",
    domain: "energy",
    summary: "以巨型结构包裹恒星采集其全部辐射，现实仅理论，材料与工程尺度不可及。",
    description: "海底两万里 中，「恒星能量采集」为核心设定之一。以巨型结构包裹恒星采集其全部辐射，现实仅理论，材料与工程尺度不可及。",
    firstPrinciples: [
      { principle: "恒星辐射收集", verdict: "breakthrough", note: "能量巨大但结构尺度超工程极限。" },
      { principle: "太空巨型结构", verdict: "breakthrough", note: "材料强度与轨道动力学难。" }
    ],
    implementation: {
      current: "仅有思想实验与 SETI 搜寻。",
      path: ["现实参考：仅有思想实验与 SETI 搜寻。"],
      blockers: ["材料强度", "尺度"],
      sopStage: "SOP-3 理论研究与建模"
    },
    dependencies: [],
    tags: ["能源", "恒星", "结构"]
  },
  {
    id: "twenty-thousand-leagues-t1",
    name: "世界观基础载具与工程",
    aliases: ["海底两万里·世界观基础载具与工程"],
    workId: "twenty-thousand-leagues",
    level: "L2",
    domain: "aerospace",
    summary: "该世界观中支撑叙事的交通与工程能力，多为现实延伸或温和推演。",
    description: "海底两万里 中，「世界观基础载具与工程」为核心设定之一。该世界观中支撑叙事的交通与工程能力，多为现实延伸或温和推演。",
    firstPrinciples: [
      { principle: "工程能力延伸", verdict: "achieved", note: "多数载具基于现实技术推演。" },
      { principle: "极限工况突破", verdict: "breakthrough", note: "个别能力超出现实工程。" }
    ],
    implementation: {
      current: "基于现实工程路线推演。",
      path: ["现实参考：基于现实工程路线推演。"],
      blockers: ["工程极限"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["航天", "工程"]
  },
  {
    id: "voyage-to-the-moon-t0",
    name: "恒星能量采集",
    aliases: ["月球旅行记·恒星能量采集"],
    workId: "voyage-to-the-moon",
    level: "L4",
    domain: "energy",
    summary: "以巨型结构包裹恒星采集其全部辐射，现实仅理论，材料与工程尺度不可及。",
    description: "月球旅行记 中，「恒星能量采集」为核心设定之一。以巨型结构包裹恒星采集其全部辐射，现实仅理论，材料与工程尺度不可及。",
    firstPrinciples: [
      { principle: "恒星辐射收集", verdict: "breakthrough", note: "能量巨大但结构尺度超工程极限。" },
      { principle: "太空巨型结构", verdict: "breakthrough", note: "材料强度与轨道动力学难。" }
    ],
    implementation: {
      current: "仅有思想实验与 SETI 搜寻。",
      path: ["现实参考：仅有思想实验与 SETI 搜寻。"],
      blockers: ["材料强度", "尺度"],
      sopStage: "SOP-3 理论研究与建模"
    },
    dependencies: [],
    tags: ["能源", "恒星", "结构"]
  },
  {
    id: "voyage-to-the-moon-t1",
    name: "地外生命探测与接触",
    aliases: ["月球旅行记·地外生命探测与接触"],
    workId: "voyage-to-the-moon",
    level: "L2",
    domain: "bio",
    summary: "搜寻并理解非地球生命，现实仅发现地外有机分子与宜居带行星候选。",
    description: "月球旅行记 中，「地外生命探测与接触」为核心设定之一。搜寻并理解非地球生命，现实仅发现地外有机分子与宜居带行星候选。",
    firstPrinciples: [
      { principle: "宜居带行星搜寻", verdict: "achieved", note: "开普勒已发现数千颗。" },
      { principle: "生命信号识别", verdict: "breakthrough", note: "生物标志气体判读仍难。" }
    ],
    implementation: {
      current: "射电与光谱搜寻持续，无确证。",
      path: ["现实参考：射电与光谱搜寻持续，无确证。"],
      blockers: ["信号判读", "距离"],
      sopStage: "SOP-5 验证与迭代"
    },
    dependencies: [],
    tags: ["生物", "地外", "探索"]
  },
  {
    id: "invisible-man-t0",
    name: "主动光学隐身",
    aliases: ["隐身人·主动光学隐身"],
    workId: "invisible-man",
    level: "L3",
    domain: "material",
    summary: "使物体不可见，现实有超材料与自适应伪装雏形，宏观全隐身未达。",
    description: "隐身人 中，「主动光学隐身」为核心设定之一。使物体不可见，现实有超材料与自适应伪装雏形，宏观全隐身未达。",
    firstPrinciples: [
      { principle: "超材料折射操控", verdict: "achieved", note: "负折射率超材料已验证。" },
      { principle: "宏观动态隐身", verdict: "breakthrough", note: "宽带、多角度难覆盖。" }
    ],
    implementation: {
      current: "微波段隐身斗篷与迷彩已研究。",
      path: ["现实参考：微波段隐身斗篷与迷彩已研究。"],
      blockers: ["宽带覆盖", "实时重构"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["材料", "隐身"]
  },
  {
    id: "invisible-man-t1",
    name: "世界观基础载具与工程",
    aliases: ["隐身人·世界观基础载具与工程"],
    workId: "invisible-man",
    level: "L2",
    domain: "aerospace",
    summary: "该世界观中支撑叙事的交通与工程能力，多为现实延伸或温和推演。",
    description: "隐身人 中，「世界观基础载具与工程」为核心设定之一。该世界观中支撑叙事的交通与工程能力，多为现实延伸或温和推演。",
    firstPrinciples: [
      { principle: "工程能力延伸", verdict: "achieved", note: "多数载具基于现实技术推演。" },
      { principle: "极限工况突破", verdict: "breakthrough", note: "个别能力超出现实工程。" }
    ],
    implementation: {
      current: "基于现实工程路线推演。",
      path: ["现实参考：基于现实工程路线推演。"],
      blockers: ["工程极限"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["航天", "工程"]
  },
  {
    id: "time-machine-t0",
    name: "可控时间旅行",
    aliases: ["时间机器·可控时间旅行"],
    workId: "time-machine",
    level: "L5",
    domain: "aerospace",
    summary: "回到过去或跳跃未来，触及因果律与时序保护，目前仅属理论边角。",
    description: "时间机器 中，「可控时间旅行」为核心设定之一。回到过去或跳跃未来，触及因果律与时序保护，目前仅属理论边角。",
    firstPrinciples: [
      { principle: "宏观物体回到过去", verdict: "violated", note: "因果律与祖父悖论无解。" },
      { principle: "闭合类时曲线", verdict: "breakthrough", note: "仅极端时空解（虫洞）理论存在。" }
    ],
    implementation: {
      current: "相对论允许特殊度规，但不可工程化。",
      path: ["现实参考：相对论允许特殊度规，但不可工程化。"],
      blockers: ["因果悖论", "时序保护"],
      sopStage: "SOP-3 理论研究与建模"
    },
    dependencies: [],
    tags: ["航天", "时间", "设定"]
  },
  {
    id: "time-machine-t1",
    name: "世界观基础载具与工程",
    aliases: ["时间机器·世界观基础载具与工程"],
    workId: "time-machine",
    level: "L2",
    domain: "aerospace",
    summary: "该世界观中支撑叙事的交通与工程能力，多为现实延伸或温和推演。",
    description: "时间机器 中，「世界观基础载具与工程」为核心设定之一。该世界观中支撑叙事的交通与工程能力，多为现实延伸或温和推演。",
    firstPrinciples: [
      { principle: "工程能力延伸", verdict: "achieved", note: "多数载具基于现实技术推演。" },
      { principle: "极限工况突破", verdict: "breakthrough", note: "个别能力超出现实工程。" }
    ],
    implementation: {
      current: "基于现实工程路线推演。",
      path: ["现实参考：基于现实工程路线推演。"],
      blockers: ["工程极限"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["航天", "工程"]
  },
  {
    id: "war-of-worlds-t0",
    name: "行星级打击武器",
    aliases: ["世界大战·行星级打击武器"],
    workId: "war-of-worlds",
    level: "L5",
    domain: "weapon",
    summary: "可摧毁行星或改写物理常数的武器，依赖虚构能量或维度操控，现实不可及。",
    description: "世界大战 中，「行星级打击武器」为核心设定之一。可摧毁行星或改写物理常数的武器，依赖虚构能量或维度操控，现实不可及。",
    firstPrinciples: [
      { principle: "行星级能量释放", verdict: "breakthrough", note: "核武远不及摧毁行星。" },
      { principle: "维度/常数改写", verdict: "violated", note: "无物理机制。" }
    ],
    implementation: {
      current: "最大核武当量约数十兆吨，差多个数量级。",
      path: ["现实参考：最大核武当量约数十兆吨，差多个数量级。"],
      blockers: ["能量量级", "物理改写"],
      sopStage: "SOP-2 原理分析"
    },
    dependencies: [],
    tags: ["武器", "战略", "设定"]
  },
  {
    id: "war-of-worlds-t1",
    name: "常驻太空与殖民航行",
    aliases: ["世界大战·常驻太空与殖民航行"],
    workId: "war-of-worlds",
    level: "L2",
    domain: "aerospace",
    summary: "人类常驻近地空间并向行星殖民，现实 ISS 与商业航天已开启，火星任务规划中。",
    description: "世界大战 中，「常驻太空与殖民航行」为核心设定之一。人类常驻近地空间并向行星殖民，现实 ISS 与商业航天已开启，火星任务规划中。",
    firstPrinciples: [
      { principle: "近地空间常驻", verdict: "achieved", note: "ISS 持续载人二十余年。" },
      { principle: "行星际载人航行", verdict: "breakthrough", note: "辐射、补给与着陆仍难。" }
    ],
    implementation: {
      current: "SpaceX 等推动低成本发射与火星计划。",
      path: ["现实参考：SpaceX 等推动低成本发射与火星计划。"],
      blockers: ["深空辐射", "生命保障"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["航天", "殖民"]
  },
  {
    id: "metropolis-t0",
    name: "自主仿生机器人",
    aliases: ["大都会·自主仿生机器人"],
    workId: "metropolis",
    level: "L2",
    domain: "info",
    summary: "具备感知、决策与执行能力的类人/类生物机械体，现实已在工业机器人到人形机器人演进。",
    description: "大都会 中，「自主仿生机器人」为核心设定之一。具备感知、决策与执行能力的类人/类生物机械体，现实已在工业机器人到人形机器人演进。",
    firstPrinciples: [
      { principle: "机械体自主决策", verdict: "achieved", note: "现代机器人已具备感知-规划-执行闭环。" },
      { principle: "类人灵活运动", verdict: "breakthrough", note: "双足动态平衡与精细操作仍难。" }
    ],
    implementation: {
      current: "波士顿动力、特斯拉 Optimus 等已展示原型。",
      path: ["现实参考：波士顿动力、特斯拉 Optimus 等已展示原型。"],
      blockers: ["通用运动控制", "能源续航"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["信息", "机器人", "AI"]
  },
  {
    id: "metropolis-t1",
    name: "世界观基础载具与工程",
    aliases: ["大都会·世界观基础载具与工程"],
    workId: "metropolis",
    level: "L2",
    domain: "aerospace",
    summary: "该世界观中支撑叙事的交通与工程能力，多为现实延伸或温和推演。",
    description: "大都会 中，「世界观基础载具与工程」为核心设定之一。该世界观中支撑叙事的交通与工程能力，多为现实延伸或温和推演。",
    firstPrinciples: [
      { principle: "工程能力延伸", verdict: "achieved", note: "多数载具基于现实技术推演。" },
      { principle: "极限工况突破", verdict: "breakthrough", note: "个别能力超出现实工程。" }
    ],
    implementation: {
      current: "基于现实工程路线推演。",
      path: ["现实参考：基于现实工程路线推演。"],
      blockers: ["工程极限"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["航天", "工程"]
  },
  {
    id: "we-t0",
    name: "全域监控与行为调控",
    aliases: ["我们·全域监控与行为调控"],
    workId: "we",
    level: "L1",
    domain: "info",
    summary: "以信息技术实现全社会监控与行为引导，现实已具备人脸识别与大数据画像能力。",
    description: "我们 中，「全域监控与行为调控」为核心设定之一。以信息技术实现全社会监控与行为引导，现实已具备人脸识别与大数据画像能力。",
    firstPrinciples: [
      { principle: "全社会数据采集", verdict: "achieved", note: "摄像头与手机已大规模采集。" },
      { principle: "行为预测干预", verdict: "achieved", note: "推荐与风控模型已应用。" }
    ],
    implementation: {
      current: "智慧城市与社交平台已部分实现。",
      path: ["现实参考：智慧城市与社交平台已部分实现。"],
      blockers: ["隐私与伦理"],
      sopStage: "SOP-1 定义与拆解"
    },
    dependencies: [],
    tags: ["信息", "监控", "社会"]
  },
  {
    id: "we-t1",
    name: "常驻太空与殖民航行",
    aliases: ["我们·常驻太空与殖民航行"],
    workId: "we",
    level: "L2",
    domain: "aerospace",
    summary: "人类常驻近地空间并向行星殖民，现实 ISS 与商业航天已开启，火星任务规划中。",
    description: "我们 中，「常驻太空与殖民航行」为核心设定之一。人类常驻近地空间并向行星殖民，现实 ISS 与商业航天已开启，火星任务规划中。",
    firstPrinciples: [
      { principle: "近地空间常驻", verdict: "achieved", note: "ISS 持续载人二十余年。" },
      { principle: "行星际载人航行", verdict: "breakthrough", note: "辐射、补给与着陆仍难。" }
    ],
    implementation: {
      current: "SpaceX 等推动低成本发射与火星计划。",
      path: ["现实参考：SpaceX 等推动低成本发射与火星计划。"],
      blockers: ["深空辐射", "生命保障"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["航天", "殖民"]
  },
  {
    id: "brave-new-world-t0",
    name: "体细胞克隆与体复制",
    aliases: ["美丽新世界·体细胞克隆与体复制"],
    workId: "brave-new-world",
    level: "L2",
    domain: "bio",
    summary: "由体细胞培育完整个体，现实已克隆动物，人类生殖性克隆被伦理禁止。",
    description: "美丽新世界 中，「体细胞克隆与体复制」为核心设定之一。由体细胞培育完整个体，现实已克隆动物，人类生殖性克隆被伦理禁止。",
    firstPrinciples: [
      { principle: "体细胞核移植", verdict: "achieved", note: "多莉羊已证实技术可行。" },
      { principle: "人类生殖性克隆", verdict: "breakthrough", note: "技术可行但伦理与发育异常受限。" }
    ],
    implementation: {
      current: "动物克隆成熟；人类克隆被国际禁止。",
      path: ["现实参考：动物克隆成熟；人类克隆被国际禁止。"],
      blockers: ["伦理限制", "表观遗传异常"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["生物", "克隆"]
  },
  {
    id: "brave-new-world-t1",
    name: "世界观基础载具与工程",
    aliases: ["美丽新世界·世界观基础载具与工程"],
    workId: "brave-new-world",
    level: "L2",
    domain: "aerospace",
    summary: "该世界观中支撑叙事的交通与工程能力，多为现实延伸或温和推演。",
    description: "美丽新世界 中，「世界观基础载具与工程」为核心设定之一。该世界观中支撑叙事的交通与工程能力，多为现实延伸或温和推演。",
    firstPrinciples: [
      { principle: "工程能力延伸", verdict: "achieved", note: "多数载具基于现实技术推演。" },
      { principle: "极限工况突破", verdict: "breakthrough", note: "个别能力超出现实工程。" }
    ],
    implementation: {
      current: "基于现实工程路线推演。",
      path: ["现实参考：基于现实工程路线推演。"],
      blockers: ["工程极限"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["航天", "工程"]
  },
  {
    id: "nineteen-eighty-four-t0",
    name: "全域监控与行为调控",
    aliases: ["一九八四·全域监控与行为调控"],
    workId: "nineteen-eighty-four",
    level: "L1",
    domain: "info",
    summary: "以信息技术实现全社会监控与行为引导，现实已具备人脸识别与大数据画像能力。",
    description: "一九八四 中，「全域监控与行为调控」为核心设定之一。以信息技术实现全社会监控与行为引导，现实已具备人脸识别与大数据画像能力。",
    firstPrinciples: [
      { principle: "全社会数据采集", verdict: "achieved", note: "摄像头与手机已大规模采集。" },
      { principle: "行为预测干预", verdict: "achieved", note: "推荐与风控模型已应用。" }
    ],
    implementation: {
      current: "智慧城市与社交平台已部分实现。",
      path: ["现实参考：智慧城市与社交平台已部分实现。"],
      blockers: ["隐私与伦理"],
      sopStage: "SOP-1 定义与拆解"
    },
    dependencies: [],
    tags: ["信息", "监控", "社会"]
  },
  {
    id: "nineteen-eighty-four-t1",
    name: "世界观基础载具与工程",
    aliases: ["一九八四·世界观基础载具与工程"],
    workId: "nineteen-eighty-four",
    level: "L2",
    domain: "aerospace",
    summary: "该世界观中支撑叙事的交通与工程能力，多为现实延伸或温和推演。",
    description: "一九八四 中，「世界观基础载具与工程」为核心设定之一。该世界观中支撑叙事的交通与工程能力，多为现实延伸或温和推演。",
    firstPrinciples: [
      { principle: "工程能力延伸", verdict: "achieved", note: "多数载具基于现实技术推演。" },
      { principle: "极限工况突破", verdict: "breakthrough", note: "个别能力超出现实工程。" }
    ],
    implementation: {
      current: "基于现实工程路线推演。",
      path: ["现实参考：基于现实工程路线推演。"],
      blockers: ["工程极限"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["航天", "工程"]
  },
  {
    id: "fahrenheit-451-t0",
    name: "全沉浸虚拟世界",
    aliases: ["华氏 451·全沉浸虚拟世界"],
    workId: "fahrenheit-451",
    level: "L3",
    domain: "info",
    summary: "感官级带宽的仿真现实，意识难以分辨真伪，现实 VR 仅视觉听觉且粗糙。",
    description: "华氏 451 中，「全沉浸虚拟世界」为核心设定之一。感官级带宽的仿真现实，意识难以分辨真伪，现实 VR 仅视觉听觉且粗糙。",
    firstPrinciples: [
      { principle: "感官级仿真", verdict: "breakthrough", note: "需全感官高带宽神经接口。" },
      { principle: "意识难以分辨", verdict: "breakthrough", note: "需完整感知替代。" }
    ],
    implementation: {
      current: "VR/AR 仅视觉听觉，沉浸度有限。",
      path: ["现实参考：VR/AR 仅视觉听觉，沉浸度有限。"],
      blockers: ["神经带宽", "渲染真实感"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["信息", "虚拟", "仿真"]
  },
  {
    id: "fahrenheit-451-t1",
    name: "世界观基础载具与工程",
    aliases: ["华氏 451·世界观基础载具与工程"],
    workId: "fahrenheit-451",
    level: "L2",
    domain: "aerospace",
    summary: "该世界观中支撑叙事的交通与工程能力，多为现实延伸或温和推演。",
    description: "华氏 451 中，「世界观基础载具与工程」为核心设定之一。该世界观中支撑叙事的交通与工程能力，多为现实延伸或温和推演。",
    firstPrinciples: [
      { principle: "工程能力延伸", verdict: "achieved", note: "多数载具基于现实技术推演。" },
      { principle: "极限工况突破", verdict: "breakthrough", note: "个别能力超出现实工程。" }
    ],
    implementation: {
      current: "基于现实工程路线推演。",
      path: ["现实参考：基于现实工程路线推演。"],
      blockers: ["工程极限"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["航天", "工程"]
  },
  {
    id: "truman-show-t0",
    name: "世界观基础载具与工程",
    aliases: ["楚门的世界·世界观基础载具与工程"],
    workId: "truman-show",
    level: "L2",
    domain: "aerospace",
    summary: "该世界观中支撑叙事的交通与工程能力，多为现实延伸或温和推演。",
    description: "楚门的世界 中，「世界观基础载具与工程」为核心设定之一。该世界观中支撑叙事的交通与工程能力，多为现实延伸或温和推演。",
    firstPrinciples: [
      { principle: "工程能力延伸", verdict: "achieved", note: "多数载具基于现实技术推演。" },
      { principle: "极限工况突破", verdict: "breakthrough", note: "个别能力超出现实工程。" }
    ],
    implementation: {
      current: "基于现实工程路线推演。",
      path: ["现实参考：基于现实工程路线推演。"],
      blockers: ["工程极限"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["航天", "工程"]
  },
  {
    id: "truman-show-t1",
    name: "信息与社会技术",
    aliases: ["楚门的世界·信息与社会技术"],
    workId: "truman-show",
    level: "L1",
    domain: "info",
    summary: "该世界观中的通信、计算与社会治理技术，现实多已具备雏形。",
    description: "楚门的世界 中，「信息与社会技术」为核心设定之一。该世界观中的通信、计算与社会治理技术，现实多已具备雏形。",
    firstPrinciples: [
      { principle: "信息互联互通", verdict: "achieved", note: "网络与计算已普及。" },
      { principle: "社会治理数字化", verdict: "achieved", note: "数据化治理已应用。" }
    ],
    implementation: {
      current: "现实信息技术直接对应。",
      path: ["现实参考：现实信息技术直接对应。"],
      blockers: ["隐私与伦理"],
      sopStage: "SOP-1 定义与拆解"
    },
    dependencies: [],
    tags: ["信息", "社会"]
  },
  {
    id: "i-robot-t0",
    name: "自主仿生机器人",
    aliases: ["我，机器人·自主仿生机器人"],
    workId: "i-robot",
    level: "L2",
    domain: "info",
    summary: "具备感知、决策与执行能力的类人/类生物机械体，现实已在工业机器人到人形机器人演进。",
    description: "我，机器人 中，「自主仿生机器人」为核心设定之一。具备感知、决策与执行能力的类人/类生物机械体，现实已在工业机器人到人形机器人演进。",
    firstPrinciples: [
      { principle: "机械体自主决策", verdict: "achieved", note: "现代机器人已具备感知-规划-执行闭环。" },
      { principle: "类人灵活运动", verdict: "breakthrough", note: "双足动态平衡与精细操作仍难。" }
    ],
    implementation: {
      current: "波士顿动力、特斯拉 Optimus 等已展示原型。",
      path: ["现实参考：波士顿动力、特斯拉 Optimus 等已展示原型。"],
      blockers: ["通用运动控制", "能源续航"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["信息", "机器人", "AI"]
  },
  {
    id: "i-robot-t1",
    name: "行星环境改造",
    aliases: ["我，机器人·行星环境改造"],
    workId: "i-robot",
    level: "L4",
    domain: "aerospace",
    summary: "将异星改造为可居环境，现实仅停留在理论建模与地球工程。",
    description: "我，机器人 中，「行星环境改造」为核心设定之一。将异星改造为可居环境，现实仅停留在理论建模与地球工程。",
    firstPrinciples: [
      { principle: "大气成分工程", verdict: "breakthrough", note: "尺度与时机远超工程能力。" },
      { principle: "全球气候调控", verdict: "breakthrough", note: "地球工程仍处概念。" }
    ],
    implementation: {
      current: "仅有地球工程思想实验。",
      path: ["现实参考：仅有地球工程思想实验。"],
      blockers: ["尺度", "反馈不可控"],
      sopStage: "SOP-3 理论研究与建模"
    },
    dependencies: [],
    tags: ["航天", "改造", "生态"]
  },
  {
    id: "end-of-eternity-t0",
    name: "常驻太空与殖民航行",
    aliases: ["永恒的终结·常驻太空与殖民航行"],
    workId: "end-of-eternity",
    level: "L2",
    domain: "aerospace",
    summary: "人类常驻近地空间并向行星殖民，现实 ISS 与商业航天已开启，火星任务规划中。",
    description: "永恒的终结 中，「常驻太空与殖民航行」为核心设定之一。人类常驻近地空间并向行星殖民，现实 ISS 与商业航天已开启，火星任务规划中。",
    firstPrinciples: [
      { principle: "近地空间常驻", verdict: "achieved", note: "ISS 持续载人二十余年。" },
      { principle: "行星际载人航行", verdict: "breakthrough", note: "辐射、补给与着陆仍难。" }
    ],
    implementation: {
      current: "SpaceX 等推动低成本发射与火星计划。",
      path: ["现实参考：SpaceX 等推动低成本发射与火星计划。"],
      blockers: ["深空辐射", "生命保障"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["航天", "殖民"]
  },
  {
    id: "end-of-eternity-t1",
    name: "文明级灾害应对",
    aliases: ["永恒的终结·文明级灾害应对"],
    workId: "end-of-eternity",
    level: "L2",
    domain: "bio",
    summary: "面对全球性瘟疫、气候或天体撞击的预警与减缓，现实已有早期预警与疫苗平台。",
    description: "永恒的终结 中，「文明级灾害应对」为核心设定之一。面对全球性瘟疫、气候或天体撞击的预警与减缓，现实已有早期预警与疫苗平台。",
    firstPrinciples: [
      { principle: "全球监测网络", verdict: "achieved", note: "气象、疾控与天基监测已建。" },
      { principle: "快速疫苗平台", verdict: "achieved", note: "mRNA 平台数周内设计。" }
    ],
    implementation: {
      current: "预警与疫苗体系成熟，减缓能力有限。",
      path: ["现实参考：预警与疫苗体系成熟，减缓能力有限。"],
      blockers: ["响应速度", "国际协作"],
      sopStage: "SOP-1 定义与拆解"
    },
    dependencies: [],
    tags: ["生物", "灾害", "安全"]
  },
  {
    id: "childhoods-end-t0",
    name: "通用人工智能",
    aliases: ["童年的终结·通用人工智能"],
    workId: "childhoods-end",
    level: "L3",
    domain: "info",
    summary: "具备跨领域推理与自主目标的机器智能，现实大模型已逼近窄域通用，AGI 仍在攻关。",
    description: "童年的终结 中，「通用人工智能」为核心设定之一。具备跨领域推理与自主目标的机器智能，现实大模型已逼近窄域通用，AGI 仍在攻关。",
    firstPrinciples: [
      { principle: "大规模神经网络推理", verdict: "achieved", note: "Transformer 大模型展现涌现能力。" },
      { principle: "自主目标与常识", verdict: "breakthrough", note: "因果与具身常识仍是鸿沟。" }
    ],
    implementation: {
      current: "LLM 在窄域通用，AGI 未达成。",
      path: ["现实参考：LLM 在窄域通用，AGI 未达成。"],
      blockers: ["常识与因果", "对齐"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["信息", "AI"]
  },
  {
    id: "childhoods-end-t1",
    name: "常驻太空与殖民航行",
    aliases: ["童年的终结·常驻太空与殖民航行"],
    workId: "childhoods-end",
    level: "L2",
    domain: "aerospace",
    summary: "人类常驻近地空间并向行星殖民，现实 ISS 与商业航天已开启，火星任务规划中。",
    description: "童年的终结 中，「常驻太空与殖民航行」为核心设定之一。人类常驻近地空间并向行星殖民，现实 ISS 与商业航天已开启，火星任务规划中。",
    firstPrinciples: [
      { principle: "近地空间常驻", verdict: "achieved", note: "ISS 持续载人二十余年。" },
      { principle: "行星际载人航行", verdict: "breakthrough", note: "辐射、补给与着陆仍难。" }
    ],
    implementation: {
      current: "SpaceX 等推动低成本发射与火星计划。",
      path: ["现实参考：SpaceX 等推动低成本发射与火星计划。"],
      blockers: ["深空辐射", "生命保障"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["航天", "殖民"]
  },
  {
    id: "rendezvous-with-rama-t0",
    name: "自主仿生机器人",
    aliases: ["与拉玛相会·自主仿生机器人"],
    workId: "rendezvous-with-rama",
    level: "L2",
    domain: "info",
    summary: "具备感知、决策与执行能力的类人/类生物机械体，现实已在工业机器人到人形机器人演进。",
    description: "与拉玛相会 中，「自主仿生机器人」为核心设定之一。具备感知、决策与执行能力的类人/类生物机械体，现实已在工业机器人到人形机器人演进。",
    firstPrinciples: [
      { principle: "机械体自主决策", verdict: "achieved", note: "现代机器人已具备感知-规划-执行闭环。" },
      { principle: "类人灵活运动", verdict: "breakthrough", note: "双足动态平衡与精细操作仍难。" }
    ],
    implementation: {
      current: "波士顿动力、特斯拉 Optimus 等已展示原型。",
      path: ["现实参考：波士顿动力、特斯拉 Optimus 等已展示原型。"],
      blockers: ["通用运动控制", "能源续航"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["信息", "机器人", "AI"]
  },
  {
    id: "rendezvous-with-rama-t1",
    name: "恒星能量采集",
    aliases: ["与拉玛相会·恒星能量采集"],
    workId: "rendezvous-with-rama",
    level: "L4",
    domain: "energy",
    summary: "以巨型结构包裹恒星采集其全部辐射，现实仅理论，材料与工程尺度不可及。",
    description: "与拉玛相会 中，「恒星能量采集」为核心设定之一。以巨型结构包裹恒星采集其全部辐射，现实仅理论，材料与工程尺度不可及。",
    firstPrinciples: [
      { principle: "恒星辐射收集", verdict: "breakthrough", note: "能量巨大但结构尺度超工程极限。" },
      { principle: "太空巨型结构", verdict: "breakthrough", note: "材料强度与轨道动力学难。" }
    ],
    implementation: {
      current: "仅有思想实验与 SETI 搜寻。",
      path: ["现实参考：仅有思想实验与 SETI 搜寻。"],
      blockers: ["材料强度", "尺度"],
      sopStage: "SOP-3 理论研究与建模"
    },
    dependencies: [],
    tags: ["能源", "恒星", "结构"]
  },
  {
    id: "fountains-of-paradise-t0",
    name: "分子级纳米机械",
    aliases: ["天堂的喷泉·分子级纳米机械"],
    workId: "fountains-of-paradise",
    level: "L3",
    domain: "material",
    summary: "在分子尺度自组装与作业的机器人群，现实仅有初步分子马达与 DNA 纳米结构。",
    description: "天堂的喷泉 中，「分子级纳米机械」为核心设定之一。在分子尺度自组装与作业的机器人群，现实仅有初步分子马达与 DNA 纳米结构。",
    firstPrinciples: [
      { principle: "分子自组装", verdict: "achieved", note: "DNA 折纸与分子马达已验证。" },
      { principle: "宏观可控纳米机群", verdict: "breakthrough", note: "供能、通信与定位难。" }
    ],
    implementation: {
      current: "实验室级分子机器，未成集群。",
      path: ["现实参考：实验室级分子机器，未成集群。"],
      blockers: ["集群供能", "定位通信"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["材料", "纳米"]
  },
  {
    id: "fountains-of-paradise-t1",
    name: "常驻太空与殖民航行",
    aliases: ["天堂的喷泉·常驻太空与殖民航行"],
    workId: "fountains-of-paradise",
    level: "L2",
    domain: "aerospace",
    summary: "人类常驻近地空间并向行星殖民，现实 ISS 与商业航天已开启，火星任务规划中。",
    description: "天堂的喷泉 中，「常驻太空与殖民航行」为核心设定之一。人类常驻近地空间并向行星殖民，现实 ISS 与商业航天已开启，火星任务规划中。",
    firstPrinciples: [
      { principle: "近地空间常驻", verdict: "achieved", note: "ISS 持续载人二十余年。" },
      { principle: "行星际载人航行", verdict: "breakthrough", note: "辐射、补给与着陆仍难。" }
    ],
    implementation: {
      current: "SpaceX 等推动低成本发射与火星计划。",
      path: ["现实参考：SpaceX 等推动低成本发射与火星计划。"],
      blockers: ["深空辐射", "生命保障"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["航天", "殖民"]
  },
  {
    id: "starship-troopers-t0",
    name: "行星环境改造",
    aliases: ["星船伞兵·行星环境改造"],
    workId: "starship-troopers",
    level: "L4",
    domain: "aerospace",
    summary: "将异星改造为可居环境，现实仅停留在理论建模与地球工程。",
    description: "星船伞兵 中，「行星环境改造」为核心设定之一。将异星改造为可居环境，现实仅停留在理论建模与地球工程。",
    firstPrinciples: [
      { principle: "大气成分工程", verdict: "breakthrough", note: "尺度与时机远超工程能力。" },
      { principle: "全球气候调控", verdict: "breakthrough", note: "地球工程仍处概念。" }
    ],
    implementation: {
      current: "仅有地球工程思想实验。",
      path: ["现实参考：仅有地球工程思想实验。"],
      blockers: ["尺度", "反馈不可控"],
      sopStage: "SOP-3 理论研究与建模"
    },
    dependencies: [],
    tags: ["航天", "改造", "生态"]
  },
  {
    id: "starship-troopers-t1",
    name: "常驻太空与殖民航行",
    aliases: ["星船伞兵·常驻太空与殖民航行"],
    workId: "starship-troopers",
    level: "L2",
    domain: "aerospace",
    summary: "人类常驻近地空间并向行星殖民，现实 ISS 与商业航天已开启，火星任务规划中。",
    description: "星船伞兵 中，「常驻太空与殖民航行」为核心设定之一。人类常驻近地空间并向行星殖民，现实 ISS 与商业航天已开启，火星任务规划中。",
    firstPrinciples: [
      { principle: "近地空间常驻", verdict: "achieved", note: "ISS 持续载人二十余年。" },
      { principle: "行星际载人航行", verdict: "breakthrough", note: "辐射、补给与着陆仍难。" }
    ],
    implementation: {
      current: "SpaceX 等推动低成本发射与火星计划。",
      path: ["现实参考：SpaceX 等推动低成本发射与火星计划。"],
      blockers: ["深空辐射", "生命保障"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["航天", "殖民"]
  },
  {
    id: "moon-is-a-harsh-mistress-t0",
    name: "常驻太空与殖民航行",
    aliases: ["严厉的月亮·常驻太空与殖民航行"],
    workId: "moon-is-a-harsh-mistress",
    level: "L2",
    domain: "aerospace",
    summary: "人类常驻近地空间并向行星殖民，现实 ISS 与商业航天已开启，火星任务规划中。",
    description: "严厉的月亮 中，「常驻太空与殖民航行」为核心设定之一。人类常驻近地空间并向行星殖民，现实 ISS 与商业航天已开启，火星任务规划中。",
    firstPrinciples: [
      { principle: "近地空间常驻", verdict: "achieved", note: "ISS 持续载人二十余年。" },
      { principle: "行星际载人航行", verdict: "breakthrough", note: "辐射、补给与着陆仍难。" }
    ],
    implementation: {
      current: "SpaceX 等推动低成本发射与火星计划。",
      path: ["现实参考：SpaceX 等推动低成本发射与火星计划。"],
      blockers: ["深空辐射", "生命保障"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["航天", "殖民"]
  },
  {
    id: "moon-is-a-harsh-mistress-t1",
    name: "世界观基础载具与工程",
    aliases: ["严厉的月亮·世界观基础载具与工程"],
    workId: "moon-is-a-harsh-mistress",
    level: "L2",
    domain: "aerospace",
    summary: "该世界观中支撑叙事的交通与工程能力，多为现实延伸或温和推演。",
    description: "严厉的月亮 中，「世界观基础载具与工程」为核心设定之一。该世界观中支撑叙事的交通与工程能力，多为现实延伸或温和推演。",
    firstPrinciples: [
      { principle: "工程能力延伸", verdict: "achieved", note: "多数载具基于现实技术推演。" },
      { principle: "极限工况突破", verdict: "breakthrough", note: "个别能力超出现实工程。" }
    ],
    implementation: {
      current: "基于现实工程路线推演。",
      path: ["现实参考：基于现实工程路线推演。"],
      blockers: ["工程极限"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["航天", "工程"]
  },
  {
    id: "martian-chronicles-t0",
    name: "原力式念力干预",
    aliases: ["火星编年史·原力式念力干预"],
    workId: "martian-chronicles",
    level: "L5",
    domain: "bio",
    summary: "以意志移物、控制心智与预知未来，无已知物理机制，属魔法式设定。",
    description: "火星编年史 中，「原力式念力干预」为核心设定之一。以意志移物、控制心智与预知未来，无已知物理机制，属魔法式设定。",
    firstPrinciples: [
      { principle: "意识直接作用于物质", verdict: "violated", note: "无物理载体传递念力。" },
      { principle: "预知未来", verdict: "violated", note: "因果律下未来不可定域观测。" }
    ],
    implementation: {
      current: "现实仅有脑机接口层面的微弱控制。",
      path: ["现实参考：现实仅有脑机接口层面的微弱控制。"],
      blockers: ["无物理机制", "违反因果"],
      sopStage: "SOP-2 原理分析"
    },
    dependencies: [],
    tags: ["生物", "超能力", "设定"]
  },
  {
    id: "martian-chronicles-t1",
    name: "恒星能量采集",
    aliases: ["火星编年史·恒星能量采集"],
    workId: "martian-chronicles",
    level: "L4",
    domain: "energy",
    summary: "以巨型结构包裹恒星采集其全部辐射，现实仅理论，材料与工程尺度不可及。",
    description: "火星编年史 中，「恒星能量采集」为核心设定之一。以巨型结构包裹恒星采集其全部辐射，现实仅理论，材料与工程尺度不可及。",
    firstPrinciples: [
      { principle: "恒星辐射收集", verdict: "breakthrough", note: "能量巨大但结构尺度超工程极限。" },
      { principle: "太空巨型结构", verdict: "breakthrough", note: "材料强度与轨道动力学难。" }
    ],
    implementation: {
      current: "仅有思想实验与 SETI 搜寻。",
      path: ["现实参考：仅有思想实验与 SETI 搜寻。"],
      blockers: ["材料强度", "尺度"],
      sopStage: "SOP-3 理论研究与建模"
    },
    dependencies: [],
    tags: ["能源", "恒星", "结构"]
  },
  {
    id: "the-stars-my-destination-t0",
    name: "原力式念力干预",
    aliases: ["群星，我的归宿·原力式念力干预"],
    workId: "the-stars-my-destination",
    level: "L5",
    domain: "bio",
    summary: "以意志移物、控制心智与预知未来，无已知物理机制，属魔法式设定。",
    description: "群星，我的归宿 中，「原力式念力干预」为核心设定之一。以意志移物、控制心智与预知未来，无已知物理机制，属魔法式设定。",
    firstPrinciples: [
      { principle: "意识直接作用于物质", verdict: "violated", note: "无物理载体传递念力。" },
      { principle: "预知未来", verdict: "violated", note: "因果律下未来不可定域观测。" }
    ],
    implementation: {
      current: "现实仅有脑机接口层面的微弱控制。",
      path: ["现实参考：现实仅有脑机接口层面的微弱控制。"],
      blockers: ["无物理机制", "违反因果"],
      sopStage: "SOP-2 原理分析"
    },
    dependencies: [],
    tags: ["生物", "超能力", "设定"]
  },
  {
    id: "the-stars-my-destination-t1",
    name: "行星级打击武器",
    aliases: ["群星，我的归宿·行星级打击武器"],
    workId: "the-stars-my-destination",
    level: "L5",
    domain: "weapon",
    summary: "可摧毁行星或改写物理常数的武器，依赖虚构能量或维度操控，现实不可及。",
    description: "群星，我的归宿 中，「行星级打击武器」为核心设定之一。可摧毁行星或改写物理常数的武器，依赖虚构能量或维度操控，现实不可及。",
    firstPrinciples: [
      { principle: "行星级能量释放", verdict: "breakthrough", note: "核武远不及摧毁行星。" },
      { principle: "维度/常数改写", verdict: "violated", note: "无物理机制。" }
    ],
    implementation: {
      current: "最大核武当量约数十兆吨，差多个数量级。",
      path: ["现实参考：最大核武当量约数十兆吨，差多个数量级。"],
      blockers: ["能量量级", "物理改写"],
      sopStage: "SOP-2 原理分析"
    },
    dependencies: [],
    tags: ["武器", "战略", "设定"]
  },
  {
    id: "mission-of-gravity-t0",
    name: "行星环境改造",
    aliases: ["重力使命·行星环境改造"],
    workId: "mission-of-gravity",
    level: "L4",
    domain: "aerospace",
    summary: "将异星改造为可居环境，现实仅停留在理论建模与地球工程。",
    description: "重力使命 中，「行星环境改造」为核心设定之一。将异星改造为可居环境，现实仅停留在理论建模与地球工程。",
    firstPrinciples: [
      { principle: "大气成分工程", verdict: "breakthrough", note: "尺度与时机远超工程能力。" },
      { principle: "全球气候调控", verdict: "breakthrough", note: "地球工程仍处概念。" }
    ],
    implementation: {
      current: "仅有地球工程思想实验。",
      path: ["现实参考：仅有地球工程思想实验。"],
      blockers: ["尺度", "反馈不可控"],
      sopStage: "SOP-3 理论研究与建模"
    },
    dependencies: [],
    tags: ["航天", "改造", "生态"]
  },
  {
    id: "mission-of-gravity-t1",
    name: "恒星能量采集",
    aliases: ["重力使命·恒星能量采集"],
    workId: "mission-of-gravity",
    level: "L4",
    domain: "energy",
    summary: "以巨型结构包裹恒星采集其全部辐射，现实仅理论，材料与工程尺度不可及。",
    description: "重力使命 中，「恒星能量采集」为核心设定之一。以巨型结构包裹恒星采集其全部辐射，现实仅理论，材料与工程尺度不可及。",
    firstPrinciples: [
      { principle: "恒星辐射收集", verdict: "breakthrough", note: "能量巨大但结构尺度超工程极限。" },
      { principle: "太空巨型结构", verdict: "breakthrough", note: "材料强度与轨道动力学难。" }
    ],
    implementation: {
      current: "仅有思想实验与 SETI 搜寻。",
      path: ["现实参考：仅有思想实验与 SETI 搜寻。"],
      blockers: ["材料强度", "尺度"],
      sopStage: "SOP-3 理论研究与建模"
    },
    dependencies: [],
    tags: ["能源", "恒星", "结构"]
  },
  {
    id: "day-of-the-triffids-t0",
    name: "世界观基础载具与工程",
    aliases: ["三尖树时代·世界观基础载具与工程"],
    workId: "day-of-the-triffids",
    level: "L2",
    domain: "aerospace",
    summary: "该世界观中支撑叙事的交通与工程能力，多为现实延伸或温和推演。",
    description: "三尖树时代 中，「世界观基础载具与工程」为核心设定之一。该世界观中支撑叙事的交通与工程能力，多为现实延伸或温和推演。",
    firstPrinciples: [
      { principle: "工程能力延伸", verdict: "achieved", note: "多数载具基于现实技术推演。" },
      { principle: "极限工况突破", verdict: "breakthrough", note: "个别能力超出现实工程。" }
    ],
    implementation: {
      current: "基于现实工程路线推演。",
      path: ["现实参考：基于现实工程路线推演。"],
      blockers: ["工程极限"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["航天", "工程"]
  },
  {
    id: "day-of-the-triffids-t1",
    name: "信息与社会技术",
    aliases: ["三尖树时代·信息与社会技术"],
    workId: "day-of-the-triffids",
    level: "L1",
    domain: "info",
    summary: "该世界观中的通信、计算与社会治理技术，现实多已具备雏形。",
    description: "三尖树时代 中，「信息与社会技术」为核心设定之一。该世界观中的通信、计算与社会治理技术，现实多已具备雏形。",
    firstPrinciples: [
      { principle: "信息互联互通", verdict: "achieved", note: "网络与计算已普及。" },
      { principle: "社会治理数字化", verdict: "achieved", note: "数据化治理已应用。" }
    ],
    implementation: {
      current: "现实信息技术直接对应。",
      path: ["现实参考：现实信息技术直接对应。"],
      blockers: ["隐私与伦理"],
      sopStage: "SOP-1 定义与拆解"
    },
    dependencies: [],
    tags: ["信息", "社会"]
  },
  {
    id: "andromeda-strain-t0",
    name: "地外生命探测与接触",
    aliases: ["安德洛墨达品系·地外生命探测与接触"],
    workId: "andromeda-strain",
    level: "L2",
    domain: "bio",
    summary: "搜寻并理解非地球生命，现实仅发现地外有机分子与宜居带行星候选。",
    description: "安德洛墨达品系 中，「地外生命探测与接触」为核心设定之一。搜寻并理解非地球生命，现实仅发现地外有机分子与宜居带行星候选。",
    firstPrinciples: [
      { principle: "宜居带行星搜寻", verdict: "achieved", note: "开普勒已发现数千颗。" },
      { principle: "生命信号识别", verdict: "breakthrough", note: "生物标志气体判读仍难。" }
    ],
    implementation: {
      current: "射电与光谱搜寻持续，无确证。",
      path: ["现实参考：射电与光谱搜寻持续，无确证。"],
      blockers: ["信号判读", "距离"],
      sopStage: "SOP-5 验证与迭代"
    },
    dependencies: [],
    tags: ["生物", "地外", "探索"]
  },
  {
    id: "andromeda-strain-t1",
    name: "世界观基础载具与工程",
    aliases: ["安德洛墨达品系·世界观基础载具与工程"],
    workId: "andromeda-strain",
    level: "L2",
    domain: "aerospace",
    summary: "该世界观中支撑叙事的交通与工程能力，多为现实延伸或温和推演。",
    description: "安德洛墨达品系 中，「世界观基础载具与工程」为核心设定之一。该世界观中支撑叙事的交通与工程能力，多为现实延伸或温和推演。",
    firstPrinciples: [
      { principle: "工程能力延伸", verdict: "achieved", note: "多数载具基于现实技术推演。" },
      { principle: "极限工况突破", verdict: "breakthrough", note: "个别能力超出现实工程。" }
    ],
    implementation: {
      current: "基于现实工程路线推演。",
      path: ["现实参考：基于现实工程路线推演。"],
      blockers: ["工程极限"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["航天", "工程"]
  },
  {
    id: "solaris-t0",
    name: "行星环境改造",
    aliases: ["索拉里斯星·行星环境改造"],
    workId: "solaris",
    level: "L4",
    domain: "aerospace",
    summary: "将异星改造为可居环境，现实仅停留在理论建模与地球工程。",
    description: "索拉里斯星 中，「行星环境改造」为核心设定之一。将异星改造为可居环境，现实仅停留在理论建模与地球工程。",
    firstPrinciples: [
      { principle: "大气成分工程", verdict: "breakthrough", note: "尺度与时机远超工程能力。" },
      { principle: "全球气候调控", verdict: "breakthrough", note: "地球工程仍处概念。" }
    ],
    implementation: {
      current: "仅有地球工程思想实验。",
      path: ["现实参考：仅有地球工程思想实验。"],
      blockers: ["尺度", "反馈不可控"],
      sopStage: "SOP-3 理论研究与建模"
    },
    dependencies: [],
    tags: ["航天", "改造", "生态"]
  },
  {
    id: "solaris-t1",
    name: "世界观基础载具与工程",
    aliases: ["索拉里斯星·世界观基础载具与工程"],
    workId: "solaris",
    level: "L2",
    domain: "aerospace",
    summary: "该世界观中支撑叙事的交通与工程能力，多为现实延伸或温和推演。",
    description: "索拉里斯星 中，「世界观基础载具与工程」为核心设定之一。该世界观中支撑叙事的交通与工程能力，多为现实延伸或温和推演。",
    firstPrinciples: [
      { principle: "工程能力延伸", verdict: "achieved", note: "多数载具基于现实技术推演。" },
      { principle: "极限工况突破", verdict: "breakthrough", note: "个别能力超出现实工程。" }
    ],
    implementation: {
      current: "基于现实工程路线推演。",
      path: ["现实参考：基于现实工程路线推演。"],
      blockers: ["工程极限"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["航天", "工程"]
  },
  {
    id: "roadside-picnic-t0",
    name: "原力式念力干预",
    aliases: ["路边野餐·原力式念力干预"],
    workId: "roadside-picnic",
    level: "L5",
    domain: "bio",
    summary: "以意志移物、控制心智与预知未来，无已知物理机制，属魔法式设定。",
    description: "路边野餐 中，「原力式念力干预」为核心设定之一。以意志移物、控制心智与预知未来，无已知物理机制，属魔法式设定。",
    firstPrinciples: [
      { principle: "意识直接作用于物质", verdict: "violated", note: "无物理载体传递念力。" },
      { principle: "预知未来", verdict: "violated", note: "因果律下未来不可定域观测。" }
    ],
    implementation: {
      current: "现实仅有脑机接口层面的微弱控制。",
      path: ["现实参考：现实仅有脑机接口层面的微弱控制。"],
      blockers: ["无物理机制", "违反因果"],
      sopStage: "SOP-2 原理分析"
    },
    dependencies: [],
    tags: ["生物", "超能力", "设定"]
  },
  {
    id: "roadside-picnic-t1",
    name: "地外生命探测与接触",
    aliases: ["路边野餐·地外生命探测与接触"],
    workId: "roadside-picnic",
    level: "L2",
    domain: "bio",
    summary: "搜寻并理解非地球生命，现实仅发现地外有机分子与宜居带行星候选。",
    description: "路边野餐 中，「地外生命探测与接触」为核心设定之一。搜寻并理解非地球生命，现实仅发现地外有机分子与宜居带行星候选。",
    firstPrinciples: [
      { principle: "宜居带行星搜寻", verdict: "achieved", note: "开普勒已发现数千颗。" },
      { principle: "生命信号识别", verdict: "breakthrough", note: "生物标志气体判读仍难。" }
    ],
    implementation: {
      current: "射电与光谱搜寻持续，无确证。",
      path: ["现实参考：射电与光谱搜寻持续，无确证。"],
      blockers: ["信号判读", "距离"],
      sopStage: "SOP-5 验证与迭代"
    },
    dependencies: [],
    tags: ["生物", "地外", "探索"]
  },
  {
    id: "left-hand-of-darkness-t0",
    name: "原力式念力干预",
    aliases: ["黑暗的左手·原力式念力干预"],
    workId: "left-hand-of-darkness",
    level: "L5",
    domain: "bio",
    summary: "以意志移物、控制心智与预知未来，无已知物理机制，属魔法式设定。",
    description: "黑暗的左手 中，「原力式念力干预」为核心设定之一。以意志移物、控制心智与预知未来，无已知物理机制，属魔法式设定。",
    firstPrinciples: [
      { principle: "意识直接作用于物质", verdict: "violated", note: "无物理载体传递念力。" },
      { principle: "预知未来", verdict: "violated", note: "因果律下未来不可定域观测。" }
    ],
    implementation: {
      current: "现实仅有脑机接口层面的微弱控制。",
      path: ["现实参考：现实仅有脑机接口层面的微弱控制。"],
      blockers: ["无物理机制", "违反因果"],
      sopStage: "SOP-2 原理分析"
    },
    dependencies: [],
    tags: ["生物", "超能力", "设定"]
  },
  {
    id: "left-hand-of-darkness-t1",
    name: "世界观基础载具与工程",
    aliases: ["黑暗的左手·世界观基础载具与工程"],
    workId: "left-hand-of-darkness",
    level: "L2",
    domain: "aerospace",
    summary: "该世界观中支撑叙事的交通与工程能力，多为现实延伸或温和推演。",
    description: "黑暗的左手 中，「世界观基础载具与工程」为核心设定之一。该世界观中支撑叙事的交通与工程能力，多为现实延伸或温和推演。",
    firstPrinciples: [
      { principle: "工程能力延伸", verdict: "achieved", note: "多数载具基于现实技术推演。" },
      { principle: "极限工况突破", verdict: "breakthrough", note: "个别能力超出现实工程。" }
    ],
    implementation: {
      current: "基于现实工程路线推演。",
      path: ["现实参考：基于现实工程路线推演。"],
      blockers: ["工程极限"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["航天", "工程"]
  },
  {
    id: "the-dispossessed-t0",
    name: "超空间/曲速航行",
    aliases: ["一无所有·超空间/曲速航行"],
    workId: "the-dispossessed",
    level: "L4",
    domain: "aerospace",
    summary: "扭曲时空泡实现跨恒星系航行，挑战相对论光速极限，需负能量与奇异物质。",
    description: "一无所有 中，「超空间/曲速航行」为核心设定之一。扭曲时空泡实现跨恒星系航行，挑战相对论光速极限，需负能量与奇异物质。",
    firstPrinciples: [
      { principle: "时空可被几何扭曲", verdict: "achieved", note: "广义相对论证实引力即时空弯曲。" },
      { principle: "局部时空泡超光速", verdict: "breakthrough", note: "阿库别瑞度规可行但需负能量。" },
      { principle: "负能量与奇异物质", verdict: "violated", note: "已知物质均为正能量。" }
    ],
    implementation: {
      current: "仅理论数学阶段，无实验验证。",
      path: ["现实参考：仅理论数学阶段，无实验验证。"],
      blockers: ["负能量密度", "奇异物质", "因果性"],
      sopStage: "SOP-3 理论研究与建模"
    },
    dependencies: [],
    tags: ["航天", "超光速", "时空"]
  },
  {
    id: "the-dispossessed-t1",
    name: "行星环境改造",
    aliases: ["一无所有·行星环境改造"],
    workId: "the-dispossessed",
    level: "L4",
    domain: "aerospace",
    summary: "将异星改造为可居环境，现实仅停留在理论建模与地球工程。",
    description: "一无所有 中，「行星环境改造」为核心设定之一。将异星改造为可居环境，现实仅停留在理论建模与地球工程。",
    firstPrinciples: [
      { principle: "大气成分工程", verdict: "breakthrough", note: "尺度与时机远超工程能力。" },
      { principle: "全球气候调控", verdict: "breakthrough", note: "地球工程仍处概念。" }
    ],
    implementation: {
      current: "仅有地球工程思想实验。",
      path: ["现实参考：仅有地球工程思想实验。"],
      blockers: ["尺度", "反馈不可控"],
      sopStage: "SOP-3 理论研究与建模"
    },
    dependencies: [],
    tags: ["航天", "改造", "生态"]
  },
  {
    id: "man-in-the-high-castle-t0",
    name: "世界观基础载具与工程",
    aliases: ["高堡奇人·世界观基础载具与工程"],
    workId: "man-in-the-high-castle",
    level: "L2",
    domain: "aerospace",
    summary: "该世界观中支撑叙事的交通与工程能力，多为现实延伸或温和推演。",
    description: "高堡奇人 中，「世界观基础载具与工程」为核心设定之一。该世界观中支撑叙事的交通与工程能力，多为现实延伸或温和推演。",
    firstPrinciples: [
      { principle: "工程能力延伸", verdict: "achieved", note: "多数载具基于现实技术推演。" },
      { principle: "极限工况突破", verdict: "breakthrough", note: "个别能力超出现实工程。" }
    ],
    implementation: {
      current: "基于现实工程路线推演。",
      path: ["现实参考：基于现实工程路线推演。"],
      blockers: ["工程极限"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["航天", "工程"]
  },
  {
    id: "man-in-the-high-castle-t1",
    name: "信息与社会技术",
    aliases: ["高堡奇人·信息与社会技术"],
    workId: "man-in-the-high-castle",
    level: "L1",
    domain: "info",
    summary: "该世界观中的通信、计算与社会治理技术，现实多已具备雏形。",
    description: "高堡奇人 中，「信息与社会技术」为核心设定之一。该世界观中的通信、计算与社会治理技术，现实多已具备雏形。",
    firstPrinciples: [
      { principle: "信息互联互通", verdict: "achieved", note: "网络与计算已普及。" },
      { principle: "社会治理数字化", verdict: "achieved", note: "数据化治理已应用。" }
    ],
    implementation: {
      current: "现实信息技术直接对应。",
      path: ["现实参考：现实信息技术直接对应。"],
      blockers: ["隐私与伦理"],
      sopStage: "SOP-1 定义与拆解"
    },
    dependencies: [],
    tags: ["信息", "社会"]
  },
  {
    id: "ubik-t0",
    name: "人体低温冬眠",
    aliases: ["尤比克·人体低温冬眠"],
    workId: "ubik",
    level: "L3",
    domain: "bio",
    summary: "长期安全暂停人体代谢，现实仅器官低温保存，全身可逆冬眠未实现。",
    description: "尤比克 中，「人体低温冬眠」为核心设定之一。长期安全暂停人体代谢，现实仅器官低温保存，全身可逆冬眠未实现。",
    firstPrinciples: [
      { principle: "低温代谢抑制", verdict: "achieved", note: "器官低温灌注已可行。" },
      { principle: "全身可逆停循环", verdict: "breakthrough", note: "冰晶损伤与再灌注仍是难题。" }
    ],
    implementation: {
      current: "深部体温降低用于手术，人体冬眠未成。",
      path: ["现实参考：深部体温降低用于手术，人体冬眠未成。"],
      blockers: ["冰晶损伤", "再灌注"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["生物", "冬眠"]
  },
  {
    id: "ubik-t1",
    name: "世界观基础载具与工程",
    aliases: ["尤比克·世界观基础载具与工程"],
    workId: "ubik",
    level: "L2",
    domain: "aerospace",
    summary: "该世界观中支撑叙事的交通与工程能力，多为现实延伸或温和推演。",
    description: "尤比克 中，「世界观基础载具与工程」为核心设定之一。该世界观中支撑叙事的交通与工程能力，多为现实延伸或温和推演。",
    firstPrinciples: [
      { principle: "工程能力延伸", verdict: "achieved", note: "多数载具基于现实技术推演。" },
      { principle: "极限工况突破", verdict: "breakthrough", note: "个别能力超出现实工程。" }
    ],
    implementation: {
      current: "基于现实工程路线推演。",
      path: ["现实参考：基于现实工程路线推演。"],
      blockers: ["工程极限"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["航天", "工程"]
  },
  {
    id: "hitchhikers-guide-t0",
    name: "行星环境改造",
    aliases: ["银河系搭车客指南·行星环境改造"],
    workId: "hitchhikers-guide",
    level: "L4",
    domain: "aerospace",
    summary: "将异星改造为可居环境，现实仅停留在理论建模与地球工程。",
    description: "银河系搭车客指南 中，「行星环境改造」为核心设定之一。将异星改造为可居环境，现实仅停留在理论建模与地球工程。",
    firstPrinciples: [
      { principle: "大气成分工程", verdict: "breakthrough", note: "尺度与时机远超工程能力。" },
      { principle: "全球气候调控", verdict: "breakthrough", note: "地球工程仍处概念。" }
    ],
    implementation: {
      current: "仅有地球工程思想实验。",
      path: ["现实参考：仅有地球工程思想实验。"],
      blockers: ["尺度", "反馈不可控"],
      sopStage: "SOP-3 理论研究与建模"
    },
    dependencies: [],
    tags: ["航天", "改造", "生态"]
  },
  {
    id: "hitchhikers-guide-t1",
    name: "常驻太空与殖民航行",
    aliases: ["银河系搭车客指南·常驻太空与殖民航行"],
    workId: "hitchhikers-guide",
    level: "L2",
    domain: "aerospace",
    summary: "人类常驻近地空间并向行星殖民，现实 ISS 与商业航天已开启，火星任务规划中。",
    description: "银河系搭车客指南 中，「常驻太空与殖民航行」为核心设定之一。人类常驻近地空间并向行星殖民，现实 ISS 与商业航天已开启，火星任务规划中。",
    firstPrinciples: [
      { principle: "近地空间常驻", verdict: "achieved", note: "ISS 持续载人二十余年。" },
      { principle: "行星际载人航行", verdict: "breakthrough", note: "辐射、补给与着陆仍难。" }
    ],
    implementation: {
      current: "SpaceX 等推动低成本发射与火星计划。",
      path: ["现实参考：SpaceX 等推动低成本发射与火星计划。"],
      blockers: ["深空辐射", "生命保障"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["航天", "殖民"]
  },
  {
    id: "true-names-t0",
    name: "神经接口与义体增强",
    aliases: ["真名实姓·神经接口与义体增强"],
    workId: "true-names",
    level: "L2",
    domain: "bio",
    summary: "脑机接口与功能性义肢，现实 Neuralink 等已实现初步意念控制与触觉反馈。",
    description: "真名实姓 中，「神经接口与义体增强」为核心设定之一。脑机接口与功能性义肢，现实 Neuralink 等已实现初步意念控制与触觉反馈。",
    firstPrinciples: [
      { principle: "神经信号读写", verdict: "achieved", note: "侵入式电极已解码运动意图。" },
      { principle: "高带宽双向接口", verdict: "breakthrough", note: "长期稳定与带宽仍瓶颈。" }
    ],
    implementation: {
      current: "Neuralink、犹他阵列等进入临床。",
      path: ["现实参考：Neuralink、犹他阵列等进入临床。"],
      blockers: ["长期生物相容", "信号带宽"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["生物", "神经", "增强"]
  },
  {
    id: "true-names-t1",
    name: "通用人工智能",
    aliases: ["真名实姓·通用人工智能"],
    workId: "true-names",
    level: "L3",
    domain: "info",
    summary: "具备跨领域推理与自主目标的机器智能，现实大模型已逼近窄域通用，AGI 仍在攻关。",
    description: "真名实姓 中，「通用人工智能」为核心设定之一。具备跨领域推理与自主目标的机器智能，现实大模型已逼近窄域通用，AGI 仍在攻关。",
    firstPrinciples: [
      { principle: "大规模神经网络推理", verdict: "achieved", note: "Transformer 大模型展现涌现能力。" },
      { principle: "自主目标与常识", verdict: "breakthrough", note: "因果与具身常识仍是鸿沟。" }
    ],
    implementation: {
      current: "LLM 在窄域通用，AGI 未达成。",
      path: ["现实参考：LLM 在窄域通用，AGI 未达成。"],
      blockers: ["常识与因果", "对齐"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["信息", "AI"]
  },
  {
    id: "neuromancer-t0",
    name: "神经接口与义体增强",
    aliases: ["神经漫游者·神经接口与义体增强"],
    workId: "neuromancer",
    level: "L2",
    domain: "bio",
    summary: "脑机接口与功能性义肢，现实 Neuralink 等已实现初步意念控制与触觉反馈。",
    description: "神经漫游者 中，「神经接口与义体增强」为核心设定之一。脑机接口与功能性义肢，现实 Neuralink 等已实现初步意念控制与触觉反馈。",
    firstPrinciples: [
      { principle: "神经信号读写", verdict: "achieved", note: "侵入式电极已解码运动意图。" },
      { principle: "高带宽双向接口", verdict: "breakthrough", note: "长期稳定与带宽仍瓶颈。" }
    ],
    implementation: {
      current: "Neuralink、犹他阵列等进入临床。",
      path: ["现实参考：Neuralink、犹他阵列等进入临床。"],
      blockers: ["长期生物相容", "信号带宽"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["生物", "神经", "增强"]
  },
  {
    id: "neuromancer-t1",
    name: "通用人工智能",
    aliases: ["神经漫游者·通用人工智能"],
    workId: "neuromancer",
    level: "L3",
    domain: "info",
    summary: "具备跨领域推理与自主目标的机器智能，现实大模型已逼近窄域通用，AGI 仍在攻关。",
    description: "神经漫游者 中，「通用人工智能」为核心设定之一。具备跨领域推理与自主目标的机器智能，现实大模型已逼近窄域通用，AGI 仍在攻关。",
    firstPrinciples: [
      { principle: "大规模神经网络推理", verdict: "achieved", note: "Transformer 大模型展现涌现能力。" },
      { principle: "自主目标与常识", verdict: "breakthrough", note: "因果与具身常识仍是鸿沟。" }
    ],
    implementation: {
      current: "LLM 在窄域通用，AGI 未达成。",
      path: ["现实参考：LLM 在窄域通用，AGI 未达成。"],
      blockers: ["常识与因果", "对齐"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["信息", "AI"]
  },
  {
    id: "snow-crash-t0",
    name: "全沉浸虚拟世界",
    aliases: ["雪崩·全沉浸虚拟世界"],
    workId: "snow-crash",
    level: "L3",
    domain: "info",
    summary: "感官级带宽的仿真现实，意识难以分辨真伪，现实 VR 仅视觉听觉且粗糙。",
    description: "雪崩 中，「全沉浸虚拟世界」为核心设定之一。感官级带宽的仿真现实，意识难以分辨真伪，现实 VR 仅视觉听觉且粗糙。",
    firstPrinciples: [
      { principle: "感官级仿真", verdict: "breakthrough", note: "需全感官高带宽神经接口。" },
      { principle: "意识难以分辨", verdict: "breakthrough", note: "需完整感知替代。" }
    ],
    implementation: {
      current: "VR/AR 仅视觉听觉，沉浸度有限。",
      path: ["现实参考：VR/AR 仅视觉听觉，沉浸度有限。"],
      blockers: ["神经带宽", "渲染真实感"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["信息", "虚拟", "仿真"]
  },
  {
    id: "snow-crash-t1",
    name: "文明级灾害应对",
    aliases: ["雪崩·文明级灾害应对"],
    workId: "snow-crash",
    level: "L2",
    domain: "bio",
    summary: "面对全球性瘟疫、气候或天体撞击的预警与减缓，现实已有早期预警与疫苗平台。",
    description: "雪崩 中，「文明级灾害应对」为核心设定之一。面对全球性瘟疫、气候或天体撞击的预警与减缓，现实已有早期预警与疫苗平台。",
    firstPrinciples: [
      { principle: "全球监测网络", verdict: "achieved", note: "气象、疾控与天基监测已建。" },
      { principle: "快速疫苗平台", verdict: "achieved", note: "mRNA 平台数周内设计。" }
    ],
    implementation: {
      current: "预警与疫苗体系成熟，减缓能力有限。",
      path: ["现实参考：预警与疫苗体系成熟，减缓能力有限。"],
      blockers: ["响应速度", "国际协作"],
      sopStage: "SOP-1 定义与拆解"
    },
    dependencies: [],
    tags: ["生物", "灾害", "安全"]
  },
  {
    id: "a-fire-upon-the-deep-t0",
    name: "超空间/曲速航行",
    aliases: ["深渊上的火·超空间/曲速航行"],
    workId: "a-fire-upon-the-deep",
    level: "L4",
    domain: "aerospace",
    summary: "扭曲时空泡实现跨恒星系航行，挑战相对论光速极限，需负能量与奇异物质。",
    description: "深渊上的火 中，「超空间/曲速航行」为核心设定之一。扭曲时空泡实现跨恒星系航行，挑战相对论光速极限，需负能量与奇异物质。",
    firstPrinciples: [
      { principle: "时空可被几何扭曲", verdict: "achieved", note: "广义相对论证实引力即时空弯曲。" },
      { principle: "局部时空泡超光速", verdict: "breakthrough", note: "阿库别瑞度规可行但需负能量。" },
      { principle: "负能量与奇异物质", verdict: "violated", note: "已知物质均为正能量。" }
    ],
    implementation: {
      current: "仅理论数学阶段，无实验验证。",
      path: ["现实参考：仅理论数学阶段，无实验验证。"],
      blockers: ["负能量密度", "奇异物质", "因果性"],
      sopStage: "SOP-3 理论研究与建模"
    },
    dependencies: [],
    tags: ["航天", "超光速", "时空"]
  },
  {
    id: "a-fire-upon-the-deep-t1",
    name: "通用人工智能",
    aliases: ["深渊上的火·通用人工智能"],
    workId: "a-fire-upon-the-deep",
    level: "L3",
    domain: "info",
    summary: "具备跨领域推理与自主目标的机器智能，现实大模型已逼近窄域通用，AGI 仍在攻关。",
    description: "深渊上的火 中，「通用人工智能」为核心设定之一。具备跨领域推理与自主目标的机器智能，现实大模型已逼近窄域通用，AGI 仍在攻关。",
    firstPrinciples: [
      { principle: "大规模神经网络推理", verdict: "achieved", note: "Transformer 大模型展现涌现能力。" },
      { principle: "自主目标与常识", verdict: "breakthrough", note: "因果与具身常识仍是鸿沟。" }
    ],
    implementation: {
      current: "LLM 在窄域通用，AGI 未达成。",
      path: ["现实参考：LLM 在窄域通用，AGI 未达成。"],
      blockers: ["常识与因果", "对齐"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["信息", "AI"]
  },
  {
    id: "altered-carbon-t0",
    name: "世界观基础载具与工程",
    aliases: ["副本·世界观基础载具与工程"],
    workId: "altered-carbon",
    level: "L2",
    domain: "aerospace",
    summary: "该世界观中支撑叙事的交通与工程能力，多为现实延伸或温和推演。",
    description: "副本 中，「世界观基础载具与工程」为核心设定之一。该世界观中支撑叙事的交通与工程能力，多为现实延伸或温和推演。",
    firstPrinciples: [
      { principle: "工程能力延伸", verdict: "achieved", note: "多数载具基于现实技术推演。" },
      { principle: "极限工况突破", verdict: "breakthrough", note: "个别能力超出现实工程。" }
    ],
    implementation: {
      current: "基于现实工程路线推演。",
      path: ["现实参考：基于现实工程路线推演。"],
      blockers: ["工程极限"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["航天", "工程"]
  },
  {
    id: "altered-carbon-t1",
    name: "信息与社会技术",
    aliases: ["副本·信息与社会技术"],
    workId: "altered-carbon",
    level: "L1",
    domain: "info",
    summary: "该世界观中的通信、计算与社会治理技术，现实多已具备雏形。",
    description: "副本 中，「信息与社会技术」为核心设定之一。该世界观中的通信、计算与社会治理技术，现实多已具备雏形。",
    firstPrinciples: [
      { principle: "信息互联互通", verdict: "achieved", note: "网络与计算已普及。" },
      { principle: "社会治理数字化", verdict: "achieved", note: "数据化治理已应用。" }
    ],
    implementation: {
      current: "现实信息技术直接对应。",
      path: ["现实参考：现实信息技术直接对应。"],
      blockers: ["隐私与伦理"],
      sopStage: "SOP-1 定义与拆解"
    },
    dependencies: [],
    tags: ["信息", "社会"]
  },
  {
    id: "psycho-pass-t0",
    name: "世界观基础载具与工程",
    aliases: ["心理测量者·世界观基础载具与工程"],
    workId: "psycho-pass",
    level: "L2",
    domain: "aerospace",
    summary: "该世界观中支撑叙事的交通与工程能力，多为现实延伸或温和推演。",
    description: "心理测量者 中，「世界观基础载具与工程」为核心设定之一。该世界观中支撑叙事的交通与工程能力，多为现实延伸或温和推演。",
    firstPrinciples: [
      { principle: "工程能力延伸", verdict: "achieved", note: "多数载具基于现实技术推演。" },
      { principle: "极限工况突破", verdict: "breakthrough", note: "个别能力超出现实工程。" }
    ],
    implementation: {
      current: "基于现实工程路线推演。",
      path: ["现实参考：基于现实工程路线推演。"],
      blockers: ["工程极限"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["航天", "工程"]
  },
  {
    id: "psycho-pass-t1",
    name: "信息与社会技术",
    aliases: ["心理测量者·信息与社会技术"],
    workId: "psycho-pass",
    level: "L1",
    domain: "info",
    summary: "该世界观中的通信、计算与社会治理技术，现实多已具备雏形。",
    description: "心理测量者 中，「信息与社会技术」为核心设定之一。该世界观中的通信、计算与社会治理技术，现实多已具备雏形。",
    firstPrinciples: [
      { principle: "信息互联互通", verdict: "achieved", note: "网络与计算已普及。" },
      { principle: "社会治理数字化", verdict: "achieved", note: "数据化治理已应用。" }
    ],
    implementation: {
      current: "现实信息技术直接对应。",
      path: ["现实参考：现实信息技术直接对应。"],
      blockers: ["隐私与伦理"],
      sopStage: "SOP-1 定义与拆解"
    },
    dependencies: [],
    tags: ["信息", "社会"]
  },
  {
    id: "minority-report-t0",
    name: "原力式念力干预",
    aliases: ["少数派报告·原力式念力干预"],
    workId: "minority-report",
    level: "L5",
    domain: "bio",
    summary: "以意志移物、控制心智与预知未来，无已知物理机制，属魔法式设定。",
    description: "少数派报告 中，「原力式念力干预」为核心设定之一。以意志移物、控制心智与预知未来，无已知物理机制，属魔法式设定。",
    firstPrinciples: [
      { principle: "意识直接作用于物质", verdict: "violated", note: "无物理载体传递念力。" },
      { principle: "预知未来", verdict: "violated", note: "因果律下未来不可定域观测。" }
    ],
    implementation: {
      current: "现实仅有脑机接口层面的微弱控制。",
      path: ["现实参考：现实仅有脑机接口层面的微弱控制。"],
      blockers: ["无物理机制", "违反因果"],
      sopStage: "SOP-2 原理分析"
    },
    dependencies: [],
    tags: ["生物", "超能力", "设定"]
  },
  {
    id: "minority-report-t1",
    name: "可控时间旅行",
    aliases: ["少数派报告·可控时间旅行"],
    workId: "minority-report",
    level: "L5",
    domain: "aerospace",
    summary: "回到过去或跳跃未来，触及因果律与时序保护，目前仅属理论边角。",
    description: "少数派报告 中，「可控时间旅行」为核心设定之一。回到过去或跳跃未来，触及因果律与时序保护，目前仅属理论边角。",
    firstPrinciples: [
      { principle: "宏观物体回到过去", verdict: "violated", note: "因果律与祖父悖论无解。" },
      { principle: "闭合类时曲线", verdict: "breakthrough", note: "仅极端时空解（虫洞）理论存在。" }
    ],
    implementation: {
      current: "相对论允许特殊度规，但不可工程化。",
      path: ["现实参考：相对论允许特殊度规，但不可工程化。"],
      blockers: ["因果悖论", "时序保护"],
      sopStage: "SOP-3 理论研究与建模"
    },
    dependencies: [],
    tags: ["航天", "时间", "设定"]
  },
  {
    id: "existenz-t0",
    name: "神经接口与义体增强",
    aliases: ["异次元骇客·神经接口与义体增强"],
    workId: "existenz",
    level: "L2",
    domain: "bio",
    summary: "脑机接口与功能性义肢，现实 Neuralink 等已实现初步意念控制与触觉反馈。",
    description: "异次元骇客 中，「神经接口与义体增强」为核心设定之一。脑机接口与功能性义肢，现实 Neuralink 等已实现初步意念控制与触觉反馈。",
    firstPrinciples: [
      { principle: "神经信号读写", verdict: "achieved", note: "侵入式电极已解码运动意图。" },
      { principle: "高带宽双向接口", verdict: "breakthrough", note: "长期稳定与带宽仍瓶颈。" }
    ],
    implementation: {
      current: "Neuralink、犹他阵列等进入临床。",
      path: ["现实参考：Neuralink、犹他阵列等进入临床。"],
      blockers: ["长期生物相容", "信号带宽"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["生物", "神经", "增强"]
  },
  {
    id: "existenz-t1",
    name: "全沉浸虚拟世界",
    aliases: ["异次元骇客·全沉浸虚拟世界"],
    workId: "existenz",
    level: "L3",
    domain: "info",
    summary: "感官级带宽的仿真现实，意识难以分辨真伪，现实 VR 仅视觉听觉且粗糙。",
    description: "异次元骇客 中，「全沉浸虚拟世界」为核心设定之一。感官级带宽的仿真现实，意识难以分辨真伪，现实 VR 仅视觉听觉且粗糙。",
    firstPrinciples: [
      { principle: "感官级仿真", verdict: "breakthrough", note: "需全感官高带宽神经接口。" },
      { principle: "意识难以分辨", verdict: "breakthrough", note: "需完整感知替代。" }
    ],
    implementation: {
      current: "VR/AR 仅视觉听觉，沉浸度有限。",
      path: ["现实参考：VR/AR 仅视觉听觉，沉浸度有限。"],
      blockers: ["神经带宽", "渲染真实感"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["信息", "虚拟", "仿真"]
  },
  {
    id: "tron-t0",
    name: "世界观基础载具与工程",
    aliases: ["创：光速战记·世界观基础载具与工程"],
    workId: "tron",
    level: "L2",
    domain: "aerospace",
    summary: "该世界观中支撑叙事的交通与工程能力，多为现实延伸或温和推演。",
    description: "创：光速战记 中，「世界观基础载具与工程」为核心设定之一。该世界观中支撑叙事的交通与工程能力，多为现实延伸或温和推演。",
    firstPrinciples: [
      { principle: "工程能力延伸", verdict: "achieved", note: "多数载具基于现实技术推演。" },
      { principle: "极限工况突破", verdict: "breakthrough", note: "个别能力超出现实工程。" }
    ],
    implementation: {
      current: "基于现实工程路线推演。",
      path: ["现实参考：基于现实工程路线推演。"],
      blockers: ["工程极限"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["航天", "工程"]
  },
  {
    id: "tron-t1",
    name: "信息与社会技术",
    aliases: ["创：光速战记·信息与社会技术"],
    workId: "tron",
    level: "L1",
    domain: "info",
    summary: "该世界观中的通信、计算与社会治理技术，现实多已具备雏形。",
    description: "创：光速战记 中，「信息与社会技术」为核心设定之一。该世界观中的通信、计算与社会治理技术，现实多已具备雏形。",
    firstPrinciples: [
      { principle: "信息互联互通", verdict: "achieved", note: "网络与计算已普及。" },
      { principle: "社会治理数字化", verdict: "achieved", note: "数据化治理已应用。" }
    ],
    implementation: {
      current: "现实信息技术直接对应。",
      path: ["现实参考：现实信息技术直接对应。"],
      blockers: ["隐私与伦理"],
      sopStage: "SOP-1 定义与拆解"
    },
    dependencies: [],
    tags: ["信息", "社会"]
  },
  {
    id: "star-wars-t0",
    name: "超空间/曲速航行",
    aliases: ["星球大战·超空间/曲速航行"],
    workId: "star-wars",
    level: "L4",
    domain: "aerospace",
    summary: "扭曲时空泡实现跨恒星系航行，挑战相对论光速极限，需负能量与奇异物质。",
    description: "星球大战 中，「超空间/曲速航行」为核心设定之一。扭曲时空泡实现跨恒星系航行，挑战相对论光速极限，需负能量与奇异物质。",
    firstPrinciples: [
      { principle: "时空可被几何扭曲", verdict: "achieved", note: "广义相对论证实引力即时空弯曲。" },
      { principle: "局部时空泡超光速", verdict: "breakthrough", note: "阿库别瑞度规可行但需负能量。" },
      { principle: "负能量与奇异物质", verdict: "violated", note: "已知物质均为正能量。" }
    ],
    implementation: {
      current: "仅理论数学阶段，无实验验证。",
      path: ["现实参考：仅理论数学阶段，无实验验证。"],
      blockers: ["负能量密度", "奇异物质", "因果性"],
      sopStage: "SOP-3 理论研究与建模"
    },
    dependencies: [],
    tags: ["航天", "超光速", "时空"]
  },
  {
    id: "star-wars-t1",
    name: "驻留等离子光刃",
    aliases: ["星球大战·驻留等离子光刃"],
    workId: "star-wars",
    level: "L5",
    domain: "weapon",
    summary: "约一米长的稳定驻留等离子体柱，无磁约束则无法维持固定长度，纯属设定。",
    description: "星球大战 中，「驻留等离子光刃」为核心设定之一。约一米长的稳定驻留等离子体柱，无磁约束则无法维持固定长度，纯属设定。",
    firstPrinciples: [
      { principle: "无约束等离子体柱维持固定长度", verdict: "violated", note: "磁约束需闭合回路，开放等离子束会瞬间扩散。" },
      { principle: "高功率便携能源", verdict: "violated", note: "能量密度远超已知材料。" }
    ],
    implementation: {
      current: "现实等离子炬为开放喷射，无法成刃。",
      path: ["现实参考：现实等离子炬为开放喷射，无法成刃。"],
      blockers: ["等离子体约束", "能源小型化"],
      sopStage: "SOP-2 原理分析"
    },
    dependencies: [],
    tags: ["武器", "等离子", "设定"]
  },
  {
    id: "stargate-t0",
    name: "超空间/曲速航行",
    aliases: ["星际之门·超空间/曲速航行"],
    workId: "stargate",
    level: "L4",
    domain: "aerospace",
    summary: "扭曲时空泡实现跨恒星系航行，挑战相对论光速极限，需负能量与奇异物质。",
    description: "星际之门 中，「超空间/曲速航行」为核心设定之一。扭曲时空泡实现跨恒星系航行，挑战相对论光速极限，需负能量与奇异物质。",
    firstPrinciples: [
      { principle: "时空可被几何扭曲", verdict: "achieved", note: "广义相对论证实引力即时空弯曲。" },
      { principle: "局部时空泡超光速", verdict: "breakthrough", note: "阿库别瑞度规可行但需负能量。" },
      { principle: "负能量与奇异物质", verdict: "violated", note: "已知物质均为正能量。" }
    ],
    implementation: {
      current: "仅理论数学阶段，无实验验证。",
      path: ["现实参考：仅理论数学阶段，无实验验证。"],
      blockers: ["负能量密度", "奇异物质", "因果性"],
      sopStage: "SOP-3 理论研究与建模"
    },
    dependencies: [],
    tags: ["航天", "超光速", "时空"]
  },
  {
    id: "stargate-t1",
    name: "恒星能量采集",
    aliases: ["星际之门·恒星能量采集"],
    workId: "stargate",
    level: "L4",
    domain: "energy",
    summary: "以巨型结构包裹恒星采集其全部辐射，现实仅理论，材料与工程尺度不可及。",
    description: "星际之门 中，「恒星能量采集」为核心设定之一。以巨型结构包裹恒星采集其全部辐射，现实仅理论，材料与工程尺度不可及。",
    firstPrinciples: [
      { principle: "恒星辐射收集", verdict: "breakthrough", note: "能量巨大但结构尺度超工程极限。" },
      { principle: "太空巨型结构", verdict: "breakthrough", note: "材料强度与轨道动力学难。" }
    ],
    implementation: {
      current: "仅有思想实验与 SETI 搜寻。",
      path: ["现实参考：仅有思想实验与 SETI 搜寻。"],
      blockers: ["材料强度", "尺度"],
      sopStage: "SOP-3 理论研究与建模"
    },
    dependencies: [],
    tags: ["能源", "恒星", "结构"]
  },
  {
    id: "firefly-t0",
    name: "超空间/曲速航行",
    aliases: ["萤火虫·超空间/曲速航行"],
    workId: "firefly",
    level: "L4",
    domain: "aerospace",
    summary: "扭曲时空泡实现跨恒星系航行，挑战相对论光速极限，需负能量与奇异物质。",
    description: "萤火虫 中，「超空间/曲速航行」为核心设定之一。扭曲时空泡实现跨恒星系航行，挑战相对论光速极限，需负能量与奇异物质。",
    firstPrinciples: [
      { principle: "时空可被几何扭曲", verdict: "achieved", note: "广义相对论证实引力即时空弯曲。" },
      { principle: "局部时空泡超光速", verdict: "breakthrough", note: "阿库别瑞度规可行但需负能量。" },
      { principle: "负能量与奇异物质", verdict: "violated", note: "已知物质均为正能量。" }
    ],
    implementation: {
      current: "仅理论数学阶段，无实验验证。",
      path: ["现实参考：仅理论数学阶段，无实验验证。"],
      blockers: ["负能量密度", "奇异物质", "因果性"],
      sopStage: "SOP-3 理论研究与建模"
    },
    dependencies: [],
    tags: ["航天", "超光速", "时空"]
  },
  {
    id: "firefly-t1",
    name: "行星环境改造",
    aliases: ["萤火虫·行星环境改造"],
    workId: "firefly",
    level: "L4",
    domain: "aerospace",
    summary: "将异星改造为可居环境，现实仅停留在理论建模与地球工程。",
    description: "萤火虫 中，「行星环境改造」为核心设定之一。将异星改造为可居环境，现实仅停留在理论建模与地球工程。",
    firstPrinciples: [
      { principle: "大气成分工程", verdict: "breakthrough", note: "尺度与时机远超工程能力。" },
      { principle: "全球气候调控", verdict: "breakthrough", note: "地球工程仍处概念。" }
    ],
    implementation: {
      current: "仅有地球工程思想实验。",
      path: ["现实参考：仅有地球工程思想实验。"],
      blockers: ["尺度", "反馈不可控"],
      sopStage: "SOP-3 理论研究与建模"
    },
    dependencies: [],
    tags: ["航天", "改造", "生态"]
  },
  {
    id: "the-expanse-t0",
    name: "超空间/曲速航行",
    aliases: ["苍穹浩瀚·超空间/曲速航行"],
    workId: "the-expanse",
    level: "L4",
    domain: "aerospace",
    summary: "扭曲时空泡实现跨恒星系航行，挑战相对论光速极限，需负能量与奇异物质。",
    description: "苍穹浩瀚 中，「超空间/曲速航行」为核心设定之一。扭曲时空泡实现跨恒星系航行，挑战相对论光速极限，需负能量与奇异物质。",
    firstPrinciples: [
      { principle: "时空可被几何扭曲", verdict: "achieved", note: "广义相对论证实引力即时空弯曲。" },
      { principle: "局部时空泡超光速", verdict: "breakthrough", note: "阿库别瑞度规可行但需负能量。" },
      { principle: "负能量与奇异物质", verdict: "violated", note: "已知物质均为正能量。" }
    ],
    implementation: {
      current: "仅理论数学阶段，无实验验证。",
      path: ["现实参考：仅理论数学阶段，无实验验证。"],
      blockers: ["负能量密度", "奇异物质", "因果性"],
      sopStage: "SOP-3 理论研究与建模"
    },
    dependencies: [],
    tags: ["航天", "超光速", "时空"]
  },
  {
    id: "the-expanse-t1",
    name: "分子级纳米机械",
    aliases: ["苍穹浩瀚·分子级纳米机械"],
    workId: "the-expanse",
    level: "L3",
    domain: "material",
    summary: "在分子尺度自组装与作业的机器人群，现实仅有初步分子马达与 DNA 纳米结构。",
    description: "苍穹浩瀚 中，「分子级纳米机械」为核心设定之一。在分子尺度自组装与作业的机器人群，现实仅有初步分子马达与 DNA 纳米结构。",
    firstPrinciples: [
      { principle: "分子自组装", verdict: "achieved", note: "DNA 折纸与分子马达已验证。" },
      { principle: "宏观可控纳米机群", verdict: "breakthrough", note: "供能、通信与定位难。" }
    ],
    implementation: {
      current: "实验室级分子机器，未成集群。",
      path: ["现实参考：实验室级分子机器，未成集群。"],
      blockers: ["集群供能", "定位通信"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["材料", "纳米"]
  },
  {
    id: "hyperion-t0",
    name: "超空间/曲速航行",
    aliases: ["海伯利安·超空间/曲速航行"],
    workId: "hyperion",
    level: "L4",
    domain: "aerospace",
    summary: "扭曲时空泡实现跨恒星系航行，挑战相对论光速极限，需负能量与奇异物质。",
    description: "海伯利安 中，「超空间/曲速航行」为核心设定之一。扭曲时空泡实现跨恒星系航行，挑战相对论光速极限，需负能量与奇异物质。",
    firstPrinciples: [
      { principle: "时空可被几何扭曲", verdict: "achieved", note: "广义相对论证实引力即时空弯曲。" },
      { principle: "局部时空泡超光速", verdict: "breakthrough", note: "阿库别瑞度规可行但需负能量。" },
      { principle: "负能量与奇异物质", verdict: "violated", note: "已知物质均为正能量。" }
    ],
    implementation: {
      current: "仅理论数学阶段，无实验验证。",
      path: ["现实参考：仅理论数学阶段，无实验验证。"],
      blockers: ["负能量密度", "奇异物质", "因果性"],
      sopStage: "SOP-3 理论研究与建模"
    },
    dependencies: [],
    tags: ["航天", "超光速", "时空"]
  },
  {
    id: "hyperion-t1",
    name: "自主仿生机器人",
    aliases: ["海伯利安·自主仿生机器人"],
    workId: "hyperion",
    level: "L2",
    domain: "info",
    summary: "具备感知、决策与执行能力的类人/类生物机械体，现实已在工业机器人到人形机器人演进。",
    description: "海伯利安 中，「自主仿生机器人」为核心设定之一。具备感知、决策与执行能力的类人/类生物机械体，现实已在工业机器人到人形机器人演进。",
    firstPrinciples: [
      { principle: "机械体自主决策", verdict: "achieved", note: "现代机器人已具备感知-规划-执行闭环。" },
      { principle: "类人灵活运动", verdict: "breakthrough", note: "双足动态平衡与精细操作仍难。" }
    ],
    implementation: {
      current: "波士顿动力、特斯拉 Optimus 等已展示原型。",
      path: ["现实参考：波士顿动力、特斯拉 Optimus 等已展示原型。"],
      blockers: ["通用运动控制", "能源续航"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["信息", "机器人", "AI"]
  },
  {
    id: "ringworld-t0",
    name: "行星环境改造",
    aliases: ["环形世界·行星环境改造"],
    workId: "ringworld",
    level: "L4",
    domain: "aerospace",
    summary: "将异星改造为可居环境，现实仅停留在理论建模与地球工程。",
    description: "环形世界 中，「行星环境改造」为核心设定之一。将异星改造为可居环境，现实仅停留在理论建模与地球工程。",
    firstPrinciples: [
      { principle: "大气成分工程", verdict: "breakthrough", note: "尺度与时机远超工程能力。" },
      { principle: "全球气候调控", verdict: "breakthrough", note: "地球工程仍处概念。" }
    ],
    implementation: {
      current: "仅有地球工程思想实验。",
      path: ["现实参考：仅有地球工程思想实验。"],
      blockers: ["尺度", "反馈不可控"],
      sopStage: "SOP-3 理论研究与建模"
    },
    dependencies: [],
    tags: ["航天", "改造", "生态"]
  },
  {
    id: "ringworld-t1",
    name: "恒星能量采集",
    aliases: ["环形世界·恒星能量采集"],
    workId: "ringworld",
    level: "L4",
    domain: "energy",
    summary: "以巨型结构包裹恒星采集其全部辐射，现实仅理论，材料与工程尺度不可及。",
    description: "环形世界 中，「恒星能量采集」为核心设定之一。以巨型结构包裹恒星采集其全部辐射，现实仅理论，材料与工程尺度不可及。",
    firstPrinciples: [
      { principle: "恒星辐射收集", verdict: "breakthrough", note: "能量巨大但结构尺度超工程极限。" },
      { principle: "太空巨型结构", verdict: "breakthrough", note: "材料强度与轨道动力学难。" }
    ],
    implementation: {
      current: "仅有思想实验与 SETI 搜寻。",
      path: ["现实参考：仅有思想实验与 SETI 搜寻。"],
      blockers: ["材料强度", "尺度"],
      sopStage: "SOP-3 理论研究与建模"
    },
    dependencies: [],
    tags: ["能源", "恒星", "结构"]
  },
  {
    id: "tau-zero-t0",
    name: "恒星能量采集",
    aliases: ["τ零·恒星能量采集"],
    workId: "tau-zero",
    level: "L4",
    domain: "energy",
    summary: "以巨型结构包裹恒星采集其全部辐射，现实仅理论，材料与工程尺度不可及。",
    description: "τ零 中，「恒星能量采集」为核心设定之一。以巨型结构包裹恒星采集其全部辐射，现实仅理论，材料与工程尺度不可及。",
    firstPrinciples: [
      { principle: "恒星辐射收集", verdict: "breakthrough", note: "能量巨大但结构尺度超工程极限。" },
      { principle: "太空巨型结构", verdict: "breakthrough", note: "材料强度与轨道动力学难。" }
    ],
    implementation: {
      current: "仅有思想实验与 SETI 搜寻。",
      path: ["现实参考：仅有思想实验与 SETI 搜寻。"],
      blockers: ["材料强度", "尺度"],
      sopStage: "SOP-3 理论研究与建模"
    },
    dependencies: [],
    tags: ["能源", "恒星", "结构"]
  },
  {
    id: "tau-zero-t1",
    name: "常驻太空与殖民航行",
    aliases: ["τ零·常驻太空与殖民航行"],
    workId: "tau-zero",
    level: "L2",
    domain: "aerospace",
    summary: "人类常驻近地空间并向行星殖民，现实 ISS 与商业航天已开启，火星任务规划中。",
    description: "τ零 中，「常驻太空与殖民航行」为核心设定之一。人类常驻近地空间并向行星殖民，现实 ISS 与商业航天已开启，火星任务规划中。",
    firstPrinciples: [
      { principle: "近地空间常驻", verdict: "achieved", note: "ISS 持续载人二十余年。" },
      { principle: "行星际载人航行", verdict: "breakthrough", note: "辐射、补给与着陆仍难。" }
    ],
    implementation: {
      current: "SpaceX 等推动低成本发射与火星计划。",
      path: ["现实参考：SpaceX 等推动低成本发射与火星计划。"],
      blockers: ["深空辐射", "生命保障"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["航天", "殖民"]
  },
  {
    id: "enders-game-t0",
    name: "超空间/曲速航行",
    aliases: ["安德的游戏·超空间/曲速航行"],
    workId: "enders-game",
    level: "L4",
    domain: "aerospace",
    summary: "扭曲时空泡实现跨恒星系航行，挑战相对论光速极限，需负能量与奇异物质。",
    description: "安德的游戏 中，「超空间/曲速航行」为核心设定之一。扭曲时空泡实现跨恒星系航行，挑战相对论光速极限，需负能量与奇异物质。",
    firstPrinciples: [
      { principle: "时空可被几何扭曲", verdict: "achieved", note: "广义相对论证实引力即时空弯曲。" },
      { principle: "局部时空泡超光速", verdict: "breakthrough", note: "阿库别瑞度规可行但需负能量。" },
      { principle: "负能量与奇异物质", verdict: "violated", note: "已知物质均为正能量。" }
    ],
    implementation: {
      current: "仅理论数学阶段，无实验验证。",
      path: ["现实参考：仅理论数学阶段，无实验验证。"],
      blockers: ["负能量密度", "奇异物质", "因果性"],
      sopStage: "SOP-3 理论研究与建模"
    },
    dependencies: [],
    tags: ["航天", "超光速", "时空"]
  },
  {
    id: "enders-game-t1",
    name: "全沉浸虚拟世界",
    aliases: ["安德的游戏·全沉浸虚拟世界"],
    workId: "enders-game",
    level: "L3",
    domain: "info",
    summary: "感官级带宽的仿真现实，意识难以分辨真伪，现实 VR 仅视觉听觉且粗糙。",
    description: "安德的游戏 中，「全沉浸虚拟世界」为核心设定之一。感官级带宽的仿真现实，意识难以分辨真伪，现实 VR 仅视觉听觉且粗糙。",
    firstPrinciples: [
      { principle: "感官级仿真", verdict: "breakthrough", note: "需全感官高带宽神经接口。" },
      { principle: "意识难以分辨", verdict: "breakthrough", note: "需完整感知替代。" }
    ],
    implementation: {
      current: "VR/AR 仅视觉听觉，沉浸度有限。",
      path: ["现实参考：VR/AR 仅视觉听觉，沉浸度有限。"],
      blockers: ["神经带宽", "渲染真实感"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["信息", "虚拟", "仿真"]
  },
  {
    id: "yamato-t0",
    name: "超空间/曲速航行",
    aliases: ["宇宙战舰大和号·超空间/曲速航行"],
    workId: "yamato",
    level: "L4",
    domain: "aerospace",
    summary: "扭曲时空泡实现跨恒星系航行，挑战相对论光速极限，需负能量与奇异物质。",
    description: "宇宙战舰大和号 中，「超空间/曲速航行」为核心设定之一。扭曲时空泡实现跨恒星系航行，挑战相对论光速极限，需负能量与奇异物质。",
    firstPrinciples: [
      { principle: "时空可被几何扭曲", verdict: "achieved", note: "广义相对论证实引力即时空弯曲。" },
      { principle: "局部时空泡超光速", verdict: "breakthrough", note: "阿库别瑞度规可行但需负能量。" },
      { principle: "负能量与奇异物质", verdict: "violated", note: "已知物质均为正能量。" }
    ],
    implementation: {
      current: "仅理论数学阶段，无实验验证。",
      path: ["现实参考：仅理论数学阶段，无实验验证。"],
      blockers: ["负能量密度", "奇异物质", "因果性"],
      sopStage: "SOP-3 理论研究与建模"
    },
    dependencies: [],
    tags: ["航天", "超光速", "时空"]
  },
  {
    id: "yamato-t1",
    name: "定向基因改造",
    aliases: ["宇宙战舰大和号·定向基因改造"],
    workId: "yamato",
    level: "L1",
    domain: "bio",
    summary: "按设计修改生物基因组，现实 CRISPR 已临床编辑，定制生物仍受限。",
    description: "宇宙战舰大和号 中，「定向基因改造」为核心设定之一。按设计修改生物基因组，现实 CRISPR 已临床编辑，定制生物仍受限。",
    firstPrinciples: [
      { principle: "DNA 定点编辑", verdict: "achieved", note: "CRISPR-Cas9 已用于临床。" },
      { principle: "复杂多基因定制", verdict: "breakthrough", note: "多基因互作网络难精确设计。" }
    ],
    implementation: {
      current: "基因治疗与作物编辑已商用。",
      path: ["现实参考：基因治疗与作物编辑已商用。"],
      blockers: ["多基因网络", "脱靶效应"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["生物", "基因"]
  },
  {
    id: "gundam-t0",
    name: "自主仿生机器人",
    aliases: ["机动战士高达·自主仿生机器人"],
    workId: "gundam",
    level: "L2",
    domain: "info",
    summary: "具备感知、决策与执行能力的类人/类生物机械体，现实已在工业机器人到人形机器人演进。",
    description: "机动战士高达 中，「自主仿生机器人」为核心设定之一。具备感知、决策与执行能力的类人/类生物机械体，现实已在工业机器人到人形机器人演进。",
    firstPrinciples: [
      { principle: "机械体自主决策", verdict: "achieved", note: "现代机器人已具备感知-规划-执行闭环。" },
      { principle: "类人灵活运动", verdict: "breakthrough", note: "双足动态平衡与精细操作仍难。" }
    ],
    implementation: {
      current: "波士顿动力、特斯拉 Optimus 等已展示原型。",
      path: ["现实参考：波士顿动力、特斯拉 Optimus 等已展示原型。"],
      blockers: ["通用运动控制", "能源续航"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["信息", "机器人", "AI"]
  },
  {
    id: "gundam-t1",
    name: "常驻太空与殖民航行",
    aliases: ["机动战士高达·常驻太空与殖民航行"],
    workId: "gundam",
    level: "L2",
    domain: "aerospace",
    summary: "人类常驻近地空间并向行星殖民，现实 ISS 与商业航天已开启，火星任务规划中。",
    description: "机动战士高达 中，「常驻太空与殖民航行」为核心设定之一。人类常驻近地空间并向行星殖民，现实 ISS 与商业航天已开启，火星任务规划中。",
    firstPrinciples: [
      { principle: "近地空间常驻", verdict: "achieved", note: "ISS 持续载人二十余年。" },
      { principle: "行星际载人航行", verdict: "breakthrough", note: "辐射、补给与着陆仍难。" }
    ],
    implementation: {
      current: "SpaceX 等推动低成本发射与火星计划。",
      path: ["现实参考：SpaceX 等推动低成本发射与火星计划。"],
      blockers: ["深空辐射", "生命保障"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["航天", "殖民"]
  },
  {
    id: "gattaca-t0",
    name: "定向基因改造",
    aliases: ["千钧一发·定向基因改造"],
    workId: "gattaca",
    level: "L1",
    domain: "bio",
    summary: "按设计修改生物基因组，现实 CRISPR 已临床编辑，定制生物仍受限。",
    description: "千钧一发 中，「定向基因改造」为核心设定之一。按设计修改生物基因组，现实 CRISPR 已临床编辑，定制生物仍受限。",
    firstPrinciples: [
      { principle: "DNA 定点编辑", verdict: "achieved", note: "CRISPR-Cas9 已用于临床。" },
      { principle: "复杂多基因定制", verdict: "breakthrough", note: "多基因互作网络难精确设计。" }
    ],
    implementation: {
      current: "基因治疗与作物编辑已商用。",
      path: ["现实参考：基因治疗与作物编辑已商用。"],
      blockers: ["多基因网络", "脱靶效应"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["生物", "基因"]
  },
  {
    id: "gattaca-t1",
    name: "世界观基础载具与工程",
    aliases: ["千钧一发·世界观基础载具与工程"],
    workId: "gattaca",
    level: "L2",
    domain: "aerospace",
    summary: "该世界观中支撑叙事的交通与工程能力，多为现实延伸或温和推演。",
    description: "千钧一发 中，「世界观基础载具与工程」为核心设定之一。该世界观中支撑叙事的交通与工程能力，多为现实延伸或温和推演。",
    firstPrinciples: [
      { principle: "工程能力延伸", verdict: "achieved", note: "多数载具基于现实技术推演。" },
      { principle: "极限工况突破", verdict: "breakthrough", note: "个别能力超出现实工程。" }
    ],
    implementation: {
      current: "基于现实工程路线推演。",
      path: ["现实参考：基于现实工程路线推演。"],
      blockers: ["工程极限"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["航天", "工程"]
  },
  {
    id: "the-thing-t0",
    name: "通用人工智能",
    aliases: ["怪形·通用人工智能"],
    workId: "the-thing",
    level: "L3",
    domain: "info",
    summary: "具备跨领域推理与自主目标的机器智能，现实大模型已逼近窄域通用，AGI 仍在攻关。",
    description: "怪形 中，「通用人工智能」为核心设定之一。具备跨领域推理与自主目标的机器智能，现实大模型已逼近窄域通用，AGI 仍在攻关。",
    firstPrinciples: [
      { principle: "大规模神经网络推理", verdict: "achieved", note: "Transformer 大模型展现涌现能力。" },
      { principle: "自主目标与常识", verdict: "breakthrough", note: "因果与具身常识仍是鸿沟。" }
    ],
    implementation: {
      current: "LLM 在窄域通用，AGI 未达成。",
      path: ["现实参考：LLM 在窄域通用，AGI 未达成。"],
      blockers: ["常识与因果", "对齐"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["信息", "AI"]
  },
  {
    id: "the-thing-t1",
    name: "地外生命探测与接触",
    aliases: ["怪形·地外生命探测与接触"],
    workId: "the-thing",
    level: "L2",
    domain: "bio",
    summary: "搜寻并理解非地球生命，现实仅发现地外有机分子与宜居带行星候选。",
    description: "怪形 中，「地外生命探测与接触」为核心设定之一。搜寻并理解非地球生命，现实仅发现地外有机分子与宜居带行星候选。",
    firstPrinciples: [
      { principle: "宜居带行星搜寻", verdict: "achieved", note: "开普勒已发现数千颗。" },
      { principle: "生命信号识别", verdict: "breakthrough", note: "生物标志气体判读仍难。" }
    ],
    implementation: {
      current: "射电与光谱搜寻持续，无确证。",
      path: ["现实参考：射电与光谱搜寻持续，无确证。"],
      blockers: ["信号判读", "距离"],
      sopStage: "SOP-5 验证与迭代"
    },
    dependencies: [],
    tags: ["生物", "地外", "探索"]
  },
  {
    id: "predator-t0",
    name: "恒星能量采集",
    aliases: ["铁血战士·恒星能量采集"],
    workId: "predator",
    level: "L4",
    domain: "energy",
    summary: "以巨型结构包裹恒星采集其全部辐射，现实仅理论，材料与工程尺度不可及。",
    description: "铁血战士 中，「恒星能量采集」为核心设定之一。以巨型结构包裹恒星采集其全部辐射，现实仅理论，材料与工程尺度不可及。",
    firstPrinciples: [
      { principle: "恒星辐射收集", verdict: "breakthrough", note: "能量巨大但结构尺度超工程极限。" },
      { principle: "太空巨型结构", verdict: "breakthrough", note: "材料强度与轨道动力学难。" }
    ],
    implementation: {
      current: "仅有思想实验与 SETI 搜寻。",
      path: ["现实参考：仅有思想实验与 SETI 搜寻。"],
      blockers: ["材料强度", "尺度"],
      sopStage: "SOP-3 理论研究与建模"
    },
    dependencies: [],
    tags: ["能源", "恒星", "结构"]
  },
  {
    id: "predator-t1",
    name: "行星级打击武器",
    aliases: ["铁血战士·行星级打击武器"],
    workId: "predator",
    level: "L5",
    domain: "weapon",
    summary: "可摧毁行星或改写物理常数的武器，依赖虚构能量或维度操控，现实不可及。",
    description: "铁血战士 中，「行星级打击武器」为核心设定之一。可摧毁行星或改写物理常数的武器，依赖虚构能量或维度操控，现实不可及。",
    firstPrinciples: [
      { principle: "行星级能量释放", verdict: "breakthrough", note: "核武远不及摧毁行星。" },
      { principle: "维度/常数改写", verdict: "violated", note: "无物理机制。" }
    ],
    implementation: {
      current: "最大核武当量约数十兆吨，差多个数量级。",
      path: ["现实参考：最大核武当量约数十兆吨，差多个数量级。"],
      blockers: ["能量量级", "物理改写"],
      sopStage: "SOP-2 原理分析"
    },
    dependencies: [],
    tags: ["武器", "战略", "设定"]
  },
  {
    id: "alien-t0",
    name: "通用人工智能",
    aliases: ["异形·通用人工智能"],
    workId: "alien",
    level: "L3",
    domain: "info",
    summary: "具备跨领域推理与自主目标的机器智能，现实大模型已逼近窄域通用，AGI 仍在攻关。",
    description: "异形 中，「通用人工智能」为核心设定之一。具备跨领域推理与自主目标的机器智能，现实大模型已逼近窄域通用，AGI 仍在攻关。",
    firstPrinciples: [
      { principle: "大规模神经网络推理", verdict: "achieved", note: "Transformer 大模型展现涌现能力。" },
      { principle: "自主目标与常识", verdict: "breakthrough", note: "因果与具身常识仍是鸿沟。" }
    ],
    implementation: {
      current: "LLM 在窄域通用，AGI 未达成。",
      path: ["现实参考：LLM 在窄域通用，AGI 未达成。"],
      blockers: ["常识与因果", "对齐"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["信息", "AI"]
  },
  {
    id: "alien-t1",
    name: "行星级打击武器",
    aliases: ["异形·行星级打击武器"],
    workId: "alien",
    level: "L5",
    domain: "weapon",
    summary: "可摧毁行星或改写物理常数的武器，依赖虚构能量或维度操控，现实不可及。",
    description: "异形 中，「行星级打击武器」为核心设定之一。可摧毁行星或改写物理常数的武器，依赖虚构能量或维度操控，现实不可及。",
    firstPrinciples: [
      { principle: "行星级能量释放", verdict: "breakthrough", note: "核武远不及摧毁行星。" },
      { principle: "维度/常数改写", verdict: "violated", note: "无物理机制。" }
    ],
    implementation: {
      current: "最大核武当量约数十兆吨，差多个数量级。",
      path: ["现实参考：最大核武当量约数十兆吨，差多个数量级。"],
      blockers: ["能量量级", "物理改写"],
      sopStage: "SOP-2 原理分析"
    },
    dependencies: [],
    tags: ["武器", "战略", "设定"]
  },
  {
    id: "avatar-t0",
    name: "神经接口与义体增强",
    aliases: ["阿凡达·神经接口与义体增强"],
    workId: "avatar",
    level: "L2",
    domain: "bio",
    summary: "脑机接口与功能性义肢，现实 Neuralink 等已实现初步意念控制与触觉反馈。",
    description: "阿凡达 中，「神经接口与义体增强」为核心设定之一。脑机接口与功能性义肢，现实 Neuralink 等已实现初步意念控制与触觉反馈。",
    firstPrinciples: [
      { principle: "神经信号读写", verdict: "achieved", note: "侵入式电极已解码运动意图。" },
      { principle: "高带宽双向接口", verdict: "breakthrough", note: "长期稳定与带宽仍瓶颈。" }
    ],
    implementation: {
      current: "Neuralink、犹他阵列等进入临床。",
      path: ["现实参考：Neuralink、犹他阵列等进入临床。"],
      blockers: ["长期生物相容", "信号带宽"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["生物", "神经", "增强"]
  },
  {
    id: "avatar-t1",
    name: "通用人工智能",
    aliases: ["阿凡达·通用人工智能"],
    workId: "avatar",
    level: "L3",
    domain: "info",
    summary: "具备跨领域推理与自主目标的机器智能，现实大模型已逼近窄域通用，AGI 仍在攻关。",
    description: "阿凡达 中，「通用人工智能」为核心设定之一。具备跨领域推理与自主目标的机器智能，现实大模型已逼近窄域通用，AGI 仍在攻关。",
    firstPrinciples: [
      { principle: "大规模神经网络推理", verdict: "achieved", note: "Transformer 大模型展现涌现能力。" },
      { principle: "自主目标与常识", verdict: "breakthrough", note: "因果与具身常识仍是鸿沟。" }
    ],
    implementation: {
      current: "LLM 在窄域通用，AGI 未达成。",
      path: ["现实参考：LLM 在窄域通用，AGI 未达成。"],
      blockers: ["常识与因果", "对齐"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["信息", "AI"]
  },
  {
    id: "district-9-t0",
    name: "定向基因改造",
    aliases: ["第九区·定向基因改造"],
    workId: "district-9",
    level: "L1",
    domain: "bio",
    summary: "按设计修改生物基因组，现实 CRISPR 已临床编辑，定制生物仍受限。",
    description: "第九区 中，「定向基因改造」为核心设定之一。按设计修改生物基因组，现实 CRISPR 已临床编辑，定制生物仍受限。",
    firstPrinciples: [
      { principle: "DNA 定点编辑", verdict: "achieved", note: "CRISPR-Cas9 已用于临床。" },
      { principle: "复杂多基因定制", verdict: "breakthrough", note: "多基因互作网络难精确设计。" }
    ],
    implementation: {
      current: "基因治疗与作物编辑已商用。",
      path: ["现实参考：基因治疗与作物编辑已商用。"],
      blockers: ["多基因网络", "脱靶效应"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["生物", "基因"]
  },
  {
    id: "district-9-t1",
    name: "行星级打击武器",
    aliases: ["第九区·行星级打击武器"],
    workId: "district-9",
    level: "L5",
    domain: "weapon",
    summary: "可摧毁行星或改写物理常数的武器，依赖虚构能量或维度操控，现实不可及。",
    description: "第九区 中，「行星级打击武器」为核心设定之一。可摧毁行星或改写物理常数的武器，依赖虚构能量或维度操控，现实不可及。",
    firstPrinciples: [
      { principle: "行星级能量释放", verdict: "breakthrough", note: "核武远不及摧毁行星。" },
      { principle: "维度/常数改写", verdict: "violated", note: "无物理机制。" }
    ],
    implementation: {
      current: "最大核武当量约数十兆吨，差多个数量级。",
      path: ["现实参考：最大核武当量约数十兆吨，差多个数量级。"],
      blockers: ["能量量级", "物理改写"],
      sopStage: "SOP-2 原理分析"
    },
    dependencies: [],
    tags: ["武器", "战略", "设定"]
  },
  {
    id: "never-let-me-go-t0",
    name: "体细胞克隆与体复制",
    aliases: ["别让我走·体细胞克隆与体复制"],
    workId: "never-let-me-go",
    level: "L2",
    domain: "bio",
    summary: "由体细胞培育完整个体，现实已克隆动物，人类生殖性克隆被伦理禁止。",
    description: "别让我走 中，「体细胞克隆与体复制」为核心设定之一。由体细胞培育完整个体，现实已克隆动物，人类生殖性克隆被伦理禁止。",
    firstPrinciples: [
      { principle: "体细胞核移植", verdict: "achieved", note: "多莉羊已证实技术可行。" },
      { principle: "人类生殖性克隆", verdict: "breakthrough", note: "技术可行但伦理与发育异常受限。" }
    ],
    implementation: {
      current: "动物克隆成熟；人类克隆被国际禁止。",
      path: ["现实参考：动物克隆成熟；人类克隆被国际禁止。"],
      blockers: ["伦理限制", "表观遗传异常"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["生物", "克隆"]
  },
  {
    id: "never-let-me-go-t1",
    name: "世界观基础载具与工程",
    aliases: ["别让我走·世界观基础载具与工程"],
    workId: "never-let-me-go",
    level: "L2",
    domain: "aerospace",
    summary: "该世界观中支撑叙事的交通与工程能力，多为现实延伸或温和推演。",
    description: "别让我走 中，「世界观基础载具与工程」为核心设定之一。该世界观中支撑叙事的交通与工程能力，多为现实延伸或温和推演。",
    firstPrinciples: [
      { principle: "工程能力延伸", verdict: "achieved", note: "多数载具基于现实技术推演。" },
      { principle: "极限工况突破", verdict: "breakthrough", note: "个别能力超出现实工程。" }
    ],
    implementation: {
      current: "基于现实工程路线推演。",
      path: ["现实参考：基于现实工程路线推演。"],
      blockers: ["工程极限"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["航天", "工程"]
  },
  {
    id: "the-matrix-t0",
    name: "神经接口与义体增强",
    aliases: ["黑客帝国·神经接口与义体增强"],
    workId: "the-matrix",
    level: "L2",
    domain: "bio",
    summary: "脑机接口与功能性义肢，现实 Neuralink 等已实现初步意念控制与触觉反馈。",
    description: "黑客帝国 中，「神经接口与义体增强」为核心设定之一。脑机接口与功能性义肢，现实 Neuralink 等已实现初步意念控制与触觉反馈。",
    firstPrinciples: [
      { principle: "神经信号读写", verdict: "achieved", note: "侵入式电极已解码运动意图。" },
      { principle: "高带宽双向接口", verdict: "breakthrough", note: "长期稳定与带宽仍瓶颈。" }
    ],
    implementation: {
      current: "Neuralink、犹他阵列等进入临床。",
      path: ["现实参考：Neuralink、犹他阵列等进入临床。"],
      blockers: ["长期生物相容", "信号带宽"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["生物", "神经", "增强"]
  },
  {
    id: "the-matrix-t1",
    name: "全沉浸虚拟世界",
    aliases: ["黑客帝国·全沉浸虚拟世界"],
    workId: "the-matrix",
    level: "L3",
    domain: "info",
    summary: "感官级带宽的仿真现实，意识难以分辨真伪，现实 VR 仅视觉听觉且粗糙。",
    description: "黑客帝国 中，「全沉浸虚拟世界」为核心设定之一。感官级带宽的仿真现实，意识难以分辨真伪，现实 VR 仅视觉听觉且粗糙。",
    firstPrinciples: [
      { principle: "感官级仿真", verdict: "breakthrough", note: "需全感官高带宽神经接口。" },
      { principle: "意识难以分辨", verdict: "breakthrough", note: "需完整感知替代。" }
    ],
    implementation: {
      current: "VR/AR 仅视觉听觉，沉浸度有限。",
      path: ["现实参考：VR/AR 仅视觉听觉，沉浸度有限。"],
      blockers: ["神经带宽", "渲染真实感"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["信息", "虚拟", "仿真"]
  },
  {
    id: "terminator-t0",
    name: "通用人工智能",
    aliases: ["终结者·通用人工智能"],
    workId: "terminator",
    level: "L3",
    domain: "info",
    summary: "具备跨领域推理与自主目标的机器智能，现实大模型已逼近窄域通用，AGI 仍在攻关。",
    description: "终结者 中，「通用人工智能」为核心设定之一。具备跨领域推理与自主目标的机器智能，现实大模型已逼近窄域通用，AGI 仍在攻关。",
    firstPrinciples: [
      { principle: "大规模神经网络推理", verdict: "achieved", note: "Transformer 大模型展现涌现能力。" },
      { principle: "自主目标与常识", verdict: "breakthrough", note: "因果与具身常识仍是鸿沟。" }
    ],
    implementation: {
      current: "LLM 在窄域通用，AGI 未达成。",
      path: ["现实参考：LLM 在窄域通用，AGI 未达成。"],
      blockers: ["常识与因果", "对齐"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["信息", "AI"]
  },
  {
    id: "terminator-t1",
    name: "可控时间旅行",
    aliases: ["终结者·可控时间旅行"],
    workId: "terminator",
    level: "L5",
    domain: "aerospace",
    summary: "回到过去或跳跃未来，触及因果律与时序保护，目前仅属理论边角。",
    description: "终结者 中，「可控时间旅行」为核心设定之一。回到过去或跳跃未来，触及因果律与时序保护，目前仅属理论边角。",
    firstPrinciples: [
      { principle: "宏观物体回到过去", verdict: "violated", note: "因果律与祖父悖论无解。" },
      { principle: "闭合类时曲线", verdict: "breakthrough", note: "仅极端时空解（虫洞）理论存在。" }
    ],
    implementation: {
      current: "相对论允许特殊度规，但不可工程化。",
      path: ["现实参考：相对论允许特殊度规，但不可工程化。"],
      blockers: ["因果悖论", "时序保护"],
      sopStage: "SOP-3 理论研究与建模"
    },
    dependencies: [],
    tags: ["航天", "时间", "设定"]
  },
  {
    id: "westworld-t0",
    name: "自主仿生机器人",
    aliases: ["西部世界·自主仿生机器人"],
    workId: "westworld",
    level: "L2",
    domain: "info",
    summary: "具备感知、决策与执行能力的类人/类生物机械体，现实已在工业机器人到人形机器人演进。",
    description: "西部世界 中，「自主仿生机器人」为核心设定之一。具备感知、决策与执行能力的类人/类生物机械体，现实已在工业机器人到人形机器人演进。",
    firstPrinciples: [
      { principle: "机械体自主决策", verdict: "achieved", note: "现代机器人已具备感知-规划-执行闭环。" },
      { principle: "类人灵活运动", verdict: "breakthrough", note: "双足动态平衡与精细操作仍难。" }
    ],
    implementation: {
      current: "波士顿动力、特斯拉 Optimus 等已展示原型。",
      path: ["现实参考：波士顿动力、特斯拉 Optimus 等已展示原型。"],
      blockers: ["通用运动控制", "能源续航"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["信息", "机器人", "AI"]
  },
  {
    id: "westworld-t1",
    name: "世界观基础载具与工程",
    aliases: ["西部世界·世界观基础载具与工程"],
    workId: "westworld",
    level: "L2",
    domain: "aerospace",
    summary: "该世界观中支撑叙事的交通与工程能力，多为现实延伸或温和推演。",
    description: "西部世界 中，「世界观基础载具与工程」为核心设定之一。该世界观中支撑叙事的交通与工程能力，多为现实延伸或温和推演。",
    firstPrinciples: [
      { principle: "工程能力延伸", verdict: "achieved", note: "多数载具基于现实技术推演。" },
      { principle: "极限工况突破", verdict: "breakthrough", note: "个别能力超出现实工程。" }
    ],
    implementation: {
      current: "基于现实工程路线推演。",
      path: ["现实参考：基于现实工程路线推演。"],
      blockers: ["工程极限"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["航天", "工程"]
  },
  {
    id: "ex-machina-t0",
    name: "自主仿生机器人",
    aliases: ["机械姬·自主仿生机器人"],
    workId: "ex-machina",
    level: "L2",
    domain: "info",
    summary: "具备感知、决策与执行能力的类人/类生物机械体，现实已在工业机器人到人形机器人演进。",
    description: "机械姬 中，「自主仿生机器人」为核心设定之一。具备感知、决策与执行能力的类人/类生物机械体，现实已在工业机器人到人形机器人演进。",
    firstPrinciples: [
      { principle: "机械体自主决策", verdict: "achieved", note: "现代机器人已具备感知-规划-执行闭环。" },
      { principle: "类人灵活运动", verdict: "breakthrough", note: "双足动态平衡与精细操作仍难。" }
    ],
    implementation: {
      current: "波士顿动力、特斯拉 Optimus 等已展示原型。",
      path: ["现实参考：波士顿动力、特斯拉 Optimus 等已展示原型。"],
      blockers: ["通用运动控制", "能源续航"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["信息", "机器人", "AI"]
  },
  {
    id: "ex-machina-t1",
    name: "通用人工智能",
    aliases: ["机械姬·通用人工智能"],
    workId: "ex-machina",
    level: "L3",
    domain: "info",
    summary: "具备跨领域推理与自主目标的机器智能，现实大模型已逼近窄域通用，AGI 仍在攻关。",
    description: "机械姬 中，「通用人工智能」为核心设定之一。具备跨领域推理与自主目标的机器智能，现实大模型已逼近窄域通用，AGI 仍在攻关。",
    firstPrinciples: [
      { principle: "大规模神经网络推理", verdict: "achieved", note: "Transformer 大模型展现涌现能力。" },
      { principle: "自主目标与常识", verdict: "breakthrough", note: "因果与具身常识仍是鸿沟。" }
    ],
    implementation: {
      current: "LLM 在窄域通用，AGI 未达成。",
      path: ["现实参考：LLM 在窄域通用，AGI 未达成。"],
      blockers: ["常识与因果", "对齐"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["信息", "AI"]
  },
  {
    id: "her-t0",
    name: "通用人工智能",
    aliases: ["她·通用人工智能"],
    workId: "her",
    level: "L3",
    domain: "info",
    summary: "具备跨领域推理与自主目标的机器智能，现实大模型已逼近窄域通用，AGI 仍在攻关。",
    description: "她 中，「通用人工智能」为核心设定之一。具备跨领域推理与自主目标的机器智能，现实大模型已逼近窄域通用，AGI 仍在攻关。",
    firstPrinciples: [
      { principle: "大规模神经网络推理", verdict: "achieved", note: "Transformer 大模型展现涌现能力。" },
      { principle: "自主目标与常识", verdict: "breakthrough", note: "因果与具身常识仍是鸿沟。" }
    ],
    implementation: {
      current: "LLM 在窄域通用，AGI 未达成。",
      path: ["现实参考：LLM 在窄域通用，AGI 未达成。"],
      blockers: ["常识与因果", "对齐"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["信息", "AI"]
  },
  {
    id: "her-t1",
    name: "世界观基础载具与工程",
    aliases: ["她·世界观基础载具与工程"],
    workId: "her",
    level: "L2",
    domain: "aerospace",
    summary: "该世界观中支撑叙事的交通与工程能力，多为现实延伸或温和推演。",
    description: "她 中，「世界观基础载具与工程」为核心设定之一。该世界观中支撑叙事的交通与工程能力，多为现实延伸或温和推演。",
    firstPrinciples: [
      { principle: "工程能力延伸", verdict: "achieved", note: "多数载具基于现实技术推演。" },
      { principle: "极限工况突破", verdict: "breakthrough", note: "个别能力超出现实工程。" }
    ],
    implementation: {
      current: "基于现实工程路线推演。",
      path: ["现实参考：基于现实工程路线推演。"],
      blockers: ["工程极限"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["航天", "工程"]
  },
  {
    id: "wall-e-t0",
    name: "自主仿生机器人",
    aliases: ["机器人总动员·自主仿生机器人"],
    workId: "wall-e",
    level: "L2",
    domain: "info",
    summary: "具备感知、决策与执行能力的类人/类生物机械体，现实已在工业机器人到人形机器人演进。",
    description: "机器人总动员 中，「自主仿生机器人」为核心设定之一。具备感知、决策与执行能力的类人/类生物机械体，现实已在工业机器人到人形机器人演进。",
    firstPrinciples: [
      { principle: "机械体自主决策", verdict: "achieved", note: "现代机器人已具备感知-规划-执行闭环。" },
      { principle: "类人灵活运动", verdict: "breakthrough", note: "双足动态平衡与精细操作仍难。" }
    ],
    implementation: {
      current: "波士顿动力、特斯拉 Optimus 等已展示原型。",
      path: ["现实参考：波士顿动力、特斯拉 Optimus 等已展示原型。"],
      blockers: ["通用运动控制", "能源续航"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["信息", "机器人", "AI"]
  },
  {
    id: "wall-e-t1",
    name: "通用人工智能",
    aliases: ["机器人总动员·通用人工智能"],
    workId: "wall-e",
    level: "L3",
    domain: "info",
    summary: "具备跨领域推理与自主目标的机器智能，现实大模型已逼近窄域通用，AGI 仍在攻关。",
    description: "机器人总动员 中，「通用人工智能」为核心设定之一。具备跨领域推理与自主目标的机器智能，现实大模型已逼近窄域通用，AGI 仍在攻关。",
    firstPrinciples: [
      { principle: "大规模神经网络推理", verdict: "achieved", note: "Transformer 大模型展现涌现能力。" },
      { principle: "自主目标与常识", verdict: "breakthrough", note: "因果与具身常识仍是鸿沟。" }
    ],
    implementation: {
      current: "LLM 在窄域通用，AGI 未达成。",
      path: ["现实参考：LLM 在窄域通用，AGI 未达成。"],
      blockers: ["常识与因果", "对齐"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["信息", "AI"]
  },
  {
    id: "astro-boy-t0",
    name: "自主仿生机器人",
    aliases: ["铁臂阿童木·自主仿生机器人"],
    workId: "astro-boy",
    level: "L2",
    domain: "info",
    summary: "具备感知、决策与执行能力的类人/类生物机械体，现实已在工业机器人到人形机器人演进。",
    description: "铁臂阿童木 中，「自主仿生机器人」为核心设定之一。具备感知、决策与执行能力的类人/类生物机械体，现实已在工业机器人到人形机器人演进。",
    firstPrinciples: [
      { principle: "机械体自主决策", verdict: "achieved", note: "现代机器人已具备感知-规划-执行闭环。" },
      { principle: "类人灵活运动", verdict: "breakthrough", note: "双足动态平衡与精细操作仍难。" }
    ],
    implementation: {
      current: "波士顿动力、特斯拉 Optimus 等已展示原型。",
      path: ["现实参考：波士顿动力、特斯拉 Optimus 等已展示原型。"],
      blockers: ["通用运动控制", "能源续航"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["信息", "机器人", "AI"]
  },
  {
    id: "astro-boy-t1",
    name: "通用人工智能",
    aliases: ["铁臂阿童木·通用人工智能"],
    workId: "astro-boy",
    level: "L3",
    domain: "info",
    summary: "具备跨领域推理与自主目标的机器智能，现实大模型已逼近窄域通用，AGI 仍在攻关。",
    description: "铁臂阿童木 中，「通用人工智能」为核心设定之一。具备跨领域推理与自主目标的机器智能，现实大模型已逼近窄域通用，AGI 仍在攻关。",
    firstPrinciples: [
      { principle: "大规模神经网络推理", verdict: "achieved", note: "Transformer 大模型展现涌现能力。" },
      { principle: "自主目标与常识", verdict: "breakthrough", note: "因果与具身常识仍是鸿沟。" }
    ],
    implementation: {
      current: "LLM 在窄域通用，AGI 未达成。",
      path: ["现实参考：LLM 在窄域通用，AGI 未达成。"],
      blockers: ["常识与因果", "对齐"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["信息", "AI"]
  },
  {
    id: "doraemon-t0",
    name: "超空间/曲速航行",
    aliases: ["哆啦A梦·超空间/曲速航行"],
    workId: "doraemon",
    level: "L4",
    domain: "aerospace",
    summary: "扭曲时空泡实现跨恒星系航行，挑战相对论光速极限，需负能量与奇异物质。",
    description: "哆啦A梦 中，「超空间/曲速航行」为核心设定之一。扭曲时空泡实现跨恒星系航行，挑战相对论光速极限，需负能量与奇异物质。",
    firstPrinciples: [
      { principle: "时空可被几何扭曲", verdict: "achieved", note: "广义相对论证实引力即时空弯曲。" },
      { principle: "局部时空泡超光速", verdict: "breakthrough", note: "阿库别瑞度规可行但需负能量。" },
      { principle: "负能量与奇异物质", verdict: "violated", note: "已知物质均为正能量。" }
    ],
    implementation: {
      current: "仅理论数学阶段，无实验验证。",
      path: ["现实参考：仅理论数学阶段，无实验验证。"],
      blockers: ["负能量密度", "奇异物质", "因果性"],
      sopStage: "SOP-3 理论研究与建模"
    },
    dependencies: [],
    tags: ["航天", "超光速", "时空"]
  },
  {
    id: "doraemon-t1",
    name: "自主仿生机器人",
    aliases: ["哆啦A梦·自主仿生机器人"],
    workId: "doraemon",
    level: "L2",
    domain: "info",
    summary: "具备感知、决策与执行能力的类人/类生物机械体，现实已在工业机器人到人形机器人演进。",
    description: "哆啦A梦 中，「自主仿生机器人」为核心设定之一。具备感知、决策与执行能力的类人/类生物机械体，现实已在工业机器人到人形机器人演进。",
    firstPrinciples: [
      { principle: "机械体自主决策", verdict: "achieved", note: "现代机器人已具备感知-规划-执行闭环。" },
      { principle: "类人灵活运动", verdict: "breakthrough", note: "双足动态平衡与精细操作仍难。" }
    ],
    implementation: {
      current: "波士顿动力、特斯拉 Optimus 等已展示原型。",
      path: ["现实参考：波士顿动力、特斯拉 Optimus 等已展示原型。"],
      blockers: ["通用运动控制", "能源续航"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["信息", "机器人", "AI"]
  },
  {
    id: "back-to-the-future-t0",
    name: "可控时间旅行",
    aliases: ["回到未来·可控时间旅行"],
    workId: "back-to-the-future",
    level: "L5",
    domain: "aerospace",
    summary: "回到过去或跳跃未来，触及因果律与时序保护，目前仅属理论边角。",
    description: "回到未来 中，「可控时间旅行」为核心设定之一。回到过去或跳跃未来，触及因果律与时序保护，目前仅属理论边角。",
    firstPrinciples: [
      { principle: "宏观物体回到过去", verdict: "violated", note: "因果律与祖父悖论无解。" },
      { principle: "闭合类时曲线", verdict: "breakthrough", note: "仅极端时空解（虫洞）理论存在。" }
    ],
    implementation: {
      current: "相对论允许特殊度规，但不可工程化。",
      path: ["现实参考：相对论允许特殊度规，但不可工程化。"],
      blockers: ["因果悖论", "时序保护"],
      sopStage: "SOP-3 理论研究与建模"
    },
    dependencies: [],
    tags: ["航天", "时间", "设定"]
  },
  {
    id: "back-to-the-future-t1",
    name: "常驻太空与殖民航行",
    aliases: ["回到未来·常驻太空与殖民航行"],
    workId: "back-to-the-future",
    level: "L2",
    domain: "aerospace",
    summary: "人类常驻近地空间并向行星殖民，现实 ISS 与商业航天已开启，火星任务规划中。",
    description: "回到未来 中，「常驻太空与殖民航行」为核心设定之一。人类常驻近地空间并向行星殖民，现实 ISS 与商业航天已开启，火星任务规划中。",
    firstPrinciples: [
      { principle: "近地空间常驻", verdict: "achieved", note: "ISS 持续载人二十余年。" },
      { principle: "行星际载人航行", verdict: "breakthrough", note: "辐射、补给与着陆仍难。" }
    ],
    implementation: {
      current: "SpaceX 等推动低成本发射与火星计划。",
      path: ["现实参考：SpaceX 等推动低成本发射与火星计划。"],
      blockers: ["深空辐射", "生命保障"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["航天", "殖民"]
  },
  {
    id: "groundhog-day-t0",
    name: "可控时间旅行",
    aliases: ["土拨鼠之日·可控时间旅行"],
    workId: "groundhog-day",
    level: "L5",
    domain: "aerospace",
    summary: "回到过去或跳跃未来，触及因果律与时序保护，目前仅属理论边角。",
    description: "土拨鼠之日 中，「可控时间旅行」为核心设定之一。回到过去或跳跃未来，触及因果律与时序保护，目前仅属理论边角。",
    firstPrinciples: [
      { principle: "宏观物体回到过去", verdict: "violated", note: "因果律与祖父悖论无解。" },
      { principle: "闭合类时曲线", verdict: "breakthrough", note: "仅极端时空解（虫洞）理论存在。" }
    ],
    implementation: {
      current: "相对论允许特殊度规，但不可工程化。",
      path: ["现实参考：相对论允许特殊度规，但不可工程化。"],
      blockers: ["因果悖论", "时序保护"],
      sopStage: "SOP-3 理论研究与建模"
    },
    dependencies: [],
    tags: ["航天", "时间", "设定"]
  },
  {
    id: "groundhog-day-t1",
    name: "恒星能量采集",
    aliases: ["土拨鼠之日·恒星能量采集"],
    workId: "groundhog-day",
    level: "L4",
    domain: "energy",
    summary: "以巨型结构包裹恒星采集其全部辐射，现实仅理论，材料与工程尺度不可及。",
    description: "土拨鼠之日 中，「恒星能量采集」为核心设定之一。以巨型结构包裹恒星采集其全部辐射，现实仅理论，材料与工程尺度不可及。",
    firstPrinciples: [
      { principle: "恒星辐射收集", verdict: "breakthrough", note: "能量巨大但结构尺度超工程极限。" },
      { principle: "太空巨型结构", verdict: "breakthrough", note: "材料强度与轨道动力学难。" }
    ],
    implementation: {
      current: "仅有思想实验与 SETI 搜寻。",
      path: ["现实参考：仅有思想实验与 SETI 搜寻。"],
      blockers: ["材料强度", "尺度"],
      sopStage: "SOP-3 理论研究与建模"
    },
    dependencies: [],
    tags: ["能源", "恒星", "结构"]
  },
  {
    id: "twelve-monkeys-t0",
    name: "可控时间旅行",
    aliases: ["十二猴子·可控时间旅行"],
    workId: "twelve-monkeys",
    level: "L5",
    domain: "aerospace",
    summary: "回到过去或跳跃未来，触及因果律与时序保护，目前仅属理论边角。",
    description: "十二猴子 中，「可控时间旅行」为核心设定之一。回到过去或跳跃未来，触及因果律与时序保护，目前仅属理论边角。",
    firstPrinciples: [
      { principle: "宏观物体回到过去", verdict: "violated", note: "因果律与祖父悖论无解。" },
      { principle: "闭合类时曲线", verdict: "breakthrough", note: "仅极端时空解（虫洞）理论存在。" }
    ],
    implementation: {
      current: "相对论允许特殊度规，但不可工程化。",
      path: ["现实参考：相对论允许特殊度规，但不可工程化。"],
      blockers: ["因果悖论", "时序保护"],
      sopStage: "SOP-3 理论研究与建模"
    },
    dependencies: [],
    tags: ["航天", "时间", "设定"]
  },
  {
    id: "twelve-monkeys-t1",
    name: "物质重组传送",
    aliases: ["十二猴子·物质重组传送"],
    workId: "twelve-monkeys",
    level: "L5",
    domain: "info",
    summary: "分解物体为信息流再重组，需读取并重建约 10²⁵ 原子量子态，现实不可及。",
    description: "十二猴子 中，「物质重组传送」为核心设定之一。分解物体为信息流再重组，需读取并重建约 10²⁵ 原子量子态，现实不可及。",
    firstPrinciples: [
      { principle: "全量子态读取", verdict: "violated", note: "不可克隆定理禁止完美复制。" },
      { principle: "宏观重组", verdict: "violated", note: "信息量与定位远超可能。" }
    ],
    implementation: {
      current: "仅量子隐形传态传输量子比特。",
      path: ["现实参考：仅量子隐形传态传输量子比特。"],
      blockers: ["不可克隆定理", "信息量"],
      sopStage: "SOP-2 原理分析"
    },
    dependencies: [],
    tags: ["信息", "传送", "设定"]
  },
  {
    id: "looper-t0",
    name: "可控时间旅行",
    aliases: ["环形使者·可控时间旅行"],
    workId: "looper",
    level: "L5",
    domain: "aerospace",
    summary: "回到过去或跳跃未来，触及因果律与时序保护，目前仅属理论边角。",
    description: "环形使者 中，「可控时间旅行」为核心设定之一。回到过去或跳跃未来，触及因果律与时序保护，目前仅属理论边角。",
    firstPrinciples: [
      { principle: "宏观物体回到过去", verdict: "violated", note: "因果律与祖父悖论无解。" },
      { principle: "闭合类时曲线", verdict: "breakthrough", note: "仅极端时空解（虫洞）理论存在。" }
    ],
    implementation: {
      current: "相对论允许特殊度规，但不可工程化。",
      path: ["现实参考：相对论允许特殊度规，但不可工程化。"],
      blockers: ["因果悖论", "时序保护"],
      sopStage: "SOP-3 理论研究与建模"
    },
    dependencies: [],
    tags: ["航天", "时间", "设定"]
  },
  {
    id: "looper-t1",
    name: "恒星能量采集",
    aliases: ["环形使者·恒星能量采集"],
    workId: "looper",
    level: "L4",
    domain: "energy",
    summary: "以巨型结构包裹恒星采集其全部辐射，现实仅理论，材料与工程尺度不可及。",
    description: "环形使者 中，「恒星能量采集」为核心设定之一。以巨型结构包裹恒星采集其全部辐射，现实仅理论，材料与工程尺度不可及。",
    firstPrinciples: [
      { principle: "恒星辐射收集", verdict: "breakthrough", note: "能量巨大但结构尺度超工程极限。" },
      { principle: "太空巨型结构", verdict: "breakthrough", note: "材料强度与轨道动力学难。" }
    ],
    implementation: {
      current: "仅有思想实验与 SETI 搜寻。",
      path: ["现实参考：仅有思想实验与 SETI 搜寻。"],
      blockers: ["材料强度", "尺度"],
      sopStage: "SOP-3 理论研究与建模"
    },
    dependencies: [],
    tags: ["能源", "恒星", "结构"]
  },
  {
    id: "predestination-t0",
    name: "可控时间旅行",
    aliases: ["前目的地·可控时间旅行"],
    workId: "predestination",
    level: "L5",
    domain: "aerospace",
    summary: "回到过去或跳跃未来，触及因果律与时序保护，目前仅属理论边角。",
    description: "前目的地 中，「可控时间旅行」为核心设定之一。回到过去或跳跃未来，触及因果律与时序保护，目前仅属理论边角。",
    firstPrinciples: [
      { principle: "宏观物体回到过去", verdict: "violated", note: "因果律与祖父悖论无解。" },
      { principle: "闭合类时曲线", verdict: "breakthrough", note: "仅极端时空解（虫洞）理论存在。" }
    ],
    implementation: {
      current: "相对论允许特殊度规，但不可工程化。",
      path: ["现实参考：相对论允许特殊度规，但不可工程化。"],
      blockers: ["因果悖论", "时序保护"],
      sopStage: "SOP-3 理论研究与建模"
    },
    dependencies: [],
    tags: ["航天", "时间", "设定"]
  },
  {
    id: "predestination-t1",
    name: "定向基因改造",
    aliases: ["前目的地·定向基因改造"],
    workId: "predestination",
    level: "L1",
    domain: "bio",
    summary: "按设计修改生物基因组，现实 CRISPR 已临床编辑，定制生物仍受限。",
    description: "前目的地 中，「定向基因改造」为核心设定之一。按设计修改生物基因组，现实 CRISPR 已临床编辑，定制生物仍受限。",
    firstPrinciples: [
      { principle: "DNA 定点编辑", verdict: "achieved", note: "CRISPR-Cas9 已用于临床。" },
      { principle: "复杂多基因定制", verdict: "breakthrough", note: "多基因互作网络难精确设计。" }
    ],
    implementation: {
      current: "基因治疗与作物编辑已商用。",
      path: ["现实参考：基因治疗与作物编辑已商用。"],
      blockers: ["多基因网络", "脱靶效应"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["生物", "基因"]
  },
  {
    id: "coherence-t0",
    name: "世界观基础载具与工程",
    aliases: ["彗星来的那一夜·世界观基础载具与工程"],
    workId: "coherence",
    level: "L2",
    domain: "aerospace",
    summary: "该世界观中支撑叙事的交通与工程能力，多为现实延伸或温和推演。",
    description: "彗星来的那一夜 中，「世界观基础载具与工程」为核心设定之一。该世界观中支撑叙事的交通与工程能力，多为现实延伸或温和推演。",
    firstPrinciples: [
      { principle: "工程能力延伸", verdict: "achieved", note: "多数载具基于现实技术推演。" },
      { principle: "极限工况突破", verdict: "breakthrough", note: "个别能力超出现实工程。" }
    ],
    implementation: {
      current: "基于现实工程路线推演。",
      path: ["现实参考：基于现实工程路线推演。"],
      blockers: ["工程极限"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["航天", "工程"]
  },
  {
    id: "coherence-t1",
    name: "信息与社会技术",
    aliases: ["彗星来的那一夜·信息与社会技术"],
    workId: "coherence",
    level: "L1",
    domain: "info",
    summary: "该世界观中的通信、计算与社会治理技术，现实多已具备雏形。",
    description: "彗星来的那一夜 中，「信息与社会技术」为核心设定之一。该世界观中的通信、计算与社会治理技术，现实多已具备雏形。",
    firstPrinciples: [
      { principle: "信息互联互通", verdict: "achieved", note: "网络与计算已普及。" },
      { principle: "社会治理数字化", verdict: "achieved", note: "数据化治理已应用。" }
    ],
    implementation: {
      current: "现实信息技术直接对应。",
      path: ["现实参考：现实信息技术直接对应。"],
      blockers: ["隐私与伦理"],
      sopStage: "SOP-1 定义与拆解"
    },
    dependencies: [],
    tags: ["信息", "社会"]
  },
  {
    id: "source-code-t0",
    name: "世界观基础载具与工程",
    aliases: ["源代码·世界观基础载具与工程"],
    workId: "source-code",
    level: "L2",
    domain: "aerospace",
    summary: "该世界观中支撑叙事的交通与工程能力，多为现实延伸或温和推演。",
    description: "源代码 中，「世界观基础载具与工程」为核心设定之一。该世界观中支撑叙事的交通与工程能力，多为现实延伸或温和推演。",
    firstPrinciples: [
      { principle: "工程能力延伸", verdict: "achieved", note: "多数载具基于现实技术推演。" },
      { principle: "极限工况突破", verdict: "breakthrough", note: "个别能力超出现实工程。" }
    ],
    implementation: {
      current: "基于现实工程路线推演。",
      path: ["现实参考：基于现实工程路线推演。"],
      blockers: ["工程极限"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["航天", "工程"]
  },
  {
    id: "source-code-t1",
    name: "信息与社会技术",
    aliases: ["源代码·信息与社会技术"],
    workId: "source-code",
    level: "L1",
    domain: "info",
    summary: "该世界观中的通信、计算与社会治理技术，现实多已具备雏形。",
    description: "源代码 中，「信息与社会技术」为核心设定之一。该世界观中的通信、计算与社会治理技术，现实多已具备雏形。",
    firstPrinciples: [
      { principle: "信息互联互通", verdict: "achieved", note: "网络与计算已普及。" },
      { principle: "社会治理数字化", verdict: "achieved", note: "数据化治理已应用。" }
    ],
    implementation: {
      current: "现实信息技术直接对应。",
      path: ["现实参考：现实信息技术直接对应。"],
      blockers: ["隐私与伦理"],
      sopStage: "SOP-1 定义与拆解"
    },
    dependencies: [],
    tags: ["信息", "社会"]
  },
  {
    id: "edge-of-tomorrow-t0",
    name: "自主仿生机器人",
    aliases: ["明日边缘·自主仿生机器人"],
    workId: "edge-of-tomorrow",
    level: "L2",
    domain: "info",
    summary: "具备感知、决策与执行能力的类人/类生物机械体，现实已在工业机器人到人形机器人演进。",
    description: "明日边缘 中，「自主仿生机器人」为核心设定之一。具备感知、决策与执行能力的类人/类生物机械体，现实已在工业机器人到人形机器人演进。",
    firstPrinciples: [
      { principle: "机械体自主决策", verdict: "achieved", note: "现代机器人已具备感知-规划-执行闭环。" },
      { principle: "类人灵活运动", verdict: "breakthrough", note: "双足动态平衡与精细操作仍难。" }
    ],
    implementation: {
      current: "波士顿动力、特斯拉 Optimus 等已展示原型。",
      path: ["现实参考：波士顿动力、特斯拉 Optimus 等已展示原型。"],
      blockers: ["通用运动控制", "能源续航"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["信息", "机器人", "AI"]
  },
  {
    id: "edge-of-tomorrow-t1",
    name: "地外生命探测与接触",
    aliases: ["明日边缘·地外生命探测与接触"],
    workId: "edge-of-tomorrow",
    level: "L2",
    domain: "bio",
    summary: "搜寻并理解非地球生命，现实仅发现地外有机分子与宜居带行星候选。",
    description: "明日边缘 中，「地外生命探测与接触」为核心设定之一。搜寻并理解非地球生命，现实仅发现地外有机分子与宜居带行星候选。",
    firstPrinciples: [
      { principle: "宜居带行星搜寻", verdict: "achieved", note: "开普勒已发现数千颗。" },
      { principle: "生命信号识别", verdict: "breakthrough", note: "生物标志气体判读仍难。" }
    ],
    implementation: {
      current: "射电与光谱搜寻持续，无确证。",
      path: ["现实参考：射电与光谱搜寻持续，无确证。"],
      blockers: ["信号判读", "距离"],
      sopStage: "SOP-5 验证与迭代"
    },
    dependencies: [],
    tags: ["生物", "地外", "探索"]
  },
  {
    id: "pantheon-t0",
    name: "通用人工智能",
    aliases: ["万神殿·通用人工智能"],
    workId: "pantheon",
    level: "L3",
    domain: "info",
    summary: "具备跨领域推理与自主目标的机器智能，现实大模型已逼近窄域通用，AGI 仍在攻关。",
    description: "万神殿 中，「通用人工智能」为核心设定之一。具备跨领域推理与自主目标的机器智能，现实大模型已逼近窄域通用，AGI 仍在攻关。",
    firstPrinciples: [
      { principle: "大规模神经网络推理", verdict: "achieved", note: "Transformer 大模型展现涌现能力。" },
      { principle: "自主目标与常识", verdict: "breakthrough", note: "因果与具身常识仍是鸿沟。" }
    ],
    implementation: {
      current: "LLM 在窄域通用，AGI 未达成。",
      path: ["现实参考：LLM 在窄域通用，AGI 未达成。"],
      blockers: ["常识与因果", "对齐"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["信息", "AI"]
  },
  {
    id: "pantheon-t1",
    name: "行星级打击武器",
    aliases: ["万神殿·行星级打击武器"],
    workId: "pantheon",
    level: "L5",
    domain: "weapon",
    summary: "可摧毁行星或改写物理常数的武器，依赖虚构能量或维度操控，现实不可及。",
    description: "万神殿 中，「行星级打击武器」为核心设定之一。可摧毁行星或改写物理常数的武器，依赖虚构能量或维度操控，现实不可及。",
    firstPrinciples: [
      { principle: "行星级能量释放", verdict: "breakthrough", note: "核武远不及摧毁行星。" },
      { principle: "维度/常数改写", verdict: "violated", note: "无物理机制。" }
    ],
    implementation: {
      current: "最大核武当量约数十兆吨，差多个数量级。",
      path: ["现实参考：最大核武当量约数十兆吨，差多个数量级。"],
      blockers: ["能量量级", "物理改写"],
      sopStage: "SOP-2 原理分析"
    },
    dependencies: [],
    tags: ["武器", "战略", "设定"]
  },
  {
    id: "the-martian-t0",
    name: "常驻太空与殖民航行",
    aliases: ["火星救援·常驻太空与殖民航行"],
    workId: "the-martian",
    level: "L2",
    domain: "aerospace",
    summary: "人类常驻近地空间并向行星殖民，现实 ISS 与商业航天已开启，火星任务规划中。",
    description: "火星救援 中，「常驻太空与殖民航行」为核心设定之一。人类常驻近地空间并向行星殖民，现实 ISS 与商业航天已开启，火星任务规划中。",
    firstPrinciples: [
      { principle: "近地空间常驻", verdict: "achieved", note: "ISS 持续载人二十余年。" },
      { principle: "行星际载人航行", verdict: "breakthrough", note: "辐射、补给与着陆仍难。" }
    ],
    implementation: {
      current: "SpaceX 等推动低成本发射与火星计划。",
      path: ["现实参考：SpaceX 等推动低成本发射与火星计划。"],
      blockers: ["深空辐射", "生命保障"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["航天", "殖民"]
  },
  {
    id: "the-martian-t1",
    name: "世界观基础载具与工程",
    aliases: ["火星救援·世界观基础载具与工程"],
    workId: "the-martian",
    level: "L2",
    domain: "aerospace",
    summary: "该世界观中支撑叙事的交通与工程能力，多为现实延伸或温和推演。",
    description: "火星救援 中，「世界观基础载具与工程」为核心设定之一。该世界观中支撑叙事的交通与工程能力，多为现实延伸或温和推演。",
    firstPrinciples: [
      { principle: "工程能力延伸", verdict: "achieved", note: "多数载具基于现实技术推演。" },
      { principle: "极限工况突破", verdict: "breakthrough", note: "个别能力超出现实工程。" }
    ],
    implementation: {
      current: "基于现实工程路线推演。",
      path: ["现实参考：基于现实工程路线推演。"],
      blockers: ["工程极限"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["航天", "工程"]
  },
  {
    id: "project-hail-mary-t0",
    name: "行星环境改造",
    aliases: ["挽救计划·行星环境改造"],
    workId: "project-hail-mary",
    level: "L4",
    domain: "aerospace",
    summary: "将异星改造为可居环境，现实仅停留在理论建模与地球工程。",
    description: "挽救计划 中，「行星环境改造」为核心设定之一。将异星改造为可居环境，现实仅停留在理论建模与地球工程。",
    firstPrinciples: [
      { principle: "大气成分工程", verdict: "breakthrough", note: "尺度与时机远超工程能力。" },
      { principle: "全球气候调控", verdict: "breakthrough", note: "地球工程仍处概念。" }
    ],
    implementation: {
      current: "仅有地球工程思想实验。",
      path: ["现实参考：仅有地球工程思想实验。"],
      blockers: ["尺度", "反馈不可控"],
      sopStage: "SOP-3 理论研究与建模"
    },
    dependencies: [],
    tags: ["航天", "改造", "生态"]
  },
  {
    id: "project-hail-mary-t1",
    name: "恒星能量采集",
    aliases: ["挽救计划·恒星能量采集"],
    workId: "project-hail-mary",
    level: "L4",
    domain: "energy",
    summary: "以巨型结构包裹恒星采集其全部辐射，现实仅理论，材料与工程尺度不可及。",
    description: "挽救计划 中，「恒星能量采集」为核心设定之一。以巨型结构包裹恒星采集其全部辐射，现实仅理论，材料与工程尺度不可及。",
    firstPrinciples: [
      { principle: "恒星辐射收集", verdict: "breakthrough", note: "能量巨大但结构尺度超工程极限。" },
      { principle: "太空巨型结构", verdict: "breakthrough", note: "材料强度与轨道动力学难。" }
    ],
    implementation: {
      current: "仅有思想实验与 SETI 搜寻。",
      path: ["现实参考：仅有思想实验与 SETI 搜寻。"],
      blockers: ["材料强度", "尺度"],
      sopStage: "SOP-3 理论研究与建模"
    },
    dependencies: [],
    tags: ["能源", "恒星", "结构"]
  },
  {
    id: "seveneves-t0",
    name: "定向基因改造",
    aliases: ["七夏娃·定向基因改造"],
    workId: "seveneves",
    level: "L1",
    domain: "bio",
    summary: "按设计修改生物基因组，现实 CRISPR 已临床编辑，定制生物仍受限。",
    description: "七夏娃 中，「定向基因改造」为核心设定之一。按设计修改生物基因组，现实 CRISPR 已临床编辑，定制生物仍受限。",
    firstPrinciples: [
      { principle: "DNA 定点编辑", verdict: "achieved", note: "CRISPR-Cas9 已用于临床。" },
      { principle: "复杂多基因定制", verdict: "breakthrough", note: "多基因互作网络难精确设计。" }
    ],
    implementation: {
      current: "基因治疗与作物编辑已商用。",
      path: ["现实参考：基因治疗与作物编辑已商用。"],
      blockers: ["多基因网络", "脱靶效应"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["生物", "基因"]
  },
  {
    id: "seveneves-t1",
    name: "恒星能量采集",
    aliases: ["七夏娃·恒星能量采集"],
    workId: "seveneves",
    level: "L4",
    domain: "energy",
    summary: "以巨型结构包裹恒星采集其全部辐射，现实仅理论，材料与工程尺度不可及。",
    description: "七夏娃 中，「恒星能量采集」为核心设定之一。以巨型结构包裹恒星采集其全部辐射，现实仅理论，材料与工程尺度不可及。",
    firstPrinciples: [
      { principle: "恒星辐射收集", verdict: "breakthrough", note: "能量巨大但结构尺度超工程极限。" },
      { principle: "太空巨型结构", verdict: "breakthrough", note: "材料强度与轨道动力学难。" }
    ],
    implementation: {
      current: "仅有思想实验与 SETI 搜寻。",
      path: ["现实参考：仅有思想实验与 SETI 搜寻。"],
      blockers: ["材料强度", "尺度"],
      sopStage: "SOP-3 理论研究与建模"
    },
    dependencies: [],
    tags: ["能源", "恒星", "结构"]
  },
  {
    id: "mars-trilogy-t0",
    name: "定向基因改造",
    aliases: ["火星三部曲·定向基因改造"],
    workId: "mars-trilogy",
    level: "L1",
    domain: "bio",
    summary: "按设计修改生物基因组，现实 CRISPR 已临床编辑，定制生物仍受限。",
    description: "火星三部曲 中，「定向基因改造」为核心设定之一。按设计修改生物基因组，现实 CRISPR 已临床编辑，定制生物仍受限。",
    firstPrinciples: [
      { principle: "DNA 定点编辑", verdict: "achieved", note: "CRISPR-Cas9 已用于临床。" },
      { principle: "复杂多基因定制", verdict: "breakthrough", note: "多基因互作网络难精确设计。" }
    ],
    implementation: {
      current: "基因治疗与作物编辑已商用。",
      path: ["现实参考：基因治疗与作物编辑已商用。"],
      blockers: ["多基因网络", "脱靶效应"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["生物", "基因"]
  },
  {
    id: "mars-trilogy-t1",
    name: "行星环境改造",
    aliases: ["火星三部曲·行星环境改造"],
    workId: "mars-trilogy",
    level: "L4",
    domain: "aerospace",
    summary: "将异星改造为可居环境，现实仅停留在理论建模与地球工程。",
    description: "火星三部曲 中，「行星环境改造」为核心设定之一。将异星改造为可居环境，现实仅停留在理论建模与地球工程。",
    firstPrinciples: [
      { principle: "大气成分工程", verdict: "breakthrough", note: "尺度与时机远超工程能力。" },
      { principle: "全球气候调控", verdict: "breakthrough", note: "地球工程仍处概念。" }
    ],
    implementation: {
      current: "仅有地球工程思想实验。",
      path: ["现实参考：仅有地球工程思想实验。"],
      blockers: ["尺度", "反馈不可控"],
      sopStage: "SOP-3 理论研究与建模"
    },
    dependencies: [],
    tags: ["航天", "改造", "生态"]
  },
  {
    id: "gravity-t0",
    name: "主动光学隐身",
    aliases: ["地心引力·主动光学隐身"],
    workId: "gravity",
    level: "L3",
    domain: "material",
    summary: "使物体不可见，现实有超材料与自适应伪装雏形，宏观全隐身未达。",
    description: "地心引力 中，「主动光学隐身」为核心设定之一。使物体不可见，现实有超材料与自适应伪装雏形，宏观全隐身未达。",
    firstPrinciples: [
      { principle: "超材料折射操控", verdict: "achieved", note: "负折射率超材料已验证。" },
      { principle: "宏观动态隐身", verdict: "breakthrough", note: "宽带、多角度难覆盖。" }
    ],
    implementation: {
      current: "微波段隐身斗篷与迷彩已研究。",
      path: ["现实参考：微波段隐身斗篷与迷彩已研究。"],
      blockers: ["宽带覆盖", "实时重构"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["材料", "隐身"]
  },
  {
    id: "gravity-t1",
    name: "常驻太空与殖民航行",
    aliases: ["地心引力·常驻太空与殖民航行"],
    workId: "gravity",
    level: "L2",
    domain: "aerospace",
    summary: "人类常驻近地空间并向行星殖民，现实 ISS 与商业航天已开启，火星任务规划中。",
    description: "地心引力 中，「常驻太空与殖民航行」为核心设定之一。人类常驻近地空间并向行星殖民，现实 ISS 与商业航天已开启，火星任务规划中。",
    firstPrinciples: [
      { principle: "近地空间常驻", verdict: "achieved", note: "ISS 持续载人二十余年。" },
      { principle: "行星际载人航行", verdict: "breakthrough", note: "辐射、补给与着陆仍难。" }
    ],
    implementation: {
      current: "SpaceX 等推动低成本发射与火星计划。",
      path: ["现实参考：SpaceX 等推动低成本发射与火星计划。"],
      blockers: ["深空辐射", "生命保障"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["航天", "殖民"]
  },
  {
    id: "sunshine-t0",
    name: "恒星能量采集",
    aliases: ["太阳浩劫·恒星能量采集"],
    workId: "sunshine",
    level: "L4",
    domain: "energy",
    summary: "以巨型结构包裹恒星采集其全部辐射，现实仅理论，材料与工程尺度不可及。",
    description: "太阳浩劫 中，「恒星能量采集」为核心设定之一。以巨型结构包裹恒星采集其全部辐射，现实仅理论，材料与工程尺度不可及。",
    firstPrinciples: [
      { principle: "恒星辐射收集", verdict: "breakthrough", note: "能量巨大但结构尺度超工程极限。" },
      { principle: "太空巨型结构", verdict: "breakthrough", note: "材料强度与轨道动力学难。" }
    ],
    implementation: {
      current: "仅有思想实验与 SETI 搜寻。",
      path: ["现实参考：仅有思想实验与 SETI 搜寻。"],
      blockers: ["材料强度", "尺度"],
      sopStage: "SOP-3 理论研究与建模"
    },
    dependencies: [],
    tags: ["能源", "恒星", "结构"]
  },
  {
    id: "sunshine-t1",
    name: "常驻太空与殖民航行",
    aliases: ["太阳浩劫·常驻太空与殖民航行"],
    workId: "sunshine",
    level: "L2",
    domain: "aerospace",
    summary: "人类常驻近地空间并向行星殖民，现实 ISS 与商业航天已开启，火星任务规划中。",
    description: "太阳浩劫 中，「常驻太空与殖民航行」为核心设定之一。人类常驻近地空间并向行星殖民，现实 ISS 与商业航天已开启，火星任务规划中。",
    firstPrinciples: [
      { principle: "近地空间常驻", verdict: "achieved", note: "ISS 持续载人二十余年。" },
      { principle: "行星际载人航行", verdict: "breakthrough", note: "辐射、补给与着陆仍难。" }
    ],
    implementation: {
      current: "SpaceX 等推动低成本发射与火星计划。",
      path: ["现实参考：SpaceX 等推动低成本发射与火星计划。"],
      blockers: ["深空辐射", "生命保障"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["航天", "殖民"]
  },
  {
    id: "contact-t0",
    name: "超空间/曲速航行",
    aliases: ["超时空接触·超空间/曲速航行"],
    workId: "contact",
    level: "L4",
    domain: "aerospace",
    summary: "扭曲时空泡实现跨恒星系航行，挑战相对论光速极限，需负能量与奇异物质。",
    description: "超时空接触 中，「超空间/曲速航行」为核心设定之一。扭曲时空泡实现跨恒星系航行，挑战相对论光速极限，需负能量与奇异物质。",
    firstPrinciples: [
      { principle: "时空可被几何扭曲", verdict: "achieved", note: "广义相对论证实引力即时空弯曲。" },
      { principle: "局部时空泡超光速", verdict: "breakthrough", note: "阿库别瑞度规可行但需负能量。" },
      { principle: "负能量与奇异物质", verdict: "violated", note: "已知物质均为正能量。" }
    ],
    implementation: {
      current: "仅理论数学阶段，无实验验证。",
      path: ["现实参考：仅理论数学阶段，无实验验证。"],
      blockers: ["负能量密度", "奇异物质", "因果性"],
      sopStage: "SOP-3 理论研究与建模"
    },
    dependencies: [],
    tags: ["航天", "超光速", "时空"]
  },
  {
    id: "contact-t1",
    name: "神经接口与义体增强",
    aliases: ["超时空接触·神经接口与义体增强"],
    workId: "contact",
    level: "L2",
    domain: "bio",
    summary: "脑机接口与功能性义肢，现实 Neuralink 等已实现初步意念控制与触觉反馈。",
    description: "超时空接触 中，「神经接口与义体增强」为核心设定之一。脑机接口与功能性义肢，现实 Neuralink 等已实现初步意念控制与触觉反馈。",
    firstPrinciples: [
      { principle: "神经信号读写", verdict: "achieved", note: "侵入式电极已解码运动意图。" },
      { principle: "高带宽双向接口", verdict: "breakthrough", note: "长期稳定与带宽仍瓶颈。" }
    ],
    implementation: {
      current: "Neuralink、犹他阵列等进入临床。",
      path: ["现实参考：Neuralink、犹他阵列等进入临床。"],
      blockers: ["长期生物相容", "信号带宽"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["生物", "神经", "增强"]
  },
  {
    id: "oblivion-t0",
    name: "体细胞克隆与体复制",
    aliases: ["遗落战境·体细胞克隆与体复制"],
    workId: "oblivion",
    level: "L2",
    domain: "bio",
    summary: "由体细胞培育完整个体，现实已克隆动物，人类生殖性克隆被伦理禁止。",
    description: "遗落战境 中，「体细胞克隆与体复制」为核心设定之一。由体细胞培育完整个体，现实已克隆动物，人类生殖性克隆被伦理禁止。",
    firstPrinciples: [
      { principle: "体细胞核移植", verdict: "achieved", note: "多莉羊已证实技术可行。" },
      { principle: "人类生殖性克隆", verdict: "breakthrough", note: "技术可行但伦理与发育异常受限。" }
    ],
    implementation: {
      current: "动物克隆成熟；人类克隆被国际禁止。",
      path: ["现实参考：动物克隆成熟；人类克隆被国际禁止。"],
      blockers: ["伦理限制", "表观遗传异常"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["生物", "克隆"]
  },
  {
    id: "oblivion-t1",
    name: "人体低温冬眠",
    aliases: ["遗落战境·人体低温冬眠"],
    workId: "oblivion",
    level: "L3",
    domain: "bio",
    summary: "长期安全暂停人体代谢，现实仅器官低温保存，全身可逆冬眠未实现。",
    description: "遗落战境 中，「人体低温冬眠」为核心设定之一。长期安全暂停人体代谢，现实仅器官低温保存，全身可逆冬眠未实现。",
    firstPrinciples: [
      { principle: "低温代谢抑制", verdict: "achieved", note: "器官低温灌注已可行。" },
      { principle: "全身可逆停循环", verdict: "breakthrough", note: "冰晶损伤与再灌注仍是难题。" }
    ],
    implementation: {
      current: "深部体温降低用于手术，人体冬眠未成。",
      path: ["现实参考：深部体温降低用于手术，人体冬眠未成。"],
      blockers: ["冰晶损伤", "再灌注"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["生物", "冬眠"]
  },
  {
    id: "moon-t0",
    name: "自主仿生机器人",
    aliases: ["月球·自主仿生机器人"],
    workId: "moon",
    level: "L2",
    domain: "info",
    summary: "具备感知、决策与执行能力的类人/类生物机械体，现实已在工业机器人到人形机器人演进。",
    description: "月球 中，「自主仿生机器人」为核心设定之一。具备感知、决策与执行能力的类人/类生物机械体，现实已在工业机器人到人形机器人演进。",
    firstPrinciples: [
      { principle: "机械体自主决策", verdict: "achieved", note: "现代机器人已具备感知-规划-执行闭环。" },
      { principle: "类人灵活运动", verdict: "breakthrough", note: "双足动态平衡与精细操作仍难。" }
    ],
    implementation: {
      current: "波士顿动力、特斯拉 Optimus 等已展示原型。",
      path: ["现实参考：波士顿动力、特斯拉 Optimus 等已展示原型。"],
      blockers: ["通用运动控制", "能源续航"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["信息", "机器人", "AI"]
  },
  {
    id: "moon-t1",
    name: "体细胞克隆与体复制",
    aliases: ["月球·体细胞克隆与体复制"],
    workId: "moon",
    level: "L2",
    domain: "bio",
    summary: "由体细胞培育完整个体，现实已克隆动物，人类生殖性克隆被伦理禁止。",
    description: "月球 中，「体细胞克隆与体复制」为核心设定之一。由体细胞培育完整个体，现实已克隆动物，人类生殖性克隆被伦理禁止。",
    firstPrinciples: [
      { principle: "体细胞核移植", verdict: "achieved", note: "多莉羊已证实技术可行。" },
      { principle: "人类生殖性克隆", verdict: "breakthrough", note: "技术可行但伦理与发育异常受限。" }
    ],
    implementation: {
      current: "动物克隆成熟；人类克隆被国际禁止。",
      path: ["现实参考：动物克隆成熟；人类克隆被国际禁止。"],
      blockers: ["伦理限制", "表观遗传异常"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["生物", "克隆"]
  },
  {
    id: "armageddon-t0",
    name: "行星环境改造",
    aliases: ["世界末日·行星环境改造"],
    workId: "armageddon",
    level: "L4",
    domain: "aerospace",
    summary: "将异星改造为可居环境，现实仅停留在理论建模与地球工程。",
    description: "世界末日 中，「行星环境改造」为核心设定之一。将异星改造为可居环境，现实仅停留在理论建模与地球工程。",
    firstPrinciples: [
      { principle: "大气成分工程", verdict: "breakthrough", note: "尺度与时机远超工程能力。" },
      { principle: "全球气候调控", verdict: "breakthrough", note: "地球工程仍处概念。" }
    ],
    implementation: {
      current: "仅有地球工程思想实验。",
      path: ["现实参考：仅有地球工程思想实验。"],
      blockers: ["尺度", "反馈不可控"],
      sopStage: "SOP-3 理论研究与建模"
    },
    dependencies: [],
    tags: ["航天", "改造", "生态"]
  },
  {
    id: "armageddon-t1",
    name: "文明级灾害应对",
    aliases: ["世界末日·文明级灾害应对"],
    workId: "armageddon",
    level: "L2",
    domain: "bio",
    summary: "面对全球性瘟疫、气候或天体撞击的预警与减缓，现实已有早期预警与疫苗平台。",
    description: "世界末日 中，「文明级灾害应对」为核心设定之一。面对全球性瘟疫、气候或天体撞击的预警与减缓，现实已有早期预警与疫苗平台。",
    firstPrinciples: [
      { principle: "全球监测网络", verdict: "achieved", note: "气象、疾控与天基监测已建。" },
      { principle: "快速疫苗平台", verdict: "achieved", note: "mRNA 平台数周内设计。" }
    ],
    implementation: {
      current: "预警与疫苗体系成熟，减缓能力有限。",
      path: ["现实参考：预警与疫苗体系成熟，减缓能力有限。"],
      blockers: ["响应速度", "国际协作"],
      sopStage: "SOP-1 定义与拆解"
    },
    dependencies: [],
    tags: ["生物", "灾害", "安全"]
  },
  {
    id: "snowpiercer-t0",
    name: "行星环境改造",
    aliases: ["雪国列车·行星环境改造"],
    workId: "snowpiercer",
    level: "L4",
    domain: "aerospace",
    summary: "将异星改造为可居环境，现实仅停留在理论建模与地球工程。",
    description: "雪国列车 中，「行星环境改造」为核心设定之一。将异星改造为可居环境，现实仅停留在理论建模与地球工程。",
    firstPrinciples: [
      { principle: "大气成分工程", verdict: "breakthrough", note: "尺度与时机远超工程能力。" },
      { principle: "全球气候调控", verdict: "breakthrough", note: "地球工程仍处概念。" }
    ],
    implementation: {
      current: "仅有地球工程思想实验。",
      path: ["现实参考：仅有地球工程思想实验。"],
      blockers: ["尺度", "反馈不可控"],
      sopStage: "SOP-3 理论研究与建模"
    },
    dependencies: [],
    tags: ["航天", "改造", "生态"]
  },
  {
    id: "snowpiercer-t1",
    name: "恒星能量采集",
    aliases: ["雪国列车·恒星能量采集"],
    workId: "snowpiercer",
    level: "L4",
    domain: "energy",
    summary: "以巨型结构包裹恒星采集其全部辐射，现实仅理论，材料与工程尺度不可及。",
    description: "雪国列车 中，「恒星能量采集」为核心设定之一。以巨型结构包裹恒星采集其全部辐射，现实仅理论，材料与工程尺度不可及。",
    firstPrinciples: [
      { principle: "恒星辐射收集", verdict: "breakthrough", note: "能量巨大但结构尺度超工程极限。" },
      { principle: "太空巨型结构", verdict: "breakthrough", note: "材料强度与轨道动力学难。" }
    ],
    implementation: {
      current: "仅有思想实验与 SETI 搜寻。",
      path: ["现实参考：仅有思想实验与 SETI 搜寻。"],
      blockers: ["材料强度", "尺度"],
      sopStage: "SOP-3 理论研究与建模"
    },
    dependencies: [],
    tags: ["能源", "恒星", "结构"]
  },
  {
    id: "the-day-after-tomorrow-t0",
    name: "文明级灾害应对",
    aliases: ["后天·文明级灾害应对"],
    workId: "the-day-after-tomorrow",
    level: "L2",
    domain: "bio",
    summary: "面对全球性瘟疫、气候或天体撞击的预警与减缓，现实已有早期预警与疫苗平台。",
    description: "后天 中，「文明级灾害应对」为核心设定之一。面对全球性瘟疫、气候或天体撞击的预警与减缓，现实已有早期预警与疫苗平台。",
    firstPrinciples: [
      { principle: "全球监测网络", verdict: "achieved", note: "气象、疾控与天基监测已建。" },
      { principle: "快速疫苗平台", verdict: "achieved", note: "mRNA 平台数周内设计。" }
    ],
    implementation: {
      current: "预警与疫苗体系成熟，减缓能力有限。",
      path: ["现实参考：预警与疫苗体系成熟，减缓能力有限。"],
      blockers: ["响应速度", "国际协作"],
      sopStage: "SOP-1 定义与拆解"
    },
    dependencies: [],
    tags: ["生物", "灾害", "安全"]
  },
  {
    id: "the-day-after-tomorrow-t1",
    name: "世界观基础载具与工程",
    aliases: ["后天·世界观基础载具与工程"],
    workId: "the-day-after-tomorrow",
    level: "L2",
    domain: "aerospace",
    summary: "该世界观中支撑叙事的交通与工程能力，多为现实延伸或温和推演。",
    description: "后天 中，「世界观基础载具与工程」为核心设定之一。该世界观中支撑叙事的交通与工程能力，多为现实延伸或温和推演。",
    firstPrinciples: [
      { principle: "工程能力延伸", verdict: "achieved", note: "多数载具基于现实技术推演。" },
      { principle: "极限工况突破", verdict: "breakthrough", note: "个别能力超出现实工程。" }
    ],
    implementation: {
      current: "基于现实工程路线推演。",
      path: ["现实参考：基于现实工程路线推演。"],
      blockers: ["工程极限"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["航天", "工程"]
  },
  {
    id: "2012-t0",
    name: "文明级灾害应对",
    aliases: ["2012·文明级灾害应对"],
    workId: "2012",
    level: "L2",
    domain: "bio",
    summary: "面对全球性瘟疫、气候或天体撞击的预警与减缓，现实已有早期预警与疫苗平台。",
    description: "2012 中，「文明级灾害应对」为核心设定之一。面对全球性瘟疫、气候或天体撞击的预警与减缓，现实已有早期预警与疫苗平台。",
    firstPrinciples: [
      { principle: "全球监测网络", verdict: "achieved", note: "气象、疾控与天基监测已建。" },
      { principle: "快速疫苗平台", verdict: "achieved", note: "mRNA 平台数周内设计。" }
    ],
    implementation: {
      current: "预警与疫苗体系成熟，减缓能力有限。",
      path: ["现实参考：预警与疫苗体系成熟，减缓能力有限。"],
      blockers: ["响应速度", "国际协作"],
      sopStage: "SOP-1 定义与拆解"
    },
    dependencies: [],
    tags: ["生物", "灾害", "安全"]
  },
  {
    id: "2012-t1",
    name: "世界观基础载具与工程",
    aliases: ["2012·世界观基础载具与工程"],
    workId: "2012",
    level: "L2",
    domain: "aerospace",
    summary: "该世界观中支撑叙事的交通与工程能力，多为现实延伸或温和推演。",
    description: "2012 中，「世界观基础载具与工程」为核心设定之一。该世界观中支撑叙事的交通与工程能力，多为现实延伸或温和推演。",
    firstPrinciples: [
      { principle: "工程能力延伸", verdict: "achieved", note: "多数载具基于现实技术推演。" },
      { principle: "极限工况突破", verdict: "breakthrough", note: "个别能力超出现实工程。" }
    ],
    implementation: {
      current: "基于现实工程路线推演。",
      path: ["现实参考：基于现实工程路线推演。"],
      blockers: ["工程极限"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["航天", "工程"]
  },
  {
    id: "dont-look-up-t0",
    name: "常驻太空与殖民航行",
    aliases: ["不要抬头·常驻太空与殖民航行"],
    workId: "dont-look-up",
    level: "L2",
    domain: "aerospace",
    summary: "人类常驻近地空间并向行星殖民，现实 ISS 与商业航天已开启，火星任务规划中。",
    description: "不要抬头 中，「常驻太空与殖民航行」为核心设定之一。人类常驻近地空间并向行星殖民，现实 ISS 与商业航天已开启，火星任务规划中。",
    firstPrinciples: [
      { principle: "近地空间常驻", verdict: "achieved", note: "ISS 持续载人二十余年。" },
      { principle: "行星际载人航行", verdict: "breakthrough", note: "辐射、补给与着陆仍难。" }
    ],
    implementation: {
      current: "SpaceX 等推动低成本发射与火星计划。",
      path: ["现实参考：SpaceX 等推动低成本发射与火星计划。"],
      blockers: ["深空辐射", "生命保障"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["航天", "殖民"]
  },
  {
    id: "dont-look-up-t1",
    name: "文明级灾害应对",
    aliases: ["不要抬头·文明级灾害应对"],
    workId: "dont-look-up",
    level: "L2",
    domain: "bio",
    summary: "面对全球性瘟疫、气候或天体撞击的预警与减缓，现实已有早期预警与疫苗平台。",
    description: "不要抬头 中，「文明级灾害应对」为核心设定之一。面对全球性瘟疫、气候或天体撞击的预警与减缓，现实已有早期预警与疫苗平台。",
    firstPrinciples: [
      { principle: "全球监测网络", verdict: "achieved", note: "气象、疾控与天基监测已建。" },
      { principle: "快速疫苗平台", verdict: "achieved", note: "mRNA 平台数周内设计。" }
    ],
    implementation: {
      current: "预警与疫苗体系成熟，减缓能力有限。",
      path: ["现实参考：预警与疫苗体系成熟，减缓能力有限。"],
      blockers: ["响应速度", "国际协作"],
      sopStage: "SOP-1 定义与拆解"
    },
    dependencies: [],
    tags: ["生物", "灾害", "安全"]
  },
  {
    id: "the-road-t0",
    name: "行星环境改造",
    aliases: ["长路·行星环境改造"],
    workId: "the-road",
    level: "L4",
    domain: "aerospace",
    summary: "将异星改造为可居环境，现实仅停留在理论建模与地球工程。",
    description: "长路 中，「行星环境改造」为核心设定之一。将异星改造为可居环境，现实仅停留在理论建模与地球工程。",
    firstPrinciples: [
      { principle: "大气成分工程", verdict: "breakthrough", note: "尺度与时机远超工程能力。" },
      { principle: "全球气候调控", verdict: "breakthrough", note: "地球工程仍处概念。" }
    ],
    implementation: {
      current: "仅有地球工程思想实验。",
      path: ["现实参考：仅有地球工程思想实验。"],
      blockers: ["尺度", "反馈不可控"],
      sopStage: "SOP-3 理论研究与建模"
    },
    dependencies: [],
    tags: ["航天", "改造", "生态"]
  },
  {
    id: "the-road-t1",
    name: "文明级灾害应对",
    aliases: ["长路·文明级灾害应对"],
    workId: "the-road",
    level: "L2",
    domain: "bio",
    summary: "面对全球性瘟疫、气候或天体撞击的预警与减缓，现实已有早期预警与疫苗平台。",
    description: "长路 中，「文明级灾害应对」为核心设定之一。面对全球性瘟疫、气候或天体撞击的预警与减缓，现实已有早期预警与疫苗平台。",
    firstPrinciples: [
      { principle: "全球监测网络", verdict: "achieved", note: "气象、疾控与天基监测已建。" },
      { principle: "快速疫苗平台", verdict: "achieved", note: "mRNA 平台数周内设计。" }
    ],
    implementation: {
      current: "预警与疫苗体系成熟，减缓能力有限。",
      path: ["现实参考：预警与疫苗体系成熟，减缓能力有限。"],
      blockers: ["响应速度", "国际协作"],
      sopStage: "SOP-1 定义与拆解"
    },
    dependencies: [],
    tags: ["生物", "灾害", "安全"]
  },
  {
    id: "annihilation-t0",
    name: "定向基因改造",
    aliases: ["湮灭·定向基因改造"],
    workId: "annihilation",
    level: "L1",
    domain: "bio",
    summary: "按设计修改生物基因组，现实 CRISPR 已临床编辑，定制生物仍受限。",
    description: "湮灭 中，「定向基因改造」为核心设定之一。按设计修改生物基因组，现实 CRISPR 已临床编辑，定制生物仍受限。",
    firstPrinciples: [
      { principle: "DNA 定点编辑", verdict: "achieved", note: "CRISPR-Cas9 已用于临床。" },
      { principle: "复杂多基因定制", verdict: "breakthrough", note: "多基因互作网络难精确设计。" }
    ],
    implementation: {
      current: "基因治疗与作物编辑已商用。",
      path: ["现实参考：基因治疗与作物编辑已商用。"],
      blockers: ["多基因网络", "脱靶效应"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["生物", "基因"]
  },
  {
    id: "annihilation-t1",
    name: "行星级打击武器",
    aliases: ["湮灭·行星级打击武器"],
    workId: "annihilation",
    level: "L5",
    domain: "weapon",
    summary: "可摧毁行星或改写物理常数的武器，依赖虚构能量或维度操控，现实不可及。",
    description: "湮灭 中，「行星级打击武器」为核心设定之一。可摧毁行星或改写物理常数的武器，依赖虚构能量或维度操控，现实不可及。",
    firstPrinciples: [
      { principle: "行星级能量释放", verdict: "breakthrough", note: "核武远不及摧毁行星。" },
      { principle: "维度/常数改写", verdict: "violated", note: "无物理机制。" }
    ],
    implementation: {
      current: "最大核武当量约数十兆吨，差多个数量级。",
      path: ["现实参考：最大核武当量约数十兆吨，差多个数量级。"],
      blockers: ["能量量级", "物理改写"],
      sopStage: "SOP-2 原理分析"
    },
    dependencies: [],
    tags: ["武器", "战略", "设定"]
  },
  {
    id: "inception-t0",
    name: "文明级灾害应对",
    aliases: ["盗梦空间·文明级灾害应对"],
    workId: "inception",
    level: "L2",
    domain: "bio",
    summary: "面对全球性瘟疫、气候或天体撞击的预警与减缓，现实已有早期预警与疫苗平台。",
    description: "盗梦空间 中，「文明级灾害应对」为核心设定之一。面对全球性瘟疫、气候或天体撞击的预警与减缓，现实已有早期预警与疫苗平台。",
    firstPrinciples: [
      { principle: "全球监测网络", verdict: "achieved", note: "气象、疾控与天基监测已建。" },
      { principle: "快速疫苗平台", verdict: "achieved", note: "mRNA 平台数周内设计。" }
    ],
    implementation: {
      current: "预警与疫苗体系成熟，减缓能力有限。",
      path: ["现实参考：预警与疫苗体系成熟，减缓能力有限。"],
      blockers: ["响应速度", "国际协作"],
      sopStage: "SOP-1 定义与拆解"
    },
    dependencies: [],
    tags: ["生物", "灾害", "安全"]
  },
  {
    id: "inception-t1",
    name: "世界观基础载具与工程",
    aliases: ["盗梦空间·世界观基础载具与工程"],
    workId: "inception",
    level: "L2",
    domain: "aerospace",
    summary: "该世界观中支撑叙事的交通与工程能力，多为现实延伸或温和推演。",
    description: "盗梦空间 中，「世界观基础载具与工程」为核心设定之一。该世界观中支撑叙事的交通与工程能力，多为现实延伸或温和推演。",
    firstPrinciples: [
      { principle: "工程能力延伸", verdict: "achieved", note: "多数载具基于现实技术推演。" },
      { principle: "极限工况突破", verdict: "breakthrough", note: "个别能力超出现实工程。" }
    ],
    implementation: {
      current: "基于现实工程路线推演。",
      path: ["现实参考：基于现实工程路线推演。"],
      blockers: ["工程极限"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["航天", "工程"]
  },
  {
    id: "paprika-t0",
    name: "世界观基础载具与工程",
    aliases: ["红辣椒·世界观基础载具与工程"],
    workId: "paprika",
    level: "L2",
    domain: "aerospace",
    summary: "该世界观中支撑叙事的交通与工程能力，多为现实延伸或温和推演。",
    description: "红辣椒 中，「世界观基础载具与工程」为核心设定之一。该世界观中支撑叙事的交通与工程能力，多为现实延伸或温和推演。",
    firstPrinciples: [
      { principle: "工程能力延伸", verdict: "achieved", note: "多数载具基于现实技术推演。" },
      { principle: "极限工况突破", verdict: "breakthrough", note: "个别能力超出现实工程。" }
    ],
    implementation: {
      current: "基于现实工程路线推演。",
      path: ["现实参考：基于现实工程路线推演。"],
      blockers: ["工程极限"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["航天", "工程"]
  },
  {
    id: "paprika-t1",
    name: "信息与社会技术",
    aliases: ["红辣椒·信息与社会技术"],
    workId: "paprika",
    level: "L1",
    domain: "info",
    summary: "该世界观中的通信、计算与社会治理技术，现实多已具备雏形。",
    description: "红辣椒 中，「信息与社会技术」为核心设定之一。该世界观中的通信、计算与社会治理技术，现实多已具备雏形。",
    firstPrinciples: [
      { principle: "信息互联互通", verdict: "achieved", note: "网络与计算已普及。" },
      { principle: "社会治理数字化", verdict: "achieved", note: "数据化治理已应用。" }
    ],
    implementation: {
      current: "现实信息技术直接对应。",
      path: ["现实参考：现实信息技术直接对应。"],
      blockers: ["隐私与伦理"],
      sopStage: "SOP-1 定义与拆解"
    },
    dependencies: [],
    tags: ["信息", "社会"]
  },
  {
    id: "ready-player-one-t0",
    name: "全沉浸虚拟世界",
    aliases: ["头号玩家·全沉浸虚拟世界"],
    workId: "ready-player-one",
    level: "L3",
    domain: "info",
    summary: "感官级带宽的仿真现实，意识难以分辨真伪，现实 VR 仅视觉听觉且粗糙。",
    description: "头号玩家 中，「全沉浸虚拟世界」为核心设定之一。感官级带宽的仿真现实，意识难以分辨真伪，现实 VR 仅视觉听觉且粗糙。",
    firstPrinciples: [
      { principle: "感官级仿真", verdict: "breakthrough", note: "需全感官高带宽神经接口。" },
      { principle: "意识难以分辨", verdict: "breakthrough", note: "需完整感知替代。" }
    ],
    implementation: {
      current: "VR/AR 仅视觉听觉，沉浸度有限。",
      path: ["现实参考：VR/AR 仅视觉听觉，沉浸度有限。"],
      blockers: ["神经带宽", "渲染真实感"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["信息", "虚拟", "仿真"]
  },
  {
    id: "ready-player-one-t1",
    name: "世界观基础载具与工程",
    aliases: ["头号玩家·世界观基础载具与工程"],
    workId: "ready-player-one",
    level: "L2",
    domain: "aerospace",
    summary: "该世界观中支撑叙事的交通与工程能力，多为现实延伸或温和推演。",
    description: "头号玩家 中，「世界观基础载具与工程」为核心设定之一。该世界观中支撑叙事的交通与工程能力，多为现实延伸或温和推演。",
    firstPrinciples: [
      { principle: "工程能力延伸", verdict: "achieved", note: "多数载具基于现实技术推演。" },
      { principle: "极限工况突破", verdict: "breakthrough", note: "个别能力超出现实工程。" }
    ],
    implementation: {
      current: "基于现实工程路线推演。",
      path: ["现实参考：基于现实工程路线推演。"],
      blockers: ["工程极限"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["航天", "工程"]
  },
  {
    id: "upload-t0",
    name: "全沉浸虚拟世界",
    aliases: ["上载新生·全沉浸虚拟世界"],
    workId: "upload",
    level: "L3",
    domain: "info",
    summary: "感官级带宽的仿真现实，意识难以分辨真伪，现实 VR 仅视觉听觉且粗糙。",
    description: "上载新生 中，「全沉浸虚拟世界」为核心设定之一。感官级带宽的仿真现实，意识难以分辨真伪，现实 VR 仅视觉听觉且粗糙。",
    firstPrinciples: [
      { principle: "感官级仿真", verdict: "breakthrough", note: "需全感官高带宽神经接口。" },
      { principle: "意识难以分辨", verdict: "breakthrough", note: "需完整感知替代。" }
    ],
    implementation: {
      current: "VR/AR 仅视觉听觉，沉浸度有限。",
      path: ["现实参考：VR/AR 仅视觉听觉，沉浸度有限。"],
      blockers: ["神经带宽", "渲染真实感"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["信息", "虚拟", "仿真"]
  },
  {
    id: "upload-t1",
    name: "世界观基础载具与工程",
    aliases: ["上载新生·世界观基础载具与工程"],
    workId: "upload",
    level: "L2",
    domain: "aerospace",
    summary: "该世界观中支撑叙事的交通与工程能力，多为现实延伸或温和推演。",
    description: "上载新生 中，「世界观基础载具与工程」为核心设定之一。该世界观中支撑叙事的交通与工程能力，多为现实延伸或温和推演。",
    firstPrinciples: [
      { principle: "工程能力延伸", verdict: "achieved", note: "多数载具基于现实技术推演。" },
      { principle: "极限工况突破", verdict: "breakthrough", note: "个别能力超出现实工程。" }
    ],
    implementation: {
      current: "基于现实工程路线推演。",
      path: ["现实参考：基于现实工程路线推演。"],
      blockers: ["工程极限"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["航天", "工程"]
  },
  {
    id: "black-mirror-t0",
    name: "超空间/曲速航行",
    aliases: ["黑镜·超空间/曲速航行"],
    workId: "black-mirror",
    level: "L4",
    domain: "aerospace",
    summary: "扭曲时空泡实现跨恒星系航行，挑战相对论光速极限，需负能量与奇异物质。",
    description: "黑镜 中，「超空间/曲速航行」为核心设定之一。扭曲时空泡实现跨恒星系航行，挑战相对论光速极限，需负能量与奇异物质。",
    firstPrinciples: [
      { principle: "时空可被几何扭曲", verdict: "achieved", note: "广义相对论证实引力即时空弯曲。" },
      { principle: "局部时空泡超光速", verdict: "breakthrough", note: "阿库别瑞度规可行但需负能量。" },
      { principle: "负能量与奇异物质", verdict: "violated", note: "已知物质均为正能量。" }
    ],
    implementation: {
      current: "仅理论数学阶段，无实验验证。",
      path: ["现实参考：仅理论数学阶段，无实验验证。"],
      blockers: ["负能量密度", "奇异物质", "因果性"],
      sopStage: "SOP-3 理论研究与建模"
    },
    dependencies: [],
    tags: ["航天", "超光速", "时空"]
  },
  {
    id: "black-mirror-t1",
    name: "体细胞克隆与体复制",
    aliases: ["黑镜·体细胞克隆与体复制"],
    workId: "black-mirror",
    level: "L2",
    domain: "bio",
    summary: "由体细胞培育完整个体，现实已克隆动物，人类生殖性克隆被伦理禁止。",
    description: "黑镜 中，「体细胞克隆与体复制」为核心设定之一。由体细胞培育完整个体，现实已克隆动物，人类生殖性克隆被伦理禁止。",
    firstPrinciples: [
      { principle: "体细胞核移植", verdict: "achieved", note: "多莉羊已证实技术可行。" },
      { principle: "人类生殖性克隆", verdict: "breakthrough", note: "技术可行但伦理与发育异常受限。" }
    ],
    implementation: {
      current: "动物克隆成熟；人类克隆被国际禁止。",
      path: ["现实参考：动物克隆成熟；人类克隆被国际禁止。"],
      blockers: ["伦理限制", "表观遗传异常"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["生物", "克隆"]
  },
  {
    id: "akira-t0",
    name: "原力式念力干预",
    aliases: ["阿基拉·原力式念力干预"],
    workId: "akira",
    level: "L5",
    domain: "bio",
    summary: "以意志移物、控制心智与预知未来，无已知物理机制，属魔法式设定。",
    description: "阿基拉 中，「原力式念力干预」为核心设定之一。以意志移物、控制心智与预知未来，无已知物理机制，属魔法式设定。",
    firstPrinciples: [
      { principle: "意识直接作用于物质", verdict: "violated", note: "无物理载体传递念力。" },
      { principle: "预知未来", verdict: "violated", note: "因果律下未来不可定域观测。" }
    ],
    implementation: {
      current: "现实仅有脑机接口层面的微弱控制。",
      path: ["现实参考：现实仅有脑机接口层面的微弱控制。"],
      blockers: ["无物理机制", "违反因果"],
      sopStage: "SOP-2 原理分析"
    },
    dependencies: [],
    tags: ["生物", "超能力", "设定"]
  },
  {
    id: "akira-t1",
    name: "世界观基础载具与工程",
    aliases: ["阿基拉·世界观基础载具与工程"],
    workId: "akira",
    level: "L2",
    domain: "aerospace",
    summary: "该世界观中支撑叙事的交通与工程能力，多为现实延伸或温和推演。",
    description: "阿基拉 中，「世界观基础载具与工程」为核心设定之一。该世界观中支撑叙事的交通与工程能力，多为现实延伸或温和推演。",
    firstPrinciples: [
      { principle: "工程能力延伸", verdict: "achieved", note: "多数载具基于现实技术推演。" },
      { principle: "极限工况突破", verdict: "breakthrough", note: "个别能力超出现实工程。" }
    ],
    implementation: {
      current: "基于现实工程路线推演。",
      path: ["现实参考：基于现实工程路线推演。"],
      blockers: ["工程极限"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["航天", "工程"]
  },
  {
    id: "evangelion-t0",
    name: "自主仿生机器人",
    aliases: ["新世纪福音战士·自主仿生机器人"],
    workId: "evangelion",
    level: "L2",
    domain: "info",
    summary: "具备感知、决策与执行能力的类人/类生物机械体，现实已在工业机器人到人形机器人演进。",
    description: "新世纪福音战士 中，「自主仿生机器人」为核心设定之一。具备感知、决策与执行能力的类人/类生物机械体，现实已在工业机器人到人形机器人演进。",
    firstPrinciples: [
      { principle: "机械体自主决策", verdict: "achieved", note: "现代机器人已具备感知-规划-执行闭环。" },
      { principle: "类人灵活运动", verdict: "breakthrough", note: "双足动态平衡与精细操作仍难。" }
    ],
    implementation: {
      current: "波士顿动力、特斯拉 Optimus 等已展示原型。",
      path: ["现实参考：波士顿动力、特斯拉 Optimus 等已展示原型。"],
      blockers: ["通用运动控制", "能源续航"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["信息", "机器人", "AI"]
  },
  {
    id: "evangelion-t1",
    name: "世界观基础载具与工程",
    aliases: ["新世纪福音战士·世界观基础载具与工程"],
    workId: "evangelion",
    level: "L2",
    domain: "aerospace",
    summary: "该世界观中支撑叙事的交通与工程能力，多为现实延伸或温和推演。",
    description: "新世纪福音战士 中，「世界观基础载具与工程」为核心设定之一。该世界观中支撑叙事的交通与工程能力，多为现实延伸或温和推演。",
    firstPrinciples: [
      { principle: "工程能力延伸", verdict: "achieved", note: "多数载具基于现实技术推演。" },
      { principle: "极限工况突破", verdict: "breakthrough", note: "个别能力超出现实工程。" }
    ],
    implementation: {
      current: "基于现实工程路线推演。",
      path: ["现实参考：基于现实工程路线推演。"],
      blockers: ["工程极限"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["航天", "工程"]
  },
  {
    id: "cowboy-bebop-t0",
    name: "定向基因改造",
    aliases: ["星际牛仔·定向基因改造"],
    workId: "cowboy-bebop",
    level: "L1",
    domain: "bio",
    summary: "按设计修改生物基因组，现实 CRISPR 已临床编辑，定制生物仍受限。",
    description: "星际牛仔 中，「定向基因改造」为核心设定之一。按设计修改生物基因组，现实 CRISPR 已临床编辑，定制生物仍受限。",
    firstPrinciples: [
      { principle: "DNA 定点编辑", verdict: "achieved", note: "CRISPR-Cas9 已用于临床。" },
      { principle: "复杂多基因定制", verdict: "breakthrough", note: "多基因互作网络难精确设计。" }
    ],
    implementation: {
      current: "基因治疗与作物编辑已商用。",
      path: ["现实参考：基因治疗与作物编辑已商用。"],
      blockers: ["多基因网络", "脱靶效应"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["生物", "基因"]
  },
  {
    id: "cowboy-bebop-t1",
    name: "行星环境改造",
    aliases: ["星际牛仔·行星环境改造"],
    workId: "cowboy-bebop",
    level: "L4",
    domain: "aerospace",
    summary: "将异星改造为可居环境，现实仅停留在理论建模与地球工程。",
    description: "星际牛仔 中，「行星环境改造」为核心设定之一。将异星改造为可居环境，现实仅停留在理论建模与地球工程。",
    firstPrinciples: [
      { principle: "大气成分工程", verdict: "breakthrough", note: "尺度与时机远超工程能力。" },
      { principle: "全球气候调控", verdict: "breakthrough", note: "地球工程仍处概念。" }
    ],
    implementation: {
      current: "仅有地球工程思想实验。",
      path: ["现实参考：仅有地球工程思想实验。"],
      blockers: ["尺度", "反馈不可控"],
      sopStage: "SOP-3 理论研究与建模"
    },
    dependencies: [],
    tags: ["航天", "改造", "生态"]
  },
  {
    id: "nausicaa-t0",
    name: "行星环境改造",
    aliases: ["风之谷·行星环境改造"],
    workId: "nausicaa",
    level: "L4",
    domain: "aerospace",
    summary: "将异星改造为可居环境，现实仅停留在理论建模与地球工程。",
    description: "风之谷 中，「行星环境改造」为核心设定之一。将异星改造为可居环境，现实仅停留在理论建模与地球工程。",
    firstPrinciples: [
      { principle: "大气成分工程", verdict: "breakthrough", note: "尺度与时机远超工程能力。" },
      { principle: "全球气候调控", verdict: "breakthrough", note: "地球工程仍处概念。" }
    ],
    implementation: {
      current: "仅有地球工程思想实验。",
      path: ["现实参考：仅有地球工程思想实验。"],
      blockers: ["尺度", "反馈不可控"],
      sopStage: "SOP-3 理论研究与建模"
    },
    dependencies: [],
    tags: ["航天", "改造", "生态"]
  },
  {
    id: "nausicaa-t1",
    name: "世界观基础载具与工程",
    aliases: ["风之谷·世界观基础载具与工程"],
    workId: "nausicaa",
    level: "L2",
    domain: "aerospace",
    summary: "该世界观中支撑叙事的交通与工程能力，多为现实延伸或温和推演。",
    description: "风之谷 中，「世界观基础载具与工程」为核心设定之一。该世界观中支撑叙事的交通与工程能力，多为现实延伸或温和推演。",
    firstPrinciples: [
      { principle: "工程能力延伸", verdict: "achieved", note: "多数载具基于现实技术推演。" },
      { principle: "极限工况突破", verdict: "breakthrough", note: "个别能力超出现实工程。" }
    ],
    implementation: {
      current: "基于现实工程路线推演。",
      path: ["现实参考：基于现实工程路线推演。"],
      blockers: ["工程极限"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["航天", "工程"]
  }
];
// 合并进主 TECHS（techs.js 已先声明 const TECHS，后续脚本可读其引用并 push）
if (typeof TECHS !== 'undefined') { TECHS.push(...TECHS_EXTRA); }
