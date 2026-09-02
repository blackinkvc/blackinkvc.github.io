// ============================================================
// 作品世界观数据
// 每个科幻作品的世界观设定、物理偏离点、及所涉科技
// ============================================================
const WORKS = [
  {
    id: "star-trek",
    series: { name: "星际迷航", members: ["《星际迷航：原初》", "《下一代》", "《深空九号》", "《航海家号》", "《企业号》", "十三部电影"] },
    treeLit: ["B1", "B3", "E1", "E3", "E4", "I1", "I2", "I3", "M1", "M3", "S1", "S4", "W1", "W2", "W3"],
    year: 1966,
    title: "星际迷航",
    creator: "吉恩·罗登贝瑞",
    media: "影视 / 剧集",
    era: "23-24 世纪",
    setting: "人类在银河中建立星际联邦，依靠曲速航行、物质传送与光子鱼雷等技术探索宇宙。世界观整体乐观，认为科技能够解决社会问题，设定多为对当代科技的推演与放大。",
    physicalDivergences: [
      "曲速引擎：通过扭曲时空泡实现超光速航行，需负能量与时空操控。",
      "物质传送：将物体分解为信息流再重组，需读取并重建约 10²⁵ 个原子的量子态。"
    ],
    techLevels: ["L1", "L2", "L3"],
    representativeTechs: ["communicator"]
  },
  {
    id: "foundation",
    series: { name: "基地", members: ["《基地》", "《基地与帝国》", "《第二基地》", "《基地前奏》", "《迈向基地》"] },
    treeLit: ["B1", "E1", "E3", "I1", "I2", "I5", "M1", "S1", "S3", "S4", "W1"],
    year: 1951,
    title: "基地",
    creator: "艾萨克·阿西莫夫",
    media: "小说",
    era: "一万两千年后",
    setting: "银河帝国衰亡，数学家哈里·谢顿用「心理史学」——一门以统计力学方式预测庞大人口群体宏观行为的科学——推导出帝国必经的黑暗时期，并设立「基地」以缩短黑暗时代。",
    physicalDivergences: [
      "心理史学：将亿万人的行为视为统计集合来预测，需严格社会封闭系统假设，现实中开放系统难成立。",
      "精神能量控制：以精神力量远程影响他人，违反已知神经科学。"
    ],
    techLevels: ["L2", "L3"],
    representativeTechs: ["fusion-power", "psychohistory"]
  },
  {
    id: "blade-runner",
    series: { name: "银翼杀手", members: ["《银翼杀手》(1982)", "《银翼杀手 2049》(2017)"] },
    treeLit: ["B1", "B2", "B3", "B5", "E1", "I1", "I2", "M1", "M2", "S1", "W1"],
    year: 1968,
    title: "银翼杀手",
    creator: "菲利普·迪克（原著《仿生人会梦见电子羊吗》）",
    media: "电影 / 小说",
    era: "2019 / 2049",
    setting: "近未来地球，人类制造出几乎与真人无异的「复制人」用于殖民地苦力与危险作业，复制人拥有超人体能与短寿命。复制人与人类的边界成为核心伦理命题。",
    physicalDivergences: [
      "复制人的「记忆植入」：可向人造人注入虚拟人生记忆，需脑机接口与记忆编码，属理论可行但极端复杂。"
    ],
    techLevels: ["L2", "L3"],
    representativeTechs: ["replicant"]
  },
  {
    id: "odyssey",
    series: { name: "太空漫游", members: ["《2001太空漫游》", "《2010》", "《2061》", "《3001》"] },
    treeLit: ["B1", "B2", "E1", "I1", "I2", "M1", "S1", "S2", "W1"],
    year: 1968,
    title: "2001太空漫游",
    creator: "阿瑟·克拉克",
    media: "小说 / 电影",
    era: "2001-2018",
    setting: "人类向太阳系外展开探索，一艘载有冬眠乘员的飞船由人工智能「HAL 9000」控制。作品以严谨硬科幻著称，多数技术可在现实中找到原型。",
    physicalDivergences: [
      "HAL 9000 的意识与情感：AI 拥有自我意识与情感，超越当前弱人工智能。"
    ],
    techLevels: ["L1", "L2", "L3"],
    representativeTechs: ["cryo-sleep"]
  },
  {
    id: "three-body",
    series: { name: "三体", members: ["《三体》", "《黑暗森林》", "《死神永生》"] },
    treeLit: ["B1", "B2", "E1", "E3", "E4", "I1", "I2", "M1", "M4", "S1", "S3", "S4", "W1", "W4", "W5"],
    year: 2008,
    title: "三体",
    creator: "刘慈欣",
    media: "小说",
    era: "21 世纪及未来",
    setting: "地球文明面临三体文明的入侵，在黑暗森林法则下的宇宙生存困境。作品基于严谨物理推演，探讨极端技术如曲率驱动、二向箔、反物质武器等的可能性与代价。",
    physicalDivergences: [
      "二向箔：将三维空间降维为二维，需改变时空维度，远超已知物理。",
      "智子：微观粒子被改造成超级计算核心，需质子级量子操控与信息传输。"
    ],
    techLevels: ["L3", "L4", "L5"],
    representativeTechs: ["antimatter-engine", "warp-drive"]
  },
  {
    id: "dune",
    series: { name: "沙丘", members: ["《沙丘》", "《沙丘救世主》", "《沙丘之子》", "《沙丘之神帝》", "《沙丘异端》", "《圣殿沙丘》", "维伦纽瓦电影两部 + 剧集"] },
    treeLit: ["B1", "B3", "E1", "E3", "I1", "M1", "S1", "S4", "W1", "W2"],
    year: 1965,
    title: "沙丘",
    creator: "弗兰克·赫伯特",
    media: "小说",
    era: "一万年后",
    setting: "沙丘行星阿拉基斯的香料「美琅脂」是宇宙航行与精神力量的基石。人类在「巴特勒圣战」后禁用智能机器，转而发展精神能力（贝尼·杰瑟里特姐妹会）。",
    physicalDivergences: [
      "美琅脂：一种赋予预知能力与延长寿命的香料，现实无对应物质。",
      "霍尔茨曼力场：以力场阻挡高速物而放行低速物，依赖虚构的霍尔茨曼效应。"
    ],
    techLevels: ["L2", "L3", "L5"],
    representativeTechs: ["holtzman-shield", "melange", "foldspace-drive"]
  },
  {
    id: "wandering-earth",
    series: { name: "流浪地球", members: ["《流浪地球》", "《球状闪电》", "电影两部"] },
    treeLit: ["B1", "E1", "E3", "I1", "M1", "M3", "S1", "S2", "W1"],
    year: 2000,
    title: "流浪地球",
    creator: "刘慈欣",
    media: "小说 / 电影",
    era: "2075 年及以后",
    setting: "太阳即将氦闪，人类建造上万台行星发动机推动地球脱离太阳系，驶向比邻星。全人类以「带着地球流浪」的方式展开 2500 年的星际迁徙，主题是集体主义、牺牲与文明存续。",
    physicalDivergences: [
      "重元素聚变发动机：以石块为燃料的重元素聚变，现实中重核聚变比氢聚变更难触发。",
      "地球刹车与推进：推动整个行星所需能量远超当前文明，且对地壳结构与潮汐的工程挑战巨大。"
    ],
    techLevels: ["L2", "L3", "L4"],
    representativeTechs: ["planet-engine", "helium-flash-prediction"]
  },
  {
    id: "interstellar",
    treeLit: ["B1", "E1", "I1", "M1", "M2", "S1", "S2", "S3", "S4", "W1"],
    year: 2014,
    title: "星际穿越",
    creator: "克里斯托弗·诺兰（基普·索恩科学指导）",
    media: "电影",
    era: "近未来",
    setting: "地球生态濒临崩溃，一支探险队通过土星附近的虫洞前往星系寻找人类新家园，最终坠入黑洞。影片由物理学家基普·索恩提供科学指导，时间膨胀、黑洞、虫洞、引力方程等设定尽量符合广义相对论。",
    physicalDivergences: [
      "可穿越虫洞：连接时空两点的捷径，理论上需负能量支撑喉部，尚未证实。",
      "五维空间与引力时空通信：从未来向过去传递信息，挑战因果性与已知维度。"
    ],
    techLevels: ["L3", "L4", "L5"],
    representativeTechs: ["black-hole-power", "wormhole"]
  },
  {
    id: "ghost-in-shell",
    series: { name: "攻壳机动队", members: ["漫画《Ghost in the Shell》", "《2.0》", "《无罪》", "《SAC》剧集", "《SSS》"] },
    treeLit: ["B1", "B3", "E1", "I1", "I2", "M1", "M2", "S1", "W1"],
    year: 1989,
    title: "攻壳机动队",
    creator: "士郎正宗",
    media: "漫画 / 动画 / 电影",
    era: "21 世纪后半叶",
    setting: "义体化与电子脑普及的近未来，人类的记忆可被篡改、灵魂可被「ghost 劫持」。主角草薙素子几乎全身义体化，探讨当身体与记忆皆可替换时，「人」的本质是什么。",
    physicalDivergences: [
      "电子脑与意识上传：将意识/灵魂数字化上传至网络，需完全还原大脑计算，触及意识本质。",
      "网络幽灵（Ghost in the Shell）：意识可在网络与义体间流转，远超当前 AI 与脑机接口能力。"
    ],
    techLevels: ["L2", "L3", "L4"],
    representativeTechs: ["prosthetic-body", "memory-implant"]
  },
  {
    id: "jurassic-park",
    series: { name: "侏罗纪公园", members: ["《侏罗纪公园》", "《失落的世界》", "《侏罗纪世界》系列"] },
    treeLit: ["B1", "B2", "B5", "E1", "I1", "M1", "S1", "W1"],
    year: 1990,
    title: "侏罗纪公园",
    creator: "迈克尔·克莱顿",
    media: "小说 / 电影",
    era: "当代",
    setting: "科学家利用琥珀中的古蚊吸血残留提取恐龙 DNA，通过基因工程复活恐龙并建造成主题公园。作品核心警示是科学失控的代价——「科学家被复活的生物反噬」。",
    physicalDivergences: [
      "古 DNA 复活已灭绝物种：DNA 半衰期约 521 年，6500 万年前的恐龙 DNA 早已降解殆尽。",
      "两栖基因拼接补全：用现代物种基因填补恐龙基因组缺口，现实中会产生「混种」而非真正的恐龙。"
    ],
    techLevels: ["L2", "L3"],
    representativeTechs: ["de-extinction"]
  }
];
