// ============================================================
// 中间技术（关键瓶颈）目录
// 介于「现有技术」与「目标科幻技术」之间、必须逐个攻克的关键子技术/瓶颈。
// 详情页「实现路径-关键瓶颈」会链接到此；#/midtech 统一收纳管理全站所有瓶颈。
// status：已实现雏形 / 进行中 / 理论阶段 / 未突破 / 伪科学未证实
// related：依赖本中间技术的科技 id（用于反向跳转）
// ============================================================
const MIDTECHS = [
  // —— 聚变分支（同一目标的子瓶颈，分别管理）——
  {
    id: "mag-confinement",
    name: "等离子体磁约束",
    aliases: ["等离子体约束时长", "约束时长", "磁约束"],
    domain: "energy",
    status: "进行中",
    summary: "用强磁场将上亿度等离子体长时间约束在真空室中而不接触器壁。",
    description: "托卡马克/仿星器/磁镜等路线的核心。约束时长与能量约束时间是净增益的前置条件；高温超导磁体正显著缩短装置尺度。",
    related: ["fusion-power", "interstellar-fusion-rocket", "heavy-fusion"]
  },
  {
    id: "net-gain",
    name: "聚变净能量增益（Q>1）",
    aliases: ["聚变净增益", "净增益", "Q>1"],
    domain: "energy",
    status: "已实现雏形",
    summary: "输出聚变能量大于输入加热能量，是聚变发电的门槛。",
    description: "2022 年 NIF 惯性约束实现靶丸净增益；磁约束路线在 Q≈1 临界附近反复验证。稳态、可重复的 Q>>1 仍待突破。",
    related: ["fusion-power", "interstellar-fusion-rocket"]
  },
  {
    id: "first-wall",
    name: "第一壁/偏滤器抗辐照材料",
    aliases: ["第一壁材料抗中子辐照", "第一壁材料", "抗中子辐照"],
    domain: "material",
    status: "进行中",
    summary: "直面等离子体的器壁需承受高通量中子辐照、热负荷与溅射而不失效。",
    description: "钨基、钒基、碳化硅复合材料等候选；抗中子脆化、氦泡肿胀与热疲劳是长寿命堆的硬约束。",
    related: ["fusion-power", "heavy-fusion"]
  },
  {
    id: "tritium-breeding",
    name: "氚增殖包层",
    aliases: ["氚自持", "氚增殖"],
    domain: "material",
    status: "理论阶段",
    summary: "在堆内用中子轰击锂增殖出燃料氚，实现燃料自持。",
    description: "氚半衰期短、天然稀缺，自持是商用堆前提；液态锂铅/固态陶瓷增殖剂包层尚未工程验证。",
    related: ["fusion-power"]
  },
  {
    id: "compact-magnet",
    name: "紧凑型高温超导磁体",
    aliases: ["高温超导磁体", "小型化"],
    domain: "material",
    status: "进行中",
    summary: "用 REBCO 等高温超导带材产生更强磁场，从而缩小聚变装置。",
    description: "强磁场大幅降低约束所需尺寸与功率，是 SPARC、紧凑托卡马克与「微型化」能源设想的物理杠杆。",
    related: ["fusion-power", "mcu-arc-reactor", "interstellar-fusion-rocket"]
  },
  {
    id: "small-fusion",
    name: "小型化聚变堆",
    aliases: ["小型化聚变堆"],
    domain: "energy",
    status: "理论阶段",
    summary: "将聚变装置缩至车辆/飞船/便携尺度，功率密度与屏蔽是主要矛盾。",
    description: "现实小型化受中子屏蔽质量、散热与磁体功耗限制；漫画级「无屏蔽微型冷聚变」违背核物理。",
    related: ["interstellar-fusion-rocket", "mcu-arc-reactor"]
  },
  {
    id: "cold-fusion",
    name: "冷聚变理论",
    aliases: ["冷聚变"],
    domain: "energy",
    status: "伪科学未证实",
    summary: "常温常压下实现核聚变的设想。",
    description: "数十年无可重复的实验支撑，与已知核物理（库仑势垒、反应截面）冲突，属未被证实的假说。",
    related: ["mcu-arc-reactor"]
  },

  // —— 跨域示例 ——
  {
    id: "neural-bandwidth",
    name: "脑机接口信号带宽",
    aliases: ["信号带宽", "神经接口带宽"],
    domain: "bio",
    status: "进行中",
    summary: "提升侵入式接口可读取/写入的神经元通道数与实时性。",
    description: "电极密度、生物相容性与编解码算法决定带宽；是复制人、义体增强等的上游瓶颈。",
    related: ["neural-interface", "replicant"]
  },
  {
    id: "consciousness",
    name: "意识本质与上传",
    aliases: ["意识本质", "意识上传"],
    domain: "bio",
    status: "未突破",
    summary: "在物理层面界定并复现主观意识。",
    description: "意识的产生与「可上传」仍是未解科学问题；直接制约数字意识、人格复制类技术。",
    related: ["replicant"]
  },
  {
    id: "cryo-ice",
    name: "低温休眠冰晶损伤抑制",
    aliases: ["冰晶损伤", "冰晶损伤抑制"],
    domain: "bio",
    status: "理论阶段",
    summary: "全身深低温保存时抑制细胞内冰晶形成、实现均匀复温。",
    description: "玻璃化保护剂与快速均匀复温技术决定器官/躯体长期低温保存的可行性。",
    related: ["cryo-sleep"]
  },
  {
    id: "chaos-control",
    name: "复杂系统混沌发散控制",
    aliases: ["混沌发散", "混沌"],
    domain: "info",
    status: "理论阶段",
    summary: "对开放、强耦合的人类社会系统做长程预测与干预。",
    description: "混沌敏感性与数据覆盖不足使精确长程预测不可行；仅在受限子系统有近似模型。",
    related: ["psychohistory"]
  }
];
