// 从数据单一来源生成 Markdown 交付文档
const fs = require("fs");
const path = require("path");

// 加载数据（通过把 window 赋值后 eval）
const dataDir = path.join(__dirname, "..", "assets", "data");
const ctx = {};
const vm = require("vm");
const sandbox = ctx;
sandbox.window = sandbox; // 数据文件用 window.X 赋值
vm.createContext(sandbox);
["categories", "worldviews", "tech", "tech_extra", "sop"].forEach(f => {
  const code = fs.readFileSync(path.join(dataDir, f + ".js"), "utf8");
  vm.runInContext(code, sandbox);
});
const CAT = sandbox.SCICAT_CATEGORIES, ORDER = sandbox.SCICAT_ORDER;
const WVS = sandbox.SCICAT_WORLDVIEWS, TECHS = sandbox.SCICAT_TECHS, SOP = sandbox.SCICAT_SOP;
const catById = Object.fromEntries(CAT.map(c => [c.id, c]));
const wvById = Object.fromEntries(WVS.map(w => [w.id, w]));
const techById = Object.fromEntries(TECHS.map(t => [t.id, t]));

function mdEscape(s){ return String(s==null?"":s).replace(/\|/g,"\\|"); }

// ---- 项目蓝图 ----
let blueprint = `# 科幻科技实现蓝图 · 项目蓝图

> 以严肃科学、第一性原理与超级工程师工作方法，研究科幻作品中的科技如何实现（或为何不能），
> 并建立可检索、可可视化的研发知识库。

## 1. 项目目标
- 建立科幻科技的**五级可行性分类体系**
- 为每项技术提供**第一性原理拆解**（原理 → 物理基础 → 工程可行性 → 关键瓶颈 → 研发路径）
- 提供**世界观简介系统**，标注各宇宙的“物理法则设定”与现实物理的偏离度
- 提供**可视化科技树**，呈现技术依赖与可行性层级
- 提供可复用的**研发设计 SOP**（12 阶段）

## 2. 五级可行性分类体系
`;
CAT.forEach(c => {
  blueprint += `\n### ${c.name}（${c.nameEn}）\n`;
  blueprint += `- 色标：![c](${c.color})\n`;
  blueprint += `- 定义：${c.desc}\n`;
  blueprint += `- 原则：${c.principle}\n`;
  blueprint += `- 典型路线：${c.roadmap}\n`;
});
blueprint += `\n## 3. 世界观系统（${WVS.length} 类）\n`;
WVS.forEach(w => {
  blueprint += `\n### ${w.name}（${w.nameEn}）\n`;
  blueprint += `- 现实偏离度：${w.deviation}\n`;
  blueprint += `- 简介：${w.blurb}\n`;
  blueprint += `- 物理法则设定：\n` + w.physicsRules.map(r => `  - ${r}`).join("\n") + "\n";
  const wtechs = (w.typicalTechIds ? w.typicalTechIds.map(id=>techById[id]).filter(Boolean) : TECHS.filter(t=>(t.worldviews||[]).includes(w.id))).map(t=>t.name);
  blueprint += `- 典型科技：${wtechs.join("、") || "—"}\n`;
});

blueprint += `\n## 4. 技术条目总览（${TECHS.length} 项）\n\n`;
ORDER.forEach(cid => {
  const c = catById[cid];
  const list = TECHS.filter(t => t.category === cid);
  blueprint += `### ${c.name}（${list.length} 项）\n`;
  list.forEach(t => {
    blueprint += `- **${t.name}**（${t.nameEn}）— TRL ${t.trl}/9：${t.principle}\n`;
  });
  blueprint += "\n";
});

blueprint += `\n## 5. 可视化与导航\n`;
blueprint += `- 技术库：按分级/世界观/关键词检索，逐条查看第一性原理拆解\n`;
blueprint += `- 科技树：按可行性分列、绘制依赖连线（左=已实现，右=世界观限定）\n`;
blueprint += `- 世界观：列出物理法则设定与偏离度\n`;
blueprint += `- 研发 SOP：12 阶段严肃工程流程\n`;
blueprint += `\n## 6. 使用方式\n`;
blueprint += `直接用浏览器打开 \`index.html\` 即可。详见各页面与 \`docs/研发设计SOP.md\`。\n`;

fs.writeFileSync(path.join(__dirname, "项目蓝图.md"), blueprint, "utf8");

// ---- SOP 文档 ----
let sop = `# 研发设计 SOP（全周期工程方法）

> 把任意科幻设定转化为可执行的严肃工程流程。共 ${SOP.length} 个阶段，循环迭代。
> 每个阶段含：目标 / 输入 / 方法 / 输出 / 工具 / 度量 / 常见陷阱。

`;
SOP.forEach((s, i) => {
  sop += `## 阶段 ${i+1}：${s.name}（${s.nameEn}）\n\n`;
  sop += `**目标**：${s.goal}\n\n`;
  sop += `**输入**：${s.input.join("、")}\n\n`;
  sop += `**方法**：\n` + s.method.map(m => `- ${m}`).join("\n") + "\n\n";
  sop += `**输出**：${s.output.join("、")}\n\n`;
  sop += `**工具**：${s.tools.join("、")}\n\n`;
  sop += `**度量**：${s.metric}\n\n`;
  sop += `**常见陷阱**：${s.pitfall}\n\n`;
  sop += `---\n\n`;
});
sop += `## 附录：分级与 SOP 的对应\n`;
ORDER.forEach(cid => {
  const c = catById[cid];
  const used = [...new Set(TECHS.filter(t=>t.category===cid).flatMap(t=>t.sopRef||[]))];
  sop += `- **${c.name}**：常用阶段 — ${used.join("、") || "—"}\n`;
});

fs.writeFileSync(path.join(__dirname, "研发设计SOP.md"), sop, "utf8");
console.log("已生成: 项目蓝图.md, 研发设计SOP.md");
