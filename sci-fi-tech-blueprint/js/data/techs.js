// ============================================================
// 科技条目数据（核心）
// 每一条：作品出处、实现分级、所属领域、原理分析、实现路径、依赖关系
// 注意：dependencies 为"本科技所依赖的前置科技 id"，用于科技树 DAG
// ============================================================
const TECHS = [
  {
    id: "communicator",
    name: "手持通讯器",
    aliases: ["手机", "随身通讯器"],
    workId: "star-trek",
    level: "L1",
    domain: "info",
    summary: "星舰船员随身携带的微型双向对讲机，现实中智能手机早已全面超越。",
    description: "《星际迷航》中柯克船长与船员人手一台的手持通讯器，翻盖式，可随时呼叫舰桥或传送。它是 1960 年代对「无线移动通信」的前瞻想象，也是今天智能手机在文化上的直接祖先。",
    firstPrinciples: [
      { principle: "电磁波无线传输语音", verdict: "achieved", note: "移动通信已实现，且 5G/卫星通信远超剧中设定。" },
      { principle: "微型化便携设备", verdict: "achieved", note: "摩尔定律推动芯片微型化，智能手表等已超越翻盖对讲机。" },
      { principle: "全球/跨星际无缝接入", verdict: "breakthrough", note: "跨星际即时通信需突破光速限制，非电磁波可及。" }
    ],
    implementation: {
      current: "手机、卫星电话、5G 网络均为成熟商用技术，跨星际通信仍不可行。",
      path: [
        "现实参考：翻盖手机正是以剧中道具为灵感设计。",
        "理论可行性：电磁波通信完全符合物理学。",
        "关键瓶颈：跨光年级距离通信的延迟与衰减。",
        "预研路径：从近地轨道卫星通信逐步迈向深空激光通信。"
      ],
      blockers: ["光速极限", "深空信号衰减"],
      sopStage: "SOP-1 定义与拆解"
    },
    dependencies: [],
    tags: ["通信", "无线", "便携设备"]
  },
  {
    id: "fusion-power",
    name: "可控核聚变",
    aliases: ["聚变电站"],
    workId: "foundation",
    level: "L2",
    domain: "energy",
    summary: "恒星级能量的人工可控释放，工程可行性高，ITER 与多个私营项目正在推进。",
    description: "《基地》及众多科幻作品中，聚变反应堆是星舰与行星的标配能源。现实中，托卡马克、仿星器等装置已验证了受控聚变放电，当前目标是实现「能量输出 > 输入」的净增益发电。",
    firstPrinciples: [
      { principle: "轻核聚变释放结合能（E=mc²）", verdict: "achieved", note: "聚变放能已在氢弹与实验堆中确认，物理无阻碍。" },
      { principle: "高温等离子体约束", verdict: "breakthrough", note: "需长期稳定约束上亿度等离子体，磁约束/惯性约束是关键工程瓶颈。" },
      { principle: "净能量增益与连续发电", verdict: "breakthrough", note: "ITER 目标 Q=10，商业化仍需材料与工程突破。" }
    ],
    implementation: {
      current: "ITER 在建；2022 年 NIF 惯性聚变实现点火里程碑。中国东方超环(EAST)、韩国 KSTAR 持续刷新纪录。",
      path: [
        "现实参考：托卡马克磁约束 + 激光惯性约束双路线并行。",
        "理论可行性：物理原理完全成立，是工程问题而非物理问题。",
        "关键瓶颈：等离子体不稳定性、中子辐照对结构材料的损伤、氚增殖。",
        "预研路径：ITER 示范堆 → DEMO 商用堆 → 2030-2050 电网接入。"
      ],
      blockers: ["等离子体约束时长", "第一壁材料抗中子辐照", "氚自持"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: ["fusion-power-basic"],
    tags: ["能源", "聚变", "恒星能量"]
  },
  {
    id: "fusion-power-basic",
    name: "聚变放能基础",
    aliases: ["聚变原理"],
    workId: "foundation",
    level: "L1",
    domain: "energy",
    summary: "已验证的核聚变放能原理，是可控聚变能源的基础前提。",
    description: "氢弹、太阳及各类聚变实验装置共同验证了「轻核聚合释放巨大能量」这一基础物理事实，构成可控聚变技术树的根节点。",
    firstPrinciples: [
      { principle: "核聚变释放结合能", verdict: "achieved", note: "已在氢弹与实验装置中反复验证。" }
    ],
    implementation: {
      current: "原理已完全确认，属基础科学事实。",
      path: ["现实参考：太阳聚变、氢弹、聚变实验装置。"],
      blockers: [],
      sopStage: "SOP-2 原理分析"
    },
    dependencies: [],
    tags: ["能源", "聚变", "基础科学"]
  },
  {
    id: "replicant",
    name: "复制人",
    aliases: ["人造人类", "生物工程人"],
    workId: "blade-runner",
    level: "L2",
    domain: "bio",
    summary: "生物工程合成的人类替代体，现有合成生物学与义体技术已接近雏形，受伦理与成本制约。",
    description: "《银翼杀手》中的复制人是基因工程制造、外形与人类无异的工人/战士，具有超人体能。现实中，基因编辑、干细胞、合成生物学已能制造简单组织与器官，但制造完整、自主的人类仍遥不可及。",
    firstPrinciples: [
      { principle: "由基因决定身体发育", verdict: "achieved", note: "基因编辑(Cas9)与合成生物学已验证基因可定向改写。" },
      { principle: "体外生长完整人体", verdict: "breakthrough", note: "需解决器官级工程、神经系统整合，复杂度极高。" },
      { principle: "自主意识与智能", verdict: "breakthrough", note: "强人工智能与意识的本质尚未解决。" }
    ],
    implementation: {
      current: "合成器官、仿生义肢、类器官芯片已实现，完整人造人仍属概念。",
      path: [
        "现实参考：CRISPR 基因编辑、类器官、脑机接口(Neuralink)。",
        "理论可行性：单器官可行，全人整合超出当前工程能力。",
        "关键瓶颈：神经系统与意识的还原，伦理法规。",
        "预研路径：器官芯片 → 全植入式义体 → 受限领域的'增强人类'。"
      ],
      blockers: ["意识本质", "神经-机器接口", "伦理法规"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: ["neural-interface"],
    tags: ["生物", "人造人", "基因工程"]
  },
  {
    id: "neural-interface",
    name: "脑机接口",
    aliases: ["神经界面"],
    workId: "blade-runner",
    level: "L2",
    domain: "bio",
    summary: "大脑与电子设备双向通信的接口，现有侵入式脑机接口已实现意念控制外设。",
    description: "脑机接口是复制人记忆植入与义体控制的技术前提。现实中，Neuralink、Synchron 等已实现瘫痪患者用意念控制光标与机械臂，属 L2 可行技术。",
    firstPrinciples: [
      { principle: "神经元电活动可被记录与刺激", verdict: "achieved", note: "侵入式电极阵列已验证双向通信。" },
      { principle: "高带宽长期植入", verdict: "breakthrough", note: "需解决电极生物相容性与长期信号衰减。" }
    ],
    implementation: {
      current: "意念打字、机械臂控制已有人体试验，传输带宽有限。",
      path: ["现实参考：Neuralink、犹他阵列、脑机接口开颅手术。"],
      blockers: ["植入寿命", "信号带宽", "免疫排斥"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["生物", "脑机接口", "神经"]
  },
  {
    id: "cryo-sleep",
    name: "人体冷冻冬眠",
    aliases: ["低温冬眠", "深度休眠"],
    workId: "odyssey",
    level: "L3",
    domain: "bio",
    summary: "通过低温暂停新陈代谢以跨越漫长航程，符合热力学，需攻克低温下的冰晶损伤。",
    description: "《2001太空漫游》等作品中，冬眠舱让宇航员在星际航行中沉睡数年。现实中，医学低温保存用于器官移植与精子卵子保存，但完整人体的低温冬眠因冰晶损伤与代谢再启动难题尚未实现。",
    firstPrinciples: [
      { principle: "低温降低化学反应速率", verdict: "achieved", note: "Arrhenius 定律成立，低温可大幅减缓代谢。" },
      { principle: "细胞在低温下免受冰晶损伤", verdict: "breakthrough", note: "需玻璃化保护剂，防止细胞内冰晶刺破细胞膜。" },
      { principle: "长期冬眠后无损复苏", verdict: "breakthrough", note: "代谢再启动与神经损伤修复是核心挑战。" }
    ],
    implementation: {
      current: "小鼠/猪等小型哺乳动物短暂诱导冬眠样状态有进展；人体冬眠仍无。",
      path: [
        "现实参考：低温生物学、器官低温保存、琥珀酸/基因诱导的哺乳动物冬眠研究。",
        "理论可行性：热力学允许，问题是生物损伤控制。",
        "关键瓶颈：全身玻璃化与均匀复温，神经不可逆损伤。",
        "预研路径：器官深低温保存 → 小型动物长期休眠 → 灵长类 → 人体。"
      ],
      blockers: ["冰晶损伤", "均匀复温", "代谢再启动"],
      sopStage: "SOP-3 理论研究与建模"
    },
    dependencies: [],
    tags: ["生物", "冬眠", "低温医学"]
  },
  {
    id: "psychohistory",
    name: "心理史学",
    aliases: ["群体行为预测"],
    workId: "foundation",
    level: "L3",
    domain: "info",
    summary: "以统计力学方式预测庞大人口群体的宏观行为，需海量数据与复杂社会模型。",
    description: "哈里·谢顿创立心理史学，用数学预测数百万人的社会走向。现实中，计算社会科学用大数据与网络科学预测舆情、经济趋势，但预测「万年后社会命运」远超当前能力。",
    firstPrinciples: [
      { principle: "宏观群体行为可统计平均", verdict: "achieved", note: "统计学、复杂系统科学已验证群体涌现规律(如股市、疫情)。" },
      { principle: "个体不可预测但群体可预测", verdict: "breakthrough", note: "需封闭系统假设，现实中社会是开放、异质、有反身性的系统。" },
      { principle: "万年级长时程预测", verdict: "violated", note: "混沌系统的长时间预测指数发散，信息不足不可逆。" }
    ],
    implementation: {
      current: "计算社会科学、ABM 建模、AI 舆情分析已可做短期预测。",
      path: [
        "现实参考：SIR 传染病模型、大选预测、计算社会科学。",
        "理论可行性：短期可行，长时程受混沌与信息缺失限制。",
        "关键瓶颈：系统开放性、反身性(预测改变行为)、历史数据不足。",
        "预研路径：强化短中期社会建模，定位为'社会气象预报'而非'预言'。"
      ],
      blockers: ["混沌发散", "系统开放性", "数据覆盖不足"],
      sopStage: "SOP-3 理论研究与建模"
    },
    dependencies: ["big-data"],
    tags: ["信息", "社会预测", "统计力学"]
  },
  {
    id: "big-data",
    name: "大数据与复杂系统建模",
    aliases: ["社会计算"],
    workId: "foundation",
    level: "L1",
    domain: "info",
    summary: "已实现的海量数据处理与群体行为建模，是心理史学的工程基础。",
    description: "大数据、云计算、机器学习已能实时分析海量社会行为数据，构成心理史学的现实技术底座。",
    firstPrinciples: [
      { principle: "数据驱动社会洞察", verdict: "achieved", note: "社交媒体、移动支付、推荐系统已大规模应用。" }
    ],
    implementation: {
      current: "成熟技术，是心理史学可行性的现实依据。",
      path: ["现实参考：云计算、图神经网络、复杂网络分析。"],
      blockers: [],
      sopStage: "SOP-1 定义与拆解"
    },
    dependencies: [],
    tags: ["信息", "大数据", "复杂系统"]
  },
  {
    id: "antimatter-engine",
    name: "反物质引擎",
    aliases: ["物质-反物质推进"],
    workId: "three-body",
    level: "L3",
    domain: "aerospace",
    summary: "正反物质湮灭释放极大能量驱动航天器，需突破反物质的大规模生产与储存。",
    description: "《三体》及硬科幻中，反物质是星际飞行的终极能源。反物质湮灭将静止质量 100% 转化为能量（比聚变高百倍），但现实只能在粒子加速器中极微量地产生。",
    firstPrinciples: [
      { principle: "正反物质湮灭 E=mc²", verdict: "achieved", note: "已在实验室观测到正电子湮灭，能量转化确凿。" },
      { principle: "大规模生产反物质", verdict: "breakthrough", note: "目前全球年产量以纳克计，能量投入远大于产出。" },
      { principle: "安全储存反物质", verdict: "breakthrough", note: "需电磁陷阱(潘宁阱)悬浮，一克反物质与物质接触即爆炸。" }
    ],
    implementation: {
      current: "欧洲核子研究中心(CERN)可产生并俘获反氢原子，量级在纳克以下。",
      path: [
        "现实参考：CERN 反物质实验、太阳帆/核热推进。",
        "理论可行性：物理成立，工程与能量经济性极难。",
        "关键瓶颈：生产能量负收益、储存失控风险、推进系统耦合。",
        "预研路径：反物质束流推进概念 → 生产能量收益研究 → 极小型验证。"
      ],
      blockers: ["反物质生产能量效率", "安全储存", "湮灭能量定向控制"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["航天", "反物质", "推进"]
  },
  {
    id: "warp-drive",
    name: "曲率引擎（超光速航行）",
    aliases: ["曲速引擎", "阿库别瑞引擎"],
    workId: "three-body",
    level: "L4",
    domain: "aerospace",
    summary: "扭曲时空泡实现超光速航行，挑战相对论，需负能量等重大理论突破。",
    description: "曲率引擎通过压缩飞船前方时空、扩张后方时空，使飞船在「局域光速」之下移动而整体超越光速。阿库别瑞(Alcubierre)在 1994 年提出该度规在数学上可行，但需负能量密度与奇异物质，触及广义相对论与量子引力边界。",
    firstPrinciples: [
      { principle: "时空可被几何扭曲", verdict: "achieved", note: "广义相对论证实引力即时空弯曲(引力波已观测)。" },
      { principle: "局部时空泡超光速", verdict: "breakthrough", note: "数学度规可行，但需负能量，违反能量条件。" },
      { principle: "负能量与奇异物质", verdict: "violated", note: "已知物质均为正能量，负能量密度是理论瓶颈。" }
    ],
    implementation: {
      current: "停留在理论数学阶段，无实验验证；NASA 曾评估概念可行性。",
      path: [
        "现实参考：Alcubierre 度规、卡西米尔效应(微负能量)、光帆。",
        "理论可行性：数学可写，物理上需负能量/奇异物质。",
        "关键瓶颈：负能量密度的现实来源，光速屏障的因果性悖论。",
        "预研路径：量子引力理论发展 → 负能量实验观测 → 理论再评估。"
      ],
      blockers: ["负能量密度", "奇异物质", "因果性/时序保护"],
      sopStage: "SOP-3 理论研究与建模"
    },
    dependencies: [],
    tags: ["航天", "超光速", "时空"]
  },
  {
    id: "holtzman-shield",
    name: "霍尔茨曼护盾",
    aliases: ["个人护盾", "力场护盾"],
    workId: "dune",
    level: "L5",
    domain: "weapon",
    summary: "以特殊力场阻挡高速物而放行低速物，依赖虚构的霍尔茨曼效应，现实无法实现。",
    description: "《沙丘》中，霍尔茨曼发生器产生个人护盾，高速子弹会被弹开，而缓慢接近的刀锋可穿透——这造就了沙丘独特的近身格斗。该设定依赖虚构的「霍尔茨曼效应」，无现实物理对应。",
    firstPrinciples: [
      { principle: "能量场选择性阻挡不同速度物体", verdict: "violated", note: "已知力场(电磁、引力)无法只挡高速物而放行低速物。" },
      { principle: "可随身携带的高功率力场发生器", verdict: "violated", note: "能量密度与能源小型化远超已知物理。" },
      { principle: "人造宏观力场隔绝动能", verdict: "violated", note: "现实无对应力场机制可阻挡宏观动能粒子。" }
    ],
    implementation: {
      current: "主动防护(如坦克反应装甲、近防炮)用物理手段拦截，非力场。",
      path: [
        "现实参考：主动防护系统(APS)、电磁偏转概念。",
        "理论可行性：无已知物理可实现选择性宏观力场。",
        "关键瓶颈：不存在对应物理效应，纯属虚构设定。",
        "预研路径：仅可作为'叙事设定'研究，无工程路径。"
      ],
      blockers: ["无对应物理效应", "违反已知力场机制"],
      sopStage: "SOP-2 原理分析"
    },
    dependencies: [],
    tags: ["武器", "力场", "护盾"]
  },
  // ==================== 沙丘（补充） ====================
  {
    id: "melange",
    name: "美琅脂（香料）",
    aliases: ["香料", "Spice"],
    workId: "dune",
    level: "L5",
    domain: "bio",
    summary: "沙丘行星独有的香料，赋予延长寿命、预知能力与超空间导航能力，现实无对应物质。",
    description: "美琅脂是《沙丘》宇宙最核心的资源：吸入后延长寿命、开启预知、支持导航员安全穿越超空间。它由沙虫生命周期产出，为阿拉基斯独有。现实中不存在能赋予预知能力或支撑超空间航行的物质，完全依赖世界观设定。",
    firstPrinciples: [
      { principle: "特定物质延长寿命并增强感知", verdict: "breakthrough", note: "现实有部分天然化合物具抗氧化/寿命调节作用，但远达不到延寿与预知。" },
      { principle: "物质赋予超空间导航能力", verdict: "violated", note: "导航需超空间/时空折叠，非化学物质可及。" },
      { principle: "预知未来的精神能力", verdict: "violated", note: "预知违反信息因果与已知神经科学。" }
    ],
    implementation: {
      current: "无对应物质；现实研究聚焦神经活性化合物、寿命相关通路(如 AMPK/mTOR)。",
      path: [
        "现实参考：神经科学、抗衰老研究。",
        "理论可行性：延寿物质部分可行，预知/超空间导航不可行。",
        "关键瓶颈：预知与超空间为纯虚构设定。",
        "预研路径：仅可研究'延寿药理'的现实化方向。"
      ],
      blockers: ["无现实对应物质", "预知违反物理"],
      sopStage: "SOP-2 原理分析"
    },
    dependencies: [],
    tags: ["生物", "香料", "预知"]
  },
  {
    id: "foldspace-drive",
    name: "折叠空间航行",
    aliases: ["超空间引擎", "导航员折叠"],
    workId: "dune",
    level: "L5",
    domain: "aerospace",
    summary: "通过折叠空间实现瞬时星际航行，依赖美琅脂与导航员预知能力，现实无法实现。",
    description: "沙丘中的星舰不超光速，而是「折叠空间」将两点拉近后跃迁。这种空间折叠依赖导航员在美琅脂的加持下预知安全路线，是世界观设定下的独特航行方式。",
    firstPrinciples: [
      { principle: "空间可被折叠连通两点", verdict: "violated", note: "空间折叠需极端能量与未知物理，无现实依据。" },
      { principle: "折叠依赖预知导航", verdict: "violated", note: "导航依赖预知，违反已知物理。" }
    ],
    implementation: {
      current: "无对应技术，仅理论中虫洞/曲率有数学雏形。",
      path: ["现实参考：虫洞、曲率引擎理论(均需负能量)。"],
      blockers: ["空间折叠无物理依据", "依赖预知导航"],
      sopStage: "SOP-3 理论研究与建模"
    },
    dependencies: ["melange"],
    tags: ["航天", "超空间", "空间折叠"]
  },
  // ==================== 流浪地球 ====================
  {
    id: "heavy-fusion",
    name: "重元素聚变",
    aliases: ["石聚变", "重核聚变"],
    workId: "wandering-earth",
    level: "L3",
    domain: "energy",
    summary: "用石块等重元素作燃料的聚变，为行星发动机供能，理论上可行但触发阈值远高于氢聚变。",
    description: "《流浪地球》中的行星发动机以挖掘的岩石为燃料，进行「重元素聚变」释放能量。现实中的可控聚变以氘氚等轻核为主；重核聚变需要更高温高压且反应截面极小，工程难度远超轻核聚变。",
    firstPrinciples: [
      { principle: "重核聚变释放结合能", verdict: "achieved", note: "核物理层面恒星内部存在重元素合成(r过程/s过程)，但地球工程化极难。" },
      { principle: "常温常压下约束重核聚变", verdict: "breakthrough", note: "需要远超轻核聚变的点火条件与等离子体约束。" },
      { principle: "便携化行星级能量输出", verdict: "breakthrough", note: "输出需达推动行星量级，远超当前能源体系。" }
    ],
    implementation: {
      current: "可控聚变仍以轻核为主；重核聚变仅在恒星核合成与超新星中发生。",
      path: [
        "现实参考：轻核磁约束/惯性约束聚变。",
        "理论可行性：物理成立但工程极端困难。",
        "关键瓶颈：点火条件、反应截面、连续约束。",
        "预研路径：先实现氘氚聚变 → 探索氘-氘 → 远期评估重核路线。"
      ],
      blockers: ["点火温度极高", "反应截面小", "等离子体约束"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: ["fusion-power-basic"],
    tags: ["能源", "聚变", "重核"]
  },
  {
    id: "planet-engine",
    name: "行星发动机",
    aliases: ["地球发动机", "推进引擎"],
    workId: "wandering-earth",
    level: "L3",
    domain: "energy",
    summary: "推动地球脱离太阳系的巨型发动机阵列，能量与工程挑战远超当前文明，理论可行但需重大突破。",
    description: "上万台行星发动机安装在地球北半球，以重元素聚变驱动，喷射等离子体流推动地球转向并脱离太阳系。单台发动机推力即可改变地球公转，能量需求相当于恒星能量级别的工业应用。",
    firstPrinciples: [
      { principle: "牛顿第三定律反冲推进", verdict: "achieved", note: "推进原理成立，任何推进器都依赖反冲。" },
      { principle: "推动地球需巨大能量", verdict: "breakthrough", note: "需将地球加速至逃逸速度，能量堪比恒星输出，远超当前文明。" },
      { principle: "地壳承受行星级推力", verdict: "breakthrough", note: "发动机推力需均匀分散，否则撕裂地壳，工程材料极限挑战。" }
    ],
    implementation: {
      current: "推进原理成熟(火箭)，行星级推力无工程先例。",
      path: [
        "现实参考：离子推进、核热推进、引力弹弓。",
        "理论可行性：物理成立，能量与材料是瓶颈。",
        "关键瓶颈：总能量、地壳应力、连续百年运行。",
        "预研路径：概念可行但成本不可想象，属文明级工程。"
      ],
      blockers: ["总能量不足", "地壳结构承受", "千年持续运行"],
      sopStage: "SOP-5 工程实现与原型"
    },
    dependencies: ["heavy-fusion"],
    tags: ["能源", "行星工程", "推进"]
  },
  {
    id: "earth-stop",
    name: "地球刹车与转向系统",
    aliases: ["转向发动机", "自转刹车"],
    workId: "wandering-earth",
    level: "L3",
    domain: "aerospace",
    summary: "停止地球自转并调整航向的巨型发动机阵列，角动量与地壳力学挑战极端。",
    description: "为让地球离开太阳系，需先停止地球自转（刹车），再调整姿态使推进方向对准目标。这涉及地球巨大的角动量（约 7.3×10³³ kg·m²/s），刹车过程会引发海啸与地壳剧变，是《流浪地球》中最具灾难性的工程之一。",
    firstPrinciples: [
      { principle: "角动量守恒可被外力改变", verdict: "achieved", note: "力学原理成立，但需对抗地球全部自转角动量。" },
      { principle: "短时间内停止自转", verdict: "breakthrough", note: "需巨大力矩，刹车过程的海啸/地壳应力远超承受能力。" }
    ],
    implementation: {
      current: "无可行方案；地壳潮汐与角动量转移是核心难题。",
      path: ["现实参考：角动量守恒、行星潮汐演化。"],
      blockers: ["巨大角动量", "地壳应力", "海啸灾难"],
      sopStage: "SOP-3 理论研究与建模"
    },
    dependencies: ["heavy-fusion"],
    tags: ["航天", "行星工程", "角动量"]
  },
  {
    id: "helium-flash-prediction",
    name: "氦闪预警与恒星监测",
    aliases: ["恒星演化预测", "太阳监测网"],
    workId: "wandering-earth",
    level: "L2",
    domain: "info",
    summary: "对恒星演化与氦闪等灾变事件的监测预警系统，现有天文观测与建模已可做到数千年尺度评估。",
    description: "《流浪地球》设定科学家监测到太阳即将氦闪，从而启动「流浪地球」计划。现实中，恒星演化理论已相当成熟，天文学可预测恒星生命周期，但「氦闪」（太阳约50亿年后将发生的氦点燃）时间尺度极为漫长。",
    firstPrinciples: [
      { principle: "恒星演化可用物理建模", verdict: "achieved", note: "恒星结构与演化理论已高度成熟(如赫罗图、太阳模型)。" },
      { principle: "精确预测氦闪时刻", verdict: "breakthrough", note: "时间尺度亿年，测量不确定度与混沌放大使其只能给概率区间。" }
    ],
    implementation: {
      current: "太阳监测网、日震学、恒星演化模型均已成熟。",
      path: ["现实参考：SOHO/帕克太阳探测器、太阳物理、恒星演化模拟。"],
      blockers: ["亿年尺度不确定度"],
      sopStage: "SOP-2 原理分析"
    },
    dependencies: ["big-data"],
    tags: ["信息", "恒星", "天文预测"]
  },
  // ==================== 星际穿越 ====================
  {
    id: "wormhole",
    name: "可穿越虫洞",
    aliases: ["时空捷径", "爱因斯坦-罗森桥"],
    workId: "interstellar",
    level: "L4",
    domain: "aerospace",
    summary: "连接时空两点的稳定通道，理论源于广义相对论，但需负能量物质维持，尚无法实现。",
    description: "《星际穿越》中土星附近出现一个通往遥远星系的稳定虫洞。广义相对论允许虫洞解存在，但稳定可穿越虫洞需要「奇异物质」产生负能量密度以抵抗引力坍缩，目前只在理论层面。",
    firstPrinciples: [
      { principle: "广义相对论允许虫洞解", verdict: "achieved", note: "爱因斯坦-罗森桥等解在数学上成立。" },
      { principle: "稳定喉部防坍缩", verdict: "breakthrough", note: "需负能量/奇异物质支撑，违反弱能量条件。" },
      { principle: "实际制造虫洞", verdict: "violated", note: "无现实机制可制造宏观虫洞，量子引力仍未知。" }
    ],
    implementation: {
      current: "仅理论数学；卡西米尔效应证明微量子负能量存在但量级极小。",
      path: [
        "现实参考：阿尔库别雷度规、卡西米尔效应、引力波探测。",
        "理论可行性：数学可行，物理实现需负能量。",
        "关键瓶颈：负能量物质、时空工程、稳定性。"
      ],
      blockers: ["负能量密度", "奇异物质", "量子引力未明"],
      sopStage: "SOP-3 理论研究与建模"
    },
    dependencies: [],
    tags: ["航天", "虫洞", "时空"]
  },
  {
    id: "black-hole-power",
    name: "黑洞能源与引力时空调控",
    aliases: ["黑洞利用", "引力弹弓"],
    workId: "interstellar",
    level: "L4",
    domain: "energy",
    summary: "利用黑洞引力、吸积盘能量与时间膨胀效应的终极能源，理论可行但需极端工程。",
    description: "《星际穿越》中人类利用黑洞「卡冈图雅」的引力进行时间膨胀穿梭与引力弹弓，并以此作为人类延续的依托。黑洞吸积盘是宇宙中最高效的能源之一，但靠近黑洞的潮汐力与事件视界带来极端挑战。",
    firstPrinciples: [
      { principle: "黑洞吸积释放巨大能量", verdict: "achieved", note: "吸积盘辐射是已知最高效能量转化(理论效率可超10%)。" },
      { principle: "利用引力时空调控(时间膨胀)", verdict: "breakthrough", note: "广义相对论确认时间膨胀，但控制引力场需极端质量与能量。" },
      { principle: "靠近事件视界安全作业", verdict: "violated", note: "潮汐力与视界物理使近距离作业近乎不可能。" }
    ],
    implementation: {
      current: "仅观测与理论；天鹅座X-1等为研究吸积过程的天然实验室。",
      path: ["现实参考：黑洞吸积模型、引力波、事件视界望远镜。"],
      blockers: ["接近视界危险", "引力场无法人工控制"],
      sopStage: "SOP-3 理论研究与建模"
    },
    dependencies: ["wormhole"],
    tags: ["能源", "黑洞", "引力"]
  },
  {
    id: "time-dilation",
    name: "时间膨胀利用",
    aliases: ["引力时间膨胀", "相对论效应"],
    workId: "interstellar",
    level: "L4",
    domain: "aerospace",
    summary: "利用强引力场使时间变慢，实现「相对时差」，广义相对论已证实，但主动利用需接近致密天体。",
    description: "《星际穿越》中米勒星球因靠近黑洞「卡冈图雅」时间膨胀，一小时相当于地球七年。这是广义相对论的直接推论，已在 GPS 卫星中得到工程级验证；但要达到电影中的量级需靠近黑洞视界。",
    firstPrinciples: [
      { principle: "强引力场使时间变慢", verdict: "achieved", note: "GPS 时钟校正、引力红移实验均已证实。" },
      { principle: "达到1:60000的极端时差", verdict: "breakthrough", note: "需极度接近视界，工程与生存条件极端。" }
    ],
    implementation: {
      current: "GPS 卫星每天需校正约38微秒的相对论时差。",
      path: ["现实参考：GPS相对论校正、引力红移实验。"],
      blockers: ["接近视界", "生存条件"],
      sopStage: "SOP-2 原理分析"
    },
    dependencies: ["black-hole-power"],
    tags: ["航天", "相对论", "时间"]
  },
  // ==================== 攻壳机动队 ====================
  {
    id: "prosthetic-body",
    name: "全义体化",
    aliases: ["义体", "仿生躯体"],
    workId: "ghost-in-shell",
    level: "L2",
    domain: "bio",
    summary: "以机械/生化替代肢体与器官的人体增强，现有仿生义肢已能实现部分功能替代。",
    description: "《攻壳机动队》中义体化高度普及，主角草薙素子除大脑外几乎全身为义体，可高速运动、皮肤变色、脑机直连。现实中智能仿生义肢、人工器官已逐步商用，但「全身无缝替换+脑直连」仍是未来。",
    firstPrinciples: [
      { principle: "机械可替代肢体功能", verdict: "achieved", note: "动力义肢、人工关节、人工器官已临床使用。" },
      { principle: "神经直连控制义体", verdict: "breakthrough", note: "依赖脑机接口带宽与长期稳定性，尚处早期。" },
      { principle: "全身无缝替换并保有人格", verdict: "breakthrough", note: "体感、自主神经、内分泌等系统整合极复杂。" }
    ],
    implementation: {
      current: "智能仿生义肢(如C-Leg)、Neuralink 脑机接口在临床推进。",
      path: [
        "现实参考：仿生义肢、人工耳蜗、脑机接口。",
        "理论可行性：局部可行，全身整合挑战大。",
        "关键瓶颈：神经接口带宽、生物相容、触觉反馈。"
      ],
      blockers: ["神经接口带宽", "免疫排斥", "体感重建"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: ["neural-interface"],
    tags: ["生物", "义体", "人体增强"]
  },
  {
    id: "memory-implant",
    name: "记忆植入与篡改",
    aliases: ["电子脑记忆编辑", "记忆编码"],
    workId: "ghost-in-shell",
    level: "L3",
    domain: "bio",
    summary: "向大脑写入、修改或删除记忆，现有记忆编码研究显示可行，但精度与伦理挑战巨大。",
    description: "攻壳机动队中电子脑可被骇入，记忆可被植入、篡改或删除。现实中，海马体记忆编码(engram)研究已在小鼠中实现「人工记忆」植入，但人类级复杂记忆的精确读写远超当前。",
    firstPrinciples: [
      { principle: "记忆以神经连接模式编码", verdict: "achieved", note: "engram 研究证明记忆可被定位与重激活。" },
      { principle: "精确写入复杂记忆", verdict: "breakthrough", note: "需破解全脑信息编码，目前仅限简单条件记忆。" },
      { principle: "无创或微创植入人类记忆", verdict: "breakthrough", note: "需超高分辨率神经成像与刺激。" }
    ],
    implementation: {
      current: "小鼠记忆操控已实现；人类记忆写入仍属未来。",
      path: ["现实参考：engram研究、光遗传学、深脑刺激。"],
      blockers: ["记忆编码未破解", "神经精度", "伦理"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: ["neural-interface"],
    tags: ["生物", "记忆", "神经科学"]
  },
  {
    id: "electronic-brain",
    name: "电子脑（意识联网）",
    aliases: ["意识上传", "脑联网"],
    workId: "ghost-in-shell",
    level: "L3",
    domain: "info",
    summary: "大脑直接接入互联网，意识可被数字化与远程交互，依赖脑机接口与AI的深度融合。",
    description: "攻壳机动队中的电子脑让人类大脑直连网络，思想、记忆可在网络中传输，甚至被「ghost劫持」。现实中的脑机接口已实现部分神经信号数字化，但「意识上传」触及意识本质这一未解难题。",
    firstPrinciples: [
      { principle: "神经信号可数字化传输", verdict: "achieved", note: "脑机接口已能传输运动/感觉信号。" },
      { principle: "完整意识数字化", verdict: "violated", note: "意识的本质未明，无法确定可被复制或传输。" }
    ],
    implementation: {
      current: "脑机接口通信带宽有限；意识上传属哲学与理论探索。",
      path: ["现实参考：脑机接口、神经解码、类脑计算。"],
      blockers: ["意识本质", "带宽", "身份/人格连续性问题"],
      sopStage: "SOP-3 理论研究与建模"
    },
    dependencies: ["neural-interface"],
    tags: ["信息", "意识", "脑联网"]
  },
  // ==================== 侏罗纪公园 ====================
  {
    id: "genetic-engineering",
    name: "基因工程",
    aliases: ["基因编辑", "重组DNA"],
    workId: "jurassic-park",
    level: "L1",
    domain: "bio",
    summary: "对生物基因进行定向修改的技术，CRISPR 等已成熟，是物种复活的技术基础。",
    description: "基因工程是《侏罗纪公园》复活恐龙的核心手段。现实中，重组 DNA 技术、CRISPR-Cas9 基因编辑、合成生物学均已高度成熟，是现代农业、医学与生物制造的基础。",
    firstPrinciples: [
      { principle: "DNA 决定生物性状", verdict: "achieved", note: "分子生物学已完全确立。" },
      { principle: "可定向修改基因组", verdict: "achieved", note: "CRISPR-Cas9 等工具已广泛应用。" }
    ],
    implementation: {
      current: "成熟技术，广泛应用于医药、农业、工业。",
      path: ["现实参考：CRISPR、基因治疗、合成生物学。"],
      blockers: [],
      sopStage: "SOP-1 定义与拆解"
    },
    dependencies: [],
    tags: ["生物", "基因", "基础技术"]
  },
  {
    id: "de-extinction",
    name: "物种复活",
    aliases: ["恐龙复活", "古DNA重建"],
    workId: "jurassic-park",
    level: "L3",
    domain: "bio",
    summary: "从古DNA复活已灭绝物种，受DNA降解限制，近古物种(如猛犸象)可行但恐龙不可行。",
    description: "《侏罗纪公园》用琥珀古蚊中的恐龙DNA复活恐龙。现实中，DNA半衰期约521年，6500万年前的恐龙DNA已彻底降解；但几千年内的灭绝物种（如猛犸象、渡渡鸟）理论上可通过古DNA与克隆复活，相关项目正在进行。",
    firstPrinciples: [
      { principle: "古DNA可提取与测序", verdict: "achieved", note: "猛犸象、尼安德特人古DNA已成功测序。" },
      { principle: "DNA保存时限", verdict: "breakthrough", note: "半衰期约521年，恐龙时代DNA已完全降解。" },
      { principle: "以近亲物种为代孕复活", verdict: "breakthrough", note: "需完整基因组与胚胎工程，基因组缺口需填补。" }
    ],
    implementation: {
      current: "猛犸象复活项目(Colossal)推进中；恐龙无可行路径。",
      path: [
        "现实参考：古DNA测序、克隆技术、基因组编辑。",
        "理论可行性：近古物种可行，远古物种受DNA降解限制。",
        "关键瓶颈：DNA降解、基因组完整性、胚胎发育。"
      ],
      blockers: ["DNA降解", "基因组缺口", "代孕与发育"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: ["genetic-engineering"],
    tags: ["生物", "复活", "古DNA"]
  },
  // ==================== 通用材料 ====================
  {
    id: "carbon-nanotube",
    name: "碳纳米管",
    aliases: ["碳管", "纳米材料"],
    workId: "interstellar",
    level: "L1",
    domain: "material",
    summary: "强度远超钢铁的碳同素异形体，已可实验室制备，是大规模太空结构的基础材料。",
    description: "碳纳米管具有极高的抗拉强度与导电性，是太空电梯等巨型结构的候选材料。现实中已能批量制备工业级碳纳米管，但「厘米级无缺陷单晶碳管」仍难生产。",
    firstPrinciples: [
      { principle: "sp²碳原子构成高强结构", verdict: "achieved", note: "碳纳米管与石墨烯力学性能已被证实。" },
      { principle: "规模化无缺陷制备", verdict: "breakthrough", note: "长度与纯度受限，强度不及理论值。" }
    ],
    implementation: {
      current: "工业级碳纳米管已量产，用于复合材料与导电浆料。",
      path: ["现实参考：石墨烯、碳纤维、纳米材料工业。"],
      blockers: ["长度与缺陷控制", "规模化成本"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["材料", "纳米", "碳"]
  },
  {
    id: "space-elevator",
    name: "太空电梯",
    aliases: ["天梯", "轨道电梯"],
    workId: "interstellar",
    level: "L3",
    domain: "material",
    summary: "连接地面与同步轨道的巨型缆绳结构，理论上需高强度材料，工程与安全挑战巨大。",
    description: "太空电梯通过一根固定在赤道、延伸至地球同步轨道的缆绳，用电梯舱将货物与人员送入太空，极大降低发射成本。其实现依赖强度-密度比极高的材料（碳纳米管/石墨烯），并需克服缆绳振荡、撞击与供电难题。",
    firstPrinciples: [
      { principle: "缆绳需超高比强度", verdict: "breakthrough", note: "需比强度超过已知量产材料，碳纳米管理论上可达。" },
      { principle: "同步轨道力学平衡", verdict: "achieved", note: "重力梯度稳定原理成立。" }
    ],
    implementation: {
      current: "碳纳米管缆绳尚无法量产到所需长度；概念研究持续。",
      path: ["现实参考：碳纳米管、太空索道概念、梯子载荷动力学。"],
      blockers: ["材料比强度", "缆绳长度", "空间碎片撞击"],
      sopStage: "SOP-5 工程实现与原型"
    },
    dependencies: ["carbon-nanotube"],
    tags: ["材料", "太空", "基础设施"]
  },
  {
    id: "metamaterial",
    name: "超材料",
    aliases: ["人工电磁材料", "负折射率材料"],
    workId: "ghost-in-shell",
    level: "L2",
    domain: "material",
    summary: "人工设计结构实现自然材料不具备的电磁/声学特性，隐形斗篷已有实验室原型。",
    description: "超材料通过亚波长人工结构实现负折射、电磁隐形、声学操控等新奇特性。现实中超材料隐形、完美透镜已有实验室成果，是材料领域近年重要方向，可用于隐身、透镜与天线。",
    firstPrinciples: [
      { principle: "结构决定等效电磁参数", verdict: "achieved", note: "负折射率超材料已实验证实。" },
      { principle: "宽频带完美隐形", verdict: "breakthrough", note: "目前仅窄带隐形，宽频仍受损耗限制。" }
    ],
    implementation: {
      current: "微波段隐形斗篷、超透镜已有原型；光学波段受限。",
      path: ["现实参考：负折射超材料、电磁隐形、声学超材料。"],
      blockers: ["损耗", "带宽", "三维规模化"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["材料", "隐形", "电磁"]
  },
  // ==================== 星际迷航（补充） ====================
  {
    id: "transporter",
    name: "物质传送",
    aliases: ["量子传送", "分解重组"],
    workId: "star-trek",
    level: "L4",
    domain: "info",
    summary: "将人体分解为信息流并远程重组，需读取约10²⁵个原子的量子态，理论极端困难。",
    description: "《星际迷航》的传送装置把人体分解为能量与信息传输到目的地重组。现实中，量子隐形传态只能传送量子态而非物质本身；传送宏观人体需同时读取海森堡不确定性原理限制下的全部量子信息，并面临「复制-摧毁」悖论。",
    firstPrinciples: [
      { principle: "量子隐形传态传信息", verdict: "achieved", note: "实验室已传态光子、离子等量子比特。" },
      { principle: "传送宏观物质与人体", verdict: "violated", note: "需精确测量全部量子态，违反测量不可逆与不确定性原理。" },
      { principle: "重组后意识连续", verdict: "violated", note: "复制-摧毁对意识连续性的哲学物理难题。" }
    ],
    implementation: {
      current: "量子传态限于微观；宏观物质传送无路径。",
      path: ["现实参考：量子隐形传态、量子计算。"],
      blockers: ["海森堡不确定性", "信息量巨大", "意识连续性问题"],
      sopStage: "SOP-3 理论研究与建模"
    },
    dependencies: ["quantum-communication"],
    tags: ["信息", "传送", "量子"]
  },
  {
    id: "photon-torpedo",
    name: "光子鱼雷",
    aliases: ["反物质鱼雷", "鱼雷武器"],
    workId: "star-trek",
    level: "L3",
    domain: "weapon",
    summary: "以反物质湮灭为弹头的制导武器，物理可行，依赖反物质的生产与储存。",
    description: "星际迷航中的光子鱼雷以物质-反物质湮灭释放能量。反物质武器物理原理成立，但现实反物质年产量以纳克计、成本极高，且储存（电磁陷阱）与安全控制极难，远未到武器化阶段。",
    firstPrinciples: [
      { principle: "正反物质湮灭释放能量", verdict: "achieved", note: "实验室已观测正电子湮灭。" },
      { principle: "反物质武器化量产", verdict: "breakthrough", note: "生产能量负收益，储存风险极高。" }
    ],
    implementation: {
      current: "反物质仅实验量级；常规鱼雷为化学/核动力。",
      path: ["现实参考：CERN反物质实验、核武器工程。"],
      blockers: ["反物质生产", "安全储存", "投送控制"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: ["antimatter-engine"],
    tags: ["武器", "反物质", "鱼雷"]
  },
  {
    id: "replicator",
    name: "复制器（物质重组）",
    aliases: ["物质复制", "食物合成器"],
    workId: "star-trek",
    level: "L3",
    domain: "material",
    summary: "按指令合成食物与物品的设备，需亚原子级物质重组与能量-质量转换，理论挑战大。",
    description: "星际迷航的复制器能将能量/基础物质按预设程序重组为食物与物品。现实中，3D打印与合成食品已能「从原料构造物品」，但「原子级精确重组任意物品」需要巨大的信息处理与能量-物质转换，远超当前。",
    firstPrinciples: [
      { principle: "增材制造按序构建", verdict: "achieved", note: "3D打印、合成食品已实现。" },
      { principle: "原子级精确重组任意物质", verdict: "breakthrough", note: "需海量信息与分子级操纵，能量效率低。" }
    ],
    implementation: {
      current: "3D打印、细胞培养肉、分子料理为雏形。",
      path: ["现实参考：3D打印、分子组装、合成生物学。"],
      blockers: ["原子级精度", "能量效率", "信息规模"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: ["antimatter-engine"],
    tags: ["材料", "复制", "合成"]
  },
  {
    id: "tricorder",
    name: "三录仪（便携诊断仪）",
    aliases: ["医疗扫描仪", "多功能探测仪"],
    workId: "star-trek",
    level: "L2",
    domain: "info",
    summary: "手持式即时诊断与环境探测设备，现有便携超声、生物传感器已接近。",
    description: "星际迷航的三录仪能即时扫描生命体征、物质成分与环境参数。现实中，便携超声、ECG贴片、生物芯片已能实现多参数即时检测，AI辅助诊断进一步接近「傻瓜式三录仪」。",
    firstPrinciples: [
      { principle: "非侵入即时检测生理信号", verdict: "achieved", note: "便携超声、可穿戴传感器已商用。" },
      { principle: "AI自动解读给出诊断", verdict: "achieved", note: "医疗AI辅助诊断已落地。" }
    ],
    implementation: {
      current: "便携式多模态诊断设备、AI诊断已成熟。",
      path: ["现实参考：Butterfly iQ便携超声、可穿戴健康监测。"],
      blockers: [],
      sopStage: "SOP-1 定义与拆解"
    },
    dependencies: ["big-data"],
    tags: ["信息", "医疗", "便携诊断"]
  },
  // ==================== 三体（补充） ====================
  {
    id: "sophon",
    name: "智子",
    aliases: ["质子智能", "微观封锁"],
    workId: "three-body",
    level: "L5",
    domain: "info",
    summary: "将质子展开并改造为超级智能粒子，进行通讯与科技封锁，依赖高维展开，现实无法实现。",
    description: "三体文明将单个质子从十一维展开并蚀刻电路，改造为能即时通讯、监视地球、封锁基础科学的「智子」。这依赖高维空间展开、质子级加工与超光速信息传输，远超已知物理。",
    firstPrinciples: [
      { principle: "粒子在更高维度展开", verdict: "violated", note: "已知粒子为量子态，无宏观维度展开机制。" },
      { principle: "质子级微型超级计算核心", verdict: "breakthrough", note: "需在质子尺度集成计算，受量子退相干限制。" },
      { principle: "超光速即时通讯", verdict: "violated", note: "违反狭义相对论信息因果。" }
    ],
    implementation: {
      current: "量子计算在微观尺度，但质子级与维度展开无路径。",
      path: ["现实参考：量子计算、纳米加工(极限至埃米)。"],
      blockers: ["高维展开无依据", "量子退相干", "超光速通讯"],
      sopStage: "SOP-3 理论研究与建模"
    },
    dependencies: ["quantum-computer"],
    tags: ["信息", "智子", "量子"]
  },
  {
    id: "droplet",
    name: "水滴",
    aliases: ["强相互作用材料", "强互作用力飞船"],
    workId: "three-body",
    level: "L4",
    domain: "material",
    summary: "以强相互作用力束缚构成的完美刚性材料，理论可行但需控制强力，远超当前。",
    description: "三体的水滴由强相互作用力把原子核紧密束缚构成，近乎完美刚性，能撞穿舰队。现实中，强相互作用力在原子核尺度被验证，但「宏观尺度直接利用强力束缚物质」需全新的强子工程，尚无理论路径。",
    firstPrinciples: [
      { principle: "强核力束缚夸克与核子", verdict: "achieved", note: "量子色动力学已描述强力。" },
      { principle: "宏观物体直接由强力构成", verdict: "violated", note: "已知物质由原子/化学键构成，强力仅限核尺度。" },
      { principle: "完美刚性无振动衰减", verdict: "violated", note: "理想刚性违背热力学耗散。" }
    ],
    implementation: {
      current: "强子物理仅理论；宏观强力束缚物质无路径。",
      path: ["现实参考：夸克胶子等离子体、QCD、极端材料。"],
      blockers: ["强力无法宏观化", "理想刚性悖论"],
      sopStage: "SOP-3 理论研究与建模"
    },
    dependencies: ["metamaterial"],
    tags: ["材料", "强相互作用", "水滴"]
  },
  {
    id: "two-dimensional-foil",
    name: "二向箔",
    aliases: ["降维打击", "二维化武器"],
    workId: "three-body",
    level: "L5",
    domain: "weapon",
    summary: "将三维空间降维为二维的武器，改变空间维度本身，违反已知物理。",
    description: "二向箔是《三体》中歌者文明用于清理的终极武器，触发后使周围三维空间坍缩为二维，毁灭整个恒星系。空间降维触及物理学最深层的维度本质，在已知物理中无任何实现机制。",
    firstPrinciples: [
      { principle: "空间维度可被主动改变", verdict: "violated", note: "已知物理中维度是固定的，无降维机制。" },
      { principle: "以武器方式引爆降维", verdict: "violated", note: "无能量形式可坍缩空间维度。" }
    ],
    implementation: {
      current: "维度与弦论仅为理论；无任何实验对应。",
      path: ["现实参考：弦论高维概念、拓扑相变。"],
      blockers: ["无降维物理机制", "能量不可及"],
      sopStage: "SOP-2 原理分析"
    },
    dependencies: [],
    tags: ["武器", "降维", "维度"]
  },
  // ==================== AI 与量子基础 ====================
  {
    id: "hal-ai",
    name: "强人工智能（HAL 9000）",
    aliases: ["通用人工智能", "AGI"],
    workId: "odyssey",
    level: "L3",
    domain: "info",
    summary: "具备全面人类认知能力的通用AI，现有大模型接近部分能力，但自主意识与通用推理仍待突破。",
    description: "《2001太空漫游》的HAL 9000能驾驶飞船、人脸识别、理解语言与情感，甚至产生自我意识与自主行为。现有大语言模型已能对话与推理，但「真正理解、自主意识、可靠自主决策」的强AI仍属未来。",
    firstPrinciples: [
      { principle: "大规模计算可实现智能行为", verdict: "achieved", note: "深度学习与大模型已实现类人语言/推理。" },
      { principle: "机器拥有自主意识", verdict: "breakthrough", note: "意识本质未解，无法判定机器是否「真正理解」。" },
      { principle: "完全可靠的自主系统", verdict: "breakthrough", note: "对齐、鲁棒性与安全性仍是核心难题。" }
    ],
    implementation: {
      current: "大模型、自动驾驶、具身智能快速进步，但AGI仍未达成。",
      path: ["现实参考：Transformer大模型、强化学习、具身智能。"],
      blockers: ["意识本质", "对齐与安全", "通用推理泛化"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: ["big-data"],
    tags: ["信息", "AI", "智能"]
  },
  {
    id: "quantum-communication",
    name: "量子通信",
    aliases: ["量子密钥分发", "量子隐形传态"],
    workId: "star-trek",
    level: "L2",
    domain: "info",
    summary: "利用量子态进行安全通信与信息传态，量子密钥分发已商用，是实现传送等信息技术的底座。",
    description: "量子通信利用量子叠加与纠缠实现不可窃听的安全通信，并支持量子隐形传态。现实中，量子密钥分发(QKD)已通过卫星「墨子号」实现洲际传输，是多项前沿技术的底层支撑。",
    firstPrinciples: [
      { principle: "量子态不可克隆", verdict: "achieved", note: "不可克隆定理保证通信安全。" },
      { principle: "量子隐形传态传信息", verdict: "achieved", note: "实验室与卫星链路已实现。" }
    ],
    implementation: {
      current: "量子卫星、量子骨干网已部署；传态距离与速率在提升。",
      path: ["现实参考：墨子号、量子隐形传态实验。"],
      blockers: ["距离损耗", "中继", "速率"],
      sopStage: "SOP-2 原理分析"
    },
    dependencies: [],
    tags: ["信息", "量子", "通信"]
  },
  {
    id: "quantum-computer",
    name: "量子计算机",
    aliases: ["量子计算", "量子霸权"],
    workId: "foundation",
    level: "L3",
    domain: "info",
    summary: "利用量子叠加与纠缠并行计算，可破解现有加密并加速模拟，容错量子计算仍在攻关。",
    description: "量子计算机利用量子比特的叠加与纠缠实现远超经典的计算能力，可模拟分子、破解RSA加密。现实已实现「量子优越性」演示，但纠错与规模化仍是迈向通用容错量子计算的核心瓶颈。",
    firstPrinciples: [
      { principle: "量子叠加并行计算", verdict: "achieved", note: "量子优越性已演示(Google/中国团队)。" },
      { principle: "容错与规模化", verdict: "breakthrough", note: "需物理量子比特数量级的纠错开销。" }
    ],
    implementation: {
      current: "上百物理比特超导/离子阱量子机；容错逻辑比特待突破。",
      path: ["现实参考：超导、离子阱、光量子路线。"],
      blockers: ["退相干", "纠错开销", "规模化"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: [],
    tags: ["信息", "量子", "计算"]
  }
];
