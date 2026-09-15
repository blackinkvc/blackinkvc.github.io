/*!
 * changelog.js —— 站点「更新日志」，全自动生成
 * ---------------------------------------------------------------------------
 * 数据源：本站 GitHub 公开仓库的提交历史（REST API，只读，无需 token）。
 * 因此每一次 push 之后，新的更新都会自动出现在更新日志里——
 * 时间取提交时间，内容取提交说明，不需要手工维护任何文件。
 *
 * 用法（页面底部先引入本文件，再写内联脚本）：
 *   Changelog.load()                       -> Promise<entry[]>   （读第一页，带缓存）
 *   Changelog.loadMore()                   -> Promise<entry[]>   （读更早的一页）
 *   Changelog.hasMore()                    -> Boolean
 *   Changelog.renderCompact(ul, items, hrefOf)
 *   Changelog.renderCards(grid, items, hrefOf)
 *   Changelog.renderRows(ul, items, hrefOf)
 *   Changelog.renderLog(container, items)
 *   Changelog.attachFilesHandler(container)     （「改动文件」按需展开）
 *   Changelog.scrollToHash()                    （支持 /log/#c-<sha> 定位）
 *   Changelog.fmtFull(date) / fmtDay(date) / humanize(date)
 */
(function (global) {
  'use strict';

  /* ======================= 配置 ======================= */

  var OWNER = 'blackinkvc';
  var REPO = 'blackinkvc.github.io';
  var PER_PAGE = 100;
  var CACHE_KEY = 'blackinkvc.changelog.v1';
  var CACHE_TTL = 3 * 60 * 1000; // 缓存 3 分钟，避免频繁请求触发 API 限流

  var API_COMMITS = 'https://api.github.com/repos/' + OWNER + '/' + REPO + '/commits';
  var API_COMMIT = 'https://api.github.com/repos/' + OWNER + '/' + REPO + '/commits/';

  /* ======================= 小工具 ======================= */

  function pad(n) { return n < 10 ? '0' + n : '' + n; }

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function el(id) { return document.getElementById(id); }

  /* ======================= 提交说明解析 ======================= */

  // 标签：用于给每条更新分类着色
  var TAG_LABEL = {
    feat: '新增', fix: '修复', docs: '文档', style: '样式',
    refactor: '重构', perf: '优化', chore: '杂项',
    content: '内容', revert: '回滚', other: '更新'
  };

  var TAG_ICON = {
    feat: '✨', fix: '🐛', docs: '📄', style: '🎨', refactor: '♻️',
    perf: '⚡', chore: '🔧', content: '📝', revert: '↩️'
  };

  // 英文前缀（形如 "fix: ..."）
  var EN_MAP = {
    feat: 'feat', feature: 'feat', add: 'feat', new: 'feat', impl: 'feat',
    fix: 'fix', bugfix: 'fix', hotfix: 'fix', patch: 'fix',
    docs: 'docs', doc: 'docs', readme: 'docs',
    style: 'style', ui: 'style', css: 'style', ux: 'style', layout: 'style',
    refactor: 'refactor', cleanup: 'refactor', tidy: 'refactor',
    perf: 'perf', optimize: 'perf', opt: 'perf',
    chore: 'chore', build: 'chore', ci: 'chore', deps: 'chore', release: 'chore',
    content: 'content', post: 'content', article: 'content', copy: 'content',
    revert: 'revert'
  };

  // 中文前缀（形如 "修复：..."，也用于「开头即关键词」的情况）
  var CN_LIST = [
    ['新增', 'feat'], ['新加', 'feat'], ['添加', 'feat'], ['加入', 'feat'],
    ['实现', 'feat'], ['支持', 'feat'], ['接入', 'feat'],
    ['修复', 'fix'], ['修正', 'fix'], ['解决', 'fix'], ['修好', 'fix'],
    ['去掉', 'fix'], ['移除', 'fix'], ['删除', 'fix'],
    ['文档', 'docs'], ['说明', 'docs'], ['注释', 'docs'],
    ['样式', 'style'], ['样式调整', 'style'], ['美化', 'style'],
    ['界面', 'style'], ['排版', 'style'], ['布局', 'style'],
    ['重构', 'refactor'], ['整理', 'refactor'], ['重写', 'refactor'],
    ['优化', 'perf'], ['性能', 'perf'], ['加速', 'perf'],
    ['杂项', 'chore'], ['构建', 'chore'], ['配置', 'chore'],
    ['升级', 'chore'], ['依赖', 'chore'], ['工作流', 'chore'],
    ['内容', 'content'], ['文章', 'content'], ['文案', 'content'],
    ['回滚', 'revert']
  ];
  // 长词优先，避免「样式调整」被「样式」抢先匹配
  CN_LIST.sort(function (a, b) { return b[0].length - a[0].length; });

  function cnTagOf(word) {
    for (var i = 0; i < CN_LIST.length; i++) {
      if (CN_LIST[i][0] === word) return CN_LIST[i][1];
    }
    return '';
  }

  // 找出说明开头的标签词（返回 {key, len}），没有则返回 null
  function headTag(subject) {
    var colon = subject.search(/[:：]/);
    if (colon > 0) {
      var head = subject.slice(0, colon).trim();
      if (head.length && head.length <= 16) {
        var k = EN_MAP[head.toLowerCase()] || cnTagOf(head);
        if (k) return { key: k, len: colon + 1 };
      }
    }
    for (var i = 0; i < CN_LIST.length; i++) {
      if (subject.indexOf(CN_LIST[i][0]) === 0) return { key: CN_LIST[i][1], len: CN_LIST[i][0].length };
    }
    var m = subject.match(/^([A-Za-z]+)\b/);
    if (m && EN_MAP[m[1].toLowerCase()]) return { key: EN_MAP[m[1].toLowerCase()], len: m[1].length };
    return null;
  }

  function detectTag(message) {
    var subject = message.split('\n')[0] || '';
    var t = headTag(subject);
    return t ? t.key : '';
  }

  function splitMessage(message) {
    var nl = message.indexOf('\n');
    var subject = nl === -1 ? message : message.slice(0, nl);
    var body = nl === -1 ? '' : message.slice(nl + 1).trim();
    subject = subject.trim();
    var t = headTag(subject);
    var title = subject;
    if (t) {
      title = subject.slice(t.len).replace(/^[\s\-—–·:：]+/, '').trim();
      if (!title) title = subject; // 万一剥离后为空，保留原文
    }
    return { title: title, body: body };
  }

  function firstLine(s) {
    if (!s) return '';
    var l = (s.split('\n')[0] || '').trim().replace(/^[-*•]\s*/, '');
    return l.length > 56 ? l.slice(0, 56) + '…' : l;
  }

  function normalize(c) {
    var full = (c.commit && c.commit.message) || '(无提交说明)';
    var parts = splitMessage(full);
    var who = (c.commit && (c.commit.committer || c.commit.author)) || {};
    var when = who.date;
    var d = when ? new Date(when) : new Date();
    var tag = detectTag(full);
    return {
      sha: c.sha || '',
      short: (c.sha || '').slice(0, 7),
      url: c.html_url || (API_COMMIT + (c.sha || '')),
      date: d,
      tag: tag,
      tagLabel: tag ? (TAG_LABEL[tag] || tag) : '更新',
      title: parts.title,
      body: parts.body,
      author: (c.author && c.author.login) || who.name || '',
      files: null,
      stats: null
    };
  }

  /* ======================= 时间格式化 ======================= */

  function fmtDay(d) { return pad(d.getMonth() + 1) + '-' + pad(d.getDate()); }

  function fmtFull(d) {
    return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()) +
      ' ' + pad(d.getHours()) + ':' + pad(d.getMinutes());
  }

  function monthKey(d) { return d.getFullYear() + '-' + pad(d.getMonth() + 1); }
  function monthLabel(d) { return d.getFullYear() + ' 年 ' + (d.getMonth() + 1) + ' 月'; }

  function humanize(d) {
    var s = (Date.now() - d.getTime()) / 1000;
    if (s < 60) return '刚刚';
    if (s < 3600) return Math.floor(s / 60) + ' 分钟前';
    if (s < 86400) return Math.floor(s / 3600) + ' 小时前';
    if (s < 86400 * 30) return Math.floor(s / 86400) + ' 天前';
    if (s < 86400 * 365) return Math.floor(s / (86400 * 30)) + ' 个月前';
    return Math.floor(s / (86400 * 365)) + ' 年前';
  }

  /* ======================= 数据加载 ======================= */

  var state = { page: 0, items: [], done: false, index: {}, loading: null };

  function reindex() {
    state.index = {};
    state.items.forEach(function (it) { state.index[it.short] = it; });
  }

  function mapNodes(arr) {
    return (arr || []).map(normalize);
  }

  function fetchPage(p) {
    var url = API_COMMITS + '?per_page=' + PER_PAGE + '&page=' + p;
    return fetch(url, { headers: { Accept: 'application/vnd.github+json' } })
      .then(function (r) {
        if (!r.ok) throw new Error('GitHub API HTTP ' + r.status);
        return r.json();
      })
      .then(mapNodes)
      .catch(function (err) {
        throw new Error(err && err.message ? err.message : '网络请求失败');
      });
  }

  function cacheRead() {
    try {
      var raw = global.localStorage.getItem(CACHE_KEY);
      if (!raw) return null;
      var o = JSON.parse(raw);
      if (!o || !o.t || (Date.now() - o.t) > CACHE_TTL) return null;
      return o;
    } catch (e) { return null; }
  }

  function cacheWrite() {
    try {
      global.localStorage.setItem(CACHE_KEY, JSON.stringify({
        t: Date.now(),
        page: state.page,
        done: state.done,
        items: state.items.map(function (it) {
          return {
            sha: it.sha, short: it.short, url: it.url,
            date: it.date.toISOString(), tag: it.tag, tagLabel: it.tagLabel,
            title: it.title, body: it.body, author: it.author
          };
        })
      }));
    } catch (e) { /* 隐私模式下 localStorage 可能不可用，忽略 */ }
  }

  function restore(o) {
    state.page = o.page || 1;
    state.done = !!o.done;
    state.items = (o.items || []).map(function (it) {
      it.date = new Date(it.date);
      it.files = null;
      it.stats = null;
      return it;
    });
    reindex();
  }

  function load() {
    if (state.items.length) return Promise.resolve(state.items);
    if (state.loading) return state.loading;

    var cached = cacheRead();
    if (cached) {
      restore(cached);
      return Promise.resolve(state.items);
    }

    state.loading = fetchPage(1).then(function (items) {
      state.page = 1;
      state.done = items.length < PER_PAGE;
      state.items = items;
      reindex();
      cacheWrite();
      state.loading = null;
      return state.items;
    }, function (err) {
      state.loading = null;
      throw err;
    });
    return state.loading;
  }

  function loadMore() {
    if (state.done) return Promise.resolve(state.items);
    return fetchPage(state.page + 1).then(function (items) {
      state.page += 1;
      if (items.length < PER_PAGE) state.done = true;
      state.items = state.items.concat(items);
      reindex();
      cacheWrite();
      return state.items;
    });
  }

  function hasMore() { return !state.done; }
  function items() { return state.items; }

  // 按需拉取某个提交改了哪些文件（点击「改动文件」时才请求）
  function loadFiles(entry) {
    if (entry.files) return Promise.resolve(entry.files);
    return fetch(API_COMMIT + entry.sha, { headers: { Accept: 'application/vnd.github+json' } })
      .then(function (r) {
        if (!r.ok) throw new Error('HTTP ' + r.status);
        return r.json();
      })
      .then(function (d) {
        entry.files = (d.files || []).map(function (f) {
          return { path: f.filename, adds: f.additions || 0, dels: f.deletions || 0, status: f.status };
        });
        entry.stats = d.stats || null;
        return entry.files;
      });
  }

  /* ======================= 渲染器 ======================= */

  function tagSpan(tag, label) {
    return '<span class="log-tag log-tag--' + esc(tag || 'misc') + '">' + esc(label) + '</span>';
  }

  function defaultHref(it) { return it.url; }

  // 简洁视图：一行一条
  function renderCompact(ul, list, hrefOf) {
    if (!ul) return;
    hrefOf = hrefOf || defaultHref;
    if (!list.length) { ul.innerHTML = '<li class="log-empty">暂无更新日志</li>'; return; }
    ul.innerHTML = list.map(function (it) {
      return '<li><a href="' + esc(hrefOf(it)) + '">' +
        '<span class="log-mini-date">' + fmtDay(it.date) + '</span> ' +
        esc(it.title) +
        '</a></li>';
    }).join('');
  }

  // 看板视图：卡片
  function renderCards(grid, list, hrefOf) {
    if (!grid) return;
    hrefOf = hrefOf || defaultHref;
    if (!list.length) { grid.innerHTML = '<p class="log-empty">暂无更新日志</p>'; return; }
    grid.innerHTML = list.map(function (it) {
      var desc = firstLine(it.body);
      return '<a class="column-card log-card" href="' + esc(hrefOf(it)) + '">' +
        '<div class="column-card-head">' +
          '<span class="column-card-icon">' + (TAG_ICON[it.tag] || '📝') + '</span>' +
          '<div>' +
            '<h3>' + esc(it.title) + '</h3>' +
            '<small>' + fmtFull(it.date) + ' · ' + esc(it.tagLabel) + '</small>' +
          '</div>' +
        '</div>' +
        '<p>' + (desc ? esc(desc) : '查看本次更新内容 →') + '</p>' +
        '</a>';
    }).join('');
  }

  // 列表视图：标题 + 日期/标签
  function renderRows(ul, list, hrefOf) {
    if (!ul) return;
    hrefOf = hrefOf || defaultHref;
    if (!list.length) { ul.innerHTML = '<li class="log-empty"><span class="pl-title">暂无更新日志</span></li>'; return; }
    ul.innerHTML = list.map(function (it) {
      return '<li><a href="' + esc(hrefOf(it)) + '">' +
        '<span class="pl-title">' + esc(it.title) + '</span>' +
        '<span class="pl-meta">' +
          (it.tag ? '<span class="pl-tag">' + esc(it.tagLabel) + '</span>' : '') +
          '<span class="pl-tag">' + fmtFull(it.date) + '</span>' +
        '</span></a></li>';
    }).join('');
  }

  // 日志页：按月分组的时间轴
  function logItemHtml(it) {
    return '<li class="log-item" id="c-' + esc(it.short) + '">' +
      '<div class="log-head">' +
        '<time class="log-time" datetime="' + it.date.toISOString() + '">' + fmtFull(it.date) + '</time>' +
        tagSpan(it.tag, it.tagLabel) +
        '<span class="log-ago">' + humanize(it.date) + '</span>' +
      '</div>' +
      '<div class="log-title">' + esc(it.title) + '</div>' +
      (it.body ? '<pre class="log-body">' + esc(it.body) + '</pre>' : '') +
      '<div class="log-meta">' +
        '<a class="log-sha" href="' + esc(it.url) + '" target="_blank" rel="noopener">' +
          esc(it.short) + ' ↗</a>' +
        '<button type="button" class="log-files-btn" data-sha="' + esc(it.short) + '">改动文件</button>' +
      '</div>' +
      '<div class="log-files" hidden></div>' +
      '</li>';
  }

  function renderLog(container, list) {
    if (!container) return;
    if (!list || !list.length) {
      container.innerHTML = '<p class="log-empty">没有符合条件的更新记录。</p>';
      return;
    }
    var groups = [], cur = null;
    list.forEach(function (it) {
      var k = monthKey(it.date);
      if (!cur || cur.key !== k) {
        cur = { key: k, label: monthLabel(it.date), items: [] };
        groups.push(cur);
      }
      cur.items.push(it);
    });
    container.innerHTML = groups.map(function (g) {
      return '<section class="log-month">' +
        '<h2>' + esc(g.label) + '<small>' + g.items.length + ' 次更新</small></h2>' +
        '<ul class="log-list">' + g.items.map(logItemHtml).join('') + '</ul>' +
        '</section>';
    }).join('');
  }

  function renderFiles(box, files) {
    if (!files.length) {
      box.innerHTML = '<p class="log-empty">这次提交没有可显示的文件改动。</p>';
      return;
    }
    var adds = 0, dels = 0;
    files.forEach(function (f) { adds += f.adds; dels += f.dels; });
    box.innerHTML =
      '<div class="log-files-sum">共 ' + files.length + ' 个文件 · ' +
        '<span class="log-add">+' + adds + '</span> / <span class="log-del">-' + dels + '</span></div>' +
      files.map(function (f) {
        return '<div class="log-file">' +
          '<span class="log-file-path">' + esc(f.path) + '</span>' +
          '<span class="log-file-stat"><span class="log-add">+' + f.adds + '</span> ' +
            '<span class="log-del">-' + f.dels + '</span></span>' +
          '</div>';
      }).join('');
  }

  // 「改动文件」按需加载 + 展开/收起
  function attachFilesHandler(container) {
    if (!container) return;
    container.addEventListener('click', function (e) {
      var t = e.target;
      if (!t || !t.closest) return;
      var btn = t.closest('.log-files-btn');
      if (!btn) return;
      var item = btn.closest('.log-item');
      var box = item && item.querySelector('.log-files');
      if (!box) return;

      if (box.getAttribute('data-loaded') === '1') {
        box.hidden = !box.hidden;
        btn.textContent = box.hidden ? '改动文件' : '收起改动';
        return;
      }
      var entry = state.index[btn.getAttribute('data-sha')];
      if (!entry) return;

      btn.disabled = true;
      box.hidden = false;
      box.innerHTML = '<p class="log-empty">正在读取改动文件…</p>';
      loadFiles(entry).then(function (files) {
        renderFiles(box, files);
        box.setAttribute('data-loaded', '1');
        btn.disabled = false;
        btn.textContent = '收起改动';
      }).catch(function (err) {
        box.innerHTML = '<p class="log-empty">无法读取改动文件（' + esc(err.message) + '）</p>';
        btn.disabled = false;
      });
    });
  }

  // /log/#c-<sha> 定位到某一条更新
  function scrollToHash() {
    var h = global.location.hash;
    if (!h || h.indexOf('#c-') !== 0) return;
    var node = document.getElementById(h.slice(1));
    if (!node) return;
    node.scrollIntoView({ block: 'center' });
    node.classList.add('log-item--flash');
    setTimeout(function () { node.classList.remove('log-item--flash'); }, 2400);
  }

  /* ======================= 导出 ======================= */

  global.Changelog = {
    OWNER: OWNER,
    REPO: REPO,
    repoUrl: 'https://github.com/' + OWNER + '/' + REPO,
    commitsUrl: 'https://github.com/' + OWNER + '/' + REPO + '/commits/',
    load: load,
    loadMore: loadMore,
    hasMore: hasMore,
    items: items,
    loadFiles: loadFiles,
    renderCompact: renderCompact,
    renderCards: renderCards,
    renderRows: renderRows,
    renderLog: renderLog,
    attachFilesHandler: attachFilesHandler,
    scrollToHash: scrollToHash,
    esc: esc,
    el: el,
    fmtDay: fmtDay,
    fmtFull: fmtFull,
    humanize: humanize,
    tagLabel: TAG_LABEL
  };
})(window);
