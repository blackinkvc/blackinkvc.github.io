// ============================================================
// 中间技术（关键瓶颈）管理页（#/midtech 与 #/midtech/:id）
// 统一收纳管理全站「实现路径-关键瓶颈」：
//   · 列表：聚合所有技术的 blockers，按依赖技术数排序，可聚焦高亮
//   · 详情：收录的中间技术给出定义/状态/依赖它的科技反向跳转
// 纯静态、零依赖、档案风。
// ============================================================

const MidtechView = {
  // 状态→配色
  _statusColor(s) {
    return ({
      "已实现雏形": "#2e7d32",
      "进行中": "#1f6f1f",
      "理论阶段": "#b8860b",
      "未突破": "#a0522d",
      "伪科学未证实": "#8a1f1f"
    })[s] || "#6f6a5e";
  },

  // 按名称（含别名）匹配收录的中间技术
  byName(name) {
    if (!name) return null;
    const n = String(name).trim().toLowerCase();
    return MIDTECHS.find(m => {
      if (m.name.toLowerCase() === n) return true;
      if ((m.aliases || []).some(a => a.toLowerCase() === n)) return true;
      if (m.name.toLowerCase().includes(n) || n.includes(m.name.toLowerCase())) return true;
      return false;
    }) || null;
  },

  // 聚合全站 blockers → [{ name, count, techs:[id] }]
  _aggregate() {
    const map = new Map();
    TECHS.forEach(t => {
      (t.implementation && t.implementation.blockers || []).forEach(b => {
        const key = b.trim();
        if (!map.has(key)) map.set(key, { name: key, count: 0, techs: [] });
        const e = map.get(key);
        e.count++;
        if (!e.techs.includes(t.id)) e.techs.push(t.id);
      });
    });
    return [...map.values()].sort((a, b) => b.count - a.count);
  },

  // ---------------- 列表 ----------------
  renderList(ctx) {
    const focus = (ctx && ctx.query && ctx.query.focus) ? decodeURIComponent(ctx.query.focus) : "";
    const agg = this._aggregate();
    const featured = MIDTECHS.slice();

    // 收录卡片
    const cards = featured.map(m => {
      const dom = DOMAINS[m.domain] || { label: m.domain, icon: "◆" };
      const col = this._statusColor(m.status);
      const rel = (m.related || []).map(id => {
        const t = TECHS.find(x => x.id === id);
        return t ? `<a class="mt-rel" href="#/tech/${id}">${esc(t.name)}</a>` : "";
      }).join("");
      return `<article class="mt-card" id="mt-${esc(m.id)}">
        <header class="mt-card-head">
          <h3><a href="#/midtech/${m.id}">${esc(m.name)}</a></h3>
          <span class="mt-status" style="color:${col};border-color:${col}">${esc(m.status)}</span>
        </header>
        <p class="mt-dom">${dom.icon} ${dom.label}</p>
        <p class="mt-desc">${esc(m.summary)}</p>
        ${rel ? `<div class="mt-rel-wrap"><span class="mt-rel-lbl">依赖它的技术：</span>${rel}</div>` : ""}
        <a class="btn ghost mt-more" href="#/midtech/${m.id}">展开 →</a>
      </article>`;
    }).join("");

    // 全站瓶颈全景（聚合，含未收录者）
    const rows = agg.map(a => {
      const mid = this.byName(a.name);
      const chips = a.techs.slice(0, 8).map(id => {
        const t = TECHS.find(x => x.id === id);
        return t ? `<a class="mt-chip" href="#/tech/${id}">${esc(t.name)}</a>` : "";
      }).join("");
      const more = a.techs.length > 8 ? `<span class="mt-chip muted">+${a.techs.length - 8}</span>` : "";
      const anchor = mid ? `mt-${esc(mid.id)}` : "raw-" + encodeURIComponent(a.name);
      return `<tr id="${anchor}" class="${mid ? "mt-row-curated" : ""}">
        <td class="mt-name">${mid ? `<a href="#/midtech/${mid.id}">${esc(a.name)}</a>` : esc(a.name)}${mid ? ' <span class="mt-tag">已收录</span>' : ""}</td>
        <td class="num">${a.count}</td>
        <td class="mt-techs">${chips}${more}</td>
      </tr>`;
    }).join("");

    const totalUnique = agg.length;
    const totalRefs = agg.reduce((s, a) => s + a.count, 0);

    return `
    <section class="view midtech-view">
      <div class="mt-head">
        <h1>中间技术 · 关键瓶颈管理</h1>
        <p class="muted">介于「现有技术」与「目标科幻技术」之间、必须逐个攻克的关键子技术/瓶颈。以下按依赖它的技术数量排序，收录项可展开详情并反向跳转。</p>
        <div class="mt-stats">
          <span>收录中间技术：<b>${featured.length}</b></span>
          <span>全站独立瓶颈：<b>${totalUnique}</b></span>
          <span>瓶颈引用总数：<b>${totalRefs}</b></span>
        </div>
      </div>

      <div class="mt-section">
        <h2>收录中间技术</h2>
        <div class="mt-cards">${cards}</div>
      </div>

      <div class="mt-section">
        <h2>全站瓶颈全景</h2>
        <p class="muted">所有技术「实现路径-关键瓶颈」的聚合。每行可点击跳转至该技术，标「已收录」者另有详情页。</p>
        <table class="mt-table">
          <thead><tr><th>瓶颈 / 中间技术</th><th class="num">依赖技术数</th><th>被下列技术列为瓶颈</th></tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    </section>`;
  },

  // ---------------- 详情 ----------------
  renderDetail(id) {
    const m = MIDTECHS.find(x => x.id === id);
    if (!m) return `<div class="not-found"><h1>未找到</h1><p>中间技术「${esc(id)}」不存在。</p><a class="btn" href="#/category">返回科技检索</a></div>`;
    const dom = DOMAINS[m.domain] || { label: m.domain, icon: "◆", color: "#000" };
    const col = this._statusColor(m.status);
    const rel = (m.related || []).map(rid => {
      const t = TECHS.find(x => x.id === rid);
      if (!t) return "";
      const lv = LEVELS[t.level];
      return `<a class="mt-rel" href="#/tech/${rid}" style="--lvcolor:${lv.color}">${esc(t.name)} <span class="mt-rel-lv">${lv.badge}</span></a>`;
    }).join("");

    return `
    <section class="view midtech-view">
      <nav class="breadcrumb"><a href="#/">首页</a> / <a href="#/category">科技检索</a> / ${esc(m.name)}</nav>
      <header class="mt-detail-head" style="--mtcol:${col}">
        <h1>${esc(m.name)}</h1>
        <div class="mt-detail-meta">
          <span class="mt-status" style="color:${col};border-color:${col}">${esc(m.status)}</span>
          <span class="meta-item" style="--dcolor:${dom.color}">${dom.icon} ${dom.label}</span>
        </div>
        <p class="summary">${esc(m.summary)}</p>
        <p class="body-text">${esc(m.description)}</p>
        ${rel ? `<div class="mt-rel-wrap"><span class="mt-rel-lbl">依赖它的技术：</span>${rel}</div>` : ""}
        <a class="btn ghost" href="#/category">← 返回科技检索</a>
      </header>
    </section>`;
  },

  render(ctx) {
    const id = ctx && ctx.params && ctx.params.id;
    return id ? this.renderDetail(id) : this.renderList(ctx);
  },

  // 列表页挂载：处理 ?focus=瓶颈名 跳转高亮（未收录瓶颈）
  mount() {
    const q = location.hash.split("?")[1];
    if (!q) return;
    const focus = new URLSearchParams(q).get("focus");
    if (!focus) return;
    const name = decodeURIComponent(focus);
    const mid = this.byName(name);
    let el = mid ? document.getElementById("mt-" + mid.id) : null;
    if (!el) el = document.getElementById("raw-" + encodeURIComponent(name));
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "center" });
    el.classList.add("mt-focus");
    setTimeout(() => el.classList.remove("mt-focus"), 2600);
  }
};
