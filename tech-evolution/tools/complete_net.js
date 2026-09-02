/* ============================================================
   补全流水线 complete_net.js
   目标：消除「虚根长跳」（A 依赖 R 且 A.year - R.year > maxGap）
   做法（每轮迭代直到稳定）：
     1) 定向修复表 EDGE_FIX：精确处理已知荒谬边（含补新节点、拆环）
     2) 自动重连：对剩余长跳边，在 R 的传递后代中找「同分类 / 摘要提及 / 已被依赖」
        且年份最接近 A 的中间层 C，把 A→R 改为 A→C（C 仍间接依赖 R）
     3) 补新节点：EDGE_FIX 中声明的新中间层节点（客观考古/技术史技术）
   输出：newDeps.json（全部 id 的新 dependsOn）+ newNodes.json（新增节点）
   用法：node tools/complete_net.js [--max-gap 100000] [--out /tmp/...]
   ============================================================ */
"use strict";
const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const MAX_GAP = parseInt(process.argv[process.argv.indexOf("--max-gap") + 1] || "100000", 10);
const OUT_DEPS = process.argv[process.argv.indexOf("--out") + 1] || "/tmp/newDeps.json";
const OUT_NODES = process.argv[process.argv.indexOf("--out-nodes") + 1] || "/tmp/newNodes.json";

(async () => {
  const browser = await chromium.launch();
  const page = await (await browser.newContext()).newPage();
  await page.goto("file://" + ROOT + "/worldview.html", { waitUntil: "networkidle" });
  await page.waitForTimeout(1500);

  const res = await page.evaluate((maxGap) => {
    // ---------- 新中间层节点模板（客观技术史技术） ----------
    const NEW_NODES = [
      { id: "hearth_stove", name: "火塘与灶", en: "Hearth and Stove", category: "energy", era: "prehistoric", date: "约 40 万年前", year: -400000,
        people: "早期人类", place: "全球",
        summary: "固定坑灶与石砌火塘的出现，把天然火源固化为可控的烹饪、取暖与热处理场所，是用火从「借用自然」走向「受控利用」的关键一跃，直接支撑了陶器烧制与食物加工。",
        dependsOn: ["fire"], enables: ["pottery", "fire_drill", "cooking"], applications: ["烹饪", "取暖", "陶器预烧", "驱兽"], views: [{ period: "史前", text: "火塘成为聚落生活的中心，既是灶也是仪式与社群凝聚之地。" }], significance: "用火技术从被动保种到主动控温的转折点。" },
      { id: "fire_drill", name: "钻木取火", en: "Fire Drill", category: "energy", era: "prehistoric", date: "约 20 万年前", year: -200000,
        people: "晚期直立人 / 早期智人", place: "全球",
        summary: "以钻杆高速摩擦木料生热的取火装置，使人类第一次摆脱对天然火源的依赖、按需主动生火，是能源自主的开端。",
        dependsOn: ["hearth_stove"], enables: ["fire_making"], applications: ["主动生火", "火种保障", "野外生存"], views: [{ period: "史前", text: "掌握生火权的人被赋予极高地位，取火技术常与神职绑定。" }], significance: "人类首次实现能源的「按需供给」。" },
      { id: "ground_stone", name: "磨制石器", en: "Ground Stone Tool", category: "material", era: "prehistoric", date: "约 3 万年前", year: -30000,
        people: "晚期智人", place: "全球",
        summary: "通过磨石抛光刃口的石器加工工艺，比打制更规整耐用，是新石器时代农业工具（石锄、石镰、磨盘）的基础形态。",
        dependsOn: ["stone_tools"], enables: ["stone_hoe", "agriculture"], applications: ["谷物加工", "农具", "木工"], views: [{ period: "史前", text: "磨制石器与定居、农业一同兴起，成为新石器革命的标志物。" }], significance: "石器制造从打制到磨制的工艺升级。" },
      { id: "stone_hoe", name: "石锄与耒耜", en: "Stone Hoe and Spade", category: "manufact", era: "prehistoric", date: "约 1.2 万年前", year: -12000,
        people: "新石器时代农人", place: "两河流域 / 黄河流域",
        summary: "以磨制石片绑柄而成的翻土农具，使疏松土壤、开沟播种成为可能，是刀耕火种向系统耕作过渡的直接工具。",
        dependsOn: ["ground_stone"], enables: ["agriculture"], applications: ["翻土", "播种", "沟渠"], views: [{ period: "史前", text: "农具的出现让同一块土地可以反复利用，定居聚落随之兴起。" }], significance: "农业革命的关键工具载体。" },
      { id: "arrow", name: "箭", en: "Arrow", category: "military", era: "prehistoric", date: "约 2 万年前", year: -20000,
        people: "旧石器时代猎手", place: "全球",
        summary: "由箭杆、石镞/骨镞与尾羽构成的投射弹药，与弓组合成弓箭，大幅提高远程狩猎的命中率与杀伤距离。",
        dependsOn: ["stone_tools", "woodworking"], enables: ["bow_arrow"], applications: ["狩猎", "战争"], views: [{ period: "史前", text: "带镞的箭能穿透厚皮猎物，狩猎效率的革命性提升。" }], significance: "投射武器从投掷到射击的跨越。" },
      { id: "open_firing", name: "露天烧陶", en: "Open Firing Pottery", category: "material", era: "prehistoric", date: "约 2.5 万年前", year: -25000,
        people: "旧石器时代制陶者", place: "东亚 / 欧亚",
        summary: "在火塘或浅坑中直接堆烧陶坯的早期烧成工艺，温度虽低（约 600–900℃）但足以使黏土烧结，是陶器从晾晒走向烧成的关键一步。",
        dependsOn: ["hearth_stove"], enables: ["pottery"], applications: ["陶器烧成", "低温陶瓷"], views: [{ period: "史前", text: "烧成的陶器不再溶于水，成为最早的耐储容器。" }], significance: "人类第一项「烧成」材料技术。" },
      { id: "pen_enclosure", name: "围栏与圈养", en: "Pen and Enclosure", category: "life", era: "prehistoric", date: "约 1.2 万年前", year: -12000,
        people: "新石器时代聚落", place: "新月沃地 / 黄河流域",
        summary: "以木桩、枝条围合圈舍，把捕获的动物固定饲养，是人类从狩猎采集走向畜牧的第一步，也是驯化的物质前提。",
        dependsOn: ["woodworking"], enables: ["domestication"], applications: ["牲畜圈养", "食物储备"], views: [{ period: "史前", text: "圈养让活体食物储备成为可能，聚落因而获得稳定蛋白来源。" }], significance: "畜牧业萌芽的载体。" }
    ];
    const NEW_MAP = {}; NEW_NODES.forEach(n => NEW_MAP[n.id] = n);

    // ---------- 定向修复表：child → 对其 dependsOn 的操作 ----------
    // remove: 删除的根依赖；add: 新增的依赖；replace: {from, to} 替换
    const EDGE_FIX = {
      "pottery":     { replace: { from: "fire", to: "open_firing" } },
      "fire_making": { replace: { from: "fire", to: "fire_drill" } },
      "domestication": { replace: { from: "fire", to: "pen_enclosure" } },
      "agriculture": { replace: { from: "stone_tools", to: "stone_hoe" } },
      "bow_arrow":   { add: ["mil_bow", "arrow"], remove: ["stone_tools"] },
      "mil_bow":     { remove: ["bow_arrow"] },
      "mfg_knife":   { remove: ["stone_tools", "fire", "mfg_stone"] },
      "mfg_handaxe": { remove: ["stone_tools"] },
      "symbolic_art":{ remove: ["stone_tools"] },
      "road":        { remove: ["stone_tools"] },
      "charcoal":    { remove: ["fire", "fire_drill"] },
      "bone_tools":  { replace: { from: "fire", to: "hearth_stove" } },
      "tr_raft":     { remove: ["fire"] },      // 木筏←独木舟已隐含用火
      "bld_rammed":  { remove: ["fire"] }       // 夯土：不应直接依赖用火
    };

    // ---------- 可接受长跳（语义直接 / 族内代际演进 / 新节点自身合理依赖，不计入待处理且不自动重连） ----------
    const ACCEPT = {
      "mfg_handaxe": ["mfg_stone"],    // 手斧 ← 石器打制：打制工艺的直接产物
      "mfg_knife":   ["mfg_handaxe"],  // 刀具 ← 手斧：工具族内演进
      "fire_making": ["fire_drill"],   // 人工取火 ← 钻木取火：上位能力对最早实现
      "bone_tools":  ["stone_tools"],  // 骨器 ← 石器：共享加工工艺传统
      "bone_tools":  ["hearth_stove"], // 骨器 ← 火塘与灶：骨料热处理
      "hearth_stove": ["fire"],        // 火塘与灶 ← 用火：受控用火的直接形态
      "fire_drill":  ["hearth_stove"], // 钻木取火 ← 火塘与灶：火种保存→主动生火
      "ground_stone": ["stone_tools"], // 磨制石器 ← 石器：石器工艺终极形态
      "arrow":       ["stone_tools"],  // 箭 ← 石器：石镞打制
      "open_firing": ["hearth_stove"]  // 露天烧陶 ← 火塘与灶：堆烧直接依赖火塘
    };
    // 合并 ACCEPT（同名键取并集）
    const ACCEPT_MERGED = {};
    Object.keys(ACCEPT).forEach(k => { ACCEPT_MERGED[k] = ACCEPT_MERGED[k] || []; ACCEPT[k].forEach(v => { if (!ACCEPT_MERGED[k].includes(v)) ACCEPT_MERGED[k].push(v); }); });

    // ---------- 数据 ----------
    const tm = {}; TECHS.forEach(t => tm[t.id] = t);

    // ---------- 0) 合并同名重复节点 ----------
    // 83 组「手工锚点 × 自动生成」双份：保留信息更全者，副节点引用全部重定向
    const byName = {}; TECHS.forEach(t => { (byName[t.name] = byName[t.name] || []).push(t); });
    const dupGroups = Object.values(byName).filter(a => a.length > 1);
    const refCnt = {};
    TECHS.forEach(t => { (t.dependsOn || []).forEach(d => refCnt[d] = (refCnt[d] || 0) + 1); (t.enables || []).forEach(e => refCnt[e] = (refCnt[e] || 0) + 1); });
    const remap = {};   // dupId -> mainId
    const dupSet = new Set();
    dupGroups.forEach(g => {
      g.sort((a, b) => (refCnt[b.id] || 0) - (refCnt[a.id] || 0) || (b.summary || "").length - (a.summary || "").length || (b.dependsOn || []).length - (a.dependsOn || []).length);
      const main = g[0];
      g.slice(1).forEach(d => { remap[d.id] = main.id; dupSet.add(d.id); });
    });
    const mergedCount = dupSet.size;

    const newDeps = {};
    TECHS.forEach(t => {
      if (dupSet.has(t.id)) return;
      newDeps[t.id] = (t.dependsOn || []).map(d => remap[d] || d).filter(d => d !== t.id);
    });
    // 主节点吸收副节点的依赖
    Object.keys(remap).forEach(dupId => {
      const mainId = remap[dupId];
      const dup = tm[dupId]; if (!dup) return;
      (dup.dependsOn || []).forEach(d => {
        const m = remap[d] || d;
        if (m !== mainId && !newDeps[mainId].includes(m)) newDeps[mainId].push(m);
      });
    });
    const nodesById = {};
    Object.keys(tm).forEach(id => { if (!dupSet.has(id)) nodesById[id] = tm[id]; });

    // ---------- 破环（合并可能引入互为依赖环） ----------
    function findCycle() {
      const col = {}; Object.keys(nodesById).forEach(id => col[id] = 0);
      function dfs(u, path) {
        col[u] = 1; path.push(u);
        for (const v of (newDeps[u] || [])) {
          if (!nodesById[v]) continue;
          if (col[v] === 1) { const i = path.indexOf(v); if (i >= 0) return path.slice(i); return null; }
          if (col[v] === 0) { const r = dfs(v, path); if (r) return r; }
        }
        path.pop(); col[u] = 2; return null;
      }
      for (const id of Object.keys(nodesById)) { if (col[id] === 0) { const c = dfs(id, []); if (c) return c; } }
      return null;
    }
    let brokenCycles = 0, guard = 0, c;
    while ((c = findCycle()) && guard++ < 1000) {
      // 删环中「year 最大」节点指向环内节点的第一条边
      let maxN = null;
      c.forEach(id => { const y = nodesById[id].year || 0; if (!maxN || y > maxN.y) maxN = { id, y }; });
      const idx = (newDeps[maxN.id] || []).findIndex(v => c.includes(v));
      if (idx < 0) break;
      newDeps[maxN.id].splice(idx, 1);
      brokenCycles++;
    }

    // ---------- 1.5) 倒置清理：合并重定向可能引入 A.year < R.year 的边 ----------
    let revFixed = 0;
    Object.keys(newDeps).forEach(id => {
      const A = nodesById[id]; if (typeof A.year !== "number") return;
      const nd = newDeps[id].filter(d => {
        const R = nodesById[d];
        if (!R || typeof R.year !== "number") return true;
        if (A.year < R.year) { revFixed++; return false; }
        return true;
      });
      newDeps[id] = nd;
    });

    const newNodes = [];
    function addNode(n) {
      if (nodesById[n.id]) return false; // 已存在
      newNodes.push(n);
      nodesById[n.id] = n;
      newDeps[n.id] = (n.dependsOn || []).slice();
      return true;
    }
    // 再注册新节点
    NEW_NODES.forEach(n => addNode(n));

    // ---------- 1) 定向修复 ----------
    let fixCount = 0;
    Object.keys(EDGE_FIX).forEach(cid => {
      if (!nodesById[cid]) return;
      let deps = newDeps[cid] || [];
      const fix = EDGE_FIX[cid];
      if (fix.replace) {
        const { from, to } = fix.replace;
        if (deps.includes(from)) {
          deps = deps.filter(d => d !== from);
          if (!deps.includes(to)) deps.push(to);
          fixCount++;
        }
      }
      if (fix.remove) { const before = deps.length; deps = deps.filter(d => !fix.remove.includes(d)); fixCount += before - deps.length; }
      if (fix.add) { fix.add.forEach(a => { if (!deps.includes(a)) deps.push(a); }); }
      newDeps[cid] = deps;
    });

    // ---------- 2) 自动重连（迭代直到稳定） ----------
    // 每轮重算 desc 闭包，重连长跳边；若新增节点打开了新路径则下一轮再修
    let relinkCount = 0, remainAfterAuto = 0;
    function descOf(rootId) {
      const seen = new Set();
      const q = (newDeps[rootId] ? [] : []).slice();
      // 反向：谁依赖 root → 从 root 出发沿「依赖」反向找后代，用 down 结构
      // 后代 = 直接或间接 dependsOn 含 root 的节点
      const downMap = {};
      Object.keys(nodesById).forEach(id => { (newDeps[id] || []).forEach(u => { (downMap[u] = downMap[u] || []).push(id); }); });
      const q2 = (downMap[rootId] || []).slice();
      q2.forEach(d => seen.add(d));
      while (q2.length) { const c = q2.shift(); (downMap[c] || []).forEach(d => { if (!seen.has(d)) { seen.add(d); q2.push(d); } }); }
      return seen;
    }
    for (let iter = 0; iter < 6; iter++) {
      // 建 downMap
      const downMap = {};
      Object.keys(nodesById).forEach(id => { (newDeps[id] || []).forEach(u => { (downMap[u] = downMap[u] || []).push(id); }); });
      let changed = 0;
      Object.keys(nodesById).forEach(Aid => {
        const A = nodesById[Aid];
        if (typeof A.year !== "number") return;
        const deps = newDeps[Aid] || [];
        const nd = deps.slice();
        deps.forEach(Rid => {
          const R = nodesById[Rid];
          if (!R || typeof R.year !== "number") return;
          if (A.year - R.year <= maxGap) return;
          // 白名单边：不自动重连，保持原样
          if (ACCEPT_MERGED[Aid] && ACCEPT_MERGED[Aid].includes(Rid)) return;
          // 找候选：R 的「3 跳内」传递后代中，year 介于 (R.year, A.year)，且与 A 相关
          // 限制距离可避免「同类最近年份」把无关技术乱连（如铸造→砖）
          const seen = new Set();
          let frontier = (downMap[Rid] || []).slice();
          frontier.forEach(d => seen.add(d));
          for (let hop = 1; hop < 3 && frontier.length; hop++) {
            const next = [];
            frontier.forEach(c => { (downMap[c] || []).forEach(d => { if (!seen.has(d)) { seen.add(d); next.push(d); } }); });
            frontier = next;
          }
          let best = null;
          seen.forEach(cid => {
            const C = nodesById[cid];
            if (!C || typeof C.year !== "number") return;
            if (C.year <= R.year || C.year >= A.year) return;
            const related = C.category === A.category || (A.summary || "").includes(C.name) || deps.includes(cid);
            if (!related) return;
            if (!best || C.year > best.year) best = C;
          });
          if (best) {
            const i = nd.indexOf(Rid);
            if (i >= 0) {
              if (nd.includes(best.id)) { nd.splice(i, 1); } // 已有中间层，删冗余根边
              else { nd[i] = best.id; }                        // 替换为更近的中间层
            }
            changed++; relinkCount++;
          }
        });
        newDeps[Aid] = nd;
      });
      if (changed === 0) break;
    }

    // ---------- 2.5) 破环：自动重连可能把边连回祖先形成环 ----------
    guard = 0; let c2;
    while ((c2 = findCycle()) && guard++ < 1000) {
      let maxN = null;
      c2.forEach(id => { const y = nodesById[id].year || 0; if (!maxN || y > maxN.y) maxN = { id, y }; });
      const idx = (newDeps[maxN.id] || []).findIndex(v => c2.includes(v));
      if (idx < 0) break;
      newDeps[maxN.id].splice(idx, 1);
      brokenCycles++;
    }

    // ---------- 3) 剩余长跳统计（排除 ACCEPT 白名单） ----------
    let remain = 0; const remainSample = [];
    Object.keys(nodesById).forEach(Aid => {
      const A = nodesById[Aid]; if (typeof A.year !== "number") return;
      (newDeps[Aid] || []).forEach(Rid => {
        const R = nodesById[Rid];
        if (R && typeof R.year === "number" && A.year - R.year > maxGap) {
          if (ACCEPT_MERGED[Aid] && ACCEPT_MERGED[Aid].includes(Rid)) return;
          remain++;
          if (remainSample.length < 12) remainSample.push({ child: A.name, cy: A.year, root: R.name, ry: R.year, gap: A.year - R.year });
        }
      });
    });
    remainAfterAuto = remain;

    // ---------- 环检测 ----------
    let cycle = false;
    const col = {}; Object.keys(nodesById).forEach(id => col[id] = 0);
    function dfs(u) { col[u] = 1; (newDeps[u] || []).forEach(v => { if (!nodesById[v]) return; if (col[v] === 1) { cycle = true; return; } if (col[v] === 0) dfs(v); }); col[u] = 2; }
    Object.keys(nodesById).forEach(id => { if (col[id] === 0) dfs(id); });

    // ---------- 校验 ----------
    let reversed = 0, missing = 0, edges = 0;
    Object.keys(newDeps).forEach(id => {
      const A = nodesById[id]; edges += newDeps[id].length;
      newDeps[id].forEach(d => { const R = nodesById[d]; if (!R) { missing++; return; } if (typeof R.year === "number" && typeof A.year === "number" && A.year < R.year) reversed++; });
    });

    return {
      maxGap, fixCount, relinkCount, remainAfterAuto, cycle, reversed, missing,
      edges, total: Object.keys(nodesById).length, remainSample,
      mergedCount, brokenCycles, remap,
      newNodesCount: newNodes.length,
      newDepsJSON: JSON.stringify(newDeps),
      newNodesJSON: JSON.stringify(newNodes),
      remapJSON: JSON.stringify(remap)
    };
  }, MAX_GAP);

  fs.writeFileSync(OUT_DEPS, res.newDepsJSON);
  fs.writeFileSync(OUT_NODES, res.newNodesJSON);
  fs.writeFileSync("/tmp/remap.json", res.remapJSON);
  console.log(JSON.stringify({
    maxGap: res.maxGap, total: res.total, edges: res.edges,
    mergedDups: res.mergedCount, brokenCycles: res.brokenCycles,
    newNodes: res.newNodesCount, fixCount: res.fixCount, relinkCount: res.relinkCount,
    remainAfterAuto: res.remainAfterAuto, reversed: res.reversed, missing: res.missing, cycle: res.cycle,
    remainSample: res.remainSample.slice(0, 6)
  }, null, 1));
  await browser.close();
})();
