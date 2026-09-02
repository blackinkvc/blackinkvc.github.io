// ============================================================
// 科技条目详情页视图
// 头部信息 + 设定 + 原理分析表 + 实现路径时间线 + SOP + 依赖关系 + 相关条目
// ============================================================
const DetailView = {
  // 分词（中英文混合）：用于「类似技术」特征匹配
  _tokens(t) {
    const text = [
      t.name, (t.aliases || []).join(""), t.summary || "",
      (t.firstPrinciples || []).map(f => f.principle || "").join("")
    ].join(" ");
    const set = new Set();
    (text.match(/[A-Za-z]{3,}/g) || []).forEach(w => set.add(w.toLowerCase()));
    (text.match(/[一-龥]{2,}/g) || []).forEach(r => {
      for (let i = 0; i < r.length - 1; i++) set.add(r.slice(i, i + 2));
    });
    return set;
  },

  // 类似技术：按 领域(3) + 分级(2) + 同世界观(0.5) + 特征词重叠(≤4) 综合打分
  _similar(t, n) {
    const tok = this._tokens(t);
    return TECHS.filter(x => x.id !== t.id).map(x => {
      let score = 0;
      if (x.domain === t.domain) score += 3;
      if (x.level === t.level) score += 2;
      if (x.workId === t.workId) score += 0.5;
      const xt = this._tokens(x);
      let ov = 0;
      tok.forEach(w => { if (w.length >= 2 && xt.has(w)) ov++; });
      score += Math.min(ov, 4);
      return { x, score };
    }).filter(s => s.score >= 3)
      .sort((a, b) => b.score - a.score)
      .slice(0, n || 5)
      .map(s => s.x);
  },

  // 实现可能性：优先用 FEASIBILITY 人工覆盖，否则按 verdict/level/blockers 派生
  _deriveFeasibility(t) {
    const fps = t.firstPrinciples || [];
    const hasViolated = fps.some(f => f.verdict === "violated");
    const hasBreak = fps.some(f => f.verdict === "breakthrough");
    let estimate, note;
    if (hasViolated) {
      estimate = "low";
      note = "依赖违反已知物理定律的设定，现实可行度低，主要作为世界观内技术存在。";
    } else if (t.level === "L2") {
      estimate = "high";
      note = hasBreak
        ? "不违反物理定律，工程能力已具雏形，受成本或工程集成制约，近期有望突破。"
        : "现有工程能力足以制造，量产受成本/需求制约。";
    } else {
      estimate = "medium";
      note = hasBreak
        ? "原理可行但需在材料/能源/工艺上取得突破，预期未来数十年内逐步逼近。"
        : "理论上可行，需基础科学或工程突破支撑。";
    }
    const raise = { low: "medium", medium: "high", high: "high" };
    const partialEstimate = raise[estimate];
    const partialNote = estimate === "low"
      ? "若仅取其现实可工程化的子集（如相关材料、子系统），已有实验室级进展。"
      : (t.level === "L2"
          ? "缩比验证/关键子系统已现雏形，部分能力可在近期以受限形式实现。"
          : "阶段性子集（原理样机、有限场景应用）已在推进或可期。");
    return { estimate, note, partialEstimate, partialNote };
  },

  render(id) {
    const t = TECHS.find(x => x.id === id);
    if (!t) return `<div class="not-found"><h1>未找到</h1><p>科技条目「${id}」不存在。</p><a class="btn" href="#/">返回首页</a></div>`;

    const lv = LEVELS[t.level];
    const dom = DOMAINS[t.domain];
    const work = WORKS.find(w => w.id === t.workId);

    // 原理分析表
    const verdictMap = {
      achieved:   { label: "已实现", color: "#000000", icon: "●" },
      breakthrough: { label: "需突破", color: "#555555", icon: "▲" },
      violated:   { label: "违反物理", color: "#000000", icon: "✕" }
    };
    const fpRows = t.firstPrinciples.map(fp => {
      const v = verdictMap[fp.verdict] || verdictMap.breakthrough;
      return `
        <tr>
          <td>${fp.principle}</td>
          <td><span class="verdict" style="color:${v.color}">${v.icon} ${v.label}</span></td>
          <td>${fp.note}</td>
        </tr>`;
    }).join("");

    // 实现路径时间线
    const pathItems = t.implementation.path.map((step, i) =>
      `<li class="tl-item"><span class="tl-num">${i + 1}</span><span class="tl-text">${step}</span></li>`
    ).join("");

    // 本阶段贯彻的方法论（据 sopStage 前缀映射）
    const stageCode = ((t.implementation.sopStage || "").match(/^SOP-\d/) || [])[0];
    const methodChips = ((stageCode && STAGE_METHODS[stageCode]) || [])
      .map(k => getMethod(k)).filter(Boolean)
      .map(m => `<a class="m-chip" href="#/sop?m=${m.key}">${m.code} ${m.label}</a>`).join("");

    // 依赖前置
    const deps = (t.dependencies || []).map(did => {
      const d = TECHS.find(x => x.id === did);
      return d ? `<a class="dep-link" href="#/tech/${d.id}">${d.name}</a>` : `<span class="dep-link dead">${did}</span>`;
    }).join(" ") || '<span class="muted">无前置依赖（源头技术）</span>';

    // 被依赖（谁需要本科技）
    const dependents = TECHS.filter(x => (x.dependencies || []).includes(t.id))
      .map(d => `<a class="dep-link" href="#/tech/${d.id}">${d.name}</a>`).join(" ") || '<span class="muted">暂无下游技术</span>';

    // 相关条目
    const related = TECHS.filter(x => x.id !== t.id && (x.workId === t.workId || x.domain === t.domain || x.level === t.level))
      .slice(0, 6).map(x => {
        const xlv = LEVELS[x.level];
        return `<a class="chip-link" href="#/tech/${x.id}" style="--lvcolor:${xlv.color}">${x.name}</a>`;
      }).join("");

    // 类似技术（按领域/分级/特征匹配，标注各自可实现度）
    const similar = this._similar(t, 5).map(x => {
      const xlv = LEVELS[x.level];
      const xwork = WORKS.find(w => w.id === x.workId);
      return `<li class="sim-item">
        <a class="sim-name" href="#/tech/${x.id}">${esc(x.name)}</a>
        <span class="sim-meta">
          <span class="lv-badge sm" style="--lvcolor:${xlv.color}">${xlv.badge}</span>
          <span class="sim-work">${xwork ? "《" + esc(xwork.title) + "》" : esc(x.workId)}</span>
        </span>
      </li>`;
    }).join("") || '<li class="muted">暂无匹配技术</li>';

    // 实现可能性（L2 研发中 / L3 未来可能实现）
    const fOverride = (typeof FEASIBILITY !== "undefined" && FEASIBILITY[t.id]) || null;
    const feas = fOverride || this._deriveFeasibility(t);
    const feasBand = est => ({ high: { lbl: "高", cls: "high" }, medium: { lbl: "中", cls: "mid" }, low: { lbl: "低", cls: "low" } }[est] || { lbl: est, cls: "mid" });
    const showFeas = (t.level === "L2" || t.level === "L3");
    const feasHtml = showFeas ? `
        <section class="block feas">
          <h2>实现可能性</h2>
          <p class="muted note">基于原理判定、分级与关键瓶颈的综合评估；同分支不同尺度的技术分别估计。</p>
          <div class="feas-grid">
            <div class="feas-card">
              <div class="feas-k">完整实现可能性</div>
              <div class="feas-band ${feasBand(feas.estimate).cls}">${feasBand(feas.estimate).lbl}</div>
              <p class="feas-note">${esc(feas.note)}</p>
            </div>
            <div class="feas-card">
              <div class="feas-k">部分实现可能性</div>
              <div class="feas-band ${feasBand(feas.partialEstimate).cls}">${feasBand(feas.partialEstimate).lbl}</div>
              <p class="feas-note">${esc(feas.partialNote)}</p>
            </div>
          </div>
        </section>` : "";

    return `
      <article class="detail">
        <nav class="breadcrumb"><a href="#/">首页</a> / <a href="#/category">检索</a> / <a href="#/work/${t.workId}">《${work ? work.title : t.workId}》</a></nav>

        <header class="detail-head" style="--lvcolor:${lv.color}">
          <div class="dh-top">
            <div>
              <h1>${t.name}</h1>
              ${t.aliases.length ? `<p class="aliases">别名：${t.aliases.join(" / ")}</p>` : ""}
            </div>
            <div class="dh-badges">
              <span class="lv-badge big" style="--lvcolor:${lv.color}">${lv.badge}</span>
            </div>
          </div>
          <p class="summary">${t.summary}</p>
          <div class="dh-meta">
            <span class="meta-item">作品：<a href="#/work/${t.workId}">《${work ? work.title : t.workId}》</a></span>
            <span class="meta-item" style="--dcolor:${dom.color}">领域：${dom.icon} ${dom.label}</span>
            <span class="meta-item">分级：${lv.key} · ${lv.label}</span>
          </div>
        </header>

        <section class="block tech-progress">
          <h2>实现进度</h2>
          ${ProgressCharts.techMeter(t)}
        </section>

        <figure class="davinci-plate">
          <img src="${DaVinciImg.forTech(t)}" alt="${t.name} 棕墨手稿铭图">
          <figcaption>铭图 · 棕墨手稿 · ${dom.label}领域 ${lv.label}技术示意</figcaption>
        </figure>

        <section class="block">
          <h2>作品内设定</h2>
          <p class="body-text">${t.description}</p>
        </section>

        <section class="block">
          <h2>原理分析</h2>
          <p class="muted note">逐条核对底层物理定律，判断该技术是符合、需要突破、还是违反已知物理。</p>
          <table class="fp-table">
            <thead><tr><th>原理 / 机制</th><th>判定</th><th>说明</th></tr></thead>
            <tbody>${fpRows}</tbody>
          </table>
        </section>

        <section class="block">
          <h2>实现路径</h2>
          <p class="body-text">现状：${t.implementation.current}</p>
          <ul class="timeline">${pathItems}</ul>
          ${t.implementation.blockers.length ? `<div class="blockers"><strong>关键瓶颈：</strong>${t.implementation.blockers.map(b => {
            const mid = (typeof MidtechView !== "undefined") && MidtechView.byName(b);
            const href = mid ? `#/midtech/${mid.id}` : `#/category?focus=${encodeURIComponent(b)}`;
            return `<a class="tag danger blocker-link" href="${href}" title="查看中间技术详情">${esc(b)} ↗</a>`;
          }).join(" ")}</div>` : ""}
        </section>
        ${feasHtml}

        <section class="block">
          <h2>对应研发阶段</h2>
          <p class="sop-tag">${t.implementation.sopStage}</p>
          ${methodChips ? `<div class="sop-methods"><span class="sm-label">本阶段贯彻</span>${methodChips}</div>` : ""}
          <a class="btn ghost" href="#/sop">查看完整研发 SOP →</a>
        </section>

        <section class="block deps">
          <div class="dep-col">
            <h3>依赖前置</h3>
            <div class="deps-wrap">${deps}</div>
          </div>
          <div class="dep-col">
            <h3>被依赖</h3>
            <div class="deps-wrap">${dependents}</div>
          </div>
        </section>

        <section class="block">
          <h2>相关条目</h2>
          <div class="chips-wrap">${related}</div>
        </section>

        <section class="block sim-tech">
          <h2>类似技术</h2>
          <p class="muted note">按领域、分级与技术特征自动匹配，并标注各自的可实现度。</p>
          <ul class="sim-list">${similar}</ul>
        </section>
      </article>
    `;
  }
};
