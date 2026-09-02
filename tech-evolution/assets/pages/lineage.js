// 来龙去脉推演
(function () {
  function main() {
    __initLineage();
    const sel = document.querySelector("#lineage-select");
    sel.innerHTML = TECHS.slice().sort((a, b) => a.year - b.year)
      .map(t => `<option value="${t.id}">${esc(t.name)}（${esc(t.date)}）</option>`).join("");
    sel.value = lineageState.id;
    sel.addEventListener("change", () => { goto("lineage", { id: sel.value }); });
    renderLineage(lineageState.id);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", main);
  else main();
})();
