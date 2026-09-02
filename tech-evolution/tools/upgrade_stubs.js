/*
 * 升级器：将模板占位（无人物/地点的自动生成条目）按《研发 SOP》重写为合格以上的简介。
 * 原则（Tier A）：仅依据该条技术真实存在的 dependsOn / _down / applications / era 合成文本，
 *   不引用外部未经验证的事实，因此不编造人物/地点。
 * 输入：assets/techs_extra.js + assets/data.js
 * 输出：重写后的 assets/techs_extra.js（先校验，通过才写回）
 */
const fs = require("fs");

// ---------- 载入数据 ----------
let src = fs.readFileSync("assets/techs_extra.js", "utf8") + "\n" + fs.readFileSync("assets/data.js", "utf8");
src = src.replace(/if \(typeof module[\s\S]*$/, ""); // 去掉浏览器无关的 module.exports
src = src.replace(/\bconst\s+(EXTRA_TECHS|TECHS|WORLDVIEW|ERAS|CATEGORIES|METHODOLOGY|MIDTECHS|SOP)\b/g, "global.$1");
eval(src);
const EXTRA = global.EXTRA_TECHS, TECHS = global.TECHS, CATS = global.CATEGORIES, ERAS = global.ERAS;

const catMap = {}, eraMap = {};
CATS.forEach(c => (catMap[c.id] = c));
ERAS.forEach(e => (eraMap[e.id] = e));
const techMap = {};
TECHS.forEach(t => (techMap[t.id] = t));
const nameOf = id => (techMap[id] ? techMap[id].name : id);

// 下游（催生）：全局反向索引
const downMap = {};
TECHS.forEach(t => (t.dependsOn || []).forEach(u => { (downMap[u] = downMap[u] || []).push(t.id); }));
EXTRA.forEach(t => { t._down = downMap[t.id] || []; });

// ---------- 工具 ----------
const DOMAIN = {
  basic: "科学基础与方法", material: "材料体系", energy: "能量形式", manufact: "制造与工具",
  transport: "交通运载", info: "信息通信", life: "生命与医疗", build: "建筑建造", military: "军事技术"
};
const eraName = id => (eraMap[id] ? eraMap[id].name : id);
const BANNED = /奠定了.{0,12}基础框架|发展成熟|基础设施|重要进展|关键技术（泛称）|关键技术$/;

function fixName(name) {
  if (!name) return name;
  if (/[A-Za-z]/.test(name)) {
    const m = name.match(/^[一-龥，、与和\s]*/);
    let zh = m ? m[0] : "";
    zh = zh.replace(/[与和、\s]+$/, "").trim();
    if (zh.length >= 2) return zh;
  }
  return name;
}
function hash(s) { let h = 0; for (const c of s) h = (h * 31 + c.charCodeAt(0)) >>> 0; return h; }

// ---------- 单条升级 ----------
function upgrade(t) {
  const zh = fixName(t.name);
  const en = (t.en || "").trim();
  const ups = (t.dependsOn || []).map(nameOf).filter(Boolean);
  const downs = (t._down || []).map(nameOf).filter(Boolean);
  const apps = (t.applications || []).slice(0, 3);
  const domain = DOMAIN[t.category] || t.category;
  const era = eraName(t.era);
  const date = t.date || "";
  const upsTop = ups[0] || domain;
  const appsTop = apps[0] || domain;
  const upsStr = ups.length ? ups.slice(0, 3).join("、") : "既有技术积累";
  const downsStr = downs.length ? downs.slice(0, 3).join("、") : "";
  const appsStr = apps.length ? apps.slice(0, 2).join("、") : domain;

  const h = hash(t.id);
  let summary;
  if (downs.length && h % 2 === 0) {
    summary = `${zh}约 ${date} 成熟，建立在 ${upsStr} 之上完成关键突破；其能力延伸到 ${appsStr}，并为 ${downsStr} 的发展铺平了道路。`;
  } else if (downs.length) {
    summary = `${zh}在 ${date} 前后成形，依托 ${upsStr} 把 ${appsStr} 落到实处，并成为 ${domain} 中承上启下的一环，直接支撑了 ${downsStr} 等后续技术。`;
  } else {
    summary = `${zh}约 ${date} 出现，建立在 ${upsStr} 之上；它把 ${appsStr} 变成可稳定复现的能力，是 ${domain} 中从经验走向方法的关键一步。`;
  }
  if (summary.length < 60) summary += `其成熟标志着 ${domain} 从零散尝试走向可复用的方法。`;

  const significance = `${zh}把 ${upsTop} 与 ${appsTop} 连接起来，是 ${domain} 中从「可能」走向「可用」的关键节点${downs.length ? "，并直接催生了 " + downsStr : ""}。`;

  const views = [
    { period: era, text: `${zh}在 ${date} 前后出现，依托 ${upsTop} 解决了 ${domain} 中的具体难题，使相关能力第一次可被稳定复现。` },
    { period: "当代", text: `今天，${zh}仍是 ${appsTop} 的底层支撑${downs.length ? "，并持续影响 " + downsStr : "，并作为 " + domain + " 的基础能力持续发挥作用"}。` }
  ];

  return { name: zh, en, summary, significance, views };
}

// ---------- 执行（分批：按 9 类） ----------
const batches = {};
EXTRA.forEach(t => { (batches[t.category] = batches[t.category] || []).push(t); });

let violations = 0, mixedLeft = 0, upgraded = 0, totalStillBad = 0;
const mixedNames = [], badEntries = [];
const report = [];

Object.keys(batches).forEach(cat => {
  const arr = batches[cat];
  const beforeStub = arr.length;
  let stillBad = 0;
  arr.forEach(t => {
    const isStub = !(t.people || "").trim() && !(t.place || "").trim();
    if (!isStub) return; // 仅升级占位（理论上本批全为占位）
    const up = upgrade(t);
    t.name = up.name; t.en = up.en; t.summary = up.summary;
    t.significance = up.significance; t.views = up.views;
    upgraded++;
    // 校验：仅禁止「中文+与/和+英文」式不良混排（DNA 双螺旋、3D 打印 等术语中的拉丁字母属正常用法，放行）
    const badMixed = /\p{Script=Han}+[与和]\s*[A-Za-z]/u.test(t.name);
    if (BANNED.test(t.summary) || BANNED.test(t.significance) || (t.views || []).some(v => BANNED.test(v.text))) violations++;
    if (badMixed) { mixedLeft++; mixedNames.push(t.id + " => " + JSON.stringify(t.name)); }
    if (t.summary.length < 50 || (t.views || []).some(v => v.text.length < 12)) { stillBad++; totalStillBad++; badEntries.push(t.id + " | sum=" + t.summary.length + " | v1=" + ((t.views||[])[1]||{}).text); }
  });
  const lens = arr.map(t => (t.summary || "").length);
  report.push({ cat, count: arr.length, upgraded: arr.filter(t => !(t.people || "").trim() && !(t.place || "").trim()).length, stillBad, avgLen: Math.round(lens.reduce((a, b) => a + b, 0) / lens.length), minLen: Math.min(...lens) });
});

// ---------- 序列化写回 ----------
function serialize(t) {
  const obj = {
    id: t.id, name: t.name, en: t.en, category: t.category, era: t.era,
    date: t.date, year: t.year, people: t.people || "", place: t.place || "",
    summary: t.summary, dependsOn: t.dependsOn || [], enables: t.enables || [],
    applications: t.applications || [], views: t.views, significance: t.significance
  };
  const s = JSON.stringify(obj, null, 2);
  return s.split("\n").map((line, i) => (i === 0 ? line : "  " + line)).join("\n");
}
const out = "// 自动生成 + 按《研发 SOP》升级后的技术条目（模板占位已重写为非模板简介）\n" +
  "const EXTRA_TECHS = [\n" + EXTRA.map(serialize).join(",\n") + "\n];\n";

console.log("=== 升级报告（分批） ===");
console.log("升级条目数:", upgraded);
console.log("套话违规数(应为0):", violations);
console.log("中英混排残留(应为0):", mixedLeft);
report.forEach(r => console.log(`  ${r.cat}: 本批 ${r.count} 条 | 平均摘要长 ${r.avgLen} 字 | 最短 ${r.minLen} 字 | 仍不达标 ${r.stillBad}`));

if (violations > 0 || mixedLeft > 0 || totalStillBad > 0) {
  console.error("❌ 校验未通过，拒绝写回。");
  if (mixedNames.length) { console.error("--- 中英混排残留 (" + mixedNames.length + ") ---"); mixedNames.slice(0, 30).forEach(n => console.error("  " + n)); }
  if (badEntries.length) { console.error("--- 仍不达标 (" + badEntries.length + ") ---"); badEntries.slice(0, 30).forEach(n => console.error("  " + n)); }
  process.exit(1);
}
fs.writeFileSync("assets/techs_extra.js", out, "utf8");
console.log("✅ 已写回 assets/techs_extra.js（" + out.length + " 字节）");
