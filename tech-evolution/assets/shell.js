/* ============================================================
   技术演化数据库 · 页面外壳（shell.js）
   - 注入统一 header（品牌 + 真实链接导航）/ 搜索框 / #modal 壳 / footer
   - 按 location.pathname 高亮当前页
   - 绑定全局搜索框、弹窗 backdrop / Escape 关闭
   ============================================================ */
(function () {
  "use strict";

  const VIEWS = [
    { file: "worldview", label: "首页" },
    { file: "browse", label: "技术检索" },
    { file: "timeline", label: "时间轴" },
    { file: "tree", label: "科技树" },
    { file: "lineage", label: "来龙去脉" },
    { file: "method", label: "方法论" },
    { file: "midtech", label: "中间技术" },
    { file: "progress", label: "进度" },
    { file: "sop", label: "研发SOP" },
    { file: "analysis", label: "关系网分析" }
  ];

  function currentFile() {
    let p = location.pathname.split("/").pop() || "index.html";
    if (p === "" || p === "index.html") return "worldview";
    return p.replace(/\.html$/, "");
  }

  function buildHeader() {
    const cur = currentFile();
    const nav = VIEWS.map(v =>
      `<a href="${v.file}.html"${v.file === cur ? ' class="active"' : ""}>${v.label}</a>`
    ).join("");
    return `
    <div class="header-top">
      <a class="brand" href="worldview.html" style="border-bottom:none">
        <div class="logo" aria-hidden="true">墨</div>
        <div class="brand-text">
          <h1>技术演化数据库</h1>
          <p class="tagline">Humanity Technology Evolution Archive</p>
        </div>
      </a>
      <nav class="nav-main" id="nav-main">${nav}</nav>
    </div>
    <div class="breadcrumb">
      <span class="file-no">FILE NO. TECH-EVOLUTION-DB</span>
      <span class="sep">/</span>
      <span>技术演化数据库</span>
      <span class="sep">·</span>
      <span>${VIEWS.find(v => v.file === cur) ? VIEWS.find(v => v.file === cur).label : "卷首"}</span>
    </div>
    <div class="search-row">
      <label for="globalSearch">检索</label>
      <input id="globalSearch" type="search" placeholder="搜索技术 / 人物 / 关键词…" autocomplete="off">
    </div>`;
  }

  function buildFooter() {
    return `<span>技术演化数据库 · 科幻科技实现蓝图（现实锚点层）</span><span id="footer-count"></span>`;
  }

  function buildModal() {
    return `<div id="modal" class="modal hidden" role="dialog" aria-modal="true">
      <div class="modal-backdrop" data-close></div>
      <div class="modal-card" id="modal-card"></div>
    </div>`;
  }

  function mount() {
    // header
    const header = document.querySelector(".site-header");
    if (header) header.innerHTML = buildHeader();
    else {
      const h = document.createElement("header");
      h.className = "site-header";
      h.innerHTML = buildHeader();
      document.body.insertBefore(h, document.body.firstChild);
    }

    // footer
    const footer = document.querySelector(".site-footer");
    if (footer) footer.innerHTML = buildFooter();
    else {
      const f = document.createElement("footer");
      f.className = "site-footer";
      f.innerHTML = buildFooter();
      document.body.appendChild(f);
    }

    // modal shell（若页面未自带）
    if (!document.querySelector("#modal")) {
      document.body.insertAdjacentHTML("beforeend", buildModal());
    }

    // 全局搜索：进入检索页（带参）
    const gs = document.querySelector("#globalSearch");
    if (gs) {
      gs.addEventListener("input", e => {
        state.search = e.target.value;
        if (currentFile() === "tree") { /* tree 页自行监听 */ }
        if (currentFile() === "browse") { /* browse 页自行监听 */ }
        if (currentFile() === "timeline") { /* timeline 页自行监听 */ }
      });
      gs.addEventListener("keydown", e => {
        if (e.key === "Enter" && state.search.trim() && currentFile() !== "browse" && currentFile() !== "timeline" && currentFile() !== "tree") {
          goto("browse", { q: state.search.trim() });
        }
      });
    }

    // 弹窗全局关闭：backdrop 点击 + Escape
    document.querySelector("#modal").addEventListener("click", e => { if (e.target.dataset.close !== undefined) closeModal(); });
    document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

    // 页脚计数
    const fc = document.querySelector("#footer-count");
    if (fc) fc.textContent = `收录 ${TECHS.length} 项技术 · ${CATEGORIES.length} 分类 · ${ERAS.length} 时期`;
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", mount);
  else mount();
})();
