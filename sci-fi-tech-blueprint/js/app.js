// ============================================================
// 应用入口：注册所有路由，启动
// ============================================================
// 全局辅助
function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[c]));
}
// 短别名（视图/图表模块内复用）
function esc(s) { return escapeHtml(s); }

(function () {
  Router.register("/", () => HomeView.render());
  Router.register("/category", (ctx) => CategoryView.render(ctx.query), () => CategoryView.mount());
  Router.register("/tech/:id", (ctx) => DetailView.render(ctx.params.id));
  Router.register("/techmap", () => TechMapView.render(), () => TechMapView.mount());
  Router.register("/work/:id", (ctx) => WorkView.render(ctx.params.id));
  Router.register("/works", (ctx) => WorksView.render(ctx.query));
  Router.register("/relations", () => RelationsView.render(), () => RelationsView.mount());
  Router.register("/plan", () => PlanView.render(), () => PlanView.mount());
  Router.register("/midtech/:id", (ctx) => MidtechView.render(ctx));
  Router.register("/sop", () => SopView.render(), () => SopView.mount());

  document.addEventListener("DOMContentLoaded", () => Router.init());

  // 兜底：若脚本已加载完，直接启动
  if (document.readyState !== "loading") Router.init();
})();
