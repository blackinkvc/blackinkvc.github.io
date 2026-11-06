/* =========================================================
   历史灾害摘编（本地目录，非全量编年）
   来源：NOAA/NCEI 全球显著地震目录、Smithsonian GVP 全球火山活动数据库、
   USGS 历史地震与古地震研究、EM-DAT 类灾情统计（引用）、公开史料与学术研究。
   坐标精度分三级；古代事件坐标多为区域级近似，伤亡数字存在争议的按区间标注。
   ========================================================= */
(function () {
  'use strict';
  const HZ = window.HZ = window.HZ || {};
  const META = HZ.HAZARD_META || {};
  const NCEI = 'https://www.ncei.noaa.gov/products/significant-earthquake-database';
  const GVP = 'https://volcano.si.edu/';
  const USGS = 'https://earthquake.usgs.gov/earthquakes/search/';
  const EM = 'https://www.emdat.be/';

  // precision: 1 点级（约 10–50 千米） 2 区域级（约 100–200 千米） 3 国家级/推测（约 300–800 千米）
  const PRECISION = {
    1: '点级（约 10–50 千米）',
    2: '区域级（约 100–200 千米）',
    3: '国家级 / 推测（约 300–800 千米）'
  };

  const RAW = [
    {
      id: 'h-464-sparta', type: 'earthquake', year: -464, lat: 37.08, lon: 22.43, mag: 7.2,
      title: '斯巴达地震', place: '希腊 斯巴达', severity: 80, precision: 3,
      impact: '斯巴达城邦建筑大面积损毁，被视为希洛人起义的诱因之一。',
      casualties: '约 2 万人（古代文献估计，现代研究存疑）',
      source: '古希腊史料 · 学术研究', sourceUrl: NCEI,
      note: '震级为现代研究反演估算值，非仪器记录。'
    },
    {
      id: 'h-373-helike', type: 'tsunami', year: -373, lat: 38.15, lon: 22.15, waveHeightM: 6,
      title: '赫利克地震海啸', place: '希腊 科林斯湾', severity: 70, precision: 3,
      impact: '赫利克城在地震与随后的海啸中沉入科林斯湾。',
      casualties: '城市毁灭，具体人数不明',
      source: '古希腊史料 · 学术研究', sourceUrl: NCEI,
      note: '事件存在性来自古典文献，具体位置由考古与地貌研究推测。'
    },
    {
      id: 'h-62-pompeii', type: 'earthquake', year: 62, lat: 40.75, lon: 14.49, mag: 5.9,
      title: '庞贝地震', place: '意大利 庞贝', severity: 55, precision: 2,
      impact: '庞贝、赫库兰尼姆与那不勒斯湾多座城镇受损，为 79 年喷发前的震群之一。',
      casualties: '人数不明', source: '古罗马史料 · 考古研究', sourceUrl: NCEI,
      note: '震级为估算值。'
    },
    {
      id: 'h-79-vesuvius', type: 'volcano', year: 79, lat: 40.82, lon: 14.43,
      title: '维苏威火山喷发', place: '意大利 庞贝 / 赫库兰尼姆', severity: 80, precision: 2,
      impact: '庞贝与赫库兰尼姆被火山灰与碎屑流掩埋，城市形态因火山灰得以保存。',
      casualties: '约 1.6 万（现代考古估计，存疑）',
      source: 'Smithsonian GVP（全球火山活动数据库）· 考古研究', sourceUrl: GVP,
      note: '喷发日期在后世文献中记为 8 月，近年研究倾向 10 月，仍存争议。'
    },
    {
      id: 'h-365-crete', type: 'tsunami', year: 365, lat: 35.1, lon: 23.0, mag: 8.3, waveHeightM: 10,
      title: '克里特地震与东地中海海啸', place: '希腊 克里特岛西南', severity: 95, precision: 3,
      impact: '东地中海大范围海啸，克里特沿海城市与埃及亚历山大港受损。',
      casualties: '数千至数万（史料零散，争议较大）',
      source: 'NOAA/NCEI 历史地震目录 · 学术研究', sourceUrl: NCEI,
      note: '震中与震级为现代研究推测，海啸影响范围来自多地史料交叉比对。'
    },
    {
      id: 'h-526-antioch', type: 'earthquake', year: 526, lat: 36.2, lon: 36.16, mag: 7.0,
      title: '安条克地震', place: '土耳其 安条克', severity: 95, precision: 3,
      impact: '安条克城大面积倒塌，波及叙利亚北部与东地中海沿岸。',
      casualties: '约 25 万（古代记载；现代研究认为可能高估）',
      source: '史料记载 · NOAA/NCEI 目录', sourceUrl: NCEI,
      note: '古代人口与伤亡统计常含周边地区，数字口径不明。'
    },
    {
      id: 'h-856-damghan', type: 'earthquake', year: 856, lat: 36.17, lon: 54.34, mag: 7.9,
      title: '达姆甘地震', place: '伊朗 达姆甘', severity: 90, precision: 3,
      impact: '伊朗东北部多座城镇毁灭。',
      casualties: '约 20 万（史料记载，存疑）',
      source: '史料记载 · NOAA/NCEI 目录', sourceUrl: NCEI,
      note: '震级为历史地震研究估算值。'
    },
    {
      id: 'h-1138-aleppo', type: 'earthquake', year: 1138, lat: 36.2, lon: 37.15, mag: 7.1,
      title: '阿勒颇地震', place: '叙利亚 阿勒颇', severity: 90, precision: 3,
      impact: '阿勒颇及周边城镇严重破坏。',
      casualties: '约 23 万（史料记载，存疑）',
      source: '史料记载 · NOAA/NCEI 目录', sourceUrl: NCEI,
      note: '伤亡数字来自编年史，统计范围可能包含多次余震。'
    },
    {
      id: 'h-1290-zhili', type: 'earthquake', year: 1290, lat: 39.5, lon: 116.0, mag: 6.8,
      title: '元朝直隶地震', place: '中国 河北 直隶', severity: 65, precision: 3,
      impact: '直隶（今河北一带）城郭与民居倒塌。',
      casualties: '数千（史料记载）',
      source: '《元史》等史料 · NOAA/NCEI', sourceUrl: NCEI,
      note: '震中只能定位到区域，具体断裂位置不明。'
    },
    {
      id: 'h-1303-hongdong', type: 'earthquake', year: 1303, lat: 36.3, lon: 111.6, mag: 8.0,
      title: '洪洞地震', place: '中国 山西 洪洞 / 赵城', severity: 95, precision: 2,
      impact: '山西洪洞、赵城一带严重破坏，波及数省。',
      casualties: '约 20 万（史料记载，存疑）',
      source: '《元史》等史料 · NOAA/NCEI', sourceUrl: NCEI,
      note: '伤亡数字包含次生灾害与后续饥荒，统计口径不明。'
    },
    {
      id: 'h-1303-crete', type: 'tsunami', year: 1303, lat: 35.0, lon: 27.0, waveHeightM: 8,
      title: '东地中海海啸', place: '希腊 克里特岛东南', severity: 80, precision: 3,
      impact: '克里特与埃及沿海遭海啸侵袭，亚历山大港受损。',
      casualties: '数千（史料记载）',
      source: 'NOAA/NCEI 历史海啸目录 · 学术研究', sourceUrl: NCEI,
      note: '海啸源区与波高为研究推测。'
    },
    {
      id: 'h-1556-huaxian', type: 'earthquake', year: 1556, lat: 34.5, lon: 109.7, mag: 8.0,
      title: '华县大地震', place: '中国 陕西 华县', severity: 100, precision: 2,
      dateText: '明嘉靖三十四年腊月十二（1556 年 1 月 23 日）',
      impact: '关中地区城镇与窑洞大量倒塌，波及陕西、山西、河南等省。',
      casualties: '约 83 万（《明史》记载，含饥荒、瘟疫与次生灾害；学界对统计口径有争议）',
      source: '《明史》· NOAA/NCEI 历史地震目录', sourceUrl: NCEI,
      note: '这是中国历史上死亡人数记载最多的一次地震，数字长期被引用，但统计范围与口径仍有争议。'
    },
    {
      id: 'h-1668-tancheng', type: 'earthquake', year: 1668, lat: 34.8, lon: 118.4, mag: 8.5,
      title: '郯城地震', place: '中国 山东 郯城 / 莒县', severity: 95, precision: 2,
      impact: '山东郯城—莒县一带极震区破坏严重，波及华东多省。',
      casualties: '约 5 万（史料记载，存疑）',
      source: '清代史料 · NOAA/NCEI 历史地震目录', sourceUrl: NCEI,
      note: '震级为现代研究估算值。'
    },
    {
      id: 'h-1693-sicily', type: 'earthquake', year: 1693, lat: 37.5, lon: 15.1, mag: 7.4,
      title: '西西里地震', place: '意大利 西西里岛东南', severity: 90, precision: 2,
      impact: '西西里东南部多座城市被毁，并触发海啸。',
      casualties: '约 6 万（史料估计）',
      source: 'NOAA/NCEI 历史地震目录 · 学术研究', sourceUrl: NCEI,
      note: '死亡数字包含海啸与后续疫病。'
    },
    {
      id: 'h-1700-cascadia', type: 'tsunami', year: 1700, lat: 45.0, lon: -124.0, waveHeightM: 10,
      title: '卡斯卡迪亚地震海啸', place: '北美 卡斯卡迪亚俯冲带', severity: 85, precision: 3,
      impact: '卡斯卡迪亚俯冲带大地震引发海啸，日本沿海有远场海啸记录。',
      casualties: '原住民社区受重创，具体人数不明',
      source: 'USGS 古地震研究 · 日本史料', sourceUrl: USGS,
      note: '事件由海岸沉积物与日本海啸记录反推，震中为推测位置。'
    },
    {
      id: 'h-1755-lisbon', type: 'tsunami', year: 1755, lat: 36.5, lon: -11.0, mag: 8.5, waveHeightM: 12,
      title: '里斯本大地震与海啸', place: '葡萄牙 里斯本西南海域', severity: 100, precision: 2,
      dateText: '1755 年 11 月 1 日',
      impact: '里斯本大面积焚毁，海啸波及葡萄牙、西班牙与北非海岸。',
      casualties: '约 6–10 万（不同研究估计区间）',
      source: 'NOAA/NCEI 历史地震目录 · 学术研究', sourceUrl: NCEI,
      note: '震中位于离岸海域，具体位置与震级仍由现代研究反演。'
    },
    {
      id: 'h-1783-laki', type: 'volcano', year: 1783, lat: 64.07, lon: -18.63,
      title: '拉基火山喷发', place: '冰岛 拉基裂隙', severity: 80, precision: 2,
      impact: '火山雾与酸雨导致冰岛牲畜大量死亡、欧洲农作物歉收。',
      casualties: '冰岛约 1/4 人口死于饥荒（约 2.5 万，间接死亡）',
      source: 'Smithsonian GVP · 历史研究', sourceUrl: GVP,
      note: '死亡主要来自饥荒与疾病，不是喷发直接致死。'
    },
    {
      id: 'h-1811-newmadrid', type: 'earthquake', year: 1811, lat: 36.5, lon: -89.5, mag: 7.7,
      title: '新马德里地震', place: '美国 密西西比河流域', severity: 55, precision: 2,
      impact: '强烈震动改变河流与地貌；当时区域人口稀少。',
      casualties: '直接伤亡很少，具体不明',
      source: 'USGS 历史地震目录', sourceUrl: USGS,
      note: '1811–1812 年为震群，此处合并为一次代表性事件。'
    },
    {
      id: 'h-1815-tambora', type: 'volcano', year: 1815, lat: -8.25, lon: 118.0,
      title: '坦博拉火山喷发', place: '印度尼西亚 松巴哇岛', severity: 95, precision: 2,
      impact: '喷发与火山碎屑流摧毁周边村落，次年全球气候异常（“无夏之年”）。',
      casualties: '约 1 万直接死亡；饥荒与疾病间接死亡更多（估计存疑）',
      source: 'Smithsonian GVP（全球火山活动数据库）', sourceUrl: GVP,
      note: '间接死亡遍及更广区域，统计困难。'
    },
    {
      id: 'h-1855-edo', type: 'earthquake', year: 1855, lat: 35.7, lon: 139.7, mag: 7.0,
      title: '江户地震', place: '日本 江户（今东京）', severity: 65, precision: 2,
      impact: '江户大量房屋倒塌并引发火灾。',
      casualties: '约 4000–6000（史料估计）',
      source: '日本史料 · NOAA/NCEI', sourceUrl: NCEI,
      note: '震级为历史研究估算值。'
    },
    {
      id: 'h-1871-peshtigo', type: 'wildfire', year: 1871, lat: 45.05, lon: -87.85,
      title: '佩什蒂戈野火', place: '美国 威斯康星州', severity: 75, precision: 2,
      impact: '森林大火横扫城镇，与同期芝加哥大火同夜发生。',
      casualties: '约 1500–2500（估计区间）',
      source: '历史档案 · EM-DAT 类统计', sourceUrl: EM,
      note: '死亡数字来自地方档案与后世研究，统计不完整。'
    },
    {
      id: 'h-1883-krakatoa', type: 'volcano', year: 1883, lat: -6.1, lon: 105.4, waveHeightM: 30,
      title: '喀拉喀托火山喷发与海啸', place: '印度尼西亚 巽他海峡', severity: 100, precision: 2,
      impact: '火山崩塌引发海啸，爪哇与苏门答腊沿海村镇被毁；火山灰影响全球气候。',
      casualties: '约 3.6 万（以海啸死亡为主）',
      source: 'Smithsonian GVP · NOAA/NCEI', sourceUrl: GVP,
      note: '海啸由火山侧向崩塌触发，与构造地震海啸机制不同。'
    },
    {
      id: 'h-1887-yellowriver', type: 'flood', year: 1887, lat: 34.8, lon: 113.6,
      title: '黄河决口洪水', place: '中国 河南 / 安徽', severity: 95, precision: 3, areaR: 3.0,
      impact: '黄河决口，河南、安徽大片农田与村镇被淹。',
      casualties: '约 90 万（历史估计，统计存疑）',
      source: '史料 · EM-DAT 类灾情统计', sourceUrl: EM,
      note: '死亡数字包含饥荒与疫病，且当时没有系统灾情统计。'
    },
    {
      id: 'h-1900-galveston', type: 'cyclone', year: 1900, lat: 29.3, lon: -94.8,
      title: '加尔维斯顿飓风', place: '美国 得克萨斯州 加尔维斯顿', severity: 85, precision: 1,
      impact: '风暴潮淹没加尔维斯顿岛城，促成当地修建海堤。',
      casualties: '约 6000–12000（估计区间）',
      source: 'NOAA 历史飓风记录', sourceUrl: 'https://www.nhc.noaa.gov/data/',
      note: '1900 年尚无卫星，路径由船只与气象站记录重建。'
    },
    {
      id: 'h-1906-sf', type: 'earthquake', year: 1906, lat: 37.75, lon: -122.55, mag: 7.9,
      title: '旧金山大地震', place: '美国 加利福尼亚 旧金山', severity: 90, precision: 1,
      impact: '旧金山建筑倒塌并引发大火，城市大面积焚毁。',
      casualties: '约 3000（早期官方数字；现代研究约 3000–4000）',
      source: 'USGS 历史地震目录', sourceUrl: USGS,
      note: '大量死亡由震后火灾造成。'
    },
    {
      id: 'h-1908-messina', type: 'tsunami', year: 1908, lat: 38.1, lon: 15.6, waveHeightM: 12,
      title: '墨西拿地震海啸', place: '意大利 墨西拿海峡', severity: 100, precision: 2,
      impact: '墨西拿海峡两岸城市被地震与海啸摧毁。',
      casualties: '约 7–8 万（估计区间）',
      source: 'NOAA/NCEI 历史地震目录 · 学术研究', sourceUrl: NCEI,
      note: '伤亡数字来自多国救援与地方档案汇总。'
    },
    {
      id: 'h-1920-haiyuan', type: 'earthquake', year: 1920, lat: 36.5, lon: 105.5, mag: 8.5,
      title: '海原大地震', place: '中国 宁夏 海原', severity: 100, precision: 2,
      impact: '黄土高原滑坡与窑洞坍塌造成巨大伤亡，地貌大面积改变。',
      casualties: '约 23–27 万（估计区间）',
      source: 'USGS / NOAA/NCEI 历史目录', sourceUrl: NCEI,
      note: '死亡数字包含滑坡与严寒等次生因素。'
    },
    {
      id: 'h-1923-kanto', type: 'earthquake', year: 1923, lat: 35.3, lon: 139.5, mag: 7.9,
      title: '关东大地震', place: '日本 东京 / 横滨', severity: 100, precision: 1,
      impact: '东京、横滨大火与建筑倒塌，城市大面积焚毁。',
      casualties: '约 10.5 万',
      source: '日本气象厅史料 · USGS', sourceUrl: USGS,
      note: '多数死亡由震后火灾造成。'
    },
    {
      id: 'h-1931-chinaflood', type: 'flood', year: 1931, lat: 30.5, lon: 114.3,
      title: '江淮大水灾', place: '中国 长江 / 淮河流域', severity: 100, precision: 3, areaR: 4.0,
      impact: '长江、淮河流域特大洪水，武汉等城市被淹，农田大面积绝收。',
      casualties: '约 40–400 万（统计口径差异极大，存疑）',
      source: '史料 · EM-DAT 类灾情统计', sourceUrl: EM,
      note: '死亡数字包含溺亡、饥荒与疫病，不同研究差异极大，页面按区间标注。'
    },
    {
      id: 'h-1946-aleutian', type: 'tsunami', year: 1946, lat: 51.0, lon: -158.0, waveHeightM: 10,
      title: '阿留申海啸', place: '太平洋 阿留申群岛', severity: 65, precision: 1,
      impact: '阿留申群岛地震引发太平洋海啸，夏威夷等地受损。',
      casualties: '约 160（夏威夷等地）',
      source: 'NOAA/NCEI 历史海啸目录', sourceUrl: NCEI,
      note: '该事件推动了太平洋海啸预警体系的建立。'
    },
    {
      id: 'h-1950-assam', type: 'earthquake', year: 1950, lat: 28.5, lon: 96.0, mag: 8.6,
      title: '阿萨姆地震', place: '中国 藏南 / 印度 阿萨姆', severity: 85, precision: 2,
      impact: '山区大规模滑坡与河流改道，影响持续数年。',
      casualties: '约 1500–3000（估计区间）',
      source: 'USGS 历史目录', sourceUrl: USGS,
      note: '震中位于山区，早期通信与统计受限。'
    },
    {
      id: 'h-1953-northsea', type: 'flood', year: 1953, lat: 52.0, lon: 4.0,
      title: '北海风暴潮洪水', place: '荷兰 / 英国 / 比利时 沿海', severity: 85, precision: 2, areaR: 3.2,
      impact: '北海风暴潮淹没沿海低地，推动荷兰三角洲工程。',
      casualties: '约 2500（荷兰与英国合计）',
      source: 'EM-DAT 类统计 · 各国档案', sourceUrl: EM,
      note: '各国统计口径不同，此处合计为约数。'
    },
    {
      id: 'h-1960-valdivia', type: 'tsunami', year: 1960, lat: -39.8, lon: -73.0, mag: 9.5, waveHeightM: 20,
      title: '智利大地震与海啸', place: '智利 瓦尔迪维亚', severity: 100, precision: 1,
      impact: '智利南部大范围破坏，海啸横跨太平洋抵达日本、夏威夷。',
      casualties: '约 1000–6000（含海啸，统计口径不一）',
      source: 'USGS · NOAA/NCEI', sourceUrl: USGS,
      note: '震级 9.5 为现代重新测定值。'
    },
    {
      id: 'h-1963-vajont', type: 'landslide', year: 1963, lat: 46.27, lon: 12.33, areaR: 2.0,
      title: '瓦伊昂水库滑坡', place: '意大利 瓦伊昂水库', severity: 80, precision: 1,
      impact: '库岸滑坡体高速涌入水库，洪水越过坝顶淹没下游村镇。',
      casualties: '约 1900',
      source: '公开工程事故档案', sourceUrl: 'https://www.ena.gov.it/',
      note: '这是工程地质领域的典型案例，不是自然诱发的孤立滑坡。'
    },
    {
      id: 'h-1964-alaska', type: 'earthquake', year: 1964, lat: 61.0, lon: -147.7, mag: 9.2,
      title: '阿拉斯加大地震', place: '美国 阿拉斯加 安克雷奇', severity: 90, precision: 1,
      impact: '安克雷奇等地破坏，触发局部海啸与地面液化。',
      casualties: '约 130',
      source: 'USGS 历史地震目录', sourceUrl: USGS,
      note: '震级为矩震级重新测定值。'
    },
    {
      id: 'h-1970-bhola', type: 'cyclone', year: 1970, lat: 21.5, lon: 90.5,
      title: '博拉气旋', place: '孟加拉湾 孟加拉国沿海', severity: 100, precision: 3,
      impact: '风暴潮淹没低洼岛屿与沿海平原，是近代最致命的热带气旋之一。',
      casualties: '约 30–50 万（估计区间）',
      source: 'EM-DAT 类统计 · 历史气象记录', sourceUrl: EM,
      note: '当时缺乏卫星与地面观测，路径与强度由有限记录重建。'
    },
    {
      id: 'h-1976-tangshan', type: 'earthquake', year: 1976, lat: 39.63, lon: 118.1, mag: 7.6,
      title: '唐山大地震', place: '中国 河北 唐山', severity: 100, precision: 1,
      dateText: '1976 年 7 月 28 日',
      impact: '唐山市区建筑几乎全部倒塌，波及天津、北京。',
      casualties: '约 24 万（中国官方数字；部分研究估计更高）',
      source: 'USGS · 中国官方统计', sourceUrl: USGS,
      note: '不同研究对死亡数字有差异，页面采用官方公布值并注明。'
    },
    {
      id: 'h-1980-sthelens', type: 'volcano', year: 1980, lat: 46.2, lon: -122.18,
      title: '圣海伦斯火山喷发', place: '美国 华盛顿州', severity: 75, precision: 1,
      impact: '山体侧向崩塌式喷发，火山灰扩散至美国多州。',
      casualties: '57（官方数字）',
      source: 'USGS · Smithsonian GVP', sourceUrl: GVP,
      note: '喷发前有明显前兆，属于被密切监测的现代案例。'
    },
    {
      id: 'h-1985-ruiz', type: 'landslide', year: 1985, lat: 4.89, lon: -75.32, areaR: 2.4,
      title: '内瓦多·德尔·鲁伊斯火山泥流', place: '哥伦比亚 阿尔梅罗', severity: 90, precision: 1,
      impact: '火山喷发触发火山泥流（lahar），阿尔梅罗镇被掩埋。',
      casualties: '约 2.3 万',
      source: 'USGS · Smithsonian GVP', sourceUrl: GVP,
      note: '灾害主体是火山泥流，页面归入“滑坡 / 泥石流”图层以示形态。'
    },
    {
      id: 'h-1991-pinatubo', type: 'volcano', year: 1991, lat: 15.13, lon: 120.35,
      title: '皮纳图博火山喷发', place: '菲律宾 吕宋岛', severity: 85, precision: 1,
      impact: '大规模喷发，火山灰覆盖吕宋岛，硫酸盐气溶胶使全球气温短暂下降。',
      casualties: '约 300（直接）；数百万人受火山灰影响',
      source: 'USGS · Smithsonian GVP', sourceUrl: GVP,
      note: '直接死亡人数与受影响人口需分开理解。'
    },
    {
      id: 'h-1991-bangladesh', type: 'cyclone', year: 1991, lat: 21.0, lon: 90.0,
      title: '孟加拉国气旋', place: '孟加拉湾 孟加拉国沿海', severity: 95, precision: 2,
      impact: '强热带气旋引发风暴潮，沿海岛屿与低地被淹。',
      casualties: '约 13.9 万（估计）',
      source: 'EM-DAT 类统计', sourceUrl: EM,
      note: '死亡数字来自灾后统计，偏远岛屿可能漏计。'
    },
    {
      id: 'h-1995-kobe', type: 'earthquake', year: 1995, lat: 34.68, lon: 135.18, mag: 6.9,
      title: '阪神大地震', place: '日本 神户', severity: 90, precision: 1,
      dateText: '1995 年 1 月 17 日',
      impact: '神户市区建筑与高架设施倒塌，引发大火。',
      casualties: '约 6400',
      source: 'USGS · 日本官方统计', sourceUrl: USGS,
      note: '震级为日本气象厅与 USGS 测定值，略有差异。'
    },
    {
      id: 'h-1998-chinaflood', type: 'flood', year: 1998, lat: 30.5, lon: 114.3, areaR: 3.0,
      title: '1998 年长江洪水', place: '中国 长江流域', severity: 85, precision: 2,
      impact: '长江流域特大洪水，多地堤垸溃决，军民大规模抗洪。',
      casualties: '约 3000–4000（官方统计）',
      source: 'EM-DAT 类统计 · 官方通报', sourceUrl: EM,
      note: '伤亡与受灾人口统计口径不同，此处只列死亡约数。'
    },
    {
      id: 'h-1999-izmit', type: 'earthquake', year: 1999, lat: 40.7, lon: 29.9, mag: 7.6,
      title: '伊兹米特地震', place: '土耳其 伊兹米特', severity: 85, precision: 1,
      impact: '土耳其西北部工业区建筑倒塌，暴露建筑质量问题。',
      casualties: '约 1.7 万',
      source: 'USGS · 土耳其官方统计', sourceUrl: USGS,
      note: '余震与后续灾害造成的伤亡另计。'
    },
    {
      id: 'h-2004-indianocean', type: 'tsunami', year: 2004, lat: 3.3, lon: 95.8, mag: 9.1, waveHeightM: 30,
      title: '印度洋大海啸', place: '印度尼西亚 苏门答腊西北海域', severity: 100, precision: 1,
      dateText: '2004 年 12 月 26 日',
      impact: '印度洋大地震引发跨洋海啸，印尼、斯里兰卡、泰国、印度等十余国沿海受灾。',
      casualties: '约 22–23 万（各国统计口径不一）',
      source: 'USGS · NOAA/NCEI 海啸目录', sourceUrl: NCEI,
      note: '这是首次被全球实时关注的大规模海啸，也推动了印度洋预警系统建设。'
    },
    {
      id: 'h-2005-kashmir', type: 'earthquake', year: 2005, lat: 34.4, lon: 73.5, mag: 7.6,
      title: '克什米尔地震', place: '巴基斯坦 / 印度 克什米尔', severity: 90, precision: 1,
      impact: '克什米尔山区村镇大面积倒塌，冬季救援困难。',
      casualties: '约 7.3–8.6 万（不同来源估计）',
      source: 'USGS · 公开统计', sourceUrl: USGS,
      note: '巴基斯坦与印度公布的伤亡数字不同，页面按区间标注。'
    },
    {
      id: 'h-2005-katrina', type: 'cyclone', year: 2005, lat: 29.95, lon: -90.07,
      title: '卡特里娜飓风', place: '美国 新奥尔良', severity: 85, precision: 1,
      impact: '风暴潮导致新奥尔良堤防溃决，城市大面积被淹。',
      casualties: '约 1200–1800（统计口径不一）',
      source: 'NOAA 历史飓风记录', sourceUrl: 'https://www.nhc.noaa.gov/data/',
      note: '死亡统计跨州且包含灾后间接死亡。'
    },
    {
      id: 'h-2008-wenchuan', type: 'earthquake', year: 2008, lat: 31.0, lon: 103.4, mag: 7.9,
      title: '汶川大地震', place: '中国 四川 汶川 / 北川', severity: 100, precision: 1,
      dateText: '2008 年 5 月 12 日',
      impact: '汶川、北川等山区城镇与道路严重破坏，形成大量堰塞湖。',
      casualties: '约 6.9 万死亡、1.8 万失踪（中国官方数字）',
      source: 'USGS · 中国官方统计', sourceUrl: USGS,
      note: '震级 7.9 为 USGS 测定值，中国地震台网测定为面波震级 8.0。'
    },
    {
      id: 'h-2010-haiti', type: 'earthquake', year: 2010, lat: 18.5, lon: -72.5, mag: 7.0,
      title: '海地地震', place: '海地 太子港', severity: 95, precision: 1,
      impact: '太子港建筑大面积倒塌，救援与卫生系统崩溃。',
      casualties: '约 22 万（官方估计；部分研究认为存在不确定性）',
      source: 'USGS · 海地官方统计', sourceUrl: USGS,
      note: '死亡数字长期存在争议，页面采用官方估计并标明不确定性。'
    },
    {
      id: 'h-2011-tohoku', type: 'tsunami', year: 2011, lat: 38.3, lon: 142.4, mag: 9.1, waveHeightM: 40,
      title: '东日本大地震与海啸', place: '日本 东北沿海', severity: 100, precision: 1,
      dateText: '2011 年 3 月 11 日',
      impact: '日本东北沿海遭海啸重创，并引发福岛核事故。',
      casualties: '约 1.8 万死亡与失踪（日本官方数字）',
      source: 'USGS · 日本官方统计', sourceUrl: USGS,
      note: '海啸浪高在局部海岸超过 30 米，页面中的波高为规模示意。'
    },
    {
      id: 'h-2011-thailand', type: 'flood', year: 2011, lat: 14.0, lon: 100.5, areaR: 2.6,
      title: '泰国大洪水', place: '泰国 湄南河流域', severity: 75, precision: 2,
      impact: '湄南河流域长期洪水，曼谷郊区工业园被淹。',
      casualties: '约 800+（官方统计）',
      source: 'EM-DAT 类统计', sourceUrl: EM,
      note: '经济损失巨大，但页面只统计人员死亡。'
    },
    {
      id: 'h-2013-haiyan', type: 'cyclone', year: 2013, lat: 11.0, lon: 125.0,
      title: '台风海燕', place: '菲律宾 东米沙鄢', severity: 95, precision: 1,
      impact: '超强台风“海燕”（Yolanda）引发风暴潮，菲律宾中部沿海城镇被毁。',
      casualties: '约 6300（菲律宾官方）',
      source: 'NOAA 路径 · 菲律宾官方统计', sourceUrl: 'https://www.nhc.noaa.gov/data/',
      note: '不同机构对强度评估略有差异。'
    },
    {
      id: 'h-2015-nepal', type: 'earthquake', year: 2015, lat: 28.2, lon: 84.7, mag: 7.8,
      title: '尼泊尔地震', place: '尼泊尔 加德满都西北', severity: 90, precision: 1,
      impact: '加德满都以北山区村镇倒塌，珠峰发生雪崩。',
      casualties: '约 9000',
      source: 'USGS · 尼泊尔官方统计', sourceUrl: USGS,
      note: '死亡数字为尼泊尔官方汇总。'
    },
    {
      id: 'h-2018-sulawesi', type: 'tsunami', year: 2018, lat: -0.2, lon: 119.8, waveHeightM: 6,
      title: '苏拉威西海啸', place: '印度尼西亚 帕卢湾', severity: 85, precision: 1,
      impact: '帕卢湾地震引发海啸与土壤液化，沿海社区被毁。',
      casualties: '约 4000+（印尼官方）',
      source: 'USGS · 印尼官方统计', sourceUrl: USGS,
      note: '海啸由近岸滑坡与局部地形放大，预警时间极短。'
    },
    {
      id: 'h-2019-australiafire', type: 'wildfire', year: 2019.9, lat: -33.0, lon: 150.0,
      title: '澳大利亚黑色夏季林火', place: '澳大利亚 东南部', severity: 80, precision: 3,
      impact: '澳大利亚东南部大规模林火，野生动物与生态系统损失巨大。',
      casualties: '直接死亡约 33 人（含消防人员）',
      source: '公开消防与政府统计', sourceUrl: 'https://www.ffm.vic.gov.au/',
      note: '火灾跨数月、多地点，坐标为区域代表点。'
    },
    {
      id: 'h-2022-hunga', type: 'volcano', year: 2022, lat: -20.55, lon: -175.4, waveHeightM: 15,
      title: '汤加海底火山喷发', place: '汤加 洪阿哈阿帕伊岛', severity: 70, precision: 1,
      impact: '海底火山剧烈喷发，引发太平洋海啸与大气冲击波。',
      casualties: '约 6 人（直接）',
      source: 'Smithsonian GVP · NOAA', sourceUrl: GVP,
      note: '海啸影响远达太平洋沿岸多国。'
    },
    {
      id: 'h-2022-pakistan', type: 'flood', year: 2022, lat: 27.7, lon: 68.9, areaR: 3.2,
      title: '巴基斯坦洪水', place: '巴基斯坦 信德省 / 俾路支省', severity: 85, precision: 2,
      impact: '季风异常降雨导致全国大范围洪涝，农田与基础设施受重创。',
      casualties: '约 1700+（官方统计）',
      source: 'EM-DAT 类统计', sourceUrl: EM,
      note: '洪水覆盖范围极广，坐标为区域代表点。'
    },
    {
      id: 'h-2023-turkey', type: 'earthquake', year: 2023, lat: 37.2, lon: 37.0, mag: 7.8,
      title: '土耳其—叙利亚地震', place: '土耳其 卡赫拉曼马拉什 / 叙利亚 阿勒颇', severity: 100, precision: 1,
      dateText: '2023 年 2 月 6 日',
      impact: '土耳其南部与叙利亚北部城市大面积倒塌，随后发生强余震。',
      casualties: '约 5.9 万（两国合计，统计口径不一）',
      source: 'USGS · 两国官方统计', sourceUrl: USGS,
      note: '两国统计方式不同，页面按合计约数处理。'
    },
    {
      id: 'h-2023-derna', type: 'flood', year: 2023.7, lat: 32.77, lon: 22.64, areaR: 2.4,
      title: '德尔纳洪水', place: '利比亚 德尔纳', severity: 90, precision: 2,
      impact: '暴雨导致两座大坝溃决，德尔纳市区沿河谷被洪水冲毁。',
      casualties: '约 1.1–2 万（统计存疑）',
      source: 'EM-DAT 类统计 · 公开通报', sourceUrl: EM,
      note: '失踪与死亡数字长期未完全核实，页面按区间标注。'
    },
    {
      id: 'h-2023-maui', type: 'wildfire', year: 2023.6, lat: 20.8, lon: -156.3,
      title: '毛伊岛野火', place: '美国 夏威夷 拉海纳', severity: 70, precision: 1,
      impact: '拉海纳镇被野火迅速焚毁，成为夏威夷近代最严重的火灾之一。',
      casualties: '约 100+（官方统计）',
      source: '公开政府统计', sourceUrl: 'https://www.mauicounty.gov/',
      note: '死亡数字在灾后数月内持续修正。'
    },

    /* ---------------- 古代与中世纪：地中海、近东、中国 ---------------- */
    {
      id: 'h-226-rhodes', type: 'earthquake', year: -226, lat: 36.43, lon: 28.22, mag: 7.2,
      title: '罗得岛地震', place: '希腊 罗得岛', severity: 70, precision: 3,
      impact: '罗得岛与东地中海多座城市受损，罗得岛巨像在此前后倒塌。',
      casualties: '人数不明（史料零散）',
      source: '古典史料 · NOAA/NCEI 历史目录', sourceUrl: NCEI,
      note: '巨像倒塌与地震的因果关系为后世推断，具体年份仍有争议。'
    },
    {
      id: 'h-17-sardis', type: 'earthquake', year: 17, lat: 38.48, lon: 28.04, mag: 7.0,
      title: '萨第斯地震', place: '土耳其 吕底亚 萨第斯', severity: 70, precision: 3,
      impact: '萨第斯、非拉铁非等城严重破坏，罗马皇帝提比略拨款赈灾。',
      casualties: '数万（史料记载，存疑）',
      source: '古罗马史料 · NOAA/NCEI 历史目录', sourceUrl: NCEI,
      note: '震中与震级为历史地震研究反演值。'
    },
    {
      id: 'h-115-antioch', type: 'earthquake', year: 115, lat: 36.2, lon: 36.16, mag: 7.5,
      title: '安条克地震（115 年）', place: '土耳其 安条克', severity: 90, precision: 3,
      impact: '安条克及叙利亚北部城市大面积损毁，图拉真皇帝在城中经历地震。',
      casualties: '约 26 万（古代记载；现代研究认为口径过大）',
      source: '古罗马史料 · 学术研究', sourceUrl: NCEI,
      note: '伤亡统计可能包含同期战争与疫病死亡。'
    },
    {
      id: 'h-262-ephesus', type: 'earthquake', year: 262, lat: 37.94, lon: 27.34, mag: 7.0,
      title: '以弗所地震', place: '土耳其 以弗所', severity: 75, precision: 3,
      impact: '以弗所与西安纳托利亚多座城市受损，阿尔忒弥斯神庙再遭破坏。',
      casualties: '人数不明',
      source: '古典史料 · NOAA/NCEI 历史目录', sourceUrl: NCEI,
      note: '神庙最终毁损年代在学界仍有讨论。'
    },
    {
      id: 'h-551-beirut', type: 'earthquake', year: 551, lat: 33.9, lon: 35.5, mag: 7.5,
      title: '贝鲁特地震', place: '黎巴嫩 贝鲁特 / 比布鲁斯', severity: 85, precision: 3,
      impact: '贝鲁特、比布鲁斯等沿岸城市受损，并伴随东地中海海啸。',
      casualties: '数万（史料零散，存疑）',
      source: '拜占庭史料 · NOAA/NCEI 历史目录', sourceUrl: NCEI,
      note: '地震与海啸的先后顺序在不同史料中记载不一。'
    },
    {
      id: 'h-749-galilee', type: 'earthquake', year: 749, lat: 32.6, lon: 35.5, mag: 7.0,
      title: '加利利地震', place: '以色列 / 约旦 加利利与约旦河谷', severity: 85, precision: 3,
      impact: '塞佛里斯、提比哩亚等城损毁，约旦河谷多处遗址被掩埋。',
      casualties: '数万（估计）',
      source: '考古研究 · NOAA/NCEI 历史目录', sourceUrl: NCEI,
      note: '破坏层位由考古发掘推定，震中位置为区域级近似。'
    },
    {
      id: 'h-1033-ramla', type: 'earthquake', year: 1033, lat: 31.93, lon: 34.87, mag: 7.0,
      title: '拉姆拉地震', place: '以色列 拉姆拉', severity: 70, precision: 3,
      impact: '拉姆拉与耶路撒冷等地建筑破坏。',
      casualties: '数千（史料）',
      source: '中世纪史料 · 学术研究', sourceUrl: NCEI,
      note: '同一时期多次地震在史料中常被合并记载。'
    },
    {
      id: 'h-1202-syria', type: 'earthquake', year: 1202, lat: 34.1, lon: 36.1, mag: 7.6,
      title: '叙利亚大地震', place: '叙利亚 / 黎巴嫩 贝卡谷地一带', severity: 95, precision: 3,
      impact: '阿卡、提尔、大马士革等广泛破坏，震感波及塞浦路斯与埃及。',
      casualties: '数万至数十万（史料差异极大，按区间）',
      source: '中世纪编年史 · NOAA/NCEI 历史目录', sourceUrl: NCEI,
      note: '不同编年史对死亡人数的记载相差一个数量级。'
    },
    {
      id: 'h-1268-cilicia', type: 'earthquake', year: 1268, lat: 37.5, lon: 35.5, mag: 7.0,
      title: '奇里乞亚地震', place: '土耳其 奇里乞亚', severity: 80, precision: 3,
      impact: '奇里乞亚平原城镇与城堡受损，波及叙利亚北部。',
      casualties: '数万（史料，存疑）',
      source: '中世纪编年史 · 学术研究', sourceUrl: NCEI,
      note: '事件与同世纪其他地震的区分在史料中不清晰。'
    },
    {
      id: 'h-1679-sanhe', type: 'earthquake', year: 1679, lat: 39.9, lon: 117.0, mag: 8.0,
      title: '三河—平谷地震', place: '中国 河北 三河 / 北京 平谷', severity: 85, precision: 2,
      impact: '北京、三河、平谷一带城墙与民居大量倒塌。',
      casualties: '约 4.5 万（史料记载）',
      source: '清代史料 · NOAA/NCEI 历史目录', sourceUrl: NCEI,
      note: '震中位于华北平原断裂带，位置由史料与地质研究共同推定。'
    },
    {
      id: 'h-1739-yinchuan', type: 'earthquake', year: 1739, lat: 38.5, lon: 106.3, mag: 8.0,
      title: '银川—平罗地震', place: '中国 宁夏 银川 / 平罗', severity: 90, precision: 2,
      impact: '银川平原城镇与灌溉系统破坏，黄河沿岸出现地裂与砂涌。',
      casualties: '约 5 万（史料记载）',
      source: '清代史料 · 学术研究', sourceUrl: NCEI,
      note: '震级为现代研究估算值。'
    },
    {
      id: 'h-1786-kangding', type: 'earthquake', year: 1786, lat: 29.9, lon: 102.0, mag: 7.8,
      title: '康定—泸定地震', place: '中国 四川 康定', severity: 80, precision: 2,
      impact: '川西山地城镇破坏，伴有滑坡与河道阻塞。',
      casualties: '数百至数千（史料，统计不全）',
      source: '清代史料 · 学术研究', sourceUrl: NCEI,
      note: '山区人口稀疏，伤亡记录不完整。'
    },
    {
      id: 'h-1833-songming', type: 'earthquake', year: 1833, lat: 25.3, lon: 103.0, mag: 8.0,
      title: '嵩明地震', place: '中国 云南 嵩明', severity: 85, precision: 2,
      impact: '滇中地区城垣、庙宇与民居大面积倒塌。',
      casualties: '约 6700（史料记载）',
      source: '清代史料 · 学术研究', sourceUrl: NCEI,
      note: '震中位置为区域级推定。'
    },
    {
      id: 'h-1927-gulang', type: 'earthquake', year: 1927, lat: 37.5, lon: 102.8, mag: 8.0,
      title: '古浪地震', place: '中国 甘肃 古浪', severity: 90, precision: 2,
      impact: '河西走廊城镇破坏，黄土地区出现大规模滑坡。',
      casualties: '约 4 万（当时统计）',
      source: '民国档案 · USGS 历史目录', sourceUrl: USGS,
      note: '死亡数字包含滑坡与后续饥寒。'
    },
    {
      id: 'h-1933-diexi', type: 'earthquake', year: 1933, lat: 32.0, lon: 103.7, mag: 7.5,
      title: '叠溪地震', place: '中国 四川 茂县 叠溪', severity: 80, precision: 2,
      impact: '岷江两岸山体崩塌形成堰塞湖，溃决后洪水冲毁下游村镇。',
      casualties: '约 6800（含堰塞湖溃决）',
      source: '民国档案 · USGS 历史目录', sourceUrl: USGS,
      note: '直接震害与次生洪灾的死亡数字需分开理解。'
    },
    {
      id: 'h-1970-tonghai', type: 'earthquake', year: 1970, lat: 24.1, lon: 102.7, mag: 7.1,
      title: '通海地震', place: '中国 云南 通海', severity: 85, precision: 1,
      impact: '滇中城乡建筑大量倒塌，灾区交通与通信中断。',
      casualties: '约 1.5 万（当时统计）',
      source: '中国地震台网历史目录 · USGS', sourceUrl: USGS,
      note: '震级为现代重新测定值。'
    },
    {
      id: 'h-1975-haicheng', type: 'earthquake', year: 1975, lat: 40.8, lon: 122.7, mag: 7.0,
      title: '海城地震', place: '中国 辽宁 海城', severity: 70, precision: 1,
      impact: '震前发布预警并组织疏散，显著降低了人员伤亡。',
      casualties: '约 1300',
      source: '中国地震台网历史目录 · 学术研究', sourceUrl: USGS,
      note: '被广泛引用为成功预报案例，但预报方法难以复制。'
    },
    {
      id: 'h-2001-kunlun', type: 'earthquake', year: 2001, lat: 35.9, lon: 90.5, mag: 7.8,
      title: '昆仑山地震', place: '中国 青海 昆仑山口西', severity: 55, precision: 2,
      impact: '产生长约 400 千米的地表破裂带，是世界罕见的长破裂事件。',
      casualties: '无人员死亡报告（高海拔无人区）',
      source: 'USGS · 中国地震台网', sourceUrl: USGS,
      note: '因地处无人区，直接损失很小，但地表形变规模极大。'
    },
    {
      id: 'h-2010-maule', type: 'earthquake', year: 2010, lat: -35.8, lon: -72.7, mag: 8.8,
      title: '智利马乌莱地震', place: '智利 马乌莱 / 康塞普西翁', severity: 90, precision: 1,
      impact: '智利中部大范围破坏，并引发横跨太平洋的海啸。',
      casualties: '约 500（含海啸）',
      source: 'USGS 地震目录 · NOAA/NCEI', sourceUrl: USGS,
      note: '震级为矩震级测定值。'
    },
    {
      id: 'h-2011-christchurch', type: 'earthquake', year: 2011, lat: -43.53, lon: 172.63, mag: 6.2,
      title: '基督城地震', place: '新西兰 基督城', severity: 80, precision: 1,
      impact: '浅源地震造成市中心建筑倒塌与土壤液化，新西兰进入紧急状态。',
      casualties: '185',
      source: 'GeoNet · USGS', sourceUrl: USGS,
      note: '震级不高但震源浅、距城区近，破坏集中。'
    },
    {
      id: 'h-2014-ludian', type: 'earthquake', year: 2014, lat: 27.1, lon: 103.3, mag: 6.1,
      title: '鲁甸地震', place: '中国 云南 鲁甸', severity: 75, precision: 1,
      impact: '山区村镇房屋倒塌，并触发大量滑坡与堰塞湖。',
      casualties: '约 600',
      source: '中国地震台网 · USGS', sourceUrl: USGS,
      note: '次生滑坡造成的伤亡占比高。'
    },
    {
      id: 'h-2016-kaikoura', type: 'earthquake', year: 2016, lat: -42.7, lon: 173.0, mag: 7.8,
      title: '凯库拉地震', place: '新西兰 凯库拉', severity: 65, precision: 1,
      impact: '多段断层同时破裂，海岸线抬升，交通干线中断。',
      casualties: '2',
      source: 'GeoNet · USGS', sourceUrl: USGS,
      note: '复杂多断层破裂是此次事件的显著特征。'
    },
    {
      id: 'h-2020-petrinja', type: 'earthquake', year: 2020, lat: 45.4, lon: 16.2, mag: 6.4,
      title: '彼得里尼亚地震', place: '克罗地亚 彼得里尼亚', severity: 60, precision: 1,
      impact: '城镇历史建筑与医院受损，周边地区震感明显。',
      casualties: '7',
      source: 'EMSC · USGS', sourceUrl: USGS,
      note: '同一天内发生多次较强余震。'
    },
    {
      id: 'h-2022-luding', type: 'earthquake', year: 2022, lat: 29.6, lon: 102.0, mag: 6.8,
      title: '泸定地震', place: '中国 四川 泸定', severity: 75, precision: 1,
      impact: '大渡河流域山体滑坡与道路中断，救援受地形限制。',
      casualties: '约 90',
      source: '中国地震台网 · USGS', sourceUrl: USGS,
      note: '灾区位于高山峡谷，次生灾害影响显著。'
    },

    /* ---------------- 历史海啸 ---------------- */
    {
      id: 'h-1605-nankai', type: 'tsunami', year: 1605, lat: 33.0, lon: 136.0, waveHeightM: 10,
      title: '庆长南海海啸', place: '日本 南海道沿岸', severity: 85, precision: 2,
      impact: '南海海槽地震引发海啸，纪伊半岛与四国沿岸村镇受损。',
      casualties: '数千至 1 万（史料，估计区间）',
      source: '日本历史地震史料 · NOAA/NCEI', sourceUrl: NCEI,
      note: '海啸波高由史料记载与堆积物研究共同推定。'
    },
    {
      id: 'h-1707-hoei', type: 'tsunami', year: 1707, lat: 32.5, lon: 133.5, waveHeightM: 25,
      title: '宝永地震海啸', place: '日本 南海 / 东海道', severity: 95, precision: 2,
      impact: '南海、东海两段海槽联动破裂，太平洋沿岸大范围海啸。',
      casualties: '约 5000（海啸相关）',
      source: '日本历史地震史料 · 学术研究', sourceUrl: NCEI,
      note: '同年富士山发生宝永喷发，两者是否存在触发关系仍有讨论。'
    },
    {
      id: 'h-1868-arica', type: 'tsunami', year: 1868, lat: -18.5, lon: -70.3, waveHeightM: 15,
      title: '阿里卡地震海啸', place: '智利 / 秘鲁 阿里卡', severity: 80, precision: 2,
      impact: '南美西岸地震引发跨太平洋海啸，夏威夷与新西兰有记录。',
      casualties: '约 2.5 万（含灾后疫病）',
      source: 'NOAA/NCEI 历史海啸目录', sourceUrl: NCEI,
      note: '当时该地区行政归属与现今不同，地点按现代地名标注。'
    },
    {
      id: 'h-1896-sanriku', type: 'tsunami', year: 1896, lat: 39.5, lon: 143.0, waveHeightM: 38,
      title: '明治三陆海啸', place: '日本 三陆沿岸', severity: 95, precision: 2,
      impact: '地震震感不强但海啸极高，沿岸村镇几乎被完全冲毁。',
      casualties: '约 2.2 万',
      source: '日本气象厅史料 · NOAA/NCEI', sourceUrl: NCEI,
      note: '此次灾害推动了日本海啸预警与防潮堤建设。'
    },
    {
      id: 'h-1933-sanriku', type: 'tsunami', year: 1933, lat: 39.0, lon: 144.0, waveHeightM: 28,
      title: '昭和三陆海啸', place: '日本 三陆沿岸', severity: 80, precision: 1,
      impact: '海啸再次袭击三陆沿岸，部分刚重建的村镇再度被毁。',
      casualties: '约 3000',
      source: '日本气象厅史料 · NOAA/NCEI', sourceUrl: NCEI,
      note: '与 1896 年事件属同一海沟的不同破裂段。'
    },
    {
      id: 'h-1952-kamchatka', type: 'tsunami', year: 1952, lat: 52.8, lon: 159.5, waveHeightM: 18,
      title: '堪察加海啸', place: '俄罗斯 堪察加半岛', severity: 65, precision: 1,
      impact: '千岛—堪察加地震引发海啸，北库里尔斯克镇被毁。',
      casualties: '约 2300（北库里尔斯克）',
      source: 'NOAA/NCEI 历史海啸目录', sourceUrl: NCEI,
      note: '冷战时期信息公布有限，早期统计不完整。'
    },
    {
      id: 'h-1976-morogulf', type: 'tsunami', year: 1976, lat: 6.3, lon: 124.0, waveHeightM: 9,
      title: '莫罗湾海啸', place: '菲律宾 棉兰老岛 莫罗湾', severity: 85, precision: 2,
      impact: '深夜海啸袭击莫罗湾沿岸，多个沿海城镇被毁。',
      casualties: '约 4000–8000（估计区间）',
      source: 'NOAA/NCEI 历史海啸目录 · 菲律宾档案', sourceUrl: NCEI,
      note: '不同来源的死亡数字差异较大。'
    },
    {
      id: 'h-1998-png', type: 'tsunami', year: 1998, lat: -3.1, lon: 142.4, waveHeightM: 15,
      title: '艾塔佩海啸', place: '巴布亚新几内亚 艾塔佩', severity: 70, precision: 2,
      impact: '近岸地震引发局部海啸，多个村庄被冲毁。',
      casualties: '约 2200',
      source: 'NOAA/NCEI 历史海啸目录', sourceUrl: NCEI,
      note: '震级中等，但震源近岸导致海啸在极短时间内到达。'
    },
    {
      id: 'h-2006-java', type: 'tsunami', year: 2006, lat: -9.3, lon: 110.5, waveHeightM: 7,
      title: '爪哇海啸', place: '印度尼西亚 爪哇岛南部', severity: 60, precision: 2,
      impact: '爪哇岛南岸渔村与海滩受损。',
      casualties: '约 600',
      source: 'NOAA/NCEI 历史海啸目录 · BMKG', sourceUrl: NCEI,
      note: '当时印度洋海啸预警系统尚未完全建成。'
    },
    {
      id: 'h-2009-samoa', type: 'tsunami', year: 2009, lat: -15.5, lon: -172.1, waveHeightM: 17,
      title: '萨摩亚海啸', place: '萨摩亚 / 美属萨摩亚', severity: 70, precision: 1,
      impact: '南太平洋地震引发海啸，萨摩亚沿岸村庄受损。',
      casualties: '约 190',
      source: 'NOAA/NCEI 历史海啸目录 · USGS', sourceUrl: NCEI,
      note: '海啸在震后约 15 分钟抵达最近海岸。'
    },
    {
      id: 'h-2024-noto', type: 'tsunami', year: 2024, lat: 37.5, lon: 137.2, waveHeightM: 5,
      title: '能登半岛地震海啸', place: '日本 石川县 能登', severity: 55, precision: 1,
      impact: '能登半岛地震引发日本海沿岸海啸，轮岛等地受灾。',
      casualties: '约 260（多数为建筑倒塌）',
      source: '日本气象厅 · USGS', sourceUrl: USGS,
      note: '海啸造成的死亡少于建筑倒塌与火灾。'
    },

    /* ---------------- 历史火山喷发 ---------------- */
    {
      id: 'h-946-paektu', type: 'volcano', year: 946, lat: 42.0, lon: 128.05,
      title: '长白山天池千年大喷发', place: '中国 / 朝鲜 长白山', severity: 85, precision: 2,
      impact: '火山灰扩散至日本北海道与东北地区，形成今天的天池火山口。',
      casualties: '无直接死亡统计',
      source: 'Smithsonian GVP · 火山学研究', sourceUrl: GVP,
      note: '喷发年份由树轮与冰芯定年，存在前后数十年的不确定度。'
    },
    {
      id: 'h-1257-samalas', type: 'volcano', year: 1257, lat: -8.35, lon: 116.45,
      title: '萨马拉斯火山喷发', place: '印度尼西亚 龙目岛', severity: 95, precision: 2,
      impact: '可能是过去七千年最大规模喷发之一，引发全球气候变冷与作物歉收。',
      casualties: '人数不明',
      source: 'Smithsonian GVP · 冰芯与树轮研究', sourceUrl: GVP,
      note: '火山口位置由地质调查确认，喷发规模由火山灰层与冰芯硫酸盐估算。'
    },
    {
      id: 'h-1600-huaynaputina', type: 'volcano', year: 1600, lat: -16.6, lon: -70.9,
      title: '瓦伊纳普蒂纳火山喷发', place: '秘鲁 南部', severity: 90, precision: 2,
      impact: '南美有史以来最大规模喷发，火山灰影响全球气候。',
      casualties: '约 1500（当地）',
      source: 'Smithsonian GVP · 历史档案', sourceUrl: GVP,
      note: '1601 年俄罗斯饥荒与该喷发的关系为部分研究推测。'
    },
    {
      id: 'h-1631-vesuvius', type: 'volcano', year: 1631, lat: 40.82, lon: 14.43,
      title: '维苏威火山大喷发（1631）', place: '意大利 那不勒斯湾', severity: 80, precision: 1,
      impact: '火山碎屑流与泥石流冲毁山麓村镇，那不勒斯出现恐慌性撤离。',
      casualties: '约 3000–4000（估计区间）',
      source: 'Smithsonian GVP · 历史档案', sourceUrl: GVP,
      note: '这是 79 年之后维苏威最猛烈的一次喷发。'
    },
    {
      id: 'h-1669-etna', type: 'volcano', year: 1669, lat: 37.75, lon: 15.0,
      title: '埃特纳火山喷发（1669）', place: '意大利 西西里 卡塔尼亚', severity: 85, precision: 1,
      impact: '熔岩流推进至卡塔尼亚城墙并部分流入城区，摧毁多个村庄。',
      casualties: '约 1.5 万–2 万（估计区间）',
      source: 'Smithsonian GVP · 历史档案', sourceUrl: GVP,
      note: '死亡数字含灾后饥荒与迁徙，早期统计不完整。'
    },
    {
      id: 'h-1707-fuji', type: 'volcano', year: 1707, lat: 35.36, lon: 138.73,
      title: '富士山宝永喷发', place: '日本 富士山', severity: 70, precision: 1,
      impact: '火山灰在江户（今东京）堆积约 5 厘米，周边农田长期减产。',
      casualties: '无直接死亡记载',
      source: 'Smithsonian GVP · 日本史料', sourceUrl: GVP,
      note: '喷发前约一个月发生宝永地震，两者关系仍有讨论。'
    },
    {
      id: 'h-1902-pelee', type: 'volcano', year: 1902, lat: 14.81, lon: -61.17,
      title: '培雷火山喷发', place: '马提尼克 圣皮埃尔', severity: 95, precision: 1,
      impact: '火山碎屑流在数分钟内摧毁圣皮埃尔城，几乎全城居民遇难。',
      casualties: '约 2.9 万',
      source: 'Smithsonian GVP · 历史档案', sourceUrl: GVP,
      note: '仅少数人幸存，是火山碎屑流灾害的典型案例。'
    },
    {
      id: 'h-1902-santamaria', type: 'volcano', year: 1902, lat: 14.75, lon: -91.55,
      title: '圣玛丽亚火山喷发', place: '危地马拉 西部', severity: 80, precision: 2,
      impact: '20 世纪最大规模喷发之一，火山灰覆盖周边数百千米。',
      casualties: '约 5000',
      source: 'Smithsonian GVP', sourceUrl: GVP,
      note: '喷发前该火山已休眠数百年，缺少历史记录可供参照。'
    },
    {
      id: 'h-1912-novarupta', type: 'volcano', year: 1912, lat: 58.27, lon: -155.16,
      title: '诺瓦鲁普塔喷发', place: '美国 阿拉斯加 卡特迈', severity: 75, precision: 1,
      impact: '20 世纪最大规模火山喷发，形成著名的万烟谷。',
      casualties: '无直接死亡',
      source: 'Smithsonian GVP · USGS', sourceUrl: GVP,
      note: '喷发地点偏远，未造成人员伤亡，但火山灰影响北半球。'
    },
    {
      id: 'h-1982-elchichon', type: 'volcano', year: 1982, lat: 17.36, lon: -93.23,
      title: '埃尔奇琼火山喷发', place: '墨西哥 恰帕斯', severity: 65, precision: 1,
      impact: '火山灰进入平流层，导致全球气温短期下降。',
      casualties: '约 2000',
      source: 'Smithsonian GVP · USGS', sourceUrl: GVP,
      note: '此前该火山长期被认为不活跃。'
    },
    {
      id: 'h-2010-eyjafjallajokull', type: 'volcano', year: 2010, lat: 63.63, lon: -19.62,
      title: '埃亚菲亚德拉火山喷发', place: '冰岛 南部', severity: 55, precision: 1,
      impact: '火山灰导致欧洲空域大面积关闭，航空业损失巨大。',
      casualties: '无死亡',
      source: 'Smithsonian GVP · 冰岛气象局', sourceUrl: GVP,
      note: '规模不大，但火山灰颗粒与风向造成罕见的航空影响。'
    },
    {
      id: 'h-2018-fuego', type: 'volcano', year: 2018, lat: 14.47, lon: -90.88,
      title: '富埃戈火山喷发', place: '危地马拉 富埃戈火山', severity: 75, precision: 1,
      impact: '火山碎屑流沿峡谷冲入村庄，救援行动受持续喷发阻碍。',
      casualties: '约 200（官方统计）',
      source: 'Smithsonian GVP · 危地马拉灾害机构', sourceUrl: GVP,
      note: '失踪人数与死亡人数在灾后统计中分别列示。'
    },
    {
      id: 'h-2021-lapalma', type: 'volcano', year: 2021, lat: 28.61, lon: -17.85,
      title: '老昆布雷火山喷发', place: '西班牙 加那利群岛 拉帕尔马', severity: 55, precision: 1,
      impact: '熔岩流持续近三个月，摧毁约 3000 栋建筑并切断公路。',
      casualties: '1',
      source: 'Smithsonian GVP · 西班牙地质机构', sourceUrl: GVP,
      note: '人员伤亡少，但财产损失与撤离规模很大。'
    },

    /* ---------------- 历史热带气旋 ---------------- */
    {
      id: 'h-1780-greathurricane', type: 'cyclone', year: 1780, lat: 14.5, lon: -61.0,
      title: '1780 年大飓风', place: '加勒比 小安的列斯群岛', severity: 100, precision: 3,
      impact: '横扫巴巴多斯、马提尼克等地，岛屿城镇几乎被夷平。',
      casualties: '约 2.2 万（估计区间）',
      source: 'NOAA 历史飓风记录 · 船只日志重建', sourceUrl: 'https://www.nhc.noaa.gov/data/',
      note: '无仪器观测，路径与强度由船只日志与地方档案重建。'
    },
    {
      id: 'h-1897-chittagong', type: 'cyclone', year: 1897, lat: 22.3, lon: 91.8,
      title: '吉大港气旋', place: '孟加拉 吉大港', severity: 85, precision: 2,
      impact: '风暴潮淹没吉大港沿海低地，村镇与农田大面积被毁。',
      casualties: '约 1.4 万（估计）',
      source: 'NOAA 历史飓风记录 · 殖民地档案', sourceUrl: 'https://www.nhc.noaa.gov/data/',
      note: '当时孟加拉湾缺少系统气象观测。'
    },
    {
      id: 'h-1928-okeechobee', type: 'cyclone', year: 1928, lat: 26.9, lon: -80.8,
      title: '奥基乔比飓风', place: '美国 佛罗里达 奥基乔比湖', severity: 80, precision: 1,
      impact: '风暴潮冲破湖堤，周边低地农田与移民营地被淹。',
      casualties: '约 2500–3000',
      source: 'NOAA 历史飓风记录', sourceUrl: 'https://www.nhc.noaa.gov/data/',
      note: '早期官方统计偏低，后世研究上调了死亡人数。'
    },
    {
      id: 'h-1959-vera', type: 'cyclone', year: 1959, lat: 34.5, lon: 137.0,
      title: '台风薇拉（伊势湾台风）', place: '日本 本州 伊势湾', severity: 90, precision: 1,
      impact: '强风与风暴潮袭击名古屋一带，低洼地区大范围被淹。',
      casualties: '约 5000',
      source: '日本气象厅 · NOAA 历史记录', sourceUrl: 'https://www.nhc.noaa.gov/data/',
      note: '此次灾害推动了日本防潮设施与台风预警体系建设。'
    },
    {
      id: 'h-1977-andhra', type: 'cyclone', year: 1977, lat: 16.0, lon: 81.0,
      title: '安得拉邦气旋', place: '印度 安得拉邦', severity: 90, precision: 2,
      impact: '风暴潮淹没克里希纳河三角洲，数万头牲畜死亡。',
      casualties: '约 1 万',
      source: 'NOAA 历史飓风记录 · 印度档案', sourceUrl: 'https://www.nhc.noaa.gov/data/',
      note: '灾区人口稠密且地势低平，风暴潮是主要致死因素。'
    },
    {
      id: 'h-1998-mitch', type: 'cyclone', year: 1998, lat: 15.0, lon: -83.5,
      title: '飓风米奇', place: '中美洲 洪都拉斯 / 尼加拉瓜', severity: 95, precision: 1,
      impact: '飓风在陆地上滞留并引发大规模泥石流与洪水。',
      casualties: '约 1.1 万–1.9 万（估计区间）',
      source: 'NOAA 历史飓风记录 · EM-DAT 类统计', sourceUrl: 'https://www.nhc.noaa.gov/data/',
      note: '多数死亡由降雨引发的滑坡与洪水造成，而非风力。'
    },
    {
      id: 'h-1999-odisha', type: 'cyclone', year: 1999, lat: 20.3, lon: 86.6,
      title: '奥里萨超级气旋', place: '印度 奥里萨邦', severity: 95, precision: 2,
      impact: '登陆时伴随高强度风暴潮，沿海村镇被整体冲毁。',
      casualties: '约 1 万',
      source: 'NOAA 历史飓风记录 · 印度气象局', sourceUrl: 'https://www.nhc.noaa.gov/data/',
      note: '灾后印度建立了更系统的气旋预警与避难所体系。'
    },
    {
      id: 'h-2008-nargis', type: 'cyclone', year: 2008, lat: 16.0, lon: 95.0,
      title: '气旋纳尔吉斯', place: '缅甸 伊洛瓦底江三角洲', severity: 100, precision: 1,
      impact: '风暴潮深入低洼三角洲，稻田与村庄大面积被毁。',
      casualties: '约 13.8 万（官方统计）',
      source: 'NOAA 历史飓风记录 · 联合国灾情报告', sourceUrl: 'https://www.nhc.noaa.gov/data/',
      note: '部分国际机构估计的死亡人数高于官方数字。'
    },
    {
      id: 'h-2017-maria', type: 'cyclone', year: 2017, lat: 18.2, lon: -66.5,
      title: '飓风玛丽亚', place: '加勒比 波多黎各', severity: 85, precision: 1,
      impact: '全岛电力与通信系统瘫痪，基础设施损失惨重。',
      casualties: '约 3000（灾后修订）',
      source: 'NOAA 历史飓风记录 · 波多黎各政府统计', sourceUrl: 'https://www.nhc.noaa.gov/data/',
      note: '官方死亡数字在灾后一年内多次修订。'
    },
    {
      id: 'h-2019-idai', type: 'cyclone', year: 2019, lat: -19.8, lon: 34.8,
      title: '气旋伊代', place: '莫桑比克 贝拉', severity: 85, precision: 2,
      impact: '强降雨与风暴潮叠加，贝拉市大面积被淹，霍乱疫情随后暴发。',
      casualties: '约 1000+（三国合计）',
      source: 'NOAA 历史飓风记录 · 联合国灾情报告', sourceUrl: 'https://www.nhc.noaa.gov/data/',
      note: '莫桑比克、津巴布韦、马拉维三国均有伤亡。'
    },
    {
      id: 'h-2020-amphan', type: 'cyclone', year: 2020, lat: 21.5, lon: 88.5,
      title: '气旋安攀', place: '印度 西孟加拉 / 孟加拉国', severity: 70, precision: 1,
      impact: '风暴潮与强风破坏沿海堤防，数百万人提前撤离。',
      casualties: '约 100',
      source: 'NOAA 历史飓风记录 · 印度气象局', sourceUrl: 'https://www.nhc.noaa.gov/data/',
      note: '提前撤离显著降低了死亡人数。'
    },
    {
      id: 'h-2022-ian', type: 'cyclone', year: 2022, lat: 26.7, lon: -82.2,
      title: '飓风伊恩', place: '美国 佛罗里达', severity: 75, precision: 1,
      impact: '风暴潮与暴雨造成佛罗里达西南部大范围淹没。',
      casualties: '约 150',
      source: 'NOAA 历史飓风记录', sourceUrl: 'https://www.nhc.noaa.gov/data/',
      note: '死亡人数含灾后清理与停电相关的间接死亡。'
    },

    /* ---------------- 历史洪水 ---------------- */
    {
      id: 'h-1642-kaifeng', type: 'flood', year: 1642, lat: 34.8, lon: 114.3, areaR: 2.4,
      title: '开封洪水', place: '中国 河南 开封', severity: 95, precision: 2,
      impact: '黄河决口，开封城被洪水围困并淤积，城市格局此后长期改变。',
      casualties: '约 30 万（史料，含围城、饥荒与疫病，存疑）',
      source: '明清史料 · EM-DAT 类统计', sourceUrl: EM,
      note: '事件发生在围城期间，堤防破坏的人为因素与自然决口难以完全区分。'
    },
    {
      id: 'h-1843-yangtze', type: 'flood', year: 1843, lat: 30.5, lon: 112.2, areaR: 3.2,
      title: '长江中游大水（1843）', place: '中国 湖北 / 湖南', severity: 85, precision: 2,
      impact: '长江中游干堤多处溃决，江汉平原农田被淹。',
      casualties: '数万（史料，统计不全）',
      source: '清代史料 · 水文研究', sourceUrl: EM,
      note: '1843 年洪水被视为长江近代较大洪水年份之一。'
    },
    {
      id: 'h-1889-johnstown', type: 'flood', year: 1889, lat: 40.33, lon: -78.92, areaR: 1.6,
      title: '约翰斯敦洪水', place: '美国 宾夕法尼亚 约翰斯敦', severity: 70, precision: 1,
      impact: '上游土坝溃决，洪水在数分钟内冲毁下游城镇。',
      casualties: '约 2200',
      source: '美国历史档案 · 工程事故研究', sourceUrl: EM,
      note: '属于坝体失效型洪水，不是单纯的气象洪水。'
    },
    {
      id: 'h-1913-ohio', type: 'flood', year: 1913, lat: 39.8, lon: -84.2, areaR: 2.6,
      title: '俄亥俄大洪水', place: '美国 俄亥俄 / 印第安纳', severity: 75, precision: 2,
      impact: '连续降雨导致多条河流同时泛滥，代顿等城市被淹。',
      casualties: '约 400',
      source: 'NOAA 历史水文档案', sourceUrl: EM,
      note: '此次洪水推动了美国联邦洪水管理职能的建立。'
    },
    {
      id: 'h-1927-mississippi', type: 'flood', year: 1927, lat: 32.0, lon: -91.0, areaR: 3.6,
      title: '密西西比河大洪水（1927）', place: '美国 密西西比河流域', severity: 85, precision: 2,
      impact: '河堤多处溃决，数十万人流离失所，灾区经济长期受损。',
      casualties: '约 250–500（直接死亡）',
      source: 'NOAA 历史水文档案 · 美国陆军工程兵团', sourceUrl: EM,
      note: '直接死亡与灾后疾病、流离造成的间接死亡需分开统计。'
    },
    {
      id: 'h-1954-yangtze', type: 'flood', year: 1954, lat: 30.0, lon: 114.0, areaR: 4.0,
      title: '长江大洪水（1954）', place: '中国 长江中下游', severity: 95, precision: 2,
      impact: '长江流域持续暴雨，荆江分洪工程启用，武汉等地长期高水位。',
      casualties: '约 3 万（当时统计）',
      source: '中国水利档案 · EM-DAT 类统计', sourceUrl: EM,
      note: '死亡数字包含灾后疫病与救援过程中的伤亡。'
    },
    {
      id: 'h-1975-banqiao', type: 'flood', year: 1975, lat: 32.9, lon: 113.6, areaR: 3.0,
      title: '板桥水库溃坝', place: '中国 河南 驻马店', severity: 100, precision: 2,
      impact: '台风降雨导致多座水库连锁溃坝，洪水在夜间冲毁下游村镇。',
      casualties: '约 2.6 万（直接；含疫病的研究估计更高）',
      source: '中国水利档案 · 工程事故研究', sourceUrl: EM,
      note: '属工程失效型洪水，不同研究对总死亡人数的估计差异较大。'
    },
    {
      id: 'h-1993-mississippi', type: 'flood', year: 1993, lat: 38.6, lon: -90.2, areaR: 3.4,
      title: '密西西比河大洪水（1993）', place: '美国 中西部', severity: 70, precision: 1,
      impact: '持续降雨使密西西比河与密苏里河长期超警戒水位，农田大面积绝收。',
      casualties: '约 50',
      source: 'NOAA 历史水文档案', sourceUrl: EM,
      note: '经济损失巨大，但人员伤亡相对较少。'
    },
    {
      id: 'h-2002-elbe', type: 'flood', year: 2002, lat: 51.0, lon: 13.5, areaR: 2.2,
      title: '易北河洪水（2002）', place: '德国 / 捷克', severity: 65, precision: 1,
      impact: '易北河与多瑙河流域洪水，德累斯顿老城被淹。',
      casualties: '约 100',
      source: 'EM-DAT 类统计 · 欧洲水文档案', sourceUrl: EM,
      note: '此次洪水推动了欧洲洪水预警与风险地图建设。'
    },
    {
      id: 'h-2010-pakistan', type: 'flood', year: 2010, lat: 29.0, lon: 71.5, areaR: 4.0,
      title: '巴基斯坦洪水（2010）', place: '巴基斯坦 印度河流域', severity: 90, precision: 2,
      impact: '季风降雨使印度河长期泛滥，灾区面积接近英国国土面积。',
      casualties: '约 2000',
      source: 'EM-DAT 类统计 · 联合国灾情报告', sourceUrl: EM,
      note: '受影响人口达数千万，伤亡与流离失所规模需分别统计。'
    },
    {
      id: 'h-2016-yangtze', type: 'flood', year: 2016, lat: 30.5, lon: 114.0, areaR: 3.0,
      title: '长江流域洪水（2016）', place: '中国 长江中下游', severity: 75, precision: 2,
      impact: '梅雨季强降雨导致多条支流超警戒水位，城市内涝严重。',
      casualties: '约 300',
      source: '中国水利部门通报 · EM-DAT 类统计', sourceUrl: EM,
      note: '城市内涝与中小河流洪水是主要致灾形式。'
    },
    {
      id: 'h-2020-yangtze', type: 'flood', year: 2020, lat: 30.5, lon: 114.0, areaR: 3.4,
      title: '长江流域洪水（2020）', place: '中国 长江中下游', severity: 75, precision: 2,
      impact: '流域性大洪水，三峡等水库群联合调度拦洪。',
      casualties: '约 200',
      source: '中国水利部门通报 · EM-DAT 类统计', sourceUrl: EM,
      note: '工程调度显著降低了中下游洪峰水位。'
    },
    {
      id: 'h-2021-ahr', type: 'flood', year: 2021, lat: 50.4, lon: 6.9, areaR: 1.8,
      title: '西欧洪水（阿尔河谷）', place: '德国 / 比利时', severity: 70, precision: 1,
      impact: '极端降雨使阿尔河谷等小流域暴发山洪，村镇被冲毁。',
      casualties: '约 220',
      source: 'EM-DAT 类统计 · 欧洲水文档案', sourceUrl: EM,
      note: '事件促使欧洲重新评估中小流域的极端降雨风险。'
    },

    /* ---------------- 历史滑坡与泥石流 ---------------- */
    {
      id: 'h-1903-frank', type: 'landslide', year: 1903, lat: 49.6, lon: -114.4, areaR: 1.8,
      title: '弗兰克滑坡', place: '加拿大 艾伯塔 龟山', severity: 60, precision: 1,
      impact: '约 3000 万立方米岩体在数十秒内滑落，掩埋煤矿小镇部分区域。',
      casualties: '约 70–90',
      source: '加拿大地质调查 · 工程地质研究', sourceUrl: EM,
      note: '滑坡体规模与运动速度由事后地质调查重建。'
    },
    {
      id: 'h-1949-khait', type: 'landslide', year: 1949, lat: 39.2, lon: 71.3, areaR: 2.6,
      title: '海特地震滑坡', place: '塔吉克斯坦 海特', severity: 80, precision: 2,
      impact: '地震触发大规模黄土滑坡，多个山村被掩埋。',
      casualties: '约 7000–2.8 万（估计区间）',
      source: '学术研究 · EM-DAT 类统计', sourceUrl: EM,
      note: '苏联时期统计不完整，不同研究差异很大。'
    },
    {
      id: 'h-1962-huascaran', type: 'landslide', year: 1962, lat: 9.1, lon: -77.6, areaR: 2.0,
      title: '瓦斯卡兰冰岩崩', place: '秘鲁 安卡什', severity: 65, precision: 1,
      impact: '冰川冰岩崩落形成泥石流，冲毁山麓村镇。',
      casualties: '约 4000',
      source: '秘鲁地质研究 · EM-DAT 类统计', sourceUrl: EM,
      note: '与 1970 年同区域事件机制相似，均与冰岩崩落有关。'
    },
    {
      id: 'h-1970-yungay', type: 'landslide', year: 1970, lat: 9.15, lon: -77.68, areaR: 2.2,
      title: '永盖滑坡', place: '秘鲁 永盖', severity: 85, precision: 1,
      impact: '1970 年秘鲁大地震触发冰岩崩与泥石流，永盖城被整体掩埋。',
      casualties: '约 2 万',
      source: '秘鲁地质研究 · USGS', sourceUrl: USGS,
      note: '属地震触发的次生灾害，伤亡不计入地震直接死亡统计。'
    },
    {
      id: 'h-1983-thistle', type: 'landslide', year: 1983, lat: 39.99, lon: -111.5, areaR: 1.6,
      title: '锡斯尔滑坡', place: '美国 犹他州', severity: 40, precision: 1,
      impact: '巨大滑坡体堵塞河谷形成天然坝，淹没铁路与公路。',
      casualties: '无死亡',
      source: 'USGS 滑坡研究', sourceUrl: USGS,
      note: '是美国经济损失最高的滑坡之一，因预警及时未造成伤亡。'
    },
    {
      id: 'h-1999-vargas', type: 'landslide', year: 1999, lat: 10.6, lon: -66.9, areaR: 2.4,
      title: '瓦尔加斯泥石流', place: '委内瑞拉 瓦尔加斯州', severity: 80, precision: 1,
      impact: '持续暴雨在陡峭海岸山脉引发大量泥石流，沿岸城镇被掩埋。',
      casualties: '约 1 万–3 万（估计区间）',
      source: 'EM-DAT 类统计 · 委内瑞拉档案', sourceUrl: EM,
      note: '死亡与失踪人数统计困难，官方与学术估计差异较大。'
    },
    {
      id: 'h-2006-guinsaugon', type: 'landslide', year: 2006, lat: 10.0, lon: 125.2, areaR: 1.7,
      title: '吉恩萨翁滑坡', place: '菲律宾 南莱特', severity: 70, precision: 1,
      impact: '持续降雨后山体整体滑落，村庄与学校被掩埋。',
      casualties: '约 1100',
      source: '菲律宾灾害机构 · 学术研究', sourceUrl: EM,
      note: '滑坡体在极短时间内覆盖整个村庄，救援几乎无法展开。'
    },
    {
      id: 'h-2010-zhouqu', type: 'landslide', year: 2010, lat: 33.78, lon: 104.37, areaR: 1.9,
      title: '舟曲泥石流', place: '中国 甘肃 舟曲', severity: 75, precision: 2,
      impact: '强降雨在白龙江流域引发特大泥石流，县城部分区域被掩埋并形成堰塞湖。',
      casualties: '约 1500',
      source: '中国应急部门通报 · 学术研究', sourceUrl: EM,
      note: '灾区地处断裂带，地震后的松散物源增加了泥石流规模。'
    },
    {
      id: 'h-2014-oso', type: 'landslide', year: 2014, lat: 48.28, lon: -121.85, areaR: 1.5,
      title: '奥索滑坡', place: '美国 华盛顿州', severity: 55, precision: 1,
      impact: '暴雨后山坡失稳，泥石流冲毁社区并堵塞河道。',
      casualties: '43',
      source: 'USGS 滑坡研究', sourceUrl: USGS,
      note: '此前该区域已被列为滑坡高风险区。'
    },
    {
      id: 'h-2017-mocoa', type: 'landslide', year: 2017, lat: 1.15, lon: -76.65, areaR: 1.7,
      title: '莫科阿泥石流', place: '哥伦比亚 普图马约', severity: 65, precision: 1,
      impact: '夜间暴雨使多条溪流同时暴发泥石流，冲毁城区街道。',
      casualties: '约 300',
      source: '哥伦比亚灾害机构 · EM-DAT 类统计', sourceUrl: EM,
      note: '泥石流在凌晨发生，居民几乎没有撤离时间。'
    },
    {
      id: 'h-2021-chamoli', type: 'landslide', year: 2021, lat: 30.4, lon: 79.7, areaR: 2.0,
      title: '查莫利冰岩崩', place: '印度 北阿坎德邦', severity: 55, precision: 2,
      impact: '高山冰岩崩落引发泥石流，冲毁水电站与道路。',
      casualties: '约 200',
      source: '印度地质调查 · 学术研究', sourceUrl: EM,
      note: '高海拔冰岩崩与气候变化的关系是当前研究重点。'
    },

    /* ---------------- 历史野火 ---------------- */
    {
      id: 'h-1825-miramichi', type: 'wildfire', year: 1825, lat: 47.0, lon: -65.5, areaR: 2.4,
      title: '米拉米奇大火', place: '加拿大 新不伦瑞克', severity: 60, precision: 2,
      impact: '干旱与大风使林火迅速蔓延，多个伐木营地与村庄被毁。',
      casualties: '约 160',
      source: '地方档案 · 林火史研究', sourceUrl: EM,
      note: '早期林火统计仅覆盖有记录的定居点。'
    },
    {
      id: 'h-1881-thumb', type: 'wildfire', year: 1881, lat: 43.7, lon: -83.3, areaR: 2.2,
      title: '拇指大火', place: '美国 密歇根', severity: 65, precision: 2,
      impact: '大火席卷密歇根拇指地区数座城镇，居民逃入湖中避难。',
      casualties: '约 280',
      source: '地方档案 · 林火史研究', sourceUrl: EM,
      note: '过火面积与死亡人数由地方报纸与教会记录汇总。'
    },
    {
      id: 'h-1894-hinckley', type: 'wildfire', year: 1894, lat: 46.0, lon: -93.0, areaR: 2.2,
      title: '欣克利大火', place: '美国 明尼苏达', severity: 60, precision: 2,
      impact: '林火在强风中越过铁路与河流，欣克利镇被焚毁。',
      casualties: '约 400–800（估计区间）',
      source: '地方档案 · 林火史研究', sourceUrl: EM,
      note: '死亡数字在不同史料中差异较大。'
    },
    {
      id: 'h-1910-bigblowup', type: 'wildfire', year: 1910, lat: 47.5, lon: -115.5, areaR: 3.2,
      title: '1910 年大火灾', place: '美国 爱达荷 / 蒙大拿', severity: 70, precision: 2,
      impact: '约 120 万公顷森林过火，多处消防队被火包围。',
      casualties: '约 87',
      source: '美国林务局档案', sourceUrl: EM,
      note: '该事件深刻影响了美国此后的林火扑救政策。'
    },
    {
      id: 'h-1918-cloquet', type: 'wildfire', year: 1918, lat: 46.7, lon: -92.5, areaR: 2.0,
      title: '克洛凯大火', place: '美国 明尼苏达', severity: 65, precision: 2,
      impact: '铁路火花与干旱大风叠加，克洛凯等城镇被焚毁。',
      casualties: '约 450',
      source: '地方档案 · 林火史研究', sourceUrl: EM,
      note: '与 1894 年欣克利大火同处明尼苏达北部林区。'
    },
    {
      id: 'h-1939-blackfriday', type: 'wildfire', year: 1939, lat: -37.5, lon: 145.0, areaR: 2.4,
      title: '黑色星期五林火', place: '澳大利亚 维多利亚', severity: 70, precision: 2,
      impact: '极端高温与大风使多起林火合并，城镇被烟尘笼罩。',
      casualties: '约 71',
      source: '澳大利亚林火史档案', sourceUrl: EM,
      note: '灾害推动了澳大利亚森林火险评级体系的建立。'
    },
    {
      id: 'h-1983-ashwednesday', type: 'wildfire', year: 1983, lat: -38.0, lon: 144.5, areaR: 2.6,
      title: '圣灰星期三林火', place: '澳大利亚 维多利亚 / 南澳', severity: 75, precision: 2,
      impact: '一天内多州同时暴发大范围林火，沿海城镇受威胁。',
      casualties: '约 75',
      source: '澳大利亚林火史档案', sourceUrl: EM,
      note: '与 2009 年黑色星期六同为南澳极端火险天气事件。'
    },
    {
      id: 'h-1991-oakland', type: 'wildfire', year: 1991, lat: 37.85, lon: -122.2, areaR: 1.4,
      title: '奥克兰山火', place: '美国 加州 奥克兰', severity: 55, precision: 1,
      impact: '城市边缘山地的林火在强风中迅速蔓延至住宅区。',
      casualties: '25',
      source: '加州消防档案', sourceUrl: EM,
      note: '是典型的城市—野地交界带火灾。'
    },
    {
      id: 'h-2003-canberra', type: 'wildfire', year: 2003, lat: -35.3, lon: 149.1, areaR: 1.8,
      title: '堪培山林火', place: '澳大利亚 堪培拉', severity: 55, precision: 1,
      impact: '林火进入首都郊区，数百栋住宅被毁。',
      casualties: '4',
      source: '澳大利亚林火史档案', sourceUrl: EM,
      note: '首都郊区受火灾直接影响，推动了城市规划调整。'
    },
    {
      id: 'h-2009-blackSaturday', type: 'wildfire', year: 2009, lat: -37.5, lon: 145.0, areaR: 2.8,
      title: '黑色星期六林火', place: '澳大利亚 维多利亚', severity: 85, precision: 2,
      impact: '极端高温与强风下多起林火同时失控，多个城镇被毁。',
      casualties: '173',
      source: '澳大利亚皇家委员会调查', sourceUrl: EM,
      note: '灾后调查推动了澳大利亚林火预警与建筑防火规范改革。'
    },
    {
      id: 'h-2016-fortmcmurray', type: 'wildfire', year: 2016, lat: 56.7, lon: -111.4, areaR: 2.8,
      title: '麦克默里堡林火', place: '加拿大 艾伯塔', severity: 65, precision: 1,
      impact: '林火逼近城区，约 8.8 万人紧急撤离。',
      casualties: '无直接死亡',
      source: '加拿大林火管理部门', sourceUrl: EM,
      note: '是加拿大历史上损失最大的自然灾害之一。'
    },
    {
      id: 'h-2017-portugal', type: 'wildfire', year: 2017, lat: 39.9, lon: -8.0, areaR: 2.2,
      title: '葡萄牙林火（2017）', place: '葡萄牙 中部', severity: 70, precision: 2,
      impact: '干燥雷暴与高温引发多起林火，村镇在夜间被火包围。',
      casualties: '约 100',
      source: '葡萄牙民防部门 · EM-DAT 类统计', sourceUrl: EM,
      note: '多数死亡发生在试图驾车逃离火场的道路上。'
    },
    {
      id: 'h-2018-campfire', type: 'wildfire', year: 2018, lat: 39.8, lon: -121.6, areaR: 1.7,
      title: '坎普林火', place: '美国 加州 天堂镇', severity: 75, precision: 1,
      impact: '林火在数小时内烧穿天堂镇，成为加州最具破坏性的火灾之一。',
      casualties: '85',
      source: '加州消防档案 · 调查报道', sourceUrl: EM,
      note: '起火原因与输电设施故障有关，已进入司法程序。'
    },
    {
      id: 'h-2023-canada', type: 'wildfire', year: 2023, lat: 55.0, lon: -115.0, areaR: 4.0,
      title: '加拿大林火季（2023）', place: '加拿大 全国', severity: 70, precision: 3,
      impact: '全国过火面积约 1800 万公顷，烟雾影响北美大片地区。',
      casualties: '无直接死亡统计',
      source: '加拿大林火中心 · 公开统计', sourceUrl: EM,
      note: '灾难呈全国多点分布，此处以国家尺度标注。'
    },
    {
      id: 'h-2024-chile', type: 'wildfire', year: 2024, lat: -33.0, lon: -71.5, areaR: 1.8,
      title: '瓦尔帕莱索林火', place: '智利 瓦尔帕莱索', severity: 70, precision: 1,
      impact: '城市边缘山火在高温大风中蔓延，多个社区被毁。',
      casualties: '约 130',
      source: '智利灾害机构 · 公开统计', sourceUrl: EM,
      note: '死亡数字在灾后数周内持续修订。'
    },

    /* ---------------- 古代与中世纪缺口补充 ---------------- */
    {
      id: 'h-426bc-maliakos', type: 'earthquake', year: -426, lat: 38.85, lon: 22.6, mag: 7.0,
      title: '马利亚湾地震', place: '希腊 马利亚湾', severity: 75, precision: 3,
      impact: '地震与伴随的海啸摧毁沿岸城镇，修昔底德对此有明确记载。',
      casualties: '人数不明',
      source: '修昔底德《伯罗奔尼撒战争史》 · NOAA/NCEI', sourceUrl: NCEI,
      note: '这是西方文献中最早被明确描述的海啸之一，震中为区域级推定。'
    },
    {
      id: 'h-684-hakuho', type: 'tsunami', year: 684, lat: 33.0, lon: 134.0, waveHeightM: 10,
      title: '白凤南海海啸', place: '日本 四国 / 纪伊半岛', severity: 75, precision: 3,
      impact: '南海海槽地震引发海啸，沿岸农田与村落被淹。',
      casualties: '数百（史料，统计不全）',
      source: '日本书纪 · NOAA/NCEI 历史海啸目录', sourceUrl: NCEI,
      note: '记载简略，海啸规模由后续同震层研究推断。'
    },
    {
      id: 'h-1274-kamikaze', type: 'cyclone', year: 1274, lat: 33.6, lon: 130.4,
      title: '文永之役台风', place: '日本 博多湾', severity: 80, precision: 3,
      impact: '元军舰队在博多湾遭遇台风，大量战船沉没，进攻被迫中止。',
      casualties: '数万（军中死亡，估计区间）',
      source: '日本史料 · 东亚历史气候研究', sourceUrl: 'https://www.nhc.noaa.gov/data/',
      note: '“神风”为后世称法；台风强度与路径由史料与沉积研究推测。'
    },
    {
      id: 'h-1281-kamikaze', type: 'cyclone', year: 1281, lat: 33.3, lon: 129.5,
      title: '弘安之役台风', place: '日本 伊万里湾 鹰岛', severity: 90, precision: 3,
      impact: '元军第二次远征舰队在鹰岛附近被台风摧毁，战船大量沉没。',
      casualties: '数万至十万（史料差异极大，按区间）',
      source: '日本史料 · 水下考古研究', sourceUrl: 'https://www.nhc.noaa.gov/data/',
      note: '鹰岛海底沉船遗址为事件提供了考古证据，死亡数字仍存争议。'
    },
    {
      id: 'h-1287-stlucia', type: 'flood', year: 1287, lat: 51.8, lon: 4.2, areaR: 2.6,
      title: '圣卢西亚风暴潮', place: '荷兰 / 德国 北海沿岸', severity: 90, precision: 3,
      impact: '风暴潮冲破堤防，海水深入内陆，形成今日须德海的前身水域。',
      casualties: '约 5 万–8 万（估计区间）',
      source: '荷兰水利史料 · EM-DAT 类统计', sourceUrl: EM,
      note: '中世纪人口统计粗糙，死亡数字为后世研究估算。'
    },
    {
      id: 'h-1362-mandrenke', type: 'flood', year: 1362, lat: 54.5, lon: 8.5, areaR: 2.8,
      title: '大曼德伦克风暴潮', place: '德国 / 丹麦 北海沿岸', severity: 85, precision: 3,
      impact: '风暴潮淹没北弗里西亚沿岸，多个村镇与农田永久沉入海中。',
      casualties: '约 2.5 万–10 万（估计区间）',
      source: '北弗里西亚史料 · 海岸地质研究', sourceUrl: EM,
      note: '海岸线变化为事件提供了地质证据，死亡人数差异较大。'
    },
    {
      id: 'h-1498-meio', type: 'tsunami', year: 1498, lat: 33.5, lon: 136.0, waveHeightM: 15,
      title: '明应南海海啸', place: '日本 纪伊半岛 / 四国', severity: 85, precision: 3,
      impact: '南海海槽地震引发海啸，纪伊半岛沿岸神社与村落受损。',
      casualties: '数千至 1 万（史料，估计区间）',
      source: '日本历史地震史料 · NOAA/NCEI', sourceUrl: NCEI,
      note: '史料对地震与海啸的描述简略，规模由同震层研究补充。'
    },
    {
      id: 'h-1618-plurs', type: 'landslide', year: 1618, lat: 46.33, lon: 9.42, areaR: 1.6,
      title: '普卢尔滑坡', place: '瑞士 / 意大利 布雷加利亚谷', severity: 70, precision: 2,
      impact: '山体整体滑落掩埋普卢尔镇，仅少数人幸存。',
      casualties: '约 2400',
      source: '地方档案 · 工程地质研究', sourceUrl: EM,
      note: '小镇位于古滑坡体上，灾害原因在事后数百年才被充分认识。'
    },
    {
      id: 'h-1806-goldau', type: 'landslide', year: 1806, lat: 47.05, lon: 8.55, areaR: 1.5,
      title: '戈尔道滑坡', place: '瑞士 施维茨州', severity: 60, precision: 2,
      impact: '山体崩塌冲入山谷并堵塞河流，形成堰塞湖。',
      casualties: '约 457',
      source: '瑞士地方档案 · 工程地质研究', sourceUrl: EM,
      note: '此次灾害推动了瑞士早期滑坡与山地灾害研究。'
    }
  ];

  function yearText(y) {
    const v = Math.round(y);
    return v < 0 ? '公元前 ' + (-v) + ' 年' : '公元 ' + v + ' 年';
  }

  const EVENTS = RAW.map(function (e) {
    const color = e.type === 'earthquake'
      ? HZ.colorForMag(e.mag || 4)
      : ((META[e.type] && META[e.type].color) || '#d8a86a');
    const out = Object.assign({}, e);
    out.isHistory = true;
    out.isDemo = false;
    out.time = e.year;
    out.yearLabel = yearText(e.year);
    out.precisionText = PRECISION[e.precision] || PRECISION[2];
    out.precisionShort = e.precision === 1 ? '点级' : e.precision === 2 ? '区域级' : '推测级';
    out.color = color;
    out.areaR = e.areaR || (e.type === 'flood' ? 2.6 : e.type === 'landslide' ? 1.9 : null);
    return out;
  });

  HZ.historyEvents = EVENTS;
  HZ.historyStats = {
    count: EVENTS.length,
    minYear: Math.min.apply(null, EVENTS.map(function (e) { return e.year; })),
    maxYear: Math.max.apply(null, EVENTS.map(function (e) { return e.year; })),
    types: EVENTS.reduce(function (m, e) { m[e.type] = (m[e.type] || 0) + 1; return m; }, {})
  };
  HZ.yearText = yearText;
  HZ.historyPrecisionText = PRECISION;

  /* ---------------- 非线性年代刻度 ---------------- */
  // 古代区间按“年代”给予更高权重，避免 2000 年的历史被挤成一条线
  const KNOTS = [
    [-500, 0], [500, 0.13], [1000, 0.24], [1500, 0.35],
    [1700, 0.44], [1800, 0.50], [1900, 0.59], [1950, 0.67],
    [2000, 0.82], [2026, 1]
  ];
  const MIN_Y = KNOTS[0][0];
  const MAX_Y = KNOTS[KNOTS.length - 1][0];

  function toFrac(year) {
    const y = Math.max(MIN_Y, Math.min(MAX_Y, Number(year) || 0));
    for (let i = 0; i < KNOTS.length - 1; i++) {
      const a = KNOTS[i], b = KNOTS[i + 1];
      if (y <= b[0]) {
        const k = (y - a[0]) / (b[0] - a[0]);
        return a[1] + (b[1] - a[1]) * k;
      }
    }
    return 1;
  }
  function toYear(frac) {
    const f = Math.max(0, Math.min(1, Number(frac) || 0));
    for (let i = 0; i < KNOTS.length - 1; i++) {
      const a = KNOTS[i], b = KNOTS[i + 1];
      if (f <= b[1]) {
        const k = (f - a[1]) / (b[1] - a[1]);
        return a[0] + (b[0] - a[0]) * k;
      }
    }
    return MAX_Y;
  }
  HZ.historyScale = {
    min: MIN_Y, max: MAX_Y, knots: KNOTS, toFrac: toFrac, toYear: toYear,
    ticks: [-500, 500, 1000, 1500, 1700, 1800, 1900, 1950, 2000, 2026]
  };
})();
