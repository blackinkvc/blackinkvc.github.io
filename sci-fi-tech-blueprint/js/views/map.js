// ============================================================
// 实现进度星图（数据驱动 SVG 图表集，零依赖，移动端友好）
// 把「实现进度」作为核心坐标轴，多个视图交叉呈现：
//   图1 进度坐标系散点图 —— x=实现进度(L1→L5)，每行一个世界观，科技点分布其上
//   图2 热力图          —— 世界观 × 分级 的密度着色
//   图3 分级分布柱状图  —— 全量科技在五级上的数量（复用 ProgressCharts.levelBars）
//   图4 分领域堆叠条    —— 各领域在五级上的横向构成（复用 ProgressCharts.domainStacks）
//   图5 世界观平均进度  —— 谁最接近现实（复用 ProgressCharts.workAvgBar）
//   图6 实现梯度说明    —— 单科技可现实性阶梯（复用 ProgressCharts.techMeter 概念）
// ============================================================

const MapView = {
  render() {
    const total = TECHS.length;
    const counts = ProgressCharts._levelCounts();
    const realized = counts.L1 + counts.L2;
    const rp = ((realized / total) * 100).toFixed(0);

    return `
      <section class="map-quick">
        <div class="mq-stat"><span class="mq-num">${total}</span><span class="mq-lbl">科技总数</span></div>
        <div class="mq-stat"><span class="mq-num">${realized}</span><span class="mq-lbl">已可现实化 (L1+L2)</span></div>
        <div class="mq-stat"><span class="mq-num">${rp}%</span><span class="mq-lbl">现实可达比例</span></div>
        <div class="mq-stat"><span class="mq-num">${counts.L5}</span><span class="mq-lbl">仅限世界观 (L5)</span></div>
      </section>

      <section class="map-fig">
        <h2 class="mf-title">① 进度坐标系 · 各世界观科技分布</h2>
        <p class="muted note">横向轴线即实现进度。每行一个世界观，其名下科技按分级落点；墨色越浓离现实越远，点击点可进科技详情。</p>
        ${ProgressCharts.scatterByProgress()}
      </section>

      <section class="map-fig">
        <h2 class="mf-title">② 实现分级热力图 · 世界观 × 分级</h2>
        <p class="muted note">格内数字为该世界观在某分级下的科技数，墨色越浓表示数量越多且越偏离现实。取科技数 ≥3 的世界观按总量排序。</p>
        ${ProgressCharts.heatmap()}
      </section>

      <section class="map-fig">
        <h2 class="mf-title">③ 各世界观平均进度 · 谁最接近现实</h2>
        <p class="muted note">按世界观内科技的平均实现层级（1=已实现，5=仅限世界观）排序，条越长越现实。</p>
        ${ProgressCharts.workAvgBar()}
      </section>

      <section class="map-grid2">
        <figure class="mf-half">
          <h2 class="mf-title">④ 全卷分级分布</h2>
          ${ProgressCharts.levelBars()}
        </figure>
        <figure class="mf-half">
          <h2 class="mf-title">⑤ 分领域构成</h2>
          ${ProgressCharts.domainStacks()}
        </figure>
      </section>

      <section class="map-fig">
        <h2 class="mf-title">⑥ 实现梯度 · 单科技可现实性阶梯</h2>
        <p class="muted note">以「手持通讯器」为例：L1 已实现（最接近现实）在左，L5 仅限世界观在右；当前科技所在格实心，更可实现侧为已验证。</p>
        ${ProgressCharts.techMeter(TECHS.find(t => t.id === "communicator") || TECHS[0])}
      </section>

      <section class="map-legend">
        ${Object.values(LEVELS).sort((a,b)=>a.order-b.order).map(l =>
          `<span class="leg"><i style="background:${PROGRESS_PALETTE[l.key]}"></i>${l.glyph} ${l.badge}</span>`).join("")}
      </section>
    `;
  },

  mount() {
    // 纯 SVG 图表，无需挂载逻辑；保留接口以便将来加交互
  }
};
