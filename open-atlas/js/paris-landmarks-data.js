/* 巴黎著名景点：真实经纬度 + 体量高度（米）+ 简介
   坐标取景点主体中心，h 为地面以上建筑高度（含塔尖 / 穹顶顶饰）。
   rot 为正面朝向：0 = 正面朝南（+z），正值向逆时针（东）旋转。 */
window.CITY_LANDMARKS = [
  {
    id: 'eiffel', name: '埃菲尔铁塔', en: 'EIFFEL TOWER',
    lon: 2.2945, lat: 48.8584, h: 330, rot: 0, kind: 'eiffel', year: '1889', clear: 95,
    intro: '为 1889 年世界博览会而建，铁制镂空桁架结构，连天线高 330 m。四条内倾塔腿、三层平台与收束的塔尖构成标志性轮廓，建成后四十年间是世界最高建筑。'
  },
  {
    id: 'louvre', name: '卢浮宫', en: 'LOUVRE',
    lon: 2.3376, lat: 48.8606, h: 35, rot: 0, kind: 'louvre', year: '1793', clear: 120,
    intro: '由中世纪城堡逐步扩建而成的王宫，1793 年起成为博物馆。方形庭院、拿破仑庭院与沿塞纳河的大画廊围合，1989 年贝聿铭的玻璃金字塔成为新入口。'
  },
  {
    id: 'notredame', name: '巴黎圣母院', en: 'NOTRE-DAME',
    lon: 2.3499, lat: 48.8530, h: 96, rot: -1.5708, kind: 'notredame', year: '1345', clear: 55,
    intro: '哥特式主教座堂，1163 年始建、1345 年完工。西立面双塔、中央玫瑰窗、飞扶壁与 96 m 尖塔构成典型哥特轮廓；2019 年火灾后于 2024 年重新开放。'
  },
  {
    id: 'arc', name: '凯旋门', en: 'ARC DE TRIOMPHE',
    lon: 2.2950, lat: 48.8738, h: 50, rot: 1.5708, kind: 'arc', year: '1836', clear: 40,
    intro: '1806 年拿破仑下令兴建，1836 年落成，高 50 m。四面浮雕记录革命与帝国战事，拱下为无名烈士墓；十二条大道自星形广场放射。'
  },
  {
    id: 'sacrecoeur', name: '圣心堂', en: 'SACRÉ-CŒUR',
    lon: 2.3431, lat: 48.8867, h: 83, rot: 0.35, kind: 'sacrecoeur', year: '1914', clear: 75,
    intro: '蒙马特高地顶端的罗马-拜占庭式圣殿，1875–1914 年建造。白色石灰华外墙、中央大穹顶与四座小穹顶，是巴黎市区最高点之一。'
  },
  {
    id: 'opera', name: '加尼叶歌剧院', en: 'OPÉRA GARNIER',
    lon: 2.3316, lat: 48.8720, h: 60, rot: 0, kind: 'opera', year: '1875', clear: 70,
    intro: '1861–1875 年建成的第二帝国风格歌剧院，立面柱廊与镀金雕塑繁复，铜绿穹顶与巨大舞台后台是《歌剧魅影》的原型场景。'
  },
  {
    id: 'invalides', name: '荣军院', en: 'LES INVALIDES',
    lon: 2.3125, lat: 48.8550, h: 107, rot: 3.1416, kind: 'invalides', year: '1706', clear: 95,
    intro: '路易十四为伤残军人所建的疗养院，穹顶教堂的金顶高 107 m，拿破仑一世长眠其下；两侧长排营房现为军事博物馆。'
  },
  {
    id: 'pantheon', name: '先贤祠', en: 'PANTHÉON',
    lon: 2.3464, lat: 48.8462, h: 83, rot: -1.5708, kind: 'pantheon', year: '1790', clear: 55,
    intro: '原为圣热讷维耶芙教堂，1791 年改为安葬国家伟人的先贤祠。新古典主义柱廊、鼓座与大穹顶，伏尔泰、雨果、居里夫妇葬于此。'
  },
  {
    id: 'orsay', name: '奥赛博物馆', en: "MUSÉE D'ORSAY",
    lon: 2.3266, lat: 48.8600, h: 32, rot: 1.5708, kind: 'orsay', year: '1900', clear: 85,
    intro: '由 1900 年建成的奥赛火车站改建，1986 年开馆。巨大拱形玻璃穹顶与车站大钟被保留，收藏 1848–1914 年印象派与后印象派作品。'
  },
  {
    id: 'grandpalais', name: '大皇宫', en: 'GRAND PALAIS',
    lon: 2.3125, lat: 48.8661, h: 45, rot: 1.5708, kind: 'grandpalais', year: '1900', clear: 105,
    intro: '为 1900 年世博会建造，石材基座加钢铁玻璃穹顶是「美好年代」的工程代表，中殿玻璃顶跨度约 100 m，现为展览与文化活动场馆。'
  },
  {
    id: 'pompidou', name: '蓬皮杜中心', en: 'CENTRE POMPIDOU',
    lon: 2.3522, lat: 48.8607, h: 42, rot: 0, kind: 'pompidou', year: '1977', clear: 50,
    intro: '1977 年开馆的高技派建筑，把结构、管道与电梯全部外露在立面：蓝色空调、绿色水管、黄色电力、红色电梯，内部空间完全无柱。'
  },
  {
    id: 'montparnasse', name: '蒙帕纳斯大楼', en: 'TOUR MONTPARNASSE',
    lon: 2.3219, lat: 48.8421, h: 210, rot: 0, kind: 'montparnasse', year: '1973', clear: 55,
    intro: '1973 年落成的 210 m 办公塔楼，是巴黎市中心唯一的高层建筑；建成后引发争议并促成市中心限高政策，顶层观景台可俯瞰全城。'
  },
  {
    id: 'chapelle', name: '圣礼拜堂', en: 'SAINTE-CHAPELLE',
    lon: 2.3450, lat: 48.8554, h: 75, rot: 0, kind: 'chapel', year: '1248', clear: 35,
    intro: '路易九世为存放圣物而建的宫廷礼拜堂，1248 年祝圣。上层礼拜堂几乎由 15 扇 15 m 高的彩色玻璃窗构成，尖塔高 75 m。'
  },
  {
    id: 'chaillot', name: '夏乐宫', en: 'PALAIS DE CHAILLOT',
    lon: 2.2870, lat: 48.8620, h: 30, rot: 0, kind: 'chaillot', year: '1937', clear: 90,
    intro: '1937 年世博会建造，两翼弧形展馆环抱特罗卡德罗广场与喷泉，是眺望埃菲尔铁塔的最佳机位，现为建筑与遗产之城等博物馆。'
  }
];
