# 个人项目集（Jekyll + GitHub Pages）

一个用于陈列个人项目的静态站点：使用 Jekyll 构建、GitHub Pages 托管。
首页自动从 `_projects/` 生成项目卡片，新增项目无需手动维护导航。

## 目录结构

```
.
├── _config.yml        # 站点与部署配置
├── _layouts/          # 页面模板（default / project）
├── _projects/         # 每个项目一个 .md，自动生成卡片
├── assets/css/        # 样式
├── index.html         # 首页（项目列表）
├── Gemfile            # GitHub Pages 构建依赖
└── README.md
```

## 本地预览

需要 Ruby 2.7+ 与 Bundler。macOS 建议用 rbenv / brew 安装新版本 Ruby
（系统自带 Ruby 通常过旧，无法安装 github-pages gem）。

```bash
# 安装依赖
bundle install
# 启动本地服务，访问 http://localhost:4000
bundle exec jekyll serve
```

## 部署到 GitHub Pages

1. 在 GitHub 新建仓库。
   - 若仓库名为 `用户名.github.io`，访问地址即 `https://用户名.github.io`。
   - 若叫其他名字（如 `personal-site`），访问地址为 `https://用户名.github.io/personal-site`，
     并需在 `_config.yml` 把 `baseurl` 改为 `/personal-site`。
2. 推送代码：

   ```bash
   git init
   git add .
   git commit -m "first commit"
   git branch -M main
   git remote add origin git@github.com:用户名/仓库名.git
   git push -u origin main
   ```

3. 仓库 → **Settings → Pages** → Source 选 `main` 分支、`/ (root)` → Save。
4. 等待 1–2 分钟，访问分配的地址即可。

## 新增一个项目

在 `_projects/` 下新建 `项目名.md`，填写 front matter：

```yaml
---
layout: project
title: 项目名
date: 2026-09-01
tags: [标签1, 标签2]
summary: 一句话简介
link: https://...   # 可选，留空则不显示按钮
---

正文用 Markdown 书写。
```

首页会自动生成项目卡片，无需手动维护。
