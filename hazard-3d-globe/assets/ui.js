/* =========================================================
   UI：图层、过滤、事件列表、时间窗/回放、提示、数据源说明
   ========================================================= */
(function () {
  'use strict';
  const HZ = window.HZ;
  if (!HZ || !HZ.THREE) return;

  const state = HZ.state = {
    hours: 24,
    layers: { earthquake: true, cyclone: true, tsunami: true, landslide: true, volcano: true, flood: true, wildfire: false },
    minMag: 2.0,
    minSev: 0,
    showDemo: true,
    night: true,
    playhead: 1,
    playing: false,
    selected: null,
    cutoffMs: 1e15,
    autoRefresh: true,
    mode: 'live',
    historyYear: 2026,
    historyPlaying: false,
    autoWildfire: false
  };

  const $ = function (s) { return document.querySelector(s); };
  const $$ = function (s) { return Array.prototype.slice.call(document.querySelectorAll(s)); };
  const meta = HZ.HAZARD_META;

  /* ---------------- 中文格式化辅助 ---------------- */
  const DIR_ZH = {
    N: '北', S: '南', E: '东', W: '西',
    NE: '东北', NW: '西北', SE: '东南', SW: '西南',
    NNE: '北偏东', ENE: '东偏北', ESE: '东偏南', SSE: '南偏东',
    SSW: '南偏西', WSW: '西偏南', WNW: '西偏北', NNW: '北偏西'
  };
  // 地名汉化：常见国家 / 地区 / 海域 / 城市；生僻地名作为专有名词保留原文
  const PLACE_ZH = {
    'Alaska': '阿拉斯加', 'California': '加利福尼亚', 'Hawaii': '夏威夷', 'Oregon': '俄勒冈',
    'Washington': '华盛顿州', 'Nevada': '内华达', 'Oklahoma': '俄克拉何马', 'Texas': '得克萨斯',
    'Montana': '蒙大拿', 'Idaho': '爱达荷', 'Utah': '犹他', 'Wyoming': '怀俄明',
    'Puerto Rico': '波多黎各', 'Philippines': '菲律宾', 'Indonesia': '印度尼西亚', 'Japan': '日本',
    'Taiwan': '中国台湾', 'China': '中国', 'Greece': '希腊', 'Turkey': '土耳其', 'Iran': '伊朗',
    'Chile': '智利', 'Argentina': '阿根廷', 'Peru': '秘鲁', 'Ecuador': '厄瓜多尔',
    'Colombia': '哥伦比亚', 'Venezuela': '委内瑞拉', 'Mexico': '墨西哥', 'Costa Rica': '哥斯达黎加',
    'Guatemala': '危地马拉', 'Nicaragua': '尼加拉瓜', 'El Salvador': '萨尔瓦多', 'Panama': '巴拿马',
    'Haiti': '海地', 'Dominican Republic': '多米尼加', 'Cuba': '古巴', 'Jamaica': '牙买加',
    'Russia': '俄罗斯', 'Kuril Islands': '千岛群岛', 'Kamchatka': '堪察加', 'New Zealand': '新西兰',
    'Tonga': '汤加', 'Fiji': '斐济', 'Samoa': '萨摩亚', 'Vanuatu': '瓦努阿图',
    'New Caledonia': '新喀里多尼亚', 'Papua New Guinea': '巴布亚新几内亚', 'Solomon Islands': '所罗门群岛',
    'Australia': '澳大利亚', 'India': '印度', 'Nepal': '尼泊尔', 'Pakistan': '巴基斯坦',
    'Afghanistan': '阿富汗', 'Tajikistan': '塔吉克斯坦', 'Kyrgyzstan': '吉尔吉斯斯坦',
    'Kazakhstan': '哈萨克斯坦', 'Mongolia': '蒙古', 'Myanmar': '缅甸', 'Vietnam': '越南',
    'Thailand': '泰国', 'Malaysia': '马来西亚', 'Iceland': '冰岛', 'Norway': '挪威',
    'Italy': '意大利', 'Spain': '西班牙', 'Portugal': '葡萄牙', 'Morocco': '摩洛哥',
    'Algeria': '阿尔及利亚', 'Ethiopia': '埃塞俄比亚', 'Kenya': '肯尼亚', 'Tanzania': '坦桑尼亚',
    'South Africa': '南非', 'Libya': '利比亚', 'Egypt': '埃及', 'Croatia': '克罗地亚',
    'Serbia': '塞尔维亚', 'Bulgaria': '保加利亚', 'Romania': '罗马尼亚', 'Hungary': '匈牙利',
    'Poland': '波兰', 'Germany': '德国', 'France': '法国', 'Ireland': '爱尔兰',
    'Netherlands': '荷兰', 'Belgium': '比利时', 'Switzerland': '瑞士', 'Austria': '奥地利',
    'Czechia': '捷克', 'Slovakia': '斯洛伐克', 'Albania': '阿尔巴尼亚', 'North Macedonia': '北马其顿',
    'Georgia': '格鲁吉亚', 'Armenia': '亚美尼亚', 'Azerbaijan': '阿塞拜疆', 'Ukraine': '乌克兰',
    'Pacific Ocean': '太平洋', 'Atlantic Ocean': '大西洋', 'Indian Ocean': '印度洋', 'Arctic Ocean': '北冰洋',
    'Mediterranean Sea': '地中海', 'Caribbean Sea': '加勒比海', 'Bering Sea': '白令海',
    'Sea of Japan': '日本海', 'South China Sea': '南海', 'East China Sea': '东海', 'Coral Sea': '珊瑚海',
    'Tasman Sea': '塔斯曼海', 'Andaman Sea': '安达曼海', 'Arabian Sea': '阿拉伯海',
    'Gulf of Mexico': '墨西哥湾', 'Gulf of Alaska': '阿拉斯加湾', 'Bay of Bengal': '孟加拉湾',
    'Banda Sea': '班达海', 'Celebes Sea': '苏拉威西海', 'Molucca Sea': '马鲁古海',
    'Philippine Sea': '菲律宾海', 'Aegean Sea': '爱琴海', 'Ionian Sea': '爱奥尼亚海',
    'Tyrrhenian Sea': '第勒尼安海', 'Adriatic Sea': '亚得里亚海', 'Black Sea': '黑海',
    'Caspian Sea': '里海', 'Red Sea': '红海', 'Scotia Sea': '斯科舍海', 'Drake Passage': '德雷克海峡',
    'Aleutian': '阿留申群岛', 'Aleutian Islands': '阿留申群岛', 'Andreanof Islands': '安德烈亚诺夫群岛',
    'Rat Islands': '拉特群岛', 'Kodiak': '科迪亚克', 'Anchorage': '安克雷奇', 'Carlsbad': '卡尔斯巴德',
    'Ridgecrest': '里奇克莱斯特', 'Kaktovik': '卡克托维克', 'Pahala': '帕哈拉', 'Pāhala': '帕哈拉',
    'Hilo': '希洛', 'Kilauea': '基拉韦厄', 'Mauna Loa': '冒纳罗亚', 'Loihi': '罗伊希',
    'San Francisco': '旧金山', 'Los Angeles': '洛杉矶', 'Seattle': '西雅图', 'Portland': '波特兰',
    'Salt Lake City': '盐湖城', 'Reno': '里诺', 'Las Vegas': '拉斯维加斯', 'Oklahoma City': '俄克拉何马城',
    'Sarangani': '萨兰加尼', 'Mindanao': '棉兰老岛', 'Luzon': '吕宋岛', 'Visayas': '米沙鄢',
    'Halmahera': '哈马黑拉', 'Sulawesi': '苏拉威西', 'Sumatra': '苏门答腊', 'Java': '爪哇',
    'Bali': '巴厘', 'Lombok': '龙目', 'Banda Islands': '班达群岛', 'Ternate': '特尔纳特',
    'Ambrym': '安布里姆', 'Efate': '埃法特', 'Espiritu Santo': '圣埃斯皮里图', 'New Britain': '新不列颠',
    'Bougainville': '布干维尔', 'Guadalcanal': '瓜达尔卡纳尔', 'Honiara': '霍尼亚拉', 'Port Vila': '维拉港',
    'Suva': '苏瓦', 'Nuku\'alofa': '努库阿洛法', 'Apia': '阿皮亚', 'Christchurch': '基督城',
    'Wellington': '惠灵顿', 'Auckland': '奥克兰', 'Tokyo': '东京', 'Osaka': '大阪', 'Kyoto': '京都',
    'Sapporo': '札幌', 'Sendai': '仙台', 'Fukushima': '福岛', 'Iwate': '岩手', 'Miyagi': '宫城',
    'Ibaraki': '茨城', 'Chiba': '千叶', 'Hokkaido': '北海道', 'Honshu': '本州', 'Kyushu': '九州',
    'Shikoku': '四国', 'Okinawa': '冲绳', 'Taipei': '台北', 'Hualien': '花莲', 'Tainan': '台南',
    'Kaohsiung': '高雄', 'Sichuan': '四川', 'Wenchuan': '汶川', 'Tangshan': '唐山', 'Huaxian': '华县',
    'Tancheng': '郯城', 'Hongdong': '洪洞', 'Haiyuan': '海原', 'Yunnan': '云南', 'Tibet': '西藏',
    'Xinjiang': '新疆', 'Gansu': '甘肃', 'Qinghai': '青海', 'Shanxi': '山西', 'Shaanxi': '陕西',
    'Hebei': '河北', 'Henan': '河南', 'Anhui': '安徽', 'Shandong': '山东', 'Jiangsu': '江苏',
    'Zhejiang': '浙江', 'Fujian': '福建', 'Guangdong': '广东', 'Guangxi': '广西', 'Hubei': '湖北',
    'Hunan': '湖南', 'Jiangxi': '江西', 'Guizhou': '贵州', 'Liaoning': '辽宁', 'Jilin': '吉林',
    'Heilongjiang': '黑龙江', 'Inner Mongolia': '内蒙古', 'Beijing': '北京', 'Tianjin': '天津',
    'Shanghai': '上海', 'Chengdu': '成都', 'Chongqing': '重庆', 'Wuhan': '武汉', 'Nanjing': '南京',
    'Hangzhou': '杭州', 'Xiamen': '厦门', 'Hong Kong': '香港', 'Macau': '澳门',
    'Kashmir': '克什米尔', 'Kathmandu': '加德满都', 'Pokhara': '博卡拉', 'Assam': '阿萨姆',
    'Hindu Kush': '兴都库什', 'Pamir': '帕米尔', 'Tianshan': '天山', 'Alps': '阿尔卑斯',
    'Apennines': '亚平宁', 'Etna': '埃特纳', 'Vesuvius': '维苏威', 'Stromboli': '斯特龙博利',
    'Santorini': '圣托里尼', 'Nisyros': '尼西罗斯', 'Kos': '科斯', 'Rhodes': '罗得岛',
    'Crete': '克里特', 'Corinth': '科林斯', 'Sparta': '斯巴达', 'Athens': '雅典',
    'Thessaloniki': '塞萨洛尼基', 'Antalya': '安塔利亚', 'Istanbul': '伊斯坦布尔', 'Izmit': '伊兹米特',
    'Duzce': '迪兹杰', 'Erzincan': '埃尔津詹', 'Kahramanmaras': '卡赫拉曼马拉什', 'Gaziantep': '加济安泰普',
    'Hatay': '哈塔伊', 'Antioch': '安条克', 'Aleppo': '阿勒颇', 'Damascus': '大马士革', 'Hama': '哈马',
    'Tabriz': '大不里士', 'Tehran': '德黑兰', 'Damghan': '达姆甘', 'Bam': '巴姆', 'Kerman': '克尔曼',
    'Shiraz': '设拉子', 'Isfahan': '伊斯法罕',
    // 常见小地名（USGS 实时目录中高频出现）
    'Beaumont': '博蒙特', 'Guayanilla': '瓜亚尼亚', 'Big Bear City': '大熊城', 'Fall City': '福尔城',
    'The Geysers': '盖瑟斯地热区', 'Acme': '阿克米', 'Midland': '米德兰', 'Maria Antonia': '玛丽亚安东尼娅',
    'Salton City': '索尔顿城', 'Cobb': '科布', 'Palekastro': '帕莱卡斯特罗', 'Sand Point': '桑德波因特',
    'Stanton': '斯坦顿', 'Suisun City': '苏伊孙城', 'Cabazon': '卡巴松', 'Nikolski': '尼科尔斯基',
    'Cloverdale': '克洛弗代尔', 'Anza': '安扎', 'Pearsall': '皮尔索尔', 'Milford': '米尔福德',
    'Kettleman City': '凯特尔曼城', 'Ferry': '费里', 'Adak': '阿达克', 'Orangeville': '奥兰治维尔',
    'Johannesburg': '约翰内斯堡', 'Silver Springs': '银泉', 'Toms Place': '汤姆斯普莱斯',
    'Placentia': '普拉森提亚', 'Mirrormont': '米勒蒙特', 'Anderson Springs': '安德森斯普林斯',
    'Entiat': '恩蒂亚特', 'Danville': '丹维尔', 'Indios': '因迪奥斯', 'Skwentna': '斯克温特纳',
    'Captain Cook': '库克船长镇', 'La Quinta': '拉金塔', 'Searles Valley': '瑟尔斯谷',
    'Borrego Springs': '博雷戈斯普林斯', 'Amorgós': '阿莫尔戈斯', 'Salamatof': '萨拉马托夫',
    'Schurz': '舒尔茨', 'Levuka': '莱武卡', 'Beluga': '贝卢加', 'Meno': '梅诺', 'Amboy': '安博伊',
    'Nanwalek': '南瓦莱克', 'Anchor Point': '安克波因特', 'Yilan': '宜兰', 'Four Mile Road': '四英里路',
    'Susitna North': '苏西特纳北', 'Nelchina': '内尔奇纳', 'Samaná': '萨马纳', 'South Van Horn': '南范霍恩',
    'Toyah': '托亚', 'Yorba Linda': '约巴林达', 'Boron': '博伦', 'Redlands': '雷德兰兹',
    'Guánica': '瓜尼卡', 'Pedro Bay': '佩德罗贝', 'Cantwell': '坎特韦尔', 'Aleneva': '阿莱内瓦',
    'Chenega': '切尼加', 'Ollagüe': '奥亚圭', 'Zahedan': '扎黑丹', 'Beaver': '比弗', 'San Ardo': '圣阿多',
    'Ouzinkie': '乌津基', 'Tyonek': '泰奥内克', 'Denali National Park': '德纳里国家公园',
    'Port Alsworth': '阿尔斯沃思港', 'Alcan Border': '阿尔坎边界', 'Esterhazy': '埃斯特哈齐',
    'Point Possession': '波森申角', 'Volcano': '沃卡诺', 'Xinyuan': '新源', 'Ninilchik': '尼尼尔奇克',
    'Karluk': '卡卢克', 'Gorontalo': '哥伦打洛', 'McCarthy': '麦卡锡', 'Ivanof Bay': '伊万诺夫湾',
    'Manley Hot Springs': '曼利温泉', 'Kyzyl-Eshme': '克孜勒-埃什梅', 'Bonin Islands': '小笠原群岛',
    'Volcano Islands': '火山列岛', 'Mid-Indian Ridge': '中印度洋海岭', 'Fiji Islands': '斐济群岛',
    'South Sandwich Islands': '南桑威奇群岛', 'Delta': '德尔塔', 'B.C.': '不列颠哥伦比亚省',
    'MX': '墨西哥', 'Canada': '加拿大', 'region': '区域', 'Chase': '蔡斯', 'San Antonio': '圣安东尼奥',
    'Japan region': '日本近海', 'Fiji region': '斐济近海', 'South Sandwich Islands region': '南桑威奇群岛近海',
    'CA': '加利福尼亚', 'AK': '阿拉斯加', 'HI': '夏威夷', 'NV': '内华达', 'OK': '俄克拉何马',
    'TX': '得克萨斯', 'MT': '蒙大拿', 'ID': '爱达荷', 'UT': '犹他', 'WY': '怀俄明',
    'WA': '华盛顿州', 'OR': '俄勒冈', 'PR': '波多黎各', 'NM': '新墨西哥', 'AZ': '亚利桑那',
    'CO': '科罗拉多', 'KS': '堪萨斯', 'MO': '密苏里', 'AR': '阿肯色', 'TN': '田纳西',
    'NC': '北卡罗来纳', 'SC': '南卡罗来纳', 'VA': '弗吉尼亚', 'WV': '西弗吉尼亚', 'PA': '宾夕法尼亚',
    'NY': '纽约州', 'ME': '缅因', 'MA': '马萨诸塞', 'CT': '康涅狄格', 'NJ': '新泽西',
    'MD': '马里兰', 'DE': '特拉华', 'RI': '罗得岛州', 'VT': '佛蒙特', 'NH': '新罕布什尔',
    'MI': '密歇根', 'MN': '明尼苏达', 'WI': '威斯康星', 'IA': '艾奥瓦', 'IL': '伊利诺伊',
    'IN': '印第安纳', 'OH': '俄亥俄', 'ND': '北达科他', 'SD': '南达科他', 'NE': '内布拉斯加',
    'MS': '密西西比', 'AL': '亚拉巴马', 'GA': '佐治亚', 'FL': '佛罗里达', 'LA': '路易斯安那',
    'KY': '肯塔基'
  };
  const PLACE_MAP = {};
  Object.keys(PLACE_ZH).forEach(function (k) { PLACE_MAP[k.toLowerCase()] = PLACE_ZH[k]; });
  const PLACE_KEYS = Object.keys(PLACE_ZH).sort(function (a, b) { return b.length - a.length; });
  const PLACE_RE = new RegExp('\\b(' + PLACE_KEYS.map(function (k) {
    return k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }).join('|') + ')\\b', 'gi');

  function translatePlaceText(txt) {
    return String(txt).split(',').map(function (seg) {
      const raw = seg.trim();
      if (!raw) return raw;
      const whole = PLACE_MAP[raw.toLowerCase()];
      if (whole) return whole;
      const replaced = raw.replace(PLACE_RE, function (m0) { return PLACE_MAP[m0.toLowerCase()] || m0; });
      return replaced;
    }).join(' · ');
  }

  // 把 "12 km NE of Somewhere" 这类英文方位改写成中文；地名作为专有名词保留
  function placeZh(place) {
    const s = String(place == null ? '' : place).trim();
    const m = s.match(/^(\d+(?:\.\d+)?)\s*km\s+([NSEW]{1,3})\s+of\s+(.+)$/i);
    if (m) {
      const dir = DIR_ZH[m[2].toUpperCase()] || m[2].toUpperCase();
      const parts = m[3].split(',').map(function (x) { return x.trim(); }).filter(Boolean);
      let name = translatePlaceText(parts[0] || '');
      if (parts.length > 1) {
        name += '（' + parts.slice(1).map(function (x) { return translatePlaceText(x); }).join('，') + '）';
      }
      return name + ' ' + dir + '方向 ' + Number(m[1]) + ' 千米';
    }
    let out = s
      .replace(/^Off the coast of\s+(.+)$/i, '$1 近海')
      .replace(/\bof\s+the\s+/gi, 'of ')
      .replace(/^South of\s+(.+)$/i, '$1 以南')
      .replace(/^North of\s+(.+)$/i, '$1 以北')
      .replace(/^East of\s+(.+)$/i, '$1 以东')
      .replace(/^West of\s+(.+)$/i, '$1 以西')
      .replace(/\bnear\b/gi, '附近');
    out = translatePlaceText(out);
    return out;
  }

  const TITLE_WORDS = [
    ['Severe Tropical Storm', '强热带风暴'], ['Super Typhoon', '超强台风'],
    ['Super Cyclone', '超强气旋'], ['Tropical Storm', '热带风暴'], ['Tropical Depression', '热带低压'],
    ['Severe Storm', '强风暴'], ['Hurricane', '飓风'], ['Typhoon', '台风'],
    ['Cyclone', '气旋'], ['Wildfire', '野火'], ['Volcano', '火山活动'],
    ['Flood', '洪水'], ['Landslide', '滑坡']
  ];
  function eventTitleZh(e) {
    if (e.type === 'earthquake') return 'M ' + e.mag.toFixed(1) + ' · ' + placeZh(e.place || e.title);
    if (e.type === 'tsunami') return e.alertLevel || '海啸信息';
    let t = String(e.title || meta[e.type].label).trim();
    TITLE_WORDS.forEach(function (p) {
      const re = new RegExp('^' + p[0] + 's?\\s*[-–:·]?\\s*', 'i');
      if (re.test(t)) t = p[1] + ' · ' + t.replace(re, '');
    });
    return t || meta[e.type].label;
  }

  function sourceTag(e) {
    if (e.isDemo) return '示例';
    const s = String(e.source || '');
    if (s.indexOf('USGS') === 0) return 'USGS 地震';
    if (s.indexOf('NASA EONET') === 0) return 'EONET 事件';
    if (s.indexOf('NOAA') === 0) return 'NWS 预警';
    return '公开数据';
  }

  function latLonZh(lat, lon) {
    const la = Math.abs(lat).toFixed(2) + '°' + (lat >= 0 ? '北纬' : '南纬');
    const lo = Math.abs(lon).toFixed(2) + '°' + (lon >= 0 ? '东经' : '西经');
    return la + ' · ' + lo;
  }

  function skeletonHtml() {
    let s = '<div class="skeleton-list" aria-hidden="true">';
    for (let i = 0; i < 4; i++) {
      s += '<div class="sk-row"><span class="sk-dot"></span><span class="sk-lines"><i></i><i></i></span></div>';
    }
    return s + '</div>';
  }

  function iconSvg(type) {
    const A = 'fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"';
    if (type === 'earthquake') return '<svg viewBox="0 0 24 24" ' + A + '><path d="M2 12h4l2.4-5 3.2 10 2.6-7 1.8 2h6"/></svg>';
    if (type === 'cyclone') return '<svg viewBox="0 0 24 24" ' + A + '><path d="M12 12c-3-4-1-8 4-8 5 0 7 4 4 8-2.6 3.4-7.4 3.4-10 0"/><path d="M12 12c3 4 1 8-4 8-5 0-7-4-4-8"/></svg>';
    if (type === 'tsunami') return '<svg viewBox="0 0 24 24" ' + A + '><path d="M2 15c3-7 6 7 9 0s6 7 9 0"/><path d="M2 19c3-4 6 4 9 0s6 4 9 0"/></svg>';
    if (type === 'landslide') return '<svg viewBox="0 0 24 24" ' + A + '><path d="M3 19l7-11 5 8 3-4 3 7"/><path d="M8 9l2 3m4 3l2 2"/></svg>';
    if (type === 'volcano') return '<svg viewBox="0 0 24 24" ' + A + '><path d="M4 19l5-8h6l5 8"/><path d="M12 9V5m-2 2l2-3 2 3"/><path d="M9 4c1-1 2-1 3 0"/></svg>';
    if (type === 'flood') return '<svg viewBox="0 0 24 24" ' + A + '><path d="M3 13c2-4 5 4 7 0s5 4 8 0"/><path d="M3 18c2-4 5 4 7 0s5 4 8 0"/><path d="M7 9c1-3 4-4 6-2"/></svg>';
    if (type === 'wildfire') return '<svg viewBox="0 0 24 24" ' + A + '><path d="M12 21c4 0 6-2.5 6-6 0-4-4-5-3-9 0 3-2 4-2 7 0 2-1 4-1 8z"/><path d="M12 21c-2 0-3.5-1.4-3.5-3.5 0-2 2-3 1.5-4.5 1.5 2 3.5 3 3.5 5.5"/></svg>';
    return '<svg viewBox="0 0 24 24" ' + A + '><circle cx="12" cy="12" r="8"/></svg>';
  }

  /* ---------------- layer panel ---------------- */
  const layerList = $('#layerList');
  function buildLayerRows() {
    layerList.innerHTML = '';
    Object.keys(meta).forEach(function (type) {
      const m = meta[type];
      const row = document.createElement('div');
      row.className = 'layer-row' + (state.layers[type] ? '' : ' off');
      row.setAttribute('data-layer', type);
      row.style.setProperty('--c', m.color);
      row.innerHTML =
        '<span class="ico">' + iconSvg(type) + '</span>' +
        '<span class="layer-name">' + m.label + '<small>' + m.source + '</small></span>' +
        '<span class="layer-count" data-count="' + type + '">0</span>' +
        '<span class="layer-badge none" data-badge="' + type + '">--</span>' +
        '<span class="switch"></span>';
      row.addEventListener('click', function () {
        state.layers[type] = !state.layers[type];
        row.classList.toggle('off', !state.layers[type]);
        HZ.updateLayerVisibility(state.layers);
        updateCounts();
        toast((state.layers[type] ? '已显示 ' : '已隐藏 ') + m.label);
      });
      layerList.appendChild(row);
    });
  }

  function syncLayerRows() {
    $$('#layerList .layer-row').forEach(function (row) {
      row.classList.toggle('off', state.layers[row.getAttribute('data-layer')] === false);
    });
  }

  function updateCounts() {
    const hud = HZ.hud || {};
    const events = HZ.data.events || [];
    if (state.mode === 'history') {
      const vis = (HZ.historyEvents || []).filter(function (e) {
        if (e.year > state.historyYear + 0.01) return false;
        if (e.type === 'earthquake') return e.mag != null && e.mag >= state.minMag;
        return e.severity != null && e.severity >= state.minSev;
      });
      Object.keys(meta).forEach(function (type) {
        const cntEl = layerList.querySelector('[data-count="' + type + '"]');
        const badgeEl = layerList.querySelector('[data-badge="' + type + '"]');
        if (!cntEl) return;
        const n = vis.filter(function (e) { return e.type === type; }).length;
        cntEl.textContent = n;
        cntEl.title = '历史摘编 ' + n + ' 条（截至 ' + HZ.yearText(state.historyYear) + '）';
        if (n > 0) {
          badgeEl.textContent = '历史';
          badgeEl.className = 'layer-badge hist';
        } else {
          badgeEl.textContent = '0';
          badgeEl.className = 'layer-badge none';
        }
      });
      return;
    }
    Object.keys(meta).forEach(function (type) {
      const real = events.filter(function (e) { return e.type === type && !e.isDemo; }).length;
      const demo = events.filter(function (e) { return e.type === type && e.isDemo; }).length;
      const cntEl = layerList.querySelector('[data-count="' + type + '"]');
      const badgeEl = layerList.querySelector('[data-badge="' + type + '"]');
      if (!cntEl) return;
      let shown = real + demo;
      if (type === 'earthquake' && hud.eq != null) shown = hud.eq;
      cntEl.textContent = shown;
      if (type === 'earthquake' && hud.eqCapped) cntEl.title = '已渲染 ' + hud.eq + ' / 共 ' + hud.eqTotal + ' 条（按震级截取）';
      if (real > 0) {
        badgeEl.textContent = '实时';
        badgeEl.className = 'layer-badge';
      } else if (demo > 0) {
        badgeEl.textContent = '示例';
        badgeEl.className = 'layer-badge demo';
      } else {
        badgeEl.textContent = '0';
        badgeEl.className = 'layer-badge none';
      }
    });
  }

  /* ---------------- filters ---------------- */
  const magRange = $('#magRange');
  const magVal = $('#magVal');
  const sevRange = $('#sevRange');
  const sevVal = $('#sevVal');

  function paintRange(el) {
    const min = Number(el.min), max = Number(el.max);
    const p = ((Number(el.value) - min) / (max - min)) * 100;
    el.style.setProperty('--p', p + '%');
  }
  magRange.addEventListener('input', function () {
    state.minMag = Number(magRange.value);
    magVal.textContent = 'M ' + state.minMag.toFixed(1);
    paintRange(magRange);
    scheduleRebuild();
  });
  sevRange.addEventListener('input', function () {
    state.minSev = Number(sevRange.value);
    sevVal.textContent = state.minSev + '%';
    paintRange(sevRange);
    scheduleRebuild();
  });
  paintRange(magRange); paintRange(sevRange);

  $('#nightToggle').addEventListener('click', function () {
    state.night = !state.night;
    this.classList.toggle('on', state.night);
    // day/night texture uniform lives in core.js via earth material
    if (HZ.earth && HZ.earth.material && HZ.earth.material.uniforms) {
      HZ.earth.material.uniforms.uNightMix.value = state.night ? 1 : 0;
    }
    toast(state.night ? '夜间灯光已开启' : '夜间灯光已关闭');
  });
  $('#demoToggle').addEventListener('click', function () {
    state.showDemo = !state.showDemo;
    this.classList.toggle('on', state.showDemo);
    scheduleRebuild();
    toast(state.showDemo ? '示例数据图层已显示' : '示例数据图层已隐藏');
  });

  /* ---------------- event list ---------------- */
  const listEl = $('#eventList');
  const eventCountEl = $('#eventCount');
  let currentList = [];

  function filteredEvents() {
    return (HZ.data.events || []).filter(function (e) {
      if (e.isDemo && !state.showDemo) return false;
      if (e.type === 'earthquake') {
        if (e.mag < state.minMag) return false;
      } else if (e.severity < state.minSev) return false;
      if (state.cutoffMs < 1e14 && e.time && e.time > state.cutoffMs) return false;
      return true;
    });
  }

  function eventMetaText(e) {
    if (e.type === 'earthquake') {
      return 'M ' + e.mag.toFixed(1) + ' · 深度 ' + (e.depth != null ? e.depth.toFixed(0) + ' 千米' : '未提供') + ' · ' + HZ.relativeTime(e.time);
    }
    if (e.type === 'cyclone') {
      return (e.wind != null ? '风速 ' + e.wind + ' ' + HZ.windUnitZh(e.windUnit) + ' · ' : '') + (e.isDemo ? '演示轨迹' : HZ.relativeTime(e.time));
    }
    if (e.type === 'tsunami') {
      return (e.alertLevel || '海啸信息') + ' · ' + (e.waveHeightM != null ? '波高 ' + e.waveHeightM + ' 米' : '波高未提供') + (e.isDemo ? '' : ' · ' + HZ.relativeTime(e.time));
    }
    return meta[e.type].label + ' · ' + (e.isDemo ? '示例' : HZ.relativeTime(e.time));
  }

  function renderList() {
    if (state.mode === 'history') { renderHistoryList(); return; }
    const all = filteredEvents();
    const sorted = all.slice().sort(function (a, b) {
      const ad = a.isDemo ? 1 : 0, bd = b.isDemo ? 1 : 0;
      if (ad !== bd) return ad - bd;
      return (b.time || 0) - (a.time || 0) || (b.severity || 0) - (a.severity || 0);
    });
    currentList = sorted.slice(0, 180);
    eventCountEl.textContent = all.length + ' 条' + (all.length > 180 ? ' · 显示前 180' : '');
    listEl.innerHTML = '';
    if (!currentList.length) {
      listEl.innerHTML = '<div class="empty">当前时间窗/过滤条件下没有事件。<br/>可尝试扩大时间窗或降低过滤阈值。</div>';
      return;
    }
    const frag = document.createDocumentFragment();
    currentList.forEach(function (e) {
      const div = document.createElement('div');
      div.className = 'event' + (state.selected && state.selected.id === e.id ? ' sel' : '');
      div.style.setProperty('--c', e.color || meta[e.type].color);
      const title = eventTitleZh(e);
      div.innerHTML =
        '<span class="dot"></span>' +
        '<span class="main"><span class="t">' + escapeHtml(title) + '</span>' +
        '<span class="m">' + escapeHtml(eventMetaText(e)) + '</span></span>' +
        '<span class="tag' + (e.isDemo ? ' demo' : '') + '">' + escapeHtml(sourceTag(e)) + '</span>';
      div.addEventListener('click', function () { selectEvent(e, true); });
      frag.appendChild(div);
    });
    listEl.appendChild(frag);
  }

  /* ---------------- history list ---------------- */
  const HIST_TYPE = {
    earthquake: '地震', cyclone: '台风 / 飓风', tsunami: '海啸', landslide: '滑坡 / 泥石流',
    volcano: '火山', flood: '洪水', wildfire: '野火'
  };

  function historyFiltered() {
    return (HZ.historyEvents || []).filter(function (e) {
      if (state.layers[e.type] === false) return false;
      if (e.type === 'earthquake') {
        if (e.mag == null || e.mag < state.minMag) return false;
      } else if (e.severity != null && e.severity < state.minSev) {
        return false;
      }
      if (e.year > state.historyYear + 0.01) return false;
      return true;
    });
  }

  function renderHistoryList() {
    const all = historyFiltered();
    const sorted = all.slice().sort(function (a, b) { return b.year - a.year; });
    currentList = sorted.slice(0, 180);
    eventCountEl.textContent = all.length + ' 条';
    listEl.innerHTML = '';
    if (!currentList.length) {
      listEl.innerHTML = '<div class="empty">该年代与过滤条件下没有摘编事件。<br/>可向右拖动时间轴或降低过滤阈值。</div>';
      return;
    }
    const frag = document.createDocumentFragment();
    currentList.forEach(function (e) {
      const div = document.createElement('div');
      div.className = 'event' + (state.selected && state.selected.id === e.id ? ' sel' : '');
      div.setAttribute('data-id', e.id);
      div.style.setProperty('--c', e.color || meta[e.type].color);
      div.innerHTML =
        '<span class="dot"></span>' +
        '<span class="main"><span class="t">' + escapeHtml(e.title) + '</span>' +
        '<span class="m">' + escapeHtml(e.yearLabel + ' · ' + (HIST_TYPE[e.type] || meta[e.type].label) +
          ' · 坐标' + e.precisionShort) + '</span></span>' +
        '<span class="tag hist">历史</span>';
      div.title = e.source;
      div.addEventListener('click', function () { selectEvent(e, true); });
      frag.appendChild(div);
    });
    listEl.appendChild(frag);
  }

  function escapeHtml(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  let rebuildTimer = 0;
  function scheduleRebuild() {
    clearTimeout(rebuildTimer);
    rebuildTimer = setTimeout(function () { rebuild(); }, 160);
  }

  function rebuild() {
    if (state.mode === 'history') { rebuildHistory(); return; }
    const evs = (HZ.data.events || []).filter(function (e) {
      if (e.isDemo && !state.showDemo) return false;
      if (e.type === 'earthquake' && e.mag < state.minMag) return false;
      if (e.type !== 'earthquake' && e.severity < state.minSev) return false;
      return true;
    });
    HZ.renderHazards(evs, {
      minMag: state.minMag,
      layers: state.layers,
      cutoffMs: state.cutoffMs
    });
    // re-apply selection marker after rebuild
    if (state.selected) HZ.selectMarker(state.selected.lat, state.selected.lon, true, state.selected.color);
    updateCounts();
    renderList();
    if (HZ.state.selected) refreshSelectedInList();
  }

  function rebuildHistory() {
    if (!HZ.historyEvents || !HZ.historyEvents.length) return;
    const evs = HZ.historyEvents.filter(function (e) {
      if (state.layers[e.type] === false) return false;
      if (e.type === 'earthquake' && e.mag != null && e.mag < state.minMag) return false;
      if (e.type !== 'earthquake' && e.severity != null && e.severity < state.minSev) return false;
      return true;
    });
    HZ.suppressLabels = true;
    HZ.renderHazards(evs, { minMag: state.minMag, layers: state.layers, cutoffMs: 1e15, history: true });
    HZ.suppressLabels = false;
    HZ.updateCutoff(state.historyYear);
    if (state.selected) HZ.selectMarker(state.selected.lat, state.selected.lon, true, state.selected.color);
    updateCounts();
    renderList();
    updateHistoryReadout();
  }

  function refreshSelectedInList() {
    $$('#eventList .event').forEach(function (el) { el.classList.remove('sel'); });
  }

  /* ---------------- tooltip ---------------- */
  const tipEl = $('#tip');
  let tipEvent = null;

  function kv(k, v) {
    return '<div class="kv"><span>' + escapeHtml(k) + '</span><b>' + (v == null ? '—' : v) + '</b></div>';
  }

  function tooltipHistoryHtml(e) {
    let html = '<span class="tip-badge hist">历史目录 · 非实时</span>';
    html += '<h3>' + escapeHtml(e.title) + '</h3>';
    html += kv('年代', e.yearLabel);
    if (e.dateText) html += '<div class="tip-note" style="border-top:0;padding-top:0;margin-top:0"><b>日期：</b>' + escapeHtml(e.dateText) + '</div>';
    html += kv('类型', HIST_TYPE[e.type] || meta[e.type].label);
    if (e.mag != null) html += kv('震级', 'M ' + e.mag.toFixed(1) + '（现代估算）');
    if (e.waveHeightM != null) html += kv('波高', '约 ' + e.waveHeightM + ' 米（研究估计）');
    html += kv('坐标', latLonZh(e.lat, e.lon));
    html += kv('坐标精度', e.precisionText);
    html += '<div class="tip-note"><b>地点：</b>' + escapeHtml(e.place) + '</div>';
    html += '<div class="tip-note" style="border-top:0;padding-top:0;margin-top:3px"><b>影响：</b>' + escapeHtml(e.impact) + '</div>';
    html += '<div class="tip-note" style="border-top:0;padding-top:0;margin-top:3px"><b>伤亡：</b>' + escapeHtml(e.casualties) + '</div>';
    html += '<div class="tip-note" style="border-top:0;padding-top:0;margin-top:3px"><b>来源：</b>' + escapeHtml(e.source) + '</div>';
    if (e.note) html += '<div class="tip-note"><b>说明：</b>' + escapeHtml(e.note) + '</div>';
    html += '<div class="tip-note">历史记录残缺且分布不均，<b>有记载 ≠ 发生过</b>；古代坐标多为区域级近似，伤亡数字按区间或原文标注。</div>';
    if (e.sourceUrl) {
      html += '<a class="tip-link" href="' + escapeHtml(e.sourceUrl) + '" target="_blank" rel="noopener">查看目录来源 ↗</a>';
    }
    return html;
  }

  function tooltipHtml(e) {
    if (e.isHistory) return tooltipHistoryHtml(e);
    const demo = e.isDemo;
    let html = '<span class="tip-badge' + (demo ? ' demo' : '') + '">' +
      (demo ? '示例数据 · 非实时' : '实时 / 近实时公开数据') + '</span>';
    html += '<h3>' + escapeHtml(eventTitleZh(e)) + '</h3>';
    if (e.type === 'earthquake') {
      html += kv('震级', 'M ' + e.mag.toFixed(1));
      html += kv('深度', e.depth != null ? e.depth.toFixed(1) + ' 千米' : '—');
      html += kv('时间', HZ.fmtTime(e.time));
      html += kv('坐标', latLonZh(e.lat, e.lon));
      html += kv('来源', HZ.sourceZh(e.source));
      if (e.tsunamiFlag) html += kv('USGS 海啸标记', '是');
    } else if (e.type === 'cyclone') {
      if (!demo) {
        html += kv('最大风速', e.wind != null ? e.wind + ' ' + HZ.windUnitZh(e.windUnit) : '官方数据未提供');
        html += kv('更新时间', HZ.fmtTime(e.time));
      } else {
        html += kv('数据性质', '动画演示');
      }
      html += kv('路径点', (e.track ? e.track.length : 0) + ' 个');
      html += '<div class="tip-note">虚线路径与琥珀色锥为页面基于最近移动趋势的<b>示意外推</b>，不是 JTWC / 官方预报；示例轨迹不是真实台风。</div>';
    } else if (e.type === 'tsunami') {
      html += kv('官方等级', e.alertLevel || '—');
      html += kv('波高', e.waveHeightM != null ? e.waveHeightM + ' 米（演示参数）' : '官方未提供');
      if (!demo) html += kv('发布时间', HZ.fmtTime(e.time));
      if (e.areaText) html += '<div class="tip-note">区域：' + escapeHtml(e.areaText) + '</div>';
      html += '<div class="tip-note">海啸预警区域为 NWS 原始多边形，页面用质心点近似表示；波高通常不在预警文本中提供。</div>';
    } else if (e.type === 'landslide' || e.type === 'flood') {
      html += kv('数据性质', demo ? '示例动画' : '公开事件点');
      if (!demo) html += kv('更新时间', HZ.fmtTime(e.time));
      html += '<div class="tip-note">' + (e.type === 'flood' ? '洪泛区' : '扇形影响区') +
        '为页面按事件点生成的<b>示意范围</b>，不是官方测绘边界。</div>';
    } else if (e.type === 'volcano') {
      html += kv('数据性质', demo ? '示例动画' : '公开事件点');
      if (!demo) html += kv('更新时间', HZ.fmtTime(e.time));
      html += '<div class="tip-note">喷发羽流为视觉化示意，不代表喷发高度或火山灰扩散范围。</div>';
    } else if (e.type === 'wildfire') {
      html += kv('数据性质', demo ? '示例动画' : '公开事件点');
      if (!demo) html += kv('更新时间', HZ.fmtTime(e.time));
      html += '<div class="tip-note">EONET 只有事件点，火焰为视觉标记，不代表过火面积。</div>';
    }
    if (!demo && e.sourceUrl) {
      html += '<a class="tip-link" href="' + escapeHtml(e.sourceUrl) + '" target="_blank" rel="noopener">查看原始来源 ↗</a>';
    }
    if (demo) {
      html += '<div class="tip-note">该事件仅用于展示形态语言，<b>不是真实灾害，不代表官方预警等级。</b></div>';
    }
    return html;
  }

  function fitTip(x, y) {
    const w = tipEl.offsetWidth, h = tipEl.offsetHeight;
    let left = x + 16, top = y + 14;
    if (left + w > window.innerWidth - 12) left = x - w - 16;
    let bottom = window.innerHeight - 12;
    const dock = document.getElementById('dock');
    if (dock) {
      const r = dock.getBoundingClientRect();
      if (r.height > 0 && r.top > 0) bottom = Math.min(bottom, r.top - 12);
    }
    if (top + h > bottom) top = Math.max(12, bottom - h);
    if (top < 8) top = 8;
    tipEl.style.left = Math.max(10, left) + 'px';
    tipEl.style.top = top + 'px';
  }

  function showTip(e, x, y) {
    if (!e) { hideTip(); return; }
    tipEvent = e;
    tipEl.innerHTML = tooltipHtml(e);
    tipEl.style.display = 'block';
    fitTip(x, y);
    HZ.hoverMarker(e.lat, e.lon, true);
  }
  function hideTip() {
    if (tipEvent) { HZ.hoverMarker(0, 0, false); }
    tipEvent = null;
    tipEl.style.display = 'none';
  }

  function selectEvent(e, fly) {
    state.selected = e;
    HZ.focusEvent(e);
    renderList();
    const v = new THREE.Vector3();
    HZ.project(e.lat, e.lon, v);
    const sx = (v.x * 0.5 + 0.5) * window.innerWidth;
    const sy = (-v.y * 0.5 + 0.5) * window.innerHeight;
    showTip(e, Math.min(Math.max(sx, 40), window.innerWidth - 40), Math.min(Math.max(sy, 40), window.innerHeight - 40));
  }

  // HZ hooks from core
  HZ.onClick = function (x, y) {
    const e = HZ.pickEvent(x, y);
    if (e) selectEvent(e, true);
    else hideTip();
  };
  HZ.onPointerMove = function (x, y, dragging) {
    if (dragging) { hideTip(); return; }
    if (HZ._hoverPending) { HZ._hoverPending.x = x; HZ._hoverPending.y = y; return; }
    HZ._hoverPending = { x: x, y: y };
    requestAnimationFrame(function () {
      const p = HZ._hoverPending;
      HZ._hoverPending = null;
      if (!p) return;
      const e = HZ.pickEvent(p.x, p.y);
      if (e) {
        if (!tipEvent || tipEvent.id !== e.id) showTip(e, p.x, p.y);
        else fitTip(p.x, p.y);
      } else {
        hideTip();
      }
    });
  };
  HZ.onPointerLeave = function () { hideTip(); };
  HZ.onPointerDown = function () { hideTip(); };
  HZ.onEscape = function () {
    hideTip();
    $('#modal').classList.remove('show');
    state.selected = null;
    HZ.selectMarker(0, 0, false);
    renderList();
  };

  HZ.onSelect = function (e) {
    state.selected = e;
    renderList();
  };

  /* ---------------- toast / clock ---------------- */
  const toastEl = $('#toast');
  let toastTimer = 0;
  function toast(msg) {
    toastEl.textContent = msg;
    toastEl.classList.add('on');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toastEl.classList.remove('on'); }, 2200);
  }

  const utcEl = $('#utcClock');
  function tickClock() {
    const d = new Date();
    utcEl.textContent = String(d.getHours()).padStart(2, '0') + ':' + String(d.getMinutes()).padStart(2, '0') +
      ':' + String(d.getSeconds()).padStart(2, '0') + ' · 本地时间';
  }
  tickClock();
  setInterval(tickClock, 1000);

  function hhmm(t) {
    if (!t) return '--:--';
    const d = new Date(t);
    return String(d.getHours()).padStart(2, '0') + ':' + String(d.getMinutes()).padStart(2, '0');
  }
  function axisTime(t, withDate) {
    const d = new Date(t);
    const hm = String(d.getHours()).padStart(2, '0') + ':' + String(d.getMinutes()).padStart(2, '0');
    if (!withDate) return hm;
    return String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0') + ' ' + hm;
  }
  function statusWord(st) {
    if (!st) return '未连接';
    if (st.state === 'loading') return '连接中';
    if (st.state === 'live') return '实时';
    if (st.state === 'cache') return '缓存';
    return '失败';
  }
  function statusDotClass(st) {
    if (!st) return 'bad';
    if (st.state === 'live') return '';
    if (st.state === 'cache') return 'warn';
    return 'bad';
  }

  /* ---------------- live status + right panel ---------------- */
  function updateStatus() {
    const st = HZ.data.status;
    $('#liveDot').className = 'live-dot' + (HZ.data.offline ? ' off' : (HZ.data.anyCache && !HZ.data.anyLive ? ' demo' : ''));
    let text = '';
    if (state.mode === 'history') {
      const hs = HZ.historyStats;
      text = '历史长轴 · 摘编 ' + historyTotal() + ' 条 · ' +
        (hs ? HZ.yearText(hs.minYear) + ' – ' + HZ.yearText(hs.maxYear) : '') + ' · 当前浮现 ' +
        historyFiltered().length + ' 条 · 古代坐标为近似值';
    } else if (st.usgs.state === 'loading' && st.eonet.state === 'loading') {
      text = '正在连接公开数据源…';
    } else {
      const parts = [];
      parts.push('USGS 地震 ' + st.usgs.count + ' 条' + (st.usgs.state === 'cache' ? '（缓存）' : st.usgs.state === 'error' ? '（失败）' : ''));
      parts.push('EONET 事件 ' + st.eonet.count + ' 条' + (st.eonet.state === 'cache' ? '（缓存）' : st.eonet.state === 'error' ? '（失败）' : ''));
      parts.push('NWS 海啸 ' + st.nws.count + ' 条' + (st.nws.state === 'cache' ? '（缓存）' : st.nws.state === 'error' ? '（失败）' : ''));
      text = parts.join(' · ');
      const latest = Math.max(st.usgs.updated || 0, st.eonet.updated || 0, st.nws.updated || 0);
      if (latest) text += ' · 拉取 ' + hhmm(latest);
      if (HZ.data.referenceNow) {
        text += ' · 数据基准 ' + hhmm(HZ.data.referenceNow);
        if (HZ.data.clockLagHours > 3) text += '（滞后 ' + HZ.data.clockLagHours.toFixed(0) + ' 小时）';
      }
    }
    $('#liveText').textContent = text;
    $('#liveText').title = text;

    const dc = document.getElementById('dataClock');
    if (dc) {
      if (HZ.data.referenceNow) {
        dc.textContent = hhmm(HZ.data.referenceNow) + (HZ.data.clockLagHours > 3 ? ' · 滞后 ' + Math.round(HZ.data.clockLagHours) + ' 小时' : '');
        dc.title = '各数据源最新内容时间：' + HZ.fmtTime(HZ.data.referenceNow);
      } else {
        dc.textContent = '--';
      }
    }

    const rows = [['USGS 地震目录', st.usgs], ['NASA EONET 事件', st.eonet], ['NOAA / NWS 海啸', st.nws]];
    $('#srcSummary').innerHTML = rows.map(function (r) {
      const s = r[1];
      return '<div class="src-line"><i class="sdot ' + statusDotClass(s) + '"></i><b>' + r[0] + '</b><span>' +
        statusWord(s) + ' · ' + s.count + '</span></div>';
    }).join('');

    // offline banner
    const banner = $('#offlineBanner');
    if (HZ.data.offline) {
      banner.style.display = 'block';
      banner.innerHTML = '网络不可用：实时数据全部请求失败，当前为<b>离线演示</b>模式。地球与示例动画仍可查看，示例数据不代表真实事件。';
    } else if (st.usgs.state === 'error' || st.eonet.state === 'error' || st.nws.state === 'error') {
      banner.style.display = 'block';
      banner.innerHTML = '部分数据源请求失败或受跨域限制，已尽量使用本地缓存；缺失部分不会伪造。';
    } else {
      banner.style.display = 'none';
    }

    updateIntroLoad();
  }

  function updateIntroLoad() {
    const el = document.getElementById('introLoad');
    if (!el) return;
    const st = HZ.data.status;
    if (st.usgs.state === 'loading' && !st.usgs.count) {
      el.textContent = '正在初始化三维地球与公开数据源…';
      return;
    }
    const real = HZ.data.events.filter(function (e) { return !e.isDemo; }).length;
    el.innerHTML = '已载入 · 实时/近实时事件 <b class="num-live">' + real + '</b> 条 · ' +
      '示例事件 <b class="num-demo">' + HZ.data.events.filter(function (e) { return e.isDemo; }).length + '</b> 条 · ' +
      '历史摘编 <b>' + historyTotal() + '</b> 条（公元前 500 年至今）' +
      (HZ.data.offline ? ' · <span class="offline">网络不可用，离线演示</span>' : '');
  }

  /* ---------------- timeline ---------------- */
  const playhead = $('#playhead');
  const playLabel = $('#playLabel');
  const playBtn = $('#playBtn');
  const axisStart = $('#axisStart');
  const axisEnd = $('#axisEnd');
  let playRAF = 0;
  let playT0 = 0;
  let playFrom = 1;

  function dataAnchor() { return (HZ.data && HZ.data.referenceNow) || Date.now(); }
  function windowStart() { return dataAnchor() - state.hours * 3600000; }
  function updateAxis() {
    const start = windowStart(), end = dataAnchor();
    const withDate = state.hours >= 24;
    axisStart.textContent = axisTime(start, withDate);
    const lag = HZ.data.clockLagHours || 0;
    axisEnd.textContent = (lag > 3 ? '数据基准 ' : '现在 ') + axisTime(end, withDate);
  }
  function cutoffFromPlayhead() {
    if (state.playhead >= 0.999) return 1e15;
    const start = windowStart(), end = dataAnchor();
    return start + (end - start) * state.playhead;
  }
  function applyCutoff() {
    state.cutoffMs = cutoffFromPlayhead();
    HZ.updateCutoff(state.cutoffMs);
    if (state.playhead >= 0.999) {
      playLabel.textContent = (HZ.data.clockLagHours || 0) > 3 ? '数据基准' : '现在';
    } else {
      playLabel.textContent = HZ.fmtTime(state.cutoffMs).slice(5, 16);
    }
    if (state.selected && state.selected.time && state.selected.time > state.cutoffMs) {
      state.selected = null;
      HZ.selectMarker(0, 0, false);
    }
    throttleList();
  }
  let listThrottle = 0;
  function throttleList() {
    clearTimeout(listThrottle);
    listThrottle = setTimeout(function () { renderList(); updateCounts(); }, 120);
  }

  playhead.addEventListener('input', function () {
    stopPlay();
    state.playhead = Number(playhead.value) / 1000;
    applyCutoff();
  });

  function stopPlay() {
    state.playing = false;
    if (playRAF) cancelAnimationFrame(playRAF);
    playRAF = 0;
    playBtn.innerHTML = '<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>';
  }
  function startPlay() {
    if (state.playing) { stopPlay(); return; }
    state.playing = true;
    playBtn.innerHTML = '<svg viewBox="0 0 24 24"><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>';
    playT0 = performance.now();
    playFrom = state.playhead >= 0.999 ? 0 : state.playhead;
    if (state.playhead >= 0.999) { state.playhead = 0; playhead.value = 0; applyCutoff(); }
    const dur = 9000;
    step(playT0);
    function step(now) {
      if (!state.playing) return;
      const k = Math.min(1, (now - playT0) / dur);
      const val = playFrom + (1 - playFrom) * k;
      state.playhead = val;
      playhead.value = Math.round(val * 1000);
      applyCutoff();
      if (k >= 1) { stopPlay(); state.playhead = 1; playhead.value = 1000; applyCutoff(); return; }
      playRAF = requestAnimationFrame(step);
    }
  }
  playBtn.addEventListener('click', startPlay);

  async function changeWindow(h) {
    if (state.hours === h) return;
    state.hours = h;
    $$('#windowBtns .win-btn').forEach(function (b) {
      b.classList.toggle('on', Number(b.getAttribute('data-win')) === h);
    });
    stopPlay();
    state.playhead = 1;
    playhead.value = 1000;
    state.cutoffMs = 1e15;
    HZ.updateCutoff(1e15);
    applyCutoff();
    updateAxis();
    $('#liveText').textContent = '正在切换时间窗并重新获取数据…';
    listEl.innerHTML = skeletonHtml();
    eventCountEl.textContent = '载入中';
    await HZ.loadAll(h);
  }
  $$('#windowBtns .win-btn').forEach(function (b) {
    b.addEventListener('click', function () { changeWindow(Number(b.getAttribute('data-win'))); });
  });

  /* ---------------- history long axis ---------------- */
  const liveCtl = $('#liveCtl');
  const histCtl = $('#histCtl');
  const liveAxis = $('#liveAxis');
  const histAxis = $('#histAxis');
  const dockNote = $('#dockNote');
  const histNote = $('#histNote');
  const legendHint = $('#legendHint');
  const histYearEl = $('#histYear');
  const histCountEl = $('#histCount');
  const histPlay = $('#histPlay');
  const histHead = $('#historyHead');
  const histCanvas = $('#histCanvas');
  const histTicks = $('#histTicks');
  const histSrcCount = $('#histSrcCount');
  let histRAF = 0;

  function historyTotal() { return (HZ.historyEvents || []).length; }

  function updateHistoryReadout() {
    if (!HZ.historyScale) return;
    const vis = historyFiltered().length;
    histYearEl.textContent = HZ.yearText(state.historyYear);
    histCountEl.textContent = vis + ' / ' + historyTotal() + ' 条已浮现';
  }

  function drawDensity() {
    if (!HZ.historyScale || state.mode !== 'history') return;
    const w = histCanvas.clientWidth;
    const h = histCanvas.clientHeight;
    if (!w || !h) return;
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    if (histCanvas.width !== Math.round(w * dpr) || histCanvas.height !== Math.round(h * dpr)) {
      histCanvas.width = Math.round(w * dpr);
      histCanvas.height = Math.round(h * dpr);
    }
    const ctx = histCanvas.getContext('2d');
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, w, h);
    const BINS = 140;
    const bins = new Array(BINS).fill(0);
    (HZ.historyEvents || []).forEach(function (e) {
      const i = Math.min(BINS - 1, Math.max(0, Math.floor(HZ.historyScale.toFrac(e.year) * BINS)));
      bins[i]++;
    });
    const max = Math.max.apply(null, bins) || 1;
    const cutF = HZ.historyScale.toFrac(state.historyYear);
    const bw = w / BINS;
    for (let i = 0; i < BINS; i++) {
      if (!bins[i]) continue;
      const bh = Math.max(3, Math.pow(bins[i] / max, 0.7) * (h - 4));
      const passed = (i + 0.5) / BINS <= cutF;
      ctx.fillStyle = passed ? 'rgba(216,168,106,.56)' : 'rgba(216,168,106,.15)';
      ctx.fillRect(i * bw + 0.5, h - bh - 1, Math.max(1.5, bw - 1), bh);
    }
    const cx = Math.max(0, Math.min(w, cutF * w));
    ctx.fillStyle = 'rgba(242,205,152,.85)';
    ctx.fillRect(cx - 0.75, 0, 1.5, h);
    ctx.fillStyle = 'rgba(224,212,195,.08)';
    ctx.fillRect(0, h - 1, w, 1);
  }

  function buildHistoryTicks() {
    if (!HZ.historyScale) return;
    const ticks = HZ.historyScale.ticks;
    histTicks.innerHTML = ticks.map(function (y) {
      const f = HZ.historyScale.toFrac(y);
      const label = y < 0 ? '前 ' + (-y) : (y >= 2026 ? '今天' : String(y));
      const edge = f <= 0.001 ? ' edge-l' : (f >= 0.999 ? ' edge-r' : '');
      return '<span class="' + edge.trim() + '" style="left:' + (f * 100).toFixed(2) + '%">' + label + '</span>';
    }).join('');
  }

  function applyHistoryCutoff() {
    HZ.updateCutoff(state.historyYear);
    if (state.selected && state.selected.isHistory && state.selected.year > state.historyYear + 0.01) {
      state.selected = null;
      HZ.selectMarker(0, 0, false);
      hideTip();
    }
    updateHistoryReadout();
    drawDensity();
    throttleList();
  }

  function stopHistoryPlay() {
    state.historyPlaying = false;
    if (histRAF) cancelAnimationFrame(histRAF);
    histRAF = 0;
    histPlay.innerHTML = '<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>';
  }

  function startHistoryPlay() {
    if (state.historyPlaying) { stopHistoryPlay(); return; }
    if (!HZ.historyScale) return;
    const scale = HZ.historyScale;
    const fromF = state.historyYear >= scale.max - 0.5 ? 0 : scale.toFrac(state.historyYear);
    if (fromF <= 0) {
      state.historyYear = scale.min;
      histHead.value = 0;
      applyHistoryCutoff();
    }
    state.historyPlaying = true;
    histPlay.innerHTML = '<svg viewBox="0 0 24 24"><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>';
    const t0 = performance.now();
    const dur = 14000;
    function step(now) {
      if (!state.historyPlaying) return;
      const k = Math.min(1, (now - t0) / dur);
      const f = fromF + (1 - fromF) * k;
      state.historyYear = scale.toYear(f);
      histHead.value = Math.round(f * 1000);
      applyHistoryCutoff();
      if (k >= 1) {
        stopHistoryPlay();
        state.historyYear = scale.max;
        histHead.value = 1000;
        applyHistoryCutoff();
        return;
      }
      histRAF = requestAnimationFrame(step);
    }
    histRAF = requestAnimationFrame(step);
  }

  function setMode(mode) {
    if (mode === state.mode) return;
    state.mode = mode;
    stopPlay();
    stopHistoryPlay();
    state.selected = null;
    hideTip();
    HZ.selectMarker(0, 0, false);
    $$('#modeBtns .seg-btn').forEach(function (b) {
      b.classList.toggle('on', b.getAttribute('data-mode') === mode);
    });
    const hist = mode === 'history';
    liveCtl.classList.toggle('is-hidden', hist);
    histCtl.classList.toggle('is-hidden', !hist);
    liveAxis.classList.toggle('is-hidden', hist);
    histAxis.classList.toggle('is-hidden', !hist);
    histNote.classList.toggle('is-hidden', !hist);
    legendHint.textContent = hist ? '历史震级为现代估算' : '震级 M';
    dockNote.textContent = hist
      ? '历史长轴为本地摘编目录，不是全量编年；拖动时事件按年代逐点浮现'
      : '时间窗按各数据源的事件时间过滤；示例事件不参与时间窗';
    histSrcCount.textContent = historyTotal() + ' 条 · 本地摘编';

    if (hist) {
      // 实时窗口默认隐藏野火以减少噪声；历史长轴中七类灾种都应可见
      if (state.layers.wildfire === false) {
        state.layers.wildfire = true;
        state.autoWildfire = true;
        syncLayerRows();
      }
      state.historyYear = HZ.historyScale.max;
      histHead.value = 1000;
      rebuildHistory();
      requestAnimationFrame(drawDensity);
      const hs = HZ.historyStats;
      toast('历史长轴：' + (hs ? HZ.yearText(hs.minYear) + ' – ' + HZ.yearText(hs.maxYear) : '') +
        '，共 ' + historyTotal() + ' 条摘编');
    } else {
      if (state.autoWildfire) {
        state.autoWildfire = false;
        state.layers.wildfire = false;
        syncLayerRows();
      }
      state.playhead = 1;
      playhead.value = 1000;
      state.cutoffMs = 1e15;
      playLabel.textContent = (HZ.data.clockLagHours || 0) > 3 ? '数据基准' : '现在';
      rebuild();
      updateAxis();
      toast('已回到实时窗口');
    }
    updateStatus();
    updateIntroLoad();
  }

  $$('#modeBtns .seg-btn').forEach(function (b) {
    b.addEventListener('click', function () { setMode(b.getAttribute('data-mode')); });
  });

  histHead.addEventListener('input', function () {
    stopHistoryPlay();
    if (!HZ.historyScale) return;
    state.historyYear = HZ.historyScale.toYear(Number(histHead.value) / 1000);
    applyHistoryCutoff();
  });
  histPlay.addEventListener('click', startHistoryPlay);

  window.addEventListener('resize', function () {
    if (state.mode === 'history') drawDensity();
  });

  /* ---------------- sources modal ---------------- */
  const modal = $('#modal');
  function openModal() {
    modal.classList.add('show');
    buildModal();
  }
  function closeModal() { modal.classList.remove('show'); }
  $('#modalClose').addEventListener('click', closeModal);
  modal.addEventListener('click', function (e) { if (e.target === modal) closeModal(); });
  $('#sourcesBtn').addEventListener('click', openModal);
  $('#introSourcesBtn').addEventListener('click', openModal);
  $('#helpBtn').addEventListener('click', openModal);

  function buildModal() {
    const st = HZ.data.status;
    const real = HZ.data.events.filter(function (e) { return !e.isDemo; });
    const demos = HZ.data.events.filter(function (e) { return e.isDemo; });
    const srcRows = [
      {
        name: 'USGS 地震目录（美国地质调查局）', use: '地震震中、震级、深度、时间', url: st.usgs.url,
        state: st.usgs, cadence: '页面每 90 秒刷新；按时间窗自动选择 1 小时 / 1 天 / 7 天 / 30 天目录'
      },
      {
        name: 'NASA EONET v3（地球观测事件库）', use: '热带气旋路径（含 JTWC 等上游来源）、火山、洪水、滑坡、野火事件点', url: st.eonet.url,
        state: st.eonet, cadence: '页面每 90 秒刷新；EONET 为近实时聚合，存在上游延迟'
      },
      {
        name: 'NOAA / NWS 预警接口（美国国家气象局）', use: '海啸预警 / 观察 / 提示', url: st.nws.url,
        state: st.nws, cadence: '页面每 90 秒刷新；仅覆盖美国国家气象局（NWS）发布的预警'
      },
      {
        name: 'GDACS 灾害聚合（RSS，未接入）', use: '综合灾害预警（未接入）', url: 'https://www.gdacs.org/xml/rss.xml',
        state: null, cadence: '响应缺少跨域响应头（Access-Control-Allow-Origin），浏览器直接请求会被拦截；未使用第三方代理规避'
      },
      {
        name: 'NHC 现行风暴接口（未接入）', use: '飓风实时路径（未接入）', url: 'https://www.nhc.noaa.gov/CurrentStorms.json',
        state: null, cadence: '当前无活跃风暴（返回空）；该接口未提供跨域响应头，浏览器端无法直接读取'
      },
      {
        name: '历史灾害目录（本地摘编，非全量编年）',
        use: (HZ.historyStats
          ? (HZ.yearText(HZ.historyStats.minYear) + ' – ' + HZ.yearText(HZ.historyStats.maxYear))
          : '') + '代表性古今灾害事件，含来源、坐标、年代与影响说明',
        url: 'assets/history.js', state: null, label: '已内置', cls: 'hist', count: (HZ.historyStats || {}).count,
        cadence: '随页面载入；摘编自 NOAA/NCEI 显著地震目录、Smithsonian GVP、USGS、EM-DAT 类统计与公开史料'
      }
    ];
    let html = '<table class="src-table"><thead><tr><th>数据源</th><th>用途</th><th>接入状态</th><th>更新方式</th></tr></thead><tbody>';
    srcRows.forEach(function (r) {
      const live = r.state && r.state.state !== 'loading';
      const cls = r.cls || (r.state ? (r.state.state === 'live' ? '' : r.state.state === 'cache' ? ' demo' : ' off') : ' off');
      const label = r.label || (r.state ? statusWord(r.state) : '未接入');
      const count = r.count != null ? r.count : (r.state ? r.state.count : null);
      html += '<tr><td><b>' + r.name + '</b><br/><span style="font-family:var(--mono);font-size:8px;color:#507084">' +
        escapeHtml(r.url) + '</span></td><td>' + r.use + '</td><td><span class="st ' + cls + '">' + label +
        (count != null && (r.label || (r.state && r.state.state !== 'loading')) ? ' · ' + count + ' 条' : '') +
        '</span></td><td>' + r.cadence + '</td></tr>';
    });
    html += '</tbody></table>';

    if (HZ.historyStats) {
      const hs = HZ.historyStats;
      const typeText = Object.keys(hs.types).map(function (t) {
        return (HIST_TYPE[t] || t) + ' ' + hs.types[t];
      }).join('、');
      html += '<div class="note-block"><b>历史长轴数据（本地摘编，不是全量编年）</b><br/>' +
        '收入代表性事件 <b>' + hs.count + ' 条</b>，时间跨度 <b>' +
        HZ.yearText(hs.minYear) + ' – ' + HZ.yearText(hs.maxYear) + '</b>；按类型：' + typeText + '。' +
        '<details class="note-details"><summary>查看来源、覆盖偏差与坐标精度说明</summary>' +
        '来源：NOAA/NCEI 全球显著地震目录、Smithsonian GVP 全球火山活动数据库、USGS 历史地震与古地震研究、EM-DAT 类灾情统计（引用），以及公开史料与学术研究。每条事件在悬停卡片中标注具体来源与坐标精度。<br/>' +
        '<b>覆盖偏差：</b>目录只收录有记载、影响较大的事件，<b>有记载 ≠ 发生过</b>；无文字记录、人口稀少地区与小规模灾害大量缺失，因此不能据此推断“古代灾害更少”。<br/>' +
        '<b>坐标精度：</b>点级（约 10–50 千米）、区域级（约 100–200 千米）、国家级 / 推测（约 300–800 千米）。古代事件多为区域级或推测级。<br/>' +
        '<b>伤亡口径：</b>古代数字常混合饥荒、瘟疫与次生灾害，来源争议较大；页面按区间或原文标注，不把不同来源的数字合并成单一结论。' +
        '</details></div>';
    }

    html += '<div class="note-block"><b>本次页面实际载入（' + hHZ + '）：</b><br/>' +
      '实时/近实时事件 <b>' + real.length + ' 条</b>；其中 USGS 地震 <b>' + st.usgs.count + ' 条</b>，' +
      'EONET 事件 <b>' + st.eonet.count + ' 条</b>，NWS 海啸预警 <b>' + st.nws.count + ' 条</b>。<br/>' +
      '示例动画 <b>' + demos.length + ' 条</b>，仅用于演示形态，不计入实时统计。<br/>' +
      '最近一次成功更新：' + (Math.max(st.usgs.updated || 0, st.eonet.updated || 0, st.nws.updated || 0) ?
        HZ.fmtTime(Math.max(st.usgs.updated || 0, st.eonet.updated || 0, st.nws.updated || 0)) : '—') +
      '</div>';

    if (HZ.data.referenceNow) {
      const lag = HZ.data.clockLagHours || 0;
      html += '<div class="note-block' + (lag > 3 ? ' warn-block' : '') + '"><b>数据基准时间：' +
        HZ.fmtTime(HZ.data.referenceNow) + '</b><br/>' +
        '这是页面各数据源中最新内容的时间。' + (lag > 3
          ? '它比本机时钟落后约 <b>' + lag.toFixed(1) + ' 小时</b>，说明上游目录 / 聚合层存在明显延迟，或环境时钟不同步。页面的「近 1 小时 / 近 24 小时」窗口以这个基准时间为终点，而不是强行用本机时间过滤，避免把整批数据误判为过期。'
          : '页面时间窗以该时间为终点。') + '</div>';
    }

    html += '<div class="note-block"><b>已知限制</b><br/>' +
      '1. 地震目录来自 USGS，全球覆盖但不同区域检测能力不均；小震可能缺失。<br/>' +
      '2. EONET 是事件聚合层，部分事件只有单个坐标点，没有官方影响范围与强度；台风路径来自其上游机构（如 JTWC），页面中的未来路径是<b>趋势外推示意</b>，不是官方预报。<br/>' +
      '3. 海啸预警接口通常不提供波高；页面不会编造波高。海啸区域多边形以质心点近似。<br/>' +
      '4. 滑坡 / 洪水 / 火山图层当前可能为 0 条实时事件，此时展示的示例动画已用「示例」标注。<br/>' +
      '5. 页面为静态前端，无后端代理，因此无法接入未开放 CORS 的 GDACS / NHC 接口。</div>';

    html += '<div class="footnote">底图：NASA「蓝色弹珠」地球影像（Three.js 示例纹理，已内嵌为数据 URI，离线可用）；国界：Natural Earth 1:1.1 亿比例尺（TopoJSON，本地文件）。' +
      '<br/>渲染：Three.js r149（本地文件 assets/three.min.js）。页面可离线启动，但实时数据需联网。' +
      '<br/><a href="sources.html" style="color:#f2cd98">查看完整的来源清单、许可条款与再分发说明 →</a></div>';

    $('#modalBody').innerHTML = html;
  }
  const hHZ = new Date().toISOString().slice(0, 16).replace('T', ' ') + ' 世界时';

  /* ---------------- intro / fullscreen / mobile ---------------- */
  const intro = $('#intro');
  $('#startBtn').addEventListener('click', function () {
    intro.classList.add('hide');
    HZ.controls.targetZoom = 2.72;
    HZ.flyTo(12, 100, { zoom: 2.72, duration: 1.8 });
    toast('拖拽旋转 · 滚轮缩放 · 点击事件聚焦');
  });

  const fsBtn = $('#fsBtn');
  fsBtn.addEventListener('click', function () {
    if (!document.fullscreenElement) {
      const el = document.documentElement;
      if (el.requestFullscreen) el.requestFullscreen().catch(function () { toast('当前浏览器不允许全屏'); });
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  });

  $('#mobileToggle').addEventListener('click', function () {
    $('#leftPanel').classList.toggle('open');
  });

  /* ---------------- data loaded hook ---------------- */
  let builtStamp = 0;
  function buildFromLoaded() {
    const stamp = HZ.data.lastLoadedStamp || 0;
    if (stamp && stamp === builtStamp) return;
    builtStamp = stamp;
    HZ.rebuildEvents({ hours: state.hours, showDemo: true });
    if (state.mode === 'history') {
      updateStatus();
      updateIntroLoad();
      return;
    }
    if (state.selected && !HZ.data.events.some(function (e) { return e.id === state.selected.id; })) {
      state.selected = null;
      HZ.selectMarker(0, 0, false);
    }
    rebuild();
    updateStatus();
    updateAxis();
    updateIntroLoad();
  }
  HZ.onDataLoaded = buildFromLoaded;
  window.addEventListener('hz:data', buildFromLoaded);
  setInterval(buildFromLoaded, 1000);

  /* ---------------- initial ---------------- */
  buildLayerRows();
  buildHistoryTicks();
  histSrcCount.textContent = historyTotal() + ' 条 · 本地摘编';
  updateAxis();
  HZ.updateLayerVisibility(state.layers);
  HZ.earth.material.uniforms.uNightMix.value = 1;

  // start slightly zoomed out for the intro reveal
  HZ.camera.position.z = 4.1;
  HZ.controls.targetZoom = 4.1;
  if (/[?&]intro=0/.test(location.search)) {
    intro.classList.add('hide');
    HZ.camera.position.z = 2.72;
    HZ.controls.targetZoom = 2.72;
  }

  // initial skeleton until fetch completes
  listEl.innerHTML = skeletonHtml();
  updateStatus();

  // if data already resolved before UI was ready, build immediately
  setTimeout(function () {
    const st = HZ.data.status;
    if (st.usgs.state !== 'loading' || st.eonet.state !== 'loading') {
      if (!HZ.data.events.length) HZ.onDataLoaded();
    }
  }, 1200);

  // refresh loop
  setInterval(function () {
    if (!state.autoRefresh || document.hidden) return;
    HZ.loadAll(state.hours);
  }, 90000);

  // demo toggle starts on
  document.getElementById('demoToggle').classList.toggle('on', state.showDemo);
})();
