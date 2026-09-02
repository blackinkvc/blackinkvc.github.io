// 生成执行：依赖接线 + 输出 EXTRA_TECHS
const fs = require("fs");
const path = require("path");
const { CAT, anchors, existingIds, CAT_DEF, PREREQ, DEF, eraOf, dateOf } = require("./gen_techs");

const ERA_NAME = {
  prehistoric: "史前", ancient: "古代", classical: "古典", medieval: "中世纪",
  earlymodern: "近代早期", industrial: "工业革命", electrical: "电气时代",
  info: "信息时代", intelligent: "智能时代"
};

// 1) 把所有目录条目展平为对象
const news = [];
const seen = new Set();
for (const cat of Object.keys(CAT)) {
  for (const e of CAT[cat]) {
    const id = e[0], name = e[1], en = e[2], year = e[3];
    const deps = Array.isArray(e[4]) ? e[4] : [];
    const role = typeof e[5] === "string" ? e[5] : "";
    if (seen.has(id)) throw new Error("重复 id: " + id);
    seen.add(id);
    if (existingIds.has(id)) throw new Error("与锚点冲突 id: " + id);
    news.push({ id, name, en, year, cat, deps, role });
  }
}

// 2) 合并全量池（锚点 + 新增）
const all = anchors.map(a => ({ id: a.id, cat: a.cat, year: a.year, anchor: true }))
  .concat(news.map(n => ({ id: n.id, cat: n.cat, year: n.year, anchor: false, ref: n })));

// 排序键：year 为主，插入序为辅（保证严格偏序、无环）
all.forEach((t, i) => (t.key = t.year * 100000 + i));
const byId = {};
all.forEach(t => (byId[t.id] = t));
const idSet = new Set(all.map(t => t.id));

// 各分类按 key 升序
const byCat = {};
all.forEach(t => { (byCat[t.cat] = byCat[t.cat] || []).push(t); });
Object.values(byCat).forEach(arr => arr.sort((a, b) => a.key - b.key));

function nearestEarlier(cat, key) {
  const arr = byCat[cat] || [];
  // arr 已按 key 升序，找最后一个 key < given
  let best = null;
  for (const t of arr) { if (t.key < key) best = t; else break; }
  return best;
}

// 3) 为每条新增技术分配依赖
let edges = 0;
const out = [];
for (const n of news) {
  const T = byId[n.id];
  const deps = new Set();
  // 显式依赖（必须存在且更早）
  for (const d of n.deps) {
    if (idSet.has(d) && byId[d].key < T.key) deps.add(d);
  }
  // 前提分类最近前驱
  for (const pc of (PREREQ[n.cat] || [])) {
    let pick = null;
    if (existingIds.has(pc) && byId[pc] && byId[pc].key < T.key) pick = byId[pc];
    else pick = nearestEarlier(pc, T.key);
    if (pick && pick.id !== n.id) deps.add(pick.id);
  }
  // 同分类最近前驱（最多 2）
  const same = (byCat[n.cat] || []).filter(t => t.key < T.key && t.id !== n.id);
  let cnt = 0;
  for (let i = same.length - 1; i >= 0 && cnt < 2; i--) { deps.add(same[i].id); cnt++; }
  // 上限 4，且至少一个（除非确实没有更早的技术）
  let arr = [...deps].filter(d => d !== n.id);
  if (arr.length > 4) arr = arr.slice(0, 4);
  n.finalDeps = arr;
  edges += arr.length;
}

// 4) 组装输出对象
for (const n of news) {
  const cat = n.cat;
  const era = eraOf(n.year);
  const date = dateOf(n.year);
  const apps = DEF[cat].app;
  const role = n.role || DEF[cat].role;
  const summary = `${n.name}（${n.en}）是${CAT_DEF[cat]}领域的关键技术，约 ${date} 发展成熟。${role}。其应用涵盖${apps.join("、")}。`;
  const significance = `${role}，是${CAT_DEF[cat]}的重要节点。`;
  const views = [
    { period: ERA_NAME[era] || era, text: `${n.name}问世之初，被视为${CAT_DEF[cat]}领域的一项重要进展。` },
    { period: "当代", text: `今天，${n.name}已成为${CAT_DEF[cat]}的基础设施，广泛支撑${apps.join("、")}。` }
  ];
  out.push({
    id: n.id, name: n.name, en: n.en, category: cat, era, date, year: n.year,
    people: "", place: "", summary, dependsOn: n.finalDeps, enables: [],
    applications: apps, views, significance
  });
}

// 5) 校验：孤立节点 / 环
const newIdSet = new Set(out.map(o => o.id));
let isolated = 0;
out.forEach(o => { if (o.dependsOn.length === 0) isolated++; });
// 环检测（仅新增内部 + 跨锚点）
const adj = {};
out.forEach(o => (adj[o.id] = o.dependsOn.filter(d => idSet.has(d))));
anchors.forEach(a => (adj[a.id] = [])); // 锚点无 dependsOn 在生成器内
let cycle = null; const st = {};
function dfs(u, stack) {
  st[u] = 1; stack.push(u);
  for (const v of (adj[u] || [])) {
    if (st[v] === 1) { cycle = stack.slice(stack.indexOf(v)).concat(v); return true; }
    if (st[v] === undefined) { if (dfs(v, stack)) return true; }
  }
  st[u] = 2; stack.pop(); return false;
}
for (const o of out) { if (st[o.id] === undefined) { if (dfs(o.id, [])) break; } }

// 6) 写出
const header = "// 自动生成：tools/gen_techs.js + tools/gen_run.js\n// 新增真实技术（约 1000 条），依赖网由生成器自动织造，保证 DAG 无环、全连通。\n";
const body = "const EXTRA_TECHS = [\n" + out.map(o => "  " + JSON.stringify(o)).join(",\n") + "\n];\n";
fs.writeFileSync(path.join(__dirname, "../assets/techs_extra.js"), header + body);

console.log(JSON.stringify({
  anchors: anchors.length,
  newTechs: out.length,
  total: anchors.length + out.length,
  edgesFromNew: edges,
  isolatedNew: isolated,
  cycle: cycle ? cycle.join(" -> ") : "无"
}, null, 2));
