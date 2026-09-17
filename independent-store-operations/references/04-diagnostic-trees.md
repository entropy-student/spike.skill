# 04 — 症状诊断树

> 目标：看到现象时，先定位证据，不直接跳到页面组件。

## Tree 0 — 所有诊断共同前置

```text
SYMPTOM
↓
数据可信？
├─ NO → Measurement first
└─ YES
↓
是否集中在来源 / 商品 / 设备 / 地区 / 新老用户？
├─ YES → Segment-specific diagnosis
└─ NO → Site/system-wide diagnosis
↓
定位 S1–S8
↓
生成多个候选原因
↓
标 L0/L1/L2/L3
↓
找最高信息价值证据
```

## Tree 1 — 有流量但订单少

```text
Sessions high
↓
Traffic valid?
├─ NO → S1 流量质量
└─ YES
↓
Product view rate low?
├─ YES → S1/S2
└─ NO
↓
Add-to-cart low?
├─ YES → S3/S4/S5
└─ NO
↓
Begin checkout low?
├─ YES → S5/S6
└─ NO
↓
Purchase low?
├─ YES → S6
└─ NO → AOV / Volume / Economics
```

## Tree 2 — 商品页高浏览、低加购

候选：
- 流量 / 商品错配；
- 价值不清；
- 价格 / Offer；
- 尺码 / 兼容；
- 商品信息不足；
- Proof / Trust；
- 配送 / 退货风险；
- Variant / CTA 技术问题。

下一证据优先：
1. PDP→ATC by product/source/device；
2. 售前问题 / VOC；
3. session replay / usability；
4. 页面 L0/L1 audit；
5. 实验。

## Tree 3 — 加购高、开始结账低

候选：
- Cart 总价；
- 运费；
- 优惠码分心；
- 购物车技术问题；
- 交叉销售干扰；
- 用户把购物车当收藏夹。

## Tree 4 — 开始结账高、购买低

拆：

```text
begin_checkout
→ add_shipping_info
→ add_payment_info
→ purchase
```

早期掉：
- 账号要求；
- 字段复杂；
- 地址；
- 配送意外。

支付前掉：
- 运费 / 税费；
- 退货担忧；
- 支付方式。

支付后掉：
- 支付拒绝；
- 验证失败；
- 浏览器 / 集成错误；
- Provider 问题。

## Tree 5 — 移动端明显弱

先控制来源差异，再查：
- LCP / INP / CLS；
- overlay；
- sticky CTA；
- 导航 / 筛选；
- Variant；
- 表单；
- 键盘；
- 移动钱包 / 支付。

## Tree 6 — 退货 / 退款高

分：
- 购买前取消；
- 收货后退货；
- 质量问题；
- 期待错配；
- 履约；
- chargeback。

注意：高退货的根因可能在商品页和广告承诺阶段已经形成。

## Tree 7 — 客单低

先确认低客单是不是问题。

如果贡献利润和复购都健康，低客单可能合理。

再看：
- bundle；
- quantity；
- complementary product；
- shipping threshold。

这些通常属于 E1。

## Tree 8 — 复购低

先问：产品是否天然可复购？

有自然周期：
- cohort；
- time to second order；
- product satisfaction；
- replenishment；
- lifecycle。

无自然周期：
- referral；
- complementary；
- collection expansion。

## Tree 9 — 营收涨、利润跌

直接做 Contribution Bridge：

```text
Revenue
- Discount
- COGS
- Fulfillment
- Shipping subsidy
- Payment fee
- Refund/Returns
- Commission
= Contribution before CAC
- CAC
= Contribution after CAC
```

不要继续只盯转化率。

## Tree 10 — SEO 展示高、点击低

看：
- query intent；
- title/snippet；
- price/availability；
- product data；
- SERP competition。

## Tree 11 — SEO 点击高、订单低

看：
- query intent；
- landing；
- product fit；
- price；
- availability；
- geo。

## Tree 12 — 站内搜索无结果

分类：
1. 有商品但搜不到；
2. 没有商品；
3. 拼写 / 同义词问题；
4. 信息类问题。

不要把所有无结果都自动解释成“应该扩 SKU”。
