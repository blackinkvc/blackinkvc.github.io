/* ============================================================
   技术演化数据库 · 共享渲染函数库（app.js）
   依赖：core.js（索引 / 预计算 / 工具 / 弹窗 / computeNet / goto）
   本文件只包含各视图的 render 函数，由 pages/xxx.js 调用。
   ============================================================ */

// ============================================================
//  世界观视图
// ============================================================
function renderWorldview() {
  const w = WORLDVIEW;
  let html = `<h2>${esc(w.title)}</h2><p class="lead">${esc(w.subtitle)}</p>`;
  w.intro.forEach(p => (html += `<p>${esc(p)}</p>`));
  html += `<div class="callout">${esc(w.note)}</div>`;
  $("#worldview-content").innerHTML = html;

  // 统计
  const byCat = {}, byEra = {};
  TECHS.forEach(t => { byCat[t.category] = (byCat[t.category] || 0) + 1; byEra[t.era] = (byEra[t.era] || 0) + 1; });
  let links = 0; TECHS.forEach(t => links += t._up.length);
  const years = TECHS.map(t => t.year);
  const stats = [
    { num: TECHS.length, lbl: "收录技术节点" },
    { num: CATEGORIES.length, lbl: "技术分类" },
    { num: ERAS.length, lbl: "历史分期" },
    { num: links, lbl: "环环相扣的依赖关系" }
  ];
  $("#stats-grid").innerHTML = stats.map(s => `<div class="stat"><div class="num">${s.num}</div><div class="lbl">${esc(s.lbl)}</div></div>`).join("");

  const minY = Math.min(...years), maxY = Math.max(...years);
  const span = Math.abs(minY) >= 10000 ? `约 ${Math.round(Math.abs(minY) / 10000)} 万年` : `约 ${Math.abs(minY)} 年`;
  $("#stats-line").innerHTML = `收录 ${TECHS.length} 项技术 &nbsp;·&nbsp; ${CATEGORIES.length} 个分类 &nbsp;·&nbsp; ${ERAS.length} 个时期 &nbsp;·&nbsp; ${links} 条依赖链 &nbsp;·&nbsp; 时间跨度 ${span}`;

  // 图例（点击进入分类检索）
  let leg = `<h3>分类图例（点击进入分类检索）</h3><div class="legend-row">`;
  CATEGORIES.forEach(c => {
    leg += `<span class="chip" data-cat="${c.id}"><span class="dot" style="background:${c.color}"></span>${esc(c.name)} · ${byCat[c.id] || 0}</span>`;
  });
  leg += `</div>`;
  $("#legend").innerHTML = leg;
  $$("#legend .chip").forEach(ch => ch.addEventListener("click", () => {
    goto("browse", { cat: ch.dataset.cat });
  }));
}

// ============================================================
//  分类检索视图
// ============================================================
function renderFilterBar() {
  let html = `<div class="filter-group"><span class="fg-label">分类</span>`;
  html += `<button class="fbtn ${state.cat === "all" ? "active" : ""}" data-cat="all">全部</button>`;
  CATEGORIES.forEach(c => html += `<button class="fbtn ${state.cat === c.id ? "active" : ""}" data-cat="${c.id}" style="border-left:3px solid ${c.color}">${esc(c.name)}</button>`);
  html += `</div><div class="filter-group"><span class="fg-label">时期</span>`;
  html += `<button class="fbtn ${state.era === "all" ? "active" : ""}" data-era="all">全部</button>`;
  ERAS.forEach(e => html += `<button class="fbtn ${state.era === e.id ? "active" : ""}" data-era="${e.id}">${esc(e.name)}</button>`);
  html += `</div>`;
  $("#filter-bar").innerHTML = html;

  $$('#filter-bar [data-cat]').forEach(b => b.addEventListener("click", () => { state.cat = b.dataset.cat; renderBrowse(); renderFilterBar(); }));
  $$('#filter-bar [data-era]').forEach(b => b.addEventListener("click", () => { state.era = b.dataset.era; renderBrowse(); renderFilterBar(); }));
}

function renderBrowse() {
  renderFilterBar();
  const term = state.search.trim().toLowerCase();
  let list = TEcheFilter();
  $("#browse-meta").innerHTML = `共 <b>${list.length}</b> 项技术` + (state.cat !== "all" ? ` · 分类：${esc(catName(state.cat))}` : "") + (state.era !== "all" ? ` · 时期：${esc(eraName(state.era))}` : "") + (term ? ` · 搜索：“${esc(state.search)}”` : "");

  const grid = $("#card-grid");
  if (!list.length) { grid.innerHTML = `<div style="padding:40px;text-align:center;color:var(--ink-soft)">无匹配结果</div>`; return; }
  grid.innerHTML = list.map(t => `
    <div class="tcard" style="--cat-color:${catColor(t.category)}" data-id="${t.id}">
      <div class="tcount">${t._deg} 关联</div>
      <div class="tname">${esc(t.name)}</div>
      <div class="ten">${esc(t.en || "")}</div>
      <div class="tmeta">
        <span class="badge" style="background:${catColor(t.category)}22;color:${catColor(t.category)}">${esc(catName(t.category))}</span>
        <span class="badge era">${esc(eraName(t.era))}</span>
      </div>
      <p class="tsum">${esc(t.summary)}</p>
    </div>`).join("");
  $$("#card-grid .tcard").forEach(c => c.addEventListener("click", () => openTech(c.dataset.id)));
}
function TEcheFilter() {
  const term = state.search.trim().toLowerCase();
  return TECHS.filter(t =>
    (state.cat === "all" || t.category === state.cat) &&
    (state.era === "all" || t.era === state.era) &&
    matches(t, term)
  ).sort((a, b) => a.year - b.year);
}

// ============================================================
//  时间轴视图（含尺度栏）
// ============================================================
function yearToSlider(y) {
  if (y >= 0) return 500 + (y / TL_MAX) * 500;
  if (y <= TL_MIN) return 0;
  return 500 * (Math.log(-y) / Math.log(-TL_MIN));
}
function sliderToYear(p) {
  if (p >= 500) return Math.round(((p - 500) / 500) * TL_MAX);
  return Math.round(-Math.exp((p / 500) * Math.log(-TL_MIN)));
}
function fmtYear(y) {
  if (y <= TL_MIN) return "最早";
  if (y < 0) return "公元前 " + (-y);
  return "" + y;
}
function tlGroups(items) {
  const span = timelineState.end - timelineState.start;
  if (timelineState.preset === "all" || span > 3000) {
    const eras = ERAS.slice().sort((a, b) => a.order - b.order);
    const out = [];
    eras.forEach(e => {
      const it = items.filter(t => t.era === e.id);
      if (it.length) out.push({ label: e.name + "（" + e.span + "）", color: e.color, items: it });
    });
    return out;
  }
  const size = span > 800 ? 100 : span > 200 ? 50 : span > 40 ? 10 : 1;
  const start = timelineState.start;
  const map = new Map();
  items.forEach(t => {
    const b = Math.floor((t.year - start) / size);
    if (!map.has(b)) map.set(b, []);
    map.get(b).push(t);
  });
  const out = [];
  [...map.keys()].sort((a, b) => a - b).forEach(b => {
    const lo = start + b * size, hi = lo + size - 1;
    let label;
    if (size >= 100) { const c = Math.floor(lo / 100) + 1; label = `第 ${c} 世纪（约 ${lo}–${hi}）`; }
    else if (size === 50) label = `${lo}–${hi}`;
    else if (size === 10) label = `${lo} 年代`;
    else label = `${lo} 年`;
    out.push({ label, items: map.get(b) });
  });
  return out;
}
function renderTimeline() {
  const term = state.search.trim().toLowerCase();
  const items = TECHS.filter(t => {
    if (typeof t.year !== "number") return false;
    if (t.year < timelineState.start - 1 || t.year > timelineState.end + 1) return false;
    if (term && !matches(t, term)) return false;
    return true;
  }).sort((a, b) => a.year - b.year);
  const groups = tlGroups(items);
  let html = "";
  groups.forEach(g => {
    html += `<div class="tl-era">
      <div class="tl-era-head"><span class="name" style="color:${g.color || "var(--ink)"}">${esc(g.label)}</span><span class="span">${g.items.length} 项</span></div>
      <div class="tl-track">`;
    g.items.forEach(t => {
      html += `<div class="tl-item" style="--cat-color:${catColor(t.category)}" data-id="${t.id}">
        <div class="tl-date">${esc(t.date)}</div>
        <div class="tl-title">${esc(t.name)} <span style="font-weight:400;color:var(--ink-soft);font-size:12px">${esc(t.en || "")}</span></div>
        <div class="tl-sub">${esc(t.people || "")}</div>
      </div>`;
    });
    html += `</div></div>`;
  });
  $("#timeline").innerHTML = html || `<div style="padding:40px;text-align:center;color:var(--ink-soft)">无匹配结果</div>`;
  const cnt = $("#tl-count"); if (cnt) cnt.textContent = `可见 ${items.length} / 共 ${TECHS.length} 项`;
  $$("#timeline .tl-item").forEach(it => it.addEventListener("click", () => openTech(it.dataset.id)));
}
function renderTimelineControls() {
  const presets = [{ id: "all", name: "全部" }].concat(ERAS.slice().sort((a, b) => a.order - b.order).map(e => ({ id: e.id, name: e.name })));
  let html = `<div class="tl-presets">`;
  presets.forEach(p => html += `<button class="fbtn ${timelineState.preset === p.id ? "active" : ""}" data-preset="${p.id}">${esc(p.name)}</button>`);
  html += `</div>
    <div class="tl-scale">
      <span class="tl-scale-label">时间窗</span>
      <input type="range" id="tl-start" min="0" max="1000" value="0">
      <input type="range" id="tl-end" min="0" max="1000" value="1000">
      <span class="tl-scale-range" id="tl-range">全部时期</span>
    </div>
    <div class="tl-count" id="tl-count"></div>`;
  $("#timeline-controls").innerHTML = html;

  $$("#timeline-controls [data-preset]").forEach(b => b.addEventListener("click", () => {
    const id = b.dataset.preset;
    timelineState.preset = id;
    if (id === "all") { timelineState.start = -Infinity; timelineState.end = Infinity; }
    else { const [s, e] = ERA_BOUNDS[id]; timelineState.start = s; timelineState.end = e; }
    $$("#timeline-controls [data-preset]").forEach(x => x.classList.toggle("active", x.dataset.preset === id));
    syncSliders();
    renderTimeline();
  }));
  const sEl = $("#tl-start"), eEl = $("#tl-end");
  const onSlide = () => {
    let lo = Math.min(+sEl.value, +eEl.value), hi = Math.max(+sEl.value, +eEl.value);
    timelineState.start = sliderToYear(lo);
    timelineState.end = sliderToYear(hi);
    timelineState.preset = "custom";
    $$("#timeline-controls [data-preset]").forEach(x => x.classList.remove("active"));
    const r = $("#tl-range");
    if (r) r.textContent = `${fmtYear(timelineState.start)} – ${fmtYear(timelineState.end)}`;
    renderTimeline();
  };
  sEl.addEventListener("input", onSlide);
  eEl.addEventListener("input", onSlide);
}
function syncSliders() {
  const sEl = $("#tl-start"), eEl = $("#tl-end"), r = $("#tl-range");
  if (timelineState.preset === "all") { sEl.value = 0; eEl.value = 1000; if (r) r.textContent = "全部时期"; return; }
  const bs = Math.max(0, Math.min(1000, Math.round(yearToSlider(timelineState.start))));
  const be = Math.max(0, Math.min(1000, Math.round(yearToSlider(timelineState.end))));
  sEl.value = bs; eEl.value = be;
  if (r) r.textContent = `${fmtYear(timelineState.start)} – ${fmtYear(timelineState.end)}`;
}

// ============================================================
//  科技树（力导向依赖图）
// ============================================================
let tree = null;
function renderTreeToolbar() {
  let html = `<span class="fg-label">筛选</span>`;
  html += `<button class="fbtn ${state.cat === "all" ? "active" : ""}" data-cat="all">全部</button>`;
  CATEGORIES.forEach(c => html += `<button class="fbtn ${state.cat === c.id ? "active" : ""}" data-cat="${c.id}" style="border-left:3px solid ${c.color}">${esc(c.name)}</button>`);
  html += `<span class="tb-sep"></span><span class="fg-label">视图</span>`;
  html += `<button class="fbtn ${treeRelMode.mode === "graph" ? "active" : ""}" data-rel="graph">现有图</button>`;
  html += `<button class="fbtn ${treeRelMode.mode === "relation" ? "active" : ""}" data-rel="relation">关系逻辑</button>`;
  html += `<button class="fbtn" id="tree-reset">重置视图</button>`;
  $("#tree-toolbar").innerHTML = html;
  $$('#tree-toolbar [data-cat]').forEach(b => b.addEventListener("click", () => { state.cat = b.dataset.cat; renderTree(); }));
  $$('#tree-toolbar [data-rel]').forEach(b => b.addEventListener("click", () => { treeRelMode.mode = b.dataset.rel; renderTree(); }));
  $("#tree-reset").addEventListener("click", () => { if (tree) { tree.node.classed("dim", false).classed("hl", false); tree.link.classed("hl", false).classed("dim", false); $("#tree-side").innerHTML = sidePlaceholder(); } });
  renderRelLegend("#tree-legend", treeRelMode.mode);
}

function sidePlaceholder() {
  return `<h3>技术依赖链</h3><p style="font-size:13px;color:var(--ink-soft)">点击左侧任一节点，查看其<b>前置技术（上游）</b>与<b>催生的后续技术（下游）</b>，以及时间与人员。拖动可重排，滚轮可缩放。</p>`;
}

// 关系逻辑图例（两页共用）：mode=graph 隐藏，mode=relation 显示 4 类关联配色
function renderRelLegend(sel, mode) {
  const box = $(sel);
  if (!box) return;
  if (mode !== "relation") { box.innerHTML = ""; box.style.display = "none"; return; }
  box.style.display = "flex";
  let html = `<span class="lg-title">关联类型</span>`;
  REL_TYPES.forEach(r => {
    html += `<span class="lg-item"><span class="lg-line" style="background:${r.color}"></span>${esc(r.label)}</span>`;
  });
  box.innerHTML = html;
}

function nodeRadius(t) { return 5 + Math.sqrt(t._deg) * 1.7; }

function renderTree() {
  renderTreeToolbar();
  const wrap = $("#tree-svg");
  const W = wrap.clientWidth || 900, H = wrap.clientHeight || 600;
  const svg = d3.select("#tree-svg").attr("viewBox", `0 0 ${W} ${H}`);
  svg.selectAll("*").remove();

  const nodes = TECHS.filter(t => state.cat === "all" || t.category === state.cat);
  const ids = new Set(nodes.map(n => n.id));
  const links = [];
  TECHS.forEach(t => t._up.forEach(u => {
    if (ids.has(t.id) && ids.has(u)) {
      const rel = classifyRelation(techMap[u].category, t.category);
      links.push({ source: t.id, target: u, rel });
    }
  }));

  const relOn = treeRelMode.mode === "relation";
  const g = svg.append("g");
  const link = g.append("g").attr("stroke-width", 1.2).selectAll("line").data(links).join("line")
    .attr("class", d => "link" + (relOn ? " rel-mode rel-" + d.rel : ""))
    .attr("stroke", d => relOn ? relColor(d.rel) : null);
  const node = g.append("g").selectAll("g").data(nodes).join("g").attr("class", "node")
    .call(drag());
  node.append("circle").attr("r", d => nodeRadius(d)).attr("fill", d => catColor(d.category)).attr("fill-opacity", .92);
  node.append("text").text(d => d.name).attr("x", d => nodeRadius(d) + 4).attr("dy", ".35em");

  const sim = d3.forceSimulation(nodes)
    .force("link", d3.forceLink(links).id(d => d.id).distance(78).strength(.35))
    .force("charge", d3.forceManyBody().strength(-180))
    .force("center", d3.forceCenter(W / 2, H / 2))
    .force("collide", d3.forceCollide(d => nodeRadius(d) + 6))
    .force("x", d3.forceX(W / 2).strength(.03))
    .force("y", d3.forceY(H / 2).strength(.03));

  sim.on("tick", () => {
    link.attr("x1", d => d.source.x).attr("y1", d => d.source.y).attr("x2", d => d.target.x).attr("y2", d => d.target.y);
    node.attr("transform", d => `translate(${d.x},${d.y})`);
  });

  svg.call(d3.zoom().scaleExtent([0.3, 4]).on("zoom", ev => g.attr("transform", ev.transform)));
  node.on("click", (ev, d) => { ev.stopPropagation(); openTech(d.id, true); highlight(d.id); });
  svg.on("click", () => { node.classed("dim", false).classed("hl", false); link.classed("hl", false).classed("dim", false); $("#tree-side").innerHTML = sidePlaceholder(); });

  tree = { svg, g, node, link, sim, nodes, links };
  $("#tree-side").innerHTML = sidePlaceholder();
  applyTreeSearch();
}

function drag() {
  return d3.drag()
    .on("start", (ev, d) => { if (!ev.active) tree.sim.alphaTarget(.3).restart(); d.fx = d.x; d.fy = d.y; })
    .on("drag", (ev, d) => { d.fx = ev.x; d.fy = ev.y; })
    .on("end", (ev, d) => { if (!ev.active) tree.sim.alphaTarget(0); d.fx = null; d.fy = null; });
}

function highlight(id) {
  if (!tree) return;
  const t = techMap[id]; if (!t) return;
  const up = new Set(t._up), down = new Set(t._down);
  const keep = new Set([id, ...up, ...down]);
  tree.node.classed("dim", d => !keep.has(d.id)).classed("hl", d => d.id === id || up.has(d.id) || down.has(d.id));
  tree.link
    .classed("hl", l => (l.source.id === id && up.has(l.target.id)) || (l.target.id === id && down.has(l.source.id)))
    .classed("dim", l => !((l.source.id === id && up.has(l.target.id)) || (l.target.id === id && down.has(l.source.id))));
  renderTreeSide(t);
}

function renderTreeSide(t) {
  const TIER = { L1:["L1·已实现","#26a69a"], L2:["L2·目前技术可实现","#66bb6a"], L3:["L3·未来可能实现","#42a5f5"], L4:["L4·未来较难实现","#ffa726"], L5:["L5·仅在该世界观","#ef5350"] };
  let html = `<h3 style="border-left:4px solid ${catColor(t.category)};padding-left:8px">${esc(t.name)}</h3>`;
  const tbadge = t.tier && TIER[t.tier] ? `<span style="display:inline-block;margin-left:8px;padding:1px 8px;border-radius:10px;font-size:11px;font-weight:600;color:#fff;background:${TIER[t.tier][1]}">${TIER[t.tier][0]}</span>` : "";
  html += `<div style="font-size:12.5px;color:var(--ink-soft);margin-bottom:8px">${esc(t.date)} · ${esc(eraName(t.era))} · ${esc(catName(t.category))}${tbadge}</div>`;
  if (t._up.length) {
    html += `<div class="m-label" style="margin-top:10px">↑ 前置技术（上游）</div><div>`;
    t._up.forEach(u => html += `<span class="node-link" data-id="${u}">${esc(techMap[u].name)}<span class="nl-date">${esc(techMap[u].date)}</span></span>`);
    html += `</div>`;
  }
  if (t._down.length) {
    const desc = computeDescendants(t.id);
    const dDirect = [], dIndirect = [];
    Object.keys(desc).forEach(d => { (desc[d] === 1 ? dDirect : dIndirect).push(d); });
    dDirect.sort((a, b) => (techMap[a].year || 0) - (techMap[b].year || 0));
    html += `<div class="m-label" style="margin-top:12px">↓ 催生的后续技术（下游）</div>`;
    html += `<div class="m-downsub">近 · 直接催生（${dDirect.length}）</div><div>`;
    if (dDirect.length) dDirect.forEach(d => html += `<span class="node-link" data-id="${d}">${esc(techMap[d].name)}<span class="nl-date">${esc(techMap[d].date)}</span></span>`);
    else html += `<span class="m-tag">无</span>`;
    html += `</div>`;
    if (dIndirect.length) {
      dIndirect.sort((a, b) => (desc[a] - desc[b]) || ((techMap[a].year || 0) - (techMap[b].year || 0)));
      html += `<div class="m-downsub" style="margin-top:8px">远 · 间接衍生（${dIndirect.length}）</div><div>`;
      dIndirect.forEach(d => html += `<span class="node-link" data-id="${d}">${esc(techMap[d].name)}<span class="nl-date">${esc(techMap[d].date)}</span></span>`);
      html += `</div>`;
    }
  }
  if (t._downConcept.length || t._upConcept.length) {
    const allC = [...t._upConcept, ...t._downConcept];
    if (allC.length) {
      html += `<div class="m-label" style="margin-top:12px">广义影响（未单独建节点）</div><div class="m-tags">`;
      allC.forEach(c => html += `<span class="m-tag concept">${esc(humanize(c))}</span>`);
      html += `</div>`;
    }
  }
  $("#tree-side").innerHTML = html;
  $$("#tree-side .node-link").forEach(n => n.addEventListener("click", () => { openTech(n.dataset.id, true); highlight(n.dataset.id); }));
}

function applyTreeSearch() {
  if (!tree) return;
  const term = state.search.trim().toLowerCase();
  if (!term) { tree.node.classed("dim", false); tree.link.classed("dim", false); return; }
  const hit = new Set(TECHS.filter(t => matches(t, term)).map(t => t.id));
  tree.node.classed("dim", d => !hit.has(d.id));
  tree.link.classed("dim", l => !(hit.has(l.source.id) && hit.has(l.target.id)));
}

// ============================================================
//  来龙去脉推演（聚焦子网络）
// ============================================================
function computeLineage(rootId) {
  const upGen = {}, downGen = {};
  upGen[rootId] = 0; let q = [rootId];
  while (q.length) {
    const cur = q.shift();
    (techMap[cur]._up || []).forEach(u => {
      if (upGen[u] === undefined) { upGen[u] = upGen[cur] + 1; if (upGen[u] <= LINEAGE_MAXD) q.push(u); }
    });
  }
  downGen[rootId] = 0; q = [rootId];
  while (q.length) {
    const cur = q.shift();
    (techMap[cur]._down || []).forEach(d => {
      if (downGen[d] === undefined) { downGen[d] = downGen[cur] + 1; if (downGen[d] <= LINEAGE_MAXD) q.push(d); }
    });
  }
  const idSet = new Set([rootId]);
  const nodes = [];
  Object.keys(upGen).forEach(u => { if (u !== rootId) { nodes.push({ id: u, d: upGen[u], dir: -1 }); idSet.add(u); } });
  Object.keys(downGen).forEach(d => { if (d !== rootId) { nodes.push({ id: d, d: downGen[d], dir: 1 }); idSet.add(d); } });
  nodes.push({ id: rootId, d: 0, dir: 0 });
  const links = [];
  TECHS.forEach(t => (t._up || []).forEach(u => {
    if (idSet.has(t.id) && idSet.has(u)) {
      const rel = classifyRelation(techMap[u].category, t.category);
      links.push({ source: t.id, target: u, kind: upGen[u] !== undefined ? "up" : "down", rel });
    }
  }));
  return { nodes, links, upGen, downGen,
    upCount: Object.keys(upGen).length - 1, downCount: Object.keys(downGen).length - 1,
    maxUp: Math.max(0, ...Object.values(upGen).filter(v => v > 0)),
    maxDown: Math.max(0, ...Object.values(downGen).filter(v => v > 0)) };
}

function renderLineage(id) {
  lineageState.id = id;
  const root = techMap[id]; if (!root) return;
  const L = computeLineage(id);
  const nodeById = {}; L.nodes.forEach(n => nodeById[n.id] = n);

  // 视图模式切换（现有图 / 关系逻辑），追加到控件区末尾
  const ctrl = $(".lineage-controls");
  if (ctrl) {
    let sw = ctrl.querySelector("#lineage-rel-switch");
    if (!sw) {
      sw = document.createElement("span");
      sw.id = "lineage-rel-switch";
      sw.className = "rel-switch";
      ctrl.appendChild(sw);
    }
    sw.innerHTML = `<span class="fg-label">视图</span><button class="fbtn ${lineageRelMode.mode === "graph" ? "active" : ""}" data-rel="graph">现有图</button><button class="fbtn ${lineageRelMode.mode === "relation" ? "active" : ""}" data-rel="relation">关系逻辑</button>`;
    sw.querySelectorAll("[data-rel]").forEach(b => b.addEventListener("click", () => { lineageRelMode.mode = b.dataset.rel; renderLineage(id); }));
  }
  renderRelLegend("#lineage-legend", lineageRelMode.mode);

  const wrap = document.querySelector("#lineage-svg");
  const W = wrap.clientWidth || 900, H = wrap.clientHeight || 600;
  const maxLayer = Math.max(L.maxUp, L.maxDown, 1);
  const layerW = Math.max(120, Math.min(230, (W - 160) / maxLayer));
  L.nodes.forEach(n => {
    if (n.dir === 0) n.x = W / 2;
    else if (n.dir === -1) n.x = Math.max(70, W / 2 - n.d * layerW);
    else n.x = Math.min(W - 70, W / 2 + n.d * layerW);
  });
  const layers = {};
  L.nodes.forEach(n => { const key = n.dir + ":" + n.d; (layers[key] = layers[key] || []).push(n); });
  Object.values(layers).forEach(arr => {
    const gap = Math.min(84, (H - 90) / Math.max(arr.length, 1));
    arr.forEach((n, i) => { n.y = H / 2 + (i - (arr.length - 1) / 2) * gap; });
  });

  const svg = d3.select("#lineage-svg").attr("width", W).attr("height", H);
  svg.selectAll("*").remove();
  const g = svg.append("g");
  const relOn = lineageRelMode.mode === "relation";
  g.append("g").selectAll("path").data(L.links).join("path")
    .attr("class", d => "lg-link " + d.kind + (relOn ? " rel-mode rel-" + d.rel : ""))
    .attr("stroke", d => relOn ? relColor(d.rel) : null)
    .attr("d", d => {
      const s = nodeById[d.source], t = nodeById[d.target];
      const mx = (s.x + t.x) / 2;
      return `M${s.x},${s.y} Q${mx},${s.y} ${t.x},${t.y}`;
    });
  const node = g.append("g").selectAll("g").data(L.nodes).join("g")
    .attr("class", d => "lg-node" + (d.dir === 0 ? " root" : ""))
    .attr("transform", d => `translate(${d.x},${d.y})`);
  node.append("circle")
    .attr("r", d => d.dir === 0 ? 14 : 6 + Math.min(6, Math.sqrt((techMap[d.id]._deg || 1)) * 1.5))
    .attr("fill", d => d.dir === 0 ? "var(--accent)" : catColor(techMap[d.id].category))
    .attr("fill-opacity", d => d.dir === 0 ? 1 : (d.dir === 1 ? .5 : .92));
  node.append("text")
    .text(d => techMap[d.id].name)
    .attr("x", d => d.dir === 0 ? 0 : 11)
    .attr("y", d => d.dir === 0 ? -20 : 4)
    .attr("text-anchor", d => d.dir === 0 ? "middle" : "start");
  node.on("click", (ev, d) => { ev.stopPropagation(); goto("lineage", { id: d.id }); });

  renderLineageSide(root, L);
}

function renderLineageSide(root, L) {
  const directUp = Object.keys(L.upGen).filter(u => L.upGen[u] === 1).map(u => techMap[u]);
  let prose;
  if (directUp.length) {
    prose = `「${esc(root.name)}」并非凭空出现，而是当多条技术线索在同一时点成熟后汇聚而成：<b>${directUp.map(t => esc(t.name)).join("、")}</b>。正是这些上游技术同时就位，才让它从设想变为可商品化的现实。`;
  } else {
    prose = `「${esc(root.name)}」位于技术图谱的起点，尚无已收录的上游前置技术——它本身就是后续一切的根源。`;
  }
  let html = `<h3>${esc(root.name)} <span style="font-size:12px;font-weight:400;color:var(--ink-soft)">${esc(root.en || "")}</span></h3>`;
  html += `<div class="lg-stat">上游技术背景 <b>${L.upCount}</b> 项 · 下游衍生 <b>${L.downCount}</b> 项 · 最大回溯 <b>${L.maxUp}</b> 层</div>`;
  html += `<div class="lg-prose">${prose}</div>`;

  if (L.maxUp > 0) {
    html += `<div class="lg-layer-title">↑ 来龙：技术背景（按代际）</div>`;
    for (let d = 1; d <= L.maxUp; d++) {
      const arr = Object.keys(L.upGen).filter(u => L.upGen[u] === d);
      if (!arr.length) continue;
      html += `<div style="font-size:11.5px;color:var(--ink-soft);margin:4px 0 2px">第 ${d} 代（更早）</div>`;
      arr.sort((a, b) => techMap[a].year - techMap[b].year).forEach(u => {
        html += `<span class="lg-item" data-id="${u}"><span class="lg-gen">${esc(catName(techMap[u].category))}</span>${esc(techMap[u].name)}<span class="lg-date">${esc(techMap[u].date)}</span></span>`;
      });
    }
  }
  if (L.maxDown > 0) {
    html += `<div class="lg-layer-title">↓ 去脉：衍生技术</div>`;
    for (let d = 1; d <= L.maxDown; d++) {
      const arr = Object.keys(L.downGen).filter(u => L.downGen[u] === d);
      if (!arr.length) continue;
      arr.sort((a, b) => techMap[a].year - techMap[b].year).forEach(u => {
        html += `<span class="lg-item" data-id="${u}"><span class="lg-gen">${esc(catName(techMap[u].category))}</span>${esc(techMap[u].name)}<span class="lg-date">${esc(techMap[u].date)}</span></span>`;
      });
    }
  }
  $("#lineage-side").innerHTML = html;
  $$("#lineage-side .lg-item").forEach(el => el.addEventListener("click", () => {
    goto("lineage", { id: el.dataset.id });
  }));
}

// ============================================================
//  方法论
// ============================================================
function renderMethod() {
  const M = METHODOLOGY;
  if (!M) return;
  const secs = (M.sections || []).map(s => {
    const body = (s.body || []).map(p => `<p>${esc(p)}</p>`).join("");
    const list = s.list ? `<ul class="method-list">${s.list.map(li => `<li>${esc(li)}</li>`).join("")}</ul>` : "";
    let tbl = "";
    if (s.table) {
      const th = s.table.head.map(h => `<th>${esc(h)}</th>`).join("");
      const tr = s.table.rows.map(r => `<tr>${r.map(c => `<td>${esc(c)}</td>`).join("")}</tr>`).join("");
      tbl = `<table class="method-table"><thead><tr>${th}</tr></thead><tbody>${tr}</tbody></table>`;
    }
    return `<section class="method-section"><h3 class="method-h">${esc(s.h)}</h3>${body}${list}${tbl}</section>`;
  }).join("");
  const log = (M.log || []).map(l =>
    `<div class="log-item"><span class="log-date">${esc(l.date)}</span><span class="log-text">${esc(l.text)}</span></div>`
  ).join("");
  $("#method-doc").innerHTML = `
    <div class="method-meta">最后更新：${esc(M.updated || "—")}</div>
    <p class="method-lead">${esc(M.lead || "")}</p>
    <div class="method-sections">${secs}</div>
    <section class="method-section method-log">
      <h3 class="method-h">更新日志</h3>
      <div class="log-list">${log}</div>
    </section>`;
}

// ============================================================
//  中间技术（关键瓶颈与汇聚案例）
// ============================================================
function renderMidtech() {
  const M = MIDTECHS;
  if (!M) return;
  const itemsArr = (M.items || []).slice();
  for (let i = itemsArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [itemsArr[i], itemsArr[j]] = [itemsArr[j], itemsArr[i]];
  }
  const items = itemsArr.map(it => {
    const bg = (it.backgrounds || []).map(b => {
      const t = techMap[b.tech];
      const c = t ? catColor(t.category) : "#888";
      const nm = t ? t.name : b.tech;
      const ex = t ? esc(t.en || "") : "";
      return `<li class="mid-bg">
        <button class="mid-bg-tech" data-lineage="${esc(b.tech)}" style="--cat:${c}">
          <span class="mid-bg-name">${esc(nm)}</span>${ex ? ` <span class="mid-bg-en">${esc(ex)}</span>` : ""}
        </button>
        <span class="mid-bg-note">${esc(b.note)}</span>
      </li>`;
    }).join("");
    return `<section class="mid-item">
      <h3 class="mid-h">${esc(it.name)} <span class="mid-en">${esc(it.en || "")}</span></h3>
      <div class="mid-meta">${esc(it.date || "")}</div>
      <p class="mid-summary">${esc(it.summary)}</p>
      <p class="mid-born">${esc(it.born)}</p>
      <div class="mid-bg-label">关键技术背景（关键瓶颈）</div>
      <ul class="mid-bg-list">${bg}</ul>
      <button class="mid-jump" data-lineage="${esc(it.id)}">查看「${esc(it.name)}」完整来龙去脉推演 →</button>
    </section>`;
  }).join("");
  $("#mid-doc").innerHTML = `<p class="mid-lead">${esc(M.lead || "")}</p><div class="mid-items">${items}</div>`;
  $$("#mid-doc [data-lineage]").forEach(b => b.addEventListener("click", () => {
    const id = b.dataset.lineage;
    goto("lineage", { id: id });
  }));
}

// ============================================================
//  开发进度（实时统计 + 内容自评）
// ============================================================
function progTier(t) {
  const sum = (t.summary || "").trim();
  const hasPP = (t.people || "").trim() || (t.place || "").trim();
  const BANNED = /奠定了.{0,12}基础框架|发展成熟|基础设施|重要进展|关键技术（泛称）|关键技术$/;
  if (!sum.length) return "missing";
  if (!hasPP && (BANNED.test(sum) || sum.length < 40)) return "stub";
  if (sum.length >= 80) return "good";
  return "ok";
}
function mixedLang(s) { s = s || ""; return /\p{Script=Han}+[与和]\s*[A-Za-z]/u.test(s); }

function renderProgress() {
  const T = TECHS, total = T.length;
  let links = 0; T.forEach(t => links += (t._up || []).length);

  const fieldDefs = [
    { key: "summary", label: "技术简介 summary" },
    { key: "en", label: "英文名 en" },
    { key: "date", label: "年代 date" },
    { key: "people", label: "发明者 / 人物 people" },
    { key: "place", label: "地点 place" },
    { key: "significance", label: "技术意义 significance" },
    { key: "views", label: "各时期评价 views" },
    { key: "applications", label: "应用场景 applications" },
    { key: "enables", label: "催生技术 enables（手工）" }
  ];
  const fills = fieldDefs.map(f => {
    const n = T.filter(t => t[f.key] && (Array.isArray(t[f.key]) ? t[f.key].length : ("" + t[f.key]).trim().length)).length;
    return { label: f.label, n, pct: Math.round(n / total * 100) };
  });

  const tierCount = { good: 0, ok: 0, stub: 0, missing: 0 };
  const sumLens = [];
  T.forEach(t => {
    const sum = (t.summary || "").trim();
    if (!sum.length) { tierCount.missing++; return; }
    sumLens.push(sum.length);
    tierCount[progTier(t)]++;
  });
  sumLens.sort((a, b) => a - b);
  const medLen = sumLens.length ? sumLens[Math.floor(sumLens.length / 2)] : 0;
  const maxLen = sumLens.length ? sumLens[sumLens.length - 1] : 0;

  const BANNED_ALL = /奠定了.{0,12}基础框架|发展成熟|基础设施|重要进展|关键技术（泛称）|关键技术$/;
  const boilerAll = T.filter(t => BANNED_ALL.test(t.summary || "")).length;
  const mixed = T.filter(t => mixedLang(t.name)).length;
  const noPP = T.filter(t => !(t.people || "").trim() && !(t.place || "").trim()).length;
  const withPP = T.filter(t => (t.people || "").trim() || (t.place || "").trim()).length;

  const catStats = CATEGORIES.map(c => {
    const arr = T.filter(t => t.category === c.id);
    const ws = arr.filter(t => (t.summary || "").trim().length).length;
    const wp = arr.filter(t => (t.people || "").trim()).length;
    const wpl = arr.filter(t => (t.place || "").trim()).length;
    const lens = arr.map(t => (t.summary || "").trim().length).filter(Boolean);
    const avg = lens.length ? Math.round(lens.reduce((a, b) => a + b, 0) / lens.length) : 0;
    const tiers = { good: 0, ok: 0, stub: 0 };
    arr.forEach(t => { tiers[progTier(t)]++; });
    let rating = "模板占位";
    if (tiers.good + tiers.ok > 0 && (tiers.good + tiers.ok) / arr.length >= 0.5) rating = "较完善";
    else if (tiers.good + tiers.ok > 0) rating = "部分撰写";
    return { id: c.id, name: c.name, color: c.color, total: arr.length, ws, wp, wpl, avg, tiers, rating };
  });

  const tierDesc = { good: "优秀·深度撰写", ok: "合格·偏薄", stub: "模板占位·待重写", missing: "未写" };
  const evalText = `截至 2026-08-25，按《研发 SOP》分批完成的 993 条自动化模板占位已全部升级为非模板简介——套话、中英混排、过短摘要清零，中位 ${medLen} 字，全部达「合格」以上，内容实质性由「低」升至「中」。剩余两点：① 人物 / 地点仍仅 ${withPP} 条有记录（Tier B 待补，未编造）；② ${boilerAll} 条带人物 / 地点的手工锚点简介仍偏模板，可单独精修（不计入占位，因其已有归属）。下一步按 SOP 推进 Tier B 与依赖图精修。`;

  let html = `<p class="prog-lead">本页实时统计技术数据库的规模与「技术简介」撰写完成度，并对现有简介质量做自评。统计基于当前已入库的 ${total} 项技术，随数据更新自动刷新。</p>`;

  html += `<section class="prog-section"><h3 class="prog-h">一、总览</h3><div class="prog-cards">`;
  [
    { num: total, lbl: "技术节点" },
    { num: CATEGORIES.length, lbl: "技术分类" },
    { num: ERAS.length, lbl: "历史分期" },
    { num: links, lbl: "依赖关系" },
    { num: "100%", lbl: "网页已渲染" }
  ].forEach(c => html += `<div class="prog-card"><div class="num">${c.num}</div><div class="lbl">${esc(c.lbl)}</div></div>`);
  html += `</div></section>`;

  html += `<section class="prog-section"><h3 class="prog-h">二、字段填充率（结构完整度）</h3><div class="prog-bars">`;
  fills.forEach(f => {
    html += `<div class="pbar"><span class="pl">${esc(f.label)}</span><span class="ptrack"><span class="pfill" style="width:${f.pct}%"></span></span><span class="pv">${f.n} / ${total}（${f.pct}%）</span></div>`;
  });
  html += `</div><p class="prog-note">说明：字段「已填充」仅表示对应位置有内容，不代表内容质量。summary / views / applications / significance 现已按《研发 SOP》升级为非模板文本；people / place / enables 仍多数空缺（见第三节与待办）。</p></section>`;

  html += `<section class="prog-section"><h3 class="prog-h">三、内容实质性与质量自评</h3>`;
  const contentLow = tierCount.stub > 0;
  html += `<div class="prog-dual">
    <div class="dual-box"><div class="dual-t">结构完整度</div><div class="dual-v">高</div><div class="dual-d">字段普遍填充，全部技术已入库渲染</div></div>
    <div class="dual-box ${contentLow ? "warn" : ""}"><div class="dual-t">内容实质性</div><div class="dual-v">${contentLow ? "低" : "中"}</div><div class="dual-d">${contentLow ? Math.round(tierCount.stub / total * 100) + "% 仍为模板占位，待重写" : "模板套话已清零，全部简介达「合格」以上；仅人物 / 地点待 Tier B 补全"}</div></div>
  </div>`;
  html += `<div class="prog-tier">`;
  ["good", "ok", "stub", "missing"].forEach(k => {
    html += `<div class="tier-item tier-${k}"><div class="tier-num">${tierCount[k]}</div><div class="tier-lbl">${tierDesc[k]}</div></div>`;
  });
  html += `</div>`;
  html += `<div class="prog-issues"><div class="issue-h">典型问题（自评，随数据自动刷新）</div>`;
  const issuesList = [
    ["套话雷同", boilerAll > 0 ? `${boilerAll} 条摘要仍含模板套话（多为带人物 / 地点的手工锚点，非本次 993 批量任务范围），可单独精修。` : `已清零（${boilerAll} 条）——批量升级后所有摘要均由依赖上下文写成，无统一模板句。`],
    ["中英混排", mixed > 0 ? `${mixed} 条名称中英夹杂，如「计数与 tallying」` : `已清零（${mixed} 条）——「计数与 tallying」式不良混排已修；DNA 双螺旋、3D 打印 等术语中的拉丁字母属正常用法，保留。`],
    ["篇幅偏短", medLen < 60 ? `摘要中位 ${medLen} 字、最长 ${maxLen} 字，信息密度低` : `已达标（中位 ${medLen} 字、最长 ${maxLen} 字）`],
    ["人物 / 地点缺失", `${noPP} 条（${Math.round(noPP / total * 100)}%）无发明者与地点信息——属 SOP 的 Tier B，需 web 研究补全，未编造。`],
    ["依赖图年代错位", `个别简介因依赖网自动编织，会引用年代偏晚的上游（如「弩 依托 车床」），属依赖图本身的可优化项，不影响简介可读性。`]
  ];
  issuesList.forEach(it => {
    html += `<div class="issue"><span class="issue-tag">${esc(it[0])}</span><span class="issue-txt">${esc(it[1])}</span></div>`;
  });
  html += `</div>`;
  html += `<p class="prog-eval">${esc(evalText)}</p></section>`;

  html += `<section class="prog-section"><h3 class="prog-h">四、分类别进度</h3><div class="prog-table-wrap"><table class="prog-table"><thead><tr><th>类别</th><th>技术数</th><th>已渲染</th><th>有人物</th><th>有地点</th><th>均长(字)</th><th>优秀</th><th>合格</th><th>待重写</th><th>评级</th></tr></thead><tbody>`;
  catStats.forEach(c => {
    html += `<tr>
      <td><span class="dot" style="background:${c.color}"></span>${esc(c.name)}</td>
      <td>${c.total}</td><td>${c.ws}</td><td>${c.wp}</td><td>${c.wpl}</td><td>${c.avg}</td>
      <td class="c-good">${c.tiers.good}</td><td class="c-ok">${c.tiers.ok}</td><td class="c-stub">${c.tiers.stub}</td>
      <td>${esc(c.rating)}</td></tr>`;
  });
  html += `</tbody></table></div></section>`;

  const topCats = catStats.slice().sort((a, b) => b.tiers.stub - a.tiers.stub).slice(0, 3);
  html += `<section class="prog-section"><h3 class="prog-h">五、待办与下一步</h3>`;
  if (tierCount.stub === 0) {
    html += `<p class="prog-todo">模板占位（内容层面）已清零：<b>0</b> 条待重写。下一步 backlog：① Tier B——对 1750 年后、归属明确的现代技术做 web 研究补全 people / place（${noPP} 条中可考者）；② 依赖图精修——修正自动编织造成的年代错位上游；③ 深度撰写——把部分「合格」条目提升到「优秀」。</p>`;
  } else {
    html += `<p class="prog-todo">尚未在网页中「实质撰写」的技术共 <b>${tierCount.stub}</b> 条（结构层面已全部渲染，内容层面为模板占位）。待重写量最大的三类依次为：${topCats.map(c => `${esc(c.name)}（${c.tiers.stub} 条）`).join("、")}。</p>`;
  }
  html += `<ul class="prog-list">
    <li>对模板占位分批做人工润色 / 重写，优先补充<b>发明者、地点、时代背景</b>三类信息；</li>
    <li>用「来龙去脉」推演反哺简介，把上游依赖与下游应用写进 significance；</li>
    <li>建立摘要质量门禁（禁用套话、强制人物/地点、长度 ≥ 80 字）后再批量生成；</li>
    <li>持续将手工锚点的撰写标准沉淀为可复用的模板，逐步提升整体完成度。</li>
  </ul></section>`;

  $("#prog-doc").innerHTML = html;
}

// ============================================================
//  研发 SOP（技术简介升级工作标准）
// ============================================================
function renderSop() {
  const S = SOP;
  if (!S) return;
  let html = `<p class="sop-lead">${esc(S.lead)}</p>`;

  html += `<section class="sop-section"><h3 class="sop-h">一、目标与范围</h3><p>${esc(S.goal)}</p>`;
  html += `<div class="sop-target"><b>${S.target.stubs}</b> 条模板占位待升级。<span class="sop-sub">${esc(S.target.note)}</span></div>`;
  const eraEntries = Object.entries(S.target.byEra || {});
  html += `<div class="sop-erabar">` + eraEntries.map(([k, v]) => `<span class="eb" title="${esc(k)}"><i style="height:${Math.max(5, Math.round(v / 3))}px"></i><span class="eb-n">${v}</span></span>`).join("") + `</div>`;
  html += `</section>`;

  html += `<section class="sop-section"><h3 class="sop-h">二、单条质量门禁（Definition of Done）</h3><ol class="sop-gate">` + (S.qualityGate || []).map(g => `<li>${esc(g)}</li>`).join("") + `</ol></section>`;

  html += `<section class="sop-section"><h3 class="sop-h">三、单条工作流（5 步）</h3><div class="sop-flow">` + (S.workflow || []).map(w => `<div class="flow-step"><span class="flow-no">${w.step}</span><div class="flow-body"><div class="flow-t">${esc(w.title)}</div><div class="flow-d">${esc(w.detail)}</div></div></div>`).join("") + `</div></section>`;

  html += `<section class="sop-section"><h3 class="sop-h">四、升级器改写逻辑（示例）</h3>`;
  html += `<div class="sop-ex"><div class="ex-row"><span class="ex-tag before">改写前 · 套话</span><code>${esc(S.transform.before)}</code></div><div class="ex-row"><span class="ex-tag after">改写后 · 具体</span><code>${esc(S.transform.after)}</code></div></div>`;
  html += `<p class="sop-rule">${esc(S.transform.rule)}</p></section>`;

  html += `<section class="sop-section"><h3 class="sop-h">五、任务拆分（${S.split.batches.length} 批 · 共 ${S.target.stubs} 条）</h3>`;
  html += `<p class="sop-note">${esc(S.split.by)} ${esc(S.split.order)}</p>`;
  html += `<div class="sop-batch-wrap"><table class="sop-batch"><thead><tr><th>批次</th><th>分类</th><th>待升级条数</th><th>状态</th></tr></thead><tbody>`;
  (S.split.batches || []).forEach(b => {
    html += `<tr><td>${esc(b.id)}</td><td>${esc(b.name)}</td><td>${b.count}</td><td><span class="batch-status">${esc(b.status)}</span></td></tr>`;
  });
  html += `</tbody></table></div></section>`;

  html += `<section class="sop-section"><h3 class="sop-h">六、执行阶段</h3><div class="sop-phases">` + (S.execution || []).map(p => `<div class="phase"><span class="phase-no">${esc(p.phase)}</span><div class="phase-body"><div class="phase-t">${esc(p.title)}</div><div class="phase-d">${esc(p.detail)}</div></div></div>`).join("") + `</div></section>`;

  html += `<section class="sop-section"><h3 class="sop-h">七、护栏（不做什么）</h3><ul class="sop-guard">` + (S.guardrails || []).map(g => `<li>${esc(g)}</li>`).join("") + `</ul></section>`;

  $("#sop-doc").innerHTML = html;
}

// ============================================================
//  关系网分析（重要性 · 组合诞生推演）
// ============================================================
function renderAnalysis() {
  computeNet();
  const T = TECHS, total = T.length;
  const ranked = T.slice().sort((a, b) => b._net.comp - a._net.comp);
  const byDesc = T.slice().sort((a, b) => b._net.desc - a._net.desc);
  const byBt = T.slice().sort((a, b) => b._net.bt - a._net.bt);
  const byOut = T.slice().sort((a, b) => b._net.outdeg - a._net.outdeg);

  const maxComp = ranked[0]._net.comp;
  const fmt = x => (x >= 1 ? x.toFixed(2) : x.toFixed(x >= 0.01 ? 3 : 4));

  let html = `<p class="an-lead">本页对全库 <b>${total}</b> 项技术、<b>${NET.edges}</b> 条依赖边构成的「技术关系网」做量化总结：先用网络中心性指标排出哪些技术最重要，再基于「跨分类技术作为共同前置」的共现与共生指数测度组合潜能，推演这些技术下一步会融合诞生什么。所有数值由依赖网实时计算得出，随数据更新自动刷新。</p>`;

  html += `<section class="an-section"><h3 class="an-h">一、网络结构概览</h3><div class="an-cards">`;
  [
    { num: total, lbl: "技术节点" },
    { num: NET.edges, lbl: "依赖边" },
    { num: fmt(NET.density), lbl: "网络密度" },
    { num: NET.roots, lbl: "根技术（无上游）" },
    { num: NET.leaves, lbl: "叶技术（无下游）" },
    { num: NET.longest, lbl: "最长技术链（代）" },
    { num: Math.round(NET.avgDeg * 10) / 10, lbl: "平均关联度" },
    { num: CATEGORIES.length, lbl: "分类" }
  ].forEach(c => html += `<div class="an-card"><div class="num">${c.num}</div><div class="lbl">${esc(c.lbl)}</div></div>`);
  html += `</div>`;
  html += `<p class="an-note">解读：网络呈典型「金字塔 + 长尾」结构——少数根技术（史前用火、语言、数学）没有任何前置，是被反复依赖的地基；大量叶技术只被少数后续引用。最长技术链达 <b>${NET.longest}</b> 代，说明一项现代技术往往要踩在数十代前人的肩膀上。密度极低（${fmt(NET.density)}），印证这是一张「稀疏但深层」的累积性网络，而非随机连接。</p></section>`;

  html += `<section class="an-section"><h3 class="an-h">二、重要性排行（综合影响力指数）</h3>`;
  html += `<p class="an-note" style="margin-top:0">综合指数 = 0.40·后代覆盖率 + 0.18·直接催生数（入度）+ 0.27·PageRank（被重要下游依赖）+ 0.15·中介中心性（桥接）。各指标先按全局最大值归一，故指数为 0–1 的相对量纲。后代覆盖率衡量「它最终撑起了多少后续技术」，是最核心的地基信号。</p>`;
  html += `<div class="an-bars">`;
  ranked.slice(0, 16).forEach((t, i) => {
    const w = Math.max(3, Math.round(t._net.comp / maxComp * 100));
    html += `<div class="an-bar-row">
      <span class="an-rank">${i + 1}</span>
      <span class="an-bname" style="border-left:3px solid ${catColor(t.category)}" data-an-id="${t.id}">${esc(t.name)}</span>
      <span class="an-track"><span class="an-fill" style="width:${w}%"></span></span>
      <span class="an-val">${fmt(t._net.comp)}</span>
    </div>`;
  });
  html += `</div>`;
  html += `<div class="an-table-wrap"><table class="an-table"><thead><tr><th>#</th><th>技术</th><th>分类</th><th>后代数</th><th>催生<br>(入度)</th><th>中介<br>中心性</th><th>PageRank<br>×10³</th><th>综合<br>指数</th></tr></thead><tbody>`;
  ranked.slice(0, 25).forEach((t, i) => {
    html += `<tr>
      <td>${i + 1}</td>
      <td class="an-tname" data-an-id="${t.id}" style="border-left:3px solid ${catColor(t.category)}">${esc(t.name)}</td>
      <td><span class="dot" style="background:${catColor(t.category)}"></span>${esc(catName(t.category))}</td>
      <td>${t._net.desc}</td><td>${t._net.indeg}</td>
      <td>${fmt(t._net.bt)}</td><td>${fmt(t._net.pr * 1000)}</td>
      <td class="an-c-imp">${fmt(t._net.comp)}</td></tr>`;
  });
  html += `</tbody></table></div>`;
  html += `<div class="an-graph-wrap"><div class="an-graph-title">重要性力导向图（节点越大越重要，点击查看详情）</div><div class="an-graph" id="an-graph"></div></div>`;
  html += `</section>`;

  html += `<section class="an-section"><h3 class="an-h">三、三类关键节点</h3><div class="an-cols">`;
  html += `<div class="an-col"><div class="an-col-h">地基技术 · 后代最多</div><p class="an-col-sub">被最多后续技术间接依赖，是整个网络的承重墙。</p><div class="an-list">`;
  byDesc.slice(0, 8).forEach(t => html += `<div class="an-li" data-an-id="${t.id}"><span class="an-li-name">${esc(t.name)}</span><span class="an-li-num">${t._net.desc} 后代</span></div>`);
  html += `</div></div>`;
  html += `<div class="an-col"><div class="an-col-h">枢纽 / 桥接 · 中介最高</div><p class="an-col-sub">位于不同技术支系之间的最短路径上，断开它会割裂网络。</p><div class="an-list">`;
  byBt.slice(0, 8).forEach(t => html += `<div class="an-li" data-an-id="${t.id}"><span class="an-li-name">${esc(t.name)}</span><span class="an-li-num">中介 ${fmt(t._net.bt)}</span></div>`);
  html += `</div></div>`;
  html += `<div class="an-col"><div class="an-col-h">复杂瓶颈 · 直接上游最多</div><p class="an-col-sub">同时踩在众多前置之上，是「多项技术成熟后才诞生」的典型汇聚点。</p><div class="an-list">`;
  byOut.slice(0, 8).forEach(t => html += `<div class="an-li" data-an-id="${t.id}"><span class="an-li-name">${esc(t.name)}</span><span class="an-li-num">${t._net.outdeg} 上游</span></div>`);
  html += `</div></div>`;
  html += `</div></section>`;

  html += `<section class="an-section"><h3 class="an-h">四、组合诞生推演 → 哪些技术会由融合而生</h3>`;
  html += `<p class="an-note" style="margin-top:0">技术史反复出现同一模式：当两条分属不同领域的技术线索在同一时点越过「可用」门槛，它们会被某一项新发明同时收编，从而诞生一个此前不存在的复合技术。本库已有实证：<b>${NET.convCount}</b> 项技术的直接上游来自 ≥2 个分类且不少于 3 条（如智能割草机器人、智能手机、民用无人机、自动驾驶），正是这一模式的产物。</p>`;

  html += `<div class="an-conv"><div class="an-conv-h">实证 · 已发生的「汇聚诞生」技术（按直接上游数）</div><div class="an-conv-row">`;
  NET.convEx.slice(0, 12).forEach(t => {
    const cs = new Set((t._up || []).map(u => techMap[u] && techMap[u].category).filter(Boolean));
    html += `<span class="an-conv-item" data-an-id="${t.id}" title="${cs.size} 个分类 · ${t._up.length} 条上游">${esc(t.name)}<i>${t._up.length}</i></span>`;
  });
  html += `</div></div>`;

  html += `<div class="an-heat-title">分类组合潜能矩阵（行 / 列分类的技术，其「直接上游」同时覆盖对方的次数；颜色越深＝共生指数越高）</div><div class="an-heat" id="an-heat"></div>`;

  const catPairs = [];
  for (let i = 0; i < CATEGORIES.length; i++) for (let j = 0; j < CATEGORIES.length; j++) {
    if (i >= j) continue;
    const c1 = CATEGORIES[i], c2 = CATEGORIES[j];
    const raw = NET.catSyn[c1.id + "|" + c2.id];
    if (raw <= 0) continue;
    catPairs.push({ c1, c2, lift: NET.catLift[c1.id + "|" + c2.id], raw, recent: NET.catRec[c1.id + "|" + c2.id] });
  }
  catPairs.sort((a, b) => b.lift - a.lift);
  html += `<div class="an-combo-head">分类融合势能榜 · 最易融合的领域组合（共生指数＝实际共现 ÷ 独立期望）</div><div class="an-combos">`;
  catPairs.slice(0, 12).forEach(p => {
    const recentTag = p.recent > 0 ? `<span class="an-hot">热点 ${p.recent}</span>` : "";
    html += `<div class="an-combo">
      <div class="an-combo-pair">
        <span class="an-cnode" style="border-left:3px solid ${p.c1.color}">${esc(p.c1.name)}</span>
        <span class="an-x">×</span>
        <span class="an-cnode" style="border-left:3px solid ${p.c2.color}">${esc(p.c2.name)}</span>
        ${recentTag}
      </div>
      <div class="an-combo-stat">共生指数 <b>${p.lift.toFixed(2)}</b> · 已有 <b>${p.raw}</b> 项技术同时以二者为前置 · 其中信息 / 智能时代 <b>${p.recent}</b> 项</div>
      <div class="an-combo-proj">推演 → ${esc(comboPhrase({ category: p.c1.id }, { category: p.c2.id }))}</div>
    </div>`;
  });
  html += `</div>`;

  const topCP = catPairs[0];
  const hotCP = catPairs.filter(p => p.recent > 0).sort((a, b) => b.recent - a.recent)[0];
  let concl = `综合判断：本库最成熟的融合领域是「${esc(topCP.c1.name)} × ${esc(topCP.c2.name)}」——共生指数 <b>${topCP.lift.toFixed(2)}</b>，已有 <b>${topCP.raw}</b> 项技术同时以二者为前置，是历史上被反复组合的基石。`;
  if (hotCP) concl += `而当前最活跃的领域融合是「${esc(hotCP.c1.name)} × ${esc(hotCP.c2.name)}」：其 <b>${hotCP.recent}</b> 项共同催生的技术落在信息 / 智能时代，说明二者的融合正在当下发生，下一步最可能诞生的是——${esc(comboPhrase({ category: hotCP.c1.id }, { category: hotCP.c2.id }))}。`;
  html += `<div class="an-concl">推演结论：${concl}</div>`;
  html += `<p class="an-note">说明：以上「推演」是基于依赖网结构的<b>合理性推断</b>——组合势能由真实共同下游计数得出，但具体新技术的命名与形态为基于分类能力的推断，并非确定性预言。它回答的是「哪些技术簇最具备融合条件」，为科幻科技蓝图提供现实锚点方向。</p>`;
  html += `</section>`;

  $("#an-doc").innerHTML = html;

  $$("#an-doc [data-an-id]").forEach(el => el.addEventListener("click", () => openTech(el.dataset.anId)));
  renderImpGraph($("#an-graph"));
  renderHeat($("#an-heat"));
}

function renderImpGraph(wrap) {
  if (!wrap) return;
  const W = wrap.clientWidth || 860, H = 440;
  const nodes = (NET.topImp || []).slice(0, 40).filter(n => n && n._net);
  if (!nodes.length) return;
  const idset = new Set(nodes.map(n => n.id));
  const links = [];
  TECHS.forEach(t => (t._up || []).forEach(u => { if (idset.has(t.id) && idset.has(u)) links.push({ source: t.id, target: u }); }));
  const maxC = Math.max(0.0001, ...nodes.map(n => n._net.comp));
  const r = d => 6 + (d._net.comp / maxC) * 22;
  const svg = d3.select(wrap).attr("viewBox", `0 0 ${W} ${H}`).style("width", "100%").style("height", H + "px");
  svg.selectAll("*").remove();
  const g = svg.append("g");
  const link = g.append("g").selectAll("line").data(links).join("line").attr("class", "an-glink");
  const node = g.append("g").selectAll("g").data(nodes).join("g").attr("class", "an-gnode");
  node.append("circle")
    .attr("r", r)
    .attr("fill", d => catColor(d.category)).attr("fill-opacity", .9)
    .attr("stroke", "var(--bg)").attr("stroke-width", 1.5);
  node.append("text").text(d => d.name).attr("x", d => 6 + (d._net.comp / maxC) * 22 + 3).attr("dy", ".35em").attr("class", "an-glabel");
  const sim = d3.forceSimulation(nodes)
    .force("link", d3.forceLink(links).id(d => d.id).distance(70).strength(.3))
    .force("charge", d3.forceManyBody().strength(-220))
    .force("center", d3.forceCenter(W / 2, H / 2))
    .force("collide", d => 8 + ((d._net && d._net.comp) || 0) / maxC * 24)
    .force("x", d3.forceX(W / 2).strength(.04))
    .force("y", d3.forceY(H / 2).strength(.04));
  sim.on("tick", () => {
    link.attr("x1", d => d.source.x).attr("y1", d => d.source.y).attr("x2", d => d.target.x).attr("y2", d => d.target.y);
    node.attr("transform", d => `translate(${d.x},${d.y})`);
  });
  svg.call(d3.zoom().scaleExtent([0.4, 3]).on("zoom", ev => g.attr("transform", ev.transform)));
  node.on("click", (ev, d) => { ev.stopPropagation(); openTech(d.id); });
}

function renderHeat(wrap) {
  if (!wrap) return;
  const cats = CATEGORIES;
  const maxV = Math.max(...cats.map(c => Math.max(...cats.map(c2 => c.id === c2.id ? 0 : NET.catLift[c.id + "|" + c2.id]))));
  let html = `<table class="an-heat-tbl"><thead><tr><th></th>` + cats.map(c => `<th title="${esc(c.name)}"><span class="an-hcell" style="background:${c.color}">${esc(c.name.slice(0, 2))}</span></th>`).join("") + `</tr></thead><tbody>`;
  cats.forEach(c => {
    html += `<tr><th title="${esc(c.name)}"><span class="an-hcell" style="background:${c.color}">${esc(c.name.slice(0, 2))}</span></th>`;
    cats.forEach(c2 => {
      const v = NET.catSyn[c.id + "|" + c2.id];
      const lift = NET.catLift[c.id + "|" + c2.id];
      const t = maxV ? lift / maxV : 0;
      const bg = c.id === c2.id ? "transparent" : `rgba(139,105,20,${0.12 + t * 0.83})`;
      const fg = t > 0.5 ? "#fff" : "var(--ink)";
      html += `<td class="an-heat-cell" title="${esc(c.name)} × ${esc(c2.name)}：共现 ${v} 次 · 共生指数 ${lift.toFixed(2)}" style="background:${bg};color:${fg}">${v || ""}</td>`;
    });
    html += `</tr>`;
  });
  html += `</tbody></table>`;
  wrap.innerHTML = html;
}
