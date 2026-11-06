/* 地区清单：首页「地区选择」据此渲染，后续新增地区只需在此追加一项，
   并把对应页面放到站点根目录（page 字段）。status: ready = 可进入，building = 数据准备中。 */
window.ATLAS_REGIONS = [
  {
    id: 'fantasy1',
    name: '幻想 1 号',
    en: 'ZHEJIANG · FANTASY 01',
    page: 'fantasy1.html',
    tag: '推测性复原',
    status: 'ready',
    desc: '浙江全省三维地形，叠加杭州六区建筑与街道。当代层用真实 DEM 与 OSM 河网／建筑轮廓，但城市形态与历史层均为推测性重建，与真实城市差距较大。',
    meta: ['真实 DEM', 'OSM 河网 / 建筑', '历史层为史料复原'],
    warn: '本页仅保留当代推测复原状态，已移除时代切换；模型不代表真实城市。'
  },
  {
    id: 'zhejiang',
    name: '浙江历史地图',
    en: 'ZHEJIANG · HISTORICAL ATLAS',
    page: 'zhejiang.html',
    tag: '九时代演变',
    status: 'ready',
    desc: '浙江全省三维地形，以时间轴串联九个历史时期：拖动底部时间轴即可看到海面、岸线、湖沼与聚落的连续演变。当代底图用真实 DEM 与 OSM 河网／建筑，历史岸线与城池为史料复原。',
    meta: ['真实 DEM', 'OSM 河网 / 建筑', '时间轴 · 九个时代'],
    warn: '初代作品：历史层为史料复原与推断，与真实历史地理仍有差距。'
  },
  {
    id: 'paris',
    name: '巴黎',
    en: 'PARIS · ÎLE-DE-FRANCE',
    page: 'paris.html',
    tag: '真实数据',
    status: 'ready',
    desc: '塞纳河与巴黎市区：真实 DEM 地形、真实河道与水体、真实街区与建筑轮廓，按城市尺度重建，不做推测性历史复原。',
    meta: ['真实 DEM z13', 'OSM 水系', '18.3 万栋建筑'],
    warn: '范围 2.225–2.455°E / 48.805–48.925°N，约 17 × 13 km；建筑高度取 OSM，缺标注者按类型估算。'
  },
  {
    id: 'sydney',
    name: '悉尼',
    en: 'SYDNEY · NEW SOUTH WALES',
    page: 'sydney.html',
    tag: '真实数据',
    status: 'building',
    desc: '悉尼港、太平洋岸线与市区：真实 DEM 地形、真实海湾与水体、真实街区与建筑轮廓，按城市尺度重建。',
    meta: ['真实 DEM', 'OSM 水系', '建筑 footprint'],
    warn: '数据管线与页面正在建设，尚未开放。'
  }
];
