// 时间轴
(function () {
  function main() {
    __initTimeline();
    TL_MIN = Math.min.apply(null, TECHS.map(t => t.year));
    renderTimelineControls();
    syncSliders();
    renderTimeline();
    const gs = document.querySelector("#globalSearch");
    if (gs) gs.addEventListener("input", e => {
      state.search = e.target.value;
      renderTimeline();
    });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", main);
  else main();
})();
