/* ============================================================
   写回脚本 writeback_v2.js
   1) 从 4 个源文件删除 83 个副节点对象（花括号平衡匹配）
   2) 替换全部存留节点的 dependsOn（newDeps.json）
   3) 追加 7 个新节点到 techs_extra.js 的 EXTRA_TECHS 末尾
   ============================================================ */
"use strict";
const fs = require("fs");

const newDeps = JSON.parse(fs.readFileSync("/tmp/newDeps.json", "utf8"));
const newNodes = JSON.parse(fs.readFileSync("/tmp/newNodes.json", "utf8"));
const remap = JSON.parse(fs.readFileSync("/tmp/remap.json", "utf8"));
const dupIds = Object.keys(remap);

// ---------- 删除对象（平衡花括号匹配） ----------
function removeObjById(txt, id, quotedKey) {
  // quotedKey: true → "id":"xxx"；false → id:"xxx"
  const re = quotedKey ? new RegExp('"id"\\s*:\\s*"' + id + '"') : new RegExp('id\\s*:\\s*"' + id + '"');
  const m = re.exec(txt);
  if (!m) return { txt, removed: false };
  // 向前找对象起点：最近的 '{'（在 id 之前，且花括号深度为 0）
  let depth = 0, start = -1;
  for (let i = m.index; i >= 0; i--) {
    const ch = txt[i];
    if (ch === '}') depth++;
    else if (ch === '{') { if (depth === 0) { start = i; break; } depth--; }
  }
  if (start < 0) return { txt, removed: false };
  // 从 start 平衡匹配到结束
  let bal = 0, end = -1;
  for (let j = start; j < txt.length; j++) {
    if (txt[j] === '{') bal++;
    else if (txt[j] === '}') { bal--; if (bal === 0) { end = j; break; } }
  }
  if (end < 0) return { txt, removed: false };
  // 删除 [start, end]，并处理逗号与空白
  let tail = end + 1;
  // 跳过空白
  while (tail < txt.length && /\s/.test(txt[tail])) tail++;
  if (txt[tail] === ',') tail++;
  else if (txt[tail] === ']') { /* 数组结尾，直接接 ] */ }
  else if (txt[tail] === '}') { /* 嵌套对象结尾，直接接 } */ }
  // 若删除后是 ",\n  ]" 模式（数组最后元素被删），需去掉残留逗号——上面已处理
  const result = txt.slice(0, start) + txt.slice(tail);
  return { txt: result, removed: true };
}

// ---------- 主流程 ----------
const files = ["data.js", "techs_extra.js", "techs_extend.js", "techs_more.js"];
let removedTotal = 0, replacedTotal = 0, missingDep = 0;

for (const f of files) {
  let txt = fs.readFileSync("assets/" + f, "utf8");
  const isData = (f === "data.js");
  const idKey = isData ? /id:\s*"([^"]+)"/g : /"id"\s*:\s*"([^"]+)"/g;

  // 1) 删除副节点
  // 收集该文件出现的 id 集合
  const fileIds = new Set();
  let mm; const idRe2 = new RegExp(idKey.source, "g");
  while ((mm = idRe2.exec(txt))) fileIds.add(mm[1]);
  for (const dupId of dupIds) {
    if (!fileIds.has(dupId)) continue;
    const r = removeObjById(txt, dupId, !isData);
    if (r.removed) { txt = r.txt; removedTotal++; }
  }

  // 2) 替换存留节点 dependsOn
  const idRe3 = new RegExp(idKey.source, "g");
  const idsNow = new Set();
  let m3; while ((m3 = idRe3.exec(txt))) idsNow.add(m3[1]);
  for (const id of idsNow) {
    if (!(id in newDeps)) continue;
    const newArr = JSON.stringify(newDeps[id]);
    const esc = id.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const pat = isData
      ? new RegExp('(id:\\s*"' + esc + '"[\\s\\S]*?)dependsOn\\s*:\\s*(\\[[^\\]]*\\])', "g")
      : new RegExp('("id"\\s*:\\s*"' + esc + '"[\\s\\S]*?)dependsOn"\\s*:\\s*(\\[[^\\]]*\\])', "g");
    const before = txt;
    const replSuffix = isData ? ": " : '": ';
    txt = txt.replace(pat, (mm2, pre) => pre + "dependsOn" + replSuffix + newArr);
    if (txt !== before) replacedTotal++; else missingDep++;
  }

  fs.writeFileSync("assets/" + f, txt);
}

// 3) 追加新节点到 techs_extra.js
let extra = fs.readFileSync("assets/techs_extra.js", "utf8");
// 在 EXTRA_TECHS 数组结尾 `];` 前插入
if (newNodes.length) {
  const body = newNodes.map(n => JSON.stringify(n, null, 2).replace(/^/gm, "  ")).join(",\n");
  // 找最后一个 `];`
  const idx = extra.lastIndexOf("];");
  if (idx >= 0) {
    extra = extra.slice(0, idx) + (extra.slice(0, idx).trimEnd().endsWith("{") ? "" : ",\n") + body + "\n];" + extra.slice(idx + 2);
  }
  fs.writeFileSync("assets/techs_extra.js", extra);
}

console.log(JSON.stringify({ removedNodes: removedTotal, replacedDeps: replacedTotal, missingDep, appendedNodes: newNodes.length }));
