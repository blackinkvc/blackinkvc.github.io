// ============================================================
// 科技星图（#/techmap）
// 由「科技树（依赖拓扑）」与「进度星图（现实可达性分布）」合并而来：
//   · 上：依赖关系拓扑（连通分量 DAG，可筛选/平移/缩放）
//   · 下：以「实现进度」为坐标轴的全卷分布图表
// 两者复用已有的 TechTreeView / MapView，本视图只负责统一标题与编排。
// ============================================================
const TechMapView = {
  render() {
    return `
      <section class="page-title">
        <h1>科技星图</h1>
        <p>把全卷科技先按依赖关系铺成「科技树」，再按实现进度铺成「进度星图」。上：依赖拓扑，离现实越远墨色越深；下：现实可达性分布，越靠左越已走近工程。</p>
      </section>

      <section class="tm-block">
        <h2 class="tm-block-title">一 · 科技树（依赖拓扑）</h2>
        ${TechTreeView.render()}
      </section>

      <hr class="tm-sep">

      <section class="tm-block">
        <h2 class="tm-block-title">二 · 进度星图（现实可达性）</h2>
        ${MapView.render()}
      </section>
    `;
  },

  // 挂载：仅科技树需要绘制 + 交互；进度星图为纯 SVG，无需挂载
  mount() {
    if (typeof TechTreeView !== "undefined" && TechTreeView.mount) TechTreeView.mount();
  }
};
