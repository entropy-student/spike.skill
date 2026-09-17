# 13 — 真实网络人工对照 Dry Run

## 目的

在真实自动抓取之前，用公开真实站点验证 normalized facts 是否能表达现实交易结构。

本轮不是评价品牌，不做排名。

## 观察样本与结论

### Magic Spoon
公开商品页同时存在：
- ONE-TIME PURCHASE；
- SUBSCRIBE & SAVE；
- 不同价格；
- 每 30 天配送；
- skip / cancel。

结论：单一 `visible_price` 无法表达同页多个 Offer。

### Oura
公开会员页存在：
- 月付 / 年付；
- 新会员首月免费；
- 不同地区不同币种 / 价格；
- 会员与硬件是相关但独立交易。

结论：事实模型必须支持 region + 多 Offer + 交易拓扑。

### HelloFresh
公开 FAQ 明确：
- weekly auto-renewing subscription；
- skip / cancel；
- 下一配送前 5 天的截止条件；
- 首次优惠后订阅继续收费。

结论：取消截止条件属于交易事实，不能只有 `cancel_signal=true/false`。

### 1Password
公开定价 / 支持页存在：
- 月付 / 年付；
- 14 天试用；
- 当前促销价与常规价；
- Apple / Google 内购由对应平台管理。

结论：必须支持 TRIAL_TO_PAID、PROMO_TO_STANDARD、provider_of_record。

### Ridge
公开退货 / 保障页面存在：
- 99 天退货；
- 美国客户预付退货标签；
- 国际退货条件不同；
- lifetime warranty。

结论：政策事实必须绑定 region；不能只保存“有退货政策”。

## 本轮发现的 Schema 缺陷

v1 单值字段：
- visible_price
- standard_price
- cadence

不足以表达真实页面。

因此升级为：

```text
offers[]
  - offer_type
  - label
  - currency
  - initial_price
  - recurring_price
  - cadence
  - auto_renew
  - trial_days
  - cancel_signal / cancel terms
  - provider_of_record
  - region
  - evidence
```

## Gate 结论

旧 schema：
`RETURN_REAL_NETWORK_SCHEMA_INSUFFICIENT`

修正后的 multi-offer schema 本地 Fixture：
`PASS_CANDIDATE_MULTI_OFFER_FACT_SCHEMA`（4/4）

但：

`REAL_NETWORK_FACT_EXTRACTION_DRY_RUN` 仍未 PASS。

下一步必须用真实网页自动提取后，再和人工事实标签对比 Precision。
