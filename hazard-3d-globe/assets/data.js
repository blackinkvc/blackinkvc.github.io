/* =========================================================
   数据适配层：USGS / NASA EONET / NOAA NWS
   所有请求均来自公开 API；失败时回退本地缓存并明确标注。
   ========================================================= */
(function () {
  'use strict';
  const HZ = window.HZ;
  if (!HZ) return;

  const CACHE_PREFIX = 'hz_globe_v1_';
  const FETCH_TIMEOUT = 20000;

  const USGS_FEEDS = {
    1: 'all_hour.geojson',
    24: 'all_day.geojson',
    168: 'all_week.geojson',
    720: 'all_month.geojson'
  };

  const HAZARD_META = {
    earthquake: { label: '地震', color: '#e8a05c', source: 'USGS · 地震目录' },
    cyclone: { label: '台风 / 飓风', color: '#6ecfbe', source: 'EONET · JTWC 路径' },
    tsunami: { label: '海啸', color: '#8bb7d2', source: 'NOAA / NWS 预警' },
    landslide: { label: '泥石流 / 滑坡', color: '#d99a62', source: 'EONET · 滑坡事件' },
    volcano: { label: '火山', color: '#d46d79', source: 'EONET · 火山事件' },
    flood: { label: '洪水', color: '#6fa9d6', source: 'EONET · 洪水事件' },
    wildfire: { label: '野火', color: '#dfb676', source: 'EONET · 野火事件' }
  };
  HZ.HAZARD_META = HAZARD_META;

  function windUnitZh(u) {
    const s = String(u || '').toLowerCase();
    if (s === 'km/h') return '千米/小时';
    if (s === 'mph') return '英里/小时';
    if (s === 'm/s') return '米/秒';
    if (s === 'kt' || s === 'kts' || s === '') return '节';
    return s;
  }
  HZ.windUnitZh = windUnitZh;

  HZ.sourceZh = function (src) {
    const s = String(src || '');
    if (s.indexOf('USGS') === 0) return '美国地质调查局（USGS）';
    if (s.indexOf('NASA EONET') === 0) return 'NASA 地球观测事件库（EONET）';
    if (s.indexOf('NOAA / NWS') === 0) return '美国国家海洋和大气管理局 / 国家气象局（NOAA / NWS）';
    if (s.indexOf('示例') === 0) return '页面示例数据';
    return s;
  };

  HZ.data = {
    status: {
      usgs: { label: 'USGS 地震目录', state: 'loading', count: 0, updated: null, cache: false, error: null, url: '' },
      eonet: { label: 'NASA EONET', state: 'loading', count: 0, updated: null, cache: false, error: null, url: 'https://eonet.gsfc.nasa.gov/api/v3/events?status=open&days=30' },
      nws: { label: 'NOAA / NWS 海啸预警', state: 'loading', count: 0, updated: null, cache: false, error: null, url: 'https://api.weather.gov/alerts/active' }
    },
    raw: { earthquakes: [], eonet: [], tsunami: [] },
    events: [],
    lastBuild: 0,
    offline: false
  };

  /* ---------------- fetch + cache ---------------- */
  function readCache(key) {
    try {
      const raw = localStorage.getItem(CACHE_PREFIX + key);
      if (!raw) return null;
      const obj = JSON.parse(raw);
      if (!obj || !obj.data) return null;
      return obj;
    } catch (e) { return null; }
  }
  function writeCache(key, data) {
    try {
      localStorage.setItem(CACHE_PREFIX + key, JSON.stringify({ t: Date.now(), data: data }));
    } catch (e) {
      // quota exceeded: drop older entries
      try {
        Object.keys(localStorage).forEach(function (k) {
          if (k.indexOf(CACHE_PREFIX) === 0 && k.indexOf(key) < 0) localStorage.removeItem(k);
        });
        localStorage.setItem(CACHE_PREFIX + key, JSON.stringify({ t: Date.now(), data: data }));
      } catch (e2) { /* ignore */ }
    }
  }
  async function fetchJSON(url, opts) {
    opts = opts || {};
    const ctrl = new AbortController();
    const timer = setTimeout(function () { ctrl.abort(); }, opts.timeout || FETCH_TIMEOUT);
    try {
      const res = await fetch(url, {
        signal: ctrl.signal,
        headers: opts.headers || {},
        cache: 'no-store',
        mode: 'cors'
      });
      if (!res.ok) throw new Error('HTTP ' + res.status);
      const text = await res.text();
      if (!text || text.length < 2) throw new Error('空响应');
      return JSON.parse(text);
    } finally {
      clearTimeout(timer);
    }
  }

  async function loadCached(key, url, ttl, parser, statusRef, opts) {
    const cached = readCache(key);
    const fresh = cached && (Date.now() - cached.t) < ttl;
    if (fresh) {
      try {
        const parsed = parser(cached.data);
        statusRef.state = 'live';
        statusRef.cache = true;
        statusRef.updated = cached.t;
        statusRef.error = null;
        return parsed;
      } catch (e) { /* fall through to network */ }
    }
    try {
      const data = await fetchJSON(url, opts);
      writeCache(key, data);
      const parsed = parser(data);
      statusRef.state = 'live';
      statusRef.cache = false;
      statusRef.updated = Date.now();
      statusRef.error = null;
      return parsed;
    } catch (err) {
      if (cached) {
        try {
          const parsed = parser(cached.data);
          statusRef.state = 'cache';
          statusRef.cache = true;
          statusRef.updated = cached.t;
          statusRef.error = err.message || String(err);
          return parsed;
        } catch (e2) { /* ignore */ }
      }
      statusRef.state = 'error';
      statusRef.error = err.message || String(err);
      statusRef.updated = null;
      return null;
    }
  }

  /* ---------------- geometry helpers ---------------- */
  function centroidOfGeometry(g) {
    if (!g) return null;
    if (g.type === 'Point') return { lat: g.coordinates[1], lon: g.coordinates[0] };
    if (g.type === 'Polygon' && g.coordinates && g.coordinates[0] && g.coordinates[0].length) {
      let sx = 0, sy = 0, n = 0;
      g.coordinates[0].forEach(function (c) { sx += c[0]; sy += c[1]; n++; });
      return { lat: sy / n, lon: sx / n };
    }
    if (g.type === 'MultiPolygon' && g.coordinates && g.coordinates[0] && g.coordinates[0][0]) {
      let sx = 0, sy = 0, n = 0;
      g.coordinates[0][0].forEach(function (c) { sx += c[0]; sy += c[1]; n++; });
      return { lat: sy / n, lon: sx / n };
    }
    return null;
  }
  function bboxRadiusDeg(g) {
    if (!g) return null;
    const coords = [];
    function walk(c) {
      if (typeof c[0] === 'number' && typeof c[1] === 'number') coords.push(c);
      else if (Array.isArray(c)) c.forEach(walk);
    }
    walk(g.coordinates);
    if (!coords.length) return null;
    let minx = 999, maxx = -999, miny = 999, maxy = -999;
    coords.forEach(function (c) {
      minx = Math.min(minx, c[0]); maxx = Math.max(maxx, c[0]);
      miny = Math.min(miny, c[1]); maxy = Math.max(maxy, c[1]);
    });
    const span = Math.max(maxx - minx, maxy - miny);
    if (span > 40) return null; // continent-scale polys: don't use as local radius
    return Math.max(0.6, span / 2);
  }

  /* ---------------- USGS ---------------- */
  function parseUSGS(data) {
    const out = [];
    if (!data || !data.features) return out;
    data.features.forEach(function (f) {
      const p = f.properties || {};
      const c = f.geometry && f.geometry.coordinates;
      if (!c || c.length < 2) return;
      if (p.type && p.type !== 'earthquake') return; // 仅保留天然地震
      if (p.mag == null) return;
      const lat = c[1], lon = c[0];
      out.push({
        type: 'earthquake',
        id: 'usgs-' + (f.id || (lat + ',' + lon + ',' + p.time)),
        lat: lat, lon: lon,
        mag: p.mag, depth: c.length > 2 ? c[2] : null,
        time: p.time || null,
        title: p.place || '未知地点',
        place: p.place || '未知地点',
        source: 'USGS',
        sourceUrl: p.url || 'https://earthquake.usgs.gov/earthquakes/map/',
        updated: p.updated || null,
        tsunamiFlag: p.tsunami === 1,
        severity: Math.max(0, Math.min(100, p.mag / 8 * 100)),
        isDemo: false,
        color: HZ.colorForMag(p.mag),
        meta: 'M ' + p.mag.toFixed(1) + (c.length > 2 ? ' · 深度 ' + c[2].toFixed(1) + ' 千米' : '')
      });
    });
    return out;
  }

  async function loadUSGS(hours) {
    const feed = USGS_FEEDS[hours] || USGS_FEEDS[24];
    const url = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/' + feed;
    const st = HZ.data.status.usgs;
    st.url = url;
    st.state = 'loading';
    let generated = null;
    const events = await loadCached('usgs_' + feed, url, hours <= 24 ? 90000 : 300000, function (data) {
      if (data && data.metadata && data.metadata.generated) {
        generated = Math.min(Date.now(), Date.parse(data.metadata.generated) || 0);
      }
      return parseUSGS(data);
    }, st, {
      headers: { 'Accept': 'application/json' }
    });
    HZ.data.raw.earthquakes = events || [];
    st.count = HZ.data.raw.earthquakes.length;
    st.dataTime = generated || HZ.data.raw.earthquakes.reduce(function (m, e) {
      return Math.max(m, e.time || 0);
    }, 0);
    return events || [];
  }

  /* ---------------- EONET ---------------- */
  const EONET_MAP = {
    severeStorms: 'cyclone',
    volcanoes: 'volcano',
    floods: 'flood',
    landslides: 'landslide',
    wildfires: 'wildfire'
  };

  function parseEONET(data, cutoff) {
    const out = [];
    if (!data || !data.events) return out;
    data.events.forEach(function (ev) {
      const cats = ev.categories || [];
      const catId = cats[0] && cats[0].id;
      const type = EONET_MAP[catId];
      if (!type) return;
      const geoms = (ev.geometry || []).slice().sort(function (a, b) {
        return new Date(a.date) - new Date(b.date);
      });
      if (!geoms.length) return;
      const last = geoms[geoms.length - 1];
      const lastTime = last.date ? new Date(last.date).getTime() : null;
      if (cutoff && lastTime && lastTime < cutoff) return;

      let pos = null;
      if (type === 'cyclone') {
        pos = centroidOfGeometry(last);
      } else {
        pos = centroidOfGeometry(last);
      }
      if (!pos || isNaN(pos.lat) || isNaN(pos.lon)) return;

      const isStorm = type === 'cyclone';
      const track = isStorm ? geoms.filter(function (g) { return g.type === 'Point'; }).map(function (g) {
        return {
          lat: g.coordinates[1], lon: g.coordinates[0],
          time: g.date ? new Date(g.date).getTime() : null,
          wind: (g.magnitudeValue != null ? g.magnitudeValue : null),
          unit: g.magnitudeUnit || ''
        };
      }) : null;

      const wind = isStorm && last.magnitudeValue != null ? last.magnitudeValue : null;
      const src = (ev.sources && ev.sources[0]) || {};
      const areaR = last.type !== 'Point' ? bboxRadiusDeg(last) : null;

      let severity = 50;
      if (type === 'cyclone') severity = wind != null ? Math.max(20, Math.min(100, wind / 140 * 100)) : 55;
      if (type === 'volcano') severity = 60;
      if (type === 'flood') severity = 55;
      if (type === 'landslide') severity = 55;

      out.push({
        type: type, id: 'eonet-' + ev.id,
        lat: pos.lat, lon: pos.lon,
        time: lastTime,
        title: ev.title || HAZARD_META[type].label,
        source: 'NASA EONET' + (src.id ? ' · ' + src.id : ''),
        sourceUrl: src.url || ev.link || 'https://eonet.gsfc.nasa.gov/',
        isDemo: false,
        color: HAZARD_META[type].color,
        severity: severity,
        wind: wind,
        windUnit: last.magnitudeUnit || '',
        track: track,
        areaR: areaR,
        meta: isStorm
          ? (wind != null ? '风速 ' + wind + ' ' + windUnitZh(last.magnitudeUnit) : '活跃热带气旋')
          : (HAZARD_META[type].label + ' · 公开事件')
      });
    });
    return out;
  }

  async function loadEONET() {
    const st = HZ.data.status.eonet;
    st.state = 'loading';
    const cutoff = Date.now() - 30 * 24 * 3600000;
    const events = await loadCached('eonet_30d', st.url, 300000, function (data) {
      return parseEONET(data, cutoff);
    }, st, { headers: { 'Accept': 'application/json' } });
    HZ.data.raw.eonet = events || [];
    st.count = HZ.data.raw.eonet.length;
    st.dataTime = HZ.data.raw.eonet.reduce(function (m, e) {
      if (e.track && e.track.length) {
        e.track.forEach(function (p) { m = Math.max(m, p.time || 0); });
      }
      return Math.max(m, e.time || 0);
    }, 0);
    return events || [];
  }

  /* ---------------- NWS tsunami alerts ---------------- */
  const TSUNAMI_EVENTS = ['Tsunami Warning', 'Tsunami Watch', 'Tsunami Advisory'];

  function parseNWSAlerts(arr) {
    const out = [];
    const seen = {};
    (arr || []).forEach(function (payload) {
      if (!payload || !payload.features) return;
      payload.features.forEach(function (f) {
        const p = f.properties || {};
        if (!p.event || p.event.toLowerCase().indexOf('tsunami') < 0) return;
        const key = p.id || f.id;
        if (key && seen[key]) return;
        if (key) seen[key] = 1;
        const geom = f.geometry || p.geometry || null;
        const pos = centroidOfGeometry(geom);
        let level = '海啸信息';
        if (p.event.indexOf('Warning') >= 0) level = '海啸预警';
        else if (p.event.indexOf('Watch') >= 0) level = '海啸观察';
        else if (p.event.indexOf('Advisory') >= 0) level = '海啸提示';
        let severity = 50;
        if (p.event.indexOf('Warning') >= 0) severity = 100;
        else if (p.event.indexOf('Watch') >= 0) severity = 75;
        else if (p.event.indexOf('Advisory') >= 0) severity = 45;
        const t = p.sent ? new Date(p.sent).getTime() : (p.onset ? new Date(p.onset).getTime() : null);
        out.push({
          type: 'tsunami',
          id: 'nws-' + (key || (p.event + p.sent)),
          lat: pos ? pos.lat : null,
          lon: pos ? pos.lon : null,
          time: t,
          title: level,
          source: 'NOAA / NWS',
          sourceUrl: p['@id'] || 'https://www.tsunami.gov/',
          isDemo: false,
          color: '#8bb7d2',
          severity: severity,
          alertLevel: level,
          waveHeightM: null,
          areaText: p.areaDesc || '',
          meta: level
        });
      });
    });
    return out.filter(function (e) { return e.lat != null && e.lon != null; });
  }

  async function loadTsunami() {
    const st = HZ.data.status.nws;
    st.state = 'loading';
    const urls = TSUNAMI_EVENTS.map(function (ev) {
      return 'https://api.weather.gov/alerts/active?event=' + encodeURIComponent(ev);
    });
    let payloads = null;
    try {
      payloads = await Promise.all(urls.map(function (u) {
        return fetchJSON(u, { headers: { 'Accept': 'application/geo+json' } });
      }));
    } catch (err) {
      const cached = readCache('nws_tsunami');
      if (cached) {
        payloads = cached.data;
        st.state = 'cache'; st.cache = true; st.updated = cached.t; st.error = err.message || String(err);
      } else {
        st.state = 'error'; st.error = err.message || String(err); st.updated = null;
        HZ.data.raw.tsunami = [];
        st.count = 0;
        return [];
      }
    }
    try { writeCache('nws_tsunami', payloads); } catch (e) { /* ignore */ }
    if (st.state === 'loading') { st.state = 'live'; st.updated = Date.now(); st.cache = false; st.error = null; }
    const events = parseNWSAlerts(payloads);
    HZ.data.raw.tsunami = events;
    st.count = events.length;
    st.dataTime = events.reduce(function (m, e) { return Math.max(m, e.time || 0); }, 0);
    return events;
  }

  /* ---------------- demo data (explicitly labelled) ---------------- */
  function demoEvents() {
    const demos = [];
    demos.push({
      type: 'cyclone', id: 'demo-cyclone',
      lat: 16.8, lon: 130.5,
      time: null, title: '示例台风 · 演示轨迹（非真实事件）',
      source: '示例数据', sourceUrl: null, isDemo: true, color: '#6ecfbe', severity: 65,
      wind: null, windUnit: '',
      track: [
        { lat: 12.6, lon: 141.0, time: null, wind: null },
        { lat: 13.6, lon: 138.4, time: null, wind: null },
        { lat: 14.8, lon: 136.0, time: null, wind: null },
        { lat: 15.9, lon: 133.5, time: null, wind: null },
        { lat: 16.8, lon: 130.5, time: null, wind: null },
        { lat: 17.8, lon: 127.9, time: null, wind: null },
        { lat: 18.7, lon: 125.2, time: null, wind: null }
      ],
      meta: '示例 · 螺旋云系与预报锥演示'
    });
    demos.push({
      type: 'tsunami', id: 'demo-tsunami',
      lat: 38.3, lon: 142.4, time: null,
      title: '示例海啸 · 波前扩散演示（非真实预警）',
      source: '示例数据', sourceUrl: null, isDemo: true, color: '#8bb7d2', severity: 70,
      alertLevel: '示例等级（非官方预警）', waveHeightM: 3.0,
      meta: '示例 · 波高 3.0 米（演示参数）'
    });
    demos.push({
      type: 'landslide', id: 'demo-landslide-1',
      lat: 30.7, lon: 103.4, time: null,
      title: '示例滑坡 · 扇形影响区演示（非真实事件）',
      source: '示例数据', sourceUrl: null, isDemo: true, color: '#d99a62', severity: 62,
      areaR: 1.8, meta: '示例 · 扇形影响区（范围示意）'
    });
    demos.push({
      type: 'landslide', id: 'demo-landslide-2',
      lat: -13.2, lon: -72.4, time: null,
      title: '示例滑坡 · 扇形影响区演示（非真实事件）',
      source: '示例数据', sourceUrl: null, isDemo: true, color: '#d99a62', severity: 48,
      areaR: 1.4, meta: '示例 · 扇形影响区（范围示意）'
    });
    demos.push({
      type: 'volcano', id: 'demo-volcano-1',
      lat: 31.58, lon: 130.65, time: null,
      title: '示例火山 · 喷发羽流演示（非真实事件）',
      source: '示例数据', sourceUrl: null, isDemo: true, color: '#d46d79', severity: 60,
      meta: '示例 · 羽流形态演示'
    });
    demos.push({
      type: 'volcano', id: 'demo-volcano-2',
      lat: 37.75, lon: 14.99, time: null,
      title: '示例火山 · 喷发羽流演示（非真实事件）',
      source: '示例数据', sourceUrl: null, isDemo: true, color: '#d46d79', severity: 55,
      meta: '示例 · 羽流形态演示'
    });
    demos.push({
      type: 'flood', id: 'demo-flood',
      lat: 23.4, lon: 90.3, time: null,
      title: '示例洪水 · 洪泛区演示（非真实事件）',
      source: '示例数据', sourceUrl: null, isDemo: true, color: '#6fa9d6', severity: 58,
      areaR: 2.2, meta: '示例 · 洪泛区着色（范围示意）'
    });
    return demos;
  }

  HZ.demoEvents = demoEvents();

  /* ---------------- build unified event list ---------------- */
  HZ.rebuildEvents = function (opts) {
    opts = opts || {};
    const hours = opts.hours || 24;
    const anchor = HZ.data.referenceNow || Date.now();
    const cutoff = anchor - hours * 3600000;
    const out = [];
    const counts = {};

    // earthquakes: feed already bound to the window; still enforce cutoff
    HZ.data.raw.earthquakes.forEach(function (e) {
      if (e.time && e.time < cutoff) return;
      out.push(e);
      counts.earthquake = (counts.earthquake || 0) + 1;
    });

    // EONET
    HZ.data.raw.eonet.forEach(function (e) {
      if (e.time && e.time < cutoff) return;
      out.push(e);
      counts[e.type] = (counts[e.type] || 0) + 1;
    });

    // Tsunami
    HZ.data.raw.tsunami.forEach(function (e) {
      if (e.time && e.time < cutoff) return;
      out.push(e);
      counts.tsunami = (counts.tsunami || 0) + 1;
    });

    // demo fill-in only when a hazard has zero real events in the window
    if (opts.showDemo !== false) {
      HZ.demoEvents.forEach(function (e) {
        if ((counts[e.type] || 0) === 0) {
          out.push(e);
          counts[e.type + '_demo'] = (counts[e.type + '_demo'] || 0) + 1;
        }
      });
    }

    HZ.data.events = out;
    HZ.data.counts = counts;
    HZ.data.lastBuild = Date.now();
    return out;
  };

  /* ---------------- orchestration ---------------- */
  let loadingPromise = null;
  HZ.loadAll = function (hours) {
    HZ.data.status.usgs.state = 'loading';
    HZ.data.status.eonet.state = 'loading';
    HZ.data.status.nws.state = 'loading';
    loadingPromise = Promise.allSettled([loadUSGS(hours), loadEONET(), loadTsunami()]).then(function () {
      const st = HZ.data.status;
      const anyLive = st.usgs.state === 'live' || st.eonet.state === 'live' || st.nws.state === 'live';
      const anyCache = st.usgs.state === 'cache' || st.eonet.state === 'cache' || st.nws.state === 'cache';
      const allFailed = st.usgs.state === 'error' && st.eonet.state === 'error' && st.nws.state === 'error';
      HZ.data.offline = allFailed;
      HZ.data.anyLive = anyLive;
      HZ.data.anyCache = anyCache;
      const times = [st.usgs.dataTime, st.eonet.dataTime, st.nws.dataTime].filter(function (x) { return x > 0; });
      const latest = times.length ? Math.max.apply(null, times) : Date.now();
      HZ.data.referenceNow = Math.min(Date.now(), latest);
      HZ.data.clockLagHours = Math.max(0, (Date.now() - HZ.data.referenceNow) / 3600000);
      HZ.data.lastLoadedStamp = Date.now();
      if (HZ.onDataLoaded) HZ.onDataLoaded();
      window.dispatchEvent(new CustomEvent('hz:data', { detail: HZ.data }));
      return HZ.data;
    });
    return loadingPromise;
  };
  HZ.loadAll(24);

  HZ.HAZARD_META = HAZARD_META;
})();
