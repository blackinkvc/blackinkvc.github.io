// 分类检索
(function () {
  function main() {
    __initBrowse();
    renderBrowse();
    const gs = document.querySelector("#globalSearch");
    if (gs) gs.addEventListener("input", e => {
      state.search = e.target.value;
      if (gs.value.trim()) {
        // 更新 URL（不刷新）便于分享
        const url = "browse.html?cat=" + encodeURIComponent(state.cat) + "&era=" + encodeURIComponent(state.era) + (state.search.trim() ? "&q=" + encodeURIComponent(state.search.trim()) : "");
        history.replaceState(null, "", url);
      }
      renderBrowse();
    });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", main);
  else main();
})();
