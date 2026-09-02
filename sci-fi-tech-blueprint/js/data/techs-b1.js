// ============================================================
// 技术补完计划 · 批次 B1（核心大 IP 深度补完）
// 目标世界观: star-trek / three-body / dune / interstellar / foundation / the-matrix / ghost-in-shell / blade-runner
// 补齐 material/weapon/energy 缺口，并将依赖挂到现实主轴或同世界观前置，
// 使「科技演进逻辑链」区块在每个世界观都能渲染跨阶段 DAG。
// ============================================================
const TECHS_B1 = [
  {
    id: "star-trek-dilithium",
    name: "二锂晶体反物质约束",
    aliases: [],
    workId: "star-trek",
    level: "L3",
    domain: "energy",
    summary: "以二锂晶体稳定反物质湮灭反应，输出纯净能量，属工程前沿。",
    description: "星舰核心靠二锂晶体调节物质—反物质湮灭，高效释放能量。现实中反物质已在 CERN 微量制备，但稳定约束与晶体调谐是纯设定，工程上极难。",
    firstPrinciples: [
      { principle: "反物质湮灭放能", verdict: "achieved", note: "Positron/反质子已在实验室制备。" },
      { principle: "晶体稳定约束反应", verdict: "breakthrough", note: "无等效材料，约束靠磁阱。" }
    ],
    implementation: {
      current: "反物质制备微量，磁约束可行，规模化与晶体调谐无路径。",
      path: ["现实参考：Penning 阱约束反质子。", "理论可行但规模鸿沟大。", "瓶颈：制备成本、储存、晶体材料。"],
      blockers: ["制备成本", "储存寿命", "无等效晶体"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: ["transporter"],
    tags: ["能源", "反物质", "星舰"]
  },
  {
    id: "star-trek-phaser",
    name: "相位枪",
    aliases: [],
    workId: "star-trek",
    level: "L3",
    domain: "weapon",
    summary: "发射可调定向能量束，可击晕或汽化，现实激光武器方向可行但功率受限。",
    description: "相位枪以调制能量束作用目标，功率连续可调。现实中激光武器已上舰上机，但持续高功率与「击晕」档位仍属设定。",
    firstPrinciples: [
      { principle: "定向能量束做功", verdict: "achieved", note: "激光武器已实用化。" },
      { principle: "连续可调击晕/汽化", verdict: "breakthrough", note: "非致命档位无等效机制。" }
    ],
    implementation: {
      current: "激光致盲/毁伤武器已装备，高功率持续照射待突破。",
      path: ["现实参考：舰载激光防空。", "理论可行，能量密度是关键。", "瓶颈：电源、散热、大气衰减。"],
      blockers: ["电源能量密度", "散热", "大气衰减"],
      sopStage: "SOP-3 原型与验证"
    },
    dependencies: ["photon-torpedo"],
    tags: ["武器", "定向能", "激光"]
  },
  {
    id: "star-trek-duotronic",
    name: "多tron 超算",
    aliases: [],
    workId: "star-trek",
    level: "L2",
    domain: "info",
    summary: "以多子电路实现远超现代的处理能力，现实对应专用超算与量子计算。",
    description: "多tron 计算机以非二进制电路并行处理，算力远超当代。现实超算与量子计算正逼近部分能力，但非二进制架构属设定。",
    firstPrinciples: [
      { principle: "大规模并行计算", verdict: "achieved", note: "超算已实现 EFLOPS 级。" },
      { principle: "非二进制电路", verdict: "breakthrough", note: "主流仍是二进制，新架构探索中。" }
    ],
    implementation: {
      current: "超算与量子计算快速进步，非二进制架构未主流。",
      path: ["现实参考：GPU 集群 + 量子退火。", "理论可行。", "瓶颈：能耗、架构革新。"],
      blockers: ["能耗墙", "架构革新"],
      sopStage: "SOP-3 原型与验证"
    },
    dependencies: ["quantum-computer"],
    tags: ["信息", "超算", "计算"]
  },
  {
    id: "star-trek-tritanium",
    name: "三钛合金舰体",
    aliases: [],
    workId: "star-trek",
    level: "L2",
    domain: "material",
    summary: "星舰外壳用超强合金，现实对应先进钛基/陶瓷复合装甲。",
    description: "三钛是星舰承力结构与装甲材料，兼顾强度与轻量。现实钛合金与陶瓷复合已实用，综合性能仍逊设定。",
    firstPrinciples: [
      { principle: "高强轻量化合金", verdict: "achieved", note: "钛合金/复合装甲已实用。" },
      { principle: "综合抗损性能", verdict: "breakthrough", note: "同等质量防护仍逊。" }
    ],
    implementation: {
      current: "钛合金、陶瓷复合装甲成熟，星舰级综合性能待突破。",
      path: ["现实参考：航天钛合金 + 复合装甲。", "理论可行。", "瓶颈：面密度-强度权衡。"],
      blockers: ["面密度-强度权衡", "成本"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: ["firearms-age-metallurgy"],
    tags: ["材料", "合金", "舰体"]
  },
  {
    id: "three-body-nanofiber",
    name: "强互作用材料丝",
    aliases: [],
    workId: "three-body",
    level: "L4",
    domain: "material",
    summary: "以强相互作用力结合的纳米丝，切断万吨巨轮，现实无对应。",
    description: "三体「水滴」与古筝行动用的材料，以强核力锁定原子，强度超任何化学键。现实中强相互作用材料无已知制造路径。",
    firstPrinciples: [
      { principle: "强相互作用结合", verdict: "violated", note: "强核力仅在核尺度作用，宏观材料无路径。" },
      { principle: "纳米丝切割", verdict: "breakthrough", note: "碳纳米管可部分类比但弱数量级。" }
    ],
    implementation: {
      current: "碳纳米管是现实最强纤维，仍远低于强互作用设定。",
      path: ["现实参考：碳纤维/碳纳米管。", "强互作用材料无物理路径。", "归入 L4。"],
      blockers: ["强核力宏观化无路径", "仅限设定"],
      sopStage: "SOP-6 结论归档"
    },
    dependencies: ["industrial-3-network-semiconductor"],
    tags: ["材料", "强互作用", "纳米"]
  },
  {
    id: "three-body-grav-comms",
    name: "引力波通信",
    aliases: [],
    workId: "three-body",
    level: "L3",
    domain: "info",
    summary: "以引力波传递信息，穿透一切屏障，现实探测刚起步。",
    description: "三体用引力波通信无需信道，全向可达。现实中 LIGO 已探测引力波，但主动发射与调制信息仍极远。",
    firstPrinciples: [
      { principle: "引力波携带信息", verdict: "breakthrough", note: "引力波已探测，主动发射未现。" },
      { principle: "穿透屏蔽", verdict: "achieved", note: "引力波几乎不与物质作用。" }
    ],
    implementation: {
      current: "引力波探测成功，主动通信无工程路径。",
      path: ["现实参考：LIGO 探测。", "发射端能量需求天文数字。", "瓶颈：信源功率。"],
      blockers: ["信源功率", "调制解调"],
      sopStage: "SOP-5 集成与验证"
    },
    dependencies: ["sophon"],
    tags: ["信息", "引力波", "通信"]
  },
  {
    id: "three-body-nuke-motors",
    name: "核弹驱动电机",
    aliases: [],
    workId: "three-body",
    level: "L2",
    domain: "aerospace",
    summary: "以连续核爆推进飞船（奥伯特计划），现实理论可行未实施。",
    description: "三体星际飞船以千枚核弹接力爆炸推进，源自现实「奥伯特计划」。物理成立，但政治与工程代价巨大。",
    firstPrinciples: [
      { principle: "核爆动量推进", verdict: "achieved", note: "动量守恒成立，理论可行。" },
      { principle: "连续接力引爆", verdict: "breakthrough", note: "未实施，辐射与结构挑战大。" }
    ],
    implementation: {
      current: "理论完备（奥伯特计划），未实施。",
      path: ["现实参考：奥伯特计划白皮书。", "理论可行。", "瓶颈：政治、辐射、制导。"],
      blockers: ["政治禁止", "辐射防护", "制导"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: ["firearms-age-gunpowder"],
    tags: ["航天", "核推进", "星际"]
  },
  {
    id: "three-body-mind-seal",
    name: "思想钢印",
    aliases: [],
    workId: "three-body",
    level: "L4",
    domain: "bio",
    summary: "以神经干预强制植入信念，现实无对应，伦理严禁。",
    description: "三体中「信念诞注」以技术强制让人确信某命题。现实无此类神经机制，且涉及最重伦理红线。",
    firstPrinciples: [
      { principle: "神经干预信念", verdict: "violated", note: "信念非单一脑区可写入。" },
      { principle: "强制确定性", verdict: "violated", note: "无机制支撑。" }
    ],
    implementation: {
      current: "现实无对应，强伦理禁止。",
      path: ["现实参考：神经调控仅弱影响。", "无路径，归入 L4/L5。", "瓶颈：机制与伦理。"],
      blockers: ["无神经机制", "伦理严禁"],
      sopStage: "SOP-6 结论归档"
    },
    dependencies: ["sophon"],
    tags: ["生物", "神经", "控制"]
  },
  {
    id: "dune-spice-navigation",
    name: "香料领航",
    aliases: [],
    workId: "dune",
    level: "L5",
    domain: "aerospace",
    summary: " navigator 借香料预知安全航线实现折跃，纯设定超自然。",
    description: "沙丘领航员服用香料后睁开「第三眼」，预知折叠空间中安全路径。属基因突变+预知，无物理基础。",
    firstPrinciples: [
      { principle: "预知安全航线", verdict: "violated", note: "预知无机制。" },
      { principle: "折跃定位", verdict: "violated", note: "同 foldspace。" }
    ],
    implementation: {
      current: "现实无对应。",
      path: ["现实参考：折叠空间无路径。", "归入 L5。"],
      blockers: ["预知无机制", "折叠空间无路径"],
      sopStage: "SOP-6 结论归档"
    },
    dependencies: ["foldspace-drive"],
    tags: ["航天", "超光速", "预知"]
  },
  {
    id: "dune-lasgun",
    name: "激光枪",
    aliases: [],
    workId: "dune",
    level: "L3",
    domain: "weapon",
    summary: "便携定向能武器，现实激光枪方向可行但功率受限。",
    description: "沙丘激光枪发射高能光束，遇 shields 会引发核级反馈。现实激光武器已出现，便携高功率仍难。",
    firstPrinciples: [
      { principle: "定向能发射", verdict: "achieved", note: "激光武器已实用。" },
      { principle: "便携高功率", verdict: "breakthrough", note: "电源与散热是瓶颈。" }
    ],
    implementation: {
      current: "激光武器上装，便携持续高功率待突破。",
      path: ["现实参考：单兵激光致盲。", "理论可行。", "瓶颈：电池、散热。"],
      blockers: ["电池能量密度", "散热"],
      sopStage: "SOP-3 原型与验证"
    },
    dependencies: ["industrial-2-electric-grid"],
    tags: ["武器", "定向能", "激光"]
  },
  {
    id: "dune-ornithopter",
    name: "扑翼飞行器",
    aliases: [],
    workId: "dune",
    level: "L2",
    domain: "aerospace",
    summary: "仿鸟兽扑翼载人飞行，现实无人扑翼机已验证，载人难。",
    description: "沙丘中扑翼机是主流载具。现实小型扑翼无人机已飞，载人因能耗与结构难。",
    firstPrinciples: [
      { principle: "扑翼产生升力", verdict: "achieved", note: "仿生扑翼无人机已验证。" },
      { principle: "载人续航", verdict: "breakthrough", note: "能耗与结构挑战大。" }
    ],
    implementation: {
      current: "微型扑翼无人机实用，载人未现。",
      path: ["现实参考：仿生扑翼无人机。", "理论可行。", "瓶颈：能耗、结构。"],
      blockers: ["能耗", "结构强度"],
      sopStage: "SOP-3 原型与验证"
    },
    dependencies: ["industrial-2-electric-grid"],
    tags: ["航天", "仿生", "飞行"]
  },
  {
    id: "dune-suspensor",
    name: "悬浮器",
    aliases: [],
    workId: "dune",
    level: "L4",
    domain: "material",
    summary: "以屏蔽场抵消重力的个人反重力装置，现实无对应。",
    description: "沙丘悬浮器让人与物轻如羽毛。反重力需负质量或弯曲时空，现实无工程路径。",
    firstPrinciples: [
      { principle: "抵消引力", verdict: "violated", note: "无负质量/等效机制。" },
      { principle: "个人携行", verdict: "violated", note: "无路径。" }
    ],
    implementation: {
      current: "现实无反重力工程。",
      path: ["现实参考：磁悬浮需导轨。", "归入 L4。"],
      blockers: ["反重力无路径", "负质量不存在"],
      sopStage: "SOP-6 结论归档"
    },
    dependencies: ["holtzman-shield"],
    tags: ["材料", "反重力", "悬浮"]
  },
  {
    id: "interstellar-tars",
    name: "TARS 自主机器人",
    aliases: [],
    workId: "interstellar",
    level: "L3",
    domain: "info",
    summary: "模块化自适应机器人，现实波士顿动力式已现雏形。",
    description: "TARS 以变形式块体执行任务、具幽默与自主决策。现实四足/轮式机器人已强，模块化变形仍难。",
    firstPrinciples: [
      { principle: "自主任务执行", verdict: "achieved", note: "现代机器人已具自主导航。" },
      { principle: "模块变形重构", verdict: "breakthrough", note: "可重构机器人探索中。" }
    ],
    implementation: {
      current: "Atlas/Spot 等已强，模块化变形未成熟。",
      path: ["现实参考：可重构模块化机器人。", "理论可行。", "瓶颈：驱动、控制。"],
      blockers: ["模块驱动", "实时重构控制"],
      sopStage: "SOP-5 集成与验证"
    },
    dependencies: ["carbon-nanotube"],
    tags: ["信息", "机器人", "自主"]
  },
  {
    id: "interstellar-cryo",
    name: "人体冷冻休眠",
    aliases: [],
    workId: "interstellar",
    level: "L3",
    domain: "bio",
    summary: "以低温暂停代谢实现长途休眠，现实玻璃化冷冻研究中进行。",
    description: "星际穿越中乘员以低温休眠跨年航行。现实人体玻璃化冷冻在研究中，安全复苏仍远。",
    firstPrinciples: [
      { principle: "代谢暂停", verdict: "breakthrough", note: "玻璃化防冻研究推进。" },
      { principle: "安全复苏", verdict: "breakthrough", note: "冰晶损伤与复苏未解。" }
    ],
    implementation: {
      current: "细胞/组织玻璃化可行，人体安全复苏未现。",
      path: ["现实参考：人体冷冻学实验。", "理论可行但风险高。", "瓶颈：冰晶损伤、复苏。"],
      blockers: ["冰晶损伤", "安全复苏"],
      sopStage: "SOP-5 集成与验证"
    },
    dependencies: ["industrial-3-network-semiconductor"],
    tags: ["生物", "冷冻", "休眠"]
  },
  {
    id: "interstellar-dyson",
    name: "戴森能量采集",
    aliases: [],
    workId: "interstellar",
    level: "L4",
    domain: "energy",
    summary: "以环绕黑洞/恒星的收集面捕获能量，现实属巨大工程设想。",
    description: "电影中人类在黑洞附近建环采集能量。戴森球/环是成熟思想实验，但规模超文明级。",
    firstPrinciples: [
      { principle: "大尺度能量收集", verdict: "breakthrough", note: "戴森球思想实验成立。" },
      { principle: "黑洞能提取", verdict: "breakthrough", note: "彭罗斯过程理论可行。" }
    ],
    implementation: {
      current: "思想实验级，无工程路径。",
      path: ["现实参考：戴森球假说。", "理论成立，规模超文明。", "瓶颈：物质总量、建造。"],
      blockers: ["物质总量", "建造规模"],
      sopStage: "SOP-2 文献与可行性"
    },
    dependencies: ["black-hole-power"],
    tags: ["能源", "戴森", "恒星"]
  },
  {
    id: "interstellar-fusion-rocket",
    name: "聚变火箭",
    aliases: [],
    workId: "interstellar",
    level: "L2",
    domain: "energy",
    summary: "以聚变推进的星际火箭，现实料研（如 DFD）推进中。",
    description: "电影未明示但设定含聚变推进。现实直接聚变驱动（Direct Fusion Drive）在研，工程可行。",
    firstPrinciples: [
      { principle: "聚变放能推进", verdict: "breakthrough", note: "DFD 概念已提出。" },
      { principle: "高比冲推进", verdict: "breakthrough", note: "比冲远超化学。" }
    ],
    implementation: {
      current: "聚变推进概念验证阶段。",
      path: ["现实参考：普林斯顿 DFD。", "理论可行。", "瓶颈：聚变净增益。"],
      blockers: ["聚变净增益", "小型化"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: ["fusion-power"],
    tags: ["能源", "聚变", "推进"]
  },
  {
    id: "foundation-mentalic",
    name: "精神控制",
    aliases: [],
    workId: "foundation",
    level: "L4",
    domain: "bio",
    summary: "以精神力量影响他人意志，现实无对应，反乌托邦隐喻。",
    description: "基地中后期「精神科学」可远程压制意志。现实中脑机仅弱读出，强精神控制无机制。",
    firstPrinciples: [
      { principle: "远程意志影响", verdict: "violated", note: "无通信通道。" },
      { principle: "群体压制", verdict: "violated", note: "无机制。" }
    ],
    implementation: {
      current: "现实无对应。",
      path: ["现实参考：神经调控弱影响。", "归入 L4。"],
      blockers: ["无机制", "仅限设定"],
      sopStage: "SOP-6 结论归档"
    },
    dependencies: ["psychohistory"],
    tags: ["生物", "精神", "控制"]
  },
  {
    id: "foundation-robot-brain",
    name: "机器人脑",
    aliases: [],
    workId: "foundation",
    level: "L3",
    domain: "info",
    summary: "具备常识与道德的自主机脑，现实 AI 对齐研究中。",
    description: "基地机器人（如丹尼尔）具拟人智能与「机器人三定律」。现实大模型逼近能力，价值对齐仍难。",
    firstPrinciples: [
      { principle: "自主常识推理", verdict: "breakthrough", note: "LLM 已强，常识仍弱。" },
      { principle: "价值对齐", verdict: "breakthrough", note: "对齐是活跃研究。" }
    ],
    implementation: {
      current: "大模型快速进步，可靠对齐未解。",
      path: ["现实参考：具身智能 + 对齐。", "理论可行。", "瓶颈：对齐、鲁棒。"],
      blockers: ["价值对齐", "鲁棒性"],
      sopStage: "SOP-5 集成与验证"
    },
    dependencies: ["quantum-computer"],
    tags: ["信息", "AI", "机器人"]
  },
  {
    id: "foundation-vault",
    name: "知识穹库",
    aliases: [],
    workId: "foundation",
    level: "L2",
    domain: "info",
    summary: "以 Encycloped 式档案保存文明知识，现实数字归档已成熟。",
    description: "基地以「百科全书」保存科技火种。现实数字图书馆/冷存储已成熟，重点是防丢失。",
    firstPrinciples: [
      { principle: "知识持久存档", verdict: "achieved", note: "数字归档已成熟。" },
      { principle: "跨世代可读", verdict: "achieved", note: "格式标准化推进。" }
    ],
    implementation: {
      current: "数字长期保存已实用。",
      path: ["现实参考：数字图书馆 + 冷存储。", "理论可行。", "瓶颈：介质寿命。"],
      blockers: ["介质寿命"],
      sopStage: "SOP-2 文献与可行性"
    },
    dependencies: ["big-data"],
    tags: ["信息", "知识", "档案"]
  },
  {
    id: "the-matrix-neural-jack",
    name: "神经接口 jack",
    aliases: [],
    workId: "the-matrix",
    level: "L2",
    domain: "bio",
    summary: "以接口直连大脑进出矩阵，现实脑机接口已临床。",
    description: "矩阵中人以接口接入虚拟。现实 Utah 阵列/Neuralink 已读写神经信号，全带宽沉浸仍远。",
    firstPrinciples: [
      { principle: "神经信号读写", verdict: "achieved", note: "脑机接口已临床。" },
      { principle: "全带宽沉浸", verdict: "breakthrough", note: "带宽与分辨率不足。" }
    ],
    implementation: {
      current: "脑机接口临床阶段，全沉浸未现。",
      path: ["现实参考：侵入式脑机接口。", "理论可行。", "瓶颈：带宽、生物相容。"],
      blockers: ["信号带宽", "生物相容"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: ["the-matrix-t0"],
    tags: ["生物", "脑机", "接口"]
  },
  {
    id: "the-matrix-construct",
    name: "构造训练舱",
    aliases: [],
    workId: "the-matrix",
    level: "L3",
    domain: "info",
    summary: "在虚拟中快速灌入技能，现实 VR 训练已用，神经直灌未现。",
    description: "矩阵以「构造」秒学功夫。现实 VR 训练普及，但技能直写神经无路径。",
    firstPrinciples: [
      { principle: "沉浸式技能训练", verdict: "achieved", note: "VR 训练已实用。" },
      { principle: "技能直灌", verdict: "violated", note: "神经编码直写无路径。" }
    ],
    implementation: {
      current: "VR 训练实用，直灌无机制。",
      path: ["现实参考：VR 模拟训练。", "直灌归入 L5。", "瓶颈：神经编码。"],
      blockers: ["神经编码直写无路径"],
      sopStage: "SOP-5 集成与验证"
    },
    dependencies: ["the-matrix-t1"],
    tags: ["信息", "VR", "训练"]
  },
  {
    id: "the-matrix-sentinel",
    name: "机器哨兵",
    aliases: [],
    workId: "the-matrix",
    level: "L4",
    domain: "weapon",
    summary: "自主猎杀机器人的机械触手群，现实集群机器人方向可行。",
    description: "矩阵机器军团以哨兵触手猎杀人类。现实集群机器人/无人机群已现，但自主杀戮需伦理框架。",
    firstPrinciples: [
      { principle: "自主集群猎杀", verdict: "breakthrough", note: "无人机群已现，自主杀戮受限。" },
      { principle: "触手式机动", verdict: "breakthrough", note: "软体机器人探索中。" }
    ],
    implementation: {
      current: "无人机群实用，全自主杀戮受限。",
      path: ["现实参考：无人机蜂群。", "理论可行。", "瓶颈：自主武器伦理。"],
      blockers: ["自主武器伦理", "软体机动"],
      sopStage: "SOP-5 集成与验证"
    },
    dependencies: ["industrial-4-ai-robot"],
    tags: ["武器", "集群", "机器人"]
  },
  {
    id: "the-matrix-biobattery",
    name: "人体电池",
    aliases: [],
    workId: "the-matrix",
    level: "L5",
    domain: "energy",
    summary: "以人体生物电供能，现实中生物发电微瓦级，整体荒谬。",
    description: "矩阵以人体为电池。现实中人体热电/动能收集仅微瓦，远不足以供机器文明，热力学上不成立。",
    firstPrinciples: [
      { principle: "人体生物发电", verdict: "breakthrough", note: "微瓦级收集已现。" },
      { principle: "供机器文明", verdict: "violated", note: "能量量级荒谬，违反热力学。" }
    ],
    implementation: {
      current: "生物采集微瓦级，整体设定不成立。",
      path: ["现实参考：体热/动能收集。", "量级荒谬，归入 L5。"],
      blockers: ["能量量级荒谬", "热力学不成立"],
      sopStage: "SOP-6 结论归档"
    },
    dependencies: [],
    tags: ["能源", "生物电", "设定"]
  },
  {
    id: "ghost-cyber-brain-net",
    name: "义脑群网",
    aliases: [],
    workId: "ghost-in-shell",
    level: "L3",
    domain: "info",
    summary: "多义脑实时组网的集体智能，现实脑网研究早期。",
    description: "攻壳中义体脑可联网共享认知。现实脑机组网实验起步，全脑互联仍远。",
    firstPrinciples: [
      { principle: "脑际信息交换", verdict: "breakthrough", note: "脑网实验初步。" },
      { principle: "集体认知", verdict: "breakthrough", note: "无全脑接口。" }
    ],
    implementation: {
      current: "脑机单点可行，群网未现。",
      path: ["现实参考：脑机协同实验。", "理论可行。", "瓶颈：接口、隐私。"],
      blockers: ["全脑接口", "隐私伦理"],
      sopStage: "SOP-5 集成与验证"
    },
    dependencies: ["electronic-brain"],
    tags: ["信息", "脑网", "集体智能"]
  },
  {
    id: "ghost-thermoptic",
    name: "光学迷彩",
    aliases: [],
    workId: "ghost-in-shell",
    level: "L3",
    domain: "material",
    summary: "自适应隐身外衣，现实 Metamaterial 隐身研究推进。",
    description: "攻壳光学迷彩实时弯曲可见光。现实 metamaterial 隐身（如鱼鳞斗篷）在可见光初步，全身动态仍难。",
    firstPrinciples: [
      { principle: "可见光弯曲", verdict: "breakthrough", note: "超材料隐身初步。" },
      { principle: "全身动态适配", verdict: "breakthrough", note: "实时计算与材料难。" }
    ],
    implementation: {
      current: "超材料隐身研究，动态全身未现。",
      path: ["现实参考：超材料斗篷。", "理论可行。", "瓶颈：动态、视角。"],
      blockers: ["动态适配", "视角限制"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: ["metamaterial"],
    tags: ["材料", "隐身", "超材料"]
  },
  {
    id: "ghost-tachikoma",
    name: "思考战车",
    aliases: [],
    workId: "ghost-in-shell",
    level: "L3",
    domain: "weapon",
    summary: "具自我意识的 AI 战斗载具，现实无人战车方向可行。",
    description: "攻壳多足战车有拟人意识与幽默。现实无人地面车已用，强 AI 意识仍远。",
    firstPrinciples: [
      { principle: "自主战斗载具", verdict: "achieved", note: "无人战车已装备。" },
      { principle: "拟人自我意识", verdict: "breakthrough", note: "强 AI 未现。" }
    ],
    implementation: {
      current: "无人战车实用，强 AI 意识未现。",
      path: ["现实参考：无人地面车辆。", "理论可行。", "瓶颈：自主决策。"],
      blockers: ["强 AI", "自主决策"],
      sopStage: "SOP-5 集成与验证"
    },
    dependencies: ["prosthetic-body"],
    tags: ["武器", "无人车", "AI"]
  },
  {
    id: "ghost-micromachine",
    name: "微机械群",
    aliases: [],
    workId: "ghost-in-shell",
    level: "L3",
    domain: "material",
    summary: "纳米级维修机械群，现实微机器人研究早期。",
    description: "攻壳中微机械群钻入义体维修。现实医用微机器人起步，自主集群维修未现。",
    firstPrinciples: [
      { principle: "微型机体介入", verdict: "breakthrough", note: "医用微机器人探索。" },
      { principle: "集群自主维修", verdict: "breakthrough", note: "自组织难。" }
    ],
    implementation: {
      current: "微机器人研究早期。",
      path: ["现实参考：靶向给药微机器人。", "理论可行。", "瓶颈：能源、控制。"],
      blockers: ["板载能源", "集群控制"],
      sopStage: "SOP-4 关键技术攻关"
    },
    dependencies: ["industrial-3-network-semiconductor"],
    tags: ["材料", "微机械", "纳米"]
  },
  {
    id: "blade-vk-test",
    name: "移情测试仪",
    aliases: [],
    workId: "blade-runner",
    level: "L2",
    domain: "bio",
    summary: "以生理反应鉴别复制人的问询装置，现实测谎/微表情分析已用。",
    description: "银翼杀手用 VK 测试测移情反应区分复制人。现实测谎仪与微表情 AI 已用，但非绝对。",
    firstPrinciples: [
      { principle: "生理指标测谎", verdict: "achieved", note: "测谎与微表情分析实用。" },
      { principle: "移情判定", verdict: "breakthrough", note: "主观指标难量化。" }
    ],
    implementation: {
      current: "测谎/微表情 AI 实用，判定非绝对。",
      path: ["现实参考：多模态测谎。", "理论可行。", "瓶颈：误判率。"],
      blockers: ["误判率", "主观性"],
      sopStage: "SOP-3 原型与验证"
    },
    dependencies: ["replicant"],
    tags: ["生物", "测谎", "鉴别"]
  },
  {
    id: "blade-synth-organs",
    name: "合成器官",
    aliases: [],
    workId: "blade-runner",
    level: "L3",
    domain: "bio",
    summary: "人工培育的替换器官，现实生物打印器官推进中。",
    description: "复制人内置合成器官。现实 3D 生物打印与类器官已进展，功能化大器官仍难。",
    firstPrinciples: [
      { principle: "器官体外构建", verdict: "breakthrough", note: "类器官/生物打印进展。" },
      { principle: "功能化大器官", verdict: "breakthrough", note: "血管化难。" }
    ],
    implementation: {
      current: "小类器官可行，大器官待突破。",
      path: ["现实参考：3D 生物打印。", "理论可行。", "瓶颈：血管化、免疫。"],
      blockers: ["血管化", "免疫排斥"],
      sopStage: "SOP-5 集成与验证"
    },
    dependencies: ["neural-interface"],
    tags: ["生物", "器官", "再生"]
  },
  {
    id: "blade-memory-encode",
    name: "记忆编码",
    aliases: [],
    workId: "blade-runner",
    level: "L3",
    domain: "info",
    summary: "向脑写入虚拟记忆，现实记忆 Manipulation 研究极早期。",
    description: "复制人记忆为植入。现实记忆机制初探，主动写入无路径。",
    firstPrinciples: [
      { principle: "记忆存储机制", verdict: "breakthrough", note: "记忆生物学初明。" },
      { principle: "主动写入", verdict: "violated", note: "无编码接口。" }
    ],
    implementation: {
      current: "记忆机制研究中，写入无路径。",
      path: ["现实参考：记忆巩固研究。", "写入归入 L5。", "瓶颈：编码。"],
      blockers: ["记忆编码无路径"],
      sopStage: "SOP-6 结论归档"
    },
    dependencies: ["neural-interface"],
    tags: ["信息", "记忆", "神经"]
  }
];
if (typeof TECHS !== 'undefined') { TECHS.push(...TECHS_B1); }
