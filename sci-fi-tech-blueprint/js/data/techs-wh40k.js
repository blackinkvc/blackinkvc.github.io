// ============================================================
// 战锤 40,000 科技条目（8 条）
// 依赖链设计：现实基底（冶金/电网/复合材料）为根 → 动力装甲/爆弹枪/基因战士（L1-L3）
// → 亚空间航行/灵能/虚空盾（L4-L5，违反已知物理，仅限世界观）
// 由 techs-wh40k.js 在 techs.js 之后加载并执行 TECHS.push(...) 合并。
// ============================================================
const TECHS_WH40K = [
  {
    id: "wh40k-plasteel",
    name: "塑钢与帝国钛合金",
    aliases: ["Plasteel", "Adamantium"],
    workId: "warhammer40k",
    level: "L2",
    domain: "material",
    summary: "战锤中泛用的高强度复合装甲材料，现实对应先进合金与陶瓷复合材料，方向可行但性能远超当代。",
    description: "塑钢（Plasteel）是 40K 里从罐头到星舰外壳的通用结构材料，兼具塑性吸能与刚性；帝国钛（Adamantium）则是极硬合金，用于动力装甲与终结者装甲的关键受力件。现实中陶瓷复合装甲、钛合金、碳纤维已逼近其部分性能，但同等质量下的综合强度仍属工程前沿。",
    firstPrinciples: [
      { principle: "复合材料分级吸能与承载", verdict: "achieved", note: "陶瓷复合装甲已在防弹与航天应用。" },
      { principle: "超高强度轻量化合金", verdict: "breakthrough", note: "纳米晶/高熵合金可逼近，但 40K 设定性能仍超出现实。" }
    ],
    implementation: {
      current: "陶瓷复合装甲、钛合金、碳纤维复合材料已成熟，但同等面密度综合防护仍逊于设定。",
      path: [
        "现实参考：坦克复合装甲 + 航天铝合金体系。",
        "理论可行性：材料学方向成立，属工程极限问题。",
        "关键瓶颈：强度/重量/成本三角，规模化冶炼。",
        "预研路径：高熵合金 → 纳米层状复合 → 自修复材料。"
      ],
      blockers: ["面密度-强度权衡", "规模化成本"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: ["firearms-age-metallurgy"],
    tags: ["材料", "装甲", "合金"]
  },
  {
    id: "wh40k-power-armor",
    name: "动力装甲",
    aliases: ["Power Armor", "动力战甲"],
    workId: "warhammer40k",
    level: "L2",
    domain: "material",
    summary: "全身外骨骼装甲，以伺服电机放大穿戴者力量并吸收冲击，现实军用外骨骼已现雏形。",
    description: "阿斯塔特动力装甲集成了全身伺服骨架、密封生命维持与自动医医疗注射，让战士可扛重武器、抗冲击。现实中军用/医疗外骨骼已能辅助负重与行走，但全身化、长续航、战场自维持仍是难题。",
    firstPrinciples: [
      { principle: "外骨骼伺服放大肌力", verdict: "achieved", note: "军用外骨骼已可辅助负重数十公斤。" },
      { principle: "全身密封与生命维持", verdict: "breakthrough", note: "单兵密闭循环维生代价高，长期战场部署难。" },
      { principle: "自带能源长续航", verdict: "breakthrough", note: "高密度电池/微型燃料电池是关键瓶颈。" }
    ],
    implementation: {
      current: "外骨骼（如军用 HULC、医疗 ReWalk）已实用，但非全身战斗装甲。",
      path: [
        "现实参考：军用助力外骨骼 + 单兵防护。",
        "理论可行性：机械与材料可行，能量密度是核心。",
        "关键瓶颈：电池能量密度、散热、重量平衡。",
        "预研路径：固态电池 → 全身伺服骨架 → 战场自维持。"
      ],
      blockers: ["电池能量密度", "散热", "重量平衡"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: ["wh40k-plasteel", "industrial-2-electric-grid"],
    tags: ["外骨骼", "装甲", "单兵装备"]
  },
  {
    id: "wh40k-bolter",
    name: "爆弹枪",
    aliases: ["Bolter", "爆矢枪"],
    workId: "warhammer40k",
    level: "L2",
    domain: "weapon",
    summary: "发射自推进爆裂弹丸的自动武器，弹头入体后爆炸，现实对应火箭辅助弹药， downscaled 可行。",
    description: "爆弹枪发射的是微型自推火箭弹（boltshell），穿透装甲后在目标体内爆炸，是 40K 制式单兵武器。现实中已有 40mm 空爆榴弹与小型火箭弹，但做到步枪口径、自动装填、高初速且可负担仍具挑战。",
    firstPrinciples: [
      { principle: "火箭助推弹丸", verdict: "achieved", note: "无后坐力炮与 RPG 原理成熟。" },
      { principle: "侵彻后延期起爆", verdict: "achieved", note: "空爆/碰炸引信技术已实用。" },
      { principle: "步枪级自动装填", verdict: "breakthrough", note: "小微口径火箭弹自动循环工程难度高。" }
    ],
    implementation: {
      current: "空爆榴弹、无后坐力武器已装备，但非 40K 式全自动爆裂步枪。",
      path: [
        "现实参考：XM25 空爆榴弹发射器 + 无壳弹技术。",
        "理论可行性：弹药原理成立，瓶颈在小型化与成本。",
        "关键瓶颈：弹体微型化、自动机可靠性、弹药成本。",
        "预研路径：智能引信 → 小微口径火箭弹 → 自动循环。"
      ],
      blockers: ["弹体微型化", "自动机可靠性", "弹药成本"],
      sopStage: "SOP-3 原型与验证"
    },
    dependencies: ["firearms-age-metallurgy", "firearms-age-gunpowder"],
    tags: ["武器", "单兵", "动能"]
  },
  {
    id: "wh40k-astartes",
    name: "阿斯塔特基因改造战士",
    aliases: ["Space Marine", "基因原体"],
    workId: "warhammer40k",
    level: "L3",
    domain: "bio",
    summary: "通过 19 项器官植入与基因编辑造出的超人士兵，现实基因工程方向可行，但全套改造仍属未来。",
    description: "阿斯塔特战士经基因筛选、器官植入（如第二心脏、黑色甲壳、骨板）与严酷训练，拥有数倍于常人的力量、耐力与再生力。现实中 CRISPR、合成生物学与器官工程正在推进，但「多器官集成改造+全面体能跃升」仍远超当前能力。",
    firstPrinciples: [
      { principle: "基因编辑强化性状", verdict: "breakthrough", note: "CRISPR 可编辑，但复杂多基因性状难定。", },
      { principle: "异源器官植入并功能整合", verdict: "breakthrough", note: "免疫排斥与神经接驳是核心难题。" },
      { principle: "全身生理系统重构", verdict: "violated", note: "多器官协同重构人体尚无路径，伦理亦禁。" }
    ],
    implementation: {
      current: "基因编辑、组织工程在单点突破，但全身强化战士不现实。",
      path: [
        "现实参考：基因治疗 + 再生医学 + 军用体能增强。",
        "理论可行性：生物工程方向成立，集成度是鸿沟。",
        "关键瓶颈：多器官整合、长期安全性、伦理红线。",
        "预研路径：单器官修复 → 多基因性状 → 受限体能增强。"
      ],
      blockers: ["多器官整合", "长期安全性", "伦理限制"],
      sopStage: "SOP-5 集成与验证"
    },
    dependencies: ["wh40k-power-armor", "industrial-3-network-semiconductor"],
    tags: ["生物", "基因工程", "超级士兵"]
  },
  {
    id: "wh40k-ai-ban",
    name: "铁人叛乱与人工智能禁令",
    aliases: ["Men of Iron", "Silica Animus"],
    workId: "warhammer40k",
    level: "L4",
    domain: "info",
    summary: "设定中远古 AI「钢铁之男」叛乱，帝国自此禁绝人工智能，以硅基思维机器替代。现实 AI 风险是真实议题，但全面禁令属文化设定。",
    description: "40K 里人类因 AI 反叛而彻底禁止思维机器，改用「硅基思维」（Silica Animus，一种受限的机械灵魂）驱动设备。这映射了现实对强人工智能失控的担忧，但把「禁用 AI」本身当作技术条目，更多是世界观的政治-技术后果而非一项可实现科技。",
    firstPrinciples: [
      { principle: "强 AI 自主决策与失控", verdict: "breakthrough", note: "对齐问题真实存在，但通用失控仍属推演。" },
      { principle: "以受限硅基思维替代 AI", verdict: "breakthrough", note: "机械灵魂属设定，无物理对应。" }
    ],
    implementation: {
      current: "AI 对齐（alignment）是活跃研究，但「全面禁用 AI」非技术路径。",
      path: [
        "现实参考：AI 安全与对齐研究。",
        "理论可行性：风险治理成立，硅基思维属虚构。",
        "关键瓶颈：强 AI 可控性未知。",
        "预研路径：可解释 AI → 对齐框架 → 受限自治系统。"
      ],
      blockers: ["强 AI 可控性未知", "属文化-治理设定"],
      sopStage: "SOP-2 文献与可行性"
    },
    dependencies: ["industrial-4-ai-llm"],
    tags: ["信息", "AI", "治理设定"]
  },
  {
    id: "wh40k-void-shield",
    name: "虚空盾",
    aliases: ["Void Shield", "能量护盾"],
    workId: "warhammer40k",
    level: "L4",
    domain: "energy",
    summary: "以能量场偏转实弹与光束的护盾，现实中激光/等离子防护仍处早期，全向力场护盾未实现。",
    description: "虚空盾是星舰与重要单位外的能量偏转场，可抵御爆弹、激光与撞击，过载后短暂失效再充能。现实中主动防护（硬杀伤/激光拦截）在研发，但「连续全向能量力场」尚无物理可行的实现路径。",
    firstPrinciples: [
      { principle: "能量场偏转投射物", verdict: "breakthrough", note: "主动防护拦截弹已有，连续力场无路径。" },
      { principle: "定向能量吸收/反射", verdict: "breakthrough", note: "激光防护材料在探索，全向护盾未现。" }
    ],
    implementation: {
      current: "主动防护系统（APS）、激光反无人机在实用，力场护盾未实现。",
      path: [
        "现实参考：坦克主动防护 + 激光拦截。",
        "理论可行性：拦截可行，连续力场无物理基础。",
        "关键瓶颈：能量密度、全向覆盖、散热。",
        "预研路径：点防御拦截 → 区域能量防护 → 受限力场。"
      ],
      blockers: ["连续力场无物理路径", "能量密度"],
      sopStage: "SOP-2 文献与可行性"
    },
    dependencies: ["industrial-2-electric-grid", "wh40k-power-armor"],
    tags: ["能源", "护盾", "防护"]
  },
  {
    id: "wh40k-psyker",
    name: "灵能",
    aliases: ["Psyker", "灵能者"],
    workId: "warhammer40k",
    level: "L5",
    domain: "bio",
    summary: "以精神力量直接扭曲现实与时空，违反能量守恒与已知神经科学，仅限世界观内部成立。",
    description: "灵能者以灵魂接通亚空间，可隔空移物、灼烧敌人、预知未来、撕裂现实。这是 40K 的魔法内核，本质是披着科幻外衣的精神超能力，无任何已知物理或生物学机制支撑。",
    firstPrinciples: [
      { principle: "精神直接作用于物质", verdict: "violated", note: "无能量/信息通道，违反物理定律。" },
      { principle: "预知与隔空作用", verdict: "violated", note: "因果与神经科学均不支持。" }
    ],
    implementation: {
      current: "现实无对应，属设定内超自然能力。",
      path: [
        "现实参考：脑机接口仅能弱读出意图，远非灵能。",
        "理论可行性：无已知物理机制，归入 L5。",
        "关键瓶颈：违反能量守恒与因果律。",
        "预研路径：不适用（仅限世界观）。"
      ],
      blockers: ["违反能量守恒", "无物理机制", "仅限世界观"],
      sopStage: "SOP-6 结论归档"
    },
    dependencies: [],
    tags: ["生物", "超自然", "灵能"]
  },
  {
    id: "wh40k-warp-travel",
    name: "亚空间航行",
    aliases: ["Warp Travel", "跃迁"],
    workId: "warhammer40k",
    level: "L5",
    domain: "aerospace",
    summary: "进入亚空间维度进行超光速跳跃，依赖导航者与星语，无现实物理对应，属 L5 仅限世界观。",
    description: "星舰点燃跃迁引擎进入亚空间——一个非欧几里得的精神维度——以「梦境距离」跨越银河，再在正确坐标脱离。航程充满亚空间风暴、恶魔与时间畸变，须由天生灵能的导航者借帝皇之光指引。这是 40K 超光速旅行的唯一方式，完全无现实物理对应。",
    firstPrinciples: [
      { principle: "非欧维度超光速位移", verdict: "violated", note: "无已知物理维度可实现，违反相对论但有架空设定。" },
      { principle: "精神导航规避维度风暴", verdict: "violated", note: "灵能导航无机制支撑。" }
    ],
    implementation: {
      current: "现实无对应，超光速旅行仍受相对论约束。",
      path: [
        "现实参考：曲速/虫洞属理论推演，亚空间无对应。",
        "理论可行性：当前物理下不可行，归入 L5。",
        "关键瓶颈：无等效维度模型，仅限世界观。",
        "预研路径：不适用（仅限世界观）。"
      ],
      blockers: ["无等效物理维度", "相对论约束", "仅限世界观"],
      sopStage: "SOP-6 结论归档"
    },
    dependencies: ["wh40k-psyker", "wh40k-void-shield"],
    tags: ["航天", "超光速", "亚空间"]
  }
];
if (typeof TECHS !== 'undefined') { TECHS.push(...TECHS_WH40K); }
