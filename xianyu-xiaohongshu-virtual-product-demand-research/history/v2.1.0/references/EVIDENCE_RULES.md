# Evidence Rules v2.1

## 1. 四种不同的事实

研究时先区分：

1. **Supply**：有人在卖、卖家多、挂单多、官方类目存在。
2. **Attention**：浏览、点赞、曝光。
3. **Intent**：想要、收藏、搜索、求购、有效询盘、明确购买动作。
4. **Transaction**：订单、付款、平台第一方交易数据。

默认强度：

~~~text
Transaction > Intent > Attention > Supply
~~~

Supply 很重要，但**不能独立证明 Demand**。

## 2. Demand Level

| Level | 最低要求 | 不能由什么单独触发 |
|---|---|---|
| D4 | 同一 Scope 上的交易/付款证据，或第一方交易数据 | 想要、浏览、多卖家 |
| D3 | 同一 Scope 上多个独立买方侧信号复现 | 多卖家/多挂单 |
| D2 | 同一 Scope 上一个买方侧信号 | 单纯商品存在 |
| D1 | 只看到供给/类目/商品存在 | — |
| U | 无法判断或无法归属 | — |

### 独立买方侧信号

“独立”至少要避免：
- 同一卖家矩阵；
- 同一商品被多个推荐页重复展示；
- 同一数据源被重复转述；
- 同一买方行为被多个页面镜像。

多个不同卖家商品，如果全部没有任何买方行为，只能是 D1。

## 3. Evidence Scope

每条证据必须标：

- FAMILY
- PRODUCT_TYPE
- SKU
- BUNDLE

规则：

> Evidence 可以支持它明确对应的 Scope，并在说明转换的前提下向更宽范围汇总；不能向更细范围下传。

例：

~~~text
证据：AI 漫剧教程卖出 17k
支持：AI 漫剧教程（PRODUCT_TYPE）
不自动支持：AI 漫剧教程 + 项目文件 + Workflow（BUNDLE）
~~~

Bundle 多出的每个组成部分都需要自己的证据，否则标为 DERIVED_ADJACENT / UNKNOWN。

## 4. 最低可复核记录

每条 Observation 至少保留：

~~~text
OBSERVATION_ID
OBSERVED_AT
PLATFORM
MARKET_SURFACE_OR_QUERY
SOURCE_URL_OR_ITEM_ID
SELLER_OR_SOURCE_ID_IF_PUBLIC
RAW_FACT
SIGNAL_TYPE = TRANSACTION / INTENT / ATTENTION / SUPPLY
SIGNAL_VALUE
SUPPORTED_UNIT
EVIDENCE_SCOPE
PROVENANCE
LINEAGE_ID
ACCESS_LIMITATION
~~~

不要只写“多个商品”“很多人想要”而不留下可回看的定位信息。

动态推荐页如果无法稳定复现：
- 记录观察日期；
- 尽量记录商品 ID / 卖家标识 / 当时数值；
- 无法复核的部分降低 Confidence。

## 5. Confidence

Confidence 不等于 Demand：

- HIGH：可定位、时间明确、粒度匹配、Lineage 清楚、访问完整。
- MEDIUM：存在一个重要复核限制。
- LOW：动态/部分访问/粒度或 Lineage 不清/推导较多。

高 Confidence 的 D1 仍然只是“高置信度地知道有人在卖”。

## 6. Counterevidence

至少检查：
- 供给很多但没有买方信号；
- 想要是否来自一个异常爆款；
- 低价引流；
- 热点短峰；
- 推荐机制偏差；
- 商品族证据被错误下传；
- 相邻需求误投射；
- 免费替代；
- 旧证据已过时。

Counterevidence 若破坏原结论的独立性、粒度匹配或买方归属，应直接降 D-Level / Demand Status。

## 7. Risk 与 Demand 分开

Demand：
- CONFIRMED_DEMAND = D4
- PROBABLE_DEMAND = D3
- WATCHLIST = D2/D1/U

Risk：
- NO_FLAG_OBSERVED
- REVIEW_REQUIRED
- HIGH_RISK
- UNKNOWN

Risk 不改变已经观察到的需求事实，但会影响 Test Mode 是否能进入真实测试。

## 8. 平台差异

**闲鱼**：优先直接商品、平台内购买结构、买方信号、求购/询价和多商品上的独立 Intent。

**小红书**：优先重复搜索问题、明确求购/合格私信、店铺/商品动作。点赞/收藏必须按实际信号级别记录，不可自动写成付费需求。
