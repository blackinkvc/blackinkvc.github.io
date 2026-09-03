// 导出模块：Markdown 下载、Word(.doc 兼容) 下载、打印(PDF)
(function () {
  const CAT = window.SCICAT_CATEGORIES;
  const ORDER = window.SCICAT_ORDER;
  const WVS = window.SCICAT_WORLDVIEWS;
  const TECHS = window.SCICAT_TECHS;
  const SOP = window.SCICAT_SOP;
  const catById = Object.fromEntries(CAT.map(c => [c.id, c]));
  const wvById = Object.fromEntries(WVS.map(w => [w.id, w]));
  const techById = Object.fromEntries(TECHS.map(t => [t.id, t]));

  function esc(s) { return String(s == null ? "" : s).replace(/[&<>]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c])); }
  function eMd(s) { return String(s == null ? "" : s).replace(/\|/g, "\\|"); }

  // ---------- Markdown ----------
  function techMarkdown(t) {
    const c = catById[t.category];
    const deps = (t.dependencies || []).map(d => techById[d]).filter(Boolean);
    return `# ${t.name}（${t.nameEn}）

> 分级：${c.name} · TRL ${t.trl}/9 · 状态：${t.status || "—"}

- **来源**：${(t.sourceWorks || []).join("、") || "—"}
- **世界观**：${(t.worldviews || []).map(id => wvById[id] ? wvById[id].name : id).join("、") || "—"}
- **标签**：${(t.tags || []).join("、") || "—"}

## 原理概述
${t.principle || "—"}

## 物理基础
${t.physicsBasis || "—"}

## 工程可行性
${t.engineeringFeasibility || "—"}

## 关键挑战
${ (t.keyChallenges || []).map(x => `- ${x}`).join("\n") || "- —" }

## 研发路径
${ (t.rdPath || []).map((x, i) => `${i + 1}. ${x}`).join("\n") || "1. —" }

## 技术成熟度 (TRL)
TRL ${t.trl}/9 — ${t.status || "—"}

## 适用 SOP 阶段
${(t.sopRef || []).join(" → ") || "—"}

## 前置 / 使能技术
${ deps.length ? deps.map(d => `- ${d.name}（${d.nameEn}）`).join("\n") : "- —" }

## 备注
${t.note || "—"}

---
*本条目由「科幻科技实现蓝图」生成 · 第一性原理研发知识库*
`;
  }

  function libraryMarkdown() {
    let out = `# 科幻科技实现蓝图 · 技术总库（${TECHS.length} 项）

> 5 级可行性分类体系 + 第一性原理拆解。生成于知识库当前状态。

## 分级体系
${CAT.map(c => `- **${c.name}**：${c.desc}`).join("\n")}

`;
    ORDER.forEach(cid => {
      const c = catById[cid];
      const list = TECHS.filter(t => t.category === cid);
      out += `\n## ${c.name}（${list.length} 项）\n\n`;
      list.forEach(t => {
        out += `### ${t.name}（${t.nameEn}）— TRL ${t.trl}/9\n`;
        out += `- 来源：${(t.sourceWorks || []).join("、")}\n`;
        out += `- 原理：${t.principle}\n`;
        out += `- 物理基础：${t.physicsBasis}\n`;
        out += `- 工程可行性：${t.engineeringFeasibility}\n`;
        out += `- 关键挑战：${(t.keyChallenges || []).join("；")}\n`;
        out += `- 研发路径：${(t.rdPath || []).join(" → ")}\n`;
        out += `- 备注：${t.note || "—"}\n\n`;
      });
    });
    return out;
  }

  function sopMarkdown() {
    let out = `# 研发设计 SOP（全周期工程方法）\n\n> 共 ${SOP.length} 个阶段，循环迭代。\n\n`;
    SOP.forEach((s, i) => {
      out += `## 阶段 ${i + 1}：${s.name}（${s.nameEn}）\n\n`;
      out += `**目标**：${s.goal}\n\n`;
      out += `**输入**：${s.input.join("、")}\n\n`;
      out += `**方法**：\n${s.method.map(m => `- ${m}`).join("\n")}\n\n`;
      out += `**输出**：${s.output.join("、")}\n\n`;
      out += `**工具**：${s.tools.join("、")}\n\n`;
      out += `**度量**：${s.metric}\n\n`;
      out += `**常见陷阱**：${s.pitfall}\n\n---\n\n`;
    });
    return out;
  }

  // ---------- Word 兼容 (.doc) ----------
  function docShell(title, sectionsHtml) {
    // 使用 Word 可打开的 HTML（msword）。含中文字体与基础样式。
    return `<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
<head><meta charset='utf-8'><title>${esc(title)}</title>
<style>
 body{font-family:'Microsoft YaHei','PingFang SC',SimSun,sans-serif;line-height:1.6;color:#1c2330}
 h1{color:#3a6ea5;border-bottom:2px solid #3a6ea5;padding-bottom:6px}
 h2{color:#2b4a6f;margin-top:22px}
 h3{color:#3a6ea5}
 .meta{color:#5b6573;font-size:12px}
 table{border-collapse:collapse;width:100%} td,th{border:1px solid #cdd3dc;padding:6px 8px;font-size:13px;vertical-align:top}
 .tag{background:#eef2f7;border:1px solid #dde3ec;border-radius:4px;padding:1px 6px;font-size:12px}
 .catbar{display:inline-block;width:10px;height:10px;border-radius:50%;margin-right:6px}
</style></head>
<body><h1>${esc(title)}</h1>${sectionsHtml}</body></html>`;
  }
  function techDocHtml(t) {
    const c = catById[t.category];
    const deps = (t.dependencies || []).map(d => techById[d]).filter(Boolean);
    const row = (k, v) => `<tr><td style="width:120px;background:#f5f7fa;font-weight:700">${esc(k)}</td><td>${v}</td></tr>`;
    return `<div class="meta"><span class="catbar" style="background:${c.color}"></span><b style="color:${c.color}">${esc(c.name)}</b> · TRL ${t.trl}/9 · ${esc(t.status || "")}</div>
<h2>${esc(t.name)} <span class="meta">(${esc(t.nameEn)})</span></h2>
<table>
${row("来源", (t.sourceWorks || []).map(esc).join("、"))}
${row("世界观", (t.worldviews || []).map(id => wvById[id] ? esc(wvById[id].name) : esc(id)).join("、"))}
${row("标签", (t.tags || []).map(x => `<span class="tag">${esc(x)}</span>`).join(" "))}
${row("原理概述", esc(t.principle))}
${row("物理基础", esc(t.physicsBasis))}
${row("工程可行性", esc(t.engineeringFeasibility))}
${row("关键挑战", (t.keyChallenges || []).map(esc).join("；"))}
${row("研发路径", (t.rdPath || []).map(esc).join(" → "))}
${row("适用SOP", (t.sopRef || []).join(" → "))}
${row("前置技术", deps.length ? deps.map(d => esc(d.name)).join("、") : "—")}
${row("备注", esc(t.note || "—"))}
</table><hr/>`;
  }
  function libraryDocHtml() {
    let h = `<div class="meta">共 ${TECHS.length} 项技术 · 5 级可行性</div>`;
    ORDER.forEach(cid => {
      const c = catById[cid];
      const list = TECHS.filter(t => t.category === cid);
      h += `<h2><span class="catbar" style="background:${c.color}"></span>${esc(c.name)}（${list.length}）</h2>`;
      list.forEach(t => {
        h += `<h3>${esc(t.name)} <span class="meta">(${esc(t.nameEn)}) · TRL ${t.trl}</span></h3>`;
        h += `<p><b>原理：</b>${esc(t.principle)}</p>`;
        h += `<p><b>物理基础：</b>${esc(t.physicsBasis)}</p>`;
        h += `<p><b>工程可行性：</b>${esc(t.engineeringFeasibility)}</p>`;
        h += `<p><b>关键挑战：</b>${(t.keyChallenges || []).map(esc).join("；")}</p>`;
        h += `<p><b>研发路径：</b>${(t.rdPath || []).map(esc).join(" → ")}</p>`;
      });
    });
    return h;
  }
  function sopDocHtml() {
    let h = `<div class="meta">共 ${SOP.length} 个阶段</div>`;
    SOP.forEach((s, i) => {
      h += `<h2>阶段 ${i + 1}：${esc(s.name)} <span class="meta">(${esc(s.nameEn)})</span></h2>`;
      h += `<p><b>目标：</b>${esc(s.goal)}</p>`;
      h += `<p><b>输入：</b>${(s.input || []).map(esc).join("、")}</p>`;
      h += `<p><b>方法：</b></p><ul>${(s.method || []).map(m => `<li>${esc(m)}</li>`).join("")}</ul>`;
      h += `<p><b>输出：</b>${(s.output || []).map(esc).join("、")}</p>`;
      h += `<p><b>工具：</b>${(s.tools || []).map(esc).join("、")}</p>`;
      h += `<p><b>度量：</b>${esc(s.metric)}</p>`;
      h += `<p><b>常见陷阱：</b>${esc(s.pitfall)}</p><hr/>`;
    });
    return h;
  }

  // ---------- 下载 / 打印 ----------
  function download(filename, content, mime) {
    const blob = new Blob([content], { type: mime || "application/octet-stream" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = filename;
    document.body.appendChild(a); a.click();
    setTimeout(() => { document.body.removeChild(a); URL.revokeObjectURL(url); }, 200);
  }
  function downloadMarkdown(filename, md) { download(filename, "﻿" + md, "text/markdown;charset=utf-8"); }
  function downloadDoc(filename, title, html) {
    const doc = docShell(title, html);
    // 加 BOM 提升 Word 中文兼容性
    download(filename, "﻿" + doc, "application/msword;charset=utf-8");
  }
  function openPrint(title, html) {
    const w = window.open("", "_blank");
    if (!w) { alert("请允许弹出窗口以使用打印/导出 PDF"); return; }
    w.document.open();
    w.document.write(`<!DOCTYPE html><html><head><meta charset="utf-8"><title>${esc(title)}</title>
<style>
 @page{margin:18mm}
 body{font-family:'Microsoft YaHei','PingFang SC',SimSun,sans-serif;line-height:1.6;color:#1c2330;max-width:900px;margin:0 auto;padding:10px}
 h1{color:#3a6ea5;border-bottom:2px solid #3a6ea5;padding-bottom:6px}
 h2{color:#2b4a6f;margin-top:24px;page-break-after:avoid}
 h3{color:#3a6ea5;page-break-after:avoid}
 table{border-collapse:collapse;width:100%;page-break-inside:avoid} td,th{border:1px solid #cdd3dc;padding:6px 8px;font-size:13px;vertical-align:top}
 .meta{color:#5b6573;font-size:12px}
 .tag{background:#eef2f7;border:1px solid #dde3ec;border-radius:4px;padding:1px 6px;font-size:12px}
 .catbar{display:inline-block;width:10px;height:10px;border-radius:50%;margin-right:6px}
 .card{page-break-inside:avoid}
</style></head><body><h1>${esc(title)}</h1>${html}
<script>window.onload=function(){setTimeout(function(){window.print();},300);}<\/script>
</body></html>`);
    w.document.close();
  }

  window.SciCatExport = {
    techMarkdown, libraryMarkdown, sopMarkdown,
    techDocHtml, libraryDocHtml, sopDocHtml, docShell,
    download, downloadMarkdown, downloadDoc, openPrint
  };
})();
