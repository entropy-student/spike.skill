# 03 — 店型、信息距离与交易拓扑

## 一、店型

### SINGLE_OFFER
单商品 / 单主张。

### NARROW_CATALOG
少量垂直商品。

### BROAD_CATALOG
大量 SKU / 多分类。

### HIGH_CONSIDERATION
高客单、复杂规格、长决策周期。

### REPLENISHMENT
耗材 / 周期复购。

### DIGITAL_SERVICE
数字商品 / 服务。

### SUBSCRIPTION
周期收费。

### MIXED
实物、数字、服务、订阅等混合。

修饰标签：
- PHYSICAL
- DIGITAL
- SERVICE
- HIGH_AOV
- SIZE_SENSITIVE
- COMPATIBILITY_SENSITIVE
- INTERNATIONAL
- MOBILE_HEAVY
- NEW_BRAND
- REGULATED
- HYBRID_TRANSACTION

原则：

> **先判店型，再判断“缺一个功能是不是问题”。**

例：
- 1500 SKU 大目录没有搜索：高风险；
- 单商品站没有搜索：通常正常；
- 多尺码服饰没有尺码支持：高风险；
- 数字报告没有实物配送说明：正常。

## 二、信息距离 P0–P4

### P0 — 当前决策区
用户不用离开当前任务即可看到。

### P1 — 一步可发现
一次明显点击即可找到。

### P2 — 全站可发现
导航 / 页脚能找到，但离当前任务较远。

### P3 — 深层支持
需要帮助中心、多跳或搜索。

### P4 — 未发现
公开路径未找到。

规则：

> 报告必须区分“没有信息”和“有信息但离决策太远”。

越接近金钱、配送、退货、自动续费、兼容、尺码和关键限制，越应该靠近用户当前决策。

## 三、交易拓扑 T1–T6

### T1 ONE_TIME
一次性交易。

### T2 RECURRING
周期订阅。

### T3 PHYSICAL_PLUS_MEMBERSHIP
实物商品 + 独立会员/服务订阅。

### T4 TRIAL_TO_PAID
免费试用 → 自动付费。

### T5 PROMO_TO_STANDARD
首期优惠 → 后续标准价。

### T6 MARKETPLACE_DEPENDENT
由 App Store、Google Play、Amazon 等第三方管理交易。

每条交易至少记录：
- 首次费用；
- 后续费用；
- 计费周期；
- 是否自动续费；
- 试用结束时间；
- 优惠结束条件；
- 取消方式；
- 暂停 / 跳过；
- 退款；
- 取消后权益；
- 是否依赖另一笔交易；
- 实际收费方。

混合交易特别注意：

> 实物退货、账号关闭或取消一项服务，不一定自动取消另一笔订阅。
