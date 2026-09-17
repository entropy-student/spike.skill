# 06 — 指标与经济模型

## 1. 核心漏斗

推荐兼容当前电商事件语义：

```text
view_item_list
→ select_item
→ view_item
→ add_to_cart
→ view_cart
→ begin_checkout
→ add_shipping_info
→ add_payment_info
→ purchase
→ refund
```

## 2. 阶段比率

可按统一口径观察：
- Product View Rate；
- PDP → ATC；
- ATC → Checkout；
- Checkout → Purchase。

注意：
- event count；
- item count；
- session；
- user；

不能混算。

## 3. 强制分群

至少切：
- source；
- landing page；
- product；
- device；
- geography；
- new / returning；
- time / cohort。

例：

如果整体 PDP→ATC 很低，但问题只集中在某个广告来源，优先检查 S1 message / audience / landing match，而不是重做全部商品页。

## 4. 常见症状映射

### Session 高、PDP view 低
候选：
- 流量意图错；
- 首页主张不清；
- 导航；
- 性能；
- 机器人流量。

### PDP view 高、ATC 低
候选：
- 商品/流量不匹配；
- 价值；
- 价格；
- fit；
- Proof；
- Trust；
- CTA / Variant。

### ATC 高、Checkout 低
候选：
- Cart total；
- shipping；
- coupon；
- basket friction；
- technical issue。

### Checkout 高、Purchase 低
候选：
- delivery；
- fees；
- forms；
- payment；
- errors；
- fraud / provider decline。

### Purchase 正常、Returns 高
候选：
- expectation mismatch；
- size；
- quality；
- fulfillment；
- misleading creative。

## 5. 经济模型

至少记录：

```text
Revenue
- Discounts
- COGS / Delivery cost
- Variable fulfillment
- Shipping subsidy
- Payment fee
- Refund / Return variable cost
- Affiliate / Creator commission
- Variable support
= Contribution before CAC
- CAC
= Contribution after CAC
```

再看：
- AOV；
- repeat purchase；
- LTV；
- payback。

## 6. 运营决策必须看边际

例：

“降低免邮门槛后订单上涨”还要问：
- AOV 是否下降？
- 运费补贴多少？
- 毛利变化？
- 退货是否变化？
- 贡献利润是否改善？

原则：

> **不要为了提高一个局部转化指标，牺牲贡献利润而不自知。**
