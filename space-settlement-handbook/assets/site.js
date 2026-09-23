/* 未来太空移民技术手册 · 站点交互 */
(function () {
  "use strict";

  /* ---------- 主题切换 ---------- */
  var root = document.documentElement;
  var themeBtn = document.getElementById("themeBtn");
  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      var next = root.dataset.theme === "dark" ? "light" : "dark";
      root.dataset.theme = next;
      try { localStorage.setItem("smh-theme", next); } catch (e) {}
    });
  }

  /* ---------- 移动端目录 ---------- */
  var menuBtn = document.getElementById("menuBtn");
  if (menuBtn) {
    menuBtn.addEventListener("click", function () {
      document.body.classList.toggle("nav-open");
    });
    document.addEventListener("click", function (e) {
      if (!document.body.classList.contains("nav-open")) return;
      if (e.target.closest(".sidebar") || e.target.closest(".menu-btn")) return;
      document.body.classList.remove("nav-open");
    });
  }

  /* ---------- 阅读进度条 ---------- */
  var progress = document.getElementById("progress");
  if (progress) {
    var ticking = false;
    window.addEventListener(
      "scroll",
      function () {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(function () {
          var h = document.documentElement;
          var max = h.scrollHeight - h.clientHeight;
          progress.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + "%";
          ticking = false;
        });
      },
      { passive: true }
    );
  }

  /* ---------- 全文检索 ---------- */
  var overlay = document.getElementById("searchOverlay");
  var input = document.getElementById("searchInput");
  var results = document.getElementById("searchResults");
  var searchBtn = document.getElementById("searchBtn");
  var activeIdx = -1;

  function escHtml(s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  function openSearch() {
    if (!overlay) return;
    overlay.hidden = false;
    document.body.style.overflow = "hidden";
    setTimeout(function () { input && input.focus(); }, 30);
  }
  function closeSearch() {
    if (!overlay) return;
    overlay.hidden = true;
    document.body.style.overflow = "";
    activeIdx = -1;
  }

  function highlight(text, q) {
    var safe = escHtml(text);
    var parts = q.split(/\s+/).filter(Boolean).map(function (p) {
      return p.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    });
    if (!parts.length) return safe;
    return safe.replace(new RegExp("(" + parts.join("|") + ")", "gi"), "<mark>$1</mark>");
  }

  function runSearch(q) {
    if (!results) return;
    q = q.trim();
    activeIdx = -1;
    if (!q) {
      results.innerHTML = '<div class="search-hint">输入关键词，检索 23 章正文与附录</div>';
      return;
    }
    var terms = q.toLowerCase().split(/\s+/).filter(Boolean);
    var idx = window.SEARCH_INDEX || [];
    var scored = [];
    for (var i = 0; i < idx.length; i++) {
      var e = idx[i];
      var title = e.t.toLowerCase();
      var text = e.x.toLowerCase();
      var score = 0;
      var ok = true;
      for (var j = 0; j < terms.length; j++) {
        var t = terms[j];
        var inTitle = title.indexOf(t) >= 0;
        var bodyHits = 0;
        var pos = text.indexOf(t);
        var firstPos = -1;
        while (pos >= 0 && bodyHits < 40) {
          if (firstPos < 0) firstPos = pos;
          bodyHits++;
          pos = text.indexOf(t, pos + t.length);
        }
        if (!inTitle && bodyHits === 0) { ok = false; break; }
        score += (inTitle ? 50 : 0) + bodyHits;
      }
      if (ok) {
        var first = text.indexOf(terms[0]);
        scored.push({ e: e, score: score, first: first });
      }
    }
    scored.sort(function (a, b) { return b.score - a.score; });
    scored = scored.slice(0, 12);

    if (!scored.length) {
      results.innerHTML = '<div class="search-hint">未找到相关内容 —— 试试其他关键词，如「辐射」「比冲」「ISRU」</div>';
      return;
    }
    var html = "";
    for (var k = 0; k < scored.length; k++) {
      var s = scored[k];
      var snippet = "";
      if (s.first >= 0) {
        var start = Math.max(0, s.first - 46);
        var end = Math.min(s.e.x.length, s.first + 110);
        snippet = (start > 0 ? "…" : "") + s.e.x.slice(start, end) + (end < s.e.x.length ? "…" : "");
      } else {
        snippet = s.e.x.slice(0, 120) + "…";
      }
      html +=
        '<a class="sr-item" href="' + s.e.u + '">' +
        '<div class="sr-top"><span class="sr-part">' + escHtml(s.e.pt) + '</span>' +
        '<span class="sr-title">' + highlight(s.e.t, q) + "</span></div>" +
        '<div class="sr-snippet">' + highlight(snippet, q) + "</div></a>";
    }
    results.innerHTML = html;
  }

  if (searchBtn && overlay) {
    searchBtn.addEventListener("click", openSearch);
    overlay.addEventListener("click", function (e) {
      if (e.target === overlay) closeSearch();
    });
    if (input) {
      input.addEventListener("input", function () { runSearch(input.value); });
      input.addEventListener("keydown", function (e) {
        var items = results.querySelectorAll(".sr-item");
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
          e.preventDefault();
          if (!items.length) return;
          activeIdx = e.key === "ArrowDown" ? (activeIdx + 1) % items.length : (activeIdx - 1 + items.length) % items.length;
          items.forEach(function (el, i) { el.classList.toggle("active", i === activeIdx); });
          items[activeIdx].scrollIntoView({ block: "nearest" });
        } else if (e.key === "Enter") {
          var target = activeIdx >= 0 ? items[activeIdx] : items[0];
          if (target) window.location.href = target.getAttribute("href");
        } else if (e.key === "Escape") {
          closeSearch();
        }
      });
    }
  }

  document.addEventListener("keydown", function (e) {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      overlay && !overlay.hidden ? closeSearch() : openSearch();
    }
  });
})();
