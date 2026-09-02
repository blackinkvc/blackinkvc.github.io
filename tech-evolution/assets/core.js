/* ============================================================
   技术演化数据库 · 共享核心（core.js）
   - 数据索引 / 预计算邻接 / 工具函数
   - 详情弹窗（本页浮层，跨视图保留）
   - 关系网计算与缓存
   - 跨页跳转辅助 goto()
   每个页面都引入：d3 → 数据 → core.js → shell.js → pages/xxx.js
   ============================================================ */
"use strict";

// ---------- 索引 ----------
const catMap = {}, eraMap = {}, techMap = {};
CATEGORIES.forEach(c => (catMap[c.id] = c));
ERAS.forEach(e => (eraMap[e.id] = e));
TECHS.forEach(t => (techMap[t.id] = t));

// 预计算邻接（仅保留真实存在的节点为图边；其余作为"概念影响"标签）
TECHS.forEach(t => {
  t._up = (t.dependsOn || []).filter(id => techMap[id]);
  t._upConcept = (t.dependsOn || []).filter(id => !techMap[id]);
  t._downConcept = (t.enables || []).filter(id => !techMap[id]);
});
// 下游（催生）由「依赖关系」全局反向推导，使锚点技术的下游自动包含新增技术
const downMap = {};
TECHS.forEach(t => { (t._up || []).forEach(u => { (downMap[u] = downMap[u] || []).push(t.id); }); });
TECHS.forEach(t => { t._down = downMap[t.id] || []; t._deg = t._up.length + t._down.length; });

// 多跳后代 + 跳数距离（供「催生的后续技术」按远近二分使用）
// 返回 { id: dist }，dist=1 为直接下游，≥2 为间接衍生；结果懒缓存到 t._descCache
function computeDescendants(rootId) {
  const root = techMap[rootId];
  if (!root) return {};
  if (root._descCache) return root._descCache;
  const dist = {}; const q = [rootId]; dist[rootId] = 0;
  while (q.length) {
    const cur = q.shift();
    (techMap[cur]._down || []).forEach(d => {
      if (dist[d] === undefined) { dist[d] = dist[cur] + 1; q.push(d); }
    });
  }
  delete dist[rootId];
  root._descCache = dist;
  return dist;
}

// 跨视图共享的子状态（每页从 URL query 初始化）
const state = { view: "worldview", cat: "all", era: "all", search: "" };
const lineageState = { id: "smart_mower" };
// 关系逻辑视图模式：graph=现有依赖图 / relation=按关联类型着色的关系逻辑图
const treeRelMode = { mode: "graph" };
const lineageRelMode = { mode: "graph" };
// 关联类型的配色与说明（供图例与连线共用）
const REL_TYPES = [
  { key: "same",    color: "#9aa0a6", label: "同类深化（同领域层层迭代）" },
  { key: "basic",   color: "#7e57c2", label: "基础供给（科学基础向外喂养）" },
  { key: "lateral", color: "#fb8c00", label: "横向使能（材料/能源跨域支撑）" },
  { key: "other",   color: "#26a69a", label: "纵向落地（跨类长链落地）" }
];
// 根据上下游分类判定关联类型（返回 REL_TYPES 的 key）
function classifyRelation(srcCat, dstCat) {
  if (srcCat === dstCat) return "same";
  if (srcCat === "basic") return "basic";
  if ((srcCat === "material" || srcCat === "energy" || srcCat === "build") && dstCat !== "basic") return "lateral";
  return "other";
}
function relColor(key) { const r = REL_TYPES.find(x => x.key === key); return r ? r.color : "#9aa0a6"; }
const LINEAGE_MAXD = 6;
const timelineState = { start: -Infinity, end: Infinity, preset: "all" };
let TL_MIN = -2600000, TL_MAX = 2200;
const ERA_BOUNDS = {
  prehistoric: [-1e9, -3500], ancient: [-3500, -500], classical: [-500, 500], medieval: [500, 1500],
  earlymodern: [1500, 1750], industrial: [1750, 1900], electrical: [1900, 1950], info: [1950, 2000], intelligent: [2000, 2026], future: [2026, 2200]
};

// ---------- 工具 ----------
const $ = sel => document.querySelector(sel);
const $$ = sel => Array.from(document.querySelectorAll(sel));
const esc = s => String(s == null ? "" : s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const humanize = s => s.replace(/\(.*?\)/g, "").replace(/[_-]/g, " ").replace(/\s+/g, " ").trim();
const catColor = id => (catMap[id] ? catMap[id].color : "#888");
const catName = id => (catMap[id] ? catMap[id].name : id);
const eraName = id => (eraMap[id] ? eraMap[id].name : id);

function matches(t, term) {
  if (!term) return true;
  const hay = [t.name, t.en, t.people, t.place, t.summary, (t.applications || []).join(" "), (t.dependsOn || []).join(" "), (t.enables || []).join(" ")].join(" ").toLowerCase();
  return hay.includes(term);
}

// ---------- 跨页跳转 ----------
// 真多页：导航是普通 <a href="xxx.html">；跨视图带参跳转走 location.href
function goto(view, params) {
  let url = view + ".html";
  if (params) {
    const p = new URLSearchParams();
    Object.keys(params).forEach(k => { if (params[k] !== undefined && params[k] !== null && params[k] !== "") p.set(k, params[k]); });
    const qs = p.toString();
    if (qs) url += "?" + qs;
  }
  location.href = url;
}

// ============================================================
//  详情弹窗（本页浮层，不写历史；刷新页面会丢失弹窗，符合多页预期）
// ============================================================
// 技术详情完整 HTML（弹窗与整页详情共用，单数据源）
function buildDetailHTML(t) {
  let html = `
    <div class="modal-head">
      <button class="m-close" data-close>×</button>
      <button class="m-lineage" data-lineage>⇡ 来龙去脉推演</button>
      <button class="m-expand" data-expand>⤢ 整页详情</button>
      <h2>${esc(t.name)} <span class="m-en">${esc(t.en || "")}</span></h2>
      <div class="m-badges">
        <span class="badge" style="background:${catColor(t.category)}22;color:${catColor(t.category)};font-size:12px;padding:3px 10px;border-radius:12px">${esc(catName(t.category))}</span>
        <span class="badge era" style="font-size:12px;padding:3px 10px;border-radius:12px;background:#fff3e0;color:#b15a00">${esc(eraName(t.era))}</span>
        ${t.tier ? `<span class="badge" style="font-size:12px;padding:3px 10px;border-radius:12px;color:#fff;background:${t.tier === "L2" ? "#66bb6a" : t.tier === "L3" ? "#42a5f5" : t.tier === "L4" ? "#ffa726" : t.tier === "L5" ? "#ef5350" : "#26a69a"}">${esc(t.tier)} · ${t.tier === "L1" ? "已实现" : t.tier === "L2" ? "目前技术可实现" : t.tier === "L3" ? "未来可能实现" : t.tier === "L4" ? "未来较难实现" : "仅在该世界观"}</span>` : ""}
        <span class="badge" style="font-size:12px;padding:3px 10px;border-radius:12px;background:var(--accent-bg);color:var(--ink-soft)">${esc(t.date)}</span>
        ${t.place ? `<span class="badge" style="font-size:12px;padding:3px 10px;border-radius:12px;background:var(--accent-bg);color:var(--ink-soft)">${esc(t.place)}</span>` : ""}
      </div>
    </div>
    <div class="modal-body">
      <div class="m-row"><div class="m-label">关键人物 / 机构</div><div class="m-people">${esc(t.people || "—")}</div></div>
      <div class="m-row"><div class="m-label">技术概述</div><div class="m-summary">${esc(t.summary)}</div></div>`;

  if (t.applications && t.applications.length) {
    html += `<div class="m-row"><div class="m-label">后续应用</div><div class="m-tags">` +
      t.applications.map(a => `<span class="m-tag">${esc(a)}</span>`).join("") + `</div></div>`;
  }

  html += `<div class="m-row"><div class="m-label">↑ 前置技术（本技术建立于其上）</div><div class="m-tags">`;
  if (t._up.length) t._up.forEach(u => html += `<span class="m-tag linkable" data-id="${u}">${esc(techMap[u].name)}</span>`);
  else html += `<span class="m-tag">（文明起点，无前置技术）</span>`;
  if (t._upConcept.length) t._upConcept.forEach(c => html += `<span class="m-tag concept">${esc(humanize(c))}</span>`);
  html += `</div></div>`;

  const desc = computeDescendants(t.id);
  const directDown = [], indirectDown = [];
  Object.keys(desc).forEach(d => { (desc[d] === 1 ? directDown : indirectDown).push(d); });
  directDown.sort((a, b) => (techMap[a].year || 0) - (techMap[b].year || 0));
  indirectDown.sort((a, b) => (desc[a] - desc[b]) || ((techMap[a].year || 0) - (techMap[b].year || 0)));

  html += `<div class="m-row"><div class="m-label">↓ 催生的后续技术（本技术使之可能）</div><div class="m-downwrap">`;
  html += `<div class="m-downgrp"><div class="m-downsub">近 · 直接催生（${directDown.length}）</div><div class="m-tags">`;
  if (directDown.length) directDown.forEach(d => html += `<span class="m-tag linkable" data-id="${d}">${esc(techMap[d].name)}</span>`);
  else html += `<span class="m-tag">（无直接下游技术）</span>`;
  html += `</div></div>`;
  html += `<div class="m-downgrp collapsed"><div class="m-downsub" data-toggle-down>远 · 间接衍生（${indirectDown.length}）<span class="m-toggle">展开 ▾</span></div><div class="m-tags-inner"><div class="m-tags">`;
  if (indirectDown.length) indirectDown.forEach(d => html += `<span class="m-tag linkable" data-id="${d}">${esc(techMap[d].name)}<span class="m-hop">${desc[d]} 跳</span></span>`);
  else html += `<span class="m-tag">（无更远衍生技术）</span>`;
  html += `</div></div></div>`;
  html += `</div></div>`;

  const relExp = buildRelationExplanation(t);
  if (relExp) {
    html += `<div class="m-row"><div class="m-label">🔗 关系解说</div><div class="m-relexp">${relExp}</div></div>`;
  }

  if (t.views && t.views.length) {
    html += `<div class="m-row"><div class="m-label">不同时期人们的期待与看法</div><div class="views-timeline">`;
    t.views.forEach(v => html += `<div class="view-item"><div class="v-period">${esc(v.period)}</div><div class="v-text">${esc(v.text)}</div></div>`);
    html += `</div></div>`;
  }

  if (t.significance) {
    html += `<div class="m-row"><div class="m-label">历史意义</div><div class="m-summary m-significance">${esc(t.significance)}</div></div>`;
  }

  html += `</div>`;
  return html;
}

function renderModalBody(id, fromTree) {
  const t = techMap[id]; if (!t) return;
  const card = $("#modal-card");
  card.style.setProperty("--cat-color", catColor(t.category));
  card.innerHTML = buildDetailHTML(t);
  $$("#modal-card [data-close]").forEach(b => b.addEventListener("click", closeModal));
  $$("#modal-card .m-tag.linkable").forEach(el => el.addEventListener("click", () => openTech(el.dataset.id, fromTree)));
  $$("#modal-card [data-lineage]").forEach(b => b.addEventListener("click", () => { closeModal(); goto("lineage", { id: id }); }));
  $$("#modal-card [data-expand]").forEach(b => b.addEventListener("click", () => { closeModal(); goto("detail", { id: id }); }));
  $$("#modal-card [data-toggle-down]").forEach(b => b.addEventListener("click", () => {
    const grp = b.closest(".m-downgrp");
    if (!grp) return;
    const collapsed = grp.classList.toggle("collapsed");
    const tog = b.querySelector(".m-toggle");
    if (tog) tog.textContent = collapsed ? "展开 ▾" : "收起 ▴";
  }));
  $("#modal").classList.remove("hidden");
  if (fromTree && typeof highlight === "function") highlight(id);
}
// 打开详情弹窗（本页浮层；MPA 下不写历史）
function openTech(id, fromTree) {
  const t = techMap[id]; if (!t) return;
  renderModalBody(id, fromTree);
}
function closeModal() {
  $("#modal").classList.add("hidden");
}

// ============================================================
//  关系解说（动态生成：解释前后技术为何相关）
// ============================================================
//  关系解说（动态生成：解释前后技术为何相关）
// ============================================================
function buildRelationExplanation(t) {
  const up = (t._up || []).map(id => techMap[id]).filter(Boolean);
  const down = (t._down || []).map(id => techMap[id]).filter(Boolean);
  // 孤立节点（无任何上下游）：给出说明性解说，保证全量技术均覆盖
  if (!up.length && !down.length) {
    return '<div class="relexp-section"><div class="relexp-subtitle">◆ 关系状态</div><p>本技术在当前数据库中为<b>孤立节点</b>——尚未标注任何前置技术与催生的后续技术，暂无法推导其因果链路。可作为后续补全依赖关系的候选锚点。</p></div>';
  }

  // 根据当前技术的分类和应用，推断其"核心能力"的表述
  const selfApps = t.applications || [];
  const selfCat = t.category || "";
  const coreAbility = (() => {
    if (selfCat === "material") return "材料制备与热处理能力";
    if (selfCat === "energy") return "能源转换与动力输出能力";
    if (selfCat === "manufact") return "精密制造与工艺能力";
    if (selfCat === "transport") return "运载与机动能力";
    if (selfCat === "info") return "信息感知与处理能力";
    if (selfCat === "life") return "生物与医学干预能力";
    if (selfCat === "build") return "建造与空间构建能力";
    if (selfCat === "basic") return "基础理论与建模能力";
    if (selfCat === "military") return "防护与对抗能力";
    if (selfApps.includes("工具制造")) return "工具与器件制造能力";
    if (selfApps.includes("电子器件")) return "电子与材料基础";
    if (selfApps.includes("人员位移")) return "运载与导航能力";
    if (selfApps.includes("房屋营建")) return "建筑结构与材料能力";
    return "核心技术能力";
  })();

  // 前置技术->当前技术：根据前置的分类和名称给出具体贡献
  function upReason(u) {
    // 名称优先匹配（跨分类，避免感知类被误归入 transport 兜底）
    if ("雷达|激光雷达|传感|感知|摄像头|视觉".split("|").some(k => u.name.indexOf(k) >= 0)) return "提供了环境感知与空间建模能力";
    if ("GNSS|定位|导航|卫星".split("|").some(k => u.name.indexOf(k) >= 0)) return "提供了导航与定位能力";
    if ("AI|人工智|学习|算法|控制".split("|").some(k => u.name.indexOf(k) >= 0)) return "提供了决策与控制智能";
    if (u.category === "material") {
      if (u.name.indexOf("陶器") >= 0) return "提供了高温容器与窑炉技术";
      if (u.name.indexOf("砖") >= 0 || u.name.indexOf("砌筑") >= 0) return "提供了炉体砌筑与耐火材料";
      if (u.name.indexOf("铁") >= 0 || u.name.indexOf("钢") >= 0 || u.name.indexOf("铜") >= 0) return "提供了金属材料基础";
      return "提供了关键材料或材料处理能力";
    }
    if (u.category === "energy") {
      if (u.name.indexOf("火") >= 0) return "提供了热源与高温环境";
      return "提供了能源或动力来源";
    }
    if (u.category === "manufact") {
      if ("钻|凿|锯|斧".split("|").some(k => u.name.indexOf(k) >= 0)) return "提供了加工工具基础";
      if (u.name.indexOf("磨料") >= 0) return "提供了表面处理与精加工能力";
      return "提供了制造工艺基础";
    }
    if (u.category === "transport") {
      if ("导航|定位|GNSS".split("|").some(k => u.name.indexOf(k) >= 0)) return "提供了导航与定位能力";
      if ("驾驶|汽车".split("|").some(k => u.name.indexOf(k) >= 0)) return "提供了自主运载平台";
      return "提供了运载或物流条件";
    }
    if (u.category === "info") {
      if ("雷达|激光雷达|传感".split("|").some(k => u.name.indexOf(k) >= 0)) return "提供了环境感知能力";
      if ("AI|智能|学习|人工智".split("|").some(k => u.name.indexOf(k) >= 0)) return "提供了决策与控制智能";
      if ("通信|网络|无线".split("|").some(k => u.name.indexOf(k) >= 0)) return "提供了数据通信能力";
      if ("电池|电机|无刷".split("|").some(k => u.name.indexOf(k) >= 0)) return "提供了动力与能源管理";
      return "提供了信息处理与控制手段";
    }
    if (u.category === "life") {
      if (u.name.indexOf("机器人") >= 0) return "提供了机电系统与自主运行经验";
      return "提供了生物或医学基础";
    }
    if (u.category === "build") {
      if ("砖|砌筑".split("|").some(k => u.name.indexOf(k) >= 0)) return "提供了建筑结构与耐火材料";
      return "提供了建造基础";
    }
    if (u.category === "basic") {
      if (u.name.indexOf("数学") >= 0) return "提供了数学计算基础";
      if (u.name.indexOf("物理") >= 0) return "揭示了物理规律";
      if (u.name.indexOf("化学") >= 0) return "提供了化学反应原理";
      return "提供了理论基础";
    }
    return "提供了必要的前置条件";
  }

  // 当前技术->下游：根据下游分类和名称推断继承关系
  function downReason(d) {
    if (d.category === "material") {
      if ("金|银|铂".split("|").some(k => d.name.indexOf(k) >= 0)) return "利用其高温冶炼能力提取贵金属";
      if ("铁|钢".split("|").some(k => d.name.indexOf(k) >= 0)) return "利用其冶炼原理发展出更强金属材料";
      return "利用其材料制备能力发展出新材料";
    }
    if (d.category === "manufact") {
      if ("锯|钻|刀|车床".split("|").some(k => d.name.indexOf(k) >= 0)) return "利用其材料制作更耐用的切削工具";
      if (d.name.indexOf("磨料") >= 0) return "利用其材料作为研磨介质";
      return "利用其加工能力推进制造工艺";
    }
    if (d.category === "transport") {
      if (d.name.indexOf("雪橇") >= 0) return "利用其材料制作滑行底板";
      return "利用其结构件建造运载工具";
    }
    if (d.category === "build") {
      if (d.name.indexOf("烧砖") >= 0 || d.name.indexOf("砖") >= 0) return "利用其高温烧制技术生产建筑材料";
      if ("木构|榫卯".split("|").some(k => d.name.indexOf(k) >= 0)) return "利用其金属工具进行木构件加工";
      return "利用其材料或工艺用于建筑结构";
    }
    if (d.category === "life") {
      if ("疫苗|医疗".split("|").some(k => d.name.indexOf(k) >= 0)) return "将其自主系统改造用于医疗场景";
      return "利用其技术能力用于生命健康领域";
    }
    if (d.category === "info") return "将其作为信息系统的物理基础";
    if (d.category === "energy") {
      if ((t.name || "").indexOf("火") >= 0 && ("火塘|灶|煮|烹".split("|").some(k => d.name.indexOf(k) >= 0))) return "将其高温热源转化为可控的生活与煮食能源";
      return "借助其能力发展新能源形式";
    }
    if (d.category === "basic") return "将其经验抽象为新的理论方法";
    return "\u5728\u5176" + coreAbility + "\u57fa\u7840\u4e0a\u8fdb\u4e00\u6b65\u53d1\u5c55";
  }

  const parts = [];

  // --- 前置技术为什么是前置 ---
  if (up.length) {
    const whyUp = [];
    const keyUps = up.slice(0, 4);
    keyUps.forEach(u => {
      const reason = upReason(u);
      const gap = (t.year || 0) - (u.year || 0);
      const gapStr = gap > 0 ? "（早约 " + formatGap(gap) + "）" : "";
      whyUp.push("<b>" + esc(u.name) + "</b>" + gapStr + "——" + reason);
    });
    if (up.length > 4) whyUp.push("等 " + up.length + " 项前置技术共同奠定了基础");

    parts.push('<div class="relexp-section"><div class="relexp-subtitle">▲ 为什么需要这些前置技术</div><p>' + whyUp.join("；") + "</p></div>");
  }

  // --- 后续技术为什么被催生（每个技术另起一行）---
  if (down.length) {
    const whyDown = [];
    const shownDown = down.slice(0, 6);
    shownDown.forEach(d => {
      const r = downReason(d);
      whyDown.push("<b>" + esc(d.name) + "</b>——" + r);
    });
    if (down.length > 6) whyDown.push("等 " + down.length + " 项后续技术均直接依赖本技术提供的" + coreAbility);

    parts.push('<div class="relexp-section"><div class="relexp-subtitle">▼ 它如何催生后续技术</div><p>' + whyDown.join("<br>") + "</p></div>");
  }

  // --- 能力落脚点 ---
  if (selfApps.length && down.length >= 2) {
    const appStr = selfApps.slice(0, 3).join("、");
    parts.push('<div class="relexp-section"><div class="relexp-subtitle">◆ 能力落脚点</div><p>本技术的' + coreAbility + '最终体现在 <b>' + esc(appStr) + '</b> 等领域，通过这些领域持续影响下游技术链。</p></div>');
  }

  return parts.join("\n");
}


function formatGap(years) {
  if (years >= 1000) return Math.round(years / 1000) + " 万年";
  if (years >= 500) return Math.round(years / 100) * 100 + " 年";
  return years + " 年";
}

// ============================================================
//  关系网分析（重要性 · 组合诞生推演）—— 计算与缓存
// ============================================================
const NET = { ready: false };
const IMP_W = { desc: 0.40, indeg: 0.18, pr: 0.27, bt: 0.15 };
// 分类能力词典（用于组合推演的措辞）
const CAP = {
  basic: "认知与建模能力", material: "新材料与微结构", energy: "动力与储能",
  manufact: "制造与成型", transport: "运载与机动", info: "感知-决策-通信",
  life: "生命与健康干预", build: "建造与空间", military: "防护与对抗"
};
// 组合能力模板（按分类对定制，覆盖最易融合的方向；其余走通用句式）
const COMBO = {
  "energy|info": "能自主调度、自带储能与感知的能源体（智能微电网 / 自供能无人系统）",
  "info|life": "具备感知-决策能力的生命干预系统（精准医疗机器人 / 数字孪生器官）",
  "info|transport": "以软件定义、可自主运行的运载平台（全自主飞行 / 地面载具）",
  "info|manufact": "能自我感知、闭环优化的智能制造体（自纠错产线 / 生成式制造）",
  "life|material": "由活体组织或生物材料构成的结构与器件（可生长建筑 / 生物混合材料）",
  "energy|material": "兼具高能量密度与全新结构形态的动力载体（固态电池 / 能源-结构一体化）",
  "energy|transport": "摆脱化石束缚、长续航的清洁运载平台（电动 / 氢能载具）",
  "basic|info": "把科学建模直接编译为可执行智能的系统（自动科学发现 / 可解释 AI 模型）",
  "basic|material": "由第一性原理逆向设计的新材料（计算材料发现）",
  "build|energy": "自身产能、可调温的建成环境（零碳建筑 / 能源景观）",
  "build|info": "实时感知与自适应的人居空间（数字孪生城市 / 智能建造）",
  "life|transport": "面向生命保障与医疗转运的机动平台（移动 ICU / 生物样本无人转运）",
  "manufact|material": "材料-成型一体、近净成型的制造范式（增材制造 / 一体压铸）",
  "military|info": "以算法主导的感知-决策-对抗体系（智能防御 / 自主协同作战）",
  "military|energy": "高能量密度支撑的新一代防护与投射（定向能 / 高功率机动平台）",
  "military|transport": "高速、隐身、自主的投送与对抗平台（无人作战载具）",
  "basic|energy": "受基础物理约束重新定义的能量利用方式（更高效能量转换）",
  "basic|transport": "由新科学原理驱动的运动与推进方式（新概念推进）",
  "build|material": "以新型材料重塑的建造体系（高性能结构 / 模块化建造）",
  "build|transport": "与交通网络深度融合的建成环境（车路协同 / 移动空间）",
  "life|build": "面向生命健康的人居与基础设施（健康建筑 / 适老空间）",
  "life|manufact": "从生命过程借鉴的制造范式（生物制造 / 自组装）",
  "material|transport": "以新结构材料支撑的轻量化运载（复合材料载具）",
  "basic|manufact": "由科学模型驱动的制造（数字孪生制造 / 仿真优先）",
  "basic|life": "在机制层面重新编程的生命系统（合成生物学 / 基因电路）",
  "energy|manufact": "以高能效、分布式能源支撑的制造（就近制造 / 绿色产线）",
  "info|military": "以信息优势主导的对抗体系（感知-决策一体）",
  "life|military": "面向单兵健康与防护的生命支持（可穿戴医疗 / 生物防护）",
  "manufact|military": "由先进制造支撑的装备体系（高性能武器 / 快速扩产）",
  "build|military": "兼具防护与生存能力的建成环境（韧性基础设施）",
  "material|military": "以新材料支撑的防护与毁伤（隐身 / 装甲 / 新概念材料）"
};
function comboPhrase(a, b) {
  const key = [a.category, b.category].sort().join("|");
  if (COMBO[key]) return COMBO[key];
  return `兼具「${CAP[a.category]}」与「${CAP[b.category]}」的融合系统`;
}

function computeNet() {
  if (NET.ready) return;
  const N = TECHS.length;
  const descSets = {}, ancSets = {};
  // 传递闭包：后代（依赖网正向）、祖先（依赖网反向）
  TECHS.forEach(t => {
    const seen = new Set(); const q = (t._down || []).slice(); q.forEach(d => seen.add(d));
    while (q.length) { const c = q.shift(); (techMap[c]._down || []).forEach(d => { if (!seen.has(d)) { seen.add(d); q.push(d); } }); }
    descSets[t.id] = seen;
  });
  TECHS.forEach(t => {
    const seen = new Set(); const q = (t._up || []).slice(); q.forEach(u => seen.add(u));
    while (q.length) { const c = q.shift(); (techMap[c]._up || []).forEach(u => { if (!seen.has(u)) { seen.add(u); q.push(u); } }); }
    ancSets[t.id] = seen;
  });

  // PageRank（影响力图：节点指向其后代，故被越多重要下游依赖者越重要）
  const pr = {}; const damp = 0.85;
  TECHS.forEach(t => pr[t.id] = 1 / N);
  for (let it = 0; it < 80; it++) {
    const np = {}; let sink = 0;
    TECHS.forEach(t => np[t.id] = 0);
    TECHS.forEach(t => { const od = (t._down || []).length; if (od === 0) sink += pr[t.id]; else (t._down || []).forEach(ch => np[ch] += pr[t.id] / od); });
    const base = (1 - damp) / N + damp * sink / N;
    TECHS.forEach(t => np[t.id] = base + damp * np[t.id]);
    let s = 0; TECHS.forEach(t => s += np[t.id]);
    TECHS.forEach(t => pr[t.id] = np[t.id] / s);
  }

  // 中介中心性（Brandes，无向）
  const nbr = {};
  TECHS.forEach(t => nbr[t.id] = new Set([...(t._down || []), ...(t._up || [])]));
  const bt = {}; TECHS.forEach(t => bt[t.id] = 0);
  TECHS.forEach(s => {
    const stack = [], pred = {}, sigma = {}, dist = {};
    TECHS.forEach(v => { sigma[v.id] = 0; dist[v.id] = -1; pred[v.id] = []; });
    sigma[s.id] = 1; dist[s.id] = 0; const Q = [s.id]; let qi = 0;
    while (qi < Q.length) {
      const v = Q[qi++]; stack.push(v);
      nbr[v].forEach(w => {
        if (dist[w] < 0) { dist[w] = dist[v] + 1; Q.push(w); }
        if (dist[w] === dist[v] + 1) { sigma[w] += sigma[v]; pred[w].push(v); }
      });
    }
    const delta = {}; TECHS.forEach(v => delta[v.id] = 0);
    while (stack.length) {
      const w = stack.pop();
      pred[w].forEach(v => { delta[v] += sigma[v] / sigma[w] * (1 + delta[w]); });
      if (w !== s.id) bt[w] += delta[w];
    }
  });
  const norm = 1 / ((N - 1) * (N - 2));
  TECHS.forEach(t => bt[t.id] *= norm);

  // 最长技术链（DAG 最长路径，按祖先深度 DP）
  const depth = {};
  TECHS.slice().sort((a, b) => (ancSets[b.id].size) - (ancSets[a.id].size)).forEach(t => {
    let m = 0; (t._down || []).forEach(d => { if (depth[d] != null) m = Math.max(m, depth[d]); });
    depth[t.id] = m + 1;
  });
  let longest = 0; TECHS.forEach(t => longest = Math.max(longest, depth[t.id] || 1));

  // 综合重要性指数（各指标按最大值归一后加权）
  const vDesc = [], vInd = [], vPr = [], vBt = [];
  TECHS.forEach(t => { vDesc.push(descSets[t.id].size); vInd.push((t._down || []).length); vPr.push(pr[t.id]); vBt.push(bt[t.id]); });
  const mx = { desc: Math.max(...vDesc), indeg: Math.max(...vInd), pr: Math.max(...vPr), bt: Math.max(...vBt) };
  TECHS.forEach(t => {
    const nd = mx.desc ? descSets[t.id].size / mx.desc : 0;
    const ni = mx.indeg ? (t._down || []).length / mx.indeg : 0;
    const np = mx.pr ? pr[t.id] / mx.pr : 0;
    const nb = mx.bt ? bt[t.id] / mx.bt : 0;
    t._net = {
      desc: descSets[t.id].size, anc: ancSets[t.id].size, indeg: (t._down || []).length,
      outdeg: (t._up || []).length, pr: pr[t.id], bt: bt[t.id], depth: depth[t.id] || 1,
      comp: IMP_W.desc * nd + IMP_W.indeg * ni + IMP_W.pr * np + IMP_W.bt * nb
    };
  });

  // 网络结构概览
  let edges = 0, roots = 0, leaves = 0, degSum = 0;
  TECHS.forEach(t => { edges += (t._up || []).length; degSum += (t._up || []).length + (t._down || []).length; if (!t._up || !t._up.length) roots++; if (!t._down || !t._down.length) leaves++; });
  const density = edges / (N * (N - 1));

  // 组合潜能矩阵（分类对）：统计有多少技术其「直接上游」同时覆盖两分类
  const catSyn = {}; CATEGORIES.forEach(c => CATEGORIES.forEach(c2 => catSyn[c.id + "|" + c2.id] = 0));
  const catFreq = {}; CATEGORIES.forEach(c => catFreq[c.id] = 0);
  TECHS.forEach(t => {
    const cs = new Set((t._up || []).map(u => techMap[u] && techMap[u].category).filter(Boolean));
    const arr = [...cs];
    for (let i = 0; i < arr.length; i++) for (let j = 0; j < arr.length; j++) catSyn[arr[i] + "|" + arr[j]] += 1;
    arr.forEach(c => catFreq[c]++);
  });
  const Mup = TECHS.filter(t => (t._up || []).length > 0).length;
  // 分类对「共生指数」= 实际共现 / 独立期望，去掉「某分类 ubiquitous」的虚高
  const catLift = {}; CATEGORIES.forEach(c => CATEGORIES.forEach(c2 => catLift[c.id + "|" + c2.id] = 0));
  CATEGORIES.forEach(c => CATEGORIES.forEach(c2 => {
    const fc = catFreq[c.id] || 1, f2 = catFreq[c2.id] || 1;
    catLift[c.id + "|" + c2.id] = catSyn[c.id + "|" + c2.id] / (fc * f2 / Math.max(1, Mup));
  }));
  // 分类对「近期共现」：信息 / 智能时代、直接上游同时覆盖两分类的技术数
  const catRec = {}; CATEGORIES.forEach(c => CATEGORIES.forEach(c2 => catRec[c.id + "|" + c2.id] = 0));
  TECHS.forEach(t => {
    if (t.era !== "info" && t.era !== "intelligent") return;
    const cs = new Set((t._up || []).map(u => techMap[u] && techMap[u].category).filter(Boolean));
    const arr = [...cs];
    for (let i = 0; i < arr.length; i++) for (let j = 0; j < arr.length; j++) catRec[arr[i] + "|" + arr[j]] += 1;
  });

  // 组合对（直接共同上游共现）+ 共生指数 lift
  // lift = 实际共现 / (各自作为前置的概率之积)，突出「专门一起出现」而非「都 ubiquitous」
  const f = {}; TECHS.forEach(t => (t._up || []).forEach(u => f[u] = (f[u] || 0) + 1));
  const pairCo = {};
  TECHS.forEach(D => {
    const ups = (D._up || []).map(id => techMap[id]).filter(Boolean);
    for (let i = 0; i < ups.length; i++) for (let j = i + 1; j < ups.length; j++) {
      const a = ups[i], b = ups[j];
      if (a.category === b.category) continue;
      const key = a.id < b.id ? a.id + "|" + b.id : b.id + "|" + a.id;
      if (!pairCo[key]) pairCo[key] = { a, b, count: 0, recent: 0 };
      pairCo[key].count++;
      if (D.era === "info" || D.era === "intelligent") pairCo[key].recent++;
    }
  });
  const pairs = Object.values(pairCo).map(p => {
    const fa = f[p.a.id] || 1, fb = f[p.b.id] || 1;
    const lift = p.count / (fa * fb / Math.max(1, Mup));
    return Object.assign({}, p, { lift, fa, fb });
  })
    // 排除超级普适父节点（用火/数学/语言等 ubiquitous 前置），它们与谁都共现、并非真正的融合伙伴
    .filter(p => p.count >= 10 && p.fa <= 90 && p.fb <= 90)
    .sort((x, y) => y.count - x.count);

  const topImp = TECHS.slice().sort((a, b) => b._net.comp - a._net.comp);

  // 实证：有多少技术属于「汇聚诞生」（直接上游来自 ≥2 个分类、且 ≥3 条）
  let convCount = 0; const convEx = [];
  TECHS.forEach(t => {
    const cs = new Set((t._up || []).map(u => techMap[u] && techMap[u].category).filter(Boolean));
    if ((t._up || []).length >= 3 && cs.size >= 2) { convCount++; convEx.push(t); }
  });
  convEx.sort((a, b) => (b._up.length) - (a._up.length));

  NET.ready = true;
  NET.descSets = descSets; NET.ancSets = ancSets; NET.pr = pr; NET.bt = bt;
  NET.mx = mx; NET.longest = longest; NET.density = density;
  NET.edges = edges; NET.roots = roots; NET.leaves = leaves; NET.avgDeg = degSum / N;
  NET.catSyn = catSyn; NET.catLift = catLift; NET.catRec = catRec; NET.pairs = pairs; NET.convCount = convCount; NET.convEx = convEx;
  NET.topImp = topImp;
}
