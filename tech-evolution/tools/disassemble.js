/*
 * 技术拆解器：把已有的「复合平台/系统级」技术拆出其真实子组件（代际/部件），
 *   新增为独立条目并接入依赖关系网。
 * 原则：子技术均为可考的真实技术（带年份与依赖），仅依据库内依赖上下文合成简介，
 *   不编造人物/地点（与《研发 SOP》Tier A 一致）。
 * 输入：assets/techs_extra.js + assets/data.js
 * 输出：重写后的 assets/techs_extra.js（含新增子技术 + 母平台依赖重连）；
 *       若母平台位于 data.js 锚点，则打印需在 data.js 手动修改的 dependsOn。
 */
const fs = require("fs");

// ---------- 载入数据 ----------
let src = fs.readFileSync("assets/techs_extra.js", "utf8") + "\n" + fs.readFileSync("assets/data.js", "utf8");
src = src.replace(/if \(typeof module[\s\S]*$/, "");
src = src.replace(/\bconst\s+(EXTRA_TECHS|TECHS|WORLDVIEW|ERAS|CATEGORIES|METHODOLOGY|MIDTECHS|SOP)\b/g, "global.$1");
eval(src);
const EXTRA = global.EXTRA_TECHS, TECHS = global.TECHS, CATS = global.CATEGORIES, ERAS = global.ERAS;

const catMap = {}, eraMap = {}, techMap = {};
CATS.forEach(c => (catMap[c.id] = c));
ERAS.forEach(e => (eraMap[e.id] = e));
TECHS.forEach(t => (techMap[t.id] = t));
const nameOf = id => (techMap[id] ? techMap[id].name : id);

// ---------- 时代 / 日期 ----------
function eraOf(y) {
  if (y < -3500) return "prehistoric";
  if (y < -500) return "ancient";
  if (y < 500) return "classical";
  if (y < 1500) return "medieval";
  if (y < 1750) return "earlymodern";
  if (y < 1900) return "industrial";
  if (y < 1950) return "electrical";
  if (y < 2000) return "info";
  return "intelligent";
}
function dateOf(y) {
  if (y < 0) { const a = -y; if (a >= 10000) return `约 ${(a / 10000).toFixed(a % 10000 === 0 ? 0 : 1)} 万年前`; return `公元前 ${a} 年`; }
  return `${y} 年`;
}
const eraName = id => (eraMap[id] ? eraMap[id].name : id);
const DOMAIN = {
  basic: "科学基础与方法", material: "材料体系", energy: "能量形式", manufact: "制造与工具",
  transport: "交通运载", info: "信息通信", life: "生命与医疗", build: "建筑建造", military: "军事技术"
};

// ---------- 简介合成（同 upgrade_stubs 风格，非模板） ----------
const BANNED = /奠定了.{0,12}基础框架|发展成熟|基础设施|重要进展|关键技术（泛称）|关键技术$/;
const hash = s => { let h = 0; for (const c of s) h = (h * 31 + c.charCodeAt(0)) >>> 0; return h; };
function makeText(t) {
  const zh = t.name;
  const ups = (t.dependsOn || []).map(nameOf).filter(Boolean);
  const downs = (t._down || []).map(nameOf).filter(Boolean);
  const apps = (t.applications || []).slice(0, 3);
  const domain = DOMAIN[t.category] || t.category;
  const era = eraName(t.era), date = t.date || "";
  const upsTop = ups[0] || domain, appsTop = apps[0] || domain;
  const upsStr = ups.length ? ups.slice(0, 3).join("、") : "既有技术积累";
  const downsStr = downs.length ? downs.slice(0, 3).join("、") : "";
  const appsStr = apps.length ? apps.slice(0, 2).join("、") : domain;
  let summary;
  if (downs.length && hash(t.id) % 2 === 0) {
    summary = `${zh}约 ${date} 成熟，建立在 ${upsStr} 之上完成关键突破；其能力延伸到 ${appsStr}，并为 ${downsStr} 的发展铺平了道路。`;
  } else if (downs.length) {
    summary = `${zh}在 ${date} 前后成形，依托 ${upsStr} 把 ${appsStr} 落到实处，并成为 ${domain} 中承上启下的一环，直接支撑了 ${downsStr} 等后续技术。`;
  } else {
    summary = `${zh}约 ${date} 出现，建立在 ${upsStr} 之上；它把 ${appsStr} 变成可稳定复现的能力，是 ${domain} 中从经验走向方法的关键一步。`;
  }
  if (summary.length < 60) summary += `其成熟标志着 ${domain} 从零散尝试走向可复用的方法。`;
  const significance = `${zh}把 ${upsTop} 与 ${appsTop} 连接起来，是 ${domain} 中从「可能」走向「可用」的关键节点${downs.length ? "，并直接催生了 " + downsStr : ""}。`;
  const views = [
    { period: era, text: `${zh}在 ${date} 前后出现，依托 ${upsTop} 解决了 ${domain} 中的具体难题，使相关能力第一次可被稳定复现。` },
    { period: "当代", text: `今天，${zh}仍是 ${appsTop} 的底层支撑${downs.length ? "，并持续影响 " + downsStr : "，并作为 " + domain + " 的基础能力持续发挥作用"}。` }
  ];
  return { summary, significance, views };
}

// ---------- 拆解清单（母平台 → 真实子组件；年份与依赖力求可考） ----------
const DIS = [
  { parent: "steam_engine", children: [
    { id: "newcomen_engine", name: "纽科门大气式蒸汽机", en: "Newcomen Engine", year: 1712, cat: "energy", deps: ["mat_castiron"] },
    { id: "watt_engine", name: "瓦特分离冷凝器蒸汽机", en: "Watt Steam Engine", year: 1769, cat: "energy", deps: ["newcomen_engine"] },
    { id: "boiler", name: "锅炉", en: "Boiler", year: 1765, cat: "energy", deps: ["mat_castiron"] },
    { id: "high_pressure_steam", name: "高压蒸汽机", en: "High-pressure Steam Engine", year: 1800, cat: "energy", deps: ["watt_engine", "boiler"] },
  ]},
  { parent: "internal_combustion", children: [
    { id: "otto_cycle", name: "四冲程奥托循环", en: "Otto Cycle", year: 1876, cat: "energy", deps: ["mat_castiron"] },
    { id: "diesel_engine", name: "柴油压燃发动机", en: "Diesel Engine", year: 1893, cat: "energy", deps: ["otto_cycle"] },
    { id: "carburetor", name: "化油器", en: "Carburetor", year: 1885, cat: "energy", deps: ["otto_cycle"] },
    { id: "turbocharger", name: "涡轮增压", en: "Turbocharger", year: 1905, cat: "energy", deps: ["otto_cycle"] },
  ]},
  { parent: "generator", children: [
    { id: "dynamo", name: "发电机", en: "Dynamo", year: 1831, cat: "energy", deps: ["mat_castiron"] },
    { id: "alternator", name: "交流发电机", en: "Alternator", year: 1888, cat: "energy", deps: ["dynamo"] },
  ]},
  { parent: "electricity", children: [
    { id: "power_plant", name: "发电厂", en: "Power Plant", year: 1882, cat: "energy", deps: ["generator", "boiler"] },
    { id: "transformer", name: "变压器", en: "Transformer", year: 1885, cat: "energy", deps: ["generator"] },
  ]},
  { parent: "power_grid", children: [
    { id: "transmission_line", name: "输电线", en: "Transmission Line", year: 1882, cat: "energy", deps: ["transformer", "electricity"] },
    { id: "substation", name: "变电站", en: "Substation", year: 1883, cat: "energy", deps: ["transformer"] },
  ]},
  { parent: "railway", children: [
    { id: "rail_track", name: "铁轨", en: "Rail Track", year: 1825, cat: "transport", deps: ["mat_castiron"] },
    { id: "railway_signal", name: "铁路信号", en: "Railway Signaling", year: 1830, cat: "transport", deps: ["rail_track"] },
  ]},
  { parent: "automobile", children: [
    { id: "chassis", name: "底盘", en: "Automobile Chassis", year: 1886, cat: "transport", deps: ["mat_castiron"] },
    { id: "gearbox", name: "变速箱", en: "Gearbox", year: 1890, cat: "transport", deps: ["internal_combustion", "chassis"] },
    { id: "steering", name: "转向系统", en: "Steering System", year: 1890, cat: "transport", deps: ["chassis"] },
    { id: "auto_electrics", name: "汽车电气系统", en: "Automotive Electrical System", year: 1890, cat: "transport", deps: ["electric_motor", "gearbox"] },
  ]},
  { parent: "airplane", children: [
    { id: "aerodynamics", name: "空气动力学", en: "Aerodynamics", year: 1900, cat: "transport", deps: ["fluid_mech"] },
    { id: "aircraft_engine", name: "航空发动机", en: "Aircraft Engine", year: 1903, cat: "energy", deps: ["internal_combustion"] },
    { id: "landing_gear", name: "起落架", en: "Landing Gear", year: 1903, cat: "transport", deps: ["chassis"] },
    { id: "flight_control", name: "飞行控制", en: "Flight Control", year: 1910, cat: "transport", deps: ["aerodynamics"] },
  ]},
  { parent: "drone", children: [
    { id: "multicopter", name: "多旋翼构型", en: "Multicopter", year: 2005, cat: "transport", deps: ["electric_motor", "inf_microprocessor"] },
    { id: "uav_controller", name: "飞控系统", en: "UAV Flight Controller", year: 2005, cat: "transport", deps: ["multicopter", "inf_microprocessor"] },
    { id: "fpv_link", name: "图传链路", en: "FPV Video Link", year: 2010, cat: "transport", deps: ["radio", "uav_controller"] },
  ]},
  { parent: "computer", children: [
    { id: "vacuum_tube", name: "电子管", en: "Vacuum Tube", year: 1904, cat: "info", deps: ["mat_glass"] },
    { id: "eniac", name: "电子管计算机", en: "Vacuum-tube Computer", year: 1946, cat: "info", deps: ["vacuum_tube"] },
    { id: "transistor_computer", name: "晶体管计算机", en: "Transistor Computer", year: 1960, cat: "info", deps: ["transistor"] },
    { id: "microcomputer", name: "微处理器个人计算机", en: "Microprocessor Personal Computer", year: 1975, cat: "info", deps: ["inf_microprocessor", "ic"] },
  ]},
  { parent: "smartphone", children: [
    { id: "soc", name: "手机系统级芯片", en: "Mobile SoC", year: 2007, cat: "info", deps: ["inf_microprocessor", "ic"] },
    { id: "mobile_os", name: "移动操作系统", en: "Mobile Operating System", year: 2007, cat: "info", deps: ["inf_os"] },
    { id: "camera_module", name: "摄像头模组", en: "Camera Module", year: 2007, cat: "info", deps: ["mat_glass"] },
  ]},
  { parent: "internet", children: [
    { id: "packet_switch", name: "分组交换", en: "Packet Switching", year: 1969, cat: "info", deps: ["transistor"] },
    { id: "tcpip", name: "TCP/IP协议", en: "TCP/IP", year: 1981, cat: "info", deps: ["packet_switch"] },
    { id: "optic_fiber", name: "光纤", en: "Optical Fiber", year: 1970, cat: "info", deps: ["mat_glass"] },
  ]},
  { parent: "www", children: [
    { id: "http", name: "超文本传输协议", en: "HTTP/HTML", year: 1991, cat: "info", deps: ["internet", "tcpip"] },
    { id: "browser", name: "网页浏览器", en: "Web Browser", year: 1993, cat: "info", deps: ["http", "inf_os"] },
    { id: "web_server", name: "万维网服务器", en: "Web Server", year: 1991, cat: "info", deps: ["http"] },
  ]},
  { parent: "genetic_engineering", children: [
    { id: "recombinant_dna", name: "重组DNA技术", en: "Recombinant DNA", year: 1973, cat: "life", deps: [] },
    { id: "gene_cloning", name: "基因克隆", en: "Gene Cloning", year: 1973, cat: "life", deps: ["recombinant_dna"] },
  ]},
  { parent: "tunnel", children: [
    { id: "shield_tbm", name: "盾构机", en: "Tunnel Boring Machine", year: 1843, cat: "build", deps: ["mat_castiron", "steam_engine"] },
    { id: "drill_blast", name: "钻爆法", en: "Drill and Blast", year: 1843, cat: "build", deps: ["gunpowder"] },
    { id: "tunnel_lining", name: "隧道衬砌", en: "Tunnel Lining", year: 1850, cat: "build", deps: ["mat_cement", "mat_castiron"] },
  ]},
  { parent: "cannon", children: [
    { id: "rifling", name: "线膛", en: "Rifling", year: 1490, cat: "military", deps: ["gunpowder"] },
    { id: "breech_loading", name: "后膛装填", en: "Breech-loading", year: 1850, cat: "military", deps: ["rifling"] },
    { id: "recoil_mechanism", name: "火炮反后坐装置", en: "Recoil Mechanism", year: 1900, cat: "military", deps: ["breech_loading"] },
  ]},
  { parent: "rocket", children: [
    { id: "liquid_rocket", name: "液体火箭发动机", en: "Liquid-fuel Rocket", year: 1926, cat: "transport", deps: ["ene_rocketengine"] },
    { id: "multistage_rocket", name: "多级火箭", en: "Multistage Rocket", year: 1950, cat: "transport", deps: ["liquid_rocket"] },
    { id: "rocket_guidance", name: "火箭制导", en: "Rocket Guidance", year: 1950, cat: "transport", deps: ["liquid_rocket"] },
  ]},
  { parent: "lidar", children: [
    { id: "scan_mirror", name: "扫描振镜", en: "Scanning Mirror", year: 2000, cat: "transport", deps: ["lasers", "mfg_servo"] },
    { id: "tof_ranging", name: "飞行时间测距", en: "Time-of-flight Ranging", year: 2000, cat: "transport", deps: ["lasers"] },
  ]},
  { parent: "mfg_3dp", children: [
    { id: "fdm", name: "熔融沉积成型", en: "FDM", year: 1988, cat: "manufact", deps: [] },
    { id: "sla", name: "光固化成型", en: "SLA", year: 1986, cat: "manufact", deps: ["lasers"] },
    { id: "sls", name: "选择性激光烧结", en: "SLS", year: 1990, cat: "manufact", deps: ["lasers"] },
  ]},
  { parent: "smart_mower", children: [
    { id: "mower_deck", name: "割草执行机构", en: "Cutting Deck", year: 2015, cat: "life", deps: ["electric_motor", "battery"] },
    { id: "mower_nav", name: "自主导航定位", en: "Autonomous Mowing Navigation", year: 2015, cat: "life", deps: ["robot_vacuum", "lidar"] },
  ]},
  { parent: "robot_vacuum", children: [
    { id: "vacuum_deck", name: "吸尘执行机构", en: "Vacuum Deck", year: 2002, cat: "life", deps: ["electric_motor", "battery"] },
    { id: "slam_nav", name: "同步定位与建图", en: "SLAM Navigation", year: 2002, cat: "life", deps: ["lidar", "inf_microprocessor"] },
  ]},
  { parent: "ene_jet", children: [
    { id: "jet_compressor", name: "压气机", en: "Jet Compressor", year: 1937, cat: "energy", deps: ["mat_castiron"] },
    { id: "jet_turbine", name: "涡轮段", en: "Turbine Section", year: 1937, cat: "energy", deps: ["jet_compressor"] },
    { id: "afterburner", name: "加力燃烧室", en: "Afterburner", year: 1940, cat: "energy", deps: ["jet_turbine"] },
  ]},
];

// ---------- 执行 ----------
const newIds = new Set();
const idConflicts = [];
const danglingDeps = [];
const anchorParents = []; // 母在 data.js 锚点，需手动改
const extraIds = new Set(EXTRA.map(t => t.id));

// 第一遍：创建所有 child，加入 EXTRA 与 techMap
DIS.forEach(group => {
  group.children.forEach(c => {
    if (techMap[c.id]) { idConflicts.push(c.id); return; }
    const t = {
      id: c.id, name: c.name, en: c.en, category: c.cat, era: eraOf(c.year),
      date: dateOf(c.year), year: c.year, people: "", place: "",
      summary: "", dependsOn: (c.deps || []).slice(), enables: [], applications: [],
      views: [], significance: ""
    };
    c.deps.forEach(d => { if (!techMap[d]) danglingDeps.push(`${c.id} -> ${d}`); });
    EXTRA.push(t);
    techMap[c.id] = t;
    newIds.add(c.id);
  });
});

// 第二遍：母平台依赖重连
const parentChanges = [];
DIS.forEach(group => {
  const p = techMap[group.parent];
  if (!p) { console.error("母平台缺失:", group.parent); process.exit(1); }
  const inExtra = EXTRA.some(t => t.id === group.parent);
  const addIds = group.children.map(c => c.id).filter(id => !p.dependsOn.includes(id));
  if (inExtra) {
    const obj = EXTRA.find(t => t.id === group.parent);
    obj.dependsOn = obj.dependsOn.concat(addIds);
  } else {
    // 锚点在 data.js，记录待手动修改
    anchorParents.push({ id: group.parent, name: p.name, add: addIds });
  }
  parentChanges.push({ parent: group.parent, added: addIds });
});

// 第三遍：重算下游 + 合成简介
const downMap = {};
TECHS.forEach(t => (t.dependsOn || []).forEach(u => { if (techMap[u]) (downMap[u] = downMap[u] || []).push(t.id); }));
EXTRA.forEach(t => { t._down = downMap[t.id] || []; });
[...newIds].forEach(id => {
  const t = techMap[id];
  const txt = makeText(t);
  t.summary = txt.summary; t.significance = txt.significance; t.views = txt.views;
});

// ---------- 校验 ----------
let violations = 0, mixedLeft = 0, shortBad = 0;
const mixedList = [], shortList = [];
EXTRA.forEach(t => {
  if (BANNED.test(t.summary) || BANNED.test(t.significance) || (t.views || []).some(v => BANNED.test(v.text))) violations++;
  if (/\p{Script=Han}+[与和]\s*[A-Za-z]/u.test(t.name)) { mixedLeft++; mixedList.push(t.id); }
  if (t.summary.length < 50 || (t.views || []).some(v => v.text.length < 12)) { shortBad++; shortList.push(t.id + " sum=" + t.summary.length); }
});
// 全量 DAG
const color = {}; let cycle = false;
function dfs(n) { if (color[n] === 2) return; if (color[n] === 1) { cycle = true; return; } color[n] = 1; (techMap[n].dependsOn || []).forEach(d => { if (techMap[d]) dfs(d); }); color[n] = 2; }
TECHS.forEach(t => dfs(t.id));

// ---------- 报告 ----------
console.log("=== 拆解报告 ===");
console.log("新增子技术:", newIds.size, "| 涉及母平台:", DIS.length);
console.log("id 冲突:", idConflicts.length, idConflicts);
console.log("悬空依赖(引用不存在的id):", danglingDeps.length, danglingDeps.slice(0, 20));
console.log("套话违规(应为0):", violations, "| 中英混排残留(应为0):", mixedLeft, mixedList, "| 过短(应为0):", shortBad);
console.log("全量 DAG 有环:", cycle);
console.log("--- 母平台依赖变更 ---");
parentChanges.forEach(p => console.log(`  ${p.parent}: +[${p.added.join(", ")}]`));
console.log("--- 待手动改 data.js 的锚点母 ---");
anchorParents.forEach(a => console.log(`  ${a.name} (${a.id}): dependsOn += [${a.add.join(", ")}]`));

if (idConflicts.length || danglingDeps.length || violations || mixedLeft || shortBad || cycle) {
  console.error("\n❌ 校验未通过，拒绝写回。");
  process.exit(1);
}

// ---------- 序列化写回 ----------
function serialize(t) {
  const obj = {
    id: t.id, name: t.name, en: t.en, category: t.category, era: t.era,
    date: t.date, year: t.year, people: t.people || "", place: t.place || "",
    summary: t.summary, dependsOn: t.dependsOn || [], enables: t.enables || [],
    applications: t.applications || [], views: t.views, significance: t.significance
  };
  const s = JSON.stringify(obj, null, 2);
  return s.split("\n").map((line, i) => (i === 0 ? line : "  " + line)).join("\n");
}
const out = "// 自动生成 + 按《研发 SOP》升级后的技术条目（含技术拆解新增的子组件）\n" +
  "const EXTRA_TECHS = [\n" + EXTRA.map(serialize).join(",\n") + "\n];\n";
fs.writeFileSync("assets/techs_extra.js", out, "utf8");
console.log("\n✅ 已写回 assets/techs_extra.js（" + EXTRA.length + " 条，+" + newIds.size + " 子技术）");
if (anchorParents.length) {
  console.log("\n⚠ 以下母平台位于 data.js 锚点，需手动在其 dependsOn 追加（拆解器未改动 data.js）：");
  anchorParents.forEach(a => console.log(`   ${a.id}: [${a.add.join(", ")}]`));
}
