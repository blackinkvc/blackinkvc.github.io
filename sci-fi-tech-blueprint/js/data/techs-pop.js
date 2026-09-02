// ============================================================
// 流行文化卷 · 科技条目（45 条）
// 依赖链：现实基底（冶金/电网/半导体/火药/网络/AI）为根 → 科技装备（L1–L3）
// → 超自然能力（L4–L5，违反已知物理，仅限世界观）。
// id 统一加世界观前缀（mcu-/dc-/db-/aot-/nrt-/blc-/fma-/opm-/con-/mha-）防冲突。
// 由 techs-pop.js 在 techs.js 之后加载并执行 TECHS.push(...) 合并。
// ============================================================
const TECHS_POP = [
  // ===================== 漫威宇宙 =====================
  {
    id: "mcu-arc-reactor",
    name: "方舟反应堆（微型冷聚变）",
    aliases: ["Arc Reactor"],
    workId: "mcu",
    level: "L3",
    domain: "energy",
    summary: "掌心大小的冷聚变装置，持续输出清洁高功率电能，现实受劳森判据与材料约束尚难小型常驻。",
    description: "史塔克工业的方舟反应堆以钯（后改为新元素）为燃料，在极小体积内实现持续聚变放能，为钢铁侠装甲与庄园供能。现实中聚变需上亿度等离子体约束，磁体、材料与能量净增益（Q>1）仍是工程前沿，桌面化反应堆暂无路径。",
    firstPrinciples: [
      { principle: "轻核聚变放能", verdict: "achieved", note: "磁约束/惯性约束聚变已在实验室接近或达到能量得失相当。" },
      { principle: "微型化持续供能", verdict: "breakthrough", note: "桌面级长时稳定运行受材料与约束极限限制。" }
    ],
    implementation: {
      current: "ITER 级聚变装置推进中，但体积、约束与净能量均远未达「掌心反应堆」。",
      path: [
        "现实参考：托卡马克 / 仿星器磁约束聚变。",
        "理论可行，瓶颈在 Q 值与材料耐受。",
        "关键瓶颈：第一壁材料、超导磁体、氚增殖。",
        "预研路径：高温超导磁体 → 紧凑型装置 → 长时净增益。"
      ],
      blockers: ["材料耐受", "净能量增益", "小型化"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: ["industrial-2-electric-grid"],
    tags: ["能源", "聚变", "反应堆"]
  },
  {
    id: "mcu-iron-man-armor",
    name: "钢铁侠动力装甲",
    aliases: ["Iron Man Armor", "纳米装甲"],
    workId: "mcu",
    level: "L2",
    domain: "material",
    summary: "全身飞行外骨骼装甲，集成武器、生命维持与纳米自重构，现实军用外骨骼已现雏形。",
    description: "马克系列装甲以反应堆供能，覆盖飞行、冲击吸收、环境密封与多型武器；后期纳米装甲可从胸针展开覆盖全身。现实中单兵外骨骼、喷气背包、碳纤维装甲各自可用，但「全功能飞行战斗装甲」在能源、重量与散热上仍难兼得。",
    firstPrinciples: [
      { principle: "外骨骼伺服放大肌力", verdict: "achieved", note: "军用/医用外骨骼已实用。" },
      { principle: "集成飞行与密封维生", verdict: "breakthrough", note: "小型化飞行动力与长续航是核心瓶颈。" },
      { principle: "纳米材料自重构", verdict: "breakthrough", note: "可编程物质仍属远未来。" }
    ],
    implementation: {
      current: "外骨骼、喷气背包、复合装甲均已有，但非集成飞行战斗装甲。",
      path: [
        "现实参考：军用外骨骼 + 喷气飞行服 + 复合装甲。",
        "理论可行，能量密度决定上限。",
        "关键瓶颈：电池能量密度、散热、重量平衡。",
        "预研路径：固态电池 → 微型涡轮 → 全身伺服。"
      ],
      blockers: ["电池能量密度", "散热", "重量平衡"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: ["mcu-arc-reactor", "industrial-3-network-semiconductor", "firearms-age-metallurgy"],
    tags: ["外骨骼", "装甲", "飞行"]
  },
  {
    id: "mcu-vibranium",
    name: "振金（吸震金属）",
    aliases: ["Vibranium"],
    workId: "mcu",
    level: "L4",
    domain: "material",
    summary: "近乎完美吸收动能与振动的稀有金属，现实对应吸能合金与 auxetic 超材料，但性能远超当代。",
    description: "振金可吸收冲击与声波能量并缓释或反弹，是黑豹战衣与美国队长盾牌的核心材料。现实中 auxetic 负泊松比材料、吸能蜂窝结构、形状记忆合金可在局部逼近，但同等质量「近乎无损吸震」仍属材料前沿。",
    firstPrinciples: [
      { principle: "动能/振动吸收与重分布", verdict: "achieved", note: "吸能结构与阻尼材料已实用。" },
      { principle: "近无损全频段吸震", verdict: "breakthrough", note: "性能远超现实材料，依赖设定矿藏。" }
    ],
    implementation: {
      current: "吸能合金、auxetic 超材料在研发，振金级性能未现。",
      path: [
        "现实参考：吸能蜂窝 + 负泊松比超材料。",
        "理论可行，瓶颈在性能与制备。",
        "关键瓶颈：能量耗散机制、规模化冶炼。",
        "预研路径：梯度吸能材料 → 自修复阻尼 → 极限吸震体。"
      ],
      blockers: ["性能量级", "稀缺矿藏", "规模化"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: ["firearms-age-metallurgy"],
    tags: ["材料", "吸能", "合金"]
  },
  {
    id: "mcu-captain-serum",
    name: "超级士兵血清",
    aliases: ["Super Soldier Serum"],
    workId: "mcu",
    level: "L2",
    domain: "bio",
    summary: "把普通士兵强化为体能巅峰的生化血清，现实基因/药理学方向可行，但全面跃升仍难。",
    description: "血清让史蒂夫·罗杰斯力量、耐力、反应达人类极限且体态均衡。现实中合成代谢、造血干细胞与运动药理学可局部增强，但「安全、全面、可逆」的体能跃升涉及多系统协同，风险与伦理极高。",
    firstPrinciples: [
      { principle: "生化手段强化体能", verdict: "achieved", note: "运动医学与激素疗法局部可行。" },
      { principle: "多系统均衡跃升且无副作用", verdict: "breakthrough", note: "全身性安全增强仍属前沿。" }
    ],
    implementation: {
      current: "体能增强药物/训练体系成熟，全面安全强化未实现。",
      path: [
        "现实参考：运动医学 + 再生医学 + 药理学。",
        "理论可行，瓶颈在安全与伦理。",
        "关键瓶颈：多系统协同、长期安全性、伦理红线。",
        "预研路径：单点增强 → 受限体能增强 → 受控强化。"
      ],
      blockers: ["长期安全性", "伦理限制", "多系统协同"],
      sopStage: "SOP-3 原型与验证"
    },
    dependencies: [],
    tags: ["生物", "基因工程", "强化"]
  },
  {
    id: "mcu-quantum-realm",
    name: "量子领域（微观维度）",
    aliases: ["Quantum Realm"],
    workId: "mcu",
    level: "L5",
    domain: "aerospace",
    summary: "在亚原子尺度穿越时空的微观维度，无现实物理对应，仅限世界观。",
    description: "量子领域是比原子更小的亚微观连续体，进入者可在其中穿越时间、缩放入微。现实中量子尺度是离散的、受海森堡不确定关系约束，不存在可供宏观物体穿行的「维度空间」，更无时间旅行路径。",
    firstPrinciples: [
      { principle: "宏观物体进入亚原子维度", verdict: "violated", note: "量子尺度离散，无连续可居维度。" },
      { principle: "借微观态穿越时间", verdict: "violated", note: "时间旅行无已知物理机制。" }
    ],
    implementation: {
      current: "现实无对应，属设定内微观宇宙。",
      path: [
        "现实参考：量子隧穿仅限微观粒子。",
        "理论可行：否，归入 L5。",
        "关键瓶颈：违反尺度与因果，仅限世界观。",
        "预研路径：不适用（仅限世界观）。"
      ],
      blockers: ["无等效维度", "因果约束", "仅限世界观"],
      sopStage: "SOP-6 结论归档"
    },
    dependencies: ["mcu-arc-reactor"],
    tags: ["航天", "量子", "维度"]
  },
  {
    id: "mcu-spider-web",
    name: "蛛丝发射器",
    aliases: ["Web-Shooters"],
    workId: "mcu",
    level: "L2",
    domain: "weapon",
    summary: "腕部装置喷射高强合成蛛丝，现实合成丝与抓钩已可行，粘性可调丝仍待突破。",
    description: "彼得·帕克的发射器喷出高韧性、可黏附、可切割的合成纤维，用于摆荡与束缚。现实中人造蛛丝（重组蛋白纤维）强度已逼近天然丝，但稳定、廉价、可即时喷出的「腕载发射器」仍是工程问题。",
    firstPrinciples: [
      { principle: "高强度合成纤维", verdict: "achieved", note: "重组蛛丝蛋白纤维已在实验室制备。" },
      { principle: "腕载即时喷射与黏附", verdict: "breakthrough", note: "小型化供丝与黏附调控待突破。" }
    ],
    implementation: {
      current: "人造蛛丝纤维已实用化探索，腕载发射器未现。",
      path: [
        "现实参考：重组蛋白纤维 + 微型供丝机构。",
        "理论可行，瓶颈在工程。",
        "关键瓶颈：供丝量、黏附可控、体积。",
        "预研路径：蛋白纤维量产 → 微型喷丝头 → 黏附调控。"
      ],
      blockers: ["供丝量", "黏附调控", "体积"],
      sopStage: "SOP-3 原型与验证"
    },
    dependencies: ["firearms-age-metallurgy"],
    tags: ["武器", "纤维", "工具"]
  },

  // ===================== DC宇宙 =====================
  {
    id: "dc-batman-suit",
    name: "蝙蝠侠战术装甲与装备",
    aliases: ["Batsuit"],
    workId: "dc",
    level: "L2",
    domain: "material",
    summary: "兼具防弹、传感、显示与抓钩的战术战衣，现实单兵系统已现雏形。",
    description: "蝙蝠战衣以凯夫拉/碳纤维护体，集成夜视、声呐、体感 HUD 与多功能腰带。现实中单兵作战系统、外骨骼背心、智能头盔陆续装备，但全方位「凡人 superhero」套装仍受能源与重量限制。",
    firstPrinciples: [
      { principle: "轻量高强防护", verdict: "achieved", note: "凯夫拉/复合防弹材料成熟。" },
      { principle: "集成传感与 HUD", verdict: "achieved", note: "单兵数字化系统已实用。" },
      { principle: "全能战术集成于轻甲", verdict: "breakthrough", note: "能源与重量平衡是瓶颈。" }
    ],
    implementation: {
      current: "单兵数字化与防护装备成熟，全能套装未集成。",
      path: [
        "现实参考：单兵作战系统 + 智能头盔。",
        "理论可行，瓶颈在能源密度。",
        "关键瓶颈：电池、重量、成本。",
        "预研路径：柔性电子 → 轻量储能 → 集成战衣。"
      ],
      blockers: ["电池能量密度", "重量", "成本"],
      sopStage: "SOP-3 原型与验证"
    },
    dependencies: ["industrial-2-electric-grid", "industrial-3-network-semiconductor", "firearms-age-metallurgy"],
    tags: ["材料", "单兵", "战术"]
  },
  {
    id: "dc-kryptonian",
    name: "氪星人体质",
    aliases: ["Kryptonian Physiology"],
    workId: "dc",
    level: "L5",
    domain: "bio",
    summary: "吸收黄恒星辐射获得飞行、力大、热视线等神级体质，无生理与能量机制支撑。",
    description: "超人作为氪星人，在地球黄太阳下细胞吸收并转化辐射为超常力量、速度与自愈。现实中生物无法以恒星辐射直接供能，更无法以此获得反物理的飞行与热视线，纯属设定。",
    firstPrinciples: [
      { principle: "恒星辐射直接转化为体能", verdict: "violated", note: "生物能量代谢不接收恒星辐射。" },
      { principle: "反物理飞行与热视线", verdict: "violated", note: "无对应机制，违反能量守恒。" }
    ],
    implementation: {
      current: "现实无对应，属设定内超人体质。",
      path: [
        "现实参考：生物发光/感光仅微量能量。",
        "理论可行：否，归入 L5。",
        "关键瓶颈：能量来源与机制均无，仅限世界观。",
        "预研路径：不适用（仅限世界观）。"
      ],
      blockers: ["无能量机制", "违反物理", "仅限世界观"],
      sopStage: "SOP-6 结论归档"
    },
    dependencies: [],
    tags: ["生物", "超能力", "恒星"]
  },
  {
    id: "dc-green-lantern-ring",
    name: "绿灯侠意志能量戒指",
    aliases: ["Power Ring"],
    workId: "dc",
    level: "L4",
    domain: "energy",
    summary: "以纯粹意志具象化能量与物质构造，违反能量守恒，属 L4–L5。",
    description: "绿灯戒指将佩戴者的意志力转为光构造体——护盾、武器、载具随心而生。现实中「意志→能量」无任何已知通道，构造体更需凭空供能，属设定级。",
    firstPrinciples: [
      { principle: "意志直接生成能量与物质", verdict: "violated", note: "无 mind-matter 能量通道。" },
      { principle: "实时具象化复杂构造", verdict: "breakthrough", note: "纯系设定，无机制。" }
    ],
    implementation: {
      current: "现实无对应，属意志驱动的能量魔法。",
      path: [
        "现实参考：脑机接口仅弱读出意图。",
        "理论可行：否，归入 L4–L5。",
        "关键瓶颈：违反能量守恒，仅限世界观。",
        "预研路径：不适用（仅限世界观）。"
      ],
      blockers: ["无能量机制", "违反守恒", "仅限世界观"],
      sopStage: "SOP-6 结论归档"
    },
    dependencies: [],
    tags: ["能源", "意志", "构造"]
  },
  {
    id: "dc-mother-box",
    name: "母盒（跨维度计算机）",
    aliases: ["Mother Box"],
    workId: "dc",
    level: "L5",
    domain: "info",
    summary: "天启星造物，跨维度传送与重组现实，无现实物理对应，仅限世界观。",
    description: "母盒是天启星的新神科技，能开启 boom tube 跨维度通道、重塑物质、连接万物。现实中跨维度传送与「改写现实」无任何物理机制，纯属设定。",
    firstPrinciples: [
      { principle: "跨维度即时传送", verdict: "violated", note: "无可用额外维度通道。" },
      { principle: "重组现实与物质", verdict: "violated", note: "计算无法改变物理常数。" }
    ],
    implementation: {
      current: "现实无对应，属新神级科技。",
      path: [
        "现实参考：量子 teleportation 仅限量子态。",
        "理论可行：否，归入 L5。",
        "关键瓶颈：无维度通道，仅限世界观。",
        "预研路径：不适用（仅限世界观）。"
      ],
      blockers: ["无维度通道", "违反物理", "仅限世界观"],
      sopStage: "SOP-6 结论归档"
    },
    dependencies: ["industrial-3-network-semiconductor"],
    tags: ["信息", "跨维度", "天启星"]
  },
  {
    id: "dc-batarang",
    name: "蝙蝠回力镖与抓钩枪",
    aliases: ["Batarang", "Grapnel"],
    workId: "dc",
    level: "L2",
    domain: "weapon",
    summary: "可编程回旋镖与高速抓钩，现实同类装备已实用，智能化仍待提升。",
    description: "蝙蝠侠的 batarang 可回旋、转向、炸裂；抓钩枪以高压气体瞬间射出钩索攀爬。现实中特种抓钩、遥控回旋镖原理成熟，但「蝙蝠级」可编程与多功能集成仍需工程打磨。",
    firstPrinciples: [
      { principle: "高速抓钩攀爬", verdict: "achieved", note: "军用/救援抓钩已实用。" },
      { principle: "可编程回旋投掷", verdict: "breakthrough", note: "智能控制与回收待优化。" }
    ],
    implementation: {
      current: "抓钩与回旋投掷器已装备，智能版未普及。",
      path: [
        "现实参考：救援抓钩 + 遥控无人机投掷。",
        "理论可行，瓶颈在工程。",
        "关键瓶颈：控制精度、回收、体积。",
        "预研路径：小型化电机 → 可编程翼 → 智能回收。"
      ],
      blockers: ["控制精度", "回收", "体积"],
      sopStage: "SOP-3 原型与验证"
    },
    dependencies: ["firearms-age-metallurgy"],
    tags: ["武器", "工具", "投掷"]
  },
  {
    id: "dc-wonder-woman",
    name: "真言套索与神力",
    aliases: ["Lasso of Truth"],
    workId: "dc",
    level: "L5",
    domain: "bio",
    summary: "以神力编织的套索迫使说出真话、神族血统赋予超常战力，纯属设定。",
    description: "神奇女侠的真言套索由诸神之王宙斯之金制成，被困者必吐真言；其神族血统赋予力量、速度与不死。现实无「魔法真理」与神族生物学，纯属设定。",
    firstPrinciples: [
      { principle: "强制真话的器物", verdict: "violated", note: "无机制迫使认知诚实。" },
      { principle: "神族血统超常体质", verdict: "violated", note: "无神祇生物学，属神话设定。" }
    ],
    implementation: {
      current: "现实无对应，属神力设定。",
      path: [
        "现实参考：测谎仅间接推断。",
        "理论可行：否，归入 L5。",
        "关键瓶颈：无魔法与神族机制，仅限世界观。",
        "预研路径：不适用（仅限世界观）。"
      ],
      blockers: ["无魔法机制", "神话设定", "仅限世界观"],
      sopStage: "SOP-6 结论归档"
    },
    dependencies: [],
    tags: ["生物", "神力", "魔法"]
  },

  // ===================== 龙珠 =====================
  {
    id: "db-scouter",
    name: "战斗力探测器",
    aliases: ["Scouter"],
    workId: "dragon-ball",
    level: "L3",
    domain: "info",
    summary: "佩戴式仪器读取个体战斗数值，现实传感可测生理但「战斗力」无对应量。",
    description: "探测器架在眼侧，实时显示对方「战斗力」数值并跨星通讯。现实中可穿戴设备能测心率、血氧等生理指标，但「战斗力」作为综合能量强度并无可测物理量的对应。",
    firstPrinciples: [
      { principle: "远程传感生理/能量指标", verdict: "achieved", note: "可穿戴生理传感已成熟。" },
      { principle: "量化「战斗力」综合强度", verdict: "breakthrough", note: "无对应物理量可测。" }
    ],
    implementation: {
      current: "可穿戴传感成熟，综合战力读数无对应。",
      path: [
        "现实参考：运动生理监测 + 能量代谢估算。",
        "理论可行（部分），瓶颈在指标定义。",
        "关键瓶颈：战斗力无物理量。",
        "预研路径：多模态生理融合 → 战力代理指标。"
      ],
      blockers: ["无对应物理量", "指标定义"],
      sopStage: "SOP-3 原型与验证"
    },
    dependencies: ["industrial-3-network-semiconductor"],
    tags: ["信息", "传感", "探测"]
  },
  {
    id: "db-senzu",
    name: "仙豆（瞬时治愈）",
    aliases: ["Senzu Bean"],
    workId: "dragon-ball",
    level: "L2",
    domain: "bio",
    summary: "一粒豆瞬时治愈重伤与饥饿，现实再生医学方向可行，但「瞬时全愈」仍难。",
    description: "仙豆能在数秒内恢复重伤、体力与饥饿，等同于体内重启。现实中干细胞、生长因子与组织工程可加速愈合，但「一口全愈」涉及多器官同步再生，远超当前。",
    firstPrinciples: [
      { principle: "加速组织修复", verdict: "achieved", note: "再生医学已在单点突破。" },
      { principle: "瞬时全身复原", verdict: "breakthrough", note: "多器官同步再生仍属前沿。" }
    ],
    implementation: {
      current: "伤口愈合与器官修复在进展，瞬时全愈未现。",
      path: [
        "现实参考：干细胞 + 生长因子疗法。",
        "理论可行，瓶颈在同步与速度。",
        "关键瓶颈：多器官协同、能量供给。",
        "预研路径：靶向再生 → 全身支持 → 快速复原。"
      ],
      blockers: ["多器官协同", "速度", "能量"],
      sopStage: "SOP-3 原型与验证"
    },
    dependencies: [],
    tags: ["生物", "再生", "医疗"]
  },
  {
    id: "db-instant-transmission",
    name: "瞬间移动",
    aliases: ["Instant Transmission"],
    workId: "dragon-ball",
    level: "L5",
    domain: "aerospace",
    summary: "锁定气的坐标实现超距瞬时移动，违反因果与相对论，仅限世界观。",
    description: "孙悟空以「舞空术」感知某处气的坐标后，瞬间传送至该点。现实中瞬时超距位移违反相对论光速上限与因果律，无任何物理机制。",
    firstPrinciples: [
      { principle: "超距瞬时位移", verdict: "violated", note: "违反光速上限与因果律。" },
      { principle: "以气坐标定位", verdict: "violated", note: "无能量型坐标可锁定。" }
    ],
    implementation: {
      current: "现实无对应，属设定内 teleportation。",
      path: [
        "现实参考：量子 teleportation 仅限量子态。",
        "理论可行：否，归入 L5。",
        "关键瓶颈：因果与相对论约束，仅限世界观。",
        "预研路径：不适用（仅限世界观）。"
      ],
      blockers: ["因果约束", "相对论", "仅限世界观"],
      sopStage: "SOP-6 结论归档"
    },
    dependencies: ["db-scouter"],
    tags: ["航天", "传送", "气"]
  },
  {
    id: "db-ki",
    name: "气 / 舞空术 / 龟派气功",
    aliases: ["Ki", "Kamehameha"],
    workId: "dragon-ball",
    level: "L5",
    domain: "energy",
    summary: "可被感知、实质化、外放为破坏性能量的生命力量，无机制支撑，仅限世界观。",
    description: "气是龙珠宇宙的能量本源：可凝于掌心外放为光束（龟派气功）、踏空飞行、形成护盾。现实中生命能量（代谢）量级极低，无法外放为定向破坏能，纯属设定。",
    firstPrinciples: [
      { principle: "生命能量外放为破坏能", verdict: "violated", note: "生物代谢能量量级不足以外放攻击。" },
      { principle: "以气飞行与护盾", verdict: "violated", note: "无对应机制。" }
    ],
    implementation: {
      current: "现实无对应，属设定内能量体系。",
      path: [
        "现实参考：生物电信号极微弱。",
        "理论可行：否，归入 L5。",
        "关键瓶颈：无机制，仅限世界观。",
        "预研路径：不适用（仅限世界观）。"
      ],
      blockers: ["无机制", "能量量级", "仅限世界观"],
      sopStage: "SOP-6 结论归档"
    },
    dependencies: [],
    tags: ["能源", "气", "武道"]
  },
  {
    id: "db-dragon-balls",
    name: "那美克星龙珠（许愿）",
    aliases: ["Dragon Balls"],
    workId: "dragon-ball",
    level: "L5",
    domain: "info",
    summary: "集七珠召唤神龙改写现实、复活亡者，纯属设定，仅限世界观。",
    description: "收集七颗龙珠召唤神龙，可实现许愿——复活死者、改天换地、瞬时移动。这已是全能级现实改写，无任何机制支撑，纯属设定。",
    firstPrinciples: [
      { principle: "许愿改写现实", verdict: "violated", note: "无机制改变物理与因果。" },
      { principle: "复活死者", verdict: "violated", note: "触及意识与死亡问题，无路径。" }
    ],
    implementation: {
      current: "现实无对应，属神级许愿设定。",
      path: [
        "现实参考：无。",
        "理论可行：否，归入 L5。",
        "关键瓶颈：全能级改写无机制，仅限世界观。",
        "预研路径：不适用（仅限世界观）。"
      ],
      blockers: ["全能改写无机制", "仅限世界观"],
      sopStage: "SOP-6 结论归档"
    },
    dependencies: [],
    tags: ["信息", "许愿", "神龙"]
  },

  // ===================== 进击的巨人 =====================
  {
    id: "aot-odm-gear",
    name: "立体机动装置",
    aliases: ["ODM Gear"],
    workId: "attack-on-titan",
    level: "L2",
    domain: "weapon",
    summary: "压缩气体驱动抓钩与绞盘，三维高速机动斩杀巨人，现实同类装置已可行。",
    description: "立体机动装置以高压气体发射抓钩、以绞盘收放绳索，让士兵在树木与建筑间摆荡机动，腰侧刀刃专斩巨人后颈。现实中抓钩、绞盘与气体推进原理成熟，但「战场级三维格斗」在续航与精度上仍难。",
    firstPrinciples: [
      { principle: "气体推进抓钩摆荡", verdict: "achieved", note: "气动抓钩与摆荡装置原理成熟。" },
      { principle: "战场三维机动续航", verdict: "breakthrough", note: "气体储量与机动精度待突破。" }
    ],
    implementation: {
      current: "抓钩/绞盘/喷气装置各自可用，集成机动套装未现。",
      path: [
        "现实参考：气动抓钩 + 喷气背包。",
        "理论可行，瓶颈在能源与精度。",
        "关键瓶颈：气体储量、控制算法。",
        "预研路径：高压储气 → 惯性导航 → 机动套装。"
      ],
      blockers: ["气体储量", "控制精度", "重量"],
      sopStage: "SOP-3 原型与验证"
    },
    dependencies: ["firearms-age-metallurgy", "industrial-2-electric-grid"],
    tags: ["武器", "机动", "气动"]
  },
  {
    id: "aot-titan",
    name: "巨人化（九大巨人）",
    aliases: ["Titan Form"],
    workId: "attack-on-titan",
    level: "L5",
    domain: "bio",
    summary: "人体数秒内生成数十米巨躯并保留意识，无生物机制支撑，仅限世界观。",
    description: "继承巨人之力者可在瞬间以光芒包裹、生成数十米高的肉体并保留理智。现实中不存在瞬间大量增殖生物组织的机制，更无「保留意识的大型化」，纯属设定。",
    firstPrinciples: [
      { principle: "瞬时巨躯生成", verdict: "violated", note: "无快速大量组织增殖机制。" },
      { principle: "大型化保留意识", verdict: "violated", note: "意识与体型缩放无机制。" }
    ],
    implementation: {
      current: "现实无对应，属设定内变身。",
      path: [
        "现实参考：无。",
        "理论可行：否，归入 L5。",
        "关键瓶颈：无生物机制，仅限世界观。",
        "预研路径：不适用（仅限世界观）。"
      ],
      blockers: ["无机制", "违反生物", "仅限世界观"],
      sopStage: "SOP-6 结论归档"
    },
    dependencies: [],
    tags: ["生物", "变身", "巨人"]
  },
  {
    id: "aot-rumbling",
    name: "地鸣",
    aliases: ["The Rumbling"],
    workId: "attack-on-titan",
    level: "L5",
    domain: "bio",
    summary: "唤醒地底万千巨神兵踏平大陆，纯属设定，仅限世界观。",
    description: "始祖巨人发动地鸣，唤醒墙内与地底无数超大型「巨神兵」同步行军，踏平一切。这依赖对全体巨人之力的绝对控制，无任何机制支撑，纯属设定。",
    firstPrinciples: [
      { principle: "统一控制海量巨躯", verdict: "violated", note: "无机制统一驱动生物集群。" },
      { principle: "地底巨神兵苏醒", verdict: "violated", note: "纯属设定。" }
    ],
    implementation: {
      current: "现实无对应，属设定内末日景象。",
      path: [
        "现实参考：无。",
        "理论可行：否，归入 L5。",
        "关键瓶颈：无机制，仅限世界观。",
        "预研路径：不适用（仅限世界观）。"
      ],
      blockers: ["无机制", "仅限世界观"],
      sopStage: "SOP-6 结论归档"
    },
    dependencies: ["aot-titan"],
    tags: ["生物", "集群", "末日"]
  },
  {
    id: "aot-wall",
    name: "三层高墙",
    aliases: ["The Walls"],
    workId: "attack-on-titan",
    level: "L1",
    domain: "material",
    summary: "高约 50 米、以硬质材料构筑的巨型城墙，现实工程可达。",
    description: "人类据以苟存的三道同心城墙，高约 50 米，墙体坚硬可抵御巨人冲撞（设定中由巨人硬化而成，现实可类比为超大尺度混凝土/夯土城墙）。现实中长城、防御工事可达此量级。",
    firstPrinciples: [
      { principle: "超大尺度硬质城墙", verdict: "achieved", note: "长城与大型防御工事已验证。" },
      { principle: "50 米级连续墙体", verdict: "achieved", note: "混凝土重力坝已达更高尺度。" }
    ],
    implementation: {
      current: "大型城墙与混凝土坝现实可达。",
      path: [
        "现实参考：重力坝 + 夯土/混凝土城墙。",
        "理论可行，工程成熟。",
        "关键瓶颈：成本与维护。",
        "预研路径：直接工程实现。"
      ],
      blockers: ["成本", "维护"],
      sopStage: "SOP-1 拆解"
    },
    dependencies: ["firearms-age-metallurgy"],
    tags: ["材料", "城防", "工程"]
  },

  // ===================== 火影忍者 =====================
  {
    id: "nrt-chakra",
    name: "查克拉 / 忍术",
    aliases: ["Chakra", "Jutsu"],
    workId: "naruto",
    level: "L4",
    domain: "energy",
    summary: "肉体与精神能量混合生成的泛用能量，可外放为遁术，无机制支撑。",
    description: "查克拉由体力（身体能量）与精神能量混合而成，结印调动后可释放火遁、雷遁、水遁等忍术，甚至脱水解构物质。现实中不存在此类可直接外放为元素攻击的生命能量，属推演级生物学。",
    firstPrinciples: [
      { principle: "生命能量外放为元素攻击", verdict: "violated", note: "无机制将生物能转为元素攻击。" },
      { principle: "结印调动能量", verdict: "breakthrough", note: "纯系设定，无对应。" }
    ],
    implementation: {
      current: "现实无对应，属设定内能量体系。",
      path: [
        "现实参考：生物电/代谢能量极微弱。",
        "理论可行：部分存疑，归入 L4。",
        "关键瓶颈：无外放机制，多越界。",
        "预研路径：不适用（仅限世界观）。"
      ],
      blockers: ["无外放机制", "违反能量", "仅限世界观"],
      sopStage: "SOP-6 结论归档"
    },
    dependencies: [],
    tags: ["能源", "查克拉", "忍术"]
  },
  {
    id: "nrt-sharingan",
    name: "写轮眼",
    aliases: ["Sharingan"],
    workId: "naruto",
    level: "L5",
    domain: "bio",
    summary: "以瞳术预读动作、复制技巧、干涉记忆与因果，违反神经科学，仅限世界观。",
    description: "写轮眼是宇智波一族的血继限界，可洞察与预读对手动作、复制体术与忍术、以幻术操控意识、甚至窥见时间片段（别天神）。现实中视觉系统无法达到此类因果级预读与记忆改写，纯属设定。",
    firstPrinciples: [
      { principle: "预读与复制动作", verdict: "violated", note: "视觉系统无因果级预读能力。" },
      { principle: "幻术操控与记忆干涉", verdict: "violated", note: "无机制直接改写意识。" }
    ],
    implementation: {
      current: "现实无对应，属血继限界设定。",
      path: [
        "现实参考：眼动追踪仅弱读出意图。",
        "理论可行：否，归入 L5。",
        "关键瓶颈：无机制，仅限世界观。",
        "预研路径：不适用（仅限世界观）。"
      ],
      blockers: ["无机制", "神经科学约束", "仅限世界观"],
      sopStage: "SOP-6 结论归档"
    },
    dependencies: ["nrt-chakra"],
    tags: ["生物", "瞳术", "血继"]
  },
  {
    id: "nrt-flying-thunder",
    name: "飞雷神之术",
    aliases: ["Flying Thunder God"],
    workId: "naruto",
    level: "L5",
    domain: "aerospace",
    summary: "在预先标记的空间坐标间瞬时转移，违反相对论与因果，仅限世界观。",
    description: "以术式标记物体或空间后，施术者可瞬时移动至该标记点，实现「空间跳跃」级机动。现实中瞬时超距传送违反相对论，无任何物理机制。",
    firstPrinciples: [
      { principle: "标记点间瞬时转移", verdict: "violated", note: "违反光速上限与因果律。" },
      { principle: "空间坐标标记", verdict: "violated", note: "无空间坐标可附着。" }
    ],
    implementation: {
      current: "现实无对应，属时空间忍术设定。",
      path: [
        "现实参考：无。",
        "理论可行：否，归入 L5。",
        "关键瓶颈：因果与相对论约束，仅限世界观。",
        "预研路径：不适用（仅限世界观）。"
      ],
      blockers: ["因果约束", "相对论", "仅限世界观"],
      sopStage: "SOP-6 结论归档"
    },
    dependencies: ["nrt-chakra"],
    tags: ["航天", "空间", "瞬移"]
  },
  {
    id: "nrt-sage-mode",
    name: "仙人模式（自然能量）",
    aliases: ["Sage Mode"],
    workId: "naruto",
    level: "L3",
    domain: "bio",
    summary: "吸收自然能量强化肉身与忍术，现实生物能量捕获方向可行，但「自然能量」属设定。",
    description: "仙人模式需感知并吸收天地间的「自然能量」，与自身查克拉平衡后大幅强化。现实中光合作用、化能合成可视为「吸收环境能量」，但「自然能量」作为可直接强化战斗力的泛在源属设定。",
    firstPrinciples: [
      { principle: "吸收环境能量补能", verdict: "achieved", note: "光合/化能合成即环境能量捕获。" },
      { principle: "自然能量强化战力", verdict: "breakthrough", note: "可直接强化的「自然能量」属设定。" }
    ],
    implementation: {
      current: "环境能量捕获在生物层面存在，战斗强化无对应。",
      path: [
        "现实参考：生物能量代谢 + 环境能源。",
        "理论可行（部分），瓶颈在设定量。",
        "关键瓶颈：自然能量无定义。",
        "预研路径：环境能补给 → 体能增强代理。"
      ],
      blockers: ["自然能量无定义", "强化机制"],
      sopStage: "SOP-3 原型与验证"
    },
    dependencies: ["nrt-chakra"],
    tags: ["生物", "自然能量", "强化"]
  },

  // ===================== 死神 =====================
  {
    id: "blc-zanpakuto",
    name: "斩魄刀（始解 / 卍解）",
    aliases: ["Zanpakuto"],
    workId: "bleach",
    level: "L4",
    domain: "weapon",
    summary: "拥有自我意志、可解放形态的灵魂武器，无机制支撑，仅限世界观。",
    description: "斩魄刀是死神灵魂的延伸，始解解放基础形态、卍解解放真名与终极形态，各刀能力各异（冰、火、毒、空间等）。以灵魂为材料、具自我意志的武器无任何物理/生物机制。",
    firstPrinciples: [
      { principle: "灵魂材料武器", verdict: "violated", note: "灵魂无已知物质载体。" },
      { principle: "意志实体化与解放", verdict: "breakthrough", note: "纯系设定。" }
    ],
    implementation: {
      current: "现实无对应，属灵魂兵器设定。",
      path: [
        "现实参考：无。",
        "理论可行：否，归入 L4。",
        "关键瓶颈：灵魂机制缺失，仅限世界观。",
        "预研路径：不适用（仅限世界观）。"
      ],
      blockers: ["灵魂无机制", "仅限世界观"],
      sopStage: "SOP-6 结论归档"
    },
    dependencies: [],
    tags: ["武器", "灵魂", "刀"]
  },
  {
    id: "blc-hollowfication",
    name: "虚化",
    aliases: ["Hollowfication"],
    workId: "bleach",
    level: "L5",
    domain: "bio",
    summary: "死神体表生成虚之假面，获得超速再生与力量，无生物机制，仅限世界观。",
    description: "虚化让死神在体表覆上虚的假面，获得虚的超速再生、怪力与虚闪。这是死神与虚两种灵魂存在的融合，无任何生物机制支撑，纯属设定。",
    firstPrinciples: [
      { principle: "灵魂存在的融合", verdict: "violated", note: "灵魂机制缺失。" },
      { principle: "超速再生与力量跃升", verdict: "violated", note: "无机制。" }
    ],
    implementation: {
      current: "现实无对应，属灵魂融合设定。",
      path: [
        "现实参考：无。",
        "理论可行：否，归入 L5。",
        "关键瓶颈：无机制，仅限世界观。",
        "预研路径：不适用（仅限世界观）。"
      ],
      blockers: ["灵魂无机制", "仅限世界观"],
      sopStage: "SOP-6 结论归档"
    },
    dependencies: ["blc-zanpakuto"],
    tags: ["生物", "虚", "融合"]
  },
  {
    id: "blc-fullbring",
    name: "完现术（物质承载灵魂）",
    aliases: ["Fullbring"],
    workId: "bleach",
    level: "L5",
    domain: "bio",
    summary: "以钟爱之物为媒介引出现实改动，属魔法级设定，仅限世界观。",
    description: "完现术者将灵魂碎片寄于日常物件（如项链、硬币），引动其「魂」改变现实——加速、切断空间、具象化。以情感寄托物为媒介的现实改动属魔法级设定，无机制。",
    firstPrinciples: [
      { principle: "以物件媒介改现实", verdict: "violated", note: "无机制以情感物改现实。" },
      { principle: "灵魂碎片寄宿物质", verdict: "violated", note: "灵魂机制缺失。" }
    ],
    implementation: {
      current: "现实无对应，属灵魂媒介设定。",
      path: [
        "现实参考：无。",
        "理论可行：否，归入 L5。",
        "关键瓶颈：无机制，仅限世界观。",
        "预研路径：不适用（仅限世界观）。"
      ],
      blockers: ["无机制", "仅限世界观"],
      sopStage: "SOP-6 结论归档"
    },
    dependencies: [],
    tags: ["生物", "灵魂", "媒介"]
  },
  {
    id: "blc-reishi",
    name: "灵子 / 灵压",
    aliases: ["Reishi", "Spiritual Pressure"],
    workId: "bleach",
    level: "L4",
    domain: "energy",
    summary: "构成物质与生命的灵魂粒子与精神压强，无物理对应，仅限世界观。",
    description: "灵子是构成尸魂界、虚圈与一切灵魂的物质基础；灵压是灵魂强度的外显压强，可实体化压迫对手。现实中不存在灵魂粒子，能量也无「灵魂强度」属性，纯属设定。",
    firstPrinciples: [
      { principle: "灵魂粒子构成物质", verdict: "violated", note: "灵魂无物质载体。" },
      { principle: "精神压强实体化", verdict: "breakthrough", note: "纯系设定。" }
    ],
    implementation: {
      current: "现实无对应，属灵魂粒子设定。",
      path: [
        "现实参考：无。",
        "理论可行：否，归入 L4。",
        "关键瓶颈：灵魂机制缺失，仅限世界观。",
        "预研路径：不适用（仅限世界观）。"
      ],
      blockers: ["灵魂无机制", "仅限世界观"],
      sopStage: "SOP-6 结论归档"
    },
    dependencies: [],
    tags: ["能源", "灵子", "灵魂"]
  },

  // ===================== 钢之炼金术师 =====================
  {
    id: "fma-alchemy",
    name: "炼金术（等价交换）",
    aliases: ["Alchemy"],
    workId: "fma",
    level: "L5",
    domain: "material",
    summary: "仅以阵图与触碰重组物质形态、不引入外部能源，违反能量守恒，仅限世界观。",
    description: "炼金术遵循「等价交换」：理解、分解、再构，以炼成阵在材料间重组物质（如土变水、修桥补物）。现实中物质重组必须输入能量、受质量守恒与化学键约束，无「无源重组」机制，纯属设定。",
    firstPrinciples: [
      { principle: "无外部能源的物质重组", verdict: "violated", note: "违反能量守恒与质量守恒。" },
      { principle: "以阵图编程物质", verdict: "violated", note: "无对应机制。" }
    ],
    implementation: {
      current: "现实无对应，属炼金术设定。",
      path: [
        "现实参考：3D 打印/化学反应需供能。",
        "理论可行：否，归入 L5。",
        "关键瓶颈：守恒律约束，仅限世界观。",
        "预研路径：不适用（仅限世界观）。"
      ],
      blockers: ["能量守恒", "质量守恒", "仅限世界观"],
      sopStage: "SOP-6 结论归档"
    },
    dependencies: [],
    tags: ["材料", "炼金", "重组"]
  },
  {
    id: "fma-philosopher-stone",
    name: "贤者之石",
    aliases: ["Philosopher's Stone"],
    workId: "fma",
    level: "L5",
    domain: "energy",
    summary: "以灵魂为燃料突破等价交换、释放无限能量，纯属设定，仅限世界观。",
    description: "贤者之石由无数灵魂压缩而成，既是终极炼金催化剂、可无视等价交换，又是无限能量源与延寿药。以灵魂供能、突破守恒纯属设定，无任何机制。",
    firstPrinciples: [
      { principle: "灵魂供能无限能量", verdict: "violated", note: "灵魂无能量载体。" },
      { principle: "突破等价交换", verdict: "violated", note: "守恒律不可破。" }
    ],
    implementation: {
      current: "现实无对应，属炼金终极设定。",
      path: [
        "现实参考：无。",
        "理论可行：否，归入 L5。",
        "关键瓶颈：守恒与灵魂机制缺失，仅限世界观。",
        "预研路径：不适用（仅限世界观）。"
      ],
      blockers: ["守恒律", "灵魂机制", "仅限世界观"],
      sopStage: "SOP-6 结论归档"
    },
    dependencies: ["fma-alchemy"],
    tags: ["能源", "贤者之石", "灵魂"]
  },
  {
    id: "fma-automail",
    name: "机械铠",
    aliases: ["Automail"],
    workId: "fma",
    level: "L2",
    domain: "material",
    summary: "替代残缺肢体的高性能义肢，现实 prosthetic 与神经接口已可行。",
    description: "机械铠是兼具力量与灵活的金属义肢，借神经接驳由残躯操控，可定制武器化。现实中肌电假肢、神经接口与智能义肢快速进步，但全功能、高强度的战斗级义肢仍受驱动与能源限制。",
    firstPrinciples: [
      { principle: "神经接驳义肢", verdict: "achieved", note: "肌电/神经假肢已实用。" },
      { principle: "高强战斗级义肢", verdict: "breakthrough", note: "强度与续航仍受限。" }
    ],
    implementation: {
      current: "智能假肢与神经接口成熟，战斗级未现。",
      path: [
        "现实参考：肌电假肢 + 神经接口。",
        "理论可行，瓶颈在驱动。",
        "关键瓶颈：驱动、能源、重量。",
        "预研路径：神经接口 → 高强材料 → 动力义肢。"
      ],
      blockers: ["驱动", "能源", "重量"],
      sopStage: "SOP-3 原型与验证"
    },
    dependencies: ["firearms-age-metallurgy", "industrial-3-network-semiconductor"],
    tags: ["材料", "义肢", "神经"]
  },
  {
    id: "fma-transmutation-circle",
    name: "炼成阵",
    aliases: ["Transmutation Circle"],
    workId: "fma",
    level: "L3",
    domain: "material",
    summary: "以几何阵图编程物质重组的「模板」，现实对应可编程物质与增材制造。",
    description: "炼成阵以圆、线与符号定义重组的「蓝图」与「材料配比」，是炼金术的执行模板。现实中可编程物质、3D 打印与自动化的「按图造物」方向成立，但「无源重组」仍需供能，属推演级。",
    firstPrinciples: [
      { principle: "几何模板定义重组", verdict: "achieved", note: "CAD/增材制造的「模板」已实用。" },
      { principle: "自动按图重组物质", verdict: "breakthrough", note: "仍受供能与材料约束。" }
    ],
    implementation: {
      current: "增材制造与自动化装配成熟，无源重组无路径。",
      path: [
        "现实参考：3D 打印 + 机器人装配。",
        "理论可行（部分），瓶颈在供能。",
        "关键瓶颈：重组供能、材料库。",
        "预研路径：可编程物质 → 自动重组。"
      ],
      blockers: ["重组供能", "材料库"],
      sopStage: "SOP-3 原型与验证"
    },
    dependencies: ["industrial-3-network-semiconductor"],
    tags: ["材料", "模板", "炼成"]
  },

  // ===================== 一拳超人 =====================
  {
    id: "opm-hero-system",
    name: "英雄协会监测与等级网",
    aliases: ["Hero Association"],
    workId: "opm",
    level: "L2",
    domain: "info",
    summary: "以威胁等级与监测网组织英雄应对怪人，现实应急与 AI 调度已可行。",
    description: "英雄协会按「狼/虎/鬼/龙/神」威胁等级调度英雄，配监测与通讯网。现实中应急指挥、灾害监测与 AI 调度系统已实用，但「全域实时怪人预警」在传感与识别上仍待提升。",
    firstPrinciples: [
      { principle: "全域监测与通讯", verdict: "achieved", note: "应急与城市监测网已实用。" },
      { principle: "AI 威胁分级调度", verdict: "achieved", note: "智能调度系统已在运行。" }
    ],
    implementation: {
      current: "应急指挥与监测网成熟，AI 调度在推进。",
      path: [
        "现实参考：城市应急平台 + AI 调度。",
        "理论可行，工程成熟。",
        "关键瓶颈：识别精度、覆盖。",
        "预研路径：多源传感融合 → 智能预警。"
      ],
      blockers: ["识别精度", "覆盖"],
      sopStage: "SOP-2 文献与可行性"
    },
    dependencies: ["industrial-3-network-internet", "industrial-4-ai-ml"],
    tags: ["信息", "监测", "调度"]
  },
  {
    id: "opm-battle-suit",
    name: "机械战斗服",
    aliases: ["Battle Suit"],
    workId: "opm",
    level: "L2",
    domain: "material",
    summary: "金属骑士等机械装甲与量产战斗服，现实外骨骼与无人装甲已可行。",
    description: "英雄协会与金属骑士等以机甲、无人机与动力战衣作战。现实中外骨骼、无人地面平台、遥控装甲在研发与装备，但「全能战斗机甲」在能源与自主上仍受限。",
    firstPrinciples: [
      { principle: "动力战衣/机甲", verdict: "achieved", note: "外骨骼与无人平台已实用。" },
      { principle: "自主战斗装甲", verdict: "breakthrough", note: "能源与自主决策待突破。" }
    ],
    implementation: {
      current: "外骨骼与无人装甲在装备，全能机甲未现。",
      path: [
        "现实参考：军用外骨骼 + 无人战车。",
        "理论可行，瓶颈在能源。",
        "关键瓶颈：电池、自主、成本。",
        "预研路径：轻量储能 → 自主控制 → 战斗装甲。"
      ],
      blockers: ["电池", "自主性", "成本"],
      sopStage: "SOP-3 原型与验证"
    },
    dependencies: ["industrial-3-network-semiconductor", "firearms-age-metallurgy"],
    tags: ["材料", "机甲", "装甲"]
  },
  {
    id: "opm-limiter",
    name: "限制器突破（埼玉之力）",
    aliases: ["Limiter Removal"],
    workId: "opm",
    level: "L5",
    domain: "bio",
    summary: "解除生物体成长的生理上限获得无限力量，无机制支撑，仅限世界观。",
    description: "设定中生物有「限制器」防止无限成长，埼玉通过极端训练突破它，获得一拳灭星、无视伤病的无限之力。现实无「成长上限开关」，更无可安全解除的机制，纯属设定。",
    firstPrinciples: [
      { principle: "解除生理成长上限", verdict: "violated", note: "无成长上限开关机制。" },
      { principle: "指数级无限力量", verdict: "violated", note: "违背生物与物理尺度。" }
    ],
    implementation: {
      current: "现实无对应，属设定内突破。",
      path: [
        "现实参考：无。",
        "理论可行：否，归入 L5。",
        "关键瓶颈：无机制，仅限世界观。",
        "预研路径：不适用（仅限世界观）。"
      ],
      blockers: ["无机制", "仅限世界观"],
      sopStage: "SOP-6 结论归档"
    },
    dependencies: [],
    tags: ["生物", "限制器", "无限"]
  },
  {
    id: "opm-monsterization",
    name: "怪人化",
    aliases: ["Monsterization"],
    workId: "opm",
    level: "L4",
    domain: "bio",
    summary: "人类因执念或实验突变为超常生物，属推演级生物学，多越界。",
    description: "怪人由人类经实验、执念或外在因素突变而成，获得远超常人的形态与力量。现实中极端环境可引发生理改变，但「定向突变为超常生物」涉及深层的基因组与形态发生重编程，多越界至 L5。",
    firstPrinciples: [
      { principle: "诱导生物形态突变", verdict: "breakthrough", note: "基因编辑可改性状，但整体形态重编程极难。" },
      { principle: "意识保留的超常化", verdict: "violated", note: "无机制保证意识与力量跃升。" }
    ],
    implementation: {
      current: "基因编辑改性状在进展，整体怪人化无路径。",
      path: [
        "现实参考：合成生物学 + 基因治疗。",
        "理论可行（部分），多越界。",
        "关键瓶颈：形态重编程、意识连续。",
        "预研路径：单基因性状 → 受限形态改造。"
      ],
      blockers: ["形态重编程", "意识连续", "多越界"],
      sopStage: "SOP-5 集成与验证"
    },
    dependencies: [],
    tags: ["生物", "突变", "怪人"]
  },

  // ===================== 名侦探柯南 =====================
  {
    id: "con-power-shoes",
    name: "脚力增强鞋",
    aliases: ["Power-Enhancing Kick Shoes"],
    workId: "conan",
    level: "L2",
    domain: "material",
    summary: "鞋尖弹簧放大踢击力，现实弹簧储能与助力鞋已可行。",
    description: "阿笠博士发明的踢力增强鞋，以鞋尖强力弹簧把少年的一脚放大为可击昏成人的威力。现实中弹簧储能、助力鞋与气动助推鞋原理成熟，工程可达。",
    firstPrinciples: [
      { principle: "弹簧放大踢击力", verdict: "achieved", note: "弹簧储能与助力鞋已实用。" },
      { principle: "可穿戴助力", verdict: "achieved", note: "外骨骼助力鞋在研发。" }
    ],
    implementation: {
      current: "助力鞋与弹簧储能成熟，玩具级量产可行。",
      path: [
        "现实参考：气动/弹簧助力鞋。",
        "理论可行，工程成熟。",
        "关键瓶颈：舒适度、续航。",
        "预研路径：直接工程实现。"
      ],
      blockers: ["舒适度", "续航"],
      sopStage: "SOP-1 拆解"
    },
    dependencies: ["firearms-age-metallurgy", "industrial-2-electric-grid"],
    tags: ["材料", "助力", "工具"]
  },
  {
    id: "con-sleep-gun",
    name: "麻醉枪手表",
    aliases: ["Wristwatch Anesthetic Gun"],
    workId: "conan",
    level: "L2",
    domain: "weapon",
    summary: "手表式麻醉针发射器，现实微型 dart 装置已可行。",
    description: "伪装成手表的小型麻醉枪，以针管发射麻醉剂使目标昏睡，用于让毛利小五郎「推理」。现实中微型 dart 发射器、麻醉针原理成熟，工程可达。",
    firstPrinciples: [
      { principle: "微型 dart 发射", verdict: "achieved", note: "微型气动手表 dart 已可行。" },
      { principle: "麻醉剂即时生效", verdict: "achieved", note: "医用麻醉剂成熟。" }
    ],
    implementation: {
      current: "微型 dart 与麻醉剂成熟，玩具级量产可行。",
      path: [
        "现实参考：气动微型 dart 发射器。",
        "理论可行，工程成熟。",
        "关键瓶颈：剂量安全、体积。",
        "预研路径：直接工程实现。"
      ],
      blockers: ["剂量安全", "体积"],
      sopStage: "SOP-1 拆解"
    },
    dependencies: ["firearms-age-gunpowder"],
    tags: ["武器", "麻醉", "工具"]
  },
  {
    id: "con-voice-changer",
    name: "领结变声器",
    aliases: ["Voice-Changing Bowtie"],
    workId: "conan",
    level: "L2",
    domain: "info",
    summary: "领结式实时变声与扩音装置，现实语音合成与变声已可行。",
    description: "阿笠博士的领结变声器可把柯南的童声实时转为他人声线并无线扩音，借蝴蝶结电台传给目标。现实中实时变声、声码器与无线音频传输成熟，工程可达。",
    firstPrinciples: [
      { principle: "实时变声", verdict: "achieved", note: "声码器与 AI 变声已实用。" },
      { principle: "无线音频传输", verdict: "achieved", note: "蓝牙/射频音频成熟。" }
    ],
    implementation: {
      current: "变声与无线音频成熟，可穿戴量产可行。",
      path: [
        "现实参考：AI 变声 + 蓝牙音频。",
        "理论可行，工程成熟。",
        "关键瓶颈：延迟、延迟、功耗。",
        "预研路径：直接工程实现。"
      ],
      blockers: ["延迟", "功耗"],
      sopStage: "SOP-1 拆解"
    },
    dependencies: ["industrial-3-network-semiconductor"],
    tags: ["信息", "变声", "音频"]
  },
  {
    id: "con-stun-gun",
    name: "足球腰带（电击）",
    aliases: ["Powerful Kick-induced Stun Gun"],
    workId: "conan",
    level: "L2",
    domain: "weapon",
    summary: "以踢击触发的高压电击腰带，现实电击器已可行。",
    description: "腰带在柯南踢出足球命中的瞬间释放高压电击，击昏目标。现实中泰瑟等电击武器原理成熟，以动能触发的高压包工程可达。",
    firstPrinciples: [
      { principle: "高压电击制停", verdict: "achieved", note: "泰瑟等电击器已实用。" },
      { principle: "踢击触发释放", verdict: "achieved", note: "机械触发高压包可行。" }
    ],
    implementation: {
      current: "电击器成熟，动能触发工程可达。",
      path: [
        "现实参考：泰瑟电击器 + 触发机构。",
        "理论可行，工程成熟。",
        "关键瓶颈：安全、体积。",
        "预研路径：直接工程实现。"
      ],
      blockers: ["安全", "体积"],
      sopStage: "SOP-1 拆解"
    },
    dependencies: ["industrial-2-electric-grid"],
    tags: ["武器", "电击", "工具"]
  },

  // ===================== 我的英雄学院 =====================
  {
    id: "mha-quirk",
    name: "个性（Quirk）",
    aliases: ["Quirk"],
    workId: "mha",
    level: "L4",
    domain: "bio",
    summary: "以遗传获得的千奇百怪超能力，属远未来生物学，多越界。",
    description: "个性是遗传自父母的超能力，约八成人口天生拥有——发火、硬化、引力操控等形态各异。现实中多基因性状与基因编辑可改变部分能力，但「稳定遗传的千类超能力」涉及深层发育重编程，多越界。",
    firstPrinciples: [
      { principle: "遗传获得超能力", verdict: "breakthrough", note: "基因编辑可改性状，但复杂超能力无路径。" },
      { principle: "千类形态各异的能力", verdict: "violated", note: "发育重编程极难，多越界。" }
    ],
    implementation: {
      current: "基因编辑改单性状在进展，复杂个性无路径。",
      path: [
        "现实参考：合成生物学 + 基因治疗。",
        "理论可行（部分），多越界。",
        "关键瓶颈：多基因整合、发育重编程。",
        "预研路径：单性状增强 → 受限能力赋予。"
      ],
      blockers: ["多基因整合", "发育重编程", "多越界"],
      sopStage: "SOP-5 集成与验证"
    },
    dependencies: [],
    tags: ["生物", "遗传", "超能力"]
  },
  {
    id: "mha-ofa",
    name: "One For All（集积传承）",
    aliases: ["One For All"],
    workId: "mha",
    level: "L5",
    domain: "bio",
    summary: "跨代集积并转让、可无限蓄积能量的强化个性，无机制支撑，仅限世界观。",
    description: "One For All 由「可转让」与「可蓄积」两个个性融合而成，历代继承者不断叠加力量与速度，并可将意志与记忆传承给下任。这种跨代能量集积与意识传承无任何生物机制，纯属设定。",
    firstPrinciples: [
      { principle: "跨代能量集积", verdict: "violated", note: "无机制跨代叠加体能。" },
      { principle: "意识与记忆传承", verdict: "violated", note: "意识传承无路径。" }
    ],
    implementation: {
      current: "现实无对应，属个性融合设定。",
      path: [
        "现实参考：无。",
        "理论可行：否，归入 L5。",
        "关键瓶颈：无机制，仅限世界观。",
        "预研路径：不适用（仅限世界观）。"
      ],
      blockers: ["无机制", "仅限世界观"],
      sopStage: "SOP-6 结论归档"
    },
    dependencies: ["mha-quirk"],
    tags: ["生物", "传承", "强化"]
  },
  {
    id: "mha-support-gear",
    name: "支撑装置（战斗服）",
    aliases: ["Support Gear"],
    workId: "mha",
    level: "L2",
    domain: "material",
    summary: "补足普通人/弱个性的机械与电子装备，现实智能穿戴与辅助装置已可行。",
    description: "支撑装置是发目明（支撑科）打造的辅助装备——喷气臂、抓钩、智能战斗服，补足个性不足。现实中智能穿戴、外骨骼与传感器成熟，工程可达。",
    firstPrinciples: [
      { principle: "智能穿戴辅助", verdict: "achieved", note: "智能穿戴与外骨骼成熟。" },
      { principle: "模块化战斗装备", verdict: "achieved", note: "模块化装备已实用。" }
    ],
    implementation: {
      current: "智能穿戴与外骨骼成熟，模块化量产可行。",
      path: [
        "现实参考：外骨骼 + 智能传感服装。",
        "理论可行，工程成熟。",
        "关键瓶颈：能源、重量。",
        "预研路径：直接工程实现。"
      ],
      blockers: ["能源", "重量"],
      sopStage: "SOP-1 拆解"
    },
    dependencies: ["industrial-3-network-semiconductor", "firearms-age-metallurgy"],
    tags: ["材料", "装备", "辅助"]
  },
  {
    id: "mha-artificial-quirk",
    name: "人工个性",
    aliases: ["Artificial Quirk"],
    workId: "mha",
    level: "L4",
    domain: "bio",
    summary: "人为赋予或复刻个性，触及基因编辑与意识，属推演级生物学。",
    description: "故事中通过手术或科技人为制造/复刻个性（如渡我被身子、治崎廻的变身血清）。现实中基因编辑可改性状，但「人工创造稳定超能力」涉及深层基因组设计与发育控制，多越界。",
    firstPrinciples: [
      { principle: "人为赋予超能力", verdict: "breakthrough", note: "基因治疗可改性状，复杂能力无路径。" },
      { principle: "稳定人工个性", verdict: "violated", note: "发育与整合机制缺失。" }
    ],
    implementation: {
      current: "基因编辑改性状在进展，人工个性无路径。",
      path: [
        "现实参考：基因治疗 + 合成生物学。",
        "理论可行（部分），多越界。",
        "关键瓶颈：基因组设计、发育控制。",
        "预研路径：单性状工程 → 受限能力赋予。"
      ],
      blockers: ["基因组设计", "发育控制", "多越界"],
      sopStage: "SOP-5 集成与验证"
    },
    dependencies: ["mha-quirk"],
    tags: ["生物", "基因", "人工"]
  }
];
if (typeof TECHS !== 'undefined') { TECHS.push(...TECHS_POP); }
