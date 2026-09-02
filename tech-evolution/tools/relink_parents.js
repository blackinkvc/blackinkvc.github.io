/*
 * 把拆解器新增的子技术 id 接入 data.js 手工锚点母平台的 dependsOn。
 * 行式精确匹配：仅在 `id:"X"` 所在行之后 8 行内定位 dependsOn，绝不跨对象。
 */
const fs = require("fs");

const LINK = {
  steam_engine: ["newcomen_engine", "watt_engine", "boiler", "high_pressure_steam"],
  internal_combustion: ["otto_cycle", "diesel_engine", "carburetor", "turbocharger"],
  generator: ["dynamo", "alternator"],
  electricity: ["power_plant", "transformer"],
  power_grid: ["transmission_line", "substation"],
  railway: ["rail_track", "railway_signal"],
  automobile: ["chassis", "gearbox", "steering", "auto_electrics"],
  airplane: ["aircraft_engine", "landing_gear", "flight_control"],
  drone: ["multicopter", "uav_controller", "fpv_link"],
  computer: ["vacuum_tube", "eniac", "transistor_computer", "microcomputer"],
  smartphone: ["soc", "mobile_os", "camera_module"],
  internet: ["packet_switch", "tcpip", "optic_fiber"],
  www: ["http", "browser", "web_server"],
  genetic_engineering: ["recombinant_dna", "gene_cloning"],
  tunnel: ["shield_tbm", "drill_blast", "tunnel_lining"],
  cannon: ["rifling", "breech_loading", "recoil_mechanism"],
  rocket: ["liquid_rocket", "multistage_rocket", "rocket_guidance"],
  lidar: ["scan_mirror", "tof_ranging"],
  smart_mower: ["mower_deck", "mower_nav"],
  robot_vacuum: ["vacuum_deck", "slam_nav"],
};

let lines = fs.readFileSync("assets/data.js", "utf8").split("\n");
const report = [];

Object.keys(LINK).forEach(parent => {
  const add = LINK[parent];
  let idx = -1;
  for (let i = 0; i < lines.length; i++) { if (lines[i].includes(`id:"${parent}"`)) { idx = i; break; } }
  if (idx < 0) { report.push(`${parent}: 不在 data.js（应在 techs_extra 已改好），跳过`); return; }
  let dLine = -1;
  for (let j = idx; j < Math.min(idx + 8, lines.length); j++) { if (lines[j].includes("dependsOn:")) { dLine = j; break; } }
  if (dLine < 0) { report.push(`${parent}: 对象内无 dependsOn，跳过`); return; }
  const m = lines[dLine].match(/dependsOn:\[([^\]]*)\]/);
  if (!m) { report.push(`${parent}: dependsOn 解析失败，跳过`); return; }
  const existing = m[1].split(",").map(s => s.trim()).filter(Boolean); // 保留原引号
  const toAdd = add.filter(x => !existing.includes(`"${x}"`));
  if (!toAdd.length) { report.push(`${parent}: 已含子技术，跳过`); return; }
  const newInner = (existing.length ? existing.join(", ") + ", " : "") + toAdd.map(x => `"${x}"`).join(", ");
  lines[dLine] = lines[dLine].replace(/dependsOn:\[([^\]]*)\]/, `dependsOn:[${newInner}]`);
  report.push(`${parent}: +[${toAdd.join(", ")}]`);
});

fs.writeFileSync("assets/data.js", lines.join("\n"), "utf8");
console.log("=== data.js 母平台依赖重连（行式） ===");
report.forEach(r => console.log("  " + r));
const changed = report.filter(r => r.includes("+[")).length;
console.log("✅ 已写回 assets/data.js（" + changed + " 个母对象修改）");
