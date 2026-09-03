// 世界观简介系统
// 每个世界观含：物理法则设定、与现实物理的偏离度、典型科技、思想内核
window.SCICAT_WORLDVIEWS = [
  {
    id: "hard-scifi",
    name: "硬科幻",
    nameEn: "Hard Science Fiction",
    deviation: "低",
    deviationLevel: 1, // 1-5，越大偏离越严重
    blurb: "以现有或可信推演的科学为边界，物理定律严格成立。技术突破需有工程路径。代表：阿西莫夫、刘慈欣、金·斯坦利·罗宾逊。",
    physicsRules: [
      "相对论与热力学严格成立，无超光速（除非曲速这类依赖时空度规的方案）",
      "能量守恒，无永动机",
      "生物学受碳基限制，但允许基因工程与延长寿命",
      "计算受物理极限（兰道尔极限、光速延迟）约束"
    ],
    typicalTech: ["曲速引擎", "戴森球", "核聚变发电", "脑机接口", "太空电梯"],
    keywords: ["物理严谨", "工程路径", "推演"]
  },
  {
    id: "space-opera",
    name: "太空歌剧",
    nameEn: "Space Opera",
    deviation: "中",
    deviationLevel: 3,
    blurb: "宏大叙事优先，允许超光速旅行与星际文明，但对个体科技常作一定解释。代表：《星际迷航》《星球大战》（部分）。",
    physicsRules: [
      "允许超光速引擎（曲速/跃迁）作为运力前提",
      "允许能量护盾、相位武器等但常含糊其物理",
      "文明尺度极大，存在古老高级文明",
      "个体生命形态多样（有机/合成/能量态）"
    ],
    typicalTech: ["曲速引擎", "传送(复制式)", "光剑", "全息通讯", "能量护盾"],
    keywords: ["星际文明", "超光速", "浪漫主义"]
  },
  {
    id: "cyberpunk",
    name: "赛博朋克",
    nameEn: "Cyberpunk",
    deviation: "低-中",
    deviationLevel: 2,
    blurb: "近未来、高科技低生活。关注人体改造、AI、公司权力。技术大多近可实现。代表：《神经漫游者》《银翼杀手》《赛博朋克2077》。",
    physicsRules: [
      "现实物理基本成立",
      "强调义体改造、神经接口、AI 觉醒",
      "社会层面：巨企、监控、贫富分化",
      "网络空间（赛博空间）作为隐喻性存在"
    ],
    typicalTech: ["脑机接口", "义体改造", "强人工智能", "数字孪生城市", "黑客入侵"],
    keywords: ["义体", "AI", "反乌托邦"]
  },
  {
    id: "space-fantasy",
    name: "太空奇幻",
    nameEn: "Space Fantasy / Mythic Sci-Fi",
    deviation: "高",
    deviationLevel: 5,
    blurb: "以魔法/灵能代替或补充科技，常含命定、原力、灵魂等概念。代表：《星球大战》（原力侧）、《沙丘》（部分）。",
    physicsRules: [
      "存在可感知、可利用的“宇宙能量场”（原力/灵能）",
      "个体可凭精神影响物质与世界",
      "命运、预言等超自然叙事成立",
      "科技与神秘学混融"
    ],
    typicalTech: ["原力", "心灵感应(星际)", "预知", "光剑", "灵能武器"],
    keywords: ["原力", "灵能", "神秘学"]
  },
  {
    id: "post-human",
    name: "后人类/奇点",
    nameEn: "Post-Human / Singularity",
    deviation: "中",
    deviationLevel: 3,
    blurb: "聚焦意识上传、超智能、文明升级。代表：查尔斯·斯特罗斯、格雷·古斯、Iain M. Banks 的文化系列。",
    physicsRules: [
      "允许意识数字化与上传",
      "允许强 AI 与自我改进（递归式）",
      "允许文明级工程（戴森球、环形世界）",
      "形态自由：上传意识、合成躯体、群体智能"
    ],
    typicalTech: ["意识上传", "强人工智能", "戴森球", "冬眠", "纳米机器人医疗"],
    keywords: ["奇点", "意识", "文明升级"]
  },
  {
    id: "steampunk",
    name: "蒸汽朋克",
    nameEn: "Steampunk",
    deviation: "中",
    deviationLevel: 3,
    blurb: "以维多利亚机械美学为底，用发条、蒸汽、早期电学替代电子与计算机，强调可见的齿轮与管道。代表：《差分机》《蒸汽男孩》。",
    physicsRules: [
      "允许成熟的机械/蒸汽/电磁技术，但无现代半导体与数字计算",
      "信息与控制在机械/气动层面实现（分析机式）",
      "能量仍受热力学与材料限制",
      "常与架空历史与阶级叙事结合"
    ],
    typicalTech: ["外骨骼(机械)", "电磁发射", "增材制造(机械)"],
    typicalTechIds: ["exoskeleton", "railgun", "3d-printing"],
    keywords: ["机械美学", "架空历史", "发条"]
  },
  {
    id: "biopunk",
    name: "生物朋克",
    nameEn: "Biopunk",
    deviation: "低-中",
    deviationLevel: 2,
    blurb: "以生物科技而非电子为核心，关注基因改造、生物黑客、身体可被任意改写。代表：《傀儡师》《GATTACA》《变蝇人》。",
    physicsRules: [
      "现实生物物理基本成立",
      "强调基因/合成生物/生物制造的可及与滥用",
      "身体是‘可编辑材料’",
      "伦理焦点在生命改造的边界"
    ],
    typicalTech: ["合成生物学", "转基因农业", "培养肉", "基因编辑", "生物打印器官", "衰老逆转"],
    typicalTechIds: ["synthetic-bio", "gmo-crop", "lab-meat", "gene-editing", "bioprint-organ", "aging-reversal"],
    keywords: ["生物黑客", "基因", "身体改造"]
  },
  {
    id: "post-apocalypse",
    name: "末日废土",
    nameEn: "Post-Apocalypse",
    deviation: "低",
    deviationLevel: 2,
    blurb: "文明崩溃后的重建/求生叙事，技术多为拼凑、低效但可用的废墟科技。代表：《疯狂的麦克斯》《最后生还者》《辐射》。",
    physicsRules: [
      "现实物理成立，重点是基础设施缺失",
      "技术以‘ salvage(拾荒复用)’为主",
      "能源与制造能力碎片化",
      "社会组织回归小共同体"
    ],
    typicalTech: ["小型模块堆", "增材制造", "平流层辐射管理", "直接空气捕集", "自主货运"],
    typicalTechIds: ["smr", "3d-printing", "srm", "dac", "autonomous-freight"],
    keywords: ["废土", "拾荒", "重建"]
  },
  {
    id: "simulation",
    name: "模拟假说",
    nameEn: "Simulation Hypothesis",
    deviation: "中-高",
    deviationLevel: 4,
    blurb: "设定‘现实是更高文明运行的模拟’，由此引出可‘修改参数’的元层技术。代表：《黑客帝国》《瑞克和莫蒂》(元层)。",
    physicsRules: [
      "表层遵循现实物理（被模拟）",
      "存在可干预的‘模拟参数/控制层’",
      "意识可能为计算实体",
      "突破靠访问元层而非改物理"
    ],
    typicalTech: ["通用人工智能", "全球脑", "城市数字孪生", "大模型智能体", "意识上传"],
    typicalTechIds: ["agi", "global-brain", "digital-twin-city", "llm-agents", "mind-upload"],
    keywords: ["缸中脑", "元层", "参数"]
  },
  {
    id: "megastructure",
    name: "巨型结构文明",
    nameEn: "Megastructure Civilization",
    deviation: "低-中",
    deviationLevel: 3,
    blurb: "以行星/恒星尺度的建造为常态的文明阶段（卡尔达肖夫进阶），强调工程规模的跃迁。代表： Banks《文化》环world、Niven 环形世界。",
    physicsRules: [
      "现实物理成立，尺度极大",
      "能源以恒星级采集为前提",
      "材料/自复制/自动化建造是关键",
      "文明能量等级决定可行工程"
    ],
    typicalTech: ["戴森球", "轨道太阳能电站", "宇宙尺度工程", "太空电梯", "火星殖民地"],
    typicalTechIds: ["dyson-sphere", "orbital-solar", "universe-scale-engineering", "space-elevator", "mars-colony"],
    keywords: ["卡尔达肖夫", "恒星工程", "尺度"]
  },
  {
    id: "space-western",
    name: "太空西部",
    nameEn: "Space Western",
    deviation: "低",
    deviationLevel: 2,
    blurb: "把西部拓荒叙事搬上星球边境，技术实用、法律松弛、个人英雄主义。代表：《萤火虫》《星际牛仔》《苍穹浩瀚》(部分)。",
    physicsRules: [
      "现实物理基本成立",
      "前沿拓荒：低成本航天与就地资源",
      "治理稀疏，私力救济常见",
      "技术是‘够用即可’的务实主义"
    ],
    typicalTech: ["可重复使用火箭", "小行星采矿", "火星殖民地", "自主货运", "低轨卫星互联网"],
    typicalTechIds: ["reusable-rocket", "asteroid-mining", "mars-colony", "autonomous-freight", "sat-internet"],
    keywords: ["拓荒", "边境", "务实"]
  }
];
