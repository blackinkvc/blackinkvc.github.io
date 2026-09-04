# 🏍️ 西安 → 包头 摩旅方案（网站版）

> **在线浏览**：直接打开 `index.html` → 浏览整个站点
> **打印**：每个 HTML 都内置 print 样式，⌘P 即可存 PDF

**5 天 4 晚 · 1,180 公里 · 总预算 ≈ ¥2,600 / 人**
**设计主题**：创意营销 · 活力橙 → 霓虹粉 → 神秘紫渐变

---

## 🌐 网站结构（7 个页面）

> 信息架构按"**吸引 → 规划 → 落地 → 决策 → 行动**"漏斗排列

### 1️⃣ 首页 [index.html](./index.html)
- 全屏 hero + 暗色 mesh 渐变
- 大字标题 `西安 → 包头`
- 4 大 KPI 浮动玻璃卡
- 5 天路线路径 SVG
- 5 天预览卡片（hover 时变色 + 高亮）
- 3 大特色
- 三件 CTA（开始旅程 / 看预算 / 读装备）

### 2️⃣ 行程概览 [pages/overview.html](./pages/overview.html)
- 4 大核心 KPI
- **SVG 地图** —— 7 城可视 + 路线连接线 + 图例
- 时间轴 Timeline —— 5 天节奏（左 marker + 渐变线）
- 三段地形切换

### 3️⃣ 每日打卡 [pages/days.html](./pages/days.html)
- 5 张主卡（Day 1–5，5 色渐变区分）
- 3 张备卡：① 出发前夜 ② 3 天压缩版 ③ 进阶 +1 天
- 每张卡含路线、打卡点、必吃、警告、一句金句

### 4️⃣ 完整路线手册 [pages/manual.html](./pages/manual.html)
- 11 章目录导航
- 5 天详解（含路线 / 必看 / 必吃 / 警告 / 金句）
- 3 天压缩版
- 装备 / 季节 / 安全 / 进阶 / 美食 / 联系 / checklist / 预算概览

### 5️⃣ 预算清单 [pages/budget.html](./pages/budget.html)
- **¥2,600 Hero 卡** —— 6 个 tag 列出细项
- **占比条形图** —— 6 大类金额可视化
- 4 个表格：油费 / 过路 / 住宿 / 餐饮 / 门票 / 杂费
- **3 档对比卡片**（标准版放大强调）
- 6 维度省钱攻略
- **黑底速算卡** —— 随身带

### 6️⃣ 装备 & 安全 [pages/gear.html](./pages/gear.html)
- 装备清单（5 大类 + 表格）
- **11 条安全提醒** —— 编号彩色卡片
- 季节天气速查表
- 6 个紧急联系卡（110/120/119/122/12122/摩旅协会）
- 出发前 24 h checklist

### 7️⃣ 关于 [pages/about.html](./pages/about.html)
- 设计令牌说明
- 5 个色板预览
- 5 个常见 FAQ
- 版本迭代记录

---

## 🖨 打印版（保留旧版本，便于剪贴）

| 文件 | 用途 |
|------|------|
| [01-打卡卡片.html](./01-打卡卡片.html) | A4 4 张/页打印，沿虚线剪开贴冰箱 |
| [02-路线手册.md](./02-路线手册.md) | Markdown 备忘录版 |
| [03-路线手册.html](./03-路线手册.html) | 打印版完整手册 |
| [04-预算清单.md](./04-预算清单.md) | Markdown 预算 |
| [05-预算清单.html](./05-预算清单.html) | 打印版预算 |

> 💡 网站版（pages/）替代了旧打印版（01–05）的功能，但保留旧版本以兼容"贴冰箱"的剪纸需求。

---

## 🎨 设计令牌

所有页面共享 [`assets/style.css`](./assets/style.css)，基于 `design-token` skill 的 `marketing-doc` 主题：

| 用途 | 取值 |
|------|------|
| 主色（活力橙） | `#FF6B35` |
| 次色（霓虹粉） | `#FF3CAC` |
| 第三色（神秘紫） | `#784BA0` |
| 第四色（活力蓝） | `#2B86C5` |
| 强调色（亮黄） | `#F9D649` |
| Hero 渐变 | `linear-gradient(135deg, #FF6B35 0%, #FF3CAC 50%, #784BA0 100%)` |
| 中文字体 | 阿里巴巴普惠体 → PingFang SC → 微软雅黑 |
| 英文 / 数字字体 | Poppins → Helvetica Neue |

**改一个颜色，全站同步**：编辑 `assets/style.css` `:root` 即可。

---

## 📂 文件树

```
西安到包头摩旅方案/
├── index.html              ← 首页
├── assets/
│   └── style.css           ← 共享样式（所有页面共用）
├── pages/                  ← 6 个子页面
│   ├── overview.html       ← 行程概览
│   ├── days.html           ← 每日打卡
│   ├── manual.html         ← 路线手册
│   ├── budget.html         ← 预算清单
│   ├── gear.html           ← 装备 & 安全
│   └── about.html          ← 关于
├── 01-打卡卡片.html        ← 旧：可打印版
├── 02-路线手册.md          ← 旧：Markdown 版
├── 03-路线手册.html        ← 旧：可打印手册
├── 04-预算清单.md          ← 旧：Markdown 预算
├── 05-预算清单.html        ← 旧：可打印预算
└── README.md               ← 本文件
```

---

## 🚀 立即开始

```bash
# macOS — 直接打开首页
open index.html

# 或用 Python 起本地服务器（更稳，链接跳转更可靠）
python3 -m http.server 8000
# → 浏览器访问 http://localhost:8000
```

---

## ✏️ 二次定制

| 需求 | 改哪 |
|------|------|
| 换主色（橙 → 蓝） | `assets/style.css :root { --c-primary: #2B86C5; }` |
| 调整行程天数 | `pages/days.html` 加 `<article class="day-block d6">…</article>` |
| 改预算数字 | `pages/budget.html` 搜索 `460` 全局替换 |
| 加装备类目 | `pages/gear.html` 加一个 `gear-cat` 块 |
| 加 FAQ | `pages/about.html` 复制一个 `faq-item` |

> 不需要懂 CSS —— 跟着现有卡片 / 段落结构「复制 → 改文字」就行。

---

_设计版本 v1.0 · 2026 年 9 月 5 日_
_使用 doc-typeset & design-token skill 设计_
