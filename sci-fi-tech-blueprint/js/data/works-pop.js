// ============================================================
// 世界观扩充 · 流行文化卷（漫画 / 动画 / 电影 / 剧集 / 超级英雄）
// 漫威宇宙、DC 宇宙，以及龙珠、进击的巨人、火影忍者、死神、
// 钢之炼金术师、一拳超人、名侦探柯南、我的英雄学院等国民级作品。
// 这批世界观多以「超能力 / 气 / 查克拉 / 个性」为能量本源，
// 物理偏离点普遍集中在生物与能量分支（L4–L5，仅限世界观）。
// 依赖链：现实基底（冶金/电网/半导体）为根 → 科技装备（L1–L3）
// → 超自然能力（L4–L5，违反已知物理，仅限世界观）。
// 由 works-pop.js 在 works.js 之后加载并执行 WORKS.push(...) 合并。
// ============================================================
WORKS.push(
  {
    id: "mcu",
    series: { name: "漫威宇宙（Marvel Universe / MCU）", members: ["《钢铁侠》", "《复仇者联盟》", "《美国队长》", "《蜘蛛侠》", "《蚁人》", "漫威漫画"] },
    treeLit: ["E3", "M2", "M3", "B2", "S4", "W2", "I2"],
    year: 1939,
    title: "漫威宇宙",
    creator: "漫威漫画 / 漫威影业",
    media: "漫画 / 电影 / 剧集",
    era: "现代至近未来（多元宇宙）",
    setting: "地球文明与宇宙帝国、外星遗产交汇，超级英雄以科技、变异、神力与魔法并存。科技核心由史塔克工业主导：方舟反应堆微型冷聚变供能、纳米动力装甲、振金吸震金属；宇宙魔方改写空间，量子领域捅穿微观维度。大部分装备属现实工程延伸，但「无限宝石改写现实」「量子领域穿越时间」已越过物理边界。",
    physicalDivergences: [
      "方舟反应堆：微型化冷聚变持续供能，现实中受劳森判据与材料约束，尚无法小型常驻。",
      "振金：近乎完美吸震的稀有金属，现实对应 auxetic 超材料与吸能合金，但性能远超当代。",
      "量子领域：在微观亚原子尺度内穿越时空，无现实物理对应，属 L5 仅限世界观。",
      "无限宝石 / 宇宙魔方：以单件器物操控空间、现实、心灵等维度，纯属设定。"
    ],
    techLevels: ["L2", "L3", "L4", "L5"],
    representativeTechs: ["mcu-iron-man-armor", "mcu-vibranium", "mcu-arc-reactor", "mcu-quantum-realm"]
  },
  {
    id: "dc",
    series: { name: "DC 宇宙（DC Universe）", members: ["《蝙蝠侠》", "《超人》", "《正义联盟》", "《绿灯侠》", "《神奇女侠》", "DC 漫画"] },
    treeLit: ["M2", "B5", "E4", "I5", "W2"],
    year: 1934,
    title: "DC宇宙",
    creator: "DC漫画",
    media: "漫画 / 电影 / 剧集",
    era: "现代至近未来（多元宇宙）",
    setting: "以超级英雄守护城市与地球为核心，科技与超自然、外星高维文明交织。蝙蝠侠以战术装备与极限体能弥补凡人之躯；氪星人汲取恒星辐射获得神级体质；绿灯侠以「意志即能量」驱动戒指；天启星的母盒是跨维度计算机。多数能力无现实机制支撑，集中于生物与信息分支的 L4–L5。",
    physicalDivergences: [
      "氪星人体质：吸收黄恒星辐射获得飞行、力大、热视线，无生理与能量机制支撑。",
      "绿灯戒：以纯粹意志具象化能量与物质，违反能量守恒，属 L4–L5。",
      "母盒：天启星造物，跨维度传送与重组现实，无现实物理对应。",
      "真言套索 / 神力：以魔法与神祇血脉赋予力量，纯属设定。"
    ],
    techLevels: ["L1", "L2", "L4", "L5"],
    representativeTechs: ["dc-batman-suit", "dc-kryptonian", "dc-green-lantern-ring", "dc-mother-box"]
  },
  {
    id: "dragon-ball",
    series: { name: "龙珠（Dragon Ball）", members: ["《龙珠》", "《龙珠Z》", "《龙珠超》", "鸟山明漫画"] },
    treeLit: ["I3", "B2", "S5", "E5", "I5"],
    year: 1984,
    title: "龙珠",
    creator: "鸟山明",
    media: "漫画 / 动画",
    era: "架空武道世界",
    setting: "以「气」为万事万物的能量本源：战士可感知对手战斗力、隔空移物、踏空飞行、以龟派气功轰碎行星。战斗力探测器把能量数值化；仙豆瞬时治愈重伤；那美克星龙珠可许愿改天换地。科幻外壳下本质是超自然武道，绝大多数能力违反已知物理。",
    physicalDivergences: [
      "气：可被感知、实质化、外放为破坏性能量的生命力量，无生理与能量机制支撑。",
      "战斗力数值化：以仪器精确读出个体能量强度，无对应传感原理。",
      "瞬间移动：锁定气的坐标实现超距传送，违反因果与相对论。",
      "龙珠许愿：集合七颗珠子召唤神龙改写现实，纯属设定。"
    ],
    techLevels: ["L2", "L3", "L4", "L5"],
    representativeTechs: ["db-instant-transmission", "db-ki", "db-scouter"]
  },
  {
    id: "attack-on-titan",
    series: { name: "进击的巨人（Attack on Titan）", members: ["《进击的巨人》", "谏山创漫画"] },
    treeLit: ["W2", "B5", "M1"],
    year: 2009,
    title: "进击的巨人",
    creator: "谏山创",
    media: "漫画 / 动画",
    era: "末日墙内文明",
    setting: "人类被无智巨人逼迫至三道高墙之内，立体机动装置以压缩气体驱动抓钩与绞盘，让人类在三维空间高速机动、斩杀巨人后颈。始祖巨人可唤醒地底万千「巨神兵」踏平大陆（地鸣）。科技底子现实可行，但巨人化与地鸣属生物分支的 L5 纯设定。",
    physicalDivergences: [
      "巨人化：人体在数秒内生成数十米巨躯并保留意识，无生物机制支撑。",
      "地鸣：唤醒地底沉睡的万千巨神兵并统一驱动，纯属设定。",
      "坐标之力：以血脉控制所有尤弥尔子民与巨人之力，无机制支撑。"
    ],
    techLevels: ["L1", "L2", "L5"],
    representativeTechs: ["aot-odm-gear", "aot-titan", "aot-rumbling"]
  },
  {
    id: "naruto",
    series: { name: "火影忍者（Naruto）", members: ["《火影忍者》", "《博人传》", "岸本齐史漫画"] },
    treeLit: ["E4", "B5", "S5", "B3"],
    year: 1999,
    title: "火影忍者",
    creator: "岸本齐史",
    media: "漫画 / 动画",
    era: "忍者架空世界",
    setting: "以「查克拉」为能量本源，忍者借结印调动查克拉施展忍术、幻术、体术。写轮眼可预读动作、复制技巧、窥见因果；飞雷神之术在标记点间瞬移；仙人模式吸收自然能量强化肉身。查克拉体系本质超自然，多数高阶能力违反已知物理。",
    physicalDivergences: [
      "查克拉：由肉体能量与精神能量混合生成的泛用能量，可外放为火遁、雷遁等，无机制支撑。",
      "写轮眼：以瞳术预读、复制、干涉因果与记忆，违反神经科学。",
      "飞雷神之术：在预先标记的空间坐标间瞬时转移，违反相对论。",
      "自然能量 / 仙人模式：直接吸收天地能量强化身躯，属推演级生物学。"
    ],
    techLevels: ["L3", "L4", "L5"],
    representativeTechs: ["nrt-sharingan", "nrt-flying-thunder", "nrt-chakra"]
  },
  {
    id: "bleach",
    series: { name: "死神 / 境·界（Bleach）", members: ["《BLEACH》", "久保带人漫画"] },
    treeLit: ["W4", "B5", "E4"],
    year: 2001,
    title: "死神",
    creator: "久保带人",
    media: "漫画 / 动画",
    era: "现世与尸魂界",
    setting: "世界由现世、尸魂界、虚圈构成，万物由「灵子」搭建。死神持斩魄刀斩杀虚，始解与卍解解放刀之意志与力量；虚化让死神获得虚的超速再生；完现术以钟爱之物承载灵魂之力。灵子构成宇宙、灵魂科技等设定，皆无现实物理对应。",
    physicalDivergences: [
      "灵子 / 灵压：构成物质与生命的灵魂粒子与精神压强，无物理对应。",
      "斩魄刀：拥有自我意志、可始解卍解解放形态的灵魂武器，纯属设定。",
      "虚化：死神体表生成虚之假面，获得超速再生与力量，无生物机制。",
      "完现术：以情感寄托之物为媒介引出现实改动，属魔法级设定。"
    ],
    techLevels: ["L4", "L5"],
    representativeTechs: ["blc-zanpakuto", "blc-hollowfication"]
  },
  {
    id: "fma",
    series: { name: "钢之炼金术师（Fullmetal Alchemist）", members: ["《钢之炼金术师》", "荒川弘漫画"] },
    treeLit: ["M5", "E5", "M2", "M3"],
    year: 2001,
    title: "钢之炼金术师",
    creator: "荒川弘",
    media: "漫画 / 动画",
    era: "炼金术架空世界",
    setting: "以「等价交换」为铁律：不凭空生、不化有为无，仅以炼成阵重组物质。贤者之石突破等价交换，以灵魂为燃料制造无限能量；机械铠替代残缺肢体。炼金术本身（无外部能源的物质重组）与贤者之石皆违反能量守恒，属 L5 仅限世界观；机械铠则现实可达。",
    physicalDivergences: [
      "炼金术：仅以阵图与触碰即重组物质形态，不引入外部能量，违反能量守恒。",
      "贤者之石：以灵魂为触媒释放无限能量、突破等价交换，纯属设定。",
      "人体炼成：以物质重组逆向造人，触及意识与灵魂问题，无机制支撑。"
    ],
    techLevels: ["L1", "L2", "L3", "L5"],
    representativeTechs: ["fma-alchemy", "fma-philosopher-stone", "fma-automail"]
  },
  {
    id: "opm",
    series: { name: "一拳超人（One Punch Man）", members: ["《一拳超人》", "ONE / 村田雄介"] },
    treeLit: ["I2", "M2", "B5", "B4"],
    year: 2009,
    title: "一拳超人",
    creator: "ONE / 村田雄介",
    media: "漫画 / 网络动画",
    era: "英雄与怪人架空世界",
    setting: "怪人频现，英雄协会以威胁等级制度与监测网组织应对，并量产机械战斗服。主角埼玉因「突破限制器」获得一拳灭敌的无限之力；怪人化是生物层面的突变失控。除监测与战斗服属现实工程外，限制器突破与怪人化皆无科学机制。",
    physicalDivergences: [
      "限制器突破：解除生物体成长的生理上限，获得指数级无限力量，无机制支撑。",
      "怪人化：人类因执念或实验突变为超常生物，属推演级生物学，多越界。",
      "神明级怪人：改写现实、扭曲物理法则的存在，纯属设定。"
    ],
    techLevels: ["L1", "L2", "L4", "L5"],
    representativeTechs: ["opm-hero-system", "opm-limiter", "opm-battle-suit"]
  },
  {
    id: "conan",
    series: { name: "名侦探柯南（Detective Conan）", members: ["《名侦探柯南》", "青山刚昌漫画"] },
    treeLit: ["M2", "W2", "I2"],
    year: 1994,
    title: "名侦探柯南",
    creator: "青山刚昌",
    media: "漫画 / 动画",
    era: "现代都市",
    setting: "以推理为核心的现代侦探世界，几乎无物理偏离：阿笠博士的发明全是现实工程巧思——脚力增强鞋、麻醉枪手表、领结变声器、电击腰带。它们把「日常科技」推向可爱而巧妙的极致，是本站少有的「全部已现实可达」的世界观。",
    physicalDivergences: [
      "无明显物理偏离：所有道具均基于现实工程（弹簧、电池、半导体、麻醉剂），属 L1–L2 可达。"
    ],
    techLevels: ["L1", "L2"],
    representativeTechs: ["con-power-shoes", "con-voice-changer", "con-sleep-gun"]
  },
  {
    id: "mha",
    series: { name: "我的英雄学院（My Hero Academia）", members: ["《我的英雄学院》", "堀越耕平漫画"] },
    treeLit: ["B4", "B5", "M2"],
    year: 2014,
    title: "我的英雄学院",
    creator: "堀越耕平",
    media: "漫画 / 动画",
    era: "约八成人口拥有超能力（个性）的近未来",
    setting: "80% 人口天生拥有「个性（Quirk）」遗传超能力，英雄职业化、产业成熟。One For All 是集积历代传承、可无限蓄积与转让的强化个性；普通人或弱个性者靠支撑装置（Support Gear）补足。个性本身属远未来生物分支，人工个性与战斗服则现实可达。",
    physicalDivergences: [
      "个性（Quirk）：以遗传获得的、千奇百怪的超能力，属远未来生物学（L4）。",
      "One For All：跨代集积并转让、可无限蓄积能量的强化个性，无机制支撑（L5）。",
      "人工个性：人为赋予或复刻个性，触及基因编辑与意识问题，属推演级。"
    ],
    techLevels: ["L1", "L2", "L4", "L5"],
    representativeTechs: ["mha-quirk", "mha-ofa", "mha-support-gear"]
  }
);
