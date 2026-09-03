(function () {
  const CAT = window.SCICAT_CATEGORIES;
  const ORDER = window.SCICAT_ORDER;
  const WVS = window.SCICAT_WORLDVIEWS;
  const TECHS = window.SCICAT_TECHS;
  const SOP = window.SCICAT_SOP;
  const catById = Object.fromEntries(CAT.map(c => [c.id, c]));
  const wvById = Object.fromEntries(WVS.map(w => [w.id, w]));
  const techById = Object.fromEntries(TECHS.map(t => [t.id, t]));

  const $ = sel => document.querySelector(sel);
  const content = $("#content");
  const esc = s => String(s == null ? "" : s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  // ---------- 侧栏 ----------
  function renderSidebar() {
    const legend = $("#catLegend");
    legend.innerHTML = CAT.map(c => {
      const n = TECHS.filter(t => t.category === c.id).length;
      return `<li data-cat="${c.id}"><span class="dot" style="background:${c.color}"></span>${esc(c.name)}<span class="cnt">${n}</span></li>`;
    }).join("");
    legend.querySelectorAll("li").forEach(li => li.addEventListener("click", () => {
      location.hash = "#/tech?cat=" + li.dataset.cat;
    }));
    const stats = $("#stats");
    const wvCount = WVS.length;
    const impl = TECHS.filter(t => t.category === "implemented").length;
    const wvOnly = TECHS.filter(t => t.category === "worldview-only").length;
    stats.innerHTML = `
      <li>技术条目：<b>${TECHS.length}</b></li>
      <li>分级体系：<b>${CAT.length}</b> 级</li>
      <li>世界观：<b>${wvCount}</b> 类</li>
      <li>已实现：<b>${impl}</b></li>
      <li>世界观限定：<b>${wvOnly}</b></li>
      <li>SOP 阶段：<b>${SOP.length}</b></li>`;
  }

  function catBadge(cid) {
    const c = catById[cid];
    return `<span class="badge" style="background:${c.color}">${esc(c.name)}</span>`;
  }
  function wvTags(ids) {
    return (ids || []).map(id => wvById[id] ? `<span class="tag">${esc(wvById[id].name)}</span>` : "").join("");
  }

  // ---------- 首页 ----------
  function viewHome() {
    const tiles = [
      { t: "技术库", d: "23 项科幻科技，按 5 级可行性分类，第一性原理逐条拆解。", r: "tech" },
      { t: "可视化科技树", d: "按可行性分列、绘制技术依赖关系的交互式图谱。", r: "tree" },
      { t: "世界观系统", d: "硬科幻 / 太空歌剧 / 赛博朋克等，含物理法则偏离度。", r: "worldviews" },
      { t: "研发设计 SOP", d: "12 阶段严肃工程方法，从原理验证到破壁评估。", r: "sop" }
    ];
    content.innerHTML = `
      <section class="hero">
        <h1>把科幻变成可执行的研发蓝图</h1>
        <p>以严肃科学、第一性原理与超级工程师的工作方法，研究科幻作品里的一切科技如何实现（或为何不能），并建立可检索、可可视化的知识库。每项技术都经过物理可行性评估与分级。</p>
        <span class="pill">5 级可行性 · ${TECHS.length} 项技术 · ${WVS.length} 类世界观 · ${SOP.length} 阶段 SOP</span>
      </section>
      <div class="home-grid">
        ${tiles.map(x => `<div class="tile" data-route="${x.r}"><h3>${esc(x.t)}</h3><p>${esc(x.d)}</p></div>`).join("")}
      </div>
      <div class="card" style="margin-top:18px">
        <h3 style="margin-top:0">分级体系</h3>
        <div class="grid" style="grid-template-columns:repeat(auto-fit,minmax(220px,1fr))">
          ${CAT.map(c => `<div style="border-left:5px solid ${c.color};padding:6px 12px;background:var(--bg);border-radius:8px">
            <strong style="color:${c.color}">${esc(c.name)}</strong>
            <p class="muted" style="font-size:12.8px;margin:4px 0 0">${esc(c.desc)}</p></div>`).join("")}
        </div>
      </div>`;
    content.querySelectorAll(".tile").forEach(t => t.addEventListener("click", () => location.hash = "#/" + t.dataset.route));
  }

  // ---------- 技术库 ----------
  let techFilter = { cat: null, q: "", wv: null };
  function viewTech() {
    const params = new URLSearchParams(location.hash.split("?")[1] || "");
    techFilter.cat = params.get("cat") || null;
    content.innerHTML = `
      <h2 class="section-title">技术库</h2>
      <p class="sub">按可行性分级与世界观检索。点击卡片查看第一性原理拆解。</p>
      <div class="toolbar">
        <input class="search" id="techSearch" placeholder="搜索技术、原理、标签…" value="${esc(techFilter.q)}" />
        <span style="flex:1 1 auto"></span>
        <button class="chip" id="libMd" style="border-color:var(--accent);color:var(--accent)">⬇ 导出库 MD</button>
        <button class="chip" id="libDoc" style="border-color:var(--accent);color:var(--accent)">⬇ 导出库 Word</button>
        <button class="chip" id="libPrint" style="border-color:var(--accent);color:var(--accent)">🖨 打印库 PDF</button>
      </div>
      <div class="chips" id="catChips">
        <span class="chip ${!techFilter.cat ? "active" : ""}" data-cat="">全部</span>
        ${CAT.map(c => `<span class="chip ${techFilter.cat === c.id ? "active" : ""}" data-cat="${c.id}" style="${techFilter.cat === c.id ? "background:" + c.color + ";border-color:" + c.color : ""}">${esc(c.name)}</span>`).join("")}
      </div>
      <div class="chips" id="wvChips" style="margin-top:8px">
        <span class="chip ${!techFilter.wv ? "active" : ""}" data-wv="">所有世界观</span>
        ${WVS.map(w => `<span class="chip ${techFilter.wv === w.id ? "active" : ""}" data-wv="${w.id}">${esc(w.name)}</span>`).join("")}
      </div>
      <div class="tech-grid" id="techGrid" style="margin-top:16px"></div>`;

    const search = $("#techSearch");
    search.addEventListener("input", e => { techFilter.q = e.target.value; renderTechGrid(); });
    $("#catChips").querySelectorAll(".chip").forEach(ch => ch.addEventListener("click", () => {
      techFilter.cat = ch.dataset.cat || null; location.hash = "#/tech" + (techFilter.cat ? "?cat=" + techFilter.cat : "");
    }));
    $("#wvChips").querySelectorAll(".chip").forEach(ch => ch.addEventListener("click", () => {
      techFilter.wv = ch.dataset.wv || null; renderTechGrid();
    }));
    const E = window.SciCatExport;
    $("#libMd").addEventListener("click", () => E.downloadMarkdown("科幻科技总库.md", E.libraryMarkdown()));
    $("#libDoc").addEventListener("click", () => E.downloadDoc("科幻科技总库.doc", "科幻科技实现蓝图 · 技术总库", E.libraryDocHtml()));
    $("#libPrint").addEventListener("click", () => E.openPrint("科幻科技实现蓝图 · 技术总库", E.libraryDocHtml()));
    renderTechGrid();
  }
  function renderTechGrid() {
    const q = techFilter.q.trim().toLowerCase();
    let list = TECHS.filter(t => {
      if (techFilter.cat && t.category !== techFilter.cat) return false;
      if (techFilter.wv && !(t.worldviews || []).includes(techFilter.wv)) return false;
      if (q) {
        const hay = [t.name, t.nameEn, t.principle, t.physicsBasis, (t.tags || []).join(" "), (t.sourceWorks || []).join(" ")].join(" ").toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
    list.sort((a, b) => ORDER.indexOf(a.category) - ORDER.indexOf(b.category));
    const grid = $("#techGrid");
    if (!list.length) { grid.innerHTML = `<p class="muted">没有匹配的技术。</p>`; return; }
    grid.innerHTML = list.map(t => {
      const c = catById[t.category];
      return `<div class="tech-card" style="border-left-color:${c.color}" data-id="${t.id}">
        <h3>${esc(t.name)}</h3>
        <div class="en">${esc(t.nameEn)}</div>
        ${catBadge(t.category)}
        <p class="desc">${esc(t.principle)}</p>
        <div>${wvTags(t.worldviews)}</div>
      </div>`;
    }).join("");
    grid.querySelectorAll(".tech-card").forEach(c => c.addEventListener("click", () => location.hash = "#/tech/" + c.dataset.id));
  }

  // ---------- 技术详情 ----------
  function viewTechDetail(id) {
    const t = techById[id];
    if (!t) { content.innerHTML = `<p class="muted">未找到该技术。</p>`; return; }
    const c = catById[t.category];
    const trlPct = Math.round((t.trl || 0) / 9 * 100);
    const deps = (t.dependencies || []).map(d => techById[d]).filter(Boolean);
    content.innerHTML = `
      <a class="back-link" href="#/tech">← 返回技术库</a>
      <div class="export-bar" style="display:flex;gap:8px;margin-bottom:12px;flex-wrap:wrap">
        <button class="chip" id="expMd" style="border-color:var(--accent);color:var(--accent)">⬇ 导出 Markdown</button>
        <button class="chip" id="expDoc" style="border-color:var(--accent);color:var(--accent)">⬇ 导出 Word</button>
        <button class="chip" id="expPrint" style="border-color:var(--accent);color:var(--accent)">🖨 打印 / PDF</button>
      </div>
      <div class="card">
        <div class="detail-head">
          <h1>${esc(t.name)}</h1>
          ${catBadge(t.category)}
        </div>
        <div class="detail-meta">${esc(t.nameEn)} · 来源：${esc((t.sourceWorks || []).join("、"))}</div>
        <div>${wvTags(t.worldviews)} ${ (t.tags||[]).map(x=>`<span class="tag">#${esc(x)}</span>`).join("") }</div>

        <div class="field"><h4>原理概述</h4><p>${esc(t.principle)}</p></div>
        <div class="field"><h4>物理基础</h4><p>${esc(t.physicsBasis)}</p></div>
        <div class="field"><h4>工程可行性</h4><p>${esc(t.engineeringFeasibility)}</p></div>
        <div class="field"><h4>关键挑战</h4><ul>${ (t.keyChallenges||[]).map(x=>`<li>${esc(x)}</li>`).join("") }</ul></div>
        <div class="field"><h4>研发路径</h4><ol>${ (t.rdPath||[]).map(x=>`<li>${esc(x)}</li>`).join("") }</ol></div>
        <div class="field"><h4>技术成熟度 (TRL)</h4>
          <p class="muted">${esc(t.status || "")} · TRL ${t.trl}/9</p>
          <div class="trl-bar"><span style="width:${trlPct}%"></span></div>
        </div>
        <div class="field"><h4>适用 SOP 阶段</h4><p>${esc((t.sopRef||[]).join(" → "))}</p></div>
        ${deps.length ? `<div class="field"><h4>前置 / 使能技术</h4><p>${deps.map(d=>`<a href="#/tech/${d.id}">${esc(d.name)}</a>`).join("、")}</p></div>` : ""}
        <div class="field"><h4>备注</h4><p class="muted">${esc(t.note || "—")}</p></div>
      </div>`;
    const E = window.SciCatExport;
    $("#expMd").addEventListener("click", () => E.downloadMarkdown(t.name + ".md", E.techMarkdown(t)));
    $("#expDoc").addEventListener("click", () => E.downloadDoc(t.name + ".doc", t.name + " · 技术蓝图", E.techDocHtml(t)));
    $("#expPrint").addEventListener("click", () => E.openPrint(t.name + " · 技术蓝图", E.techDocHtml(t)));
  }

  // ---------- 科技树 ----------
  function viewTree() {
    content.innerHTML = `
      <h2 class="section-title">可视化科技树</h2>
      <p class="sub">左→右为可行性递增（已实现 → 世界观限定）。连线表示技术依赖其前置/使能技术。滚轮缩放、拖拽平移、点击节点查看详情。</p>
      <div class="toolbar" style="align-items:center">
        <span class="muted" style="font-size:13px">按世界观过滤：</span>
        <select id="treeWv" class="search" style="flex:0 0 200px;padding:8px 12px">
          <option value="">全部世界观</option>
          ${WVS.map(w => `<option value="${w.id}">${esc(w.name)}</option>`).join("")}
        </select>
        <button id="treeReset" class="chip" style="border-color:var(--accent);color:var(--accent)">重置视图</button>
        <span class="muted" style="font-size:12.5px;margin-left:auto">提示：拖拽平移，滚轮缩放</span>
      </div>
      <div class="tree-legend">
        ${CAT.map(c => `<span><i style="background:${c.color}"></i>${esc(c.name)}</span>`).join("")}
      </div>
      <div class="tree-wrap" id="treeWrap"></div>`;
    const wrap = $("#treeWrap");
    const renderTree = (wv) => window.SciCatTree.render(wrap, { filterWv: wv, onSelect: id => location.hash = "#/tech/" + id });
    renderTree("");
    $("#treeWv").addEventListener("change", e => renderTree(e.target.value));
    $("#treeReset").addEventListener("click", () => { const svg = wrap.querySelector("svg"); if (svg && svg._setView) svg._setView(1, 0, 0); });
  }

  // ---------- 世界观 ----------
  function viewWorldviews() {
    content.innerHTML = `
      <h2 class="section-title">世界观系统</h2>
      <p class="sub">每类世界观含物理法则设定与现实物理的偏离度。偏离度越高，其“专属科技”越可能落入“仅限该世界观”分级。</p>
      <div id="wvList"></div>`;
    $("#wvList").innerHTML = WVS.map(w => {
      const devColor = ["#2e9e5b", "#3a8fd0", "#c7902a", "#c9542f", "#8a5cd0"][Math.min(w.deviationLevel - 1, 4)];
      const techs = (w.typicalTechIds ? w.typicalTechIds.map(id => techById[id]).filter(Boolean)
                                      : TECHS.filter(t => (t.worldviews || []).includes(w.id)));
      return `<div class="wv-card">
        <h3>${esc(w.name)} <span class="muted" style="font-weight:400;font-size:13px">${esc(w.nameEn)}</span></h3>
        <span class="dev" style="background:${devColor}">现实偏离度：${esc(w.deviation)}</span>
        <p class="muted" style="margin:10px 0">${esc(w.blurb)}</p>
        <h4 style="font-size:13px;color:var(--accent)">物理法则设定</h4>
        <ul class="wv-rules">${w.physicsRules.map(r => `<li>${esc(r)}</li>`).join("")}</ul>
        <div><strong style="font-size:13px">典型科技：</strong> ${techs.map(t => `<a href="#/tech/${t.id}">${esc(t.name)}</a>`).join("、") || "—"}</div>
        <div style="margin-top:8px;font-size:12px" class="muted">${techs.length} 项相关技术</div>
        <div style="margin-top:6px">${w.keywords.map(k => `<span class="tag">#${esc(k)}</span>`).join("")}</div>
      </div>`;
    }).join("");
  }

  // ---------- SOP ----------
  function viewSop() {
    content.innerHTML = `
      <h2 class="section-title">研发设计 SOP</h2>
      <p class="sub">把任意科幻设定转化为可执行的严肃工程流程。共 ${SOP.length} 个阶段，循环迭代。每个阶段含目标、方法、输出、度量与常见陷阱。</p>
      <div class="toolbar" style="justify-content:flex-end">
        <button class="chip" id="sopMd" style="border-color:var(--accent);color:var(--accent)">⬇ 导出 MD</button>
        <button class="chip" id="sopDoc" style="border-color:var(--accent);color:var(--accent)">⬇ 导出 Word</button>
        <button class="chip" id="sopPrint" style="border-color:var(--accent);color:var(--accent)">🖨 打印 / PDF</button>
      </div>
      <div id="sopList"></div>`;
    const E = window.SciCatExport;
    $("#sopMd").addEventListener("click", () => E.downloadMarkdown("研发设计SOP.md", E.sopMarkdown()));
    $("#sopDoc").addEventListener("click", () => E.downloadDoc("研发设计SOP.doc", "研发设计 SOP", E.sopDocHtml()));
    $("#sopPrint").addEventListener("click", () => E.openPrint("研发设计 SOP", E.sopDocHtml()));
    $("#sopList").innerHTML = SOP.map((s, i) => `
      <div class="sop-step">
        <span class="num">${i + 1}</span><h3>${esc(s.name)}</h3> <span class="en">${esc(s.nameEn)}</span>
        <p class="muted" style="margin:8px 0 0">${esc(s.goal)}</p>
        <div class="sop-grid">
          <div><div class="k">输入</div><div class="v">${ (s.input||[]).map(x=>`<span class="tag">${esc(x)}</span>`).join(" ") }</div></div>
          <div><div class="k">工具</div><div class="v">${ (s.tools||[]).map(x=>`<span class="tag">${esc(x)}</span>`).join(" ") }</div></div>
          <div style="grid-column:1 / -1"><div class="k">方法</div><ul>${ (s.method||[]).map(x=>`<li>${esc(x)}</li>`).join("") }</ul></div>
          <div style="grid-column:1 / -1"><div class="k">输出</div><div class="v">${ (s.output||[]).map(x=>`<span class="tag">${esc(x)}</span>`).join(" ") }</div></div>
          <div><div class="k">度量</div><div class="v">${esc(s.metric)}</div></div>
          <div><div class="k">常见陷阱</div><div class="v">${esc(s.pitfall)}</div></div>
        </div>
      </div>`).join("");
  }

  // ---------- 路由 ----------
  function router() {
    const hash = location.hash || "#/home";
    const parts = hash.replace(/^#\//, "").split("/");
    const route = parts[0] || "home";
    document.querySelectorAll(".topnav a").forEach(a => a.classList.toggle("active", a.dataset.route === route));
    if (route === "home") viewHome();
    else if (route === "tech") { if (parts[1]) viewTechDetail(parts[1]); else viewTech(); }
    else if (route === "tree") viewTree();
    else if (route === "worldviews") viewWorldviews();
    else if (route === "sop") viewSop();
    else viewHome();
    $("#sidebar").classList.remove("open");
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }

  // 菜单
  $("#menuToggle").addEventListener("click", () => $("#sidebar").classList.toggle("open"));

  renderSidebar();
  window.addEventListener("hashchange", router);
  router();
})();
