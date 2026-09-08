---
layout: study
title: "小项目研究 · 使用说明（内部文档，不进首页）"
date: 2026-09-09
summary: "本文件夹（_studies/）是「小项目研究」的内容源。每放一个 .md 文件，GitHub Pages 就会自动生成一页 /studies/<文件名>/。这份文档说明约定与写法。"
exclude_from_index: true
tags:
  - 说明
---

## 这是干什么的

`_studies/` 是一个 Jekyll collection（集合）。任何放进去的 `.md` 文件，都会被自动渲染成一篇独立网页，访问地址是 `/studies/<文件名>/`——文件名就是 slug，建议用英文短横，例如 `el-nino-extreme-weather`。

**两种新增方式，结果完全一样：md 都落在 `_studies/` 这个本地文件夹里。**

1. **手动**：复制 `_template.md` 改成你的文件名，填好内容，用 GitHub Desktop 提交推送。
2. **让 agent 生成**：直接说「把某份报告/对话加进小项目研究」，agent 也会把 md 写进同一个 `_studies/` 文件夹，你照常用 GitHub Desktop 推送即可。

## 每篇 md 的结构

文件最上面是 YAML front matter（两行 `---` 之间），正文在 `---` 下面直接写 Markdown。

| 字段 | 必填 | 说明 |
|---|---|---|
| `layout` | 是 | 固定写 `study` |
| `title` | 是 | 页面标题 |
| `date` | 是 | 日期，格式 `2026-09-09` |
| `summary` | 建议 | 一句话主要内容，显示在「主要内容」 |
| `tags` | 否 | 标签列表 |
| `conversation` | 否 | 与 AI 的对话全文（可收起） |
| `log` | 否 | 日志列表 |
| `exclude_from_index` | 否 | 设为 `true` 则不进首页（README / 模板本身用） |

## 写法要点

- 长文（表格、图片、流程图）直接写正文即可，会自动渲染。
- 流程图用 mermaid 代码块（语言标记写 `mermaid`）写，会自动画成图（需浏览器联网加载 mermaid.js）。
- **配图请放到仓库根目录 `assets/images/`**，引用写 `/assets/images/xxx.png`。不要用会过期的外部签名链接。
- 外链的数据 / 文件若不在本站，就改成纯文字说明，避免死链。
- 没有 `summary` / `conversation` / `log` 也没关系，对应区块会自动隐藏。

## 快速开始

1. 复制 `_template.md` → 重命名为 `你的标题.md`
2. 删掉 `exclude_from_index: true` 这一行
3. 改 `title` / `date` / `summary`，把正文写完
4. 提交推送（GitHub Desktop）即可上线
