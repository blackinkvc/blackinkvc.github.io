// 整页技术详情（由科技树弹窗「⤢ 整页详情」进入）
(function () {
  function getIdFromUrl() {
    const p = new URLSearchParams(location.search);
    return p.get("id") || "smart_mower";
  }

  function renderDetail(id) {
    const t = techMap[id];
    if (!t) { document.querySelector("#detail-content").innerHTML = `<p style="padding:30px;color:var(--ink-soft)">未找到该技术（${esc(id)}）。<a href="tree.html">返回科技树</a></p>`; return; }
    // 更新地址栏（不刷新）
    if (history.replaceState) history.replaceState(null, "", "detail.html?id=" + encodeURIComponent(id));
    const box = document.querySelector("#detail-content");
    box.innerHTML = buildDetailHTML(t);
    box.style.setProperty("--cat-color", catColor(t.category));
    box.classList.add("detail-page");
    document.title = t.name + " · 技术详情 · 技术演化数据库";

    // 上下游技术：本页内切换
    box.querySelectorAll(".m-tag.linkable").forEach(el => el.addEventListener("click", () => {
      closeModal();
      renderDetail(el.dataset.id);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }));
    // 来龙去脉推演
    box.querySelectorAll("[data-lineage]").forEach(b => b.addEventListener("click", () => {
      closeModal();
      goto("lineage", { id: id });
    }));
    // 整页详情按钮：本页内隐藏（已是整页）
    box.querySelectorAll("[data-expand]").forEach(b => b.style.display = "none");
    // 间接衍生收起/展开
    box.querySelectorAll("[data-toggle-down]").forEach(b => b.addEventListener("click", () => {
      const grp = b.closest(".m-downgrp");
      if (!grp) return;
      const collapsed = grp.classList.toggle("collapsed");
      const tog = b.querySelector(".m-toggle");
      if (tog) tog.textContent = collapsed ? "展开 ▾" : "收起 ▴";
    }));
    // 关闭按钮：返回科技树
    box.querySelectorAll("[data-close]").forEach(b => b.addEventListener("click", () => { goto("tree"); }));
  }

  function main() {
    renderDetail(getIdFromUrl());
    // 浏览器前进/后退时同步
    window.addEventListener("popstate", () => renderDetail(getIdFromUrl()));
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", main);
  else main();
})();
