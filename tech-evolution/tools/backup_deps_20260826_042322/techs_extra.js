// 自动生成 + 按《研发 SOP》升级后的技术条目（含技术拆解新增的子组件）
const EXTRA_TECHS = [
{
    "id": "counting",
    "name": "计数",
    "en": "Counting",
    "category": "basic",
    "era": "prehistoric",
    "date": "约 3 万年前",
    "year": -30000,
    "people": "",
    "place": "",
    "summary": "计数在 约 3 万年前 前后成形，依托 语言 把 理论建模、实验测量 落到实处，并成为 科学基础与方法 中承上启下的一环，直接支撑了 数字符号系统 等后续技术。",
    "dependsOn": ["language"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "史前时代",
        "text": "计数在 约 3 万年前 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，计数仍是 理论建模 的底层支撑，并持续影响 数字符号系统。"
      }
    ],
    "significance": "计数把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 数字符号系统。"
  },
{
    "id": "numerals",
    "name": "数字符号系统",
    "en": "Numerical Notation",
    "category": "basic",
    "era": "ancient",
    "date": "公元前 3500 年",
    "year": -3500,
    "people": "",
    "place": "",
    "summary": "数字符号系统约 公元前 3500 年 出现，建立在 语言、计数 之上；它把 理论建模、实验测量 变成可稳定复现的能力，是 科学基础与方法 中从经验走向方法的关键一步。",
    "dependsOn": ["language","counting"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "数字符号系统在 公元前 3500 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，数字符号系统仍是 理论建模 的底层支撑，并作为 科学基础与方法 的基础能力持续发挥作用。"
      }
    ],
    "significance": "数字符号系统把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "arithmetic",
    "name": "算术",
    "en": "Arithmetic",
    "category": "basic",
    "era": "ancient",
    "date": "公元前 3000 年",
    "year": -3000,
    "people": "",
    "place": "",
    "summary": "算术约 公元前 3000 年 成熟，建立在 语言、文字、数学 之上完成关键突破；其能力延伸到 理论建模、实验测量，并为 制图学 的发展铺平了道路。",
    "dependsOn": ["language","writing","mathematics","astronomy"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "算术在 公元前 3000 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，算术仍是 理论建模 的底层支撑，并持续影响 制图学。"
      }
    ],
    "significance": "算术把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 制图学。"
  },
{
    "id": "geometry_euclid",
    "name": "几何学",
    "en": "Geometry",
    "category": "basic",
    "era": "classical",
    "date": "公元前 300 年",
    "year": -300,
    "people": "",
    "place": "",
    "summary": "几何学在 公元前 300 年 前后成形，依托 语言、文字、数学 把 理论建模、实验测量 落到实处，并成为 科学基础与方法 中承上启下的一环，直接支撑了 数论 等后续技术。",
    "dependsOn": ["language","writing","mathematics","surveying"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "古典时代",
        "text": "几何学在 公元前 300 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，几何学仍是 理论建模 的底层支撑，并持续影响 数论。"
      }
    ],
    "significance": "几何学把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 数论。"
  },
{
    "id": "zero_concept",
    "name": "零的概念",
    "en": "Zero Concept",
    "category": "basic",
    "era": "medieval",
    "date": "500 年",
    "year": 500,
    "people": "",
    "place": "",
    "summary": "零的概念在 500 年 前后成形，依托 语言、文字、数学 把 理论建模、实验测量 落到实处，并成为 科学基础与方法 中承上启下的一环，直接支撑了 位值制计数法 等后续技术。",
    "dependsOn": ["language","writing","mathematics","trigonometry"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "中世纪",
        "text": "零的概念在 500 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，零的概念仍是 理论建模 的底层支撑，并持续影响 位值制计数法。"
      }
    ],
    "significance": "零的概念把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 位值制计数法。"
  },
{
    "id": "positional",
    "name": "位值制计数法",
    "en": "Positional Notation",
    "category": "basic",
    "era": "medieval",
    "date": "600 年",
    "year": 600,
    "people": "",
    "place": "",
    "summary": "位值制计数法约 600 年 成熟，建立在 语言、文字、数学 之上完成关键突破；其能力延伸到 理论建模、实验测量，并为 代数 的发展铺平了道路。",
    "dependsOn": ["language","writing","mathematics","zero_concept"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "中世纪",
        "text": "位值制计数法在 600 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，位值制计数法仍是 理论建模 的底层支撑，并持续影响 代数。"
      }
    ],
    "significance": "位值制计数法把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 代数。"
  },
{
    "id": "algebra",
    "name": "代数",
    "en": "Algebra",
    "category": "basic",
    "era": "medieval",
    "date": "820 年",
    "year": 820,
    "people": "",
    "place": "",
    "summary": "代数约 820 年 成熟，建立在 语言、文字、数学 之上完成关键突破；其能力延伸到 理论建模、实验测量，并为 算法理论 的发展铺平了道路。",
    "dependsOn": ["language","writing","mathematics","positional"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "中世纪",
        "text": "代数在 820 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，代数仍是 理论建模 的底层支撑，并持续影响 算法理论。"
      }
    ],
    "significance": "代数把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 算法理论。"
  },
{
    "id": "trigonometry",
    "name": "三角学",
    "en": "Trigonometry",
    "category": "basic",
    "era": "classical",
    "date": "150 年",
    "year": 150,
    "people": "",
    "place": "",
    "summary": "三角学在 150 年 前后成形，依托 语言、文字、数学 把 理论建模、实验测量 落到实处，并成为 科学基础与方法 中承上启下的一环，直接支撑了 零的概念 等后续技术。",
    "dependsOn": ["language","writing","mathematics","negative_num"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "古典时代",
        "text": "三角学在 150 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，三角学仍是 理论建模 的底层支撑，并持续影响 零的概念。"
      }
    ],
    "significance": "三角学把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 零的概念。"
  },
{
    "id": "decimal",
    "name": "十进制小数",
    "en": "Decimal Fractions",
    "category": "basic",
    "era": "medieval",
    "date": "1200 年",
    "year": 1200,
    "people": "",
    "place": "",
    "summary": "十进制小数在 1200 年 前后成形，依托 语言、文字、数学 把 理论建模、实验测量 落到实处，并成为 科学基础与方法 中承上启下的一环，直接支撑了 日心说 等后续技术。",
    "dependsOn": ["language","writing","mathematics","optics"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "中世纪",
        "text": "十进制小数在 1200 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，十进制小数仍是 理论建模 的底层支撑，并持续影响 日心说。"
      }
    ],
    "significance": "十进制小数把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 日心说。"
  },
{
    "id": "negative_num",
    "name": "负数",
    "en": "Negative Numbers",
    "category": "basic",
    "era": "classical",
    "date": "100 年",
    "year": 100,
    "people": "",
    "place": "",
    "summary": "负数约 100 年 成熟，建立在 语言、文字、数学 之上完成关键突破；其能力延伸到 理论建模、实验测量，并为 三角学 的发展铺平了道路。",
    "dependsOn": ["language","writing","mathematics","number_theory"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "古典时代",
        "text": "负数在 100 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，负数仍是 理论建模 的底层支撑，并持续影响 三角学。"
      }
    ],
    "significance": "负数把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 三角学。"
  },
{
    "id": "logarithms",
    "name": "对数",
    "en": "Logarithms",
    "category": "basic",
    "era": "earlymodern",
    "date": "1614 年",
    "year": 1614,
    "people": "",
    "place": "",
    "summary": "对数约 1614 年 成熟，建立在 语言、文字、数学 之上完成关键突破；其能力延伸到 理论建模、实验测量，并为 解析几何 的发展铺平了道路。",
    "dependsOn": ["language","writing","mathematics","kepler_laws"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "近代早期",
        "text": "对数在 1614 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，对数仍是 理论建模 的底层支撑，并持续影响 解析几何。"
      }
    ],
    "significance": "对数把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 解析几何。"
  },
{
    "id": "analytic_geom",
    "name": "解析几何",
    "en": "Analytic Geometry",
    "category": "basic",
    "era": "earlymodern",
    "date": "1637 年",
    "year": 1637,
    "people": "",
    "place": "",
    "summary": "解析几何约 1637 年 成熟，建立在 语言、文字、数学 之上完成关键突破；其能力延伸到 理论建模、实验测量，并为 组合数学 的发展铺平了道路。",
    "dependsOn": ["language","writing","mathematics","logarithms"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "近代早期",
        "text": "解析几何在 1637 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，解析几何仍是 理论建模 的底层支撑，并持续影响 组合数学。"
      }
    ],
    "significance": "解析几何把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 组合数学。"
  },
{
    "id": "calculus",
    "name": "微积分",
    "en": "Calculus",
    "category": "basic",
    "era": "earlymodern",
    "date": "1687 年",
    "year": 1687,
    "people": "",
    "place": "",
    "summary": "微积分约 1687 年 成熟，建立在 语言、文字、数学 之上完成关键突破；其能力延伸到 理论建模、实验测量，并为 天体力学 的发展铺平了道路。",
    "dependsOn": ["language","writing","mathematics","physics"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "近代早期",
        "text": "微积分在 1687 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，微积分仍是 理论建模 的底层支撑，并持续影响 天体力学。"
      }
    ],
    "significance": "微积分把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 天体力学。"
  },
{
    "id": "probability",
    "name": "概率论",
    "en": "Probability Theory",
    "category": "basic",
    "era": "earlymodern",
    "date": "1654 年",
    "year": 1654,
    "people": "",
    "place": "",
    "summary": "概率论约 1654 年 出现，建立在 语言、文字、数学 之上；它把 理论建模、实验测量 变成可稳定复现的能力，是 科学基础与方法 中从经验走向方法的关键一步。",
    "dependsOn": ["language","writing","mathematics","combinatorics"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "近代早期",
        "text": "概率论在 1654 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，概率论仍是 理论建模 的底层支撑，并作为 科学基础与方法 的基础能力持续发挥作用。"
      }
    ],
    "significance": "概率论把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "complex_num",
    "name": "复数",
    "en": "Complex Numbers",
    "category": "basic",
    "era": "earlymodern",
    "date": "1572 年",
    "year": 1572,
    "people": "",
    "place": "",
    "summary": "复数在 1572 年 前后成形，依托 语言、文字、数学 把 理论建模、实验测量 落到实处，并成为 科学基础与方法 中承上启下的一环，直接支撑了 显微镜 等后续技术。",
    "dependsOn": ["language","writing","mathematics","heliocentrism"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "近代早期",
        "text": "复数在 1572 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，复数仍是 理论建模 的底层支撑，并持续影响 显微镜。"
      }
    ],
    "significance": "复数把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 显微镜。"
  },
{
    "id": "number_theory",
    "name": "数论",
    "en": "Number Theory",
    "category": "basic",
    "era": "classical",
    "date": "公元前 300 年",
    "year": -300,
    "people": "",
    "place": "",
    "summary": "数论在 公元前 300 年 前后成形，依托 语言、文字、数学 把 理论建模、实验测量 落到实处，并成为 科学基础与方法 中承上启下的一环，直接支撑了 负数 等后续技术。",
    "dependsOn": ["language","writing","mathematics","geometry_euclid"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "古典时代",
        "text": "数论在 公元前 300 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，数论仍是 理论建模 的底层支撑，并持续影响 负数。"
      }
    ],
    "significance": "数论把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 负数。"
  },
{
    "id": "lin_algebra",
    "name": "线性代数",
    "en": "Linear Algebra",
    "category": "basic",
    "era": "industrial",
    "date": "1858 年",
    "year": 1858,
    "people": "",
    "place": "",
    "summary": "线性代数约 1858 年 出现，建立在 语言、文字、数学 之上；它把 理论建模、实验测量 变成可稳定复现的能力，是 科学基础与方法 中从经验走向方法的关键一步。",
    "dependsOn": ["language","writing","mathematics","math_logic"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "线性代数在 1858 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，线性代数仍是 理论建模 的底层支撑，并作为 科学基础与方法 的基础能力持续发挥作用。"
      }
    ],
    "significance": "线性代数把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "diff_eq",
    "name": "微分方程",
    "en": "Differential Equations",
    "category": "basic",
    "era": "earlymodern",
    "date": "1690 年",
    "year": 1690,
    "people": "",
    "place": "",
    "summary": "微分方程约 1690 年 成熟，建立在 语言、文字、数学 之上完成关键突破；其能力延伸到 理论建模、实验测量，并为 无机化学 的发展铺平了道路。",
    "dependsOn": ["language","writing","mathematics","classical_mech"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "近代早期",
        "text": "微分方程在 1690 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，微分方程仍是 理论建模 的底层支撑，并持续影响 无机化学。"
      }
    ],
    "significance": "微分方程把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 无机化学。"
  },
{
    "id": "fourier",
    "name": "傅里叶分析",
    "en": "Fourier Analysis",
    "category": "basic",
    "era": "industrial",
    "date": "1807 年",
    "year": 1807,
    "people": "",
    "place": "",
    "summary": "傅里叶分析约 1807 年 成熟，建立在 语言、文字、数学 之上完成关键突破；其能力延伸到 理论建模、实验测量，并为 统计学 的发展铺平了道路。",
    "dependsOn": ["language","writing","mathematics","atomic_theory"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "傅里叶分析在 1807 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，傅里叶分析仍是 理论建模 的底层支撑，并持续影响 统计学。"
      }
    ],
    "significance": "傅里叶分析把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 统计学。"
  },
{
    "id": "statistics",
    "name": "统计学",
    "en": "Statistics",
    "category": "basic",
    "era": "industrial",
    "date": "1809 年",
    "year": 1809,
    "people": "",
    "place": "",
    "summary": "统计学在 1809 年 前后成形，依托 语言、文字、数学 把 理论建模、实验测量 落到实处，并成为 科学基础与方法 中承上启下的一环，直接支撑了 分子学说 等后续技术。",
    "dependsOn": ["language","writing","mathematics","fourier"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "统计学在 1809 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，统计学仍是 理论建模 的底层支撑，并持续影响 分子学说。"
      }
    ],
    "significance": "统计学把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 分子学说。"
  },
{
    "id": "noneuclid",
    "name": "非欧几何",
    "en": "Non-Euclidean Geometry",
    "category": "basic",
    "era": "industrial",
    "date": "1829 年",
    "year": 1829,
    "people": "",
    "place": "",
    "summary": "非欧几何在 1829 年 前后成形，依托 语言、文字、数学 把 理论建模、实验测量 落到实处，并成为 科学基础与方法 中承上启下的一环，直接支撑了 群论 等后续技术。",
    "dependsOn": ["language","writing","mathematics","organic_chem"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "非欧几何在 1829 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，非欧几何仍是 理论建模 的底层支撑，并持续影响 群论。"
      }
    ],
    "significance": "非欧几何把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 群论。"
  },
{
    "id": "group_theory",
    "name": "群论",
    "en": "Group Theory",
    "category": "basic",
    "era": "industrial",
    "date": "1832 年",
    "year": 1832,
    "people": "",
    "place": "",
    "summary": "群论在 1832 年 前后成形，依托 语言、文字、数学 把 理论建模、实验测量 落到实处，并成为 科学基础与方法 中承上启下的一环，直接支撑了 细胞学说 等后续技术。",
    "dependsOn": ["language","writing","mathematics","noneuclid"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "群论在 1832 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，群论仍是 理论建模 的底层支撑，并持续影响 细胞学说。"
      }
    ],
    "significance": "群论把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 细胞学说。"
  },
{
    "id": "topology",
    "name": "拓扑学",
    "en": "Topology",
    "category": "basic",
    "era": "industrial",
    "date": "1860 年",
    "year": 1860,
    "people": "",
    "place": "",
    "summary": "拓扑学在 1860 年 前后成形，依托 语言、文字、数学 把 理论建模、实验测量 落到实处，并成为 科学基础与方法 中承上启下的一环，直接支撑了 纽结理论 等后续技术。",
    "dependsOn": ["language","writing","mathematics","bio_evolution"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "拓扑学在 1860 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，拓扑学仍是 理论建模 的底层支撑，并持续影响 纽结理论。"
      }
    ],
    "significance": "拓扑学把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 纽结理论。"
  },
{
    "id": "set_theory",
    "name": "集合论",
    "en": "Set Theory",
    "category": "basic",
    "era": "industrial",
    "date": "1874 年",
    "year": 1874,
    "people": "",
    "place": "",
    "summary": "集合论约 1874 年 成熟，建立在 语言、文字、数学 之上完成关键突破；其能力延伸到 理论建模、实验测量，并为 物理化学 的发展铺平了道路。",
    "dependsOn": ["language","writing","mathematics","stat_mech"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "集合论在 1874 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，集合论仍是 理论建模 的底层支撑，并持续影响 物理化学。"
      }
    ],
    "significance": "集合论把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 物理化学。"
  },
{
    "id": "graph_theory",
    "name": "图论",
    "en": "Graph Theory",
    "category": "basic",
    "era": "earlymodern",
    "date": "1736 年",
    "year": 1736,
    "people": "",
    "place": "",
    "summary": "图论约 1736 年 成熟，建立在 语言、文字、数学 之上完成关键突破；其能力延伸到 理论建模、实验测量，并为 分析化学 的发展铺平了道路。",
    "dependsOn": ["language","writing","mathematics","taxonomy"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "近代早期",
        "text": "图论在 1736 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，图论仍是 理论建模 的底层支撑，并持续影响 分析化学。"
      }
    ],
    "significance": "图论把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 分析化学。"
  },
{
    "id": "combinatorics",
    "name": "组合数学",
    "en": "Combinatorics",
    "category": "basic",
    "era": "earlymodern",
    "date": "1650 年",
    "year": 1650,
    "people": "",
    "place": "",
    "summary": "组合数学在 1650 年 前后成形，依托 语言、文字、数学 把 理论建模、实验测量 落到实处，并成为 科学基础与方法 中承上启下的一环，直接支撑了 概率论 等后续技术。",
    "dependsOn": ["language","writing","mathematics","analytic_geom"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "近代早期",
        "text": "组合数学在 1650 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，组合数学仍是 理论建模 的底层支撑，并持续影响 概率论。"
      }
    ],
    "significance": "组合数学把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 概率论。"
  },
{
    "id": "math_logic",
    "name": "数理逻辑",
    "en": "Mathematical Logic",
    "category": "basic",
    "era": "industrial",
    "date": "1854 年",
    "year": 1854,
    "people": "",
    "place": "",
    "summary": "数理逻辑在 1854 年 前后成形，依托 语言、文字、数学 把 理论建模、实验测量 落到实处，并成为 科学基础与方法 中承上启下的一环，直接支撑了 线性代数 等后续技术。",
    "dependsOn": ["language","writing","mathematics","valence"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "数理逻辑在 1854 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，数理逻辑仍是 理论建模 的底层支撑，并持续影响 线性代数。"
      }
    ],
    "significance": "数理逻辑把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 线性代数。"
  },
{
    "id": "tensor_calc",
    "name": "张量",
    "en": "Tensor Calculus",
    "category": "basic",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "张量在 1900 年 前后成形，依托 语言、文字、数学 把 理论建模、实验测量 落到实处，并成为 科学基础与方法 中承上启下的一环，直接支撑了 证明论 等后续技术。",
    "dependsOn": ["language","writing","mathematics","neuroscience"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "张量在 1900 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，张量仍是 理论建模 的底层支撑，并持续影响 证明论。"
      }
    ],
    "significance": "张量把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 证明论。"
  },
{
    "id": "measure_theory",
    "name": "测度论",
    "en": "Measure Theory",
    "category": "basic",
    "era": "electrical",
    "date": "1902 年",
    "year": 1902,
    "people": "",
    "place": "",
    "summary": "测度论约 1902 年 出现，建立在 语言、文字、数学 之上；它把 理论建模、实验测量 变成可稳定复现的能力，是 科学基础与方法 中从经验走向方法的关键一步。",
    "dependsOn": ["language","writing","mathematics","biophysics"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "测度论在 1902 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，测度论仍是 理论建模 的底层支撑，并作为 科学基础与方法 的基础能力持续发挥作用。"
      }
    ],
    "significance": "测度论把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "kolmogorov",
    "name": "公理化概率",
    "en": "Axiomatic Probability",
    "category": "basic",
    "era": "electrical",
    "date": "1933 年",
    "year": 1933,
    "people": "",
    "place": "",
    "summary": "公理化概率在 1933 年 前后成形，依托 语言、文字、数学 把 理论建模、实验测量 落到实处，并成为 科学基础与方法 中承上启下的一环，直接支撑了 λ演算 等后续技术。",
    "dependsOn": ["language","writing","mathematics","radio_astron"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "公理化概率在 1933 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，公理化概率仍是 理论建模 的底层支撑，并持续影响 λ演算。"
      }
    ],
    "significance": "公理化概率把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 λ演算。"
  },
{
    "id": "chaos",
    "name": "混沌理论",
    "en": "Chaos Theory",
    "category": "basic",
    "era": "info",
    "date": "1963 年",
    "year": 1963,
    "people": "",
    "place": "",
    "summary": "混沌理论约 1963 年 成熟，建立在 语言、文字、数学 之上完成关键突破；其能力延伸到 理论建模、实验测量，并为 标准模型 的发展铺平了道路。",
    "dependsOn": ["language","writing","mathematics","catastrophe"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "混沌理论在 1963 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，混沌理论仍是 理论建模 的底层支撑，并持续影响 标准模型。"
      }
    ],
    "significance": "混沌理论把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 标准模型。"
  },
{
    "id": "fractal",
    "name": "分形几何",
    "en": "Fractal Geometry",
    "category": "basic",
    "era": "info",
    "date": "1975 年",
    "year": 1975,
    "people": "",
    "place": "",
    "summary": "分形几何在 1975 年 前后成形，依托 语言、文字、数学 把 理论建模、实验测量 落到实处，并成为 科学基础与方法 中承上启下的一环，直接支撑了 数论密码 等后续技术。",
    "dependsOn": ["language","writing","mathematics","complexity"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "分形几何在 1975 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，分形几何仍是 理论建模 的底层支撑，并持续影响 数论密码。"
      }
    ],
    "significance": "分形几何把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 数论密码。"
  },
{
    "id": "game_theory",
    "name": "博弈论",
    "en": "Game Theory",
    "category": "basic",
    "era": "electrical",
    "date": "1944 年",
    "year": 1944,
    "people": "",
    "place": "",
    "summary": "博弈论约 1944 年 成熟，建立在 语言、文字、数学 之上完成关键突破；其能力延伸到 理论建模、实验测量，并为 范畴论 的发展铺平了道路。",
    "dependsOn": ["language","writing","mathematics","systems_theory"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "博弈论在 1944 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，博弈论仍是 理论建模 的底层支撑，并持续影响 范畴论。"
      }
    ],
    "significance": "博弈论把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 范畴论。"
  },
{
    "id": "info_theory",
    "name": "信息论",
    "en": "Information Theory",
    "category": "basic",
    "era": "electrical",
    "date": "1948 年",
    "year": 1948,
    "people": "",
    "place": "",
    "summary": "信息论约 1948 年 成熟，建立在 语言、文字、数学 之上完成关键突破；其能力延伸到 理论建模、实验测量，并为 量子场论 的发展铺平了道路。",
    "dependsOn": ["language","writing","mathematics","optimization"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "信息论在 1948 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，信息论仍是 理论建模 的底层支撑，并持续影响 量子场论。"
      }
    ],
    "significance": "信息论把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 量子场论。"
  },
{
    "id": "category_theory",
    "name": "范畴论",
    "en": "Category Theory",
    "category": "basic",
    "era": "electrical",
    "date": "1945 年",
    "year": 1945,
    "people": "",
    "place": "",
    "summary": "范畴论约 1945 年 成熟，建立在 语言、文字、数学 之上完成关键突破；其能力延伸到 理论建模、实验测量，并为 最优化/线性规划 的发展铺平了道路。",
    "dependsOn": ["language","writing","mathematics","game_theory"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "范畴论在 1945 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，范畴论仍是 理论建模 的底层支撑，并持续影响 最优化/线性规划。"
      }
    ],
    "significance": "范畴论把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 最优化/线性规划。"
  },
{
    "id": "numerical",
    "name": "数值分析",
    "en": "Numerical Analysis",
    "category": "basic",
    "era": "info",
    "date": "1950 年",
    "year": 1950,
    "people": "",
    "place": "",
    "summary": "数值分析约 1950 年 成熟，建立在 语言、文字、数学 之上完成关键突破；其能力延伸到 理论建模、实验测量，并为 材料科学 的发展铺平了道路。",
    "dependsOn": ["language","writing","mathematics","bigbang"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "数值分析在 1950 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，数值分析仍是 理论建模 的底层支撑，并持续影响 材料科学。"
      }
    ],
    "significance": "数值分析把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 材料科学。"
  },
{
    "id": "optimization",
    "name": "最优化/线性规划",
    "en": "Optimization",
    "category": "basic",
    "era": "electrical",
    "date": "1947 年",
    "year": 1947,
    "people": "",
    "place": "",
    "summary": "最优化/线性规划在 1947 年 前后成形，依托 语言、文字、数学 把 理论建模、实验测量 落到实处，并成为 科学基础与方法 中承上启下的一环，直接支撑了 信息论 等后续技术。",
    "dependsOn": ["language","writing","mathematics","category_theory"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "最优化/线性规划在 1947 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，最优化/线性规划仍是 理论建模 的底层支撑，并持续影响 信息论。"
      }
    ],
    "significance": "最优化/线性规划把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 信息论。"
  },
{
    "id": "knot_theory",
    "name": "纽结理论",
    "en": "Knot Theory",
    "category": "basic",
    "era": "industrial",
    "date": "1860 年",
    "year": 1860,
    "people": "",
    "place": "",
    "summary": "纽结理论约 1860 年 成熟，建立在 语言、文字、数学 之上完成关键突破；其能力延伸到 理论建模、实验测量，并为 微生物致病说 的发展铺平了道路。",
    "dependsOn": ["language","writing","mathematics","topology"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "纽结理论在 1860 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，纽结理论仍是 理论建模 的底层支撑，并持续影响 微生物致病说。"
      }
    ],
    "significance": "纽结理论把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 微生物致病说。"
  },
{
    "id": "proof_theory",
    "name": "证明论",
    "en": "Proof Theory",
    "category": "basic",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "证明论约 1900 年 成熟，建立在 语言、文字、数学 之上完成关键突破；其能力延伸到 理论建模、实验测量，并为 高分子化学 的发展铺平了道路。",
    "dependsOn": ["language","writing","mathematics","tensor_calc"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "证明论在 1900 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，证明论仍是 理论建模 的底层支撑，并持续影响 高分子化学。"
      }
    ],
    "significance": "证明论把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 高分子化学。"
  },
{
    "id": "lambda_calc",
    "name": "λ演算",
    "en": "Lambda Calculus",
    "category": "basic",
    "era": "electrical",
    "date": "1936 年",
    "year": 1936,
    "people": "",
    "place": "",
    "summary": "λ演算在 1936 年 前后成形，依托 语言、文字、数学 把 理论建模、实验测量 落到实处，并成为 科学基础与方法 中承上启下的一环，直接支撑了 计算机科学 等后续技术。",
    "dependsOn": ["language","writing","mathematics","kolmogorov"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "λ演算在 1936 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，λ演算仍是 理论建模 的底层支撑，并持续影响 计算机科学。"
      }
    ],
    "significance": "λ演算把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 计算机科学。"
  },
{
    "id": "catastrophe",
    "name": "突变理论",
    "en": "Catastrophe Theory",
    "category": "basic",
    "era": "info",
    "date": "1960 年",
    "year": 1960,
    "people": "",
    "place": "",
    "summary": "突变理论约 1960 年 成熟，建立在 语言、文字、数学 之上完成关键突破；其能力延伸到 理论建模、实验测量，并为 混沌理论 的发展铺平了道路。",
    "dependsOn": ["language","writing","mathematics","atomic_clock"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "突变理论在 1960 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，突变理论仍是 理论建模 的底层支撑，并持续影响 混沌理论。"
      }
    ],
    "significance": "突变理论把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 混沌理论。"
  },
{
    "id": "celestial_mech",
    "name": "天体力学",
    "en": "Celestial Mechanics",
    "category": "basic",
    "era": "earlymodern",
    "date": "1687 年",
    "year": 1687,
    "people": "",
    "place": "",
    "summary": "天体力学约 1687 年 成熟，建立在 语言、文字、数学 之上完成关键突破；其能力延伸到 理论建模、实验测量，并为 经典力学 的发展铺平了道路。",
    "dependsOn": ["language","writing","mathematics","calculus"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "近代早期",
        "text": "天体力学在 1687 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，天体力学仍是 理论建模 的底层支撑，并持续影响 经典力学。"
      }
    ],
    "significance": "天体力学把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 经典力学。"
  },
{
    "id": "classical_mech",
    "name": "经典力学",
    "en": "Classical Mechanics",
    "category": "basic",
    "era": "earlymodern",
    "date": "1687 年",
    "year": 1687,
    "people": "",
    "place": "",
    "summary": "经典力学在 1687 年 前后成形，依托 语言、文字、数学 把 理论建模、实验测量 落到实处，并成为 科学基础与方法 中承上启下的一环，直接支撑了 微分方程 等后续技术。",
    "dependsOn": ["language","writing","mathematics","celestial_mech"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "近代早期",
        "text": "经典力学在 1687 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，经典力学仍是 理论建模 的底层支撑，并持续影响 微分方程。"
      }
    ],
    "significance": "经典力学把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 微分方程。"
  },
{
    "id": "lagrangian",
    "name": "分析力学",
    "en": "Analytical Mechanics",
    "category": "basic",
    "era": "industrial",
    "date": "1788 年",
    "year": 1788,
    "people": "",
    "place": "",
    "summary": "分析力学约 1788 年 成熟，建立在 语言、文字、数学 之上完成关键突破；其能力延伸到 理论建模、实验测量，并为 计量学 的发展铺平了道路。",
    "dependsOn": ["language","writing","mathematics","crystallography"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "分析力学在 1788 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，分析力学仍是 理论建模 的底层支撑，并持续影响 计量学。"
      }
    ],
    "significance": "分析力学把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 计量学。"
  },
{
    "id": "thermo",
    "name": "热力学",
    "en": "Thermodynamics",
    "category": "basic",
    "era": "industrial",
    "date": "1824 年",
    "year": 1824,
    "people": "",
    "place": "",
    "summary": "热力学在 1824 年 前后成形，依托 语言、文字、数学 把 理论建模、实验测量 落到实处，并成为 科学基础与方法 中承上启下的一环，直接支撑了 有机化学 等后续技术。",
    "dependsOn": ["language","writing","mathematics","thermodynamics"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "热力学在 1824 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，热力学仍是 理论建模 的底层支撑，并持续影响 有机化学。"
      }
    ],
    "significance": "热力学把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 有机化学。"
  },
{
    "id": "stat_mech",
    "name": "统计力学",
    "en": "Statistical Mechanics",
    "category": "basic",
    "era": "industrial",
    "date": "1872 年",
    "year": 1872,
    "people": "",
    "place": "",
    "summary": "统计力学约 1872 年 成熟，建立在 语言、文字、数学 之上完成关键突破；其能力延伸到 理论建模、实验测量，并为 集合论 的发展铺平了道路。",
    "dependsOn": ["language","writing","mathematics","periodic_table"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "统计力学在 1872 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，统计力学仍是 理论建模 的底层支撑，并持续影响 集合论。"
      }
    ],
    "significance": "统计力学把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 集合论。"
  },
{
    "id": "em_theory",
    "name": "电磁理论",
    "en": "Electromagnetism",
    "category": "basic",
    "era": "industrial",
    "date": "1865 年",
    "year": 1865,
    "people": "",
    "place": "",
    "summary": "电磁理论约 1865 年 成熟，建立在 语言、文字、数学 之上完成关键突破；其能力延伸到 理论建模、实验测量，并为 遗传学 的发展铺平了道路。",
    "dependsOn": ["language","writing","mathematics","electromagnetism"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "电磁理论在 1865 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，电磁理论仍是 理论建模 的底层支撑，并持续影响 遗传学。"
      }
    ],
    "significance": "电磁理论把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 遗传学。"
  },
{
    "id": "wave_optics",
    "name": "波动光学",
    "en": "Wave Optics",
    "category": "basic",
    "era": "earlymodern",
    "date": "1678 年",
    "year": 1678,
    "people": "",
    "place": "",
    "summary": "波动光学约 1678 年 出现，建立在 语言、文字、数学 之上；它把 理论建模、实验测量 变成可稳定复现的能力，是 科学基础与方法 中从经验走向方法的关键一步。",
    "dependsOn": ["language","writing","mathematics","microbiology"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "近代早期",
        "text": "波动光学在 1678 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，波动光学仍是 理论建模 的底层支撑，并作为 科学基础与方法 的基础能力持续发挥作用。"
      }
    ],
    "significance": "波动光学把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "special_rel",
    "name": "狭义相对论",
    "en": "Special Relativity",
    "category": "basic",
    "era": "electrical",
    "date": "1905 年",
    "year": 1905,
    "people": "",
    "place": "",
    "summary": "狭义相对论在 1905 年 前后成形，依托 语言、文字、数学 把 理论建模、实验测量 落到实处，并成为 科学基础与方法 中承上启下的一环，直接支撑了 核物理 等后续技术。",
    "dependsOn": ["language","writing","mathematics","relativity_qm"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "狭义相对论在 1905 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，狭义相对论仍是 理论建模 的底层支撑，并持续影响 核物理。"
      }
    ],
    "significance": "狭义相对论把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 核物理。"
  },
{
    "id": "general_rel",
    "name": "广义相对论",
    "en": "General Relativity",
    "category": "basic",
    "era": "electrical",
    "date": "1915 年",
    "year": 1915,
    "people": "",
    "place": "",
    "summary": "广义相对论约 1915 年 成熟，建立在 语言、文字、数学 之上完成关键突破；其能力延伸到 理论建模、实验测量，并为 宇宙学 的发展铺平了道路。",
    "dependsOn": ["language","writing","mathematics","nuclear_phys"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "广义相对论在 1915 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，广义相对论仍是 理论建模 的底层支撑，并持续影响 宇宙学。"
      }
    ],
    "significance": "广义相对论把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 宇宙学。"
  },
{
    "id": "quantum_mech",
    "name": "量子力学",
    "en": "Quantum Mechanics",
    "category": "basic",
    "era": "electrical",
    "date": "1925 年",
    "year": 1925,
    "people": "",
    "place": "",
    "summary": "量子力学在 1925 年 前后成形，依托 语言、文字、数学 把 理论建模、实验测量 落到实处，并成为 科学基础与方法 中承上启下的一环，直接支撑了 粒子物理学 等后续技术。",
    "dependsOn": ["language","writing","mathematics","cosmology"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "量子力学在 1925 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，量子力学仍是 理论建模 的底层支撑，并持续影响 粒子物理学。"
      }
    ],
    "significance": "量子力学把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 粒子物理学。"
  },
{
    "id": "qft",
    "name": "量子场论",
    "en": "Quantum Field Theory",
    "category": "basic",
    "era": "electrical",
    "date": "1948 年",
    "year": 1948,
    "people": "",
    "place": "",
    "summary": "量子场论在 1948 年 前后成形，依托 语言、文字、数学 把 理论建模、实验测量 落到实处，并成为 科学基础与方法 中承上启下的一环，直接支撑了 控制论 等后续技术。",
    "dependsOn": ["language","writing","mathematics","info_theory"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "量子场论在 1948 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，量子场论仍是 理论建模 的底层支撑，并持续影响 控制论。"
      }
    ],
    "significance": "量子场论把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 控制论。"
  },
{
    "id": "standard_model",
    "name": "标准模型",
    "en": "Standard Model",
    "category": "basic",
    "era": "info",
    "date": "1970 年",
    "year": 1970,
    "people": "",
    "place": "",
    "summary": "标准模型在 1970 年 前后成形，依托 语言、文字、数学 把 理论建模、实验测量 落到实处，并成为 科学基础与方法 中承上启下的一环，直接支撑了 认知科学 等后续技术。",
    "dependsOn": ["language","writing","mathematics","chaos"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "标准模型在 1970 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，标准模型仍是 理论建模 的底层支撑，并持续影响 认知科学。"
      }
    ],
    "significance": "标准模型把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 认知科学。"
  },
{
    "id": "particle_phys",
    "name": "粒子物理学",
    "en": "Particle Physics",
    "category": "basic",
    "era": "electrical",
    "date": "1932 年",
    "year": 1932,
    "people": "",
    "place": "",
    "summary": "粒子物理学在 1932 年 前后成形，依托 语言、文字、数学 把 理论建模、实验测量 落到实处，并成为 科学基础与方法 中承上启下的一环，直接支撑了 射电天文学 等后续技术。",
    "dependsOn": ["language","writing","mathematics","quantum_mech"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "粒子物理学在 1932 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，粒子物理学仍是 理论建模 的底层支撑，并持续影响 射电天文学。"
      }
    ],
    "significance": "粒子物理学把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 射电天文学。"
  },
{
    "id": "nuclear_phys",
    "name": "核物理",
    "en": "Nuclear Physics",
    "category": "basic",
    "era": "electrical",
    "date": "1911 年",
    "year": 1911,
    "people": "",
    "place": "",
    "summary": "核物理在 1911 年 前后成形，依托 语言、文字、数学 把 理论建模、实验测量 落到实处，并成为 科学基础与方法 中承上启下的一环，直接支撑了 广义相对论 等后续技术。",
    "dependsOn": ["language","writing","mathematics","special_rel"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "核物理在 1911 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，核物理仍是 理论建模 的底层支撑，并持续影响 广义相对论。"
      }
    ],
    "significance": "核物理把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 广义相对论。"
  },
{
    "id": "atomic_theory",
    "name": "原子论",
    "en": "Atomic Theory",
    "category": "basic",
    "era": "industrial",
    "date": "1803 年",
    "year": 1803,
    "people": "",
    "place": "",
    "summary": "原子论在 1803 年 前后成形，依托 语言、文字、数学 把 理论建模、实验测量 落到实处，并成为 科学基础与方法 中承上启下的一环，直接支撑了 傅里叶分析 等后续技术。",
    "dependsOn": ["language","writing","mathematics","spectroscopy"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "原子论在 1803 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，原子论仍是 理论建模 的底层支撑，并持续影响 傅里叶分析。"
      }
    ],
    "significance": "原子论把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 傅里叶分析。"
  },
{
    "id": "molecular_theory",
    "name": "分子学说",
    "en": "Molecular Theory",
    "category": "basic",
    "era": "industrial",
    "date": "1811 年",
    "year": 1811,
    "people": "",
    "place": "",
    "summary": "分子学说约 1811 年 出现，建立在 语言、文字、数学 之上；它把 理论建模、实验测量 变成可稳定复现的能力，是 科学基础与方法 中从经验走向方法的关键一步。",
    "dependsOn": ["language","writing","mathematics","statistics"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "分子学说在 1811 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，分子学说仍是 理论建模 的底层支撑，并作为 科学基础与方法 的基础能力持续发挥作用。"
      }
    ],
    "significance": "分子学说把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "crystallography",
    "name": "晶体学",
    "en": "Crystallography",
    "category": "basic",
    "era": "industrial",
    "date": "1780 年",
    "year": 1780,
    "people": "",
    "place": "",
    "summary": "晶体学约 1780 年 成熟，建立在 语言、文字、数学 之上完成关键突破；其能力延伸到 理论建模、实验测量，并为 分析力学 的发展铺平了道路。",
    "dependsOn": ["language","writing","mathematics","fluid_mech"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "晶体学在 1780 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，晶体学仍是 理论建模 的底层支撑，并持续影响 分析力学。"
      }
    ],
    "significance": "晶体学把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 分析力学。"
  },
{
    "id": "spectroscopy",
    "name": "光谱学",
    "en": "Spectroscopy",
    "category": "basic",
    "era": "industrial",
    "date": "1802 年",
    "year": 1802,
    "people": "",
    "place": "",
    "summary": "光谱学约 1802 年 成熟，建立在 语言、文字、数学 之上完成关键突破；其能力延伸到 理论建模、实验测量，并为 原子论 的发展铺平了道路。",
    "dependsOn": ["language","writing","mathematics","electrochem"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "光谱学在 1802 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，光谱学仍是 理论建模 的底层支撑，并持续影响 原子论。"
      }
    ],
    "significance": "光谱学把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 原子论。"
  },
{
    "id": "periodic_table",
    "name": "元素周期律",
    "en": "Periodic Table",
    "category": "basic",
    "era": "industrial",
    "date": "1869 年",
    "year": 1869,
    "people": "",
    "place": "",
    "summary": "元素周期律约 1869 年 成熟，建立在 语言、文字、数学 之上完成关键突破；其能力延伸到 理论建模、实验测量，并为 统计力学 的发展铺平了道路。",
    "dependsOn": ["language","writing","mathematics","ecology"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "元素周期律在 1869 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，元素周期律仍是 理论建模 的底层支撑，并持续影响 统计力学。"
      }
    ],
    "significance": "元素周期律把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 统计力学。"
  },
{
    "id": "valence",
    "name": "化学键/价键",
    "en": "Chemical Bonding",
    "category": "basic",
    "era": "industrial",
    "date": "1852 年",
    "year": 1852,
    "people": "",
    "place": "",
    "summary": "化学键/价键约 1852 年 成熟，建立在 语言、文字、数学 之上完成关键突破；其能力延伸到 理论建模、实验测量，并为 数理逻辑 的发展铺平了道路。",
    "dependsOn": ["language","writing","mathematics","photochemistry"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "化学键/价键在 1852 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，化学键/价键仍是 理论建模 的底层支撑，并持续影响 数理逻辑。"
      }
    ],
    "significance": "化学键/价键把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 数理逻辑。"
  },
{
    "id": "organic_chem",
    "name": "有机化学",
    "en": "Organic Chemistry",
    "category": "basic",
    "era": "industrial",
    "date": "1828 年",
    "year": 1828,
    "people": "",
    "place": "",
    "summary": "有机化学在 1828 年 前后成形，依托 语言、文字、数学 把 理论建模、实验测量 落到实处，并成为 科学基础与方法 中承上启下的一环，直接支撑了 非欧几何 等后续技术。",
    "dependsOn": ["language","writing","mathematics","thermo"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "有机化学在 1828 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，有机化学仍是 理论建模 的底层支撑，并持续影响 非欧几何。"
      }
    ],
    "significance": "有机化学把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 非欧几何。"
  },
{
    "id": "inorganic_chem",
    "name": "无机化学",
    "en": "Inorganic Chemistry",
    "category": "basic",
    "era": "earlymodern",
    "date": "1700 年",
    "year": 1700,
    "people": "",
    "place": "",
    "summary": "无机化学约 1700 年 成熟，建立在 语言、文字、数学 之上完成关键突破；其能力延伸到 理论建模、实验测量，并为 固体力学 的发展铺平了道路。",
    "dependsOn": ["language","writing","mathematics","diff_eq"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "近代早期",
        "text": "无机化学在 1700 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，无机化学仍是 理论建模 的底层支撑，并持续影响 固体力学。"
      }
    ],
    "significance": "无机化学把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 固体力学。"
  },
{
    "id": "physical_chem",
    "name": "物理化学",
    "en": "Physical Chemistry",
    "category": "basic",
    "era": "industrial",
    "date": "1887 年",
    "year": 1887,
    "people": "",
    "place": "",
    "summary": "物理化学在 1887 年 前后成形，依托 语言、文字、数学 把 理论建模、实验测量 落到实处，并成为 科学基础与方法 中承上启下的一环，直接支撑了 生物化学 等后续技术。",
    "dependsOn": ["language","writing","mathematics","set_theory"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "物理化学在 1887 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，物理化学仍是 理论建模 的底层支撑，并持续影响 生物化学。"
      }
    ],
    "significance": "物理化学把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 生物化学。"
  },
{
    "id": "analytical_chem",
    "name": "分析化学",
    "en": "Analytical Chemistry",
    "category": "basic",
    "era": "industrial",
    "date": "1750 年",
    "year": 1750,
    "people": "",
    "place": "",
    "summary": "分析化学约 1750 年 成熟，建立在 语言、文字、数学 之上完成关键突破；其能力延伸到 理论建模、实验测量，并为 流体力学 的发展铺平了道路。",
    "dependsOn": ["language","writing","mathematics","graph_theory"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "分析化学在 1750 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，分析化学仍是 理论建模 的底层支撑，并持续影响 流体力学。"
      }
    ],
    "significance": "分析化学把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 流体力学。"
  },
{
    "id": "biochem",
    "name": "生物化学",
    "en": "Biochemistry",
    "category": "basic",
    "era": "industrial",
    "date": "1890 年",
    "year": 1890,
    "people": "",
    "place": "",
    "summary": "生物化学在 1890 年 前后成形，依托 语言、文字、数学 把 理论建模、实验测量 落到实处，并成为 科学基础与方法 中承上启下的一环，直接支撑了 神经科学 等后续技术。",
    "dependsOn": ["language","writing","mathematics","physical_chem"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "生物化学在 1890 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，生物化学仍是 理论建模 的底层支撑，并持续影响 神经科学。"
      }
    ],
    "significance": "生物化学把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 神经科学。"
  },
{
    "id": "polymer_chem",
    "name": "高分子化学",
    "en": "Polymer Chemistry",
    "category": "basic",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "高分子化学约 1900 年 成熟，建立在 语言、文字、数学 之上完成关键突破；其能力延伸到 理论建模、实验测量，并为 可重复实验 的发展铺平了道路。",
    "dependsOn": ["language","writing","mathematics","proof_theory"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "高分子化学在 1900 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，高分子化学仍是 理论建模 的底层支撑，并持续影响 可重复实验。"
      }
    ],
    "significance": "高分子化学把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 可重复实验。"
  },
{
    "id": "electrochem",
    "name": "电化学",
    "en": "Electrochemistry",
    "category": "basic",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "电化学在 1800 年 前后成形，依托 语言、文字、数学 把 理论建模、实验测量 落到实处，并成为 科学基础与方法 中承上启下的一环，直接支撑了 光谱学 等后续技术。",
    "dependsOn": ["language","writing","mathematics","standards_units"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "电化学在 1800 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，电化学仍是 理论建模 的底层支撑，并持续影响 光谱学。"
      }
    ],
    "significance": "电化学把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 光谱学。"
  },
{
    "id": "cell_theory",
    "name": "细胞学说",
    "en": "Cell Theory",
    "category": "basic",
    "era": "industrial",
    "date": "1838 年",
    "year": 1838,
    "people": "",
    "place": "",
    "summary": "细胞学说约 1838 年 成熟，建立在 语言、文字、数学 之上完成关键突破；其能力延伸到 理论建模、实验测量，并为 热化学 的发展铺平了道路。",
    "dependsOn": ["language","writing","mathematics","group_theory"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "细胞学说在 1838 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，细胞学说仍是 理论建模 的底层支撑，并持续影响 热化学。"
      }
    ],
    "significance": "细胞学说把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 热化学。"
  },
{
    "id": "germ_theory",
    "name": "微生物致病说",
    "en": "Germ Theory",
    "category": "basic",
    "era": "industrial",
    "date": "1861 年",
    "year": 1861,
    "people": "",
    "place": "",
    "summary": "微生物致病说约 1861 年 出现，建立在 语言、文字、数学 之上；它把 理论建模、实验测量 变成可稳定复现的能力，是 科学基础与方法 中从经验走向方法的关键一步。",
    "dependsOn": ["language","writing","mathematics","knot_theory"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "微生物致病说在 1861 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，微生物致病说仍是 理论建模 的底层支撑，并作为 科学基础与方法 的基础能力持续发挥作用。"
      }
    ],
    "significance": "微生物致病说把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bio_evolution",
    "name": "进化论",
    "en": "Evolution",
    "category": "basic",
    "era": "industrial",
    "date": "1859 年",
    "year": 1859,
    "people": "",
    "place": "",
    "summary": "进化论约 1859 年 成熟，建立在 语言、文字、数学 之上完成关键突破；其能力延伸到 理论建模、实验测量，并为 拓扑学 的发展铺平了道路。",
    "dependsOn": ["language","writing","mathematics","evolution"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "进化论在 1859 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，进化论仍是 理论建模 的底层支撑，并持续影响 拓扑学。"
      }
    ],
    "significance": "进化论把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 拓扑学。"
  },
{
    "id": "genetics",
    "name": "遗传学",
    "en": "Genetics",
    "category": "basic",
    "era": "industrial",
    "date": "1865 年",
    "year": 1865,
    "people": "",
    "place": "",
    "summary": "遗传学约 1865 年 成熟，建立在 语言、文字、数学 之上完成关键突破；其能力延伸到 理论建模、实验测量，并为 生态学 的发展铺平了道路。",
    "dependsOn": ["language","writing","mathematics","em_theory"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "遗传学在 1865 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，遗传学仍是 理论建模 的底层支撑，并持续影响 生态学。"
      }
    ],
    "significance": "遗传学把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 生态学。"
  },
{
    "id": "dna_struct",
    "name": "DNA 双螺旋",
    "en": "DNA Structure",
    "category": "basic",
    "era": "info",
    "date": "1953 年",
    "year": 1953,
    "people": "",
    "place": "",
    "summary": "DNA 双螺旋在 1953 年 前后成形，依托 语言、文字、数学 把 理论建模、实验测量 落到实处，并成为 科学基础与方法 中承上启下的一环，直接支撑了 分子生物学 等后续技术。",
    "dependsOn": ["language","writing","mathematics","materials_sci"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "DNA 双螺旋在 1953 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，DNA 双螺旋仍是 理论建模 的底层支撑，并持续影响 分子生物学。"
      }
    ],
    "significance": "DNA 双螺旋把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 分子生物学。"
  },
{
    "id": "molecular_bio",
    "name": "分子生物学",
    "en": "Molecular Biology",
    "category": "basic",
    "era": "info",
    "date": "1953 年",
    "year": 1953,
    "people": "",
    "place": "",
    "summary": "分子生物学约 1953 年 出现，建立在 语言、文字、数学 之上；它把 理论建模、实验测量 变成可稳定复现的能力，是 科学基础与方法 中从经验走向方法的关键一步。",
    "dependsOn": ["language","writing","mathematics","dna_struct"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "分子生物学在 1953 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，分子生物学仍是 理论建模 的底层支撑，并作为 科学基础与方法 的基础能力持续发挥作用。"
      }
    ],
    "significance": "分子生物学把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "microbiology",
    "name": "微生物学",
    "en": "Microbiology",
    "category": "basic",
    "era": "earlymodern",
    "date": "1670 年",
    "year": 1670,
    "people": "",
    "place": "",
    "summary": "微生物学在 1670 年 前后成形，依托 语言、文字、数学 把 理论建模、实验测量 落到实处，并成为 科学基础与方法 中承上启下的一环，直接支撑了 疫苗、无菌外科、波动光学 等后续技术。",
    "dependsOn": ["language","writing","mathematics","peer_review"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "近代早期",
        "text": "微生物学在 1670 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，微生物学仍是 理论建模 的底层支撑，并持续影响 疫苗、无菌外科、波动光学。"
      }
    ],
    "significance": "微生物学把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 疫苗、无菌外科、波动光学。"
  },
{
    "id": "immunology",
    "name": "免疫学",
    "en": "Immunology",
    "category": "basic",
    "era": "industrial",
    "date": "1798 年",
    "year": 1798,
    "people": "",
    "place": "",
    "summary": "免疫学约 1798 年 成熟，建立在 语言、文字、数学 之上完成关键突破；其能力延伸到 理论建模、实验测量，并为 标准单位制 的发展铺平了道路。",
    "dependsOn": ["language","writing","mathematics","metrology"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "免疫学在 1798 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，免疫学仍是 理论建模 的底层支撑，并持续影响 标准单位制。"
      }
    ],
    "significance": "免疫学把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 标准单位制。"
  },
{
    "id": "neuroscience",
    "name": "神经科学",
    "en": "Neuroscience",
    "category": "basic",
    "era": "industrial",
    "date": "1890 年",
    "year": 1890,
    "people": "",
    "place": "",
    "summary": "神经科学在 1890 年 前后成形，依托 语言、文字、数学 把 理论建模、实验测量 落到实处，并成为 科学基础与方法 中承上启下的一环，直接支撑了 张量 等后续技术。",
    "dependsOn": ["language","writing","mathematics","biochem"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "神经科学在 1890 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，神经科学仍是 理论建模 的底层支撑，并持续影响 张量。"
      }
    ],
    "significance": "神经科学把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 张量。"
  },
{
    "id": "ecology",
    "name": "生态学",
    "en": "Ecology",
    "category": "basic",
    "era": "industrial",
    "date": "1866 年",
    "year": 1866,
    "people": "",
    "place": "",
    "summary": "生态学约 1866 年 成熟，建立在 语言、文字、数学 之上完成关键突破；其能力延伸到 理论建模、实验测量，并为 元素周期律 的发展铺平了道路。",
    "dependsOn": ["language","writing","mathematics","genetics"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "生态学在 1866 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，生态学仍是 理论建模 的底层支撑，并持续影响 元素周期律。"
      }
    ],
    "significance": "生态学把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 元素周期律。"
  },
{
    "id": "taxonomy",
    "name": "生物分类学",
    "en": "Taxonomy",
    "category": "basic",
    "era": "earlymodern",
    "date": "1735 年",
    "year": 1735,
    "people": "",
    "place": "",
    "summary": "生物分类学在 1735 年 前后成形，依托 语言、文字、数学 把 理论建模、实验测量 落到实处，并成为 科学基础与方法 中承上启下的一环，直接支撑了 图论 等后续技术。",
    "dependsOn": ["language","writing","mathematics","acoustics"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "近代早期",
        "text": "生物分类学在 1735 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，生物分类学仍是 理论建模 的底层支撑，并持续影响 图论。"
      }
    ],
    "significance": "生物分类学把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 图论。"
  },
{
    "id": "heliocentrism",
    "name": "日心说",
    "en": "Heliocentrism",
    "category": "basic",
    "era": "earlymodern",
    "date": "1543 年",
    "year": 1543,
    "people": "",
    "place": "",
    "summary": "日心说约 1543 年 成熟，建立在 语言、文字、数学 之上完成关键突破；其能力延伸到 理论建模、实验测量，并为 复数 的发展铺平了道路。",
    "dependsOn": ["language","writing","mathematics","decimal"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "近代早期",
        "text": "日心说在 1543 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，日心说仍是 理论建模 的底层支撑，并持续影响 复数。"
      }
    ],
    "significance": "日心说把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 复数。"
  },
{
    "id": "kepler_laws",
    "name": "开普勒定律",
    "en": "Kepler's Laws",
    "category": "basic",
    "era": "earlymodern",
    "date": "1609 年",
    "year": 1609,
    "people": "",
    "place": "",
    "summary": "开普勒定律在 1609 年 前后成形，依托 语言、文字、数学 把 理论建模、实验测量 落到实处，并成为 科学基础与方法 中承上启下的一环，直接支撑了 对数 等后续技术。",
    "dependsOn": ["language","writing","mathematics","telescope"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "近代早期",
        "text": "开普勒定律在 1609 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，开普勒定律仍是 理论建模 的底层支撑，并持续影响 对数。"
      }
    ],
    "significance": "开普勒定律把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 对数。"
  },
{
    "id": "radio_astron",
    "name": "射电天文学",
    "en": "Radio Astronomy",
    "category": "basic",
    "era": "electrical",
    "date": "1932 年",
    "year": 1932,
    "people": "",
    "place": "",
    "summary": "射电天文学在 1932 年 前后成形，依托 语言、文字、数学 把 理论建模、实验测量 落到实处，并成为 科学基础与方法 中承上启下的一环，直接支撑了 公理化概率 等后续技术。",
    "dependsOn": ["language","writing","mathematics","particle_phys"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "射电天文学在 1932 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，射电天文学仍是 理论建模 的底层支撑，并持续影响 公理化概率。"
      }
    ],
    "significance": "射电天文学把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 公理化概率。"
  },
{
    "id": "cosmology",
    "name": "宇宙学",
    "en": "Cosmology",
    "category": "basic",
    "era": "electrical",
    "date": "1920 年",
    "year": 1920,
    "people": "",
    "place": "",
    "summary": "宇宙学约 1920 年 成熟，建立在 语言、文字、数学 之上完成关键突破；其能力延伸到 理论建模、实验测量，并为 量子力学 的发展铺平了道路。",
    "dependsOn": ["language","writing","mathematics","general_rel"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "宇宙学在 1920 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，宇宙学仍是 理论建模 的底层支撑，并持续影响 量子力学。"
      }
    ],
    "significance": "宇宙学把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 量子力学。"
  },
{
    "id": "bigbang",
    "name": "大爆炸宇宙论",
    "en": "Big Bang Theory",
    "category": "basic",
    "era": "electrical",
    "date": "1949 年",
    "year": 1949,
    "people": "",
    "place": "",
    "summary": "大爆炸宇宙论约 1949 年 成熟，建立在 语言、文字、数学 之上完成关键突破；其能力延伸到 理论建模、实验测量，并为 数值分析 的发展铺平了道路。",
    "dependsOn": ["language","writing","mathematics","control_theory"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "大爆炸宇宙论在 1949 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，大爆炸宇宙论仍是 理论建模 的底层支撑，并持续影响 数值分析。"
      }
    ],
    "significance": "大爆炸宇宙论把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 数值分析。"
  },
{
    "id": "observ_astron",
    "name": "实测天文学",
    "en": "Observational Astronomy",
    "category": "basic",
    "era": "earlymodern",
    "date": "1600 年",
    "year": 1600,
    "people": "",
    "place": "",
    "summary": "实测天文学在 1600 年 前后成形，依托 语言、文字、数学 把 理论建模、实验测量 落到实处，并成为 科学基础与方法 中承上启下的一环，直接支撑了 望远镜 等后续技术。",
    "dependsOn": ["language","writing","mathematics","scientific_method"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "近代早期",
        "text": "实测天文学在 1600 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，实测天文学仍是 理论建模 的底层支撑，并持续影响 望远镜。"
      }
    ],
    "significance": "实测天文学把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 望远镜。"
  },
{
    "id": "telescope",
    "name": "望远镜",
    "en": "Telescope",
    "category": "basic",
    "era": "earlymodern",
    "date": "1608 年",
    "year": 1608,
    "people": "",
    "place": "",
    "summary": "望远镜约 1608 年 成熟，建立在 语言、文字、数学 之上完成关键突破；其能力延伸到 理论建模、实验测量，并为 开普勒定律 的发展铺平了道路。",
    "dependsOn": ["language","writing","mathematics","observ_astron"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "近代早期",
        "text": "望远镜在 1608 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，望远镜仍是 理论建模 的底层支撑，并持续影响 开普勒定律。"
      }
    ],
    "significance": "望远镜把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 开普勒定律。"
  },
{
    "id": "microscope",
    "name": "显微镜",
    "en": "Microscope",
    "category": "basic",
    "era": "earlymodern",
    "date": "1590 年",
    "year": 1590,
    "people": "",
    "place": "",
    "summary": "显微镜约 1590 年 出现，建立在 语言、文字、数学 之上；它把 理论建模、实验测量 变成可稳定复现的能力，是 科学基础与方法 中从经验走向方法的关键一步。",
    "dependsOn": ["language","writing","mathematics","complex_num"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "近代早期",
        "text": "显微镜在 1590 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，显微镜仍是 理论建模 的底层支撑，并作为 科学基础与方法 的基础能力持续发挥作用。"
      }
    ],
    "significance": "显微镜把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "peer_review",
    "name": "同行评审制度",
    "en": "Peer Review",
    "category": "basic",
    "era": "earlymodern",
    "date": "1665 年",
    "year": 1665,
    "people": "",
    "place": "",
    "summary": "同行评审制度在 1665 年 前后成形，依托 语言、文字、数学 把 理论建模、实验测量 落到实处，并成为 科学基础与方法 中承上启下的一环，直接支撑了 微生物学 等后续技术。",
    "dependsOn": ["language","writing","mathematics","chemistry"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "近代早期",
        "text": "同行评审制度在 1665 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，同行评审制度仍是 理论建模 的底层支撑，并持续影响 微生物学。"
      }
    ],
    "significance": "同行评审制度把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 微生物学。"
  },
{
    "id": "replication",
    "name": "可重复实验",
    "en": "Replication",
    "category": "basic",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "可重复实验约 1900 年 成熟，建立在 语言、文字、数学 之上完成关键突破；其能力延伸到 理论建模、实验测量，并为 生物物理学 的发展铺平了道路。",
    "dependsOn": ["language","writing","mathematics","polymer_chem"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "可重复实验在 1900 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，可重复实验仍是 理论建模 的底层支撑，并持续影响 生物物理学。"
      }
    ],
    "significance": "可重复实验把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 生物物理学。"
  },
{
    "id": "metrology",
    "name": "计量学",
    "en": "Metrology",
    "category": "basic",
    "era": "industrial",
    "date": "1790 年",
    "year": 1790,
    "people": "",
    "place": "",
    "summary": "计量学约 1790 年 成熟，建立在 语言、文字、数学 之上完成关键突破；其能力延伸到 理论建模、实验测量，并为 免疫学 的发展铺平了道路。",
    "dependsOn": ["language","writing","mathematics","lagrangian"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "计量学在 1790 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，计量学仍是 理论建模 的底层支撑，并持续影响 免疫学。"
      }
    ],
    "significance": "计量学把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 免疫学。"
  },
{
    "id": "standards_units",
    "name": "标准单位制",
    "en": "Standard Units",
    "category": "basic",
    "era": "industrial",
    "date": "1799 年",
    "year": 1799,
    "people": "",
    "place": "",
    "summary": "标准单位制约 1799 年 成熟，建立在 语言、文字、数学 之上完成关键突破；其能力延伸到 理论建模、实验测量，并为 电化学 的发展铺平了道路。",
    "dependsOn": ["language","writing","mathematics","immunology"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "标准单位制在 1799 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，标准单位制仍是 理论建模 的底层支撑，并持续影响 电化学。"
      }
    ],
    "significance": "标准单位制把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 电化学。"
  },
{
    "id": "cartography",
    "name": "制图学",
    "en": "Cartography",
    "category": "basic",
    "era": "ancient",
    "date": "公元前 2500 年",
    "year": -2500,
    "people": "",
    "place": "",
    "summary": "制图学约 公元前 2500 年 成熟，建立在 语言、文字、数学 之上完成关键突破；其能力延伸到 理论建模、实验测量，并为 测量学 的发展铺平了道路。",
    "dependsOn": ["language","writing","mathematics","arithmetic"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "制图学在 公元前 2500 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，制图学仍是 理论建模 的底层支撑，并持续影响 测量学。"
      }
    ],
    "significance": "制图学把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 测量学。"
  },
{
    "id": "surveying",
    "name": "测量学",
    "en": "Surveying",
    "category": "basic",
    "era": "ancient",
    "date": "公元前 2000 年",
    "year": -2000,
    "people": "",
    "place": "",
    "summary": "测量学约 公元前 2000 年 成熟，建立在 语言、文字、数学 之上完成关键突破；其能力延伸到 理论建模、实验测量，并为 几何学 的发展铺平了道路。",
    "dependsOn": ["language","writing","mathematics","cartography"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "测量学在 公元前 2000 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，测量学仍是 理论建模 的底层支撑，并持续影响 几何学。"
      }
    ],
    "significance": "测量学把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 几何学。"
  },
{
    "id": "computer_sci",
    "name": "计算机科学",
    "en": "Computer Science",
    "category": "basic",
    "era": "electrical",
    "date": "1936 年",
    "year": 1936,
    "people": "",
    "place": "",
    "summary": "计算机科学在 1936 年 前后成形，依托 语言、文字、数学 把 理论建模、实验测量 落到实处，并成为 科学基础与方法 中承上启下的一环，直接支撑了 系统论 等后续技术。",
    "dependsOn": ["language","writing","mathematics","lambda_calc"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "计算机科学在 1936 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，计算机科学仍是 理论建模 的底层支撑，并持续影响 系统论。"
      }
    ],
    "significance": "计算机科学把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 系统论。"
  },
{
    "id": "algorithm",
    "name": "算法理论",
    "en": "Algorithms",
    "category": "basic",
    "era": "medieval",
    "date": "825 年",
    "year": 825,
    "people": "",
    "place": "",
    "summary": "算法理论约 825 年 出现，建立在 语言、文字、数学 之上；它把 理论建模、实验测量 变成可稳定复现的能力，是 科学基础与方法 中从经验走向方法的关键一步。",
    "dependsOn": ["language","writing","mathematics","algebra"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "中世纪",
        "text": "算法理论在 825 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，算法理论仍是 理论建模 的底层支撑，并作为 科学基础与方法 的基础能力持续发挥作用。"
      }
    ],
    "significance": "算法理论把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "complexity",
    "name": "计算复杂性",
    "en": "Complexity Theory",
    "category": "basic",
    "era": "info",
    "date": "1971 年",
    "year": 1971,
    "people": "",
    "place": "",
    "summary": "计算复杂性约 1971 年 成熟，建立在 语言、文字、数学 之上完成关键突破；其能力延伸到 理论建模、实验测量，并为 分形几何 的发展铺平了道路。",
    "dependsOn": ["language","writing","mathematics","cognition"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "计算复杂性在 1971 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，计算复杂性仍是 理论建模 的底层支撑，并持续影响 分形几何。"
      }
    ],
    "significance": "计算复杂性把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 分形几何。"
  },
{
    "id": "math_crypto",
    "name": "数论密码",
    "en": "Mathematical Cryptography",
    "category": "basic",
    "era": "info",
    "date": "1976 年",
    "year": 1976,
    "people": "",
    "place": "",
    "summary": "数论密码约 1976 年 成熟，建立在 语言、文字、数学 之上完成关键突破；其能力延伸到 理论建模、实验测量，并为 基因组学 的发展铺平了道路。",
    "dependsOn": ["language","writing","mathematics","fractal"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "数论密码在 1976 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，数论密码仍是 理论建模 的底层支撑，并持续影响 基因组学。"
      }
    ],
    "significance": "数论密码把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 基因组学。"
  },
{
    "id": "control_theory",
    "name": "控制论",
    "en": "Control Theory",
    "category": "basic",
    "era": "electrical",
    "date": "1948 年",
    "year": 1948,
    "people": "",
    "place": "",
    "summary": "控制论在 1948 年 前后成形，依托 语言、文字、数学 把 理论建模、实验测量 落到实处，并成为 科学基础与方法 中承上启下的一环，直接支撑了 大爆炸宇宙论 等后续技术。",
    "dependsOn": ["language","writing","mathematics","qft"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "控制论在 1948 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，控制论仍是 理论建模 的底层支撑，并持续影响 大爆炸宇宙论。"
      }
    ],
    "significance": "控制论把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 大爆炸宇宙论。"
  },
{
    "id": "systems_theory",
    "name": "系统论",
    "en": "Systems Theory",
    "category": "basic",
    "era": "electrical",
    "date": "1940 年",
    "year": 1940,
    "people": "",
    "place": "",
    "summary": "系统论约 1940 年 成熟，建立在 语言、文字、数学 之上完成关键突破；其能力延伸到 理论建模、实验测量，并为 博弈论 的发展铺平了道路。",
    "dependsOn": ["language","writing","mathematics","computer_sci"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "系统论在 1940 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，系统论仍是 理论建模 的底层支撑，并持续影响 博弈论。"
      }
    ],
    "significance": "系统论把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 博弈论。"
  },
{
    "id": "fluid_mech",
    "name": "流体力学",
    "en": "Fluid Mechanics",
    "category": "basic",
    "era": "industrial",
    "date": "1752 年",
    "year": 1752,
    "people": "",
    "place": "",
    "summary": "流体力学约 1752 年 成熟，建立在 语言、文字、数学 之上完成关键突破；其能力延伸到 理论建模、实验测量，并为 晶体学 的发展铺平了道路。",
    "dependsOn": ["language","writing","mathematics","analytical_chem"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "流体力学在 1752 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，流体力学仍是 理论建模 的底层支撑，并持续影响 晶体学。"
      }
    ],
    "significance": "流体力学把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 晶体学。"
  },
{
    "id": "solid_mech",
    "name": "固体力学",
    "en": "Solid Mechanics",
    "category": "basic",
    "era": "earlymodern",
    "date": "1700 年",
    "year": 1700,
    "people": "",
    "place": "",
    "summary": "固体力学在 1700 年 前后成形，依托 语言、文字、数学 把 理论建模、实验测量 落到实处，并成为 科学基础与方法 中承上启下的一环，直接支撑了 声学 等后续技术。",
    "dependsOn": ["language","writing","mathematics","inorganic_chem"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "近代早期",
        "text": "固体力学在 1700 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，固体力学仍是 理论建模 的底层支撑，并持续影响 声学。"
      }
    ],
    "significance": "固体力学把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 声学。"
  },
{
    "id": "acoustics",
    "name": "声学",
    "en": "Acoustics",
    "category": "basic",
    "era": "earlymodern",
    "date": "1700 年",
    "year": 1700,
    "people": "",
    "place": "",
    "summary": "声学约 1700 年 成熟，建立在 语言、文字、数学 之上完成关键突破；其能力延伸到 理论建模、实验测量，并为 生物分类学 的发展铺平了道路。",
    "dependsOn": ["language","writing","mathematics","solid_mech"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "近代早期",
        "text": "声学在 1700 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，声学仍是 理论建模 的底层支撑，并持续影响 生物分类学。"
      }
    ],
    "significance": "声学把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 生物分类学。"
  },
{
    "id": "thermo_chem",
    "name": "热化学",
    "en": "Thermochemistry",
    "category": "basic",
    "era": "industrial",
    "date": "1840 年",
    "year": 1840,
    "people": "",
    "place": "",
    "summary": "热化学在 1840 年 前后成形，依托 语言、文字、数学 把 理论建模、实验测量 落到实处，并成为 科学基础与方法 中承上启下的一环，直接支撑了 光化学 等后续技术。",
    "dependsOn": ["language","writing","mathematics","cell_theory"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "热化学在 1840 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，热化学仍是 理论建模 的底层支撑，并持续影响 光化学。"
      }
    ],
    "significance": "热化学把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 光化学。"
  },
{
    "id": "photochemistry",
    "name": "光化学",
    "en": "Photochemistry",
    "category": "basic",
    "era": "industrial",
    "date": "1840 年",
    "year": 1840,
    "people": "",
    "place": "",
    "summary": "光化学约 1840 年 成熟，建立在 语言、文字、数学 之上完成关键突破；其能力延伸到 理论建模、实验测量，并为 化学键/价键 的发展铺平了道路。",
    "dependsOn": ["language","writing","mathematics","thermo_chem"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "光化学在 1840 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，光化学仍是 理论建模 的底层支撑，并持续影响 化学键/价键。"
      }
    ],
    "significance": "光化学把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 化学键/价键。"
  },
{
    "id": "biophysics",
    "name": "生物物理学",
    "en": "Biophysics",
    "category": "basic",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "生物物理学在 1900 年 前后成形，依托 语言、文字、数学 把 理论建模、实验测量 落到实处，并成为 科学基础与方法 中承上启下的一环，直接支撑了 测度论 等后续技术。",
    "dependsOn": ["language","writing","mathematics","replication"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "生物物理学在 1900 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，生物物理学仍是 理论建模 的底层支撑，并持续影响 测度论。"
      }
    ],
    "significance": "生物物理学把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 测度论。"
  },
{
    "id": "genomics",
    "name": "基因组学",
    "en": "Genomics",
    "category": "basic",
    "era": "info",
    "date": "1977 年",
    "year": 1977,
    "people": "",
    "place": "",
    "summary": "基因组学在 1977 年 前后成形，依托 语言、文字、数学 把 理论建模、实验测量 落到实处，并成为 科学基础与方法 中承上启下的一环，直接支撑了 纳米科学 等后续技术。",
    "dependsOn": ["language","writing","mathematics","math_crypto"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "基因组学在 1977 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，基因组学仍是 理论建模 的底层支撑，并持续影响 纳米科学。"
      }
    ],
    "significance": "基因组学把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 纳米科学。"
  },
{
    "id": "proteomics",
    "name": "蛋白质组学",
    "en": "Proteomics",
    "category": "basic",
    "era": "info",
    "date": "1995 年",
    "year": 1995,
    "people": "",
    "place": "",
    "summary": "蛋白质组学在 1995 年 前后成形，依托 语言、文字、数学 把 理论建模、实验测量 落到实处，并成为 科学基础与方法 中承上启下的一环，直接支撑了 网络科学 等后续技术。",
    "dependsOn": ["language","writing","mathematics","nanoscience"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "蛋白质组学在 1995 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，蛋白质组学仍是 理论建模 的底层支撑，并持续影响 网络科学。"
      }
    ],
    "significance": "蛋白质组学把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 网络科学。"
  },
{
    "id": "nanoscience",
    "name": "纳米科学",
    "en": "Nanoscience",
    "category": "basic",
    "era": "info",
    "date": "1980 年",
    "year": 1980,
    "people": "",
    "place": "",
    "summary": "纳米科学约 1980 年 成熟，建立在 语言、文字、数学 之上完成关键突破；其能力延伸到 理论建模、实验测量，并为 蛋白质组学 的发展铺平了道路。",
    "dependsOn": ["language","writing","mathematics","genomics"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "纳米科学在 1980 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，纳米科学仍是 理论建模 的底层支撑，并持续影响 蛋白质组学。"
      }
    ],
    "significance": "纳米科学把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 蛋白质组学。"
  },
{
    "id": "materials_sci",
    "name": "材料科学",
    "en": "Materials Science",
    "category": "basic",
    "era": "info",
    "date": "1950 年",
    "year": 1950,
    "people": "",
    "place": "",
    "summary": "材料科学约 1950 年 成熟，建立在 语言、文字、数学 之上完成关键突破；其能力延伸到 理论建模、实验测量，并为 DNA 双螺旋 的发展铺平了道路。",
    "dependsOn": ["language","writing","mathematics","numerical"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "材料科学在 1950 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，材料科学仍是 理论建模 的底层支撑，并持续影响 DNA 双螺旋。"
      }
    ],
    "significance": "材料科学把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 DNA 双螺旋。"
  },
{
    "id": "data_science",
    "name": "数据科学",
    "en": "Data Science",
    "category": "basic",
    "era": "intelligent",
    "date": "2000 年",
    "year": 2000,
    "people": "",
    "place": "",
    "summary": "数据科学约 2000 年 出现，建立在 语言、文字、数学 之上；它把 理论建模、实验测量 变成可稳定复现的能力，是 科学基础与方法 中从经验走向方法的关键一步。",
    "dependsOn": ["language","writing","mathematics","network_sci"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "数据科学在 2000 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，数据科学仍是 理论建模 的底层支撑，并作为 科学基础与方法 的基础能力持续发挥作用。"
      }
    ],
    "significance": "数据科学把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "network_sci",
    "name": "网络科学",
    "en": "Network Science",
    "category": "basic",
    "era": "info",
    "date": "1998 年",
    "year": 1998,
    "people": "",
    "place": "",
    "summary": "网络科学约 1998 年 成熟，建立在 语言、文字、数学 之上完成关键突破；其能力延伸到 理论建模、实验测量，并为 数据科学 的发展铺平了道路。",
    "dependsOn": ["language","writing","mathematics","proteomics"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "网络科学在 1998 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，网络科学仍是 理论建模 的底层支撑，并持续影响 数据科学。"
      }
    ],
    "significance": "网络科学把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 数据科学。"
  },
{
    "id": "cognition",
    "name": "认知科学",
    "en": "Cognitive Science",
    "category": "basic",
    "era": "info",
    "date": "1970 年",
    "year": 1970,
    "people": "",
    "place": "",
    "summary": "认知科学约 1970 年 成熟，建立在 语言、文字、数学 之上完成关键突破；其能力延伸到 理论建模、实验测量，并为 计算复杂性 的发展铺平了道路。",
    "dependsOn": ["language","writing","mathematics","standard_model"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "认知科学在 1970 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，认知科学仍是 理论建模 的底层支撑，并持续影响 计算复杂性。"
      }
    ],
    "significance": "认知科学把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 计算复杂性。"
  },
{
    "id": "mat_copper",
    "name": "红铜冶炼",
    "en": "Copper Smelting",
    "category": "material",
    "era": "prehistoric",
    "date": "公元前 5000 年",
    "year": -5000,
    "people": "",
    "place": "",
    "summary": "红铜冶炼约 公元前 5000 年 成熟，建立在 用火、砖与砌筑、陶器 之上完成关键突破；其能力延伸到 工具制造、结构件，并为 黄金加工、白银加工、锯 的发展铺平了道路。",
    "dependsOn": ["fire","brick","mat_pottery"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "史前时代",
        "text": "红铜冶炼在 公元前 5000 年 前后出现，依托 用火 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，红铜冶炼仍是 工具制造 的底层支撑，并持续影响 黄金加工、白银加工、锯。"
      }
    ],
    "significance": "红铜冶炼把 用火 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 黄金加工、白银加工、锯。"
  },
{
    "id": "mat_bronze",
    "name": "青铜合金",
    "en": "Bronze Alloy",
    "category": "material",
    "era": "ancient",
    "date": "公元前 3300 年",
    "year": -3300,
    "people": "",
    "place": "",
    "summary": "青铜合金在 公元前 3300 年 前后成形，依托 用火、青铜、铸造 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 铅冶炼、锡冶炼 等后续技术。",
    "dependsOn": ["fire","bronze","mat_casting"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "青铜合金在 公元前 3300 年 前后出现，依托 用火 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，青铜合金仍是 工具制造 的底层支撑，并持续影响 铅冶炼、锡冶炼。"
      }
    ],
    "significance": "青铜合金把 用火 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 铅冶炼、锡冶炼。"
  },
{
    "id": "mat_brass",
    "name": "黄铜",
    "en": "Brass",
    "category": "material",
    "era": "ancient",
    "date": "公元前 2000 年",
    "year": -2000,
    "people": "",
    "place": "",
    "summary": "黄铜约 公元前 2000 年 成熟，建立在 用火、玻璃、玻璃 之上完成关键突破；其能力延伸到 工具制造、结构件，并为 汞冶炼、炻器 的发展铺平了道路。",
    "dependsOn": ["fire","mat_glass","glass"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "黄铜在 公元前 2000 年 前后出现，依托 用火 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，黄铜仍是 工具制造 的底层支撑，并持续影响 汞冶炼、炻器。"
      }
    ],
    "significance": "黄铜把 用火 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 汞冶炼、炻器。"
  },
{
    "id": "mat_iron",
    "name": "块炼铁",
    "en": "Bloomery Iron",
    "category": "material",
    "era": "ancient",
    "date": "公元前 1200 年",
    "year": -1200,
    "people": "",
    "place": "",
    "summary": "块炼铁在 公元前 1200 年 前后成形，依托 用火、铁器、天然橡胶 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 熟铁 等后续技术。",
    "dependsOn": ["fire","iron","mat_rubber"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "块炼铁在 公元前 1200 年 前后出现，依托 用火 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，块炼铁仍是 工具制造 的底层支撑，并持续影响 熟铁。"
      }
    ],
    "significance": "块炼铁把 用火 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 熟铁。"
  },
{
    "id": "mat_wrought",
    "name": "熟铁",
    "en": "Wrought Iron",
    "category": "material",
    "era": "ancient",
    "date": "公元前 1000 年",
    "year": -1000,
    "people": "",
    "place": "",
    "summary": "熟铁在 公元前 1000 年 前后成形，依托 用火、钢铁、块炼铁 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 热处理、淬火 等后续技术。",
    "dependsOn": ["fire","steel","mat_iron"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "熟铁在 公元前 1000 年 前后出现，依托 用火 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，熟铁仍是 工具制造 的底层支撑，并持续影响 热处理、淬火。"
      }
    ],
    "significance": "熟铁把 用火 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 热处理、淬火。"
  },
{
    "id": "mat_castiron",
    "name": "铸铁",
    "en": "Cast Iron",
    "category": "material",
    "era": "classical",
    "date": "公元前 500 年",
    "year": -500,
    "people": "",
    "place": "",
    "summary": "铸铁约 公元前 500 年 成熟，建立在 用火、永磁材料、退火 之上完成关键突破；其能力延伸到 工具制造、结构件，并为 锌冶炼、渗碳 的发展铺平了道路。",
    "dependsOn": ["fire","magnets","mat_anneal"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "古典时代",
        "text": "铸铁在 公元前 500 年 前后出现，依托 用火 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，铸铁仍是 工具制造 的底层支撑，并持续影响 锌冶炼、渗碳。"
      }
    ],
    "significance": "铸铁把 用火 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 锌冶炼、渗碳。"
  },
{
    "id": "mat_steel2",
    "name": "坩埚钢",
    "en": "Crucible Steel",
    "category": "material",
    "era": "medieval",
    "date": "500 年",
    "year": 500,
    "people": "",
    "place": "",
    "summary": "坩埚钢约 500 年 成熟，建立在 用火、造纸、平板玻璃 之上完成关键突破；其能力延伸到 工具制造、结构件，并为 拉拔、瓷器 的发展铺平了道路。",
    "dependsOn": ["fire","paper","mat_flatglass"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "中世纪",
        "text": "坩埚钢在 500 年 前后出现，依托 用火 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，坩埚钢仍是 工具制造 的底层支撑，并持续影响 拉拔、瓷器。"
      }
    ],
    "significance": "坩埚钢把 用火 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 拉拔、瓷器。"
  },
{
    "id": "mat_ductile",
    "name": "球墨铸铁",
    "en": "Ductile Iron",
    "category": "material",
    "era": "electrical",
    "date": "1943 年",
    "year": 1943,
    "people": "",
    "place": "",
    "summary": "球墨铸铁在 1943 年 前后成形，依托 化学、经典力学、用火 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 电火花加工、导弹、原子弹 等后续技术。",
    "dependsOn": ["chemistry","physics","fire","mat_esr"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "球墨铸铁在 1943 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，球墨铸铁仍是 工具制造 的底层支撑，并持续影响 电火花加工、导弹、原子弹。"
      }
    ],
    "significance": "球墨铸铁把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 电火花加工、导弹、原子弹。"
  },
{
    "id": "mat_malleable",
    "name": "可锻铸铁",
    "en": "Malleable Iron",
    "category": "material",
    "era": "earlymodern",
    "date": "1722 年",
    "year": 1722,
    "people": "",
    "place": "",
    "summary": "可锻铸铁约 1722 年 成熟，建立在 化学、经典力学、用火 之上完成关键突破；其能力延伸到 工具制造、结构件，并为 钴 的发展铺平了道路。",
    "dependsOn": ["chemistry","physics","fire","mat_zeolite"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "近代早期",
        "text": "可锻铸铁在 1722 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，可锻铸铁仍是 工具制造 的底层支撑，并持续影响 钴。"
      }
    ],
    "significance": "可锻铸铁把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 钴。"
  },
{
    "id": "mat_stainless",
    "name": "不锈钢",
    "en": "Stainless Steel",
    "category": "material",
    "era": "electrical",
    "date": "1913 年",
    "year": 1913,
    "people": "",
    "place": "",
    "summary": "不锈钢在 1913 年 前后成形，依托 化学、经典力学、用火 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 单晶硅、叉车、航空母舰 等后续技术。",
    "dependsOn": ["chemistry","physics","fire","mat_ltsc"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "不锈钢在 1913 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，不锈钢仍是 工具制造 的底层支撑，并持续影响 单晶硅、叉车、航空母舰。"
      }
    ],
    "significance": "不锈钢把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 单晶硅、叉车、航空母舰。"
  },
{
    "id": "mat_manganese",
    "name": "锰钢",
    "en": "Manganese Steel",
    "category": "material",
    "era": "industrial",
    "date": "1882 年",
    "year": 1882,
    "people": "",
    "place": "",
    "summary": "锰钢约 1882 年 成熟，建立在 化学、经典力学、用火 之上完成关键突破；其能力延伸到 工具制造、结构件，并为 预应力混凝土、精密轴承、无轨电车 的发展铺平了道路。",
    "dependsOn": ["chemistry","physics","fire","mat_piezo"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "锰钢在 1882 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，锰钢仍是 工具制造 的底层支撑，并持续影响 预应力混凝土、精密轴承、无轨电车。"
      }
    ],
    "significance": "锰钢把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 预应力混凝土、精密轴承、无轨电车。"
  },
{
    "id": "mat_toolsteel",
    "name": "工具钢",
    "en": "Tool Steel",
    "category": "material",
    "era": "industrial",
    "date": "1868 年",
    "year": 1868,
    "people": "",
    "place": "",
    "summary": "工具钢约 1868 年 成熟，建立在 化学、经典力学、用火 之上完成关键突破；其能力延伸到 工具制造、结构件，并为 钢化玻璃、注塑、交通信号灯 的发展铺平了道路。",
    "dependsOn": ["chemistry","physics","fire","mat_niobium"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "工具钢在 1868 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，工具钢仍是 工具制造 的底层支撑，并持续影响 钢化玻璃、注塑、交通信号灯。"
      }
    ],
    "significance": "工具钢把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 钢化玻璃、注塑、交通信号灯。"
  },
{
    "id": "mat_hss",
    "name": "高速钢",
    "en": "High-Speed Steel",
    "category": "material",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "高速钢在 1900 年 前后成形，依托 化学、经典力学、用火 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 模具钢 等后续技术。",
    "dependsOn": ["chemistry","physics","fire","mat_sic"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "高速钢在 1900 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，高速钢仍是 工具制造 的底层支撑，并持续影响 模具钢。"
      }
    ],
    "significance": "高速钢把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 模具钢。"
  },
{
    "id": "mat_die",
    "name": "模具钢",
    "en": "Die Steel",
    "category": "material",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "模具钢在 1900 年 前后成形，依托 化学、经典力学、用火 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 硅钢 等后续技术。",
    "dependsOn": ["chemistry","physics","fire","mat_hss"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "模具钢在 1900 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，模具钢仍是 工具制造 的底层支撑，并持续影响 硅钢。"
      }
    ],
    "significance": "模具钢把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 硅钢。"
  },
{
    "id": "mat_siliconsteel",
    "name": "硅钢",
    "en": "Silicon Steel",
    "category": "material",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "硅钢在 1900 年 前后成形，依托 化学、经典力学、用火 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 镍合金 等后续技术。",
    "dependsOn": ["chemistry","physics","fire","mat_die"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "硅钢在 1900 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，硅钢仍是 工具制造 的底层支撑，并持续影响 镍合金。"
      }
    ],
    "significance": "硅钢把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 镍合金。"
  },
{
    "id": "mat_alu",
    "name": "铝冶炼",
    "en": "Aluminium Smelting",
    "category": "material",
    "era": "industrial",
    "date": "1825 年",
    "year": 1825,
    "people": "",
    "place": "",
    "summary": "铝冶炼在 1825 年 前后成形，依托 化学、经典力学、用火 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 巴氏合金、压铸、螺旋桨 等后续技术。",
    "dependsOn": ["chemistry","physics","fire","mat_thermoelec"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "铝冶炼在 1825 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，铝冶炼仍是 工具制造 的底层支撑，并持续影响 巴氏合金、压铸、螺旋桨。"
      }
    ],
    "significance": "铝冶炼把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 巴氏合金、压铸、螺旋桨。"
  },
{
    "id": "mat_alalloy",
    "name": "硬铝合金",
    "en": "Duralumin",
    "category": "material",
    "era": "electrical",
    "date": "1909 年",
    "year": 1909,
    "people": "",
    "place": "",
    "summary": "硬铝合金在 1909 年 前后成形，依托 化学、经典力学、用火 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 铁氧体 等后续技术。",
    "dependsOn": ["chemistry","physics","fire","mat_ito"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "硬铝合金在 1909 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，硬铝合金仍是 工具制造 的底层支撑，并持续影响 铁氧体。"
      }
    ],
    "significance": "硬铝合金把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 铁氧体。"
  },
{
    "id": "mat_tialloy",
    "name": "钛合金",
    "en": "Titanium Alloy",
    "category": "material",
    "era": "info",
    "date": "1950 年",
    "year": 1950,
    "people": "",
    "place": "",
    "summary": "钛合金在 1950 年 前后成形，依托 化学、经典力学、用火 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 氮化硅陶瓷 等后续技术。",
    "dependsOn": ["chemistry","physics","fire","mat_abs"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "钛合金在 1950 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，钛合金仍是 工具制造 的底层支撑，并持续影响 氮化硅陶瓷。"
      }
    ],
    "significance": "钛合金把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 氮化硅陶瓷。"
  },
{
    "id": "mat_mgalloy",
    "name": "镁合金",
    "en": "Magnesium Alloy",
    "category": "material",
    "era": "electrical",
    "date": "1930 年",
    "year": 1930,
    "people": "",
    "place": "",
    "summary": "镁合金约 1930 年 成熟，建立在 化学、经典力学、用火 之上完成关键突破；其能力延伸到 工具制造、结构件，并为 玻璃纤维 的发展铺平了道路。",
    "dependsOn": ["chemistry","physics","fire","mat_sbr"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "镁合金在 1930 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，镁合金仍是 工具制造 的底层支撑，并持续影响 玻璃纤维。"
      }
    ],
    "significance": "镁合金把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 玻璃纤维。"
  },
{
    "id": "mat_nialloy",
    "name": "镍合金",
    "en": "Nickel Alloy",
    "category": "material",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "镍合金在 1900 年 前后成形，依托 化学、经典力学、用火 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 氧化铝陶瓷 等后续技术。",
    "dependsOn": ["chemistry","physics","fire","mat_siliconsteel"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "镍合金在 1900 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，镍合金仍是 工具制造 的底层支撑，并持续影响 氧化铝陶瓷。"
      }
    ],
    "significance": "镍合金把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 氧化铝陶瓷。"
  },
{
    "id": "mat_zinc",
    "name": "锌冶炼",
    "en": "Zinc Smelting",
    "category": "material",
    "era": "classical",
    "date": "公元前 500 年",
    "year": -500,
    "people": "",
    "place": "",
    "summary": "锌冶炼在 公元前 500 年 前后成形，依托 用火、铸铁、永磁材料 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 渗碳、高炉炼铁 等后续技术。",
    "dependsOn": ["fire","mat_castiron","magnets"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "古典时代",
        "text": "锌冶炼在 公元前 500 年 前后出现，依托 用火 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，锌冶炼仍是 工具制造 的底层支撑，并持续影响 渗碳、高炉炼铁。"
      }
    ],
    "significance": "锌冶炼把 用火 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 渗碳、高炉炼铁。"
  },
{
    "id": "mat_lead",
    "name": "铅冶炼",
    "en": "Lead Smelting",
    "category": "material",
    "era": "ancient",
    "date": "公元前 3000 年",
    "year": -3000,
    "people": "",
    "place": "",
    "summary": "铅冶炼在 公元前 3000 年 前后成形，依托 用火、青铜合金、青铜 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 锡冶炼、软钎料 等后续技术。",
    "dependsOn": ["fire","mat_bronze","bronze"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "铅冶炼在 公元前 3000 年 前后出现，依托 用火 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，铅冶炼仍是 工具制造 的底层支撑，并持续影响 锡冶炼、软钎料。"
      }
    ],
    "significance": "铅冶炼把 用火 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 锡冶炼、软钎料。"
  },
{
    "id": "mat_tin",
    "name": "锡冶炼",
    "en": "Tin Smelting",
    "category": "material",
    "era": "ancient",
    "date": "公元前 3000 年",
    "year": -3000,
    "people": "",
    "place": "",
    "summary": "锡冶炼约 公元前 3000 年 成熟，建立在 用火、铅冶炼、青铜合金 之上完成关键突破；其能力延伸到 工具制造、结构件，并为 软钎料、烧结 的发展铺平了道路。",
    "dependsOn": ["fire","mat_lead","mat_bronze"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "锡冶炼在 公元前 3000 年 前后出现，依托 用火 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，锡冶炼仍是 工具制造 的底层支撑，并持续影响 软钎料、烧结。"
      }
    ],
    "significance": "锡冶炼把 用火 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 软钎料、烧结。"
  },
{
    "id": "mat_mercury",
    "name": "汞冶炼",
    "en": "Mercury Smelting",
    "category": "material",
    "era": "ancient",
    "date": "公元前 2000 年",
    "year": -2000,
    "people": "",
    "place": "",
    "summary": "汞冶炼约 公元前 2000 年 成熟，建立在 用火、黄铜、玻璃 之上完成关键突破；其能力延伸到 工具制造、结构件，并为 炻器、混凝土 的发展铺平了道路。",
    "dependsOn": ["fire","mat_brass","mat_glass"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "汞冶炼在 公元前 2000 年 前后出现，依托 用火 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，汞冶炼仍是 工具制造 的底层支撑，并持续影响 炻器、混凝土。"
      }
    ],
    "significance": "汞冶炼把 用火 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 炻器、混凝土。"
  },
{
    "id": "mat_gold",
    "name": "黄金加工",
    "en": "Gold Working",
    "category": "material",
    "era": "prehistoric",
    "date": "公元前 4000 年",
    "year": -4000,
    "people": "",
    "place": "",
    "summary": "黄金加工在 公元前 4000 年 前后成形，依托 用火、红铜冶炼、砖与砌筑 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 白银加工、铸造 等后续技术。",
    "dependsOn": ["fire","mat_copper","brick"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "史前时代",
        "text": "黄金加工在 公元前 4000 年 前后出现，依托 用火 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，黄金加工仍是 工具制造 的底层支撑，并持续影响 白银加工、铸造。"
      }
    ],
    "significance": "黄金加工把 用火 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 白银加工、铸造。"
  },
{
    "id": "mat_silver",
    "name": "白银加工",
    "en": "Silver Working",
    "category": "material",
    "era": "prehistoric",
    "date": "公元前 4000 年",
    "year": -4000,
    "people": "",
    "place": "",
    "summary": "白银加工约 公元前 4000 年 成熟，建立在 用火、黄金加工、红铜冶炼 之上完成关键突破；其能力延伸到 工具制造、结构件，并为 铸造、运河 的发展铺平了道路。",
    "dependsOn": ["fire","mat_gold","mat_copper"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "史前时代",
        "text": "白银加工在 公元前 4000 年 前后出现，依托 用火 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，白银加工仍是 工具制造 的底层支撑，并持续影响 铸造、运河。"
      }
    ],
    "significance": "白银加工把 用火 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 铸造、运河。"
  },
{
    "id": "mat_platinum",
    "name": "铂族金属",
    "en": "Platinum Group",
    "category": "material",
    "era": "industrial",
    "date": "1750 年",
    "year": 1750,
    "people": "",
    "place": "",
    "summary": "铂族金属在 1750 年 前后成形，依托 化学、经典力学、用火 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 锰、履带 等后续技术。",
    "dependsOn": ["chemistry","physics","fire","mat_galv"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "铂族金属在 1750 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，铂族金属仍是 工具制造 的底层支撑，并持续影响 锰、履带。"
      }
    ],
    "significance": "铂族金属把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 锰、履带。"
  },
{
    "id": "mat_tungsten",
    "name": "钨",
    "en": "Tungsten",
    "category": "material",
    "era": "industrial",
    "date": "1783 年",
    "year": 1783,
    "people": "",
    "place": "",
    "summary": "钨在 1783 年 前后成形，依托 化学、经典力学、用火 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 锆、热气球 等后续技术。",
    "dependsOn": ["chemistry","physics","fire","mat_molybdenum"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "钨在 1783 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，钨仍是 工具制造 的底层支撑，并持续影响 锆、热气球。"
      }
    ],
    "significance": "钨把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 锆、热气球。"
  },
{
    "id": "mat_chromium",
    "name": "铬",
    "en": "Chromium",
    "category": "material",
    "era": "industrial",
    "date": "1797 年",
    "year": 1797,
    "people": "",
    "place": "",
    "summary": "铬在 1797 年 前后成形，依托 化学、经典力学、用火 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 铍 等后续技术。",
    "dependsOn": ["chemistry","physics","fire","mat_zirconium"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "铬在 1797 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，铬仍是 工具制造 的底层支撑，并持续影响 铍。"
      }
    ],
    "significance": "铬把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 铍。"
  },
{
    "id": "mat_manganese2",
    "name": "锰",
    "en": "Manganese",
    "category": "material",
    "era": "industrial",
    "date": "1774 年",
    "year": 1774,
    "people": "",
    "place": "",
    "summary": "锰约 1774 年 成熟，建立在 化学、经典力学、用火 之上完成关键突破；其能力延伸到 工具制造、结构件，并为 钼 的发展铺平了道路。",
    "dependsOn": ["chemistry","physics","fire","mat_platinum"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "锰在 1774 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，锰仍是 工具制造 的底层支撑，并持续影响 钼。"
      }
    ],
    "significance": "锰把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 钼。"
  },
{
    "id": "mat_cobalt",
    "name": "钴",
    "en": "Cobalt",
    "category": "material",
    "era": "earlymodern",
    "date": "1735 年",
    "year": 1735,
    "people": "",
    "place": "",
    "summary": "钴约 1735 年 成熟，建立在 化学、经典力学、用火 之上完成关键突破；其能力延伸到 工具制造、结构件，并为 热浸镀锌 的发展铺平了道路。",
    "dependsOn": ["chemistry","physics","fire","mat_malleable"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "近代早期",
        "text": "钴在 1735 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，钴仍是 工具制造 的底层支撑，并持续影响 热浸镀锌。"
      }
    ],
    "significance": "钴把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 热浸镀锌。"
  },
{
    "id": "mat_molybdenum",
    "name": "钼",
    "en": "Molybdenum",
    "category": "material",
    "era": "industrial",
    "date": "1781 年",
    "year": 1781,
    "people": "",
    "place": "",
    "summary": "钼在 1781 年 前后成形，依托 化学、经典力学、用火 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 钨 等后续技术。",
    "dependsOn": ["chemistry","physics","fire","mat_manganese2"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "钼在 1781 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，钼仍是 工具制造 的底层支撑，并持续影响 钨。"
      }
    ],
    "significance": "钼把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 钨。"
  },
{
    "id": "mat_vanadium",
    "name": "钒",
    "en": "Vanadium",
    "category": "material",
    "era": "industrial",
    "date": "1801 年",
    "year": 1801,
    "people": "",
    "place": "",
    "summary": "钒约 1801 年 成熟，建立在 化学、经典力学、用火 之上完成关键突破；其能力延伸到 工具制造、结构件，并为 钽 的发展铺平了道路。",
    "dependsOn": ["chemistry","physics","fire","mat_inductionmelt"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "钒在 1801 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，钒仍是 工具制造 的底层支撑，并持续影响 钽。"
      }
    ],
    "significance": "钒把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 钽。"
  },
{
    "id": "mat_tantalum",
    "name": "钽",
    "en": "Tantalum",
    "category": "material",
    "era": "industrial",
    "date": "1802 年",
    "year": 1802,
    "people": "",
    "place": "",
    "summary": "钽在 1802 年 前后成形，依托 化学、经典力学、用火 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 电镀、铁路列车 等后续技术。",
    "dependsOn": ["chemistry","physics","fire","mat_vanadium"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "钽在 1802 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，钽仍是 工具制造 的底层支撑，并持续影响 电镀、铁路列车。"
      }
    ],
    "significance": "钽把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 电镀、铁路列车。"
  },
{
    "id": "mat_niobium",
    "name": "铌",
    "en": "Niobium",
    "category": "material",
    "era": "industrial",
    "date": "1864 年",
    "year": 1864,
    "people": "",
    "place": "",
    "summary": "铌约 1864 年 成熟，建立在 化学、经典力学、用火 之上完成关键突破；其能力延伸到 工具制造、结构件，并为 工具钢、炸药、鱼雷 的发展铺平了道路。",
    "dependsOn": ["chemistry","physics","fire","mat_woodmetal"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "铌在 1864 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，铌仍是 工具制造 的底层支撑，并持续影响 工具钢、炸药、鱼雷。"
      }
    ],
    "significance": "铌把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 工具钢、炸药、鱼雷。"
  },
{
    "id": "mat_zirconium",
    "name": "锆",
    "en": "Zirconium",
    "category": "material",
    "era": "industrial",
    "date": "1789 年",
    "year": 1789,
    "people": "",
    "place": "",
    "summary": "锆在 1789 年 前后成形，依托 化学、经典力学、用火 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 铬、铅笔 等后续技术。",
    "dependsOn": ["chemistry","physics","fire","mat_tungsten"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "锆在 1789 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，锆仍是 工具制造 的底层支撑，并持续影响 铬、铅笔。"
      }
    ],
    "significance": "锆把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 铬、铅笔。"
  },
{
    "id": "mat_beryllium",
    "name": "铍",
    "en": "Beryllium",
    "category": "material",
    "era": "industrial",
    "date": "1798 年",
    "year": 1798,
    "people": "",
    "place": "",
    "summary": "铍约 1798 年 成熟，建立在 化学、经典力学、用火 之上完成关键突破；其能力延伸到 工具制造、结构件，并为 粉末冶金 的发展铺平了道路。",
    "dependsOn": ["chemistry","physics","fire","mat_chromium"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "铍在 1798 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，铍仍是 工具制造 的底层支撑，并持续影响 粉末冶金。"
      }
    ],
    "significance": "铍把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 粉末冶金。"
  },
{
    "id": "mat_solder",
    "name": "软钎料",
    "en": "Solder",
    "category": "material",
    "era": "ancient",
    "date": "公元前 3000 年",
    "year": -3000,
    "people": "",
    "place": "",
    "summary": "软钎料约 公元前 3000 年 成熟，建立在 用火、锡冶炼、铅冶炼 之上完成关键突破；其能力延伸到 工具制造、结构件，并为 烧结、锻造 的发展铺平了道路。",
    "dependsOn": ["fire","mat_tin","mat_lead"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "软钎料在 公元前 3000 年 前后出现，依托 用火 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，软钎料仍是 工具制造 的底层支撑，并持续影响 烧结、锻造。"
      }
    ],
    "significance": "软钎料把 用火 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 烧结、锻造。"
  },
{
    "id": "mat_babbitt",
    "name": "巴氏合金",
    "en": "Babbitt Metal",
    "category": "material",
    "era": "industrial",
    "date": "1839 年",
    "year": 1839,
    "people": "",
    "place": "",
    "summary": "巴氏合金在 1839 年 前后成形，依托 化学、经典力学、用火 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 硫化橡胶 等后续技术。",
    "dependsOn": ["chemistry","physics","fire","mat_alu"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "巴氏合金在 1839 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，巴氏合金仍是 工具制造 的底层支撑，并持续影响 硫化橡胶。"
      }
    ],
    "significance": "巴氏合金把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 硫化橡胶。"
  },
{
    "id": "mat_woodmetal",
    "name": "伍德合金",
    "en": "Wood's Metal",
    "category": "material",
    "era": "industrial",
    "date": "1860 年",
    "year": 1860,
    "people": "",
    "place": "",
    "summary": "伍德合金在 1860 年 前后成形，依托 化学、经典力学、用火 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 铌、地铁、油轮 等后续技术。",
    "dependsOn": ["chemistry","physics","fire","mat_reconcrete"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "伍德合金在 1860 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，伍德合金仍是 工具制造 的底层支撑，并持续影响 铌、地铁、油轮。"
      }
    ],
    "significance": "伍德合金把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 铌、地铁、油轮。"
  },
{
    "id": "mat_shapemem",
    "name": "形状记忆合金",
    "en": "Shape Memory Alloy",
    "category": "material",
    "era": "info",
    "date": "1962 年",
    "year": 1962,
    "people": "",
    "place": "",
    "summary": "形状记忆合金在 1962 年 前后成形，依托 化学、经典力学、用火 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 芳纶、高速铁路 等后续技术。",
    "dependsOn": ["chemistry","physics","fire","mat_pi"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "形状记忆合金在 1962 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，形状记忆合金仍是 工具制造 的底层支撑，并持续影响 芳纶、高速铁路。"
      }
    ],
    "significance": "形状记忆合金把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 芳纶、高速铁路。"
  },
{
    "id": "mat_metglass",
    "name": "非晶合金",
    "en": "Amorphous Alloy",
    "category": "material",
    "era": "info",
    "date": "1960 年",
    "year": 1960,
    "people": "",
    "place": "",
    "summary": "非晶合金在 1960 年 前后成形，依托 化学、经典力学、用火 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 水凝胶 等后续技术。",
    "dependsOn": ["chemistry","physics","fire","composites"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "非晶合金在 1960 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，非晶合金仍是 工具制造 的底层支撑，并持续影响 水凝胶。"
      }
    ],
    "significance": "非晶合金把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 水凝胶。"
  },
{
    "id": "mat_powder",
    "name": "粉末冶金",
    "en": "Powder Metallurgy",
    "category": "material",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "粉末冶金约 1800 年 成熟，建立在 化学、经典力学、用火 之上完成关键突破；其能力延伸到 工具制造、结构件，并为 挤压成形 的发展铺平了道路。",
    "dependsOn": ["chemistry","physics","fire","mat_beryllium"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "粉末冶金在 1800 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，粉末冶金仍是 工具制造 的底层支撑，并持续影响 挤压成形。"
      }
    ],
    "significance": "粉末冶金把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 挤压成形。"
  },
{
    "id": "mat_sinter",
    "name": "烧结",
    "en": "Sintering",
    "category": "material",
    "era": "ancient",
    "date": "公元前 3000 年",
    "year": -3000,
    "people": "",
    "place": "",
    "summary": "烧结约 公元前 3000 年 成熟，建立在 用火、软钎料、锡冶炼 之上完成关键突破；其能力延伸到 工具制造、结构件，并为 锻造、水泥 的发展铺平了道路。",
    "dependsOn": ["fire","mat_solder","mat_tin"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "烧结在 公元前 3000 年 前后出现，依托 用火 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，烧结仍是 工具制造 的底层支撑，并持续影响 锻造、水泥。"
      }
    ],
    "significance": "烧结把 用火 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 锻造、水泥。"
  },
{
    "id": "mat_forging",
    "name": "锻造",
    "en": "Forging",
    "category": "material",
    "era": "ancient",
    "date": "公元前 3000 年",
    "year": -3000,
    "people": "",
    "place": "",
    "summary": "锻造在 公元前 3000 年 前后成形，依托 用火、烧结、软钎料 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 水泥 等后续技术。",
    "dependsOn": ["fire","mat_sinter","mat_solder"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "锻造在 公元前 3000 年 前后出现，依托 用火 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，锻造仍是 工具制造 的底层支撑，并持续影响 水泥。"
      }
    ],
    "significance": "锻造把 用火 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 水泥。"
  },
{
    "id": "mat_casting",
    "name": "铸造",
    "en": "Casting",
    "category": "material",
    "era": "ancient",
    "date": "公元前 3500 年",
    "year": -3500,
    "people": "",
    "place": "",
    "summary": "铸造约 公元前 3500 年 成熟，建立在 用火、白银加工、黄金加工 之上完成关键突破；其能力延伸到 工具制造、结构件，并为 青铜合金、砂型铸造、失蜡法 的发展铺平了道路。",
    "dependsOn": ["fire","mat_silver","mat_gold"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "铸造在 公元前 3500 年 前后出现，依托 用火 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，铸造仍是 工具制造 的底层支撑，并持续影响 青铜合金、砂型铸造、失蜡法。"
      }
    ],
    "significance": "铸造把 用火 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 青铜合金、砂型铸造、失蜡法。"
  },
{
    "id": "mat_rolling",
    "name": "轧制",
    "en": "Rolling",
    "category": "material",
    "era": "earlymodern",
    "date": "1500 年",
    "year": 1500,
    "people": "",
    "place": "",
    "summary": "轧制约 1500 年 成熟，建立在 用火、拉拔、瓷器 之上完成关键突破；其能力延伸到 工具制造、结构件，并为 光学玻璃、镗床、压延 的发展铺平了道路。",
    "dependsOn": ["fire","mat_drawing","mat_porcelain"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "近代早期",
        "text": "轧制在 1500 年 前后出现，依托 用火 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，轧制仍是 工具制造 的底层支撑，并持续影响 光学玻璃、镗床、压延。"
      }
    ],
    "significance": "轧制把 用火 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 光学玻璃、镗床、压延。"
  },
{
    "id": "mat_drawing",
    "name": "拉拔",
    "en": "Wire Drawing",
    "category": "material",
    "era": "medieval",
    "date": "1200 年",
    "year": 1200,
    "people": "",
    "place": "",
    "summary": "拉拔在 1200 年 前后成形，依托 用火、瓷器、坩埚钢 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 轧制、光学玻璃、拉丝 等后续技术。",
    "dependsOn": ["fire","mat_porcelain","mat_steel2"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "中世纪",
        "text": "拉拔在 1200 年 前后出现，依托 用火 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，拉拔仍是 工具制造 的底层支撑，并持续影响 轧制、光学玻璃、拉丝。"
      }
    ],
    "significance": "拉拔把 用火 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 轧制、光学玻璃、拉丝。"
  },
{
    "id": "mat_extrusion",
    "name": "挤压成形",
    "en": "Extrusion",
    "category": "material",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "挤压成形约 1800 年 成熟，建立在 化学、经典力学、用火 之上完成关键突破；其能力延伸到 工具制造、结构件，并为 表面硬化 的发展铺平了道路。",
    "dependsOn": ["chemistry","physics","fire","mat_powder"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "挤压成形在 1800 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，挤压成形仍是 工具制造 的底层支撑，并持续影响 表面硬化。"
      }
    ],
    "significance": "挤压成形把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 表面硬化。"
  },
{
    "id": "mat_heat",
    "name": "热处理",
    "en": "Heat Treatment",
    "category": "material",
    "era": "ancient",
    "date": "公元前 1000 年",
    "year": -1000,
    "people": "",
    "place": "",
    "summary": "热处理在 公元前 1000 年 前后成形，依托 用火、熟铁、钢铁 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 淬火、回火 等后续技术。",
    "dependsOn": ["fire","mat_wrought","steel"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "热处理在 公元前 1000 年 前后出现，依托 用火 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，热处理仍是 工具制造 的底层支撑，并持续影响 淬火、回火。"
      }
    ],
    "significance": "热处理把 用火 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 淬火、回火。"
  },
{
    "id": "mat_quench",
    "name": "淬火",
    "en": "Quenching",
    "category": "material",
    "era": "ancient",
    "date": "公元前 1000 年",
    "year": -1000,
    "people": "",
    "place": "",
    "summary": "淬火在 公元前 1000 年 前后成形，依托 用火、热处理、熟铁 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 回火、退火 等后续技术。",
    "dependsOn": ["fire","mat_heat","mat_wrought"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "淬火在 公元前 1000 年 前后出现，依托 用火 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，淬火仍是 工具制造 的底层支撑，并持续影响 回火、退火。"
      }
    ],
    "significance": "淬火把 用火 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 回火、退火。"
  },
{
    "id": "mat_temper",
    "name": "回火",
    "en": "Tempering",
    "category": "material",
    "era": "ancient",
    "date": "公元前 1000 年",
    "year": -1000,
    "people": "",
    "place": "",
    "summary": "回火约 公元前 1000 年 成熟，建立在 用火、淬火、热处理 之上完成关键突破；其能力延伸到 工具制造、结构件，并为 退火 的发展铺平了道路。",
    "dependsOn": ["fire","mat_quench","mat_heat"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "回火在 公元前 1000 年 前后出现，依托 用火 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，回火仍是 工具制造 的底层支撑，并持续影响 退火。"
      }
    ],
    "significance": "回火把 用火 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 退火。"
  },
{
    "id": "mat_anneal",
    "name": "退火",
    "en": "Annealing",
    "category": "material",
    "era": "ancient",
    "date": "公元前 1000 年",
    "year": -1000,
    "people": "",
    "place": "",
    "summary": "退火约 公元前 1000 年 成熟，建立在 用火、回火、淬火 之上完成关键突破；其能力延伸到 工具制造、结构件，并为 铸铁、车床、灯塔 的发展铺平了道路。",
    "dependsOn": ["fire","mat_temper","mat_quench"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "退火在 公元前 1000 年 前后出现，依托 用火 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，退火仍是 工具制造 的底层支撑，并持续影响 铸铁、车床、灯塔。"
      }
    ],
    "significance": "退火把 用火 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 铸铁、车床、灯塔。"
  },
{
    "id": "mat_carburize",
    "name": "渗碳",
    "en": "Carburizing",
    "category": "material",
    "era": "classical",
    "date": "公元前 500 年",
    "year": -500,
    "people": "",
    "place": "",
    "summary": "渗碳约 公元前 500 年 成熟，建立在 用火、锌冶炼、铸铁 之上完成关键突破；其能力延伸到 工具制造、结构件，并为 高炉炼铁 的发展铺平了道路。",
    "dependsOn": ["fire","mat_zinc","mat_castiron"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "古典时代",
        "text": "渗碳在 公元前 500 年 前后出现，依托 用火 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，渗碳仍是 工具制造 的底层支撑，并持续影响 高炉炼铁。"
      }
    ],
    "significance": "渗碳把 用火 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 高炉炼铁。"
  },
{
    "id": "mat_casehard",
    "name": "表面硬化",
    "en": "Case Hardening",
    "category": "material",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "表面硬化约 1800 年 成熟，建立在 化学、经典力学、用火 之上完成关键突破；其能力延伸到 工具制造、结构件，并为 胶合板 的发展铺平了道路。",
    "dependsOn": ["chemistry","physics","fire","mat_extrusion"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "表面硬化在 1800 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，表面硬化仍是 工具制造 的底层支撑，并持续影响 胶合板。"
      }
    ],
    "significance": "表面硬化把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 胶合板。"
  },
{
    "id": "mat_plating",
    "name": "电镀",
    "en": "Electroplating",
    "category": "material",
    "era": "industrial",
    "date": "1805 年",
    "year": 1805,
    "people": "",
    "place": "",
    "summary": "电镀约 1805 年 成熟，建立在 化学、经典力学、用火 之上完成关键突破；其能力延伸到 工具制造、结构件，并为 热电材料、铣床、刨床 的发展铺平了道路。",
    "dependsOn": ["chemistry","physics","fire","mat_tantalum"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "电镀在 1805 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，电镀仍是 工具制造 的底层支撑，并持续影响 热电材料、铣床、刨床。"
      }
    ],
    "significance": "电镀把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 热电材料、铣床、刨床。"
  },
{
    "id": "mat_anodize",
    "name": "阳极氧化",
    "en": "Anodizing",
    "category": "material",
    "era": "electrical",
    "date": "1923 年",
    "year": 1923,
    "people": "",
    "place": "",
    "summary": "阳极氧化在 1923 年 前后成形，依托 化学、经典力学、用火 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 碳化钨 等后续技术。",
    "dependsOn": ["chemistry","physics","fire","mat_zirconia"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "阳极氧化在 1923 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，阳极氧化仍是 工具制造 的底层支撑，并持续影响 碳化钨。"
      }
    ],
    "significance": "阳极氧化把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 碳化钨。"
  },
{
    "id": "mat_galv",
    "name": "热浸镀锌",
    "en": "Hot-Dip Galvanizing",
    "category": "material",
    "era": "earlymodern",
    "date": "1742 年",
    "year": 1742,
    "people": "",
    "place": "",
    "summary": "热浸镀锌在 1742 年 前后成形，依托 化学、经典力学、用火 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 铂族金属 等后续技术。",
    "dependsOn": ["chemistry","physics","fire","mat_cobalt"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "近代早期",
        "text": "热浸镀锌在 1742 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，热浸镀锌仍是 工具制造 的底层支撑，并持续影响 铂族金属。"
      }
    ],
    "significance": "热浸镀锌把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 铂族金属。"
  },
{
    "id": "mat_pottery",
    "name": "陶器",
    "en": "Pottery",
    "category": "material",
    "era": "prehistoric",
    "date": "约 1 万年前",
    "year": -10000,
    "people": "",
    "place": "",
    "summary": "陶器约 约 1 万年前 成熟，建立在 用火、陶器、石器 之上完成关键突破；其能力延伸到 工具制造、结构件，并为 红铜冶炼、钻、独木舟 的发展铺平了道路。",
    "dependsOn": ["fire","pottery","stone_tools"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "史前时代",
        "text": "陶器在 约 1 万年前 前后出现，依托 用火 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，陶器仍是 工具制造 的底层支撑，并持续影响 红铜冶炼、钻、独木舟。"
      }
    ],
    "significance": "陶器把 用火 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 红铜冶炼、钻、独木舟。"
  },
{
    "id": "mat_porcelain",
    "name": "瓷器",
    "en": "Porcelain",
    "category": "material",
    "era": "medieval",
    "date": "600 年",
    "year": 600,
    "people": "",
    "place": "",
    "summary": "瓷器约 600 年 成熟，建立在 用火、坩埚钢、造纸 之上完成关键突破；其能力延伸到 工具制造、结构件，并为 轧制、拉拔、肋拱 的发展铺平了道路。",
    "dependsOn": ["fire","mat_steel2","paper"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "中世纪",
        "text": "瓷器在 600 年 前后出现，依托 用火 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，瓷器仍是 工具制造 的底层支撑，并持续影响 轧制、拉拔、肋拱。"
      }
    ],
    "significance": "瓷器把 用火 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 轧制、拉拔、肋拱。"
  },
{
    "id": "mat_stoneware",
    "name": "炻器",
    "en": "Stoneware",
    "category": "material",
    "era": "ancient",
    "date": "公元前 2000 年",
    "year": -2000,
    "people": "",
    "place": "",
    "summary": "炻器在 公元前 2000 年 前后成形，依托 用火、汞冶炼、黄铜 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 混凝土、耐火材料 等后续技术。",
    "dependsOn": ["fire","mat_mercury","mat_brass"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "炻器在 公元前 2000 年 前后出现，依托 用火 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，炻器仍是 工具制造 的底层支撑，并持续影响 混凝土、耐火材料。"
      }
    ],
    "significance": "炻器把 用火 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 混凝土、耐火材料。"
  },
{
    "id": "mat_glass",
    "name": "玻璃",
    "en": "Glass",
    "category": "material",
    "era": "ancient",
    "date": "公元前 2500 年",
    "year": -2500,
    "people": "",
    "place": "",
    "summary": "玻璃在 公元前 2500 年 前后成形，依托 用火、玻璃、水泥 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 黄铜、汞冶炼 等后续技术。",
    "dependsOn": ["fire","glass","mat_cement"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "玻璃在 公元前 2500 年 前后出现，依托 用火 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，玻璃仍是 工具制造 的底层支撑，并持续影响 黄铜、汞冶炼。"
      }
    ],
    "significance": "玻璃把 用火 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 黄铜、汞冶炼。"
  },
{
    "id": "mat_flatglass",
    "name": "平板玻璃",
    "en": "Flat Glass",
    "category": "material",
    "era": "classical",
    "date": "100 年",
    "year": 100,
    "people": "",
    "place": "",
    "summary": "平板玻璃约 100 年 成熟，建立在 用火、水泥与混凝土、高炉炼铁 之上完成关键突破；其能力延伸到 工具制造、结构件，并为 坩埚钢 的发展铺平了道路。",
    "dependsOn": ["fire","cement","mat_blastfurnace"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "古典时代",
        "text": "平板玻璃在 100 年 前后出现，依托 用火 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，平板玻璃仍是 工具制造 的底层支撑，并持续影响 坩埚钢。"
      }
    ],
    "significance": "平板玻璃把 用火 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 坩埚钢。"
  },
{
    "id": "mat_floatglass",
    "name": "浮法玻璃",
    "en": "Float Glass",
    "category": "material",
    "era": "info",
    "date": "1952 年",
    "year": 1952,
    "people": "",
    "place": "",
    "summary": "浮法玻璃在 1952 年 前后成形，依托 化学、经典力学、用火 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 聚碳酸酯、喷气客机、编译器 等后续技术。",
    "dependsOn": ["chemistry","physics","fire","mat_foammetal"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "浮法玻璃在 1952 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，浮法玻璃仍是 工具制造 的底层支撑，并持续影响 聚碳酸酯、喷气客机、编译器。"
      }
    ],
    "significance": "浮法玻璃把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 聚碳酸酯、喷气客机、编译器。"
  },
{
    "id": "mat_tempered",
    "name": "钢化玻璃",
    "en": "Tempered Glass",
    "category": "material",
    "era": "industrial",
    "date": "1874 年",
    "year": 1874,
    "people": "",
    "place": "",
    "summary": "钢化玻璃在 1874 年 前后成形，依托 化学、经典力学、用火 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 压电材料、电阻焊、电话 等后续技术。",
    "dependsOn": ["chemistry","physics","fire","mat_toolsteel"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "钢化玻璃在 1874 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，钢化玻璃仍是 工具制造 的底层支撑，并持续影响 压电材料、电阻焊、电话。"
      }
    ],
    "significance": "钢化玻璃把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 压电材料、电阻焊、电话。"
  },
{
    "id": "mat_opticalglass",
    "name": "光学玻璃",
    "en": "Optical Glass",
    "category": "material",
    "era": "earlymodern",
    "date": "1600 年",
    "year": 1600,
    "people": "",
    "place": "",
    "summary": "光学玻璃在 1600 年 前后成形，依托 用火、轧制、拉拔 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 沸石分子筛、潜艇、索道 等后续技术。",
    "dependsOn": ["fire","mat_rolling","mat_drawing"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "近代早期",
        "text": "光学玻璃在 1600 年 前后出现，依托 用火 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，光学玻璃仍是 工具制造 的底层支撑，并持续影响 沸石分子筛、潜艇、索道。"
      }
    ],
    "significance": "光学玻璃把 用火 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 沸石分子筛、潜艇、索道。"
  },
{
    "id": "mat_glassfiber",
    "name": "玻璃纤维",
    "en": "Glass Fiber",
    "category": "material",
    "era": "electrical",
    "date": "1930 年",
    "year": 1930,
    "people": "",
    "place": "",
    "summary": "玻璃纤维在 1930 年 前后成形，依托 化学、经典力学、用火 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 聚苯乙烯 等后续技术。",
    "dependsOn": ["chemistry","physics","fire","mat_mgalloy"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "玻璃纤维在 1930 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，玻璃纤维仍是 工具制造 的底层支撑，并持续影响 聚苯乙烯。"
      }
    ],
    "significance": "玻璃纤维把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 聚苯乙烯。"
  },
{
    "id": "mat_cement",
    "name": "水泥",
    "en": "Cement",
    "category": "material",
    "era": "ancient",
    "date": "公元前 3000 年",
    "year": -3000,
    "people": "",
    "place": "",
    "summary": "水泥在 公元前 3000 年 前后成形，依托 用火、锻造、烧结 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 玻璃、模具、抛光 等后续技术。",
    "dependsOn": ["fire","mat_forging","mat_sinter"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "水泥在 公元前 3000 年 前后出现，依托 用火 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，水泥仍是 工具制造 的底层支撑，并持续影响 玻璃、模具、抛光。"
      }
    ],
    "significance": "水泥把 用火 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 玻璃、模具、抛光。"
  },
{
    "id": "mat_concrete",
    "name": "混凝土",
    "en": "Concrete",
    "category": "material",
    "era": "ancient",
    "date": "公元前 2000 年",
    "year": -2000,
    "people": "",
    "place": "",
    "summary": "混凝土约 公元前 2000 年 成熟，建立在 用火、炻器、汞冶炼 之上完成关键突破；其能力延伸到 工具制造、结构件，并为 耐火材料、天然橡胶、铆接 的发展铺平了道路。",
    "dependsOn": ["fire","mat_stoneware","mat_mercury"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "混凝土在 公元前 2000 年 前后出现，依托 用火 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，混凝土仍是 工具制造 的底层支撑，并持续影响 耐火材料、天然橡胶、铆接。"
      }
    ],
    "significance": "混凝土把 用火 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 耐火材料、天然橡胶、铆接。"
  },
{
    "id": "mat_reconcrete",
    "name": "钢筋混凝土",
    "en": "Reinforced Concrete",
    "category": "material",
    "era": "industrial",
    "date": "1849 年",
    "year": 1849,
    "people": "",
    "place": "",
    "summary": "钢筋混凝土在 1849 年 前后成形，依托 化学、经典力学、用火 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 伍德合金、飞艇、滑翔机 等后续技术。",
    "dependsOn": ["chemistry","physics","fire","mat_continuouscast"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "钢筋混凝土在 1849 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，钢筋混凝土仍是 工具制造 的底层支撑，并持续影响 伍德合金、飞艇、滑翔机。"
      }
    ],
    "significance": "钢筋混凝土把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 伍德合金、飞艇、滑翔机。"
  },
{
    "id": "mat_prestress",
    "name": "预应力混凝土",
    "en": "Prestressed Concrete",
    "category": "material",
    "era": "industrial",
    "date": "1886 年",
    "year": 1886,
    "people": "",
    "place": "",
    "summary": "预应力混凝土约 1886 年 成熟，建立在 化学、经典力学、用火 之上完成关键突破；其能力延伸到 工具制造、结构件，并为 锗 的发展铺平了道路。",
    "dependsOn": ["chemistry","physics","fire","mat_manganese"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "预应力混凝土在 1886 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，预应力混凝土仍是 工具制造 的底层支撑，并持续影响 锗。"
      }
    ],
    "significance": "预应力混凝土把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 锗。"
  },
{
    "id": "mat_refractory",
    "name": "耐火材料",
    "en": "Refractory",
    "category": "material",
    "era": "ancient",
    "date": "公元前 1500 年",
    "year": -1500,
    "people": "",
    "place": "",
    "summary": "耐火材料约 公元前 1500 年 成熟，建立在 用火、混凝土、炻器 之上完成关键突破；其能力延伸到 工具制造、结构件，并为 天然橡胶 的发展铺平了道路。",
    "dependsOn": ["fire","mat_concrete","mat_stoneware"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "耐火材料在 公元前 1500 年 前后出现，依托 用火 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，耐火材料仍是 工具制造 的底层支撑，并持续影响 天然橡胶。"
      }
    ],
    "significance": "耐火材料把 用火 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 天然橡胶。"
  },
{
    "id": "mat_sic",
    "name": "碳化硅",
    "en": "Silicon Carbide",
    "category": "material",
    "era": "industrial",
    "date": "1891 年",
    "year": 1891,
    "people": "",
    "place": "",
    "summary": "碳化硅约 1891 年 成熟，建立在 化学、经典力学、用火 之上完成关键突破；其能力延伸到 工具制造、结构件，并为 高速钢、滚珠丝杠、公共汽车 的发展铺平了道路。",
    "dependsOn": ["chemistry","physics","fire","mat_ge"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "碳化硅在 1891 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，碳化硅仍是 工具制造 的底层支撑，并持续影响 高速钢、滚珠丝杠、公共汽车。"
      }
    ],
    "significance": "碳化硅把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 高速钢、滚珠丝杠、公共汽车。"
  },
{
    "id": "mat_alumina",
    "name": "氧化铝陶瓷",
    "en": "Alumina Ceramic",
    "category": "material",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "氧化铝陶瓷约 1900 年 成熟，建立在 化学、经典力学、用火 之上完成关键突破；其能力延伸到 工具制造、结构件，并为 热喷涂 的发展铺平了道路。",
    "dependsOn": ["chemistry","physics","fire","mat_nialloy"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "氧化铝陶瓷在 1900 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，氧化铝陶瓷仍是 工具制造 的底层支撑，并持续影响 热喷涂。"
      }
    ],
    "significance": "氧化铝陶瓷把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 热喷涂。"
  },
{
    "id": "mat_zirconia",
    "name": "氧化锆陶瓷",
    "en": "Zirconia Ceramic",
    "category": "material",
    "era": "electrical",
    "date": "1920 年",
    "year": 1920,
    "people": "",
    "place": "",
    "summary": "氧化锆陶瓷约 1920 年 成熟，建立在 化学、经典力学、用火 之上完成关键突破；其能力延伸到 工具制造、结构件，并为 阳极氧化、装载机、服务区 的发展铺平了道路。",
    "dependsOn": ["chemistry","physics","fire","mat_siliconw"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "氧化锆陶瓷在 1920 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，氧化锆陶瓷仍是 工具制造 的底层支撑，并持续影响 阳极氧化、装载机、服务区。"
      }
    ],
    "significance": "氧化锆陶瓷把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 阳极氧化、装载机、服务区。"
  },
{
    "id": "mat_sin",
    "name": "氮化硅陶瓷",
    "en": "Silicon Nitride",
    "category": "material",
    "era": "info",
    "date": "1950 年",
    "year": 1950,
    "people": "",
    "place": "",
    "summary": "氮化硅陶瓷在 1950 年 前后成形，依托 化学、经典力学、用火 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 超高分子量聚乙烯 等后续技术。",
    "dependsOn": ["chemistry","physics","fire","mat_tialloy"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "氮化硅陶瓷在 1950 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，氮化硅陶瓷仍是 工具制造 的底层支撑，并持续影响 超高分子量聚乙烯。"
      }
    ],
    "significance": "氮化硅陶瓷把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 超高分子量聚乙烯。"
  },
{
    "id": "mat_wc",
    "name": "碳化钨",
    "en": "Tungsten Carbide",
    "category": "material",
    "era": "electrical",
    "date": "1923 年",
    "year": 1923,
    "people": "",
    "place": "",
    "summary": "碳化钨在 1923 年 前后成形，依托 化学、经典力学、用火 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 聚氯乙烯、统计过程控制、旋翼机 等后续技术。",
    "dependsOn": ["chemistry","physics","fire","mat_anodize"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "碳化钨在 1923 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，碳化钨仍是 工具制造 的底层支撑，并持续影响 聚氯乙烯、统计过程控制、旋翼机。"
      }
    ],
    "significance": "碳化钨把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 聚氯乙烯、统计过程控制、旋翼机。"
  },
{
    "id": "mat_foamceramic",
    "name": "泡沫陶瓷",
    "en": "Foam Ceramic",
    "category": "material",
    "era": "info",
    "date": "1970 年",
    "year": 1970,
    "people": "",
    "place": "",
    "summary": "泡沫陶瓷约 1970 年 成熟，建立在 化学、经典力学、用火 之上完成关键突破；其能力延伸到 工具制造、结构件，并为 钙钛矿材料 的发展铺平了道路。",
    "dependsOn": ["chemistry","physics","fire","mat_gan"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "泡沫陶瓷在 1970 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，泡沫陶瓷仍是 工具制造 的底层支撑，并持续影响 钙钛矿材料。"
      }
    ],
    "significance": "泡沫陶瓷把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 钙钛矿材料。"
  },
{
    "id": "mat_aerogel",
    "name": "气凝胶",
    "en": "Aerogel",
    "category": "material",
    "era": "electrical",
    "date": "1931 年",
    "year": 1931,
    "people": "",
    "place": "",
    "summary": "气凝胶约 1931 年 成熟，建立在 化学、经典力学、用火 之上完成关键突破；其能力延伸到 工具制造、结构件，并为 丁腈橡胶 的发展铺平了道路。",
    "dependsOn": ["chemistry","physics","fire","mat_frp"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "气凝胶在 1931 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，气凝胶仍是 工具制造 的底层支撑，并持续影响 丁腈橡胶。"
      }
    ],
    "significance": "气凝胶把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 丁腈橡胶。"
  },
{
    "id": "mat_rubber",
    "name": "天然橡胶",
    "en": "Natural Rubber",
    "category": "material",
    "era": "ancient",
    "date": "公元前 1500 年",
    "year": -1500,
    "people": "",
    "place": "",
    "summary": "天然橡胶在 公元前 1500 年 前后成形，依托 用火、耐火材料、混凝土 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 块炼铁 等后续技术。",
    "dependsOn": ["fire","mat_refractory","mat_concrete"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "天然橡胶在 公元前 1500 年 前后出现，依托 用火 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，天然橡胶仍是 工具制造 的底层支撑，并持续影响 块炼铁。"
      }
    ],
    "significance": "天然橡胶把 用火 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 块炼铁。"
  },
{
    "id": "mat_vulcan",
    "name": "硫化橡胶",
    "en": "Vulcanized Rubber",
    "category": "material",
    "era": "industrial",
    "date": "1839 年",
    "year": 1839,
    "people": "",
    "place": "",
    "summary": "硫化橡胶约 1839 年 成熟，建立在 化学、经典力学、用火 之上完成关键突破；其能力延伸到 工具制造、结构件，并为 连续铸造 的发展铺平了道路。",
    "dependsOn": ["chemistry","physics","fire","mat_babbitt"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "硫化橡胶在 1839 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，硫化橡胶仍是 工具制造 的底层支撑，并持续影响 连续铸造。"
      }
    ],
    "significance": "硫化橡胶把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 连续铸造。"
  },
{
    "id": "mat_phenolic",
    "name": "酚醛树脂",
    "en": "Phenolic Resin",
    "category": "material",
    "era": "electrical",
    "date": "1907 年",
    "year": 1907,
    "people": "",
    "place": "",
    "summary": "酚醛树脂在 1907 年 前后成形，依托 化学、经典力学、用火 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 透明导电膜 等后续技术。",
    "dependsOn": ["chemistry","physics","fire","plastics"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "酚醛树脂在 1907 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，酚醛树脂仍是 工具制造 的底层支撑，并持续影响 透明导电膜。"
      }
    ],
    "significance": "酚醛树脂把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 透明导电膜。"
  },
{
    "id": "mat_nylon",
    "name": "尼龙",
    "en": "Nylon",
    "category": "material",
    "era": "electrical",
    "date": "1935 年",
    "year": 1935,
    "people": "",
    "place": "",
    "summary": "尼龙在 1935 年 前后成形，依托 化学、经典力学、用火 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 氧化锌半导体 等后续技术。",
    "dependsOn": ["chemistry","physics","fire","mat_pmma"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "尼龙在 1935 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，尼龙仍是 工具制造 的底层支撑，并持续影响 氧化锌半导体。"
      }
    ],
    "significance": "尼龙把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 氧化锌半导体。"
  },
{
    "id": "mat_pe",
    "name": "聚乙烯",
    "en": "Polyethylene",
    "category": "material",
    "era": "electrical",
    "date": "1933 年",
    "year": 1933,
    "people": "",
    "place": "",
    "summary": "聚乙烯约 1933 年 成熟，建立在 化学、经典力学、用火 之上完成关键突破；其能力延伸到 工具制造、结构件，并为 有机玻璃 的发展铺平了道路。",
    "dependsOn": ["chemistry","physics","fire","mat_nbr"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "聚乙烯在 1933 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，聚乙烯仍是 工具制造 的底层支撑，并持续影响 有机玻璃。"
      }
    ],
    "significance": "聚乙烯把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 有机玻璃。"
  },
{
    "id": "mat_pp",
    "name": "聚丙烯",
    "en": "Polypropylene",
    "category": "material",
    "era": "info",
    "date": "1954 年",
    "year": 1954,
    "people": "",
    "place": "",
    "summary": "聚丙烯在 1954 年 前后成形，依托 化学、经典力学、用火 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 碳纤维、热等静压、谐波减速器 等后续技术。",
    "dependsOn": ["chemistry","physics","fire","mat_pc"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "聚丙烯在 1954 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，聚丙烯仍是 工具制造 的底层支撑，并持续影响 碳纤维、热等静压、谐波减速器。"
      }
    ],
    "significance": "聚丙烯把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 碳纤维、热等静压、谐波减速器。"
  },
{
    "id": "mat_pvc",
    "name": "聚氯乙烯",
    "en": "PVC",
    "category": "material",
    "era": "electrical",
    "date": "1926 年",
    "year": 1926,
    "people": "",
    "place": "",
    "summary": "聚氯乙烯约 1926 年 成熟，建立在 化学、经典力学、用火 之上完成关键突破；其能力延伸到 工具制造、结构件，并为 丁苯橡胶、运载火箭、电视 的发展铺平了道路。",
    "dependsOn": ["chemistry","physics","fire","mat_wc"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "聚氯乙烯在 1926 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，聚氯乙烯仍是 工具制造 的底层支撑，并持续影响 丁苯橡胶、运载火箭、电视。"
      }
    ],
    "significance": "聚氯乙烯把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 丁苯橡胶、运载火箭、电视。"
  },
{
    "id": "mat_ps",
    "name": "聚苯乙烯",
    "en": "Polystyrene",
    "category": "material",
    "era": "electrical",
    "date": "1930 年",
    "year": 1930,
    "people": "",
    "place": "",
    "summary": "聚苯乙烯约 1930 年 成熟，建立在 化学、经典力学、用火 之上完成关键突破；其能力延伸到 工具制造、结构件，并为 聚酯 的发展铺平了道路。",
    "dependsOn": ["chemistry","physics","fire","mat_glassfiber"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "聚苯乙烯在 1930 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，聚苯乙烯仍是 工具制造 的底层支撑，并持续影响 聚酯。"
      }
    ],
    "significance": "聚苯乙烯把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 聚酯。"
  },
{
    "id": "mat_ptfe",
    "name": "聚四氟乙烯",
    "en": "PTFE",
    "category": "material",
    "era": "electrical",
    "date": "1938 年",
    "year": 1938,
    "people": "",
    "place": "",
    "summary": "聚四氟乙烯约 1938 年 成熟，建立在 化学、经典力学、用火 之上完成关键突破；其能力延伸到 工具制造、结构件，并为 聚酰胺 的发展铺平了道路。",
    "dependsOn": ["chemistry","physics","fire","mat_pu"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "聚四氟乙烯在 1938 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，聚四氟乙烯仍是 工具制造 的底层支撑，并持续影响 聚酰胺。"
      }
    ],
    "significance": "聚四氟乙烯把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 聚酰胺。"
  },
{
    "id": "mat_polyester",
    "name": "聚酯",
    "en": "Polyester",
    "category": "material",
    "era": "electrical",
    "date": "1930 年",
    "year": 1930,
    "people": "",
    "place": "",
    "summary": "聚酯约 1930 年 成熟，建立在 化学、经典力学、用火 之上完成关键突破；其能力延伸到 工具制造、结构件，并为 玻璃钢 的发展铺平了道路。",
    "dependsOn": ["chemistry","physics","fire","mat_ps"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "聚酯在 1930 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，聚酯仍是 工具制造 的底层支撑，并持续影响 玻璃钢。"
      }
    ],
    "significance": "聚酯把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 玻璃钢。"
  },
{
    "id": "mat_pu",
    "name": "聚氨酯",
    "en": "Polyurethane",
    "category": "material",
    "era": "electrical",
    "date": "1937 年",
    "year": 1937,
    "people": "",
    "place": "",
    "summary": "聚氨酯约 1937 年 成熟，建立在 化学、经典力学、用火 之上完成关键突破；其能力延伸到 工具制造、结构件，并为 聚四氟乙烯 的发展铺平了道路。",
    "dependsOn": ["chemistry","physics","fire","mat_epoxy"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "聚氨酯在 1937 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，聚氨酯仍是 工具制造 的底层支撑，并持续影响 聚四氟乙烯。"
      }
    ],
    "significance": "聚氨酯把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 聚四氟乙烯。"
  },
{
    "id": "mat_epoxy",
    "name": "环氧树脂",
    "en": "Epoxy",
    "category": "material",
    "era": "electrical",
    "date": "1936 年",
    "year": 1936,
    "people": "",
    "place": "",
    "summary": "环氧树脂约 1936 年 成熟，建立在 化学、经典力学、用火 之上完成关键突破；其能力延伸到 工具制造、结构件，并为 聚氨酯 的发展铺平了道路。",
    "dependsOn": ["chemistry","physics","fire","mat_gan2"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "环氧树脂在 1936 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，环氧树脂仍是 工具制造 的底层支撑，并持续影响 聚氨酯。"
      }
    ],
    "significance": "环氧树脂把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 聚氨酯。"
  },
{
    "id": "mat_pmma",
    "name": "有机玻璃",
    "en": "PMMA",
    "category": "material",
    "era": "electrical",
    "date": "1933 年",
    "year": 1933,
    "people": "",
    "place": "",
    "summary": "有机玻璃约 1933 年 成熟，建立在 化学、经典力学、用火 之上完成关键突破；其能力延伸到 工具制造、结构件，并为 尼龙 的发展铺平了道路。",
    "dependsOn": ["chemistry","physics","fire","mat_pe"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "有机玻璃在 1933 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，有机玻璃仍是 工具制造 的底层支撑，并持续影响 尼龙。"
      }
    ],
    "significance": "有机玻璃把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 尼龙。"
  },
{
    "id": "mat_sbr",
    "name": "丁苯橡胶",
    "en": "SBR",
    "category": "material",
    "era": "electrical",
    "date": "1929 年",
    "year": 1929,
    "people": "",
    "place": "",
    "summary": "丁苯橡胶约 1929 年 成熟，建立在 化学、经典力学、用火 之上完成关键突破；其能力延伸到 工具制造、结构件，并为 镁合金 的发展铺平了道路。",
    "dependsOn": ["chemistry","physics","fire","mat_pvc"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "丁苯橡胶在 1929 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，丁苯橡胶仍是 工具制造 的底层支撑，并持续影响 镁合金。"
      }
    ],
    "significance": "丁苯橡胶把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 镁合金。"
  },
{
    "id": "mat_nbr",
    "name": "丁腈橡胶",
    "en": "Nitrile Rubber",
    "category": "material",
    "era": "electrical",
    "date": "1931 年",
    "year": 1931,
    "people": "",
    "place": "",
    "summary": "丁腈橡胶在 1931 年 前后成形，依托 化学、经典力学、用火 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 聚乙烯 等后续技术。",
    "dependsOn": ["chemistry","physics","fire","mat_aerogel"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "丁腈橡胶在 1931 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，丁腈橡胶仍是 工具制造 的底层支撑，并持续影响 聚乙烯。"
      }
    ],
    "significance": "丁腈橡胶把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 聚乙烯。"
  },
{
    "id": "mat_silicone",
    "name": "硅橡胶",
    "en": "Silicone Rubber",
    "category": "material",
    "era": "electrical",
    "date": "1940 年",
    "year": 1940,
    "people": "",
    "place": "",
    "summary": "硅橡胶在 1940 年 前后成形，依托 化学、经典力学、用火 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 多晶硅 等后续技术。",
    "dependsOn": ["chemistry","physics","fire","mat_pa"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "硅橡胶在 1940 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，硅橡胶仍是 工具制造 的底层支撑，并持续影响 多晶硅。"
      }
    ],
    "significance": "硅橡胶把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 多晶硅。"
  },
{
    "id": "mat_abs",
    "name": "ABS 树脂",
    "en": "ABS",
    "category": "material",
    "era": "electrical",
    "date": "1948 年",
    "year": 1948,
    "people": "",
    "place": "",
    "summary": "ABS 树脂在 1948 年 前后成形，依托 化学、经典力学、用火 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 钛合金、数控机床、对称加密 等后续技术。",
    "dependsOn": ["chemistry","physics","fire","semiconductors"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "ABS 树脂在 1948 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，ABS 树脂仍是 工具制造 的底层支撑，并持续影响 钛合金、数控机床、对称加密。"
      }
    ],
    "significance": "ABS 树脂把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 钛合金、数控机床、对称加密。"
  },
{
    "id": "mat_pc",
    "name": "聚碳酸酯",
    "en": "Polycarbonate",
    "category": "material",
    "era": "info",
    "date": "1953 年",
    "year": 1953,
    "people": "",
    "place": "",
    "summary": "聚碳酸酯约 1953 年 成熟，建立在 化学、经典力学、用火 之上完成关键突破；其能力延伸到 工具制造、结构件，并为 聚丙烯、自动导引车、彩色电视 的发展铺平了道路。",
    "dependsOn": ["chemistry","physics","fire","mat_floatglass"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "聚碳酸酯在 1953 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，聚碳酸酯仍是 工具制造 的底层支撑，并持续影响 聚丙烯、自动导引车、彩色电视。"
      }
    ],
    "significance": "聚碳酸酯把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 聚丙烯、自动导引车、彩色电视。"
  },
{
    "id": "mat_pa",
    "name": "聚酰胺",
    "en": "Polyamide",
    "category": "material",
    "era": "electrical",
    "date": "1938 年",
    "year": 1938,
    "people": "",
    "place": "",
    "summary": "聚酰胺约 1938 年 成熟，建立在 化学、经典力学、用火 之上完成关键突破；其能力延伸到 工具制造、结构件，并为 硅橡胶、直升机、圆珠笔 的发展铺平了道路。",
    "dependsOn": ["chemistry","physics","fire","mat_ptfe"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "聚酰胺在 1938 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，聚酰胺仍是 工具制造 的底层支撑，并持续影响 硅橡胶、直升机、圆珠笔。"
      }
    ],
    "significance": "聚酰胺把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 硅橡胶、直升机、圆珠笔。"
  },
{
    "id": "mat_pi",
    "name": "聚酰亚胺",
    "en": "Polyimide",
    "category": "material",
    "era": "info",
    "date": "1961 年",
    "year": 1961,
    "people": "",
    "place": "",
    "summary": "聚酰亚胺约 1961 年 成熟，建立在 化学、经典力学、用火 之上完成关键突破；其能力延伸到 工具制造、结构件，并为 形状记忆合金 的发展铺平了道路。",
    "dependsOn": ["chemistry","physics","fire","mat_sps"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "聚酰亚胺在 1961 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，聚酰亚胺仍是 工具制造 的底层支撑，并持续影响 形状记忆合金。"
      }
    ],
    "significance": "聚酰亚胺把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 形状记忆合金。"
  },
{
    "id": "mat_peek",
    "name": "聚醚醚酮",
    "en": "PEEK",
    "category": "material",
    "era": "info",
    "date": "1978 年",
    "year": 1978,
    "people": "",
    "place": "",
    "summary": "聚醚醚酮约 1978 年 成熟，建立在 化学、经典力学、用火 之上完成关键突破；其能力延伸到 工具制造、结构件，并为 碳化硅半导体、防抱死制动 的发展铺平了道路。",
    "dependsOn": ["chemistry","physics","fire","mat_conductingpoly"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "聚醚醚酮在 1978 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，聚醚醚酮仍是 工具制造 的底层支撑，并持续影响 碳化硅半导体、防抱死制动。"
      }
    ],
    "significance": "聚醚醚酮把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 碳化硅半导体、防抱死制动。"
  },
{
    "id": "mat_cf",
    "name": "碳纤维",
    "en": "Carbon Fiber",
    "category": "material",
    "era": "info",
    "date": "1958 年",
    "year": 1958,
    "people": "",
    "place": "",
    "summary": "碳纤维约 1958 年 成熟，建立在 化学、经典力学、用火 之上完成关键突破；其能力延伸到 工具制造、结构件，并为 加工中心、电子束焊、调制解调器 的发展铺平了道路。",
    "dependsOn": ["chemistry","physics","fire","mat_pp"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "碳纤维在 1958 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，碳纤维仍是 工具制造 的底层支撑，并持续影响 加工中心、电子束焊、调制解调器。"
      }
    ],
    "significance": "碳纤维把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 加工中心、电子束焊、调制解调器。"
  },
{
    "id": "mat_aramid",
    "name": "芳纶",
    "en": "Aramid",
    "category": "material",
    "era": "info",
    "date": "1965 年",
    "year": 1965,
    "people": "",
    "place": "",
    "summary": "芳纶在 1965 年 前后成形，依托 化学、经典力学、用火 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 氮化镓、激光切割、可编程逻辑控制器 等后续技术。",
    "dependsOn": ["chemistry","physics","fire","mat_shapemem"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "芳纶在 1965 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，芳纶仍是 工具制造 的底层支撑，并持续影响 氮化镓、激光切割、可编程逻辑控制器。"
      }
    ],
    "significance": "芳纶把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 氮化镓、激光切割、可编程逻辑控制器。"
  },
{
    "id": "mat_uhmwpe",
    "name": "超高分子量聚乙烯",
    "en": "UHMWPE",
    "category": "material",
    "era": "info",
    "date": "1950 年",
    "year": 1950,
    "people": "",
    "place": "",
    "summary": "超高分子量聚乙烯在 1950 年 前后成形，依托 化学、经典力学、用火 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 磷化铟 等后续技术。",
    "dependsOn": ["chemistry","physics","fire","mat_sin"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "超高分子量聚乙烯在 1950 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，超高分子量聚乙烯仍是 工具制造 的底层支撑，并持续影响 磷化铟。"
      }
    ],
    "significance": "超高分子量聚乙烯把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 磷化铟。"
  },
{
    "id": "mat_conductingpoly",
    "name": "导电聚合物",
    "en": "Conducting Polymer",
    "category": "material",
    "era": "info",
    "date": "1977 年",
    "year": 1977,
    "people": "",
    "place": "",
    "summary": "导电聚合物在 1977 年 前后成形，依托 化学、经典力学、用火 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 聚醚醚酮 等后续技术。",
    "dependsOn": ["chemistry","physics","fire","mat_hydrogenstorage"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "导电聚合物在 1977 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，导电聚合物仍是 工具制造 的底层支撑，并持续影响 聚醚醚酮。"
      }
    ],
    "significance": "导电聚合物把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 聚醚醚酮。"
  },
{
    "id": "mat_hydrogel",
    "name": "水凝胶",
    "en": "Hydrogel",
    "category": "material",
    "era": "info",
    "date": "1960 年",
    "year": 1960,
    "people": "",
    "place": "",
    "summary": "水凝胶在 1960 年 前后成形，依托 化学、经典力学、用火 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 砷化镓 等后续技术。",
    "dependsOn": ["chemistry","physics","fire","mat_metglass"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "水凝胶在 1960 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，水凝胶仍是 工具制造 的底层支撑，并持续影响 砷化镓。"
      }
    ],
    "significance": "水凝胶把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 砷化镓。"
  },
{
    "id": "mat_ge",
    "name": "锗",
    "en": "Germanium",
    "category": "material",
    "era": "industrial",
    "date": "1886 年",
    "year": 1886,
    "people": "",
    "place": "",
    "summary": "锗在 1886 年 前后成形，依托 化学、经典力学、用火 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 碳化硅、感应加热、驱逐舰 等后续技术。",
    "dependsOn": ["chemistry","physics","fire","mat_prestress"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "锗在 1886 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，锗仍是 工具制造 的底层支撑，并持续影响 碳化硅、感应加热、驱逐舰。"
      }
    ],
    "significance": "锗把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 碳化硅、感应加热、驱逐舰。"
  },
{
    "id": "mat_siliconw",
    "name": "单晶硅",
    "en": "Monocrystalline Silicon",
    "category": "material",
    "era": "electrical",
    "date": "1918 年",
    "year": 1918,
    "people": "",
    "place": "",
    "summary": "单晶硅在 1918 年 前后成形，依托 化学、经典力学、用火 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 氧化锆陶瓷、冲锋枪、装甲运兵车 等后续技术。",
    "dependsOn": ["chemistry","physics","fire","mat_stainless"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "单晶硅在 1918 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，单晶硅仍是 工具制造 的底层支撑，并持续影响 氧化锆陶瓷、冲锋枪、装甲运兵车。"
      }
    ],
    "significance": "单晶硅把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 氧化锆陶瓷、冲锋枪、装甲运兵车。"
  },
{
    "id": "mat_polysi",
    "name": "多晶硅",
    "en": "Polycrystalline Silicon",
    "category": "material",
    "era": "electrical",
    "date": "1940 年",
    "year": 1940,
    "people": "",
    "place": "",
    "summary": "多晶硅在 1940 年 前后成形，依托 化学、经典力学、用火 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 蜂窝夹层 等后续技术。",
    "dependsOn": ["chemistry","physics","fire","mat_silicone"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "多晶硅在 1940 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，多晶硅仍是 工具制造 的底层支撑，并持续影响 蜂窝夹层。"
      }
    ],
    "significance": "多晶硅把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 蜂窝夹层。"
  },
{
    "id": "mat_gaas",
    "name": "砷化镓",
    "en": "Gallium Arsenide",
    "category": "material",
    "era": "info",
    "date": "1960 年",
    "year": 1960,
    "people": "",
    "place": "",
    "summary": "砷化镓在 1960 年 前后成形，依托 化学、经典力学、用火 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 碳纤维复合材料 等后续技术。",
    "dependsOn": ["chemistry","physics","fire","mat_hydrogel"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "砷化镓在 1960 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，砷化镓仍是 工具制造 的底层支撑，并持续影响 碳纤维复合材料。"
      }
    ],
    "significance": "砷化镓把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 碳纤维复合材料。"
  },
{
    "id": "mat_gan",
    "name": "氮化镓",
    "en": "Gallium Nitride",
    "category": "material",
    "era": "info",
    "date": "1969 年",
    "year": 1969,
    "people": "",
    "place": "",
    "summary": "氮化镓在 1969 年 前后成形，依托 化学、经典力学、用火 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 泡沫陶瓷、超音速客机 等后续技术。",
    "dependsOn": ["chemistry","physics","fire","mat_aramid"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "氮化镓在 1969 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，氮化镓仍是 工具制造 的底层支撑，并持续影响 泡沫陶瓷、超音速客机。"
      }
    ],
    "significance": "氮化镓把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 泡沫陶瓷、超音速客机。"
  },
{
    "id": "mat_sicsemi",
    "name": "碳化硅半导体",
    "en": "SiC Semiconductor",
    "category": "material",
    "era": "info",
    "date": "1980 年",
    "year": 1980,
    "people": "",
    "place": "",
    "summary": "碳化硅半导体约 1980 年 成熟，建立在 化学、经典力学、用火 之上完成关键突破；其能力延伸到 工具制造、结构件，并为 有机半导体 的发展铺平了道路。",
    "dependsOn": ["chemistry","physics","fire","mat_peek"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "碳化硅半导体在 1980 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，碳化硅半导体仍是 工具制造 的底层支撑，并持续影响 有机半导体。"
      }
    ],
    "significance": "碳化硅半导体把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 有机半导体。"
  },
{
    "id": "mat_gan2",
    "name": "氧化锌半导体",
    "en": "ZnO Semiconductor",
    "category": "material",
    "era": "electrical",
    "date": "1935 年",
    "year": 1935,
    "people": "",
    "place": "",
    "summary": "氧化锌半导体在 1935 年 前后成形，依托 化学、经典力学、用火 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 环氧树脂、雷达 等后续技术。",
    "dependsOn": ["chemistry","physics","fire","mat_nylon"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "氧化锌半导体在 1935 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，氧化锌半导体仍是 工具制造 的底层支撑，并持续影响 环氧树脂、雷达。"
      }
    ],
    "significance": "氧化锌半导体把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 环氧树脂、雷达。"
  },
{
    "id": "mat_inp",
    "name": "磷化铟",
    "en": "Indium Phosphide",
    "category": "material",
    "era": "info",
    "date": "1950 年",
    "year": 1950,
    "people": "",
    "place": "",
    "summary": "磷化铟约 1950 年 成熟，建立在 化学、经典力学、用火 之上完成关键突破；其能力延伸到 工具制造、结构件，并为 吸波隐身材料 的发展铺平了道路。",
    "dependsOn": ["chemistry","physics","fire","mat_uhmwpe"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "磷化铟在 1950 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，磷化铟仍是 工具制造 的底层支撑，并持续影响 吸波隐身材料。"
      }
    ],
    "significance": "磷化铟把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 吸波隐身材料。"
  },
{
    "id": "mat_ito",
    "name": "透明导电膜",
    "en": "ITO Film",
    "category": "material",
    "era": "electrical",
    "date": "1907 年",
    "year": 1907,
    "people": "",
    "place": "",
    "summary": "透明导电膜在 1907 年 前后成形，依托 化学、经典力学、用火 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 硬铝合金 等后续技术。",
    "dependsOn": ["chemistry","physics","fire","mat_phenolic"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "透明导电膜在 1907 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，透明导电膜仍是 工具制造 的底层支撑，并持续影响 硬铝合金。"
      }
    ],
    "significance": "透明导电膜把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 硬铝合金。"
  },
{
    "id": "mat_perovskite",
    "name": "钙钛矿材料",
    "en": "Perovskite",
    "category": "material",
    "era": "info",
    "date": "1970 年",
    "year": 1970,
    "people": "",
    "place": "",
    "summary": "钙钛矿材料在 1970 年 前后成形，依托 化学、经典力学、用火 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 陶瓷基复合材料 等后续技术。",
    "dependsOn": ["chemistry","physics","fire","mat_foamceramic"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "钙钛矿材料在 1970 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，钙钛矿材料仍是 工具制造 的底层支撑，并持续影响 陶瓷基复合材料。"
      }
    ],
    "significance": "钙钛矿材料把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 陶瓷基复合材料。"
  },
{
    "id": "mat_orgsc",
    "name": "有机半导体",
    "en": "Organic Semiconductor",
    "category": "material",
    "era": "info",
    "date": "1980 年",
    "year": 1980,
    "people": "",
    "place": "",
    "summary": "有机半导体在 1980 年 前后成形，依托 化学、经典力学、用火 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 可降解材料 等后续技术。",
    "dependsOn": ["chemistry","physics","fire","mat_sicsemi"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "有机半导体在 1980 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，有机半导体仍是 工具制造 的底层支撑，并持续影响 可降解材料。"
      }
    ],
    "significance": "有机半导体把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 可降解材料。"
  },
{
    "id": "mat_graphene",
    "name": "石墨烯",
    "en": "Graphene",
    "category": "material",
    "era": "intelligent",
    "date": "2004 年",
    "year": 2004,
    "people": "",
    "place": "",
    "summary": "石墨烯在 2004 年 前后成形，依托 化学、经典力学、用火 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 二维材料 等后续技术。",
    "dependsOn": ["chemistry","physics","fire","mat_selfheal"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "石墨烯在 2004 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，石墨烯仍是 工具制造 的底层支撑，并持续影响 二维材料。"
      }
    ],
    "significance": "石墨烯把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 二维材料。"
  },
{
    "id": "mat_2d",
    "name": "二维材料",
    "en": "2D Materials",
    "category": "material",
    "era": "intelligent",
    "date": "2004 年",
    "year": 2004,
    "people": "",
    "place": "",
    "summary": "二维材料在 2004 年 前后成形，依托 化学、经典力学、用火 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 工业 4.0、增减材混合制造、数字化车间 等后续技术。",
    "dependsOn": ["chemistry","physics","fire","mat_graphene"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "二维材料在 2004 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，二维材料仍是 工具制造 的底层支撑，并持续影响 工业 4.0、增减材混合制造、数字化车间。"
      }
    ],
    "significance": "二维材料把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 工业 4.0、增减材混合制造、数字化车间。"
  },
{
    "id": "mat_plywood",
    "name": "胶合板",
    "en": "Plywood",
    "category": "material",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "胶合板在 1800 年 前后成形，依托 化学、经典力学、用火 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 隔热材料 等后续技术。",
    "dependsOn": ["chemistry","physics","fire","mat_casehard"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "胶合板在 1800 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，胶合板仍是 工具制造 的底层支撑，并持续影响 隔热材料。"
      }
    ],
    "significance": "胶合板把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 隔热材料。"
  },
{
    "id": "mat_cfrp",
    "name": "碳纤维复合材料",
    "en": "Carbon Fiber Composite",
    "category": "material",
    "era": "info",
    "date": "1960 年",
    "year": 1960,
    "people": "",
    "place": "",
    "summary": "碳纤维复合材料约 1960 年 成熟，建立在 化学、经典力学、用火 之上完成关键突破；其能力延伸到 工具制造、结构件，并为 金属基复合材料 的发展铺平了道路。",
    "dependsOn": ["chemistry","physics","fire","mat_gaas"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "碳纤维复合材料在 1960 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，碳纤维复合材料仍是 工具制造 的底层支撑，并持续影响 金属基复合材料。"
      }
    ],
    "significance": "碳纤维复合材料把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 金属基复合材料。"
  },
{
    "id": "mat_frp",
    "name": "玻璃钢",
    "en": "FRP",
    "category": "material",
    "era": "electrical",
    "date": "1930 年",
    "year": 1930,
    "people": "",
    "place": "",
    "summary": "玻璃钢在 1930 年 前后成形，依托 化学、经典力学、用火 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 气凝胶、吹塑、喷丸 等后续技术。",
    "dependsOn": ["chemistry","physics","fire","mat_polyester"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "玻璃钢在 1930 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，玻璃钢仍是 工具制造 的底层支撑，并持续影响 气凝胶、吹塑、喷丸。"
      }
    ],
    "significance": "玻璃钢把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 气凝胶、吹塑、喷丸。"
  },
{
    "id": "mat_honeycomb",
    "name": "蜂窝夹层",
    "en": "Honeycomb Sandwich",
    "category": "material",
    "era": "electrical",
    "date": "1940 年",
    "year": 1940,
    "people": "",
    "place": "",
    "summary": "蜂窝夹层在 1940 年 前后成形，依托 化学、经典力学、用火 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 电渣重熔 等后续技术。",
    "dependsOn": ["chemistry","physics","fire","mat_polysi"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "蜂窝夹层在 1940 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，蜂窝夹层仍是 工具制造 的底层支撑，并持续影响 电渣重熔。"
      }
    ],
    "significance": "蜂窝夹层把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 电渣重熔。"
  },
{
    "id": "mat_mmc",
    "name": "金属基复合材料",
    "en": "MMC",
    "category": "material",
    "era": "info",
    "date": "1960 年",
    "year": 1960,
    "people": "",
    "place": "",
    "summary": "金属基复合材料约 1960 年 成熟，建立在 化学、经典力学、用火 之上完成关键突破；其能力延伸到 工具制造、结构件，并为 相变材料 的发展铺平了道路。",
    "dependsOn": ["chemistry","physics","fire","mat_cfrp"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "金属基复合材料在 1960 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，金属基复合材料仍是 工具制造 的底层支撑，并持续影响 相变材料。"
      }
    ],
    "significance": "金属基复合材料把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 相变材料。"
  },
{
    "id": "mat_cmc",
    "name": "陶瓷基复合材料",
    "en": "CMC",
    "category": "material",
    "era": "info",
    "date": "1970 年",
    "year": 1970,
    "people": "",
    "place": "",
    "summary": "陶瓷基复合材料约 1970 年 成熟，建立在 化学、经典力学、用火 之上完成关键突破；其能力延伸到 工具制造、结构件，并为 储氢合金 的发展铺平了道路。",
    "dependsOn": ["chemistry","physics","fire","mat_perovskite"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "陶瓷基复合材料在 1970 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，陶瓷基复合材料仍是 工具制造 的底层支撑，并持续影响 储氢合金。"
      }
    ],
    "significance": "陶瓷基复合材料把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 储氢合金。"
  },
{
    "id": "mat_ltsc",
    "name": "低温超导",
    "en": "Low-Temp Superconductor",
    "category": "material",
    "era": "electrical",
    "date": "1911 年",
    "year": 1911,
    "people": "",
    "place": "",
    "summary": "低温超导在 1911 年 前后成形，依托 化学、经典力学、用火 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 不锈钢、内燃机车、自动驾驶仪 等后续技术。",
    "dependsOn": ["chemistry","physics","fire","mat_ferrite"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "低温超导在 1911 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，低温超导仍是 工具制造 的底层支撑，并持续影响 不锈钢、内燃机车、自动驾驶仪。"
      }
    ],
    "significance": "低温超导把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 不锈钢、内燃机车、自动驾驶仪。"
  },
{
    "id": "mat_htsc",
    "name": "高温超导",
    "en": "High-Temp Superconductor",
    "category": "material",
    "era": "info",
    "date": "1986 年",
    "year": 1986,
    "people": "",
    "place": "",
    "summary": "高温超导在 1986 年 前后成形，依托 化学、经典力学、用火 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 钇钡铜氧、增材制造、六西格玛 等后续技术。",
    "dependsOn": ["chemistry","physics","fire","mat_laserclad"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "高温超导在 1986 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，高温超导仍是 工具制造 的底层支撑，并持续影响 钇钡铜氧、增材制造、六西格玛。"
      }
    ],
    "significance": "高温超导把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 钇钡铜氧、增材制造、六西格玛。"
  },
{
    "id": "mat_ybco",
    "name": "钇钡铜氧",
    "en": "YBCO",
    "category": "material",
    "era": "info",
    "date": "1987 年",
    "year": 1987,
    "people": "",
    "place": "",
    "summary": "钇钡铜氧约 1987 年 成熟，建立在 化学、经典力学、用火 之上完成关键突破；其能力延伸到 工具制造、结构件，并为 仿生材料 的发展铺平了道路。",
    "dependsOn": ["chemistry","physics","fire","mat_htsc"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "钇钡铜氧在 1987 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，钇钡铜氧仍是 工具制造 的底层支撑，并持续影响 仿生材料。"
      }
    ],
    "significance": "钇钡铜氧把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 仿生材料。"
  },
{
    "id": "mat_hydrogenstorage",
    "name": "储氢合金",
    "en": "Hydrogen Storage Alloy",
    "category": "material",
    "era": "info",
    "date": "1970 年",
    "year": 1970,
    "people": "",
    "place": "",
    "summary": "储氢合金约 1970 年 成熟，建立在 化学、经典力学、用火 之上完成关键突破；其能力延伸到 工具制造、结构件，并为 导电聚合物、水射流切割、金属注射成形 的发展铺平了道路。",
    "dependsOn": ["chemistry","physics","fire","mat_cmc"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "储氢合金在 1970 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，储氢合金仍是 工具制造 的底层支撑，并持续影响 导电聚合物、水射流切割、金属注射成形。"
      }
    ],
    "significance": "储氢合金把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 导电聚合物、水射流切割、金属注射成形。"
  },
{
    "id": "mat_pcm",
    "name": "相变材料",
    "en": "Phase Change Material",
    "category": "material",
    "era": "info",
    "date": "1960 年",
    "year": 1960,
    "people": "",
    "place": "",
    "summary": "相变材料在 1960 年 前后成形，依托 化学、经典力学、用火 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 非晶软磁 等后续技术。",
    "dependsOn": ["chemistry","physics","fire","mat_mmc"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "相变材料在 1960 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，相变材料仍是 工具制造 的底层支撑，并持续影响 非晶软磁。"
      }
    ],
    "significance": "相变材料把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 非晶软磁。"
  },
{
    "id": "mat_thermoelec",
    "name": "热电材料",
    "en": "Thermoelectric Material",
    "category": "material",
    "era": "industrial",
    "date": "1821 年",
    "year": 1821,
    "people": "",
    "place": "",
    "summary": "热电材料在 1821 年 前后成形，依托 化学、经典力学、用火 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 铝冶炼 等后续技术。",
    "dependsOn": ["chemistry","physics","fire","mat_plating"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "热电材料在 1821 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，热电材料仍是 工具制造 的底层支撑，并持续影响 铝冶炼。"
      }
    ],
    "significance": "热电材料把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 铝冶炼。"
  },
{
    "id": "mat_piezo",
    "name": "压电材料",
    "en": "Piezoelectric Material",
    "category": "material",
    "era": "industrial",
    "date": "1880 年",
    "year": 1880,
    "people": "",
    "place": "",
    "summary": "压电材料约 1880 年 成熟，建立在 化学、经典力学、用火 之上完成关键突破；其能力延伸到 工具制造、结构件，并为 锰钢、电弧焊 的发展铺平了道路。",
    "dependsOn": ["chemistry","physics","fire","mat_tempered"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "压电材料在 1880 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，压电材料仍是 工具制造 的底层支撑，并持续影响 锰钢、电弧焊。"
      }
    ],
    "significance": "压电材料把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 锰钢、电弧焊。"
  },
{
    "id": "mat_ferrite",
    "name": "铁氧体",
    "en": "Ferrite",
    "category": "material",
    "era": "electrical",
    "date": "1909 年",
    "year": 1909,
    "people": "",
    "place": "",
    "summary": "铁氧体约 1909 年 成熟，建立在 化学、经典力学、用火 之上完成关键突破；其能力延伸到 工具制造、结构件，并为 低温超导、飞行模拟器、深水炸弹 的发展铺平了道路。",
    "dependsOn": ["chemistry","physics","fire","mat_alalloy"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "铁氧体在 1909 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，铁氧体仍是 工具制造 的底层支撑，并持续影响 低温超导、飞行模拟器、深水炸弹。"
      }
    ],
    "significance": "铁氧体把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 低温超导、飞行模拟器、深水炸弹。"
  },
{
    "id": "mat_softmag",
    "name": "非晶软磁",
    "en": "Amorphous Soft Magnet",
    "category": "material",
    "era": "info",
    "date": "1960 年",
    "year": 1960,
    "people": "",
    "place": "",
    "summary": "非晶软磁约 1960 年 成熟，建立在 化学、经典力学、用火 之上完成关键突破；其能力延伸到 工具制造、结构件，并为 生物材料 的发展铺平了道路。",
    "dependsOn": ["chemistry","physics","fire","mat_pcm"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "非晶软磁在 1960 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，非晶软磁仍是 工具制造 的底层支撑，并持续影响 生物材料。"
      }
    ],
    "significance": "非晶软磁把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 生物材料。"
  },
{
    "id": "mat_selfheal",
    "name": "自修复材料",
    "en": "Self-Healing Material",
    "category": "material",
    "era": "intelligent",
    "date": "2000 年",
    "year": 2000,
    "people": "",
    "place": "",
    "summary": "自修复材料在 2000 年 前后成形，依托 化学、经典力学、用火 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 石墨烯、数字孪生、低温切削 等后续技术。",
    "dependsOn": ["chemistry","physics","fire","mat_mof"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "自修复材料在 2000 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，自修复材料仍是 工具制造 的底层支撑，并持续影响 石墨烯、数字孪生、低温切削。"
      }
    ],
    "significance": "自修复材料把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 石墨烯、数字孪生、低温切削。"
  },
{
    "id": "mat_bioinspired",
    "name": "仿生材料",
    "en": "Bioinspired Material",
    "category": "material",
    "era": "info",
    "date": "1990 年",
    "year": 1990,
    "people": "",
    "place": "",
    "summary": "仿生材料在 1990 年 前后成形，依托 化学、经典力学、用火 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 金属 3D 打印 等后续技术。",
    "dependsOn": ["chemistry","physics","fire","mat_ybco"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "仿生材料在 1990 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，仿生材料仍是 工具制造 的底层支撑，并持续影响 金属 3D 打印。"
      }
    ],
    "significance": "仿生材料把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 金属 3D 打印。"
  },
{
    "id": "mat_biomat",
    "name": "生物材料",
    "en": "Biomaterial",
    "category": "material",
    "era": "info",
    "date": "1960 年",
    "year": 1960,
    "people": "",
    "place": "",
    "summary": "生物材料在 1960 年 前后成形，依托 化学、经典力学、用火 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 放电等离子烧结 等后续技术。",
    "dependsOn": ["chemistry","physics","fire","mat_softmag"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "生物材料在 1960 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，生物材料仍是 工具制造 的底层支撑，并持续影响 放电等离子烧结。"
      }
    ],
    "significance": "生物材料把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 放电等离子烧结。"
  },
{
    "id": "mat_degradable",
    "name": "可降解材料",
    "en": "Biodegradable Material",
    "category": "material",
    "era": "info",
    "date": "1980 年",
    "year": 1980,
    "people": "",
    "place": "",
    "summary": "可降解材料约 1980 年 成熟，建立在 化学、经典力学、用火 之上完成关键突破；其能力延伸到 工具制造、结构件，并为 冷喷涂 的发展铺平了道路。",
    "dependsOn": ["chemistry","physics","fire","mat_orgsc"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "可降解材料在 1980 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，可降解材料仍是 工具制造 的底层支撑，并持续影响 冷喷涂。"
      }
    ],
    "significance": "可降解材料把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 冷喷涂。"
  },
{
    "id": "mat_stealth",
    "name": "吸波隐身材料",
    "en": "Radar-Absorbing Material",
    "category": "material",
    "era": "info",
    "date": "1950 年",
    "year": 1950,
    "people": "",
    "place": "",
    "summary": "吸波隐身材料约 1950 年 成熟，建立在 化学、经典力学、用火 之上完成关键突破；其能力延伸到 工具制造、结构件，并为 泡沫金属 的发展铺平了道路。",
    "dependsOn": ["chemistry","physics","fire","mat_inp"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "吸波隐身材料在 1950 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，吸波隐身材料仍是 工具制造 的底层支撑，并持续影响 泡沫金属。"
      }
    ],
    "significance": "吸波隐身材料把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 泡沫金属。"
  },
{
    "id": "mat_insulation",
    "name": "隔热材料",
    "en": "Thermal Insulation",
    "category": "material",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "隔热材料在 1800 年 前后成形，依托 化学、经典力学、用火 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 冲天炉 等后续技术。",
    "dependsOn": ["chemistry","physics","fire","mat_plywood"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "隔热材料在 1800 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，隔热材料仍是 工具制造 的底层支撑，并持续影响 冲天炉。"
      }
    ],
    "significance": "隔热材料把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 冲天炉。"
  },
{
    "id": "mat_foammetal",
    "name": "泡沫金属",
    "en": "Metal Foam",
    "category": "material",
    "era": "info",
    "date": "1950 年",
    "year": 1950,
    "people": "",
    "place": "",
    "summary": "泡沫金属在 1950 年 前后成形，依托 化学、经典力学、用火 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 浮法玻璃、等离子切割、真空炉 等后续技术。",
    "dependsOn": ["chemistry","physics","fire","mat_stealth"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "泡沫金属在 1950 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，泡沫金属仍是 工具制造 的底层支撑，并持续影响 浮法玻璃、等离子切割、真空炉。"
      }
    ],
    "significance": "泡沫金属把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 浮法玻璃、等离子切割、真空炉。"
  },
{
    "id": "mat_blastfurnace",
    "name": "高炉炼铁",
    "en": "Blast Furnace",
    "category": "material",
    "era": "classical",
    "date": "公元前 500 年",
    "year": -500,
    "people": "",
    "place": "",
    "summary": "高炉炼铁在 公元前 500 年 前后成形，依托 用火、渗碳、锌冶炼 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 平板玻璃、螺纹连接、螺纹 等后续技术。",
    "dependsOn": ["fire","mat_carburize","mat_zinc"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "古典时代",
        "text": "高炉炼铁在 公元前 500 年 前后出现，依托 用火 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，高炉炼铁仍是 工具制造 的底层支撑，并持续影响 平板玻璃、螺纹连接、螺纹。"
      }
    ],
    "significance": "高炉炼铁把 用火 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 平板玻璃、螺纹连接、螺纹。"
  },
{
    "id": "mat_cupola",
    "name": "冲天炉",
    "en": "Cupola Furnace",
    "category": "material",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "冲天炉在 1800 年 前后成形，依托 化学、经典力学、用火 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 感应熔炼 等后续技术。",
    "dependsOn": ["chemistry","physics","fire","mat_insulation"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "冲天炉在 1800 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，冲天炉仍是 工具制造 的底层支撑，并持续影响 感应熔炼。"
      }
    ],
    "significance": "冲天炉把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 感应熔炼。"
  },
{
    "id": "mat_inductionmelt",
    "name": "感应熔炼",
    "en": "Induction Melting",
    "category": "material",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "感应熔炼约 1800 年 成熟，建立在 化学、经典力学、用火 之上完成关键突破；其能力延伸到 工具制造、结构件，并为 钒、磨床、钻床 的发展铺平了道路。",
    "dependsOn": ["chemistry","physics","fire","mat_cupola"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "感应熔炼在 1800 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，感应熔炼仍是 工具制造 的底层支撑，并持续影响 钒、磨床、钻床。"
      }
    ],
    "significance": "感应熔炼把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 钒、磨床、钻床。"
  },
{
    "id": "mat_continuouscast",
    "name": "连续铸造",
    "en": "Continuous Casting",
    "category": "material",
    "era": "industrial",
    "date": "1840 年",
    "year": 1840,
    "people": "",
    "place": "",
    "summary": "连续铸造在 1840 年 前后成形，依托 化学、经典力学、用火 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 钢筋混凝土、砂轮、充气轮胎 等后续技术。",
    "dependsOn": ["chemistry","physics","fire","mat_vulcan"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "连续铸造在 1840 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，连续铸造仍是 工具制造 的底层支撑，并持续影响 钢筋混凝土、砂轮、充气轮胎。"
      }
    ],
    "significance": "连续铸造把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 钢筋混凝土、砂轮、充气轮胎。"
  },
{
    "id": "mat_esr",
    "name": "电渣重熔",
    "en": "Electroslag Remelting",
    "category": "material",
    "era": "electrical",
    "date": "1940 年",
    "year": 1940,
    "people": "",
    "place": "",
    "summary": "电渣重熔在 1940 年 前后成形，依托 化学、经典力学、用火 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 球墨铸铁、化学铣切、伺服系统 等后续技术。",
    "dependsOn": ["chemistry","physics","fire","mat_honeycomb"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "电渣重熔在 1940 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，电渣重熔仍是 工具制造 的底层支撑，并持续影响 球墨铸铁、化学铣切、伺服系统。"
      }
    ],
    "significance": "电渣重熔把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 球墨铸铁、化学铣切、伺服系统。"
  },
{
    "id": "mat_metal3dp",
    "name": "金属",
    "en": "Metal 3D Printing",
    "category": "material",
    "era": "info",
    "date": "1990 年",
    "year": 1990,
    "people": "",
    "place": "",
    "summary": "金属在 1990 年 前后成形，依托 化学、经典力学、用火 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 粘结剂喷射 等后续技术。",
    "dependsOn": ["chemistry","physics","fire","mat_bioinspired"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "金属在 1990 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，金属仍是 工具制造 的底层支撑，并持续影响 粘结剂喷射。"
      }
    ],
    "significance": "金属把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 粘结剂喷射。"
  },
{
    "id": "mat_binderjet",
    "name": "粘结剂喷射",
    "en": "Binder Jetting",
    "category": "material",
    "era": "info",
    "date": "1990 年",
    "year": 1990,
    "people": "",
    "place": "",
    "summary": "粘结剂喷射约 1990 年 成熟，建立在 化学、经典力学、用火 之上完成关键突破；其能力延伸到 工具制造、结构件，并为 定向能量沉积 的发展铺平了道路。",
    "dependsOn": ["chemistry","physics","fire","mat_metal3dp"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "粘结剂喷射在 1990 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，粘结剂喷射仍是 工具制造 的底层支撑，并持续影响 定向能量沉积。"
      }
    ],
    "significance": "粘结剂喷射把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 定向能量沉积。"
  },
{
    "id": "mat_ded",
    "name": "定向能量沉积",
    "en": "Directed Energy Deposition",
    "category": "material",
    "era": "info",
    "date": "1990 年",
    "year": 1990,
    "people": "",
    "place": "",
    "summary": "定向能量沉积约 1990 年 成熟，建立在 化学、经典力学、用火 之上完成关键突破；其能力延伸到 工具制造、结构件，并为 电子束熔融 的发展铺平了道路。",
    "dependsOn": ["chemistry","physics","fire","mat_binderjet"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "定向能量沉积在 1990 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，定向能量沉积仍是 工具制造 的底层支撑，并持续影响 电子束熔融。"
      }
    ],
    "significance": "定向能量沉积把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 电子束熔融。"
  },
{
    "id": "mat_coldspray",
    "name": "冷喷涂",
    "en": "Cold Spray",
    "category": "material",
    "era": "info",
    "date": "1980 年",
    "year": 1980,
    "people": "",
    "place": "",
    "summary": "冷喷涂约 1980 年 成熟，建立在 化学、经典力学、用火 之上完成关键突破；其能力延伸到 工具制造、结构件，并为 超音速火焰喷涂 的发展铺平了道路。",
    "dependsOn": ["chemistry","physics","fire","mat_degradable"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "冷喷涂在 1980 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，冷喷涂仍是 工具制造 的底层支撑，并持续影响 超音速火焰喷涂。"
      }
    ],
    "significance": "冷喷涂把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 超音速火焰喷涂。"
  },
{
    "id": "mat_thermalspray",
    "name": "热喷涂",
    "en": "Thermal Spray",
    "category": "material",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "热喷涂在 1900 年 前后成形，依托 化学、经典力学、用火 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 渗氮 等后续技术。",
    "dependsOn": ["chemistry","physics","fire","mat_alumina"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "热喷涂在 1900 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，热喷涂仍是 工具制造 的底层支撑，并持续影响 渗氮。"
      }
    ],
    "significance": "热喷涂把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 渗氮。"
  },
{
    "id": "mat_hvof",
    "name": "超音速火焰喷涂",
    "en": "HVOF",
    "category": "material",
    "era": "info",
    "date": "1980 年",
    "year": 1980,
    "people": "",
    "place": "",
    "summary": "超音速火焰喷涂约 1980 年 成熟，建立在 化学、经典力学、用火 之上完成关键突破；其能力延伸到 工具制造、结构件，并为 激光熔覆 的发展铺平了道路。",
    "dependsOn": ["chemistry","physics","fire","mat_coldspray"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "超音速火焰喷涂在 1980 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，超音速火焰喷涂仍是 工具制造 的底层支撑，并持续影响 激光熔覆。"
      }
    ],
    "significance": "超音速火焰喷涂把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 激光熔覆。"
  },
{
    "id": "mat_laserclad",
    "name": "激光熔覆",
    "en": "Laser Cladding",
    "category": "material",
    "era": "info",
    "date": "1980 年",
    "year": 1980,
    "people": "",
    "place": "",
    "summary": "激光熔覆约 1980 年 成熟，建立在 化学、经典力学、用火 之上完成关键突破；其能力延伸到 工具制造、结构件，并为 高温超导、车铣复合、3D 打印 的发展铺平了道路。",
    "dependsOn": ["chemistry","physics","fire","mat_hvof"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "激光熔覆在 1980 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，激光熔覆仍是 工具制造 的底层支撑，并持续影响 高温超导、车铣复合、3D 打印。"
      }
    ],
    "significance": "激光熔覆把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 高温超导、车铣复合、3D 打印。"
  },
{
    "id": "mat_nitriding",
    "name": "渗氮",
    "en": "Nitriding",
    "category": "material",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "渗氮在 1900 年 前后成形，依托 化学、经典力学、用火 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 渗硼 等后续技术。",
    "dependsOn": ["chemistry","physics","fire","mat_thermalspray"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "渗氮在 1900 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，渗氮仍是 工具制造 的底层支撑，并持续影响 渗硼。"
      }
    ],
    "significance": "渗氮把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 渗硼。"
  },
{
    "id": "mat_boriding",
    "name": "渗硼",
    "en": "Boriding",
    "category": "material",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "渗硼在 1900 年 前后成形，依托 化学、经典力学、用火 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 气焊、装配线、刀柄 等后续技术。",
    "dependsOn": ["chemistry","physics","fire","mat_nitriding"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "渗硼在 1900 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，渗硼仍是 工具制造 的底层支撑，并持续影响 气焊、装配线、刀柄。"
      }
    ],
    "significance": "渗硼把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 气焊、装配线、刀柄。"
  },
{
    "id": "mat_ebm",
    "name": "电子束熔融",
    "en": "Electron Beam Melting",
    "category": "material",
    "era": "info",
    "date": "1990 年",
    "year": 1990,
    "people": "",
    "place": "",
    "summary": "电子束熔融在 1990 年 前后成形，依托 化学、经典力学、用火 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 金属有机框架 等后续技术。",
    "dependsOn": ["chemistry","physics","fire","mat_ded"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "电子束熔融在 1990 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，电子束熔融仍是 工具制造 的底层支撑，并持续影响 金属有机框架。"
      }
    ],
    "significance": "电子束熔融把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 金属有机框架。"
  },
{
    "id": "mat_sps",
    "name": "放电等离子烧结",
    "en": "Spark Plasma Sintering",
    "category": "material",
    "era": "info",
    "date": "1960 年",
    "year": 1960,
    "people": "",
    "place": "",
    "summary": "放电等离子烧结在 1960 年 前后成形，依托 化学、经典力学、用火 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 聚酰亚胺、线切割、激光焊 等后续技术。",
    "dependsOn": ["chemistry","physics","fire","mat_biomat"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "放电等离子烧结在 1960 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，放电等离子烧结仍是 工具制造 的底层支撑，并持续影响 聚酰亚胺、线切割、激光焊。"
      }
    ],
    "significance": "放电等离子烧结把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 聚酰亚胺、线切割、激光焊。"
  },
{
    "id": "mat_mof",
    "name": "金属有机框架",
    "en": "Metal-Organic Framework",
    "category": "material",
    "era": "info",
    "date": "1990 年",
    "year": 1990,
    "people": "",
    "place": "",
    "summary": "金属有机框架在 1990 年 前后成形，依托 化学、经典力学、用火 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 自修复材料、搅拌摩擦焊、纳米压印 等后续技术。",
    "dependsOn": ["chemistry","physics","fire","mat_ebm"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "金属有机框架在 1990 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，金属有机框架仍是 工具制造 的底层支撑，并持续影响 自修复材料、搅拌摩擦焊、纳米压印。"
      }
    ],
    "significance": "金属有机框架把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 自修复材料、搅拌摩擦焊、纳米压印。"
  },
{
    "id": "mat_zeolite",
    "name": "沸石分子筛",
    "en": "Zeolite",
    "category": "material",
    "era": "earlymodern",
    "date": "1700 年",
    "year": 1700,
    "people": "",
    "place": "",
    "summary": "沸石分子筛在 1700 年 前后成形，依托 化学、经典力学、用火 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 可锻铸铁、交通隧道、避雷 等后续技术。",
    "dependsOn": ["chemistry","physics","fire","mat_opticalglass"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "近代早期",
        "text": "沸石分子筛在 1700 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，沸石分子筛仍是 工具制造 的底层支撑，并持续影响 可锻铸铁、交通隧道、避雷。"
      }
    ],
    "significance": "沸石分子筛把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 可锻铸铁、交通隧道、避雷。"
  },
{
    "id": "ene_charcoal",
    "name": "木炭",
    "en": "Charcoal",
    "category": "energy",
    "era": "prehistoric",
    "date": "公元前 4000 年",
    "year": -4000,
    "people": "",
    "place": "",
    "summary": "木炭约 公元前 4000 年 成熟，建立在 用火 之上完成关键突破；其能力延伸到 动力输出、照明加热，并为 煤炭开采、水力利用、砂型铸造 的发展铺平了道路。",
    "dependsOn": ["fire"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "史前时代",
        "text": "木炭在 公元前 4000 年 前后出现，依托 用火 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，木炭仍是 动力输出 的底层支撑，并持续影响 煤炭开采、水力利用、砂型铸造。"
      }
    ],
    "significance": "木炭把 用火 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 煤炭开采、水力利用、砂型铸造。"
  },
{
    "id": "ene_coal",
    "name": "煤炭开采",
    "en": "Coal Mining",
    "category": "energy",
    "era": "ancient",
    "date": "公元前 1000 年",
    "year": -1000,
    "people": "",
    "place": "",
    "summary": "煤炭开采约 公元前 1000 年 成熟，建立在 用火、水力利用、木炭 之上完成关键突破；其能力延伸到 动力输出、照明加热，并为 水车、车床、灯塔 的发展铺平了道路。",
    "dependsOn": ["fire","ene_hydro","ene_charcoal"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "煤炭开采在 公元前 1000 年 前后出现，依托 用火 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，煤炭开采仍是 动力输出 的底层支撑，并持续影响 水车、车床、灯塔。"
      }
    ],
    "significance": "煤炭开采把 用火 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 水车、车床、灯塔。"
  },
{
    "id": "ene_coke",
    "name": "焦炭",
    "en": "Coke",
    "category": "energy",
    "era": "earlymodern",
    "date": "1700 年",
    "year": 1700,
    "people": "",
    "place": "",
    "summary": "焦炭在 1700 年 前后成形，依托 经典力学、化学、用火 把 动力输出、照明加热 落到实处，并成为 能量形式 中承上启下的一环，直接支撑了 太阳能热利用 等后续技术。",
    "dependsOn": ["physics","chemistry","fire","coal_mining"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "近代早期",
        "text": "焦炭在 1700 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，焦炭仍是 动力输出 的底层支撑，并持续影响 太阳能热利用。"
      }
    ],
    "significance": "焦炭把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 太阳能热利用。"
  },
{
    "id": "ene_oil",
    "name": "石油开采",
    "en": "Oil Extraction",
    "category": "energy",
    "era": "industrial",
    "date": "1850 年",
    "year": 1850,
    "people": "",
    "place": "",
    "summary": "石油开采在 1850 年 前后成形，依托 经典力学、化学、用火 把 动力输出、照明加热 落到实处，并成为 能量形式 中承上启下的一环，直接支撑了 燃料乙醇 等后续技术。",
    "dependsOn": ["physics","chemistry","fire","ene_fuelcell"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "石油开采在 1850 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，石油开采仍是 动力输出 的底层支撑，并持续影响 燃料乙醇。"
      }
    ],
    "significance": "石油开采把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 燃料乙醇。"
  },
{
    "id": "ene_natgas",
    "name": "天然气利用",
    "en": "Natural Gas",
    "category": "energy",
    "era": "industrial",
    "date": "1820 年",
    "year": 1820,
    "people": "",
    "place": "",
    "summary": "天然气利用在 1820 年 前后成形，依托 经典力学、化学、用火 把 动力输出、照明加热 落到实处，并成为 能量形式 中承上启下的一环，直接支撑了 水轮机 等后续技术。",
    "dependsOn": ["physics","chemistry","fire","ene_stirling"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "天然气利用在 1820 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，天然气利用仍是 动力输出 的底层支撑，并持续影响 水轮机。"
      }
    ],
    "significance": "天然气利用把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 水轮机。"
  },
{
    "id": "ene_oilshale",
    "name": "油页岩",
    "en": "Oil Shale",
    "category": "energy",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "油页岩约 1800 年 成熟，建立在 经典力学、化学、用火 之上完成关键突破；其能力延伸到 动力输出、照明加热，并为 生物燃料 的发展铺平了道路。",
    "dependsOn": ["physics","chemistry","fire","battery"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "油页岩在 1800 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，油页岩仍是 动力输出 的底层支撑，并持续影响 生物燃料。"
      }
    ],
    "significance": "油页岩把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 生物燃料。"
  },
{
    "id": "ene_biofuel",
    "name": "生物燃料",
    "en": "Biofuel",
    "category": "energy",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "生物燃料在 1800 年 前后成形，依托 经典力学、化学、用火 把 动力输出、照明加热 落到实处，并成为 能量形式 中承上启下的一环，直接支撑了 生物质气化 等后续技术。",
    "dependsOn": ["physics","chemistry","fire","ene_oilshale"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "生物燃料在 1800 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，生物燃料仍是 动力输出 的底层支撑，并持续影响 生物质气化。"
      }
    ],
    "significance": "生物燃料把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 生物质气化。"
  },
{
    "id": "ene_ethanol",
    "name": "燃料乙醇",
    "en": "Ethanol Fuel",
    "category": "energy",
    "era": "industrial",
    "date": "1850 年",
    "year": 1850,
    "people": "",
    "place": "",
    "summary": "燃料乙醇约 1850 年 成熟，建立在 经典力学、化学、用火 之上完成关键突破；其能力延伸到 动力输出、照明加热，并为 热泵、通信电缆 的发展铺平了道路。",
    "dependsOn": ["physics","chemistry","fire","ene_oil"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "燃料乙醇在 1850 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，燃料乙醇仍是 动力输出 的底层支撑，并持续影响 热泵、通信电缆。"
      }
    ],
    "significance": "燃料乙醇把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 热泵、通信电缆。"
  },
{
    "id": "ene_biodiesel",
    "name": "生物柴油",
    "en": "Biodiesel",
    "category": "energy",
    "era": "industrial",
    "date": "1890 年",
    "year": 1890,
    "people": "",
    "place": "",
    "summary": "生物柴油在 1890 年 前后成形，依托 经典力学、化学、用火 把 动力输出、照明加热 落到实处，并成为 能量形式 中承上启下的一环，直接支撑了 抽水蓄能 等后续技术。",
    "dependsOn": ["physics","chemistry","fire","ene_ac"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "生物柴油在 1890 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，生物柴油仍是 动力输出 的底层支撑，并持续影响 抽水蓄能。"
      }
    ],
    "significance": "生物柴油把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 抽水蓄能。"
  },
{
    "id": "ene_biomass",
    "name": "生物质气化",
    "en": "Biomass Gasification",
    "category": "energy",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "生物质气化在 1800 年 前后成形，依托 经典力学、化学、用火 把 动力输出、照明加热 落到实处，并成为 能量形式 中承上启下的一环，直接支撑了 地热利用 等后续技术。",
    "dependsOn": ["physics","chemistry","fire","ene_biofuel"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "生物质气化在 1800 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，生物质气化仍是 动力输出 的底层支撑，并持续影响 地热利用。"
      }
    ],
    "significance": "生物质气化把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 地热利用。"
  },
{
    "id": "ene_hydro",
    "name": "水力利用",
    "en": "Hydropower",
    "category": "energy",
    "era": "ancient",
    "date": "公元前 3000 年",
    "year": -3000,
    "people": "",
    "place": "",
    "summary": "水力利用在 公元前 3000 年 前后成形，依托 用火、木炭 把 动力输出、照明加热 落到实处，并成为 能量形式 中承上启下的一环，直接支撑了 煤炭开采、水车、铆接 等后续技术。",
    "dependsOn": ["fire","ene_charcoal"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "水力利用在 公元前 3000 年 前后出现，依托 用火 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，水力利用仍是 动力输出 的底层支撑，并持续影响 煤炭开采、水车、铆接。"
      }
    ],
    "significance": "水力利用把 用火 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 煤炭开采、水车、铆接。"
  },
{
    "id": "ene_waterwheel",
    "name": "水车",
    "en": "Water Wheel",
    "category": "energy",
    "era": "classical",
    "date": "公元前 300 年",
    "year": -300,
    "people": "",
    "place": "",
    "summary": "水车在 公元前 300 年 前后成形，依托 用火、煤炭开采、水力利用 把 动力输出、照明加热 落到实处，并成为 能量形式 中承上启下的一环，直接支撑了 螺纹连接、螺纹、起重机 等后续技术。",
    "dependsOn": ["fire","ene_coal","ene_hydro"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "古典时代",
        "text": "水车在 公元前 300 年 前后出现，依托 用火 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，水车仍是 动力输出 的底层支撑，并持续影响 螺纹连接、螺纹、起重机。"
      }
    ],
    "significance": "水车把 用火 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 螺纹连接、螺纹、起重机。"
  },
{
    "id": "ene_waterturbine",
    "name": "水轮机",
    "en": "Water Turbine",
    "category": "energy",
    "era": "industrial",
    "date": "1820 年",
    "year": 1820,
    "people": "",
    "place": "",
    "summary": "水轮机在 1820 年 前后成形，依托 经典力学、化学、用火 把 动力输出、照明加热 落到实处，并成为 能量形式 中承上启下的一环，直接支撑了 热电发电 等后续技术。",
    "dependsOn": ["physics","chemistry","fire","ene_natgas"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "水轮机在 1820 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，水轮机仍是 动力输出 的底层支撑，并持续影响 热电发电。"
      }
    ],
    "significance": "水轮机把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 热电发电。"
  },
{
    "id": "ene_wind",
    "name": "风车",
    "en": "Windmill",
    "category": "energy",
    "era": "medieval",
    "date": "900 年",
    "year": 900,
    "people": "",
    "place": "",
    "summary": "风车在 900 年 前后成形，依托 用火、风车、水车 把 动力输出、照明加热 落到实处，并成为 能量形式 中承上启下的一环，直接支撑了 镗床、压延、拉丝 等后续技术。",
    "dependsOn": ["fire","windmill","waterwheel"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "中世纪",
        "text": "风车在 900 年 前后出现，依托 用火 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，风车仍是 动力输出 的底层支撑，并持续影响 镗床、压延、拉丝。"
      }
    ],
    "significance": "风车把 用火 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 镗床、压延、拉丝。"
  },
{
    "id": "ene_windturbine",
    "name": "风力发电机",
    "en": "Wind Turbine",
    "category": "energy",
    "era": "industrial",
    "date": "1887 年",
    "year": 1887,
    "people": "",
    "place": "",
    "summary": "风力发电机约 1887 年 成熟，建立在 经典力学、化学、用火 之上完成关键突破；其能力延伸到 动力输出、照明加热，并为 交流电系统、感应加热 的发展铺平了道路。",
    "dependsOn": ["physics","chemistry","fire","ene_transformer"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "风力发电机在 1887 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，风力发电机仍是 动力输出 的底层支撑，并持续影响 交流电系统、感应加热。"
      }
    ],
    "significance": "风力发电机把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 交流电系统、感应加热。"
  },
{
    "id": "ene_geothermal",
    "name": "地热利用",
    "en": "Geothermal",
    "category": "energy",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "地热利用在 1800 年 前后成形，依托 经典力学、化学、用火 把 动力输出、照明加热 落到实处，并成为 能量形式 中承上启下的一环，直接支撑了 直流电系统 等后续技术。",
    "dependsOn": ["physics","chemistry","fire","ene_biomass"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "地热利用在 1800 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，地热利用仍是 动力输出 的底层支撑，并持续影响 直流电系统。"
      }
    ],
    "significance": "地热利用把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 直流电系统。"
  },
{
    "id": "ene_tidal",
    "name": "潮汐能",
    "en": "Tidal Power",
    "category": "energy",
    "era": "info",
    "date": "1960 年",
    "year": 1960,
    "people": "",
    "place": "",
    "summary": "潮汐能在 1960 年 前后成形，依托 经典力学、化学、用火 把 动力输出、照明加热 落到实处，并成为 能量形式 中承上启下的一环，直接支撑了 氢燃料电池 等后续技术。",
    "dependsOn": ["physics","chemistry","fire","ene_supercap"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "潮汐能在 1960 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，潮汐能仍是 动力输出 的底层支撑，并持续影响 氢燃料电池。"
      }
    ],
    "significance": "潮汐能把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 氢燃料电池。"
  },
{
    "id": "mat_wave",
    "name": "波浪能",
    "en": "Wave Energy",
    "category": "energy",
    "era": "info",
    "date": "1970 年",
    "year": 1970,
    "people": "",
    "place": "",
    "summary": "波浪能约 1970 年 成熟，建立在 经典力学、化学、用火 之上完成关键突破；其能力延伸到 动力输出、照明加热，并为 液流电池 的发展铺平了道路。",
    "dependsOn": ["physics","chemistry","fire","ene_satpower"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "波浪能在 1970 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，波浪能仍是 动力输出 的底层支撑，并持续影响 液流电池。"
      }
    ],
    "significance": "波浪能把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 液流电池。"
  },
{
    "id": "ene_solarthermal",
    "name": "太阳能热利用",
    "en": "Solar Thermal",
    "category": "energy",
    "era": "earlymodern",
    "date": "1700 年",
    "year": 1700,
    "people": "",
    "place": "",
    "summary": "太阳能热利用在 1700 年 前后成形，依托 经典力学、化学、用火 把 动力输出、照明加热 落到实处，并成为 能量形式 中承上启下的一环，直接支撑了 交通隧道、避雷、榴弹炮 等后续技术。",
    "dependsOn": ["physics","chemistry","fire","ene_coke"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "近代早期",
        "text": "太阳能热利用在 1700 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，太阳能热利用仍是 动力输出 的底层支撑，并持续影响 交通隧道、避雷、榴弹炮。"
      }
    ],
    "significance": "太阳能热利用把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 交通隧道、避雷、榴弹炮。"
  },
{
    "id": "ene_pv",
    "name": "光伏电池",
    "en": "Photovoltaic",
    "category": "energy",
    "era": "info",
    "date": "1954 年",
    "year": 1954,
    "people": "",
    "place": "",
    "summary": "光伏电池在 1954 年 前后成形，依托 经典力学、化学、用火 把 动力输出、照明加热 落到实处，并成为 能量形式 中承上启下的一环，直接支撑了 沸水堆、机器翻译、核潜艇 等后续技术。",
    "dependsOn": ["physics","chemistry","fire","solar"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "光伏电池在 1954 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，光伏电池仍是 动力输出 的底层支撑，并持续影响 沸水堆、机器翻译、核潜艇。"
      }
    ],
    "significance": "光伏电池把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 沸水堆、机器翻译、核潜艇。"
  },
{
    "id": "ene_csp",
    "name": "聚光太阳能",
    "en": "Concentrated Solar",
    "category": "energy",
    "era": "info",
    "date": "1980 年",
    "year": 1980,
    "people": "",
    "place": "",
    "summary": "聚光太阳能在 1980 年 前后成形，依托 经典力学、化学、用火 把 动力输出、照明加热 落到实处，并成为 能量形式 中承上启下的一环，直接支撑了 熔盐储热 等后续技术。",
    "dependsOn": ["physics","chemistry","fire","ene_hydrothermal"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "聚光太阳能在 1980 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，聚光太阳能仍是 动力输出 的底层支撑，并持续影响 熔盐储热。"
      }
    ],
    "significance": "聚光太阳能把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 熔盐储热。"
  },
{
    "id": "ene_steamturbine",
    "name": "蒸汽轮机",
    "en": "Steam Turbine",
    "category": "energy",
    "era": "industrial",
    "date": "1884 年",
    "year": 1884,
    "people": "",
    "place": "",
    "summary": "蒸汽轮机约 1884 年 成熟，建立在 经典力学、化学、用火 之上完成关键突破；其能力延伸到 动力输出、照明加热，并为 变压器、钢笔、机枪 的发展铺平了道路。",
    "dependsOn": ["physics","chemistry","fire","ene_hydroplant"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "蒸汽轮机在 1884 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，蒸汽轮机仍是 动力输出 的底层支撑，并持续影响 变压器、钢笔、机枪。"
      }
    ],
    "significance": "蒸汽轮机把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 变压器、钢笔、机枪。"
  },
{
    "id": "ene_gasturbine",
    "name": "燃气轮机",
    "en": "Gas Turbine",
    "category": "energy",
    "era": "electrical",
    "date": "1939 年",
    "year": 1939,
    "people": "",
    "place": "",
    "summary": "燃气轮机在 1939 年 前后成形，依托 经典力学、化学、用火 把 动力输出、照明加热 落到实处，并成为 能量形式 中承上启下的一环，直接支撑了 化学铣切、伺服系统、直线电机 等后续技术。",
    "dependsOn": ["physics","chemistry","fire","ene_jet"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "燃气轮机在 1939 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，燃气轮机仍是 动力输出 的底层支撑，并持续影响 化学铣切、伺服系统、直线电机。"
      }
    ],
    "significance": "燃气轮机把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 化学铣切、伺服系统、直线电机。"
  },
{
    "id": "ene_stirling",
    "name": "斯特林发动机",
    "en": "Stirling Engine",
    "category": "energy",
    "era": "industrial",
    "date": "1816 年",
    "year": 1816,
    "people": "",
    "place": "",
    "summary": "斯特林发动机在 1816 年 前后成形，依托 经典力学、化学、用火 把 动力输出、照明加热 落到实处，并成为 能量形式 中承上启下的一环，直接支撑了 天然气利用、铣床、自行车 等后续技术。",
    "dependsOn": ["physics","chemistry","fire","ene_wasteheat"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "斯特林发动机在 1816 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，斯特林发动机仍是 动力输出 的底层支撑，并持续影响 天然气利用、铣床、自行车。"
      }
    ],
    "significance": "斯特林发动机把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 天然气利用、铣床、自行车。"
  },
{
    "id": "ene_jet",
    "name": "喷气发动机",
    "en": "Jet Engine",
    "category": "energy",
    "era": "electrical",
    "date": "1937 年",
    "year": 1937,
    "people": "",
    "place": "",
    "summary": "喷气发动机约 1937 年 成熟，建立在 经典力学、化学、用火 之上完成关键突破；其能力延伸到 动力输出、照明加热，并为 燃气轮机、圆珠笔、复印机 的发展铺平了道路。",
    "dependsOn": ["physics","chemistry","fire","ene_zincair","jet_compressor","jet_turbine"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "喷气发动机在 1937 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，喷气发动机仍是 动力输出 的底层支撑，并持续影响 燃气轮机、圆珠笔、复印机。"
      }
    ],
    "significance": "喷气发动机把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 燃气轮机、圆珠笔、复印机。"
  },
{
    "id": "ene_rocketengine",
    "name": "火箭发动机",
    "en": "Rocket Engine",
    "category": "energy",
    "era": "electrical",
    "date": "1926 年",
    "year": 1926,
    "people": "",
    "place": "",
    "summary": "火箭发动机在 1926 年 前后成形，依托 经典力学、化学、用火 把 动力输出、照明加热 落到实处，并成为 能量形式 中承上启下的一环，直接支撑了 锌空气电池、吹塑、喷丸 等后续技术。",
    "dependsOn": ["physics","chemistry","fire","ene_synfuel"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "火箭发动机在 1926 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，火箭发动机仍是 动力输出 的底层支撑，并持续影响 锌空气电池、吹塑、喷丸。"
      }
    ],
    "significance": "火箭发动机把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 锌空气电池、吹塑、喷丸。"
  },
{
    "id": "ene_leadacid",
    "name": "铅酸电池",
    "en": "Lead-Acid Battery",
    "category": "energy",
    "era": "industrial",
    "date": "1859 年",
    "year": 1859,
    "people": "",
    "place": "",
    "summary": "铅酸电池约 1859 年 成熟，建立在 经典力学、化学、用火 之上完成关键突破；其能力延伸到 动力输出、照明加热，并为 注塑、地铁、交通信号灯 的发展铺平了道路。",
    "dependsOn": ["physics","chemistry","fire","petroleum"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "铅酸电池在 1859 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，铅酸电池仍是 动力输出 的底层支撑，并持续影响 注塑、地铁、交通信号灯。"
      }
    ],
    "significance": "铅酸电池把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 注塑、地铁、交通信号灯。"
  },
{
    "id": "ene_nicd",
    "name": "镍镉电池",
    "en": "NiCd Battery",
    "category": "energy",
    "era": "industrial",
    "date": "1899 年",
    "year": 1899,
    "people": "",
    "place": "",
    "summary": "镍镉电池在 1899 年 前后成形，依托 经典力学、化学、用火 把 动力输出、照明加热 落到实处，并成为 能量形式 中承上启下的一环，直接支撑了 氨燃料 等后续技术。",
    "dependsOn": ["physics","chemistry","fire","ene_wpt"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "镍镉电池在 1899 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，镍镉电池仍是 动力输出 的底层支撑，并持续影响 氨燃料。"
      }
    ],
    "significance": "镍镉电池把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 氨燃料。"
  },
{
    "id": "ene_nimh",
    "name": "镍氢电池",
    "en": "NiMH Battery",
    "category": "energy",
    "era": "info",
    "date": "1989 年",
    "year": 1989,
    "people": "",
    "place": "",
    "summary": "镍氢电池在 1989 年 前后成形，依托 经典力学、化学、用火 把 动力输出、照明加热 落到实处，并成为 能量形式 中承上启下的一环，直接支撑了 电池储能系统 等后续技术。",
    "dependsOn": ["physics","chemistry","fire","brushless_motor"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "镍氢电池在 1989 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，镍氢电池仍是 动力输出 的底层支撑，并持续影响 电池储能系统。"
      }
    ],
    "significance": "镍氢电池把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 电池储能系统。"
  },
{
    "id": "ene_liion",
    "name": "锂离子电池",
    "en": "Li-ion Battery",
    "category": "energy",
    "era": "info",
    "date": "1991 年",
    "year": 1991,
    "people": "",
    "place": "",
    "summary": "锂离子电池约 1991 年 成熟，建立在 经典力学、化学、用火 之上完成关键突破；其能力延伸到 动力输出、照明加热，并为 锂聚合物电池、搅拌摩擦焊、纳米压印 的发展铺平了道路。",
    "dependsOn": ["physics","chemistry","fire","ene_fuelcellcar"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "锂离子电池在 1991 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，锂离子电池仍是 动力输出 的底层支撑，并持续影响 锂聚合物电池、搅拌摩擦焊、纳米压印。"
      }
    ],
    "significance": "锂离子电池把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 锂聚合物电池、搅拌摩擦焊、纳米压印。"
  },
{
    "id": "ene_lipoly",
    "name": "锂聚合物电池",
    "en": "Li-Po Battery",
    "category": "energy",
    "era": "info",
    "date": "1996 年",
    "year": 1996,
    "people": "",
    "place": "",
    "summary": "锂聚合物电池约 1996 年 成熟，建立在 经典力学、化学、用火 之上完成关键突破；其能力延伸到 动力输出、照明加热，并为 智能电网、协作机器人、即时通讯 的发展铺平了道路。",
    "dependsOn": ["physics","chemistry","fire","ene_liion"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "锂聚合物电池在 1996 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，锂聚合物电池仍是 动力输出 的底层支撑，并持续影响 智能电网、协作机器人、即时通讯。"
      }
    ],
    "significance": "锂聚合物电池把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 智能电网、协作机器人、即时通讯。"
  },
{
    "id": "ene_nas",
    "name": "钠离子电池",
    "en": "Sodium-Ion Battery",
    "category": "energy",
    "era": "intelligent",
    "date": "2010 年",
    "year": 2010,
    "people": "",
    "place": "",
    "summary": "钠离子电池在 2010 年 前后成形，依托 经典力学、化学、用火 把 动力输出、照明加热 落到实处，并成为 能量形式 中承上启下的一环，直接支撑了 固态电池 等后续技术。",
    "dependsOn": ["physics","chemistry","fire","ene_borehole"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "钠离子电池在 2010 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，钠离子电池仍是 动力输出 的底层支撑，并持续影响 固态电池。"
      }
    ],
    "significance": "钠离子电池把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 固态电池。"
  },
{
    "id": "ene_solidstate",
    "name": "固态电池",
    "en": "Solid-State Battery",
    "category": "energy",
    "era": "intelligent",
    "date": "2010 年",
    "year": 2010,
    "people": "",
    "place": "",
    "summary": "固态电池在 2010 年 前后成形，依托 经典力学、化学、用火 把 动力输出、照明加热 落到实处，并成为 能量形式 中承上启下的一环，直接支撑了 集装箱储能 等后续技术。",
    "dependsOn": ["physics","chemistry","fire","ene_nas"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "固态电池在 2010 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，固态电池仍是 动力输出 的底层支撑，并持续影响 集装箱储能。"
      }
    ],
    "significance": "固态电池把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 集装箱储能。"
  },
{
    "id": "ene_fuelcell",
    "name": "燃料电池",
    "en": "Fuel Cell",
    "category": "energy",
    "era": "industrial",
    "date": "1839 年",
    "year": 1839,
    "people": "",
    "place": "",
    "summary": "燃料电池在 1839 年 前后成形，依托 经典力学、化学、用火 把 动力输出、照明加热 落到实处，并成为 能量形式 中承上启下的一环，直接支撑了 石油开采、砂轮、充气轮胎 等后续技术。",
    "dependsOn": ["physics","chemistry","fire","electric_motor"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "燃料电池在 1839 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，燃料电池仍是 动力输出 的底层支撑，并持续影响 石油开采、砂轮、充气轮胎。"
      }
    ],
    "significance": "燃料电池把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 石油开采、砂轮、充气轮胎。"
  },
{
    "id": "ene_h2fc",
    "name": "氢燃料电池",
    "en": "Hydrogen Fuel Cell",
    "category": "energy",
    "era": "info",
    "date": "1960 年",
    "year": 1960,
    "people": "",
    "place": "",
    "summary": "氢燃料电池约 1960 年 成熟，建立在 经典力学、化学、用火 之上完成关键突破；其能力延伸到 动力输出、照明加热，并为 重水堆 的发展铺平了道路。",
    "dependsOn": ["physics","chemistry","fire","ene_tidal"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "氢燃料电池在 1960 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，氢燃料电池仍是 动力输出 的底层支撑，并持续影响 重水堆。"
      }
    ],
    "significance": "氢燃料电池把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 重水堆。"
  },
{
    "id": "ene_zincair",
    "name": "锌空气电池",
    "en": "Zinc-Air Battery",
    "category": "energy",
    "era": "electrical",
    "date": "1932 年",
    "year": 1932,
    "people": "",
    "place": "",
    "summary": "锌空气电池在 1932 年 前后成形，依托 经典力学、化学、用火 把 动力输出、照明加热 落到实处，并成为 能量形式 中承上启下的一环，直接支撑了 喷气发动机、雷达 等后续技术。",
    "dependsOn": ["physics","chemistry","fire","ene_rocketengine"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "锌空气电池在 1932 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，锌空气电池仍是 动力输出 的底层支撑，并持续影响 喷气发动机、雷达。"
      }
    ],
    "significance": "锌空气电池把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 喷气发动机、雷达。"
  },
{
    "id": "ene_flow",
    "name": "液流电池",
    "en": "Flow Battery",
    "category": "energy",
    "era": "info",
    "date": "1970 年",
    "year": 1970,
    "people": "",
    "place": "",
    "summary": "液流电池在 1970 年 前后成形，依托 经典力学、化学、用火 把 动力输出、照明加热 落到实处，并成为 能量形式 中承上启下的一环，直接支撑了 储氢技术 等后续技术。",
    "dependsOn": ["physics","chemistry","fire","mat_wave"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "液流电池在 1970 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，液流电池仍是 动力输出 的底层支撑，并持续影响 储氢技术。"
      }
    ],
    "significance": "液流电池把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 储氢技术。"
  },
{
    "id": "ene_supercap",
    "name": "超级电容",
    "en": "Supercapacitor",
    "category": "energy",
    "era": "info",
    "date": "1957 年",
    "year": 1957,
    "people": "",
    "place": "",
    "summary": "超级电容约 1957 年 成熟，建立在 经典力学、化学、用火 之上完成关键突破；其能力延伸到 动力输出、照明加热，并为 潮汐能、加工中心、电子束焊 的发展铺平了道路。",
    "dependsOn": ["physics","chemistry","fire","ene_bwr"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "超级电容在 1957 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，超级电容仍是 动力输出 的底层支撑，并持续影响 潮汐能、加工中心、电子束焊。"
      }
    ],
    "significance": "超级电容把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 潮汐能、加工中心、电子束焊。"
  },
{
    "id": "ene_flywheel",
    "name": "飞轮储能",
    "en": "Flywheel Storage",
    "category": "energy",
    "era": "info",
    "date": "1950 年",
    "year": 1950,
    "people": "",
    "place": "",
    "summary": "飞轮储能在 1950 年 前后成形，依托 经典力学、化学、用火 把 动力输出、照明加热 落到实处，并成为 能量形式 中承上启下的一环，直接支撑了 核聚变 等后续技术。",
    "dependsOn": ["physics","chemistry","fire","ene_caes"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "飞轮储能在 1950 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，飞轮储能仍是 动力输出 的底层支撑，并持续影响 核聚变。"
      }
    ],
    "significance": "飞轮储能把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 核聚变。"
  },
{
    "id": "ene_pumped",
    "name": "抽水蓄能",
    "en": "Pumped Storage",
    "category": "energy",
    "era": "industrial",
    "date": "1890 年",
    "year": 1890,
    "people": "",
    "place": "",
    "summary": "抽水蓄能约 1890 年 成熟，建立在 经典力学、化学、用火 之上完成关键突破；其能力延伸到 动力输出、照明加热，并为 无线输电 的发展铺平了道路。",
    "dependsOn": ["physics","chemistry","fire","ene_biodiesel"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "抽水蓄能在 1890 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，抽水蓄能仍是 动力输出 的底层支撑，并持续影响 无线输电。"
      }
    ],
    "significance": "抽水蓄能把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 无线输电。"
  },
{
    "id": "ene_caes",
    "name": "压缩空气储能",
    "en": "CAES",
    "category": "energy",
    "era": "electrical",
    "date": "1949 年",
    "year": 1949,
    "people": "",
    "place": "",
    "summary": "压缩空气储能在 1949 年 前后成形，依托 经典力学、化学、用火 把 动力输出、照明加热 落到实处，并成为 能量形式 中承上启下的一环，直接支撑了 飞轮储能、数控机床、对称加密 等后续技术。",
    "dependsOn": ["physics","chemistry","fire","ene_nuclear"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "压缩空气储能在 1949 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，压缩空气储能仍是 动力输出 的底层支撑，并持续影响 飞轮储能、数控机床、对称加密。"
      }
    ],
    "significance": "压缩空气储能把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 飞轮储能、数控机床、对称加密。"
  },
{
    "id": "ene_molten",
    "name": "熔盐储热",
    "en": "Molten Salt Storage",
    "category": "energy",
    "era": "info",
    "date": "1980 年",
    "year": 1980,
    "people": "",
    "place": "",
    "summary": "熔盐储热约 1980 年 成熟，建立在 经典力学、化学、用火 之上完成关键突破；其能力延伸到 动力输出、照明加热，并为 风电场 的发展铺平了道路。",
    "dependsOn": ["physics","chemistry","fire","ene_csp"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "熔盐储热在 1980 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，熔盐储热仍是 动力输出 的底层支撑，并持续影响 风电场。"
      }
    ],
    "significance": "熔盐储热把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 风电场。"
  },
{
    "id": "ene_h2storage",
    "name": "储氢技术",
    "en": "Hydrogen Storage",
    "category": "energy",
    "era": "info",
    "date": "1970 年",
    "year": 1970,
    "people": "",
    "place": "",
    "summary": "储氢技术约 1970 年 成熟，建立在 经典力学、化学、用火 之上完成关键突破；其能力延伸到 动力输出、照明加热，并为 干热岩 的发展铺平了道路。",
    "dependsOn": ["physics","chemistry","fire","ene_flow"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "储氢技术在 1970 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，储氢技术仍是 动力输出 的底层支撑，并持续影响 干热岩。"
      }
    ],
    "significance": "储氢技术把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 干热岩。"
  },
{
    "id": "ene_transformer",
    "name": "变压器",
    "en": "Transformer",
    "category": "energy",
    "era": "industrial",
    "date": "1885 年",
    "year": 1885,
    "people": "",
    "place": "",
    "summary": "变压器约 1885 年 成熟，建立在 经典力学、化学、用火 之上完成关键突破；其能力延伸到 动力输出、照明加热，并为 风力发电机、摩托车 的发展铺平了道路。",
    "dependsOn": ["physics","chemistry","fire","ene_steamturbine"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "变压器在 1885 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，变压器仍是 动力输出 的底层支撑，并持续影响 风力发电机、摩托车。"
      }
    ],
    "significance": "变压器把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 风力发电机、摩托车。"
  },
{
    "id": "ene_transmission",
    "name": "电力传输",
    "en": "Power Transmission",
    "category": "energy",
    "era": "industrial",
    "date": "1882 年",
    "year": 1882,
    "people": "",
    "place": "",
    "summary": "电力传输在 1882 年 前后成形，依托 经典力学、化学、用火 把 动力输出、照明加热 落到实处，并成为 能量形式 中承上启下的一环，直接支撑了 燃煤发电 等后续技术。",
    "dependsOn": ["physics","chemistry","fire","power_grid"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "电力传输在 1882 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，电力传输仍是 动力输出 的底层支撑，并持续影响 燃煤发电。"
      }
    ],
    "significance": "电力传输把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 燃煤发电。"
  },
{
    "id": "ene_ac",
    "name": "交流电系统",
    "en": "AC Power",
    "category": "energy",
    "era": "industrial",
    "date": "1888 年",
    "year": 1888,
    "people": "",
    "place": "",
    "summary": "交流电系统在 1888 年 前后成形，依托 经典力学、化学、用火 把 动力输出、照明加热 落到实处，并成为 能量形式 中承上启下的一环，直接支撑了 生物柴油、天线 等后续技术。",
    "dependsOn": ["physics","chemistry","fire","ene_windturbine"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "交流电系统在 1888 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，交流电系统仍是 动力输出 的底层支撑，并持续影响 生物柴油、天线。"
      }
    ],
    "significance": "交流电系统把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 生物柴油、天线。"
  },
{
    "id": "ene_dc",
    "name": "直流电系统",
    "en": "DC Power",
    "category": "energy",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "直流电系统约 1800 年 成熟，建立在 经典力学、化学、用火 之上完成关键突破；其能力延伸到 动力输出、照明加热，并为 生物发电 的发展铺平了道路。",
    "dependsOn": ["physics","chemistry","fire","ene_geothermal"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "直流电系统在 1800 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，直流电系统仍是 动力输出 的底层支撑，并持续影响 生物发电。"
      }
    ],
    "significance": "直流电系统把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 生物发电。"
  },
{
    "id": "ene_smartgrid",
    "name": "智能电网",
    "en": "Smart Grid",
    "category": "energy",
    "era": "intelligent",
    "date": "2000 年",
    "year": 2000,
    "people": "",
    "place": "",
    "summary": "智能电网约 2000 年 成熟，建立在 经典力学、化学、用火 之上完成关键突破；其能力延伸到 动力输出、照明加热，并为 微电网 的发展铺平了道路。",
    "dependsOn": ["physics","chemistry","fire","ene_lipoly"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "智能电网在 2000 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，智能电网仍是 动力输出 的底层支撑，并持续影响 微电网。"
      }
    ],
    "significance": "智能电网把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 微电网。"
  },
{
    "id": "ene_nuclear",
    "name": "核裂变反应堆",
    "en": "Nuclear Reactor",
    "category": "energy",
    "era": "electrical",
    "date": "1942 年",
    "year": 1942,
    "people": "",
    "place": "",
    "summary": "核裂变反应堆在 1942 年 前后成形，依托 经典力学、化学、用火 把 动力输出、照明加热 落到实处，并成为 能量形式 中承上启下的一环，直接支撑了 压缩空气储能、电火花加工、内存 等后续技术。",
    "dependsOn": ["physics","chemistry","fire","nuclear_fission"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "核裂变反应堆在 1942 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，核裂变反应堆仍是 动力输出 的底层支撑，并持续影响 压缩空气储能、电火花加工、内存。"
      }
    ],
    "significance": "核裂变反应堆把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 压缩空气储能、电火花加工、内存。"
  },
{
    "id": "ene_pwr",
    "name": "压水堆",
    "en": "PWR",
    "category": "energy",
    "era": "info",
    "date": "1953 年",
    "year": 1953,
    "people": "",
    "place": "",
    "summary": "压水堆约 1953 年 成熟，建立在 经典力学、化学、用火 之上完成关键突破；其能力延伸到 动力输出、照明加热，并为 自动导引车、彩色电视、哈希函数 的发展铺平了道路。",
    "dependsOn": ["physics","chemistry","fire","nuclear_fusion"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "压水堆在 1953 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，压水堆仍是 动力输出 的底层支撑，并持续影响 自动导引车、彩色电视、哈希函数。"
      }
    ],
    "significance": "压水堆把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 自动导引车、彩色电视、哈希函数。"
  },
{
    "id": "ene_bwr",
    "name": "沸水堆",
    "en": "BWR",
    "category": "energy",
    "era": "info",
    "date": "1955 年",
    "year": 1955,
    "people": "",
    "place": "",
    "summary": "沸水堆约 1955 年 成熟，建立在 经典力学、化学、用火 之上完成关键突破；其能力延伸到 动力输出、照明加热，并为 超级电容、热等静压、谐波减速器 的发展铺平了道路。",
    "dependsOn": ["physics","chemistry","fire","ene_pv"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "沸水堆在 1955 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，沸水堆仍是 动力输出 的底层支撑，并持续影响 超级电容、热等静压、谐波减速器。"
      }
    ],
    "significance": "沸水堆把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 超级电容、热等静压、谐波减速器。"
  },
{
    "id": "ene_phwr",
    "name": "重水堆",
    "en": "PHWR",
    "category": "energy",
    "era": "info",
    "date": "1960 年",
    "year": 1960,
    "people": "",
    "place": "",
    "summary": "重水堆约 1960 年 成熟，建立在 经典力学、化学、用火 之上完成关键突破；其能力延伸到 动力输出、照明加热，并为 惯性约束聚变 的发展铺平了道路。",
    "dependsOn": ["physics","chemistry","fire","ene_h2fc"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "重水堆在 1960 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，重水堆仍是 动力输出 的底层支撑，并持续影响 惯性约束聚变。"
      }
    ],
    "significance": "重水堆把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 惯性约束聚变。"
  },
{
    "id": "ene_fastbreeder",
    "name": "快中子增殖堆",
    "en": "Fast Breeder",
    "category": "energy",
    "era": "info",
    "date": "1951 年",
    "year": 1951,
    "people": "",
    "place": "",
    "summary": "快中子增殖堆约 1951 年 出现，建立在 经典力学、化学、用火 之上；它把 动力输出、照明加热 变成可稳定复现的能力，是 能量形式 中从经验走向方法的关键一步。",
    "dependsOn": ["physics","chemistry","fire","ene_salinity"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "快中子增殖堆在 1951 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，快中子增殖堆仍是 动力输出 的底层支撑，并作为 能量形式 的基础能力持续发挥作用。"
      }
    ],
    "significance": "快中子增殖堆把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "ene_fusion",
    "name": "核聚变",
    "en": "Nuclear Fusion",
    "category": "energy",
    "era": "info",
    "date": "1950 年",
    "year": 1950,
    "people": "",
    "place": "",
    "summary": "核聚变在 1950 年 前后成形，依托 经典力学、化学、用火 把 动力输出、照明加热 落到实处，并成为 能量形式 中承上启下的一环，直接支撑了 盐差能 等后续技术。",
    "dependsOn": ["physics","chemistry","fire","ene_flywheel"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "核聚变在 1950 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，核聚变仍是 动力输出 的底层支撑，并持续影响 盐差能。"
      }
    ],
    "significance": "核聚变把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 盐差能。"
  },
{
    "id": "ene_tokamak",
    "name": "托卡马克",
    "en": "Tokamak",
    "category": "energy",
    "era": "info",
    "date": "1968 年",
    "year": 1968,
    "people": "",
    "place": "",
    "summary": "托卡马克在 1968 年 前后成形，依托 经典力学、化学、用火 把 动力输出、照明加热 落到实处，并成为 能量形式 中承上启下的一环，直接支撑了 空间太阳能 等后续技术。",
    "dependsOn": ["physics","chemistry","fire","ene_clathrate"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "托卡马克在 1968 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，托卡马克仍是 动力输出 的底层支撑，并持续影响 空间太阳能。"
      }
    ],
    "significance": "托卡马克把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 空间太阳能。"
  },
{
    "id": "ene_icf",
    "name": "惯性约束聚变",
    "en": "Inertial Confinement",
    "category": "energy",
    "era": "info",
    "date": "1960 年",
    "year": 1960,
    "people": "",
    "place": "",
    "summary": "惯性约束聚变在 1960 年 前后成形，依托 经典力学、化学、用火 把 动力输出、照明加热 落到实处，并成为 能量形式 中承上启下的一环，直接支撑了 可燃冰 等后续技术。",
    "dependsOn": ["physics","chemistry","fire","ene_phwr"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "惯性约束聚变在 1960 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，惯性约束聚变仍是 动力输出 的底层支撑，并持续影响 可燃冰。"
      }
    ],
    "significance": "惯性约束聚变把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 可燃冰。"
  },
{
    "id": "ene_satpower",
    "name": "空间太阳能",
    "en": "Space Solar Power",
    "category": "energy",
    "era": "info",
    "date": "1968 年",
    "year": 1968,
    "people": "",
    "place": "",
    "summary": "空间太阳能约 1968 年 成熟，建立在 经典力学、化学、用火 之上完成关键突破；其能力延伸到 动力输出、照明加热，并为 波浪能、可编程逻辑控制器、超音速客机 的发展铺平了道路。",
    "dependsOn": ["physics","chemistry","fire","ene_tokamak"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "空间太阳能在 1968 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，空间太阳能仍是 动力输出 的底层支撑，并持续影响 波浪能、可编程逻辑控制器、超音速客机。"
      }
    ],
    "significance": "空间太阳能把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 波浪能、可编程逻辑控制器、超音速客机。"
  },
{
    "id": "ene_wpt",
    "name": "无线输电",
    "en": "Wireless Power",
    "category": "energy",
    "era": "industrial",
    "date": "1890 年",
    "year": 1890,
    "people": "",
    "place": "",
    "summary": "无线输电约 1890 年 成熟，建立在 经典力学、化学、用火 之上完成关键突破；其能力延伸到 动力输出、照明加热，并为 镍镉电池、滚珠丝杠、公共汽车 的发展铺平了道路。",
    "dependsOn": ["physics","chemistry","fire","ene_pumped"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "无线输电在 1890 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，无线输电仍是 动力输出 的底层支撑，并持续影响 镍镉电池、滚珠丝杠、公共汽车。"
      }
    ],
    "significance": "无线输电把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 镍镉电池、滚珠丝杠、公共汽车。"
  },
{
    "id": "ene_thermoelectric",
    "name": "热电发电",
    "en": "Thermoelectric Generation",
    "category": "energy",
    "era": "industrial",
    "date": "1821 年",
    "year": 1821,
    "people": "",
    "place": "",
    "summary": "热电发电在 1821 年 前后成形，依托 经典力学、化学、用火 把 动力输出、照明加热 落到实处，并成为 能量形式 中承上启下的一环，直接支撑了 挖掘机、盾构法 等后续技术。",
    "dependsOn": ["physics","chemistry","fire","ene_waterturbine"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "热电发电在 1821 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，热电发电仍是 动力输出 的底层支撑，并持续影响 挖掘机、盾构法。"
      }
    ],
    "significance": "热电发电把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 挖掘机、盾构法。"
  },
{
    "id": "ene_piezoelectric",
    "name": "压电发电",
    "en": "Piezoelectric Harvesting",
    "category": "energy",
    "era": "industrial",
    "date": "1880 年",
    "year": 1880,
    "people": "",
    "place": "",
    "summary": "压电发电在 1880 年 前后成形，依托 经典力学、化学、用火 把 动力输出、照明加热 落到实处，并成为 能量形式 中承上启下的一环，直接支撑了 海洋温差能 等后续技术。",
    "dependsOn": ["physics","chemistry","fire","electricity"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "压电发电在 1880 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，压电发电仍是 动力输出 的底层支撑，并持续影响 海洋温差能。"
      }
    ],
    "significance": "压电发电把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 海洋温差能。"
  },
{
    "id": "ene_tribo",
    "name": "摩擦纳米发电",
    "en": "Triboelectric Nanogen",
    "category": "energy",
    "era": "intelligent",
    "date": "2012 年",
    "year": 2012,
    "people": "",
    "place": "",
    "summary": "摩擦纳米发电在 2012 年 前后成形，依托 经典力学、化学、用火 把 动力输出、照明加热 落到实处，并成为 能量形式 中承上启下的一环，直接支撑了 平衡车、真空管道列车、可回收火箭 等后续技术。",
    "dependsOn": ["physics","chemistry","fire","ene_liquidair"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "摩擦纳米发电在 2012 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，摩擦纳米发电仍是 动力输出 的底层支撑，并持续影响 平衡车、真空管道列车、可回收火箭。"
      }
    ],
    "significance": "摩擦纳米发电把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 平衡车、真空管道列车、可回收火箭。"
  },
{
    "id": "ene_biogenic",
    "name": "生物发电",
    "en": "Bioelectric Generation",
    "category": "energy",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "生物发电在 1800 年 前后成形，依托 经典力学、化学、用火 把 动力输出、照明加热 落到实处，并成为 能量形式 中承上启下的一环，直接支撑了 氢燃料 等后续技术。",
    "dependsOn": ["physics","chemistry","fire","ene_dc"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "生物发电在 1800 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，生物发电仍是 动力输出 的底层支撑，并持续影响 氢燃料。"
      }
    ],
    "significance": "生物发电把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 氢燃料。"
  },
{
    "id": "ene_synfuel",
    "name": "合成燃料",
    "en": "Syngas Fuel",
    "category": "energy",
    "era": "electrical",
    "date": "1920 年",
    "year": 1920,
    "people": "",
    "place": "",
    "summary": "合成燃料在 1920 年 前后成形，依托 经典力学、化学、用火 把 动力输出、照明加热 落到实处，并成为 能量形式 中承上启下的一环，直接支撑了 火箭发动机、统计过程控制、旋翼机 等后续技术。",
    "dependsOn": ["physics","chemistry","fire","ene_peaker"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "合成燃料在 1920 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，合成燃料仍是 动力输出 的底层支撑，并持续影响 火箭发动机、统计过程控制、旋翼机。"
      }
    ],
    "significance": "合成燃料把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 火箭发动机、统计过程控制、旋翼机。"
  },
{
    "id": "ene_ammonia",
    "name": "氨燃料",
    "en": "Ammonia Fuel",
    "category": "energy",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "氨燃料在 1900 年 前后成形，依托 经典力学、化学、用火 把 动力输出、照明加热 落到实处，并成为 能量形式 中承上启下的一环，直接支撑了 甲醇燃料 等后续技术。",
    "dependsOn": ["physics","chemistry","fire","ene_nicd"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "氨燃料在 1900 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，氨燃料仍是 动力输出 的底层支撑，并持续影响 甲醇燃料。"
      }
    ],
    "significance": "氨燃料把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 甲醇燃料。"
  },
{
    "id": "ene_clathrate",
    "name": "可燃冰",
    "en": "Methane Hydrate",
    "category": "energy",
    "era": "info",
    "date": "1960 年",
    "year": 1960,
    "people": "",
    "place": "",
    "summary": "可燃冰在 1960 年 前后成形，依托 经典力学、化学、用火 把 动力输出、照明加热 落到实处，并成为 能量形式 中承上启下的一环，直接支撑了 托卡马克、激光切割、线切割 等后续技术。",
    "dependsOn": ["physics","chemistry","fire","ene_icf"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "可燃冰在 1960 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，可燃冰仍是 动力输出 的底层支撑，并持续影响 托卡马克、激光切割、线切割。"
      }
    ],
    "significance": "可燃冰把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 托卡马克、激光切割、线切割。"
  },
{
    "id": "ene_hotdry",
    "name": "干热岩",
    "en": "Hot Dry Rock",
    "category": "energy",
    "era": "info",
    "date": "1970 年",
    "year": 1970,
    "people": "",
    "place": "",
    "summary": "干热岩在 1970 年 前后成形，依托 经典力学、化学、用火 把 动力输出、照明加热 落到实处，并成为 能量形式 中承上启下的一环，直接支撑了 水热型地热 等后续技术。",
    "dependsOn": ["physics","chemistry","fire","ene_h2storage"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "干热岩在 1970 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，干热岩仍是 动力输出 的底层支撑，并持续影响 水热型地热。"
      }
    ],
    "significance": "干热岩把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 水热型地热。"
  },
{
    "id": "ene_otec",
    "name": "海洋温差能",
    "en": "OTEC",
    "category": "energy",
    "era": "industrial",
    "date": "1881 年",
    "year": 1881,
    "people": "",
    "place": "",
    "summary": "海洋温差能约 1881 年 成熟，建立在 经典力学、化学、用火 之上完成关键突破；其能力延伸到 动力输出、照明加热，并为 电弧焊 的发展铺平了道路。",
    "dependsOn": ["physics","chemistry","fire","ene_piezoelectric"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "海洋温差能在 1881 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，海洋温差能仍是 动力输出 的底层支撑，并持续影响 电弧焊。"
      }
    ],
    "significance": "海洋温差能把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 电弧焊。"
  },
{
    "id": "ene_salinity",
    "name": "盐差能",
    "en": "Salinity Gradient",
    "category": "energy",
    "era": "info",
    "date": "1950 年",
    "year": 1950,
    "people": "",
    "place": "",
    "summary": "盐差能约 1950 年 成熟，建立在 经典力学、化学、用火 之上完成关键突破；其能力延伸到 动力输出、照明加热，并为 快中子增殖堆、等离子切割、真空炉 的发展铺平了道路。",
    "dependsOn": ["physics","chemistry","fire","ene_fusion"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "盐差能在 1950 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，盐差能仍是 动力输出 的底层支撑，并持续影响 快中子增殖堆、等离子切割、真空炉。"
      }
    ],
    "significance": "盐差能把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 快中子增殖堆、等离子切割、真空炉。"
  },
{
    "id": "ene_methanol",
    "name": "甲醇燃料",
    "en": "Methanol Fuel",
    "category": "energy",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "甲醇燃料在 1900 年 前后成形，依托 经典力学、化学、用火 把 动力输出、照明加热 落到实处，并成为 能量形式 中承上启下的一环，直接支撑了 燃气发电 等后续技术。",
    "dependsOn": ["physics","chemistry","fire","ene_ammonia"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "甲醇燃料在 1900 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，甲醇燃料仍是 动力输出 的底层支撑，并持续影响 燃气发电。"
      }
    ],
    "significance": "甲醇燃料把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 燃气发电。"
  },
{
    "id": "ene_hydrogenfuel",
    "name": "氢燃料",
    "en": "Hydrogen Fuel",
    "category": "energy",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "氢燃料在 1800 年 前后成形，依托 经典力学、化学、用火 把 动力输出、照明加热 落到实处，并成为 能量形式 中承上启下的一环，直接支撑了 余热回收 等后续技术。",
    "dependsOn": ["physics","chemistry","fire","ene_biogenic"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "氢燃料在 1800 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，氢燃料仍是 动力输出 的底层支撑，并持续影响 余热回收。"
      }
    ],
    "significance": "氢燃料把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 余热回收。"
  },
{
    "id": "ene_coalfired",
    "name": "燃煤发电",
    "en": "Coal Power Plant",
    "category": "energy",
    "era": "industrial",
    "date": "1882 年",
    "year": 1882,
    "people": "",
    "place": "",
    "summary": "燃煤发电约 1882 年 成熟，建立在 经典力学、化学、用火 之上完成关键突破；其能力延伸到 动力输出、照明加热，并为 水力发电站 的发展铺平了道路。",
    "dependsOn": ["physics","chemistry","fire","ene_transmission"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "燃煤发电在 1882 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，燃煤发电仍是 动力输出 的底层支撑，并持续影响 水力发电站。"
      }
    ],
    "significance": "燃煤发电把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 水力发电站。"
  },
{
    "id": "ene_gasfired",
    "name": "燃气发电",
    "en": "Gas Power Plant",
    "category": "energy",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "燃气发电约 1900 年 成熟，建立在 经典力学、化学、用火 之上完成关键突破；其能力延伸到 动力输出、照明加热，并为 调峰电站 的发展铺平了道路。",
    "dependsOn": ["physics","chemistry","fire","ene_methanol"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "燃气发电在 1900 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，燃气发电仍是 动力输出 的底层支撑，并持续影响 调峰电站。"
      }
    ],
    "significance": "燃气发电把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 调峰电站。"
  },
{
    "id": "ene_hydroplant",
    "name": "水力发电站",
    "en": "Hydroelectric Plant",
    "category": "energy",
    "era": "industrial",
    "date": "1882 年",
    "year": 1882,
    "people": "",
    "place": "",
    "summary": "水力发电站约 1882 年 成熟，建立在 经典力学、化学、用火 之上完成关键突破；其能力延伸到 动力输出、照明加热，并为 蒸汽轮机、精密轴承、无轨电车 的发展铺平了道路。",
    "dependsOn": ["physics","chemistry","fire","ene_coalfired"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "水力发电站在 1882 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，水力发电站仍是 动力输出 的底层支撑，并持续影响 蒸汽轮机、精密轴承、无轨电车。"
      }
    ],
    "significance": "水力发电站把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 蒸汽轮机、精密轴承、无轨电车。"
  },
{
    "id": "ene_windfarm",
    "name": "风电场",
    "en": "Wind Farm",
    "category": "energy",
    "era": "info",
    "date": "1980 年",
    "year": 1980,
    "people": "",
    "place": "",
    "summary": "风电场在 1980 年 前后成形，依托 经典力学、化学、用火 把 动力输出、照明加热 落到实处，并成为 能量形式 中承上启下的一环，直接支撑了 光伏电站 等后续技术。",
    "dependsOn": ["physics","chemistry","fire","ene_molten"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "风电场在 1980 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，风电场仍是 动力输出 的底层支撑，并持续影响 光伏电站。"
      }
    ],
    "significance": "风电场把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 光伏电站。"
  },
{
    "id": "ene_solarfarm",
    "name": "光伏电站",
    "en": "Solar Farm",
    "category": "energy",
    "era": "info",
    "date": "1980 年",
    "year": 1980,
    "people": "",
    "place": "",
    "summary": "光伏电站约 1980 年 成熟，建立在 经典力学、化学、用火 之上完成关键突破；其能力延伸到 动力输出、照明加热，并为 热电池 的发展铺平了道路。",
    "dependsOn": ["physics","chemistry","fire","ene_windfarm"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "光伏电站在 1980 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，光伏电站仍是 动力输出 的底层支撑，并持续影响 热电池。"
      }
    ],
    "significance": "光伏电站把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 热电池。"
  },
{
    "id": "ene_batteryev",
    "name": "电池储能系统",
    "en": "Battery Energy Storage",
    "category": "energy",
    "era": "info",
    "date": "1990 年",
    "year": 1990,
    "people": "",
    "place": "",
    "summary": "电池储能系统在 1990 年 前后成形，依托 经典力学、化学、用火 把 动力输出、照明加热 落到实处，并成为 能量形式 中承上启下的一环，直接支撑了 燃料电池汽车 等后续技术。",
    "dependsOn": ["physics","chemistry","fire","ene_nimh"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "电池储能系统在 1990 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，电池储能系统仍是 动力输出 的底层支撑，并持续影响 燃料电池汽车。"
      }
    ],
    "significance": "电池储能系统把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 燃料电池汽车。"
  },
{
    "id": "ene_microgrid",
    "name": "微电网",
    "en": "Microgrid",
    "category": "energy",
    "era": "intelligent",
    "date": "2000 年",
    "year": 2000,
    "people": "",
    "place": "",
    "summary": "微电网在 2000 年 前后成形，依托 经典力学、化学、用火 把 动力输出、照明加热 落到实处，并成为 能量形式 中承上启下的一环，直接支撑了 车网互动 等后续技术。",
    "dependsOn": ["physics","chemistry","fire","ene_smartgrid"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "微电网在 2000 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，微电网仍是 动力输出 的底层支撑，并持续影响 车网互动。"
      }
    ],
    "significance": "微电网把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 车网互动。"
  },
{
    "id": "ene_v2g",
    "name": "车网互动",
    "en": "Vehicle-to-Grid",
    "category": "energy",
    "era": "intelligent",
    "date": "2000 年",
    "year": 2000,
    "people": "",
    "place": "",
    "summary": "车网互动约 2000 年 成熟，建立在 经典力学、化学、用火 之上完成关键突破；其能力延伸到 动力输出、照明加热，并为 离网供电 的发展铺平了道路。",
    "dependsOn": ["physics","chemistry","fire","ene_microgrid"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "车网互动在 2000 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，车网互动仍是 动力输出 的底层支撑，并持续影响 离网供电。"
      }
    ],
    "significance": "车网互动把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 离网供电。"
  },
{
    "id": "ene_heatpump",
    "name": "热泵",
    "en": "Heat Pump",
    "category": "energy",
    "era": "industrial",
    "date": "1852 年",
    "year": 1852,
    "people": "",
    "place": "",
    "summary": "热泵在 1852 年 前后成形，依托 经典力学、化学、用火 把 动力输出、照明加热 落到实处，并成为 能量形式 中承上启下的一环，直接支撑了 飞艇、滑翔机、电梯 等后续技术。",
    "dependsOn": ["physics","chemistry","fire","ene_ethanol"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "热泵在 1852 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，热泵仍是 动力输出 的底层支撑，并持续影响 飞艇、滑翔机、电梯。"
      }
    ],
    "significance": "热泵把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 飞艇、滑翔机、电梯。"
  },
{
    "id": "ene_district",
    "name": "区域供冷供热",
    "en": "District Energy",
    "category": "energy",
    "era": "industrial",
    "date": "1877 年",
    "year": 1877,
    "people": "",
    "place": "",
    "summary": "区域供冷供热在 1877 年 前后成形，依托 经典力学、化学、用火 把 动力输出、照明加热 落到实处，并成为 能量形式 中承上启下的一环，直接支撑了 电阻焊、电话交换机、黑胶唱片 等后续技术。",
    "dependsOn": ["physics","chemistry","fire","internal_combustion"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "区域供冷供热在 1877 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，区域供冷供热仍是 动力输出 的底层支撑，并持续影响 电阻焊、电话交换机、黑胶唱片。"
      }
    ],
    "significance": "区域供冷供热把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 电阻焊、电话交换机、黑胶唱片。"
  },
{
    "id": "ene_wasteheat",
    "name": "余热回收",
    "en": "Waste Heat Recovery",
    "category": "energy",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "余热回收在 1800 年 前后成形，依托 经典力学、化学、用火 把 动力输出、照明加热 落到实处，并成为 能量形式 中承上启下的一环，直接支撑了 斯特林发动机、刨床、磨床 等后续技术。",
    "dependsOn": ["physics","chemistry","fire","ene_hydrogenfuel"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "余热回收在 1800 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，余热回收仍是 动力输出 的底层支撑，并持续影响 斯特林发动机、刨床、磨床。"
      }
    ],
    "significance": "余热回收把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 斯特林发动机、刨床、磨床。"
  },
{
    "id": "ene_fuelcellcar",
    "name": "燃料电池汽车",
    "en": "Fuel Cell Vehicle",
    "category": "energy",
    "era": "info",
    "date": "1990 年",
    "year": 1990,
    "people": "",
    "place": "",
    "summary": "燃料电池汽车在 1990 年 前后成形，依托 经典力学、化学、用火 把 动力输出、照明加热 落到实处，并成为 能量形式 中承上启下的一环，直接支撑了 锂离子电池、自组装、仿生制造 等后续技术。",
    "dependsOn": ["physics","chemistry","fire","ene_batteryev"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "燃料电池汽车在 1990 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，燃料电池汽车仍是 动力输出 的底层支撑，并持续影响 锂离子电池、自组装、仿生制造。"
      }
    ],
    "significance": "燃料电池汽车把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 锂离子电池、自组装、仿生制造。"
  },
{
    "id": "ene_peaker",
    "name": "调峰电站",
    "en": "Peaker Plant",
    "category": "energy",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "调峰电站在 1900 年 前后成形，依托 经典力学、化学、用火 把 动力输出、照明加热 落到实处，并成为 能量形式 中承上启下的一环，直接支撑了 合成燃料、气焊、装配线 等后续技术。",
    "dependsOn": ["physics","chemistry","fire","ene_gasfired"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "调峰电站在 1900 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，调峰电站仍是 动力输出 的底层支撑，并持续影响 合成燃料、气焊、装配线。"
      }
    ],
    "significance": "调峰电站把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 合成燃料、气焊、装配线。"
  },
{
    "id": "ene_island",
    "name": "离网供电",
    "en": "Off-Grid System",
    "category": "energy",
    "era": "intelligent",
    "date": "2000 年",
    "year": 2000,
    "people": "",
    "place": "",
    "summary": "离网供电约 2000 年 成熟，建立在 经典力学、化学、用火 之上完成关键突破；其能力延伸到 动力输出、照明加热，并为 重力储能 的发展铺平了道路。",
    "dependsOn": ["physics","chemistry","fire","ene_v2g"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "离网供电在 2000 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，离网供电仍是 动力输出 的底层支撑，并持续影响 重力储能。"
      }
    ],
    "significance": "离网供电把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 重力储能。"
  },
{
    "id": "ene_bess",
    "name": "集装箱储能",
    "en": "BESS Container",
    "category": "energy",
    "era": "intelligent",
    "date": "2010 年",
    "year": 2010,
    "people": "",
    "place": "",
    "summary": "集装箱储能约 2010 年 成熟，建立在 经典力学、化学、用火 之上完成关键突破；其能力延伸到 动力输出、照明加热，并为 液态空气储能 的发展铺平了道路。",
    "dependsOn": ["physics","chemistry","fire","ene_solidstate"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "集装箱储能在 2010 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，集装箱储能仍是 动力输出 的底层支撑，并持续影响 液态空气储能。"
      }
    ],
    "significance": "集装箱储能把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 液态空气储能。"
  },
{
    "id": "ene_gravity",
    "name": "重力储能",
    "en": "Gravity Storage",
    "category": "energy",
    "era": "intelligent",
    "date": "2000 年",
    "year": 2000,
    "people": "",
    "place": "",
    "summary": "重力储能在 2000 年 前后成形，依托 经典力学、化学、用火 把 动力输出、照明加热 落到实处，并成为 能量形式 中承上启下的一环，直接支撑了 光伏建筑一体化 等后续技术。",
    "dependsOn": ["physics","chemistry","fire","ene_island"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "重力储能在 2000 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，重力储能仍是 动力输出 的底层支撑，并持续影响 光伏建筑一体化。"
      }
    ],
    "significance": "重力储能把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 光伏建筑一体化。"
  },
{
    "id": "ene_liquidair",
    "name": "液态空气储能",
    "en": "Liquid Air Storage",
    "category": "energy",
    "era": "intelligent",
    "date": "2010 年",
    "year": 2010,
    "people": "",
    "place": "",
    "summary": "液态空气储能在 2010 年 前后成形，依托 经典力学、化学、用火 把 动力输出、照明加热 落到实处，并成为 能量形式 中承上启下的一环，直接支撑了 摩擦纳米发电、工业 4.0、增减材混合制造 等后续技术。",
    "dependsOn": ["physics","chemistry","fire","ene_bess"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "液态空气储能在 2010 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，液态空气储能仍是 动力输出 的底层支撑，并持续影响 摩擦纳米发电、工业 4.0、增减材混合制造。"
      }
    ],
    "significance": "液态空气储能把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 摩擦纳米发电、工业 4.0、增减材混合制造。"
  },
{
    "id": "ene_thermalbattery",
    "name": "热电池",
    "en": "Thermal Battery",
    "category": "energy",
    "era": "info",
    "date": "1980 年",
    "year": 1980,
    "people": "",
    "place": "",
    "summary": "热电池在 1980 年 前后成形，依托 经典力学、化学、用火 把 动力输出、照明加热 落到实处，并成为 能量形式 中承上启下的一环，直接支撑了 熔盐塔式光热 等后续技术。",
    "dependsOn": ["physics","chemistry","fire","ene_solarfarm"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "热电池在 1980 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，热电池仍是 动力输出 的底层支撑，并持续影响 熔盐塔式光热。"
      }
    ],
    "significance": "热电池把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 熔盐塔式光热。"
  },
{
    "id": "ene_bipv",
    "name": "光伏建筑一体化",
    "en": "BIPV",
    "category": "energy",
    "era": "intelligent",
    "date": "2000 年",
    "year": 2000,
    "people": "",
    "place": "",
    "summary": "光伏建筑一体化约 2000 年 成熟，建立在 经典力学、化学、用火 之上完成关键突破；其能力延伸到 动力输出、照明加热，并为 线性菲涅尔 的发展铺平了道路。",
    "dependsOn": ["physics","chemistry","fire","ene_gravity"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "光伏建筑一体化在 2000 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，光伏建筑一体化仍是 动力输出 的底层支撑，并持续影响 线性菲涅尔。"
      }
    ],
    "significance": "光伏建筑一体化把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 线性菲涅尔。"
  },
{
    "id": "ene_solartower",
    "name": "熔盐塔式光热",
    "en": "Solar Power Tower",
    "category": "energy",
    "era": "info",
    "date": "1980 年",
    "year": 1980,
    "people": "",
    "place": "",
    "summary": "熔盐塔式光热在 1980 年 前后成形，依托 经典力学、化学、用火 把 动力输出、照明加热 落到实处，并成为 能量形式 中承上启下的一环，直接支撑了 碟式斯特林 等后续技术。",
    "dependsOn": ["physics","chemistry","fire","ene_thermalbattery"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "熔盐塔式光热在 1980 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，熔盐塔式光热仍是 动力输出 的底层支撑，并持续影响 碟式斯特林。"
      }
    ],
    "significance": "熔盐塔式光热把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 碟式斯特林。"
  },
{
    "id": "ene_dishstirling",
    "name": "碟式斯特林",
    "en": "Dish-Stirling",
    "category": "energy",
    "era": "info",
    "date": "1980 年",
    "year": 1980,
    "people": "",
    "place": "",
    "summary": "碟式斯特林在 1980 年 前后成形，依托 经典力学、化学、用火 把 动力输出、照明加热 落到实处，并成为 能量形式 中承上启下的一环，直接支撑了 车铣复合、3D 打印、逆向工程 等后续技术。",
    "dependsOn": ["physics","chemistry","fire","ene_solartower"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "碟式斯特林在 1980 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，碟式斯特林仍是 动力输出 的底层支撑，并持续影响 车铣复合、3D 打印、逆向工程。"
      }
    ],
    "significance": "碟式斯特林把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 车铣复合、3D 打印、逆向工程。"
  },
{
    "id": "ene_linearfresnel",
    "name": "线性菲涅尔",
    "en": "Linear Fresnel",
    "category": "energy",
    "era": "intelligent",
    "date": "2000 年",
    "year": 2000,
    "people": "",
    "place": "",
    "summary": "线性菲涅尔在 2000 年 前后成形，依托 经典力学、化学、用火 把 动力输出、照明加热 落到实处，并成为 能量形式 中承上启下的一环，直接支撑了 井式地热 等后续技术。",
    "dependsOn": ["physics","chemistry","fire","ene_bipv"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "线性菲涅尔在 2000 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，线性菲涅尔仍是 动力输出 的底层支撑，并持续影响 井式地热。"
      }
    ],
    "significance": "线性菲涅尔把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 井式地热。"
  },
{
    "id": "ene_hydrothermal",
    "name": "水热型地热",
    "en": "Hydrothermal Geothermal",
    "category": "energy",
    "era": "info",
    "date": "1970 年",
    "year": 1970,
    "people": "",
    "place": "",
    "summary": "水热型地热约 1970 年 成熟，建立在 经典力学、化学、用火 之上完成关键突破；其能力延伸到 动力输出、照明加热，并为 聚光太阳能、水射流切割、金属注射成形 的发展铺平了道路。",
    "dependsOn": ["physics","chemistry","fire","ene_hotdry"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "水热型地热在 1970 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，水热型地热仍是 动力输出 的底层支撑，并持续影响 聚光太阳能、水射流切割、金属注射成形。"
      }
    ],
    "significance": "水热型地热把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 聚光太阳能、水射流切割、金属注射成形。"
  },
{
    "id": "ene_borehole",
    "name": "井式地热",
    "en": "Borehole Geothermal",
    "category": "energy",
    "era": "intelligent",
    "date": "2000 年",
    "year": 2000,
    "people": "",
    "place": "",
    "summary": "井式地热在 2000 年 前后成形，依托 经典力学、化学、用火 把 动力输出、照明加热 落到实处，并成为 能量形式 中承上启下的一环，直接支撑了 钠离子电池、数字孪生、低温切削 等后续技术。",
    "dependsOn": ["physics","chemistry","fire","ene_linearfresnel"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "井式地热在 2000 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，井式地热仍是 动力输出 的底层支撑，并持续影响 钠离子电池、数字孪生、低温切削。"
      }
    ],
    "significance": "井式地热把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 钠离子电池、数字孪生、低温切削。"
  },
{
    "id": "mfg_stone",
    "name": "石器打制",
    "en": "Stone Knapping",
    "category": "manufact",
    "era": "prehistoric",
    "date": "约 260 万年前",
    "year": -2600000,
    "people": "",
    "place": "",
    "summary": "石器打制约 约 260 万年前 成熟，建立在 石器 之上完成关键突破；其能力延伸到 零件加工、批量制造，并为 手斧、刀具 的发展铺平了道路。",
    "dependsOn": ["stone_tools"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "史前时代",
        "text": "石器打制在 约 260 万年前 前后出现，依托 石器 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，石器打制仍是 零件加工 的底层支撑，并持续影响 手斧、刀具。"
      }
    ],
    "significance": "石器打制把 石器 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 手斧、刀具。"
  },
{
    "id": "mfg_handaxe",
    "name": "手斧",
    "en": "Hand Axe",
    "category": "manufact",
    "era": "prehistoric",
    "date": "约 170 万年前",
    "year": -1700000,
    "people": "",
    "place": "",
    "summary": "手斧约 约 170 万年前 成熟，建立在 石器、石器打制 之上完成关键突破；其能力延伸到 零件加工、批量制造，并为 刀具、锤 的发展铺平了道路。",
    "dependsOn": ["stone_tools","mfg_stone"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "史前时代",
        "text": "手斧在 约 170 万年前 前后出现，依托 石器 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，手斧仍是 零件加工 的底层支撑，并持续影响 刀具、锤。"
      }
    ],
    "significance": "手斧把 石器 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 刀具、锤。"
  },
{
    "id": "mfg_knife",
    "name": "刀具",
    "en": "Knife",
    "category": "manufact",
    "era": "prehistoric",
    "date": "约 10 万年前",
    "year": -100000,
    "people": "",
    "place": "",
    "summary": "刀具约 约 10 万年前 成熟，建立在 石器、用火、手斧 之上完成关键突破；其能力延伸到 零件加工、批量制造，并为 锤、斧 的发展铺平了道路。",
    "dependsOn": ["stone_tools","fire","mfg_handaxe","mfg_stone"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "史前时代",
        "text": "刀具在 约 10 万年前 前后出现，依托 石器 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，刀具仍是 零件加工 的底层支撑，并持续影响 锤、斧。"
      }
    ],
    "significance": "刀具把 石器 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 锤、斧。"
  },
{
    "id": "mfg_chisel",
    "name": "凿",
    "en": "Chisel",
    "category": "manufact",
    "era": "prehistoric",
    "date": "约 3 万年前",
    "year": -30000,
    "people": "",
    "place": "",
    "summary": "凿在 约 3 万年前 前后成形，依托 石器、用火、斧 把 零件加工、批量制造 落到实处，并成为 制造与工具 中承上启下的一环，直接支撑了 锯、钻、弓 等后续技术。",
    "dependsOn": ["stone_tools","fire","mfg_axe","mfg_hammer"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "史前时代",
        "text": "凿在 约 3 万年前 前后出现，依托 石器 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，凿仍是 零件加工 的底层支撑，并持续影响 锯、钻、弓。"
      }
    ],
    "significance": "凿把 石器 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 锯、钻、弓。"
  },
{
    "id": "mfg_hammer",
    "name": "锤",
    "en": "Hammer",
    "category": "manufact",
    "era": "prehistoric",
    "date": "约 5 万年前",
    "year": -50000,
    "people": "",
    "place": "",
    "summary": "锤在 约 5 万年前 前后成形，依托 石器、用火、刀具 把 零件加工、批量制造 落到实处，并成为 制造与工具 中承上启下的一环，直接支撑了 凿、斧 等后续技术。",
    "dependsOn": ["stone_tools","fire","mfg_knife","mfg_handaxe"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "史前时代",
        "text": "锤在 约 5 万年前 前后出现，依托 石器 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，锤仍是 零件加工 的底层支撑，并持续影响 凿、斧。"
      }
    ],
    "significance": "锤把 石器 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 凿、斧。"
  },
{
    "id": "mfg_axe",
    "name": "斧",
    "en": "Axe",
    "category": "manufact",
    "era": "prehistoric",
    "date": "约 5 万年前",
    "year": -50000,
    "people": "",
    "place": "",
    "summary": "斧在 约 5 万年前 前后成形，依托 石器、用火、锤 把 零件加工、批量制造 落到实处，并成为 制造与工具 中承上启下的一环，直接支撑了 凿、钻 等后续技术。",
    "dependsOn": ["stone_tools","fire","mfg_hammer","mfg_knife"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "史前时代",
        "text": "斧在 约 5 万年前 前后出现，依托 石器 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，斧仍是 零件加工 的底层支撑，并持续影响 凿、钻。"
      }
    ],
    "significance": "斧把 石器 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 凿、钻。"
  },
{
    "id": "mfg_saw",
    "name": "锯",
    "en": "Saw",
    "category": "manufact",
    "era": "prehistoric",
    "date": "公元前 5000 年",
    "year": -5000,
    "people": "",
    "place": "",
    "summary": "锯约 公元前 5000 年 成熟，建立在 红铜冶炼、用火、钻 之上完成关键突破；其能力延伸到 零件加工、批量制造，并为 砂型铸造、磨料 的发展铺平了道路。",
    "dependsOn": ["mat_copper","fire","mfg_drill","mfg_chisel"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "史前时代",
        "text": "锯在 公元前 5000 年 前后出现，依托 红铜冶炼 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，锯仍是 零件加工 的底层支撑，并持续影响 砂型铸造、磨料。"
      }
    ],
    "significance": "锯把 红铜冶炼 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 砂型铸造、磨料。"
  },
{
    "id": "mfg_drill",
    "name": "钻",
    "en": "Drill",
    "category": "manufact",
    "era": "prehistoric",
    "date": "约 1 万年前",
    "year": -10000,
    "people": "",
    "place": "",
    "summary": "钻约 约 1 万年前 成熟，建立在 陶器、用火、凿 之上完成关键突破；其能力延伸到 零件加工、批量制造，并为 锯、磨料、独木舟 的发展铺平了道路。",
    "dependsOn": ["mat_pottery","fire","mfg_chisel","mfg_axe"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "史前时代",
        "text": "钻在 约 1 万年前 前后出现，依托 陶器 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，钻仍是 零件加工 的底层支撑，并持续影响 锯、磨料、独木舟。"
      }
    ],
    "significance": "钻把 陶器 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 锯、磨料、独木舟。"
  },
{
    "id": "mfg_lathe",
    "name": "车床",
    "en": "Lathe",
    "category": "manufact",
    "era": "ancient",
    "date": "公元前 1000 年",
    "year": -1000,
    "people": "",
    "place": "",
    "summary": "车床在 公元前 1000 年 前后成形，依托 退火、煤炭开采、数学 把 零件加工、批量制造 落到实处，并成为 制造与工具 中承上启下的一环，直接支撑了 螺纹连接、灯塔、斗拱 等后续技术。",
    "dependsOn": ["mat_anneal","ene_coal","mathematics","iron_smelting"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "车床在 公元前 1000 年 前后出现，依托 退火 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，车床仍是 零件加工 的底层支撑，并持续影响 螺纹连接、灯塔、斗拱。"
      }
    ],
    "significance": "车床把 退火 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 螺纹连接、灯塔、斗拱。"
  },
{
    "id": "mfg_boring",
    "name": "镗床",
    "en": "Boring Machine",
    "category": "manufact",
    "era": "earlymodern",
    "date": "1500 年",
    "year": 1500,
    "people": "",
    "place": "",
    "summary": "镗床约 1500 年 成熟，建立在 轧制、风车、数学 之上完成关键突破；其能力延伸到 零件加工、批量制造，并为 压延 的发展铺平了道路。",
    "dependsOn": ["mat_rolling","ene_wind","mathematics","mfg_wiredraw"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "近代早期",
        "text": "镗床在 1500 年 前后出现，依托 轧制 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，镗床仍是 零件加工 的底层支撑，并持续影响 压延。"
      }
    ],
    "significance": "镗床把 轧制 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 压延。"
  },
{
    "id": "mfg_mill",
    "name": "铣床",
    "en": "Milling Machine",
    "category": "manufact",
    "era": "industrial",
    "date": "1818 年",
    "year": 1818,
    "people": "",
    "place": "",
    "summary": "铣床在 1818 年 前后成形，依托 电镀、斯特林发动机、数学 把 零件加工、批量制造 落到实处，并成为 制造与工具 中承上启下的一环，直接支撑了 压铸、螺旋桨、有轨电车 等后续技术。",
    "dependsOn": ["mat_plating","ene_stirling","mathematics","mfg_planer"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "铣床在 1818 年 前后出现，依托 电镀 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，铣床仍是 零件加工 的底层支撑，并持续影响 压铸、螺旋桨、有轨电车。"
      }
    ],
    "significance": "铣床把 电镀 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 压铸、螺旋桨、有轨电车。"
  },
{
    "id": "mfg_planer",
    "name": "刨床",
    "en": "Planer",
    "category": "manufact",
    "era": "industrial",
    "date": "1810 年",
    "year": 1810,
    "people": "",
    "place": "",
    "summary": "刨床在 1810 年 前后成形，依托 电镀、余热回收、数学 把 零件加工、批量制造 落到实处，并成为 制造与工具 中承上启下的一环，直接支撑了 铣床、自行车、蒸汽机车 等后续技术。",
    "dependsOn": ["mat_plating","ene_wasteheat","mathematics","mfg_furnace"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "刨床在 1810 年 前后出现，依托 电镀 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，刨床仍是 零件加工 的底层支撑，并持续影响 铣床、自行车、蒸汽机车。"
      }
    ],
    "significance": "刨床把 电镀 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 铣床、自行车、蒸汽机车。"
  },
{
    "id": "mfg_grinder",
    "name": "磨床",
    "en": "Grinder",
    "category": "manufact",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "磨床约 1800 年 成熟，建立在 感应熔炼、余热回收、数学 之上完成关键突破；其能力延伸到 零件加工、批量制造，并为 钻床 的发展铺平了道路。",
    "dependsOn": ["mat_inductionmelt","ene_wasteheat","mathematics","interchangeable_parts"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "磨床在 1800 年 前后出现，依托 感应熔炼 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，磨床仍是 零件加工 的底层支撑，并持续影响 钻床。"
      }
    ],
    "significance": "磨床把 感应熔炼 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 钻床。"
  },
{
    "id": "mfg_drillpress",
    "name": "钻床",
    "en": "Drill Press",
    "category": "manufact",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "钻床在 1800 年 前后成形，依托 感应熔炼、余热回收、数学 把 零件加工、批量制造 落到实处，并成为 制造与工具 中承上启下的一环，直接支撑了 模锻 等后续技术。",
    "dependsOn": ["mat_inductionmelt","ene_wasteheat","mathematics","mfg_grinder"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "钻床在 1800 年 前后出现，依托 感应熔炼 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，钻床仍是 零件加工 的底层支撑，并持续影响 模锻。"
      }
    ],
    "significance": "钻床把 感应熔炼 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 模锻。"
  },
{
    "id": "mfg_cnc",
    "name": "数控机床",
    "en": "CNC Machine",
    "category": "manufact",
    "era": "electrical",
    "date": "1949 年",
    "year": 1949,
    "people": "",
    "place": "",
    "summary": "数控机床在 1949 年 前后成形，依托 ABS 树脂、压缩空气储能、数学 把 零件加工、批量制造 落到实处，并成为 制造与工具 中承上启下的一环，直接支撑了 等离子切割 等后续技术。",
    "dependsOn": ["mat_abs","ene_caes","mathematics","mfg_edm"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "数控机床在 1949 年 前后出现，依托 ABS 树脂 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，数控机床仍是 零件加工 的底层支撑，并持续影响 等离子切割。"
      }
    ],
    "significance": "数控机床把 ABS 树脂 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 等离子切割。"
  },
{
    "id": "mfg_mc",
    "name": "加工中心",
    "en": "Machining Center",
    "category": "manufact",
    "era": "info",
    "date": "1958 年",
    "year": 1958,
    "people": "",
    "place": "",
    "summary": "加工中心在 1958 年 前后成形，依托 碳纤维、超级电容、数学 把 零件加工、批量制造 落到实处，并成为 制造与工具 中承上启下的一环，直接支撑了 电子束焊 等后续技术。",
    "dependsOn": ["mat_cf","ene_supercap","mathematics","mfg_harmonic"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "加工中心在 1958 年 前后出现，依托 碳纤维 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，加工中心仍是 零件加工 的底层支撑，并持续影响 电子束焊。"
      }
    ],
    "significance": "加工中心把 碳纤维 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 电子束焊。"
  },
{
    "id": "mfg_turnmill",
    "name": "车铣复合",
    "en": "Turn-Mill",
    "category": "manufact",
    "era": "info",
    "date": "1980 年",
    "year": 1980,
    "people": "",
    "place": "",
    "summary": "车铣复合约 1980 年 成熟，建立在 激光熔覆、碟式斯特林、数学 之上完成关键突破；其能力延伸到 零件加工、批量制造，并为 逆向工程 的发展铺平了道路。",
    "dependsOn": ["mat_laserclad","ene_dishstirling","mathematics","mfg_cam"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "车铣复合在 1980 年 前后出现，依托 激光熔覆 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，车铣复合仍是 零件加工 的底层支撑，并持续影响 逆向工程。"
      }
    ],
    "significance": "车铣复合把 激光熔覆 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 逆向工程。"
  },
{
    "id": "mfg_3dp",
    "name": "3D 打印",
    "en": "3D Printing",
    "category": "manufact",
    "era": "info",
    "date": "1984 年",
    "year": 1984,
    "people": "",
    "place": "",
    "summary": "3D 打印约 1984 年 成熟，建立在 激光熔覆、碟式斯特林、数学 之上完成关键突破；其能力延伸到 零件加工、批量制造，并为 磁悬浮列车 的发展铺平了道路。",
    "dependsOn": ["mat_laserclad","ene_dishstirling","mathematics","mfg_robotgripper"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "3D 打印在 1984 年 前后出现，依托 激光熔覆 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，3D 打印仍是 零件加工 的底层支撑，并持续影响 磁悬浮列车。"
      }
    ],
    "significance": "3D 打印把 激光熔覆 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 磁悬浮列车。"
  },
{
    "id": "mfg_additive",
    "name": "增材制造",
    "en": "Additive Manufacturing",
    "category": "manufact",
    "era": "info",
    "date": "1986 年",
    "year": 1986,
    "people": "",
    "place": "",
    "summary": "增材制造在 1986 年 前后成形，依托 高温超导、无刷电机、数学 把 零件加工、批量制造 落到实处，并成为 制造与工具 中承上启下的一环，直接支撑了 六西格玛 等后续技术。",
    "dependsOn": ["mat_htsc","brushless_motor","mathematics","printing3d"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "增材制造在 1986 年 前后出现，依托 高温超导 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，增材制造仍是 零件加工 的底层支撑，并持续影响 六西格玛。"
      }
    ],
    "significance": "增材制造把 高温超导 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 六西格玛。"
  },
{
    "id": "mfg_lasercut",
    "name": "激光切割",
    "en": "Laser Cutting",
    "category": "manufact",
    "era": "info",
    "date": "1965 年",
    "year": 1965,
    "people": "",
    "place": "",
    "summary": "激光切割约 1965 年 成熟，建立在 芳纶、可燃冰、数学 之上完成关键突破；其能力延伸到 零件加工、批量制造，并为 柔性制造系统 的发展铺平了道路。",
    "dependsOn": ["mat_aramid","ene_clathrate","mathematics","robot"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "激光切割在 1965 年 前后出现，依托 芳纶 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，激光切割仍是 零件加工 的底层支撑，并持续影响 柔性制造系统。"
      }
    ],
    "significance": "激光切割把 芳纶 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 柔性制造系统。"
  },
{
    "id": "mfg_waterjet",
    "name": "水射流切割",
    "en": "Water Jet Cutting",
    "category": "manufact",
    "era": "info",
    "date": "1970 年",
    "year": 1970,
    "people": "",
    "place": "",
    "summary": "水射流切割在 1970 年 前后成形，依托 储氢合金、水热型地热、数学 把 零件加工、批量制造 落到实处，并成为 制造与工具 中承上启下的一环，直接支撑了 金属注射成形 等后续技术。",
    "dependsOn": ["mat_hydrogenstorage","ene_hydrothermal","mathematics","mfg_plc"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "水射流切割在 1970 年 前后出现，依托 储氢合金 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，水射流切割仍是 零件加工 的底层支撑，并持续影响 金属注射成形。"
      }
    ],
    "significance": "水射流切割把 储氢合金 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 金属注射成形。"
  },
{
    "id": "mfg_plasma",
    "name": "等离子切割",
    "en": "Plasma Cutting",
    "category": "manufact",
    "era": "info",
    "date": "1950 年",
    "year": 1950,
    "people": "",
    "place": "",
    "summary": "等离子切割在 1950 年 前后成形，依托 泡沫金属、盐差能、数学 把 零件加工、批量制造 落到实处，并成为 制造与工具 中承上启下的一环，直接支撑了 真空炉 等后续技术。",
    "dependsOn": ["mat_foammetal","ene_salinity","mathematics","mfg_cnc"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "等离子切割在 1950 年 前后出现，依托 泡沫金属 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，等离子切割仍是 零件加工 的底层支撑，并持续影响 真空炉。"
      }
    ],
    "significance": "等离子切割把 泡沫金属 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 真空炉。"
  },
{
    "id": "mfg_edm",
    "name": "电火花加工",
    "en": "EDM",
    "category": "manufact",
    "era": "electrical",
    "date": "1943 年",
    "year": 1943,
    "people": "",
    "place": "",
    "summary": "电火花加工在 1943 年 前后成形，依托 球墨铸铁、核裂变反应堆、数学 把 零件加工、批量制造 落到实处，并成为 制造与工具 中承上启下的一环，直接支撑了 数控机床、导弹、原子弹 等后续技术。",
    "dependsOn": ["mat_ductile","ene_nuclear","mathematics","mfg_kanban"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "电火花加工在 1943 年 前后出现，依托 球墨铸铁 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，电火花加工仍是 零件加工 的底层支撑，并持续影响 数控机床、导弹、原子弹。"
      }
    ],
    "significance": "电火花加工把 球墨铸铁 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 数控机床、导弹、原子弹。"
  },
{
    "id": "mfg_wedm",
    "name": "线切割",
    "en": "Wire EDM",
    "category": "manufact",
    "era": "info",
    "date": "1960 年",
    "year": 1960,
    "people": "",
    "place": "",
    "summary": "线切割约 1960 年 成熟，建立在 放电等离子烧结、可燃冰、数学 之上完成关键突破；其能力延伸到 零件加工、批量制造，并为 激光焊 的发展铺平了道路。",
    "dependsOn": ["mat_sps","ene_clathrate","mathematics","mfg_ebw"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "线切割在 1960 年 前后出现，依托 放电等离子烧结 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，线切割仍是 零件加工 的底层支撑，并持续影响 激光焊。"
      }
    ],
    "significance": "线切割把 放电等离子烧结 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 激光焊。"
  },
{
    "id": "mfg_sandcast",
    "name": "砂型铸造",
    "en": "Sand Casting",
    "category": "manufact",
    "era": "ancient",
    "date": "公元前 3500 年",
    "year": -3500,
    "people": "",
    "place": "",
    "summary": "砂型铸造约 公元前 3500 年 成熟，建立在 铸造、木炭、磨料 之上完成关键突破；其能力延伸到 零件加工、批量制造，并为 失蜡法 的发展铺平了道路。",
    "dependsOn": ["mat_casting","ene_charcoal","mfg_abrasive","mfg_saw"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "砂型铸造在 公元前 3500 年 前后出现，依托 铸造 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，砂型铸造仍是 零件加工 的底层支撑，并持续影响 失蜡法。"
      }
    ],
    "significance": "砂型铸造把 铸造 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 失蜡法。"
  },
{
    "id": "mfg_lostwax",
    "name": "失蜡法",
    "en": "Lost-Wax Casting",
    "category": "manufact",
    "era": "ancient",
    "date": "公元前 3500 年",
    "year": -3500,
    "people": "",
    "place": "",
    "summary": "失蜡法在 公元前 3500 年 前后成形，依托 铸造、木炭、砂型铸造 把 零件加工、批量制造 落到实处，并成为 制造与工具 中承上启下的一环，直接支撑了 帆船 等后续技术。",
    "dependsOn": ["mat_casting","ene_charcoal","mfg_sandcast","mfg_abrasive"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "失蜡法在 公元前 3500 年 前后出现，依托 铸造 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，失蜡法仍是 零件加工 的底层支撑，并持续影响 帆船。"
      }
    ],
    "significance": "失蜡法把 铸造 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 帆船。"
  },
{
    "id": "mfg_diecast",
    "name": "压铸",
    "en": "Die Casting",
    "category": "manufact",
    "era": "industrial",
    "date": "1838 年",
    "year": 1838,
    "people": "",
    "place": "",
    "summary": "压铸约 1838 年 成熟，建立在 铝冶炼、电动机、数学 之上完成关键突破；其能力延伸到 零件加工、批量制造，并为 砂轮 的发展铺平了道路。",
    "dependsOn": ["mat_alu","electric_motor","mathematics","mfg_mill"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "压铸在 1838 年 前后出现，依托 铝冶炼 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，压铸仍是 零件加工 的底层支撑，并持续影响 砂轮。"
      }
    ],
    "significance": "压铸把 铝冶炼 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 砂轮。"
  },
{
    "id": "mfg_forging2",
    "name": "模锻",
    "en": "Die Forging",
    "category": "manufact",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "模锻在 1800 年 前后成形，依托 感应熔炼、余热回收、数学 把 零件加工、批量制造 落到实处，并成为 制造与工具 中承上启下的一环，直接支撑了 冲压 等后续技术。",
    "dependsOn": ["mat_inductionmelt","ene_wasteheat","mathematics","mfg_drillpress"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "模锻在 1800 年 前后出现，依托 感应熔炼 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，模锻仍是 零件加工 的底层支撑，并持续影响 冲压。"
      }
    ],
    "significance": "模锻把 感应熔炼 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 冲压。"
  },
{
    "id": "mfg_stamping",
    "name": "冲压",
    "en": "Stamping",
    "category": "manufact",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "冲压约 1800 年 成熟，建立在 感应熔炼、余热回收、数学 之上完成关键突破；其能力延伸到 零件加工、批量制造，并为 拉伸成形 的发展铺平了道路。",
    "dependsOn": ["mat_inductionmelt","ene_wasteheat","mathematics","mfg_forging2"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "冲压在 1800 年 前后出现，依托 感应熔炼 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，冲压仍是 零件加工 的底层支撑，并持续影响 拉伸成形。"
      }
    ],
    "significance": "冲压把 感应熔炼 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 拉伸成形。"
  },
{
    "id": "mfg_drawing2",
    "name": "拉伸成形",
    "en": "Deep Drawing",
    "category": "manufact",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "拉伸成形在 1800 年 前后成形，依托 感应熔炼、余热回收、数学 把 零件加工、批量制造 落到实处，并成为 制造与工具 中承上启下的一环，直接支撑了 零件标准化 等后续技术。",
    "dependsOn": ["mat_inductionmelt","ene_wasteheat","mathematics","mfg_stamping"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "拉伸成形在 1800 年 前后出现，依托 感应熔炼 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，拉伸成形仍是 零件加工 的底层支撑，并持续影响 零件标准化。"
      }
    ],
    "significance": "拉伸成形把 感应熔炼 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 零件标准化。"
  },
{
    "id": "mfg_rivet",
    "name": "铆接",
    "en": "Riveting",
    "category": "manufact",
    "era": "ancient",
    "date": "公元前 2000 年",
    "year": -2000,
    "people": "",
    "place": "",
    "summary": "铆接在 公元前 2000 年 前后成形，依托 混凝土、水力利用、数学 把 零件加工、批量制造 落到实处，并成为 制造与工具 中承上启下的一环，直接支撑了 钎焊 等后续技术。",
    "dependsOn": ["mat_concrete","ene_hydro","mathematics","mfg_lapp"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "铆接在 公元前 2000 年 前后出现，依托 混凝土 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，铆接仍是 零件加工 的底层支撑，并持续影响 钎焊。"
      }
    ],
    "significance": "铆接把 混凝土 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 钎焊。"
  },
{
    "id": "mfg_welding",
    "name": "电弧焊",
    "en": "Arc Welding",
    "category": "manufact",
    "era": "industrial",
    "date": "1881 年",
    "year": 1881,
    "people": "",
    "place": "",
    "summary": "电弧焊在 1881 年 前后成形，依托 压电材料、海洋温差能、数学 把 零件加工、批量制造 落到实处，并成为 制造与工具 中承上启下的一环，直接支撑了 精密轴承、无轨电车 等后续技术。",
    "dependsOn": ["mat_piezo","ene_otec","mathematics","mfg_resistweld"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "电弧焊在 1881 年 前后出现，依托 压电材料 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，电弧焊仍是 零件加工 的底层支撑，并持续影响 精密轴承、无轨电车。"
      }
    ],
    "significance": "电弧焊把 压电材料 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 精密轴承、无轨电车。"
  },
{
    "id": "mfg_gasweld",
    "name": "气焊",
    "en": "Gas Welding",
    "category": "manufact",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "气焊约 1900 年 成熟，建立在 渗硼、调峰电站、数学 之上完成关键突破；其能力延伸到 零件加工、批量制造，并为 装配线 的发展铺平了道路。",
    "dependsOn": ["mat_boriding","ene_peaker","mathematics","mfg_ballscrew"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "气焊在 1900 年 前后出现，依托 渗硼 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，气焊仍是 零件加工 的底层支撑，并持续影响 装配线。"
      }
    ],
    "significance": "气焊把 渗硼 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 装配线。"
  },
{
    "id": "mfg_resistweld",
    "name": "电阻焊",
    "en": "Resistance Welding",
    "category": "manufact",
    "era": "industrial",
    "date": "1877 年",
    "year": 1877,
    "people": "",
    "place": "",
    "summary": "电阻焊在 1877 年 前后成形，依托 钢化玻璃、区域供冷供热、数学 把 零件加工、批量制造 落到实处，并成为 制造与工具 中承上启下的一环，直接支撑了 电弧焊 等后续技术。",
    "dependsOn": ["mat_tempered","ene_district","mathematics","mfg_injection"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "电阻焊在 1877 年 前后出现，依托 钢化玻璃 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，电阻焊仍是 零件加工 的底层支撑，并持续影响 电弧焊。"
      }
    ],
    "significance": "电阻焊把 钢化玻璃 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 电弧焊。"
  },
{
    "id": "mfg_laserweld",
    "name": "激光焊",
    "en": "Laser Welding",
    "category": "manufact",
    "era": "info",
    "date": "1960 年",
    "year": 1960,
    "people": "",
    "place": "",
    "summary": "激光焊约 1960 年 成熟，建立在 放电等离子烧结、可燃冰、数学 之上完成关键突破；其能力延伸到 零件加工、批量制造，并为 超精密加工 的发展铺平了道路。",
    "dependsOn": ["mat_sps","ene_clathrate","mathematics","mfg_wedm"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "激光焊在 1960 年 前后出现，依托 放电等离子烧结 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，激光焊仍是 零件加工 的底层支撑，并持续影响 超精密加工。"
      }
    ],
    "significance": "激光焊把 放电等离子烧结 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 超精密加工。"
  },
{
    "id": "mfg_fsw",
    "name": "搅拌摩擦焊",
    "en": "Friction Stir Welding",
    "category": "manufact",
    "era": "info",
    "date": "1991 年",
    "year": 1991,
    "people": "",
    "place": "",
    "summary": "搅拌摩擦焊在 1991 年 前后成形，依托 金属有机框架、锂离子电池、数学 把 零件加工、批量制造 落到实处，并成为 制造与工具 中承上启下的一环，直接支撑了 纳米压印 等后续技术。",
    "dependsOn": ["mat_mof","ene_liion","mathematics","mfg_onmachinem"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "搅拌摩擦焊在 1991 年 前后出现，依托 金属有机框架 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，搅拌摩擦焊仍是 零件加工 的底层支撑，并持续影响 纳米压印。"
      }
    ],
    "significance": "搅拌摩擦焊把 金属有机框架 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 纳米压印。"
  },
{
    "id": "mfg_ebw",
    "name": "电子束焊",
    "en": "Electron Beam Welding",
    "category": "manufact",
    "era": "info",
    "date": "1958 年",
    "year": 1958,
    "people": "",
    "place": "",
    "summary": "电子束焊在 1958 年 前后成形，依托 碳纤维、超级电容、数学 把 零件加工、批量制造 落到实处，并成为 制造与工具 中承上启下的一环，直接支撑了 线切割、战略导弹潜艇 等后续技术。",
    "dependsOn": ["mat_cf","ene_supercap","mathematics","mfg_mc"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "电子束焊在 1958 年 前后出现，依托 碳纤维 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，电子束焊仍是 零件加工 的底层支撑，并持续影响 线切割、战略导弹潜艇。"
      }
    ],
    "significance": "电子束焊把 碳纤维 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 线切割、战略导弹潜艇。"
  },
{
    "id": "mfg_braze",
    "name": "钎焊",
    "en": "Brazing",
    "category": "manufact",
    "era": "ancient",
    "date": "公元前 2000 年",
    "year": -2000,
    "people": "",
    "place": "",
    "summary": "钎焊在 公元前 2000 年 前后成形，依托 混凝土、水力利用、数学 把 零件加工、批量制造 落到实处，并成为 制造与工具 中承上启下的一环，直接支撑了 胶接 等后续技术。",
    "dependsOn": ["mat_concrete","ene_hydro","mathematics","mfg_rivet"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "钎焊在 公元前 2000 年 前后出现，依托 混凝土 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，钎焊仍是 零件加工 的底层支撑，并持续影响 胶接。"
      }
    ],
    "significance": "钎焊把 混凝土 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 胶接。"
  },
{
    "id": "mfg_adhesive",
    "name": "胶接",
    "en": "Adhesive Bonding",
    "category": "manufact",
    "era": "ancient",
    "date": "公元前 2000 年",
    "year": -2000,
    "people": "",
    "place": "",
    "summary": "胶接约 公元前 2000 年 成熟，建立在 混凝土、水力利用、数学 之上完成关键突破；其能力延伸到 零件加工、批量制造，并为 量具 的发展铺平了道路。",
    "dependsOn": ["mat_concrete","ene_hydro","mathematics","mfg_braze"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "胶接在 公元前 2000 年 前后出现，依托 混凝土 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，胶接仍是 零件加工 的底层支撑，并持续影响 量具。"
      }
    ],
    "significance": "胶接把 混凝土 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 量具。"
  },
{
    "id": "mfg_bolt",
    "name": "螺纹连接",
    "en": "Bolting",
    "category": "manufact",
    "era": "classical",
    "date": "公元前 300 年",
    "year": -300,
    "people": "",
    "place": "",
    "summary": "螺纹连接约 公元前 300 年 成熟，建立在 高炉炼铁、水车、数学 之上完成关键突破；其能力延伸到 零件加工、批量制造，并为 螺纹 的发展铺平了道路。",
    "dependsOn": ["mat_blastfurnace","ene_waterwheel","mathematics","mfg_lathe"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "古典时代",
        "text": "螺纹连接在 公元前 300 年 前后出现，依托 高炉炼铁 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，螺纹连接仍是 零件加工 的底层支撑，并持续影响 螺纹。"
      }
    ],
    "significance": "螺纹连接把 高炉炼铁 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 螺纹。"
  },
{
    "id": "mfg_thread",
    "name": "螺纹",
    "en": "Screw Thread",
    "category": "manufact",
    "era": "classical",
    "date": "公元前 300 年",
    "year": -300,
    "people": "",
    "place": "",
    "summary": "螺纹在 公元前 300 年 前后成形，依托 高炉炼铁、水车、数学 把 零件加工、批量制造 落到实处，并成为 制造与工具 中承上启下的一环，直接支撑了 拉丝、起重机、马镫 等后续技术。",
    "dependsOn": ["mat_blastfurnace","ene_waterwheel","mathematics","mfg_bolt"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "古典时代",
        "text": "螺纹在 公元前 300 年 前后出现，依托 高炉炼铁 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，螺纹仍是 零件加工 的底层支撑，并持续影响 拉丝、起重机、马镫。"
      }
    ],
    "significance": "螺纹把 高炉炼铁 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 拉丝、起重机、马镫。"
  },
{
    "id": "mfg_standard",
    "name": "零件标准化",
    "en": "Part Standardization",
    "category": "manufact",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "零件标准化约 1800 年 成熟，建立在 感应熔炼、余热回收、数学 之上完成关键突破；其能力延伸到 零件加工、批量制造，并为 工装夹具 的发展铺平了道路。",
    "dependsOn": ["mat_inductionmelt","ene_wasteheat","mathematics","mfg_drawing2"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "零件标准化在 1800 年 前后出现，依托 感应熔炼 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，零件标准化仍是 零件加工 的底层支撑，并持续影响 工装夹具。"
      }
    ],
    "significance": "零件标准化把 感应熔炼 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 工装夹具。"
  },
{
    "id": "mfg_assembly",
    "name": "装配线",
    "en": "Assembly Line",
    "category": "manufact",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "装配线在 1900 年 前后成形，依托 渗硼、调峰电站、数学 把 零件加工、批量制造 落到实处，并成为 制造与工具 中承上启下的一环，直接支撑了 刀柄 等后续技术。",
    "dependsOn": ["mat_boriding","ene_peaker","mathematics","mfg_gasweld"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "装配线在 1900 年 前后出现，依托 渗硼 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，装配线仍是 零件加工 的底层支撑，并持续影响 刀柄。"
      }
    ],
    "significance": "装配线把 渗硼 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 刀柄。"
  },
{
    "id": "mfg_fixture",
    "name": "工装夹具",
    "en": "Jig and Fixture",
    "category": "manufact",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "工装夹具约 1800 年 成熟，建立在 感应熔炼、余热回收、数学 之上完成关键突破；其能力延伸到 零件加工、批量制造，并为 挤出成型 的发展铺平了道路。",
    "dependsOn": ["mat_inductionmelt","ene_wasteheat","mathematics","mfg_standard"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "工装夹具在 1800 年 前后出现，依托 感应熔炼 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，工装夹具仍是 零件加工 的底层支撑，并持续影响 挤出成型。"
      }
    ],
    "significance": "工装夹具把 感应熔炼 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 挤出成型。"
  },
{
    "id": "mfg_mold",
    "name": "模具",
    "en": "Mold",
    "category": "manufact",
    "era": "ancient",
    "date": "公元前 3000 年",
    "year": -3000,
    "people": "",
    "place": "",
    "summary": "模具在 公元前 3000 年 前后成形，依托 水泥、水力利用、数学 把 零件加工、批量制造 落到实处，并成为 制造与工具 中承上启下的一环，直接支撑了 抛光 等后续技术。",
    "dependsOn": ["mat_cement","ene_hydro","mathematics","bronze_casting"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "模具在 公元前 3000 年 前后出现，依托 水泥 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，模具仍是 零件加工 的底层支撑，并持续影响 抛光。"
      }
    ],
    "significance": "模具把 水泥 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 抛光。"
  },
{
    "id": "mfg_injection",
    "name": "注塑",
    "en": "Injection Molding",
    "category": "manufact",
    "era": "industrial",
    "date": "1872 年",
    "year": 1872,
    "people": "",
    "place": "",
    "summary": "注塑约 1872 年 成熟，建立在 工具钢、铅酸电池、数学 之上完成关键突破；其能力延伸到 零件加工、批量制造，并为 电阻焊、自动喷淋 的发展铺平了道路。",
    "dependsOn": ["mat_toolsteel","ene_leadacid","mathematics","mfg_grindingwheel"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "注塑在 1872 年 前后出现，依托 工具钢 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，注塑仍是 零件加工 的底层支撑，并持续影响 电阻焊、自动喷淋。"
      }
    ],
    "significance": "注塑把 工具钢 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 电阻焊、自动喷淋。"
  },
{
    "id": "mfg_blow",
    "name": "吹塑",
    "en": "Blow Molding",
    "category": "manufact",
    "era": "electrical",
    "date": "1930 年",
    "year": 1930,
    "people": "",
    "place": "",
    "summary": "吹塑在 1930 年 前后成形，依托 玻璃钢、火箭发动机、数学 把 零件加工、批量制造 落到实处，并成为 制造与工具 中承上启下的一环，直接支撑了 喷丸 等后续技术。",
    "dependsOn": ["mat_frp","ene_rocketengine","mathematics","mfg_spcc"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "吹塑在 1930 年 前后出现，依托 玻璃钢 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，吹塑仍是 零件加工 的底层支撑，并持续影响 喷丸。"
      }
    ],
    "significance": "吹塑把 玻璃钢 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 喷丸。"
  },
{
    "id": "mfg_extrude2",
    "name": "挤出成型",
    "en": "Extrusion Molding",
    "category": "manufact",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "挤出成型约 1800 年 成熟，建立在 感应熔炼、余热回收、数学 之上完成关键突破；其能力延伸到 零件加工、批量制造，并为 热处理炉 的发展铺平了道路。",
    "dependsOn": ["mat_inductionmelt","ene_wasteheat","mathematics","mfg_fixture"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "挤出成型在 1800 年 前后出现，依托 感应熔炼 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，挤出成型仍是 零件加工 的底层支撑，并持续影响 热处理炉。"
      }
    ],
    "significance": "挤出成型把 感应熔炼 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 热处理炉。"
  },
{
    "id": "mfg_rolling2",
    "name": "压延",
    "en": "Rolling Forming",
    "category": "manufact",
    "era": "earlymodern",
    "date": "1500 年",
    "year": 1500,
    "people": "",
    "place": "",
    "summary": "压延约 1500 年 成熟，建立在 轧制、风车、数学 之上完成关键突破；其能力延伸到 零件加工、批量制造，并为 潜艇、索道、交通隧道 的发展铺平了道路。",
    "dependsOn": ["mat_rolling","ene_wind","mathematics","mfg_boring"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "近代早期",
        "text": "压延在 1500 年 前后出现，依托 轧制 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，压延仍是 零件加工 的底层支撑，并持续影响 潜艇、索道、交通隧道。"
      }
    ],
    "significance": "压延把 轧制 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 潜艇、索道、交通隧道。"
  },
{
    "id": "mfg_wiredraw",
    "name": "拉丝",
    "en": "Wire Drawing",
    "category": "manufact",
    "era": "medieval",
    "date": "1200 年",
    "year": 1200,
    "people": "",
    "place": "",
    "summary": "拉丝约 1200 年 成熟，建立在 拉拔、风车、数学 之上完成关键突破；其能力延伸到 零件加工、批量制造，并为 镗床、板甲、火炮 的发展铺平了道路。",
    "dependsOn": ["mat_drawing","ene_wind","mathematics","mfg_thread"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "中世纪",
        "text": "拉丝在 1200 年 前后出现，依托 拉拔 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，拉丝仍是 零件加工 的底层支撑，并持续影响 镗床、板甲、火炮。"
      }
    ],
    "significance": "拉丝把 拉拔 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 镗床、板甲、火炮。"
  },
{
    "id": "mfg_furnace",
    "name": "热处理炉",
    "en": "Heat Treatment Furnace",
    "category": "manufact",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "热处理炉在 1800 年 前后成形，依托 感应熔炼、余热回收、数学 把 零件加工、批量制造 落到实处，并成为 制造与工具 中承上启下的一环，直接支撑了 刨床、明轮船、蒸汽船 等后续技术。",
    "dependsOn": ["mat_inductionmelt","ene_wasteheat","mathematics","mfg_extrude2"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "热处理炉在 1800 年 前后出现，依托 感应熔炼 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，热处理炉仍是 零件加工 的底层支撑，并持续影响 刨床、明轮船、蒸汽船。"
      }
    ],
    "significance": "热处理炉把 感应熔炼 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 刨床、明轮船、蒸汽船。"
  },
{
    "id": "mfg_vacfurnace",
    "name": "真空炉",
    "en": "Vacuum Furnace",
    "category": "manufact",
    "era": "info",
    "date": "1950 年",
    "year": 1950,
    "people": "",
    "place": "",
    "summary": "真空炉在 1950 年 前后成形，依托 泡沫金属、盐差能、数学 把 零件加工、批量制造 落到实处，并成为 制造与工具 中承上启下的一环，直接支撑了 微细加工 等后续技术。",
    "dependsOn": ["mat_foammetal","ene_salinity","mathematics","mfg_plasma"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "真空炉在 1950 年 前后出现，依托 泡沫金属 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，真空炉仍是 零件加工 的底层支撑，并持续影响 微细加工。"
      }
    ],
    "significance": "真空炉把 泡沫金属 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 微细加工。"
  },
{
    "id": "mfg_induction",
    "name": "感应加热",
    "en": "Induction Heating",
    "category": "manufact",
    "era": "industrial",
    "date": "1887 年",
    "year": 1887,
    "people": "",
    "place": "",
    "summary": "感应加热约 1887 年 成熟，建立在 锗、风力发电机、数学 之上完成关键突破；其能力延伸到 零件加工、批量制造，并为 滚珠丝杠、公共汽车、卡车 的发展铺平了道路。",
    "dependsOn": ["mat_ge","ene_windturbine","mathematics","mfg_precisionbearing"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "感应加热在 1887 年 前后出现，依托 锗 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，感应加热仍是 零件加工 的底层支撑，并持续影响 滚珠丝杠、公共汽车、卡车。"
      }
    ],
    "significance": "感应加热把 锗 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 滚珠丝杠、公共汽车、卡车。"
  },
{
    "id": "mfg_shotblast",
    "name": "喷丸",
    "en": "Shot Peening",
    "category": "manufact",
    "era": "electrical",
    "date": "1930 年",
    "year": 1930,
    "people": "",
    "place": "",
    "summary": "喷丸在 1930 年 前后成形，依托 玻璃钢、火箭发动机、数学 把 零件加工、批量制造 落到实处，并成为 制造与工具 中承上启下的一环，直接支撑了 化学铣切、直升机、雷达 等后续技术。",
    "dependsOn": ["mat_frp","ene_rocketengine","mathematics","mfg_blow"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "喷丸在 1930 年 前后出现，依托 玻璃钢 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，喷丸仍是 零件加工 的底层支撑，并持续影响 化学铣切、直升机、雷达。"
      }
    ],
    "significance": "喷丸把 玻璃钢 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 化学铣切、直升机、雷达。"
  },
{
    "id": "mfg_polish",
    "name": "抛光",
    "en": "Polishing",
    "category": "manufact",
    "era": "ancient",
    "date": "公元前 3000 年",
    "year": -3000,
    "people": "",
    "place": "",
    "summary": "抛光约 公元前 3000 年 成熟，建立在 水泥、水力利用、数学 之上完成关键突破；其能力延伸到 零件加工、批量制造，并为 研磨 的发展铺平了道路。",
    "dependsOn": ["mat_cement","ene_hydro","mathematics","mfg_mold"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "抛光在 公元前 3000 年 前后出现，依托 水泥 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，抛光仍是 零件加工 的底层支撑，并持续影响 研磨。"
      }
    ],
    "significance": "抛光把 水泥 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 研磨。"
  },
{
    "id": "mfg_lapp",
    "name": "研磨",
    "en": "Lapping",
    "category": "manufact",
    "era": "ancient",
    "date": "公元前 3000 年",
    "year": -3000,
    "people": "",
    "place": "",
    "summary": "研磨约 公元前 3000 年 成熟，建立在 水泥、水力利用、数学 之上完成关键突破；其能力延伸到 零件加工、批量制造，并为 铆接、港口、渡轮 的发展铺平了道路。",
    "dependsOn": ["mat_cement","ene_hydro","mathematics","mfg_polish"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "研磨在 公元前 3000 年 前后出现，依托 水泥 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，研磨仍是 零件加工 的底层支撑，并持续影响 铆接、港口、渡轮。"
      }
    ],
    "significance": "研磨把 水泥 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 铆接、港口、渡轮。"
  },
{
    "id": "mfg_ultraprecise",
    "name": "超精密加工",
    "en": "Ultra-Precision Machining",
    "category": "manufact",
    "era": "info",
    "date": "1960 年",
    "year": 1960,
    "people": "",
    "place": "",
    "summary": "超精密加工约 1960 年 成熟，建立在 放电等离子烧结、可燃冰、数学 之上完成关键突破；其能力延伸到 零件加工、批量制造，并为 电火花线切割机 的发展铺平了道路。",
    "dependsOn": ["mat_sps","ene_clathrate","mathematics","mfg_laserweld"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "超精密加工在 1960 年 前后出现，依托 放电等离子烧结 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，超精密加工仍是 零件加工 的底层支撑，并持续影响 电火花线切割机。"
      }
    ],
    "significance": "超精密加工把 放电等离子烧结 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 电火花线切割机。"
  },
{
    "id": "mfg_micro",
    "name": "微细加工",
    "en": "Microfabrication",
    "category": "manufact",
    "era": "info",
    "date": "1950 年",
    "year": 1950,
    "people": "",
    "place": "",
    "summary": "微细加工在 1950 年 前后成形，依托 泡沫金属、盐差能、数学 把 零件加工、批量制造 落到实处，并成为 制造与工具 中承上启下的一环，直接支撑了 电解加工 等后续技术。",
    "dependsOn": ["mat_foammetal","ene_salinity","mathematics","mfg_vacfurnace"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "微细加工在 1950 年 前后出现，依托 泡沫金属 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，微细加工仍是 零件加工 的底层支撑，并持续影响 电解加工。"
      }
    ],
    "significance": "微细加工把 泡沫金属 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 电解加工。"
  },
{
    "id": "mfg_nanoimprint",
    "name": "纳米压印",
    "en": "Nanoimprint",
    "category": "manufact",
    "era": "info",
    "date": "1995 年",
    "year": 1995,
    "people": "",
    "place": "",
    "summary": "纳米压印约 1995 年 成熟，建立在 金属有机框架、锂离子电池、数学 之上完成关键突破；其能力延伸到 零件加工、批量制造，并为 协作机器人 的发展铺平了道路。",
    "dependsOn": ["mat_mof","ene_liion","mathematics","mfg_fsw"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "纳米压印在 1995 年 前后出现，依托 金属有机框架 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，纳米压印仍是 零件加工 的底层支撑，并持续影响 协作机器人。"
      }
    ],
    "significance": "纳米压印把 金属有机框架 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 协作机器人。"
  },
{
    "id": "mfg_ecm",
    "name": "电解加工",
    "en": "Electrochemical Machining",
    "category": "manufact",
    "era": "info",
    "date": "1950 年",
    "year": 1950,
    "people": "",
    "place": "",
    "summary": "电解加工约 1950 年 成熟，建立在 泡沫金属、盐差能、数学 之上完成关键突破；其能力延伸到 零件加工、批量制造，并为 三坐标测量 的发展铺平了道路。",
    "dependsOn": ["mat_foammetal","ene_salinity","mathematics","mfg_micro"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "电解加工在 1950 年 前后出现，依托 泡沫金属 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，电解加工仍是 零件加工 的底层支撑，并持续影响 三坐标测量。"
      }
    ],
    "significance": "电解加工把 泡沫金属 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 三坐标测量。"
  },
{
    "id": "mfg_chemill",
    "name": "化学铣切",
    "en": "Chemical Milling",
    "category": "manufact",
    "era": "electrical",
    "date": "1940 年",
    "year": 1940,
    "people": "",
    "place": "",
    "summary": "化学铣切在 1940 年 前后成形，依托 电渣重熔、燃气轮机、数学 把 零件加工、批量制造 落到实处，并成为 制造与工具 中承上启下的一环，直接支撑了 伺服系统 等后续技术。",
    "dependsOn": ["mat_esr","ene_gasturbine","mathematics","mfg_shotblast"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "化学铣切在 1940 年 前后出现，依托 电渣重熔 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，化学铣切仍是 零件加工 的底层支撑，并持续影响 伺服系统。"
      }
    ],
    "significance": "化学铣切把 电渣重熔 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 伺服系统。"
  },
{
    "id": "mfg_pim",
    "name": "金属注射成形",
    "en": "Metal Injection Molding",
    "category": "manufact",
    "era": "info",
    "date": "1970 年",
    "year": 1970,
    "people": "",
    "place": "",
    "summary": "金属注射成形在 1970 年 前后成形，依托 储氢合金、水热型地热、数学 把 零件加工、批量制造 落到实处，并成为 制造与工具 中承上启下的一环，直接支撑了 计算机辅助制造 等后续技术。",
    "dependsOn": ["mat_hydrogenstorage","ene_hydrothermal","mathematics","mfg_waterjet"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "金属注射成形在 1970 年 前后出现，依托 储氢合金 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，金属注射成形仍是 零件加工 的底层支撑，并持续影响 计算机辅助制造。"
      }
    ],
    "significance": "金属注射成形把 储氢合金 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 计算机辅助制造。"
  },
{
    "id": "mfg_hip",
    "name": "热等静压",
    "en": "Hot Isostatic Pressing",
    "category": "manufact",
    "era": "info",
    "date": "1955 年",
    "year": 1955,
    "people": "",
    "place": "",
    "summary": "热等静压约 1955 年 成熟，建立在 聚丙烯、沸水堆、数学 之上完成关键突破；其能力延伸到 零件加工、批量制造，并为 谐波减速器 的发展铺平了道路。",
    "dependsOn": ["mat_pp","ene_bwr","mathematics","mfg_agv"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "热等静压在 1955 年 前后出现，依托 聚丙烯 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，热等静压仍是 零件加工 的底层支撑，并持续影响 谐波减速器。"
      }
    ],
    "significance": "热等静压把 聚丙烯 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 谐波减速器。"
  },
{
    "id": "mfg_cmm",
    "name": "三坐标测量",
    "en": "CMM",
    "category": "manufact",
    "era": "info",
    "date": "1950 年",
    "year": 1950,
    "people": "",
    "place": "",
    "summary": "三坐标测量约 1950 年 成熟，建立在 泡沫金属、盐差能、数学 之上完成关键突破；其能力延伸到 零件加工、批量制造，并为 精益生产 的发展铺平了道路。",
    "dependsOn": ["mat_foammetal","ene_salinity","mathematics","mfg_ecm"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "三坐标测量在 1950 年 前后出现，依托 泡沫金属 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，三坐标测量仍是 零件加工 的底层支撑，并持续影响 精益生产。"
      }
    ],
    "significance": "三坐标测量把 泡沫金属 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 精益生产。"
  },
{
    "id": "mfg_reverse",
    "name": "逆向工程",
    "en": "Reverse Engineering",
    "category": "manufact",
    "era": "info",
    "date": "1980 年",
    "year": 1980,
    "people": "",
    "place": "",
    "summary": "逆向工程在 1980 年 前后成形，依托 激光熔覆、碟式斯特林、数学 把 零件加工、批量制造 落到实处，并成为 制造与工具 中承上启下的一环，直接支撑了 焊接机器人 等后续技术。",
    "dependsOn": ["mat_laserclad","ene_dishstirling","mathematics","mfg_turnmill"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "逆向工程在 1980 年 前后出现，依托 激光熔覆 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，逆向工程仍是 零件加工 的底层支撑，并持续影响 焊接机器人。"
      }
    ],
    "significance": "逆向工程把 激光熔覆 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 焊接机器人。"
  },
{
    "id": "mfg_plc",
    "name": "可编程逻辑控制器",
    "en": "PLC",
    "category": "manufact",
    "era": "info",
    "date": "1968 年",
    "year": 1968,
    "people": "",
    "place": "",
    "summary": "可编程逻辑控制器约 1968 年 成熟，建立在 芳纶、空间太阳能、数学 之上完成关键突破；其能力延伸到 零件加工、批量制造，并为 水射流切割、超音速客机 的发展铺平了道路。",
    "dependsOn": ["mat_aramid","ene_satpower","mathematics","mfg_fms"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "可编程逻辑控制器在 1968 年 前后出现，依托 芳纶 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，可编程逻辑控制器仍是 零件加工 的底层支撑，并持续影响 水射流切割、超音速客机。"
      }
    ],
    "significance": "可编程逻辑控制器把 芳纶 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 水射流切割、超音速客机。"
  },
{
    "id": "mfg_servo",
    "name": "伺服系统",
    "en": "Servo System",
    "category": "manufact",
    "era": "electrical",
    "date": "1940 年",
    "year": 1940,
    "people": "",
    "place": "",
    "summary": "伺服系统约 1940 年 成熟，建立在 电渣重熔、燃气轮机、数学 之上完成关键突破；其能力延伸到 零件加工、批量制造，并为 直线电机 的发展铺平了道路。",
    "dependsOn": ["mat_esr","ene_gasturbine","mathematics","mfg_chemill"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "伺服系统在 1940 年 前后出现，依托 电渣重熔 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，伺服系统仍是 零件加工 的底层支撑，并持续影响 直线电机。"
      }
    ],
    "significance": "伺服系统把 电渣重熔 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 直线电机。"
  },
{
    "id": "mfg_ballscrew",
    "name": "滚珠丝杠",
    "en": "Ball Screw",
    "category": "manufact",
    "era": "industrial",
    "date": "1898 年",
    "year": 1898,
    "people": "",
    "place": "",
    "summary": "滚珠丝杠约 1898 年 成熟，建立在 碳化硅、无线输电、数学 之上完成关键突破；其能力延伸到 零件加工、批量制造，并为 气焊 的发展铺平了道路。",
    "dependsOn": ["mat_sic","ene_wpt","mathematics","mfg_induction"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "滚珠丝杠在 1898 年 前后出现，依托 碳化硅 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，滚珠丝杠仍是 零件加工 的底层支撑，并持续影响 气焊。"
      }
    ],
    "significance": "滚珠丝杠把 碳化硅 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 气焊。"
  },
{
    "id": "mfg_linearmotor",
    "name": "直线电机",
    "en": "Linear Motor",
    "category": "manufact",
    "era": "electrical",
    "date": "1940 年",
    "year": 1940,
    "people": "",
    "place": "",
    "summary": "直线电机在 1940 年 前后成形，依托 电渣重熔、燃气轮机、数学 把 零件加工、批量制造 落到实处，并成为 制造与工具 中承上启下的一环，直接支撑了 看板管理 等后续技术。",
    "dependsOn": ["mat_esr","ene_gasturbine","mathematics","mfg_servo"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "直线电机在 1940 年 前后出现，依托 电渣重熔 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，直线电机仍是 零件加工 的底层支撑，并持续影响 看板管理。"
      }
    ],
    "significance": "直线电机把 电渣重熔 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 看板管理。"
  },
{
    "id": "mfg_harmonic",
    "name": "谐波减速器",
    "en": "Harmonic Drive",
    "category": "manufact",
    "era": "info",
    "date": "1955 年",
    "year": 1955,
    "people": "",
    "place": "",
    "summary": "谐波减速器约 1955 年 成熟，建立在 聚丙烯、沸水堆、数学 之上完成关键突破；其能力延伸到 零件加工、批量制造，并为 加工中心、破冰船、气垫船 的发展铺平了道路。",
    "dependsOn": ["mat_pp","ene_bwr","mathematics","mfg_hip"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "谐波减速器在 1955 年 前后出现，依托 聚丙烯 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，谐波减速器仍是 零件加工 的底层支撑，并持续影响 加工中心、破冰船、气垫船。"
      }
    ],
    "significance": "谐波减速器把 聚丙烯 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 加工中心、破冰船、气垫船。"
  },
{
    "id": "mfg_precisionbearing",
    "name": "精密轴承",
    "en": "Precision Bearing",
    "category": "manufact",
    "era": "industrial",
    "date": "1883 年",
    "year": 1883,
    "people": "",
    "place": "",
    "summary": "精密轴承在 1883 年 前后成形，依托 锰钢、水力发电站、数学 把 零件加工、批量制造 落到实处，并成为 制造与工具 中承上启下的一环，直接支撑了 感应加热、摩托车、机枪 等后续技术。",
    "dependsOn": ["mat_manganese","ene_hydroplant","mathematics","mfg_welding"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "精密轴承在 1883 年 前后出现，依托 锰钢 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，精密轴承仍是 零件加工 的底层支撑，并持续影响 感应加热、摩托车、机枪。"
      }
    ],
    "significance": "精密轴承把 锰钢 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 感应加热、摩托车、机枪。"
  },
{
    "id": "mfg_gauge",
    "name": "量具",
    "en": "Gauge",
    "category": "manufact",
    "era": "ancient",
    "date": "公元前 2000 年",
    "year": -2000,
    "people": "",
    "place": "",
    "summary": "量具约 公元前 2000 年 成熟，建立在 混凝土、水力利用、数学 之上完成关键突破；其能力延伸到 零件加工、批量制造，并为 航海导航、桩基础、工程兵 的发展铺平了道路。",
    "dependsOn": ["mat_concrete","ene_hydro","mathematics","mfg_adhesive"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "量具在 公元前 2000 年 前后出现，依托 混凝土 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，量具仍是 零件加工 的底层支撑，并持续影响 航海导航、桩基础、工程兵。"
      }
    ],
    "significance": "量具把 混凝土 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 航海导航、桩基础、工程兵。"
  },
{
    "id": "mfg_spcc",
    "name": "统计过程控制",
    "en": "SPC",
    "category": "manufact",
    "era": "electrical",
    "date": "1924 年",
    "year": 1924,
    "people": "",
    "place": "",
    "summary": "统计过程控制约 1924 年 成熟，建立在 碳化钨、合成燃料、数学 之上完成关键突破；其能力延伸到 零件加工、批量制造，并为 吹塑、运载火箭 的发展铺平了道路。",
    "dependsOn": ["mat_wc","ene_synfuel","mathematics","assembly_line"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "统计过程控制在 1924 年 前后出现，依托 碳化钨 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，统计过程控制仍是 零件加工 的底层支撑，并持续影响 吹塑、运载火箭。"
      }
    ],
    "significance": "统计过程控制把 碳化钨 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 吹塑、运载火箭。"
  },
{
    "id": "mfg_sixsigma",
    "name": "六西格玛",
    "en": "Six Sigma",
    "category": "manufact",
    "era": "info",
    "date": "1986 年",
    "year": 1986,
    "people": "",
    "place": "",
    "summary": "六西格玛约 1986 年 成熟，建立在 高温超导、无刷电机、数学 之上完成关键突破；其能力延伸到 零件加工、批量制造，并为 自组装 的发展铺平了道路。",
    "dependsOn": ["mat_htsc","brushless_motor","mathematics","mfg_additive"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "六西格玛在 1986 年 前后出现，依托 高温超导 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，六西格玛仍是 零件加工 的底层支撑，并持续影响 自组装。"
      }
    ],
    "significance": "六西格玛把 高温超导 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 自组装。"
  },
{
    "id": "mfg_lean",
    "name": "精益生产",
    "en": "Lean Production",
    "category": "manufact",
    "era": "info",
    "date": "1950 年",
    "year": 1950,
    "people": "",
    "place": "",
    "summary": "精益生产在 1950 年 前后成形，依托 泡沫金属、盐差能、数学 把 零件加工、批量制造 落到实处，并成为 制造与工具 中承上启下的一环，直接支撑了 自适应控制 等后续技术。",
    "dependsOn": ["mat_foammetal","ene_salinity","mathematics","mfg_cmm"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "精益生产在 1950 年 前后出现，依托 泡沫金属 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，精益生产仍是 零件加工 的底层支撑，并持续影响 自适应控制。"
      }
    ],
    "significance": "精益生产把 泡沫金属 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 自适应控制。"
  },
{
    "id": "mfg_kanban",
    "name": "看板管理",
    "en": "Kanban",
    "category": "manufact",
    "era": "electrical",
    "date": "1940 年",
    "year": 1940,
    "people": "",
    "place": "",
    "summary": "看板管理约 1940 年 成熟，建立在 电渣重熔、燃气轮机、数学 之上完成关键突破；其能力延伸到 零件加工、批量制造，并为 电火花加工、应答机、弹道导弹 的发展铺平了道路。",
    "dependsOn": ["mat_esr","ene_gasturbine","mathematics","mfg_linearmotor"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "看板管理在 1940 年 前后出现，依托 电渣重熔 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，看板管理仍是 零件加工 的底层支撑，并持续影响 电火花加工、应答机、弹道导弹。"
      }
    ],
    "significance": "看板管理把 电渣重熔 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 电火花加工、应答机、弹道导弹。"
  },
{
    "id": "mfg_cam",
    "name": "计算机辅助制造",
    "en": "CAM",
    "category": "manufact",
    "era": "info",
    "date": "1970 年",
    "year": 1970,
    "people": "",
    "place": "",
    "summary": "计算机辅助制造约 1970 年 成熟，建立在 储氢合金、水热型地热、数学 之上完成关键突破；其能力延伸到 零件加工、批量制造，并为 车铣复合、空间站、防抱死制动 的发展铺平了道路。",
    "dependsOn": ["mat_hydrogenstorage","ene_hydrothermal","mathematics","mfg_pim"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "计算机辅助制造在 1970 年 前后出现，依托 储氢合金 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，计算机辅助制造仍是 零件加工 的底层支撑，并持续影响 车铣复合、空间站、防抱死制动。"
      }
    ],
    "significance": "计算机辅助制造把 储氢合金 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 车铣复合、空间站、防抱死制动。"
  },
{
    "id": "mfg_fms",
    "name": "柔性制造系统",
    "en": "FMS",
    "category": "manufact",
    "era": "info",
    "date": "1967 年",
    "year": 1967,
    "people": "",
    "place": "",
    "summary": "柔性制造系统在 1967 年 前后成形，依托 芳纶、可燃冰、数学 把 零件加工、批量制造 落到实处，并成为 制造与工具 中承上启下的一环，直接支撑了 可编程逻辑控制器 等后续技术。",
    "dependsOn": ["mat_aramid","ene_clathrate","mathematics","mfg_lasercut"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "柔性制造系统在 1967 年 前后出现，依托 芳纶 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，柔性制造系统仍是 零件加工 的底层支撑，并持续影响 可编程逻辑控制器。"
      }
    ],
    "significance": "柔性制造系统把 芳纶 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 可编程逻辑控制器。"
  },
{
    "id": "mfg_adaptive",
    "name": "自适应控制",
    "en": "Adaptive Control",
    "category": "manufact",
    "era": "info",
    "date": "1950 年",
    "year": 1950,
    "people": "",
    "place": "",
    "summary": "自适应控制在 1950 年 前后成形，依托 泡沫金属、盐差能、数学 把 零件加工、批量制造 落到实处，并成为 制造与工具 中承上启下的一环，直接支撑了 全面质量管理 等后续技术。",
    "dependsOn": ["mat_foammetal","ene_salinity","mathematics","mfg_lean"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "自适应控制在 1950 年 前后出现，依托 泡沫金属 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，自适应控制仍是 零件加工 的底层支撑，并持续影响 全面质量管理。"
      }
    ],
    "significance": "自适应控制把 泡沫金属 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 全面质量管理。"
  },
{
    "id": "mfg_digitaltwin",
    "name": "数字孪生",
    "en": "Digital Twin",
    "category": "manufact",
    "era": "intelligent",
    "date": "2000 年",
    "year": 2000,
    "people": "",
    "place": "",
    "summary": "数字孪生在 2000 年 前后成形，依托 自修复材料、井式地热、数学 把 零件加工、批量制造 落到实处，并成为 制造与工具 中承上启下的一环，直接支撑了 低温切削 等后续技术。",
    "dependsOn": ["mat_selfheal","ene_borehole","mathematics","mfg_cobot"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "数字孪生在 2000 年 前后出现，依托 自修复材料 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，数字孪生仍是 零件加工 的底层支撑，并持续影响 低温切削。"
      }
    ],
    "significance": "数字孪生把 自修复材料 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 低温切削。"
  },
{
    "id": "mfg_cobot",
    "name": "协作机器人",
    "en": "Collaborative Robot",
    "category": "manufact",
    "era": "info",
    "date": "1996 年",
    "year": 1996,
    "people": "",
    "place": "",
    "summary": "协作机器人约 1996 年 成熟，建立在 金属有机框架、锂聚合物电池、数学 之上完成关键突破；其能力延伸到 零件加工、批量制造，并为 数字孪生 的发展铺平了道路。",
    "dependsOn": ["mat_mof","ene_lipoly","mathematics","mfg_nanoimprint"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "协作机器人在 1996 年 前后出现，依托 金属有机框架 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，协作机器人仍是 零件加工 的底层支撑，并持续影响 数字孪生。"
      }
    ],
    "significance": "协作机器人把 金属有机框架 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 数字孪生。"
  },
{
    "id": "mfg_selfassemble",
    "name": "自组装",
    "en": "Self-Assembly",
    "category": "manufact",
    "era": "info",
    "date": "1990 年",
    "year": 1990,
    "people": "",
    "place": "",
    "summary": "自组装在 1990 年 前后成形，依托 金属有机框架、燃料电池汽车、数学 把 零件加工、批量制造 落到实处，并成为 制造与工具 中承上启下的一环，直接支撑了 仿生制造 等后续技术。",
    "dependsOn": ["mat_mof","ene_fuelcellcar","mathematics","mfg_sixsigma"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "自组装在 1990 年 前后出现，依托 金属有机框架 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，自组装仍是 零件加工 的底层支撑，并持续影响 仿生制造。"
      }
    ],
    "significance": "自组装把 金属有机框架 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 仿生制造。"
  },
{
    "id": "mfg_bionics",
    "name": "仿生制造",
    "en": "Biomimetic Manufacturing",
    "category": "manufact",
    "era": "info",
    "date": "1990 年",
    "year": 1990,
    "people": "",
    "place": "",
    "summary": "仿生制造约 1990 年 成熟，建立在 金属有机框架、燃料电池汽车、数学 之上完成关键突破；其能力延伸到 零件加工、批量制造，并为 高级计划排程 的发展铺平了道路。",
    "dependsOn": ["mat_mof","ene_fuelcellcar","mathematics","mfg_selfassemble"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "仿生制造在 1990 年 前后出现，依托 金属有机框架 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，仿生制造仍是 零件加工 的底层支撑，并持续影响 高级计划排程。"
      }
    ],
    "significance": "仿生制造把 金属有机框架 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 高级计划排程。"
  },
{
    "id": "mfg_grindingwheel",
    "name": "砂轮",
    "en": "Grinding Wheel",
    "category": "manufact",
    "era": "industrial",
    "date": "1840 年",
    "year": 1840,
    "people": "",
    "place": "",
    "summary": "砂轮约 1840 年 成熟，建立在 连续铸造、燃料电池、数学 之上完成关键突破；其能力延伸到 零件加工、批量制造，并为 注塑、飞艇、滑翔机 的发展铺平了道路。",
    "dependsOn": ["mat_continuouscast","ene_fuelcell","mathematics","mfg_diecast"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "砂轮在 1840 年 前后出现，依托 连续铸造 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，砂轮仍是 零件加工 的底层支撑，并持续影响 注塑、飞艇、滑翔机。"
      }
    ],
    "significance": "砂轮把 连续铸造 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 注塑、飞艇、滑翔机。"
  },
{
    "id": "mfg_abrasive",
    "name": "磨料",
    "en": "Abrasive",
    "category": "manufact",
    "era": "prehistoric",
    "date": "公元前 5000 年",
    "year": -5000,
    "people": "",
    "place": "",
    "summary": "磨料约 公元前 5000 年 成熟，建立在 红铜冶炼、用火、锯 之上完成关键突破；其能力延伸到 零件加工、批量制造，并为 砂型铸造、失蜡法、雪橇 的发展铺平了道路。",
    "dependsOn": ["mat_copper","fire","mfg_saw","mfg_drill"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "史前时代",
        "text": "磨料在 公元前 5000 年 前后出现，依托 红铜冶炼 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，磨料仍是 零件加工 的底层支撑，并持续影响 砂型铸造、失蜡法、雪橇。"
      }
    ],
    "significance": "磨料把 红铜冶炼 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 砂型铸造、失蜡法、雪橇。"
  },
{
    "id": "mfg_toolholder",
    "name": "刀柄",
    "en": "Tool Holder",
    "category": "manufact",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "刀柄在 1900 年 前后成形，依托 渗硼、调峰电站、数学 把 零件加工、批量制造 落到实处，并成为 制造与工具 中承上启下的一环，直接支撑了 切削液 等后续技术。",
    "dependsOn": ["mat_boriding","ene_peaker","mathematics","mfg_assembly"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "刀柄在 1900 年 前后出现，依托 渗硼 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，刀柄仍是 零件加工 的底层支撑，并持续影响 切削液。"
      }
    ],
    "significance": "刀柄把 渗硼 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 切削液。"
  },
{
    "id": "mfg_coolant",
    "name": "切削液",
    "en": "Cutting Fluid",
    "category": "manufact",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "切削液在 1900 年 前后成形，依托 渗硼、调峰电站、数学 把 零件加工、批量制造 落到实处，并成为 制造与工具 中承上启下的一环，直接支撑了 动车组、机场跑道、立交桥 等后续技术。",
    "dependsOn": ["mat_boriding","ene_peaker","mathematics","mfg_toolholder"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "切削液在 1900 年 前后出现，依托 渗硼 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，切削液仍是 零件加工 的底层支撑，并持续影响 动车组、机场跑道、立交桥。"
      }
    ],
    "significance": "切削液把 渗硼 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 动车组、机场跑道、立交桥。"
  },
{
    "id": "mfg_edmwire",
    "name": "电火花线切割机",
    "en": "Wire EDM Machine",
    "category": "manufact",
    "era": "info",
    "date": "1960 年",
    "year": 1960,
    "people": "",
    "place": "",
    "summary": "电火花线切割机约 1960 年 成熟，建立在 放电等离子烧结、可燃冰、数学 之上完成关键突破；其能力延伸到 零件加工、批量制造，并为 电解磨削 的发展铺平了道路。",
    "dependsOn": ["mat_sps","ene_clathrate","mathematics","mfg_ultraprecise"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "电火花线切割机在 1960 年 前后出现，依托 放电等离子烧结 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，电火花线切割机仍是 零件加工 的底层支撑，并持续影响 电解磨削。"
      }
    ],
    "significance": "电火花线切割机把 放电等离子烧结 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 电解磨削。"
  },
{
    "id": "mfg_roboticweld",
    "name": "焊接机器人",
    "en": "Welding Robot",
    "category": "manufact",
    "era": "info",
    "date": "1980 年",
    "year": 1980,
    "people": "",
    "place": "",
    "summary": "焊接机器人在 1980 年 前后成形，依托 激光熔覆、碟式斯特林、数学 把 零件加工、批量制造 落到实处，并成为 制造与工具 中承上启下的一环，直接支撑了 磨料水射流 等后续技术。",
    "dependsOn": ["mat_laserclad","ene_dishstirling","mathematics","mfg_reverse"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "焊接机器人在 1980 年 前后出现，依托 激光熔覆 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，焊接机器人仍是 零件加工 的底层支撑，并持续影响 磨料水射流。"
      }
    ],
    "significance": "焊接机器人把 激光熔覆 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 磨料水射流。"
  },
{
    "id": "mfg_agv",
    "name": "自动导引车",
    "en": "AGV",
    "category": "manufact",
    "era": "info",
    "date": "1953 年",
    "year": 1953,
    "people": "",
    "place": "",
    "summary": "自动导引车在 1953 年 前后成形，依托 聚碳酸酯、压水堆、数学 把 零件加工、批量制造 落到实处，并成为 制造与工具 中承上启下的一环，直接支撑了 热等静压、核潜艇 等后续技术。",
    "dependsOn": ["mat_pc","ene_pwr","mathematics","cnc"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "自动导引车在 1953 年 前后出现，依托 聚碳酸酯 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，自动导引车仍是 零件加工 的底层支撑，并持续影响 热等静压、核潜艇。"
      }
    ],
    "significance": "自动导引车把 聚碳酸酯 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 热等静压、核潜艇。"
  },
{
    "id": "mfg_aps",
    "name": "高级计划排程",
    "en": "APS",
    "category": "manufact",
    "era": "info",
    "date": "1990 年",
    "year": 1990,
    "people": "",
    "place": "",
    "summary": "高级计划排程在 1990 年 前后成形，依托 金属有机框架、燃料电池汽车、数学 把 零件加工、批量制造 落到实处，并成为 制造与工具 中承上启下的一环，直接支撑了 制造执行系统 等后续技术。",
    "dependsOn": ["mat_mof","ene_fuelcellcar","mathematics","mfg_bionics"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "高级计划排程在 1990 年 前后出现，依托 金属有机框架 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，高级计划排程仍是 零件加工 的底层支撑，并持续影响 制造执行系统。"
      }
    ],
    "significance": "高级计划排程把 金属有机框架 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 制造执行系统。"
  },
{
    "id": "mfg_quality",
    "name": "全面质量管理",
    "en": "TQM",
    "category": "manufact",
    "era": "info",
    "date": "1950 年",
    "year": 1950,
    "people": "",
    "place": "",
    "summary": "全面质量管理约 1950 年 成熟，建立在 泡沫金属、盐差能、数学 之上完成关键突破；其能力延伸到 零件加工、批量制造，并为 超声加工 的发展铺平了道路。",
    "dependsOn": ["mat_foammetal","ene_salinity","mathematics","mfg_adaptive"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "全面质量管理在 1950 年 前后出现，依托 泡沫金属 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，全面质量管理仍是 零件加工 的底层支撑，并持续影响 超声加工。"
      }
    ],
    "significance": "全面质量管理把 泡沫金属 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 超声加工。"
  },
{
    "id": "mfg_mes",
    "name": "制造执行系统",
    "en": "MES",
    "category": "manufact",
    "era": "info",
    "date": "1990 年",
    "year": 1990,
    "people": "",
    "place": "",
    "summary": "制造执行系统约 1990 年 成熟，建立在 金属有机框架、燃料电池汽车、数学 之上完成关键突破；其能力延伸到 零件加工、批量制造，并为 刀具状态监控 的发展铺平了道路。",
    "dependsOn": ["mat_mof","ene_fuelcellcar","mathematics","mfg_aps"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "制造执行系统在 1990 年 前后出现，依托 金属有机框架 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，制造执行系统仍是 零件加工 的底层支撑，并持续影响 刀具状态监控。"
      }
    ],
    "significance": "制造执行系统把 金属有机框架 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 刀具状态监控。"
  },
{
    "id": "mfg_industry40",
    "name": "工业 4.0",
    "en": "Industry 4.0",
    "category": "manufact",
    "era": "intelligent",
    "date": "2011 年",
    "year": 2011,
    "people": "",
    "place": "",
    "summary": "工业 4.0在 2011 年 前后成形，依托 二维材料、液态空气储能、数学 把 零件加工、批量制造 落到实处，并成为 制造与工具 中承上启下的一环，直接支撑了 平衡车、真空管道列车、可回收火箭 等后续技术。",
    "dependsOn": ["mat_2d","ene_liquidair","mathematics","mfg_darkfactory"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "工业 4.0在 2011 年 前后出现，依托 二维材料 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，工业 4.0仍是 零件加工 的底层支撑，并持续影响 平衡车、真空管道列车、可回收火箭。"
      }
    ],
    "significance": "工业 4.0把 二维材料 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 平衡车、真空管道列车、可回收火箭。"
  },
{
    "id": "mfg_ecmg",
    "name": "电解磨削",
    "en": "Electrochemical Grinding",
    "category": "manufact",
    "era": "info",
    "date": "1960 年",
    "year": 1960,
    "people": "",
    "place": "",
    "summary": "电解磨削在 1960 年 前后成形，依托 放电等离子烧结、可燃冰、数学 把 零件加工、批量制造 落到实处，并成为 制造与工具 中承上启下的一环，直接支撑了 地效飞行器、自主水下航行器、月球着陆器 等后续技术。",
    "dependsOn": ["mat_sps","ene_clathrate","mathematics","mfg_edmwire"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "电解磨削在 1960 年 前后出现，依托 放电等离子烧结 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，电解磨削仍是 零件加工 的底层支撑，并持续影响 地效飞行器、自主水下航行器、月球着陆器。"
      }
    ],
    "significance": "电解磨削把 放电等离子烧结 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 地效飞行器、自主水下航行器、月球着陆器。"
  },
{
    "id": "mfg_ultrasonicm",
    "name": "超声加工",
    "en": "Ultrasonic Machining",
    "category": "manufact",
    "era": "info",
    "date": "1950 年",
    "year": 1950,
    "people": "",
    "place": "",
    "summary": "超声加工约 1950 年 成熟，建立在 泡沫金属、盐差能、数学 之上完成关键突破；其能力延伸到 零件加工、批量制造，并为 喷气背包、滑板、飞行记录器 的发展铺平了道路。",
    "dependsOn": ["mat_foammetal","ene_salinity","mathematics","mfg_quality"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "超声加工在 1950 年 前后出现，依托 泡沫金属 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，超声加工仍是 零件加工 的底层支撑，并持续影响 喷气背包、滑板、飞行记录器。"
      }
    ],
    "significance": "超声加工把 泡沫金属 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 喷气背包、滑板、飞行记录器。"
  },
{
    "id": "mfg_awj",
    "name": "磨料水射流",
    "en": "Abrasive Water Jet",
    "category": "manufact",
    "era": "info",
    "date": "1980 年",
    "year": 1980,
    "people": "",
    "place": "",
    "summary": "磨料水射流在 1980 年 前后成形，依托 激光熔覆、碟式斯特林、数学 把 零件加工、批量制造 落到实处，并成为 制造与工具 中承上启下的一环，直接支撑了 机器人夹爪 等后续技术。",
    "dependsOn": ["mat_laserclad","ene_dishstirling","mathematics","mfg_roboticweld"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "磨料水射流在 1980 年 前后出现，依托 激光熔覆 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，磨料水射流仍是 零件加工 的底层支撑，并持续影响 机器人夹爪。"
      }
    ],
    "significance": "磨料水射流把 激光熔覆 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 机器人夹爪。"
  },
{
    "id": "mfg_hybridm",
    "name": "增减材混合制造",
    "en": "Hybrid Manufacturing",
    "category": "manufact",
    "era": "intelligent",
    "date": "2010 年",
    "year": 2010,
    "people": "",
    "place": "",
    "summary": "增减材混合制造约 2010 年 成熟，建立在 二维材料、液态空气储能、数学 之上完成关键突破；其能力延伸到 零件加工、批量制造，并为 数字化车间 的发展铺平了道路。",
    "dependsOn": ["mat_2d","ene_liquidair","mathematics","mfg_visionguide"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "增减材混合制造在 2010 年 前后出现，依托 二维材料 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，增减材混合制造仍是 零件加工 的底层支撑，并持续影响 数字化车间。"
      }
    ],
    "significance": "增减材混合制造把 二维材料 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 数字化车间。"
  },
{
    "id": "mfg_toolmonitor",
    "name": "刀具状态监控",
    "en": "Tool Monitoring",
    "category": "manufact",
    "era": "info",
    "date": "1990 年",
    "year": 1990,
    "people": "",
    "place": "",
    "summary": "刀具状态监控在 1990 年 前后成形，依托 金属有机框架、燃料电池汽车、数学 把 零件加工、批量制造 落到实处，并成为 制造与工具 中承上启下的一环，直接支撑了 在机测量 等后续技术。",
    "dependsOn": ["mat_mof","ene_fuelcellcar","mathematics","mfg_mes"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "刀具状态监控在 1990 年 前后出现，依托 金属有机框架 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，刀具状态监控仍是 零件加工 的底层支撑，并持续影响 在机测量。"
      }
    ],
    "significance": "刀具状态监控把 金属有机框架 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 在机测量。"
  },
{
    "id": "mfg_cryogenicm",
    "name": "低温切削",
    "en": "Cryogenic Machining",
    "category": "manufact",
    "era": "intelligent",
    "date": "2000 年",
    "year": 2000,
    "people": "",
    "place": "",
    "summary": "低温切削在 2000 年 前后成形，依托 自修复材料、井式地热、数学 把 零件加工、批量制造 落到实处，并成为 制造与工具 中承上启下的一环，直接支撑了 视觉引导装配 等后续技术。",
    "dependsOn": ["mat_selfheal","ene_borehole","mathematics","mfg_digitaltwin"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "低温切削在 2000 年 前后出现，依托 自修复材料 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，低温切削仍是 零件加工 的底层支撑，并持续影响 视觉引导装配。"
      }
    ],
    "significance": "低温切削把 自修复材料 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 视觉引导装配。"
  },
{
    "id": "mfg_onmachinem",
    "name": "在机测量",
    "en": "On-Machine Measurement",
    "category": "manufact",
    "era": "info",
    "date": "1990 年",
    "year": 1990,
    "people": "",
    "place": "",
    "summary": "在机测量约 1990 年 成熟，建立在 金属有机框架、燃料电池汽车、数学 之上完成关键突破；其能力延伸到 零件加工、批量制造，并为 搅拌摩擦焊、电动汽车、电动船 的发展铺平了道路。",
    "dependsOn": ["mat_mof","ene_fuelcellcar","mathematics","mfg_toolmonitor"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "在机测量在 1990 年 前后出现，依托 金属有机框架 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，在机测量仍是 零件加工 的底层支撑，并持续影响 搅拌摩擦焊、电动汽车、电动船。"
      }
    ],
    "significance": "在机测量把 金属有机框架 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 搅拌摩擦焊、电动汽车、电动船。"
  },
{
    "id": "mfg_robotgripper",
    "name": "机器人夹爪",
    "en": "Robot Gripper",
    "category": "manufact",
    "era": "info",
    "date": "1980 年",
    "year": 1980,
    "people": "",
    "place": "",
    "summary": "机器人夹爪约 1980 年 成熟，建立在 激光熔覆、碟式斯特林、数学 之上完成关键突破；其能力延伸到 零件加工、批量制造，并为 3D 打印、航天飞机、地源热泵建筑 的发展铺平了道路。",
    "dependsOn": ["mat_laserclad","ene_dishstirling","mathematics","mfg_awj"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "机器人夹爪在 1980 年 前后出现，依托 激光熔覆 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，机器人夹爪仍是 零件加工 的底层支撑，并持续影响 3D 打印、航天飞机、地源热泵建筑。"
      }
    ],
    "significance": "机器人夹爪把 激光熔覆 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 3D 打印、航天飞机、地源热泵建筑。"
  },
{
    "id": "mfg_visionguide",
    "name": "视觉引导装配",
    "en": "Vision-Guided Assembly",
    "category": "manufact",
    "era": "intelligent",
    "date": "2000 年",
    "year": 2000,
    "people": "",
    "place": "",
    "summary": "视觉引导装配在 2000 年 前后成形，依托 自修复材料、井式地热、数学 把 零件加工、批量制造 落到实处，并成为 制造与工具 中承上启下的一环，直接支撑了 增减材混合制造、充电站、高超声速飞行 等后续技术。",
    "dependsOn": ["mat_selfheal","ene_borehole","mathematics","mfg_cryogenicm"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "视觉引导装配在 2000 年 前后出现，依托 自修复材料 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，视觉引导装配仍是 零件加工 的底层支撑，并持续影响 增减材混合制造、充电站、高超声速飞行。"
      }
    ],
    "significance": "视觉引导装配把 自修复材料 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 增减材混合制造、充电站、高超声速飞行。"
  },
{
    "id": "mfg_digitalshop",
    "name": "数字化车间",
    "en": "Digital Shopfloor",
    "category": "manufact",
    "era": "intelligent",
    "date": "2010 年",
    "year": 2010,
    "people": "",
    "place": "",
    "summary": "数字化车间在 2010 年 前后成形，依托 二维材料、液态空气储能、数学 把 零件加工、批量制造 落到实处，并成为 制造与工具 中承上启下的一环，直接支撑了 无人化工厂 等后续技术。",
    "dependsOn": ["mat_2d","ene_liquidair","mathematics","mfg_hybridm"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "数字化车间在 2010 年 前后出现，依托 二维材料 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，数字化车间仍是 零件加工 的底层支撑，并持续影响 无人化工厂。"
      }
    ],
    "significance": "数字化车间把 二维材料 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 无人化工厂。"
  },
{
    "id": "mfg_darkfactory",
    "name": "无人化工厂",
    "en": "Lights-Out Factory",
    "category": "manufact",
    "era": "intelligent",
    "date": "2010 年",
    "year": 2010,
    "people": "",
    "place": "",
    "summary": "无人化工厂在 2010 年 前后成形，依托 二维材料、液态空气储能、数学 把 零件加工、批量制造 落到实处，并成为 制造与工具 中承上启下的一环，直接支撑了 工业 4.0、车路协同、燃料电池卡车 等后续技术。",
    "dependsOn": ["mat_2d","ene_liquidair","mathematics","mfg_digitalshop"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "无人化工厂在 2010 年 前后出现，依托 二维材料 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，无人化工厂仍是 零件加工 的底层支撑，并持续影响 工业 4.0、车路协同、燃料电池卡车。"
      }
    ],
    "significance": "无人化工厂把 二维材料 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 工业 4.0、车路协同、燃料电池卡车。"
  },
{
    "id": "tr_canoe",
    "name": "独木舟",
    "en": "Canoe",
    "category": "transport",
    "era": "prehistoric",
    "date": "约 1 万年前",
    "year": -10000,
    "people": "",
    "place": "",
    "summary": "独木舟在 约 1 万年前 前后成形，依托 钻、用火、陶器 把 人员位移、物资运输 落到实处，并成为 交通运载 中承上启下的一环，直接支撑了 木筏 等后续技术。",
    "dependsOn": ["mfg_drill","fire","mat_pottery"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "史前时代",
        "text": "独木舟在 约 1 万年前 前后出现，依托 钻 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，独木舟仍是 人员位移 的底层支撑，并持续影响 木筏。"
      }
    ],
    "significance": "独木舟把 钻 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 木筏。"
  },
{
    "id": "tr_raft",
    "name": "木筏",
    "en": "Raft",
    "category": "transport",
    "era": "prehistoric",
    "date": "约 1 万年前",
    "year": -10000,
    "people": "",
    "place": "",
    "summary": "木筏约 约 1 万年前 成熟，建立在 钻、用火、陶器 之上完成关键突破；其能力延伸到 人员位移、物资运输，并为 桨 的发展铺平了道路。",
    "dependsOn": ["mfg_drill","fire","mat_pottery","tr_canoe"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "史前时代",
        "text": "木筏在 约 1 万年前 前后出现，依托 钻 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，木筏仍是 人员位移 的底层支撑，并持续影响 桨。"
      }
    ],
    "significance": "木筏把 钻 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 桨。"
  },
{
    "id": "tr_paddle",
    "name": "桨",
    "en": "Paddle",
    "category": "transport",
    "era": "prehistoric",
    "date": "公元前 8000 年",
    "year": -8000,
    "people": "",
    "place": "",
    "summary": "桨在 公元前 8000 年 前后成形，依托 钻、用火、陶器 把 人员位移、物资运输 落到实处，并成为 交通运载 中承上启下的一环，直接支撑了 雪橇 等后续技术。",
    "dependsOn": ["mfg_drill","fire","mat_pottery","tr_raft"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "史前时代",
        "text": "桨在 公元前 8000 年 前后出现，依托 钻 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，桨仍是 人员位移 的底层支撑，并持续影响 雪橇。"
      }
    ],
    "significance": "桨把 钻 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 雪橇。"
  },
{
    "id": "tr_sail",
    "name": "帆船",
    "en": "Sailing Ship",
    "category": "transport",
    "era": "ancient",
    "date": "公元前 3500 年",
    "year": -3500,
    "people": "",
    "place": "",
    "summary": "帆船约 公元前 3500 年 成熟，建立在 失蜡法、木炭、铸造 之上完成关键突破；其能力延伸到 人员位移、物资运输，并为 港口 的发展铺平了道路。",
    "dependsOn": ["mfg_lostwax","ene_charcoal","mat_casting","sail"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "帆船在 公元前 3500 年 前后出现，依托 失蜡法 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，帆船仍是 人员位移 的底层支撑，并持续影响 港口。"
      }
    ],
    "significance": "帆船把 失蜡法 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 港口。"
  },
{
    "id": "tr_paddlesteamer",
    "name": "明轮船",
    "en": "Paddle Steamer",
    "category": "transport",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "明轮船约 1800 年 成熟，建立在 热处理炉、余热回收、感应熔炼 之上完成关键突破；其能力延伸到 人员位移、物资运输，并为 缆车 的发展铺平了道路。",
    "dependsOn": ["mfg_furnace","ene_wasteheat","mat_inductionmelt","tr_balloon"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "明轮船在 1800 年 前后出现，依托 热处理炉 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，明轮船仍是 人员位移 的底层支撑，并持续影响 缆车。"
      }
    ],
    "significance": "明轮船把 热处理炉 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 缆车。"
  },
{
    "id": "tr_steamship",
    "name": "蒸汽船",
    "en": "Steamship",
    "category": "transport",
    "era": "industrial",
    "date": "1807 年",
    "year": 1807,
    "people": "",
    "place": "",
    "summary": "蒸汽船在 1807 年 前后成形，依托 热处理炉、余热回收、电镀 把 人员位移、物资运输 落到实处，并成为 交通运载 中承上启下的一环，直接支撑了 蒸汽机车 等后续技术。",
    "dependsOn": ["mfg_furnace","ene_wasteheat","mat_plating","steam_ship"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "蒸汽船在 1807 年 前后出现，依托 热处理炉 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，蒸汽船仍是 人员位移 的底层支撑，并持续影响 蒸汽机车。"
      }
    ],
    "significance": "蒸汽船把 热处理炉 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 蒸汽机车。"
  },
{
    "id": "tr_screwprop",
    "name": "螺旋桨",
    "en": "Screw Propeller",
    "category": "transport",
    "era": "industrial",
    "date": "1836 年",
    "year": 1836,
    "people": "",
    "place": "",
    "summary": "螺旋桨约 1836 年 成熟，建立在 铣床、发电机与电动机、铝冶炼 之上完成关键突破；其能力延伸到 人员位移、物资运输，并为 充气轮胎、左轮手枪 的发展铺平了道路。",
    "dependsOn": ["mfg_mill","generator","mat_alu","tr_combine"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "螺旋桨在 1836 年 前后出现，依托 铣床 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，螺旋桨仍是 人员位移 的底层支撑，并持续影响 充气轮胎、左轮手枪。"
      }
    ],
    "significance": "螺旋桨把 铣床 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 充气轮胎、左轮手枪。"
  },
{
    "id": "tr_submarine",
    "name": "潜艇",
    "en": "Submarine",
    "category": "transport",
    "era": "earlymodern",
    "date": "1620 年",
    "year": 1620,
    "people": "",
    "place": "",
    "summary": "潜艇在 1620 年 前后成形，依托 压延、风车、光学玻璃 把 人员位移、物资运输 落到实处，并成为 交通运载 中承上启下的一环，直接支撑了 交通隧道 等后续技术。",
    "dependsOn": ["mfg_rolling2","ene_wind","mat_opticalglass","tr_ropeway"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "近代早期",
        "text": "潜艇在 1620 年 前后出现，依托 压延 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，潜艇仍是 人员位移 的底层支撑，并持续影响 交通隧道。"
      }
    ],
    "significance": "潜艇把 压延 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 交通隧道。"
  },
{
    "id": "tr_balloon",
    "name": "热气球",
    "en": "Hot-Air Balloon",
    "category": "transport",
    "era": "industrial",
    "date": "1783 年",
    "year": 1783,
    "people": "",
    "place": "",
    "summary": "热气球约 1783 年 成熟，建立在 车床与精密加工、蒸汽机、钨 之上完成关键突破；其能力延伸到 人员位移、物资运输，并为 明轮船 的发展铺平了道路。",
    "dependsOn": ["lathe","steam_engine","mat_tungsten","tr_track"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "热气球在 1783 年 前后出现，依托 车床与精密加工 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，热气球仍是 人员位移 的底层支撑，并持续影响 明轮船。"
      }
    ],
    "significance": "热气球把 车床与精密加工 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 明轮船。"
  },
{
    "id": "tr_airship",
    "name": "飞艇",
    "en": "Airship",
    "category": "transport",
    "era": "industrial",
    "date": "1852 年",
    "year": 1852,
    "people": "",
    "place": "",
    "summary": "飞艇在 1852 年 前后成形，依托 砂轮、热泵、钢筋混凝土 把 人员位移、物资运输 落到实处，并成为 交通运载 中承上启下的一环，直接支撑了 电梯 等后续技术。",
    "dependsOn": ["mfg_grindingwheel","ene_heatpump","mat_reconcrete","tr_pneumatictire"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "飞艇在 1852 年 前后出现，依托 砂轮 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，飞艇仍是 人员位移 的底层支撑，并持续影响 电梯。"
      }
    ],
    "significance": "飞艇把 砂轮 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 电梯。"
  },
{
    "id": "tr_glider",
    "name": "滑翔机",
    "en": "Glider",
    "category": "transport",
    "era": "industrial",
    "date": "1853 年",
    "year": 1853,
    "people": "",
    "place": "",
    "summary": "滑翔机约 1853 年 成熟，建立在 砂轮、热泵、钢筋混凝土 之上完成关键突破；其能力延伸到 人员位移、物资运输，并为 油轮 的发展铺平了道路。",
    "dependsOn": ["mfg_grindingwheel","ene_heatpump","mat_reconcrete","tr_elevator"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "滑翔机在 1853 年 前后出现，依托 砂轮 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，滑翔机仍是 人员位移 的底层支撑，并持续影响 油轮。"
      }
    ],
    "significance": "滑翔机把 砂轮 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 油轮。"
  },
{
    "id": "tr_helicopter",
    "name": "直升机",
    "en": "Helicopter",
    "category": "transport",
    "era": "electrical",
    "date": "1939 年",
    "year": 1939,
    "people": "",
    "place": "",
    "summary": "直升机约 1939 年 成熟，建立在 喷丸、燃气轮机、聚酰胺 之上完成关键突破；其能力延伸到 人员位移、物资运输，并为 应答机 的发展铺平了道路。",
    "dependsOn": ["mfg_shotblast","ene_gasturbine","mat_pa","tr_radar2"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "直升机在 1939 年 前后出现，依托 喷丸 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，直升机仍是 人员位移 的底层支撑，并持续影响 应答机。"
      }
    ],
    "significance": "直升机把 喷丸 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 应答机。"
  },
{
    "id": "tr_jetliner",
    "name": "喷气客机",
    "en": "Jet Airliner",
    "category": "transport",
    "era": "info",
    "date": "1952 年",
    "year": 1952,
    "people": "",
    "place": "",
    "summary": "喷气客机约 1952 年 成熟，建立在 数控加工、核聚变、浮法玻璃 之上完成关键突破；其能力延伸到 人员位移、物资运输，并为 气垫船、核潜艇、氢弹 的发展铺平了道路。",
    "dependsOn": ["cnc","nuclear_fusion","mat_floatglass","tr_rov"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "喷气客机在 1952 年 前后出现，依托 数控加工 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，喷气客机仍是 人员位移 的底层支撑，并持续影响 气垫船、核潜艇、氢弹。"
      }
    ],
    "significance": "喷气客机把 数控加工 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 气垫船、核潜艇、氢弹。"
  },
{
    "id": "tr_supersonic",
    "name": "超音速客机",
    "en": "Supersonic Transport",
    "category": "transport",
    "era": "info",
    "date": "1969 年",
    "year": 1969,
    "people": "",
    "place": "",
    "summary": "超音速客机约 1969 年 成熟，建立在 可编程逻辑控制器、空间太阳能、氮化镓 之上完成关键突破；其能力延伸到 人员位移、物资运输，并为 空间站、隐身技术、低可探测 的发展铺平了道路。",
    "dependsOn": ["mfg_plc","ene_satpower","mat_gan","tr_hsr"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "超音速客机在 1969 年 前后出现，依托 可编程逻辑控制器 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，超音速客机仍是 人员位移 的底层支撑，并持续影响 空间站、隐身技术、低可探测。"
      }
    ],
    "significance": "超音速客机把 可编程逻辑控制器 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 空间站、隐身技术、低可探测。"
  },
{
    "id": "tr_autogyro",
    "name": "旋翼机",
    "en": "Autogyro",
    "category": "transport",
    "era": "electrical",
    "date": "1923 年",
    "year": 1923,
    "people": "",
    "place": "",
    "summary": "旋翼机在 1923 年 前后成形，依托 流水线、合成燃料、碳化钨 把 人员位移、物资运输 落到实处，并成为 交通运载 中承上启下的一环，直接支撑了 推土机 等后续技术。",
    "dependsOn": ["assembly_line","ene_synfuel","mat_wc","tr_servicearea"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "旋翼机在 1923 年 前后出现，依托 流水线 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，旋翼机仍是 人员位移 的底层支撑，并持续影响 推土机。"
      }
    ],
    "significance": "旋翼机把 流水线 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 推土机。"
  },
{
    "id": "tr_rocket",
    "name": "运载火箭",
    "en": "Launch Vehicle",
    "category": "transport",
    "era": "electrical",
    "date": "1926 年",
    "year": 1926,
    "people": "",
    "place": "",
    "summary": "运载火箭在 1926 年 前后成形，依托 统计过程控制、火箭发动机、聚氯乙烯 把 人员位移、物资运输 落到实处，并成为 交通运载 中承上启下的一环，直接支撑了 雷达、夜视仪、自行火炮 等后续技术。",
    "dependsOn": ["mfg_spcc","ene_rocketengine","mat_pvc","rocket"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "运载火箭在 1926 年 前后出现，依托 统计过程控制 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，运载火箭仍是 人员位移 的底层支撑，并持续影响 雷达、夜视仪、自行火炮。"
      }
    ],
    "significance": "运载火箭把 统计过程控制 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 雷达、夜视仪、自行火炮。"
  },
{
    "id": "tr_shuttle",
    "name": "航天飞机",
    "en": "Space Shuttle",
    "category": "transport",
    "era": "info",
    "date": "1981 年",
    "year": 1981,
    "people": "",
    "place": "",
    "summary": "航天飞机约 1981 年 成熟，建立在 机器人夹爪、碟式斯特林、激光熔覆 之上完成关键突破；其能力延伸到 人员位移、物资运输，并为 磁悬浮列车 的发展铺平了道路。",
    "dependsOn": ["mfg_robotgripper","ene_dishstirling","mat_laserclad","tr_abs"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "航天飞机在 1981 年 前后出现，依托 机器人夹爪 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，航天飞机仍是 人员位移 的底层支撑，并持续影响 磁悬浮列车。"
      }
    ],
    "significance": "航天飞机把 机器人夹爪 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 磁悬浮列车。"
  },
{
    "id": "tr_station",
    "name": "空间站",
    "en": "Space Station",
    "category": "transport",
    "era": "info",
    "date": "1971 年",
    "year": 1971,
    "people": "",
    "place": "",
    "summary": "空间站在 1971 年 前后成形，依托 计算机辅助制造、水热型地热、储氢合金 把 人员位移、物资运输 落到实处，并成为 交通运载 中承上启下的一环，直接支撑了 防抱死制动 等后续技术。",
    "dependsOn": ["mfg_cam","ene_hydrothermal","mat_hydrogenstorage","tr_supersonic"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "空间站在 1971 年 前后出现，依托 计算机辅助制造 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，空间站仍是 人员位移 的底层支撑，并持续影响 防抱死制动。"
      }
    ],
    "significance": "空间站把 计算机辅助制造 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 防抱死制动。"
  },
{
    "id": "tr_hsr",
    "name": "高速铁路",
    "en": "High-Speed Rail",
    "category": "transport",
    "era": "info",
    "date": "1964 年",
    "year": 1964,
    "people": "",
    "place": "",
    "summary": "高速铁路约 1964 年 成熟，建立在 工业机器人、可燃冰、形状记忆合金 之上完成关键突破；其能力延伸到 人员位移、物资运输，并为 超音速客机 的发展铺平了道路。",
    "dependsOn": ["robot","ene_clathrate","mat_shapemem","tr_lunarlander"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "高速铁路在 1964 年 前后出现，依托 工业机器人 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，高速铁路仍是 人员位移 的底层支撑，并持续影响 超音速客机。"
      }
    ],
    "significance": "高速铁路把 工业机器人 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 超音速客机。"
  },
{
    "id": "tr_maglev",
    "name": "磁悬浮列车",
    "en": "Maglev",
    "category": "transport",
    "era": "info",
    "date": "1984 年",
    "year": 1984,
    "people": "",
    "place": "",
    "summary": "磁悬浮列车约 1984 年 出现，建立在 3D 打印、碟式斯特林、激光熔覆 之上；它把 人员位移、物资运输 变成可稳定复现的能力，是 交通运载 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_3dp","ene_dishstirling","mat_laserclad","tr_shuttle"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "磁悬浮列车在 1984 年 前后出现，依托 3D 打印 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，磁悬浮列车仍是 人员位移 的底层支撑，并作为 交通运载 的基础能力持续发挥作用。"
      }
    ],
    "significance": "磁悬浮列车把 3D 打印 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "tr_metro",
    "name": "地铁",
    "en": "Metro",
    "category": "transport",
    "era": "industrial",
    "date": "1863 年",
    "year": 1863,
    "people": "",
    "place": "",
    "summary": "地铁约 1863 年 成熟，建立在 砂轮、铅酸电池、伍德合金 之上完成关键突破；其能力延伸到 人员位移、物资运输，并为 交通信号灯、炸药、TNT 的发展铺平了道路。",
    "dependsOn": ["mfg_grindingwheel","ene_leadacid","mat_woodmetal","tr_bulktanker"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "地铁在 1863 年 前后出现，依托 砂轮 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，地铁仍是 人员位移 的底层支撑，并持续影响 交通信号灯、炸药、TNT。"
      }
    ],
    "significance": "地铁把 砂轮 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 交通信号灯、炸药、TNT。"
  },
{
    "id": "tr_tram",
    "name": "有轨电车",
    "en": "Tram",
    "category": "transport",
    "era": "industrial",
    "date": "1832 年",
    "year": 1832,
    "people": "",
    "place": "",
    "summary": "有轨电车在 1832 年 前后成形，依托 铣床、发电机与电动机、铝冶炼 把 人员位移、物资运输 落到实处，并成为 交通运载 中承上启下的一环，直接支撑了 联合收割机 等后续技术。",
    "dependsOn": ["mfg_mill","generator","mat_alu","tr_excavator"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "有轨电车在 1832 年 前后出现，依托 铣床 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，有轨电车仍是 人员位移 的底层支撑，并持续影响 联合收割机。"
      }
    ],
    "significance": "有轨电车把 铣床 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 联合收割机。"
  },
{
    "id": "tr_trolley",
    "name": "无轨电车",
    "en": "Trolleybus",
    "category": "transport",
    "era": "industrial",
    "date": "1882 年",
    "year": 1882,
    "people": "",
    "place": "",
    "summary": "无轨电车约 1882 年 成熟，建立在 电弧焊、水力发电站、锰钢 之上完成关键突破；其能力延伸到 人员位移、物资运输，并为 摩托车、机枪、无烟火药 的发展铺平了道路。",
    "dependsOn": ["mfg_welding","ene_hydroplant","mat_manganese","tr_windtunnel"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "无轨电车在 1882 年 前后出现，依托 电弧焊 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，无轨电车仍是 人员位移 的底层支撑，并持续影响 摩托车、机枪、无烟火药。"
      }
    ],
    "significance": "无轨电车把 电弧焊 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 摩托车、机枪、无烟火药。"
  },
{
    "id": "tr_bus",
    "name": "公共汽车",
    "en": "Bus",
    "category": "transport",
    "era": "industrial",
    "date": "1895 年",
    "year": 1895,
    "people": "",
    "place": "",
    "summary": "公共汽车在 1895 年 前后成形，依托 感应加热、无线输电、碳化硅 把 人员位移、物资运输 落到实处，并成为 交通运载 中承上启下的一环，直接支撑了 卡车 等后续技术。",
    "dependsOn": ["mfg_induction","ene_wpt","mat_sic","tr_tractor"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "公共汽车在 1895 年 前后出现，依托 感应加热 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，公共汽车仍是 人员位移 的底层支撑，并持续影响 卡车。"
      }
    ],
    "significance": "公共汽车把 感应加热 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 卡车。"
  },
{
    "id": "tr_truck",
    "name": "卡车",
    "en": "Truck",
    "category": "transport",
    "era": "industrial",
    "date": "1896 年",
    "year": 1896,
    "people": "",
    "place": "",
    "summary": "卡车约 1896 年 成熟，建立在 感应加热、无线输电、碳化硅 之上完成关键突破；其能力延伸到 人员位移、物资运输，并为 动车组 的发展铺平了道路。",
    "dependsOn": ["mfg_induction","ene_wpt","mat_sic","tr_bus"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "卡车在 1896 年 前后出现，依托 感应加热 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，卡车仍是 人员位移 的底层支撑，并持续影响 动车组。"
      }
    ],
    "significance": "卡车把 感应加热 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 动车组。"
  },
{
    "id": "tr_motorcycle",
    "name": "摩托车",
    "en": "Motorcycle",
    "category": "transport",
    "era": "industrial",
    "date": "1885 年",
    "year": 1885,
    "people": "",
    "place": "",
    "summary": "摩托车约 1885 年 出现，建立在 精密轴承、变压器、锰钢 之上；它把 人员位移、物资运输 变成可稳定复现的能力，是 交通运载 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_precisionbearing","ene_transformer","mat_manganese","tr_trolley"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "摩托车在 1885 年 前后出现，依托 精密轴承 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，摩托车仍是 人员位移 的底层支撑，并作为 交通运载 的基础能力持续发挥作用。"
      }
    ],
    "significance": "摩托车把 精密轴承 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "tr_bicycle",
    "name": "自行车",
    "en": "Bicycle",
    "category": "transport",
    "era": "industrial",
    "date": "1817 年",
    "year": 1817,
    "people": "",
    "place": "",
    "summary": "自行车约 1817 年 出现，建立在 刨床、斯特林发动机、电镀 之上；它把 人员位移、物资运输 变成可稳定复现的能力，是 交通运载 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_planer","ene_stirling","mat_plating","tr_steamloco"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "自行车在 1817 年 前后出现，依托 刨床 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，自行车仍是 人员位移 的底层支撑，并作为 交通运载 的基础能力持续发挥作用。"
      }
    ],
    "significance": "自行车把 刨床 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "tr_train",
    "name": "铁路列车",
    "en": "Railway Train",
    "category": "transport",
    "era": "industrial",
    "date": "1804 年",
    "year": 1804,
    "people": "",
    "place": "",
    "summary": "铁路列车约 1804 年 出现，建立在 热处理炉、余热回收、钽 之上；它把 人员位移、物资运输 变成可稳定复现的能力，是 交通运载 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_furnace","ene_wasteheat","mat_tantalum","tr_pipeline"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "铁路列车在 1804 年 前后出现，依托 热处理炉 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，铁路列车仍是 人员位移 的底层支撑，并作为 交通运载 的基础能力持续发挥作用。"
      }
    ],
    "significance": "铁路列车把 热处理炉 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "tr_steamloco",
    "name": "蒸汽机车",
    "en": "Steam Locomotive",
    "category": "transport",
    "era": "industrial",
    "date": "1814 年",
    "year": 1814,
    "people": "",
    "place": "",
    "summary": "蒸汽机车约 1814 年 成熟，建立在 刨床、余热回收、电镀 之上完成关键突破；其能力延伸到 人员位移、物资运输，并为 自行车 的发展铺平了道路。",
    "dependsOn": ["mfg_planer","ene_wasteheat","mat_plating","tr_steamship"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "蒸汽机车在 1814 年 前后出现，依托 刨床 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，蒸汽机车仍是 人员位移 的底层支撑，并持续影响 自行车。"
      }
    ],
    "significance": "蒸汽机车把 刨床 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 自行车。"
  },
{
    "id": "tr_diesel loco",
    "name": "内燃机车",
    "en": "Diesel Locomotive",
    "category": "transport",
    "era": "electrical",
    "date": "1912 年",
    "year": 1912,
    "people": "",
    "place": "",
    "summary": "内燃机车约 1912 年 成熟，建立在 真空吸尘器、调峰电站、低温超导 之上完成关键突破；其能力延伸到 人员位移、物资运输，并为 自动驾驶仪 的发展铺平了道路。",
    "dependsOn": ["vacuum_cleaner","ene_peaker","mat_ltsc","tr_simulator"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "内燃机车在 1912 年 前后出现，依托 真空吸尘器 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，内燃机车仍是 人员位移 的底层支撑，并持续影响 自动驾驶仪。"
      }
    ],
    "significance": "内燃机车把 真空吸尘器 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 自动驾驶仪。"
  },
{
    "id": "tr_emu",
    "name": "动车组",
    "en": "EMU",
    "category": "transport",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "动车组约 1900 年 成熟，建立在 切削液、调峰电站、渗硼 之上完成关键突破；其能力延伸到 人员位移、物资运输，并为 机场跑道 的发展铺平了道路。",
    "dependsOn": ["mfg_coolant","ene_peaker","mat_boriding","tr_truck"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "动车组在 1900 年 前后出现，依托 切削液 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，动车组仍是 人员位移 的底层支撑，并持续影响 机场跑道。"
      }
    ],
    "significance": "动车组把 切削液 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 机场跑道。"
  },
{
    "id": "tr_cablecar",
    "name": "缆车",
    "en": "Cable Car",
    "category": "transport",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "缆车约 1800 年 成熟，建立在 热处理炉、余热回收、感应熔炼 之上完成关键突破；其能力延伸到 人员位移、物资运输，并为 巡洋舰 的发展铺平了道路。",
    "dependsOn": ["mfg_furnace","ene_wasteheat","mat_inductionmelt","tr_paddlesteamer"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "缆车在 1800 年 前后出现，依托 热处理炉 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，缆车仍是 人员位移 的底层支撑，并持续影响 巡洋舰。"
      }
    ],
    "significance": "缆车把 热处理炉 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 巡洋舰。"
  },
{
    "id": "tr_ropeway",
    "name": "索道",
    "en": "Aerial Ropeway",
    "category": "transport",
    "era": "earlymodern",
    "date": "1600 年",
    "year": 1600,
    "people": "",
    "place": "",
    "summary": "索道约 1600 年 成熟，建立在 压延、风车、光学玻璃 之上完成关键突破；其能力延伸到 人员位移、物资运输，并为 潜艇、燧发枪 的发展铺平了道路。",
    "dependsOn": ["mfg_rolling2","ene_wind","mat_opticalglass","tr_horseshoe"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "近代早期",
        "text": "索道在 1600 年 前后出现，依托 压延 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，索道仍是 人员位移 的底层支撑，并持续影响 潜艇、燧发枪。"
      }
    ],
    "significance": "索道把 压延 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 潜艇、燧发枪。"
  },
{
    "id": "tr_elevator",
    "name": "电梯",
    "en": "Elevator",
    "category": "transport",
    "era": "industrial",
    "date": "1852 年",
    "year": 1852,
    "people": "",
    "place": "",
    "summary": "电梯在 1852 年 前后成形，依托 砂轮、热泵、钢筋混凝土 把 人员位移、物资运输 落到实处，并成为 交通运载 中承上启下的一环，直接支撑了 滑翔机 等后续技术。",
    "dependsOn": ["mfg_grindingwheel","ene_heatpump","mat_reconcrete","tr_airship"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "电梯在 1852 年 前后出现，依托 砂轮 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，电梯仍是 人员位移 的底层支撑，并持续影响 滑翔机。"
      }
    ],
    "significance": "电梯把 砂轮 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 滑翔机。"
  },
{
    "id": "tr_escalator",
    "name": "自动扶梯",
    "en": "Escalator",
    "category": "transport",
    "era": "industrial",
    "date": "1891 年",
    "year": 1891,
    "people": "",
    "place": "",
    "summary": "自动扶梯在 1891 年 前后成形，依托 感应加热、无线输电、碳化硅 把 人员位移、物资运输 落到实处，并成为 交通运载 中承上启下的一环，直接支撑了 拖拉机 等后续技术。",
    "dependsOn": ["mfg_induction","ene_wpt","mat_sic","tr_destroyer"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "自动扶梯在 1891 年 前后出现，依托 感应加热 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，自动扶梯仍是 人员位移 的底层支撑，并持续影响 拖拉机。"
      }
    ],
    "significance": "自动扶梯把 感应加热 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 拖拉机。"
  },
{
    "id": "tr_crane",
    "name": "起重机",
    "en": "Crane",
    "category": "transport",
    "era": "classical",
    "date": "公元前 300 年",
    "year": -300,
    "people": "",
    "place": "",
    "summary": "起重机约 公元前 300 年 成熟，建立在 螺纹、水车、高炉炼铁 之上完成关键突破；其能力延伸到 人员位移、物资运输，并为 马镫 的发展铺平了道路。",
    "dependsOn": ["mfg_thread","ene_waterwheel","mat_blastfurnace","road"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "古典时代",
        "text": "起重机在 公元前 300 年 前后出现，依托 螺纹 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，起重机仍是 人员位移 的底层支撑，并持续影响 马镫。"
      }
    ],
    "significance": "起重机把 螺纹 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 马镫。"
  },
{
    "id": "tr_forklift",
    "name": "叉车",
    "en": "Forklift",
    "category": "transport",
    "era": "electrical",
    "date": "1917 年",
    "year": 1917,
    "people": "",
    "place": "",
    "summary": "叉车约 1917 年 成熟，建立在 流水线、调峰电站、不锈钢 之上完成关键突破；其能力延伸到 人员位移、物资运输，并为 航空母舰 的发展铺平了道路。",
    "dependsOn": ["assembly_line","ene_peaker","mat_stainless","tr_panama"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "叉车在 1917 年 前后出现，依托 流水线 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，叉车仍是 人员位移 的底层支撑，并持续影响 航空母舰。"
      }
    ],
    "significance": "叉车把 流水线 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 航空母舰。"
  },
{
    "id": "tr_bulldozer",
    "name": "推土机",
    "en": "Bulldozer",
    "category": "transport",
    "era": "electrical",
    "date": "1923 年",
    "year": 1923,
    "people": "",
    "place": "",
    "summary": "推土机约 1923 年 出现，建立在 流水线、合成燃料、碳化钨 之上；它把 人员位移、物资运输 变成可稳定复现的能力，是 交通运载 中从经验走向方法的关键一步。",
    "dependsOn": ["assembly_line","ene_synfuel","mat_wc","tr_autogyro"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "推土机在 1923 年 前后出现，依托 流水线 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，推土机仍是 人员位移 的底层支撑，并作为 交通运载 的基础能力持续发挥作用。"
      }
    ],
    "significance": "推土机把 流水线 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "tr_excavator",
    "name": "挖掘机",
    "en": "Excavator",
    "category": "transport",
    "era": "industrial",
    "date": "1830 年",
    "year": 1830,
    "people": "",
    "place": "",
    "summary": "挖掘机约 1830 年 成熟，建立在 铣床、热电发电、铝冶炼 之上完成关键突破；其能力延伸到 人员位移、物资运输，并为 有轨电车 的发展铺平了道路。",
    "dependsOn": ["mfg_mill","ene_thermoelectric","mat_alu","railway"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "挖掘机在 1830 年 前后出现，依托 铣床 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，挖掘机仍是 人员位移 的底层支撑，并持续影响 有轨电车。"
      }
    ],
    "significance": "挖掘机把 铣床 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 有轨电车。"
  },
{
    "id": "tr_loader",
    "name": "装载机",
    "en": "Loader",
    "category": "transport",
    "era": "electrical",
    "date": "1920 年",
    "year": 1920,
    "people": "",
    "place": "",
    "summary": "装载机约 1920 年 成熟，建立在 流水线、合成燃料、氧化锆陶瓷 之上完成关键突破；其能力延伸到 人员位移、物资运输，并为 服务区 的发展铺平了道路。",
    "dependsOn": ["assembly_line","ene_synfuel","mat_zirconia","tr_aircraftcarrier"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "装载机在 1920 年 前后出现，依托 流水线 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，装载机仍是 人员位移 的底层支撑，并持续影响 服务区。"
      }
    ],
    "significance": "装载机把 流水线 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 服务区。"
  },
{
    "id": "tr_tractor",
    "name": "拖拉机",
    "en": "Tractor",
    "category": "transport",
    "era": "industrial",
    "date": "1892 年",
    "year": 1892,
    "people": "",
    "place": "",
    "summary": "拖拉机约 1892 年 成熟，建立在 感应加热、无线输电、碳化硅 之上完成关键突破；其能力延伸到 人员位移、物资运输，并为 公共汽车 的发展铺平了道路。",
    "dependsOn": ["mfg_induction","ene_wpt","mat_sic","tr_escalator"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "拖拉机在 1892 年 前后出现，依托 感应加热 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，拖拉机仍是 人员位移 的底层支撑，并持续影响 公共汽车。"
      }
    ],
    "significance": "拖拉机把 感应加热 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 公共汽车。"
  },
{
    "id": "tr_combine",
    "name": "联合收割机",
    "en": "Combine Harvester",
    "category": "transport",
    "era": "industrial",
    "date": "1834 年",
    "year": 1834,
    "people": "",
    "place": "",
    "summary": "联合收割机约 1834 年 成熟，建立在 铣床、发电机与电动机、铝冶炼 之上完成关键突破；其能力延伸到 人员位移、物资运输，并为 螺旋桨 的发展铺平了道路。",
    "dependsOn": ["mfg_mill","generator","mat_alu","tr_tram"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "联合收割机在 1834 年 前后出现，依托 铣床 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，联合收割机仍是 人员位移 的底层支撑，并持续影响 螺旋桨。"
      }
    ],
    "significance": "联合收割机把 铣床 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 螺旋桨。"
  },
{
    "id": "tr_aircraftcarrier",
    "name": "航空母舰",
    "en": "Aircraft Carrier",
    "category": "transport",
    "era": "electrical",
    "date": "1917 年",
    "year": 1917,
    "people": "",
    "place": "",
    "summary": "航空母舰在 1917 年 前后成形，依托 流水线、调峰电站、不锈钢 把 人员位移、物资运输 落到实处，并成为 交通运载 中承上启下的一环，直接支撑了 装载机、冲锋枪、声纳 等后续技术。",
    "dependsOn": ["assembly_line","ene_peaker","mat_stainless","tr_forklift"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "航空母舰在 1917 年 前后出现，依托 流水线 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，航空母舰仍是 人员位移 的底层支撑，并持续影响 装载机、冲锋枪、声纳。"
      }
    ],
    "significance": "航空母舰把 流水线 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 装载机、冲锋枪、声纳。"
  },
{
    "id": "tr_destroyer",
    "name": "驱逐舰",
    "en": "Destroyer",
    "category": "transport",
    "era": "industrial",
    "date": "1890 年",
    "year": 1890,
    "people": "",
    "place": "",
    "summary": "驱逐舰约 1890 年 成熟，建立在 感应加热、无线输电、锗 之上完成关键突破；其能力延伸到 人员位移、物资运输，并为 自动扶梯 的发展铺平了道路。",
    "dependsOn": ["mfg_induction","ene_wpt","mat_ge","automobile"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "驱逐舰在 1890 年 前后出现，依托 感应加热 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，驱逐舰仍是 人员位移 的底层支撑，并持续影响 自动扶梯。"
      }
    ],
    "significance": "驱逐舰把 感应加热 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 自动扶梯。"
  },
{
    "id": "tr_cruiser",
    "name": "巡洋舰",
    "en": "Cruiser",
    "category": "transport",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "巡洋舰约 1800 年 成熟，建立在 热处理炉、余热回收、感应熔炼 之上完成关键突破；其能力延伸到 人员位移、物资运输，并为 挖泥船 的发展铺平了道路。",
    "dependsOn": ["mfg_furnace","ene_wasteheat","mat_inductionmelt","tr_cablecar"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "巡洋舰在 1800 年 前后出现，依托 热处理炉 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，巡洋舰仍是 人员位移 的底层支撑，并持续影响 挖泥船。"
      }
    ],
    "significance": "巡洋舰把 热处理炉 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 挖泥船。"
  },
{
    "id": "tr_icebreaker",
    "name": "破冰船",
    "en": "Icebreaker",
    "category": "transport",
    "era": "info",
    "date": "1957 年",
    "year": 1957,
    "people": "",
    "place": "",
    "summary": "破冰船约 1957 年 成熟，建立在 谐波减速器、超级电容、聚丙烯 之上完成关键突破；其能力延伸到 人员位移、物资运输，并为 地效飞行器、战略导弹潜艇 的发展铺平了道路。",
    "dependsOn": ["mfg_harmonic","ene_supercap","mat_pp","satellite"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "破冰船在 1957 年 前后出现，依托 谐波减速器 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，破冰船仍是 人员位移 的底层支撑，并持续影响 地效飞行器、战略导弹潜艇。"
      }
    ],
    "significance": "破冰船把 谐波减速器 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 地效飞行器、战略导弹潜艇。"
  },
{
    "id": "tr_dredger",
    "name": "挖泥船",
    "en": "Dredger",
    "category": "transport",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "挖泥船约 1800 年 成熟，建立在 热处理炉、余热回收、感应熔炼 之上完成关键突破；其能力延伸到 人员位移、物资运输，并为 实心轮胎 的发展铺平了道路。",
    "dependsOn": ["mfg_furnace","ene_wasteheat","mat_inductionmelt","tr_cruiser"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "挖泥船在 1800 年 前后出现，依托 热处理炉 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，挖泥船仍是 人员位移 的底层支撑，并持续影响 实心轮胎。"
      }
    ],
    "significance": "挖泥船把 热处理炉 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 实心轮胎。"
  },
{
    "id": "tr_hovercraft",
    "name": "气垫船",
    "en": "Hovercraft",
    "category": "transport",
    "era": "info",
    "date": "1956 年",
    "year": 1956,
    "people": "",
    "place": "",
    "summary": "气垫船在 1956 年 前后成形，依托 谐波减速器、沸水堆、聚丙烯 把 人员位移、物资运输 落到实处，并成为 交通运载 中承上启下的一环，直接支撑了 集装箱船 等后续技术。",
    "dependsOn": ["mfg_harmonic","ene_bwr","mat_pp","tr_jetliner"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "气垫船在 1956 年 前后出现，依托 谐波减速器 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，气垫船仍是 人员位移 的底层支撑，并持续影响 集装箱船。"
      }
    ],
    "significance": "气垫船把 谐波减速器 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 集装箱船。"
  },
{
    "id": "tr_ekranoplan",
    "name": "地效飞行器",
    "en": "Ground Effect Vehicle",
    "category": "transport",
    "era": "info",
    "date": "1960 年",
    "year": 1960,
    "people": "",
    "place": "",
    "summary": "地效飞行器约 1960 年 成熟，建立在 电解磨削、可燃冰、放电等离子烧结 之上完成关键突破；其能力延伸到 人员位移、物资运输，并为 自主水下航行器 的发展铺平了道路。",
    "dependsOn": ["mfg_ecmg","ene_clathrate","mat_sps","tr_icebreaker"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "地效飞行器在 1960 年 前后出现，依托 电解磨削 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，地效飞行器仍是 人员位移 的底层支撑，并持续影响 自主水下航行器。"
      }
    ],
    "significance": "地效飞行器把 电解磨削 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 自主水下航行器。"
  },
{
    "id": "tr_jetpack",
    "name": "喷气背包",
    "en": "Jet Pack",
    "category": "transport",
    "era": "info",
    "date": "1950 年",
    "year": 1950,
    "people": "",
    "place": "",
    "summary": "喷气背包在 1950 年 前后成形，依托 超声加工、盐差能、泡沫金属 把 人员位移、物资运输 落到实处，并成为 交通运载 中承上启下的一环，直接支撑了 滑板 等后续技术。",
    "dependsOn": ["mfg_ultrasonicm","ene_salinity","mat_foammetal","tr_transponder"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "喷气背包在 1950 年 前后出现，依托 超声加工 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，喷气背包仍是 人员位移 的底层支撑，并持续影响 滑板。"
      }
    ],
    "significance": "喷气背包把 超声加工 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 滑板。"
  },
{
    "id": "tr_hoverboard",
    "name": "平衡车",
    "en": "Hoverboard",
    "category": "transport",
    "era": "intelligent",
    "date": "2013 年",
    "year": 2013,
    "people": "",
    "place": "",
    "summary": "平衡车在 2013 年 前后成形，依托 工业 4.0、摩擦纳米发电、二维材料 把 人员位移、物资运输 落到实处，并成为 交通运载 中承上启下的一环，直接支撑了 真空管道列车 等后续技术。",
    "dependsOn": ["mfg_industry40","ene_tribo","mat_2d","tr_passdrone"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "平衡车在 2013 年 前后出现，依托 工业 4.0 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，平衡车仍是 人员位移 的底层支撑，并持续影响 真空管道列车。"
      }
    ],
    "significance": "平衡车把 工业 4.0 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 真空管道列车。"
  },
{
    "id": "tr_skateboard",
    "name": "滑板",
    "en": "Skateboard",
    "category": "transport",
    "era": "info",
    "date": "1950 年",
    "year": 1950,
    "people": "",
    "place": "",
    "summary": "滑板在 1950 年 前后成形，依托 超声加工、盐差能、泡沫金属 把 人员位移、物资运输 落到实处，并成为 交通运载 中承上启下的一环，直接支撑了 飞行记录器 等后续技术。",
    "dependsOn": ["mfg_ultrasonicm","ene_salinity","mat_foammetal","tr_jetpack"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "滑板在 1950 年 前后出现，依托 超声加工 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，滑板仍是 人员位移 的底层支撑，并持续影响 飞行记录器。"
      }
    ],
    "significance": "滑板把 超声加工 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 飞行记录器。"
  },
{
    "id": "tr_sled",
    "name": "雪橇",
    "en": "Sled",
    "category": "transport",
    "era": "prehistoric",
    "date": "公元前 5000 年",
    "year": -5000,
    "people": "",
    "place": "",
    "summary": "雪橇在 公元前 5000 年 前后成形，依托 磨料、用火、红铜冶炼 把 人员位移、物资运输 落到实处，并成为 交通运载 中承上启下的一环，直接支撑了 运河 等后续技术。",
    "dependsOn": ["mfg_abrasive","fire","mat_copper","tr_paddle"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "史前时代",
        "text": "雪橇在 公元前 5000 年 前后出现，依托 磨料 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，雪橇仍是 人员位移 的底层支撑，并持续影响 运河。"
      }
    ],
    "significance": "雪橇把 磨料 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 运河。"
  },
{
    "id": "tr_stirrup",
    "name": "马镫",
    "en": "Stirrup",
    "category": "transport",
    "era": "classical",
    "date": "300 年",
    "year": 300,
    "people": "",
    "place": "",
    "summary": "马镫约 300 年 成熟，建立在 螺纹、水车、造纸 之上完成关键突破；其能力延伸到 人员位移、物资运输，并为 马蹄铁 的发展铺平了道路。",
    "dependsOn": ["mfg_thread","waterwheel","paper","tr_crane"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "古典时代",
        "text": "马镫在 300 年 前后出现，依托 螺纹 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，马镫仍是 人员位移 的底层支撑，并持续影响 马蹄铁。"
      }
    ],
    "significance": "马镫把 螺纹 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 马蹄铁。"
  },
{
    "id": "tr_horseshoe",
    "name": "马蹄铁",
    "en": "Horseshoe",
    "category": "transport",
    "era": "classical",
    "date": "300 年",
    "year": 300,
    "people": "",
    "place": "",
    "summary": "马蹄铁在 300 年 前后成形，依托 螺纹、水车、造纸 把 人员位移、物资运输 落到实处，并成为 交通运载 中承上启下的一环，直接支撑了 索道、板甲、火绳枪 等后续技术。",
    "dependsOn": ["mfg_thread","waterwheel","paper","tr_stirrup"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "古典时代",
        "text": "马蹄铁在 300 年 前后出现，依托 螺纹 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，马蹄铁仍是 人员位移 的底层支撑，并持续影响 索道、板甲、火绳枪。"
      }
    ],
    "significance": "马蹄铁把 螺纹 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 索道、板甲、火绳枪。"
  },
{
    "id": "tr_pneumatictire",
    "name": "充气轮胎",
    "en": "Pneumatic Tire",
    "category": "transport",
    "era": "industrial",
    "date": "1845 年",
    "year": 1845,
    "people": "",
    "place": "",
    "summary": "充气轮胎在 1845 年 前后成形，依托 砂轮、燃料电池、连续铸造 把 人员位移、物资运输 落到实处，并成为 交通运载 中承上启下的一环，直接支撑了 飞艇、硝化甘油 等后续技术。",
    "dependsOn": ["mfg_grindingwheel","ene_fuelcell","mat_continuouscast","tr_screwprop"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "充气轮胎在 1845 年 前后出现，依托 砂轮 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，充气轮胎仍是 人员位移 的底层支撑，并持续影响 飞艇、硝化甘油。"
      }
    ],
    "significance": "充气轮胎把 砂轮 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 飞艇、硝化甘油。"
  },
{
    "id": "tr_solidtire",
    "name": "实心轮胎",
    "en": "Solid Tire",
    "category": "transport",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "实心轮胎约 1800 年 成熟，建立在 热处理炉、余热回收、感应熔炼 之上完成关键突破；其能力延伸到 人员位移、物资运输，并为 悬挂系统 的发展铺平了道路。",
    "dependsOn": ["mfg_furnace","ene_wasteheat","mat_inductionmelt","tr_dredger"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "实心轮胎在 1800 年 前后出现，依托 热处理炉 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，实心轮胎仍是 人员位移 的底层支撑，并持续影响 悬挂系统。"
      }
    ],
    "significance": "实心轮胎把 热处理炉 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 悬挂系统。"
  },
{
    "id": "tr_track",
    "name": "履带",
    "en": "Track",
    "category": "transport",
    "era": "industrial",
    "date": "1770 年",
    "year": 1770,
    "people": "",
    "place": "",
    "summary": "履带约 1770 年 成熟，建立在 车床与精密加工、蒸汽机、铂族金属 之上完成关键突破；其能力延伸到 人员位移、物资运输，并为 热气球 的发展铺平了道路。",
    "dependsOn": ["lathe","steam_engine","mat_platinum","tr_tunnel2"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "履带在 1770 年 前后出现，依托 车床与精密加工 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，履带仍是 人员位移 的底层支撑，并持续影响 热气球。"
      }
    ],
    "significance": "履带把 车床与精密加工 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 热气球。"
  },
{
    "id": "tr_suspension",
    "name": "悬挂系统",
    "en": "Suspension",
    "category": "transport",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "悬挂系统约 1800 年 成熟，建立在 热处理炉、余热回收、感应熔炼 之上完成关键突破；其能力延伸到 人员位移、物资运输，并为 转向系统 的发展铺平了道路。",
    "dependsOn": ["mfg_furnace","ene_wasteheat","mat_inductionmelt","tr_solidtire"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "悬挂系统在 1800 年 前后出现，依托 热处理炉 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，悬挂系统仍是 人员位移 的底层支撑，并持续影响 转向系统。"
      }
    ],
    "significance": "悬挂系统把 热处理炉 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 转向系统。"
  },
{
    "id": "tr_steering",
    "name": "转向系统",
    "en": "Steering",
    "category": "transport",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "转向系统约 1800 年 成熟，建立在 热处理炉、余热回收、感应熔炼 之上完成关键突破；其能力延伸到 人员位移、物资运输，并为 制动系统 的发展铺平了道路。",
    "dependsOn": ["mfg_furnace","ene_wasteheat","mat_inductionmelt","tr_suspension"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "转向系统在 1800 年 前后出现，依托 热处理炉 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，转向系统仍是 人员位移 的底层支撑，并持续影响 制动系统。"
      }
    ],
    "significance": "转向系统把 热处理炉 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 制动系统。"
  },
{
    "id": "tr_brake",
    "name": "制动系统",
    "en": "Braking",
    "category": "transport",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "制动系统约 1800 年 成熟，建立在 热处理炉、余热回收、感应熔炼 之上完成关键突破；其能力延伸到 人员位移、物资运输，并为 齿轨铁路 的发展铺平了道路。",
    "dependsOn": ["mfg_furnace","ene_wasteheat","mat_inductionmelt","tr_steering"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "制动系统在 1800 年 前后出现，依托 热处理炉 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，制动系统仍是 人员位移 的底层支撑，并持续影响 齿轨铁路。"
      }
    ],
    "significance": "制动系统把 热处理炉 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 齿轨铁路。"
  },
{
    "id": "tr_abs",
    "name": "防抱死制动",
    "en": "ABS",
    "category": "transport",
    "era": "info",
    "date": "1978 年",
    "year": 1978,
    "people": "",
    "place": "",
    "summary": "防抱死制动在 1978 年 前后成形，依托 计算机辅助制造、水热型地热、聚醚醚酮 把 人员位移、物资运输 落到实处，并成为 交通运载 中承上启下的一环，直接支撑了 航天飞机、巡飞弹、指挥控制系统 等后续技术。",
    "dependsOn": ["mfg_cam","ene_hydrothermal","mat_peek","tr_station"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "防抱死制动在 1978 年 前后出现，依托 计算机辅助制造 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，防抱死制动仍是 人员位移 的底层支撑，并持续影响 航天飞机、巡飞弹、指挥控制系统。"
      }
    ],
    "significance": "防抱死制动把 计算机辅助制造 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 航天飞机、巡飞弹、指挥控制系统。"
  },
{
    "id": "tr_navigation",
    "name": "航海导航",
    "en": "Marine Navigation",
    "category": "transport",
    "era": "ancient",
    "date": "公元前 2000 年",
    "year": -2000,
    "people": "",
    "place": "",
    "summary": "航海导航在 公元前 2000 年 前后成形，依托 量具、水力利用、混凝土 把 人员位移、物资运输 落到实处，并成为 交通运载 中承上启下的一环，直接支撑了 灯塔、工程兵 等后续技术。",
    "dependsOn": ["mfg_gauge","ene_hydro","mat_concrete","horse_gear"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "航海导航在 公元前 2000 年 前后出现，依托 量具 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，航海导航仍是 人员位移 的底层支撑，并持续影响 灯塔、工程兵。"
      }
    ],
    "significance": "航海导航把 量具 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 灯塔、工程兵。"
  },
{
    "id": "tr_autopilot",
    "name": "自动驾驶仪",
    "en": "Autopilot",
    "category": "transport",
    "era": "electrical",
    "date": "1912 年",
    "year": 1912,
    "people": "",
    "place": "",
    "summary": "自动驾驶仪约 1912 年 成熟，建立在 真空吸尘器、调峰电站、低温超导 之上完成关键突破；其能力延伸到 人员位移、物资运输，并为 巴拿马运河 的发展铺平了道路。",
    "dependsOn": ["vacuum_cleaner","ene_peaker","mat_ltsc","tr_diesel loco"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "自动驾驶仪在 1912 年 前后出现，依托 真空吸尘器 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，自动驾驶仪仍是 人员位移 的底层支撑，并持续影响 巴拿马运河。"
      }
    ],
    "significance": "自动驾驶仪把 真空吸尘器 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 巴拿马运河。"
  },
{
    "id": "tr_trafficsignal",
    "name": "交通信号灯",
    "en": "Traffic Light",
    "category": "transport",
    "era": "industrial",
    "date": "1868 年",
    "year": 1868,
    "people": "",
    "place": "",
    "summary": "交通信号灯约 1868 年 成熟，建立在 砂轮、铅酸电池、工具钢 之上完成关键突破；其能力延伸到 人员位移、物资运输，并为 苏伊士运河 的发展铺平了道路。",
    "dependsOn": ["mfg_grindingwheel","ene_leadacid","mat_toolsteel","tr_metro"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "交通信号灯在 1868 年 前后出现，依托 砂轮 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，交通信号灯仍是 人员位移 的底层支撑，并持续影响 苏伊士运河。"
      }
    ],
    "significance": "交通信号灯把 砂轮 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 苏伊士运河。"
  },
{
    "id": "tr_lighthouse",
    "name": "灯塔",
    "en": "Lighthouse",
    "category": "transport",
    "era": "ancient",
    "date": "公元前 1000 年",
    "year": -1000,
    "people": "",
    "place": "",
    "summary": "灯塔在 公元前 1000 年 前后成形，依托 车床、煤炭开采、退火 把 人员位移、物资运输 落到实处，并成为 交通运载 中承上启下的一环，直接支撑了 弩、投石机、锁子甲 等后续技术。",
    "dependsOn": ["mfg_lathe","ene_coal","mat_anneal","tr_navigation"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "灯塔在 公元前 1000 年 前后出现，依托 车床 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，灯塔仍是 人员位移 的底层支撑，并持续影响 弩、投石机、锁子甲。"
      }
    ],
    "significance": "灯塔把 车床 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 弩、投石机、锁子甲。"
  },
{
    "id": "tr_radar2",
    "name": "雷达",
    "en": "Radar",
    "category": "transport",
    "era": "electrical",
    "date": "1935 年",
    "year": 1935,
    "people": "",
    "place": "",
    "summary": "雷达在 1935 年 前后成形，依托 喷丸、锌空气电池、氧化锌半导体 把 人员位移、物资运输 落到实处，并成为 交通运载 中承上启下的一环，直接支撑了 直升机 等后续技术。",
    "dependsOn": ["mfg_shotblast","ene_zincair","mat_gan2","tr_rocket"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "雷达在 1935 年 前后出现，依托 喷丸 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，雷达仍是 人员位移 的底层支撑，并持续影响 直升机。"
      }
    ],
    "significance": "雷达把 喷丸 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 直升机。"
  },
{
    "id": "tr_transponder",
    "name": "应答机",
    "en": "Transponder",
    "category": "transport",
    "era": "electrical",
    "date": "1940 年",
    "year": 1940,
    "people": "",
    "place": "",
    "summary": "应答机在 1940 年 前后成形，依托 看板管理、燃气轮机、电渣重熔 把 人员位移、物资运输 落到实处，并成为 交通运载 中承上启下的一环，直接支撑了 喷气背包、导弹、弹道导弹 等后续技术。",
    "dependsOn": ["mfg_kanban","ene_gasturbine","mat_esr","tr_helicopter"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "应答机在 1940 年 前后出现，依托 看板管理 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，应答机仍是 人员位移 的底层支撑，并持续影响 喷气背包、导弹、弹道导弹。"
      }
    ],
    "significance": "应答机把 看板管理 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 喷气背包、导弹、弹道导弹。"
  },
{
    "id": "tr_blackbox",
    "name": "飞行记录器",
    "en": "Black Box",
    "category": "transport",
    "era": "info",
    "date": "1950 年",
    "year": 1950,
    "people": "",
    "place": "",
    "summary": "飞行记录器在 1950 年 前后成形，依托 超声加工、盐差能、泡沫金属 把 人员位移、物资运输 落到实处，并成为 交通运载 中承上启下的一环，直接支撑了 遥控潜水器 等后续技术。",
    "dependsOn": ["mfg_ultrasonicm","ene_salinity","mat_foammetal","tr_skateboard"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "飞行记录器在 1950 年 前后出现，依托 超声加工 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，飞行记录器仍是 人员位移 的底层支撑，并持续影响 遥控潜水器。"
      }
    ],
    "significance": "飞行记录器把 超声加工 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 遥控潜水器。"
  },
{
    "id": "tr_simulator",
    "name": "飞行模拟器",
    "en": "Flight Simulator",
    "category": "transport",
    "era": "electrical",
    "date": "1910 年",
    "year": 1910,
    "people": "",
    "place": "",
    "summary": "飞行模拟器在 1910 年 前后成形，依托 真空吸尘器、调峰电站、铁氧体 把 人员位移、物资运输 落到实处，并成为 交通运载 中承上启下的一环，直接支撑了 内燃机车、深水炸弹 等后续技术。",
    "dependsOn": ["vacuum_cleaner","ene_peaker","mat_ferrite","airplane"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "飞行模拟器在 1910 年 前后出现，依托 真空吸尘器 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，飞行模拟器仍是 人员位移 的底层支撑，并持续影响 内燃机车、深水炸弹。"
      }
    ],
    "significance": "飞行模拟器把 真空吸尘器 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 内燃机车、深水炸弹。"
  },
{
    "id": "tr_windtunnel",
    "name": "风洞",
    "en": "Wind Tunnel",
    "category": "transport",
    "era": "industrial",
    "date": "1871 年",
    "year": 1871,
    "people": "",
    "place": "",
    "summary": "风洞在 1871 年 前后成形，依托 砂轮、铅酸电池、工具钢 把 人员位移、物资运输 落到实处，并成为 交通运载 中承上启下的一环，直接支撑了 无轨电车 等后续技术。",
    "dependsOn": ["mfg_grindingwheel","ene_leadacid","mat_toolsteel","tr_suez"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "风洞在 1871 年 前后出现，依托 砂轮 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，风洞仍是 人员位移 的底层支撑，并持续影响 无轨电车。"
      }
    ],
    "significance": "风洞把 砂轮 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 无轨电车。"
  },
{
    "id": "tr_runway",
    "name": "机场跑道",
    "en": "Runway",
    "category": "transport",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "机场跑道在 1900 年 前后成形，依托 切削液、调峰电站、渗硼 把 人员位移、物资运输 落到实处，并成为 交通运载 中承上启下的一环，直接支撑了 立交桥 等后续技术。",
    "dependsOn": ["mfg_coolant","ene_peaker","mat_boriding","tr_emu"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "机场跑道在 1900 年 前后出现，依托 切削液 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，机场跑道仍是 人员位移 的底层支撑，并持续影响 立交桥。"
      }
    ],
    "significance": "机场跑道把 切削液 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 立交桥。"
  },
{
    "id": "tr_port",
    "name": "港口",
    "en": "Port",
    "category": "transport",
    "era": "ancient",
    "date": "公元前 3000 年",
    "year": -3000,
    "people": "",
    "place": "",
    "summary": "港口约 公元前 3000 年 成熟，建立在 研磨、水力利用、水泥 之上完成关键突破；其能力延伸到 人员位移、物资运输，并为 渡轮 的发展铺平了道路。",
    "dependsOn": ["mfg_lapp","ene_hydro","mat_cement","tr_sail"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "港口在 公元前 3000 年 前后出现，依托 研磨 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，港口仍是 人员位移 的底层支撑，并持续影响 渡轮。"
      }
    ],
    "significance": "港口把 研磨 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 渡轮。"
  },
{
    "id": "tr_canal",
    "name": "运河",
    "en": "Canal",
    "category": "transport",
    "era": "prehistoric",
    "date": "公元前 4000 年",
    "year": -4000,
    "people": "",
    "place": "",
    "summary": "运河约 公元前 4000 年 出现，建立在 磨料、木炭、白银加工 之上；它把 人员位移、物资运输 变成可稳定复现的能力，是 交通运载 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_abrasive","ene_charcoal","mat_silver","tr_sled"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "史前时代",
        "text": "运河在 公元前 4000 年 前后出现，依托 磨料 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，运河仍是 人员位移 的底层支撑，并作为 交通运载 的基础能力持续发挥作用。"
      }
    ],
    "significance": "运河把 磨料 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "tr_suez",
    "name": "苏伊士运河",
    "en": "Suez Canal",
    "category": "transport",
    "era": "industrial",
    "date": "1869 年",
    "year": 1869,
    "people": "",
    "place": "",
    "summary": "苏伊士运河约 1869 年 成熟，建立在 砂轮、铅酸电池、工具钢 之上完成关键突破；其能力延伸到 人员位移、物资运输，并为 风洞 的发展铺平了道路。",
    "dependsOn": ["mfg_grindingwheel","ene_leadacid","mat_toolsteel","tr_trafficsignal"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "苏伊士运河在 1869 年 前后出现，依托 砂轮 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，苏伊士运河仍是 人员位移 的底层支撑，并持续影响 风洞。"
      }
    ],
    "significance": "苏伊士运河把 砂轮 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 风洞。"
  },
{
    "id": "tr_panama",
    "name": "巴拿马运河",
    "en": "Panama Canal",
    "category": "transport",
    "era": "electrical",
    "date": "1914 年",
    "year": 1914,
    "people": "",
    "place": "",
    "summary": "巴拿马运河在 1914 年 前后成形，依托 流水线、调峰电站、不锈钢 把 人员位移、物资运输 落到实处，并成为 交通运载 中承上启下的一环，直接支撑了 叉车、坦克、战斗机 等后续技术。",
    "dependsOn": ["assembly_line","ene_peaker","mat_stainless","tr_autopilot"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "巴拿马运河在 1914 年 前后出现，依托 流水线 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，巴拿马运河仍是 人员位移 的底层支撑，并持续影响 叉车、坦克、战斗机。"
      }
    ],
    "significance": "巴拿马运河把 流水线 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 叉车、坦克、战斗机。"
  },
{
    "id": "tr_tunnel2",
    "name": "交通隧道",
    "en": "Traffic Tunnel",
    "category": "transport",
    "era": "earlymodern",
    "date": "1700 年",
    "year": 1700,
    "people": "",
    "place": "",
    "summary": "交通隧道在 1700 年 前后成形，依托 压延、太阳能热利用、沸石分子筛 把 人员位移、物资运输 落到实处，并成为 交通运载 中承上启下的一环，直接支撑了 履带、榴弹炮、护卫舰 等后续技术。",
    "dependsOn": ["mfg_rolling2","ene_solarthermal","mat_zeolite","tr_submarine"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "近代早期",
        "text": "交通隧道在 1700 年 前后出现，依托 压延 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，交通隧道仍是 人员位移 的底层支撑，并持续影响 履带、榴弹炮、护卫舰。"
      }
    ],
    "significance": "交通隧道把 压延 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 履带、榴弹炮、护卫舰。"
  },
{
    "id": "tr_interchange",
    "name": "立交桥",
    "en": "Interchange",
    "category": "transport",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "立交桥在 1900 年 前后成形，依托 切削液、调峰电站、渗硼 把 人员位移、物资运输 落到实处，并成为 交通运载 中承上启下的一环，直接支撑了 加油站 等后续技术。",
    "dependsOn": ["mfg_coolant","ene_peaker","mat_boriding","tr_runway"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "立交桥在 1900 年 前后出现，依托 切削液 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，立交桥仍是 人员位移 的底层支撑，并持续影响 加油站。"
      }
    ],
    "significance": "立交桥把 切削液 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 加油站。"
  },
{
    "id": "tr_servicearea",
    "name": "服务区",
    "en": "Service Area",
    "category": "transport",
    "era": "electrical",
    "date": "1920 年",
    "year": 1920,
    "people": "",
    "place": "",
    "summary": "服务区在 1920 年 前后成形，依托 流水线、合成燃料、氧化锆陶瓷 把 人员位移、物资运输 落到实处，并成为 交通运载 中承上启下的一环，直接支撑了 旋翼机、空中加油机、军用运输机 等后续技术。",
    "dependsOn": ["assembly_line","ene_synfuel","mat_zirconia","tr_loader"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "服务区在 1920 年 前后出现，依托 流水线 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，服务区仍是 人员位移 的底层支撑，并持续影响 旋翼机、空中加油机、军用运输机。"
      }
    ],
    "significance": "服务区把 流水线 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 旋翼机、空中加油机、军用运输机。"
  },
{
    "id": "tr_gasstation",
    "name": "加油站",
    "en": "Gas Station",
    "category": "transport",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "加油站约 1900 年 成熟，建立在 切削液、调峰电站、渗硼 之上完成关键突破；其能力延伸到 人员位移、物资运输，并为 滚装船 的发展铺平了道路。",
    "dependsOn": ["mfg_coolant","ene_peaker","mat_boriding","tr_interchange"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "加油站在 1900 年 前后出现，依托 切削液 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，加油站仍是 人员位移 的底层支撑，并持续影响 滚装船。"
      }
    ],
    "significance": "加油站把 切削液 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 滚装船。"
  },
{
    "id": "tr_charging",
    "name": "充电站",
    "en": "Charging Station",
    "category": "transport",
    "era": "intelligent",
    "date": "2000 年",
    "year": 2000,
    "people": "",
    "place": "",
    "summary": "充电站约 2000 年 成熟，建立在 视觉引导装配、井式地热、自修复材料 之上完成关键突破；其能力延伸到 人员位移、物资运输，并为 高超声速飞行 的发展铺平了道路。",
    "dependsOn": ["mfg_visionguide","ene_borehole","mat_selfheal","space_station"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "充电站在 2000 年 前后出现，依托 视觉引导装配 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，充电站仍是 人员位移 的底层支撑，并持续影响 高超声速飞行。"
      }
    ],
    "significance": "充电站把 视觉引导装配 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 高超声速飞行。"
  },
{
    "id": "tr_v2x",
    "name": "车路协同",
    "en": "V2X",
    "category": "transport",
    "era": "intelligent",
    "date": "2010 年",
    "year": 2010,
    "people": "",
    "place": "",
    "summary": "车路协同在 2010 年 前后成形，依托 无人化工厂、液态空气储能、二维材料 把 人员位移、物资运输 落到实处，并成为 交通运载 中承上启下的一环，直接支撑了 燃料电池卡车 等后续技术。",
    "dependsOn": ["mfg_darkfactory","ene_liquidair","mat_2d","drone"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "车路协同在 2010 年 前后出现，依托 无人化工厂 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，车路协同仍是 人员位移 的底层支撑，并持续影响 燃料电池卡车。"
      }
    ],
    "significance": "车路协同把 无人化工厂 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 燃料电池卡车。"
  },
{
    "id": "tr_containership",
    "name": "集装箱船",
    "en": "Container Ship",
    "category": "transport",
    "era": "info",
    "date": "1956 年",
    "year": 1956,
    "people": "",
    "place": "",
    "summary": "集装箱船约 1956 年 出现，建立在 谐波减速器、沸水堆、聚丙烯 之上；它把 人员位移、物资运输 变成可稳定复现的能力，是 交通运载 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_harmonic","ene_bwr","mat_pp","tr_hovercraft"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "集装箱船在 1956 年 前后出现，依托 谐波减速器 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，集装箱船仍是 人员位移 的底层支撑，并作为 交通运载 的基础能力持续发挥作用。"
      }
    ],
    "significance": "集装箱船把 谐波减速器 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "tr_bulktanker",
    "name": "油轮",
    "en": "Oil Tanker",
    "category": "transport",
    "era": "industrial",
    "date": "1860 年",
    "year": 1860,
    "people": "",
    "place": "",
    "summary": "油轮约 1860 年 成熟，建立在 砂轮、铅酸电池、伍德合金 之上完成关键突破；其能力延伸到 人员位移、物资运输，并为 地铁 的发展铺平了道路。",
    "dependsOn": ["mfg_grindingwheel","ene_leadacid","mat_woodmetal","tr_glider"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "油轮在 1860 年 前后出现，依托 砂轮 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，油轮仍是 人员位移 的底层支撑，并持续影响 地铁。"
      }
    ],
    "significance": "油轮把 砂轮 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 地铁。"
  },
{
    "id": "tr_roship",
    "name": "滚装船",
    "en": "Ro-Ro Ship",
    "category": "transport",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "滚装船约 1900 年 成熟，建立在 切削液、调峰电站、渗硼 之上完成关键突破；其能力延伸到 人员位移、物资运输，并为 高铁桥梁 的发展铺平了道路。",
    "dependsOn": ["mfg_coolant","ene_peaker","mat_boriding","tr_gasstation"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "滚装船在 1900 年 前后出现，依托 切削液 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，滚装船仍是 人员位移 的底层支撑，并持续影响 高铁桥梁。"
      }
    ],
    "significance": "滚装船把 切削液 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 高铁桥梁。"
  },
{
    "id": "tr_ferry",
    "name": "渡轮",
    "en": "Ferry",
    "category": "transport",
    "era": "ancient",
    "date": "公元前 3000 年",
    "year": -3000,
    "people": "",
    "place": "",
    "summary": "渡轮在 公元前 3000 年 前后成形，依托 研磨、水力利用、水泥 把 人员位移、物资运输 落到实处，并成为 交通运载 中承上启下的一环，直接支撑了 剑、盾、盔甲 等后续技术。",
    "dependsOn": ["mfg_lapp","ene_hydro","mat_cement","tr_port"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "渡轮在 公元前 3000 年 前后出现，依托 研磨 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，渡轮仍是 人员位移 的底层支撑，并持续影响 剑、盾、盔甲。"
      }
    ],
    "significance": "渡轮把 研磨 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 剑、盾、盔甲。"
  },
{
    "id": "tr_hsrbridge",
    "name": "高铁桥梁",
    "en": "HSR Bridge",
    "category": "transport",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "高铁桥梁在 1900 年 前后成形，依托 切削液、调峰电站、渗硼 把 人员位移、物资运输 落到实处，并成为 交通运载 中承上启下的一环，直接支撑了 单轨铁路 等后续技术。",
    "dependsOn": ["mfg_coolant","ene_peaker","mat_boriding","tr_roship"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "高铁桥梁在 1900 年 前后出现，依托 切削液 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，高铁桥梁仍是 人员位移 的底层支撑，并持续影响 单轨铁路。"
      }
    ],
    "significance": "高铁桥梁把 切削液 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 单轨铁路。"
  },
{
    "id": "tr_monorail",
    "name": "单轨铁路",
    "en": "Monorail",
    "category": "transport",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "单轨铁路约 1900 年 成熟，建立在 切削液、调峰电站、渗硼 之上完成关键突破；其能力延伸到 人员位移、物资运输，并为 电子战、干扰、高射炮 的发展铺平了道路。",
    "dependsOn": ["mfg_coolant","ene_peaker","mat_boriding","tr_hsrbridge"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "单轨铁路在 1900 年 前后出现，依托 切削液 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，单轨铁路仍是 人员位移 的底层支撑，并持续影响 电子战、干扰、高射炮。"
      }
    ],
    "significance": "单轨铁路把 切削液 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 电子战、干扰、高射炮。"
  },
{
    "id": "tr_funicular",
    "name": "齿轨铁路",
    "en": "Funicular",
    "category": "transport",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "齿轨铁路约 1800 年 成熟，建立在 热处理炉、余热回收、感应熔炼 之上完成关键突破；其能力延伸到 人员位移、物资运输，并为 管道运输 的发展铺平了道路。",
    "dependsOn": ["mfg_furnace","ene_wasteheat","mat_inductionmelt","tr_brake"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "齿轨铁路在 1800 年 前后出现，依托 热处理炉 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，齿轨铁路仍是 人员位移 的底层支撑，并持续影响 管道运输。"
      }
    ],
    "significance": "齿轨铁路把 热处理炉 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 管道运输。"
  },
{
    "id": "tr_pipeline",
    "name": "管道运输",
    "en": "Pipeline Transport",
    "category": "transport",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "管道运输在 1800 年 前后成形，依托 热处理炉、余热回收、感应熔炼 把 人员位移、物资运输 落到实处，并成为 交通运载 中承上启下的一环，直接支撑了 铁路列车、来复枪、狙击步枪 等后续技术。",
    "dependsOn": ["mfg_furnace","ene_wasteheat","mat_inductionmelt","tr_funicular"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "管道运输在 1800 年 前后出现，依托 热处理炉 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，管道运输仍是 人员位移 的底层支撑，并持续影响 铁路列车、来复枪、狙击步枪。"
      }
    ],
    "significance": "管道运输把 热处理炉 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 铁路列车、来复枪、狙击步枪。"
  },
{
    "id": "tr_hyperloop",
    "name": "真空管道列车",
    "en": "Hyperloop",
    "category": "transport",
    "era": "intelligent",
    "date": "2013 年",
    "year": 2013,
    "people": "",
    "place": "",
    "summary": "真空管道列车在 2013 年 前后成形，依托 工业 4.0、摩擦纳米发电、二维材料 把 人员位移、物资运输 落到实处，并成为 交通运载 中承上启下的一环，直接支撑了 可回收火箭 等后续技术。",
    "dependsOn": ["mfg_industry40","ene_tribo","mat_2d","tr_hoverboard"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "真空管道列车在 2013 年 前后出现，依托 工业 4.0 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，真空管道列车仍是 人员位移 的底层支撑，并持续影响 可回收火箭。"
      }
    ],
    "significance": "真空管道列车把 工业 4.0 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 可回收火箭。"
  },
{
    "id": "tr_evcar",
    "name": "电动汽车",
    "en": "Electric Car",
    "category": "transport",
    "era": "info",
    "date": "1990 年",
    "year": 1990,
    "people": "",
    "place": "",
    "summary": "电动汽车约 1990 年 成熟，建立在 在机测量、燃料电池汽车、金属有机框架 之上完成关键突破；其能力延伸到 人员位移、物资运输，并为 电动船 的发展铺平了道路。",
    "dependsOn": ["mfg_onmachinem","ene_fuelcellcar","mat_mof","gps"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "电动汽车在 1990 年 前后出现，依托 在机测量 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，电动汽车仍是 人员位移 的底层支撑，并持续影响 电动船。"
      }
    ],
    "significance": "电动汽车把 在机测量 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 电动船。"
  },
{
    "id": "tr_fcevtruck",
    "name": "燃料电池卡车",
    "en": "Fuel Cell Truck",
    "category": "transport",
    "era": "intelligent",
    "date": "2010 年",
    "year": 2010,
    "people": "",
    "place": "",
    "summary": "燃料电池卡车约 2010 年 成熟，建立在 无人化工厂、液态空气储能、二维材料 之上完成关键突破；其能力延伸到 人员位移、物资运输，并为 个人飞行器 的发展铺平了道路。",
    "dependsOn": ["mfg_darkfactory","ene_liquidair","mat_2d","tr_v2x"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "燃料电池卡车在 2010 年 前后出现，依托 无人化工厂 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，燃料电池卡车仍是 人员位移 的底层支撑，并持续影响 个人飞行器。"
      }
    ],
    "significance": "燃料电池卡车把 无人化工厂 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 个人飞行器。"
  },
{
    "id": "tr_personalair",
    "name": "个人飞行器",
    "en": "Personal Aerial Vehicle",
    "category": "transport",
    "era": "intelligent",
    "date": "2010 年",
    "year": 2010,
    "people": "",
    "place": "",
    "summary": "个人飞行器在 2010 年 前后成形，依托 无人化工厂、液态空气储能、二维材料 把 人员位移、物资运输 落到实处，并成为 交通运载 中承上启下的一环，直接支撑了 无人机货运 等后续技术。",
    "dependsOn": ["mfg_darkfactory","ene_liquidair","mat_2d","tr_fcevtruck"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "个人飞行器在 2010 年 前后出现，依托 无人化工厂 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，个人飞行器仍是 人员位移 的底层支撑，并持续影响 无人机货运。"
      }
    ],
    "significance": "个人飞行器把 无人化工厂 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 无人机货运。"
  },
{
    "id": "tr_electricboat",
    "name": "电动船",
    "en": "Electric Boat",
    "category": "transport",
    "era": "info",
    "date": "1990 年",
    "year": 1990,
    "people": "",
    "place": "",
    "summary": "电动船约 1990 年 成熟，建立在 在机测量、燃料电池汽车、金属有机框架 之上完成关键突破；其能力延伸到 人员位移、物资运输，并为 网络战、高功率微波武器 的发展铺平了道路。",
    "dependsOn": ["mfg_onmachinem","ene_fuelcellcar","mat_mof","tr_evcar"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "电动船在 1990 年 前后出现，依托 在机测量 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，电动船仍是 人员位移 的底层支撑，并持续影响 网络战、高功率微波武器。"
      }
    ],
    "significance": "电动船把 在机测量 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 网络战、高功率微波武器。"
  },
{
    "id": "tr_auv",
    "name": "自主水下航行器",
    "en": "AUV",
    "category": "transport",
    "era": "info",
    "date": "1960 年",
    "year": 1960,
    "people": "",
    "place": "",
    "summary": "自主水下航行器在 1960 年 前后成形，依托 电解磨削、可燃冰、放电等离子烧结 把 人员位移、物资运输 落到实处，并成为 交通运载 中承上启下的一环，直接支撑了 月球着陆器 等后续技术。",
    "dependsOn": ["mfg_ecmg","ene_clathrate","mat_sps","tr_ekranoplan"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "自主水下航行器在 1960 年 前后出现，依托 电解磨削 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，自主水下航行器仍是 人员位移 的底层支撑，并持续影响 月球着陆器。"
      }
    ],
    "significance": "自主水下航行器把 电解磨削 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 月球着陆器。"
  },
{
    "id": "tr_rov",
    "name": "遥控潜水器",
    "en": "ROV",
    "category": "transport",
    "era": "info",
    "date": "1950 年",
    "year": 1950,
    "people": "",
    "place": "",
    "summary": "遥控潜水器约 1950 年 成熟，建立在 超声加工、盐差能、泡沫金属 之上完成关键突破；其能力延伸到 人员位移、物资运输，并为 喷气客机、巡航导弹、防空导弹 的发展铺平了道路。",
    "dependsOn": ["mfg_ultrasonicm","ene_salinity","mat_foammetal","tr_blackbox"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "遥控潜水器在 1950 年 前后出现，依托 超声加工 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，遥控潜水器仍是 人员位移 的底层支撑，并持续影响 喷气客机、巡航导弹、防空导弹。"
      }
    ],
    "significance": "遥控潜水器把 超声加工 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 喷气客机、巡航导弹、防空导弹。"
  },
{
    "id": "tr_cargo_drone",
    "name": "无人机货运",
    "en": "Cargo Drone",
    "category": "transport",
    "era": "intelligent",
    "date": "2010 年",
    "year": 2010,
    "people": "",
    "place": "",
    "summary": "无人机货运约 2010 年 成熟，建立在 无人化工厂、液态空气储能、二维材料 之上完成关键突破；其能力延伸到 人员位移、物资运输，并为 载人无人机 的发展铺平了道路。",
    "dependsOn": ["mfg_darkfactory","ene_liquidair","mat_2d","tr_personalair"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "无人机货运在 2010 年 前后出现，依托 无人化工厂 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，无人机货运仍是 人员位移 的底层支撑，并持续影响 载人无人机。"
      }
    ],
    "significance": "无人机货运把 无人化工厂 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 载人无人机。"
  },
{
    "id": "tr_passdrone",
    "name": "载人无人机",
    "en": "Passenger Drone",
    "category": "transport",
    "era": "intelligent",
    "date": "2010 年",
    "year": 2010,
    "people": "",
    "place": "",
    "summary": "载人无人机约 2010 年 成熟，建立在 无人化工厂、液态空气储能、二维材料 之上完成关键突破；其能力延伸到 人员位移、物资运输，并为 平衡车、无人机蜂群、军事人工智能 的发展铺平了道路。",
    "dependsOn": ["mfg_darkfactory","ene_liquidair","mat_2d","tr_cargo_drone"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "载人无人机在 2010 年 前后出现，依托 无人化工厂 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，载人无人机仍是 人员位移 的底层支撑，并持续影响 平衡车、无人机蜂群、军事人工智能。"
      }
    ],
    "significance": "载人无人机把 无人化工厂 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 平衡车、无人机蜂群、军事人工智能。"
  },
{
    "id": "tr_hypersonic",
    "name": "高超声速飞行",
    "en": "Hypersonic Flight",
    "category": "transport",
    "era": "intelligent",
    "date": "2000 年",
    "year": 2000,
    "people": "",
    "place": "",
    "summary": "高超声速飞行在 2000 年 前后成形，依托 视觉引导装配、井式地热、自修复材料 把 人员位移、物资运输 落到实处，并成为 交通运载 中承上启下的一环，直接支撑了 电磁轨道炮 等后续技术。",
    "dependsOn": ["mfg_visionguide","ene_borehole","mat_selfheal","tr_charging"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "高超声速飞行在 2000 年 前后出现，依托 视觉引导装配 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，高超声速飞行仍是 人员位移 的底层支撑，并持续影响 电磁轨道炮。"
      }
    ],
    "significance": "高超声速飞行把 视觉引导装配 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 电磁轨道炮。"
  },
{
    "id": "tr_reusablerocket",
    "name": "可回收火箭",
    "en": "Reusable Rocket",
    "category": "transport",
    "era": "intelligent",
    "date": "2015 年",
    "year": 2015,
    "people": "",
    "place": "",
    "summary": "可回收火箭约 2015 年 成熟，建立在 工业 4.0、摩擦纳米发电、二维材料 之上完成关键突破；其能力延伸到 人员位移、物资运输，并为 忠诚僚机 的发展铺平了道路。",
    "dependsOn": ["mfg_industry40","ene_tribo","mat_2d","tr_hyperloop"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "可回收火箭在 2015 年 前后出现，依托 工业 4.0 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，可回收火箭仍是 人员位移 的底层支撑，并持续影响 忠诚僚机。"
      }
    ],
    "significance": "可回收火箭把 工业 4.0 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 忠诚僚机。"
  },
{
    "id": "tr_lunarlander",
    "name": "月球着陆器",
    "en": "Lunar Lander",
    "category": "transport",
    "era": "info",
    "date": "1960 年",
    "year": 1960,
    "people": "",
    "place": "",
    "summary": "月球着陆器在 1960 年 前后成形，依托 电解磨削、可燃冰、放电等离子烧结 把 人员位移、物资运输 落到实处，并成为 交通运载 中承上启下的一环，直接支撑了 高速铁路、反坦克导弹、激光制导 等后续技术。",
    "dependsOn": ["mfg_ecmg","ene_clathrate","mat_sps","tr_auv"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "月球着陆器在 1960 年 前后出现，依托 电解磨削 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，月球着陆器仍是 人员位移 的底层支撑，并持续影响 高速铁路、反坦克导弹、激光制导。"
      }
    ],
    "significance": "月球着陆器把 电解磨削 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 高速铁路、反坦克导弹、激光制导。"
  },
{
    "id": "inf_pencil",
    "name": "铅笔",
    "en": "Pencil",
    "category": "info",
    "era": "industrial",
    "date": "1795 年",
    "year": 1795,
    "people": "",
    "place": "",
    "summary": "铅笔在 1795 年 前后成形，依托 锆、蒸汽机、数学 把 信息记录、远程传输 落到实处，并成为 信息通信 中承上启下的一环，直接支撑了 复写纸 等后续技术。",
    "dependsOn": ["mat_zirconium","steam_engine","mathematics","printing"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "铅笔在 1795 年 前后出现，依托 锆 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，铅笔仍是 信息记录 的底层支撑，并持续影响 复写纸。"
      }
    ],
    "significance": "铅笔把 锆 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 复写纸。"
  },
{
    "id": "inf_pen",
    "name": "钢笔",
    "en": "Fountain Pen",
    "category": "info",
    "era": "industrial",
    "date": "1884 年",
    "year": 1884,
    "people": "",
    "place": "",
    "summary": "钢笔在 1884 年 前后成形，依托 锰钢、蒸汽轮机、数学 把 信息记录、远程传输 落到实处，并成为 信息通信 中承上启下的一环，直接支撑了 天线 等后续技术。",
    "dependsOn": ["mat_manganese","ene_steamturbine","mathematics","inf_switchboard"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "钢笔在 1884 年 前后出现，依托 锰钢 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，钢笔仍是 信息记录 的底层支撑，并持续影响 天线。"
      }
    ],
    "significance": "钢笔把 锰钢 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 天线。"
  },
{
    "id": "inf_ballpoint",
    "name": "圆珠笔",
    "en": "Ballpoint Pen",
    "category": "info",
    "era": "electrical",
    "date": "1938 年",
    "year": 1938,
    "people": "",
    "place": "",
    "summary": "圆珠笔在 1938 年 前后成形，依托 聚酰胺、喷气发动机、数学 把 信息记录、远程传输 落到实处，并成为 信息通信 中承上启下的一环，直接支撑了 复印机 等后续技术。",
    "dependsOn": ["mat_pa","ene_jet","mathematics","inf_phasedarray"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "圆珠笔在 1938 年 前后出现，依托 聚酰胺 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，圆珠笔仍是 信息记录 的底层支撑，并持续影响 复印机。"
      }
    ],
    "significance": "圆珠笔把 聚酰胺 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 复印机。"
  },
{
    "id": "inf_typewriter",
    "name": "打字机",
    "en": "Typewriter",
    "category": "info",
    "era": "industrial",
    "date": "1868 年",
    "year": 1868,
    "people": "",
    "place": "",
    "summary": "打字机在 1868 年 前后成形，依托 工具钢、铅酸电池、数学 把 信息记录、远程传输 落到实处，并成为 信息通信 中承上启下的一环，直接支撑了 油印 等后续技术。",
    "dependsOn": ["mat_toolsteel","ene_leadacid","mathematics","inf_submarine_cable"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "打字机在 1868 年 前后出现，依托 工具钢 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，打字机仍是 信息记录 的底层支撑，并持续影响 油印。"
      }
    ],
    "significance": "打字机把 工具钢 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 油印。"
  },
{
    "id": "inf_carbonpaper",
    "name": "复写纸",
    "en": "Carbon Paper",
    "category": "info",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "复写纸约 1800 年 出现，建立在 感应熔炼、余热回收、数学 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mat_inductionmelt","ene_wasteheat","mathematics","inf_pencil"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "复写纸在 1800 年 前后出现，依托 感应熔炼 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，复写纸仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "复写纸把 感应熔炼 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_mimeograph",
    "name": "油印",
    "en": "Mimeograph",
    "category": "info",
    "era": "industrial",
    "date": "1870 年",
    "year": 1870,
    "people": "",
    "place": "",
    "summary": "油印约 1870 年 出现，建立在 工具钢、铅酸电池、数学 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mat_toolsteel","ene_leadacid","mathematics","inf_typewriter"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "油印在 1870 年 前后出现，依托 工具钢 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，油印仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "油印把 工具钢 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_photocopier",
    "name": "复印机",
    "en": "Photocopier",
    "category": "info",
    "era": "electrical",
    "date": "1938 年",
    "year": 1938,
    "people": "",
    "place": "",
    "summary": "复印机约 1938 年 成熟，建立在 聚酰胺、喷气发动机、数学 之上完成关键突破；其能力延伸到 信息记录、远程传输，并为 微波中继 的发展铺平了道路。",
    "dependsOn": ["mat_pa","ene_jet","mathematics","inf_ballpoint"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "复印机在 1938 年 前后出现，依托 聚酰胺 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，复印机仍是 信息记录 的底层支撑，并持续影响 微波中继。"
      }
    ],
    "significance": "复印机把 聚酰胺 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 微波中继。"
  },
{
    "id": "inf_fax",
    "name": "传真机",
    "en": "Fax",
    "category": "info",
    "era": "industrial",
    "date": "1843 年",
    "year": 1843,
    "people": "",
    "place": "",
    "summary": "传真机在 1843 年 前后成形，依托 连续铸造、燃料电池、数学 把 信息记录、远程传输 落到实处，并成为 信息通信 中承上启下的一环，直接支撑了 通信电缆 等后续技术。",
    "dependsOn": ["mat_continuouscast","ene_fuelcell","mathematics","photography"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "传真机在 1843 年 前后出现，依托 连续铸造 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，传真机仍是 信息记录 的底层支撑，并持续影响 通信电缆。"
      }
    ],
    "significance": "传真机把 连续铸造 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 通信电缆。"
  },
{
    "id": "inf_telegraph",
    "name": "电报",
    "en": "Telegraph",
    "category": "info",
    "era": "industrial",
    "date": "1837 年",
    "year": 1837,
    "people": "",
    "place": "",
    "summary": "电报约 1837 年 出现，建立在 铝冶炼、电动机、数学 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mat_alu","electric_motor","mathematics","telegraph"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "电报在 1837 年 前后出现，依托 铝冶炼 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，电报仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "电报把 铝冶炼 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_telephone",
    "name": "电话",
    "en": "Telephone",
    "category": "info",
    "era": "industrial",
    "date": "1876 年",
    "year": 1876,
    "people": "",
    "place": "",
    "summary": "电话约 1876 年 成熟，建立在 钢化玻璃、内燃机、数学 之上完成关键突破；其能力延伸到 信息记录、远程传输，并为 黑胶唱片 的发展铺平了道路。",
    "dependsOn": ["mat_tempered","internal_combustion","mathematics","telephone"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "电话在 1876 年 前后出现，依托 钢化玻璃 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，电话仍是 信息记录 的底层支撑，并持续影响 黑胶唱片。"
      }
    ],
    "significance": "电话把 钢化玻璃 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 黑胶唱片。"
  },
{
    "id": "inf_switchboard",
    "name": "电话交换机",
    "en": "Telephone Exchange",
    "category": "info",
    "era": "industrial",
    "date": "1878 年",
    "year": 1878,
    "people": "",
    "place": "",
    "summary": "电话交换机约 1878 年 成熟，建立在 钢化玻璃、区域供冷供热、数学 之上完成关键突破；其能力延伸到 信息记录、远程传输，并为 钢笔 的发展铺平了道路。",
    "dependsOn": ["mat_tempered","ene_district","mathematics","inf_vinyl"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "电话交换机在 1878 年 前后出现，依托 钢化玻璃 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，电话交换机仍是 信息记录 的底层支撑，并持续影响 钢笔。"
      }
    ],
    "significance": "电话交换机把 钢化玻璃 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 钢笔。"
  },
{
    "id": "inf_cable",
    "name": "通信电缆",
    "en": "Communication Cable",
    "category": "info",
    "era": "industrial",
    "date": "1850 年",
    "year": 1850,
    "people": "",
    "place": "",
    "summary": "通信电缆在 1850 年 前后成形，依托 钢筋混凝土、燃料乙醇、数学 把 信息记录、远程传输 落到实处，并成为 信息通信 中承上启下的一环，直接支撑了 海底电缆 等后续技术。",
    "dependsOn": ["mat_reconcrete","ene_ethanol","mathematics","inf_fax"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "通信电缆在 1850 年 前后出现，依托 钢筋混凝土 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，通信电缆仍是 信息记录 的底层支撑，并持续影响 海底电缆。"
      }
    ],
    "significance": "通信电缆把 钢筋混凝土 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 海底电缆。"
  },
{
    "id": "inf_submarine_cable",
    "name": "海底电缆",
    "en": "Submarine Cable",
    "category": "info",
    "era": "industrial",
    "date": "1858 年",
    "year": 1858,
    "people": "",
    "place": "",
    "summary": "海底电缆约 1858 年 成熟，建立在 钢筋混凝土、热泵、数学 之上完成关键突破；其能力延伸到 信息记录、远程传输，并为 打字机 的发展铺平了道路。",
    "dependsOn": ["mat_reconcrete","ene_heatpump","mathematics","inf_cable"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "海底电缆在 1858 年 前后出现，依托 钢筋混凝土 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，海底电缆仍是 信息记录 的底层支撑，并持续影响 打字机。"
      }
    ],
    "significance": "海底电缆把 钢筋混凝土 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 打字机。"
  },
{
    "id": "inf_radio2",
    "name": "无线电广播",
    "en": "Radio Broadcasting",
    "category": "info",
    "era": "electrical",
    "date": "1906 年",
    "year": 1906,
    "people": "",
    "place": "",
    "summary": "无线电广播约 1906 年 出现，建立在 渗硼、调峰电站、数学 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mat_boriding","ene_peaker","mathematics","inf_modulation"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "无线电广播在 1906 年 前后出现，依托 渗硼 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，无线电广播仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "无线电广播把 渗硼 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_tv",
    "name": "电视",
    "en": "Television",
    "category": "info",
    "era": "electrical",
    "date": "1927 年",
    "year": 1927,
    "people": "",
    "place": "",
    "summary": "电视约 1927 年 成熟，建立在 聚氯乙烯、火箭发动机、数学 之上完成关键突破；其能力延伸到 信息记录、远程传输，并为 黑白电视 的发展铺平了道路。",
    "dependsOn": ["mat_pvc","ene_rocketengine","mathematics","television"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "电视在 1927 年 前后出现，依托 聚氯乙烯 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，电视仍是 信息记录 的底层支撑，并持续影响 黑白电视。"
      }
    ],
    "significance": "电视把 聚氯乙烯 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 黑白电视。"
  },
{
    "id": "inf_bw_tv",
    "name": "黑白电视",
    "en": "Black-White TV",
    "category": "info",
    "era": "electrical",
    "date": "1927 年",
    "year": 1927,
    "people": "",
    "place": "",
    "summary": "黑白电视约 1927 年 成熟，建立在 聚氯乙烯、火箭发动机、数学 之上完成关键突破；其能力延伸到 信息记录、远程传输，并为 磁带 的发展铺平了道路。",
    "dependsOn": ["mat_pvc","ene_rocketengine","mathematics","inf_tv"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "黑白电视在 1927 年 前后出现，依托 聚氯乙烯 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，黑白电视仍是 信息记录 的底层支撑，并持续影响 磁带。"
      }
    ],
    "significance": "黑白电视把 聚氯乙烯 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 磁带。"
  },
{
    "id": "inf_color_tv",
    "name": "彩色电视",
    "en": "Color TV",
    "category": "info",
    "era": "info",
    "date": "1953 年",
    "year": 1953,
    "people": "",
    "place": "",
    "summary": "彩色电视约 1953 年 成熟，建立在 聚碳酸酯、压水堆、数学 之上完成关键突破；其能力延伸到 信息记录、远程传输，并为 哈希函数 的发展铺平了道路。",
    "dependsOn": ["mat_pc","ene_pwr","mathematics","inf_asr"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "彩色电视在 1953 年 前后出现，依托 聚碳酸酯 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，彩色电视仍是 信息记录 的底层支撑，并持续影响 哈希函数。"
      }
    ],
    "significance": "彩色电视把 聚碳酸酯 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 哈希函数。"
  },
{
    "id": "inf_vcr",
    "name": "录像机",
    "en": "VCR",
    "category": "info",
    "era": "info",
    "date": "1956 年",
    "year": 1956,
    "people": "",
    "place": "",
    "summary": "录像机在 1956 年 前后成形，依托 聚丙烯、沸水堆、数学 把 信息记录、远程传输 落到实处，并成为 信息通信 中承上启下的一环，直接支撑了 硬盘 等后续技术。",
    "dependsOn": ["mat_pp","ene_bwr","mathematics","ai"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "录像机在 1956 年 前后出现，依托 聚丙烯 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，录像机仍是 信息记录 的底层支撑，并持续影响 硬盘。"
      }
    ],
    "significance": "录像机把 聚丙烯 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 硬盘。"
  },
{
    "id": "inf_camcorder",
    "name": "摄像机",
    "en": "Camcorder",
    "category": "info",
    "era": "info",
    "date": "1980 年",
    "year": 1980,
    "people": "",
    "place": "",
    "summary": "摄像机约 1980 年 成熟，建立在 激光熔覆、碟式斯特林、数学 之上完成关键突破；其能力延伸到 信息记录、远程传输，并为 闪存 的发展铺平了道路。",
    "dependsOn": ["mat_laserclad","ene_dishstirling","mathematics","inf_digitalsig"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "摄像机在 1980 年 前后出现，依托 激光熔覆 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，摄像机仍是 信息记录 的底层支撑，并持续影响 闪存。"
      }
    ],
    "significance": "摄像机把 激光熔覆 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 闪存。"
  },
{
    "id": "inf_vinyl",
    "name": "黑胶唱片",
    "en": "Vinyl Record",
    "category": "info",
    "era": "industrial",
    "date": "1877 年",
    "year": 1877,
    "people": "",
    "place": "",
    "summary": "黑胶唱片约 1877 年 成熟，建立在 钢化玻璃、区域供冷供热、数学 之上完成关键突破；其能力延伸到 信息记录、远程传输，并为 电话交换机 的发展铺平了道路。",
    "dependsOn": ["mat_tempered","ene_district","mathematics","inf_telephone"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "黑胶唱片在 1877 年 前后出现，依托 钢化玻璃 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，黑胶唱片仍是 信息记录 的底层支撑，并持续影响 电话交换机。"
      }
    ],
    "significance": "黑胶唱片把 钢化玻璃 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 电话交换机。"
  },
{
    "id": "inf_tape",
    "name": "磁带",
    "en": "Magnetic Tape",
    "category": "info",
    "era": "electrical",
    "date": "1928 年",
    "year": 1928,
    "people": "",
    "place": "",
    "summary": "磁带约 1928 年 成熟，建立在 聚氯乙烯、火箭发动机、数学 之上完成关键突破；其能力延伸到 信息记录、远程传输，并为 相控阵 的发展铺平了道路。",
    "dependsOn": ["mat_pvc","ene_rocketengine","mathematics","inf_bw_tv"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "磁带在 1928 年 前后出现，依托 聚氯乙烯 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，磁带仍是 信息记录 的底层支撑，并持续影响 相控阵。"
      }
    ],
    "significance": "磁带把 聚氯乙烯 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 相控阵。"
  },
{
    "id": "inf_microprocessor",
    "name": "微处理器",
    "en": "Microprocessor",
    "category": "info",
    "era": "info",
    "date": "1971 年",
    "year": 1971,
    "people": "",
    "place": "",
    "summary": "微处理器约 1971 年 成熟，建立在 储氢合金、水热型地热、数学 之上完成关键突破；其能力延伸到 信息记录、远程传输，并为 软盘 的发展铺平了道路。",
    "dependsOn": ["mat_hydrogenstorage","ene_hydrothermal","mathematics","inf_wan"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "微处理器在 1971 年 前后出现，依托 储氢合金 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，微处理器仍是 信息记录 的底层支撑，并持续影响 软盘。"
      }
    ],
    "significance": "微处理器把 储氢合金 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 软盘。"
  },
{
    "id": "inf_ram",
    "name": "内存",
    "en": "RAM",
    "category": "info",
    "era": "electrical",
    "date": "1947 年",
    "year": 1947,
    "people": "",
    "place": "",
    "summary": "内存约 1947 年 成熟，建立在 半导体材料、核裂变反应堆、数学 之上完成关键突破；其能力延伸到 信息记录、远程传输，并为 条形码 的发展铺平了道路。",
    "dependsOn": ["semiconductors","ene_nuclear","mathematics","transistor"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "内存在 1947 年 前后出现，依托 半导体材料 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，内存仍是 信息记录 的底层支撑，并持续影响 条形码。"
      }
    ],
    "significance": "内存把 半导体材料 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 条形码。"
  },
{
    "id": "inf_hdd",
    "name": "硬盘",
    "en": "Hard Disk",
    "category": "info",
    "era": "info",
    "date": "1956 年",
    "year": 1956,
    "people": "",
    "place": "",
    "summary": "硬盘约 1956 年 成熟，建立在 聚丙烯、沸水堆、数学 之上完成关键突破；其能力延伸到 信息记录、远程传输，并为 Fortran 的发展铺平了道路。",
    "dependsOn": ["mat_pp","ene_bwr","mathematics","inf_vcr"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "硬盘在 1956 年 前后出现，依托 聚丙烯 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，硬盘仍是 信息记录 的底层支撑，并持续影响 Fortran。"
      }
    ],
    "significance": "硬盘把 聚丙烯 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 Fortran。"
  },
{
    "id": "inf_floppy",
    "name": "软盘",
    "en": "Floppy Disk",
    "category": "info",
    "era": "info",
    "date": "1971 年",
    "year": 1971,
    "people": "",
    "place": "",
    "summary": "软盘约 1971 年 成熟，建立在 储氢合金、水热型地热、数学 之上完成关键突破；其能力延伸到 信息记录、远程传输，并为 电子邮件 的发展铺平了道路。",
    "dependsOn": ["mat_hydrogenstorage","ene_hydrothermal","mathematics","inf_microprocessor"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "软盘在 1971 年 前后出现，依托 储氢合金 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，软盘仍是 信息记录 的底层支撑，并持续影响 电子邮件。"
      }
    ],
    "significance": "软盘把 储氢合金 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 电子邮件。"
  },
{
    "id": "inf_flash",
    "name": "闪存",
    "en": "Flash Memory",
    "category": "info",
    "era": "info",
    "date": "1980 年",
    "year": 1980,
    "people": "",
    "place": "",
    "summary": "闪存约 1980 年 成熟，建立在 激光熔覆、碟式斯特林、数学 之上完成关键突破；其能力延伸到 信息记录、远程传输，并为 路由器 的发展铺平了道路。",
    "dependsOn": ["mat_laserclad","ene_dishstirling","mathematics","inf_camcorder"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "闪存在 1980 年 前后出现，依托 激光熔覆 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，闪存仍是 信息记录 的底层支撑，并持续影响 路由器。"
      }
    ],
    "significance": "闪存把 激光熔覆 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 路由器。"
  },
{
    "id": "inf_usb",
    "name": "U 盘",
    "en": "USB Drive",
    "category": "info",
    "era": "intelligent",
    "date": "2000 年",
    "year": 2000,
    "people": "",
    "place": "",
    "summary": "U 盘约 2000 年 成熟，建立在 自修复材料、井式地热、数学 之上完成关键突破；其能力延伸到 信息记录、远程传输，并为 NoSQL 的发展铺平了道路。",
    "dependsOn": ["mat_selfheal","ene_borehole","mathematics","inf_iot"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "U 盘在 2000 年 前后出现，依托 自修复材料 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，U 盘仍是 信息记录 的底层支撑，并持续影响 NoSQL。"
      }
    ],
    "significance": "U 盘把 自修复材料 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 NoSQL。"
  },
{
    "id": "inf_ssd",
    "name": "固态硬盘",
    "en": "SSD",
    "category": "info",
    "era": "info",
    "date": "1991 年",
    "year": 1991,
    "people": "",
    "place": "",
    "summary": "固态硬盘约 1991 年 成熟，建立在 金属有机框架、锂离子电池、数学 之上完成关键突破；其能力延伸到 信息记录、远程传输，并为 Python 的发展铺平了道路。",
    "dependsOn": ["mat_mof","ene_liion","mathematics","www"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "固态硬盘在 1991 年 前后出现，依托 金属有机框架 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，固态硬盘仍是 信息记录 的底层支撑，并持续影响 Python。"
      }
    ],
    "significance": "固态硬盘把 金属有机框架 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 Python。"
  },
{
    "id": "inf_os",
    "name": "操作系统",
    "en": "Operating System",
    "category": "info",
    "era": "info",
    "date": "1950 年",
    "year": 1950,
    "people": "",
    "place": "",
    "summary": "操作系统约 1950 年 成熟，建立在 泡沫金属、盐差能、数学 之上完成关键突破；其能力延伸到 信息记录、远程传输，并为 自然语言处理 的发展铺平了道路。",
    "dependsOn": ["mat_foammetal","ene_salinity","mathematics","inf_ecc"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "操作系统在 1950 年 前后出现，依托 泡沫金属 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，操作系统仍是 信息记录 的底层支撑，并持续影响 自然语言处理。"
      }
    ],
    "significance": "操作系统把 泡沫金属 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 自然语言处理。"
  },
{
    "id": "inf_compiler",
    "name": "编译器",
    "en": "Compiler",
    "category": "info",
    "era": "info",
    "date": "1952 年",
    "year": 1952,
    "people": "",
    "place": "",
    "summary": "编译器在 1952 年 前后成形，依托 浮法玻璃、核聚变、数学 把 信息记录、远程传输 落到实处，并成为 信息通信 中承上启下的一环，直接支撑了 语音识别 等后续技术。",
    "dependsOn": ["mat_floatglass","nuclear_fusion","mathematics","inf_rl"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "编译器在 1952 年 前后出现，依托 浮法玻璃 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，编译器仍是 信息记录 的底层支撑，并持续影响 语音识别。"
      }
    ],
    "significance": "编译器把 浮法玻璃 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 语音识别。"
  },
{
    "id": "inf_pl_fortran",
    "name": "Fortran",
    "en": "Fortran",
    "category": "info",
    "era": "info",
    "date": "1957 年",
    "year": 1957,
    "people": "",
    "place": "",
    "summary": "Fortran约 1957 年 出现，建立在 聚丙烯、超级电容、数学 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mat_pp","ene_supercap","mathematics","inf_hdd"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "Fortran在 1957 年 前后出现，依托 聚丙烯 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，Fortran仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "Fortran把 聚丙烯 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_pl_c",
    "name": "C 语言",
    "en": "C Language",
    "category": "info",
    "era": "info",
    "date": "1972 年",
    "year": 1972,
    "people": "",
    "place": "",
    "summary": "C 语言约 1972 年 成熟，建立在 储氢合金、水热型地热、数学 之上完成关键突破；其能力延伸到 信息记录、远程传输，并为 版本控制 的发展铺平了道路。",
    "dependsOn": ["mat_hydrogenstorage","ene_hydrothermal","mathematics","inf_email"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "C 语言在 1972 年 前后出现，依托 储氢合金 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，C 语言仍是 信息记录 的底层支撑，并持续影响 版本控制。"
      }
    ],
    "significance": "C 语言把 储氢合金 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 版本控制。"
  },
{
    "id": "inf_pl_python",
    "name": "Python",
    "en": "Python",
    "category": "info",
    "era": "info",
    "date": "1991 年",
    "year": 1991,
    "people": "",
    "place": "",
    "summary": "Python在 1991 年 前后成形，依托 金属有机框架、锂离子电池、数学 把 信息记录、远程传输 落到实处，并成为 信息通信 中承上启下的一环，直接支撑了 协同过滤 等后续技术。",
    "dependsOn": ["mat_mof","ene_liion","mathematics","inf_ssd"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "Python在 1991 年 前后出现，依托 金属有机框架 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，Python仍是 信息记录 的底层支撑，并持续影响 协同过滤。"
      }
    ],
    "significance": "Python把 金属有机框架 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 协同过滤。"
  },
{
    "id": "inf_db",
    "name": "数据库",
    "en": "Database",
    "category": "info",
    "era": "info",
    "date": "1960 年",
    "year": 1960,
    "people": "",
    "place": "",
    "summary": "数据库约 1960 年 成熟，建立在 放电等离子烧结、可燃冰、数学 之上完成关键突破；其能力延伸到 信息记录、远程传输，并为 地理信息系统 的发展铺平了道路。",
    "dependsOn": ["mat_sps","ene_clathrate","mathematics","lasers"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "数据库在 1960 年 前后出现，依托 放电等离子烧结 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，数据库仍是 信息记录 的底层支撑，并持续影响 地理信息系统。"
      }
    ],
    "significance": "数据库把 放电等离子烧结 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 地理信息系统。"
  },
{
    "id": "inf_rdbms",
    "name": "关系型数据库",
    "en": "RDBMS",
    "category": "info",
    "era": "info",
    "date": "1970 年",
    "year": 1970,
    "people": "",
    "place": "",
    "summary": "关系型数据库约 1970 年 成熟，建立在 储氢合金、水热型地热、数学 之上完成关键突破；其能力延伸到 信息记录、远程传输，并为 光纤通信 的发展铺平了道路。",
    "dependsOn": ["mat_hydrogenstorage","ene_hydrothermal","mathematics","touchscreen"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "关系型数据库在 1970 年 前后出现，依托 储氢合金 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，关系型数据库仍是 信息记录 的底层支撑，并持续影响 光纤通信。"
      }
    ],
    "significance": "关系型数据库把 储氢合金 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 光纤通信。"
  },
{
    "id": "inf_sql",
    "name": "SQL",
    "en": "SQL",
    "category": "info",
    "era": "info",
    "date": "1974 年",
    "year": 1974,
    "people": "",
    "place": "",
    "summary": "SQL约 1974 年 出现，建立在 储氢合金、水热型地热、数学 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mat_hydrogenstorage","ene_hydrothermal","mathematics","inf_git"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "SQL在 1974 年 前后出现，依托 储氢合金 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，SQL仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "SQL把 储氢合金 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_nosql",
    "name": "NoSQL",
    "en": "NoSQL",
    "category": "info",
    "era": "intelligent",
    "date": "2000 年",
    "year": 2000,
    "people": "",
    "place": "",
    "summary": "NoSQL在 2000 年 前后成形，依托 自修复材料、井式地热、数学 把 信息记录、远程传输 落到实处，并成为 信息通信 中承上启下的一环，直接支撑了 社交网络 等后续技术。",
    "dependsOn": ["mat_selfheal","ene_borehole","mathematics","inf_usb"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "NoSQL在 2000 年 前后出现，依托 自修复材料 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，NoSQL仍是 信息记录 的底层支撑，并持续影响 社交网络。"
      }
    ],
    "significance": "NoSQL把 自修复材料 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 社交网络。"
  },
{
    "id": "inf_search",
    "name": "搜索引擎",
    "en": "Search Engine",
    "category": "info",
    "era": "info",
    "date": "1990 年",
    "year": 1990,
    "people": "",
    "place": "",
    "summary": "搜索引擎约 1990 年 成熟，建立在 金属有机框架、燃料电池汽车、数学 之上完成关键突破；其能力延伸到 信息记录、远程传输，并为 网页浏览器 的发展铺平了道路。",
    "dependsOn": ["mat_mof","ene_fuelcellcar","mathematics","inf_zeroknowledge"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "搜索引擎在 1990 年 前后出现，依托 金属有机框架 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，搜索引擎仍是 信息记录 的底层支撑，并持续影响 网页浏览器。"
      }
    ],
    "significance": "搜索引擎把 金属有机框架 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 网页浏览器。"
  },
{
    "id": "inf_browser",
    "name": "网页浏览器",
    "en": "Web Browser",
    "category": "info",
    "era": "info",
    "date": "1990 年",
    "year": 1990,
    "people": "",
    "place": "",
    "summary": "网页浏览器约 1990 年 成熟，建立在 金属有机框架、燃料电池汽车、数学 之上完成关键突破；其能力延伸到 信息记录、远程传输，并为 推荐系统 的发展铺平了道路。",
    "dependsOn": ["mat_mof","ene_fuelcellcar","mathematics","inf_search"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "网页浏览器在 1990 年 前后出现，依托 金属有机框架 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，网页浏览器仍是 信息记录 的底层支撑，并持续影响 推荐系统。"
      }
    ],
    "significance": "网页浏览器把 金属有机框架 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 推荐系统。"
  },
{
    "id": "inf_email",
    "name": "电子邮件",
    "en": "Email",
    "category": "info",
    "era": "info",
    "date": "1971 年",
    "year": 1971,
    "people": "",
    "place": "",
    "summary": "电子邮件约 1971 年 成熟，建立在 储氢合金、水热型地热、数学 之上完成关键突破；其能力延伸到 信息记录、远程传输，并为 C 语言 的发展铺平了道路。",
    "dependsOn": ["mat_hydrogenstorage","ene_hydrothermal","mathematics","inf_floppy"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "电子邮件在 1971 年 前后出现，依托 储氢合金 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，电子邮件仍是 信息记录 的底层支撑，并持续影响 C 语言。"
      }
    ],
    "significance": "电子邮件把 储氢合金 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 C 语言。"
  },
{
    "id": "inf_im",
    "name": "即时通讯",
    "en": "Instant Messaging",
    "category": "info",
    "era": "info",
    "date": "1996 年",
    "year": 1996,
    "people": "",
    "place": "",
    "summary": "即时通讯约 1996 年 成熟，建立在 金属有机框架、锂聚合物电池、数学 之上完成关键突破；其能力延伸到 信息记录、远程传输，并为 虚拟专网 的发展铺平了道路。",
    "dependsOn": ["mat_mof","ene_lipoly","mathematics","inf_qrcode"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "即时通讯在 1996 年 前后出现，依托 金属有机框架 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，即时通讯仍是 信息记录 的底层支撑，并持续影响 虚拟专网。"
      }
    ],
    "significance": "即时通讯把 金属有机框架 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 虚拟专网。"
  },
{
    "id": "inf_social",
    "name": "社交网络",
    "en": "Social Network",
    "category": "info",
    "era": "intelligent",
    "date": "2000 年",
    "year": 2000,
    "people": "",
    "place": "",
    "summary": "社交网络在 2000 年 前后成形，依托 自修复材料、井式地热、数学 把 信息记录、远程传输 落到实处，并成为 信息通信 中承上启下的一环，直接支撑了 边缘计算 等后续技术。",
    "dependsOn": ["mat_selfheal","ene_borehole","mathematics","inf_nosql"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "社交网络在 2000 年 前后出现，依托 自修复材料 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，社交网络仍是 信息记录 的底层支撑，并持续影响 边缘计算。"
      }
    ],
    "significance": "社交网络把 自修复材料 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 边缘计算。"
  },
{
    "id": "inf_wifi",
    "name": "Wi-Fi",
    "en": "Wi-Fi",
    "category": "info",
    "era": "info",
    "date": "1997 年",
    "year": 1997,
    "people": "",
    "place": "",
    "summary": "Wi-Fi在 1997 年 前后成形，依托 金属有机框架、锂聚合物电池、数学 把 信息记录、远程传输 落到实处，并成为 信息通信 中承上启下的一环，直接支撑了 统一建模语言 等后续技术。",
    "dependsOn": ["mat_mof","ene_lipoly","mathematics","inf_vpn"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "Wi-Fi在 1997 年 前后出现，依托 金属有机框架 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，Wi-Fi仍是 信息记录 的底层支撑，并持续影响 统一建模语言。"
      }
    ],
    "significance": "Wi-Fi把 金属有机框架 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 统一建模语言。"
  },
{
    "id": "inf_bluetooth",
    "name": "蓝牙",
    "en": "Bluetooth",
    "category": "info",
    "era": "info",
    "date": "1994 年",
    "year": 1994,
    "people": "",
    "place": "",
    "summary": "蓝牙约 1994 年 成熟，建立在 金属有机框架、锂离子电池、数学 之上完成关键突破；其能力延伸到 信息记录、远程传输，并为 二维码 的发展铺平了道路。",
    "dependsOn": ["mat_mof","ene_liion","mathematics","inf_recommend2"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "蓝牙在 1994 年 前后出现，依托 金属有机框架 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，蓝牙仍是 信息记录 的底层支撑，并持续影响 二维码。"
      }
    ],
    "significance": "蓝牙把 金属有机框架 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 二维码。"
  },
{
    "id": "inf_5g",
    "name": "5G",
    "en": "5G",
    "category": "info",
    "era": "intelligent",
    "date": "2018 年",
    "year": 2018,
    "people": "",
    "place": "",
    "summary": "5G约 2018 年 成熟，建立在 二维材料、摩擦纳米发电、数学 之上完成关键突破；其能力延伸到 信息记录、远程传输，并为 大语言模型 的发展铺平了道路。",
    "dependsOn": ["mat_2d","ene_tribo","mathematics","inf_transformer"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "5G在 2018 年 前后出现，依托 二维材料 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，5G仍是 信息记录 的底层支撑，并持续影响 大语言模型。"
      }
    ],
    "significance": "5G把 二维材料 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 大语言模型。"
  },
{
    "id": "inf_6g",
    "name": "6G",
    "en": "6G",
    "category": "info",
    "era": "intelligent",
    "date": "2020 年",
    "year": 2020,
    "people": "",
    "place": "",
    "summary": "6G在 2020 年 前后成形，依托 二维材料、摩擦纳米发电、数学 把 信息记录、远程传输 落到实处，并成为 信息通信 中承上启下的一环，直接支撑了 量子互联网 等后续技术。",
    "dependsOn": ["mat_2d","ene_tribo","mathematics","inf_llm"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "6G在 2020 年 前后出现，依托 二维材料 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，6G仍是 信息记录 的底层支撑，并持续影响 量子互联网。"
      }
    ],
    "significance": "6G把 二维材料 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 量子互联网。"
  },
{
    "id": "inf_fiber",
    "name": "光纤通信",
    "en": "Fiber Optics Comms",
    "category": "info",
    "era": "info",
    "date": "1970 年",
    "year": 1970,
    "people": "",
    "place": "",
    "summary": "光纤通信约 1970 年 成熟，建立在 储氢合金、水热型地热、数学 之上完成关键突破；其能力延伸到 信息记录、远程传输，并为 局域网 的发展铺平了道路。",
    "dependsOn": ["mat_hydrogenstorage","ene_hydrothermal","mathematics","inf_rdbms"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "光纤通信在 1970 年 前后出现，依托 储氢合金 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，光纤通信仍是 信息记录 的底层支撑，并持续影响 局域网。"
      }
    ],
    "significance": "光纤通信把 储氢合金 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 局域网。"
  },
{
    "id": "inf_microwave",
    "name": "微波中继",
    "en": "Microwave Relay",
    "category": "info",
    "era": "electrical",
    "date": "1940 年",
    "year": 1940,
    "people": "",
    "place": "",
    "summary": "微波中继约 1940 年 出现，建立在 电渣重熔、燃气轮机、数学 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mat_esr","ene_gasturbine","mathematics","inf_photocopier"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "微波中继在 1940 年 前后出现，依托 电渣重熔 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，微波中继仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "微波中继把 电渣重熔 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_modem",
    "name": "调制解调器",
    "en": "Modem",
    "category": "info",
    "era": "info",
    "date": "1958 年",
    "year": 1958,
    "people": "",
    "place": "",
    "summary": "调制解调器约 1958 年 成熟，建立在 碳纤维、超级电容、数学 之上完成关键突破；其能力延伸到 信息记录、远程传输，并为 神经网络 的发展铺平了道路。",
    "dependsOn": ["mat_cf","ene_supercap","mathematics","ic"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "调制解调器在 1958 年 前后出现，依托 碳纤维 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，调制解调器仍是 信息记录 的底层支撑，并持续影响 神经网络。"
      }
    ],
    "significance": "调制解调器把 碳纤维 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 神经网络。"
  },
{
    "id": "inf_router",
    "name": "路由器",
    "en": "Router",
    "category": "info",
    "era": "info",
    "date": "1980 年",
    "year": 1980,
    "people": "",
    "place": "",
    "summary": "路由器在 1980 年 前后成形，依托 激光熔覆、碟式斯特林、数学 把 信息记录、远程传输 落到实处，并成为 信息通信 中承上启下的一环，直接支撑了 网络交换机 等后续技术。",
    "dependsOn": ["mat_laserclad","ene_dishstirling","mathematics","inf_flash"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "路由器在 1980 年 前后出现，依托 激光熔覆 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，路由器仍是 信息记录 的底层支撑，并持续影响 网络交换机。"
      }
    ],
    "significance": "路由器把 激光熔覆 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 网络交换机。"
  },
{
    "id": "inf_net_switch",
    "name": "网络交换机",
    "en": "Network Switch",
    "category": "info",
    "era": "info",
    "date": "1980 年",
    "year": 1980,
    "people": "",
    "place": "",
    "summary": "网络交换机约 1980 年 成熟，建立在 激光熔覆、碟式斯特林、数学 之上完成关键突破；其能力延伸到 信息记录、远程传输，并为 无线传感网 的发展铺平了道路。",
    "dependsOn": ["mat_laserclad","ene_dishstirling","mathematics","inf_router"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "网络交换机在 1980 年 前后出现，依托 激光熔覆 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，网络交换机仍是 信息记录 的底层支撑，并持续影响 无线传感网。"
      }
    ],
    "significance": "网络交换机把 激光熔覆 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 无线传感网。"
  },
{
    "id": "inf_lan",
    "name": "局域网",
    "en": "LAN",
    "category": "info",
    "era": "info",
    "date": "1970 年",
    "year": 1970,
    "people": "",
    "place": "",
    "summary": "局域网在 1970 年 前后成形，依托 储氢合金、水热型地热、数学 把 信息记录、远程传输 落到实处，并成为 信息通信 中承上启下的一环，直接支撑了 广域网 等后续技术。",
    "dependsOn": ["mat_hydrogenstorage","ene_hydrothermal","mathematics","inf_fiber"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "局域网在 1970 年 前后出现，依托 储氢合金 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，局域网仍是 信息记录 的底层支撑，并持续影响 广域网。"
      }
    ],
    "significance": "局域网把 储氢合金 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 广域网。"
  },
{
    "id": "inf_wan",
    "name": "广域网",
    "en": "WAN",
    "category": "info",
    "era": "info",
    "date": "1970 年",
    "year": 1970,
    "people": "",
    "place": "",
    "summary": "广域网约 1970 年 成熟，建立在 储氢合金、水热型地热、数学 之上完成关键突破；其能力延伸到 信息记录、远程传输，并为 微处理器 的发展铺平了道路。",
    "dependsOn": ["mat_hydrogenstorage","ene_hydrothermal","mathematics","inf_lan"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "广域网在 1970 年 前后出现，依托 储氢合金 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，广域网仍是 信息记录 的底层支撑，并持续影响 微处理器。"
      }
    ],
    "significance": "广域网把 储氢合金 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 微处理器。"
  },
{
    "id": "inf_vpn",
    "name": "虚拟专网",
    "en": "VPN",
    "category": "info",
    "era": "info",
    "date": "1996 年",
    "year": 1996,
    "people": "",
    "place": "",
    "summary": "虚拟专网约 1996 年 成熟，建立在 金属有机框架、锂聚合物电池、数学 之上完成关键突破；其能力延伸到 信息记录、远程传输，并为 Wi-Fi 的发展铺平了道路。",
    "dependsOn": ["mat_mof","ene_lipoly","mathematics","inf_im"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "虚拟专网在 1996 年 前后出现，依托 金属有机框架 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，虚拟专网仍是 信息记录 的底层支撑，并持续影响 Wi-Fi。"
      }
    ],
    "significance": "虚拟专网把 金属有机框架 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 Wi-Fi。"
  },
{
    "id": "inf_blockchain",
    "name": "区块链",
    "en": "Blockchain",
    "category": "info",
    "era": "intelligent",
    "date": "2008 年",
    "year": 2008,
    "people": "",
    "place": "",
    "summary": "区块链约 2008 年 成熟，建立在 二维材料、井式地热、数学 之上完成关键突破；其能力延伸到 信息记录、远程传输，并为 同态加密 的发展铺平了道路。",
    "dependsOn": ["mat_2d","ene_borehole","mathematics","inf_knowledge"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "区块链在 2008 年 前后出现，依托 二维材料 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，区块链仍是 信息记录 的底层支撑，并持续影响 同态加密。"
      }
    ],
    "significance": "区块链把 二维材料 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 同态加密。"
  },
{
    "id": "inf_pubkey",
    "name": "公钥密码",
    "en": "Public-Key Crypto",
    "category": "info",
    "era": "info",
    "date": "1976 年",
    "year": 1976,
    "people": "",
    "place": "",
    "summary": "公钥密码约 1976 年 成熟，建立在 储氢合金、水热型地热、数学 之上完成关键突破；其能力延伸到 信息记录、远程传输，并为 数字签名 的发展铺平了道路。",
    "dependsOn": ["mat_hydrogenstorage","ene_hydrothermal","mathematics","camera"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "公钥密码在 1976 年 前后出现，依托 储氢合金 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，公钥密码仍是 信息记录 的底层支撑，并持续影响 数字签名。"
      }
    ],
    "significance": "公钥密码把 储氢合金 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 数字签名。"
  },
{
    "id": "inf_symenc",
    "name": "对称加密",
    "en": "Symmetric Crypto",
    "category": "info",
    "era": "electrical",
    "date": "1949 年",
    "year": 1949,
    "people": "",
    "place": "",
    "summary": "对称加密在 1949 年 前后成形，依托 ABS 树脂、压缩空气储能、数学 把 信息记录、远程传输 落到实处，并成为 信息通信 中承上启下的一环，直接支撑了 纠错码 等后续技术。",
    "dependsOn": ["mat_abs","ene_caes","mathematics","inf_rfid"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "对称加密在 1949 年 前后出现，依托 ABS 树脂 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，对称加密仍是 信息记录 的底层支撑，并持续影响 纠错码。"
      }
    ],
    "significance": "对称加密把 ABS 树脂 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 纠错码。"
  },
{
    "id": "inf_hash",
    "name": "哈希函数",
    "en": "Hash Function",
    "category": "info",
    "era": "info",
    "date": "1953 年",
    "year": 1953,
    "people": "",
    "place": "",
    "summary": "哈希函数约 1953 年 成熟，建立在 聚碳酸酯、压水堆、数学 之上完成关键突破；其能力延伸到 信息记录、远程传输，并为 机器翻译 的发展铺平了道路。",
    "dependsOn": ["mat_pc","ene_pwr","mathematics","inf_color_tv"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "哈希函数在 1953 年 前后出现，依托 聚碳酸酯 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，哈希函数仍是 信息记录 的底层支撑，并持续影响 机器翻译。"
      }
    ],
    "significance": "哈希函数把 聚碳酸酯 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 机器翻译。"
  },
{
    "id": "inf_digitalsig",
    "name": "数字签名",
    "en": "Digital Signature",
    "category": "info",
    "era": "info",
    "date": "1976 年",
    "year": 1976,
    "people": "",
    "place": "",
    "summary": "数字签名在 1976 年 前后成形，依托 储氢合金、水热型地热、数学 把 信息记录、远程传输 落到实处，并成为 信息通信 中承上启下的一环，直接支撑了 摄像机 等后续技术。",
    "dependsOn": ["mat_hydrogenstorage","ene_hydrothermal","mathematics","inf_pubkey"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "数字签名在 1976 年 前后出现，依托 储氢合金 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，数字签名仍是 信息记录 的底层支撑，并持续影响 摄像机。"
      }
    ],
    "significance": "数字签名把 储氢合金 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 摄像机。"
  },
{
    "id": "inf_qrcode",
    "name": "二维码",
    "en": "QR Code",
    "category": "info",
    "era": "info",
    "date": "1994 年",
    "year": 1994,
    "people": "",
    "place": "",
    "summary": "二维码约 1994 年 成熟，建立在 金属有机框架、锂离子电池、数学 之上完成关键突破；其能力延伸到 信息记录、远程传输，并为 即时通讯 的发展铺平了道路。",
    "dependsOn": ["mat_mof","ene_liion","mathematics","inf_bluetooth"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "二维码在 1994 年 前后出现，依托 金属有机框架 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，二维码仍是 信息记录 的底层支撑，并持续影响 即时通讯。"
      }
    ],
    "significance": "二维码把 金属有机框架 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 即时通讯。"
  },
{
    "id": "inf_barcode",
    "name": "条形码",
    "en": "Barcode",
    "category": "info",
    "era": "electrical",
    "date": "1948 年",
    "year": 1948,
    "people": "",
    "place": "",
    "summary": "条形码约 1948 年 成熟，建立在 ABS 树脂、核裂变反应堆、数学 之上完成关键突破；其能力延伸到 信息记录、远程传输，并为 射频识别 的发展铺平了道路。",
    "dependsOn": ["mat_abs","ene_nuclear","mathematics","inf_ram"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "条形码在 1948 年 前后出现，依托 ABS 树脂 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，条形码仍是 信息记录 的底层支撑，并持续影响 射频识别。"
      }
    ],
    "significance": "条形码把 ABS 树脂 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 射频识别。"
  },
{
    "id": "inf_rfid",
    "name": "射频识别",
    "en": "RFID",
    "category": "info",
    "era": "electrical",
    "date": "1948 年",
    "year": 1948,
    "people": "",
    "place": "",
    "summary": "射频识别在 1948 年 前后成形，依托 ABS 树脂、核裂变反应堆、数学 把 信息记录、远程传输 落到实处，并成为 信息通信 中承上启下的一环，直接支撑了 对称加密 等后续技术。",
    "dependsOn": ["mat_abs","ene_nuclear","mathematics","inf_barcode"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "射频识别在 1948 年 前后出现，依托 ABS 树脂 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，射频识别仍是 信息记录 的底层支撑，并持续影响 对称加密。"
      }
    ],
    "significance": "射频识别把 ABS 树脂 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 对称加密。"
  },
{
    "id": "inf_sensor_net",
    "name": "无线传感网",
    "en": "WSN",
    "category": "info",
    "era": "info",
    "date": "1980 年",
    "year": 1980,
    "people": "",
    "place": "",
    "summary": "无线传感网约 1980 年 成熟，建立在 激光熔覆、碟式斯特林、数学 之上完成关键突破；其能力延伸到 信息记录、远程传输，并为 量子通信 的发展铺平了道路。",
    "dependsOn": ["mat_laserclad","ene_dishstirling","mathematics","inf_net_switch"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "无线传感网在 1980 年 前后出现，依托 激光熔覆 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，无线传感网仍是 信息记录 的底层支撑，并持续影响 量子通信。"
      }
    ],
    "significance": "无线传感网把 激光熔覆 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 量子通信。"
  },
{
    "id": "inf_iot",
    "name": "物联网",
    "en": "IoT",
    "category": "info",
    "era": "info",
    "date": "1999 年",
    "year": 1999,
    "people": "",
    "place": "",
    "summary": "物联网约 1999 年 成熟，建立在 金属有机框架、锂聚合物电池、数学 之上完成关键突破；其能力延伸到 信息记录、远程传输，并为 U 盘 的发展铺平了道路。",
    "dependsOn": ["mat_mof","ene_lipoly","mathematics","inf_uml"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "物联网在 1999 年 前后出现，依托 金属有机框架 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，物联网仍是 信息记录 的底层支撑，并持续影响 U 盘。"
      }
    ],
    "significance": "物联网把 金属有机框架 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 U 盘。"
  },
{
    "id": "inf_edge",
    "name": "边缘计算",
    "en": "Edge Computing",
    "category": "info",
    "era": "intelligent",
    "date": "2000 年",
    "year": 2000,
    "people": "",
    "place": "",
    "summary": "边缘计算在 2000 年 前后成形，依托 自修复材料、井式地热、数学 把 信息记录、远程传输 落到实处，并成为 信息通信 中承上启下的一环，直接支撑了 云计算 等后续技术。",
    "dependsOn": ["mat_selfheal","ene_borehole","mathematics","inf_social"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "边缘计算在 2000 年 前后出现，依托 自修复材料 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，边缘计算仍是 信息记录 的底层支撑，并持续影响 云计算。"
      }
    ],
    "significance": "边缘计算把 自修复材料 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 云计算。"
  },
{
    "id": "inf_cloud",
    "name": "云计算",
    "en": "Cloud Computing",
    "category": "info",
    "era": "intelligent",
    "date": "2000 年",
    "year": 2000,
    "people": "",
    "place": "",
    "summary": "云计算在 2000 年 前后成形，依托 自修复材料、井式地热、数学 把 信息记录、远程传输 落到实处，并成为 信息通信 中承上启下的一环，直接支撑了 大数据 等后续技术。",
    "dependsOn": ["mat_selfheal","ene_borehole","mathematics","inf_edge"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "云计算在 2000 年 前后出现，依托 自修复材料 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，云计算仍是 信息记录 的底层支撑，并持续影响 大数据。"
      }
    ],
    "significance": "云计算把 自修复材料 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 大数据。"
  },
{
    "id": "inf_fog",
    "name": "雾计算",
    "en": "Fog Computing",
    "category": "info",
    "era": "intelligent",
    "date": "2010 年",
    "year": 2010,
    "people": "",
    "place": "",
    "summary": "雾计算约 2010 年 成熟，建立在 二维材料、液态空气储能、数学 之上完成关键突破；其能力延伸到 信息记录、远程传输，并为 微服务 的发展铺平了道路。",
    "dependsOn": ["mat_2d","ene_liquidair","mathematics","inf_homomorphic"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "雾计算在 2010 年 前后出现，依托 二维材料 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，雾计算仍是 信息记录 的底层支撑，并持续影响 微服务。"
      }
    ],
    "significance": "雾计算把 二维材料 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 微服务。"
  },
{
    "id": "inf_quantumcom",
    "name": "量子通信",
    "en": "Quantum Communication",
    "category": "info",
    "era": "info",
    "date": "1980 年",
    "year": 1980,
    "people": "",
    "place": "",
    "summary": "量子通信约 1980 年 成熟，建立在 激光熔覆、碟式斯特林、数学 之上完成关键突破；其能力延伸到 信息记录、远程传输，并为 虚拟现实 的发展铺平了道路。",
    "dependsOn": ["mat_laserclad","ene_dishstirling","mathematics","inf_sensor_net"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "量子通信在 1980 年 前后出现，依托 激光熔覆 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，量子通信仍是 信息记录 的底层支撑，并持续影响 虚拟现实。"
      }
    ],
    "significance": "量子通信把 激光熔覆 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 虚拟现实。"
  },
{
    "id": "inf_qkd",
    "name": "量子密钥分发",
    "en": "QKD",
    "category": "info",
    "era": "info",
    "date": "1984 年",
    "year": 1984,
    "people": "",
    "place": "",
    "summary": "量子密钥分发约 1984 年 成熟，建立在 激光熔覆、碟式斯特林、数学 之上完成关键突破；其能力延伸到 信息记录、远程传输，并为 零知识证明 的发展铺平了道路。",
    "dependsOn": ["mat_laserclad","ene_dishstirling","mathematics","inf_emap"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "量子密钥分发在 1984 年 前后出现，依托 激光熔覆 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，量子密钥分发仍是 信息记录 的底层支撑，并持续影响 零知识证明。"
      }
    ],
    "significance": "量子密钥分发把 激光熔覆 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 零知识证明。"
  },
{
    "id": "inf_ml",
    "name": "机器学习",
    "en": "Machine Learning",
    "category": "info",
    "era": "info",
    "date": "1959 年",
    "year": 1959,
    "people": "",
    "place": "",
    "summary": "机器学习约 1959 年 出现，建立在 碳纤维、超级电容、数学 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mat_cf","ene_supercap","mathematics","inf_nn"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "机器学习在 1959 年 前后出现，依托 碳纤维 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，机器学习仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "机器学习把 碳纤维 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_dl",
    "name": "深度学习",
    "en": "Deep Learning",
    "category": "info",
    "era": "intelligent",
    "date": "2006 年",
    "year": 2006,
    "people": "",
    "place": "",
    "summary": "深度学习约 2006 年 出现，建立在 二维材料、井式地热、数学 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mat_2d","ene_borehole","mathematics","inf_agile"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "深度学习在 2006 年 前后出现，依托 二维材料 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，深度学习仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "深度学习把 二维材料 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_nn",
    "name": "神经网络",
    "en": "Neural Network",
    "category": "info",
    "era": "info",
    "date": "1958 年",
    "year": 1958,
    "people": "",
    "place": "",
    "summary": "神经网络约 1958 年 成熟，建立在 碳纤维、超级电容、数学 之上完成关键突破；其能力延伸到 信息记录、远程传输，并为 机器学习 的发展铺平了道路。",
    "dependsOn": ["mat_cf","ene_supercap","mathematics","inf_modem"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "神经网络在 1958 年 前后出现，依托 碳纤维 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，神经网络仍是 信息记录 的底层支撑，并持续影响 机器学习。"
      }
    ],
    "significance": "神经网络把 碳纤维 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 机器学习。"
  },
{
    "id": "inf_expert",
    "name": "专家系统",
    "en": "Expert System",
    "category": "info",
    "era": "info",
    "date": "1965 年",
    "year": 1965,
    "people": "",
    "place": "",
    "summary": "专家系统约 1965 年 出现，建立在 芳纶、可燃冰、数学 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mat_aramid","ene_clathrate","mathematics","inf_gis"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "专家系统在 1965 年 前后出现，依托 芳纶 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，专家系统仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "专家系统把 芳纶 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_knowledge",
    "name": "知识图谱",
    "en": "Knowledge Graph",
    "category": "info",
    "era": "intelligent",
    "date": "2007 年",
    "year": 2007,
    "people": "",
    "place": "",
    "summary": "知识图谱约 2007 年 成熟，建立在 二维材料、井式地热、数学 之上完成关键突破；其能力延伸到 信息记录、远程传输，并为 区块链 的发展铺平了道路。",
    "dependsOn": ["mat_2d","ene_borehole","mathematics","smartphone"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "知识图谱在 2007 年 前后出现，依托 二维材料 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，知识图谱仍是 信息记录 的底层支撑，并持续影响 区块链。"
      }
    ],
    "significance": "知识图谱把 二维材料 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 区块链。"
  },
{
    "id": "inf_nlp",
    "name": "自然语言处理",
    "en": "NLP",
    "category": "info",
    "era": "info",
    "date": "1950 年",
    "year": 1950,
    "people": "",
    "place": "",
    "summary": "自然语言处理约 1950 年 成熟，建立在 泡沫金属、盐差能、数学 之上完成关键突破；其能力延伸到 信息记录、远程传输，并为 数据压缩 的发展铺平了道路。",
    "dependsOn": ["mat_foammetal","ene_salinity","mathematics","inf_os"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "自然语言处理在 1950 年 前后出现，依托 泡沫金属 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，自然语言处理仍是 信息记录 的底层支撑，并持续影响 数据压缩。"
      }
    ],
    "significance": "自然语言处理把 泡沫金属 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 数据压缩。"
  },
{
    "id": "inf_asr",
    "name": "语音识别",
    "en": "Speech Recognition",
    "category": "info",
    "era": "info",
    "date": "1952 年",
    "year": 1952,
    "people": "",
    "place": "",
    "summary": "语音识别约 1952 年 成熟，建立在 浮法玻璃、核聚变、数学 之上完成关键突破；其能力延伸到 信息记录、远程传输，并为 彩色电视 的发展铺平了道路。",
    "dependsOn": ["mat_floatglass","nuclear_fusion","mathematics","inf_compiler"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "语音识别在 1952 年 前后出现，依托 浮法玻璃 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，语音识别仍是 信息记录 的底层支撑，并持续影响 彩色电视。"
      }
    ],
    "significance": "语音识别把 浮法玻璃 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 彩色电视。"
  },
{
    "id": "inf_mt",
    "name": "机器翻译",
    "en": "Machine Translation",
    "category": "info",
    "era": "info",
    "date": "1954 年",
    "year": 1954,
    "people": "",
    "place": "",
    "summary": "机器翻译约 1954 年 出现，建立在 聚丙烯、光伏电池、数学 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mat_pp","ene_pv","mathematics","inf_hash"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "机器翻译在 1954 年 前后出现，依托 聚丙烯 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，机器翻译仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "机器翻译把 聚丙烯 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_recommend",
    "name": "推荐系统",
    "en": "Recommender",
    "category": "info",
    "era": "info",
    "date": "1990 年",
    "year": 1990,
    "people": "",
    "place": "",
    "summary": "推荐系统约 1990 年 成熟，建立在 金属有机框架、燃料电池汽车、数学 之上完成关键突破；其能力延伸到 信息记录、远程传输，并为 增强现实 的发展铺平了道路。",
    "dependsOn": ["mat_mof","ene_fuelcellcar","mathematics","inf_browser"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "推荐系统在 1990 年 前后出现，依托 金属有机框架 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，推荐系统仍是 信息记录 的底层支撑，并持续影响 增强现实。"
      }
    ],
    "significance": "推荐系统把 金属有机框架 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 增强现实。"
  },
{
    "id": "inf_ar",
    "name": "增强现实",
    "en": "Augmented Reality",
    "category": "info",
    "era": "info",
    "date": "1990 年",
    "year": 1990,
    "people": "",
    "place": "",
    "summary": "增强现实在 1990 年 前后成形，依托 金属有机框架、燃料电池汽车、数学 把 信息记录、远程传输 落到实处，并成为 信息通信 中承上启下的一环，直接支撑了 导航软件 等后续技术。",
    "dependsOn": ["mat_mof","ene_fuelcellcar","mathematics","inf_recommend"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "增强现实在 1990 年 前后出现，依托 金属有机框架 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，增强现实仍是 信息记录 的底层支撑，并持续影响 导航软件。"
      }
    ],
    "significance": "增强现实把 金属有机框架 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 导航软件。"
  },
{
    "id": "inf_vr",
    "name": "虚拟现实",
    "en": "Virtual Reality",
    "category": "info",
    "era": "info",
    "date": "1980 年",
    "year": 1980,
    "people": "",
    "place": "",
    "summary": "虚拟现实约 1980 年 成熟，建立在 激光熔覆、碟式斯特林、数学 之上完成关键突破；其能力延伸到 信息记录、远程传输，并为 数据可视化 的发展铺平了道路。",
    "dependsOn": ["mat_laserclad","ene_dishstirling","mathematics","inf_quantumcom"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "虚拟现实在 1980 年 前后出现，依托 激光熔覆 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，虚拟现实仍是 信息记录 的底层支撑，并持续影响 数据可视化。"
      }
    ],
    "significance": "虚拟现实把 激光熔覆 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 数据可视化。"
  },
{
    "id": "inf_bigdata",
    "name": "大数据",
    "en": "Big Data",
    "category": "info",
    "era": "intelligent",
    "date": "2000 年",
    "year": 2000,
    "people": "",
    "place": "",
    "summary": "大数据约 2000 年 成熟，建立在 自修复材料、井式地热、数学 之上完成关键突破；其能力延伸到 信息记录、远程传输，并为 软件定义网络 的发展铺平了道路。",
    "dependsOn": ["mat_selfheal","ene_borehole","mathematics","inf_cloud"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "大数据在 2000 年 前后出现，依托 自修复材料 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，大数据仍是 信息记录 的底层支撑，并持续影响 软件定义网络。"
      }
    ],
    "significance": "大数据把 自修复材料 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 软件定义网络。"
  },
{
    "id": "inf_dataviz",
    "name": "数据可视化",
    "en": "Data Visualization",
    "category": "info",
    "era": "info",
    "date": "1980 年",
    "year": 1980,
    "people": "",
    "place": "",
    "summary": "数据可视化在 1980 年 前后成形，依托 激光熔覆、碟式斯特林、数学 把 信息记录、远程传输 落到实处，并成为 信息通信 中承上启下的一环，直接支撑了 电子地图 等后续技术。",
    "dependsOn": ["mat_laserclad","ene_dishstirling","mathematics","inf_vr"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "数据可视化在 1980 年 前后出现，依托 激光熔覆 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，数据可视化仍是 信息记录 的底层支撑，并持续影响 电子地图。"
      }
    ],
    "significance": "数据可视化把 激光熔覆 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 电子地图。"
  },
{
    "id": "inf_gis",
    "name": "地理信息系统",
    "en": "GIS",
    "category": "info",
    "era": "info",
    "date": "1960 年",
    "year": 1960,
    "people": "",
    "place": "",
    "summary": "地理信息系统在 1960 年 前后成形，依托 放电等离子烧结、可燃冰、数学 把 信息记录、远程传输 落到实处，并成为 信息通信 中承上启下的一环，直接支撑了 专家系统 等后续技术。",
    "dependsOn": ["mat_sps","ene_clathrate","mathematics","inf_db"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "地理信息系统在 1960 年 前后出现，依托 放电等离子烧结 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，地理信息系统仍是 信息记录 的底层支撑，并持续影响 专家系统。"
      }
    ],
    "significance": "地理信息系统把 放电等离子烧结 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 专家系统。"
  },
{
    "id": "inf_emap",
    "name": "电子地图",
    "en": "Digital Map",
    "category": "info",
    "era": "info",
    "date": "1980 年",
    "year": 1980,
    "people": "",
    "place": "",
    "summary": "电子地图在 1980 年 前后成形，依托 激光熔覆、碟式斯特林、数学 把 信息记录、远程传输 落到实处，并成为 信息通信 中承上启下的一环，直接支撑了 量子密钥分发 等后续技术。",
    "dependsOn": ["mat_laserclad","ene_dishstirling","mathematics","inf_dataviz"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "电子地图在 1980 年 前后出现，依托 激光熔覆 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，电子地图仍是 信息记录 的底层支撑，并持续影响 量子密钥分发。"
      }
    ],
    "significance": "电子地图把 激光熔覆 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 量子密钥分发。"
  },
{
    "id": "inf_navsoft",
    "name": "导航软件",
    "en": "Navigation Software",
    "category": "info",
    "era": "info",
    "date": "1990 年",
    "year": 1990,
    "people": "",
    "place": "",
    "summary": "导航软件在 1990 年 前后成形，依托 金属有机框架、燃料电池汽车、数学 把 信息记录、远程传输 落到实处，并成为 信息通信 中承上启下的一环，直接支撑了 数字水印 等后续技术。",
    "dependsOn": ["mat_mof","ene_fuelcellcar","mathematics","inf_ar"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "导航软件在 1990 年 前后出现，依托 金属有机框架 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，导航软件仍是 信息记录 的底层支撑，并持续影响 数字水印。"
      }
    ],
    "significance": "导航软件把 金属有机框架 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 数字水印。"
  },
{
    "id": "inf_watermark",
    "name": "数字水印",
    "en": "Digital Watermark",
    "category": "info",
    "era": "info",
    "date": "1990 年",
    "year": 1990,
    "people": "",
    "place": "",
    "summary": "数字水印约 1990 年 成熟，建立在 金属有机框架、燃料电池汽车、数学 之上完成关键突破；其能力延伸到 信息记录、远程传输，并为 信息隐藏 的发展铺平了道路。",
    "dependsOn": ["mat_mof","ene_fuelcellcar","mathematics","inf_navsoft"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "数字水印在 1990 年 前后出现，依托 金属有机框架 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，数字水印仍是 信息记录 的底层支撑，并持续影响 信息隐藏。"
      }
    ],
    "significance": "数字水印把 金属有机框架 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 信息隐藏。"
  },
{
    "id": "inf_steg",
    "name": "信息隐藏",
    "en": "Steganography",
    "category": "info",
    "era": "info",
    "date": "1990 年",
    "year": 1990,
    "people": "",
    "place": "",
    "summary": "信息隐藏在 1990 年 前后成形，依托 金属有机框架、燃料电池汽车、数学 把 信息记录、远程传输 落到实处，并成为 信息通信 中承上启下的一环，直接支撑了 中间件 等后续技术。",
    "dependsOn": ["mat_mof","ene_fuelcellcar","mathematics","inf_watermark"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "信息隐藏在 1990 年 前后出现，依托 金属有机框架 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，信息隐藏仍是 信息记录 的底层支撑，并持续影响 中间件。"
      }
    ],
    "significance": "信息隐藏把 金属有机框架 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 中间件。"
  },
{
    "id": "inf_ecc",
    "name": "纠错码",
    "en": "Error Correction Code",
    "category": "info",
    "era": "electrical",
    "date": "1949 年",
    "year": 1949,
    "people": "",
    "place": "",
    "summary": "纠错码在 1949 年 前后成形，依托 ABS 树脂、压缩空气储能、数学 把 信息记录、远程传输 落到实处，并成为 信息通信 中承上启下的一环，直接支撑了 操作系统 等后续技术。",
    "dependsOn": ["mat_abs","ene_caes","mathematics","inf_symenc"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "纠错码在 1949 年 前后出现，依托 ABS 树脂 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，纠错码仍是 信息记录 的底层支撑，并持续影响 操作系统。"
      }
    ],
    "significance": "纠错码把 ABS 树脂 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 操作系统。"
  },
{
    "id": "inf_compression",
    "name": "数据压缩",
    "en": "Data Compression",
    "category": "info",
    "era": "info",
    "date": "1950 年",
    "year": 1950,
    "people": "",
    "place": "",
    "summary": "数据压缩约 1950 年 成熟，建立在 泡沫金属、盐差能、数学 之上完成关键突破；其能力延伸到 信息记录、远程传输，并为 编解码 的发展铺平了道路。",
    "dependsOn": ["mat_foammetal","ene_salinity","mathematics","inf_nlp"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "数据压缩在 1950 年 前后出现，依托 泡沫金属 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，数据压缩仍是 信息记录 的底层支撑，并持续影响 编解码。"
      }
    ],
    "significance": "数据压缩把 泡沫金属 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 编解码。"
  },
{
    "id": "inf_codec",
    "name": "编解码",
    "en": "Codec",
    "category": "info",
    "era": "info",
    "date": "1950 年",
    "year": 1950,
    "people": "",
    "place": "",
    "summary": "编解码约 1950 年 成熟，建立在 泡沫金属、盐差能、数学 之上完成关键突破；其能力延伸到 信息记录、远程传输，并为 强化学习 的发展铺平了道路。",
    "dependsOn": ["mat_foammetal","ene_salinity","mathematics","inf_compression"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "编解码在 1950 年 前后出现，依托 泡沫金属 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，编解码仍是 信息记录 的底层支撑，并持续影响 强化学习。"
      }
    ],
    "significance": "编解码把 泡沫金属 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 强化学习。"
  },
{
    "id": "inf_modulation",
    "name": "调制技术",
    "en": "Modulation",
    "category": "info",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "调制技术约 1900 年 成熟，建立在 渗硼、调峰电站、数学 之上完成关键突破；其能力延伸到 信息记录、远程传输，并为 无线电广播 的发展铺平了道路。",
    "dependsOn": ["mat_boriding","ene_peaker","mathematics","radio"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "调制技术在 1900 年 前后出现，依托 渗硼 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，调制技术仍是 信息记录 的底层支撑，并持续影响 无线电广播。"
      }
    ],
    "significance": "调制技术把 渗硼 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 无线电广播。"
  },
{
    "id": "inf_antenna",
    "name": "天线",
    "en": "Antenna",
    "category": "info",
    "era": "industrial",
    "date": "1888 年",
    "year": 1888,
    "people": "",
    "place": "",
    "summary": "天线约 1888 年 出现，建立在 锗、交流电系统、数学 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mat_ge","ene_ac","mathematics","inf_pen"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "天线在 1888 年 前后出现，依托 锗 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，天线仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "天线把 锗 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_phasedarray",
    "name": "相控阵",
    "en": "Phased Array",
    "category": "info",
    "era": "electrical",
    "date": "1930 年",
    "year": 1930,
    "people": "",
    "place": "",
    "summary": "相控阵约 1930 年 成熟，建立在 玻璃钢、火箭发动机、数学 之上完成关键突破；其能力延伸到 信息记录、远程传输，并为 圆珠笔 的发展铺平了道路。",
    "dependsOn": ["mat_frp","ene_rocketengine","mathematics","inf_tape"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "相控阵在 1930 年 前后出现，依托 玻璃钢 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，相控阵仍是 信息记录 的底层支撑，并持续影响 圆珠笔。"
      }
    ],
    "significance": "相控阵把 玻璃钢 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 圆珠笔。"
  },
{
    "id": "inf_sdn",
    "name": "软件定义网络",
    "en": "SDN",
    "category": "info",
    "era": "intelligent",
    "date": "2000 年",
    "year": 2000,
    "people": "",
    "place": "",
    "summary": "软件定义网络在 2000 年 前后成形，依托 自修复材料、井式地热、数学 把 信息记录、远程传输 落到实处，并成为 信息通信 中承上启下的一环，直接支撑了 容器技术 等后续技术。",
    "dependsOn": ["mat_selfheal","ene_borehole","mathematics","inf_bigdata"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "软件定义网络在 2000 年 前后出现，依托 自修复材料 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，软件定义网络仍是 信息记录 的底层支撑，并持续影响 容器技术。"
      }
    ],
    "significance": "软件定义网络把 自修复材料 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 容器技术。"
  },
{
    "id": "inf_container",
    "name": "容器技术",
    "en": "Container",
    "category": "info",
    "era": "intelligent",
    "date": "2000 年",
    "year": 2000,
    "people": "",
    "place": "",
    "summary": "容器技术在 2000 年 前后成形，依托 自修复材料、井式地热、数学 把 信息记录、远程传输 落到实处，并成为 信息通信 中承上启下的一环，直接支撑了 应用程序接口 等后续技术。",
    "dependsOn": ["mat_selfheal","ene_borehole","mathematics","inf_sdn"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "容器技术在 2000 年 前后出现，依托 自修复材料 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，容器技术仍是 信息记录 的底层支撑，并持续影响 应用程序接口。"
      }
    ],
    "significance": "容器技术把 自修复材料 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 应用程序接口。"
  },
{
    "id": "inf_microservice",
    "name": "微服务",
    "en": "Microservice",
    "category": "info",
    "era": "intelligent",
    "date": "2010 年",
    "year": 2010,
    "people": "",
    "place": "",
    "summary": "微服务在 2010 年 前后成形，依托 二维材料、液态空气储能、数学 把 信息记录、远程传输 落到实处，并成为 信息通信 中承上启下的一环，直接支撑了 低代码 等后续技术。",
    "dependsOn": ["mat_2d","ene_liquidair","mathematics","inf_fog"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "微服务在 2010 年 前后出现，依托 二维材料 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，微服务仍是 信息记录 的底层支撑，并持续影响 低代码。"
      }
    ],
    "significance": "微服务把 二维材料 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 低代码。"
  },
{
    "id": "inf_lowcode",
    "name": "低代码",
    "en": "Low-Code",
    "category": "info",
    "era": "intelligent",
    "date": "2010 年",
    "year": 2010,
    "people": "",
    "place": "",
    "summary": "低代码在 2010 年 前后成形，依托 二维材料、液态空气储能、数学 把 信息记录、远程传输 落到实处，并成为 信息通信 中承上启下的一环，直接支撑了 DevOps 等后续技术。",
    "dependsOn": ["mat_2d","ene_liquidair","mathematics","inf_microservice"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "低代码在 2010 年 前后出现，依托 二维材料 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，低代码仍是 信息记录 的底层支撑，并持续影响 DevOps。"
      }
    ],
    "significance": "低代码把 二维材料 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 DevOps。"
  },
{
    "id": "inf_devops",
    "name": "DevOps",
    "en": "DevOps",
    "category": "info",
    "era": "intelligent",
    "date": "2010 年",
    "year": 2010,
    "people": "",
    "place": "",
    "summary": "DevOps在 2010 年 前后成形，依托 二维材料、液态空气储能、数学 把 信息记录、远程传输 落到实处，并成为 信息通信 中承上启下的一环，直接支撑了 持续集成 等后续技术。",
    "dependsOn": ["mat_2d","ene_liquidair","mathematics","inf_lowcode"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "DevOps在 2010 年 前后出现，依托 二维材料 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，DevOps仍是 信息记录 的底层支撑，并持续影响 持续集成。"
      }
    ],
    "significance": "DevOps把 二维材料 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 持续集成。"
  },
{
    "id": "inf_cicd",
    "name": "持续集成",
    "en": "CI/CD",
    "category": "info",
    "era": "intelligent",
    "date": "2010 年",
    "year": 2010,
    "people": "",
    "place": "",
    "summary": "持续集成在 2010 年 前后成形，依托 二维材料、液态空气储能、数学 把 信息记录、远程传输 落到实处，并成为 信息通信 中承上启下的一环，直接支撑了 向量数据库 等后续技术。",
    "dependsOn": ["mat_2d","ene_liquidair","mathematics","inf_devops"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "持续集成在 2010 年 前后出现，依托 二维材料 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，持续集成仍是 信息记录 的底层支撑，并持续影响 向量数据库。"
      }
    ],
    "significance": "持续集成把 二维材料 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 向量数据库。"
  },
{
    "id": "inf_agile",
    "name": "敏捷开发",
    "en": "Agile",
    "category": "info",
    "era": "intelligent",
    "date": "2001 年",
    "year": 2001,
    "people": "",
    "place": "",
    "summary": "敏捷开发约 2001 年 成熟，建立在 自修复材料、井式地热、数学 之上完成关键突破；其能力延伸到 信息记录、远程传输，并为 深度学习 的发展铺平了道路。",
    "dependsOn": ["mat_selfheal","ene_borehole","mathematics","inf_alloptical"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "敏捷开发在 2001 年 前后出现，依托 自修复材料 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，敏捷开发仍是 信息记录 的底层支撑，并持续影响 深度学习。"
      }
    ],
    "significance": "敏捷开发把 自修复材料 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 深度学习。"
  },
{
    "id": "inf_uml",
    "name": "统一建模语言",
    "en": "UML",
    "category": "info",
    "era": "info",
    "date": "1997 年",
    "year": 1997,
    "people": "",
    "place": "",
    "summary": "统一建模语言约 1997 年 成熟，建立在 金属有机框架、锂聚合物电池、数学 之上完成关键突破；其能力延伸到 信息记录、远程传输，并为 物联网 的发展铺平了道路。",
    "dependsOn": ["mat_mof","ene_lipoly","mathematics","inf_wifi"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "统一建模语言在 1997 年 前后出现，依托 金属有机框架 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，统一建模语言仍是 信息记录 的底层支撑，并持续影响 物联网。"
      }
    ],
    "significance": "统一建模语言把 金属有机框架 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 物联网。"
  },
{
    "id": "inf_git",
    "name": "版本控制",
    "en": "Version Control",
    "category": "info",
    "era": "info",
    "date": "1972 年",
    "year": 1972,
    "people": "",
    "place": "",
    "summary": "版本控制约 1972 年 成熟，建立在 储氢合金、水热型地热、数学 之上完成关键突破；其能力延伸到 信息记录、远程传输，并为 SQL 的发展铺平了道路。",
    "dependsOn": ["mat_hydrogenstorage","ene_hydrothermal","mathematics","inf_pl_c"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "版本控制在 1972 年 前后出现，依托 储氢合金 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，版本控制仍是 信息记录 的底层支撑，并持续影响 SQL。"
      }
    ],
    "significance": "版本控制把 储氢合金 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 SQL。"
  },
{
    "id": "inf_api",
    "name": "应用程序接口",
    "en": "API",
    "category": "info",
    "era": "intelligent",
    "date": "2000 年",
    "year": 2000,
    "people": "",
    "place": "",
    "summary": "应用程序接口约 2000 年 成熟，建立在 自修复材料、井式地热、数学 之上完成关键突破；其能力延伸到 信息记录、远程传输，并为 图数据库 的发展铺平了道路。",
    "dependsOn": ["mat_selfheal","ene_borehole","mathematics","inf_container"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "应用程序接口在 2000 年 前后出现，依托 自修复材料 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，应用程序接口仍是 信息记录 的底层支撑，并持续影响 图数据库。"
      }
    ],
    "significance": "应用程序接口把 自修复材料 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 图数据库。"
  },
{
    "id": "inf_middleware",
    "name": "中间件",
    "en": "Middleware",
    "category": "info",
    "era": "info",
    "date": "1990 年",
    "year": 1990,
    "people": "",
    "place": "",
    "summary": "中间件约 1990 年 成熟，建立在 金属有机框架、燃料电池汽车、数学 之上完成关键突破；其能力延伸到 信息记录、远程传输，并为 内容分发网络 的发展铺平了道路。",
    "dependsOn": ["mat_mof","ene_fuelcellcar","mathematics","inf_steg"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "中间件在 1990 年 前后出现，依托 金属有机框架 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，中间件仍是 信息记录 的底层支撑，并持续影响 内容分发网络。"
      }
    ],
    "significance": "中间件把 金属有机框架 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 内容分发网络。"
  },
{
    "id": "inf_cdn",
    "name": "内容分发网络",
    "en": "CDN",
    "category": "info",
    "era": "info",
    "date": "1990 年",
    "year": 1990,
    "people": "",
    "place": "",
    "summary": "内容分发网络在 1990 年 前后成形，依托 金属有机框架、燃料电池汽车、数学 把 信息记录、远程传输 落到实处，并成为 信息通信 中承上启下的一环，直接支撑了 负载均衡 等后续技术。",
    "dependsOn": ["mat_mof","ene_fuelcellcar","mathematics","inf_middleware"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "内容分发网络在 1990 年 前后出现，依托 金属有机框架 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，内容分发网络仍是 信息记录 的底层支撑，并持续影响 负载均衡。"
      }
    ],
    "significance": "内容分发网络把 金属有机框架 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 负载均衡。"
  },
{
    "id": "inf_loadbalancer",
    "name": "负载均衡",
    "en": "Load Balancer",
    "category": "info",
    "era": "info",
    "date": "1990 年",
    "year": 1990,
    "people": "",
    "place": "",
    "summary": "负载均衡约 1990 年 成熟，建立在 金属有机框架、燃料电池汽车、数学 之上完成关键突破；其能力延伸到 信息记录、远程传输，并为 缓存系统 的发展铺平了道路。",
    "dependsOn": ["mat_mof","ene_fuelcellcar","mathematics","inf_cdn"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "负载均衡在 1990 年 前后出现，依托 金属有机框架 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，负载均衡仍是 信息记录 的底层支撑，并持续影响 缓存系统。"
      }
    ],
    "significance": "负载均衡把 金属有机框架 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 缓存系统。"
  },
{
    "id": "inf_cache",
    "name": "缓存系统",
    "en": "Caching",
    "category": "info",
    "era": "info",
    "date": "1990 年",
    "year": 1990,
    "people": "",
    "place": "",
    "summary": "缓存系统约 1990 年 成熟，建立在 金属有机框架、燃料电池汽车、数学 之上完成关键突破；其能力延伸到 信息记录、远程传输，并为 语音合成 的发展铺平了道路。",
    "dependsOn": ["mat_mof","ene_fuelcellcar","mathematics","inf_loadbalancer"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "缓存系统在 1990 年 前后出现，依托 金属有机框架 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，缓存系统仍是 信息记录 的底层支撑，并持续影响 语音合成。"
      }
    ],
    "significance": "缓存系统把 金属有机框架 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 语音合成。"
  },
{
    "id": "inf_graphdb",
    "name": "图数据库",
    "en": "Graph Database",
    "category": "info",
    "era": "intelligent",
    "date": "2000 年",
    "year": 2000,
    "people": "",
    "place": "",
    "summary": "图数据库约 2000 年 成熟，建立在 自修复材料、井式地热、数学 之上完成关键突破；其能力延伸到 信息记录、远程传输，并为 时序数据库 的发展铺平了道路。",
    "dependsOn": ["mat_selfheal","ene_borehole","mathematics","inf_api"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "图数据库在 2000 年 前后出现，依托 自修复材料 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，图数据库仍是 信息记录 的底层支撑，并持续影响 时序数据库。"
      }
    ],
    "significance": "图数据库把 自修复材料 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 时序数据库。"
  },
{
    "id": "inf_timeseries",
    "name": "时序数据库",
    "en": "Time-Series DB",
    "category": "info",
    "era": "intelligent",
    "date": "2000 年",
    "year": 2000,
    "people": "",
    "place": "",
    "summary": "时序数据库约 2000 年 成熟，建立在 自修复材料、井式地热、数学 之上完成关键突破；其能力延伸到 信息记录、远程传输，并为 全光网络 的发展铺平了道路。",
    "dependsOn": ["mat_selfheal","ene_borehole","mathematics","inf_graphdb"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "时序数据库在 2000 年 前后出现，依托 自修复材料 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，时序数据库仍是 信息记录 的底层支撑，并持续影响 全光网络。"
      }
    ],
    "significance": "时序数据库把 自修复材料 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 全光网络。"
  },
{
    "id": "inf_vector_db",
    "name": "向量数据库",
    "en": "Vector Database",
    "category": "info",
    "era": "intelligent",
    "date": "2010 年",
    "year": 2010,
    "people": "",
    "place": "",
    "summary": "向量数据库约 2010 年 成熟，建立在 二维材料、液态空气储能、数学 之上完成关键突破；其能力延伸到 信息记录、远程传输，并为 机器人流程自动化 的发展铺平了道路。",
    "dependsOn": ["mat_2d","ene_liquidair","mathematics","inf_cicd"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "向量数据库在 2010 年 前后出现，依托 二维材料 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，向量数据库仍是 信息记录 的底层支撑，并持续影响 机器人流程自动化。"
      }
    ],
    "significance": "向量数据库把 二维材料 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 机器人流程自动化。"
  },
{
    "id": "inf_recommend2",
    "name": "协同过滤",
    "en": "Collaborative Filtering",
    "category": "info",
    "era": "info",
    "date": "1992 年",
    "year": 1992,
    "people": "",
    "place": "",
    "summary": "协同过滤约 1992 年 成熟，建立在 金属有机框架、锂离子电池、数学 之上完成关键突破；其能力延伸到 信息记录、远程传输，并为 蓝牙 的发展铺平了道路。",
    "dependsOn": ["mat_mof","ene_liion","mathematics","inf_pl_python"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "协同过滤在 1992 年 前后出现，依托 金属有机框架 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，协同过滤仍是 信息记录 的底层支撑，并持续影响 蓝牙。"
      }
    ],
    "significance": "协同过滤把 金属有机框架 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 蓝牙。"
  },
{
    "id": "inf_transformer",
    "name": "Transformer 架构",
    "en": "Transformer",
    "category": "info",
    "era": "intelligent",
    "date": "2017 年",
    "year": 2017,
    "people": "",
    "place": "",
    "summary": "Transformer 架构在 2017 年 前后成形，依托 二维材料、摩擦纳米发电、数学 把 信息记录、远程传输 落到实处，并成为 信息通信 中承上启下的一环，直接支撑了 5G 等后续技术。",
    "dependsOn": ["mat_2d","ene_tribo","mathematics","transformer_arch"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "Transformer 架构在 2017 年 前后出现，依托 二维材料 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，Transformer 架构仍是 信息记录 的底层支撑，并持续影响 5G。"
      }
    ],
    "significance": "Transformer 架构把 二维材料 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 5G。"
  },
{
    "id": "inf_llm",
    "name": "大语言模型",
    "en": "LLM",
    "category": "info",
    "era": "intelligent",
    "date": "2018 年",
    "year": 2018,
    "people": "",
    "place": "",
    "summary": "大语言模型在 2018 年 前后成形，依托 二维材料、摩擦纳米发电、数学 把 信息记录、远程传输 落到实处，并成为 信息通信 中承上启下的一环，直接支撑了 6G 等后续技术。",
    "dependsOn": ["mat_2d","ene_tribo","mathematics","inf_5g"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "大语言模型在 2018 年 前后出现，依托 二维材料 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，大语言模型仍是 信息记录 的底层支撑，并持续影响 6G。"
      }
    ],
    "significance": "大语言模型把 二维材料 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 6G。"
  },
{
    "id": "inf_diffusion",
    "name": "扩散模型",
    "en": "Diffusion Model",
    "category": "info",
    "era": "intelligent",
    "date": "2015 年",
    "year": 2015,
    "people": "",
    "place": "",
    "summary": "扩散模型在 2015 年 前后成形，依托 二维材料、摩擦纳米发电、数学 把 信息记录、远程传输 落到实处，并成为 信息通信 中承上启下的一环，直接支撑了 边缘智能 等后续技术。",
    "dependsOn": ["mat_2d","ene_tribo","mathematics","inf_gan"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "扩散模型在 2015 年 前后出现，依托 二维材料 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，扩散模型仍是 信息记录 的底层支撑，并持续影响 边缘智能。"
      }
    ],
    "significance": "扩散模型把 二维材料 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 边缘智能。"
  },
{
    "id": "inf_rl",
    "name": "强化学习",
    "en": "Reinforcement Learning",
    "category": "info",
    "era": "info",
    "date": "1950 年",
    "year": 1950,
    "people": "",
    "place": "",
    "summary": "强化学习约 1950 年 成熟，建立在 泡沫金属、盐差能、数学 之上完成关键突破；其能力延伸到 信息记录、远程传输，并为 编译器 的发展铺平了道路。",
    "dependsOn": ["mat_foammetal","ene_salinity","mathematics","inf_codec"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "强化学习在 1950 年 前后出现，依托 泡沫金属 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，强化学习仍是 信息记录 的底层支撑，并持续影响 编译器。"
      }
    ],
    "significance": "强化学习把 泡沫金属 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 编译器。"
  },
{
    "id": "inf_gan",
    "name": "生成对抗网络",
    "en": "GAN",
    "category": "info",
    "era": "intelligent",
    "date": "2014 年",
    "year": 2014,
    "people": "",
    "place": "",
    "summary": "生成对抗网络约 2014 年 成熟，建立在 二维材料、摩擦纳米发电、数学 之上完成关键突破；其能力延伸到 信息记录、远程传输，并为 扩散模型 的发展铺平了道路。",
    "dependsOn": ["mat_2d","ene_tribo","mathematics","computer_vision"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "生成对抗网络在 2014 年 前后出现，依托 二维材料 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，生成对抗网络仍是 信息记录 的底层支撑，并持续影响 扩散模型。"
      }
    ],
    "significance": "生成对抗网络把 二维材料 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 扩散模型。"
  },
{
    "id": "inf_rpa",
    "name": "机器人流程自动化",
    "en": "RPA",
    "category": "info",
    "era": "intelligent",
    "date": "2010 年",
    "year": 2010,
    "people": "",
    "place": "",
    "summary": "机器人流程自动化在 2010 年 前后成形，依托 二维材料、液态空气储能、数学 把 信息记录、远程传输 落到实处，并成为 信息通信 中承上启下的一环，直接支撑了 高速光模块 等后续技术。",
    "dependsOn": ["mat_2d","ene_liquidair","mathematics","inf_vector_db"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "机器人流程自动化在 2010 年 前后出现，依托 二维材料 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，机器人流程自动化仍是 信息记录 的底层支撑，并持续影响 高速光模块。"
      }
    ],
    "significance": "机器人流程自动化把 二维材料 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 高速光模块。"
  },
{
    "id": "inf_alloptical",
    "name": "全光网络",
    "en": "All-Optical Network",
    "category": "info",
    "era": "intelligent",
    "date": "2000 年",
    "year": 2000,
    "people": "",
    "place": "",
    "summary": "全光网络在 2000 年 前后成形，依托 自修复材料、井式地热、数学 把 信息记录、远程传输 落到实处，并成为 信息通信 中承上启下的一环，直接支撑了 敏捷开发 等后续技术。",
    "dependsOn": ["mat_selfheal","ene_borehole","mathematics","inf_timeseries"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "全光网络在 2000 年 前后出现，依托 自修复材料 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，全光网络仍是 信息记录 的底层支撑，并持续影响 敏捷开发。"
      }
    ],
    "significance": "全光网络把 自修复材料 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 敏捷开发。"
  },
{
    "id": "inf_400g",
    "name": "高速光模块",
    "en": "High-Speed Optical Module",
    "category": "info",
    "era": "intelligent",
    "date": "2010 年",
    "year": 2010,
    "people": "",
    "place": "",
    "summary": "高速光模块在 2010 年 前后成形，依托 二维材料、液态空气储能、数学 把 信息记录、远程传输 落到实处，并成为 信息通信 中承上启下的一环，直接支撑了 低轨卫星星座 等后续技术。",
    "dependsOn": ["mat_2d","ene_liquidair","mathematics","inf_rpa"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "高速光模块在 2010 年 前后出现，依托 二维材料 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，高速光模块仍是 信息记录 的底层支撑，并持续影响 低轨卫星星座。"
      }
    ],
    "significance": "高速光模块把 二维材料 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 低轨卫星星座。"
  },
{
    "id": "inf_leo",
    "name": "低轨卫星星座",
    "en": "LEO Constellation",
    "category": "info",
    "era": "intelligent",
    "date": "2010 年",
    "year": 2010,
    "people": "",
    "place": "",
    "summary": "低轨卫星星座约 2010 年 成熟，建立在 二维材料、液态空气储能、数学 之上完成关键突破；其能力延伸到 信息记录、远程传输，并为 嵌入模型 的发展铺平了道路。",
    "dependsOn": ["mat_2d","ene_liquidair","mathematics","inf_400g"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "低轨卫星星座在 2010 年 前后出现，依托 二维材料 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，低轨卫星星座仍是 信息记录 的底层支撑，并持续影响 嵌入模型。"
      }
    ],
    "significance": "低轨卫星星座把 二维材料 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 嵌入模型。"
  },
{
    "id": "inf_quantuminternet",
    "name": "量子互联网",
    "en": "Quantum Internet",
    "category": "info",
    "era": "intelligent",
    "date": "2020 年",
    "year": 2020,
    "people": "",
    "place": "",
    "summary": "量子互联网约 2020 年 成熟，建立在 二维材料、摩擦纳米发电、数学 之上完成关键突破；其能力延伸到 信息记录、远程传输，并为 多模态大模型 的发展铺平了道路。",
    "dependsOn": ["mat_2d","ene_tribo","mathematics","inf_6g"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "量子互联网在 2020 年 前后出现，依托 二维材料 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，量子互联网仍是 信息记录 的底层支撑，并持续影响 多模态大模型。"
      }
    ],
    "significance": "量子互联网把 二维材料 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 多模态大模型。"
  },
{
    "id": "inf_homomorphic",
    "name": "同态加密",
    "en": "Homomorphic Encryption",
    "category": "info",
    "era": "intelligent",
    "date": "2009 年",
    "year": 2009,
    "people": "",
    "place": "",
    "summary": "同态加密在 2009 年 前后成形，依托 二维材料、井式地热、数学 把 信息记录、远程传输 落到实处，并成为 信息通信 中承上启下的一环，直接支撑了 雾计算 等后续技术。",
    "dependsOn": ["mat_2d","ene_borehole","mathematics","inf_blockchain"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "同态加密在 2009 年 前后出现，依托 二维材料 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，同态加密仍是 信息记录 的底层支撑，并持续影响 雾计算。"
      }
    ],
    "significance": "同态加密把 二维材料 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 雾计算。"
  },
{
    "id": "inf_zeroknowledge",
    "name": "零知识证明",
    "en": "Zero-Knowledge Proof",
    "category": "info",
    "era": "info",
    "date": "1985 年",
    "year": 1985,
    "people": "",
    "place": "",
    "summary": "零知识证明约 1985 年 成熟，建立在 激光熔覆、无刷电机、数学 之上完成关键突破；其能力延伸到 信息记录、远程传输，并为 搜索引擎 的发展铺平了道路。",
    "dependsOn": ["mat_laserclad","brushless_motor","mathematics","inf_qkd"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "零知识证明在 1985 年 前后出现，依托 激光熔覆 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，零知识证明仍是 信息记录 的底层支撑，并持续影响 搜索引擎。"
      }
    ],
    "significance": "零知识证明把 激光熔覆 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 搜索引擎。"
  },
{
    "id": "inf_multimodal",
    "name": "多模态大模型",
    "en": "Multimodal Model",
    "category": "info",
    "era": "intelligent",
    "date": "2020 年",
    "year": 2020,
    "people": "",
    "place": "",
    "summary": "多模态大模型约 2020 年 成熟，建立在 二维材料、摩擦纳米发电、数学 之上完成关键突破；其能力延伸到 信息记录、远程传输，并为 智能体 的发展铺平了道路。",
    "dependsOn": ["mat_2d","ene_tribo","mathematics","inf_quantuminternet"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "多模态大模型在 2020 年 前后出现，依托 二维材料 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，多模态大模型仍是 信息记录 的底层支撑，并持续影响 智能体。"
      }
    ],
    "significance": "多模态大模型把 二维材料 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 智能体。"
  },
{
    "id": "inf_agent",
    "name": "智能体",
    "en": "AI Agent",
    "category": "info",
    "era": "intelligent",
    "date": "2020 年",
    "year": 2020,
    "people": "",
    "place": "",
    "summary": "智能体在 2020 年 前后成形，依托 二维材料、摩擦纳米发电、数学 把 信息记录、远程传输 落到实处，并成为 信息通信 中承上启下的一环，直接支撑了 世界模型 等后续技术。",
    "dependsOn": ["mat_2d","ene_tribo","mathematics","inf_multimodal"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "智能体在 2020 年 前后出现，依托 二维材料 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，智能体仍是 信息记录 的底层支撑，并持续影响 世界模型。"
      }
    ],
    "significance": "智能体把 二维材料 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 世界模型。"
  },
{
    "id": "inf_worldmodel",
    "name": "世界模型",
    "en": "World Model",
    "category": "info",
    "era": "intelligent",
    "date": "2020 年",
    "year": 2020,
    "people": "",
    "place": "",
    "summary": "世界模型在 2020 年 前后成形，依托 二维材料、摩擦纳米发电、数学 把 信息记录、远程传输 落到实处，并成为 信息通信 中承上启下的一环，直接支撑了 检索增强生成 等后续技术。",
    "dependsOn": ["mat_2d","ene_tribo","mathematics","inf_agent"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "世界模型在 2020 年 前后出现，依托 二维材料 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，世界模型仍是 信息记录 的底层支撑，并持续影响 检索增强生成。"
      }
    ],
    "significance": "世界模型把 二维材料 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 检索增强生成。"
  },
{
    "id": "inf_embedding",
    "name": "嵌入模型",
    "en": "Embedding Model",
    "category": "info",
    "era": "intelligent",
    "date": "2010 年",
    "year": 2010,
    "people": "",
    "place": "",
    "summary": "嵌入模型在 2010 年 前后成形，依托 二维材料、液态空气储能、数学 把 信息记录、远程传输 落到实处，并成为 信息通信 中承上启下的一环，直接支撑了 向量检索 等后续技术。",
    "dependsOn": ["mat_2d","ene_liquidair","mathematics","inf_leo"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "嵌入模型在 2010 年 前后出现，依托 二维材料 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，嵌入模型仍是 信息记录 的底层支撑，并持续影响 向量检索。"
      }
    ],
    "significance": "嵌入模型把 二维材料 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 向量检索。"
  },
{
    "id": "inf_vectorsearch",
    "name": "向量检索",
    "en": "Vector Search",
    "category": "info",
    "era": "intelligent",
    "date": "2010 年",
    "year": 2010,
    "people": "",
    "place": "",
    "summary": "向量检索约 2010 年 出现，建立在 二维材料、液态空气储能、数学 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mat_2d","ene_liquidair","mathematics","inf_embedding"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "向量检索在 2010 年 前后出现，依托 二维材料 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，向量检索仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "向量检索把 二维材料 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_rag",
    "name": "检索增强生成",
    "en": "RAG",
    "category": "info",
    "era": "intelligent",
    "date": "2020 年",
    "year": 2020,
    "people": "",
    "place": "",
    "summary": "检索增强生成约 2020 年 成熟，建立在 二维材料、摩擦纳米发电、数学 之上完成关键突破；其能力延伸到 信息记录、远程传输，并为 大模型对齐 的发展铺平了道路。",
    "dependsOn": ["mat_2d","ene_tribo","mathematics","inf_worldmodel"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "检索增强生成在 2020 年 前后出现，依托 二维材料 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，检索增强生成仍是 信息记录 的底层支撑，并持续影响 大模型对齐。"
      }
    ],
    "significance": "检索增强生成把 二维材料 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 大模型对齐。"
  },
{
    "id": "inf_alignment",
    "name": "大模型对齐",
    "en": "AI Alignment",
    "category": "info",
    "era": "intelligent",
    "date": "2020 年",
    "year": 2020,
    "people": "",
    "place": "",
    "summary": "大模型对齐在 2020 年 前后成形，依托 二维材料、摩擦纳米发电、数学 把 信息记录、远程传输 落到实处，并成为 信息通信 中承上启下的一环，直接支撑了 数字人 等后续技术。",
    "dependsOn": ["mat_2d","ene_tribo","mathematics","inf_rag"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "大模型对齐在 2020 年 前后出现，依托 二维材料 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，大模型对齐仍是 信息记录 的底层支撑，并持续影响 数字人。"
      }
    ],
    "significance": "大模型对齐把 二维材料 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 数字人。"
  },
{
    "id": "inf_speechsyn",
    "name": "语音合成",
    "en": "Speech Synthesis",
    "category": "info",
    "era": "info",
    "date": "1990 年",
    "year": 1990,
    "people": "",
    "place": "",
    "summary": "语音合成约 1990 年 出现，建立在 金属有机框架、燃料电池汽车、数学 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mat_mof","ene_fuelcellcar","mathematics","inf_cache"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "语音合成在 1990 年 前后出现，依托 金属有机框架 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，语音合成仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "语音合成把 金属有机框架 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_digitalhuman",
    "name": "数字人",
    "en": "Digital Human",
    "category": "info",
    "era": "intelligent",
    "date": "2020 年",
    "year": 2020,
    "people": "",
    "place": "",
    "summary": "数字人在 2020 年 前后成形，依托 二维材料、摩擦纳米发电、数学 把 信息记录、远程传输 落到实处，并成为 信息通信 中承上启下的一环，直接支撑了 AI 搜索 等后续技术。",
    "dependsOn": ["mat_2d","ene_tribo","mathematics","inf_alignment"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "数字人在 2020 年 前后出现，依托 二维材料 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，数字人仍是 信息记录 的底层支撑，并持续影响 AI 搜索。"
      }
    ],
    "significance": "数字人把 二维材料 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 AI 搜索。"
  },
{
    "id": "inf_edgeai",
    "name": "边缘智能",
    "en": "Edge AI",
    "category": "info",
    "era": "intelligent",
    "date": "2015 年",
    "year": 2015,
    "people": "",
    "place": "",
    "summary": "边缘智能约 2015 年 出现，建立在 二维材料、摩擦纳米发电、数学 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mat_2d","ene_tribo","mathematics","inf_diffusion"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "边缘智能在 2015 年 前后出现，依托 二维材料 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，边缘智能仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "边缘智能把 二维材料 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_aisearch",
    "name": "AI 搜索",
    "en": "AI Search",
    "category": "info",
    "era": "intelligent",
    "date": "2020 年",
    "year": 2020,
    "people": "",
    "place": "",
    "summary": "AI 搜索约 2020 年 成熟，建立在 二维材料、摩擦纳米发电、数学 之上完成关键突破；其能力延伸到 信息记录、远程传输，并为 代码生成模型 的发展铺平了道路。",
    "dependsOn": ["mat_2d","ene_tribo","mathematics","inf_digitalhuman"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "AI 搜索在 2020 年 前后出现，依托 二维材料 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，AI 搜索仍是 信息记录 的底层支撑，并持续影响 代码生成模型。"
      }
    ],
    "significance": "AI 搜索把 二维材料 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 代码生成模型。"
  },
{
    "id": "inf_codegen",
    "name": "代码生成模型",
    "en": "Code Generation",
    "category": "info",
    "era": "intelligent",
    "date": "2020 年",
    "year": 2020,
    "people": "",
    "place": "",
    "summary": "代码生成模型约 2020 年 出现，建立在 二维材料、摩擦纳米发电、数学 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mat_2d","ene_tribo","mathematics","inf_aisearch"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "代码生成模型在 2020 年 前后出现，依托 二维材料 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，代码生成模型仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "代码生成模型把 二维材料 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bio_herb",
    "name": "草药学",
    "en": "Herbal Medicine",
    "category": "life",
    "era": "prehistoric",
    "date": "公元前 5000 年",
    "year": -5000,
    "people": "",
    "place": "",
    "summary": "草药学约 公元前 5000 年 成熟，建立在 灌溉、发酵 之上完成关键突破；其能力延伸到 疾病治疗、健康维持，并为 牙科 的发展铺平了道路。",
    "dependsOn": ["irrigation","fermentation"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "史前时代",
        "text": "草药学在 公元前 5000 年 前后出现，依托 灌溉 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，草药学仍是 疾病治疗 的底层支撑，并持续影响 牙科。"
      }
    ],
    "significance": "草药学把 灌溉 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 牙科。"
  },
{
    "id": "bio_acupuncture",
    "name": "针灸",
    "en": "Acupuncture",
    "category": "life",
    "era": "ancient",
    "date": "公元前 2000 年",
    "year": -2000,
    "people": "",
    "place": "",
    "summary": "针灸约 公元前 2000 年 成熟，建立在 数学、牙科、犁 之上完成关键突破；其能力延伸到 疾病治疗、健康维持，并为 方剂学、缝合 的发展铺平了道路。",
    "dependsOn": ["mathematics","bio_dentistry","plow"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "针灸在 公元前 2000 年 前后出现，依托 数学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，针灸仍是 疾病治疗 的底层支撑，并持续影响 方剂学、缝合。"
      }
    ],
    "significance": "针灸把 数学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 方剂学、缝合。"
  },
{
    "id": "bio_anatomy",
    "name": "解剖学",
    "en": "Anatomy",
    "category": "life",
    "era": "classical",
    "date": "公元前 300 年",
    "year": -300,
    "people": "",
    "place": "",
    "summary": "解剖学约 公元前 300 年 成熟，建立在 数学、义齿、外科学 之上完成关键突破；其能力延伸到 疾病治疗、健康维持，并为 生理学、蒸馏制药 的发展铺平了道路。",
    "dependsOn": ["mathematics","bio_denture","bio_surgery"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "古典时代",
        "text": "解剖学在 公元前 300 年 前后出现，依托 数学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，解剖学仍是 疾病治疗 的底层支撑，并持续影响 生理学、蒸馏制药。"
      }
    ],
    "significance": "解剖学把 数学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 生理学、蒸馏制药。"
  },
{
    "id": "bio_physiology",
    "name": "生理学",
    "en": "Physiology",
    "category": "life",
    "era": "classical",
    "date": "公元前 300 年",
    "year": -300,
    "people": "",
    "place": "",
    "summary": "生理学约 公元前 300 年 成熟，建立在 数学、解剖学、义齿 之上完成关键突破；其能力延伸到 疾病治疗、健康维持，并为 蒸馏制药、眼镜 的发展铺平了道路。",
    "dependsOn": ["mathematics","bio_anatomy","bio_denture"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "古典时代",
        "text": "生理学在 公元前 300 年 前后出现，依托 数学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，生理学仍是 疾病治疗 的底层支撑，并持续影响 蒸馏制药、眼镜。"
      }
    ],
    "significance": "生理学把 数学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 蒸馏制药、眼镜。"
  },
{
    "id": "bio_pharmacology",
    "name": "药理学",
    "en": "Pharmacology",
    "category": "life",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "药理学在 1800 年 前后成形，依托 化学、数学、牛痘接种 把 疾病治疗、健康维持 落到实处，并成为 生命与医疗 中承上启下的一环，直接支撑了 骨科、内窥镜 等后续技术。",
    "dependsOn": ["chemistry","mathematics","bio_smallpox","vaccination"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "药理学在 1800 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，药理学仍是 疾病治疗 的底层支撑，并持续影响 骨科、内窥镜。"
      }
    ],
    "significance": "药理学把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 骨科、内窥镜。"
  },
{
    "id": "bio_prescription",
    "name": "方剂学",
    "en": "Prescriptions",
    "category": "life",
    "era": "ancient",
    "date": "公元前 2000 年",
    "year": -2000,
    "people": "",
    "place": "",
    "summary": "方剂学在 公元前 2000 年 前后成形，依托 数学、针灸、牙科 把 疾病治疗、健康维持 落到实处，并成为 生命与医疗 中承上启下的一环，直接支撑了 缝合、假肢 等后续技术。",
    "dependsOn": ["mathematics","bio_acupuncture","bio_dentistry"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "方剂学在 公元前 2000 年 前后出现，依托 数学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，方剂学仍是 疾病治疗 的底层支撑，并持续影响 缝合、假肢。"
      }
    ],
    "significance": "方剂学把 数学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 缝合、假肢。"
  },
{
    "id": "bio_distill",
    "name": "蒸馏制药",
    "en": "Distilled Medicine",
    "category": "life",
    "era": "medieval",
    "date": "800 年",
    "year": 800,
    "people": "",
    "place": "",
    "summary": "蒸馏制药约 800 年 成熟，建立在 数学、生理学、解剖学 之上完成关键突破；其能力延伸到 疾病治疗、健康维持，并为 眼镜 的发展铺平了道路。",
    "dependsOn": ["mathematics","bio_physiology","bio_anatomy"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "中世纪",
        "text": "蒸馏制药在 800 年 前后出现，依托 数学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，蒸馏制药仍是 疾病治疗 的底层支撑，并持续影响 眼镜。"
      }
    ],
    "significance": "蒸馏制药把 数学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 眼镜。"
  },
{
    "id": "bio_aspirin",
    "name": "阿司匹林",
    "en": "Aspirin",
    "category": "life",
    "era": "industrial",
    "date": "1897 年",
    "year": 1897,
    "people": "",
    "place": "",
    "summary": "阿司匹林在 1897 年 前后成形，依托 化学、数学、X 射线 把 疾病治疗、健康维持 落到实处，并成为 生命与医疗 中承上启下的一环，直接支撑了 激素疗法、助听器 等后续技术。",
    "dependsOn": ["chemistry","mathematics","bio_xray","medical_imaging"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "阿司匹林在 1897 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，阿司匹林仍是 疾病治疗 的底层支撑，并持续影响 激素疗法、助听器。"
      }
    ],
    "significance": "阿司匹林把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 激素疗法、助听器。"
  },
{
    "id": "bio_penicillin",
    "name": "青霉素",
    "en": "Penicillin",
    "category": "life",
    "era": "electrical",
    "date": "1928 年",
    "year": 1928,
    "people": "",
    "place": "",
    "summary": "青霉素约 1928 年 成熟，建立在 化学、数学、胰岛素 之上完成关键突破；其能力延伸到 疾病治疗、健康维持，并为 抗生素、生物反应器 的发展铺平了道路。",
    "dependsOn": ["chemistry","mathematics","bio_insulin","bio_bcg"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "青霉素在 1928 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，青霉素仍是 疾病治疗 的底层支撑，并持续影响 抗生素、生物反应器。"
      }
    ],
    "significance": "青霉素把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 抗生素、生物反应器。"
  },
{
    "id": "bio_antibiotic",
    "name": "抗生素",
    "en": "Antibiotics",
    "category": "life",
    "era": "electrical",
    "date": "1928 年",
    "year": 1928,
    "people": "",
    "place": "",
    "summary": "抗生素在 1928 年 前后成形，依托 化学、数学、青霉素 把 疾病治疗、健康维持 落到实处，并成为 生命与医疗 中承上启下的一环，直接支撑了 生物反应器、血液制品 等后续技术。",
    "dependsOn": ["chemistry","mathematics","bio_penicillin","bio_insulin"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "抗生素在 1928 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，抗生素仍是 疾病治疗 的底层支撑，并持续影响 生物反应器、血液制品。"
      }
    ],
    "significance": "抗生素把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 生物反应器、血液制品。"
  },
{
    "id": "bio_smallpox",
    "name": "牛痘接种",
    "en": "Smallpox Vaccination",
    "category": "life",
    "era": "industrial",
    "date": "1796 年",
    "year": 1796,
    "people": "",
    "place": "",
    "summary": "牛痘接种在 1796 年 前后成形，依托 化学、数学、疫苗 把 疾病治疗、健康维持 落到实处，并成为 生命与医疗 中承上启下的一环，直接支撑了 药理学、骨科 等后续技术。",
    "dependsOn": ["chemistry","mathematics","vaccination","bio_glasses"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "牛痘接种在 1796 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，牛痘接种仍是 疾病治疗 的底层支撑，并持续影响 药理学、骨科。"
      }
    ],
    "significance": "牛痘接种把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 药理学、骨科。"
  },
{
    "id": "bio_bcg",
    "name": "卡介苗",
    "en": "BCG Vaccine",
    "category": "life",
    "era": "electrical",
    "date": "1921 年",
    "year": 1921,
    "people": "",
    "place": "",
    "summary": "卡介苗在 1921 年 前后成形，依托 化学、数学、噬菌体疗法 把 疾病治疗、健康维持 落到实处，并成为 生命与医疗 中承上启下的一环，直接支撑了 青霉素、胰岛素 等后续技术。",
    "dependsOn": ["chemistry","mathematics","bio_phage","bio_vitamin"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "卡介苗在 1921 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，卡介苗仍是 疾病治疗 的底层支撑，并持续影响 青霉素、胰岛素。"
      }
    ],
    "significance": "卡介苗把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 青霉素、胰岛素。"
  },
{
    "id": "bio_insulin",
    "name": "胰岛素",
    "en": "Insulin",
    "category": "life",
    "era": "electrical",
    "date": "1921 年",
    "year": 1921,
    "people": "",
    "place": "",
    "summary": "胰岛素在 1921 年 前后成形，依托 化学、数学、卡介苗 把 疾病治疗、健康维持 落到实处，并成为 生命与医疗 中承上启下的一环，直接支撑了 青霉素、抗生素 等后续技术。",
    "dependsOn": ["chemistry","mathematics","bio_bcg","bio_phage"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "胰岛素在 1921 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，胰岛素仍是 疾病治疗 的底层支撑，并持续影响 青霉素、抗生素。"
      }
    ],
    "significance": "胰岛素把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 青霉素、抗生素。"
  },
{
    "id": "bio_hormone",
    "name": "激素疗法",
    "en": "Hormone Therapy",
    "category": "life",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "激素疗法在 1900 年 前后成形，依托 化学、数学、助听器 把 疾病治疗、健康维持 落到实处，并成为 生命与医疗 中承上启下的一环，直接支撑了 神经外科、心血管外科 等后续技术。",
    "dependsOn": ["chemistry","mathematics","bio_hearingaid","bio_aspirin"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "激素疗法在 1900 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，激素疗法仍是 疾病治疗 的底层支撑，并持续影响 神经外科、心血管外科。"
      }
    ],
    "significance": "激素疗法把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 神经外科、心血管外科。"
  },
{
    "id": "bio_vitamin",
    "name": "维生素",
    "en": "Vitamin",
    "category": "life",
    "era": "electrical",
    "date": "1912 年",
    "year": 1912,
    "people": "",
    "place": "",
    "summary": "维生素在 1912 年 前后成形，依托 化学、数学、血型 把 疾病治疗、健康维持 落到实处，并成为 生命与医疗 中承上启下的一环，直接支撑了 卡介苗、噬菌体疗法 等后续技术。",
    "dependsOn": ["chemistry","mathematics","bio_bloodtype","bio_radiotherapy"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "维生素在 1912 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，维生素仍是 疾病治疗 的底层支撑，并持续影响 卡介苗、噬菌体疗法。"
      }
    ],
    "significance": "维生素把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 卡介苗、噬菌体疗法。"
  },
{
    "id": "bio_transfusion",
    "name": "输血",
    "en": "Blood Transfusion",
    "category": "life",
    "era": "industrial",
    "date": "1818 年",
    "year": 1818,
    "people": "",
    "place": "",
    "summary": "输血约 1818 年 出现，建立在 化学、数学、病原体鉴定 之上；它把 疾病治疗、健康维持 变成可稳定复现的能力，是 生命与医疗 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","mathematics","bio_pathogen","bio_nutrition"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "输血在 1818 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，输血仍是 疾病治疗 的底层支撑，并作为 生命与医疗 的基础能力持续发挥作用。"
      }
    ],
    "significance": "输血把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bio_bloodtype",
    "name": "血型",
    "en": "Blood Group",
    "category": "life",
    "era": "electrical",
    "date": "1901 年",
    "year": 1901,
    "people": "",
    "place": "",
    "summary": "血型在 1901 年 前后成形，依托 化学、数学、放射治疗 把 疾病治疗、健康维持 落到实处，并成为 生命与医疗 中承上启下的一环，直接支撑了 维生素、噬菌体疗法 等后续技术。",
    "dependsOn": ["chemistry","mathematics","bio_radiotherapy","bio_chemo"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "血型在 1901 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，血型仍是 疾病治疗 的底层支撑，并持续影响 维生素、噬菌体疗法。"
      }
    ],
    "significance": "血型把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 维生素、噬菌体疗法。"
  },
{
    "id": "bio_anesthesia",
    "name": "麻醉",
    "en": "Anesthesia",
    "category": "life",
    "era": "industrial",
    "date": "1846 年",
    "year": 1846,
    "people": "",
    "place": "",
    "summary": "麻醉约 1846 年 成熟，建立在 化学、数学、麻醉 之上完成关键突破；其能力延伸到 疾病治疗、健康维持，并为 无菌术 的发展铺平了道路。",
    "dependsOn": ["chemistry","mathematics","anesthesia","fertilizer"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "麻醉在 1846 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，麻醉仍是 疾病治疗 的底层支撑，并持续影响 无菌术。"
      }
    ],
    "significance": "麻醉把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 无菌术。"
  },
{
    "id": "bio_aseptic",
    "name": "无菌术",
    "en": "Aseptic Technique",
    "category": "life",
    "era": "industrial",
    "date": "1867 年",
    "year": 1867,
    "people": "",
    "place": "",
    "summary": "无菌术约 1867 年 成熟，建立在 化学、数学、无菌外科 之上完成关键突破；其能力延伸到 疾病治疗、健康维持，并为 隐形眼镜 的发展铺平了道路。",
    "dependsOn": ["chemistry","mathematics","surgery","bio_anesthesia"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "无菌术在 1867 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，无菌术仍是 疾病治疗 的底层支撑，并持续影响 隐形眼镜。"
      }
    ],
    "significance": "无菌术把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 隐形眼镜。"
  },
{
    "id": "bio_surgery",
    "name": "外科学",
    "en": "Surgery",
    "category": "life",
    "era": "classical",
    "date": "公元前 500 年",
    "year": -500,
    "people": "",
    "place": "",
    "summary": "外科学约 公元前 500 年 成熟，建立在 数学、假肢、缝合 之上完成关键突破；其能力延伸到 疾病治疗、健康维持，并为 解剖学、义齿 的发展铺平了道路。",
    "dependsOn": ["mathematics","bio_prosthesis","bio_suture"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "古典时代",
        "text": "外科学在 公元前 500 年 前后出现，依托 数学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，外科学仍是 疾病治疗 的底层支撑，并持续影响 解剖学、义齿。"
      }
    ],
    "significance": "外科学把 数学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 解剖学、义齿。"
  },
{
    "id": "bio_suture",
    "name": "缝合",
    "en": "Suturing",
    "category": "life",
    "era": "ancient",
    "date": "公元前 2000 年",
    "year": -2000,
    "people": "",
    "place": "",
    "summary": "缝合在 公元前 2000 年 前后成形，依托 数学、方剂学、针灸 把 疾病治疗、健康维持 落到实处，并成为 生命与医疗 中承上启下的一环，直接支撑了 外科学、假肢 等后续技术。",
    "dependsOn": ["mathematics","bio_prescription","bio_acupuncture"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "缝合在 公元前 2000 年 前后出现，依托 数学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，缝合仍是 疾病治疗 的底层支撑，并持续影响 外科学、假肢。"
      }
    ],
    "significance": "缝合把 数学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 外科学、假肢。"
  },
{
    "id": "bio_orthopedics",
    "name": "骨科",
    "en": "Orthopedics",
    "category": "life",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "骨科在 1800 年 前后成形，依托 化学、数学、药理学 把 疾病治疗、健康维持 落到实处，并成为 生命与医疗 中承上启下的一环，直接支撑了 内窥镜、流行病学 等后续技术。",
    "dependsOn": ["chemistry","mathematics","bio_pharmacology","bio_smallpox"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "骨科在 1800 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，骨科仍是 疾病治疗 的底层支撑，并持续影响 内窥镜、流行病学。"
      }
    ],
    "significance": "骨科把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 内窥镜、流行病学。"
  },
{
    "id": "bio_neurosurgery",
    "name": "神经外科",
    "en": "Neurosurgery",
    "category": "life",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "神经外科在 1900 年 前后成形，依托 化学、数学、激素疗法 把 疾病治疗、健康维持 落到实处，并成为 生命与医疗 中承上启下的一环，直接支撑了 心血管外科、腹腔镜 等后续技术。",
    "dependsOn": ["chemistry","mathematics","bio_hormone","bio_hearingaid"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "神经外科在 1900 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，神经外科仍是 疾病治疗 的底层支撑，并持续影响 心血管外科、腹腔镜。"
      }
    ],
    "significance": "神经外科把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 心血管外科、腹腔镜。"
  },
{
    "id": "bio_cardiovascular",
    "name": "心血管外科",
    "en": "Cardiovascular Surgery",
    "category": "life",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "心血管外科约 1900 年 成熟，建立在 化学、数学、神经外科 之上完成关键突破；其能力延伸到 疾病治疗、健康维持，并为 腹腔镜、益生菌 的发展铺平了道路。",
    "dependsOn": ["chemistry","mathematics","bio_neurosurgery","bio_hormone"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "心血管外科在 1900 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，心血管外科仍是 疾病治疗 的底层支撑，并持续影响 腹腔镜、益生菌。"
      }
    ],
    "significance": "心血管外科把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 腹腔镜、益生菌。"
  },
{
    "id": "bio_transplant",
    "name": "器官移植",
    "en": "Organ Transplant",
    "category": "life",
    "era": "info",
    "date": "1954 年",
    "year": 1954,
    "people": "",
    "place": "",
    "summary": "器官移植约 1954 年 成熟，建立在 化学、数学、遗传学 / DNA 之上完成关键突破；其能力延伸到 疾病治疗、健康维持，并为 心脏起搏器、干扰素 的发展铺平了道路。",
    "dependsOn": ["chemistry","mathematics","dna","bio_inhaler"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "器官移植在 1954 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，器官移植仍是 疾病治疗 的底层支撑，并持续影响 心脏起搏器、干扰素。"
      }
    ],
    "significance": "器官移植把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 心脏起搏器、干扰素。"
  },
{
    "id": "bio_dialysis",
    "name": "血液透析",
    "en": "Dialysis",
    "category": "life",
    "era": "electrical",
    "date": "1943 年",
    "year": 1943,
    "people": "",
    "place": "",
    "summary": "血液透析在 1943 年 前后成形，依托 化学、数学、血液制品 把 疾病治疗、健康维持 落到实处，并成为 生命与医疗 中承上启下的一环，直接支撑了 人工肾、人工晶体 等后续技术。",
    "dependsOn": ["chemistry","mathematics","bio_bloodprod","bio_bioreactor"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "血液透析在 1943 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，血液透析仍是 疾病治疗 的底层支撑，并持续影响 人工肾、人工晶体。"
      }
    ],
    "significance": "血液透析把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 人工肾、人工晶体。"
  },
{
    "id": "bio_artkidney",
    "name": "人工肾",
    "en": "Artificial Kidney",
    "category": "life",
    "era": "electrical",
    "date": "1943 年",
    "year": 1943,
    "people": "",
    "place": "",
    "summary": "人工肾约 1943 年 成熟，建立在 化学、数学、血液透析 之上完成关键突破；其能力延伸到 疾病治疗、健康维持，并为 超声诊断、人工晶体 的发展铺平了道路。",
    "dependsOn": ["chemistry","mathematics","bio_dialysis","bio_bloodprod"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "人工肾在 1943 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，人工肾仍是 疾病治疗 的底层支撑，并持续影响 超声诊断、人工晶体。"
      }
    ],
    "significance": "人工肾把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 超声诊断、人工晶体。"
  },
{
    "id": "bio_pacemaker",
    "name": "心脏起搏器",
    "en": "Pacemaker",
    "category": "life",
    "era": "info",
    "date": "1958 年",
    "year": 1958,
    "people": "",
    "place": "",
    "summary": "心脏起搏器约 1958 年 成熟，建立在 化学、数学、干扰素 之上完成关键突破；其能力延伸到 疾病治疗、健康维持，并为 抗病毒药、人工关节 的发展铺平了道路。",
    "dependsOn": ["chemistry","mathematics","bio_interferon","bio_transplant"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "心脏起搏器在 1958 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，心脏起搏器仍是 疾病治疗 的底层支撑，并持续影响 抗病毒药、人工关节。"
      }
    ],
    "significance": "心脏起搏器把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 抗病毒药、人工关节。"
  },
{
    "id": "bio_stent",
    "name": "血管支架",
    "en": "Stent",
    "category": "life",
    "era": "info",
    "date": "1980 年",
    "year": 1980,
    "people": "",
    "place": "",
    "summary": "血管支架在 1980 年 前后成形，依托 化学、数学、试管婴儿 把 疾病治疗、健康维持 落到实处，并成为 生命与医疗 中承上启下的一环，直接支撑了 组织工程、人工皮肤 等后续技术。",
    "dependsOn": ["chemistry","mathematics","bio_ivf","bio_cochlear"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "血管支架在 1980 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，血管支架仍是 疾病治疗 的底层支撑，并持续影响 组织工程、人工皮肤。"
      }
    ],
    "significance": "血管支架把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 组织工程、人工皮肤。"
  },
{
    "id": "bio_endoscope",
    "name": "内窥镜",
    "en": "Endoscope",
    "category": "life",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "内窥镜在 1800 年 前后成形，依托 化学、数学、骨科 把 疾病治疗、健康维持 落到实处，并成为 生命与医疗 中承上启下的一环，直接支撑了 流行病学、消毒剂 等后续技术。",
    "dependsOn": ["chemistry","mathematics","bio_orthopedics","bio_pharmacology"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "内窥镜在 1800 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，内窥镜仍是 疾病治疗 的底层支撑，并持续影响 流行病学、消毒剂。"
      }
    ],
    "significance": "内窥镜把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 流行病学、消毒剂。"
  },
{
    "id": "bio_laparoscope",
    "name": "腹腔镜",
    "en": "Laparoscope",
    "category": "life",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "腹腔镜约 1900 年 成熟，建立在 化学、数学、心血管外科 之上完成关键突破；其能力延伸到 疾病治疗、健康维持，并为 益生菌、发酵工程 的发展铺平了道路。",
    "dependsOn": ["chemistry","mathematics","bio_cardiovascular","bio_neurosurgery"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "腹腔镜在 1900 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，腹腔镜仍是 疾病治疗 的底层支撑，并持续影响 益生菌、发酵工程。"
      }
    ],
    "significance": "腹腔镜把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 益生菌、发酵工程。"
  },
{
    "id": "bio_ultrasound",
    "name": "超声诊断",
    "en": "Medical Ultrasound",
    "category": "life",
    "era": "info",
    "date": "1950 年",
    "year": 1950,
    "people": "",
    "place": "",
    "summary": "超声诊断约 1950 年 成熟，建立在 化学、数学、人工晶体 之上完成关键突破；其能力延伸到 疾病治疗、健康维持，并为 核医学、酶工程 的发展铺平了道路。",
    "dependsOn": ["chemistry","mathematics","bio_iol","bio_artkidney"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "超声诊断在 1950 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，超声诊断仍是 疾病治疗 的底层支撑，并持续影响 核医学、酶工程。"
      }
    ],
    "significance": "超声诊断把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 核医学、酶工程。"
  },
{
    "id": "bio_ct",
    "name": "CT 扫描",
    "en": "CT Scan",
    "category": "life",
    "era": "info",
    "date": "1971 年",
    "year": 1971,
    "people": "",
    "place": "",
    "summary": "CT 扫描约 1971 年 成熟，建立在 化学、数学、基因递送载体 之上完成关键突破；其能力延伸到 疾病治疗、健康维持，并为 体外膜肺氧合 的发展铺平了道路。",
    "dependsOn": ["chemistry","mathematics","bio_genevector","bio_transdermal"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "CT 扫描在 1971 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，CT 扫描仍是 疾病治疗 的底层支撑，并持续影响 体外膜肺氧合。"
      }
    ],
    "significance": "CT 扫描把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 体外膜肺氧合。"
  },
{
    "id": "bio_mri",
    "name": "核磁共振",
    "en": "MRI",
    "category": "life",
    "era": "info",
    "date": "1973 年",
    "year": 1973,
    "people": "",
    "place": "",
    "summary": "核磁共振在 1973 年 前后成形，依托 化学、数学、基因工程 把 疾病治疗、健康维持 落到实处，并成为 生命与医疗 中承上启下的一环，直接支撑了 转基因、单克隆抗体 等后续技术。",
    "dependsOn": ["chemistry","mathematics","genetic_engineering","bio_ecmo"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "核磁共振在 1973 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，核磁共振仍是 疾病治疗 的底层支撑，并持续影响 转基因、单克隆抗体。"
      }
    ],
    "significance": "核磁共振把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 转基因、单克隆抗体。"
  },
{
    "id": "bio_xray",
    "name": "X 射线",
    "en": "X-Ray",
    "category": "life",
    "era": "industrial",
    "date": "1895 年",
    "year": 1895,
    "people": "",
    "place": "",
    "summary": "X 射线在 1895 年 前后成形，依托 化学、数学、医学影像 把 疾病治疗、健康维持 落到实处，并成为 生命与医疗 中承上启下的一环，直接支撑了 阿司匹林、助听器 等后续技术。",
    "dependsOn": ["chemistry","mathematics","medical_imaging","bio_contactlens"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "X 射线在 1895 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，X 射线仍是 疾病治疗 的底层支撑，并持续影响 阿司匹林、助听器。"
      }
    ],
    "significance": "X 射线把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 阿司匹林、助听器。"
  },
{
    "id": "bio_nuclear_med",
    "name": "核医学",
    "en": "Nuclear Medicine",
    "category": "life",
    "era": "info",
    "date": "1950 年",
    "year": 1950,
    "people": "",
    "place": "",
    "summary": "核医学约 1950 年 成熟，建立在 化学、数学、超声诊断 之上完成关键突破；其能力延伸到 疾病治疗、健康维持，并为 酶工程、体外诊断 的发展铺平了道路。",
    "dependsOn": ["chemistry","mathematics","bio_ultrasound","bio_iol"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "核医学在 1950 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，核医学仍是 疾病治疗 的底层支撑，并持续影响 酶工程、体外诊断。"
      }
    ],
    "significance": "核医学把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 酶工程、体外诊断。"
  },
{
    "id": "bio_pet",
    "name": "正电子成像",
    "en": "PET",
    "category": "life",
    "era": "info",
    "date": "1970 年",
    "year": 1970,
    "people": "",
    "place": "",
    "summary": "正电子成像约 1970 年 成熟，建立在 化学、数学、干细胞 之上完成关键突破；其能力延伸到 疾病治疗、健康维持，并为 电子病历、脑机接口 的发展铺平了道路。",
    "dependsOn": ["chemistry","mathematics","bio_stemcell","bio_arthroplasty"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "正电子成像在 1970 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，正电子成像仍是 疾病治疗 的底层支撑，并持续影响 电子病历、脑机接口。"
      }
    ],
    "significance": "正电子成像把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 电子病历、脑机接口。"
  },
{
    "id": "bio_seq",
    "name": "基因测序",
    "en": "DNA Sequencing",
    "category": "life",
    "era": "info",
    "date": "1977 年",
    "year": 1977,
    "people": "",
    "place": "",
    "summary": "基因测序约 1977 年 成熟，建立在 化学、数学、单克隆抗体 之上完成关键突破；其能力延伸到 疾病治疗、健康维持，并为 试管婴儿、人工耳蜗 的发展铺平了道路。",
    "dependsOn": ["chemistry","mathematics","bio_monoclonal","bio_transgenic"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "基因测序在 1977 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，基因测序仍是 疾病治疗 的底层支撑，并持续影响 试管婴儿、人工耳蜗。"
      }
    ],
    "significance": "基因测序把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 试管婴儿、人工耳蜗。"
  },
{
    "id": "bio_pcr",
    "name": "聚合酶链反应",
    "en": "PCR",
    "category": "life",
    "era": "info",
    "date": "1983 年",
    "year": 1983,
    "people": "",
    "place": "",
    "summary": "聚合酶链反应约 1983 年 成熟，建立在 化学、数学、表观遗传学 之上完成关键突破；其能力延伸到 疾病治疗、健康维持，并为 mRNA 疫苗、深部脑刺激 的发展铺平了道路。",
    "dependsOn": ["chemistry","mathematics","bio_epigenetics","bio_proteineng"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "聚合酶链反应在 1983 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，聚合酶链反应仍是 疾病治疗 的底层支撑，并持续影响 mRNA 疫苗、深部脑刺激。"
      }
    ],
    "significance": "聚合酶链反应把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 mRNA 疫苗、深部脑刺激。"
  },
{
    "id": "bio_crispr",
    "name": "基因编辑",
    "en": "CRISPR",
    "category": "life",
    "era": "intelligent",
    "date": "2012 年",
    "year": 2012,
    "people": "",
    "place": "",
    "summary": "基因编辑约 2012 年 成熟，建立在 化学、数学、连续血糖监测 之上完成关键突破；其能力延伸到 疾病治疗、健康维持，并为 通用疫苗 的发展铺平了道路。",
    "dependsOn": ["chemistry","mathematics","bio_cgm","bio_ctdna"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "基因编辑在 2012 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，基因编辑仍是 疾病治疗 的底层支撑，并持续影响 通用疫苗。"
      }
    ],
    "significance": "基因编辑把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 通用疫苗。"
  },
{
    "id": "bio_transgenic",
    "name": "转基因",
    "en": "Transgenics",
    "category": "life",
    "era": "info",
    "date": "1973 年",
    "year": 1973,
    "people": "",
    "place": "",
    "summary": "转基因在 1973 年 前后成形，依托 化学、数学、核磁共振 把 疾病治疗、健康维持 落到实处，并成为 生命与医疗 中承上启下的一环，直接支撑了 基因测序、单克隆抗体 等后续技术。",
    "dependsOn": ["chemistry","mathematics","bio_mri","genetic_engineering"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "转基因在 1973 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，转基因仍是 疾病治疗 的底层支撑，并持续影响 基因测序、单克隆抗体。"
      }
    ],
    "significance": "转基因把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 基因测序、单克隆抗体。"
  },
{
    "id": "bio_clone",
    "name": "克隆技术",
    "en": "Cloning",
    "category": "life",
    "era": "info",
    "date": "1996 年",
    "year": 1996,
    "people": "",
    "place": "",
    "summary": "克隆技术约 1996 年 成熟，建立在 化学、数学、蛋白组学 之上完成关键突破；其能力延伸到 疾病治疗、健康维持，并为 细胞治疗、可穿戴健康 的发展铺平了道路。",
    "dependsOn": ["chemistry","mathematics","bio_proteomics2","gmo"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "克隆技术在 1996 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，克隆技术仍是 疾病治疗 的底层支撑，并持续影响 细胞治疗、可穿戴健康。"
      }
    ],
    "significance": "克隆技术把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 细胞治疗、可穿戴健康。"
  },
{
    "id": "bio_ivf",
    "name": "试管婴儿",
    "en": "IVF",
    "category": "life",
    "era": "info",
    "date": "1978 年",
    "year": 1978,
    "people": "",
    "place": "",
    "summary": "试管婴儿约 1978 年 成熟，建立在 化学、数学、人工耳蜗 之上完成关键突破；其能力延伸到 疾病治疗、健康维持，并为 血管支架、组织工程 的发展铺平了道路。",
    "dependsOn": ["chemistry","mathematics","bio_cochlear","bio_seq"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "试管婴儿在 1978 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，试管婴儿仍是 疾病治疗 的底层支撑，并持续影响 血管支架、组织工程。"
      }
    ],
    "significance": "试管婴儿把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 血管支架、组织工程。"
  },
{
    "id": "bio_stemcell",
    "name": "干细胞",
    "en": "Stem Cell",
    "category": "life",
    "era": "info",
    "date": "1963 年",
    "year": 1963,
    "people": "",
    "place": "",
    "summary": "干细胞约 1963 年 成熟，建立在 化学、数学、人工关节 之上完成关键突破；其能力延伸到 疾病治疗、健康维持，并为 正电子成像、电子病历 的发展铺平了道路。",
    "dependsOn": ["chemistry","mathematics","bio_arthroplasty","bio_antiviral"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "干细胞在 1963 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，干细胞仍是 疾病治疗 的底层支撑，并持续影响 正电子成像、电子病历。"
      }
    ],
    "significance": "干细胞把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 正电子成像、电子病历。"
  },
{
    "id": "bio_tissueeng",
    "name": "组织工程",
    "en": "Tissue Engineering",
    "category": "life",
    "era": "info",
    "date": "1980 年",
    "year": 1980,
    "people": "",
    "place": "",
    "summary": "组织工程约 1980 年 成熟，建立在 化学、数学、血管支架 之上完成关键突破；其能力延伸到 疾病治疗、健康维持，并为 人工皮肤、快速检测 的发展铺平了道路。",
    "dependsOn": ["chemistry","mathematics","bio_stent","bio_ivf"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "组织工程在 1980 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，组织工程仍是 疾病治疗 的底层支撑，并持续影响 人工皮肤、快速检测。"
      }
    ],
    "significance": "组织工程把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 人工皮肤、快速检测。"
  },
{
    "id": "bio_artskin",
    "name": "人工皮肤",
    "en": "Artificial Skin",
    "category": "life",
    "era": "info",
    "date": "1980 年",
    "year": 1980,
    "people": "",
    "place": "",
    "summary": "人工皮肤在 1980 年 前后成形，依托 化学、数学、组织工程 把 疾病治疗、健康维持 落到实处，并成为 生命与医疗 中承上启下的一环，直接支撑了 快速检测、神经调控 等后续技术。",
    "dependsOn": ["chemistry","mathematics","bio_tissueeng","bio_stent"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "人工皮肤在 1980 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，人工皮肤仍是 疾病治疗 的底层支撑，并持续影响 快速检测、神经调控。"
      }
    ],
    "significance": "人工皮肤把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 快速检测、神经调控。"
  },
{
    "id": "bio_prosthesis",
    "name": "假肢",
    "en": "Prosthesis",
    "category": "life",
    "era": "ancient",
    "date": "公元前 2000 年",
    "year": -2000,
    "people": "",
    "place": "",
    "summary": "假肢在 公元前 2000 年 前后成形，依托 数学、缝合、方剂学 把 疾病治疗、健康维持 落到实处，并成为 生命与医疗 中承上启下的一环，直接支撑了 外科学、义齿 等后续技术。",
    "dependsOn": ["mathematics","bio_suture","bio_prescription"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "假肢在 公元前 2000 年 前后出现，依托 数学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，假肢仍是 疾病治疗 的底层支撑，并持续影响 外科学、义齿。"
      }
    ],
    "significance": "假肢把 数学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 外科学、义齿。"
  },
{
    "id": "bio_hearingaid",
    "name": "助听器",
    "en": "Hearing Aid",
    "category": "life",
    "era": "industrial",
    "date": "1898 年",
    "year": 1898,
    "people": "",
    "place": "",
    "summary": "助听器在 1898 年 前后成形，依托 化学、数学、阿司匹林 把 疾病治疗、健康维持 落到实处，并成为 生命与医疗 中承上启下的一环，直接支撑了 激素疗法、神经外科 等后续技术。",
    "dependsOn": ["chemistry","mathematics","bio_aspirin","bio_xray"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "助听器在 1898 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，助听器仍是 疾病治疗 的底层支撑，并持续影响 激素疗法、神经外科。"
      }
    ],
    "significance": "助听器把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 激素疗法、神经外科。"
  },
{
    "id": "bio_glasses",
    "name": "眼镜",
    "en": "Eyeglasses",
    "category": "life",
    "era": "medieval",
    "date": "1280 年",
    "year": 1280,
    "people": "",
    "place": "",
    "summary": "眼镜在 1280 年 前后成形，依托 数学、蒸馏制药、生理学 把 疾病治疗、健康维持 落到实处，并成为 生命与医疗 中承上启下的一环，直接支撑了 牛痘接种 等后续技术。",
    "dependsOn": ["mathematics","bio_distill","bio_physiology"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "中世纪",
        "text": "眼镜在 1280 年 前后出现，依托 数学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，眼镜仍是 疾病治疗 的底层支撑，并持续影响 牛痘接种。"
      }
    ],
    "significance": "眼镜把 数学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 牛痘接种。"
  },
{
    "id": "bio_contactlens",
    "name": "隐形眼镜",
    "en": "Contact Lens",
    "category": "life",
    "era": "industrial",
    "date": "1888 年",
    "year": 1888,
    "people": "",
    "place": "",
    "summary": "隐形眼镜在 1888 年 前后成形，依托 化学、数学、无菌术 把 疾病治疗、健康维持 落到实处，并成为 生命与医疗 中承上启下的一环，直接支撑了 X 射线 等后续技术。",
    "dependsOn": ["chemistry","mathematics","bio_aseptic","surgery"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "隐形眼镜在 1888 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，隐形眼镜仍是 疾病治疗 的底层支撑，并持续影响 X 射线。"
      }
    ],
    "significance": "隐形眼镜把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 X 射线。"
  },
{
    "id": "bio_iol",
    "name": "人工晶体",
    "en": "Intraocular Lens",
    "category": "life",
    "era": "electrical",
    "date": "1949 年",
    "year": 1949,
    "people": "",
    "place": "",
    "summary": "人工晶体在 1949 年 前后成形，依托 化学、数学、人工肾 把 疾病治疗、健康维持 落到实处，并成为 生命与医疗 中承上启下的一环，直接支撑了 超声诊断、核医学 等后续技术。",
    "dependsOn": ["chemistry","mathematics","bio_artkidney","bio_dialysis"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "人工晶体在 1949 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，人工晶体仍是 疾病治疗 的底层支撑，并持续影响 超声诊断、核医学。"
      }
    ],
    "significance": "人工晶体把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 超声诊断、核医学。"
  },
{
    "id": "bio_denture",
    "name": "义齿",
    "en": "Denture",
    "category": "life",
    "era": "classical",
    "date": "公元前 500 年",
    "year": -500,
    "people": "",
    "place": "",
    "summary": "义齿约 公元前 500 年 成熟，建立在 数学、外科学、假肢 之上完成关键突破；其能力延伸到 疾病治疗、健康维持，并为 解剖学、生理学 的发展铺平了道路。",
    "dependsOn": ["mathematics","bio_surgery","bio_prosthesis"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "古典时代",
        "text": "义齿在 公元前 500 年 前后出现，依托 数学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，义齿仍是 疾病治疗 的底层支撑，并持续影响 解剖学、生理学。"
      }
    ],
    "significance": "义齿把 数学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 解剖学、生理学。"
  },
{
    "id": "bio_dentistry",
    "name": "牙科",
    "en": "Dentistry",
    "category": "life",
    "era": "ancient",
    "date": "公元前 3000 年",
    "year": -3000,
    "people": "",
    "place": "",
    "summary": "牙科在 公元前 3000 年 前后成形，依托 数学、犁、草药学 把 疾病治疗、健康维持 落到实处，并成为 生命与医疗 中承上启下的一环，直接支撑了 针灸、方剂学 等后续技术。",
    "dependsOn": ["mathematics","plow","bio_herb"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "牙科在 公元前 3000 年 前后出现，依托 数学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，牙科仍是 疾病治疗 的底层支撑，并持续影响 针灸、方剂学。"
      }
    ],
    "significance": "牙科把 数学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 针灸、方剂学。"
  },
{
    "id": "bio_epidemiology",
    "name": "流行病学",
    "en": "Epidemiology",
    "category": "life",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "流行病学约 1800 年 成熟，建立在 化学、数学、内窥镜 之上完成关键突破；其能力延伸到 疾病治疗、健康维持，并为 消毒剂、营养学 的发展铺平了道路。",
    "dependsOn": ["chemistry","mathematics","bio_endoscope","bio_orthopedics"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "流行病学在 1800 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，流行病学仍是 疾病治疗 的底层支撑，并持续影响 消毒剂、营养学。"
      }
    ],
    "significance": "流行病学把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 消毒剂、营养学。"
  },
{
    "id": "bio_disinfectant",
    "name": "消毒剂",
    "en": "Disinfectant",
    "category": "life",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "消毒剂在 1800 年 前后成形，依托 化学、数学、流行病学 把 疾病治疗、健康维持 落到实处，并成为 生命与医疗 中承上启下的一环，直接支撑了 营养学、病原体鉴定 等后续技术。",
    "dependsOn": ["chemistry","mathematics","bio_epidemiology","bio_endoscope"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "消毒剂在 1800 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，消毒剂仍是 疾病治疗 的底层支撑，并持续影响 营养学、病原体鉴定。"
      }
    ],
    "significance": "消毒剂把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 营养学、病原体鉴定。"
  },
{
    "id": "bio_probiotic",
    "name": "益生菌",
    "en": "Probiotics",
    "category": "life",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "益生菌约 1900 年 成熟，建立在 化学、数学、腹腔镜 之上完成关键突破；其能力延伸到 疾病治疗、健康维持，并为 发酵工程、化学治疗 的发展铺平了道路。",
    "dependsOn": ["chemistry","mathematics","bio_laparoscope","bio_cardiovascular"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "益生菌在 1900 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，益生菌仍是 疾病治疗 的底层支撑，并持续影响 发酵工程、化学治疗。"
      }
    ],
    "significance": "益生菌把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 发酵工程、化学治疗。"
  },
{
    "id": "bio_nutrition",
    "name": "营养学",
    "en": "Nutrition",
    "category": "life",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "营养学在 1800 年 前后成形，依托 化学、数学、消毒剂 把 疾病治疗、健康维持 落到实处，并成为 生命与医疗 中承上启下的一环，直接支撑了 输血、病原体鉴定 等后续技术。",
    "dependsOn": ["chemistry","mathematics","bio_disinfectant","bio_epidemiology"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "营养学在 1800 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，营养学仍是 疾病治疗 的底层支撑，并持续影响 输血、病原体鉴定。"
      }
    ],
    "significance": "营养学把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 输血、病原体鉴定。"
  },
{
    "id": "bio_enzyme",
    "name": "酶工程",
    "en": "Enzyme Engineering",
    "category": "life",
    "era": "info",
    "date": "1950 年",
    "year": 1950,
    "people": "",
    "place": "",
    "summary": "酶工程在 1950 年 前后成形，依托 化学、数学、核医学 把 疾病治疗、健康维持 落到实处，并成为 生命与医疗 中承上启下的一环，直接支撑了 体外诊断、远程医疗 等后续技术。",
    "dependsOn": ["chemistry","mathematics","bio_nuclear_med","bio_ultrasound"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "酶工程在 1950 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，酶工程仍是 疾病治疗 的底层支撑，并持续影响 体外诊断、远程医疗。"
      }
    ],
    "significance": "酶工程把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 体外诊断、远程医疗。"
  },
{
    "id": "bio_fermentation",
    "name": "发酵工程",
    "en": "Fermentation Engineering",
    "category": "life",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "发酵工程在 1900 年 前后成形，依托 化学、数学、益生菌 把 疾病治疗、健康维持 落到实处，并成为 生命与医疗 中承上启下的一环，直接支撑了 化学治疗、放射治疗 等后续技术。",
    "dependsOn": ["chemistry","mathematics","bio_probiotic","bio_laparoscope"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "发酵工程在 1900 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，发酵工程仍是 疾病治疗 的底层支撑，并持续影响 化学治疗、放射治疗。"
      }
    ],
    "significance": "发酵工程把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 化学治疗、放射治疗。"
  },
{
    "id": "bio_bioreactor",
    "name": "生物反应器",
    "en": "Bioreactor",
    "category": "life",
    "era": "electrical",
    "date": "1940 年",
    "year": 1940,
    "people": "",
    "place": "",
    "summary": "生物反应器在 1940 年 前后成形，依托 化学、数学、抗生素 把 疾病治疗、健康维持 落到实处，并成为 生命与医疗 中承上启下的一环，直接支撑了 血液透析、血液制品 等后续技术。",
    "dependsOn": ["chemistry","mathematics","bio_antibiotic","bio_penicillin"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "生物反应器在 1940 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，生物反应器仍是 疾病治疗 的底层支撑，并持续影响 血液透析、血液制品。"
      }
    ],
    "significance": "生物反应器把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 血液透析、血液制品。"
  },
{
    "id": "bio_monoclonal",
    "name": "单克隆抗体",
    "en": "Monoclonal Antibody",
    "category": "life",
    "era": "info",
    "date": "1975 年",
    "year": 1975,
    "people": "",
    "place": "",
    "summary": "单克隆抗体在 1975 年 前后成形，依托 化学、数学、转基因 把 疾病治疗、健康维持 落到实处，并成为 生命与医疗 中承上启下的一环，直接支撑了 基因测序、人工耳蜗 等后续技术。",
    "dependsOn": ["chemistry","mathematics","bio_transgenic","bio_mri"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "单克隆抗体在 1975 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，单克隆抗体仍是 疾病治疗 的底层支撑，并持续影响 基因测序、人工耳蜗。"
      }
    ],
    "significance": "单克隆抗体把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 基因测序、人工耳蜗。"
  },
{
    "id": "bio_interferon",
    "name": "干扰素",
    "en": "Interferon",
    "category": "life",
    "era": "info",
    "date": "1957 年",
    "year": 1957,
    "people": "",
    "place": "",
    "summary": "干扰素在 1957 年 前后成形，依托 化学、数学、器官移植 把 疾病治疗、健康维持 落到实处，并成为 生命与医疗 中承上启下的一环，直接支撑了 心脏起搏器、抗病毒药 等后续技术。",
    "dependsOn": ["chemistry","mathematics","bio_transplant","dna"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "干扰素在 1957 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，干扰素仍是 疾病治疗 的底层支撑，并持续影响 心脏起搏器、抗病毒药。"
      }
    ],
    "significance": "干扰素把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 心脏起搏器、抗病毒药。"
  },
{
    "id": "bio_mrnavax",
    "name": "mRNA 疫苗",
    "en": "mRNA Vaccine",
    "category": "life",
    "era": "info",
    "date": "1990 年",
    "year": 1990,
    "people": "",
    "place": "",
    "summary": "mRNA 疫苗约 1990 年 成熟，建立在 化学、数学、深部脑刺激 之上完成关键突破；其能力延伸到 疾病治疗、健康维持，并为 靶向治疗、基因治疗 的发展铺平了道路。",
    "dependsOn": ["chemistry","mathematics","bio_dbs","bio_pcr"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "mRNA 疫苗在 1990 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，mRNA 疫苗仍是 疾病治疗 的底层支撑，并持续影响 靶向治疗、基因治疗。"
      }
    ],
    "significance": "mRNA 疫苗把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 靶向治疗、基因治疗。"
  },
{
    "id": "bio_antiviral",
    "name": "抗病毒药",
    "en": "Antiviral",
    "category": "life",
    "era": "info",
    "date": "1960 年",
    "year": 1960,
    "people": "",
    "place": "",
    "summary": "抗病毒药在 1960 年 前后成形，依托 化学、数学、心脏起搏器 把 疾病治疗、健康维持 落到实处，并成为 生命与医疗 中承上启下的一环，直接支撑了 干细胞、人工关节 等后续技术。",
    "dependsOn": ["chemistry","mathematics","bio_pacemaker","bio_interferon"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "抗病毒药在 1960 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，抗病毒药仍是 疾病治疗 的底层支撑，并持续影响 干细胞、人工关节。"
      }
    ],
    "significance": "抗病毒药把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 干细胞、人工关节。"
  },
{
    "id": "bio_chemo",
    "name": "化学治疗",
    "en": "Chemotherapy",
    "category": "life",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "化学治疗在 1900 年 前后成形，依托 化学、数学、发酵工程 把 疾病治疗、健康维持 落到实处，并成为 生命与医疗 中承上启下的一环，直接支撑了 血型、放射治疗 等后续技术。",
    "dependsOn": ["chemistry","mathematics","bio_fermentation","bio_probiotic"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "化学治疗在 1900 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，化学治疗仍是 疾病治疗 的底层支撑，并持续影响 血型、放射治疗。"
      }
    ],
    "significance": "化学治疗把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 血型、放射治疗。"
  },
{
    "id": "bio_radiotherapy",
    "name": "放射治疗",
    "en": "Radiotherapy",
    "category": "life",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "放射治疗在 1900 年 前后成形，依托 化学、数学、化学治疗 把 疾病治疗、健康维持 落到实处，并成为 生命与医疗 中承上启下的一环，直接支撑了 维生素、血型 等后续技术。",
    "dependsOn": ["chemistry","mathematics","bio_chemo","bio_fermentation"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "放射治疗在 1900 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，放射治疗仍是 疾病治疗 的底层支撑，并持续影响 维生素、血型。"
      }
    ],
    "significance": "放射治疗把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 维生素、血型。"
  },
{
    "id": "bio_targeted",
    "name": "靶向治疗",
    "en": "Targeted Therapy",
    "category": "life",
    "era": "info",
    "date": "1990 年",
    "year": 1990,
    "people": "",
    "place": "",
    "summary": "靶向治疗在 1990 年 前后成形，依托 化学、数学、mRNA 疫苗 把 疾病治疗、健康维持 落到实处，并成为 生命与医疗 中承上启下的一环，直接支撑了 基因治疗、定向进化 等后续技术。",
    "dependsOn": ["chemistry","mathematics","bio_mrnavax","bio_dbs"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "靶向治疗在 1990 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，靶向治疗仍是 疾病治疗 的底层支撑，并持续影响 基因治疗、定向进化。"
      }
    ],
    "significance": "靶向治疗把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 基因治疗、定向进化。"
  },
{
    "id": "bio_immunotherapy",
    "name": "免疫治疗",
    "en": "Immunotherapy",
    "category": "life",
    "era": "intelligent",
    "date": "2010 年",
    "year": 2010,
    "people": "",
    "place": "",
    "summary": "免疫治疗在 2010 年 前后成形，依托 化学、数学、单细胞测序 把 疾病治疗、健康维持 落到实处，并成为 生命与医疗 中承上启下的一环，直接支撑了 CAR-T 疗法、医疗影像 AI 等后续技术。",
    "dependsOn": ["chemistry","mathematics","bio_singlecell","bio_organoid"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "免疫治疗在 2010 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，免疫治疗仍是 疾病治疗 的底层支撑，并持续影响 CAR-T 疗法、医疗影像 AI。"
      }
    ],
    "significance": "免疫治疗把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 CAR-T 疗法、医疗影像 AI。"
  },
{
    "id": "bio_genetherapy",
    "name": "基因治疗",
    "en": "Gene Therapy",
    "category": "life",
    "era": "info",
    "date": "1990 年",
    "year": 1990,
    "people": "",
    "place": "",
    "summary": "基因治疗在 1990 年 前后成形，依托 化学、数学、靶向治疗 把 疾病治疗、健康维持 落到实处，并成为 生命与医疗 中承上启下的一环，直接支撑了 定向进化、代谢工程 等后续技术。",
    "dependsOn": ["chemistry","mathematics","bio_targeted","bio_mrnavax"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "基因治疗在 1990 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，基因治疗仍是 疾病治疗 的底层支撑，并持续影响 定向进化、代谢工程。"
      }
    ],
    "significance": "基因治疗把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 定向进化、代谢工程。"
  },
{
    "id": "bio_celltherapy",
    "name": "细胞治疗",
    "en": "Cell Therapy",
    "category": "life",
    "era": "intelligent",
    "date": "2000 年",
    "year": 2000,
    "people": "",
    "place": "",
    "summary": "细胞治疗约 2000 年 成熟，建立在 化学、数学、克隆技术 之上完成关键突破；其能力延伸到 疾病治疗、健康维持，并为 可穿戴健康、手术机器人 的发展铺平了道路。",
    "dependsOn": ["chemistry","mathematics","bio_clone","bio_proteomics2"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "细胞治疗在 2000 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，细胞治疗仍是 疾病治疗 的底层支撑，并持续影响 可穿戴健康、手术机器人。"
      }
    ],
    "significance": "细胞治疗把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 可穿戴健康、手术机器人。"
  },
{
    "id": "bio_cart",
    "name": "CAR-T 疗法",
    "en": "CAR-T",
    "category": "life",
    "era": "intelligent",
    "date": "2010 年",
    "year": 2010,
    "people": "",
    "place": "",
    "summary": "CAR-T 疗法在 2010 年 前后成形，依托 化学、数学、免疫治疗 把 疾病治疗、健康维持 落到实处，并成为 生命与医疗 中承上启下的一环，直接支撑了 医疗影像 AI、空间转录组 等后续技术。",
    "dependsOn": ["chemistry","mathematics","bio_immunotherapy","bio_singlecell"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "CAR-T 疗法在 2010 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，CAR-T 疗法仍是 疾病治疗 的底层支撑，并持续影响 医疗影像 AI、空间转录组。"
      }
    ],
    "significance": "CAR-T 疗法把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 医疗影像 AI、空间转录组。"
  },
{
    "id": "bio_bloodprod",
    "name": "血液制品",
    "en": "Blood Products",
    "category": "life",
    "era": "electrical",
    "date": "1940 年",
    "year": 1940,
    "people": "",
    "place": "",
    "summary": "血液制品约 1940 年 成熟，建立在 化学、数学、生物反应器 之上完成关键突破；其能力延伸到 疾病治疗、健康维持，并为 血液透析、人工肾 的发展铺平了道路。",
    "dependsOn": ["chemistry","mathematics","bio_bioreactor","bio_antibiotic"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "血液制品在 1940 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，血液制品仍是 疾病治疗 的底层支撑，并持续影响 血液透析、人工肾。"
      }
    ],
    "significance": "血液制品把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 血液透析、人工肾。"
  },
{
    "id": "bio_ivd",
    "name": "体外诊断",
    "en": "IVD",
    "category": "life",
    "era": "info",
    "date": "1950 年",
    "year": 1950,
    "people": "",
    "place": "",
    "summary": "体外诊断约 1950 年 成熟，建立在 化学、数学、酶工程 之上完成关键突破；其能力延伸到 疾病治疗、健康维持，并为 远程医疗、药物递送 的发展铺平了道路。",
    "dependsOn": ["chemistry","mathematics","bio_enzyme","bio_nuclear_med"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "体外诊断在 1950 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，体外诊断仍是 疾病治疗 的底层支撑，并持续影响 远程医疗、药物递送。"
      }
    ],
    "significance": "体外诊断把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 远程医疗、药物递送。"
  },
{
    "id": "bio_poc",
    "name": "快速检测",
    "en": "POCT",
    "category": "life",
    "era": "info",
    "date": "1980 年",
    "year": 1980,
    "people": "",
    "place": "",
    "summary": "快速检测在 1980 年 前后成形，依托 化学、数学、人工皮肤 把 疾病治疗、健康维持 落到实处，并成为 生命与医疗 中承上启下的一环，直接支撑了 神经调控、蛋白质工程 等后续技术。",
    "dependsOn": ["chemistry","mathematics","bio_artskin","bio_tissueeng"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "快速检测在 1980 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，快速检测仍是 疾病治疗 的底层支撑，并持续影响 神经调控、蛋白质工程。"
      }
    ],
    "significance": "快速检测把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 神经调控、蛋白质工程。"
  },
{
    "id": "bio_wearable",
    "name": "可穿戴健康",
    "en": "Wearable Health",
    "category": "life",
    "era": "intelligent",
    "date": "2000 年",
    "year": 2000,
    "people": "",
    "place": "",
    "summary": "可穿戴健康约 2000 年 成熟，建立在 化学、数学、细胞治疗 之上完成关键突破；其能力延伸到 疾病治疗、健康维持，并为 手术机器人、康复机器人 的发展铺平了道路。",
    "dependsOn": ["chemistry","mathematics","bio_celltherapy","bio_clone"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "可穿戴健康在 2000 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，可穿戴健康仍是 疾病治疗 的底层支撑，并持续影响 手术机器人、康复机器人。"
      }
    ],
    "significance": "可穿戴健康把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 手术机器人、康复机器人。"
  },
{
    "id": "bio_telemed",
    "name": "远程医疗",
    "en": "Telemedicine",
    "category": "life",
    "era": "info",
    "date": "1950 年",
    "year": 1950,
    "people": "",
    "place": "",
    "summary": "远程医疗在 1950 年 前后成形，依托 化学、数学、体外诊断 把 疾病治疗、健康维持 落到实处，并成为 生命与医疗 中承上启下的一环，直接支撑了 药物递送、缓释制剂 等后续技术。",
    "dependsOn": ["chemistry","mathematics","bio_ivd","bio_enzyme"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "远程医疗在 1950 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，远程医疗仍是 疾病治疗 的底层支撑，并持续影响 药物递送、缓释制剂。"
      }
    ],
    "significance": "远程医疗把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 药物递送、缓释制剂。"
  },
{
    "id": "bio_ehr",
    "name": "电子病历",
    "en": "EHR",
    "category": "life",
    "era": "info",
    "date": "1970 年",
    "year": 1970,
    "people": "",
    "place": "",
    "summary": "电子病历约 1970 年 成熟，建立在 化学、数学、正电子成像 之上完成关键突破；其能力延伸到 疾病治疗、健康维持，并为 脑机接口、透皮给药 的发展铺平了道路。",
    "dependsOn": ["chemistry","mathematics","bio_pet","bio_stemcell"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "电子病历在 1970 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，电子病历仍是 疾病治疗 的底层支撑，并持续影响 脑机接口、透皮给药。"
      }
    ],
    "significance": "电子病历把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 脑机接口、透皮给药。"
  },
{
    "id": "bio_medicalai",
    "name": "医疗影像",
    "en": "Medical Imaging AI",
    "category": "life",
    "era": "intelligent",
    "date": "2010 年",
    "year": 2010,
    "people": "",
    "place": "",
    "summary": "医疗影像约 2010 年 成熟，建立在 化学、数学、CAR-T 疗法 之上完成关键突破；其能力延伸到 疾病治疗、健康维持，并为 空间转录组、器官芯片 的发展铺平了道路。",
    "dependsOn": ["chemistry","mathematics","bio_cart","bio_immunotherapy"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "医疗影像在 2010 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，医疗影像仍是 疾病治疗 的底层支撑，并持续影响 空间转录组、器官芯片。"
      }
    ],
    "significance": "医疗影像把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 空间转录组、器官芯片。"
  },
{
    "id": "bio_surgerobot",
    "name": "手术机器人",
    "en": "Surgical Robot",
    "category": "life",
    "era": "intelligent",
    "date": "2000 年",
    "year": 2000,
    "people": "",
    "place": "",
    "summary": "手术机器人在 2000 年 前后成形，依托 化学、数学、可穿戴健康 把 疾病治疗、健康维持 落到实处，并成为 生命与医疗 中承上启下的一环，直接支撑了 康复机器人、外骨骼 等后续技术。",
    "dependsOn": ["chemistry","mathematics","bio_wearable","bio_celltherapy"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "手术机器人在 2000 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，手术机器人仍是 疾病治疗 的底层支撑，并持续影响 康复机器人、外骨骼。"
      }
    ],
    "significance": "手术机器人把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 康复机器人、外骨骼。"
  },
{
    "id": "bio_reharobot",
    "name": "康复机器人",
    "en": "Rehabilitation Robot",
    "category": "life",
    "era": "intelligent",
    "date": "2000 年",
    "year": 2000,
    "people": "",
    "place": "",
    "summary": "康复机器人在 2000 年 前后成形，依托 化学、数学、手术机器人 把 疾病治疗、健康维持 落到实处，并成为 生命与医疗 中承上启下的一环，直接支撑了 外骨骼、仿生眼 等后续技术。",
    "dependsOn": ["chemistry","mathematics","bio_surgerobot","bio_wearable"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "康复机器人在 2000 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，康复机器人仍是 疾病治疗 的底层支撑，并持续影响 外骨骼、仿生眼。"
      }
    ],
    "significance": "康复机器人把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 外骨骼、仿生眼。"
  },
{
    "id": "bio_exoskeleton",
    "name": "外骨骼",
    "en": "Exoskeleton",
    "category": "life",
    "era": "intelligent",
    "date": "2000 年",
    "year": 2000,
    "people": "",
    "place": "",
    "summary": "外骨骼约 2000 年 成熟，建立在 化学、数学、康复机器人 之上完成关键突破；其能力延伸到 疾病治疗、健康维持，并为 仿生眼、生物 3D 打印 的发展铺平了道路。",
    "dependsOn": ["chemistry","mathematics","bio_reharobot","bio_surgerobot"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "外骨骼在 2000 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，外骨骼仍是 疾病治疗 的底层支撑，并持续影响 仿生眼、生物 3D 打印。"
      }
    ],
    "significance": "外骨骼把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 仿生眼、生物 3D 打印。"
  },
{
    "id": "bio_bci",
    "name": "脑机接口",
    "en": "BCI",
    "category": "life",
    "era": "info",
    "date": "1970 年",
    "year": 1970,
    "people": "",
    "place": "",
    "summary": "脑机接口在 1970 年 前后成形，依托 化学、数学、电子病历 把 疾病治疗、健康维持 落到实处，并成为 生命与医疗 中承上启下的一环，直接支撑了 透皮给药、基因递送载体 等后续技术。",
    "dependsOn": ["chemistry","mathematics","bio_ehr","bio_pet"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "脑机接口在 1970 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，脑机接口仍是 疾病治疗 的底层支撑，并持续影响 透皮给药、基因递送载体。"
      }
    ],
    "significance": "脑机接口把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 透皮给药、基因递送载体。"
  },
{
    "id": "bio_neuromod",
    "name": "神经调控",
    "en": "Neuromodulation",
    "category": "life",
    "era": "info",
    "date": "1980 年",
    "year": 1980,
    "people": "",
    "place": "",
    "summary": "神经调控约 1980 年 成熟，建立在 化学、数学、快速检测 之上完成关键突破；其能力延伸到 疾病治疗、健康维持，并为 蛋白质工程、表观遗传学 的发展铺平了道路。",
    "dependsOn": ["chemistry","mathematics","bio_poc","bio_artskin"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "神经调控在 1980 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，神经调控仍是 疾病治疗 的底层支撑，并持续影响 蛋白质工程、表观遗传学。"
      }
    ],
    "significance": "神经调控把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 蛋白质工程、表观遗传学。"
  },
{
    "id": "bio_dbs",
    "name": "深部脑刺激",
    "en": "DBS",
    "category": "life",
    "era": "info",
    "date": "1987 年",
    "year": 1987,
    "people": "",
    "place": "",
    "summary": "深部脑刺激约 1987 年 成熟，建立在 化学、数学、聚合酶链反应 之上完成关键突破；其能力延伸到 疾病治疗、健康维持，并为 mRNA 疫苗、靶向治疗 的发展铺平了道路。",
    "dependsOn": ["chemistry","mathematics","bio_pcr","bio_epigenetics"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "深部脑刺激在 1987 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，深部脑刺激仍是 疾病治疗 的底层支撑，并持续影响 mRNA 疫苗、靶向治疗。"
      }
    ],
    "significance": "深部脑刺激把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 mRNA 疫苗、靶向治疗。"
  },
{
    "id": "bio_bioniceye",
    "name": "仿生眼",
    "en": "Bionic Eye",
    "category": "life",
    "era": "intelligent",
    "date": "2000 年",
    "year": 2000,
    "people": "",
    "place": "",
    "summary": "仿生眼约 2000 年 成熟，建立在 化学、数学、外骨骼 之上完成关键突破；其能力延伸到 疾病治疗、健康维持，并为 生物 3D 打印、合成生物学 的发展铺平了道路。",
    "dependsOn": ["chemistry","mathematics","bio_exoskeleton","bio_reharobot"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "仿生眼在 2000 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，仿生眼仍是 疾病治疗 的底层支撑，并持续影响 生物 3D 打印、合成生物学。"
      }
    ],
    "significance": "仿生眼把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 生物 3D 打印、合成生物学。"
  },
{
    "id": "bio_cochlear",
    "name": "人工耳蜗",
    "en": "Cochlear Implant",
    "category": "life",
    "era": "info",
    "date": "1977 年",
    "year": 1977,
    "people": "",
    "place": "",
    "summary": "人工耳蜗约 1977 年 成熟，建立在 化学、数学、基因测序 之上完成关键突破；其能力延伸到 疾病治疗、健康维持，并为 血管支架、试管婴儿 的发展铺平了道路。",
    "dependsOn": ["chemistry","mathematics","bio_seq","bio_monoclonal"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "人工耳蜗在 1977 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，人工耳蜗仍是 疾病治疗 的底层支撑，并持续影响 血管支架、试管婴儿。"
      }
    ],
    "significance": "人工耳蜗把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 血管支架、试管婴儿。"
  },
{
    "id": "bio_bio3dp",
    "name": "生物",
    "en": "Bioprinting",
    "category": "life",
    "era": "intelligent",
    "date": "2000 年",
    "year": 2000,
    "people": "",
    "place": "",
    "summary": "生物约 2000 年 成熟，建立在 化学、数学、仿生眼 之上完成关键突破；其能力延伸到 疾病治疗、健康维持，并为 合成生物学、微生物组 的发展铺平了道路。",
    "dependsOn": ["chemistry","mathematics","bio_bioniceye","bio_exoskeleton"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "生物在 2000 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，生物仍是 疾病治疗 的底层支撑，并持续影响 合成生物学、微生物组。"
      }
    ],
    "significance": "生物把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 合成生物学、微生物组。"
  },
{
    "id": "bio_organoid",
    "name": "类器官",
    "en": "Organoid",
    "category": "life",
    "era": "intelligent",
    "date": "2009 年",
    "year": 2009,
    "people": "",
    "place": "",
    "summary": "类器官约 2009 年 成熟，建立在 化学、数学、家用扫地机器人 之上完成关键突破；其能力延伸到 疾病治疗、健康维持，并为 免疫治疗、单细胞测序 的发展铺平了道路。",
    "dependsOn": ["chemistry","mathematics","robot_vacuum","bio_pharmacogen"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "类器官在 2009 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，类器官仍是 疾病治疗 的底层支撑，并持续影响 免疫治疗、单细胞测序。"
      }
    ],
    "significance": "类器官把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 免疫治疗、单细胞测序。"
  },
{
    "id": "bio_synbio",
    "name": "合成生物学",
    "en": "Synthetic Biology",
    "category": "life",
    "era": "intelligent",
    "date": "2000 年",
    "year": 2000,
    "people": "",
    "place": "",
    "summary": "合成生物学在 2000 年 前后成形，依托 化学、数学、生物 把 疾病治疗、健康维持 落到实处，并成为 生命与医疗 中承上启下的一环，直接支撑了 微生物组、纳米药物 等后续技术。",
    "dependsOn": ["chemistry","mathematics","bio_bio3dp","bio_bioniceye"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "合成生物学在 2000 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，合成生物学仍是 疾病治疗 的底层支撑，并持续影响 微生物组、纳米药物。"
      }
    ],
    "significance": "合成生物学把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 微生物组、纳米药物。"
  },
{
    "id": "bio_directedevo",
    "name": "定向进化",
    "en": "Directed Evolution",
    "category": "life",
    "era": "info",
    "date": "1990 年",
    "year": 1990,
    "people": "",
    "place": "",
    "summary": "定向进化在 1990 年 前后成形，依托 化学、数学、基因治疗 把 疾病治疗、健康维持 落到实处，并成为 生命与医疗 中承上启下的一环，直接支撑了 代谢工程、人工肝 等后续技术。",
    "dependsOn": ["chemistry","mathematics","bio_genetherapy","bio_targeted"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "定向进化在 1990 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，定向进化仍是 疾病治疗 的底层支撑，并持续影响 代谢工程、人工肝。"
      }
    ],
    "significance": "定向进化把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 代谢工程、人工肝。"
  },
{
    "id": "bio_proteineng",
    "name": "蛋白质工程",
    "en": "Protein Engineering",
    "category": "life",
    "era": "info",
    "date": "1980 年",
    "year": 1980,
    "people": "",
    "place": "",
    "summary": "蛋白质工程约 1980 年 成熟，建立在 化学、数学、神经调控 之上完成关键突破；其能力延伸到 疾病治疗、健康维持，并为 聚合酶链反应、表观遗传学 的发展铺平了道路。",
    "dependsOn": ["chemistry","mathematics","bio_neuromod","bio_poc"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "蛋白质工程在 1980 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，蛋白质工程仍是 疾病治疗 的底层支撑，并持续影响 聚合酶链反应、表观遗传学。"
      }
    ],
    "significance": "蛋白质工程把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 聚合酶链反应、表观遗传学。"
  },
{
    "id": "bio_metabeng",
    "name": "代谢工程",
    "en": "Metabolic Engineering",
    "category": "life",
    "era": "info",
    "date": "1990 年",
    "year": 1990,
    "people": "",
    "place": "",
    "summary": "代谢工程约 1990 年 成熟，建立在 化学、数学、定向进化 之上完成关键突破；其能力延伸到 疾病治疗、健康维持，并为 人工肝、人工肺 的发展铺平了道路。",
    "dependsOn": ["chemistry","mathematics","bio_directedevo","bio_genetherapy"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "代谢工程在 1990 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，代谢工程仍是 疾病治疗 的底层支撑，并持续影响 人工肝、人工肺。"
      }
    ],
    "significance": "代谢工程把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 人工肝、人工肺。"
  },
{
    "id": "bio_microbiome",
    "name": "微生物组",
    "en": "Microbiome",
    "category": "life",
    "era": "intelligent",
    "date": "2000 年",
    "year": 2000,
    "people": "",
    "place": "",
    "summary": "微生物组在 2000 年 前后成形，依托 化学、数学、合成生物学 把 疾病治疗、健康维持 落到实处，并成为 生命与医疗 中承上启下的一环，直接支撑了 纳米药物、脂质纳米粒 等后续技术。",
    "dependsOn": ["chemistry","mathematics","bio_synbio","bio_bio3dp"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "微生物组在 2000 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，微生物组仍是 疾病治疗 的底层支撑，并持续影响 纳米药物、脂质纳米粒。"
      }
    ],
    "significance": "微生物组把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 纳米药物、脂质纳米粒。"
  },
{
    "id": "bio_phage",
    "name": "噬菌体疗法",
    "en": "Phage Therapy",
    "category": "life",
    "era": "electrical",
    "date": "1920 年",
    "year": 1920,
    "people": "",
    "place": "",
    "summary": "噬菌体疗法约 1920 年 成熟，建立在 化学、数学、维生素 之上完成关键突破；其能力延伸到 疾病治疗、健康维持，并为 卡介苗、胰岛素 的发展铺平了道路。",
    "dependsOn": ["chemistry","mathematics","bio_vitamin","bio_bloodtype"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "噬菌体疗法在 1920 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，噬菌体疗法仍是 疾病治疗 的底层支撑，并持续影响 卡介苗、胰岛素。"
      }
    ],
    "significance": "噬菌体疗法把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 卡介苗、胰岛素。"
  },
{
    "id": "bio_drugdelivery",
    "name": "药物递送",
    "en": "Drug Delivery",
    "category": "life",
    "era": "info",
    "date": "1950 年",
    "year": 1950,
    "people": "",
    "place": "",
    "summary": "药物递送在 1950 年 前后成形，依托 化学、数学、远程医疗 把 疾病治疗、健康维持 落到实处，并成为 生命与医疗 中承上启下的一环，直接支撑了 缓释制剂、吸入制剂 等后续技术。",
    "dependsOn": ["chemistry","mathematics","bio_telemed","bio_ivd"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "药物递送在 1950 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，药物递送仍是 疾病治疗 的底层支撑，并持续影响 缓释制剂、吸入制剂。"
      }
    ],
    "significance": "药物递送把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 缓释制剂、吸入制剂。"
  },
{
    "id": "bio_nanomed",
    "name": "纳米药物",
    "en": "Nanomedicine",
    "category": "life",
    "era": "intelligent",
    "date": "2000 年",
    "year": 2000,
    "people": "",
    "place": "",
    "summary": "纳米药物在 2000 年 前后成形，依托 化学、数学、微生物组 把 疾病治疗、健康维持 落到实处，并成为 生命与医疗 中承上启下的一环，直接支撑了 脂质纳米粒、疫苗平台 等后续技术。",
    "dependsOn": ["chemistry","mathematics","bio_microbiome","bio_synbio"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "纳米药物在 2000 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，纳米药物仍是 疾病治疗 的底层支撑，并持续影响 脂质纳米粒、疫苗平台。"
      }
    ],
    "significance": "纳米药物把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 脂质纳米粒、疫苗平台。"
  },
{
    "id": "bio_sustained",
    "name": "缓释制剂",
    "en": "Sustained Release",
    "category": "life",
    "era": "info",
    "date": "1950 年",
    "year": 1950,
    "people": "",
    "place": "",
    "summary": "缓释制剂在 1950 年 前后成形，依托 化学、数学、药物递送 把 疾病治疗、健康维持 落到实处，并成为 生命与医疗 中承上启下的一环，直接支撑了 吸入制剂 等后续技术。",
    "dependsOn": ["chemistry","mathematics","bio_drugdelivery","bio_telemed"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "缓释制剂在 1950 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，缓释制剂仍是 疾病治疗 的底层支撑，并持续影响 吸入制剂。"
      }
    ],
    "significance": "缓释制剂把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 吸入制剂。"
  },
{
    "id": "bio_transdermal",
    "name": "透皮给药",
    "en": "Transdermal",
    "category": "life",
    "era": "info",
    "date": "1970 年",
    "year": 1970,
    "people": "",
    "place": "",
    "summary": "透皮给药约 1970 年 成熟，建立在 化学、数学、脑机接口 之上完成关键突破；其能力延伸到 疾病治疗、健康维持，并为 CT 扫描、基因递送载体 的发展铺平了道路。",
    "dependsOn": ["chemistry","mathematics","bio_bci","bio_ehr"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "透皮给药在 1970 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，透皮给药仍是 疾病治疗 的底层支撑，并持续影响 CT 扫描、基因递送载体。"
      }
    ],
    "significance": "透皮给药把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 CT 扫描、基因递送载体。"
  },
{
    "id": "bio_inhaler",
    "name": "吸入制剂",
    "en": "Inhaler",
    "category": "life",
    "era": "info",
    "date": "1950 年",
    "year": 1950,
    "people": "",
    "place": "",
    "summary": "吸入制剂约 1950 年 成熟，建立在 化学、数学、缓释制剂 之上完成关键突破；其能力延伸到 疾病治疗、健康维持，并为 器官移植 的发展铺平了道路。",
    "dependsOn": ["chemistry","mathematics","bio_sustained","bio_drugdelivery"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "吸入制剂在 1950 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，吸入制剂仍是 疾病治疗 的底层支撑，并持续影响 器官移植。"
      }
    ],
    "significance": "吸入制剂把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 器官移植。"
  },
{
    "id": "bio_genevector",
    "name": "基因递送载体",
    "en": "Gene Vector",
    "category": "life",
    "era": "info",
    "date": "1970 年",
    "year": 1970,
    "people": "",
    "place": "",
    "summary": "基因递送载体在 1970 年 前后成形，依托 化学、数学、透皮给药 把 疾病治疗、健康维持 落到实处，并成为 生命与医疗 中承上启下的一环，直接支撑了 CT 扫描、体外膜肺氧合 等后续技术。",
    "dependsOn": ["chemistry","mathematics","bio_transdermal","bio_bci"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "基因递送载体在 1970 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，基因递送载体仍是 疾病治疗 的底层支撑，并持续影响 CT 扫描、体外膜肺氧合。"
      }
    ],
    "significance": "基因递送载体把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 CT 扫描、体外膜肺氧合。"
  },
{
    "id": "bio_lipidnp",
    "name": "脂质纳米粒",
    "en": "LNP",
    "category": "life",
    "era": "intelligent",
    "date": "2000 年",
    "year": 2000,
    "people": "",
    "place": "",
    "summary": "脂质纳米粒在 2000 年 前后成形，依托 化学、数学、纳米药物 把 疾病治疗、健康维持 落到实处，并成为 生命与医疗 中承上启下的一环，直接支撑了 疫苗平台、代谢组学 等后续技术。",
    "dependsOn": ["chemistry","mathematics","bio_nanomed","bio_microbiome"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "脂质纳米粒在 2000 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，脂质纳米粒仍是 疾病治疗 的底层支撑，并持续影响 疫苗平台、代谢组学。"
      }
    ],
    "significance": "脂质纳米粒把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 疫苗平台、代谢组学。"
  },
{
    "id": "bio_vaccineplatform",
    "name": "疫苗平台",
    "en": "Vaccine Platform",
    "category": "life",
    "era": "intelligent",
    "date": "2000 年",
    "year": 2000,
    "people": "",
    "place": "",
    "summary": "疫苗平台在 2000 年 前后成形，依托 化学、数学、脂质纳米粒 把 疾病治疗、健康维持 落到实处，并成为 生命与医疗 中承上启下的一环，直接支撑了 代谢组学、新型抗生素 等后续技术。",
    "dependsOn": ["chemistry","mathematics","bio_lipidnp","bio_nanomed"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "疫苗平台在 2000 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，疫苗平台仍是 疾病治疗 的底层支撑，并持续影响 代谢组学、新型抗生素。"
      }
    ],
    "significance": "疫苗平台把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 代谢组学、新型抗生素。"
  },
{
    "id": "bio_pathogen",
    "name": "病原体鉴定",
    "en": "Pathogen ID",
    "category": "life",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "病原体鉴定在 1800 年 前后成形，依托 化学、数学、营养学 把 疾病治疗、健康维持 落到实处，并成为 生命与医疗 中承上启下的一环，直接支撑了 输血 等后续技术。",
    "dependsOn": ["chemistry","mathematics","bio_nutrition","bio_disinfectant"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "病原体鉴定在 1800 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，病原体鉴定仍是 疾病治疗 的底层支撑，并持续影响 输血。"
      }
    ],
    "significance": "病原体鉴定把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 输血。"
  },
{
    "id": "bio_epigenetics",
    "name": "表观遗传学",
    "en": "Epigenetics",
    "category": "life",
    "era": "info",
    "date": "1980 年",
    "year": 1980,
    "people": "",
    "place": "",
    "summary": "表观遗传学在 1980 年 前后成形，依托 化学、数学、蛋白质工程 把 疾病治疗、健康维持 落到实处，并成为 生命与医疗 中承上启下的一环，直接支撑了 聚合酶链反应、深部脑刺激 等后续技术。",
    "dependsOn": ["chemistry","mathematics","bio_proteineng","bio_neuromod"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "表观遗传学在 1980 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，表观遗传学仍是 疾病治疗 的底层支撑，并持续影响 聚合酶链反应、深部脑刺激。"
      }
    ],
    "significance": "表观遗传学把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 聚合酶链反应、深部脑刺激。"
  },
{
    "id": "bio_proteomics2",
    "name": "蛋白组学",
    "en": "Proteomics",
    "category": "life",
    "era": "info",
    "date": "1995 年",
    "year": 1995,
    "people": "",
    "place": "",
    "summary": "蛋白组学约 1995 年 成熟，建立在 化学、数学、转基因作物 之上完成关键突破；其能力延伸到 疾病治疗、健康维持，并为 克隆技术、细胞治疗 的发展铺平了道路。",
    "dependsOn": ["chemistry","mathematics","gmo","bio_artlung"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "蛋白组学在 1995 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，蛋白组学仍是 疾病治疗 的底层支撑，并持续影响 克隆技术、细胞治疗。"
      }
    ],
    "significance": "蛋白组学把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 克隆技术、细胞治疗。"
  },
{
    "id": "bio_metabolomics",
    "name": "代谢组学",
    "en": "Metabolomics",
    "category": "life",
    "era": "intelligent",
    "date": "2000 年",
    "year": 2000,
    "people": "",
    "place": "",
    "summary": "代谢组学约 2000 年 成熟，建立在 化学、数学、疫苗平台 之上完成关键突破；其能力延伸到 疾病治疗、健康维持，并为 新型抗生素、抗菌肽 的发展铺平了道路。",
    "dependsOn": ["chemistry","mathematics","bio_vaccineplatform","bio_lipidnp"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "代谢组学在 2000 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，代谢组学仍是 疾病治疗 的底层支撑，并持续影响 新型抗生素、抗菌肽。"
      }
    ],
    "significance": "代谢组学把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 新型抗生素、抗菌肽。"
  },
{
    "id": "bio_spatialtrans",
    "name": "空间转录组",
    "en": "Spatial Transcriptomics",
    "category": "life",
    "era": "intelligent",
    "date": "2010 年",
    "year": 2010,
    "people": "",
    "place": "",
    "summary": "空间转录组在 2010 年 前后成形，依托 化学、数学、医疗影像 把 疾病治疗、健康维持 落到实处，并成为 生命与医疗 中承上启下的一环，直接支撑了 器官芯片、精准医疗 等后续技术。",
    "dependsOn": ["chemistry","mathematics","bio_medicalai","bio_cart"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "空间转录组在 2010 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，空间转录组仍是 疾病治疗 的底层支撑，并持续影响 器官芯片、精准医疗。"
      }
    ],
    "significance": "空间转录组把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 器官芯片、精准医疗。"
  },
{
    "id": "bio_singlecell",
    "name": "单细胞测序",
    "en": "Single-Cell Sequencing",
    "category": "life",
    "era": "intelligent",
    "date": "2009 年",
    "year": 2009,
    "people": "",
    "place": "",
    "summary": "单细胞测序在 2009 年 前后成形，依托 化学、数学、类器官 把 疾病治疗、健康维持 落到实处，并成为 生命与医疗 中承上启下的一环，直接支撑了 免疫治疗、CAR-T 疗法 等后续技术。",
    "dependsOn": ["chemistry","mathematics","bio_organoid","robot_vacuum"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "单细胞测序在 2009 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，单细胞测序仍是 疾病治疗 的底层支撑，并持续影响 免疫治疗、CAR-T 疗法。"
      }
    ],
    "significance": "单细胞测序把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 免疫治疗、CAR-T 疗法。"
  },
{
    "id": "bio_organonchip",
    "name": "器官芯片",
    "en": "Organs-on-Chip",
    "category": "life",
    "era": "intelligent",
    "date": "2010 年",
    "year": 2010,
    "people": "",
    "place": "",
    "summary": "器官芯片在 2010 年 前后成形，依托 化学、数学、空间转录组 把 疾病治疗、健康维持 落到实处，并成为 生命与医疗 中承上启下的一环，直接支撑了 精准医疗、液体活检 等后续技术。",
    "dependsOn": ["chemistry","mathematics","bio_spatialtrans","bio_medicalai"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "器官芯片在 2010 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，器官芯片仍是 疾病治疗 的底层支撑，并持续影响 精准医疗、液体活检。"
      }
    ],
    "significance": "器官芯片把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 精准医疗、液体活检。"
  },
{
    "id": "bio_universalvax",
    "name": "通用疫苗",
    "en": "Universal Vaccine",
    "category": "life",
    "era": "intelligent",
    "date": "2020 年",
    "year": 2020,
    "people": "",
    "place": "",
    "summary": "通用疫苗约 2020 年 出现，建立在 化学、数学、智能割草机器人 之上；它把 疾病治疗、健康维持 变成可稳定复现的能力，是 生命与医疗 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","mathematics","smart_mower","bio_crispr"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "通用疫苗在 2020 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，通用疫苗仍是 疾病治疗 的底层支撑，并作为 生命与医疗 的基础能力持续发挥作用。"
      }
    ],
    "significance": "通用疫苗把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bio_newantibiotic",
    "name": "新型抗生素",
    "en": "Novel Antibiotic",
    "category": "life",
    "era": "intelligent",
    "date": "2000 年",
    "year": 2000,
    "people": "",
    "place": "",
    "summary": "新型抗生素在 2000 年 前后成形，依托 化学、数学、代谢组学 把 疾病治疗、健康维持 落到实处，并成为 生命与医疗 中承上启下的一环，直接支撑了 抗菌肽、药物基因组学 等后续技术。",
    "dependsOn": ["chemistry","mathematics","bio_metabolomics","bio_vaccineplatform"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "新型抗生素在 2000 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，新型抗生素仍是 疾病治疗 的底层支撑，并持续影响 抗菌肽、药物基因组学。"
      }
    ],
    "significance": "新型抗生素把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 抗菌肽、药物基因组学。"
  },
{
    "id": "bio_antimicrobialpep",
    "name": "抗菌肽",
    "en": "Antimicrobial Peptide",
    "category": "life",
    "era": "intelligent",
    "date": "2000 年",
    "year": 2000,
    "people": "",
    "place": "",
    "summary": "抗菌肽约 2000 年 成熟，建立在 化学、数学、新型抗生素 之上完成关键突破；其能力延伸到 疾病治疗、健康维持，并为 药物基因组学 的发展铺平了道路。",
    "dependsOn": ["chemistry","mathematics","bio_newantibiotic","bio_metabolomics"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "抗菌肽在 2000 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，抗菌肽仍是 疾病治疗 的底层支撑，并持续影响 药物基因组学。"
      }
    ],
    "significance": "抗菌肽把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 药物基因组学。"
  },
{
    "id": "bio_precisionmed",
    "name": "精准医疗",
    "en": "Precision Medicine",
    "category": "life",
    "era": "intelligent",
    "date": "2010 年",
    "year": 2010,
    "people": "",
    "place": "",
    "summary": "精准医疗在 2010 年 前后成形，依托 化学、数学、器官芯片 把 疾病治疗、健康维持 落到实处，并成为 生命与医疗 中承上启下的一环，直接支撑了 液体活检、循环肿瘤 DNA 等后续技术。",
    "dependsOn": ["chemistry","mathematics","bio_organonchip","bio_spatialtrans"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "精准医疗在 2010 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，精准医疗仍是 疾病治疗 的底层支撑，并持续影响 液体活检、循环肿瘤 DNA。"
      }
    ],
    "significance": "精准医疗把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 液体活检、循环肿瘤 DNA。"
  },
{
    "id": "bio_pharmacogen",
    "name": "药物基因组学",
    "en": "Pharmacogenomics",
    "category": "life",
    "era": "intelligent",
    "date": "2000 年",
    "year": 2000,
    "people": "",
    "place": "",
    "summary": "药物基因组学约 2000 年 成熟，建立在 化学、数学、抗菌肽 之上完成关键突破；其能力延伸到 疾病治疗、健康维持，并为 类器官 的发展铺平了道路。",
    "dependsOn": ["chemistry","mathematics","bio_antimicrobialpep","bio_newantibiotic"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "药物基因组学在 2000 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，药物基因组学仍是 疾病治疗 的底层支撑，并持续影响 类器官。"
      }
    ],
    "significance": "药物基因组学把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 类器官。"
  },
{
    "id": "bio_liquidbiopsy",
    "name": "液体活检",
    "en": "Liquid Biopsy",
    "category": "life",
    "era": "intelligent",
    "date": "2010 年",
    "year": 2010,
    "people": "",
    "place": "",
    "summary": "液体活检在 2010 年 前后成形，依托 化学、数学、精准医疗 把 疾病治疗、健康维持 落到实处，并成为 生命与医疗 中承上启下的一环，直接支撑了 循环肿瘤 DNA、连续血糖监测 等后续技术。",
    "dependsOn": ["chemistry","mathematics","bio_precisionmed","bio_organonchip"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "液体活检在 2010 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，液体活检仍是 疾病治疗 的底层支撑，并持续影响 循环肿瘤 DNA、连续血糖监测。"
      }
    ],
    "significance": "液体活检把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 循环肿瘤 DNA、连续血糖监测。"
  },
{
    "id": "bio_ctdna",
    "name": "循环肿瘤",
    "en": "ctDNA",
    "category": "life",
    "era": "intelligent",
    "date": "2010 年",
    "year": 2010,
    "people": "",
    "place": "",
    "summary": "循环肿瘤在 2010 年 前后成形，依托 化学、数学、液体活检 把 疾病治疗、健康维持 落到实处，并成为 生命与医疗 中承上启下的一环，直接支撑了 基因编辑、连续血糖监测 等后续技术。",
    "dependsOn": ["chemistry","mathematics","bio_liquidbiopsy","bio_precisionmed"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "循环肿瘤在 2010 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，循环肿瘤仍是 疾病治疗 的底层支撑，并持续影响 基因编辑、连续血糖监测。"
      }
    ],
    "significance": "循环肿瘤把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 基因编辑、连续血糖监测。"
  },
{
    "id": "bio_cgm",
    "name": "连续血糖监测",
    "en": "CGM",
    "category": "life",
    "era": "intelligent",
    "date": "2010 年",
    "year": 2010,
    "people": "",
    "place": "",
    "summary": "连续血糖监测约 2010 年 成熟，建立在 化学、数学、循环肿瘤 之上完成关键突破；其能力延伸到 疾病治疗、健康维持，并为 基因编辑 的发展铺平了道路。",
    "dependsOn": ["chemistry","mathematics","bio_ctdna","bio_liquidbiopsy"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "连续血糖监测在 2010 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，连续血糖监测仍是 疾病治疗 的底层支撑，并持续影响 基因编辑。"
      }
    ],
    "significance": "连续血糖监测把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 基因编辑。"
  },
{
    "id": "bio_ecmo",
    "name": "体外膜肺氧合",
    "en": "ECMO",
    "category": "life",
    "era": "info",
    "date": "1972 年",
    "year": 1972,
    "people": "",
    "place": "",
    "summary": "体外膜肺氧合在 1972 年 前后成形，依托 化学、数学、CT 扫描 把 疾病治疗、健康维持 落到实处，并成为 生命与医疗 中承上启下的一环，直接支撑了 核磁共振 等后续技术。",
    "dependsOn": ["chemistry","mathematics","bio_ct","bio_genevector"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "体外膜肺氧合在 1972 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，体外膜肺氧合仍是 疾病治疗 的底层支撑，并持续影响 核磁共振。"
      }
    ],
    "significance": "体外膜肺氧合把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 核磁共振。"
  },
{
    "id": "bio_artliver",
    "name": "人工肝",
    "en": "Artificial Liver",
    "category": "life",
    "era": "info",
    "date": "1990 年",
    "year": 1990,
    "people": "",
    "place": "",
    "summary": "人工肝约 1990 年 成熟，建立在 化学、数学、代谢工程 之上完成关键突破；其能力延伸到 疾病治疗、健康维持，并为 人工肺 的发展铺平了道路。",
    "dependsOn": ["chemistry","mathematics","bio_metabeng","bio_directedevo"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "人工肝在 1990 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，人工肝仍是 疾病治疗 的底层支撑，并持续影响 人工肺。"
      }
    ],
    "significance": "人工肝把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 人工肺。"
  },
{
    "id": "bio_artlung",
    "name": "人工肺",
    "en": "Artificial Lung",
    "category": "life",
    "era": "info",
    "date": "1990 年",
    "year": 1990,
    "people": "",
    "place": "",
    "summary": "人工肺约 1990 年 成熟，建立在 化学、数学、人工肝 之上完成关键突破；其能力延伸到 疾病治疗、健康维持，并为 蛋白组学 的发展铺平了道路。",
    "dependsOn": ["chemistry","mathematics","bio_artliver","bio_metabeng"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "人工肺在 1990 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，人工肺仍是 疾病治疗 的底层支撑，并持续影响 蛋白组学。"
      }
    ],
    "significance": "人工肺把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 蛋白组学。"
  },
{
    "id": "bio_arthroplasty",
    "name": "人工关节",
    "en": "Artificial Joint",
    "category": "life",
    "era": "info",
    "date": "1960 年",
    "year": 1960,
    "people": "",
    "place": "",
    "summary": "人工关节约 1960 年 成熟，建立在 化学、数学、抗病毒药 之上完成关键突破；其能力延伸到 疾病治疗、健康维持，并为 正电子成像、干细胞 的发展铺平了道路。",
    "dependsOn": ["chemistry","mathematics","bio_antiviral","bio_pacemaker"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "人工关节在 1960 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，人工关节仍是 疾病治疗 的底层支撑，并持续影响 正电子成像、干细胞。"
      }
    ],
    "significance": "人工关节把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 正电子成像、干细胞。"
  },
{
    "id": "bld_rammed",
    "name": "夯土",
    "en": "Rammed Earth",
    "category": "build",
    "era": "prehistoric",
    "date": "约 1 万年前",
    "year": -10000,
    "people": "",
    "place": "",
    "summary": "夯土在 约 1 万年前 前后成形，依托 陶器、钻、用火 把 房屋营建、桥梁隧道 落到实处，并成为 建筑建造 中承上启下的一环，直接支撑了 土坯砖 等后续技术。",
    "dependsOn": ["mat_pottery","mfg_drill","fire"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "史前时代",
        "text": "夯土在 约 1 万年前 前后出现，依托 陶器 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，夯土仍是 房屋营建 的底层支撑，并持续影响 土坯砖。"
      }
    ],
    "significance": "夯土把 陶器 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点，并直接催生了 土坯砖。"
  },
{
    "id": "bld_adobe",
    "name": "土坯砖",
    "en": "Adobe",
    "category": "build",
    "era": "prehistoric",
    "date": "公元前 9000 年",
    "year": -9000,
    "people": "",
    "place": "",
    "summary": "土坯砖约 公元前 9000 年 成熟，建立在 陶器、钻、用火 之上完成关键突破；其能力延伸到 房屋营建、桥梁隧道，并为 烧砖 的发展铺平了道路。",
    "dependsOn": ["mat_pottery","mfg_drill","fire","bld_rammed"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "史前时代",
        "text": "土坯砖在 公元前 9000 年 前后出现，依托 陶器 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，土坯砖仍是 房屋营建 的底层支撑，并持续影响 烧砖。"
      }
    ],
    "significance": "土坯砖把 陶器 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点，并直接催生了 烧砖。"
  },
{
    "id": "bld_brick",
    "name": "烧砖",
    "en": "Fired Brick",
    "category": "build",
    "era": "prehistoric",
    "date": "公元前 5000 年",
    "year": -5000,
    "people": "",
    "place": "",
    "summary": "烧砖约 公元前 5000 年 成熟，建立在 红铜冶炼、磨料、用火 之上完成关键突破；其能力延伸到 房屋营建、桥梁隧道，并为 木构建筑 的发展铺平了道路。",
    "dependsOn": ["mat_copper","mfg_abrasive","fire","bld_adobe"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "史前时代",
        "text": "烧砖在 公元前 5000 年 前后出现，依托 红铜冶炼 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，烧砖仍是 房屋营建 的底层支撑，并持续影响 木构建筑。"
      }
    ],
    "significance": "烧砖把 红铜冶炼 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点，并直接催生了 木构建筑。"
  },
{
    "id": "bld_tile",
    "name": "瓦",
    "en": "Roof Tile",
    "category": "build",
    "era": "ancient",
    "date": "公元前 3000 年",
    "year": -3000,
    "people": "",
    "place": "",
    "summary": "瓦在 公元前 3000 年 前后成形，依托 水泥、研磨、水力利用 把 房屋营建、桥梁隧道 落到实处，并成为 建筑建造 中承上启下的一环，直接支撑了 石构建筑 等后续技术。",
    "dependsOn": ["mat_cement","mfg_lapp","ene_hydro","bld_mortise"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "瓦在 公元前 3000 年 前后出现，依托 水泥 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，瓦仍是 房屋营建 的底层支撑，并持续影响 石构建筑。"
      }
    ],
    "significance": "瓦把 水泥 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点，并直接催生了 石构建筑。"
  },
{
    "id": "bld_timber",
    "name": "木构建筑",
    "en": "Timber Frame",
    "category": "build",
    "era": "prehistoric",
    "date": "公元前 5000 年",
    "year": -5000,
    "people": "",
    "place": "",
    "summary": "木构建筑约 公元前 5000 年 成熟，建立在 红铜冶炼、磨料、用火 之上完成关键突破；其能力延伸到 房屋营建、桥梁隧道，并为 榫卯 的发展铺平了道路。",
    "dependsOn": ["mat_copper","mfg_abrasive","fire","bld_brick"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "史前时代",
        "text": "木构建筑在 公元前 5000 年 前后出现，依托 红铜冶炼 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，木构建筑仍是 房屋营建 的底层支撑，并持续影响 榫卯。"
      }
    ],
    "significance": "木构建筑把 红铜冶炼 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点，并直接催生了 榫卯。"
  },
{
    "id": "bld_mortise",
    "name": "榫卯",
    "en": "Mortise and Tenon",
    "category": "build",
    "era": "prehistoric",
    "date": "公元前 5000 年",
    "year": -5000,
    "people": "",
    "place": "",
    "summary": "榫卯约 公元前 5000 年 成熟，建立在 红铜冶炼、磨料、用火 之上完成关键突破；其能力延伸到 房屋营建、桥梁隧道，并为 瓦 的发展铺平了道路。",
    "dependsOn": ["mat_copper","mfg_abrasive","fire","bld_timber"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "史前时代",
        "text": "榫卯在 公元前 5000 年 前后出现，依托 红铜冶炼 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，榫卯仍是 房屋营建 的底层支撑，并持续影响 瓦。"
      }
    ],
    "significance": "榫卯把 红铜冶炼 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点，并直接催生了 瓦。"
  },
{
    "id": "bld_dougong",
    "name": "斗拱",
    "en": "Dougong Bracket",
    "category": "build",
    "era": "classical",
    "date": "公元前 500 年",
    "year": -500,
    "people": "",
    "place": "",
    "summary": "斗拱约 公元前 500 年 出现，建立在 高炉炼铁、车床、煤炭开采 之上；它把 房屋营建、桥梁隧道 变成可稳定复现的能力，是 建筑建造 中从经验走向方法的关键一步。",
    "dependsOn": ["mat_blastfurnace","mfg_lathe","ene_coal","bld_arch"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "古典时代",
        "text": "斗拱在 公元前 500 年 前后出现，依托 高炉炼铁 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，斗拱仍是 房屋营建 的底层支撑，并作为 建筑建造 的基础能力持续发挥作用。"
      }
    ],
    "significance": "斗拱把 高炉炼铁 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bld_stone",
    "name": "石构建筑",
    "en": "Stone Construction",
    "category": "build",
    "era": "ancient",
    "date": "公元前 3000 年",
    "year": -3000,
    "people": "",
    "place": "",
    "summary": "石构建筑约 公元前 3000 年 成熟，建立在 水泥、研磨、水力利用 之上完成关键突破；其能力延伸到 房屋营建、桥梁隧道，并为 桩基础 的发展铺平了道路。",
    "dependsOn": ["mat_cement","mfg_lapp","ene_hydro","bld_tile"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "石构建筑在 公元前 3000 年 前后出现，依托 水泥 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，石构建筑仍是 房屋营建 的底层支撑，并持续影响 桩基础。"
      }
    ],
    "significance": "石构建筑把 水泥 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点，并直接催生了 桩基础。"
  },
{
    "id": "bld_arch",
    "name": "拱",
    "en": "Arch",
    "category": "build",
    "era": "ancient",
    "date": "公元前 1000 年",
    "year": -1000,
    "people": "",
    "place": "",
    "summary": "拱在 公元前 1000 年 前后成形，依托 退火、车床、煤炭开采 把 房屋营建、桥梁隧道 落到实处，并成为 建筑建造 中承上启下的一环，直接支撑了 斗拱 等后续技术。",
    "dependsOn": ["mat_anneal","mfg_lathe","ene_coal","bld_pile"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "拱在 公元前 1000 年 前后出现，依托 退火 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，拱仍是 房屋营建 的底层支撑，并持续影响 斗拱。"
      }
    ],
    "significance": "拱把 退火 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点，并直接催生了 斗拱。"
  },
{
    "id": "bld_dome",
    "name": "穹顶",
    "en": "Dome",
    "category": "build",
    "era": "classical",
    "date": "公元前 100 年",
    "year": -100,
    "people": "",
    "place": "",
    "summary": "穹顶约 公元前 100 年 成熟，建立在 水泥与混凝土、螺纹、水车 之上完成关键突破；其能力延伸到 房屋营建、桥梁隧道，并为 罗马混凝土 的发展铺平了道路。",
    "dependsOn": ["cement","mfg_thread","ene_waterwheel","arch"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "古典时代",
        "text": "穹顶在 公元前 100 年 前后出现，依托 水泥与混凝土 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，穹顶仍是 房屋营建 的底层支撑，并持续影响 罗马混凝土。"
      }
    ],
    "significance": "穹顶把 水泥与混凝土 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点，并直接催生了 罗马混凝土。"
  },
{
    "id": "bld_ribvault",
    "name": "肋拱",
    "en": "Rib Vault",
    "category": "build",
    "era": "medieval",
    "date": "1100 年",
    "year": 1100,
    "people": "",
    "place": "",
    "summary": "肋拱约 1100 年 成熟，建立在 瓷器、螺纹、风车 之上完成关键突破；其能力延伸到 房屋营建、桥梁隧道，并为 飞扶壁 的发展铺平了道路。",
    "dependsOn": ["mat_porcelain","mfg_thread","ene_wind","bld_romanconc"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "中世纪",
        "text": "肋拱在 1100 年 前后出现，依托 瓷器 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，肋拱仍是 房屋营建 的底层支撑，并持续影响 飞扶壁。"
      }
    ],
    "significance": "肋拱把 瓷器 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点，并直接催生了 飞扶壁。"
  },
{
    "id": "bld_flying",
    "name": "飞扶壁",
    "en": "Flying Buttress",
    "category": "build",
    "era": "medieval",
    "date": "1100 年",
    "year": 1100,
    "people": "",
    "place": "",
    "summary": "飞扶壁约 1100 年 成熟，建立在 瓷器、螺纹、风车 之上完成关键突破；其能力延伸到 房屋营建、桥梁隧道，并为 哥特结构 的发展铺平了道路。",
    "dependsOn": ["mat_porcelain","mfg_thread","ene_wind","bld_ribvault"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "中世纪",
        "text": "飞扶壁在 1100 年 前后出现，依托 瓷器 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，飞扶壁仍是 房屋营建 的底层支撑，并持续影响 哥特结构。"
      }
    ],
    "significance": "飞扶壁把 瓷器 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点，并直接催生了 哥特结构。"
  },
{
    "id": "bld_gothic",
    "name": "哥特结构",
    "en": "Gothic Structure",
    "category": "build",
    "era": "medieval",
    "date": "1100 年",
    "year": 1100,
    "people": "",
    "place": "",
    "summary": "哥特结构在 1100 年 前后成形，依托 瓷器、螺纹、风车 把 房屋营建、桥梁隧道 落到实处，并成为 建筑建造 中承上启下的一环，直接支撑了 避雷 等后续技术。",
    "dependsOn": ["mat_porcelain","mfg_thread","ene_wind","bld_flying"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "中世纪",
        "text": "哥特结构在 1100 年 前后出现，依托 瓷器 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，哥特结构仍是 房屋营建 的底层支撑，并持续影响 避雷。"
      }
    ],
    "significance": "哥特结构把 瓷器 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点，并直接催生了 避雷。"
  },
{
    "id": "bld_romanconc",
    "name": "罗马混凝土",
    "en": "Roman Concrete",
    "category": "build",
    "era": "classical",
    "date": "公元前 100 年",
    "year": -100,
    "people": "",
    "place": "",
    "summary": "罗马混凝土在 公元前 100 年 前后成形，依托 水泥与混凝土、螺纹、水车 把 房屋营建、桥梁隧道 落到实处，并成为 建筑建造 中承上启下的一环，直接支撑了 肋拱 等后续技术。",
    "dependsOn": ["cement","mfg_thread","ene_waterwheel","bld_dome"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "古典时代",
        "text": "罗马混凝土在 公元前 100 年 前后出现，依托 水泥与混凝土 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，罗马混凝土仍是 房屋营建 的底层支撑，并持续影响 肋拱。"
      }
    ],
    "significance": "罗马混凝土把 水泥与混凝土 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点，并直接催生了 肋拱。"
  },
{
    "id": "bld_framing",
    "name": "框架结构",
    "en": "Frame Structure",
    "category": "build",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "框架结构在 1800 年 前后成形，依托 感应熔炼、热处理炉、余热回收 把 房屋营建、桥梁隧道 落到实处，并成为 建筑建造 中承上启下的一环，直接支撑了 悬索桥 等后续技术。",
    "dependsOn": ["mat_inductionmelt","mfg_furnace","ene_wasteheat","bld_lightning"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "框架结构在 1800 年 前后出现，依托 感应熔炼 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，框架结构仍是 房屋营建 的底层支撑，并持续影响 悬索桥。"
      }
    ],
    "significance": "框架结构把 感应熔炼 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点，并直接催生了 悬索桥。"
  },
{
    "id": "bld_shearwall",
    "name": "剪力墙",
    "en": "Shear Wall",
    "category": "build",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "剪力墙约 1900 年 成熟，建立在 渗硼、切削液、调峰电站 之上完成关键突破；其能力延伸到 房屋营建、桥梁隧道，并为 空调系统 的发展铺平了道路。",
    "dependsOn": ["mat_boriding","mfg_coolant","ene_peaker","bld_immersed"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "剪力墙在 1900 年 前后出现，依托 渗硼 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，剪力墙仍是 房屋营建 的底层支撑，并持续影响 空调系统。"
      }
    ],
    "significance": "剪力墙把 渗硼 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点，并直接催生了 空调系统。"
  },
{
    "id": "bld_tube",
    "name": "筒体结构",
    "en": "Tube Structure",
    "category": "build",
    "era": "info",
    "date": "1960 年",
    "year": 1960,
    "people": "",
    "place": "",
    "summary": "筒体结构在 1960 年 前后成形，依托 放电等离子烧结、电解磨削、可燃冰 把 房屋营建、桥梁隧道 落到实处，并成为 建筑建造 中承上启下的一环，直接支撑了 爬模 等后续技术。",
    "dependsOn": ["mat_sps","mfg_ecmg","ene_clathrate","bld_cablestay"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "筒体结构在 1960 年 前后出现，依托 放电等离子烧结 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，筒体结构仍是 房屋营建 的底层支撑，并持续影响 爬模。"
      }
    ],
    "significance": "筒体结构把 放电等离子烧结 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点，并直接催生了 爬模。"
  },
{
    "id": "bld_cablestay",
    "name": "斜拉桥",
    "en": "Cable-Stayed Bridge",
    "category": "build",
    "era": "info",
    "date": "1955 年",
    "year": 1955,
    "people": "",
    "place": "",
    "summary": "斜拉桥在 1955 年 前后成形，依托 聚丙烯、谐波减速器、沸水堆 把 房屋营建、桥梁隧道 落到实处，并成为 建筑建造 中承上启下的一环，直接支撑了 筒体结构 等后续技术。",
    "dependsOn": ["mat_pp","mfg_harmonic","ene_bwr","bld_curtain"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "斜拉桥在 1955 年 前后出现，依托 聚丙烯 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，斜拉桥仍是 房屋营建 的底层支撑，并持续影响 筒体结构。"
      }
    ],
    "significance": "斜拉桥把 聚丙烯 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点，并直接催生了 筒体结构。"
  },
{
    "id": "bld_suspension",
    "name": "悬索桥",
    "en": "Suspension Bridge",
    "category": "build",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "悬索桥约 1800 年 成熟，建立在 感应熔炼、热处理炉、余热回收 之上完成关键突破；其能力延伸到 房屋营建、桥梁隧道，并为 桁架 的发展铺平了道路。",
    "dependsOn": ["mat_inductionmelt","mfg_furnace","ene_wasteheat","bld_framing"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "悬索桥在 1800 年 前后出现，依托 感应熔炼 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，悬索桥仍是 房屋营建 的底层支撑，并持续影响 桁架。"
      }
    ],
    "significance": "悬索桥把 感应熔炼 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点，并直接催生了 桁架。"
  },
{
    "id": "bld_truss",
    "name": "桁架",
    "en": "Truss",
    "category": "build",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "桁架约 1800 年 成熟，建立在 感应熔炼、热处理炉、余热回收 之上完成关键突破；其能力延伸到 房屋营建、桥梁隧道，并为 钢桥 的发展铺平了道路。",
    "dependsOn": ["mat_inductionmelt","mfg_furnace","ene_wasteheat","bld_suspension"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "桁架在 1800 年 前后出现，依托 感应熔炼 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，桁架仍是 房屋营建 的底层支撑，并持续影响 钢桥。"
      }
    ],
    "significance": "桁架把 感应熔炼 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点，并直接催生了 钢桥。"
  },
{
    "id": "bld_steelbridge",
    "name": "钢桥",
    "en": "Steel Bridge",
    "category": "build",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "钢桥在 1800 年 前后成形，依托 感应熔炼、热处理炉、余热回收 把 房屋营建、桥梁隧道 落到实处，并成为 建筑建造 中承上启下的一环，直接支撑了 隧道掘进 等后续技术。",
    "dependsOn": ["mat_inductionmelt","mfg_furnace","ene_wasteheat","bld_truss"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "钢桥在 1800 年 前后出现，依托 感应熔炼 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，钢桥仍是 房屋营建 的底层支撑，并持续影响 隧道掘进。"
      }
    ],
    "significance": "钢桥把 感应熔炼 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点，并直接催生了 隧道掘进。"
  },
{
    "id": "bld_tunnel3",
    "name": "隧道掘进",
    "en": "Tunnel Boring",
    "category": "build",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "隧道掘进约 1800 年 成熟，建立在 感应熔炼、热处理炉、余热回收 之上完成关键突破；其能力延伸到 房屋营建、桥梁隧道，并为 筏基 的发展铺平了道路。",
    "dependsOn": ["mat_inductionmelt","mfg_furnace","ene_wasteheat","bld_steelbridge"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "隧道掘进在 1800 年 前后出现，依托 感应熔炼 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，隧道掘进仍是 房屋营建 的底层支撑，并持续影响 筏基。"
      }
    ],
    "significance": "隧道掘进把 感应熔炼 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点，并直接催生了 筏基。"
  },
{
    "id": "bld_shield",
    "name": "盾构法",
    "en": "Shield Tunnelling",
    "category": "build",
    "era": "industrial",
    "date": "1825 年",
    "year": 1825,
    "people": "",
    "place": "",
    "summary": "盾构法约 1825 年 出现，建立在 铝冶炼、铣床、热电发电 之上；它把 房屋营建、桥梁隧道 变成可稳定复现的能力，是 建筑建造 中从经验走向方法的关键一步。",
    "dependsOn": ["mat_alu","mfg_mill","ene_thermoelectric","bld_underground"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "盾构法在 1825 年 前后出现，依托 铝冶炼 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，盾构法仍是 房屋营建 的底层支撑，并作为 建筑建造 的基础能力持续发挥作用。"
      }
    ],
    "significance": "盾构法把 铝冶炼 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bld_immersed",
    "name": "沉管隧道",
    "en": "Immersed Tunnel",
    "category": "build",
    "era": "industrial",
    "date": "1890 年",
    "year": 1890,
    "people": "",
    "place": "",
    "summary": "沉管隧道在 1890 年 前后成形，依托 锗、感应加热、无线输电 把 房屋营建、桥梁隧道 落到实处，并成为 建筑建造 中承上启下的一环，直接支撑了 剪力墙 等后续技术。",
    "dependsOn": ["mat_ge","mfg_induction","ene_wpt","skyscraper"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "沉管隧道在 1890 年 前后出现，依托 锗 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，沉管隧道仍是 房屋营建 的底层支撑，并持续影响 剪力墙。"
      }
    ],
    "significance": "沉管隧道把 锗 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点，并直接催生了 剪力墙。"
  },
{
    "id": "bld_pile",
    "name": "桩基础",
    "en": "Pile Foundation",
    "category": "build",
    "era": "ancient",
    "date": "公元前 2000 年",
    "year": -2000,
    "people": "",
    "place": "",
    "summary": "桩基础在 公元前 2000 年 前后成形，依托 混凝土、量具、水力利用 把 房屋营建、桥梁隧道 落到实处，并成为 建筑建造 中承上启下的一环，直接支撑了 拱 等后续技术。",
    "dependsOn": ["mat_concrete","mfg_gauge","ene_hydro","bld_stone"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "桩基础在 公元前 2000 年 前后出现，依托 混凝土 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，桩基础仍是 房屋营建 的底层支撑，并持续影响 拱。"
      }
    ],
    "significance": "桩基础把 混凝土 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点，并直接催生了 拱。"
  },
{
    "id": "bld_raftfound",
    "name": "筏基",
    "en": "Raft Foundation",
    "category": "build",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "筏基约 1800 年 成熟，建立在 感应熔炼、热处理炉、余热回收 之上完成关键突破；其能力延伸到 房屋营建、桥梁隧道，并为 地基处理 的发展铺平了道路。",
    "dependsOn": ["mat_inductionmelt","mfg_furnace","ene_wasteheat","bld_tunnel3"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "筏基在 1800 年 前后出现，依托 感应熔炼 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，筏基仍是 房屋营建 的底层支撑，并持续影响 地基处理。"
      }
    ],
    "significance": "筏基把 感应熔炼 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点，并直接催生了 地基处理。"
  },
{
    "id": "bld_ground",
    "name": "地基处理",
    "en": "Ground Improvement",
    "category": "build",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "地基处理约 1800 年 成熟，建立在 感应熔炼、热处理炉、余热回收 之上完成关键突破；其能力延伸到 房屋营建、桥梁隧道，并为 灌浆 的发展铺平了道路。",
    "dependsOn": ["mat_inductionmelt","mfg_furnace","ene_wasteheat","bld_raftfound"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "地基处理在 1800 年 前后出现，依托 感应熔炼 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，地基处理仍是 房屋营建 的底层支撑，并持续影响 灌浆。"
      }
    ],
    "significance": "地基处理把 感应熔炼 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点，并直接催生了 灌浆。"
  },
{
    "id": "bld_grouting",
    "name": "灌浆",
    "en": "Grouting",
    "category": "build",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "灌浆约 1800 年 成熟，建立在 感应熔炼、热处理炉、余热回收 之上完成关键突破；其能力延伸到 房屋营建、桥梁隧道，并为 防水 的发展铺平了道路。",
    "dependsOn": ["mat_inductionmelt","mfg_furnace","ene_wasteheat","bld_ground"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "灌浆在 1800 年 前后出现，依托 感应熔炼 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，灌浆仍是 房屋营建 的底层支撑，并持续影响 防水。"
      }
    ],
    "significance": "灌浆把 感应熔炼 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点，并直接催生了 防水。"
  },
{
    "id": "bld_waterproof",
    "name": "防水",
    "en": "Waterproofing",
    "category": "build",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "防水约 1800 年 成熟，建立在 感应熔炼、热处理炉、余热回收 之上完成关键突破；其能力延伸到 房屋营建、桥梁隧道，并为 保温隔热 的发展铺平了道路。",
    "dependsOn": ["mat_inductionmelt","mfg_furnace","ene_wasteheat","bld_grouting"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "防水在 1800 年 前后出现，依托 感应熔炼 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，防水仍是 房屋营建 的底层支撑，并持续影响 保温隔热。"
      }
    ],
    "significance": "防水把 感应熔炼 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点，并直接催生了 保温隔热。"
  },
{
    "id": "bld_insulation2",
    "name": "保温隔热",
    "en": "Thermal Insulation",
    "category": "build",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "保温隔热在 1800 年 前后成形，依托 感应熔炼、热处理炉、余热回收 把 房屋营建、桥梁隧道 落到实处，并成为 建筑建造 中承上启下的一环，直接支撑了 自然采光 等后续技术。",
    "dependsOn": ["mat_inductionmelt","mfg_furnace","ene_wasteheat","bld_waterproof"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "保温隔热在 1800 年 前后出现，依托 感应熔炼 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，保温隔热仍是 房屋营建 的底层支撑，并持续影响 自然采光。"
      }
    ],
    "significance": "保温隔热把 感应熔炼 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点，并直接催生了 自然采光。"
  },
{
    "id": "bld_curtain",
    "name": "玻璃幕墙",
    "en": "Curtain Wall",
    "category": "build",
    "era": "info",
    "date": "1950 年",
    "year": 1950,
    "people": "",
    "place": "",
    "summary": "玻璃幕墙在 1950 年 前后成形，依托 泡沫金属、超声加工、盐差能 把 房屋营建、桥梁隧道 落到实处，并成为 建筑建造 中承上启下的一环，直接支撑了 斜拉桥 等后续技术。",
    "dependsOn": ["mat_foammetal","mfg_ultrasonicm","ene_salinity","bld_pump"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "玻璃幕墙在 1950 年 前后出现，依托 泡沫金属 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，玻璃幕墙仍是 房屋营建 的底层支撑，并持续影响 斜拉桥。"
      }
    ],
    "significance": "玻璃幕墙把 泡沫金属 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点，并直接催生了 斜拉桥。"
  },
{
    "id": "bld_daylight",
    "name": "自然采光",
    "en": "Daylighting",
    "category": "build",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "自然采光在 1800 年 前后成形，依托 感应熔炼、热处理炉、余热回收 把 房屋营建、桥梁隧道 落到实处，并成为 建筑建造 中承上启下的一环，直接支撑了 通风系统 等后续技术。",
    "dependsOn": ["mat_inductionmelt","mfg_furnace","ene_wasteheat","bld_insulation2"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "自然采光在 1800 年 前后出现，依托 感应熔炼 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，自然采光仍是 房屋营建 的底层支撑，并持续影响 通风系统。"
      }
    ],
    "significance": "自然采光把 感应熔炼 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点，并直接催生了 通风系统。"
  },
{
    "id": "bld_vent",
    "name": "通风系统",
    "en": "Ventilation",
    "category": "build",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "通风系统约 1800 年 成熟，建立在 感应熔炼、热处理炉、余热回收 之上完成关键突破；其能力延伸到 房屋营建、桥梁隧道，并为 给排水 的发展铺平了道路。",
    "dependsOn": ["mat_inductionmelt","mfg_furnace","ene_wasteheat","bld_daylight"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "通风系统在 1800 年 前后出现，依托 感应熔炼 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，通风系统仍是 房屋营建 的底层支撑，并持续影响 给排水。"
      }
    ],
    "significance": "通风系统把 感应熔炼 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点，并直接催生了 给排水。"
  },
{
    "id": "bld_hvac",
    "name": "空调系统",
    "en": "HVAC",
    "category": "build",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "空调系统在 1900 年 前后成形，依托 渗硼、切削液、调峰电站 把 房屋营建、桥梁隧道 落到实处，并成为 建筑建造 中承上启下的一环，直接支撑了 雨水管理 等后续技术。",
    "dependsOn": ["mat_boriding","mfg_coolant","ene_peaker","bld_shearwall"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "空调系统在 1900 年 前后出现，依托 渗硼 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，空调系统仍是 房屋营建 的底层支撑，并持续影响 雨水管理。"
      }
    ],
    "significance": "空调系统把 渗硼 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点，并直接催生了 雨水管理。"
  },
{
    "id": "bld_plumbing",
    "name": "给排水",
    "en": "Plumbing",
    "category": "build",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "给排水在 1800 年 前后成形，依托 感应熔炼、热处理炉、余热回收 把 房屋营建、桥梁隧道 落到实处，并成为 建筑建造 中承上启下的一环，直接支撑了 污水处理 等后续技术。",
    "dependsOn": ["mat_inductionmelt","mfg_furnace","ene_wasteheat","bld_vent"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "给排水在 1800 年 前后出现，依托 感应熔炼 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，给排水仍是 房屋营建 的底层支撑，并持续影响 污水处理。"
      }
    ],
    "significance": "给排水把 感应熔炼 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点，并直接催生了 污水处理。"
  },
{
    "id": "bld_sewage",
    "name": "污水处理",
    "en": "Sewage Treatment",
    "category": "build",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "污水处理在 1800 年 前后成形，依托 感应熔炼、热处理炉、余热回收 把 房屋营建、桥梁隧道 落到实处，并成为 建筑建造 中承上启下的一环，直接支撑了 消防系统 等后续技术。",
    "dependsOn": ["mat_inductionmelt","mfg_furnace","ene_wasteheat","bld_plumbing"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "污水处理在 1800 年 前后出现，依托 感应熔炼 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，污水处理仍是 房屋营建 的底层支撑，并持续影响 消防系统。"
      }
    ],
    "significance": "污水处理把 感应熔炼 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点，并直接催生了 消防系统。"
  },
{
    "id": "bld_rainwater",
    "name": "雨水管理",
    "en": "Stormwater Mgmt",
    "category": "build",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "雨水管理约 1900 年 成熟，建立在 渗硼、切削液、调峰电站 之上完成关键突破；其能力延伸到 房屋营建、桥梁隧道，并为 抗震设计 的发展铺平了道路。",
    "dependsOn": ["mat_boriding","mfg_coolant","ene_peaker","bld_hvac"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "雨水管理在 1900 年 前后出现，依托 渗硼 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，雨水管理仍是 房屋营建 的底层支撑，并持续影响 抗震设计。"
      }
    ],
    "significance": "雨水管理把 渗硼 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点，并直接催生了 抗震设计。"
  },
{
    "id": "bld_fireprotect",
    "name": "消防系统",
    "en": "Fire Protection",
    "category": "build",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "消防系统约 1800 年 成熟，建立在 感应熔炼、热处理炉、余热回收 之上完成关键突破；其能力延伸到 房屋营建、桥梁隧道，并为 工程测量 的发展铺平了道路。",
    "dependsOn": ["mat_inductionmelt","mfg_furnace","ene_wasteheat","bld_sewage"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "消防系统在 1800 年 前后出现，依托 感应熔炼 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，消防系统仍是 房屋营建 的底层支撑，并持续影响 工程测量。"
      }
    ],
    "significance": "消防系统把 感应熔炼 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点，并直接催生了 工程测量。"
  },
{
    "id": "bld_sprinkler",
    "name": "自动喷淋",
    "en": "Sprinkler",
    "category": "build",
    "era": "industrial",
    "date": "1874 年",
    "year": 1874,
    "people": "",
    "place": "",
    "summary": "自动喷淋约 1874 年 出现，建立在 钢化玻璃、注塑、铅酸电池 之上；它把 房屋营建、桥梁隧道 变成可稳定复现的能力，是 建筑建造 中从经验走向方法的关键一步。",
    "dependsOn": ["mat_tempered","mfg_injection","ene_leadacid","elevator"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "自动喷淋在 1874 年 前后出现，依托 钢化玻璃 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，自动喷淋仍是 房屋营建 的底层支撑，并作为 建筑建造 的基础能力持续发挥作用。"
      }
    ],
    "significance": "自动喷淋把 钢化玻璃 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bld_lightning",
    "name": "避雷",
    "en": "Lightning Protection",
    "category": "build",
    "era": "earlymodern",
    "date": "1700 年",
    "year": 1700,
    "people": "",
    "place": "",
    "summary": "避雷在 1700 年 前后成形，依托 沸石分子筛、压延、太阳能热利用 把 房屋营建、桥梁隧道 落到实处，并成为 建筑建造 中承上启下的一环，直接支撑了 框架结构 等后续技术。",
    "dependsOn": ["mat_zeolite","mfg_rolling2","ene_solarthermal","bld_gothic"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "近代早期",
        "text": "避雷在 1700 年 前后出现，依托 沸石分子筛 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，避雷仍是 房屋营建 的底层支撑，并持续影响 框架结构。"
      }
    ],
    "significance": "避雷把 沸石分子筛 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点，并直接催生了 框架结构。"
  },
{
    "id": "bld_seismic",
    "name": "抗震设计",
    "en": "Seismic Design",
    "category": "build",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "抗震设计约 1900 年 成熟，建立在 渗硼、切削液、调峰电站 之上完成关键突破；其能力延伸到 房屋营建、桥梁隧道，并为 模块化建筑 的发展铺平了道路。",
    "dependsOn": ["mat_boriding","mfg_coolant","ene_peaker","bld_rainwater"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "抗震设计在 1900 年 前后出现，依托 渗硼 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，抗震设计仍是 房屋营建 的底层支撑，并持续影响 模块化建筑。"
      }
    ],
    "significance": "抗震设计把 渗硼 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点，并直接催生了 模块化建筑。"
  },
{
    "id": "bld_isolation",
    "name": "隔震",
    "en": "Seismic Isolation",
    "category": "build",
    "era": "info",
    "date": "1970 年",
    "year": 1970,
    "people": "",
    "place": "",
    "summary": "隔震在 1970 年 前后成形，依托 储氢合金、计算机辅助制造、水热型地热 把 房屋营建、桥梁隧道 落到实处，并成为 建筑建造 中承上启下的一环，直接支撑了 建筑信息模型 等后续技术。",
    "dependsOn": ["mat_hydrogenstorage","mfg_cam","ene_hydrothermal","bld_climbform"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "隔震在 1970 年 前后出现，依托 储氢合金 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，隔震仍是 房屋营建 的底层支撑，并持续影响 建筑信息模型。"
      }
    ],
    "significance": "隔震把 储氢合金 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点，并直接催生了 建筑信息模型。"
  },
{
    "id": "bld_modular",
    "name": "模块化建筑",
    "en": "Modular Building",
    "category": "build",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "模块化建筑在 1900 年 前后成形，依托 渗硼、切削液、调峰电站 把 房屋营建、桥梁隧道 落到实处，并成为 建筑建造 中承上启下的一环，直接支撑了 预制构件 等后续技术。",
    "dependsOn": ["mat_boriding","mfg_coolant","ene_peaker","bld_seismic"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "模块化建筑在 1900 年 前后出现，依托 渗硼 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，模块化建筑仍是 房屋营建 的底层支撑，并持续影响 预制构件。"
      }
    ],
    "significance": "模块化建筑把 渗硼 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点，并直接催生了 预制构件。"
  },
{
    "id": "bld_precast",
    "name": "预制构件",
    "en": "Precast",
    "category": "build",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "预制构件在 1900 年 前后成形，依托 渗硼、切削液、调峰电站 把 房屋营建、桥梁隧道 落到实处，并成为 建筑建造 中承上启下的一环，直接支撑了 装配式建筑 等后续技术。",
    "dependsOn": ["mat_boriding","mfg_coolant","ene_peaker","bld_modular"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "预制构件在 1900 年 前后出现，依托 渗硼 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，预制构件仍是 房屋营建 的底层支撑，并持续影响 装配式建筑。"
      }
    ],
    "significance": "预制构件把 渗硼 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点，并直接催生了 装配式建筑。"
  },
{
    "id": "bld_prefab",
    "name": "装配式建筑",
    "en": "Prefabrication",
    "category": "build",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "装配式建筑在 1900 年 前后成形，依托 渗硼、切削液、调峰电站 把 房屋营建、桥梁隧道 落到实处，并成为 建筑建造 中承上启下的一环，直接支撑了 塔吊 等后续技术。",
    "dependsOn": ["mat_boriding","mfg_coolant","ene_peaker","bld_precast"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "装配式建筑在 1900 年 前后出现，依托 渗硼 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，装配式建筑仍是 房屋营建 的底层支撑，并持续影响 塔吊。"
      }
    ],
    "significance": "装配式建筑把 渗硼 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点，并直接催生了 塔吊。"
  },
{
    "id": "bld_3dpb",
    "name": "3D 打印建筑",
    "en": "3D Printed Building",
    "category": "build",
    "era": "intelligent",
    "date": "2010 年",
    "year": 2010,
    "people": "",
    "place": "",
    "summary": "3D 打印建筑约 2010 年 成熟，建立在 二维材料、无人化工厂、液态空气储能 之上完成关键突破；其能力延伸到 房屋营建、桥梁隧道，并为 砌砖机器人 的发展铺平了道路。",
    "dependsOn": ["mat_2d","mfg_darkfactory","ene_liquidair","bld_sponge"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "3D 打印建筑在 2010 年 前后出现，依托 二维材料 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，3D 打印建筑仍是 房屋营建 的底层支撑，并持续影响 砌砖机器人。"
      }
    ],
    "significance": "3D 打印建筑把 二维材料 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点，并直接催生了 砌砖机器人。"
  },
{
    "id": "bld_green",
    "name": "绿色建筑",
    "en": "Green Building",
    "category": "build",
    "era": "info",
    "date": "1990 年",
    "year": 1990,
    "people": "",
    "place": "",
    "summary": "绿色建筑约 1990 年 成熟，建立在 金属有机框架、在机测量、燃料电池汽车 之上完成关键突破；其能力延伸到 房屋营建、桥梁隧道，并为 被动房 的发展铺平了道路。",
    "dependsOn": ["mat_mof","mfg_onmachinem","ene_fuelcellcar","bld_aluform"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "绿色建筑在 1990 年 前后出现，依托 金属有机框架 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，绿色建筑仍是 房屋营建 的底层支撑，并持续影响 被动房。"
      }
    ],
    "significance": "绿色建筑把 金属有机框架 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点，并直接催生了 被动房。"
  },
{
    "id": "bld_passive",
    "name": "被动房",
    "en": "Passive House",
    "category": "build",
    "era": "info",
    "date": "1990 年",
    "year": 1990,
    "people": "",
    "place": "",
    "summary": "被动房约 1990 年 成熟，建立在 金属有机框架、在机测量、燃料电池汽车 之上完成关键突破；其能力延伸到 房屋营建、桥梁隧道，并为 垂直绿化 的发展铺平了道路。",
    "dependsOn": ["mat_mof","mfg_onmachinem","ene_fuelcellcar","bld_green"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "被动房在 1990 年 前后出现，依托 金属有机框架 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，被动房仍是 房屋营建 的底层支撑，并持续影响 垂直绿化。"
      }
    ],
    "significance": "被动房把 金属有机框架 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点，并直接催生了 垂直绿化。"
  },
{
    "id": "bld_zeroenergy",
    "name": "零能耗建筑",
    "en": "Zero-Energy Building",
    "category": "build",
    "era": "intelligent",
    "date": "2000 年",
    "year": 2000,
    "people": "",
    "place": "",
    "summary": "零能耗建筑在 2000 年 前后成形，依托 自修复材料、视觉引导装配、井式地热 把 房屋营建、桥梁隧道 落到实处，并成为 建筑建造 中承上启下的一环，直接支撑了 智能建筑 等后续技术。",
    "dependsOn": ["mat_selfheal","mfg_visionguide","ene_borehole","bld_verticalgreen"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "零能耗建筑在 2000 年 前后出现，依托 自修复材料 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，零能耗建筑仍是 房屋营建 的底层支撑，并持续影响 智能建筑。"
      }
    ],
    "significance": "零能耗建筑把 自修复材料 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点，并直接催生了 智能建筑。"
  },
{
    "id": "bld_smartb",
    "name": "智能建筑",
    "en": "Smart Building",
    "category": "build",
    "era": "intelligent",
    "date": "2000 年",
    "year": 2000,
    "people": "",
    "place": "",
    "summary": "智能建筑约 2000 年 成熟，建立在 自修复材料、视觉引导装配、井式地热 之上完成关键突破；其能力延伸到 房屋营建、桥梁隧道，并为 海绵城市 的发展铺平了道路。",
    "dependsOn": ["mat_selfheal","mfg_visionguide","ene_borehole","bld_zeroenergy"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "智能建筑在 2000 年 前后出现，依托 自修复材料 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，智能建筑仍是 房屋营建 的底层支撑，并持续影响 海绵城市。"
      }
    ],
    "significance": "智能建筑把 自修复材料 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点，并直接催生了 海绵城市。"
  },
{
    "id": "bld_bim",
    "name": "建筑信息模型",
    "en": "BIM",
    "category": "build",
    "era": "info",
    "date": "1970 年",
    "year": 1970,
    "people": "",
    "place": "",
    "summary": "建筑信息模型在 1970 年 前后成形，依托 储氢合金、计算机辅助制造、水热型地热 把 房屋营建、桥梁隧道 落到实处，并成为 建筑建造 中承上启下的一环，直接支撑了 地源热泵建筑 等后续技术。",
    "dependsOn": ["mat_hydrogenstorage","mfg_cam","ene_hydrothermal","bld_isolation"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "建筑信息模型在 1970 年 前后出现，依托 储氢合金 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，建筑信息模型仍是 房屋营建 的底层支撑，并持续影响 地源热泵建筑。"
      }
    ],
    "significance": "建筑信息模型把 储氢合金 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点，并直接催生了 地源热泵建筑。"
  },
{
    "id": "bld_survey2",
    "name": "工程测量",
    "en": "Engineering Survey",
    "category": "build",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "工程测量在 1800 年 前后成形，依托 感应熔炼、热处理炉、余热回收 把 房屋营建、桥梁隧道 落到实处，并成为 建筑建造 中承上启下的一环，直接支撑了 地下空间 等后续技术。",
    "dependsOn": ["mat_inductionmelt","mfg_furnace","ene_wasteheat","bld_fireprotect"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "工程测量在 1800 年 前后出现，依托 感应熔炼 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，工程测量仍是 房屋营建 的底层支撑，并持续影响 地下空间。"
      }
    ],
    "significance": "工程测量把 感应熔炼 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点，并直接催生了 地下空间。"
  },
{
    "id": "bld_underground",
    "name": "地下空间",
    "en": "Underground Space",
    "category": "build",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "地下空间约 1800 年 成熟，建立在 感应熔炼、热处理炉、余热回收 之上完成关键突破；其能力延伸到 房屋营建、桥梁隧道，并为 盾构法 的发展铺平了道路。",
    "dependsOn": ["mat_inductionmelt","mfg_furnace","ene_wasteheat","bld_survey2"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "地下空间在 1800 年 前后出现，依托 感应熔炼 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，地下空间仍是 房屋营建 的底层支撑，并持续影响 盾构法。"
      }
    ],
    "significance": "地下空间把 感应熔炼 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点，并直接催生了 盾构法。"
  },
{
    "id": "bld_sponge",
    "name": "海绵城市",
    "en": "Sponge City",
    "category": "build",
    "era": "intelligent",
    "date": "2000 年",
    "year": 2000,
    "people": "",
    "place": "",
    "summary": "海绵城市在 2000 年 前后成形，依托 自修复材料、视觉引导装配、井式地热 把 房屋营建、桥梁隧道 落到实处，并成为 建筑建造 中承上启下的一环，直接支撑了 3D 打印建筑 等后续技术。",
    "dependsOn": ["mat_selfheal","mfg_visionguide","ene_borehole","bld_smartb"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "海绵城市在 2000 年 前后出现，依托 自修复材料 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，海绵城市仍是 房屋营建 的底层支撑，并持续影响 3D 打印建筑。"
      }
    ],
    "significance": "海绵城市把 自修复材料 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点，并直接催生了 3D 打印建筑。"
  },
{
    "id": "bld_verticalgreen",
    "name": "垂直绿化",
    "en": "Vertical Greening",
    "category": "build",
    "era": "info",
    "date": "1990 年",
    "year": 1990,
    "people": "",
    "place": "",
    "summary": "垂直绿化约 1990 年 成熟，建立在 金属有机框架、在机测量、燃料电池汽车 之上完成关键突破；其能力延伸到 房屋营建、桥梁隧道，并为 零能耗建筑 的发展铺平了道路。",
    "dependsOn": ["mat_mof","mfg_onmachinem","ene_fuelcellcar","bld_passive"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "垂直绿化在 1990 年 前后出现，依托 金属有机框架 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，垂直绿化仍是 房屋营建 的底层支撑，并持续影响 零能耗建筑。"
      }
    ],
    "significance": "垂直绿化把 金属有机框架 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点，并直接催生了 零能耗建筑。"
  },
{
    "id": "bld_geothermal2",
    "name": "地源热泵建筑",
    "en": "Geothermal Building",
    "category": "build",
    "era": "info",
    "date": "1980 年",
    "year": 1980,
    "people": "",
    "place": "",
    "summary": "地源热泵建筑在 1980 年 前后成形，依托 激光熔覆、机器人夹爪、碟式斯特林 把 房屋营建、桥梁隧道 落到实处，并成为 建筑建造 中承上启下的一环，直接支撑了 铝模板 等后续技术。",
    "dependsOn": ["mat_laserclad","mfg_robotgripper","ene_dishstirling","bld_bim"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "地源热泵建筑在 1980 年 前后出现，依托 激光熔覆 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，地源热泵建筑仍是 房屋营建 的底层支撑，并持续影响 铝模板。"
      }
    ],
    "significance": "地源热泵建筑把 激光熔覆 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点，并直接催生了 铝模板。"
  },
{
    "id": "bld_towercrane",
    "name": "塔吊",
    "en": "Tower Crane",
    "category": "build",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "塔吊在 1900 年 前后成形，依托 渗硼、切削液、调峰电站 把 房屋营建、桥梁隧道 落到实处，并成为 建筑建造 中承上启下的一环，直接支撑了 混凝土泵车 等后续技术。",
    "dependsOn": ["mat_boriding","mfg_coolant","ene_peaker","bld_prefab"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "塔吊在 1900 年 前后出现，依托 渗硼 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，塔吊仍是 房屋营建 的底层支撑，并持续影响 混凝土泵车。"
      }
    ],
    "significance": "塔吊把 渗硼 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点，并直接催生了 混凝土泵车。"
  },
{
    "id": "bld_pump",
    "name": "混凝土泵车",
    "en": "Concrete Pump",
    "category": "build",
    "era": "electrical",
    "date": "1920 年",
    "year": 1920,
    "people": "",
    "place": "",
    "summary": "混凝土泵车在 1920 年 前后成形，依托 氧化锆陶瓷、流水线、合成燃料 把 房屋营建、桥梁隧道 落到实处，并成为 建筑建造 中承上启下的一环，直接支撑了 玻璃幕墙 等后续技术。",
    "dependsOn": ["mat_zirconia","assembly_line","ene_synfuel","bld_towercrane"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "混凝土泵车在 1920 年 前后出现，依托 氧化锆陶瓷 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，混凝土泵车仍是 房屋营建 的底层支撑，并持续影响 玻璃幕墙。"
      }
    ],
    "significance": "混凝土泵车把 氧化锆陶瓷 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点，并直接催生了 玻璃幕墙。"
  },
{
    "id": "bld_climbform",
    "name": "爬模",
    "en": "Climbing Form",
    "category": "build",
    "era": "info",
    "date": "1960 年",
    "year": 1960,
    "people": "",
    "place": "",
    "summary": "爬模约 1960 年 成熟，建立在 放电等离子烧结、电解磨削、可燃冰 之上完成关键突破；其能力延伸到 房屋营建、桥梁隧道，并为 隔震 的发展铺平了道路。",
    "dependsOn": ["mat_sps","mfg_ecmg","ene_clathrate","bld_tube"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "爬模在 1960 年 前后出现，依托 放电等离子烧结 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，爬模仍是 房屋营建 的底层支撑，并持续影响 隔震。"
      }
    ],
    "significance": "爬模把 放电等离子烧结 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点，并直接催生了 隔震。"
  },
{
    "id": "bld_aluform",
    "name": "铝模板",
    "en": "Aluminium Formwork",
    "category": "build",
    "era": "info",
    "date": "1980 年",
    "year": 1980,
    "people": "",
    "place": "",
    "summary": "铝模板在 1980 年 前后成形，依托 激光熔覆、机器人夹爪、碟式斯特林 把 房屋营建、桥梁隧道 落到实处，并成为 建筑建造 中承上启下的一环，直接支撑了 绿色建筑 等后续技术。",
    "dependsOn": ["mat_laserclad","mfg_robotgripper","ene_dishstirling","bld_geothermal2"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "铝模板在 1980 年 前后出现，依托 激光熔覆 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，铝模板仍是 房屋营建 的底层支撑，并持续影响 绿色建筑。"
      }
    ],
    "significance": "铝模板把 激光熔覆 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点，并直接催生了 绿色建筑。"
  },
{
    "id": "bld_robotbrick",
    "name": "砌砖机器人",
    "en": "Bricklaying Robot",
    "category": "build",
    "era": "intelligent",
    "date": "2010 年",
    "year": 2010,
    "people": "",
    "place": "",
    "summary": "砌砖机器人约 2010 年 成熟，建立在 二维材料、无人化工厂、液态空气储能 之上完成关键突破；其能力延伸到 房屋营建、桥梁隧道，并为 智慧城市 的发展铺平了道路。",
    "dependsOn": ["mat_2d","mfg_darkfactory","ene_liquidair","bld_3dpb"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "砌砖机器人在 2010 年 前后出现，依托 二维材料 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，砌砖机器人仍是 房屋营建 的底层支撑，并持续影响 智慧城市。"
      }
    ],
    "significance": "砌砖机器人把 二维材料 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点，并直接催生了 智慧城市。"
  },
{
    "id": "bld_dronesurvey",
    "name": "无人机测绘",
    "en": "Drone Surveying",
    "category": "build",
    "era": "intelligent",
    "date": "2015 年",
    "year": 2015,
    "people": "",
    "place": "",
    "summary": "无人机测绘在 2015 年 前后成形，依托 二维材料、工业 4.0、摩擦纳米发电 把 房屋营建、桥梁隧道 落到实处，并成为 建筑建造 中承上启下的一环，直接支撑了 混凝土 3D 打印 等后续技术。",
    "dependsOn": ["mat_2d","mfg_industry40","ene_tribo","bld_carbonconc"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "无人机测绘在 2015 年 前后出现，依托 二维材料 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，无人机测绘仍是 房屋营建 的底层支撑，并持续影响 混凝土 3D 打印。"
      }
    ],
    "significance": "无人机测绘把 二维材料 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点，并直接催生了 混凝土 3D 打印。"
  },
{
    "id": "bld_smartcity",
    "name": "智慧城市",
    "en": "Smart City",
    "category": "build",
    "era": "intelligent",
    "date": "2010 年",
    "year": 2010,
    "people": "",
    "place": "",
    "summary": "智慧城市在 2010 年 前后成形，依托 二维材料、无人化工厂、液态空气储能 把 房屋营建、桥梁隧道 落到实处，并成为 建筑建造 中承上启下的一环，直接支撑了 可变径盾构 等后续技术。",
    "dependsOn": ["mat_2d","mfg_darkfactory","ene_liquidair","bld_robotbrick"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "智慧城市在 2010 年 前后出现，依托 二维材料 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，智慧城市仍是 房屋营建 的底层支撑，并持续影响 可变径盾构。"
      }
    ],
    "significance": "智慧城市把 二维材料 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点，并直接催生了 可变径盾构。"
  },
{
    "id": "bld_variabletbm",
    "name": "可变径盾构",
    "en": "Variable-Diameter TBM",
    "category": "build",
    "era": "intelligent",
    "date": "2010 年",
    "year": 2010,
    "people": "",
    "place": "",
    "summary": "可变径盾构约 2010 年 成熟，建立在 二维材料、无人化工厂、液态空气储能 之上完成关键突破；其能力延伸到 房屋营建、桥梁隧道，并为 复材桥梁 的发展铺平了道路。",
    "dependsOn": ["mat_2d","mfg_darkfactory","ene_liquidair","bld_smartcity"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "可变径盾构在 2010 年 前后出现，依托 二维材料 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，可变径盾构仍是 房屋营建 的底层支撑，并持续影响 复材桥梁。"
      }
    ],
    "significance": "可变径盾构把 二维材料 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点，并直接催生了 复材桥梁。"
  },
{
    "id": "bld_frpbridge",
    "name": "复材桥梁",
    "en": "FRP Bridge",
    "category": "build",
    "era": "intelligent",
    "date": "2010 年",
    "year": 2010,
    "people": "",
    "place": "",
    "summary": "复材桥梁约 2010 年 成熟，建立在 二维材料、无人化工厂、液态空气储能 之上完成关键突破；其能力延伸到 房屋营建、桥梁隧道，并为 自修复混凝土 的发展铺平了道路。",
    "dependsOn": ["mat_2d","mfg_darkfactory","ene_liquidair","bld_variabletbm"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "复材桥梁在 2010 年 前后出现，依托 二维材料 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，复材桥梁仍是 房屋营建 的底层支撑，并持续影响 自修复混凝土。"
      }
    ],
    "significance": "复材桥梁把 二维材料 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点，并直接催生了 自修复混凝土。"
  },
{
    "id": "bld_3dconcrete",
    "name": "混凝土",
    "en": "Concrete 3D Printing",
    "category": "build",
    "era": "intelligent",
    "date": "2015 年",
    "year": 2015,
    "people": "",
    "place": "",
    "summary": "混凝土约 2015 年 出现，建立在 二维材料、工业 4.0、摩擦纳米发电 之上；它把 房屋营建、桥梁隧道 变成可稳定复现的能力，是 建筑建造 中从经验走向方法的关键一步。",
    "dependsOn": ["mat_2d","mfg_industry40","ene_tribo","bld_dronesurvey"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "混凝土在 2015 年 前后出现，依托 二维材料 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，混凝土仍是 房屋营建 的底层支撑，并作为 建筑建造 的基础能力持续发挥作用。"
      }
    ],
    "significance": "混凝土把 二维材料 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bld_selfhealconc",
    "name": "自修复混凝土",
    "en": "Self-Healing Concrete",
    "category": "build",
    "era": "intelligent",
    "date": "2010 年",
    "year": 2010,
    "people": "",
    "place": "",
    "summary": "自修复混凝土约 2010 年 成熟，建立在 二维材料、无人化工厂、液态空气储能 之上完成关键突破；其能力延伸到 房屋营建、桥梁隧道，并为 碳纤维混凝土 的发展铺平了道路。",
    "dependsOn": ["mat_2d","mfg_darkfactory","ene_liquidair","bld_frpbridge"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "自修复混凝土在 2010 年 前后出现，依托 二维材料 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，自修复混凝土仍是 房屋营建 的底层支撑，并持续影响 碳纤维混凝土。"
      }
    ],
    "significance": "自修复混凝土把 二维材料 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点，并直接催生了 碳纤维混凝土。"
  },
{
    "id": "bld_carbonconc",
    "name": "碳纤维混凝土",
    "en": "Carbon Concrete",
    "category": "build",
    "era": "intelligent",
    "date": "2010 年",
    "year": 2010,
    "people": "",
    "place": "",
    "summary": "碳纤维混凝土在 2010 年 前后成形，依托 二维材料、无人化工厂、液态空气储能 把 房屋营建、桥梁隧道 落到实处，并成为 建筑建造 中承上启下的一环，直接支撑了 无人机测绘 等后续技术。",
    "dependsOn": ["mat_2d","mfg_darkfactory","ene_liquidair","bld_selfhealconc"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "碳纤维混凝土在 2010 年 前后出现，依托 二维材料 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，碳纤维混凝土仍是 房屋营建 的底层支撑，并持续影响 无人机测绘。"
      }
    ],
    "significance": "碳纤维混凝土把 二维材料 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点，并直接催生了 无人机测绘。"
  },
{
    "id": "mil_bow",
    "name": "弓",
    "en": "Bow",
    "category": "military",
    "era": "prehistoric",
    "date": "约 2 万年前",
    "year": -20000,
    "people": "",
    "place": "",
    "summary": "弓在 约 2 万年前 前后成形，依托 凿、用火、石器 把 防御工事、火力打击 落到实处，并成为 军事技术 中承上启下的一环，直接支撑了 箭 等后续技术。",
    "dependsOn": ["mfg_chisel","fire","stone_tools","bow_arrow"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "史前时代",
        "text": "弓在 约 2 万年前 前后出现，依托 凿 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，弓仍是 防御工事 的底层支撑，并持续影响 箭。"
      }
    ],
    "significance": "弓把 凿 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点，并直接催生了 箭。"
  },
{
    "id": "mil_arrow",
    "name": "箭",
    "en": "Arrow",
    "category": "military",
    "era": "prehistoric",
    "date": "约 2 万年前",
    "year": -20000,
    "people": "",
    "place": "",
    "summary": "箭约 约 2 万年前 成熟，建立在 凿、用火、石器 之上完成关键突破；其能力延伸到 防御工事、火力打击，并为 标枪 的发展铺平了道路。",
    "dependsOn": ["mfg_chisel","fire","stone_tools","mil_bow"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "史前时代",
        "text": "箭在 约 2 万年前 前后出现，依托 凿 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，箭仍是 防御工事 的底层支撑，并持续影响 标枪。"
      }
    ],
    "significance": "箭把 凿 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点，并直接催生了 标枪。"
  },
{
    "id": "mil_crossbow",
    "name": "弩",
    "en": "Crossbow",
    "category": "military",
    "era": "ancient",
    "date": "公元前 1000 年",
    "year": -1000,
    "people": "",
    "place": "",
    "summary": "弩约 公元前 1000 年 出现，建立在 车床、煤炭开采、退火 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_lathe","ene_coal","mat_anneal","tr_lighthouse"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "弩在 公元前 1000 年 前后出现，依托 车床 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，弩仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "弩把 车床 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_catapult",
    "name": "投石机",
    "en": "Catapult",
    "category": "military",
    "era": "classical",
    "date": "公元前 400 年",
    "year": -400,
    "people": "",
    "place": "",
    "summary": "投石机约 公元前 400 年 出现，建立在 车床、煤炭开采、高炉炼铁 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_lathe","ene_coal","mat_blastfurnace","tr_lighthouse"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "古典时代",
        "text": "投石机在 公元前 400 年 前后出现，依托 车床 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，投石机仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "投石机把 车床 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_javelin",
    "name": "标枪",
    "en": "Javelin",
    "category": "military",
    "era": "prehistoric",
    "date": "约 2 万年前",
    "year": -20000,
    "people": "",
    "place": "",
    "summary": "标枪约 约 2 万年前 成熟，建立在 凿、用火、石器 之上完成关键突破；其能力延伸到 防御工事、火力打击，并为 长矛 的发展铺平了道路。",
    "dependsOn": ["mfg_chisel","fire","stone_tools","mil_arrow"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "史前时代",
        "text": "标枪在 约 2 万年前 前后出现，依托 凿 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，标枪仍是 防御工事 的底层支撑，并持续影响 长矛。"
      }
    ],
    "significance": "标枪把 凿 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点，并直接催生了 长矛。"
  },
{
    "id": "mil_spear",
    "name": "长矛",
    "en": "Spear",
    "category": "military",
    "era": "prehistoric",
    "date": "约 2 万年前",
    "year": -20000,
    "people": "",
    "place": "",
    "summary": "长矛约 约 2 万年前 出现，建立在 凿、用火、石器 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_chisel","fire","stone_tools","mil_javelin"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "史前时代",
        "text": "长矛在 约 2 万年前 前后出现，依托 凿 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，长矛仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "长矛把 凿 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_sword",
    "name": "剑",
    "en": "Sword",
    "category": "military",
    "era": "ancient",
    "date": "公元前 3000 年",
    "year": -3000,
    "people": "",
    "place": "",
    "summary": "剑约 公元前 3000 年 出现，建立在 研磨、水力利用、水泥 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_lapp","ene_hydro","mat_cement","tr_ferry"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "剑在 公元前 3000 年 前后出现，依托 研磨 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，剑仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "剑把 研磨 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_shield",
    "name": "盾",
    "en": "Shield",
    "category": "military",
    "era": "ancient",
    "date": "公元前 3000 年",
    "year": -3000,
    "people": "",
    "place": "",
    "summary": "盾约 公元前 3000 年 出现，建立在 研磨、水力利用、水泥 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_lapp","ene_hydro","mat_cement","tr_ferry"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "盾在 公元前 3000 年 前后出现，依托 研磨 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，盾仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "盾把 研磨 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_armor",
    "name": "盔甲",
    "en": "Armor",
    "category": "military",
    "era": "ancient",
    "date": "公元前 3000 年",
    "year": -3000,
    "people": "",
    "place": "",
    "summary": "盔甲约 公元前 3000 年 出现，建立在 研磨、水力利用、水泥 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_lapp","ene_hydro","mat_cement","tr_ferry"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "盔甲在 公元前 3000 年 前后出现，依托 研磨 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，盔甲仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "盔甲把 研磨 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_chainmail",
    "name": "锁子甲",
    "en": "Chainmail",
    "category": "military",
    "era": "classical",
    "date": "公元前 500 年",
    "year": -500,
    "people": "",
    "place": "",
    "summary": "锁子甲约 公元前 500 年 出现，建立在 车床、煤炭开采、高炉炼铁 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_lathe","ene_coal","mat_blastfurnace","tr_lighthouse"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "古典时代",
        "text": "锁子甲在 公元前 500 年 前后出现，依托 车床 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，锁子甲仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "锁子甲把 车床 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_plate",
    "name": "板甲",
    "en": "Plate Armor",
    "category": "military",
    "era": "medieval",
    "date": "1300 年",
    "year": 1300,
    "people": "",
    "place": "",
    "summary": "板甲约 1300 年 出现，建立在 拉丝、风车、拉拔 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_wiredraw","ene_wind","mat_drawing","tr_horseshoe"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "中世纪",
        "text": "板甲在 1300 年 前后出现，依托 拉丝 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，板甲仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "板甲把 拉丝 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_matchlock",
    "name": "火绳枪",
    "en": "Matchlock",
    "category": "military",
    "era": "earlymodern",
    "date": "1500 年",
    "year": 1500,
    "people": "",
    "place": "",
    "summary": "火绳枪约 1500 年 出现，建立在 压延、风车、轧制 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_rolling2","ene_wind","mat_rolling","tr_horseshoe"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "近代早期",
        "text": "火绳枪在 1500 年 前后出现，依托 压延 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，火绳枪仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "火绳枪把 压延 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_fintlock",
    "name": "燧发枪",
    "en": "Flintlock",
    "category": "military",
    "era": "earlymodern",
    "date": "1600 年",
    "year": 1600,
    "people": "",
    "place": "",
    "summary": "燧发枪约 1600 年 出现，建立在 压延、风车、光学玻璃 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_rolling2","ene_wind","mat_opticalglass","tr_ropeway"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "近代早期",
        "text": "燧发枪在 1600 年 前后出现，依托 压延 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，燧发枪仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "燧发枪把 压延 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_musket",
    "name": "滑膛枪",
    "en": "Musket",
    "category": "military",
    "era": "earlymodern",
    "date": "1500 年",
    "year": 1500,
    "people": "",
    "place": "",
    "summary": "滑膛枪约 1500 年 出现，建立在 压延、风车、轧制 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_rolling2","ene_wind","mat_rolling","tr_horseshoe"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "近代早期",
        "text": "滑膛枪在 1500 年 前后出现，依托 压延 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，滑膛枪仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "滑膛枪把 压延 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_rifle",
    "name": "来复枪",
    "en": "Rifle",
    "category": "military",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "来复枪约 1800 年 出现，建立在 热处理炉、余热回收、感应熔炼 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_furnace","ene_wasteheat","mat_inductionmelt","tr_pipeline"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "来复枪在 1800 年 前后出现，依托 热处理炉 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，来复枪仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "来复枪把 热处理炉 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_machinegun",
    "name": "机枪",
    "en": "Machine Gun",
    "category": "military",
    "era": "industrial",
    "date": "1884 年",
    "year": 1884,
    "people": "",
    "place": "",
    "summary": "机枪约 1884 年 出现，建立在 精密轴承、蒸汽轮机、锰钢 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_precisionbearing","ene_steamturbine","mat_manganese","tr_trolley"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "机枪在 1884 年 前后出现，依托 精密轴承 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，机枪仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "机枪把 精密轴承 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_submachine",
    "name": "冲锋枪",
    "en": "Submachine Gun",
    "category": "military",
    "era": "electrical",
    "date": "1918 年",
    "year": 1918,
    "people": "",
    "place": "",
    "summary": "冲锋枪约 1918 年 出现，建立在 流水线、调峰电站、单晶硅 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["assembly_line","ene_peaker","mat_siliconw","tr_aircraftcarrier"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "冲锋枪在 1918 年 前后出现，依托 流水线 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，冲锋枪仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "冲锋枪把 流水线 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_sniper",
    "name": "狙击步枪",
    "en": "Sniper Rifle",
    "category": "military",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "狙击步枪约 1800 年 出现，建立在 热处理炉、余热回收、感应熔炼 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_furnace","ene_wasteheat","mat_inductionmelt","tr_pipeline"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "狙击步枪在 1800 年 前后出现，依托 热处理炉 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，狙击步枪仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "狙击步枪把 热处理炉 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_pistol",
    "name": "手枪",
    "en": "Pistol",
    "category": "military",
    "era": "earlymodern",
    "date": "1500 年",
    "year": 1500,
    "people": "",
    "place": "",
    "summary": "手枪约 1500 年 出现，建立在 压延、风车、轧制 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_rolling2","ene_wind","mat_rolling","tr_horseshoe"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "近代早期",
        "text": "手枪在 1500 年 前后出现，依托 压延 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，手枪仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "手枪把 压延 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_revolver",
    "name": "左轮手枪",
    "en": "Revolver",
    "category": "military",
    "era": "industrial",
    "date": "1836 年",
    "year": 1836,
    "people": "",
    "place": "",
    "summary": "左轮手枪约 1836 年 出现，建立在 铣床、发电机与电动机、铝冶炼 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_mill","generator","mat_alu","tr_screwprop"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "左轮手枪在 1836 年 前后出现，依托 铣床 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，左轮手枪仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "左轮手枪把 铣床 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_artillery",
    "name": "火炮",
    "en": "Artillery",
    "category": "military",
    "era": "medieval",
    "date": "1200 年",
    "year": 1200,
    "people": "",
    "place": "",
    "summary": "火炮约 1200 年 出现，建立在 拉丝、风车、拉拔 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_wiredraw","ene_wind","mat_drawing","tr_horseshoe"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "中世纪",
        "text": "火炮在 1200 年 前后出现，依托 拉丝 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，火炮仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "火炮把 拉丝 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_blackpowder",
    "name": "黑火药",
    "en": "Black Powder",
    "category": "military",
    "era": "medieval",
    "date": "800 年",
    "year": 800,
    "people": "",
    "place": "",
    "summary": "黑火药约 800 年 出现，建立在 螺纹、水车、瓷器 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_thread","waterwheel","mat_porcelain","tr_horseshoe"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "中世纪",
        "text": "黑火药在 800 年 前后出现，依托 螺纹 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，黑火药仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "黑火药把 螺纹 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_smokeless",
    "name": "无烟火药",
    "en": "Smokeless Powder",
    "category": "military",
    "era": "industrial",
    "date": "1884 年",
    "year": 1884,
    "people": "",
    "place": "",
    "summary": "无烟火药约 1884 年 出现，建立在 精密轴承、蒸汽轮机、锰钢 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_precisionbearing","ene_steamturbine","mat_manganese","tr_trolley"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "无烟火药在 1884 年 前后出现，依托 精密轴承 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，无烟火药仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "无烟火药把 精密轴承 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_dynamite",
    "name": "炸药",
    "en": "Dynamite",
    "category": "military",
    "era": "industrial",
    "date": "1867 年",
    "year": 1867,
    "people": "",
    "place": "",
    "summary": "炸药约 1867 年 出现，建立在 砂轮、铅酸电池、铌 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_grindingwheel","ene_leadacid","mat_niobium","tr_metro"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "炸药在 1867 年 前后出现，依托 砂轮 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，炸药仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "炸药把 砂轮 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_ng",
    "name": "硝化甘油",
    "en": "Nitroglycerin",
    "category": "military",
    "era": "industrial",
    "date": "1847 年",
    "year": 1847,
    "people": "",
    "place": "",
    "summary": "硝化甘油约 1847 年 出现，建立在 砂轮、燃料电池、连续铸造 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_grindingwheel","ene_fuelcell","mat_continuouscast","tr_pneumatictire"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "硝化甘油在 1847 年 前后出现，依托 砂轮 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，硝化甘油仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "硝化甘油把 砂轮 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_tnt",
    "name": "TNT",
    "en": "TNT",
    "category": "military",
    "era": "industrial",
    "date": "1863 年",
    "year": 1863,
    "people": "",
    "place": "",
    "summary": "TNT约 1863 年 出现，建立在 砂轮、铅酸电池、伍德合金 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_grindingwheel","ene_leadacid","mat_woodmetal","tr_metro"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "TNT在 1863 年 前后出现，依托 砂轮 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，TNT仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "TNT把 砂轮 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_detonator",
    "name": "雷管",
    "en": "Detonator",
    "category": "military",
    "era": "industrial",
    "date": "1863 年",
    "year": 1863,
    "people": "",
    "place": "",
    "summary": "雷管约 1863 年 出现，建立在 砂轮、铅酸电池、伍德合金 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_grindingwheel","ene_leadacid","mat_woodmetal","tr_metro"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "雷管在 1863 年 前后出现，依托 砂轮 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，雷管仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "雷管把 砂轮 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_landmine",
    "name": "地雷",
    "en": "Landmine",
    "category": "military",
    "era": "medieval",
    "date": "1200 年",
    "year": 1200,
    "people": "",
    "place": "",
    "summary": "地雷约 1200 年 出现，建立在 拉丝、风车、拉拔 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_wiredraw","ene_wind","mat_drawing","tr_horseshoe"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "中世纪",
        "text": "地雷在 1200 年 前后出现，依托 拉丝 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，地雷仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "地雷把 拉丝 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_seamine",
    "name": "水雷",
    "en": "Naval Mine",
    "category": "military",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "水雷约 1800 年 出现，建立在 热处理炉、余热回收、感应熔炼 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_furnace","ene_wasteheat","mat_inductionmelt","tr_pipeline"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "水雷在 1800 年 前后出现，依托 热处理炉 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，水雷仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "水雷把 热处理炉 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_grenade",
    "name": "手榴弹",
    "en": "Grenade",
    "category": "military",
    "era": "medieval",
    "date": "1400 年",
    "year": 1400,
    "people": "",
    "place": "",
    "summary": "手榴弹约 1400 年 出现，建立在 拉丝、风车、拉拔 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_wiredraw","ene_wind","mat_drawing","tr_horseshoe"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "中世纪",
        "text": "手榴弹在 1400 年 前后出现，依托 拉丝 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，手榴弹仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "手榴弹把 拉丝 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_rocket2",
    "name": "火箭弹",
    "en": "Rocket Projectile",
    "category": "military",
    "era": "medieval",
    "date": "1200 年",
    "year": 1200,
    "people": "",
    "place": "",
    "summary": "火箭弹约 1200 年 出现，建立在 拉丝、风车、拉拔 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_wiredraw","ene_wind","mat_drawing","tr_horseshoe"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "中世纪",
        "text": "火箭弹在 1200 年 前后出现，依托 拉丝 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，火箭弹仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "火箭弹把 拉丝 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_missile",
    "name": "导弹",
    "en": "Missile",
    "category": "military",
    "era": "electrical",
    "date": "1944 年",
    "year": 1944,
    "people": "",
    "place": "",
    "summary": "导弹约 1944 年 出现，建立在 电火花加工、核裂变反应堆、球墨铸铁 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_edm","ene_nuclear","mat_ductile","tr_transponder"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "导弹在 1944 年 前后出现，依托 电火花加工 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，导弹仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "导弹把 电火花加工 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_ballistic",
    "name": "弹道导弹",
    "en": "Ballistic Missile",
    "category": "military",
    "era": "electrical",
    "date": "1942 年",
    "year": 1942,
    "people": "",
    "place": "",
    "summary": "弹道导弹约 1942 年 出现，建立在 看板管理、核裂变反应堆、电渣重熔 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_kanban","ene_nuclear","mat_esr","tr_transponder"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "弹道导弹在 1942 年 前后出现，依托 看板管理 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，弹道导弹仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "弹道导弹把 看板管理 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_cruise",
    "name": "巡航导弹",
    "en": "Cruise Missile",
    "category": "military",
    "era": "info",
    "date": "1950 年",
    "year": 1950,
    "people": "",
    "place": "",
    "summary": "巡航导弹约 1950 年 出现，建立在 超声加工、盐差能、泡沫金属 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_ultrasonicm","ene_salinity","mat_foammetal","tr_rov"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "巡航导弹在 1950 年 前后出现，依托 超声加工 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，巡航导弹仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "巡航导弹把 超声加工 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_sam",
    "name": "防空导弹",
    "en": "SAM",
    "category": "military",
    "era": "info",
    "date": "1950 年",
    "year": 1950,
    "people": "",
    "place": "",
    "summary": "防空导弹约 1950 年 出现，建立在 超声加工、盐差能、泡沫金属 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_ultrasonicm","ene_salinity","mat_foammetal","tr_rov"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "防空导弹在 1950 年 前后出现，依托 超声加工 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，防空导弹仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "防空导弹把 超声加工 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_atgm",
    "name": "反坦克导弹",
    "en": "ATGM",
    "category": "military",
    "era": "info",
    "date": "1960 年",
    "year": 1960,
    "people": "",
    "place": "",
    "summary": "反坦克导弹约 1960 年 出现，建立在 电解磨削、可燃冰、放电等离子烧结 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_ecmg","ene_clathrate","mat_sps","tr_lunarlander"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "反坦克导弹在 1960 年 前后出现，依托 电解磨削 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，反坦克导弹仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "反坦克导弹把 电解磨削 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_guidance",
    "name": "制导技术",
    "en": "Guidance",
    "category": "military",
    "era": "electrical",
    "date": "1940 年",
    "year": 1940,
    "people": "",
    "place": "",
    "summary": "制导技术约 1940 年 出现，建立在 看板管理、燃气轮机、电渣重熔 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_kanban","ene_gasturbine","mat_esr","tr_transponder"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "制导技术在 1940 年 前后出现，依托 看板管理 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，制导技术仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "制导技术把 看板管理 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_inertial",
    "name": "惯性制导",
    "en": "Inertial Guidance",
    "category": "military",
    "era": "info",
    "date": "1950 年",
    "year": 1950,
    "people": "",
    "place": "",
    "summary": "惯性制导约 1950 年 出现，建立在 超声加工、盐差能、泡沫金属 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_ultrasonicm","ene_salinity","mat_foammetal","tr_rov"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "惯性制导在 1950 年 前后出现，依托 超声加工 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，惯性制导仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "惯性制导把 超声加工 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_laserguid",
    "name": "激光制导",
    "en": "Laser Guidance",
    "category": "military",
    "era": "info",
    "date": "1960 年",
    "year": 1960,
    "people": "",
    "place": "",
    "summary": "激光制导约 1960 年 出现，建立在 电解磨削、可燃冰、放电等离子烧结 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_ecmg","ene_clathrate","mat_sps","tr_lunarlander"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "激光制导在 1960 年 前后出现，依托 电解磨削 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，激光制导仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "激光制导把 电解磨削 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_irguid",
    "name": "红外制导",
    "en": "IR Guidance",
    "category": "military",
    "era": "info",
    "date": "1950 年",
    "year": 1950,
    "people": "",
    "place": "",
    "summary": "红外制导约 1950 年 出现，建立在 超声加工、盐差能、泡沫金属 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_ultrasonicm","ene_salinity","mat_foammetal","tr_rov"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "红外制导在 1950 年 前后出现，依托 超声加工 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，红外制导仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "红外制导把 超声加工 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_phasedradar",
    "name": "相控阵雷达",
    "en": "Phased Array Radar",
    "category": "military",
    "era": "info",
    "date": "1960 年",
    "year": 1960,
    "people": "",
    "place": "",
    "summary": "相控阵雷达约 1960 年 出现，建立在 电解磨削、可燃冰、放电等离子烧结 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_ecmg","ene_clathrate","mat_sps","tr_lunarlander"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "相控阵雷达在 1960 年 前后出现，依托 电解磨削 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，相控阵雷达仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "相控阵雷达把 电解磨削 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_sonar",
    "name": "声纳",
    "en": "Sonar",
    "category": "military",
    "era": "electrical",
    "date": "1917 年",
    "year": 1917,
    "people": "",
    "place": "",
    "summary": "声纳约 1917 年 出现，建立在 流水线、调峰电站、不锈钢 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["assembly_line","ene_peaker","mat_stainless","tr_aircraftcarrier"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "声纳在 1917 年 前后出现，依托 流水线 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，声纳仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "声纳把 流水线 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_nightvision",
    "name": "夜视仪",
    "en": "Night Vision",
    "category": "military",
    "era": "electrical",
    "date": "1930 年",
    "year": 1930,
    "people": "",
    "place": "",
    "summary": "夜视仪约 1930 年 出现，建立在 喷丸、火箭发动机、玻璃钢 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_shotblast","ene_rocketengine","mat_frp","tr_rocket"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "夜视仪在 1930 年 前后出现，依托 喷丸 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，夜视仪仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "夜视仪把 喷丸 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_thermal",
    "name": "热成像",
    "en": "Thermal Imaging",
    "category": "military",
    "era": "info",
    "date": "1950 年",
    "year": 1950,
    "people": "",
    "place": "",
    "summary": "热成像约 1950 年 出现，建立在 超声加工、盐差能、泡沫金属 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_ultrasonicm","ene_salinity","mat_foammetal","tr_rov"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "热成像在 1950 年 前后出现，依托 超声加工 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，热成像仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "热成像把 超声加工 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_recon",
    "name": "侦察技术",
    "en": "Reconnaissance",
    "category": "military",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "侦察技术约 1800 年 出现，建立在 热处理炉、余热回收、感应熔炼 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_furnace","ene_wasteheat","mat_inductionmelt","tr_pipeline"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "侦察技术在 1800 年 前后出现，依托 热处理炉 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，侦察技术仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "侦察技术把 热处理炉 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_loitering",
    "name": "巡飞弹",
    "en": "Loitering Munition",
    "category": "military",
    "era": "info",
    "date": "1980 年",
    "year": 1980,
    "people": "",
    "place": "",
    "summary": "巡飞弹约 1980 年 出现，建立在 机器人夹爪、碟式斯特林、激光熔覆 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_robotgripper","ene_dishstirling","mat_laserclad","tr_abs"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "巡飞弹在 1980 年 前后出现，依托 机器人夹爪 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，巡飞弹仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "巡飞弹把 机器人夹爪 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_ew",
    "name": "电子战",
    "en": "Electronic Warfare",
    "category": "military",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "电子战约 1900 年 出现，建立在 切削液、调峰电站、渗硼 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_coolant","ene_peaker","mat_boriding","tr_monorail"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "电子战在 1900 年 前后出现，依托 切削液 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，电子战仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "电子战把 切削液 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_jamming",
    "name": "干扰",
    "en": "Jamming",
    "category": "military",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "干扰约 1900 年 出现，建立在 切削液、调峰电站、渗硼 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_coolant","ene_peaker","mat_boriding","tr_monorail"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "干扰在 1900 年 前后出现，依托 切削液 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，干扰仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "干扰把 切削液 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_stealth2",
    "name": "隐身技术",
    "en": "Stealth Tech",
    "category": "military",
    "era": "info",
    "date": "1970 年",
    "year": 1970,
    "people": "",
    "place": "",
    "summary": "隐身技术约 1970 年 出现，建立在 计算机辅助制造、水热型地热、储氢合金 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_cam","ene_hydrothermal","mat_hydrogenstorage","tr_supersonic"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "隐身技术在 1970 年 前后出现，依托 计算机辅助制造 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，隐身技术仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "隐身技术把 计算机辅助制造 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_lowobs",
    "name": "低可探测",
    "en": "Low Observability",
    "category": "military",
    "era": "info",
    "date": "1970 年",
    "year": 1970,
    "people": "",
    "place": "",
    "summary": "低可探测约 1970 年 出现，建立在 计算机辅助制造、水热型地热、储氢合金 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_cam","ene_hydrothermal","mat_hydrogenstorage","tr_supersonic"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "低可探测在 1970 年 前后出现，依托 计算机辅助制造 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，低可探测仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "低可探测把 计算机辅助制造 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_tank",
    "name": "坦克",
    "en": "Tank",
    "category": "military",
    "era": "electrical",
    "date": "1916 年",
    "year": 1916,
    "people": "",
    "place": "",
    "summary": "坦克约 1916 年 出现，建立在 流水线、调峰电站、不锈钢 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["assembly_line","ene_peaker","mat_stainless","tr_panama"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "坦克在 1916 年 前后出现，依托 流水线 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，坦克仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "坦克把 流水线 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_apc",
    "name": "装甲运兵车",
    "en": "APC",
    "category": "military",
    "era": "electrical",
    "date": "1918 年",
    "year": 1918,
    "people": "",
    "place": "",
    "summary": "装甲运兵车约 1918 年 出现，建立在 流水线、调峰电站、单晶硅 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["assembly_line","ene_peaker","mat_siliconw","tr_aircraftcarrier"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "装甲运兵车在 1918 年 前后出现，依托 流水线 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，装甲运兵车仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "装甲运兵车把 流水线 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_spg",
    "name": "自行火炮",
    "en": "Self-Propelled Gun",
    "category": "military",
    "era": "electrical",
    "date": "1930 年",
    "year": 1930,
    "people": "",
    "place": "",
    "summary": "自行火炮约 1930 年 出现，建立在 喷丸、火箭发动机、玻璃钢 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_shotblast","ene_rocketengine","mat_frp","tr_rocket"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "自行火炮在 1930 年 前后出现，依托 喷丸 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，自行火炮仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "自行火炮把 喷丸 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_mrl",
    "name": "火箭炮",
    "en": "MLRS",
    "category": "military",
    "era": "electrical",
    "date": "1930 年",
    "year": 1930,
    "people": "",
    "place": "",
    "summary": "火箭炮约 1930 年 出现，建立在 喷丸、火箭发动机、玻璃钢 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_shotblast","ene_rocketengine","mat_frp","tr_rocket"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "火箭炮在 1930 年 前后出现，依托 喷丸 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，火箭炮仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "火箭炮把 喷丸 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_howitzer",
    "name": "榴弹炮",
    "en": "Howitzer",
    "category": "military",
    "era": "earlymodern",
    "date": "1700 年",
    "year": 1700,
    "people": "",
    "place": "",
    "summary": "榴弹炮约 1700 年 出现，建立在 压延、太阳能热利用、沸石分子筛 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_rolling2","ene_solarthermal","mat_zeolite","tr_tunnel2"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "近代早期",
        "text": "榴弹炮在 1700 年 前后出现，依托 压延 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，榴弹炮仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "榴弹炮把 压延 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_cannon",
    "name": "加农炮",
    "en": "Cannon",
    "category": "military",
    "era": "medieval",
    "date": "1200 年",
    "year": 1200,
    "people": "",
    "place": "",
    "summary": "加农炮约 1200 年 出现，建立在 拉丝、风车、拉拔 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_wiredraw","ene_wind","mat_drawing","tr_horseshoe"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "中世纪",
        "text": "加农炮在 1200 年 前后出现，依托 拉丝 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，加农炮仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "加农炮把 拉丝 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_aagun",
    "name": "高射炮",
    "en": "AA Gun",
    "category": "military",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "高射炮约 1900 年 出现，建立在 切削液、调峰电站、渗硼 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_coolant","ene_peaker","mat_boriding","tr_monorail"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "高射炮在 1900 年 前后出现，依托 切削液 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，高射炮仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "高射炮把 切削液 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_torpedo",
    "name": "鱼雷",
    "en": "Torpedo",
    "category": "military",
    "era": "industrial",
    "date": "1866 年",
    "year": 1866,
    "people": "",
    "place": "",
    "summary": "鱼雷约 1866 年 出现，建立在 砂轮、铅酸电池、铌 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_grindingwheel","ene_leadacid","mat_niobium","tr_metro"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "鱼雷在 1866 年 前后出现，依托 砂轮 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，鱼雷仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "鱼雷把 砂轮 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_depthcharge",
    "name": "深水炸弹",
    "en": "Depth Charge",
    "category": "military",
    "era": "electrical",
    "date": "1910 年",
    "year": 1910,
    "people": "",
    "place": "",
    "summary": "深水炸弹约 1910 年 出现，建立在 真空吸尘器、调峰电站、铁氧体 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["vacuum_cleaner","ene_peaker","mat_ferrite","tr_simulator"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "深水炸弹在 1910 年 前后出现，依托 真空吸尘器 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，深水炸弹仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "深水炸弹把 真空吸尘器 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_nuclearsub",
    "name": "核潜艇",
    "en": "Nuclear Submarine",
    "category": "military",
    "era": "info",
    "date": "1954 年",
    "year": 1954,
    "people": "",
    "place": "",
    "summary": "核潜艇约 1954 年 出现，建立在 自动导引车、光伏电池、聚丙烯 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_agv","ene_pv","mat_pp","tr_jetliner"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "核潜艇在 1954 年 前后出现，依托 自动导引车 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，核潜艇仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "核潜艇把 自动导引车 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_frigate",
    "name": "护卫舰",
    "en": "Frigate",
    "category": "military",
    "era": "earlymodern",
    "date": "1700 年",
    "year": 1700,
    "people": "",
    "place": "",
    "summary": "护卫舰约 1700 年 出现，建立在 压延、太阳能热利用、沸石分子筛 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_rolling2","ene_solarthermal","mat_zeolite","tr_tunnel2"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "近代早期",
        "text": "护卫舰在 1700 年 前后出现，依托 压延 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，护卫舰仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "护卫舰把 压延 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_ssbn",
    "name": "战略导弹潜艇",
    "en": "SSBN",
    "category": "military",
    "era": "info",
    "date": "1959 年",
    "year": 1959,
    "people": "",
    "place": "",
    "summary": "战略导弹潜艇约 1959 年 出现，建立在 电子束焊、超级电容、碳纤维 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_ebw","ene_supercap","mat_cf","tr_icebreaker"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "战略导弹潜艇在 1959 年 前后出现，依托 电子束焊 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，战略导弹潜艇仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "战略导弹潜艇把 电子束焊 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_bomber",
    "name": "战略轰炸机",
    "en": "Strategic Bomber",
    "category": "military",
    "era": "electrical",
    "date": "1940 年",
    "year": 1940,
    "people": "",
    "place": "",
    "summary": "战略轰炸机约 1940 年 出现，建立在 看板管理、燃气轮机、电渣重熔 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_kanban","ene_gasturbine","mat_esr","tr_transponder"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "战略轰炸机在 1940 年 前后出现，依托 看板管理 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，战略轰炸机仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "战略轰炸机把 看板管理 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_fighter",
    "name": "战斗机",
    "en": "Fighter Aircraft",
    "category": "military",
    "era": "electrical",
    "date": "1915 年",
    "year": 1915,
    "people": "",
    "place": "",
    "summary": "战斗机约 1915 年 出现，建立在 流水线、调峰电站、不锈钢 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["assembly_line","ene_peaker","mat_stainless","tr_panama"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "战斗机在 1915 年 前后出现，依托 流水线 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，战斗机仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "战斗机把 流水线 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_aewc",
    "name": "预警机",
    "en": "AWACS",
    "category": "military",
    "era": "info",
    "date": "1970 年",
    "year": 1970,
    "people": "",
    "place": "",
    "summary": "预警机约 1970 年 出现，建立在 计算机辅助制造、水热型地热、储氢合金 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_cam","ene_hydrothermal","mat_hydrogenstorage","tr_supersonic"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "预警机在 1970 年 前后出现，依托 计算机辅助制造 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，预警机仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "预警机把 计算机辅助制造 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_tankerac",
    "name": "空中加油机",
    "en": "Tanker Aircraft",
    "category": "military",
    "era": "electrical",
    "date": "1920 年",
    "year": 1920,
    "people": "",
    "place": "",
    "summary": "空中加油机约 1920 年 出现，建立在 流水线、合成燃料、氧化锆陶瓷 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["assembly_line","ene_synfuel","mat_zirconia","tr_servicearea"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "空中加油机在 1920 年 前后出现，依托 流水线 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，空中加油机仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "空中加油机把 流水线 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_transportac",
    "name": "军用运输机",
    "en": "Military Transport",
    "category": "military",
    "era": "electrical",
    "date": "1920 年",
    "year": 1920,
    "people": "",
    "place": "",
    "summary": "军用运输机约 1920 年 出现，建立在 流水线、合成燃料、氧化锆陶瓷 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["assembly_line","ene_synfuel","mat_zirconia","tr_servicearea"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "军用运输机在 1920 年 前后出现，依托 流水线 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，军用运输机仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "军用运输机把 流水线 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_airborne",
    "name": "空降兵",
    "en": "Airborne Troops",
    "category": "military",
    "era": "electrical",
    "date": "1940 年",
    "year": 1940,
    "people": "",
    "place": "",
    "summary": "空降兵约 1940 年 出现，建立在 看板管理、燃气轮机、电渣重熔 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_kanban","ene_gasturbine","mat_esr","tr_transponder"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "空降兵在 1940 年 前后出现，依托 看板管理 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，空降兵仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "空降兵把 看板管理 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_bodyarmor",
    "name": "防弹衣",
    "en": "Body Armor",
    "category": "military",
    "era": "earlymodern",
    "date": "1500 年",
    "year": 1500,
    "people": "",
    "place": "",
    "summary": "防弹衣约 1500 年 出现，建立在 压延、风车、轧制 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_rolling2","ene_wind","mat_rolling","tr_horseshoe"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "近代早期",
        "text": "防弹衣在 1500 年 前后出现，依托 压延 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，防弹衣仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "防弹衣把 压延 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_kevlar2",
    "name": "凯夫拉护具",
    "en": "Kevlar Protection",
    "category": "military",
    "era": "info",
    "date": "1970 年",
    "year": 1970,
    "people": "",
    "place": "",
    "summary": "凯夫拉护具约 1970 年 出现，建立在 计算机辅助制造、水热型地热、储氢合金 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_cam","ene_hydrothermal","mat_hydrogenstorage","tr_supersonic"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "凯夫拉护具在 1970 年 前后出现，依托 计算机辅助制造 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，凯夫拉护具仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "凯夫拉护具把 计算机辅助制造 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_helmet",
    "name": "钢盔",
    "en": "Combat Helmet",
    "category": "military",
    "era": "electrical",
    "date": "1914 年",
    "year": 1914,
    "people": "",
    "place": "",
    "summary": "钢盔约 1914 年 出现，建立在 流水线、调峰电站、不锈钢 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["assembly_line","ene_peaker","mat_stainless","tr_panama"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "钢盔在 1914 年 前后出现，依托 流水线 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，钢盔仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "钢盔把 流水线 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_cbrn",
    "name": "三防装备",
    "en": "CBRN Protection",
    "category": "military",
    "era": "electrical",
    "date": "1940 年",
    "year": 1940,
    "people": "",
    "place": "",
    "summary": "三防装备约 1940 年 出现，建立在 看板管理、燃气轮机、电渣重熔 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_kanban","ene_gasturbine","mat_esr","tr_transponder"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "三防装备在 1940 年 前后出现，依托 看板管理 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，三防装备仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "三防装备把 看板管理 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_c4isr",
    "name": "指挥控制系统",
    "en": "C4ISR",
    "category": "military",
    "era": "info",
    "date": "1980 年",
    "year": 1980,
    "people": "",
    "place": "",
    "summary": "指挥控制系统约 1980 年 出现，建立在 机器人夹爪、碟式斯特林、激光熔覆 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_robotgripper","ene_dishstirling","mat_laserclad","tr_abs"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "指挥控制系统在 1980 年 前后出现，依托 机器人夹爪 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，指挥控制系统仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "指挥控制系统把 机器人夹爪 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_satrec",
    "name": "卫星侦察",
    "en": "Satellite Recon",
    "category": "military",
    "era": "info",
    "date": "1960 年",
    "year": 1960,
    "people": "",
    "place": "",
    "summary": "卫星侦察约 1960 年 出现，建立在 电解磨削、可燃冰、放电等离子烧结 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_ecmg","ene_clathrate","mat_sps","tr_lunarlander"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "卫星侦察在 1960 年 前后出现，依托 电解磨削 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，卫星侦察仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "卫星侦察把 电解磨削 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_aweapon",
    "name": "原子弹",
    "en": "Atomic Bomb",
    "category": "military",
    "era": "electrical",
    "date": "1945 年",
    "year": 1945,
    "people": "",
    "place": "",
    "summary": "原子弹约 1945 年 出现，建立在 电火花加工、核裂变反应堆、球墨铸铁 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_edm","ene_nuclear","mat_ductile","tr_transponder"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "原子弹在 1945 年 前后出现，依托 电火花加工 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，原子弹仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "原子弹把 电火花加工 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_hweapon",
    "name": "氢弹",
    "en": "Hydrogen Bomb",
    "category": "military",
    "era": "info",
    "date": "1952 年",
    "year": 1952,
    "people": "",
    "place": "",
    "summary": "氢弹约 1952 年 出现，建立在 数控加工、核聚变、浮法玻璃 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["cnc","nuclear_fusion","mat_floatglass","tr_jetliner"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "氢弹在 1952 年 前后出现，依托 数控加工 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，氢弹仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "氢弹把 数控加工 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_neutron",
    "name": "中子弹",
    "en": "Neutron Bomb",
    "category": "military",
    "era": "info",
    "date": "1960 年",
    "year": 1960,
    "people": "",
    "place": "",
    "summary": "中子弹约 1960 年 出现，建立在 电解磨削、可燃冰、放电等离子烧结 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_ecmg","ene_clathrate","mat_sps","tr_lunarlander"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "中子弹在 1960 年 前后出现，依托 电解磨削 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，中子弹仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "中子弹把 电解磨削 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_triad",
    "name": "核三位一体",
    "en": "Nuclear Triad",
    "category": "military",
    "era": "info",
    "date": "1960 年",
    "year": 1960,
    "people": "",
    "place": "",
    "summary": "核三位一体约 1960 年 出现，建立在 电解磨削、可燃冰、放电等离子烧结 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_ecmg","ene_clathrate","mat_sps","tr_lunarlander"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "核三位一体在 1960 年 前后出现，依托 电解磨削 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，核三位一体仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "核三位一体把 电解磨削 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_missiledef",
    "name": "导弹防御",
    "en": "Missile Defense",
    "category": "military",
    "era": "info",
    "date": "1980 年",
    "year": 1980,
    "people": "",
    "place": "",
    "summary": "导弹防御约 1980 年 出现，建立在 机器人夹爪、碟式斯特林、激光熔覆 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_robotgripper","ene_dishstirling","mat_laserclad","tr_abs"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "导弹防御在 1980 年 前后出现，依托 机器人夹爪 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，导弹防御仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "导弹防御把 机器人夹爪 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_cyber",
    "name": "网络战",
    "en": "Cyber Warfare",
    "category": "military",
    "era": "info",
    "date": "1990 年",
    "year": 1990,
    "people": "",
    "place": "",
    "summary": "网络战约 1990 年 出现，建立在 在机测量、燃料电池汽车、金属有机框架 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_onmachinem","ene_fuelcellcar","mat_mof","tr_electricboat"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "网络战在 1990 年 前后出现，依托 在机测量 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，网络战仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "网络战把 在机测量 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_psyop",
    "name": "心理战",
    "en": "Psychological Warfare",
    "category": "military",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "心理战约 1900 年 出现，建立在 切削液、调峰电站、渗硼 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_coolant","ene_peaker","mat_boriding","tr_monorail"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "心理战在 1900 年 前后出现，依托 切削液 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，心理战仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "心理战把 切削液 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_logistics",
    "name": "军事后勤",
    "en": "Military Logistics",
    "category": "military",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "军事后勤约 1800 年 出现，建立在 热处理炉、余热回收、感应熔炼 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_furnace","ene_wasteheat","mat_inductionmelt","tr_pipeline"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "军事后勤在 1800 年 前后出现，依托 热处理炉 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，军事后勤仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "军事后勤把 热处理炉 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_fieldhospital",
    "name": "战地医疗",
    "en": "Field Hospital",
    "category": "military",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "战地医疗约 1800 年 出现，建立在 热处理炉、余热回收、感应熔炼 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_furnace","ene_wasteheat","mat_inductionmelt","tr_pipeline"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "战地医疗在 1800 年 前后出现，依托 热处理炉 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，战地医疗仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "战地医疗把 热处理炉 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_engineer",
    "name": "工程兵",
    "en": "Combat Engineer",
    "category": "military",
    "era": "ancient",
    "date": "公元前 2000 年",
    "year": -2000,
    "people": "",
    "place": "",
    "summary": "工程兵约 公元前 2000 年 出现，建立在 量具、水力利用、混凝土 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_gauge","ene_hydro","mat_concrete","tr_navigation"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "工程兵在 公元前 2000 年 前后出现，依托 量具 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，工程兵仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "工程兵把 量具 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_mineclear",
    "name": "扫雷",
    "en": "Mine Clearing",
    "category": "military",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "扫雷约 1900 年 出现，建立在 切削液、调峰电站、渗硼 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_coolant","ene_peaker","mat_boriding","tr_monorail"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "扫雷在 1900 年 前后出现，依托 切削液 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，扫雷仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "扫雷把 切削液 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_assaultbridge",
    "name": "舟桥",
    "en": "Assault Bridge",
    "category": "military",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "舟桥约 1800 年 出现，建立在 热处理炉、余热回收、感应熔炼 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_furnace","ene_wasteheat","mat_inductionmelt","tr_pipeline"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "舟桥在 1800 年 前后出现，依托 热处理炉 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，舟桥仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "舟桥把 热处理炉 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_camo",
    "name": "伪装迷彩",
    "en": "Camouflage",
    "category": "military",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "伪装迷彩约 1800 年 出现，建立在 热处理炉、余热回收、感应熔炼 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_furnace","ene_wasteheat","mat_inductionmelt","tr_pipeline"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "伪装迷彩在 1800 年 前后出现，依托 热处理炉 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，伪装迷彩仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "伪装迷彩把 热处理炉 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_decoy",
    "name": "假目标",
    "en": "Decoy",
    "category": "military",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "假目标约 1900 年 出现，建立在 切削液、调峰电站、渗硼 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_coolant","ene_peaker","mat_boriding","tr_monorail"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "假目标在 1900 年 前后出现，依托 切削液 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，假目标仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "假目标把 切削液 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_loyalwingman",
    "name": "忠诚僚机",
    "en": "Loyal Wingman",
    "category": "military",
    "era": "intelligent",
    "date": "2020 年",
    "year": 2020,
    "people": "",
    "place": "",
    "summary": "忠诚僚机约 2020 年 出现，建立在 工业 4.0、摩擦纳米发电、二维材料 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_industry40","ene_tribo","mat_2d","tr_reusablerocket"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "忠诚僚机在 2020 年 前后出现，依托 工业 4.0 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，忠诚僚机仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "忠诚僚机把 工业 4.0 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_swarm",
    "name": "无人机蜂群",
    "en": "Drone Swarm",
    "category": "military",
    "era": "intelligent",
    "date": "2010 年",
    "year": 2010,
    "people": "",
    "place": "",
    "summary": "无人机蜂群约 2010 年 出现，建立在 无人化工厂、液态空气储能、二维材料 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_darkfactory","ene_liquidair","mat_2d","tr_passdrone"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "无人机蜂群在 2010 年 前后出现，依托 无人化工厂 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，无人机蜂群仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "无人机蜂群把 无人化工厂 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_aiwar",
    "name": "军事人工智能",
    "en": "Military AI",
    "category": "military",
    "era": "intelligent",
    "date": "2010 年",
    "year": 2010,
    "people": "",
    "place": "",
    "summary": "军事人工智能约 2010 年 出现，建立在 无人化工厂、液态空气储能、二维材料 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_darkfactory","ene_liquidair","mat_2d","tr_passdrone"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "军事人工智能在 2010 年 前后出现，依托 无人化工厂 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，军事人工智能仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "军事人工智能把 无人化工厂 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_directedenergy",
    "name": "定向能武器",
    "en": "Directed Energy Weapon",
    "category": "military",
    "era": "info",
    "date": "1980 年",
    "year": 1980,
    "people": "",
    "place": "",
    "summary": "定向能武器约 1980 年 出现，建立在 机器人夹爪、碟式斯特林、激光熔覆 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_robotgripper","ene_dishstirling","mat_laserclad","tr_abs"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "定向能武器在 1980 年 前后出现，依托 机器人夹爪 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，定向能武器仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "定向能武器把 机器人夹爪 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_laserw",
    "name": "激光武器",
    "en": "Laser Weapon",
    "category": "military",
    "era": "info",
    "date": "1980 年",
    "year": 1980,
    "people": "",
    "place": "",
    "summary": "激光武器约 1980 年 出现，建立在 机器人夹爪、碟式斯特林、激光熔覆 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_robotgripper","ene_dishstirling","mat_laserclad","tr_abs"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "激光武器在 1980 年 前后出现，依托 机器人夹爪 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，激光武器仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "激光武器把 机器人夹爪 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_hpm",
    "name": "高功率微波武器",
    "en": "HPM Weapon",
    "category": "military",
    "era": "info",
    "date": "1990 年",
    "year": 1990,
    "people": "",
    "place": "",
    "summary": "高功率微波武器约 1990 年 出现，建立在 在机测量、燃料电池汽车、金属有机框架 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_onmachinem","ene_fuelcellcar","mat_mof","tr_electricboat"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "高功率微波武器在 1990 年 前后出现，依托 在机测量 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，高功率微波武器仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "高功率微波武器把 在机测量 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_railgun",
    "name": "电磁轨道炮",
    "en": "Railgun",
    "category": "military",
    "era": "intelligent",
    "date": "2000 年",
    "year": 2000,
    "people": "",
    "place": "",
    "summary": "电磁轨道炮约 2000 年 出现，建立在 视觉引导装配、井式地热、自修复材料 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_visionguide","ene_borehole","mat_selfheal","tr_hypersonic"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "电磁轨道炮在 2000 年 前后出现，依托 视觉引导装配 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，电磁轨道炮仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "电磁轨道炮把 视觉引导装配 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_hypersonicm",
    "name": "高超声速导弹",
    "en": "Hypersonic Missile",
    "category": "military",
    "era": "intelligent",
    "date": "2010 年",
    "year": 2010,
    "people": "",
    "place": "",
    "summary": "高超声速导弹约 2010 年 出现，建立在 无人化工厂、液态空气储能、二维材料 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_darkfactory","ene_liquidair","mat_2d","tr_passdrone"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "高超声速导弹在 2010 年 前后出现，依托 无人化工厂 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，高超声速导弹仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "高超声速导弹把 无人化工厂 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_glider",
    "name": "高超滑翔体",
    "en": "Hypersonic Glide Vehicle",
    "category": "military",
    "era": "intelligent",
    "date": "2010 年",
    "year": 2010,
    "people": "",
    "place": "",
    "summary": "高超滑翔体约 2010 年 出现，建立在 无人化工厂、液态空气储能、二维材料 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_darkfactory","ene_liquidair","mat_2d","tr_passdrone"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "高超滑翔体在 2010 年 前后出现，依托 无人化工厂 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，高超滑翔体仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "高超滑翔体把 无人化工厂 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_smartmunition",
    "name": "智能弹药",
    "en": "Smart Munition",
    "category": "military",
    "era": "intelligent",
    "date": "2010 年",
    "year": 2010,
    "people": "",
    "place": "",
    "summary": "智能弹药约 2010 年 出现，建立在 无人化工厂、液态空气储能、二维材料 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_darkfactory","ene_liquidair","mat_2d","tr_passdrone"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "智能弹药在 2010 年 前后出现，依托 无人化工厂 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，智能弹药仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "智能弹药把 无人化工厂 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "newcomen_engine",
    "name": "纽科门大气式蒸汽机",
    "en": "Newcomen Engine",
    "category": "energy",
    "era": "earlymodern",
    "date": "1712 年",
    "year": 1712,
    "people": "",
    "place": "",
    "summary": "纽科门大气式蒸汽机约 1712 年 出现，建立在 铸铁 之上；它把 能量形式 变成可稳定复现的能力，是 能量形式 中从经验走向方法的关键一步。",
    "dependsOn": ["mat_castiron"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "近代早期",
        "text": "纽科门大气式蒸汽机在 1712 年 前后出现，依托 铸铁 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，纽科门大气式蒸汽机仍是 能量形式 的底层支撑，并作为 能量形式 的基础能力持续发挥作用。"
      }
    ],
    "significance": "纽科门大气式蒸汽机把 铸铁 与 能量形式 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "watt_engine",
    "name": "瓦特分离冷凝器蒸汽机",
    "en": "Watt Steam Engine",
    "category": "energy",
    "era": "industrial",
    "date": "1769 年",
    "year": 1769,
    "people": "",
    "place": "",
    "summary": "瓦特分离冷凝器蒸汽机约 1769 年 出现，建立在 纽科门大气式蒸汽机 之上；它把 能量形式 变成可稳定复现的能力，是 能量形式 中从经验走向方法的关键一步。",
    "dependsOn": ["newcomen_engine"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "工业革命",
        "text": "瓦特分离冷凝器蒸汽机在 1769 年 前后出现，依托 纽科门大气式蒸汽机 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，瓦特分离冷凝器蒸汽机仍是 能量形式 的底层支撑，并作为 能量形式 的基础能力持续发挥作用。"
      }
    ],
    "significance": "瓦特分离冷凝器蒸汽机把 纽科门大气式蒸汽机 与 能量形式 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "boiler",
    "name": "锅炉",
    "en": "Boiler",
    "category": "energy",
    "era": "industrial",
    "date": "1765 年",
    "year": 1765,
    "people": "",
    "place": "",
    "summary": "锅炉约 1765 年 出现，建立在 铸铁 之上；它把 能量形式 变成可稳定复现的能力，是 能量形式 中从经验走向方法的关键一步。",
    "dependsOn": ["mat_castiron"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "工业革命",
        "text": "锅炉在 1765 年 前后出现，依托 铸铁 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，锅炉仍是 能量形式 的底层支撑，并作为 能量形式 的基础能力持续发挥作用。"
      }
    ],
    "significance": "锅炉把 铸铁 与 能量形式 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "high_pressure_steam",
    "name": "高压蒸汽机",
    "en": "High-pressure Steam Engine",
    "category": "energy",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "高压蒸汽机约 1800 年 出现，建立在 瓦特分离冷凝器蒸汽机、锅炉 之上；它把 能量形式 变成可稳定复现的能力，是 能量形式 中从经验走向方法的关键一步。",
    "dependsOn": ["watt_engine","boiler"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "工业革命",
        "text": "高压蒸汽机在 1800 年 前后出现，依托 瓦特分离冷凝器蒸汽机 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，高压蒸汽机仍是 能量形式 的底层支撑，并作为 能量形式 的基础能力持续发挥作用。"
      }
    ],
    "significance": "高压蒸汽机把 瓦特分离冷凝器蒸汽机 与 能量形式 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "otto_cycle",
    "name": "四冲程奥托循环",
    "en": "Otto Cycle",
    "category": "energy",
    "era": "industrial",
    "date": "1876 年",
    "year": 1876,
    "people": "",
    "place": "",
    "summary": "四冲程奥托循环约 1876 年 出现，建立在 铸铁 之上；它把 能量形式 变成可稳定复现的能力，是 能量形式 中从经验走向方法的关键一步。",
    "dependsOn": ["mat_castiron"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "工业革命",
        "text": "四冲程奥托循环在 1876 年 前后出现，依托 铸铁 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，四冲程奥托循环仍是 能量形式 的底层支撑，并作为 能量形式 的基础能力持续发挥作用。"
      }
    ],
    "significance": "四冲程奥托循环把 铸铁 与 能量形式 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "diesel_engine",
    "name": "柴油压燃发动机",
    "en": "Diesel Engine",
    "category": "energy",
    "era": "industrial",
    "date": "1893 年",
    "year": 1893,
    "people": "",
    "place": "",
    "summary": "柴油压燃发动机约 1893 年 出现，建立在 四冲程奥托循环 之上；它把 能量形式 变成可稳定复现的能力，是 能量形式 中从经验走向方法的关键一步。",
    "dependsOn": ["otto_cycle"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "工业革命",
        "text": "柴油压燃发动机在 1893 年 前后出现，依托 四冲程奥托循环 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，柴油压燃发动机仍是 能量形式 的底层支撑，并作为 能量形式 的基础能力持续发挥作用。"
      }
    ],
    "significance": "柴油压燃发动机把 四冲程奥托循环 与 能量形式 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "carburetor",
    "name": "化油器",
    "en": "Carburetor",
    "category": "energy",
    "era": "industrial",
    "date": "1885 年",
    "year": 1885,
    "people": "",
    "place": "",
    "summary": "化油器约 1885 年 出现，建立在 四冲程奥托循环 之上；它把 能量形式 变成可稳定复现的能力，是 能量形式 中从经验走向方法的关键一步。",
    "dependsOn": ["otto_cycle"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "工业革命",
        "text": "化油器在 1885 年 前后出现，依托 四冲程奥托循环 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，化油器仍是 能量形式 的底层支撑，并作为 能量形式 的基础能力持续发挥作用。"
      }
    ],
    "significance": "化油器把 四冲程奥托循环 与 能量形式 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "turbocharger",
    "name": "涡轮增压",
    "en": "Turbocharger",
    "category": "energy",
    "era": "electrical",
    "date": "1905 年",
    "year": 1905,
    "people": "",
    "place": "",
    "summary": "涡轮增压约 1905 年 出现，建立在 四冲程奥托循环 之上；它把 能量形式 变成可稳定复现的能力，是 能量形式 中从经验走向方法的关键一步。",
    "dependsOn": ["otto_cycle"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "电气时代",
        "text": "涡轮增压在 1905 年 前后出现，依托 四冲程奥托循环 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，涡轮增压仍是 能量形式 的底层支撑，并作为 能量形式 的基础能力持续发挥作用。"
      }
    ],
    "significance": "涡轮增压把 四冲程奥托循环 与 能量形式 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "dynamo",
    "name": "发电机",
    "en": "Dynamo",
    "category": "energy",
    "era": "industrial",
    "date": "1831 年",
    "year": 1831,
    "people": "",
    "place": "",
    "summary": "发电机约 1831 年 出现，建立在 铸铁 之上；它把 能量形式 变成可稳定复现的能力，是 能量形式 中从经验走向方法的关键一步。",
    "dependsOn": ["mat_castiron"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "工业革命",
        "text": "发电机在 1831 年 前后出现，依托 铸铁 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，发电机仍是 能量形式 的底层支撑，并作为 能量形式 的基础能力持续发挥作用。"
      }
    ],
    "significance": "发电机把 铸铁 与 能量形式 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "alternator",
    "name": "交流发电机",
    "en": "Alternator",
    "category": "energy",
    "era": "industrial",
    "date": "1888 年",
    "year": 1888,
    "people": "",
    "place": "",
    "summary": "交流发电机约 1888 年 出现，建立在 发电机 之上；它把 能量形式 变成可稳定复现的能力，是 能量形式 中从经验走向方法的关键一步。",
    "dependsOn": ["dynamo"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "工业革命",
        "text": "交流发电机在 1888 年 前后出现，依托 发电机 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，交流发电机仍是 能量形式 的底层支撑，并作为 能量形式 的基础能力持续发挥作用。"
      }
    ],
    "significance": "交流发电机把 发电机 与 能量形式 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "power_plant",
    "name": "发电厂",
    "en": "Power Plant",
    "category": "energy",
    "era": "industrial",
    "date": "1882 年",
    "year": 1882,
    "people": "",
    "place": "",
    "summary": "发电厂约 1882 年 出现，建立在 发电机与电动机、锅炉 之上；它把 能量形式 变成可稳定复现的能力，是 能量形式 中从经验走向方法的关键一步。",
    "dependsOn": ["generator","boiler"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "工业革命",
        "text": "发电厂在 1882 年 前后出现，依托 发电机与电动机 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，发电厂仍是 能量形式 的底层支撑，并作为 能量形式 的基础能力持续发挥作用。"
      }
    ],
    "significance": "发电厂把 发电机与电动机 与 能量形式 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "transformer",
    "name": "变压器",
    "en": "Transformer",
    "category": "energy",
    "era": "industrial",
    "date": "1885 年",
    "year": 1885,
    "people": "",
    "place": "",
    "summary": "变压器约 1885 年 出现，建立在 发电机与电动机 之上；它把 能量形式 变成可稳定复现的能力，是 能量形式 中从经验走向方法的关键一步。",
    "dependsOn": ["generator"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "工业革命",
        "text": "变压器在 1885 年 前后出现，依托 发电机与电动机 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，变压器仍是 能量形式 的底层支撑，并作为 能量形式 的基础能力持续发挥作用。"
      }
    ],
    "significance": "变压器把 发电机与电动机 与 能量形式 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "transmission_line",
    "name": "输电线",
    "en": "Transmission Line",
    "category": "energy",
    "era": "industrial",
    "date": "1882 年",
    "year": 1882,
    "people": "",
    "place": "",
    "summary": "输电线约 1882 年 出现，建立在 变压器、电力系统 之上；它把 能量形式 变成可稳定复现的能力，是 能量形式 中从经验走向方法的关键一步。",
    "dependsOn": ["electricity"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "工业革命",
        "text": "输电线在 1882 年 前后出现，依托 变压器 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，输电线仍是 能量形式 的底层支撑，并作为 能量形式 的基础能力持续发挥作用。"
      }
    ],
    "significance": "输电线把 变压器 与 能量形式 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "substation",
    "name": "变电站",
    "en": "Substation",
    "category": "energy",
    "era": "industrial",
    "date": "1883 年",
    "year": 1883,
    "people": "",
    "place": "",
    "summary": "变电站约 1883 年 出现，建立在 变压器 之上；它把 能量形式 变成可稳定复现的能力，是 能量形式 中从经验走向方法的关键一步。",
    "dependsOn": ["power_grid","ene_transmission","mat_manganese"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "工业革命",
        "text": "变电站在 1883 年 前后出现，依托 变压器 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，变电站仍是 能量形式 的底层支撑，并作为 能量形式 的基础能力持续发挥作用。"
      }
    ],
    "significance": "变电站把 变压器 与 能量形式 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "rail_track",
    "name": "铁轨",
    "en": "Rail Track",
    "category": "transport",
    "era": "industrial",
    "date": "1825 年",
    "year": 1825,
    "people": "",
    "place": "",
    "summary": "铁轨约 1825 年 出现，建立在 铸铁 之上；它把 交通运载 变成可稳定复现的能力，是 交通运载 中从经验走向方法的关键一步。",
    "dependsOn": ["mat_castiron"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "工业革命",
        "text": "铁轨在 1825 年 前后出现，依托 铸铁 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，铁轨仍是 交通运载 的底层支撑，并作为 交通运载 的基础能力持续发挥作用。"
      }
    ],
    "significance": "铁轨把 铸铁 与 交通运载 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "railway_signal",
    "name": "铁路信号",
    "en": "Railway Signaling",
    "category": "transport",
    "era": "industrial",
    "date": "1830 年",
    "year": 1830,
    "people": "",
    "place": "",
    "summary": "铁路信号约 1830 年 出现，建立在 铁轨 之上；它把 交通运载 变成可稳定复现的能力，是 交通运载 中从经验走向方法的关键一步。",
    "dependsOn": ["rail_track"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "工业革命",
        "text": "铁路信号在 1830 年 前后出现，依托 铁轨 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，铁路信号仍是 交通运载 的底层支撑，并作为 交通运载 的基础能力持续发挥作用。"
      }
    ],
    "significance": "铁路信号把 铁轨 与 交通运载 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "chassis",
    "name": "底盘",
    "en": "Automobile Chassis",
    "category": "transport",
    "era": "industrial",
    "date": "1886 年",
    "year": 1886,
    "people": "",
    "place": "",
    "summary": "底盘约 1886 年 出现，建立在 铸铁 之上；它把 交通运载 变成可稳定复现的能力，是 交通运载 中从经验走向方法的关键一步。",
    "dependsOn": ["mat_castiron"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "工业革命",
        "text": "底盘在 1886 年 前后出现，依托 铸铁 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，底盘仍是 交通运载 的底层支撑，并作为 交通运载 的基础能力持续发挥作用。"
      }
    ],
    "significance": "底盘把 铸铁 与 交通运载 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "gearbox",
    "name": "变速箱",
    "en": "Gearbox",
    "category": "transport",
    "era": "industrial",
    "date": "1890 年",
    "year": 1890,
    "people": "",
    "place": "",
    "summary": "变速箱约 1890 年 出现，建立在 内燃机、底盘 之上；它把 交通运载 变成可稳定复现的能力，是 交通运载 中从经验走向方法的关键一步。",
    "dependsOn": ["internal_combustion","chassis"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "工业革命",
        "text": "变速箱在 1890 年 前后出现，依托 内燃机 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，变速箱仍是 交通运载 的底层支撑，并作为 交通运载 的基础能力持续发挥作用。"
      }
    ],
    "significance": "变速箱把 内燃机 与 交通运载 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "steering",
    "name": "转向系统",
    "en": "Steering System",
    "category": "transport",
    "era": "industrial",
    "date": "1890 年",
    "year": 1890,
    "people": "",
    "place": "",
    "summary": "转向系统约 1890 年 出现，建立在 底盘 之上；它把 交通运载 变成可稳定复现的能力，是 交通运载 中从经验走向方法的关键一步。",
    "dependsOn": ["chassis"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "工业革命",
        "text": "转向系统在 1890 年 前后出现，依托 底盘 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，转向系统仍是 交通运载 的底层支撑，并作为 交通运载 的基础能力持续发挥作用。"
      }
    ],
    "significance": "转向系统把 底盘 与 交通运载 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "auto_electrics",
    "name": "汽车电气系统",
    "en": "Automotive Electrical System",
    "category": "transport",
    "era": "industrial",
    "date": "1890 年",
    "year": 1890,
    "people": "",
    "place": "",
    "summary": "汽车电气系统约 1890 年 出现，建立在 电动机、变速箱 之上；它把 交通运载 变成可稳定复现的能力，是 交通运载 中从经验走向方法的关键一步。",
    "dependsOn": ["electric_motor","gearbox"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "工业革命",
        "text": "汽车电气系统在 1890 年 前后出现，依托 电动机 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，汽车电气系统仍是 交通运载 的底层支撑，并作为 交通运载 的基础能力持续发挥作用。"
      }
    ],
    "significance": "汽车电气系统把 电动机 与 交通运载 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "aerodynamics",
    "name": "空气动力学",
    "en": "Aerodynamics",
    "category": "transport",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "空气动力学在 1900 年 前后成形，依托 流体力学 把 交通运载 落到实处，并成为 交通运载 中承上启下的一环，直接支撑了 飞机 等后续技术。",
    "dependsOn": ["fluid_mech"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "电气时代",
        "text": "空气动力学在 1900 年 前后出现，依托 流体力学 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，空气动力学仍是 交通运载 的底层支撑，并持续影响 飞机。"
      }
    ],
    "significance": "空气动力学把 流体力学 与 交通运载 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 飞机。"
  },
{
    "id": "aircraft_engine",
    "name": "航空发动机",
    "en": "Aircraft Engine",
    "category": "energy",
    "era": "electrical",
    "date": "1903 年",
    "year": 1903,
    "people": "",
    "place": "",
    "summary": "航空发动机约 1903 年 出现，建立在 内燃机 之上；它把 能量形式 变成可稳定复现的能力，是 能量形式 中从经验走向方法的关键一步。",
    "dependsOn": ["internal_combustion"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "电气时代",
        "text": "航空发动机在 1903 年 前后出现，依托 内燃机 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，航空发动机仍是 能量形式 的底层支撑，并作为 能量形式 的基础能力持续发挥作用。"
      }
    ],
    "significance": "航空发动机把 内燃机 与 能量形式 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "landing_gear",
    "name": "起落架",
    "en": "Landing Gear",
    "category": "transport",
    "era": "electrical",
    "date": "1903 年",
    "year": 1903,
    "people": "",
    "place": "",
    "summary": "起落架约 1903 年 出现，建立在 底盘 之上；它把 交通运载 变成可稳定复现的能力，是 交通运载 中从经验走向方法的关键一步。",
    "dependsOn": ["chassis"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "电气时代",
        "text": "起落架在 1903 年 前后出现，依托 底盘 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，起落架仍是 交通运载 的底层支撑，并作为 交通运载 的基础能力持续发挥作用。"
      }
    ],
    "significance": "起落架把 底盘 与 交通运载 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "flight_control",
    "name": "飞行控制",
    "en": "Flight Control",
    "category": "transport",
    "era": "electrical",
    "date": "1910 年",
    "year": 1910,
    "people": "",
    "place": "",
    "summary": "飞行控制约 1910 年 出现，建立在 空气动力学 之上；它把 交通运载 变成可稳定复现的能力，是 交通运载 中从经验走向方法的关键一步。",
    "dependsOn": ["aerodynamics"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "电气时代",
        "text": "飞行控制在 1910 年 前后出现，依托 空气动力学 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，飞行控制仍是 交通运载 的底层支撑，并作为 交通运载 的基础能力持续发挥作用。"
      }
    ],
    "significance": "飞行控制把 空气动力学 与 交通运载 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "multicopter",
    "name": "多旋翼构型",
    "en": "Multicopter",
    "category": "transport",
    "era": "intelligent",
    "date": "2005 年",
    "year": 2005,
    "people": "",
    "place": "",
    "summary": "多旋翼构型约 2005 年 出现，建立在 电动机、微处理器 之上；它把 交通运载 变成可稳定复现的能力，是 交通运载 中从经验走向方法的关键一步。",
    "dependsOn": ["electric_motor","inf_microprocessor"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "智能时代",
        "text": "多旋翼构型在 2005 年 前后出现，依托 电动机 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，多旋翼构型仍是 交通运载 的底层支撑，并作为 交通运载 的基础能力持续发挥作用。"
      }
    ],
    "significance": "多旋翼构型把 电动机 与 交通运载 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "uav_controller",
    "name": "飞控系统",
    "en": "UAV Flight Controller",
    "category": "transport",
    "era": "intelligent",
    "date": "2005 年",
    "year": 2005,
    "people": "",
    "place": "",
    "summary": "飞控系统约 2005 年 出现，建立在 多旋翼构型、微处理器 之上；它把 交通运载 变成可稳定复现的能力，是 交通运载 中从经验走向方法的关键一步。",
    "dependsOn": ["multicopter","inf_microprocessor"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "智能时代",
        "text": "飞控系统在 2005 年 前后出现，依托 多旋翼构型 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，飞控系统仍是 交通运载 的底层支撑，并作为 交通运载 的基础能力持续发挥作用。"
      }
    ],
    "significance": "飞控系统把 多旋翼构型 与 交通运载 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "fpv_link",
    "name": "图传链路",
    "en": "FPV Video Link",
    "category": "transport",
    "era": "intelligent",
    "date": "2010 年",
    "year": 2010,
    "people": "",
    "place": "",
    "summary": "图传链路约 2010 年 出现，建立在 无线电、飞控系统 之上；它把 交通运载 变成可稳定复现的能力，是 交通运载 中从经验走向方法的关键一步。",
    "dependsOn": ["radio","uav_controller"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "智能时代",
        "text": "图传链路在 2010 年 前后出现，依托 无线电 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，图传链路仍是 交通运载 的底层支撑，并作为 交通运载 的基础能力持续发挥作用。"
      }
    ],
    "significance": "图传链路把 无线电 与 交通运载 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "vacuum_tube",
    "name": "电子管",
    "en": "Vacuum Tube",
    "category": "info",
    "era": "electrical",
    "date": "1904 年",
    "year": 1904,
    "people": "",
    "place": "",
    "summary": "电子管约 1904 年 出现，建立在 玻璃 之上；它把 信息通信 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mat_glass"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "电气时代",
        "text": "电子管在 1904 年 前后出现，依托 玻璃 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，电子管仍是 信息通信 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "电子管把 玻璃 与 信息通信 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "eniac",
    "name": "电子管计算机",
    "en": "Vacuum-tube Computer",
    "category": "info",
    "era": "electrical",
    "date": "1946 年",
    "year": 1946,
    "people": "",
    "place": "",
    "summary": "电子管计算机约 1946 年 出现，建立在 电子管 之上；它把 信息通信 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["vacuum_tube"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "电气时代",
        "text": "电子管计算机在 1946 年 前后出现，依托 电子管 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，电子管计算机仍是 信息通信 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "电子管计算机把 电子管 与 信息通信 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "transistor_computer",
    "name": "晶体管计算机",
    "en": "Transistor Computer",
    "category": "info",
    "era": "info",
    "date": "1960 年",
    "year": 1960,
    "people": "",
    "place": "",
    "summary": "晶体管计算机约 1960 年 出现，建立在 晶体管 之上；它把 信息通信 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["transistor"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "信息时代",
        "text": "晶体管计算机在 1960 年 前后出现，依托 晶体管 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，晶体管计算机仍是 信息通信 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "晶体管计算机把 晶体管 与 信息通信 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "microcomputer",
    "name": "微处理器个人计算机",
    "en": "Microprocessor Personal Computer",
    "category": "info",
    "era": "info",
    "date": "1975 年",
    "year": 1975,
    "people": "",
    "place": "",
    "summary": "微处理器个人计算机约 1975 年 出现，建立在 微处理器、集成电路 之上；它把 信息通信 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["inf_microprocessor","ic"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "信息时代",
        "text": "微处理器个人计算机在 1975 年 前后出现，依托 微处理器 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，微处理器个人计算机仍是 信息通信 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "微处理器个人计算机把 微处理器 与 信息通信 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "soc",
    "name": "手机系统级芯片",
    "en": "Mobile SoC",
    "category": "info",
    "era": "intelligent",
    "date": "2007 年",
    "year": 2007,
    "people": "",
    "place": "",
    "summary": "手机系统级芯片约 2007 年 出现，建立在 微处理器、集成电路 之上；它把 信息通信 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["inf_microprocessor","ic"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "智能时代",
        "text": "手机系统级芯片在 2007 年 前后出现，依托 微处理器 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，手机系统级芯片仍是 信息通信 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "手机系统级芯片把 微处理器 与 信息通信 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mobile_os",
    "name": "移动操作系统",
    "en": "Mobile Operating System",
    "category": "info",
    "era": "intelligent",
    "date": "2007 年",
    "year": 2007,
    "people": "",
    "place": "",
    "summary": "移动操作系统约 2007 年 出现，建立在 操作系统 之上；它把 信息通信 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["inf_os"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "智能时代",
        "text": "移动操作系统在 2007 年 前后出现，依托 操作系统 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，移动操作系统仍是 信息通信 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "移动操作系统把 操作系统 与 信息通信 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "camera_module",
    "name": "摄像头模组",
    "en": "Camera Module",
    "category": "info",
    "era": "intelligent",
    "date": "2007 年",
    "year": 2007,
    "people": "",
    "place": "",
    "summary": "摄像头模组约 2007 年 出现，建立在 玻璃 之上；它把 信息通信 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mat_glass"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "智能时代",
        "text": "摄像头模组在 2007 年 前后出现，依托 玻璃 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，摄像头模组仍是 信息通信 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "摄像头模组把 玻璃 与 信息通信 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "packet_switch",
    "name": "分组交换",
    "en": "Packet Switching",
    "category": "info",
    "era": "info",
    "date": "1969 年",
    "year": 1969,
    "people": "",
    "place": "",
    "summary": "分组交换约 1969 年 出现，建立在 晶体管 之上；它把 信息通信 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["transistor"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "信息时代",
        "text": "分组交换在 1969 年 前后出现，依托 晶体管 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，分组交换仍是 信息通信 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "分组交换把 晶体管 与 信息通信 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "tcpip",
    "name": "TCP/IP协议",
    "en": "TCP/IP",
    "category": "info",
    "era": "info",
    "date": "1981 年",
    "year": 1981,
    "people": "",
    "place": "",
    "summary": "TCP/IP协议约 1981 年 出现，建立在 分组交换 之上；它把 信息通信 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["packet_switch"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "信息时代",
        "text": "TCP/IP协议在 1981 年 前后出现，依托 分组交换 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，TCP/IP协议仍是 信息通信 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "TCP/IP协议把 分组交换 与 信息通信 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "optic_fiber",
    "name": "光纤",
    "en": "Optical Fiber",
    "category": "info",
    "era": "info",
    "date": "1970 年",
    "year": 1970,
    "people": "",
    "place": "",
    "summary": "光纤约 1970 年 出现，建立在 玻璃 之上；它把 信息通信 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mat_glass"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "信息时代",
        "text": "光纤在 1970 年 前后出现，依托 玻璃 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，光纤仍是 信息通信 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "光纤把 玻璃 与 信息通信 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "http",
    "name": "超文本传输协议",
    "en": "HTTP/HTML",
    "category": "info",
    "era": "info",
    "date": "1991 年",
    "year": 1991,
    "people": "",
    "place": "",
    "summary": "超文本传输协议约 1991 年 出现，建立在 互联网、TCP/IP协议 之上；它把 信息通信 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["internet","tcpip"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "信息时代",
        "text": "超文本传输协议在 1991 年 前后出现，依托 互联网 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，超文本传输协议仍是 信息通信 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "超文本传输协议把 互联网 与 信息通信 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "browser",
    "name": "网页浏览器",
    "en": "Web Browser",
    "category": "info",
    "era": "info",
    "date": "1993 年",
    "year": 1993,
    "people": "",
    "place": "",
    "summary": "网页浏览器约 1993 年 出现，建立在 超文本传输协议、操作系统 之上；它把 信息通信 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["http","inf_os"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "信息时代",
        "text": "网页浏览器在 1993 年 前后出现，依托 超文本传输协议 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，网页浏览器仍是 信息通信 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "网页浏览器把 超文本传输协议 与 信息通信 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "web_server",
    "name": "万维网服务器",
    "en": "Web Server",
    "category": "info",
    "era": "info",
    "date": "1991 年",
    "year": 1991,
    "people": "",
    "place": "",
    "summary": "万维网服务器约 1991 年 出现，建立在 超文本传输协议 之上；它把 信息通信 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["http"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "信息时代",
        "text": "万维网服务器在 1991 年 前后出现，依托 超文本传输协议 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，万维网服务器仍是 信息通信 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "万维网服务器把 超文本传输协议 与 信息通信 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "recombinant_dna",
    "name": "重组DNA技术",
    "en": "Recombinant DNA",
    "category": "life",
    "era": "info",
    "date": "1973 年",
    "year": 1973,
    "people": "",
    "place": "",
    "summary": "重组DNA技术约 1973 年 出现，建立在 既有技术积累 之上；它把 生命与医疗 变成可稳定复现的能力，是 生命与医疗 中从经验走向方法的关键一步。",
    "dependsOn": ["bio_ecmo","bio_ct","inf_pl_c"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "信息时代",
        "text": "重组DNA技术在 1973 年 前后出现，依托 生命与医疗 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，重组DNA技术仍是 生命与医疗 的底层支撑，并作为 生命与医疗 的基础能力持续发挥作用。"
      }
    ],
    "significance": "重组DNA技术把 生命与医疗 与 生命与医疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "gene_cloning",
    "name": "基因克隆",
    "en": "Gene Cloning",
    "category": "life",
    "era": "info",
    "date": "1973 年",
    "year": 1973,
    "people": "",
    "place": "",
    "summary": "基因克隆约 1973 年 出现，建立在 重组DNA技术 之上；它把 生命与医疗 变成可稳定复现的能力，是 生命与医疗 中从经验走向方法的关键一步。",
    "dependsOn": ["recombinant_dna"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "信息时代",
        "text": "基因克隆在 1973 年 前后出现，依托 重组DNA技术 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，基因克隆仍是 生命与医疗 的底层支撑，并作为 生命与医疗 的基础能力持续发挥作用。"
      }
    ],
    "significance": "基因克隆把 重组DNA技术 与 生命与医疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "shield_tbm",
    "name": "盾构机",
    "en": "Tunnel Boring Machine",
    "category": "build",
    "era": "industrial",
    "date": "1843 年",
    "year": 1843,
    "people": "",
    "place": "",
    "summary": "盾构机约 1843 年 出现，建立在 铸铁、蒸汽机 之上；它把 建筑建造 变成可稳定复现的能力，是 建筑建造 中从经验走向方法的关键一步。",
    "dependsOn": ["mat_castiron","steam_engine"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "工业革命",
        "text": "盾构机在 1843 年 前后出现，依托 铸铁 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，盾构机仍是 建筑建造 的底层支撑，并作为 建筑建造 的基础能力持续发挥作用。"
      }
    ],
    "significance": "盾构机把 铸铁 与 建筑建造 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "drill_blast",
    "name": "钻爆法",
    "en": "Drill and Blast",
    "category": "build",
    "era": "industrial",
    "date": "1843 年",
    "year": 1843,
    "people": "",
    "place": "",
    "summary": "钻爆法约 1843 年 出现，建立在 火药 之上；它把 建筑建造 变成可稳定复现的能力，是 建筑建造 中从经验走向方法的关键一步。",
    "dependsOn": ["gunpowder"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "工业革命",
        "text": "钻爆法在 1843 年 前后出现，依托 火药 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，钻爆法仍是 建筑建造 的底层支撑，并作为 建筑建造 的基础能力持续发挥作用。"
      }
    ],
    "significance": "钻爆法把 火药 与 建筑建造 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "tunnel_lining",
    "name": "隧道衬砌",
    "en": "Tunnel Lining",
    "category": "build",
    "era": "industrial",
    "date": "1850 年",
    "year": 1850,
    "people": "",
    "place": "",
    "summary": "隧道衬砌约 1850 年 出现，建立在 水泥、铸铁 之上；它把 建筑建造 变成可稳定复现的能力，是 建筑建造 中从经验走向方法的关键一步。",
    "dependsOn": ["mat_cement","mat_castiron"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "工业革命",
        "text": "隧道衬砌在 1850 年 前后出现，依托 水泥 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，隧道衬砌仍是 建筑建造 的底层支撑，并作为 建筑建造 的基础能力持续发挥作用。"
      }
    ],
    "significance": "隧道衬砌把 水泥 与 建筑建造 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "rifling",
    "name": "线膛",
    "en": "Rifling",
    "category": "military",
    "era": "medieval",
    "date": "1490 年",
    "year": 1490,
    "people": "",
    "place": "",
    "summary": "线膛约 1490 年 出现，建立在 火药 之上；它把 军事技术 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["gunpowder"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "中世纪",
        "text": "线膛在 1490 年 前后出现，依托 火药 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，线膛仍是 军事技术 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "线膛把 火药 与 军事技术 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "breech_loading",
    "name": "后膛装填",
    "en": "Breech-loading",
    "category": "military",
    "era": "industrial",
    "date": "1850 年",
    "year": 1850,
    "people": "",
    "place": "",
    "summary": "后膛装填约 1850 年 出现，建立在 线膛 之上；它把 军事技术 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["rifling"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "工业革命",
        "text": "后膛装填在 1850 年 前后出现，依托 线膛 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，后膛装填仍是 军事技术 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "后膛装填把 线膛 与 军事技术 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "recoil_mechanism",
    "name": "火炮反后坐装置",
    "en": "Recoil Mechanism",
    "category": "military",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "火炮反后坐装置约 1900 年 出现，建立在 后膛装填 之上；它把 军事技术 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["breech_loading"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "电气时代",
        "text": "火炮反后坐装置在 1900 年 前后出现，依托 后膛装填 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，火炮反后坐装置仍是 军事技术 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "火炮反后坐装置把 后膛装填 与 军事技术 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "liquid_rocket",
    "name": "液体火箭发动机",
    "en": "Liquid-fuel Rocket",
    "category": "transport",
    "era": "electrical",
    "date": "1926 年",
    "year": 1926,
    "people": "",
    "place": "",
    "summary": "液体火箭发动机约 1926 年 出现，建立在 火箭发动机 之上；它把 交通运载 变成可稳定复现的能力，是 交通运载 中从经验走向方法的关键一步。",
    "dependsOn": ["ene_rocketengine"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "电气时代",
        "text": "液体火箭发动机在 1926 年 前后出现，依托 火箭发动机 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，液体火箭发动机仍是 交通运载 的底层支撑，并作为 交通运载 的基础能力持续发挥作用。"
      }
    ],
    "significance": "液体火箭发动机把 火箭发动机 与 交通运载 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "multistage_rocket",
    "name": "多级火箭",
    "en": "Multistage Rocket",
    "category": "transport",
    "era": "info",
    "date": "1950 年",
    "year": 1950,
    "people": "",
    "place": "",
    "summary": "多级火箭约 1950 年 出现，建立在 液体火箭发动机 之上；它把 交通运载 变成可稳定复现的能力，是 交通运载 中从经验走向方法的关键一步。",
    "dependsOn": ["liquid_rocket"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "信息时代",
        "text": "多级火箭在 1950 年 前后出现，依托 液体火箭发动机 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，多级火箭仍是 交通运载 的底层支撑，并作为 交通运载 的基础能力持续发挥作用。"
      }
    ],
    "significance": "多级火箭把 液体火箭发动机 与 交通运载 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "rocket_guidance",
    "name": "火箭制导",
    "en": "Rocket Guidance",
    "category": "transport",
    "era": "info",
    "date": "1950 年",
    "year": 1950,
    "people": "",
    "place": "",
    "summary": "火箭制导约 1950 年 出现，建立在 液体火箭发动机 之上；它把 交通运载 变成可稳定复现的能力，是 交通运载 中从经验走向方法的关键一步。",
    "dependsOn": ["liquid_rocket"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "信息时代",
        "text": "火箭制导在 1950 年 前后出现，依托 液体火箭发动机 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，火箭制导仍是 交通运载 的底层支撑，并作为 交通运载 的基础能力持续发挥作用。"
      }
    ],
    "significance": "火箭制导把 液体火箭发动机 与 交通运载 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "scan_mirror",
    "name": "扫描振镜",
    "en": "Scanning Mirror",
    "category": "transport",
    "era": "intelligent",
    "date": "2000 年",
    "year": 2000,
    "people": "",
    "place": "",
    "summary": "扫描振镜约 2000 年 出现，建立在 激光器、伺服系统 之上；它把 交通运载 变成可稳定复现的能力，是 交通运载 中从经验走向方法的关键一步。",
    "dependsOn": ["lasers","mfg_servo"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "智能时代",
        "text": "扫描振镜在 2000 年 前后出现，依托 激光器 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，扫描振镜仍是 交通运载 的底层支撑，并作为 交通运载 的基础能力持续发挥作用。"
      }
    ],
    "significance": "扫描振镜把 激光器 与 交通运载 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "tof_ranging",
    "name": "飞行时间测距",
    "en": "Time-of-flight Ranging",
    "category": "transport",
    "era": "intelligent",
    "date": "2000 年",
    "year": 2000,
    "people": "",
    "place": "",
    "summary": "飞行时间测距约 2000 年 出现，建立在 激光器 之上；它把 交通运载 变成可稳定复现的能力，是 交通运载 中从经验走向方法的关键一步。",
    "dependsOn": ["lasers"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "智能时代",
        "text": "飞行时间测距在 2000 年 前后出现，依托 激光器 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，飞行时间测距仍是 交通运载 的底层支撑，并作为 交通运载 的基础能力持续发挥作用。"
      }
    ],
    "significance": "飞行时间测距把 激光器 与 交通运载 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "fdm",
    "name": "熔融沉积成型",
    "en": "FDM",
    "category": "manufact",
    "era": "info",
    "date": "1988 年",
    "year": 1988,
    "people": "",
    "place": "",
    "summary": "熔融沉积成型在 1988 年 前后成形，依托 既有技术积累 把 制造与工具 落到实处，并成为 制造与工具 中承上启下的一环，直接支撑了 3D 打印 等后续技术。",
    "dependsOn": ["printing3d","mfg_additive","mat_ybco"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "信息时代",
        "text": "熔融沉积成型在 1988 年 前后出现，依托 制造与工具 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，熔融沉积成型仍是 制造与工具 的底层支撑，并持续影响 3D 打印。"
      }
    ],
    "significance": "熔融沉积成型把 制造与工具 与 制造与工具 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 3D 打印。"
  },
{
    "id": "sla",
    "name": "光固化成型",
    "en": "SLA",
    "category": "manufact",
    "era": "info",
    "date": "1986 年",
    "year": 1986,
    "people": "",
    "place": "",
    "summary": "光固化成型约 1986 年 成熟，建立在 激光器 之上完成关键突破；其能力延伸到 制造与工具，并为 3D 打印 的发展铺平了道路。",
    "dependsOn": ["lasers"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "信息时代",
        "text": "光固化成型在 1986 年 前后出现，依托 激光器 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，光固化成型仍是 制造与工具 的底层支撑，并持续影响 3D 打印。"
      }
    ],
    "significance": "光固化成型把 激光器 与 制造与工具 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 3D 打印。"
  },
{
    "id": "sls",
    "name": "选择性激光烧结",
    "en": "SLS",
    "category": "manufact",
    "era": "info",
    "date": "1990 年",
    "year": 1990,
    "people": "",
    "place": "",
    "summary": "选择性激光烧结约 1990 年 成熟，建立在 激光器 之上完成关键突破；其能力延伸到 制造与工具，并为 3D 打印 的发展铺平了道路。",
    "dependsOn": ["lasers"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "信息时代",
        "text": "选择性激光烧结在 1990 年 前后出现，依托 激光器 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，选择性激光烧结仍是 制造与工具 的底层支撑，并持续影响 3D 打印。"
      }
    ],
    "significance": "选择性激光烧结把 激光器 与 制造与工具 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 3D 打印。"
  },
{
    "id": "mower_deck",
    "name": "割草执行机构",
    "en": "Cutting Deck",
    "category": "life",
    "era": "intelligent",
    "date": "2015 年",
    "year": 2015,
    "people": "",
    "place": "",
    "summary": "割草执行机构约 2015 年 出现，建立在 电动机、电池 之上；它把 生命与医疗 变成可稳定复现的能力，是 生命与医疗 中从经验走向方法的关键一步。",
    "dependsOn": ["electric_motor","battery"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "智能时代",
        "text": "割草执行机构在 2015 年 前后出现，依托 电动机 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，割草执行机构仍是 生命与医疗 的底层支撑，并作为 生命与医疗 的基础能力持续发挥作用。"
      }
    ],
    "significance": "割草执行机构把 电动机 与 生命与医疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mower_nav",
    "name": "自主导航定位",
    "en": "Autonomous Mowing Navigation",
    "category": "life",
    "era": "intelligent",
    "date": "2015 年",
    "year": 2015,
    "people": "",
    "place": "",
    "summary": "自主导航定位约 2015 年 出现，建立在 家用扫地机器人、激光雷达 之上；它把 生命与医疗 变成可稳定复现的能力，是 生命与医疗 中从经验走向方法的关键一步。",
    "dependsOn": ["robot_vacuum","lidar"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "智能时代",
        "text": "自主导航定位在 2015 年 前后出现，依托 家用扫地机器人 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，自主导航定位仍是 生命与医疗 的底层支撑，并作为 生命与医疗 的基础能力持续发挥作用。"
      }
    ],
    "significance": "自主导航定位把 家用扫地机器人 与 生命与医疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "vacuum_deck",
    "name": "吸尘执行机构",
    "en": "Vacuum Deck",
    "category": "life",
    "era": "intelligent",
    "date": "2002 年",
    "year": 2002,
    "people": "",
    "place": "",
    "summary": "吸尘执行机构约 2002 年 出现，建立在 电动机、电池 之上；它把 生命与医疗 变成可稳定复现的能力，是 生命与医疗 中从经验走向方法的关键一步。",
    "dependsOn": ["electric_motor","battery"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "智能时代",
        "text": "吸尘执行机构在 2002 年 前后出现，依托 电动机 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，吸尘执行机构仍是 生命与医疗 的底层支撑，并作为 生命与医疗 的基础能力持续发挥作用。"
      }
    ],
    "significance": "吸尘执行机构把 电动机 与 生命与医疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "slam_nav",
    "name": "同步定位与建图",
    "en": "SLAM Navigation",
    "category": "life",
    "era": "intelligent",
    "date": "2002 年",
    "year": 2002,
    "people": "",
    "place": "",
    "summary": "同步定位与建图约 2002 年 出现，建立在 激光雷达、微处理器 之上；它把 生命与医疗 变成可稳定复现的能力，是 生命与医疗 中从经验走向方法的关键一步。",
    "dependsOn": ["inf_microprocessor"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "智能时代",
        "text": "同步定位与建图在 2002 年 前后出现，依托 激光雷达 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，同步定位与建图仍是 生命与医疗 的底层支撑，并作为 生命与医疗 的基础能力持续发挥作用。"
      }
    ],
    "significance": "同步定位与建图把 激光雷达 与 生命与医疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "jet_compressor",
    "name": "压气机",
    "en": "Jet Compressor",
    "category": "energy",
    "era": "electrical",
    "date": "1937 年",
    "year": 1937,
    "people": "",
    "place": "",
    "summary": "压气机在 1937 年 前后成形，依托 铸铁 把 能量形式 落到实处，并成为 能量形式 中承上启下的一环，直接支撑了 喷气发动机 等后续技术。",
    "dependsOn": ["mat_castiron"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "电气时代",
        "text": "压气机在 1937 年 前后出现，依托 铸铁 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，压气机仍是 能量形式 的底层支撑，并持续影响 喷气发动机。"
      }
    ],
    "significance": "压气机把 铸铁 与 能量形式 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 喷气发动机。"
  },
{
    "id": "jet_turbine",
    "name": "涡轮段",
    "en": "Turbine Section",
    "category": "energy",
    "era": "electrical",
    "date": "1937 年",
    "year": 1937,
    "people": "",
    "place": "",
    "summary": "涡轮段在 1937 年 前后成形，依托 压气机 把 能量形式 落到实处，并成为 能量形式 中承上启下的一环，直接支撑了 喷气发动机 等后续技术。",
    "dependsOn": ["jet_compressor"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "电气时代",
        "text": "涡轮段在 1937 年 前后出现，依托 压气机 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，涡轮段仍是 能量形式 的底层支撑，并持续影响 喷气发动机。"
      }
    ],
    "significance": "涡轮段把 压气机 与 能量形式 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 喷气发动机。"
  },
{
    "id": "afterburner",
    "name": "加力燃烧室",
    "en": "Afterburner",
    "category": "energy",
    "era": "electrical",
    "date": "1940 年",
    "year": 1940,
    "people": "",
    "place": "",
    "summary": "加力燃烧室约 1940 年 成熟，建立在 涡轮段 之上完成关键突破；其能力延伸到 能量形式，并为 喷气发动机 的发展铺平了道路。",
    "dependsOn": ["jet_turbine"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "电气时代",
        "text": "加力燃烧室在 1940 年 前后出现，依托 涡轮段 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，加力燃烧室仍是 能量形式 的底层支撑，并持续影响 喷气发动机。"
      }
    ],
    "significance": "加力燃烧室把 涡轮段 与 能量形式 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 喷气发动机。"
  }
];
