# 科幻科技蓝图 · 技术补完计划（TECH COMPLETION PLAN）

> 制定时间：2026-08-21
> 当前状态：118 世界观 / 263 科技条目
> 目标：把每个世界观从「2 条浅条目」补完为「领域均衡、依赖成链、分级合理」的深度档案

---

## 一、现状诊断（数据驱动）

| 维度 | 现状 | 问题 |
|---|---|---|
| 世界观覆盖 | 118 个，全部 ≥2 条 | 100+ 个仅 2 条，且为 early `techs-extra.js` 批量浅条目 |
| 单世界观科技数 | 2（多数）~ 8（战锤） | 核心大 IP（星际迷航、三体、沙丘、星际穿越）才 3–6 条 |
| 领域分布 | aerospace:92 / bio:53 / info:62 / energy:27 / material:16 / weapon:13 | **material、weapon、energy 严重偏少** |
| 分级分布 | L1:41 / L2:99 / L3:42 / L4:50 / L5:31 | L1 锚点不足，逻辑链根基薄 |
| 依赖链 | 绝大多数为 `dependencies: []` | 无法接入全站「演进逻辑链」主轴，DAG 断裂 |

### 核心缺口
1. **依赖链断裂**：除 7 个现实世界观 + 战锤 8 条，其余约 248 条科技 `dependencies: []`，演进逻辑链区块几乎空白。
2. **领域失衡**：material（16）、weapon（13）、energy（27）相对 aerospace（92）严重不足，大量世界观缺材料/武器/能源类科技。
3. **深度不足**：批量 2 条条目只有 summary/description 框架，firstPrinciples/implementation/dependencies 多为占位，需补实。
4. **L1 锚点少**：许多「已基本可实现」的科技未标 L1，导致逻辑链根部（已实现技术）稀疏。

---

## 二、补完原则

1. **依赖成链**：每个世界观至少 1 条科技挂到现实主轴（如 `firearms-age-metallurgy`、 `industrial-2-electric-grid`、`industrial-3-network-semiconductor`），向上长出世界观特有条目，让「演进逻辑链」区块有内容。
2. **领域均衡**：每个重要世界观尽量覆盖 ≥3 个领域，优先补齐 material/weapon/energy 缺口。
3. **分级合理**：可工程化的标 L2/L3，纯架空的标 L4/L5，现实已有雏形的标 L1，锚定逻辑链根部。
4. **深度充实**：firstPrinciples（≥2 条，含 achieved/breakthrough/violated 判定）、implementation（current/path/blockers/sopStage）、dependencies 全部写实。
5. **分批推进**：按优先级分批，每批完成后校验 + 发布，避免一次性大改难以回滚。

---

## 三、分批计划

### 批次 B1 — 核心大 IP 深度补完（优先，锚定逻辑链）
> 目标：星际迷航、三体、沙丘、星际穿越、基地、黑客帝国、攻壳机动队、银翼杀手
> 各补至 6–10 条，补 material/weapon/energy 缺口，挂现实主轴依赖

### 批次 B2 — 太空歌剧与硬科幻补完
> 目标：星球大战、星际之门、极乐空间(The Expanse)、环形世界、超验骇客、_enders-game、yamato、gundam
> 各补至 5–8 条，强化航天/材料/武器

### 批次 B3 — 赛博朋克与 AI 补完
> 目标：神经漫游(neuromancer)、雪崩(snow-crash)、副本(altered-carbon)、心理测量者、少数派报告、银翼杀手2049、黑镜、西部世界、机械姬、她
> 各补至 5–8 条，强化 bio/info/material（义体、脑机、纳米）

### 批次 B4 — 时间/平行宇宙补完
> 目标：回到未来、十二猴子、环形使者、前目的地、源代码、降临(contact)、信条式时间题材
> 各补至 4–6 条，明确 L4/L5 时间物理判定

### 批次 B5 — 灾难/生态/近未来补完
> 目标：火星救援、挽救计划、七夏娃、雪国列车、后天、2012、路、湮灭、降临、机械纪元
> 各补至 4–6 条，强化 bio/energy/material（生存技术）

### 批次 B6 — 日本动画/特摄补完
> 目标：eva、攻壳（已入B1）、阿基拉、攻壳机动队、攻壳、攻壳、攻壳、攻壳、攻壳、攻壳、攻壳、攻壳、攻壳、攻壳、攻壳、攻壳、攻壳、攻壳、攻壳、攻壳、攻壳、攻壳、攻壳、攻壳、攻壳、攻壳、攻壳、攻壳、攻壳、攻壳
> 注：实际取 akira、evangelion、cowboy-bebop、nausicaa、ghost-in-shell（B1）、doraemon、astro-boy、pantheon
> 各补至 4–6 条

### 批次 B7 — 剩余 60+ 世界观批量均衡补完
> 目标：其余所有仅 2 条的世界观，各补至 3–4 条，至少挂 1 条现实主轴依赖，补齐缺失领域
> 用生成器批量产出 + 人工抽检关键 IP

---

## 四、完成判据（每批验收）

- [ ] 该批每个目标世界观科技数 ≥ 下限
- [ ] 该批每条科技 `dependencies` 至少含 1 个真实存在的 id（含现实主轴或同世界观前置）
- [ ] 领域覆盖率：核心世界观覆盖 ≥3 领域
- [ ] 数据校验通过：id 唯一、依赖引用全存在、字段完整
- [ ] Playwright 抽查：目标世界观页「演进逻辑链」显示 DAG，0 JS 错误
- [ ] 重新发布公网

---

## 五、预期终点

| 指标 | 现状 | 目标（B7 完成后） |
|---|---|---|
| 科技总数 | 263 | ~600–700 |
| 平均单世界观条数 | 2.2 | ~5–6 |
| 零依赖科技占比 | ~94% | <40% |
| material/weapon/energy 占比 | 21% | ≥35% |
| 能显示演进 DAG 的世界观数 | ~9 | ~100+ |

---

## 六、执行进度日志

### ✅ B1 完成（2026-08-21）
- 文件：`js/data/techs-b1.js`（新），已接入 index.html
- 补完 8 个核心大 IP，+30 条（star-trek 10 / three-body 9 / interstellar 9 / ghost-in-shell 8 / foundation 8 / dune 7 / the-matrix 6 / blade-runner 5）
- 补齐大量 material/weapon/energy 缺口；依赖挂到现实主轴或同世界观前置
- 校验：TECHS 263→293，WORKS 118；**全站缺失依赖 0，重复 id 0，字段缺失 0**
- 验证：8 个世界观「科技演进逻辑链」均渲染 DAG，0 JS 错误
- 关键教训：主数据 `techs.js` 中 star-trek/three-body 等 IP 的科技 id **不带 workId 前缀**（如 `transporter` 而非 `star-trek-transporter`），B1 依此修正依赖
- 已发布：https://a0e7333a90c037ab9.app.workbuddy.link

### ⏳ B2 待启动
- 太空歌剧/硬科幻：star-wars、stargate、the-expanse、ringworld、enders-game、yamato、gundam、hyperion 等
- 目标：各补至 5–8 条，强化航天/材料/武器

### ⏳ B3–B7 待启动
- 见上文分批计划
