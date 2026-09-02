// ============================================================
// 真实世界历史演进 · 基础技能包科技（17 条）
// 每个现实阶段的核心技术，跨阶段 dependencies 串成"演进逻辑链"主轴：
// 石器→冶金→蒸汽→电力→电网→半导体→互联网→机器学习→大模型/机器人
// 全部 level=L1（现实已实现），firstPrinciples 判定为 achieved。
// 由 techs-real.js 在 techs.js 之后加载并执行 TECHS.push(...) 合并。
// ============================================================
const TECHS_REAL = [
  {
    id: "primordial-earth-stone-tool",
    name: "打制石器",
    aliases: ["原始地球·打制石器"],
    workId: "primordial-earth",
    level: "L1",
    domain: "material",
    summary: "以硬物敲击石核剥取锋利石片，人类最早改变物质形态的技术。",
    description: "奥杜威石器代表人类首次系统性改造自然物：敲击燧石获得刃口，用于切割与狩猎。它把\"工具\"从偶然变为必然，是材料操控的起点。",
    firstPrinciples: [
      { principle: "敲击剥取锋利石片", verdict: "achieved", note: "考古证据确凿，旧石器早期已普及。" },
      { principle: "有意识地预设形态", verdict: "achieved", note: "预设形态的打制需空间认知与计划能力。" }
    ],
    implementation: {
      current: "现实已实现并规模应用，属 L1 已实现技术。",
      path: ["现实参考：该技术已在现实工业/社会中成熟部署。"],
      blockers: [],
      sopStage: "SOP-1 定义与拆解"
    },
    dependencies: [],
    tags: ["材料", "石器", "史前"]
  },
  {
    id: "primordial-earth-foraging",
    name: "采集狩猎生计",
    aliases: ["原始地球·采集狩猎生计"],
    workId: "primordial-earth",
    level: "L1",
    domain: "bio",
    summary: "依赖对动植物习性的观察组织觅食，是最早的\"复杂系统\"管理。",
    description: "旧石器群体通过口传与观察积累生态知识，按季节与兽群迁徙组织狩猎采集，构成了人类最早的信息与协作系统。",
    firstPrinciples: [
      { principle: "对生态规律的观察利用", verdict: "achieved", note: "经验性生态知识早已具备。" },
      { principle: "群体协作狩猎", verdict: "achieved", note: "围猎需要分工与信号。" }
    ],
    implementation: {
      current: "现实已实现并规模应用，属 L1 已实现技术。",
      path: ["现实参考：该技术已在现实工业/社会中成熟部署。"],
      blockers: [],
      sopStage: "SOP-1 定义与拆解"
    },
    dependencies: [],
    tags: ["生物", "生计", "协作"]
  },
  {
    id: "stone-age-fire",
    name: "稳定人工取火",
    aliases: ["石器时代·稳定人工取火"],
    workId: "stone-age",
    level: "L1",
    domain: "energy",
    summary: "通过击石取火或钻木保留火种，将化学能首次稳定掌控。",
    description: "用火是人类掌握的第一种可控能量转换：取暖、驱兽、烹煮使食物能量更易吸收，脑容量随之扩张。它是后来一切热力学技术的原型。",
    firstPrinciples: [
      { principle: "化学能释放与控制", verdict: "achieved", note: "燃烧化学已被完全理解。" },
      { principle: "火种保存与传播", verdict: "achieved", note: "旧石器晚期已普遍。" }
    ],
    implementation: {
      current: "现实已实现并规模应用，属 L1 已实现技术。",
      path: ["现实参考：该技术已在现实工业/社会中成熟部署。"],
      blockers: [],
      sopStage: "SOP-1 定义与拆解"
    },
    dependencies: [],
    tags: ["能源", "火", "史前"]
  },
  {
    id: "stone-age-polished-stone",
    name: "磨制石器与复合工具",
    aliases: ["石器时代·磨制石器与复合工具"],
    workId: "stone-age",
    level: "L1",
    domain: "material",
    summary: "研磨使石器规整锋利，并将石、木、骨、弦组合成弓箭等复合工具。",
    description: "新石器磨制技术提升工具寿命与精度；弓箭把弹性势能储存—释放，是史上第一件\"机械\"。复合工具要求跨材料装配思维。",
    firstPrinciples: [
      { principle: "研磨提高刃口规整度", verdict: "achieved", note: "物理与工艺成熟。" },
      { principle: "跨材料装配(弓箭)", verdict: "achieved", note: "弹性势能利用已实践。" }
    ],
    implementation: {
      current: "现实已实现并规模应用，属 L1 已实现技术。",
      path: ["现实参考：该技术已在现实工业/社会中成熟部署。"],
      blockers: [],
      sopStage: "SOP-1 定义与拆解"
    },
    dependencies: ["primordial-earth-stone-tool"],
    tags: ["材料", "复合工具", "史前"]
  },
  {
    id: "stone-age-agriculture",
    name: "农业与定居",
    aliases: ["石器时代·农业与定居"],
    workId: "stone-age",
    level: "L1",
    domain: "bio",
    summary: "驯化作物与牲畜，从游徙转向定居，盈余粮食支撑人口与分工。",
    description: "新石器革命以选择性育种固定高产性状，定居村落出现，剩余产能孕育手工业与阶层。这是文明复杂度跃升的前提。",
    firstPrinciples: [
      { principle: "选择性育种固定性状", verdict: "achieved", note: "遗传改良已规模应用。" },
      { principle: "定居支撑分工", verdict: "achieved", note: "剩余粮食催生专业分工。" }
    ],
    implementation: {
      current: "现实已实现并规模应用，属 L1 已实现技术。",
      path: ["现实参考：该技术已在现实工业/社会中成熟部署。"],
      blockers: [],
      sopStage: "SOP-1 定义与拆解"
    },
    dependencies: ["stone-age-polished-stone"],
    tags: ["生物", "农业", "文明"]
  },
  {
    id: "firearms-age-metallurgy",
    name: "冶金与钢铁",
    aliases: ["火器时代·冶金与钢铁"],
    workId: "firearms-age",
    level: "L1",
    domain: "material",
    summary: "从矿石还原金属并控碳成钢，结构材料的强度台阶式跃升。",
    description: "高炉与炒钢法使铁器廉价普及，刀剑、农具、机械零件皆赖于此。冶金是后续所有机器的材料前提。",
    firstPrinciples: [
      { principle: "还原冶炼提取金属", verdict: "achieved", note: "高炉冶金已工业化。" },
      { principle: "控碳成钢", verdict: "achieved", note: "现代冶金精确控碳。" }
    ],
    implementation: {
      current: "现实已实现并规模应用，属 L1 已实现技术。",
      path: ["现实参考：该技术已在现实工业/社会中成熟部署。"],
      blockers: [],
      sopStage: "SOP-1 定义与拆解"
    },
    dependencies: ["stone-age-polished-stone"],
    tags: ["材料", "冶金", "钢铁"]
  },
  {
    id: "firearms-age-gunpowder",
    name: "黑火药与火器",
    aliases: ["火器时代·黑火药与火器"],
    workId: "firearms-age",
    level: "L1",
    domain: "weapon",
    summary: "硝石—硫—碳配方以急速燃气推动弹丸，化学能直接转化为抛射动能。",
    description: "火绳枪到滑膛炮，黑火药把化学能释放速度推向毫秒级，战争从冷兵器肉搏转为火药抛射，并倒逼标准化零件制造。",
    firstPrinciples: [
      { principle: "快速燃气做功", verdict: "achieved", note: "内弹道学已精确建模。" },
      { principle: "标准化零件制造", verdict: "achieved", note: "火器量产催生互换件思想。" }
    ],
    implementation: {
      current: "现实已实现并规模应用，属 L1 已实现技术。",
      path: ["现实参考：该技术已在现实工业/社会中成熟部署。"],
      blockers: [],
      sopStage: "SOP-1 定义与拆解"
    },
    dependencies: ["firearms-age-metallurgy"],
    tags: ["武器", "火药", "化学"]
  },
  {
    id: "industrial-1-steam-steam-engine",
    name: "往复蒸汽机",
    aliases: ["工业革命 I（蒸汽）·往复蒸汽机"],
    workId: "industrial-1-steam",
    level: "L1",
    domain: "energy",
    summary: "锅炉产生高压蒸汽推动活塞做功，热能首次被稳定转为连续机械功。",
    description: "纽科门—瓦特蒸汽机以分离冷凝器大幅提升效率，驱动矿井排水、纺织机与机车。它是热力学与第一台通用动力机的结合。",
    firstPrinciples: [
      { principle: "热能转机械功", verdict: "achieved", note: "热机工程已高度成熟。" },
      { principle: "连续稳定输出", verdict: "achieved", note: "往复—旋转转换可靠。" }
    ],
    implementation: {
      current: "现实已实现并规模应用，属 L1 已实现技术。",
      path: ["现实参考：该技术已在现实工业/社会中成熟部署。"],
      blockers: [],
      sopStage: "SOP-1 定义与拆解"
    },
    dependencies: ["firearms-age-metallurgy"],
    tags: ["能源", "蒸汽", "热机"]
  },
  {
    id: "industrial-1-steam-coke-iron",
    name: "焦炭炼铁与机械机床",
    aliases: ["工业革命 I（蒸汽）·焦炭炼铁与机械机床"],
    workId: "industrial-1-steam",
    level: "L1",
    domain: "material",
    summary: "焦炭替代木炭炼铁，配合镗床等机床实现零件高精度互换。",
    description: "焦炭高炉提供廉价生铁，机床工业使零件可互换、可量产，机械制造业由此成型，是蒸汽机大规模铺开的物质基础。",
    firstPrinciples: [
      { principle: "焦炭高炉冶炼", verdict: "achieved", note: "现代高炉日产万吨。" },
      { principle: "高精度可互换零件", verdict: "achieved", note: "公差与量具体系成熟。" }
    ],
    implementation: {
      current: "现实已实现并规模应用，属 L1 已实现技术。",
      path: ["现实参考：该技术已在现实工业/社会中成熟部署。"],
      blockers: [],
      sopStage: "SOP-1 定义与拆解"
    },
    dependencies: ["firearms-age-metallurgy"],
    tags: ["材料", "冶金", "制造"]
  },
  {
    id: "industrial-2-electric-generator",
    name: "发电机与电动机",
    aliases: ["工业革命 II（电力）·发电机与电动机"],
    workId: "industrial-2-electric",
    level: "L1",
    domain: "energy",
    summary: "法拉第电磁感应实现机械—电能转换，动力首次可远程传输与复用。",
    description: "发电机把旋转功转为电流，电动机反向还原，二者解耦了\"能源产生\"与\"能源使用\"，奠定电气化社会。",
    firstPrinciples: [
      { principle: "电磁感应发电", verdict: "achieved", note: "电机工程极成熟。" },
      { principle: "电能远程配送", verdict: "achieved", note: "输电线路遍布全球。" }
    ],
    implementation: {
      current: "现实已实现并规模应用，属 L1 已实现技术。",
      path: ["现实参考：该技术已在现实工业/社会中成熟部署。"],
      blockers: [],
      sopStage: "SOP-1 定义与拆解"
    },
    dependencies: ["industrial-1-steam-steam-engine"],
    tags: ["能源", "电力", "电磁"]
  },
  {
    id: "industrial-2-electric-grid",
    name: "电网与配电",
    aliases: ["工业革命 II（电力）·电网与配电"],
    workId: "industrial-2-electric",
    level: "L1",
    domain: "energy",
    summary: "同步电网把集中发电分配到终端，功率可跨城调配、互为备用。",
    description: "交流输电与变压器解决长途低压损耗，电网成为现代文明的中枢神经系统，一切电气设备的前提。",
    firstPrinciples: [
      { principle: "交流变压长途输电", verdict: "achieved", note: "输电网已全球互联。" },
      { principle: "负荷调度与稳定", verdict: "achieved", note: "电网控制理论成熟。" }
    ],
    implementation: {
      current: "现实已实现并规模应用，属 L1 已实现技术。",
      path: ["现实参考：该技术已在现实工业/社会中成熟部署。"],
      blockers: [],
      sopStage: "SOP-1 定义与拆解"
    },
    dependencies: ["industrial-2-electric-generator"],
    tags: ["能源", "电网", "基础设施"]
  },
  {
    id: "industrial-2-electric-combustion",
    name: "内燃机",
    aliases: ["工业革命 II（电力）·内燃机"],
    workId: "industrial-2-electric",
    level: "L1",
    domain: "energy",
    summary: "燃料在缸内爆燃直接驱动活塞，给车辆与飞行器提供高功率密度移动动力。",
    description: "奥托/柴油循环把石油化学能转为轴功，功率密度远超外燃机，汽车、飞机、农机皆赖于此，深刻重塑城市与地缘。",
    firstPrinciples: [
      { principle: "缸内爆燃做功", verdict: "achieved", note: "内燃机效率与排放已精细优化。" },
      { principle: "高功率密度移动动力", verdict: "achieved", note: "交通运输全面内燃化。" }
    ],
    implementation: {
      current: "现实已实现并规模应用，属 L1 已实现技术。",
      path: ["现实参考：该技术已在现实工业/社会中成熟部署。"],
      blockers: [],
      sopStage: "SOP-1 定义与拆解"
    },
    dependencies: ["firearms-age-metallurgy"],
    tags: ["能源", "内燃", "交通"]
  },
  {
    id: "industrial-3-network-semiconductor",
    name: "半导体与集成电路",
    aliases: ["工业革命 III（网络）·半导体与集成电路"],
    workId: "industrial-3-network",
    level: "L1",
    domain: "material",
    summary: "在硅上以光刻定义晶体管，把开关与逻辑缩到微米纳米尺度。",
    description: "晶体管替代真空管，集成电路以指数密度集成功能，摩尔定律驱动算力成本塌方，是一切信息设备的物理底座。",
    firstPrinciples: [
      { principle: "半导体可控开关", verdict: "achieved", note: "CMOS 工艺已至纳米级。" },
      { principle: "光刻微缩集成", verdict: "achieved", note: "EUV 光刻逼近原子尺度。" }
    ],
    implementation: {
      current: "现实已实现并规模应用，属 L1 已实现技术。",
      path: ["现实参考：该技术已在现实工业/社会中成熟部署。"],
      blockers: [],
      sopStage: "SOP-1 定义与拆解"
    },
    dependencies: ["industrial-2-electric-grid"],
    tags: ["材料", "半导体", "微电子"]
  },
  {
    id: "industrial-3-network-internet",
    name: "互联网与移动通信",
    aliases: ["工业革命 III（网络）·互联网与移动通信"],
    workId: "industrial-3-network",
    level: "L1",
    domain: "info",
    summary: "分组交换把全球终端连成可寻址网络，信息近乎零成本全球流动。",
    description: "TCP/IP 与光纤/无线把计算、存储与人都接入同一张网，平台经济与远程协作成为可能，信息生产成本骤降。",
    firstPrinciples: [
      { principle: "分组交换寻址", verdict: "achieved", note: "互联网协议全球统一。" },
      { principle: "全球低延迟互联", verdict: "achieved", note: "海底光缆与蜂窝网覆盖。" }
    ],
    implementation: {
      current: "现实已实现并规模应用，属 L1 已实现技术。",
      path: ["现实参考：该技术已在现实工业/社会中成熟部署。"],
      blockers: [],
      sopStage: "SOP-1 定义与拆解"
    },
    dependencies: ["industrial-3-network-semiconductor"],
    tags: ["信息", "网络", "互联网"]
  },
  {
    id: "industrial-4-ai-ml",
    name: "机器学习与神经网络",
    aliases: ["工业革命 IV（智能）·机器学习与神经网络"],
    workId: "industrial-4-ai",
    level: "L1",
    domain: "info",
    summary: "以梯度下降从数据中拟合函数，使系统自主习得识别与决策能力。",
    description: "反向传播与海量数据让深度网络在视觉、语音、语言上超越人工规则，是统计学习而非符号逻辑的范式转移。",
    firstPrinciples: [
      { principle: "从数据拟合函数", verdict: "achieved", note: "深度学习已规模落地。" },
      { principle: "自主习得表征", verdict: "achieved", note: "表征学习替代人工特征。" }
    ],
    implementation: {
      current: "现实已实现并规模应用，属 L1 已实现技术。",
      path: ["现实参考：该技术已在现实工业/社会中成熟部署。"],
      blockers: [],
      sopStage: "SOP-1 定义与拆解"
    },
    dependencies: ["industrial-3-network-internet"],
    tags: ["信息", "AI", "机器学习"]
  },
  {
    id: "industrial-4-ai-llm",
    name: "大语言模型",
    aliases: ["工业革命 IV（智能）·大语言模型"],
    workId: "industrial-4-ai",
    level: "L1",
    domain: "info",
    summary: "以自监督在巨量文本上预训练，获得跨任务的语言理解与生成能力。",
    description: "Transformer 以规模涌现推理与工具使用，把知识压缩进参数，成为可对话、可编排的通用认知接口，重塑信息与创作生产。",
    firstPrinciples: [
      { principle: "自监督语言建模", verdict: "achieved", note: "大模型已商用。" },
      { principle: "规模涌现能力", verdict: "achieved", note: "参数与数据规模驱动能力跃迁。" }
    ],
    implementation: {
      current: "现实已实现并规模应用，属 L1 已实现技术。",
      path: ["现实参考：该技术已在现实工业/社会中成熟部署。"],
      blockers: [],
      sopStage: "SOP-1 定义与拆解"
    },
    dependencies: ["industrial-4-ai-ml"],
    tags: ["信息", "AI", "大模型"]
  },
  {
    id: "industrial-4-ai-robot",
    name: "自主机器人与自动化",
    aliases: ["工业革命 IV（智能）·自主机器人与自动化"],
    workId: "industrial-4-ai",
    level: "L1",
    domain: "info",
    summary: "感知—规划—执行的闭环在物理世界落地，认知劳动之外接管操作任务。",
    description: "结合机器学习与精密执行器，机器人从固定产线走向柔性操作，工业、物流与服务场景的自动化加速，是智能向物理世界的延伸。",
    firstPrinciples: [
      { principle: "感知—决策—执行闭环", verdict: "achieved", note: "工业机器人已百万级部署。" },
      { principle: "柔性操作", verdict: "breakthrough", note: "通用操作仍难，但快速进展。" }
    ],
    implementation: {
      current: "现实已实现并规模应用，属 L1 已实现技术。",
      path: ["现实参考：该技术已在现实工业/社会中成熟部署。"],
      blockers: [],
      sopStage: "SOP-1 定义与拆解"
    },
    dependencies: ["industrial-4-ai-ml"],
    tags: ["信息", "机器人", "自动化"]
  }
];
if (typeof TECHS !== 'undefined') { TECHS.push(...TECHS_REAL); }
