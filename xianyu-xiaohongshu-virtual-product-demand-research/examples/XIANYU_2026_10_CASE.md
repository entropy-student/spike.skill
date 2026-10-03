# Example — Xianyu Platform-first SKU Research, 2026-10

这是 v2.0 的校准案例，不是永久市场榜单。未来调用必须重新研究当前市场。

完整项目结果：
`entropy-student/project/xianyu/docs/FINAL_SKU_CATALOG_2026-10.md`

## 起点

最初候选池从“服务需求 → 产品化”出发，得到 36 个 SKU，软件、AI、Office 类偏多。

复查发现：
- service-first bias；
- 少数“为你推荐”页面被使用过重；
- 相邻需求被外推成具体 SKU；
- SKU 粒度不一致。

旧 36 因此保留为 seed，而不是最终母集。

## 方法修正

~~~text
官方闲鱼市场面
→ 当前直接 SKU
→ 平台交易数据
→ 多卖家 / 多商品复现
→ 再补服务产品化候选
~~~

覆盖 15 个市场面，70+ seed 统一粒度后得到 60 个候选。

## 最终结果

~~~text
CONFIRMED_DEMAND = 6
PROBABLE_DEMAND = 44
CORE CATALOG = 50
WATCHLIST = 19
MARKET_SIGNAL_ONLY = 6
~~~

代表性 Confirmed：
- AI 漫剧制作教程 + 项目文件 / 工作流；
- 迅雷 SVIP / 网盘会员月卡周卡直充；
- 院校 / 专业考研复试资料包；
- 本地化初中 / 中考学科试卷复习包；
- 日系胶片 Lightroom / PS 人像预设；
- 漫展 / COS / 人像修图预设口令。

代表性 Probable：
- WordPress 外贸站主题模板；
- AI 标书制作软件；
- 电商图片采集 / 整理工具；
- 上市公司研究数据；
- SolidWorks 非标自动化设备图纸库。

## 校准规则

1. 平台原生市场必须先扫。
2. 一个高“想要”商品不等于整个品类被 D3/D4 证明。
3. 推荐页只证明存在/曝光，不证明搜索份额。
4. 相邻需求只能生成候选。
5. 货源未知不否定市场需求。
6. 需求目录不需要唯一赢家。
