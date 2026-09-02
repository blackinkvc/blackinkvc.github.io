// ============================================================
// 普世科技元素表模板
// 任何科幻世界观的科技，都可映射到这棵六分支模板树上：
// 每个世界观"点亮"自己已掌握的节点，未点亮的显示为虚线轮廓。
// 纵轴为技术阶梯（自下而上，从现实基线到世界观限定），
// 节点右上角的罗马数字为其真实"实现等级"（对应 LEVELS）。
// 第七分支为"奇点"，承载该世界观独有的标志性科技（representativeTechs）。
// ============================================================

const TREE_BRANCHES = [
  {
    key: "E", label: "能源", motto: "文明的底色，是它烧什么",
    nodes: [
      { id: "E1", name: "化石燃料与电网", level: 1, desc: "热机与输电网络，工业文明的呼吸系统。" },
      { id: "E2", name: "裂变核电", level: 1, desc: "链式反应锅炉，已运行七十年，废料与安全是工程而非原理问题。" },
      { id: "E3", name: "可控聚变", level: 3, desc: "点燃恒星之火并装进容器，劳森判据是唯一裁判。" },
      { id: "E4", name: "反物质与恒星工程", level: 4, desc: "质能转换的极限；采集整颗恒星的输出。" },
      { id: "E5", name: "真空零点能", level: 5, desc: "从空无一物中舀出能量，目前只属于设定。" }
    ]
  },
  {
    key: "M", label: "材料", motto: "能造出什么，取决于手里拿着什么",
    nodes: [
      { id: "M1", name: "合金与复合材料", level: 1, desc: "冶金的古典时代到碳纤维，一切结构的物质基础。" },
      { id: "M2", name: "纳米材料与超导", level: 2, desc: "在分子尺度排布物质；零电阻输电已在路上。" },
      { id: "M3", name: "可编程物质", level: 3, desc: "按指令改变自身形状与性质的物质。" },
      { id: "M4", name: "奇异物质工程", level: 4, desc: "简并态物质、核子强度材料——中子星的碎片。" },
      { id: "M5", name: "世界观特供物质", level: 5, desc: "山铜、振金、香料……只在写下它的那个宇宙里成立。" }
    ]
  },
  {
    key: "I", label: "智能", motto: "把思考外包出去之后",
    nodes: [
      { id: "I1", name: "网络与窄域AI", level: 1, desc: "全球互联与专用智能，此刻正在发生。" },
      { id: "I2", name: "深度智能", level: 3, desc: "跨领域推理的机器心智，图灵测试已是旧闻。" },
      { id: "I3", name: "全沉浸虚拟", level: 3, desc: "感官级带宽的仿真世界，意识难以分辨。" },
      { id: "I4", name: "意识上传", level: 4, desc: "把自我写成数据——先要回答'自我'是什么。" },
      { id: "I5", name: "超级智能", level: 5, desc: "超越一切人类心智的总和，最后一项发明。" }
    ]
  },
  {
    key: "B", label: "生命", motto: "改写造物的源代码",
    nodes: [
      { id: "B1", name: "基因工程", level: 1, desc: "CRISPR 已在临床，读写的成本每年都在塌方。" },
      { id: "B2", name: "克隆与器官再生", level: 2, desc: "体细胞到完整个体；培养皿里长出备用器官。" },
      { id: "B3", name: "人体增强", level: 3, desc: "义体、神经接口、基因定制——人成为自己的版本号。" },
      { id: "B4", name: "摆脱死亡", level: 4, desc: "衰老作为可治疗的疾病；意识的连续性成为哲学难题。" },
      { id: "B5", name: "生命造物", level: 5, desc: "从零设计物种、生态与智能生命。弗兰肯斯坦的完整版。" }
    ]
  },
  {
    key: "S", label: "空间", motto: "去多远，算多大",
    nodes: [
      { id: "S1", name: "化学火箭与卫星", level: 1, desc: "齐奥尔科夫斯基方程下的一切，近地空间的日常。" },
      { id: "S2", name: "核推进与常驻太空", level: 2, desc: "裂变热推、电推、空间站——太阳系内圈的城市化。" },
      { id: "S3", name: "亚光速航行", level: 3, desc: "世代飞船、聚变冲压、相对论时间债。" },
      { id: "S4", name: "超光速航行", level: 4, desc: "曲率泡、虫洞、跃迁——广义相对论的边角料。" },
      { id: "S5", name: "时间与维度", level: 5, desc: "回到过去、跃出三维；因果律开始收费。" }
    ]
  },
  {
    key: "W", label: "武力", motto: "能毁掉什么，同样算数",
    nodes: [
      { id: "W1", name: "核威慑", level: 1, desc: "广岛之后，大国战争变成数学题。" },
      { id: "W2", name: "定向能武器", level: 2, desc: "激光与粒子束从实验室走上战场，功率是唯一瓶颈。" },
      { id: "W3", name: "轨道武器平台", level: 3, desc: "上帝之杖与天基激光，制天权即制地球。" },
      { id: "W4", name: "行星级武器", level: 4, desc: "死星与二向箔的门槛：毁灭行星级目标的能力。" },
      { id: "W5", name: "概念级武器", level: 5, desc: "降维、改写物理常数——武器即物理本身。" }
    ]
  }
];

// 分支 key → 科技领域（TECHS.domain）映射
const TREE_DOMAIN_MAP = {
  energy: "E", material: "M", info: "I", bio: "B", aerospace: "S", weapon: "W"
};

// 层级标签（自下而上）
const TREE_TIERS = [
  { tier: 1, label: "现实基线" },
  { tier: 2, label: "延伸可达" },
  { tier: 3, label: "工程挑战" },
  { tier: 4, label: "原理边界" },
  { tier: 5, label: "世界观限定" }
];

// 把一条科技条目挂载到模板节点：同分支内找 level 最接近的节点
function treeMountTech(tech) {
  const bKey = TREE_DOMAIN_MAP[tech.domain];
  if (!bKey) return null;
  const branch = TREE_BRANCHES.find(b => b.key === bKey);
  if (!branch) return null;
  let best = null, bestDiff = Infinity;
  for (const n of branch.nodes) {
    const diff = Math.abs(n.level - tech.level);
    if (diff < bestDiff) { bestDiff = diff; best = n; }
  }
  return best ? best.id : null;
}

// 汇总某世界观的所有模板节点 id
function treeAllNodeIds() {
  const ids = [];
  for (const b of TREE_BRANCHES) for (const n of b.nodes) ids.push(n.id);
  return ids;
}
