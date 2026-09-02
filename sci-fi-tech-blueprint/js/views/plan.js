// ============================================================
// 技术补完计划页（#/plan）
// 把本地 TECH_COMPLETION_PLAN.md 的「路线图 + 进度」做成站内可看页面：
//   · 实时由 TECHS / WORKS 推导当前规模与缺口
//   · 展示 B0/B1…B7 分批路线图与完成状态
//   · 验收判据、预期终点（实时值 vs 目标值）
// 纯静态、零依赖、档案风。
// ============================================================

const PlanView = {
  // 实时派生统计
  _stats() {
    const worlds = WORKS.length;
    const techs = TECHS.length;
    const zeroDep = TECHS.filter(t => !(t.dependencies || []).length).length;
    const zeroRatio = techs ? zeroDep / techs : 0;

    const dom = { aerospace: 0, bio: 0, info: 0, energy: 0, material: 0, weapon: 0 };
    TECHS.forEach(t => { if (dom[t.domain] != null) dom[t.domain]++; });
    const mwe = dom.material + dom.weapon + dom.energy;
    const mweRatio = techs ? mwe / techs : 0;

    // 能显示演进 DAG 的世界观：至少 1 条科技挂了真实依赖
    const dagWorlds = new Set();
    const idset = new Set(TECHS.map(t => t.id));
    TECHS.forEach(t => (t.dependencies || []).forEach(d => { if (idset.has(d)) dagWorlds.add(t.workId); }));

    const perWorld = worlds ? techs / worlds : 0;

    return {
      worlds, techs, zeroDep, zeroRatio,
      dom, mwe, mweRatio, dagWorlds: dagWorlds.size, perWorld
    };
  },

  // 分批路线图（B0/B1 已完成，B2–B7 待启动）
  _batches() {
    return [
      {
        id: "B0", title: "流行文化卷（超级英雄 / 动漫）", status: "done", date: "2026-08-25",
        goals: "漫威宇宙、DC宇宙、龙珠、进击的巨人、火影忍者、死神、钢之炼金术师、一拳超人、名侦探柯南、我的英雄学院",
        detail: "新增 10 个世界观 + 45 条科技；id 前缀化（mcu-/dc-/db- 等），依赖挂现实主轴或同世界观前置，verdict 用 achieved/breakthrough/violated。",
        add: "+10 世界观 / +45 科技"
      },
      {
        id: "B1", title: "核心大 IP 深度补完", status: "done", date: "2026-08-21",
        goals: "星际迷航、三体、沙丘、星际穿越、基地、黑客帝国、攻壳机动队、银翼杀手",
        detail: "各补至 6–10 条，补齐 material/weapon/energy 缺口，依赖挂现实主轴或同世界观前置。全站缺失依赖 0、重复 id 0、字段缺失 0。",
        add: "+30 科技"
      },
      {
        id: "B2", title: "太空歌剧与硬科幻补完", status: "todo",
        goals: "星球大战、星际之门、极乐空间(The Expanse)、环形世界、安德的游戏、大和号、高达、海伯利安",
        detail: "各补至 5–8 条，强化航天 / 材料 / 武器。"
      },
      {
        id: "B3", title: "赛博朋克与 AI 补完", status: "todo",
        goals: "神经漫游、雪崩、副本、心理测量者、少数派报告、银翼杀手 2049、黑镜、西部世界、机械姬、她",
        detail: "各补至 5–8 条，强化 bio/info/material（义体、脑机、纳米）。"
      },
      {
        id: "B4", title: "时间 / 平行宇宙补完", status: "todo",
        goals: "回到未来、十二猴子、环形使者、前目的地、源代码、降临、信条式时间题材",
        detail: "各补至 4–6 条，明确 L4/L5 时间物理判定。"
      },
      {
        id: "B5", title: "灾难 / 生态 / 近未来补完", status: "todo",
        goals: "火星救援、挽救计划、七夏娃、雪国列车、后天、2012、路、湮灭",
        detail: "各补至 4–6 条，强化 bio/energy/material（生存技术）。"
      },
      {
        id: "B6", title: "日本动画 / 特摄补完", status: "todo",
        goals: "阿基拉、攻壳机动队、星际牛仔、风之谷、哆啦A梦、铁臂阿童木、万神殿",
        detail: "各补至 4–6 条。"
      },
      {
        id: "B7", title: "剩余世界观批量均衡补完", status: "todo",
        goals: "其余所有仅 2 条的世界观，各补至 3–4 条",
        detail: "至少挂 1 条现实主轴依赖，补齐缺失领域；生成器批量产出 + 人工抽检关键 IP。"
      }
    ];
  },

  // 验收判据（每批）
  _criteria() {
    return [
      "该批每个目标世界观科技数 ≥ 下限",
      "该批每条科技 dependencies 至少含 1 个真实存在的 id（含现实主轴或同世界观前置）",
      "领域覆盖率：核心世界观覆盖 ≥3 领域",
      "数据校验通过：id 唯一、依赖引用全存在、字段完整",
      "Playwright 抽查：目标世界观页「演进逻辑链」显示 DAG，0 JS 错误",
      "重新发布公网"
    ];
  },

  // 预期终点（实时值 vs 目标）
  _endpoint(s) {
    const pct = v => (v * 100).toFixed(0) + "%";
    return [
      { metric: "科技总数", now: s.techs, target: "600–700" },
      { metric: "平均单世界观条数", now: s.perWorld.toFixed(1), target: "5–6" },
      { metric: "零依赖科技占比", now: pct(s.zeroRatio), target: "<40%" },
      { metric: "material/weapon/energy 占比", now: pct(s.mweRatio), target: "≥35%" },
      { metric: "能显示演进 DAG 的世界观数", now: s.dagWorlds, target: "100+" }
    ];
  },

  // 状态徽章
  _badge(status) {
    if (status === "done") return '<span class="pl-badge done">✅ 已完成</span>';
    if (status === "active") return '<span class="pl-badge active">🚧 进行中</span>';
    return '<span class="pl-badge todo">⏳ 待启动</span>';
  },

  // 更新日志（按日期倒序，每次实质更新的简介）
  _changelog() {
    return [
      { date: "2026-08-31", type: "improve", title: "科技检索页新增底部翻页", desc: "每页 24 条（全站共 48 页）；页码窗口带首尾页与省略号；翻页状态编码进 URL，可分享、可前进/后退；随筛选自动重算页数；越界页码自动收敛到末页。已发布公网。" },
      { date: "2026-08-29", type: "improve", title: "三处页面合并重组", desc: "补完计划 + 开发进度 → 合并为「补完计划」；科技树 + 进度星图 → 合并为「科技星图」；中间技术 → 并入「科技检索」。顶部导航精简为 7 项，发布公网。" },
      { date: "2026-08-25", type: "batch", title: "B0 流行文化卷完成", desc: "新增 10 个超级英雄/动漫世界观 + 45 条科技（漫威、DC、龙珠、进击的巨人、火影、死神、钢炼、一拳、柯南、我的英雄学院），id 前缀化、依赖成链。已发布公网。" },
      { date: "2026-08-21", type: "batch", title: "B1 核心大 IP 深度补完", desc: "星际迷航、三体、沙丘、星际穿越、基地、黑客帝国、攻壳、银翼杀手各补至 6–10 条（+30 科技），补齐 material/weapon/energy。校验通过：缺失依赖 0、重复 id 0、字段缺失 0。已发布公网。" }
    ];
  },

  // 更新日志类型徽章
  _chgTag(type) {
    const map = {
      feat:    { cls: "feat",    label: "新增" },
      improve: { cls: "improve", label: "改进" },
      fix:     { cls: "fix",     label: "修复" },
      batch:   { cls: "batch",   label: "补完" },
      doc:     { cls: "doc",     label: "文档" }
    };
    const m = map[type] || map.doc;
    return `<span class="chg-tag ${m.cls}">${m.label}</span>`;
  },

  _changelogHtml() {
    return this._changelog().map(e => `
      <div class="chg-item">
        <div class="chg-when">
          <span class="chg-date">${esc(e.date)}</span>
          ${this._chgTag(e.type)}
        </div>
        <div class="chg-body">
          <div class="chg-title">${esc(e.title)}</div>
          <p class="chg-desc">${esc(e.desc)}</p>
        </div>
      </div>`).join("");
  },

  render() {
    const s = this._stats();
    const batches = this._batches();
    const criteria = this._criteria();
    const endpoint = this._endpoint(s);

    const doneCount = batches.filter(b => b.status === "done").length;
    const totalBatches = batches.length;

    // 实时状态卡
    const cards = [
      { k: "世界观", v: s.worlds, sub: "已收录" },
      { k: "科技条目", v: s.techs, sub: "已收录" },
      { k: "单世界观均条", v: s.perWorld.toFixed(1), sub: "目标 5–6" },
      { k: "零依赖占比", v: (s.zeroRatio * 100).toFixed(0) + "%", sub: "目标 <40%" },
      { k: "材/武/能占比", v: (s.mweRatio * 100).toFixed(0) + "%", sub: "目标 ≥35%" },
      { k: "演进 DAG 世界观", v: s.dagWorlds, sub: "目标 100+" }
    ].map(c => `
      <div class="pl-card">
        <div class="pl-card-k">${c.k}</div>
        <div class="pl-card-v">${c.v}</div>
        <div class="pl-card-sub">${c.sub}</div>
      </div>`).join("");

    // 领域分布条
    const domOrder = [["aerospace", "航天"], ["bio", "生物"], ["info", "信息"], ["energy", "能源"], ["material", "材料"], ["weapon", "武器"]];
    const maxDom = Math.max(...domOrder.map(d => s.dom[d[0]]), 1);
    const domBars = domOrder.map(d => {
      const c = s.dom[d[0]];
      const w = (c / maxDom * 100).toFixed(0);
      return `<div class="pl-dom-row">
        <span class="pl-dom-lbl">${d[1]}</span>
        <span class="pl-dom-bar"><i style="width:${w}%"></i></span>
        <span class="pl-dom-num">${c}</span>
      </div>`;
    }).join("");

    // 路线图
    const batchHtml = batches.map(b => `
      <article class="pl-batch ${b.status}">
        <header class="pl-batch-head">
          <span class="pl-batch-id">${b.id}</span>
          <h3>${esc(b.title)}</h3>
          ${this._badge(b.status)}
        </header>
        <p class="pl-batch-goals"><b>目标：</b>${esc(b.goals)}</p>
        <p class="pl-batch-detail">${esc(b.detail)}</p>
        ${b.add ? `<p class="pl-batch-add">📦 ${esc(b.add)}${b.date ? " · " + b.date : ""}</p>` : (b.date ? `<p class="pl-batch-add">📅 ${b.date}</p>` : "")}
      </article>`).join("");

    // 验收判据
    const criteriaHtml = criteria.map((c, i) => `<li>${esc(c)}</li>`).join("");

    // 预期终点
    const endpointHtml = endpoint.map(r => `
      <tr>
        <td>${esc(r.metric)}</td>
        <td class="num">${esc(String(r.now))}</td>
        <td class="num">${esc(r.target)}</td>
      </tr>`).join("");

    return `
    <section class="view plan-view">
      <div class="pl-head">
        <h1>技术补完计划 · 进度路线图</h1>
        <p class="muted">把每个世界观从「2 条浅条目」补完为「领域均衡、依赖成链、分级合理」的深度档案。本页实时由站内数据推导，下方路线图同步 TECH_COMPLETION_PLAN.md。</p>
        <div class="pl-progress-line">已完成批次 <b>${doneCount}/${totalBatches}</b>（B0、B1），其余待启动</div>
      </div>

      <div class="pl-cards">${cards}</div>

      <div class="pl-section">
        <h2>当前规模与缺口（实时）</h2>
        <div class="pl-dom">
          <div class="pl-dom-title">领域分布</div>
          ${domBars}
          <p class="muted pl-dom-note">material / weapon / energy 相对 aerospace 偏少，是当前补完重点。</p>
        </div>
      </div>

      <div class="pl-section">
        <h2>分批路线图</h2>
        <div class="pl-batches">${batchHtml}</div>
      </div>

      <div class="pl-grid">
        <div class="pl-section">
          <h2>每批验收判据</h2>
          <ul class="pl-criteria">${criteriaHtml}</ul>
        </div>
        <div class="pl-section">
          <h2>预期终点（实时 vs 目标）</h2>
          <table class="pl-table">
            <thead><tr><th>指标</th><th class="num">现状</th><th class="num">目标</th></tr></thead>
            <tbody>${endpointHtml}</tbody>
          </table>
        </div>
      </div>

      <div class="pl-section">
        <h2>更新日志 · 工作进度</h2>
        <p class="muted">按日期倒序记录本项目的每次实质更新（新增 / 改进 / 补完 / 修复）——即一份站内更新日志。</p>
        <div class="chg">${this._changelogHtml()}</div>
      </div>
    </section>
    ${typeof AuditView !== "undefined" ? AuditView.render() : ""}
    `;
  },

  // 挂载：补完计划本身无交互，合并进来的「开发进度」需绑定排序/筛选/待办
  mount() {
    if (typeof AuditView !== "undefined" && AuditView.mount) AuditView.mount();
  }
};
