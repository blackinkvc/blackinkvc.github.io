/* 时代时间轴（仅「浙江历史地图」页加载）
   把底部时间轴、时代面板与 app.js 内部的时间状态 t 连起来。
   「幻想 1 号」不加载本文件，保持只有当代的静态视图。 */
(function () {
  'use strict';

  var D = window.DATA;
  var api = window.__ATLAS_ERA__;
  if (!D || !api || !api.eras || !api.eras.length) return;

  var ERAS = api.eras;
  var N = ERAS.length;
  var cur = Math.round(api.get());

  function $(id) { return document.getElementById(id); }

  var el = {
    count: $('era-count'), name: $('era-name'), years: $('era-years'),
    desc: $('era-desc'), coast: $('note-coast'), lake: $('note-lake'),
    build: $('note-build'), sea: $('sea-readout'),
    badge: $('precision-badge'), readout: $('tl-readout'),
    rail: $('rail'), progress: $('progress'), thumb: $('thumb'), ticks: $('ticks')
  };

  function pad(n) { return (n < 10 ? '0' : '') + n; }

  function paint(v) {
    var i = Math.max(0, Math.min(N - 1, Math.round(v)));
    var e = ERAS[i];
    var pct = (v / (N - 1)) * 100;

    if (el.progress) el.progress.style.width = pct + '%';
    if (el.thumb) el.thumb.style.left = pct + '%';

    var ts = el.ticks ? el.ticks.getElementsByClassName('tick') : [];
    for (var k = 0; k < ts.length; k++) {
      ts[k].classList.toggle('on', Number(ts[k].getAttribute('data-i')) === i);
    }

    if (el.count) el.count.textContent = '时代 ' + pad(i + 1) + ' / ' + N;
    if (el.name) el.name.textContent = e.name;
    if (el.years) el.years.textContent = e.years + '　·　' + e.span;
    if (el.desc) el.desc.textContent = e.desc;
    if (el.coast) el.coast.textContent = e.notes.coast;
    if (el.lake) el.lake.textContent = e.notes.lake;
    if (el.build) el.build.textContent = e.notes.build;

    var sea = e.params && e.params.sea != null ? e.params.sea : 0;
    if (el.sea) el.sea.textContent = sea > 0.02 ? '海平面较今 +' + sea.toFixed(1) + ' m' : '海平面 现代 0 m';

    // 只有最后一个时代是真实数据（DEM + OSM），之前的岸线 / 城池为史料复原
    var real = i === N - 1;
    if (el.badge) {
      el.badge.className = 'precision-badge ' + (real ? 'real' : 'inferred');
      el.badge.textContent = real
        ? '当代 · 真实地形 + 真实建筑（OSM）'
        : e.short + ' · 史料复原（岸线 / 聚落为推断）';
    }
    if (el.readout) el.readout.innerHTML = '<b>' + e.name + '</b>　' + e.years;
    document.documentElement.setAttribute('data-atlas-era', String(i));
  }

  function set(v, snap) {
    var x = Math.max(0, Math.min(N - 1, v));
    api.set(x);
    cur = snap === false ? x : Math.round(x);
    paint(api.get());
  }

  /* ---------------- 时间轴拖动 ---------------- */
  if (el.rail) {
    var dragging = false;

    function valueAt(clientX) {
      var r = el.rail.getBoundingClientRect();
      var f = (clientX - r.left) / r.width;
      f = Math.max(0, Math.min(1, f));
      return f * (N - 1);
    }
    function down(ev) {
      if (ev.button != null && ev.button !== 0) return;
      dragging = true;
      el.rail.classList.add('drag');
      set(valueAt(ev.clientX), false);
      ev.preventDefault();
    }
    function move(ev) {
      if (!dragging) return;
      set(valueAt(ev.clientX), false);
    }
    function up() {
      if (!dragging) return;
      dragging = false;
      el.rail.classList.remove('drag');
      set(Math.round(api.get()), true);
    }

    el.rail.addEventListener('pointerdown', down);
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
    window.addEventListener('pointercancel', up);

    var ts = el.ticks ? el.ticks.getElementsByClassName('tick') : [];
    for (var i = 0; i < ts.length; i++) {
      (function (node) {
        node.addEventListener('pointerdown', function (ev) {
          ev.stopPropagation();
          set(Number(node.getAttribute('data-i')), true);
          ev.preventDefault();
        });
      })(ts[i]);
    }

    // 键盘：左右键逐时代
    window.addEventListener('keydown', function (ev) {
      if (ev.target && /input|textarea/i.test(ev.target.tagName)) return;
      if (ev.key === 'ArrowLeft') { set(Math.max(0, Math.round(api.get()) - 1), true); }
      else if (ev.key === 'ArrowRight') { set(Math.min(N - 1, Math.round(api.get()) + 1), true); }
    });
  }

  paint(cur);

  // ?era=0..8 直接定位到某个时代
  var q = {};
  location.search.replace(/[?&]([^=&]+)=([^&]*)/g, function (m, k, v) { q[k] = decodeURIComponent(v); });
  if (q.era != null && q.era !== '') {
    var e0 = Math.max(0, Math.min(N - 1, parseInt(q.era, 10) || 0));
    setTimeout(function () { set(e0, true); }, 40);
  }
})();
