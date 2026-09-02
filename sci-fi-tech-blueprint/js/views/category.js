// ============================================================
// 分类检索页视图
// 支持：五级(单选) + 领域(多选) + 关键词 组合过滤，状态编码在 hash query
// 底部翻页：每页适量，page 状态同样编码在 hash query
// ============================================================
const CATEGORY_PAGE_SIZE = 30; // 每页显示的技术条数（适量，避免一屏过长）

const CategoryView = {
  render(query) {
    const level = query.level || "ALL";
    const domains = (query.domains ? query.domains.split(",") : []).filter(Boolean);
    const keyword = (query.q || "").toLowerCase();

    // 当前页码（1 起，越界自动收敛）
    let page = parseInt(query.page, 10);
    if (!Number.isFinite(page) || page < 1) page = 1;

    // 筛选
    let list = TECHS.slice();
    if (level !== "ALL") list = list.filter(t => t.level === level);
    if (domains.length) list = list.filter(t => domains.includes(t.domain));
    if (keyword) list = list.filter(t =>
      (t.name + " " + (t.aliases || []).join(" ") + " " + t.summary + " " + (t.tags || []).join(" ")).toLowerCase().includes(keyword)
    );

    // 五级单选按钮
    const levelBtns = [{ key: "ALL", badge: "全部" }, ...Object.values(LEVELS).sort((a, b) => a.order - b.order)]
      .map(lv => {
        const k = lv.key;
        if (k === "ALL") {
          return `<button class="flt ${level === "ALL" ? "on" : ""}" data-k="ALL">全部</button>`;
        }
        return `<button class="flt ${level === k ? "on" : ""}" style="--fc:${lv.color}" data-k="${k}">${lv.badge}</button>`;
      }).join("");

    // 领域多选按钮
    const domainBtns = Object.values(DOMAINS).map(d => {
      const on = domains.includes(d.key);
      return `<button class="flt ${on ? "on" : ""}" style="--fc:${d.color}" data-d="${d.key}">${d.icon}${d.label}</button>`;
    }).join("");

    // 总数 / 总页数 / 切片
    const total = list.length;
    const totalPages = Math.max(1, Math.ceil(total / CATEGORY_PAGE_SIZE));
    if (page > totalPages) page = totalPages;
    const startIdx = (page - 1) * CATEGORY_PAGE_SIZE;
    const pageItems = list.slice(startIdx, startIdx + CATEGORY_PAGE_SIZE);

    // 结果卡片
    const results = pageItems.length
      ? pageItems.map(t => this.card(t)).join("")
      : `<div class="empty">没有符合条件的科技条目。</div>`;

    return `
      <section class="page-title">
        <h1>科技检索</h1>
        <p>分级、领域、关键词——三重过滤，查遍全卷。</p>
      </section>

      <section class="filter-bar">
        <div class="filter-row">
          <label>实现分级</label>
          <div class="chips">${levelBtns}</div>
        </div>
        <div class="filter-row">
          <label>科技领域</label>
          <div class="chips">${domainBtns}</div>
        </div>
        <div class="filter-row search-row">
          <input id="kw" type="search" placeholder="搜索科技名称 / 摘要 / 标签…" value="${escapeHtml(query.q || "")}">
          <a class="btn reset" href="#/category">重置</a>
        </div>
      </section>

      <section class="results-head">
        <span>共 <strong>${total}</strong> 项${totalPages > 1 ? ` · 第 ${page} / ${totalPages} 页` : ""}</span>
        <span class="hint">点击卡片查看详情与实现路径</span>
      </section>

      <section class="tech-list">${results}</section>

      <hr class="cat-mid-sep">

      <section class="cat-midtech">
        ${typeof MidtechView !== "undefined" ? MidtechView.renderList({ query }) : ""}
      </section>

      ${this.pager(total, totalPages, page, query)}
    `;
  },

  // 挂载：分类筛选走 document 委托；此处处理合并进来的「中间技术」聚焦高亮 / 翻页回顶
  mount() {
    const q = location.hash.split("?")[1];
    const sp = q ? new URLSearchParams(q) : null;
    const focus = sp && sp.get("focus");
    if (focus) {
      const name = decodeURIComponent(focus);
      if (typeof MidtechView === "undefined") return;
      const mid = MidtechView.byName(name);
      let el = mid ? document.getElementById("mt-" + mid.id) : null;
      if (!el) el = document.getElementById("raw-" + encodeURIComponent(name));
      if (!el) return;
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      el.classList.add("mt-focus");
      setTimeout(() => el.classList.remove("mt-focus"), 2600);
      return;
    }
    // 翻页后回到结果顶部（避开 sticky 头部）
    if (sp && sp.get("page")) {
      const rh = document.querySelector(".results-head");
      if (rh) window.scrollTo({ top: rh.getBoundingClientRect().top + window.scrollY - 70, behavior: "smooth" });
    }
  },

  card(t) {
    const lv = LEVELS[t.level];
    const dom = DOMAINS[t.domain];
    const work = WORKS.find(w => w.id === t.workId);
    return `
      <a class="tech-card" href="#/tech/${t.id}" style="--lvcolor:${lv.color}">
        <div class="lv-stripe"></div>
        <div class="tc-main">
          <div class="tc-title">
            <h3>${t.name}</h3>
            <span class="lv-badge" style="--lvcolor:${lv.color}">${lv.badge}</span>
          </div>
          <p class="summary">${t.summary}</p>
          <div class="tc-meta">
            <span class="work-tag">《${work ? work.title : t.workId}》</span>
            <span class="domain-tag" style="--dcolor:${dom.color}">${dom.icon} ${dom.label}</span>
            ${(t.tags || []).slice(0, 3).map(tag => `<span class="tag">${tag}</span>`).join("")}
          </div>
        </div>
      </a>`;
  },

  // 翻页器：保留 level/domains/q 等筛选状态，仅切换 page
  pager(total, totalPages, page, query) {
    if (totalPages <= 1) return "";

    // 构造带全部筛选状态 + 指定页码的 hash
    const mkHref = (p) => {
      const qs = new URLSearchParams();
      if (query.level && query.level !== "ALL") qs.set("level", query.level);
      if (query.domains) qs.set("domains", query.domains);
      if (query.q) qs.set("q", query.q);
      if (p > 1) qs.set("page", p);
      return "#/category" + (qs.toString() ? "?" + qs.toString() : "");
    };

    const pages = this.buildPages(page, totalPages);
    const prevDisabled = page <= 1;
    const nextDisabled = page >= totalPages;
    const prevHref = prevDisabled ? "javascript:void(0)" : mkHref(page - 1);
    const nextHref = nextDisabled ? "javascript:void(0)" : mkHref(page + 1);

    const from = (page - 1) * CATEGORY_PAGE_SIZE + 1;
    const to = Math.min(page * CATEGORY_PAGE_SIZE, total);

    const nums = pages.map(p =>
      p === "..." ? `<span class="pg-ell">…</span>`
        : `<a class="pg ${p === page ? "cur" : ""}" href="${mkHref(p)}" data-p="${p}">${p}</a>`
    ).join("");

    return `
      <nav class="pager" aria-label="分页导航">
        <a class="pg nav ${prevDisabled ? "disabled" : ""}" href="${prevHref}" ${prevDisabled ? 'aria-disabled="true"' : ""}>← 上一页</a>
        <span class="pg-pages">${nums}</span>
        <a class="pg nav ${nextDisabled ? "disabled" : ""}" href="${nextHref}" ${nextDisabled ? 'aria-disabled="true"' : ""}>下一页 →</a>
      </nav>
      <div class="pg-info">显示第 <strong>${from}</strong>–<strong>${to}</strong> 项 / 共 <strong>${total}</strong> 项 · 第 ${page} / ${totalPages} 页 · 每页 ${CATEGORY_PAGE_SIZE} 项</div>
    `;
  },

  // 页码窗口：少则全显，多则首尾 + 当前页前后 + 省略号
  buildPages(cur, total) {
    if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
    const pages = [1];
    const start = Math.max(2, cur - 1);
    const end = Math.min(total - 1, cur + 1);
    if (start > 2) pages.push("...");
    for (let p = start; p <= end; p++) pages.push(p);
    if (end < total - 1) pages.push("...");
    pages.push(total);
    return pages;
  }
};

// 事件委托：处理分类页的筛选点击
document.addEventListener("click", (e) => {
  const btn = e.target.closest(".flt");
  if (!btn) return;
  if (!location.hash.startsWith("#/category")) return;
  const { query } = Router.parseHash();
  let level = query.level || "ALL";
  let domains = (query.domains ? query.domains.split(",") : []).filter(Boolean);
  if (btn.dataset.k) {
    level = btn.dataset.k;
  }
  if (btn.dataset.d) {
    const k = btn.dataset.d;
    domains = domains.includes(k) ? domains.filter(x => x !== k) : [...domains, k];
  }
  const qs = new URLSearchParams();
  if (level !== "ALL") qs.set("level", level);
  if (domains.length) qs.set("domains", domains.join(","));
  if (query.q) qs.set("q", query.q);
  location.hash = "#/category" + (qs.toString() ? "?" + qs.toString() : "");
});

// 关键词搜索（输入防抖后跳转）
let kwTimer;
document.addEventListener("input", (e) => {
  if (e.target.id !== "kw") return;
  clearTimeout(kwTimer);
  kwTimer = setTimeout(() => {
    const { query } = Router.parseHash();
    const qs = new URLSearchParams();
    if (query.level) qs.set("level", query.level);
    if (query.domains) qs.set("domains", query.domains);
    if (e.target.value.trim()) qs.set("q", e.target.value.trim());
    location.hash = "#/category" + (qs.toString() ? "?" + qs.toString() : "");
  }, 400);
});
