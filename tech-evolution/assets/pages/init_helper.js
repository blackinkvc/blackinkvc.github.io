/* 共享：从 URL query 初始化 cross-page 子状态 */
(function () {
  "use strict";
  window.__readQuery = function () {
    const p = new URLSearchParams(location.search);
    return p;
  };
  // browse: ?cat=&era=&q=
  window.__initBrowse = function () {
    const p = new URLSearchParams(location.search);
    if (p.get("cat")) state.cat = p.get("cat");
    if (p.get("era")) state.era = p.get("era");
    if (p.get("q")) state.search = p.get("q");
    const gs = document.querySelector("#globalSearch"); if (gs && state.search) gs.value = state.search;
  };
  // timeline: ?preset=&s=&e=
  window.__initTimeline = function () {
    const p = new URLSearchParams(location.search);
    if (p.get("preset")) {
      const pr = p.get("preset");
      timelineState.preset = pr;
      if (pr === "all") { timelineState.start = -Infinity; timelineState.end = Infinity; }
      else if (pr === "custom") {
        timelineState.start = p.get("s") !== null && p.get("s") !== "" ? +p.get("s") : -Infinity;
        timelineState.end = p.get("e") !== null && p.get("e") !== "" ? +p.get("e") : Infinity;
      } else if (ERA_BOUNDS[pr]) { const [s, e] = ERA_BOUNDS[pr]; timelineState.start = s; timelineState.end = e; }
    }
    const gs = document.querySelector("#globalSearch"); if (gs && state.search) gs.value = state.search;
  };
  // lineage: ?id=
  window.__initLineage = function () {
    const p = new URLSearchParams(location.search);
    if (p.get("id") && techMap[p.get("id")]) lineageState.id = p.get("id");
  };
})();
