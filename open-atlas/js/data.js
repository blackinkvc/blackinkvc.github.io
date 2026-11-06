/* =========================================================================
   浙江 · 三维历史地图 — 数据层
   地形与河网、建筑为真实数据（DEM / OSM）；历史事件与构筑物为史料复原。
   历史海岸线由「现代 DEM + 重建海平面」推断，属示意。
   ========================================================================= */
window.DATA = (function () {
  'use strict';

  const MAP = {
    lon0: 117.90, lon1: 123.15,
    lat0: 26.95, lat1: 31.45,
    originLon: 120.55, originLat: 29.10,
    kmPerLon: 96, kmPerLat: 111
  };
  function toX(lon) { return (lon - MAP.originLon) * MAP.kmPerLon; }
  function toZ(lat) { return -(lat - MAP.originLat) * MAP.kmPerLat; }

  /* ---- 高精度片区（仅在这些片区加载 1:1 建筑轮廓） ---- */
  const DISTRICTS = [
    {
      id: 'hz', name: '杭州 · 西湖—武林', short: '杭州',
      lon: 120.154, lat: 30.256, radius: 40, zoom: 13,
      bbox: [30.212, 120.108, 30.300, 120.200],
      note: '西湖东岸、湖滨与武林商圈；建筑高度取 OSM height / building:levels。'
    },
    {
      id: 'nb', name: '宁波 · 三江口', short: '宁波',
      lon: 121.578, lat: 29.860, radius: 38, zoom: 12,
      bbox: [29.812, 121.515, 29.908, 121.640],
      note: '三江口—江北岸—东部新城；港口与近代商埠建筑并存。'
    },
    {
      id: 'wz', name: '温州 · 鹿城', short: '温州',
      lon: 120.692, lat: 28.014, radius: 36, zoom: 11,
      bbox: [27.984, 120.648, 28.044, 120.736],
      note: '瓯江南岸旧城与滨江商务区。'
    },
    {
      id: 'sx', name: '绍兴 · 古城', short: '绍兴',
      lon: 120.582, lat: 30.001, radius: 34, zoom: 10,
      bbox: [29.968, 120.552, 30.034, 120.612],
      note: '护城河内的越城老城，街巷与台门建筑。'
    }
  ];

  /* ---- 九个时代 ---- */
  const ERAS = [
    {
      id: 'prehistoric',
      short: '史前', name: '史前 · 河姆渡与良渚',
      years: '约前5000—前2000年', span: '新石器时代',
      desc: '距今约7000—4000年，海面较今偏高，浙北与宁绍平原多为海湾、潟湖和盐沼。河姆渡人依水而居，良渚人则在苕溪流域筑城、治水、琢玉。',
      notes: {
        coast: '杭州湾两岸大面积内退，嘉兴—慈溪一带多为潮滩与潟湖',
        lake: '西湖前身为与江海相通的潟湖，湖区范围尚不稳定',
        build: '河姆渡干栏聚落、良渚古城与外围水利'
      },
      params: { sea: 3.2, coast: 1.00, lagoon: 1.00, lake: 0.45, estuary: -2.2, silt: 1.00, till: 1.00 }
    },
    {
      id: 'yue',
      short: '越国', name: '越国 · 会稽',
      years: '前6世纪—前306年', span: '春秋战国',
      desc: '于越部族以会稽山北麓的沼泽平原为根基。勾践前473年灭吴，势力北抵江淮；前306年楚灭越，浙江渐入楚文化圈。',
      notes: {
        coast: '岸线仍较今明显内退，山会平原遍布湖沼',
        lake: '潟湖逐渐封闭，西湖尚未成形',
        build: '会稽城邑与越国聚落'
      },
      params: { sea: 2.6, coast: 0.82, lagoon: 0.72, lake: 0.60, estuary: -1.5, silt: 0.86, till: 0.80 }
    },
    {
      id: 'qinhan',
      short: '秦汉', name: '秦汉 · 会稽郡',
      years: '前222—220年', span: '郡县初立',
      desc: '秦置会稽郡，浙江纳入统一郡县体系；东汉永建四年（129）分会稽郡置吴郡，郡治移山阴。滨海平原尚多盐泽，上虞等地已烧造成熟青瓷。',
      notes: {
        coast: '泥沙缓慢淤积，岸线开始东移',
        lake: '西湖仍未完全与江海分离',
        build: '山阴郡城、上虞窑场'
      },
      params: { sea: 1.9, coast: 0.64, lagoon: 0.42, lake: 0.75, estuary: -0.4, silt: 0.70, till: 0.55 }
    },
    {
      id: 'suitang',
      short: '六朝隋唐', name: '六朝隋唐 · 杭州兴起',
      years: '220—907年', span: '运河与州城',
      desc: '隋开皇九年置杭州，大业六年贯通江南运河，杭州由山中小邑转为运河口岸。唐时明州（宁波）渐兴，白居易守杭筑堤，西湖初具灌溉之利。',
      notes: {
        coast: '运河与海塘雏形出现，杭州湾南岸开始淤涨',
        lake: '西湖渐成内陆湖泊，唐白居易筑堤蓄水',
        build: '杭州城、明州港、江南运河'
      },
      params: { sea: 1.1, coast: 0.44, lagoon: 0.22, lake: 0.95, estuary: 0.6, silt: 0.55, till: 0.35 }
    },
    {
      id: 'wuyue',
      short: '吴越', name: '吴越国 · 钱镠筑塘',
      years: '907—978年', span: '东南都会',
      desc: '钱镠定都杭州，筑捍海石塘御潮，设撩湖兵疏浚西湖，扩建罗城，建六和塔、雷峰塔。杭州由州城升为东南都会，为南宋都城奠定基础。',
      notes: {
        coast: '捍海塘御潮，杭州湾南岸滩涂加速围垦',
        lake: '钱镠设撩湖兵疏浚，西湖形态基本定型',
        build: '捍海塘、六和塔、雷峰塔、杭州罗城'
      },
      params: { sea: 0.6, coast: 0.30, lagoon: 0.10, lake: 1.08, estuary: 1.3, silt: 0.42, till: 0.22 }
    },
    {
      id: 'southernsong',
      short: '南宋', name: '南宋 · 临安',
      years: '1127—1279年', span: '都城时代',
      desc: '绍兴八年（1138）定都临安，杭州人口逾百万。西湖十景成形，明州、温州等港口连接海上贸易网络，浙江成为南宋的核心财赋之地。',
      notes: {
        coast: '海塘持续修筑，海岸缓慢外扩',
        lake: '西湖十景形成，湖面维持稳定',
        build: '临安城、宫城、六和塔、港口'
      },
      params: { sea: 0.35, coast: 0.22, lagoon: 0.04, lake: 1.00, estuary: 1.1, silt: 0.32, till: 0.14 }
    },
    {
      id: 'yuanmingqing',
      short: '元明清', name: '元明清 · 卫所与海禁',
      years: '1279—1840年', span: '海防与围垦',
      desc: '元代杭州为杭州路；明初设浙江承宣布政使司，沿海遍置卫所防御倭寇。清顺治十八年迁界海禁，康熙二十三年开海，宁波设浙海关。围垦使滨海平原不断外扩。',
      notes: {
        coast: '卫所与海塘推动围垦，岸线接近今貌',
        lake: '西湖多次疏浚，湖面略有缩减',
        build: '沿海卫所、海塘、宁波港'
      },
      params: { sea: 0.15, coast: 0.10, lagoon: 0.00, lake: 1.00, estuary: 0.6, silt: 0.22, till: 0.08 }
    },
    {
      id: 'modern',
      short: '近代', name: '近代 · 开埠与铁路',
      years: '1840—1949年', span: '口岸与铁路',
      desc: '1844年宁波开埠，江北岸出现领事馆、洋行与码头；1909年沪杭铁路通车，1937年钱塘江大桥建成。铁路与口岸重塑浙江的经济地理。',
      notes: {
        coast: '现代岸线基本形成，局部继续围垦',
        lake: '西湖维持城市湖山格局',
        build: '江北岸商埠、沪杭铁路、钱塘江大桥'
      },
      params: { sea: 0.05, coast: 0.035, lagoon: 0.00, lake: 1.00, estuary: 0.0, silt: 0.12, till: 0.04 }
    },
    {
      id: 'contemporary',
      short: '当代', name: '当代 · 城市群与港口',
      years: '1949年—今', span: '湾区时代',
      desc: '改革开放后杭州、宁波、温州迅速扩张；宁波舟山港成为世界级大港，杭州湾跨海大桥（2008）与舟山跨海大桥（2009）把湾区连成一体。',
      notes: {
        coast: '围垦与港口建设使岸线进一步外推',
        lake: '西湖成为城市中央的景观湖泊',
        build: '跨海大桥、集装箱码头、摩天楼群'
      },
      params: { sea: 0.00, coast: 0.00, lagoon: 0.00, lake: 1.00, estuary: 0.0, silt: 0.05, till: 0.00 }
    }
  ];

  /* ---- 城市：坐标 + 各时代称谓（索引对应 ERAS） ---- */
  const CITIES = [
    {
      id: 'hangzhou', lon: 120.16, lat: 30.27, from: 1, size: 1.25,
      names: ['', '钱唐', '钱唐', '杭州', '杭州', '临安', '杭州', '杭州', '杭州']
    },
    {
      id: 'shaoxing', lon: 120.58, lat: 30.01, from: 1, size: 1.0,
      names: ['', '会稽', '山阴', '越州', '越州', '绍兴', '绍兴', '绍兴', '绍兴']
    },
    {
      id: 'ningbo', lon: 121.55, lat: 29.87, from: 2, size: 1.15,
      names: ['', '', '鄮', '明州', '明州', '明州', '宁波', '宁波', '宁波']
    },
    {
      id: 'wenzhou', lon: 120.70, lat: 28.01, from: 2, size: 1.0,
      names: ['', '', '东瓯', '永嘉', '温州', '温州', '温州', '温州', '温州']
    },
    {
      id: 'jiaxing', lon: 120.75, lat: 30.75, from: 3, size: 0.8,
      names: ['', '', '', '嘉兴', '嘉兴', '嘉兴', '嘉兴', '嘉兴', '嘉兴']
    },
    {
      id: 'huzhou', lon: 120.10, lat: 30.87, from: 3, size: 0.8,
      names: ['', '', '', '湖州', '湖州', '湖州', '湖州', '湖州', '湖州']
    },
    {
      id: 'jinhua', lon: 119.65, lat: 29.08, from: 3, size: 0.8,
      names: ['', '', '', '婺州', '婺州', '婺州', '金华', '金华', '金华']
    },
    {
      id: 'quzhou', lon: 118.87, lat: 28.94, from: 3, size: 0.8,
      names: ['', '', '', '衢州', '衢州', '衢州', '衢州', '衢州', '衢州']
    },
    {
      id: 'lishui', lon: 119.92, lat: 28.45, from: 3, size: 0.8,
      names: ['', '', '', '处州', '处州', '处州', '处州', '丽水', '丽水']
    },
    {
      id: 'taizhou', lon: 121.42, lat: 28.66, from: 3, size: 0.8,
      names: ['', '', '', '台州', '台州', '台州', '台州', '台州', '台州']
    },
    {
      id: 'zhoushan', lon: 122.10, lat: 30.00, from: 4, size: 0.75,
      names: ['', '', '', '', '舟山', '舟山', '舟山', '舟山', '舟山']
    }
  ];

  /* ---- 地理名称标注 ---- */
  const FEATURES = [
    { text: '杭州湾', lon: 121.15, lat: 30.50, kind: 'water', size: 1.5 },
    { text: '舟山群岛', lon: 122.28, lat: 30.20, kind: 'water', size: 1.4 },
    { text: '天目山', lon: 119.40, lat: 30.37, kind: 'relief', size: 1.6 },
    { text: '会稽山', lon: 120.60, lat: 29.69, kind: 'relief', size: 1.5 },
    { text: '雁荡山', lon: 121.06, lat: 28.36, kind: 'relief', size: 1.5 },
    { text: '太湖', lon: 120.22, lat: 31.20, kind: 'water', size: 1.5 },
    { text: '东海', lon: 122.55, lat: 28.55, kind: 'water', size: 1.4 }
  ];

  /* ---- 河流：改用 OSM 真实河网（见 js/rivers.js，window.OSMR） ---- */

  /* ---- 构筑物（from/to 为连续时代索引，可跨时代存续） ---- */
  const ITEMS = [
    // 史前
    { id: 'hemudu', type: 'stilt', lon: 121.17, lat: 29.96, from: -0.3, to: 1.25, label: '河姆渡聚落', size: 1.0 },
    { id: 'liangzhu', type: 'liangzhu', lon: 119.99, lat: 30.42, from: -0.3, to: 1.20, label: '良渚古城', size: 1.25 },
    // 越
    { id: 'yue_capital', type: 'walled', lon: 120.58, lat: 30.02, from: 1.12, to: 2.35, label: '会稽（越都）', w: 9, d: 7, h: 1.5 },
    // 秦汉
    { id: 'shanyin', type: 'walled', lon: 120.56, lat: 30.00, from: 2.25, to: 3.62, label: '山阴', w: 10, d: 8, h: 1.7 },
    // 隋唐
    { id: 'tang_hz', type: 'walled', lon: 120.13, lat: 30.28, from: 3.42, to: 4.62, label: '杭州城', w: 9, d: 7.5, h: 1.7 },
    { id: 'mingzhou_port', type: 'port', lon: 121.55, lat: 29.90, from: 3.35, to: 9.2, label: '明州港', size: 0.8 },
    { id: 'canal', type: 'canal', from: 3.52, to: 9.2, label: '江南运河',
      pts: [[120.24, 30.31], [120.45, 30.45], [120.70, 30.65], [120.95, 30.82], [121.16, 30.92]] },
    // 吴越
    { id: 'seawall', type: 'seawall', from: 4.45, to: 9.2, label: '捍海塘',
      pts: [[120.30, 30.32], [120.55, 30.37], [120.80, 30.44], [121.02, 30.52], [121.20, 30.60]] },
    { id: 'liuhe', type: 'pagoda', lon: 120.13, lat: 30.19, from: 4.60, to: 9.2, label: '六和塔', h: 7.0 },
    { id: 'leifeng_old', type: 'pagoda', lon: 120.15, lat: 30.235, from: 4.62, to: 7.48, label: '雷峰塔', h: 6.2 },
    { id: 'wuyue_wall', type: 'walled', lon: 120.13, lat: 30.28, from: 4.50, to: 5.62, label: '杭州罗城', w: 10.5, d: 9, h: 1.9 },
    // 南宋
    { id: 'linan', type: 'walled', lon: 120.13, lat: 30.28, from: 5.55, to: 6.72, label: '临安城', w: 11, d: 9.5, h: 2.1 },
    // 元明清 卫所
    { id: 'wei_haining', type: 'fort', lon: 120.88, lat: 30.44, from: 6.30, to: 7.95, label: '海宁卫' },
    { id: 'wei_guanhai', type: 'fort', lon: 121.42, lat: 30.17, from: 6.30, to: 7.95, label: '观海卫' },
    { id: 'wei_dinghai', type: 'fort', lon: 121.70, lat: 29.99, from: 6.30, to: 7.95, label: '定海卫' },
    { id: 'wei_changguo', type: 'fort', lon: 122.04, lat: 30.03, from: 6.30, to: 7.95, label: '昌国卫' },
    { id: 'wei_haimen', type: 'fort', lon: 121.38, lat: 28.62, from: 6.30, to: 7.95, label: '海门卫' },
    { id: 'wei_panshi', type: 'fort', lon: 120.95, lat: 28.08, from: 6.30, to: 7.95, label: '磐石卫' },
    // 近代
    { id: 'bund', type: 'bund', lon: 121.56, lat: 29.90, from: 7.25, to: 9.2, label: '江北岸商埠', size: 1.0 },
    { id: 'railway', type: 'railway', from: 7.38, to: 9.2, label: '沪杭铁路',
      pts: [[120.16, 30.28], [120.42, 30.44], [120.75, 30.66], [121.05, 30.86], [121.28, 30.98]] },
    { id: 'qiantang_bridge', type: 'bridge', from: 7.80, to: 9.2, label: '钱塘江大桥',
      pts: [[120.135, 30.196], [120.146, 30.120]], h: 2.2 },
    // 当代
    { id: 'hz_towers', type: 'towers', lon: 120.23, lat: 30.24, from: 8.32, to: 9.2, label: '钱江新城', n: 7, hmax: 13, size: 1.0 },
    { id: 'nb_towers', type: 'towers', lon: 121.62, lat: 29.82, from: 8.26, to: 9.2, label: '东部新城', n: 6, hmax: 10, size: 0.85 },
    { id: 'port_modern', type: 'port', lon: 121.87, lat: 29.93, from: 8.15, to: 9.2, label: '宁波舟山港', size: 1.15, modern: true },
    { id: 'hz_bay_bridge', type: 'bridge', from: 8.55, to: 9.2, label: '杭州湾跨海大桥',
      pts: [[120.88, 30.56], [120.98, 30.48], [121.08, 30.39], [121.17, 30.30]], h: 2.6, long: true },
    { id: 'zs_bridge', type: 'bridge', from: 8.62, to: 9.2, label: '舟山跨海大桥',
      pts: [[121.72, 29.97], [121.82, 30.00], [121.95, 30.01], [122.07, 30.02]], h: 2.6, long: true },
    { id: 'leifeng_new', type: 'pagoda', lon: 120.15, lat: 30.235, from: 8.80, to: 9.2, label: '雷峰塔（2002重立）', h: 6.4 }
  ];

  /* ---- 历史事件（28 条） ---- */
  const EVENTS = [
    // 史前
    { era: 0, lon: 121.17, lat: 29.96, title: '河姆渡文化', time: '约前5000—前3300年', place: '余姚（今宁波余姚市）',
      fact: '1973年发掘的河姆渡遗址出土稻谷、骨耜、干栏式木构与陶器，是长江下游新石器时代文化的代表。',
      meaning: '与良渚一道证明长江流域同样是中华文明的重要发源地。' },
    { era: 0, lon: 119.99, lat: 30.41, title: '良渚古城', time: '约前3300—前2300年', place: '余杭（今杭州余杭区）',
      fact: '古城由宫殿区、内城、外城与外围水利系统构成，出土大量玉琮、玉璧。',
      meaning: '2019年列入《世界遗产名录》，被视为中华五千年文明的重要实证。' },
    // 越国
    { era: 1, lon: 120.58, lat: 30.02, title: '越灭吴', time: '前473年', place: '会稽（今绍兴）',
      fact: '越王勾践灭吴，随后北进中原，会盟诸侯。',
      meaning: '越国成为春秋末期的强国，会稽作为都城的地位得以确立。' },
    { era: 1, lon: 120.49, lat: 29.97, title: '楚灭越', time: '前306年', place: '会稽',
      fact: '楚威王兴兵伐越，越国败亡，其地渐入楚国势力范围。',
      meaning: '浙江地区由此进入楚文化影响圈，为秦置郡县铺垫。' },
    // 秦汉
    { era: 2, lon: 120.56, lat: 30.01, title: '秦置会稽郡', time: '前222年', place: '会稽郡（郡治吴县，辖今浙江大部）',
      fact: '秦将王翦平定江南，置会稽郡，下辖县邑。',
      meaning: '浙江首次纳入中央王朝的郡县体系。' },
    { era: 2, lon: 120.49, lat: 30.05, title: '吴会分治', time: '东汉永建四年（129年）', place: '山阴（今绍兴）',
      fact: '分会稽郡置吴郡，会稽郡移治山阴。',
      meaning: '浙北与苏南的行政格局开始分化，山阴成为浙东行政中心。' },
    { era: 2, lon: 120.90, lat: 29.98, title: '上虞青瓷', time: '东汉中晚期', place: '上虞（今绍兴上虞区）',
      fact: '小仙坛等窑址烧造出胎釉结合的成熟青瓷。',
      meaning: '浙江成为中国成熟瓷器的重要发源地之一。' },
    // 隋唐
    { era: 3, lon: 120.16, lat: 30.27, title: '置杭州', time: '隋开皇九年（589年）', place: '杭州',
      fact: '隋废钱唐郡，改置杭州，“杭州”之名始于此。',
      meaning: '杭州从县邑升为州级政区，城市地位开始上升。' },
    { era: 3, lon: 120.60, lat: 30.62, title: '江南运河贯通', time: '隋大业六年（610年）', place: '杭州—嘉兴—镇江一线',
      fact: '隋炀帝开凿江南运河，连接杭州与长江。',
      meaning: '杭州成为大运河的南端起点，南北物资在此汇聚。' },
    { era: 3, lon: 120.14, lat: 30.25, title: '白居易筑堤', time: '唐长庆二年（822年）', place: '钱塘湖（今西湖）',
      fact: '白居易任杭州刺史，主持筑堤蓄水、疏浚湖面以灌溉农田。',
      meaning: '西湖的水利功能被系统开发，为后世“西湖”格局奠基。' },
    { era: 3, lon: 121.55, lat: 29.88, title: '置明州', time: '唐开元二十六年（738年）', place: '明州（今宁波）',
      fact: '唐置明州，治鄮县，港口渐兴。',
      meaning: '宁波作为海港城市的行政与商贸地位确立。' },
    // 吴越
    { era: 4, lon: 120.16, lat: 30.27, title: '钱镠立吴越', time: '907年', place: '杭州',
      fact: '钱镠受后梁封为吴越王，以杭州为都。',
      meaning: '杭州第一次成为割据政权的都城，城市规模迅速扩大。' },
    { era: 4, lon: 120.55, lat: 30.37, title: '筑捍海石塘', time: '910年', place: '杭州—海宁一带',
      fact: '钱镠征发民夫筑捍海石塘，以竹笼装石抵御钱塘江潮。',
      meaning: '保护杭州与浙北平原免受潮患，是古代海塘工程的代表。' },
    { era: 4, lon: 120.13, lat: 30.19, title: '建六和塔', time: '北宋开宝三年（970年）', place: '钱塘江畔月轮山',
      fact: '吴越王钱弘俶建六和塔，用以镇江潮、导航船只。',
      meaning: '六和塔成为钱塘江畔的地标，也是宋代砖木塔的典型。' },
    { era: 4, lon: 120.15, lat: 30.235, title: '建雷峰塔', time: '北宋太平兴国二年（977年）', place: '西湖南岸雷峰',
      fact: '吴越王钱弘俶建雷峰塔（黄妃塔）。',
      meaning: '与保俶塔隔湖相望，构成西湖的经典天际线。' },
    // 南宋
    { era: 5, lon: 120.16, lat: 30.27, title: '定都临安', time: '绍兴八年（1138年）', place: '临安（今杭州）',
      fact: '宋高宗正式定都临安，宫城设于凤凰山麓。',
      meaning: '杭州成为南宋的政治中心，人口与商业达到高峰。' },
    { era: 5, lon: 120.14, lat: 30.24, title: '西湖十景', time: '南宋', place: '西湖',
      fact: '南宋画院与文人题名形成“西湖十景”，湖山景观被系统经营。',
      meaning: '西湖从水利湖泊转化为文化景观，深刻影响后世园林与城市审美。' },
    { era: 5, lon: 120.16, lat: 30.27, title: '临安陷落', time: '德祐二年（1276年）', place: '临安',
      fact: '元军攻占临安，南宋朝廷南逃。',
      meaning: '南宋都城时代结束，杭州转入元代路府体系。' },
    // 元明清
    { era: 6, lon: 121.42, lat: 30.17, title: '沿海卫所', time: '明洪武年间', place: '浙江沿海（海宁、观海、定海、昌国、海门、磐石等）',
      fact: '明廷在浙江沿海设置卫所，修筑城垣、烽堠，防御倭寇。',
      meaning: '形成从杭州湾到瓯江口的海防链条，深刻影响沿海聚落分布。' },
    { era: 6, lon: 121.48, lat: 29.94, title: '迁界海禁', time: '清顺治十八年（1661年）', place: '浙江沿海',
      fact: '清廷为切断海上抗清势力，颁布迁界令，勒令沿海居民内迁。',
      meaning: '沿海经济一度凋敝，渔业与海上贸易受到重创。' },
    { era: 6, lon: 121.61, lat: 29.83, title: '开海设关', time: '康熙二十三年至二十四年（1684—1685年）', place: '宁波',
      fact: '清廷开放海禁，次年设浙海关于宁波。',
      meaning: '宁波重新成为合法贸易口岸，为近代开埠埋下伏笔。' },
    // 近代
    { era: 7, lon: 121.56, lat: 29.90, title: '宁波开埠', time: '1844年', place: '宁波江北岸',
      fact: '依据《南京条约》，宁波作为五口通商口岸之一正式开埠，江北岸设领事馆与洋行。',
      meaning: '浙江被迫纳入近代国际贸易体系，城市空间向江岸扩展。' },
    { era: 7, lon: 120.75, lat: 30.72, title: '沪杭铁路通车', time: '1909年', place: '上海—嘉兴—杭州',
      fact: '沪杭铁路建成通车，连接上海与杭州。',
      meaning: '铁路逐步取代运河成为长三角主要运输方式，沿线城镇兴起。' },
    { era: 7, lon: 120.14, lat: 30.16, title: '钱塘江大桥', time: '1937年9月', place: '杭州钱塘江',
      fact: '茅以升主持设计建造的钱塘江大桥建成，为中国自行设计建造的第一座双层式铁路、公路两用桥。',
      meaning: '中国近代桥梁工程的里程碑；抗战中曾被炸毁，战后修复。' },
    // 当代
    { era: 8, lon: 121.55, lat: 29.88, title: '宁波对外开放', time: '1984年', place: '宁波',
      fact: '宁波被列为全国14个沿海开放城市之一。',
      meaning: '宁波港与临港产业进入快速发展期。' },
    { era: 8, lon: 121.00, lat: 30.42, title: '杭州湾跨海大桥', time: '2008年5月', place: '嘉兴海盐—宁波慈溪',
      fact: '杭州湾跨海大桥建成通车，全长约36公里。',
      meaning: '缩短杭州湾南北通行时间，推动长三角一体化。' },
    { era: 8, lon: 121.85, lat: 30.02, title: '舟山跨海大桥', time: '2009年12月', place: '宁波镇海—舟山',
      fact: '舟山跨海大桥（含金塘大桥等）建成通车。',
      meaning: '结束舟山与大陆主要依靠轮渡的历史。' },
    { era: 8, lon: 121.87, lat: 29.93, title: '宁波舟山港一体化', time: '2015年', place: '宁波北仑—舟山',
      fact: '宁波舟山港集团成立，两港一体化运营。',
      meaning: '港口货物吞吐量长期位居世界前列，成为浙江开放型经济的枢纽。' }
  ];

  return {
    MAP, toX, toZ,
    DISTRICTS, ERAS, CITIES, FEATURES, ITEMS, EVENTS
  };
})();
