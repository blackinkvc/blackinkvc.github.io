// 科技树
(function () {
  function main() {
    renderTree();
    const gs = document.querySelector("#globalSearch");
    if (gs) gs.addEventListener("input", e => {
      state.search = e.target.value;
      applyTreeSearch();
    });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", main);
  else main();
})();
