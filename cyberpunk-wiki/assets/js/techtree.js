// 可视化科技树：按 5 级可行性分列，绘制技术依赖关系
// 支持：滚轮缩放、拖拽平移、按世界观过滤（高亮相关、淡出无关）
(function () {
  const CAT = window.SCICAT_CATEGORIES;
  const ORDER = window.SCICAT_ORDER;
  const TECHS = window.SCICAT_TECHS;
  const WVS = window.SCICAT_WORLDVIEWS;
  const catById = Object.fromEntries(CAT.map(c => [c.id, c]));
  const wvById = Object.fromEntries(WVS.map(w => [w.id, w]));
  const techById = Object.fromEntries(TECHS.map(t => [t.id, t]));

  function layout() {
    const colW = 230, nodeW = 196, nodeH = 52, gapY = 16, padTop = 56, padX = 16;
    const cols = ORDER.map(cid => TECHS.filter(t => t.category === cid));
    const colHeights = cols.map(list => padTop + list.length * (nodeH + gapY));
    const totalH = Math.max(...colHeights) + 20;
    const totalW = padX * 2 + cols.length * colW;
    const pos = {};
    cols.forEach((list, ci) => {
      const colH = colHeights[ci];
      const offsetY = (totalH - colH) / 2 + padTop;
      list.forEach((t, i) => {
        pos[t.id] = {
          x: padX + ci * colW + (colW - nodeW) / 2,
          y: offsetY + i * (nodeH + gapY),
          w: nodeW, h: nodeH
        };
      });
    });
    return { cols, colW, totalW, totalH, pos };
  }

  function render(el, opts) {
    opts = opts || {};
    const filterWv = opts.filterWv || null;
    const { cols, colW, totalW, totalH, pos } = layout();
    const ns = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(ns, "svg");
    svg.setAttribute("class", "tree-svg");
    svg.setAttribute("width", totalW);
    svg.setAttribute("height", totalH);
    svg.setAttribute("viewBox", `0 0 ${totalW} ${totalH}`);
    svg.style.cursor = "grab";

    const viewport = document.createElementNS(ns, "g");
    svg.appendChild(viewport);

    const matchWv = t => !filterWv || (t.worldviews || []).includes(filterWv);

    // 列头背景
    cols.forEach((list, ci) => {
      if (!list.length) return;
      const c = catById[ORDER[ci]];
      const g = document.createElementNS(ns, "g");
      const headY = 8;
      const rect = document.createElementNS(ns, "rect");
      rect.setAttribute("x", pos[list[0].id].x - 8);
      rect.setAttribute("y", headY);
      rect.setAttribute("width", colW - 16);
      rect.setAttribute("height", 38);
      rect.setAttribute("rx", 9);
      rect.setAttribute("fill", c.color + "22");
      rect.setAttribute("stroke", c.color);
      rect.setAttribute("stroke-width", "1.2");
      g.appendChild(rect);
      const txt = document.createElementNS(ns, "text");
      txt.setAttribute("x", pos[list[0].id].x - 8 + (colW - 16) / 2);
      txt.setAttribute("y", headY + 24);
      txt.setAttribute("text-anchor", "middle");
      txt.setAttribute("font-size", "13");
      txt.setAttribute("font-weight", "800");
      txt.setAttribute("fill", c.color);
      txt.textContent = `${c.name} (${list.length})`;
      g.appendChild(txt);
      viewport.appendChild(g);
    });

    // 连线
    const links = [];
    const drawn = new Set();
    TECHS.forEach(t => {
      const p = pos[t.id];
      (t.dependencies || []).forEach(dep => {
        const d = pos[dep];
        if (!d) return;
        const key = t.id + "->" + dep;
        if (drawn.has(key)) return;
        drawn.add(key);
        const path = document.createElementNS(ns, "path");
        const x1 = p.x, y1 = p.y + p.h / 2;
        const x2 = d.x + d.w, y2 = d.y + d.h / 2;
        const mx = (x1 + x2) / 2;
        path.setAttribute("d", `M ${x2} ${y2} C ${mx} ${y2}, ${mx} ${y1}, ${x1} ${y1}`);
        path.setAttribute("class", "tree-link");
        const active = matchWv(t) && matchWv(techById[dep]);
        if (filterWv && !active) { path.setAttribute("stroke", "#e6e9ef"); path.setAttribute("stroke-opacity", "0.5"); }
        viewport.appendChild(path);
        links.push({ path, from: t.id, to: dep });
      });
    });

    // 节点
    const nodes = [];
    TECHS.forEach(t => {
      const p = pos[t.id];
      const c = catById[t.category];
      const dim = filterWv && !matchWv(t);
      const g = document.createElementNS(ns, "g");
      g.setAttribute("class", "tree-node");
      g.setAttribute("transform", `translate(${p.x},${p.y})`);
      if (dim) g.setAttribute("opacity", "0.18");
      const rect = document.createElementNS(ns, "rect");
      rect.setAttribute("width", p.w);
      rect.setAttribute("height", p.h);
      rect.setAttribute("rx", 9);
      rect.setAttribute("fill", "#fff");
      rect.setAttribute("stroke", c.color);
      rect.setAttribute("stroke-width", "1.6");
      g.appendChild(rect);
      const bar = document.createElementNS(ns, "rect");
      bar.setAttribute("width", 6);
      bar.setAttribute("height", p.h);
      bar.setAttribute("rx", 3);
      bar.setAttribute("fill", c.color);
      g.appendChild(bar);
      const txt = document.createElementNS(ns, "text");
      txt.setAttribute("x", 16);
      txt.setAttribute("y", p.h / 2 + 4);
      txt.setAttribute("font-weight", "700");
      txt.textContent = t.name;
      g.appendChild(txt);
      g.addEventListener("click", (e) => {
        if (svg._panning) return;
        if (opts.onSelect) opts.onSelect(t.id);
        else location.hash = "#/tech/" + t.id;
      });
      g.addEventListener("mouseenter", () => { if (!dim) rect.setAttribute("fill", c.color + "11"); });
      g.addEventListener("mouseleave", () => rect.setAttribute("fill", "#fff"));
      viewport.appendChild(g);
      nodes.push({ g, id: t.id });
    });

    // ---- 缩放 / 平移 ----
    let scale = 1, tx = 0, ty = 0;
    const apply = () => viewport.setAttribute("transform", `translate(${tx},${ty}) scale(${scale})`);
    svg._setView = (s, x, y) => { scale = s; tx = x; ty = y; apply(); };

    svg.addEventListener("wheel", (e) => {
      e.preventDefault();
      const rect = svg.getBoundingClientRect();
      const cx = e.clientX - rect.left, cy = e.clientY - rect.top;
      const factor = e.deltaY < 0 ? 1.12 : 1 / 1.12;
      const ns = Math.min(4, Math.max(0.25, scale * factor));
      // 以光标为锚点缩放
      tx = cx - (cx - tx) * (ns / scale);
      ty = cy - (cy - ty) * (ns / scale);
      scale = ns;
      apply();
    }, { passive: false });

    let dragging = false, lastX = 0, lastY = 0, moved = false;
    svg.addEventListener("pointerdown", (e) => {
      dragging = true; moved = false; lastX = e.clientX; lastY = e.clientY;
      svg.style.cursor = "grabbing"; svg._panning = false;
      svg.setPointerCapture(e.pointerId);
    });
    svg.addEventListener("pointermove", (e) => {
      if (!dragging) return;
      const dx = e.clientX - lastX, dy = e.clientY - lastY;
      if (Math.abs(dx) + Math.abs(dy) > 3) { moved = true; svg._panning = true; }
      tx += dx; ty += dy; lastX = e.clientX; lastY = e.clientY;
      apply();
    });
    const endDrag = () => { dragging = false; svg.style.cursor = "grab"; setTimeout(() => svg._panning = false, 0); };
    svg.addEventListener("pointerup", endDrag);
    svg.addEventListener("pointerleave", endDrag);

    el.innerHTML = "";
    el.appendChild(svg);
  }

  window.SciCatTree = { render };
})();
