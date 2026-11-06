/* ============================================================
   战争纪元 · 全球冲突 3D 地球时间轴
   纯本地运行：Three.js r128 + 本地数据（UCDP GED / DBpedia / 考据条目）
   数据诚实性：点为记录而非战线；古代坐标为考据近似位置并分级。
   ============================================================ */
(function () {
  'use strict';

  var DATA = window.ATLAS_DATA;

  function $(sel, root) { return (root || document).querySelector(sel); }
  function $all(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }
  function clamp(v, a, b) { return v < a ? a : (v > b ? b : v); }
  function fmtYear(y) {
    y = Math.round(y);
    return y < 0 ? '公元前 ' + Math.abs(y) + ' 年' : '公元 ' + y + ' 年';
  }
  function fmtYearShort(y) {
    y = Math.round(y);
    return y < 0 ? '前' + Math.abs(y) : '' + y;
  }
  function showError(msg, detail) {
    var box = $('#errorBox');
    if (!box) return;
    box.classList.add('show');
    $('#errorText') && ($('#errorText').textContent = msg);
    $('#errorDetail') && ($('#errorDetail').textContent = detail || '');
    var ld = $('#loading');
    if (ld) ld.classList.add('hide');
  }
  window.__ATLAS_ERRORS = [];
  window.addEventListener('error', function (ev) {
    window.__ATLAS_ERRORS.push(String(ev.message));
    document.documentElement.setAttribute('data-errors', window.__ATLAS_ERRORS.join(' | '));
  });

  /* ---------------- 常量 ---------------- */
  var TYPES = {
    battle: { code: 0, label: '会战 / 战斗', short: '会战', en: 'Battle', enShort: 'Battle' },
    siege: { code: 1, label: '围城 / 占领', short: '围城', en: 'Siege / Capture', enShort: 'Siege' },
    massacre: { code: 2, label: '单边暴力', short: '单边暴力', en: 'One-sided violence', enShort: 'Massacre' },
    campaign: { code: 3, label: '战争 / 战役线', short: '战役线', en: 'Campaign line', enShort: 'Campaign' }
  };
  var CONF = {
    high: { v: 1, label: '高置信度', en: 'High confidence' },
    medium: { v: 0.5, label: '中置信度', en: 'Medium confidence' },
    low: { v: 0, label: '低置信度', en: 'Low confidence' }
  };
  var DATASET = { U: 'UCDP GED', D: 'DBpedia', C: '重点考据', M: '战役线示意' };
  var DATASET_EN = { U: 'UCDP GED', D: 'DBpedia', C: 'Curated', M: 'Campaign line' };
  var REGIONS = ['欧洲', '中东', '非洲', '亚太', '美洲', '跨区域'];
  var REGION_EN = { '欧洲': 'Europe', '中东': 'Middle East', '非洲': 'Africa', '亚太': 'Asia-Pacific', '美洲': 'Americas', '跨区域': 'Transregional', 'all': 'Global' };
  var ERAS = [
    { name: '上古', en: 'Ancient', start: -3000, end: -1200, range: '约前3000–前1200', rangeEn: 'c. 3000–1200 BC' },
    { name: '先秦', en: 'Pre-Qin China', start: -1200, end: -221, range: '前1200–前221', rangeEn: '1200–221 BC' },
    { name: '罗马', en: 'Roman era', start: -221, end: 476, range: '前221–476', rangeEn: '221 BC–AD 476' },
    { name: '中世纪', en: 'Middle Ages', start: 476, end: 1453, range: '476–1453', rangeEn: '476–1453' },
    { name: '近代', en: 'Early modern', start: 1453, end: 1914, range: '1453–1914', rangeEn: '1453–1914' },
    { name: '一战', en: 'World War I', start: 1914, end: 1918, range: '1914–1918', rangeEn: '1914–1918' },
    { name: '战间期', en: 'Interwar', start: 1918, end: 1939, range: '1918–1939', rangeEn: '1918–1939' },
    { name: '二战', en: 'World War II', start: 1939, end: 1945, range: '1939–1945', rangeEn: '1939–1945' },
    { name: '冷战', en: 'Cold War', start: 1945, end: 1991, range: '1945–1991', rangeEn: '1945–1991' },
    { name: '冷战后', en: 'Post–Cold War', start: 1991, end: 2027, range: '1991–2026', rangeEn: '1991–2026' }
  ];
  var YEAR_MIN = -3000;
  var YEAR_MAX = 2026;
  var WINDOW_ALL = 99999;

  var meta = DATA.meta || {};
  if (meta.maxYear && meta.maxYear < YEAR_MAX) YEAR_MAX = meta.maxYear;
  var EV = DATA.events.slice().sort(function (a, b) { return a.y - b.y || (a.e || a.y) - (b.e || b.y); });
  EV.forEach(function (e, i) { e.__i = i; });
  var CAMPAIGNS = (DATA.campaigns || []).slice();
  var WARS = (meta.wars || []).slice();
  var WAR_BY_ID = {};
  WARS.forEach(function (w) { WAR_BY_ID['w' + w.i] = w; });
  EV.forEach(function (e) {
    if (e.wi == null) e.wi = 0;
    if (e.ws == null) e.ws = e.y;
    if (e.we == null) e.we = e.e || e.y;
  });

  var TYPE_LABEL = {};
  Object.keys(TYPES).forEach(function (k) { TYPE_LABEL[k] = TYPES[k].label; });

  /* ---------------- ISO 索引（阶段 2）
     meta.iso 为数字码 → { a3, a2 }；此处反向建立 alpha-3 → 数字码，
     供 belligerents.iso_a3 与 borders.js 的数字 ID（"004"）对齐。 */
  var NUM_TO_A3 = {}, A3_TO_NUM = {};
  (function () {
    var map = meta.iso || {};
    Object.keys(map).forEach(function (num) {
      var c = map[num] || {};
      if (c.a3) {
        NUM_TO_A3[num] = String(c.a3).toUpperCase();
        A3_TO_NUM[String(c.a3).toUpperCase()] = num;
      }
    });
  })();

  /* 交战方 → Natural Earth 数字 ISO（用于整国填色） */
  function warSides(w) {
    var a = [], b = [];
    function push(arr, num) { if (num && arr.indexOf(num) < 0) arr.push(num); }
    var bel = w.belligerents || [];
    if (bel.length) {
      bel.forEach(function (x) {
        var num = x.iso_numeric || (x.iso_a3 ? A3_TO_NUM[String(x.iso_a3).toUpperCase()] : '');
        if (!num) return;
        push(x.side === 'A' ? a : b, num);
      });
    }
    if (!a.length && !b.length) {
      /* 兼容阶段 1 之前的旧字段 */
      var single = '';
      (w.A || []).concat(w.B || []).forEach(function (x) { if (x.iso && !single) single = x.iso; });
      (w.A || []).forEach(function (x) { push(a, x.iso || single); });
      (w.B || []).forEach(function (x) { push(b, x.iso || single); });
    }
    return { a: a, b: b };
  }

  /* 战争详情里的 A/B 方列表：优先 belligerents，回退旧字段 */
  function warSideList(w, side) {
    var bel = (w.belligerents || []).filter(function (x) { return x.side === side; });
    if (bel.length) {
      return bel.map(function (x) {
        return {
          n: x.name_zh || x.name_en || '',
          en: x.name_en || x.name_zh || '',
          a3: x.iso_a3 || NUM_TO_A3[x.iso_numeric] || '',
          num: x.iso_numeric || (x.iso_a3 ? A3_TO_NUM[String(x.iso_a3).toUpperCase()] : '') || ''
        };
      });
    }
    return ((side === 'A' ? w.A : w.B) || []).map(function (x) {
      return { n: x.n, en: x.en || x.n, a3: NUM_TO_A3[x.iso] || '', num: x.iso || '' };
    });
  }

  /* 战争区间：[start_year, end_year]，含两端 */
  function warStart(w) { return w.start_year != null ? w.start_year : w.s; }
  function warEnd(w) { return w.end_year != null ? w.end_year : w.e; }
  function warIsActive(w) { return warActiveAt(warStart(w), warEnd(w)); }

  /* ---------------- 状态 ---------------- */
  var state = {
    year: YEAR_MAX,
    window: 100,
    playing: false,
    speed: 1,
    types: { battle: true, siege: true, massacre: true, campaign: true },
    region: 'all',
    highOnly: false,
    heat: true,
    cluster: false,
    adm1: true,
    highlight: true,
    zone: false,
    flat: false,
    overlay: false,
    overlayTotal: 0,
    overlayShown: 0,
    overlayKeep: 1,
    lang: (function () {
      try { return new URLSearchParams(window.location.search).get('lang') === 'en' ? 'en' : 'zh'; }
      catch (e) { return 'zh'; }
    })(),
    sortDesc: true,
    selected: -1,
    selectedCampaign: -1,
    selectedWar: -1,
    listLimit: 60
  };

  function isEN() { return state.lang === 'en'; }
  function L(zh, en) { return isEN() ? en : zh; }
  function evName(e) { return dualName(e.n, e.en); }
  /* 数据文本：英文界面优先数据中的英文名；缺失时保留原文并标注，不做机器翻译。 */
  function dualName(zh, en) {
    var z = zh == null ? '' : String(zh);
    var e = en == null ? '' : String(en);
    if (!isEN()) return z || (e ? e + '（无中文名）' : '');
    return e && e !== '（无英文名）' ? e : (z ? z + ' (original)' : '');
  }
  /* 英文界面下无英文译文的资料文本：保留原文并标注，不做机器翻译。 */
  function origText(s) {
    var v = s == null ? '' : String(s);
    if (!isEN() || !v) return v;
    if (!/[\u4e00-\u9fff]/.test(v)) return v;
    if (/\(original\)\s*$/.test(v)) return v;
    return v + ' (original)';
  }
  /* 英文界面优先使用人工翻译的英文字段（sue/ime/sce/cse/cne），无译文再回退原文标注。 */
  function pickTxt(zh, en) {
    if (isEN() && en) return String(en);
    return origText(zh);
  }
  /* 战争备注为固定说明文案，英文界面使用对应译文；无译文时按原文标注。 */
  var NOTE_EN = {
    '历史政权的领土范围无法用现代国界精确表示，整国填色仅以现代国家边界作“示意代理”。':
      'The territory of historical polities cannot be represented exactly by modern borders; the country fill is an indicative proxy only.',
    '中国古政权的疆域与现代国界不一致；整国填色仅以现代中国等国家边界作“示意”，不代表历史疆域。':
      'The territory of ancient Chinese polities does not match modern borders; the fill uses modern national borders as an indication only, not as historical territory.',
    '单次战役/短期战事；双方均以现代国家边界作示意。':
      'Single battle or short war; both sides use modern national borders as an indication only.',
    '战役线为示意路线；交战方按条目原文。':
      'Campaign lines are indicative routes; belligerents follow the original entry.',
    '单次事件；交战方按考据条目，国界仅作示意。':
      'Single event; belligerents follow the researched entry; borders are indicative only.',
    '未能归入具名战争的同年度事件集合；仅用于时间轴显隐，不构成历史战争定义。':
      'An annual set of events not attached to a named war; used only for timeline visibility, not as a historical war definition.',
    '战争区间由 UCDP 抽样事件的年份跨度推断，端点可能因抽样与记录缺失而偏移；交战方沿用 UCDP 命名。':
      'The war interval is inferred from the year span of sampled UCDP events; endpoints may shift due to sampling and missing records; belligerents follow UCDP naming.',
    '纳卡冲突：UCDP 记录地点在亚美尼亚一侧，交战方为阿塞拜疆政府与未获广泛承认的阿尔察赫；双方活动区域均在阿塞拜疆国际承认边界内，填色仅作示意。':
      'Nagorno-Karabakh conflict: UCDP records locations on the Armenian side; the belligerents are the Azerbaijani government and the unrecognised Artsakh; both operate within Azerbaijan’s internationally recognised borders, and the fill is indicative only.'
  };
  function warNote(w) {
    var n = String((w && w.note) || '');
    if (!isEN() || !n) return n;
    return NOTE_EN[n] || (n + ' (original)');
  }
  function regionName(r) { return isEN() ? (REGION_EN[r] || r) : r; }
  function typeName(t, short) {
    var o = TYPES[t];
    if (!o) return t;
    return isEN() ? (short ? o.enShort : o.en) : (short ? o.short : o.label);
  }
  function confName(c) { return CONF[c] ? (isEN() ? CONF[c].en : CONF[c].label) : c; }
  function datasetName(ds) { return isEN() ? (DATASET_EN[ds] || ds) : (DATASET[ds] || ds); }
  function yearText(y) {
    y = Math.round(y);
    if (!isEN()) return y < 0 ? '公元前 ' + Math.abs(y) + ' 年' : '公元 ' + y + ' 年';
    return y < 0 ? Math.abs(y) + ' BC' : 'AD ' + y;
  }
  function yearShort(y) {
    y = Math.round(y);
    if (!isEN()) return y < 0 ? '前' + Math.abs(y) : '' + y;
    return y < 0 ? Math.abs(y) + ' BC' : '' + y;
  }
  function warActiveAt(s, e) {
    /* 含端点：Y == start_year 与 Y == end_year 都算“进行中”。
       因此“已结束”的判定是 Y > end_year（严格大于），Y == end_year 当天仍显示。 */
    return state.year >= s - 0.001 && state.year <= e + 0.001;
  }
  function activeWars() {
    var out = [];
    for (var i = 0; i < WARS.length; i++) {
      var w = WARS[i];
      if (warIsActive(w)) out.push(w);
    }
    return out;
  }

  /* ---------------- 界面文案（中/英） ---------------- */
  var I18N = {
    brandTitle: ['战争纪元', 'Age of War'],
    brandSub: ['全球冲突 · 三维地球时间轴', 'GLOBAL CONFLICT ATLAS / 3D EARTH TIMELINE'],
    controlDeck: ['控制台', 'CONTROL DECK'],
    timeCursor: ['时间游标', 'TIME CURSOR'],
    eventStream: ['事件流 / 档案', 'EVENT STREAM / DOSSIER'],
    chipModern: ['近现代', 'Modern'],
    chipSample: ['固定抽样', 'fixed sample'],
    chipHist: ['历史', 'Historical'],
    chipHistSrc: ['DBpedia + 重点考据', 'DBpedia + curated'],
    chipHistRange: ['前1457–2026', '1457 BC–2026'],
    dataInfo: ['数据说明', 'Data notes'],
    panelTitle: ['筛选与图层', 'Filters & layers'],
    panelWars: ['进行中的战争', 'Ongoing wars'],
    panelRegion: ['地区', 'Region'],
    regionAll: ['全球', 'Global'],
    regionEurope: ['欧洲', 'Europe'],
    regionMidEast: ['中东', 'Middle East'],
    regionAfrica: ['非洲', 'Africa'],
    regionAsia: ['亚太', 'Asia-Pacific'],
    regionAmericas: ['美洲', 'Americas'],
    regionTrans: ['跨区域', 'Transregional'],
    panelType: ['冲突类型', 'Conflict types'],
    typeBattle: ['会战 / 战斗', 'Battle'],
    typeSiege: ['围城 / 占领', 'Siege / capture'],
    typeMassacre: ['单边暴力 / 屠杀', 'One-sided violence'],
    typeCampaign: ['战争 / 战役线', 'Campaign line'],
    panelWindow: ['时间窗与置信度', 'Window & confidence'],
    win10: ['时间窗：10 年', 'Window: 10 years'],
    win25: ['时间窗：25 年', 'Window: 25 years'],
    win50: ['时间窗：50 年', 'Window: 50 years'],
    win100: ['时间窗：100 年', 'Window: 100 years'],
    win250: ['时间窗：250 年', 'Window: 250 years'],
    winAll: ['时间窗：全部历史', 'Window: all history'],
    highOnly: ['只看高置信度', 'High confidence only'],
    highOnlyDesc: ['隐藏中/低置信度的考据点位', 'Hide medium/low confidence records'],
    windowHint: ['默认仅显示所选年份仍在进行的战争；开启“叠加查看”后改为显示时间窗内的全部事件。',
      'By default only wars ongoing at the selected year are shown; with “Overlay view” on, every event in the time window is shown.'],
    panelLayers: ['叠加图层', 'Overlay layers'],
    layerAdmin1: ['一级行政区边界', 'Admin-1 boundaries'],
    layerAdmin1Desc: ['Natural Earth admin-1 · 比国界更细更淡', 'Natural Earth admin-1 · finer and fainter than borders'],
    layerHighlight: ['交战国整国高亮', 'Belligerent country fill'],
    layerHighlightDesc: ['A 方蓝 / B 方红，按现代国界示意', 'Side A blue / side B red, modern borders as proxy'],
    layerZone: ['战区模式', 'War-zone mode'],
    layerZoneDesc: ['事件点聚类凸包 · 近似范围', 'Event-cluster hulls · approximate'],
    layerHeat: ['区域冲突热力', 'Conflict heat layer'],
    layerHeatDesc: ['当前时代累计事件密度', 'Accumulated event density in the era'],
    layerCluster: ['现代冲突聚类', 'Modern conflict clusters'],
    layerClusterDesc: ['UCDP 抽样点聚类 · 按持续区间着色', 'UCDP sampled clusters · coloured by span'],
    layerOverlay: ['叠加查看（全史累积）', 'Overlay view (cumulative)'],
    layerOverlayDesc: ['时间窗内全部冲突同时显示，按距今年代区分明暗', 'All conflicts in the window shown at once, shaded by recency'],
    overlayNoteTitle: ['叠加态：时间窗内全部冲突同时显示', 'Overlay: every conflict in the window shown at once'],
    overlayNoteBody: ['已停战的战争也会保留；越久远越暗、越小。时间窗仍决定范围（“全部历史”＝全史叠加）；播放时累积而不逐帧清空。战区模式在叠加态下暂停。',
      'Wars that have already ended stay visible; the older a record, the dimmer and smaller it is. The time window still sets the range (“all history” = full overlay); playback accumulates instead of clearing each frame. War-zone mode is paused while overlay is on.'],
    panelLegend: ['图例', 'Legend'],
    legendBattle: ['会战冲击波', 'Battle shockwave'],
    legendBattleDesc: ['规模→大小/色阶', 'Scale → size / colour'],
    legendSiege: ['围城节点', 'Siege node'],
    legendSiegeDesc: ['城市 + 影响圈', 'City + impact ring'],
    legendMassacre: ['单边暴力', 'One-sided violence'],
    legendMassacreDesc: ['红色断叉', 'Red cross'],
    legendArc: ['战役线光弧', 'Campaign arc'],
    legendArcDesc: ['跨洲抬升大气层', 'Raised for cross-continental routes'],
    legendHeat: ['时间窗热度', 'Window heat'],
    legendHeatDesc: ['琥珀→赤红', 'Amber → crimson'],
    legendCluster: ['现代聚类', 'Modern cluster'],
    legendClusterDesc: ['青→洋红＝持续区间', 'Cyan → magenta = span'],
    legendSideA: ['A 方领土', 'Side A territory'],
    legendSideADesc: ['蓝色半透明', 'Blue, semi-transparent'],
    legendSideB: ['B 方领土', 'Side B territory'],
    legendSideBDesc: ['红色半透明', 'Red, semi-transparent'],
    legendAdmin1: ['省/州界', 'Province / state lines'],
    legendAdmin1Desc: ['比国界更淡', 'Fainter than national borders'],
    legendZone: ['战区轮廓', 'War-zone outline'],
    legendZoneDesc: ['聚类近似 · 非官方', 'Cluster approximation · unofficial'],
    legendNote: ['整国填色、战区轮廓与内战控制区均为近似示意，不代表精确战线或官方划区。',
      'Country fills, war-zone outlines and civil-war control areas are approximations, not precise front lines or official zones.'],
    dataFoot: ['<strong>数据边界</strong>：本页为代表性/可检索记录，不是全量编年。古代点位的经纬度为考据近似位置；1989 年后为 UCDP GED 固定抽样。点开“数据说明”查看来源、覆盖与精度分级。',
      '<strong>Data boundary</strong>: representative and searchable records, not a full chronology. Ancient coordinates are approximate; post-1989 records are a fixed UCDP GED sample. Open “Data notes” for sources and precision tiers.'],
    globeHint: ['拖动旋转 · 滚轮缩放 · 点击事件查看考据详情', 'Drag to rotate · scroll to zoom · click a record for its dossier'],
    viewFlat: ['平面地图', 'Flat map'],
    viewGlobe: ['3D 球体', '3D globe'],
    flatHint: ['等距圆柱投影 · 左右拖动改变中心经度 · 点击事件查看详情',
      'Equirectangular · drag horizontally to set centre longitude · click a record for details'],
    dashboard: ['可视化看板', 'Dashboard'],
    dashTitle: ['冲突数据可视化看板', 'Conflict data dashboard'],
    dashKicker: ['ANALYTICS / 同一份数据', 'ANALYTICS / same dataset'],
    dashSub: ['全部图表由页面内同一份数据实时计算；有可靠数据才给数值，缺失处明确标注，不做估算填充。',
      'Every chart is computed from the same in-page dataset. Figures appear only where the data supports them; gaps are marked, not estimated.'],
    dashClose: ['关闭看板', 'Close dashboard'],
    zoneNoteTitle: ['战区为事件点推断的近似示意', 'War zones are inferred from event points'],
    zoneNoteBody: ['不是官方战线：当前时间窗内会战/围城事件点 → 6° 网格聚类 → 凸包外扩 12%；仅供空间参考。',
      'Not official front lines: battle/siege events in the current window → 6° grid clustering → hulls buffered 12%; spatial reference only.'],
    statVisible: ['可见事件', 'visible records'],
    statDataset: ['数据集', 'dataset'],
    disclaimer: ['代表性样本 · 古代坐标为考据近似 · 非全量编年', 'Representative sample · ancient coordinates approximate · not a full chronology'],
    prevEra: ['上一个时代', 'Previous era'],
    nextEra: ['下一个时代', 'Next era'],
    play: ['▶ 播放', '▶ Play'],
    speedSlow: ['慢速', 'Slow'],
    speedNormal: ['标准', 'Normal'],
    speedFast: ['快速', 'Fast'],
    speedUltra: ['极速', 'Ultra'],
    jumpCentury: ['跳转世纪…', 'Jump to century…'],
    densityNote: ['对数密度 · 10年/柱', 'Log density · 10 yr/bar'],
    loadingData: ['正在载入数据', 'Loading data'],
    back: ['返回', 'Back'],
    eventStreamShort: ['事件流', 'Event stream'],
    rightSubFiltered: ['按时间窗筛选', 'Filtered by window'],
    breakdownEmpty: ['会战 0 · 围城 0 · 单边暴力 0 · 战役线 0', 'Battle 0 · Siege 0 · One-sided 0 · Campaign 0'],
    densityUnit: [' 条', ' records'],
    langToggleTitle: ['切换中文 / 英文', 'Switch Chinese / English'],

    /* 加载层 / 错误层 */
    loadingTitle: ['战争纪元', 'Age of War'],
    loadingSub: ['正在载入 UCDP / DBpedia / 地球贴图', 'LOADING UCDP / DBPEDIA / EARTH TEXTURES'],
    errorTitle: ['三维地球无法启动', '3D globe failed to start'],
    errorText: ['请确认浏览器启用了 WebGL，并确认本地资源文件完整。', 'Check that WebGL is enabled and local asset files are intact.'],
    errThree: ['Three.js 未能加载。请确认 vendor/three.min.js 与本页面在同一目录（本作品完全离线运行，不依赖 CDN）。',
      'Three.js failed to load. Check that vendor/three.min.js sits next to this page (fully offline, no CDN).'],
    errData: ['冲突数据未能加载。请确认 data/world_data.js 与 data/borders.js 文件完整。',
      'Conflict data failed to load. Check that data/world_data.js and data/borders.js are intact.'],
    errWebGL: ['无法创建 WebGL 上下文。请确认浏览器启用了硬件加速 / WebGL，并尝试更新显卡驱动。',
      'Cannot create a WebGL context. Check hardware acceleration / WebGL and try updating the graphics driver.'],
    errTexDay: ['地球贴图加载失败。请确认 data/textures.js 或 assets/earth_atmos.jpg 完整。',
      'Earth texture failed to load. Check data/textures.js or assets/earth_atmos.jpg.'],
    errTexNight: ['夜间灯光贴图加载失败。请确认 data/textures.js 或 assets/earth_lights.png 完整。',
      'Night-lights texture failed to load. Check data/textures.js or assets/earth_lights.png.'],

    /* 无障碍标签 */
    ariaWindow: ['时间窗', 'Time window'],
    ariaSpeed: ['播放速度', 'Playback speed'],
    ariaCentury: ['按世纪跳转', 'Jump to century'],
    ariaTimeline: ['时间轴', 'Timeline'],
    ariaClose: ['关闭', 'Close'],

    /* 数据说明弹窗 */
    infoTitle: ['数据说明与诚实性边界', 'Data notes & honesty boundaries'],
    modalKicker: ['数据档案', 'DATA DOSSIER'],
    modalSub: ['覆盖范围 · 坐标精度 · 已知缺口', 'COVERAGE · COORDINATE PRECISION · KNOWN GAPS'],
    modalCallout: ['本页展示的是<strong>可检索的代表性冲突记录</strong>，不是从古至今的全量战争编年。没有可靠日期或坐标的事件不会为了“填满地图”而被编造；缺失的交战方、兵力与伤亡会明确显示为“不详/未结构化收录”。',
      'This page presents <strong>searchable representative conflict records</strong>, not a complete chronology of all wars. Events without reliable dates or coordinates are not invented to “fill the map”; missing belligerents, forces and casualties are explicitly shown as “unknown / not structured”.'],
    sec1: ['1. 数据来源与覆盖', '1. Sources & coverage'],
    thSource: ['来源', 'Source'],
    thCover: ['覆盖', 'Coverage'],
    thUsage: ['在本页中的用法', 'How it is used here'],
    srcUcdpName: ['UCDP GED v26.1', 'UCDP GED v26.1'],
    srcUcdpOrg: ['Uppsala Conflict Data Program', 'Uppsala Conflict Data Program'],
    ucdpCover: ['1989–2025', '1989–2025'],
    ucdpRaw: ['原始记录', 'raw records'],
    recordsUnit: ['条', ''],
    ucdpUsageA: ['近现代有组织暴力事件。为控制加载与渲染量，按事件编号固定模 50 抽取 ',
      'Modern organized-violence events. To cap load and rendering cost, a fixed ID-mod-50 sample of '],
    ucdpUsageB: [' 条；这不是全量统计，也不做死亡外推。',
      ' records is used; this is not a full count and no fatality extrapolation is made.'],
    srcDbpediaOrg: ['MilitaryConflict 条目', 'MilitaryConflict entries'],
    dbpediaCover: ['约前1457–1988', 'c. 1457 BC–1988'],
    dbpediaAvail: ['可用条目', 'available entries'],
    dbpediaUsage: ['仅纳入能识别为会战、围城或屠杀/单边暴力且带日期与坐标的条目；排除战争总条目与无法分类条目。它只覆盖“有百科条目”的事件。',
      'Only entries identifiable as battles, sieges, massacres or one-sided violence with dates and coordinates are included; war overview pages and unclassifiable entries are excluded. Coverage is limited to events that have an encyclopedia entry.'],
    srcCuratedName: ['重点考据条目', 'Curated dossier'],
    srcCuratedOrg: ['考据档案', 'CURATED DOSSIER'],
    curatedCover: ['前1457–2026 的代表性事件', 'Representative events, 1457 BC–2026'],
    curatedUsage: ['对代表性战役补充交战方、兵力/伤亡的区间与争议说明、背景与影响。凡有争议的数字，均标“估计/史料不一”或给区间。',
      'Adds belligerents, force/casualty ranges with dispute notes, context and impact for representative battles. Contested figures are marked “estimate / sources differ” or given as ranges.'],
    sec2: ['2. 古代坐标精度与置信度', '2. Ancient coordinate precision & confidence'],
    sec2body: ['古代战役没有现代测绘坐标。本页使用<strong>现代遗址/地名对应的经纬度</strong>，属于“考据近似位置”，并不等于古战场精确点位。古今河道、海岸线、城市扩展和战场范围变化都可能造成偏移。',
      'Ancient battles have no modern survey coordinates. This page uses the <strong>coordinates of the modern site or place name</strong> as an “approximate researched location”, not the exact ancient battlefield. Changes in rivers, coastlines, urban extent and battlefield boundaries can all cause offsets.'],
    confHighText: ['纪年与地点有较明确文献/考古互证，古战场范围基本可定位（如美吉多、坎尼、黑斯廷斯）。',
      'Chronology and location have clear documentary/archaeological cross-checks; the battlefield is broadly locatable (e.g. Megiddo, Cannae, Hastings).'],
    confMedText: ['主流考据有对应地点，但确切战场、日期或双方兵力存在争议；地图上降低亮度。',
      'Mainstream research identifies a place, but the exact battlefield, date or force sizes are disputed; shown dimmer on the map.'],
    confLowText: ['仅知大致区域，或只有百科概位；地图上以虚线/低透明度呈现。DBpedia 早期无中文条目记录采用保守降级。',
      'Only a general area or an encyclopedia approximation is known; shown with dashed/low-opacity styling. Early DBpedia records without Chinese entries are conservatively downgraded.'],
    confWarn: ['DBpedia 批量条目的坐标未附独立精度字段：公元 1000 年以后的记录默认按“中置信度”、更早的记录降为“低置信度”（更保守）。这是可核验性分级，不是对史实真实性的否定。',
      'DBpedia batch records carry no independent precision field: records after AD 1000 default to “medium confidence” and earlier ones are downgraded to “low” (more conservative). This is a verifiability tier, not a denial of historical truth.'],
    sec3: ['3. 面积、热度与“看起来都很精确”的问题', '3. Areas, heat and the “everything looks precise” problem'],
    sec3a: ['<strong>点是记录，不是战线。</strong>地图上的每个点代表一个有地理编码的事件或一个考据点；战争的实际空间范围远大于一个点。',
      '<strong>Dots are records, not front lines.</strong> Each dot represents a geocoded event or a researched site; the real spatial extent of a war is far larger than a point.'],
    sec3b: ['<strong>战役线是示意。</strong>弧线连接主要城市/战役节点，表现行军方向或战线趋势，不是逐日军行 GPS 轨迹；跨洲路线抬高到大气层外仅用于视觉区分。',
      '<strong>Campaign lines are indicative.</strong> Arcs link main cities or battle nodes to suggest march directions or front trends, not daily GPS tracks; intercontinental routes are lifted above the atmosphere purely for visual separation.'],
    sec3c: ['<strong>热度不可跨时代直接比较。</strong>热力按“当前时间窗（默认 100 年）内的记录数”绘制，越接近时间游标的记录权重越高，并对数归一；UCDP 抽样与 DBpedia 条目密度不同，不能把颜色深浅当作死亡人数或战争烈度的严格比较。',
      '<strong>Heat cannot be compared across eras.</strong> Heat is drawn from the number of records in the current window (100 years by default), weighted towards the time cursor and log-normalised; UCDP sampling and DBpedia entry density differ, so colour depth is not a strict comparison of deaths or intensity.'],
    sec3d: ['<strong>聚类不是完整冲突计数。</strong>聚类汇总当前筛选内的全部记录（UCDP 抽样 + 百科 + 考据），数量为样本计数，不能外推为真实事件总数。',
      '<strong>Clusters are not full conflict counts.</strong> Clustering uses every record in the current filter (UCDP sample + encyclopaedic + curated); counts are sample counts and cannot be extrapolated to true event totals.'],
    sec4: ['4. 数据缺口', '4. Data gaps'],
    sec4a: ['古代/中世纪：DBpedia 仅包含有维基百科条目的冲突，欧洲与地中海世界的记录相对更密，非洲、美洲、大洋洲和部分亚洲地区明显偏少。这是“记录偏差”，不是“战争只发生在欧洲”。',
      'Ancient / medieval: DBpedia only covers conflicts with Wikipedia entries, so Europe and the Mediterranean are denser while Africa, the Americas, Oceania and parts of Asia are clearly underrepresented. This is recording bias, not evidence that wars only happened in Europe.'],
    sec4b: ['1946–1988：UCDP GED 的覆盖始于 1989 年。这一段已按朝鲜战争、越南战争、中东数次战争、印巴、非洲独立与内战、拉美内战、中苏与中印边境冲突等线索补入具名战争与考据事件，但记录粒度是“战争/战役级”，仍明显低于 1989 年后的逐事件抽样，跨段比较没有意义。',
      '1946–1988: UCDP GED coverage starts in 1989. This period has been filled with named wars and curated events (Korea, Vietnam, the Arab–Israeli wars, India–Pakistan, African independence and civil wars, Latin American civil wars, Sino-Soviet and Sino-Indian border clashes), but the granularity is war/battle level, still far below the event-level sampling after 1989; cross-period comparisons remain meaningless.'],
    sec4c: ['近现代：UCDP 每年、每地区的覆盖并不均匀；本页又进行了固定抽样，因此不能用于统计推断。',
      'Modern: UCDP coverage varies by year and region, and this page applies a fixed sample, so the data cannot support statistical inference.'],
    sec4d: ['伤亡：古代数字多来自后世转述，常被夸大或口径不明；UCDP 提供最优/低/高三档估计，但也不是法医式精确统计。',
      'Casualties: ancient figures often come from later retellings, are exaggerated or use unclear definitions; UCDP provides best/low/high estimates, but these are not forensic counts.'],
    sec4e: ['地名：部分历史地点只有现代对应名称，地图上使用近似经纬度；来源链接保留供进一步核对。',
      'Place names: some historical sites only have a modern counterpart, so approximate coordinates are used; source links are kept for further checking.'],
    sec4f: ['2025–2026：UCDP GED v26.1 的逐事件编码覆盖至 2025 年；2026 年只有依据公开报道整理的延续记录（含推断结束年标记）。因此时间轴 2026 年的空白不代表当年没有战事，只代表尚无逐事件数据集。',
      '2025–2026: UCDP GED v26.1 event-level coding runs through 2025. Records for 2026 are continuations compiled from public reporting (with inferred end-year flags). A blank 2026 on the timeline therefore means “no event-level dataset yet”, not “no fighting”.'],
    sec5: ['5. 交互与验证', '5. Interaction & verification'],
    sec5a: ['加载完成后，控制台会输出实际加载条数（<code>window.ATLAS_DATA.meta</code>）。时间轴使用 GPU 点着色器按年份显隐，时间窗滑动时不需要重建全部几何体；事件列表只渲染当前窗口内的一小部分记录。',
      'After loading, the console prints the actual record counts (<code>window.ATLAS_DATA.meta</code>). The timeline shows/hides points via a GPU point shader, so sliding the window does not rebuild all geometry; the event list renders only a small part of the current window.'],
    metaGeneratedPrefix: ['生成于 ', 'GENERATED '],
    recordsTotal: [' · 总计 ', ' · '],
    recordsTotalTail: [' 条记录（含 ', ' records total (incl. '],
    campaignLinesTail: [' 条战役线）', ' campaign lines)'],
    sourcesHeading: ['来源', 'Sources'],
    contextHeading: ['背景', 'Context'],
    impactHeading: ['影响', 'Impact'],
    confHighLabel: ['高置信度', 'High confidence'],
    confMedLabel: ['中置信度', 'Medium confidence'],
    confLowLabel: ['低置信度', 'Low confidence']
  };
  function t(key) {
    var v = I18N[key];
    if (!v) return '';
    return isEN() ? v[1] : v[0];
  }

  /* 资源缺失属于致命错误：文案走同一套字典，语言取 state.lang（URL ?lang=en 已提前生效）。 */
  if (!window.THREE) {
    showError(t('errThree'));
    return;
  }
  if (!DATA || !Array.isArray(DATA.events)) {
    showError(t('errData'));
    return;
  }

  function applyLang() {
    document.documentElement.lang = isEN() ? 'en' : 'zh-CN';
    document.documentElement.setAttribute('data-lang', state.lang);
    document.title = isEN() ? 'Age of War · Global Conflict 3D Timeline' : '战争纪元 · 全球冲突 3D 地球时间轴';
    $all('[data-i18n]').forEach(function (el) {
      var k = el.getAttribute('data-i18n');
      var v = I18N[k];
      if (v) el.innerHTML = isEN() ? v[1] : v[0];
    });
    $all('[data-i18n-title]').forEach(function (el) {
      var k = el.getAttribute('data-i18n-title');
      var v = I18N[k];
      if (v) el.title = isEN() ? v[1] : v[0];
    });
    $all('[data-i18n-aria]').forEach(function (el) {
      var k = el.getAttribute('data-i18n-aria');
      var v = I18N[k];
      if (v) el.setAttribute('aria-label', isEN() ? v[1] : v[0]);
    });
    var lb = $('#langBtn');
    if (lb) lb.textContent = isEN() ? '中文' : 'English';
    var pb = $('#playBtn');
    if (pb) pb.textContent = state.playing ? L('❚❚ 暂停', '❚❚ Pause') : L('▶ 播放', '▶ Play');
    var zn = $('#zoneNote');
    if (zn) { zn.hidden = !state.zone; zn.classList.toggle('on', state.zone); }
    var vb = $('#viewBtn');
    if (vb) vb.textContent = state.flat ? t('viewGlobe') : t('viewFlat');
    syncOverlayUI();
    buildEraChips();
    buildCenturySelect();
    updateEraUI(false);
    fillMeta();
    listDirty = true;
    renderList();
    renderWarList();
    updateStats();
    buildZones();
    lastHlKey = '';
    updateHighlight();
    if (state.selectedWar >= 0 && WARS[state.selectedWar]) {
      renderDetailWar(WARS[state.selectedWar]);
    } else if (state.selectedCampaign >= 0 && CAMPAIGNS[state.selectedCampaign]) {
      renderDetailCampaign(CAMPAIGNS[state.selectedCampaign], state.selectedCampaign);
    } else if (state.selected >= 0 && EV[state.selected]) {
      renderDetailEvent(EV[state.selected]);
    } else if (detailEl.hidden) {
      rightTitle.textContent = L('事件流', 'Event stream');
      rightSubline.textContent = L('按时间窗筛选 · 共 ' + listFiltered.length + ' 条', 'Filtered by window · ' + listFiltered.length + ' records');
    }
  }

  /* ---------------- 三维场景 ---------------- */
  var canvas = $('#globe');
  var renderer, scene, camera, controls;
  var W = 1, H = 1, DPR = 1;
  var raycaster = new THREE.Raycaster();
  var pointer = new THREE.Vector2();
  var clock = new THREE.Clock();

  function latLonToVec3(lat, lon, radius) {
    var phi = (90 - lat) * Math.PI / 180;
    var theta = (lon + 180) * Math.PI / 180;
    var r = radius == null ? 1 : radius;
    return new THREE.Vector3(
      -r * Math.sin(phi) * Math.cos(theta),
      r * Math.cos(phi),
      r * Math.sin(phi) * Math.sin(theta)
    );
  }

  /* 软件渲染检测：SwiftShader/llvmpipe 下关闭 MSAA（软件光栅化成本极高），
     并以较低初始分辨率起步；真实 GPU 不受影响。 */
  function detectSoftwareGL() {
    try {
      var c = document.createElement('canvas');
      var g = c.getContext('webgl') || c.getContext('experimental-webgl');
      if (!g) return false;
      var ext = g.getExtension('WEBGL_debug_renderer_info');
      var rn = ext ? g.getParameter(ext.UNMASKED_RENDERER_WEBGL) : '';
      return /swiftshader|llvmpipe|software|basic render/i.test(String(rn));
    } catch (e) { return false; }
  }
  var SOFT_GL = detectSoftwareGL();
  try {
    renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: !SOFT_GL, alpha: true, powerPreference: 'high-performance' });
  } catch (err) {
    showError(t('errWebGL'), String(err && err.message || err));
    return;
  }
  /* 自适应分辨率：DPR 基数 × 动态缩放（0.5–1.0），按实测 FPS 自动调节 */
  var DPR_BASE = Math.min(window.devicePixelRatio || 1, 2);
  var dprScale = SOFT_GL ? 0.8 : 1;
  DPR = DPR_BASE * dprScale;
  renderer.setPixelRatio(DPR);
  function applyPixelScale() {
    DPR = DPR_BASE * dprScale;
    renderer.setPixelRatio(DPR);
    resize();
  }
  renderer.setClearColor(0x040607, 0);

  scene = new THREE.Scene();
  scene.fog = null;
  camera = new THREE.PerspectiveCamera(42, 1, 0.1, 300);
  var INIT_LAT = 28, INIT_LON = 42, INIT_DIST = 4.18;
  camera.position.copy(latLonToVec3(INIT_LAT, INIT_LON, 6.0));
  camera.position.multiplyScalar(1);

  controls = new THREE.OrbitControls(camera, canvas);
  controls.enableDamping = true;
  controls.dampingFactor = 0.075;
  controls.rotateSpeed = 0.42;
  controls.zoomSpeed = 0.65;
  controls.enablePan = false;
  controls.minDistance = 1.55;
  controls.maxDistance = 7.5;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 0.22;
  controls.target.set(0, 0, 0);
  canvas.addEventListener('pointerdown', function () { controls.autoRotate = false; }, { passive: true });
  canvas.addEventListener('wheel', function () { controls.autoRotate = false; }, { passive: true });

  /* ---------------- 地球 ---------------- */
  var earthUniforms = {
    uDay: { value: null },
    uNight: { value: null },
    uSun: { value: new THREE.Vector3(0, 0, 1) }
  };
  var earthMat = new THREE.ShaderMaterial({
    uniforms: earthUniforms,
    vertexShader: [
      'varying vec2 vUv;',
      'varying vec3 vNormalW;',
      'varying vec3 vWorld;',
      'void main(){',
      '  vUv = uv;',
      '  vNormalW = normalize(mat3(modelMatrix) * normal);',
      '  vec4 wp = modelMatrix * vec4(position, 1.0);',
      '  vWorld = wp.xyz;',
      '  gl_Position = projectionMatrix * viewMatrix * wp;',
      '}'
    ].join('\n'),
    fragmentShader: [
      'uniform sampler2D uDay;',
      'uniform sampler2D uNight;',
      'uniform vec3 uSun;',
      'varying vec2 vUv;',
      'varying vec3 vNormalW;',
      'varying vec3 vWorld;',
      'void main(){',
      '  vec3 N = normalize(vNormalW);',
      '  vec3 V = normalize(cameraPosition - vWorld);',
      '  vec3 S = normalize(uSun);',
      '  vec3 day = texture2D(uDay, vUv).rgb;',
      '  vec3 night = texture2D(uNight, vUv).rgb;',
      /* 水体掩膜：日贴图里海洋明显偏蓝，用来只给海面加高光 */
      '  float ocean = smoothstep(0.05, 0.26, day.b - day.r) * smoothstep(0.03, 0.14, day.b);',
      /* 两向亮度梯度做轻微地形起伏（不引入离线法线贴图） */
      '  float texel = 1.0 / 2048.0;',
      '  float hL = dot(texture2D(uDay, vUv - vec2(texel, 0.0)).rgb, vec3(0.299, 0.587, 0.114));',
      '  float hD = dot(texture2D(uDay, vUv - vec2(0.0, texel)).rgb, vec3(0.299, 0.587, 0.114));',
      '  float hC = dot(day, vec3(0.299, 0.587, 0.114));',
      '  float relief = clamp((hC - (hL + hD) * 0.5) * 2.4, -0.35, 0.35) * (1.0 - ocean);',
      '  float l = dot(N, S);',
      '  float m = smoothstep(-0.20, 0.30, l);',
      '  vec3 dayCol = day * (0.90 + relief * 0.30);',
      '  dayCol = mix(dayCol, dayCol * vec3(1.05, 1.0, 0.93), 0.35);',
      '  vec3 nightCol = night * vec3(0.82, 1.0, 1.22) * 1.08 + vec3(0.007, 0.013, 0.021);',
      '  vec3 col = mix(nightCol, dayCol, m);',
      /* 海面高光：Blinn-Phong，只在日照侧出现 */
      '  vec3 H = normalize(V + S);',
      '  float spec = pow(max(dot(N, H), 0.0), 42.0) * ocean * smoothstep(0.0, 0.30, l);',
      '  col += vec3(0.86, 0.92, 1.0) * spec * 0.42;',
      /* 边缘菲涅尔冷光，让球体轮廓与大气更连续 */
      '  float rim = pow(1.0 - max(dot(N, V), 0.0), 3.4);',
      '  col += vec3(0.10, 0.21, 0.26) * rim * (0.30 + 0.70 * m);',
      '  float g = dot(col, vec3(0.299, 0.587, 0.114));',
      '  col = mix(col, vec3(g), 0.20);',
      '  col = col * vec3(0.92, 0.96, 0.94);',
      '  gl_FragColor = vec4(col, 1.0);',
      '}'
    ].join('\n')
  });
  var earth = new THREE.Mesh(new THREE.SphereGeometry(1, 96, 54), earthMat);
  scene.add(earth);

  var loaderMgr = new THREE.TextureLoader();
  var TEX = window.ATLAS_TEXTURES || {};
  var daySrc = TEX.day || 'assets/earth_atmos.jpg';
  var nightSrc = TEX.night || 'assets/earth_lights.png';
  loaderMgr.load(daySrc, function (tex) {
    tex.anisotropy = renderer.capabilities.getMaxAnisotropy();
    earthUniforms.uDay.value = tex;
  }, undefined, function () {
    showError(t('errTexDay'));
  });
  loaderMgr.load(nightSrc, function (tex) {
    tex.anisotropy = renderer.capabilities.getMaxAnisotropy();
    earthUniforms.uNight.value = tex;
  }, undefined, function () {
    showError(t('errTexNight'));
  });

  // 太阳与初始视线对齐，保证正面大陆明亮、背面进入夜面
  earthUniforms.uSun.value.copy(latLonToVec3(INIT_LAT + 6, INIT_LON - 18, 1)).normalize();

  // 大气辉光：菲涅尔轮廓 + 日照侧散射（离线着色器，无外部资源）
  var atmoUniforms = { uSun: earthUniforms.uSun };
  var atmoMat = new THREE.ShaderMaterial({
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    side: THREE.BackSide,
    uniforms: atmoUniforms,
    vertexShader: [
      'varying vec3 vN;',
      'varying vec3 vWorld;',
      'void main(){',
      '  vN = normalize(mat3(modelMatrix) * normal);',
      '  vec4 wp = modelMatrix * vec4(position, 1.0);',
      '  vWorld = wp.xyz;',
      '  gl_Position = projectionMatrix * viewMatrix * wp;',
      '}'
    ].join('\n'),
    fragmentShader: [
      'uniform vec3 uSun;',
      'varying vec3 vN;',
      'varying vec3 vWorld;',
      'void main(){',
      '  vec3 N = normalize(vN);',
      '  vec3 V = normalize(cameraPosition - vWorld);',
      '  vec3 S = normalize(uSun);',
      '  float fres = pow(1.0 - max(dot(N, V), 0.0), 3.0);',
      '  float lit = smoothstep(-0.42, 0.45, dot(N, S));',
      '  vec3 cool = vec3(0.15, 0.40, 0.56);',
      '  vec3 warm = vec3(0.58, 0.74, 0.86);',
      '  vec3 c = mix(cool, warm, lit * 0.60);',
      '  gl_FragColor = vec4(c, fres * (0.26 + 0.90 * lit) * 0.82);',
      '}'
    ].join('\n')
  });
  scene.add(new THREE.Mesh(new THREE.SphereGeometry(1.16, 64, 32), atmoMat));

  /* 云层：程序化 canvas 噪声贴图（离线生成，无外部图片），
     半径压在国界/事件点之下，避免遮挡数据层。 */
  var cloudUniforms = { uCloud: { value: null }, uSun: earthUniforms.uSun };
  (function buildClouds() {
    var CW = 1024, CH = 512;
    var cv = document.createElement('canvas');
    cv.width = CW; cv.height = CH;
    var cx = cv.getContext('2d');
    var img = cx.createImageData(CW, CH);
    var seedA = 1.37;
    function hash(x, y, s) {
      var n = Math.sin(x * 127.1 + y * 311.7 + s * 74.7) * 43758.5453;
      return n - Math.floor(n);
    }
    function noise(x, y, s) {
      var xi = Math.floor(x), yi = Math.floor(y);
      var xf = x - xi, yf = y - yi;
      var u = xf * xf * (3 - 2 * xf), v = yf * yf * (3 - 2 * yf);
      var a = hash(xi, yi, s), b = hash(xi + 1, yi, s);
      var c = hash(xi, yi + 1, s), d = hash(xi + 1, yi + 1, s);
      return (a * (1 - u) + b * u) * (1 - v) + (c * (1 - u) + d * u) * v;
    }
    for (var y = 0; y < CH; y++) {
      var lat = 90 - y / CH * 180;
      /* 纬向带：赤道辐合带多云、副热带少云、中纬风暴带多云 */
      var band = 0.5 + 0.34 * Math.cos((lat / 90) * Math.PI * 2.6);
      for (var x = 0; x < CW; x++) {
        var u2 = x / CW * 12, v2 = y / CH * 6;
        var f = 0, amp = 0.62;
        for (var o = 0; o < 5; o++) {
          f += noise(u2, v2, seedA + o * 3.7) * amp;
          u2 *= 2.03; v2 *= 2.03; amp *= 0.52;
        }
        f = f / 1.2;
        var a2 = (f - (0.56 - band * 0.28)) / 0.24;
        a2 = clamp(a2, 0, 1);
        a2 = a2 * a2 * (3 - 2 * a2);
        /* 极区淡化，避免两极糊成一片 */
        var polar = 1 - Math.pow(Math.abs(lat) / 90, 6) * 0.85;
        var idx = (y * CW + x) * 4;
        var shade = 235 + Math.round(20 * f);
        img.data[idx] = shade;
        img.data[idx + 1] = shade;
        img.data[idx + 2] = Math.min(255, shade + 6);
        img.data[idx + 3] = Math.round(a2 * 210 * polar);
      }
    }
    cx.putImageData(img, 0, 0);
    var tex = new THREE.CanvasTexture(cv);
    tex.wrapS = THREE.RepeatWrapping;
    tex.minFilter = THREE.LinearFilter;
    tex.magFilter = THREE.LinearFilter;
    cloudUniforms.uCloud.value = tex;
    var cloudMat = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      uniforms: cloudUniforms,
      vertexShader: [
        'varying vec2 vUv;',
        'varying vec3 vN;',
        'void main(){',
        '  vUv = uv;',
        '  vN = normalize(mat3(modelMatrix) * normal);',
        '  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);',
        '}'
      ].join('\n'),
      fragmentShader: [
        'uniform sampler2D uCloud;',
        'uniform vec3 uSun;',
        'varying vec2 vUv;',
        'varying vec3 vN;',
        'void main(){',
        '  vec4 c = texture2D(uCloud, vUv);',
        '  float lit = smoothstep(-0.25, 0.45, dot(normalize(vN), normalize(uSun)));',
        '  float a = c.a * (0.20 + 0.86 * lit);',
        '  gl_FragColor = vec4(vec3(0.88, 0.92, 0.96) * (0.60 + 0.55 * lit), a);',
        '}'
      ].join('\n')
    });
    var clouds = new THREE.Mesh(new THREE.SphereGeometry(1.006, 72, 40), cloudMat);
    scene.add(clouds);
    window.__ATLAS_CLOUDS = clouds;
  })();

  // 经纬网
  (function buildGraticule() {
    var pts = [];
    var step = 15;
    for (var lon = -180; lon < 180; lon += 30) {
      for (var la = -90; la < 90; la += step) {
        pts.push(latLonToVec3(la, lon, 1.0025), latLonToVec3(la + step, lon, 1.0025));
      }
    }
    for (var lat = -75; lat <= 75; lat += 30) {
      for (var lo = -180; lo < 180; lo += step) {
        pts.push(latLonToVec3(lat, lo, 1.0025), latLonToVec3(lat, lo + step, 1.0025));
      }
    }
    var geo = new THREE.BufferGeometry().setFromPoints(pts);
    var mat = new THREE.LineBasicMaterial({ color: 0x7fa39c, transparent: true, opacity: 0.085, depthWrite: false });
    scene.add(new THREE.LineSegments(geo, mat));
  })();

  // 国界（TopoJSON → 经纬线）
  (function buildBorders() {
    if (!window.WORLD_ATLAS || !window.topojson) return;
    var world = window.WORLD_ATLAS;
    var features = window.topojson.feature(world, world.objects.countries).features;
    var pts = [];
    features.forEach(function (f) {
      var geom = f.geometry;
      if (!geom) return;
      var polys = geom.type === 'Polygon' ? [geom.coordinates] : (geom.type === 'MultiPolygon' ? geom.coordinates : []);
      polys.forEach(function (poly) {
        poly.forEach(function (ring) {
          for (var i = 1; i < ring.length; i++) {
            var a = ring[i - 1], b = ring[i];
            pts.push(latLonToVec3(a[1], a[0], 1.004), latLonToVec3(b[1], b[0], 1.004));
          }
        });
      });
    });
    var geo = new THREE.BufferGeometry().setFromPoints(pts);
    var mat = new THREE.LineBasicMaterial({ color: 0xc9b487, transparent: true, opacity: 0.26, depthWrite: false });
    scene.add(new THREE.LineSegments(geo, mat));
  })();

  // 一级行政区边界（Natural Earth admin-1，默认可见，更细更淡）
  // 性能：折线一次性烘焙进 2048×1024 贴图，用单个 Mesh 渲染，
  // 替代约 6 万段 LineSegments（软件光栅化下逐帧绘制成本极高）。
  var admin1Layer = null;
  (function buildAdmin1() {
    var LINES = window.ADMIN1_LINES;
    if (!LINES || !LINES.length) return;
    var cv = document.createElement('canvas');
    cv.width = 2048; cv.height = 1024;
    var cx = cv.getContext('2d');
    cx.strokeStyle = 'rgba(143,179,168,0.16)';
    cx.lineWidth = 1;
    for (var j = 0; j < LINES.length; j++) {
      var line = LINES[j];
      if (line.length < 2) continue;
      cx.beginPath();
      var px = 0;
      for (var m = 0; m < line.length; m++) {
        var x = (line[m][0] + 180) / 360 * cv.width;
        var y = (90 - line[m][1]) / 180 * cv.height;
        // 抗子午线断裂：跨 ±180° 的段不落笔
        if (m === 0 || Math.abs(x - px) > cv.width / 2) cx.moveTo(x, y);
        else cx.lineTo(x, y);
        px = x;
      }
      cx.stroke();
    }
    var tex = new THREE.CanvasTexture(cv);
    tex.minFilter = THREE.LinearFilter;
    tex.magFilter = THREE.LinearFilter;
    admin1Layer = new THREE.Mesh(
      new THREE.SphereGeometry(1.0035, 96, 54),
      new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false })
    );
    scene.add(admin1Layer);
  })();

  /* ---------------- 交战国整国高亮（Canvas 贴图叠加球面） ---------------- */
  var HL_W = 2048, HL_H = 1024;
  var hlCanvas = document.createElement('canvas');
  hlCanvas.width = HL_W; hlCanvas.height = HL_H;
  var hlCtx = hlCanvas.getContext('2d');
  var hlTexture = new THREE.CanvasTexture(hlCanvas);
  hlTexture.minFilter = THREE.LinearFilter;
  hlTexture.magFilter = THREE.LinearFilter;
  var hlMesh = new THREE.Mesh(
    new THREE.SphereGeometry(1.007, 96, 54),
    new THREE.MeshBasicMaterial({ map: hlTexture, transparent: true, depthWrite: false, opacity: 0.9 })
  );
  hlMesh.visible = false;
  scene.add(hlMesh);

  var countryPaths = null;
  var countryByIso = {};
  function buildCountryPaths() {
    if (countryPaths || !window.WORLD_ATLAS || !window.topojson) return;
    var features = window.topojson.feature(window.WORLD_ATLAS, window.WORLD_ATLAS.objects.countries).features;
    countryPaths = [];
    features.forEach(function (f) {
      var iso = String(f.id == null ? '' : f.id).padStart(3, '0');
      var geom = f.geometry;
      if (!geom) return;
      var polys = geom.type === 'Polygon' ? [geom.coordinates] : (geom.type === 'MultiPolygon' ? geom.coordinates : []);
      var p = new Path2D();
      var has = false;
      polys.forEach(function (poly) {
        poly.forEach(function (ring) {
          for (var i = 0; i < ring.length; i++) {
            var x = (ring[i][0] + 180) / 360 * HL_W;
            var y = (90 - ring[i][1]) / 180 * HL_H;
            if (i === 0) p.moveTo(x, y); else p.lineTo(x, y);
          }
          p.closePath();
          has = true;
        });
      });
      if (has) {
        countryPaths.push({ iso: iso, path: p, feature: f });
        countryByIso[iso] = f;
      }
    });
  }

  function drawCountryFill(iso, color) {
    var cp = null;
    for (var i = 0; i < countryPaths.length; i++) if (countryPaths[i].iso === iso) { cp = countryPaths[i]; break; }
    if (!cp) return;
    hlCtx.fillStyle = color;
    // 抗子午线断裂：在 -W / 0 / +W 三个位置绘制
    for (var off = -1; off <= 1; off++) {
      hlCtx.save();
      hlCtx.translate(off * HL_W, 0);
      hlCtx.fill(cp.path);
      hlCtx.restore();
    }
  }

  var lastHlKey = '';
  var hlTimer = 0;
  function updateHighlight() {
    if (!state.highlight) { hlMesh.visible = false; lastHlKey = ''; return; }
    buildCountryPaths();
    if (!countryPaths || !countryPaths.length) return;
    var aw = activeWars().filter(function (w) {
      if (!w.listed) return false;
      var sd = warSides(w);
      return (sd.a.length || sd.b.length) && (w.count || 0) > 0;
    });
    var sel = state.selectedWar >= 0 ? WARS[state.selectedWar] : null;
    if (sel && warIsActive(sel)) aw = [sel];
    aw = aw.slice(0, 26);
    var key = aw.map(function (w) { return w.i; }).join(',');
    if (key === lastHlKey && hlMesh.visible) return;
    lastHlKey = key;
    hlCtx.clearRect(0, 0, HL_W, HL_H);
    aw.forEach(function (w) {
      var sd = warSides(w);
      /* 双方落在同一国家（同一现代国界）→ 紫色“控制区示意”，不重复叠色 */
      var shared = sd.a.filter(function (iso) { return sd.b.indexOf(iso) >= 0; });
      sd.a.forEach(function (iso) {
        drawCountryFill(iso, shared.indexOf(iso) >= 0 ? 'rgba(160,110,192,.26)' : 'rgba(77,138,214,.24)');
      });
      sd.b.forEach(function (iso) {
        if (shared.indexOf(iso) >= 0) return;
        drawCountryFill(iso, 'rgba(210,96,63,.24)');
      });
    });
    hlTexture.needsUpdate = true;
    hlMesh.visible = true;
  }
  function scheduleHighlight() {
    if (hlTimer) return;
    hlTimer = setTimeout(function () { hlTimer = 0; updateHighlight(); }, 140);
  }

  /* ---------------- 战区模式（事件聚类 + 凸包，近似） ---------------- */
  var ZONE_W = 2048, ZONE_H = 1024;
  var zoneCanvas = document.createElement('canvas');
  zoneCanvas.width = ZONE_W; zoneCanvas.height = ZONE_H;
  var zoneCtx = zoneCanvas.getContext('2d');
  var zoneTexture = new THREE.CanvasTexture(zoneCanvas);
  zoneTexture.minFilter = THREE.LinearFilter;
  var zoneMesh = new THREE.Mesh(
    new THREE.SphereGeometry(1.010, 96, 54),
    new THREE.MeshBasicMaterial({ map: zoneTexture, transparent: true, depthWrite: false, opacity: 0.95 })
  );
  zoneMesh.visible = false;
  scene.add(zoneMesh);
  var zoneLabelsEl = $('#zoneLabels');
  var zoneZones = [];

  function convexHull(points) {
    if (points.length < 3) return points.slice();
    var pts = points.slice().sort(function (a, b) { return a[0] - b[0] || a[1] - b[1]; });
    function cross(o, a, b) { return (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]); }
    var lower = [];
    for (var i = 0; i < pts.length; i++) {
      while (lower.length >= 2 && cross(lower[lower.length - 2], lower[lower.length - 1], pts[i]) <= 0) lower.pop();
      lower.push(pts[i]);
    }
    var upper = [];
    for (var j = pts.length - 1; j >= 0; j--) {
      while (upper.length >= 2 && cross(upper[upper.length - 2], upper[upper.length - 1], pts[j]) <= 0) upper.pop();
      upper.push(pts[j]);
    }
    lower.pop(); upper.pop();
    return lower.concat(upper);
  }
  function gridClusters(pts) {
    var cell = 6, map = {};
    pts.forEach(function (p) {
      var gx = Math.floor((p[0] + 180) / cell), gy = Math.floor((p[1] + 90) / cell);
      var k = gx + ':' + gy;
      (map[k] = map[k] || []).push(p);
    });
    var keys = Object.keys(map), seen = {}, out = [];
    keys.forEach(function (k) {
      if (seen[k]) return;
      var stack = [k], cells = [];
      seen[k] = 1;
      while (stack.length) {
        var cur = stack.pop();
        cells.push(cur);
        var parts = cur.split(':'), gx = +parts[0], gy = +parts[1];
        for (var dx = -1; dx <= 1; dx++) for (var dy = -1; dy <= 1; dy++) {
          var nk = (gx + dx) + ':' + (gy + dy);
          if (map[nk] && !seen[nk]) { seen[nk] = 1; stack.push(nk); }
        }
      }
      var list = [];
      cells.forEach(function (c) { list = list.concat(map[c]); });
      if (list.length >= 3) out.push(list);
    });
    return out;
  }
  /* 战区推断（阶段 3）
     输入：当前年份 Y、时间窗 W 内、且战争在 Y 年仍进行的所有 battle/siege 事件点。
     算法：6°×6° 网格聚类（八邻域 BFS 连通）→ 每簇 ≥3 点 → 凸包 → 沿质心外扩
           12%（下限 0.30°，上限 1.60°）。每场战争一种颜色，最多 6 场战争、12 个标注。
     输出仅为“事件点推断的近似示意”，不是官方战线。 */
  function zonePointInWindow(e, w) {
    if (e.wi !== w.i) return false;
    if (e.t !== 'battle' && e.t !== 'siege') return false;
    if (!state.types[e.t] || !regionAllowed(e.r)) return false;
    if (e.y > state.year + 0.01) return false;
    if (state.window < 9000 && e.y < state.year - state.window) return false;
    return warActiveAt(e.ws, e.we);
  }
  function buildZones() {
    zoneCtx.clearRect(0, 0, ZONE_W, ZONE_H);
    zoneZones = [];
    if (!state.zone || state.overlay) { zoneMesh.visible = false; if (zoneLabelsEl) zoneLabelsEl.innerHTML = ''; return; }
    var aw = activeWars().filter(function (w) { return w.listed && (w.count || 0) >= 3; });
    var sel = state.selectedWar >= 0 ? WARS[state.selectedWar] : null;
    if (sel && warIsActive(sel)) aw = [sel];
    aw.sort(function (a, b) { return (b.count || 0) - (a.count || 0); });
    /* 同一国家/同一冲突的多条 UCDP 区间记录会大面积重叠，只保留事件最多的一条 */
    var seenBase = {};
    aw = aw.filter(function (w) {
      var base = String(w.n).replace(/（.*$/, '').trim();
      if (seenBase[base]) return false;
      seenBase[base] = 1;
      return true;
    });
    aw = aw.slice(0, 6);
    var palette = ['#e37a3f', '#d9b45a', '#68a9c4', '#c96a8e', '#7bbf8a', '#b58bd0'];
    aw.forEach(function (w, wi) {
      var pts = EV.filter(function (e) { return zonePointInWindow(e, w); });
      if (pts.length < 3) return;
      var wcx = 0, wcy = 0;
      pts.forEach(function (e) { wcx += e.o; wcy += e.a; });
      wcx /= pts.length; wcy /= pts.length;
      var cl = gridClusters(pts.map(function (e) { return [e.o, e.a]; }));
      cl.forEach(function (list, ci) {
        var hull = convexHull(list);
        if (hull.length < 3) return;
        var cx = 0, cy = 0;
        hull.forEach(function (p) { cx += p[0]; cy += p[1]; });
        cx /= hull.length; cy /= hull.length;
        var expanded = hull.map(function (p) {
          var dx = p[0] - cx, dy = p[1] - cy;
          var len = Math.sqrt(dx * dx + dy * dy) || 1;
          var add = Math.min(1.6, Math.max(0.3, len * 0.12));
          return [p[0] + dx / len * add, p[1] + dy / len * add];
        });
        var color = palette[wi % palette.length];
        zoneCtx.beginPath();
        expanded.forEach(function (p, k) {
          var x = (p[0] + 180) / 360 * ZONE_W, y = (90 - p[1]) / 180 * ZONE_H;
          if (k === 0) zoneCtx.moveTo(x, y); else zoneCtx.lineTo(x, y);
        });
        zoneCtx.closePath();
        zoneCtx.fillStyle = color + '26';
        zoneCtx.fill();
        /* 深色描边打底 + 彩色虚线：多战区重叠时仍能分辨边界 */
        zoneCtx.strokeStyle = 'rgba(4,8,10,.65)';
        zoneCtx.lineWidth = 5;
        zoneCtx.stroke();
        zoneCtx.strokeStyle = color;
        zoneCtx.lineWidth = 2.8;
        zoneCtx.setLineDash([8, 5]);
        zoneCtx.stroke();
        zoneCtx.setLineDash([]);
        var dir = cl.length > 1 ? '' : L('主战区', 'Main zone');
        if (cl.length > 1) {
          if (Math.abs(cx - wcx) > Math.abs(cy - wcy)) dir = cx < wcx ? L('西线', 'West') : L('东线', 'East');
          else dir = cy < wcy ? L('南区', 'South') : L('北区', 'North');
          if (cl.length > 2) dir += ' ' + (ci + 1);
        }
        zoneZones.push({
          lat: cy, lon: cx, color: color, events: list.length, hull: expanded.length,
          text: L('战区 · ', 'Zone · ') + (dir || (L('第 ', 'No. ') + (ci + 1))),
          war: dualName(w.n, w.en)
        });
      });
    });
    zoneTexture.needsUpdate = true;
    zoneMesh.visible = zoneZones.length > 0;
    if (zoneLabelsEl) {
      zoneLabelsEl.innerHTML = zoneZones.slice(0, 12).map(function (z, i) {
        return '<div class="zone-label" data-zi="' + i + '" style="--zc:' + z.color + '"><b>' + esc(z.text) + '</b><span>' + esc(z.war) + '</span></div>';
      }).join('');
    }
  }
  var zoneTimer = 0;
  function scheduleZones() {
    if (zoneTimer) return;
    zoneTimer = setTimeout(function () { zoneTimer = 0; buildZones(); }, 160);
  }
  function positionZoneLabels() {
    if (!state.zone || !zoneLabelsEl || !zoneZones.length) return;
    var rect = canvas.getBoundingClientRect();
    var nodes = zoneLabelsEl.children;
    var placed = [];
    zoneZones.slice(0, 12).forEach(function (z, i) {
      var node = nodes[i];
      if (!node) return;
      var v = latLonToVec3(z.lat, z.lon, 1.02);
      var camDir = v.clone().normalize();
      var toCam = camera.position.clone().normalize();
      var visible = camDir.dot(toCam) > 0.12;
      if (!visible) { node.style.display = 'none'; node.classList.remove('on'); return; }
      var p = v.clone().project(camera);
      var left = clamp((p.x * 0.5 + 0.5) * rect.width, 48, rect.width - 48);
      var top = clamp((-p.y * 0.5 + 0.5) * rect.height, 32, rect.height - 32);
      /* 战区在地理上重叠时，标签依次下移，避免叠字 */
      for (var guard = 0; guard < 5; guard++) {
        var hit = placed.some(function (q) {
          return Math.abs(top - q.top) < 30 && Math.abs(left - q.left) < 150;
        });
        if (!hit) break;
        top += 30;
      }
      top = clamp(top, 32, rect.height - 32);
      placed.push({ left: left, top: top });
      node.style.display = '';
      node.classList.add('on');
      node.style.left = left + 'px';
      node.style.top = top + 'px';
    });
  }

  // 星空
  (function buildStars() {
    var n = 2200, arr = new Float32Array(n * 3), col = new Float32Array(n * 3);
    for (var i = 0; i < n; i++) {
      var r = 44 + Math.random() * 55;
      var t = Math.random() * Math.PI * 2;
      var p = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(p) * Math.cos(t);
      arr[i * 3 + 1] = r * Math.cos(p);
      arr[i * 3 + 2] = r * Math.sin(p) * Math.sin(t);
      var b = 0.35 + Math.random() * 0.65;
      col[i * 3] = b * 0.92; col[i * 3 + 1] = b * 0.94; col[i * 3 + 2] = b;
    }
    var geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(arr, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
    var starCv = document.createElement('canvas');
    starCv.width = starCv.height = 32;
    var starCtx = starCv.getContext('2d');
    var sg = starCtx.createRadialGradient(16, 16, 0, 16, 16, 16);
    sg.addColorStop(0, 'rgba(255,255,255,1)');
    sg.addColorStop(0.35, 'rgba(255,255,255,0.55)');
    sg.addColorStop(1, 'rgba(255,255,255,0)');
    starCtx.fillStyle = sg;
    starCtx.fillRect(0, 0, 32, 32);
    var starTex = new THREE.CanvasTexture(starCv);
    var mat = new THREE.PointsMaterial({ size: 0.20, sizeAttenuation: true, vertexColors: true, transparent: true, opacity: 0.8, depthWrite: false, map: starTex, alphaTest: 0.02 });
    scene.add(new THREE.Points(geo, mat));
  })();

  /* ---------------- 事件点（GPU 按年份显隐） ---------------- */
  var N = EV.length;
  var posArr = new Float32Array(N * 3);
  var aYear = new Float32Array(N);
  var aEnd = new Float32Array(N);
  var aType = new Float32Array(N);
  var aConf = new Float32Array(N);
  var aWeight = new Float32Array(N);
  var aRegion = new Float32Array(N);
  var aDs = new Float32Array(N);
  var aSel = new Float32Array(N);
  var aWarS = new Float32Array(N);
  var aWarE = new Float32Array(N);
  /* 叠加态抽稀用的稳定排名（0–1）：由索引做整数散列，拖动年份时抽样结果稳定不闪烁 */
  var aRank = new Float32Array(N);
  var regionIndex = {};
  REGIONS.forEach(function (r, i) { regionIndex[r] = i; });

  function hashRank(i) {
    var x = (i * 2654435761) >>> 0;
    x ^= x >>> 13;
    x = (x * 1274126177) >>> 0;
    x ^= x >>> 16;
    return (x >>> 0) / 4294967296;
  }

  EV.forEach(function (e, i) {
    var v = latLonToVec3(e.a, e.o, 1.012);
    posArr[i * 3] = v.x; posArr[i * 3 + 1] = v.y; posArr[i * 3 + 2] = v.z;
    aYear[i] = e.y;
    aEnd[i] = (e.e == null ? e.y : e.e);
    aType[i] = TYPES[e.t] ? TYPES[e.t].code : 0;
    aConf[i] = CONF[e.c] ? CONF[e.c].v : 0.5;
    aWeight[i] = e.w || 0.34;
    aRegion[i] = regionIndex[e.r] == null ? 0 : regionIndex[e.r];
    aDs[i] = e.ds === 'U' ? 0 : (e.ds === 'C' ? 2 : 1);
    aSel[i] = 0;
    aWarS[i] = e.ws;
    aWarE[i] = e.we;
    aRank[i] = hashRank(i);
  });

  var eventGeo = new THREE.BufferGeometry();
  eventGeo.setAttribute('position', new THREE.BufferAttribute(posArr, 3));
  eventGeo.setAttribute('aYear', new THREE.BufferAttribute(aYear, 1));
  eventGeo.setAttribute('aEnd', new THREE.BufferAttribute(aEnd, 1));
  eventGeo.setAttribute('aType', new THREE.BufferAttribute(aType, 1));
  eventGeo.setAttribute('aConf', new THREE.BufferAttribute(aConf, 1));
  eventGeo.setAttribute('aWeight', new THREE.BufferAttribute(aWeight, 1));
  eventGeo.setAttribute('aRegion', new THREE.BufferAttribute(aRegion, 1));
  eventGeo.setAttribute('aDs', new THREE.BufferAttribute(aDs, 1));
  eventGeo.setAttribute('aSel', new THREE.BufferAttribute(aSel, 1));
  eventGeo.setAttribute('aWarS', new THREE.BufferAttribute(aWarS, 1));
  eventGeo.setAttribute('aWarE', new THREE.BufferAttribute(aWarE, 1));
  eventGeo.setAttribute('aRank', new THREE.BufferAttribute(aRank, 1));

  var eventUniforms = {
    uYear: { value: state.year },
    uWindow: { value: state.window },
    uHighOnly: { value: 0 },
    uRegionMask: { value: 63 },
    uT0: { value: 1 }, uT1: { value: 1 }, uT2: { value: 1 }, uT3: { value: 1 },
    uHideU: { value: 0 },
    uSizeScale: { value: 1000 },
    uTime: { value: 0 },
    uOverlay: { value: 0 },
    uOverlayKeep: { value: 1 },
    uOverlaySpan: { value: 1 }
  };

  var eventMat = new THREE.ShaderMaterial({
    uniforms: eventUniforms,
    transparent: true,
    depthWrite: false,
    depthTest: true,
    blending: THREE.AdditiveBlending,
    vertexShader: [
      'attribute float aYear;',
      'attribute float aEnd;',
      'attribute float aType;',
      'attribute float aConf;',
      'attribute float aWeight;',
      'attribute float aRegion;',
      'attribute float aDs;',
      'attribute float aSel;',
      'attribute float aWarS;',
      'attribute float aWarE;',
      'attribute float aRank;',
      'uniform float uYear;',
      'uniform float uWindow;',
      'uniform float uHighOnly;',
      'uniform float uRegionMask;',
      'uniform float uT0;',
      'uniform float uT1;',
      'uniform float uT2;',
      'uniform float uT3;',
      'uniform float uHideU;',
      'uniform float uOverlay;',
      'uniform float uOverlayKeep;',
      'uniform float uOverlaySpan;',
      'uniform float uSizeScale;',
      'varying vec3 vColor;',
      'varying float vType;',
      'varying float vConf;',
      'varying float vAlpha;',
      'void main(){',
      '  float vis = 1.0;',
      '  float warFade = 1.0;',
      '  if (uOverlay < 0.5) {',
      '    if (uYear < aWarS - 0.001) vis = 0.0;',
      '    if (uYear > aWarE + 0.001) {',
      '      float k = uYear - aWarE;',
      '      if (k >= 1.0) { vis = 0.0; } else { warFade = 1.0 - k; }',
      '    }',
      '  }',
      '  if (aYear > uYear + 0.01) vis = 0.0;',
      /* 时间窗在两种模式下都作为范围边界：叠加态 = 窗口内全部事件，单年态 = 窗口内的进行中战争 */
      '  if (uWindow < 9000.0 && aYear < uYear - uWindow) vis = 0.0;',
      /* 叠加态：按稳定排名抽稀，保证大历史量级下的旋转流畅度 */
      '  if (uOverlay > 0.5 && uOverlayKeep < 0.999 && aRank > uOverlayKeep) vis = 0.0;',
      '  float t = aType;',
      '  if (t < 0.5 && uT0 < 0.5) vis = 0.0;',
      '  if (t > 0.5 && t < 1.5 && uT1 < 0.5) vis = 0.0;',
      '  if (t > 1.5 && t < 2.5 && uT2 < 0.5) vis = 0.0;',
      '  if (t > 2.5 && uT3 < 0.5) vis = 0.0;',
      '  if (uHighOnly > 0.5 && aConf < 0.9) vis = 0.0;',
      '  if (uHideU > 0.5 && aDs < 0.5) vis = 0.0;',
      '  if (mod(floor(uRegionMask / pow(2.0, aRegion)), 2.0) < 0.5) vis = 0.0;',
      '  vec3 col = vec3(0.93, 0.73, 0.38);',
      '  if (t > 0.5 && t < 1.5) col = vec3(0.40, 0.83, 0.80);',
      '  if (t > 1.5 && t < 2.5) col = vec3(0.88, 0.36, 0.28);',
      '  if (t > 2.5) col = vec3(0.74, 0.58, 1.0);',
      '  float dur = aEnd - aYear;',
      '  if (dur > 0.5) col = mix(col, vec3(1.0, 0.56, 0.30), min(0.55, dur / 30.0));',
      '  vColor = col;',
      '  vType = t;',
      '  vConf = aConf;',
      '  float age = uYear - aYear;',
      /* 叠加态的“时间远近”：0=最久远，1=当前年 */
      '  float rec = 1.0;',
      '  if (uOverlay > 0.5) rec = clamp(1.0 - age / max(1.0, uOverlaySpan), 0.0, 1.0);',
      '  float reveal = smoothstep(0.0, 14.0, age);',
      '  if (uOverlay > 0.5) reveal = 1.0;',
      '  float winFade = 1.0;',
      '  if (uWindow < 9000.0 && uOverlay < 0.5) winFade = 0.62 + 0.38 * (1.0 - smoothstep(0.0, uWindow, age));',
      '  float a = 0.8;',
      '  if (aConf < 0.3) a = 0.30; else if (aConf < 0.9) a = 0.52;',
      /* 叠加态：越久远越暗，避免 1.3 万点加性混合成一团白 */
      '  if (uOverlay > 0.5) {',
      '    a *= 0.9 * mix(0.20, 1.0, rec);',
      '    col = mix(vec3(0.52, 0.62, 0.78), col, mix(0.35, 1.0, rec));',
      '    vColor = col;',
      '  }',
      '  vAlpha = vis * a * reveal * winFade * warFade;',
      '  float sz = 0.0072 + aWeight * 0.024;',
      '  if (t > 0.5 && t < 1.5) sz *= 1.35;',
      '  if (t > 1.5 && t < 2.5) sz *= 1.18;',
      '  if (t > 2.5) sz *= 1.42;',
      '  if (uOverlay > 0.5) sz *= mix(0.50, 1.0, rec);',
      '  sz *= (1.0 + aSel * 1.5);',
      '  vec4 mv = modelViewMatrix * vec4(position, 1.0);',
      '  gl_Position = projectionMatrix * mv;',
      '  gl_PointSize = vis < 0.5 ? 0.0 : clamp(sz * uSizeScale / max(0.8, -mv.z), 1.5, 74.0);',
      '}'
    ].join('\n'),
    fragmentShader: [
      'varying vec3 vColor;',
      'varying float vType;',
      'varying float vConf;',
      'varying float vAlpha;',
      'void main(){',
      '  if (vAlpha < 0.012) discard;',
      '  vec2 uv = gl_PointCoord * 2.0 - 1.0;',
      '  float d = length(uv);',
      '  if (d > 1.0) discard;',
      '  float a = 0.0;',
      '  if (vType < 0.5) {',
      '    float glow = pow(max(0.0, 1.0 - d), 2.5);',
      '    float ring = smoothstep(0.60, 0.66, d) - smoothstep(0.72, 0.80, d);',
      '    a = glow * 0.62 + ring * 0.55;',
      '  } else if (vType < 1.5) {',
      '    float dia = abs(uv.x) + abs(uv.y);',
      '    float edge = smoothstep(0.40, 0.46, dia) - smoothstep(0.52, 0.60, dia);',
      '    float rangeRing = smoothstep(0.88, 0.94, d) - smoothstep(0.96, 1.0, d);',
      '    a = edge * 0.95 + rangeRing * 0.45;',
      '  } else if (vType < 2.5) {',
      '    float x1 = abs(uv.x - uv.y);',
      '    float x2 = abs(uv.x + uv.y);',
      '    float strike = 1.0 - smoothstep(0.11, 0.19, min(x1, x2));',
      '    float halo = pow(max(0.0, 1.0 - d), 3.0) * 0.45;',
      '    a = strike * 0.9 + halo;',
      '  } else {',
      /* 战争/战役线：空心菱形 + 中心点，与围城实心菱形区分 */
      '    float dia = abs(uv.x) + abs(uv.y);',
      '    float edge = smoothstep(0.54, 0.60, dia) - smoothstep(0.66, 0.74, dia);',
      '    float core = 1.0 - smoothstep(0.10, 0.18, d);',
      '    a = edge * 0.95 + core * 0.55;',
      '  }',
      '  if (vConf < 0.3) {',
      '    float ang = atan(uv.y, uv.x);',
      '    float dash = step(0.42, fract(ang * 2.387));',
      '    float ring = smoothstep(0.74, 0.80, d) - smoothstep(0.84, 0.90, d);',
      '    a *= 0.55 + dash * 0.45;',
      '    a += ring * dash * 0.4;',
      '  }',
      '  vec3 col = vColor * (1.0 + (1.0 - d) * 0.55);',
      '  gl_FragColor = vec4(col, a * vAlpha);',
      '}'
    ].join('\n')
  });

  var eventPoints = new THREE.Points(eventGeo, eventMat);
  eventPoints.frustumCulled = false;
  scene.add(eventPoints);

  /* ---------------- 冲击波纹（播放/拖动时新生事件） ---------------- */
  var PULSE_MAX = 56;
  var pulseGeo = new THREE.BufferGeometry();
  var pulsePos = new Float32Array(PULSE_MAX * 3);
  var pulseStart = new Float32Array(PULSE_MAX);
  var pulseSize = new Float32Array(PULSE_MAX);
  var pulseType = new Float32Array(PULSE_MAX);
  for (var pi = 0; pi < PULSE_MAX; pi++) { pulseStart[pi] = -999; pulseType[pi] = 0; }
  pulseGeo.setAttribute('position', new THREE.BufferAttribute(pulsePos, 3));
  pulseGeo.setAttribute('aStart', new THREE.BufferAttribute(pulseStart, 1));
  pulseGeo.setAttribute('aSize', new THREE.BufferAttribute(pulseSize, 1));
  pulseGeo.setAttribute('aType', new THREE.BufferAttribute(pulseType, 1));
  var pulseUniforms = { uTime: { value: 0 }, uSizeScale: { value: 1000 }, uOpacity: { value: 1 } };
  var pulseMat = new THREE.ShaderMaterial({
    uniforms: pulseUniforms,
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    vertexShader: [
      'attribute float aStart;',
      'attribute float aSize;',
      'attribute float aType;',
      'uniform float uTime;',
      'uniform float uSizeScale;',
      'varying float vT;',
      'varying vec3 vColor;',
      'void main(){',
      '  float age = uTime - aStart;',
      '  float alive = (age >= 0.0 && age <= 1.7) ? 1.0 : 0.0;',
      '  float k = clamp(age / 1.7, 0.0, 1.0);',
      '  vT = alive > 0.5 ? k : 2.0;',
      '  vColor = aType > 2.5 ? vec3(0.78, 0.62, 1.0) : (aType > 1.5 ? vec3(0.9, 0.36, 0.28) : (aType > 0.5 ? vec3(0.4, 0.86, 0.82) : vec3(0.95, 0.76, 0.40)));',
      '  vec4 mv = modelViewMatrix * vec4(position, 1.0);',
      '  gl_Position = projectionMatrix * mv;',
      '  float sz = (aSize + k * aSize * 2.6) * uSizeScale / max(0.8, -mv.z);',
      '  gl_PointSize = alive > 0.5 ? clamp(sz, 1.0, 90.0) : 0.0;',
      '}'
    ].join('\n'),
    fragmentShader: [
      'varying float vT;',
      'varying vec3 vColor;',
      'uniform float uOpacity;',
      'void main(){',
      '  if (vT > 1.0) discard;',
      '  vec2 uv = gl_PointCoord * 2.0 - 1.0;',
      '  float d = length(uv);',
      '  float ring = smoothstep(0.80, 0.88, d) - smoothstep(0.92, 0.99, d);',
      '  float fade = pow(1.0 - vT, 2.0);',
      '  gl_FragColor = vec4(vColor, ring * fade * uOpacity);',
      '}'
    ].join('\n')
  });
  var pulsePoints = new THREE.Points(pulseGeo, pulseMat);
  pulsePoints.frustumCulled = false;
  scene.add(pulsePoints);
  var pulseSlot = 0;

  function spawnPulse(e) {
    var i = pulseSlot % PULSE_MAX;
    pulseSlot++;
    var v = latLonToVec3(e.a, e.o, 1.014);
    pulsePos[i * 3] = v.x; pulsePos[i * 3 + 1] = v.y; pulsePos[i * 3 + 2] = v.z;
    pulseStart[i] = clock.elapsedTime;
    pulseSize[i] = 0.010 + (e.w || 0.34) * 0.022;
    pulseType[i] = TYPES[e.t] ? TYPES[e.t].code : 0;
    pulseGeo.attributes.position.needsUpdate = true;
    pulseGeo.attributes.aStart.needsUpdate = true;
    pulseGeo.attributes.aSize.needsUpdate = true;
    pulseGeo.attributes.aType.needsUpdate = true;
  }

  /* ---------------- 战役线（发光流动弧） ---------------- */
  var arcGroup = new THREE.Group();
  scene.add(arcGroup);
  var arcItems = [];

  function greatCirclePoints(a, b, steps) {
    var out = [];
    for (var i = 0; i <= steps; i++) {
      var t = i / steps;
      var v = a.clone().lerp(b, t).normalize();
      out.push(v);
    }
    return out;
  }

  function buildCampaign(c, idx) {
    if (!c.p || c.p.length < 2) return;
    var basePts = c.p.map(function (p) { return latLonToVec3(p[0], p[1], 1.0); });
    var samples = [];
    var totalAngle = 0;
    for (var i = 1; i < basePts.length; i++) {
      totalAngle += basePts[i - 1].angleTo(basePts[i]);
    }
    var acc = 0;
    samples.push(basePts[0].clone());
    for (var j = 1; j < basePts.length; j++) {
      var segAngle = basePts[j - 1].angleTo(basePts[j]);
      var steps = Math.max(3, Math.ceil(segAngle * 26));
      var sub = greatCirclePoints(basePts[j - 1], basePts[j], steps);
      for (var k = 1; k <= steps; k++) {
        acc += segAngle / steps;
        var frac = totalAngle > 0 ? acc / totalAngle : 0;
        var alt = Math.sin(Math.PI * frac) * (0.018 + 0.15 * (totalAngle / Math.PI));
        var v = sub[k].clone().multiplyScalar(1.0 + alt);
        samples.push(v);
      }
    }
    var curve = new THREE.CatmullRomCurve3(samples, false, 'catmullrom', 0.1);
    var tubeGeo = new THREE.TubeGeometry(curve, Math.max(90, samples.length * 2), 0.0034, 8, false);
    var tubeMat = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uAlpha: { value: 0 },
        uColor: { value: new THREE.Color(0xe8c987) }
      },
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
      vertexShader: [
        'varying vec2 vUv;',
        'void main(){',
        '  vUv = uv;',
        '  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);',
        '}'
      ].join('\n'),
      fragmentShader: [
        'uniform float uTime;',
        'uniform float uAlpha;',
        'uniform vec3 uColor;',
        'varying vec2 vUv;',
        'void main(){',
        '  float base = 0.16;',
        '  float flow = pow(max(0.0, sin(vUv.x * 9.0 - uTime * 1.15)), 7.0);',
        '  float edge = smoothstep(0.0, 0.28, vUv.y) * smoothstep(1.0, 0.72, vUv.y);',
        '  float a = (base + flow * 1.25) * uAlpha;',
        '  gl_FragColor = vec4(uColor * (1.0 + flow * 1.4), a * (0.55 + edge * 0.45));',
        '}'
      ].join('\n')
    });
    var mesh = new THREE.Mesh(tubeGeo, tubeMat);
    mesh.userData.campaign = idx;
    mesh.userData.alpha = 0;
    arcGroup.add(mesh);

    // 外层柔光
    var glowGeo = new THREE.TubeGeometry(curve, Math.max(60, samples.length), 0.014, 8, false);
    var glowMat = new THREE.MeshBasicMaterial({ color: 0x8a6b34, transparent: true, opacity: 0.0, blending: THREE.AdditiveBlending, depthWrite: false });
    var glow = new THREE.Mesh(glowGeo, glowMat);
    glow.userData.campaign = idx;
    glow.userData.isGlow = true;
    arcGroup.add(glow);

    arcItems.push({ campaign: c, mesh: mesh, glow: glow, mat: tubeMat, glowMat: glowMat, alpha: 0, target: 0 });
  }
  CAMPAIGNS.forEach(buildCampaign);

  /* ---------------- 热力层 ---------------- */
  var heatCanvas = document.createElement('canvas');
  heatCanvas.width = 1024; heatCanvas.height = 512;
  var heatCtx = heatCanvas.getContext('2d');
  var heatTexture = new THREE.CanvasTexture(heatCanvas);
  heatTexture.minFilter = THREE.LinearFilter;
  heatTexture.magFilter = THREE.LinearFilter;
  var heatMat = new THREE.ShaderMaterial({
    uniforms: { uMap: { value: heatTexture }, uOpacity: { value: 0.32 } },
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
    fragmentShader: 'uniform sampler2D uMap; uniform float uOpacity; varying vec2 vUv; void main(){ vec4 c = texture2D(uMap, vUv); gl_FragColor = vec4(c.rgb, c.a * uOpacity); }'
  });
  var heatMesh = new THREE.Mesh(new THREE.SphereGeometry(1.008, 96, 48), heatMat);
  heatMesh.renderOrder = 1;
  scene.add(heatMesh);

  // 预渲染热力光斑（避免逐点创建渐变）
  var heatSprite = document.createElement('canvas');
  heatSprite.width = 64; heatSprite.height = 64;
  (function () {
    var g = heatSprite.getContext('2d');
    var rg = g.createRadialGradient(32, 32, 0, 32, 32, 32);
    rg.addColorStop(0, 'rgba(255,206,120,0.95)');
    rg.addColorStop(0.35, 'rgba(232,146,66,0.55)');
    rg.addColorStop(0.72, 'rgba(178,60,34,0.22)');
    rg.addColorStop(1, 'rgba(120,24,12,0)');
    g.fillStyle = rg;
    g.fillRect(0, 0, 64, 64);
  })();

  /* ---------------- 聚类点 ---------------- */
  var clusterGeo = new THREE.BufferGeometry();
  var clusterUniforms = { uTime: { value: 0 }, uSizeScale: { value: 1000 }, uCold: { value: new THREE.Color(0x5fd9d2) }, uHot: { value: new THREE.Color(0xd45fb8) } };
  var clusterMat = new THREE.ShaderMaterial({
    uniforms: clusterUniforms,
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    vertexShader: [
      'attribute float aCount;',
      'attribute float aDur;',
      'uniform float uSizeScale;',
      'uniform vec3 uCold;',
      'uniform vec3 uHot;',
      'varying vec3 vColor;',
      'varying float vAlpha;',
      'void main(){',
      '  float k = clamp(aDur / 26.0, 0.0, 1.0);',
      '  vColor = mix(uCold, uHot, k);',
      '  vAlpha = 1.0;',
      '  vec4 mv = modelViewMatrix * vec4(position, 1.0);',
      '  gl_Position = projectionMatrix * mv;',
      '  float sz = 0.006 + sqrt(max(1.0, aCount)) * 0.0038;',
      '  gl_PointSize = clamp(sz * uSizeScale / max(0.8, -mv.z), 2.5, 46.0);',
      '}'
    ].join('\n'),
    fragmentShader: [
      'varying vec3 vColor;',
      'varying float vAlpha;',
      'void main(){',
      '  vec2 uv = gl_PointCoord * 2.0 - 1.0;',
      '  float d = length(uv);',
      '  if (d > 1.0) discard;',
      '  float core = pow(max(0.0, 1.0 - d), 2.2);',
      '  float ring = smoothstep(0.72, 0.86, d) - smoothstep(0.90, 1.0, d);',
      '  gl_FragColor = vec4(vColor * (0.85 + core * 0.7), core * 0.5 + ring * 0.38);',
      '}'
    ].join('\n')
  });
  var clusterPoints = new THREE.Points(clusterGeo, clusterMat);
  clusterPoints.frustumCulled = false;
  clusterPoints.visible = false;
  scene.add(clusterPoints);
  clusterPoints.userData.cells = [];

  /* ---------------- 尺寸/视口 ---------------- */
  function resize() {
    W = window.innerWidth; H = window.innerHeight;
    renderer.setSize(W, H, false);
    camera.aspect = W / H;
    var topH = 76, botH = 212;
    var shift = Math.min(90, Math.max(0, (H / 2) - (topH + (H - topH - botH) / 2)));
    camera.setViewOffset(W, H, 0, shift, W, H);
    camera.updateProjectionMatrix();
    var sizeScale = (H * DPR) / (2 * Math.tan((camera.fov * Math.PI / 180) / 2));
    eventUniforms.uSizeScale.value = sizeScale;
    pulseUniforms.uSizeScale.value = sizeScale;
    clusterUniforms.uSizeScale.value = sizeScale;
    drawDensityBase();
    if (typeof flatResize === 'function') flatResize();
  }
  window.addEventListener('resize', resize);

  /* ---------------- 时间轴密度条 ---------------- */
  var density = $('#density');
  var densityCtx = density.getContext('2d');
  var densityBase = document.createElement('canvas');
  var densityBinYears = 10;
  var densityBins = [];
  var densityDpr = 1;

  function buildDensityBins() {
    var start = YEAR_MIN, end = YEAR_MAX + densityBinYears;
    var n = Math.ceil((end - start) / densityBinYears);
    densityBins = new Array(n);
    for (var i = 0; i < n; i++) densityBins[i] = 0;
    EV.forEach(function (e) {
      var idx = Math.floor((e.y - start) / densityBinYears);
      if (idx >= 0 && idx < n) densityBins[idx]++;
    });
  }
  buildDensityBins();
  var densityMax = Math.max.apply(null, densityBins.map(function (v) { return v; })) || 1;

  function drawDensityBase() {
    var rect = density.parentNode.getBoundingClientRect();
    var w = Math.max(200, Math.floor(rect.width));
    var h = 62;
    densityDpr = Math.min(window.devicePixelRatio || 1, 2);
    density.width = w * densityDpr;
    density.height = h * densityDpr;
    densityBase.width = density.width;
    densityBase.height = density.height;
    var g = densityBase.getContext('2d');
    g.clearRect(0, 0, densityBase.width, densityBase.height);
    var padTop = 8 * densityDpr, padBot = 6 * densityDpr;
    var barW = densityBase.width / densityBins.length;
    var maxLog = Math.log(densityMax + 1);
    for (var i = 0; i < densityBins.length; i++) {
      var v = densityBins[i];
      var frac = v <= 0 ? 0 : Math.log(v + 1) / maxLog;
      var bh = Math.max(v > 0 ? 1.5 : 0, frac * (h * densityDpr - padTop - padBot));
      var x = i * barW;
      var y = densityBase.height - padBot - bh;
      var grad = g.createLinearGradient(0, y, 0, densityBase.height);
      grad.addColorStop(0, 'rgba(230,196,124,0.85)');
      grad.addColorStop(1, 'rgba(140,92,46,0.25)');
      g.fillStyle = grad;
      g.fillRect(x + 0.5, y, Math.max(0.8, barW - 0.9), bh);
    }
    // 时代分隔
    g.strokeStyle = 'rgba(201,170,109,0.18)';
    g.lineWidth = 1;
    ERAS.forEach(function (era) {
      var x = (era.start - YEAR_MIN) / (YEAR_MAX + densityBinYears - YEAR_MIN) * densityBase.width;
      g.beginPath(); g.moveTo(x, 0); g.lineTo(x, densityBase.height); g.stroke();
    });
  }

  function drawDensity() {
    var w = density.width, h = density.height;
    densityCtx.clearRect(0, 0, w, h);
    densityCtx.drawImage(densityBase, 0, 0);
    var totalSpan = (YEAR_MAX + densityBinYears) - YEAR_MIN;
    var x = (state.year - YEAR_MIN) / totalSpan * w;
    var grad = densityCtx.createLinearGradient(x - 2, 0, x + 2, 0);
    grad.addColorStop(0, 'rgba(230,204,148,0)');
    grad.addColorStop(0.5, 'rgba(230,204,148,0.95)');
    grad.addColorStop(1, 'rgba(230,204,148,0)');
    densityCtx.fillStyle = grad;
    densityCtx.fillRect(x - 2 * densityDpr, 0, 4 * densityDpr, h);
    // 已播放区域的柔光
    var played = densityCtx.createLinearGradient(0, 0, x, 0);
    played.addColorStop(0, 'rgba(230,204,148,0.06)');
    played.addColorStop(1, 'rgba(230,204,148,0)');
    densityCtx.fillStyle = played;
    densityCtx.fillRect(0, 0, x, h);
  }

  var densityTip = $('#densityTooltip');
  $('#yearSlider').addEventListener('pointermove', function (ev) {
    var rect = this.getBoundingClientRect();
    var frac = clamp((ev.clientX - rect.left) / rect.width, 0, 1);
    var year = YEAR_MIN + frac * ((YEAR_MAX + densityBinYears) - YEAR_MIN);
    var idx = clamp(Math.floor((year - YEAR_MIN) / densityBinYears), 0, densityBins.length - 1);
    var from = YEAR_MIN + idx * densityBinYears;
    var to = from + densityBinYears - 1;
    densityTip.textContent = yearShort(from) + '–' + yearShort(to) + ' · ' + densityBins[idx] + t('densityUnit');
    densityTip.style.left = (ev.clientX - rect.left) + 'px';
    densityTip.classList.add('show');
  });
  $('#yearSlider').addEventListener('pointerleave', function () { densityTip.classList.remove('show'); });

  /* ---------------- 时间轴与 UI 元素 ---------------- */
  var slider = $('#yearSlider');
  var playBtn = $('#playBtn');
  var speedSel = $('#speedSelect');
  var centurySel = $('#centurySelect');
  var eraChips = $('#eraChips');
  var hudYear = $('#hudYear');
  var hudEra = $('#hudEra');
  var yearLabel = $('#yearLabel');
  var eraName = $('#eraName');
  var eraRange = $('#eraRange');
  var listEl = $('#eventList');
  var detailEl = $('#detailView');
  var rightTitle = $('#rightTitle');
  var rightSubline = $('#rightSubline');
  var backBtn = $('#backBtn');

  slider.min = YEAR_MIN;
  slider.max = YEAR_MAX;
  slider.value = state.year;

  function eraOf(y) {
    for (var i = 0; i < ERAS.length; i++) {
      if (y >= ERAS[i].start && y < ERAS[i].end) return ERAS[i];
    }
    return y < ERAS[0].start ? ERAS[0] : ERAS[ERAS.length - 1];
  }

  function buildEraChips() {
    eraChips.innerHTML = ERAS.map(function (e, i) {
      return '<button type="button" class="era-chip" data-era="' + i + '">' + esc(isEN() ? e.en : e.name) + '</button>';
    }).join('');
  }
  buildEraChips();

  function buildCenturySelect() {
    var html = '<option value="">' + L('跳转世纪…', 'Jump to century…') + '</option>';
    for (var c = 30; c >= 1; c--) {
      html += '<option value="' + Math.max(YEAR_MIN, -((c - 1) * 100)) + '">' + L('公元前' + c + '世纪', c + '00s BC') + '</option>';
    }
    for (var c2 = 1; c2 <= 21; c2++) {
      var val = c2 === 21 ? YEAR_MAX : c2 * 100;
      html += '<option value="' + val + '">' + L(c2 + '世纪', 'AD ' + c2 + '00s') + '</option>';
    }
    centurySel.innerHTML = html;
  }
  buildCenturySelect();

  function updateEraUI(anim) {
    var era = eraOf(state.year);
    var idx = ERAS.indexOf(era);
    hudYear.textContent = yearText(state.year);
    hudEra.textContent = (isEN() ? era.en : era.name) + ' · ' + (isEN() ? era.rangeEn : era.range);
    yearLabel.textContent = yearText(state.year);
    eraName.textContent = isEN() ? era.en : era.name;
    eraRange.textContent = isEN() ? era.rangeEn : era.range;
    $all('.era-chip', eraChips).forEach(function (b, i) {
      b.classList.toggle('active', i === idx);
    });
    if (anim) flashEra();
  }

  var eraFlashEl = null;
  function flashEra() {
    if (!eraFlashEl) {
      eraFlashEl = document.createElement('div');
      eraFlashEl.style.cssText = 'position:fixed;inset:0;z-index:8;pointer-events:none;opacity:0;' +
        'background:radial-gradient(ellipse at 50% 45%, rgba(230,204,148,.16), transparent 60%);' +
        'transition:opacity .55s ease';
      document.body.appendChild(eraFlashEl);
    }
    eraFlashEl.style.opacity = '0.85';
    window.setTimeout(function () { eraFlashEl.style.opacity = '0'; }, 60);
  }

  /* ---------------- 筛选逻辑（JS 侧，用于列表/热力/统计） ---------------- */
  function regionAllowed(r) {
    if (state.region === 'all') return true;
    return r === state.region;
  }
  function passFilters(e, includeWindow) {
    /* 优先级：叠加态 > 单年进行中判定。开启叠加后不再要求战争在游标年仍进行，
       时间窗（state.window）仍是范围边界——两者不会同时生效。 */
    if (!state.overlay && !warActiveAt(e.ws, e.we)) return false;
    if (!state.types[e.t]) return false;
    if (state.highOnly && (CONF[e.c] ? CONF[e.c].v : 0) < 0.9) return false;
    if (!includeWindow) return regionAllowed(e.r);
    if (!regionAllowed(e.r)) return false;
    if (e.y > state.year + 0.01) return false;
    if (state.window < 9000 && e.y < state.year - state.window) return false;
    return true;
  }
  function visibleEvents() {
    var out = [];
    for (var i = 0; i < EV.length; i++) {
      if (passFilters(EV[i], true)) out.push(EV[i]);
    }
    return out;
  }
  function regionMask() {
    if (state.region === 'all') return 63;
    var idx = regionIndex[state.region];
    return idx == null ? 63 : (1 << idx);
  }

  /* ---------------- 更新 GPU uniform ---------------- */
  var lastPrevYear = state.year;
  /* 叠加态抽稀目标：超过该点数后按稳定散列抽样，保证地球仍可拖动旋转 */
  var OVERLAY_TARGET = 6000;

  function overlaySpanYears() {
    if (state.window < 9000) return Math.max(1, state.window);
    return Math.max(1, state.year - YEAR_MIN);
  }

  /* 叠加态候选事件：时间窗内、不要求战争仍在进行；口径与 passFilters 保持一致 */
  function overlayStats() {
    var n = 0;
    for (var i = 0; i < EV.length; i++) {
      var e = EV[i];
      if (e.y > state.year + 0.01) continue;
      if (state.window < 9000 && e.y < state.year - state.window) continue;
      if (!state.types[e.t]) continue;
      if (!regionAllowed(e.r)) continue;
      if (state.highOnly && (CONF[e.c] ? CONF[e.c].v : 0) < 0.9) continue;
      n++;
    }
    var keep = n > OVERLAY_TARGET ? OVERLAY_TARGET / n : 1;
    if (keep < 0.08) keep = 0.08;
    return { total: n, keep: keep, shown: Math.round(n * keep) };
  }

  function syncUniforms() {
    eventUniforms.uYear.value = state.year;
    eventUniforms.uWindow.value = state.window;
    eventUniforms.uHighOnly.value = state.highOnly ? 1 : 0;
    eventUniforms.uRegionMask.value = regionMask();
    eventUniforms.uT0.value = state.types.battle ? 1 : 0;
    eventUniforms.uT1.value = state.types.siege ? 1 : 0;
    eventUniforms.uT2.value = state.types.massacre ? 1 : 0;
    eventUniforms.uT3.value = state.types.campaign ? 1 : 0;
    eventUniforms.uHideU.value = state.cluster ? 1 : 0;
    eventUniforms.uOverlay.value = state.overlay ? 1 : 0;
    if (state.overlay) {
      var os = overlayStats();
      state.overlayTotal = os.total;
      state.overlayKeep = os.keep;
      state.overlayShown = os.shown;
      eventUniforms.uOverlayKeep.value = os.keep;
      eventUniforms.uOverlaySpan.value = overlaySpanYears();
    } else {
      state.overlayTotal = 0;
      state.overlayKeep = 1;
      state.overlayShown = 0;
      eventUniforms.uOverlayKeep.value = 1;
      eventUniforms.uOverlaySpan.value = overlaySpanYears();
    }
    clusterPoints.visible = state.cluster;
    heatMesh.visible = state.heat;
    if (admin1Layer) admin1Layer.visible = state.adm1;
    if (!state.highlight) hlMesh.visible = false;
    if (!state.zone || state.overlay) { zoneMesh.visible = false; if (zoneLabelsEl) zoneLabelsEl.innerHTML = ''; }
  }

  /* ---------------- 设置年份 ---------------- */
  function setYear(y, opts) {
    opts = opts || {};
    y = clamp(y, YEAR_MIN, YEAR_MAX);
    var prev = state.year;
    state.year = y;
    if (Math.abs(y - prev) > 0.001) {
      slider.value = y;
    }
    updateEraUI(opts.eraFlash);
    if (opts.spawnPulse !== false) spawnRange(prev, y);
    syncUniforms();
    lastPrevYear = y;
    renderWarListSoon();
    scheduleHighlight();
    scheduleZones();
    scheduleUpdates(false);
    updateCounts();
  }

  function spawnRange(prev, cur) {
    if (cur <= prev) return;
    var count = 0;
    // EV 已按年升序，二分定位后只扫描新增区间
    var lo = 0, hi = EV.length;
    while (lo < hi) {
      var mid = (lo + hi) >> 1;
      if (EV[mid].y <= prev) lo = mid + 1; else hi = mid;
    }
    for (var i = lo; i < EV.length && count < 4; i++) {
      var e = EV[i];
      if (e.y > cur) break;
      if (passFilters(e, false)) {
        spawnPulse(e);
        count++;
      }
    }
  }

  /* ---------------- 列表 ---------------- */
  var listCache = { key: '', items: [] };
  var listFiltered = [];
  var listDirty = true;

  function filteredForList() {
    var items = visibleEvents();
    if (state.types.campaign) {
      CAMPAIGNS.forEach(function (c) {
        if (!warActiveAt(c.ws == null ? c.y : c.ws, c.we == null ? c.y : c.we)) return;
        if (!regionAllowed(c.r)) return;
        if (c.y > state.year + 0.01) return;
        if (state.window < 9000 && (c.e == null ? c.y : c.e) < state.year - state.window) return;
        if (state.highOnly && CONF[c.c].v < 0.9) return;
        items.push(c);
      });
    }
    items.sort(function (a, b) {
      var ay = a.y, by = b.y;
      return state.sortDesc ? (by - ay) : (ay - by);
    });
    return items;
  }

  function typeLabel(t) { return typeName(t, true); }
  function datasetLabel(ds) { return datasetName(ds); }

  function renderList() {
    if (!listDirty) return;
    listDirty = false;
    var scrollTop = listEl.scrollTop;
    var items = filteredForList();
    listFiltered = items;
    var total = items.length;
    var shown = Math.min(state.listLimit, total);
    var head = '<div class="event-list-head"><span>' + L('共 ' + total + ' 条 · 显示 ' + shown, total + ' records · showing ' + shown) + '</span>' +
      '<select id="sortSelect" aria-label="' + L('排序', 'Sort') + '"><option value="desc"' + (state.sortDesc ? ' selected' : '') + '>' + L('新→旧', 'New→Old') + '</option>' +
      '<option value="asc"' + (!state.sortDesc ? ' selected' : '') + '>' + L('旧→新', 'Old→New') + '</option></select></div>';
    if (!total) {
      listEl.innerHTML = head + '<div class="list-empty">' + L('当前年份没有仍在进行的战争记录。<br>拖动时间轴到战争进行期间，或放宽时间窗。', 'No records for wars ongoing at this year.<br>Move the timeline into a war period, or widen the window.') + '</div>';
      if (!listEl.hidden) rightSubline.textContent = L('当前筛选下 0 条记录', '0 records under current filters');
      return;
    }
    var html = items.slice(0, shown).map(function (e) {
      /* 战役线几何对象（ds=M）与“战争/战役线”类型的事件（ds=D/C/U）要区分：
         前者走 CAMPAIGNS 索引，后者走事件索引，避免 campaign 类型事件被误当弧线。 */
      var isCamp = e.ds === 'M';
      var idx = isCamp ? CAMPAIGNS.indexOf(e) : e.__i;
      var yearTxt = isCamp ? yearShort(e.y) + '–' + yearShort(e.e) : yearShort(e.y);
      var sub = origText(dualName(e.loc, e.lce));
      var active = (!isCamp && idx === state.selected) || (isCamp && idx === state.selectedCampaign);
      return '<div class="event-item' + (active ? ' active' : '') + '" data-idx="' + (isCamp ? 'c' + idx : idx) + '">' +
        '<div class="ev-year">' + esc(yearTxt) + '</div>' +
        '<div class="ev-main"><div class="ev-name">' + esc(evName(e)) + '</div>' +
        '<div class="ev-sub">' + esc(sub) + '</div>' +
        '<div class="ev-tags"><span class="ev-tag ' + e.t + '">' + esc(typeLabel(e.t)) + '</span>' +
        '<span class="ev-tag">' + esc(datasetLabel(e.ds)) + '</span>' +
        '<span class="ev-tag">' + esc(isEN() ? (CONF[e.c] ? CONF[e.c].en.replace(' confidence', '') : e.c) : (e.c === 'high' ? '高置信' : (e.c === 'low' ? '低置信' : '中置信'))) + '</span></div></div>' +
        '<i class="ev-dot ' + esc(e.c) + '"></i></div>';
    }).join('');
    if (total > shown) {
      html += '<button class="list-more" id="moreBtn">' + L('继续加载 · 还有 ' + (total - shown) + ' 条', 'Load more · ' + (total - shown) + ' remaining') + '</button>';
    }
    listEl.innerHTML = head + html;
    listEl.scrollTop = scrollTop;
    if (!listEl.hidden) rightSubline.textContent = L('按时间窗筛选 · 共 ' + total + ' 条', 'Filtered by window · ' + total + ' records');
  }

  listEl.addEventListener('click', function (ev) {
    var more = ev.target.closest('#moreBtn');
    if (more) {
      state.listLimit += 60;
      listDirty = true;
      renderList();
      return;
    }
    var sort = ev.target.closest('#sortSelect');
    if (sort) return;
    var item = ev.target.closest('.event-item');
    if (!item) return;
    var key = item.getAttribute('data-idx');
    if (key.charAt(0) === 'c') selectCampaign(parseInt(key.slice(1), 10));
    else selectEvent(parseInt(key, 10));
  });
  listEl.addEventListener('change', function (ev) {
    if (ev.target && ev.target.id === 'sortSelect') {
      state.sortDesc = ev.target.value === 'desc';
      listDirty = true;
      renderList();
    }
  });

  /* ---------------- 进行中的战争 ---------------- */
  var warListEl = $('#warList');
  var warFootEl = $('#warFoot');
  function renderWarList() {
    if (!warListEl) return;
    var aw = activeWars().filter(function (w) { return w.listed; });
    aw.sort(function (a, b) { return (b.count || 0) - (a.count || 0) || a.s - b.s; });
    if (!aw.length) {
      warListEl.innerHTML = '<div class="war-empty">' + L('该年没有仍在进行的已登记战争。', 'No registered wars ongoing at this year.') + '</div>';
    } else {
      var top = aw.slice(0, 8);
      warListEl.innerHTML = top.map(function (w) {
        var active = w.i === state.selectedWar;
        var hasSide = (w.A && w.A.length) || (w.B && w.B.length);
        return '<div class="war-item' + (active ? ' active' : '') + '" data-wid="' + w.i + '">' +
          '<span class="war-dot' + (hasSide ? ' ok' : '') + '"></span>' +
          '<div class="war-main"><div class="war-name">' + esc(dualName(w.n, w.en)) + '</div>' +
          '<div class="war-sub">' + esc(yearShort(w.s) + '–' + yearShort(w.e) + ' · ' + (w.count || 0) + L(' 条事件', ' events')) +
          (w.civil ? ' · ' + L('内战', 'civil') : '') + (w.proxy ? ' · ' + L('示意', 'indicative') : '') + '</div></div>' +
          '<span class="war-go">›</span></div>';
      }).join('');
    }
    if (warFootEl) {
      warFootEl.textContent = L('该年共 ' + aw.length + ' 场已登记战争仍在进行；列表显示事件最多的前 ' + Math.min(8, aw.length) + ' 场。',
        aw.length + ' registered wars ongoing; showing top ' + Math.min(8, aw.length) + ' by records.');
    }
  }
  if (warListEl) {
    warListEl.addEventListener('click', function (ev) {
      var item = ev.target.closest('.war-item');
      if (!item) return;
      var wid = parseInt(item.getAttribute('data-wid'), 10);
      var w = WARS[wid];
      if (w) selectWar(w);
    });
  }
  var warTimer = 0;
  function renderWarListSoon() {
    if (warTimer) return;
    warTimer = setTimeout(function () { warTimer = 0; renderWarList(); }, 160);
  }

  /* ---------------- 详情 ---------------- */
  function confBadge(c) {
    return '<span class="badge ' + esc(c) + '">' + esc(confName(c)) + '</span>';
  }
  function typeBadge(t) {
    return '<span class="badge ' + esc(t) + '">' + esc(typeName(t, false)) + '</span>';
  }
  function datasetBadge(ds) {
    return '<span class="badge">' + esc(datasetLabel(ds)) + '</span>';
  }
  function field(label, value, unknownText) {
    var v = value && String(value).trim() ? esc(value) : '<span class="unknown">' + esc(unknownText || L('未结构化收录', 'Not structured')) + '</span>';
    return '<div class="detail-field"><dt>' + esc(label) + '</dt><dd>' + v + '</dd></div>';
  }
  function sourcesBlock(e) {
    if (!e.src || !e.src.length) return '';
    return '<div class="detail-block"><h3>' + t('sourcesHeading') + '</h3><div class="source-list">' +
      e.src.map(function (s) {
        return '<a href="' + esc(s.u) + '" target="_blank" rel="noopener noreferrer">' + esc(s.l) + ' ↗</a>';
      }).join('') + '</div></div>';
  }

  function renderDetailEvent(e) {
    var idx = e.__i;
    delete detailEl.dataset.idx;
    delete detailEl.dataset.cidx;
    delete detailEl.dataset.wid;
    var dateTxt = isEN() ? yearText(e.y) : (e.dl || fmtYear(e.y));
    var span = (e.e && e.e !== e.y) ? L('；持续至 ' + fmtYear(e.e), ' — to ' + yearText(e.e)) : '';
    var blocks = '';
    if (e.su) blocks += '<div class="detail-block"><h3>' + t('contextHeading') + '</h3><p>' + esc(pickTxt(e.su, e.sue)) + '</p></div>';
    if (e.im) blocks += '<div class="detail-block"><h3>' + t('impactHeading') + '</h3><p>' + esc(pickTxt(e.im, e.ime)) + '</p></div>';
    if (e.cn) blocks += '<div class="detail-block"><h3>' + L('坐标与置信度说明', 'Coordinate & confidence note') + '</h3><p class="warning">' + esc(pickTxt(e.cn, e.cne)) + '</p></div>';
    if (e.sn) blocks += '<div class="detail-block"><h3>' + L('原始记录摘要', 'Original record summary') + '</h3><p>' + esc(e.sn) + '</p></div>';
    var actTxt = origText(dualName(e.act, e.ace));
    var locTxt = origText(dualName(e.loc, e.lce));
    detailEl.innerHTML =
      '<div class="detail-kicker">' + confBadge(e.c) + typeBadge(e.t) + datasetBadge(e.ds) +
      '<span class="badge">' + esc(regionName(e.r)) + '</span></div>' +
      '<h2 class="detail-title">' + esc(evName(e)) + '</h2>' +
      (isEN() ? (e.n && e.n !== e.en ? '<div class="detail-en">' + esc(e.n) + ' (original)</div>' : '') : (e.en ? '<div class="detail-en">' + esc(e.en) + '</div>' : '')) +
      '<div class="detail-date">' + esc(dateTxt) + span + '</div>' +
      '<div class="detail-rule"></div>' +
      '<div class="detail-grid">' +
      field(L('地点', 'Location'), locTxt) +
      field(L('交战方', 'Belligerents'), actTxt) +
      field(L('规模', 'Scale'), pickTxt(e.sc, e.sce)) +
      field(L('伤亡', 'Casualties'), pickTxt(e.cs, e.cse)) +
      field(L('坐标', 'Coordinates'), e.a.toFixed(3) + ', ' + e.o.toFixed(3) + L(e.ds === 'U' ? '（UCDP 地理编码）' : '（考据近似位置）', e.ds === 'U' ? ' (UCDP geocode)' : ' (approximate)')) +
      field(L('记录号', 'Record ID'), e.i) +
      '</div>' + blocks + sourcesBlock(e) +
      '<div class="detail-actions"><button type="button" data-act="fly">' + L('飞抵该地', 'Fly to site') + '</button>' +
      '<button type="button" data-act="year">' + L('跳到该年', 'Jump to year') + '</button></div>';
    detailEl.hidden = false;
    listEl.hidden = true;
    backBtn.hidden = false;
    rightTitle.textContent = L('事件档案', 'Event dossier');
    rightSubline.textContent = L('代表性记录 · 非全量统计', 'Representative record · not a full count');
    detailEl.dataset.idx = idx;
  }

  function renderDetailCampaign(c, ci) {
    delete detailEl.dataset.idx;
    delete detailEl.dataset.cidx;
    delete detailEl.dataset.wid;
    detailEl.innerHTML =
      '<div class="detail-kicker">' + confBadge(c.c) + typeBadge('campaign') +
      '<span class="badge">' + L('示意路线', 'Indicative route') + '</span><span class="badge">' + esc(regionName(c.r)) + '</span></div>' +
      '<h2 class="detail-title">' + esc(dualName(c.n, c.en)) + '</h2>' +
      '<div class="detail-date">' + esc(isEN() ? yearText(c.y) + ' – ' + yearText(c.e) : (c.dl || (fmtYear(c.y) + '–' + fmtYear(c.e)))) + '</div>' +
      '<div class="detail-rule"></div>' +
      '<div class="detail-grid">' +
      field(L('范围', 'Extent'), origText(dualName(c.loc, c.lce))) +
      field(L('交战方', 'Belligerents'), origText(dualName(c.act, c.ace))) +
      field(L('规模', 'Scale'), origText(c.sc)) +
      field(L('伤亡', 'Casualties'), origText(c.cs)) +
      field(L('路线节点', 'Route nodes'), c.p ? L(c.p.length + ' 个', String(c.p.length)) : '—') +
      '</div>' +
      (c.su ? '<div class="detail-block"><h3>' + t('contextHeading') + '</h3><p>' + esc(origText(c.su)) + '</p></div>' : '') +
      (c.im ? '<div class="detail-block"><h3>' + t('impactHeading') + '</h3><p>' + esc(origText(c.im)) + '</p></div>' : '') +
      '<div class="detail-block"><h3>' + L('路线说明', 'Route note') + '</h3><p class="warning">' + esc(origText(c.cn)) + '</p></div>' +
      sourcesBlock(c) +
      '<div class="detail-actions"><button type="button" data-act="fly">' + L('飞抵路线起点', 'Fly to route start') + '</button>' +
      '<button type="button" data-act="year">' + L('跳到该时期', 'Jump to period') + '</button></div>';
    detailEl.hidden = false;
    listEl.hidden = true;
    backBtn.hidden = false;
    rightTitle.textContent = L('战役线档案', 'Campaign dossier');
    rightSubline.textContent = L('弧线为示意，不是逐日军行轨迹', 'Indicative arc, not a daily march track');
    detailEl.dataset.cidx = ci;
  }

  function sideChips(w) {
    function chips(list, cls, label) {
      if (!list || !list.length) return '<span class="side-empty">' + label + L('未记录', ' not recorded') + '</span>';
      return list.map(function (s) {
        var a3 = s.a3 || '';
        return '<span class="side-chip ' + cls + '" title="' + esc(a3 || s.num || '') + '">' +
          (a3 || s.num ? '<i></i>' : '<i class="no-iso"></i>') +
          esc(dualName(s.n, s.en)) + (a3 ? '<em>' + esc(a3) + '</em>' : '') + '</span>';
      }).join('');
    }
    return '<div class="war-sides">' +
      '<div class="side-row"><b>' + L('A 方', 'Side A') + '</b>' + chips(warSideList(w, 'A'), 'a', L('A 方', 'Side A')) + '</div>' +
      '<div class="side-row"><b>' + L('B 方', 'Side B') + '</b>' + chips(warSideList(w, 'B'), 'b', L('B 方', 'Side B')) + '</div>' +
      '</div>';
  }

  /* 阶段 3：结束年推断的依据类型（仅对 end_estimated=true 的条目显示） */
  function endEstimateInfo(w) {
    if (!w.end_estimated) return null;
    var id = String(w.id || '');
    if (w.e >= 2025) {
      return {
        type: L('仍在进行 / 占位值', 'Ongoing / placeholder'),
        desc: L('截至数据集末尾该战争仍在进行，结束年为占位年份，不代表停战。',
          'The war is still ongoing at the end of the dataset; the end year is a placeholder, not a ceasefire.')
      };
    }
    if (id.indexOf('u_') === 0) {
      return {
        type: L('最后记录年', 'last recorded year'),
        desc: L('UCDP 抽样事件到该年为止，结束年取该战争最后一条事件记录所在年。',
          'UCDP sampled events stop at this year; the end year is the last recorded event year.')
      };
    }
    if (id.indexOf('y_') === 0) {
      return {
        type: L('年度事件集合', 'annual event set'),
        desc: L('该战争按年度事件集合汇总，结束年取集合中的最后一年。',
          'The war is an annual event set; the end year is the last year in the set.')
      };
    }
    if (w.approx) {
      return {
        type: L('史料区间估计', 'historical interval estimate'),
        desc: L('史料只给出大致年代区间，结束年取该区间较保守的一端。',
          'Sources give a broad chronological interval; the end year is its conservative bound.')
      };
    }
    return {
      type: L('邻近事件推定', 'inferred from nearby events'),
      desc: L('缺少明确的停战或结束记载，结束年按邻近事件年份推定。',
        'No explicit end record; the end year is inferred from adjacent events.')
    };
  }

  function renderDetailWar(w) {
    delete detailEl.dataset.idx;
    delete detailEl.dataset.cidx;
    var note = warNote(w);
    var endInfo = endEstimateInfo(w);
    var civilNote = w.civil ? L('同一国家内的对抗：控制区未细分，国界填色仅作“示意”。', 'Intra-state conflict: control zones are not subdivided; the country fill is indicative only.') : '';
    var proxyNote = w.proxy ? L('历史政权/多国联盟无法精确对应现代国界，填色仅作空间示意。', 'Historical polities or coalitions do not map exactly onto modern borders; the fill is spatial indication only.') : '';
    var approxNote = w.approx ? L('战争区间由事件年份跨度推断，端点可能偏移。', 'War interval inferred from event year span; endpoints may shift.') : '';
    detailEl.innerHTML =
      '<div class="detail-kicker"><span class="badge">' + L('战争档案', 'War dossier') + '</span>' +
      (w.civil ? '<span class="badge">' + L('内战', 'Civil war') + '</span>' : '') +
      (w.proxy ? '<span class="badge">' + L('国界示意', 'Indicative borders') + '</span>' : '') +
      (endInfo ? '<span class="badge warn">' + L('结束年推断', 'End year inferred') + '</span>' : '') + '</div>' +
      '<h2 class="detail-title">' + esc(dualName(w.n, w.en)) + '</h2>' +
      '<div class="detail-date">' + esc(yearText(w.s) + (w.e !== w.s ? ' – ' + yearText(w.e) : '')) + '</div>' +
      '<div class="detail-rule"></div>' +
      '<div class="detail-grid">' +
      field(L('进行状态', 'Status'), warIsActive(w) ? L('该年仍在进行', 'Ongoing at selected year') : L('已结束', 'Ended')) +
      field(L('事件记录', 'Event records'), String(w.count || 0)) +
      field(L('区间来源', 'Interval basis'), w.approx ? L('抽样事件推断', 'Inferred from sampled events') : L('登记表', 'Registry')) +
      (endInfo ? field(L('结束年份', 'End year'), yearText(w.e) + ' · ' + L('推断', 'estimated')) : '') +
      '</div>' + sideChips(w) +
      (endInfo ? '<div class="detail-block"><h3>' + L('结束年份为推断', 'End year is inferred') + '</h3>' +
        '<p class="warning">' + L('依据类型：', 'Basis: ') + esc(endInfo.type) + '。' + esc(endInfo.desc) + '</p></div>' : '') +
      (note ? '<div class="detail-block"><h3>' + L('说明', 'Note') + '</h3><p class="warning">' + esc(note) + '</p></div>' : '') +
      (civilNote ? '<div class="detail-block"><h3>' + L('控制区说明', 'Control-area note') + '</h3><p class="warning">' + esc(civilNote) + '</p></div>' : '') +
      (proxyNote ? '<div class="detail-block"><h3>' + L('国界示意说明', 'Border proxy note') + '</h3><p class="warning">' + esc(proxyNote) + '</p></div>' : '') +
      (approxNote ? '<div class="detail-block"><h3>' + L('区间说明', 'Interval note') + '</h3><p class="warning">' + esc(approxNote) + '</p></div>' : '') +
      '<div class="detail-actions"><button type="button" data-act="warFly">' + L('定位该战争事件中心', 'Locate war event centre') + '</button>' +
      '<button type="button" data-act="warYear">' + L('跳到开战年', 'Jump to start year') + '</button></div>';
    detailEl.hidden = false;
    listEl.hidden = true;
    backBtn.hidden = false;
    rightTitle.textContent = L('战争档案', 'War dossier');
    rightSubline.textContent = L('交战双方按现代国界匹配 · 示意', 'Belligerents matched to modern borders · indicative');
    detailEl.dataset.wid = w.i;
  }

  function showList() {
    detailEl.hidden = true;
    listEl.hidden = false;
    backBtn.hidden = true;
    rightTitle.textContent = L('事件流', 'Event stream');
    rightSubline.textContent = L('按时间窗筛选 · 共 ' + listFiltered.length + ' 条', 'Filtered by window · ' + listFiltered.length + ' records');
    state.selected = -1;
    state.selectedCampaign = -1;
    state.selectedWar = -1;
    for (var i = 0; i < N; i++) aSel[i] = 0;
    eventGeo.attributes.aSel.needsUpdate = true;
    listDirty = true;
    renderList();
    renderWarList();
  }

  backBtn.addEventListener('click', showList);

  detailEl.addEventListener('click', function (ev) {
    var btn = ev.target.closest('button[data-act]');
    if (!btn) return;
    var act = btn.getAttribute('data-act');
    var idx = detailEl.dataset.idx;
    var cidx = detailEl.dataset.cidx;
    var wid = detailEl.dataset.wid;
    if (idx != null && idx !== '') {
      var e = EV[parseInt(idx, 10)];
      if (!e) return;
      if (act === 'fly') flyTo(e.a, e.o, 1.85);
      else setYear(e.y, { eraFlash: true });
    } else if (cidx != null && cidx !== '') {
      var c = CAMPAIGNS[parseInt(cidx, 10)];
      if (!c) return;
      if (act === 'fly') flyTo(c.p[0][0], c.p[0][1], 2.0);
      else setYear(c.y, { eraFlash: true });
    } else if (wid != null && wid !== '') {
      var w = WARS[parseInt(wid, 10)];
      if (!w) return;
      if (act === 'warYear') { setYear(w.s, { eraFlash: true }); return; }
      var pts = EV.filter(function (x) { return x.wi === w.i; });
      if (!pts.length) return;
      var la = 0, lo = 0;
      pts.forEach(function (x) { la += x.a; lo += x.o; });
      flyTo(la / pts.length, lo / pts.length, 2.35);
    }
  });

  function selectWar(w) {
    if (!w) return;
    state.selectedWar = w.i;
    state.selected = -1;
    state.selectedCampaign = -1;
    for (var i = 0; i < N; i++) aSel[i] = 0;
    eventGeo.attributes.aSel.needsUpdate = true;
    renderDetailWar(w);
    listDirty = true;
    updateHighlight();
    renderWarList();
  }

  function selectEvent(idx) {
    var e = EV[idx];
    if (!e) return;
    state.selected = idx;
    state.selectedCampaign = -1;
    for (var i = 0; i < N; i++) aSel[i] = (i === idx ? 1 : 0);
    eventGeo.attributes.aSel.needsUpdate = true;
    renderDetailEvent(e);
    flyTo(e.a, e.o, 1.9);
    listDirty = true;
  }
  function selectCampaign(ci) {
    var c = CAMPAIGNS[ci];
    if (!c) return;
    state.selectedCampaign = ci;
    state.selected = -1;
    for (var i = 0; i < N; i++) aSel[i] = 0;
    eventGeo.attributes.aSel.needsUpdate = true;
    renderDetailCampaign(c, ci);
    flyTo(c.p[0][0], c.p[0][1], 2.1);
    listDirty = true;
  }

  /* ---------------- 相机飞行 ---------------- */
  var flight = null;
  function flyTo(lat, lon, dist) {
    introT = 1;
    var from = camera.position.clone();
    var to = latLonToVec3(lat, lon, dist);
    var fromSph = new THREE.Spherical().setFromVector3(from);
    var toSph = new THREE.Spherical().setFromVector3(to);
    var dTheta = toSph.theta - fromSph.theta;
    if (dTheta > Math.PI) dTheta -= Math.PI * 2;
    if (dTheta < -Math.PI) dTheta += Math.PI * 2;
    flight = {
      t: 0,
      dur: 1.05,
      r0: fromSph.radius, r1: toSph.radius,
      p0: fromSph.phi, p1: toSph.phi,
      th0: fromSph.theta, th1: fromSph.theta + dTheta
    };
    controls.autoRotate = false;
    controls.enabled = false;
  }

  function stepFlight(dt) {
    if (!flight) return;
    flight.t += dt / flight.dur;
    var k = clamp(flight.t, 0, 1);
    var e = k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2;
    var sph = new THREE.Spherical(
      flight.r0 + (flight.r1 - flight.r0) * e,
      flight.p0 + (flight.p1 - flight.p0) * e,
      flight.th0 + (flight.th1 - flight.th0) * e
    );
    camera.position.setFromSpherical(sph);
    camera.lookAt(0, 0, 0);
    if (k >= 1) {
      flight = null;
      controls.enabled = true;
      controls.update();
    }
  }

  /* ---------------- 热力更新 ---------------- */
  function updateHeat() {
    if (!state.heat) return;
    var ctx = heatCtx;
    var w = heatCanvas.width, h = heatCanvas.height;
    ctx.globalCompositeOperation = 'source-over';
    ctx.clearRect(0, 0, w, h);
    ctx.globalCompositeOperation = 'lighter';
    var list = [];
    for (var i = 0; i < EV.length; i++) {
      var e = EV[i];
      if (!passFilters(e, true)) continue;
      list.push(e);
    }
    var stride = Math.max(1, Math.ceil(list.length / 900));
    var span = state.window < 9000 ? state.window : (state.year - YEAR_MIN) || 1;
    for (var j = 0; j < list.length; j += stride) {
      var ev = list[j];
      var age = state.year - ev.y;
      var fresh = state.window < 9000 ? (1.0 - 0.55 * clamp(age / span, 0, 1)) : 0.55;
      var x = ((ev.o + 180) / 360) * w;
      var y = ((90 - ev.a) / 180) * h;
      var r = (4 + (ev.w || 0.34) * 9) * (0.8 + fresh * 0.4);
      ctx.globalAlpha = clamp(0.022 + fresh * 0.045, 0.018, 0.070);
      ctx.drawImage(heatSprite, x - r, y - r * 0.62, r * 2, r * 1.24);
      if (x < r) ctx.drawImage(heatSprite, x + w - r, y - r * 0.62, r * 2, r * 1.24);
      if (x > w - r) ctx.drawImage(heatSprite, x - w - r, y - r * 0.62, r * 2, r * 1.24);
    }
    ctx.globalAlpha = 1;
    ctx.globalCompositeOperation = 'source-over';
    heatTexture.needsUpdate = true;
  }

  /* ---------------- 聚类更新 ---------------- */
  function updateClusters() {
    if (!state.cluster) return;
    var cells = {};
    var stepLat = 2.2;
    for (var i = 0; i < EV.length; i++) {
      var e = EV[i];
      /* 口径与事件点一致：全部数据集参与，否则 2025–2026 的考据记录会聚类为空 */
      if (!passFilters(e, true)) continue;
      var la = Math.floor(e.a / stepLat);
      var lo = Math.floor(e.o / (stepLat * 1.4));
      var key = la + ':' + lo;
      var cell = cells[key];
      if (!cell) {
        cell = cells[key] = { c: 0, la: 0, lo: 0, dur: 0 };
      }
      cell.c++;
      cell.la += e.a;
      cell.lo += e.o;
      var dur = (e.e == null ? 0 : e.e - e.y);
      if (dur > cell.dur) cell.dur = dur;
    }
    var keys = Object.keys(cells);
    var n = keys.length;
    var pos = new Float32Array(n * 3);
    var counts = new Float32Array(n);
    var durs = new Float32Array(n);
    var cellsOut = [];
    for (var k = 0; k < n; k++) {
      var cc = cells[keys[k]];
      var lat = cc.la / cc.c, lon = cc.lo / cc.c;
      var v = latLonToVec3(lat, lon, 1.011);
      pos[k * 3] = v.x; pos[k * 3 + 1] = v.y; pos[k * 3 + 2] = v.z;
      counts[k] = cc.c;
      durs[k] = cc.dur;
      cellsOut.push({ lat: lat, lon: lon, count: cc.c, dur: cc.dur });
    }
    clusterGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    clusterGeo.setAttribute('aCount', new THREE.BufferAttribute(counts, 1));
    clusterGeo.setAttribute('aDur', new THREE.BufferAttribute(durs, 1));
    clusterGeo.setDrawRange(0, n);
    clusterPoints.userData.cells = cellsOut;
  }

  /* ---------------- 统计 HUD ---------------- */
  var statTimer = 0;
  function updateStats() {
    var vis = visibleEvents();
    var breakdown = { battle: 0, siege: 0, massacre: 0, campaign: 0 };
    vis.forEach(function (e) { breakdown[e.t] = (breakdown[e.t] || 0) + 1; });
    var campVis = 0;
    if (state.types.campaign) {
      CAMPAIGNS.forEach(function (c) {
        if (!warActiveAt(c.ws == null ? c.y : c.ws, c.we == null ? c.y : c.we)) return;
        if (!regionAllowed(c.r)) return;
        if (c.y > state.year + 0.01) return;
        if (state.window < 9000 && (c.e || c.y) < state.year - state.window) return;
        if (state.highOnly && CONF[c.c].v < 0.9) return;
        campVis++;
      });
    }
    var total = vis.length + campVis;
    var first = $('#mapStats b');
    if (first) first.textContent = total;
    var totalStat = $('#totalStat');
    if (totalStat) totalStat.textContent = (meta.totalEvents || EV.length + CAMPAIGNS.length);
    var campAll = breakdown.campaign + campVis;
    var vb = $('#visibleBreakdown');
    if (vb) vb.textContent = L('会战 ' + breakdown.battle + ' · 围城 ' + breakdown.siege +
      ' · 单边暴力 ' + breakdown.massacre + ' · 战役线 ' + campAll,
      'Battle ' + breakdown.battle + ' · Siege ' + breakdown.siege +
      ' · One-sided ' + breakdown.massacre + ' · Campaign ' + campAll);
    var fs = $('#filterSummary');
    if (fs) {
      if (state.overlay) {
        var thinPct = Math.round((1 - state.overlayKeep) * 100);
        var thinTxt = thinPct > 0
          ? (L(' · 抽稀 ' + thinPct + '%（约 ' + state.overlayShown + ' 点）',
              ' · thinned ' + thinPct + '% (~' + state.overlayShown + ' dots)'))
          : '';
        fs.textContent = L(
          '叠加态 · ' + (state.window >= 9000 ? '全史' : '近 ' + state.window + ' 年') + ' · 至 ' + yearShort(state.year) + ' · ' + total + ' 条' + thinTxt,
          'Overlay · ' + (state.window >= 9000 ? 'all history' : 'last ' + state.window + ' yr') + ' · to ' + yearShort(state.year) + ' · ' + total + ' records' + thinTxt);
      } else {
        fs.textContent = L(yearShort(state.year) + ' 前 ' + (state.window >= 9000 ? '全部' : state.window + ' 年') + ' · ' + total + ' 条可见',
          'Before ' + yearShort(state.year) + ' · ' + (state.window >= 9000 ? 'all' : state.window + ' years') + ' · ' + total + ' visible');
      }
    }
    document.documentElement.setAttribute('data-overlay', state.overlay ? '1' : '0');
  }

  /* ---------------- 调度 ---------------- */
  var needHeat = true, needClusters = true, needList = true, needStats = true;
  var heatAt = 0, clusterAt = 0, listAt = 0, statsAt = 0;

  function scheduleUpdates(hard) {
    needHeat = true; needClusters = true; needList = true; needStats = true;
    if (hard) {
      heatAt = 0; clusterAt = 0; listAt = 0; statsAt = 0;
    }
  }

  /* ---------------- 播放 ---------------- */
  function togglePlay() {
    if (state.playing) {
      state.playing = false;
      playBtn.textContent = L('▶ 播放', '▶ Play');
      playBtn.classList.remove('playing');
    } else {
      if (state.year >= YEAR_MAX) { setYear(YEAR_MIN, { spawnPulse: false }); }
      state.playing = true;
      playBtn.textContent = L('❚❚ 暂停', '❚❚ Pause');
      playBtn.classList.add('playing');
      controls.autoRotate = false;
    }
  }
  playBtn.addEventListener('click', togglePlay);
  speedSel.addEventListener('change', function () { state.speed = parseFloat(this.value) || 1; });

  eraChips.addEventListener('click', function (ev) {
    var b = ev.target.closest('.era-chip');
    if (!b) return;
    var idx = parseInt(b.getAttribute('data-era'), 10);
    var era = ERAS[idx];
    setYear(idx === ERAS.length - 1 ? YEAR_MAX : era.end - 1, { eraFlash: true });
  });
  $('#prevEra').addEventListener('click', function () {
    var era = eraOf(state.year);
    var idx = ERAS.indexOf(era);
    if (idx <= 0) { setYear(YEAR_MIN, { eraFlash: true }); return; }
    setYear(ERAS[idx - 1].end - 1, { eraFlash: true });
  });
  $('#nextEra').addEventListener('click', function () {
    var era = eraOf(state.year);
    var idx = ERAS.indexOf(era);
    if (idx >= ERAS.length - 1) { setYear(YEAR_MAX, { eraFlash: true }); return; }
    setYear(idx + 1 === ERAS.length - 1 ? YEAR_MAX : ERAS[idx + 1].end - 1, { eraFlash: true });
  });
  centurySel.addEventListener('change', function () {
    if (!this.value) return;
    setYear(parseFloat(this.value), { eraFlash: true });
    this.value = '';
  });
  slider.addEventListener('input', function () {
    setYear(parseFloat(this.value));
  });

  /* ---------------- 筛选 UI ---------------- */
  $all('.region-btn').forEach(function (b) {
    b.addEventListener('click', function () {
      $all('.region-btn').forEach(function (x) { x.classList.remove('active'); });
      b.classList.add('active');
      state.region = b.getAttribute('data-region');
      state.listLimit = 60;
      updateCounts();
      scheduleUpdates(true);
      syncUniforms();
    });
  });
  $all('#typeList input[data-type]').forEach(function (cb) {
    cb.addEventListener('change', function () {
      state.types[cb.getAttribute('data-type')] = cb.checked;
      state.listLimit = 60;
      syncUniforms();
      scheduleUpdates(true);
    });
  });
  $('#windowSelect').addEventListener('change', function () {
    state.window = parseFloat(this.value);
    state.listLimit = 60;
    scheduleUpdates(true);
    syncUniforms();
  });
  $('#highOnlySwitch').addEventListener('change', function () {
    state.highOnly = this.checked;
    state.listLimit = 60;
    scheduleUpdates(true);
    syncUniforms();
  });
  $('#heatSwitch').addEventListener('change', function () {
    state.heat = this.checked;
    syncUniforms();
    needHeat = true;
    heatAt = 0;
  });
  $('#clusterSwitch').addEventListener('change', function () {
    state.cluster = this.checked;
    syncUniforms();
    needClusters = true;
    clusterAt = 0;
  });
  $('#adm1Switch').addEventListener('change', function () {
    state.adm1 = this.checked;
    if (admin1Layer) admin1Layer.visible = state.adm1;
  });
  $('#highlightSwitch').addEventListener('change', function () {
    state.highlight = this.checked;
    lastHlKey = '';
    updateHighlight();
  });
  $('#zoneSwitch').addEventListener('change', function () {
    state.zone = this.checked;
    var zn = $('#zoneNote');
    if (zn) { zn.hidden = !state.zone; zn.classList.toggle('on', state.zone); }
    buildZones();
  });

  /* 叠加态与战区模式的优先级：叠加 > 战区（叠加态下战区暂停并置灰开关） */
  function syncOverlayUI() {
    var os = $('#overlaySwitch');
    if (os) os.checked = state.overlay;
    var on = $('#overlayNote');
    if (on) { on.hidden = !state.overlay; on.classList.toggle('on', state.overlay); }
    var zs = $('#zoneSwitch');
    if (zs) {
      zs.disabled = state.overlay;
      if (zs.parentNode) zs.parentNode.title = state.overlay ? L('叠加态下暂停', 'Paused in overlay') : '';
    }
    if (state.overlay) state.zone = false;
    if (zs) zs.checked = state.zone;
    var zn = $('#zoneNote');
    if (zn) { zn.hidden = !state.zone; zn.classList.toggle('on', state.zone); }
    document.documentElement.setAttribute('data-overlay', state.overlay ? '1' : '0');
  }

  $('#overlaySwitch').addEventListener('change', function () {
    state.overlay = this.checked;
    state.listLimit = 60;
    syncOverlayUI();
    buildZones();
    syncUniforms();
    updateCounts();
    scheduleUpdates(true);
    updateStats();
  });
  var langBtn = $('#langBtn');
  if (langBtn) {
    langBtn.addEventListener('click', function () {
      state.lang = isEN() ? 'zh' : 'en';
      applyLang();
      document.documentElement.setAttribute('data-lang', state.lang);
    });
  }

  var countCache = { battle: -1, siege: -1, massacre: -1, campaign: -1 };
  function updateCounts() {
    var counts = { battle: 0, siege: 0, massacre: 0, campaign: 0 };
    for (var i = 0; i < EV.length; i++) {
      var e = EV[i];
      if (state.overlay) {
        if (e.y > state.year + 0.01) continue;
        if (state.window < 9000 && e.y < state.year - state.window) continue;
      } else if (!warActiveAt(e.ws, e.we)) continue;
      if (!regionAllowed(e.r)) continue;
      counts[e.t] = (counts[e.t] || 0) + 1;
    }
    if (!state.overlay) CAMPAIGNS.forEach(function (c) { if (warActiveAt(c.ws, c.we)) counts.campaign++; });
    Object.keys(counts).forEach(function (k) {
      if (countCache[k] === counts[k]) return;
      countCache[k] = counts[k];
      var el = document.querySelector('[data-count="' + k + '"]');
      if (el) el.textContent = counts[k] > 999 ? (counts[k] / 1000).toFixed(1) + 'k' : counts[k];
    });
  }

  /* ---------------- 鼠标交互 ---------------- */
  var downPos = null, downTime = 0;
  canvas.addEventListener('pointerdown', function (ev) {
    downPos = { x: ev.clientX, y: ev.clientY };
    downTime = Date.now();
  });
  canvas.addEventListener('pointerup', function (ev) {
    if (!downPos) return;
    var dx = ev.clientX - downPos.x, dy = ev.clientY - downPos.y;
    var moved = Math.sqrt(dx * dx + dy * dy);
    var dt = Date.now() - downTime;
    downPos = null;
    if (moved > 7 || dt > 700) return;
    pick(ev.clientX, ev.clientY);
  });

  var hoverThrottle = 0;
  canvas.addEventListener('pointermove', function (ev) {
    var now = Date.now();
    if (now - hoverThrottle < 90) return;
    hoverThrottle = now;
    hover(ev.clientX, ev.clientY);
  });
  canvas.addEventListener('pointerleave', function () {
    $('#tooltip').classList.remove('show');
    canvas.style.cursor = 'grab';
  });

  function ndc(x, y) {
    return new THREE.Vector2((x / W) * 2 - 1, -(y / H) * 2 + 1);
  }

  function pickEvent(x, y) {
    raycaster.setFromCamera(ndc(x, y), camera);
    raycaster.params.Points.threshold = 0.012;
    var hits = raycaster.intersectObject(eventPoints, false);
    var camDir = camera.position.clone().normalize();
    for (var i = 0; i < hits.length; i++) {
      var idx = hits[i].index;
      var e = EV[idx];
      if (!e || !passFilters(e, true)) continue;
      var nrm = latLonToVec3(e.a, e.o, 1);
      if (nrm.dot(camDir) < 0.08) continue; // 背面点不可点选
      return idx;
    }
    return -1;
  }

  function pick(x, y) {
    var idx = pickEvent(x, y);
    if (idx >= 0) { selectEvent(idx); return; }
    // 战役线
    raycaster.setFromCamera(ndc(x, y), camera);
    var arcMeshes = arcItems.filter(function (a) { return a.alpha > 0.15; }).map(function (a) { return a.mesh; });
    var arcs = raycaster.intersectObjects(arcMeshes, false);
    if (arcs.length) {
      var ci = arcs[0].object.userData.campaign;
      if (ci != null) { selectCampaign(ci); return; }
    }
    // 聚类
    if (state.cluster) {
      raycaster.params.Points.threshold = 0.02;
      var ch = raycaster.intersectObject(clusterPoints, false);
      if (ch.length) {
        var cell = clusterPoints.userData.cells[ch[0].index];
        if (cell) {
          var tip = $('#tooltip');
          tip.querySelector('.tt-year').textContent = L('抽样聚类', 'Sampled cluster');
          tip.querySelector('.tt-name').textContent = L(cell.count + ' 条 UCDP 抽样事件', cell.count + ' sampled UCDP events');
          tip.querySelector('.tt-sub').textContent = L('最长持续 ' + cell.dur + ' 年 · 非真实冲突总数', 'Longest span ' + cell.dur + ' years · not a real conflict total');
          tip.style.left = x + 'px';
          tip.style.top = (y - 8) + 'px';
          tip.classList.add('show');
        }
      }
    }
  }

  function hover(x, y) {
    if (flight) return;
    var idx = pickEvent(x, y);
    var tip = $('#tooltip');
    if (idx >= 0) {
      var e = EV[idx];
      tip.querySelector('.tt-year').textContent = yearShort(e.y) + ' · ' + confName(e.c);
      tip.querySelector('.tt-name').textContent = evName(e);
      tip.querySelector('.tt-sub').textContent = typeName(e.t, false) + ' · ' + regionName(e.r || '');
      tip.style.left = x + 'px';
      tip.style.top = (y - 8) + 'px';
      tip.classList.add('show');
      canvas.style.cursor = 'pointer';
    } else {
      tip.classList.remove('show');
      canvas.style.cursor = 'grab';
    }
  }

  /* ---------------- 数据说明 ---------------- */
  function fillMeta() {
    var u = meta.ucdp || {}, d = meta.dbpedia || {}, c = meta.curated || {}, cp = meta.campaigns || {};
    var set = function (id, v) { var el = $('#' + id); if (el) el.textContent = v; };
    set('metaUcdpTotal', u.rowsParsed != null ? u.rowsParsed.toLocaleString('en-US') : '—');
    set('metaUcdpSample', u.sampled != null ? u.sampled.toLocaleString('en-US') : '—');
    set('metaDbpedia', d.used != null ? d.used.toLocaleString('en-US') : '—');
    set('metaCurated', (c.count || 0).toLocaleString('en-US') + L(' 条', '') +
      (cp.count ? L(' + 战役线 ' + cp.count + ' 条', ' + ' + cp.count + ' campaign lines') : ''));
    set('metaGenerated', t('metaGeneratedPrefix') + (meta.generatedAt || '') +
      t('recordsTotal') + (meta.totalEvents || 0).toLocaleString('en-US') +
      t('recordsTotalTail') + (cp.count || 0) + t('campaignLinesTail'));
    console.log('[ATLAS] 数据加载完成', {
      UCDP: u.sampled, UCDP原始记录: u.rowsParsed, DBpedia: d.used, 考据: c.count, 战役线: cp.count,
      总计: meta.totalEvents, 年份: meta.minYear + '..' + meta.maxYear
    });
  }
  var infoModal = $('#infoModal');
  function openInfo() { infoModal.hidden = false; }
  function closeInfo() { infoModal.hidden = true; }
  $('#infoBtn').addEventListener('click', openInfo);
  $('#disclaimerBtn').addEventListener('click', openInfo);
  $('#infoClose').addEventListener('click', closeInfo);
  infoModal.addEventListener('click', function (ev) { if (ev.target === infoModal) closeInfo(); });
  document.addEventListener('keydown', function (ev) {
    if (ev.key === 'Escape') closeInfo();
    if (ev.code === 'Space' && ev.target === document.body) { ev.preventDefault(); togglePlay(); }
  });

  /* ============================================================
     平面（等距圆柱）视图：与球体共享 state / EV / 筛选与时间轴
     ============================================================ */
  var flatCanvas = $('#flatmap');
  var flatCtx = flatCanvas ? flatCanvas.getContext('2d') : null;
  var FW = HL_W, FH = HL_H;               /* 世界画布与国界 Path2D 同尺寸 */
  var flatBase = document.createElement('canvas');
  var flatLayer = document.createElement('canvas');
  if (flatBase) { flatBase.width = FW; flatBase.height = FH; }
  if (flatLayer) { flatLayer.width = FW; flatLayer.height = FH; }
  var flat = { lon: 0, drag: null, dirty: true, baseReady: false, hits: [], key: '', dpr: 1 };
  var FLAT_COLOR = { battle: '#f0c169', siege: '#63d3cb', massacre: '#e0604a', campaign: '#b79bff' };

  function flatOnly() { return !!(state.flat && flatCanvas && flatCtx); }

  function flatResize() {
    if (!flatCanvas) return;
    var r = flatCanvas.getBoundingClientRect();
    if (!r.width || !r.height) return;
    flat.dpr = Math.min(window.devicePixelRatio || 1, 2);
    flatCanvas.width = Math.max(2, Math.round(r.width * flat.dpr));
    flatCanvas.height = Math.max(2, Math.round(r.height * flat.dpr));
    flat.dirty = true;
  }

  function buildFlatBase() {
    if (!flatBase) return;
    flat.lastBaseTry = (typeof performance !== 'undefined' ? performance.now() : Date.now());
    var g = flatBase.getContext('2d');
    g.setTransform(1, 0, 0, 1, 0, 0);
    g.fillStyle = '#050a0c';
    g.fillRect(0, 0, FW, FH);
    var img = earthUniforms.uDay.value && earthUniforms.uDay.value.image;
    var hasImg = !!(img && (img.complete === undefined || img.complete));
    if (hasImg) {
      g.globalAlpha = 1;
      g.drawImage(img, 0, 0, FW, FH);
      g.globalAlpha = 1;
    }
    /* 压暗，保证事件点对比度与页面整体色调一致 */
    g.fillStyle = hasImg ? 'rgba(3,7,9,0.34)' : 'rgba(3,7,9,0.55)';
    g.fillRect(0, 0, FW, FH);
    if (!countryPaths) buildCountryPaths();
    if (countryPaths) {
      g.strokeStyle = 'rgba(150,196,214,0.30)';
      g.lineWidth = 1.1;
      countryPaths.forEach(function (cp) { g.stroke(cp.path); });
    }
    var a1 = admin1Layer && admin1Layer.material && admin1Layer.material.map && admin1Layer.material.map.image;
    if (a1 && state.adm1) {
      g.globalAlpha = 0.45;
      g.drawImage(a1, 0, 0, FW, FH);
      g.globalAlpha = 1;
    }
    flat.baseReady = hasImg;
    if (hasImg) flat.dirty = true;
  }

  function ensureFlatBase() {
    if (flat.baseReady) return;
    /* 贴图可能尚未解码完成：节流重试，避免每帧重绘整张底图 */
    var t = (typeof performance !== 'undefined' ? performance.now() : Date.now());
    if (!flat.lastBaseTry || t - flat.lastBaseTry > 400) buildFlatBase();
  }

  function flatEventKey() {
    return [state.year, state.window, state.region, state.highOnly, state.overlay,
      state.types.battle ? 1 : 0, state.types.siege ? 1 : 0,
      state.types.massacre ? 1 : 0, state.types.campaign ? 1 : 0,
      state.highlight ? 1 : 0, state.adm1 ? 1 : 0, state.selected].join('|');
  }

  function rebuildFlatLayer() {
    if (!flatLayer) return;
    ensureFlatBase();
    var g = flatLayer.getContext('2d');
    g.setTransform(1, 0, 0, 1, 0, 0);
    g.clearRect(0, 0, FW, FH);
    g.drawImage(flatBase, 0, 0);
    flat.hits = [];

    /* 交战国整国填色（与球体共用同一份战争登记表） */
    if (state.highlight && countryPaths) {
      g.globalAlpha = 0.20;
      WARS.forEach(function (w) {
        if (!warIsActive(w)) return;
        var s = warSides(w);
        s.a.forEach(function (num) {
          var iso = String(num).padStart(3, '0');
          for (var i = 0; i < countryPaths.length; i++) {
            if (countryPaths[i].iso === iso) { g.fillStyle = '#c98b52'; g.fill(countryPaths[i].path); break; }
          }
        });
        s.b.forEach(function (num) {
          var iso = String(num).padStart(3, '0');
          for (var i = 0; i < countryPaths.length; i++) {
            if (countryPaths[i].iso === iso) { g.fillStyle = '#5d93b8'; g.fill(countryPaths[i].path); break; }
          }
        });
      });
      g.globalAlpha = 1;
    }

    var vis = visibleEvents();
    g.globalCompositeOperation = 'lighter';
    for (var i = 0; i < vis.length; i++) {
      var e = vis[i];
      var x = (e.o + 180) / 360 * FW;
      var y = (90 - e.a) / 180 * FH;
      var col = FLAT_COLOR[e.t] || '#f0c169';
      var r = e.t === 'siege' ? 3.0 : e.t === 'massacre' ? 2.8 : e.t === 'campaign' ? 3.6 : 2.2;
      var al = CONF[e.c] ? (0.42 + CONF[e.c].v * 0.5) : 0.7;
      if (state.overlay) al *= 0.55;
      g.fillStyle = col;
      g.globalAlpha = al * 0.16;
      g.beginPath(); g.arc(x, y, r * 2.6, 0, 6.2832); g.fill();
      g.globalAlpha = al;
      g.beginPath(); g.arc(x, y, r, 0, 6.2832); g.fill();
      flat.hits.push({ x: x, y: y, i: e.__i });
    }
    g.globalCompositeOperation = 'source-over';
    g.globalAlpha = 1;

    var sel = EV[state.selected];
    if (sel && flatOnly()) {
      var sx = (sel.o + 180) / 360 * FW, sy = (90 - sel.a) / 180 * FH;
      g.strokeStyle = '#fff4d6';
      g.lineWidth = 2.2;
      g.beginPath(); g.arc(sx, sy, 9, 0, 6.2832); g.stroke();
    }
    flat.key = flatEventKey();
    flat.dirty = false;
  }

  function drawFlatMap() {
    if (!flatCtx) return;
    ensureFlatBase();
    if (flat.dirty || flat.key !== flatEventKey()) rebuildFlatLayer();
    var W = flatCanvas.width, H = flatCanvas.height;
    if (!W || !H) return;
    var g = flatCtx;
    g.setTransform(1, 0, 0, 1, 0, 0);
    g.fillStyle = '#050a0c';
    g.fillRect(0, 0, W, H);
    var scale = Math.max(W / 360, H / 180);
    var ww = 360 * scale, wh = 180 * scale;
    var oy = (H - wh) / 2;
    var cx = (flat.lon + 180) / 360 * ww;
    var ox = W / 2 - cx;
    for (var k = -1; k <= 1; k++) {
      g.drawImage(flatLayer, ox + k * ww, oy, ww, wh);
    }
    /* 经纬网与中心经线 */
    g.strokeStyle = 'rgba(196,168,112,0.10)';
    g.lineWidth = Math.max(1, flat.dpr * 0.7);
    for (var lon = -180; lon < 180; lon += 30) {
      var x = ox + (lon + 180) / 360 * ww;
      if (x < 0 || x > W) continue;
      g.beginPath(); g.moveTo(x, oy); g.lineTo(x, oy + wh); g.stroke();
    }
    for (var lat = -60; lat <= 60; lat += 30) {
      var yy = oy + (90 - lat) / 180 * wh;
      g.beginPath(); g.moveTo(0, yy); g.lineTo(W, yy); g.stroke();
    }
    g.strokeStyle = 'rgba(240,193,105,0.35)';
    g.beginPath(); g.moveTo(W / 2, oy); g.lineTo(W / 2, oy + wh); g.stroke();

    var txt = L('中心经度 ' + Math.round(flat.lon) + '°', 'Centre ' + Math.round(flat.lon) + '° E');
    g.font = (9 * flat.dpr) + 'px ui-monospace, monospace';
    g.fillStyle = 'rgba(222,216,202,0.55)';
    g.fillText(txt, 12 * flat.dpr, 16 * flat.dpr);
  }

  function setFlatView(on) {
    state.flat = !!on;
    if (flatCanvas) flatCanvas.hidden = !state.flat;
    var gh = $('#globeHint'), fh = $('#flatHint');
    if (gh) gh.hidden = state.flat;
    if (fh) fh.hidden = !state.flat;
    var vb = $('#viewBtn');
    if (vb) vb.textContent = state.flat ? t('viewGlobe') : t('viewFlat');
    var zone = $('#zoneNote');
    if (zone && state.flat) { zone.classList.remove('on'); zone.hidden = true; }
    if (state.flat) { flatResize(); flat.dirty = true; }
    if (typeof renderer !== 'undefined' && renderer) renderer.domElement.style.visibility = state.flat ? 'hidden' : 'visible';
    var zl = $('#zoneLabels');
    if (zl) zl.style.display = state.flat ? 'none' : '';
    try { localStorage.setItem('atlas.flat', state.flat ? '1' : '0'); } catch (e) {}
  }

  if (flatCanvas) {
    flatCanvas.addEventListener('pointerdown', function (ev) {
      if (!state.flat) return;
      flat.drag = { x: ev.clientX, lon: flat.lon, moved: 0 };
      flatCanvas.classList.add('dragging');
      flatCanvas.setPointerCapture(ev.pointerId);
    });
    flatCanvas.addEventListener('pointermove', function (ev) {
      if (!flat.drag || !state.flat) return;
      var dx = ev.clientX - flat.drag.x;
      flat.drag.moved = Math.max(flat.drag.moved, Math.abs(dx));
      var perPx = 360 / flatCanvas.clientWidth;
      flat.lon = ((flat.drag.lon - dx * perPx + 540) % 360) - 180;
    });
    function endDrag(ev) {
      if (!flat.drag) return;
      var moved = flat.drag.moved;
      flat.drag = null;
      flatCanvas.classList.remove('dragging');
      if (moved < 5) {
        var r = flatCanvas.getBoundingClientRect();
        var mx = ev.clientX - r.left, my = ev.clientY - r.top;
        var best = null, bd = 14;
        var scale = Math.max(r.width / 360, r.height / 180);
        var ww = 360 * scale;
        var ox = r.width / 2 - (flat.lon + 180) / 360 * ww;
        flat.hits.forEach(function (h) {
          var hx = ox + h.x / FW * ww;
          while (hx < -ww / 2) hx += ww;
          while (hx > r.width + ww / 2) hx -= ww;
          var hy = (r.height - 180 * scale) / 2 + h.y / FH * 180 * scale;
          var d = Math.sqrt((hx - mx) * (hx - mx) + (hy - my) * (hy - my));
          if (d < bd) { bd = d; best = h; }
        });
        if (best) selectEvent(best.i);
      }
    }
    flatCanvas.addEventListener('pointerup', endDrag);
    flatCanvas.addEventListener('pointercancel', function () {
      flat.drag = null;
      flatCanvas.classList.remove('dragging');
    });
    flatCanvas.addEventListener('wheel', function (ev) { ev.preventDefault(); }, { passive: false });
  }

  /* ============================================================
     可视化看板（同一份数据实时统计）
     ============================================================ */
  function svgBarChart(items, opt) {
    opt = opt || {};
    var w = 520, h = opt.h || 150, pad = 18;
    var max = 1;
    items.forEach(function (it) { if (it.v > max) max = it.v; });
    var bw = (w - pad * 2) / Math.max(1, items.length);
    var s = '<svg viewBox="0 0 ' + w + ' ' + h + '" role="img">';
    s += '<line class="axis" x1="' + pad + '" y1="' + (h - 20) + '" x2="' + (w - pad) + '" y2="' + (h - 20) + '"/>';
    items.forEach(function (it, i) {
      var bh = Math.max(1, (it.v / max) * (h - 42));
      var x = pad + i * bw + bw * 0.18;
      var y = h - 20 - bh;
      s += '<rect x="' + x.toFixed(1) + '" y="' + y.toFixed(1) + '" width="' + (bw * 0.64).toFixed(1) +
        '" height="' + bh.toFixed(1) + '" fill="' + (it.c || '#c9a55f') + '" opacity="0.82"/>';
      if (items.length <= 18 || i % Math.ceil(items.length / 12) === 0) {
        s += '<text class="tick" x="' + (pad + i * bw + bw / 2).toFixed(1) + '" y="' + (h - 9) + '" text-anchor="middle">' + esc(it.k) + '</text>';
      }
      if (it.v > 0 && items.length <= 26) {
        s += '<text class="val" x="' + (pad + i * bw + bw / 2).toFixed(1) + '" y="' + (y - 3).toFixed(1) + '" text-anchor="middle">' + it.v + '</text>';
      }
    });
    return s + '</svg>';
  }

  function svgHBar(items) {
    var w = 520, rowH = 18, pad = 4;
    var h = items.length * rowH + 10;
    var max = 1;
    items.forEach(function (it) { if (it.v > max) max = it.v; });
    var s = '<svg viewBox="0 0 ' + w + ' ' + h + '" role="img">';
    items.forEach(function (it, i) {
      var y = pad + i * rowH;
      var bw = (it.v / max) * (w - 200);
      s += '<text class="lbl" x="0" y="' + (y + 11) + '">' + esc(it.k) + '</text>';
      s += '<rect x="118" y="' + (y + 3) + '" width="' + Math.max(1, bw).toFixed(1) + '" height="9" fill="' + (it.c || '#7fb4c8') + '" opacity="0.7"/>';
      s += '<text class="val" x="' + (124 + Math.max(1, bw)).toFixed(1) + '" y="' + (y + 11) + '">' + it.v + '</text>';
    });
    return s + '</svg>';
  }

  function buildDashboard() {
    var body = $('#dashBody');
    if (!body) return;
    var all = EV;
    var warsList = WARS.filter(function (w) { return w.listed !== false; });

    /* 时间：按世纪统计战争数与事件数 */
    var cent = {};
    all.forEach(function (e) {
      var c = Math.floor(e.y / 100) * 100;
      if (!cent[c]) cent[c] = { ev: 0, war: 0 };
      cent[c].ev++;
    });
    warsList.forEach(function (w) {
      var c = Math.floor(((w.s || 0) + (w.e || 0)) / 2 / 100) * 100;
      if (!cent[c]) cent[c] = { ev: 0, war: 0 };
      cent[c].war++;
    });
    var centKeys = Object.keys(cent).map(Number).sort(function (a, b) { return a - b; })
      .filter(function (c) { return c >= -3000 && c <= 2000; });
    var timeItems = centKeys.map(function (c) {
      return { k: c < 0 ? ('前' + Math.abs(c)) : String(c), v: cent[c].ev, c: '#c9a55f' };
    });

    /* 地域：事件数 + 国家热点 */
    var regionCount = {};
    var countryCount = {};
    all.forEach(function (e) {
      regionCount[e.r] = (regionCount[e.r] || 0) + 1;
      var cs = String(e.loc || '').split('·')[0].trim();
      if (cs) countryCount[cs] = (countryCount[cs] || 0) + 1;
    });
    var regionItems = Object.keys(regionCount).sort(function (a, b) { return regionCount[b] - regionCount[a]; })
      .map(function (r) { return { k: regionName(r), v: regionCount[r], c: '#7fb4c8' }; });
    var topCountries = Object.keys(countryCount).sort(function (a, b) { return countryCount[b] - countryCount[a]; })
      .slice(0, 10).map(function (c) { return { k: c, v: countryCount[c], c: '#c9a55f' }; });

    /* 规模：交战方数量分布 + 记录粒度 */
    var belDist = { '2': 0, '3': 0, '4': 0, '5+': 0 };
    warsList.forEach(function (w) {
      var n = (w.A || []).length + (w.B || []).length;
      if (n <= 2) belDist['2']++; else if (n === 3) belDist['3']++; else if (n === 4) belDist['4']++; else belDist['5+']++;
    });
    var belItems = Object.keys(belDist).map(function (k) { return { k: k + L(' 方', ' sides'), v: belDist[k], c: '#b79bff' }; });
    var ranges = [
      { k: L('前3000–1900', '3000–1900 BC'), a: -3000, b: -1900 },
      { k: L('1900–1945', '1900–1945'), a: -1900, b: 1945 },
      { k: L('1946–1988', '1946–1988'), a: 1946, b: 1988 },
      { k: L('1989–2026', '1989–2026'), a: 1989, b: 2026 }
    ];
    var densityItems = ranges.map(function (r) {
      var n = all.filter(function (e) { return e.y >= r.a && e.y <= r.b; }).length;
      return { k: r.k, v: Math.round(n / (r.b - r.a + 1)), c: '#87b78e' };
    });

    /* 伤亡：仅统计 UCDP 有死亡估计的记录（固定抽样，不是全量） */
    var ucdpBest = 0, ucdpLow = 0, ucdpHigh = 0, ucdpN = 0;
    var byDecade = {};
    all.forEach(function (e) {
      if (e.ds !== 'U') return;
      var m = String(e.cs || '').match(/最佳\s*(\d+)\s*人（区间\s*(\d+)–(\d+)）/);
      if (!m) return;
      var b = +m[1], lo = +m[2], hi = +m[3];
      ucdpBest += b; ucdpLow += lo; ucdpHigh += hi; ucdpN++;
      var d = Math.floor(e.y / 10) * 10;
      byDecade[d] = (byDecade[d] || 0) + b;
    });
    var decKeys = Object.keys(byDecade).map(Number).sort(function (a, b) { return a - b; });
    var casItems = decKeys.map(function (d) { return { k: String(d), v: byDecade[d], c: '#d97b62' }; });
    var curatedCas = all.filter(function (e) { return e.ds === 'C' && e.cs; }).length;
    var missingCas = all.length - ucdpN - curatedCas;

    /* 影响：只展示考据条目里写明影响的记录 */
    var impacts = all.filter(function (e) { return e.ds === 'C' && e.im; });
    var impactHtml = impacts.slice(0, 8).map(function (e) {
      var src = (e.src && e.src[0]) ? ' <a href="' + esc(e.src[0].u) + '" target="_blank" rel="noopener">' + esc(e.src[0].l) + '</a>' : '';
      return '<li><b>' + esc(evName(e)) + '（' + fmtYearShort(e.y) + '）</b> ' + esc(pickTxt(e.im, e.ime)) + src + '</li>';
    }).join('');

    body.innerHTML =
      '<div class="dash-summary">' +
      '<span>' + L('事件记录', 'records') + '<b>' + all.length.toLocaleString() + '</b></span>' +
      '<span>' + L('具名战争', 'named wars') + '<b>' + warsList.length.toLocaleString() + '</b></span>' +
      '<span>' + L('时间跨度', 'span') + '<b>' + YEAR_MIN + ' → ' + YEAR_MAX + '</b></span>' +
      '<span>' + L('有死亡估计的记录', 'records with death estimates') + '<b>' + (ucdpN + curatedCas).toLocaleString() + '</b></span>' +
      '</div>' +
      '<div class="dash-grid">' +

      '<section class="dash-sec wide"><h3>' + L('一 · 时间维度：各世纪事件数与战争数', 'I · TIME: RECORDS AND WARS BY CENTURY') + '</h3>' +
      '<p class="dash-cap">' + L('柱为事件记录数（含会战/围城/单边暴力/战役线），按世纪归并；1900 年后记录密度上升既反映战事，也反映记录粒度变细。',
        'Bars are record counts by century. The post-1900 rise reflects both more conflict and finer-grained record keeping.') + '</p>' +
      svgBarChart(timeItems, { h: 160 }) +
      '<p class="dash-cap">' + L('百年内具名战争数：', 'Named wars per century: ') +
      centKeys.map(function (c) { return (c < 0 ? '前' + Math.abs(c) : c) + '·' + cent[c].war; }).slice(-10).join('  ') + '</p></section>' +

      '<section class="dash-sec"><h3>' + L('二 · 地理分布：按大区', 'II · GEOGRAPHY: BY REGION') + '</h3>' +
      '<p class="dash-cap">' + L('全部事件记录的大区归属（跨区域按条目原标注）。', 'Region of every record; transregional follows the source label.') + '</p>' +
      svgHBar(regionItems) + '</section>' +

      '<section class="dash-sec"><h3>' + L('二 · 地理分布：热点国家（前 10）', 'II · GEOGRAPHY: TOP 10 COUNTRIES') + '</h3>' +
      '<p class="dash-cap">' + L('按条目地点字段中的国家名统计，同一国家不同政权未合并。', 'Counted from the country segment of each location string; different polities are not merged.') + '</p>' +
      svgHBar(topCountries) + '</section>' +

      '<section class="dash-sec"><h3>' + L('三 · 规模：交战方数量', 'III · SCALE: BELLIGERENTS') + '</h3>' +
      '<p class="dash-cap">' + L('按战争登记表的 A/B 方计数；古代政权的“示意代理”计入。', 'Counted from the A/B sides in the war registry; proxy polities are included.') + '</p>' +
      svgBarChart(belItems, { h: 130 }) + '</section>' +

      '<section class="dash-sec"><h3>' + L('三 · 规模：年均记录密度', 'III · SCALE: RECORDS PER YEAR') + '</h3>' +
      '<p class="dash-cap">' + L('每段的年均记录数。1946–1988 与 1989 年后的差异主要来自记录粒度，不能直接当作战事频率。',
        'Average records per year. The 1946–1988 vs post-1989 gap mostly reflects record granularity, not conflict frequency.') + '</p>' +
      svgBarChart(densityItems, { h: 130 }) + '</section>' +

      '<section class="dash-sec wide"><h3>' + L('四 · 伤亡：仅列有可靠估计的部分', 'IV · CASUALTIES: ONLY RELIABLE ESTIMATES') + '</h3>' +
      '<p class="dash-cap">' + L('数据来自 UCDP GED 的逐事件死亡估计（最佳值），本站为固定抽样：' + ucdpN.toLocaleString() + ' 条记录，最佳值合计 ' + ucdpBest.toLocaleString() +
        '（区间 ' + ucdpLow.toLocaleString() + '–' + ucdpHigh.toLocaleString() + '）。这是抽样记录之和，不是战争总死亡人数。',
        'UCDP GED per-event death estimates (best), from our fixed sample: ' + ucdpN.toLocaleString() + ' records totalling ' + ucdpBest.toLocaleString() +
        ' (range ' + ucdpLow.toLocaleString() + '–' + ucdpHigh.toLocaleString() + '). These are sample sums, not war totals.') + '</p>' +
      svgBarChart(casItems, { h: 150 }) +
      '<div class="dash-missing">' + L('缺失说明：其余 ' + missingCas.toLocaleString() + ' 条记录没有可比的死亡估计（古代与百科条目多为定性描述），因此不做汇总，也不线性外推。',
        'Missing: the other ' + missingCas.toLocaleString() + ' records have no comparable death estimate (ancient and encyclopaedic entries are mostly qualitative), so they are neither summed nor extrapolated.') + '</div></section>' +

      '<section class="dash-sec wide"><h3>' + L('五 · 经济与战后影响（按条目原文）', 'V · ECONOMIC AND POST-WAR IMPACT (SOURCE TEXT)') + '</h3>' +
      '<p class="dash-cap">' + L('只有考据条目写明了影响，共 ' + impacts.length + ' 条；其余 ' + (all.length - impacts.length).toLocaleString() +
        ' 条没有结构化影响数据，下方不做推断。', 'Only curated entries state an impact (' + impacts.length + '); the other ' + (all.length - impacts.length).toLocaleString() +
        ' records have no structured impact data and are not inferred below.') + '</p>' +
      (impactHtml ? '<ul class="dash-list">' + impactHtml + '</ul>' : '') +
      '<div class="dash-missing">' + L('经济影响（军费、重建成本、GDP 损失）在本数据集中未系统收录，故不提供跨国汇总。',
        'Economic impact (military spending, reconstruction cost, GDP loss) is not systematically covered in this dataset, so no cross-country aggregate is given.') + '</div></section>' +

      '</div>';
  }

  function openDashboard(open) {
    var m = $('#dashModal');
    if (!m) return;
    m.hidden = !open;
    document.body.classList.toggle('modal-open', !!open);
    if (open) buildDashboard();
  }

  var dashBtn = $('#dashBtn');
  if (dashBtn) dashBtn.addEventListener('click', function () { openDashboard(true); });
  var dashClose = $('#dashClose');
  if (dashClose) dashClose.addEventListener('click', function () { openDashboard(false); });
  var viewBtn = $('#viewBtn');
  if (viewBtn) viewBtn.addEventListener('click', function () { setFlatView(!state.flat); });

  /* ---------------- 主循环 ---------------- */
  var introT = 0;
  var frameCount = 0;
  var fpsFrames = 0, fpsAccum = 0, lastFps = 0;
  function animate() {
    requestAnimationFrame(animate);
    var dtRaw = clock.getDelta();
    var dt = Math.min(dtRaw, 0.12);
    var now = clock.elapsedTime;

    /* 自适应分辨率：FPS 持续偏低时降低渲染分辨率，恢复流畅后再升回 */
    fpsFrames++; fpsAccum += dtRaw;
    if (fpsAccum >= 1.5) {
      lastFps = fpsFrames / fpsAccum;
      fpsFrames = 0; fpsAccum = 0;
      if (lastFps < 24 && dprScale > 0.5) { dprScale = Math.max(0.5, dprScale - 0.15); applyPixelScale(); }
      else if (lastFps > 50 && dprScale < 1) { dprScale = Math.min(1, dprScale + 0.1); applyPixelScale(); }
    }

    if (state.playing) {
      var rate = 52 * state.speed;
      var next = state.year + rate * dt;
      if (next >= YEAR_MAX) { next = YEAR_MAX; state.playing = false; playBtn.textContent = L('▶ 播放', '▶ Play'); playBtn.classList.remove('playing'); }
      setYear(next, { spawnPulse: true });
    }

    if (introT < 1) {
      introT = Math.min(1, introT + dt / 1.5);
      var e = 1 - Math.pow(1 - introT, 3);
      var sph = new THREE.Spherical().setFromVector3(camera.position);
      sph.radius = 6.0 + (INIT_DIST - 6.0) * e;
      camera.position.setFromSpherical(sph);
    }

    stepFlight(dt);
    if (window.__ATLAS_CLOUDS) window.__ATLAS_CLOUDS.rotation.y += dt * 0.0045;

    // 时间 uniform
    eventUniforms.uTime.value = now;
    pulseUniforms.uTime.value = now;
    arcItems.forEach(function (a) {
      a.mat.uniforms.uTime.value = now;
      var active = state.types.campaign && warActiveAt(a.campaign.ws == null ? a.campaign.y : a.campaign.ws, a.campaign.we == null ? a.campaign.y : a.campaign.we) &&
        (state.region === 'all' || state.region === '跨区域') &&
        (a.campaign.y <= state.year + 0.01) &&
        (state.window >= 9000 || (a.campaign.e || a.campaign.y) >= state.year - state.window) &&
        (!state.highOnly || CONF[a.campaign.c].v >= 0.9);
      a.alpha += ((active ? 1 : 0) - a.alpha) * Math.min(1, dt * 4.5);
      a.mat.uniforms.uAlpha.value = a.alpha;
      a.glowMat.opacity = a.alpha * 0.16;
      a.mesh.visible = a.alpha > 0.02;
      a.glow.visible = a.mesh.visible;
    });

    if (needHeat && now - heatAt > 0.16) { heatAt = now; needHeat = false; updateHeat(); }
    if (needClusters && now - clusterAt > 0.2) { clusterAt = now; needClusters = false; updateClusters(); }
    if (needList && now - listAt > 0.35) { listAt = now; needList = false; if (!detailEl.hidden) { /* keep detail */ } else { listDirty = true; renderList(); } }
    if (needStats && now - statsAt > 0.25) { statsAt = now; needStats = false; updateStats(); }

    drawDensity();
    frameCount++;
    if (state.zone && frameCount % 5 === 0) positionZoneLabels();
    controls.update();
    if (state.flat) {
      /* 平面视图：3D 场景暂停绘制，改用同一份 state/EV 画等距圆柱地图 */
      drawFlatMap();
    } else {
      renderer.render(scene, camera);
    }
  }

  /* ---------------- 初始化 ---------------- */
  var autoFocusWar = false;
  (function applyUrlParams() {
    try {
      var q = new URLSearchParams(window.location.search);
      if (q.get('lang') === 'en') state.lang = 'en';
      if (q.get('year') != null) state.year = clamp(parseFloat(q.get('year')) || 0, YEAR_MIN, YEAR_MAX);
      if (q.get('zone') === '1') state.zone = true;
      if (q.get('overlay') === '1') state.overlay = true;
      if (q.get('window') != null) {
        var wq = parseFloat(q.get('window'));
        if (wq > 0) state.window = wq;
        var ws = $('#windowSelect'); if (ws) ws.value = String(state.window);
      }
      if (q.get('side') === '0') state.highlight = false;
      if (q.get('heat') === '0') state.heat = false;
      if (q.get('cluster') === '1') state.cluster = true;
      if (q.get('adm1') === '0') state.adm1 = false;
      if (q.get('war') != null) state.selectedWar = parseInt(q.get('war'), 10);
      if (q.get('focus') === '1') autoFocusWar = true;
      if (q.get('view') === 'flat') state.flat = true;
      else {
        try { if (!q.get('view') && localStorage.getItem('atlas.flat') === '1') state.flat = true; } catch (e2) {}
      }
      var zs = $('#zoneSwitch'); if (zs) zs.checked = state.zone;
      var hs = $('#highlightSwitch'); if (hs) hs.checked = state.highlight;
      var as = $('#adm1Switch'); if (as) as.checked = state.adm1;
      var cs = $('#clusterSwitch'); if (cs) cs.checked = state.cluster;
      var zn = $('#zoneNote'); if (zn) { zn.hidden = !state.zone; zn.classList.toggle('on', state.zone); }
      syncOverlayUI();
    } catch (e) { /* URL 参数仅用于测试与直达，不影像常使用 */ }
  })();

  fillMeta();
  resize();
  updateEraUI(false);
  syncUniforms();
  updateCounts();
  scheduleUpdates(true);
  renderList();
  renderWarList();
  updateHighlight();
  buildZones();
  if (state.selectedWar >= 0 && WARS[state.selectedWar]) renderDetailWar(WARS[state.selectedWar]);
  updateStats();
  applyLang();
  setFlatView(state.flat);
  slider.value = state.year;
  setTimeout(function () {
    var ld = $('#loading');
    if (ld) {
      ld.classList.add('hide');
      setTimeout(function () { ld.style.display = 'none'; }, 700);
    }
  }, 260);
  setTimeout(function () {
    var hint = $('#globeHint');
    if (hint) hint.style.opacity = '0';
  }, 8000);

  // 首次渲染前设置初始年份，避免闪烁
  slider.value = state.year;
  camera.position.copy(latLonToVec3(INIT_LAT, INIT_LON, 6.0));
  camera.lookAt(0, 0, 0);
  controls.update();

  if (autoFocusWar && state.selectedWar >= 0 && WARS[state.selectedWar]) {
    var fw = WARS[state.selectedWar];
    var fpts = EV.filter(function (e) { return e.wi === fw.i; });
    if (fpts.length) {
      var fla = 0, flo = 0;
      fpts.forEach(function (e) { fla += e.a; flo += e.o; });
      flyTo(fla / fpts.length, flo / fpts.length, 2.05);
    }
  }

  window.__ATLAS = {
    state: state,
    meta: meta,
    wars: WARS,
    setYear: setYear,
    activeWars: activeWars,
    selectWar: selectWar,
    selectEvent: selectEvent,
    buildZones: buildZones,
    zoneZones: function () { return zoneZones; },
    overlayStats: overlayStats,
    overlayTarget: function (n) {
      if (n > 0) OVERLAY_TARGET = n;
      syncUniforms();
      updateStats();
      return { target: OVERLAY_TARGET, total: state.overlayTotal, keep: state.overlayKeep, shown: state.overlayShown };
    },
    setOverlay: function (v) {
      state.overlay = !!v;
      syncOverlayUI();
      buildZones();
      syncUniforms();
      updateCounts();
      scheduleUpdates(true);
      updateStats();
      return state.overlay;
    },
    admin1Layer: function () { return admin1Layer; },
    updateHighlight: updateHighlight,
    lang: function (v) { if (v) { state.lang = v; applyLang(); } return state.lang; },
    visibleCount: function () { return visibleEvents().length; },
    visibleEvents: visibleEvents,
    events: EV,
    flyTo: flyTo,
    scene: scene,
    camera: camera,
    renderer: renderer,
    perf: function () { return { fps: Math.round(lastFps * 10) / 10, dprScale: dprScale, softGL: SOFT_GL, dprBase: DPR_BASE }; },
    setFlat: setFlatView,
    flatLon: function () { return flat.lon; },
    dash: openDashboard,
    clusterCount: function () { return clusterGeo.drawRange.count; }
  };

  animate();
  console.log('[ATLAS] 三维地球已启动；地球贴图 ' + (earthUniforms.uDay.value ? '已加载' : '加载中') +
    '；事件点 ' + N + '；战役线 ' + CAMPAIGNS.length);
})();
