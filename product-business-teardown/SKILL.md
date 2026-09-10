---
name: product-business-teardown
title: Product Business Teardown（产品商业拆解）
description: 对任意已有或拟议产品进行证据驱动的商业拆解：识别它服务谁、用户为什么需要、为什么这个产品会存在、价值如何被创造/交付/捕获、谁付钱、真正赚的是哪一部分钱、成本与利润集中在哪里、整体运行逻辑、增长机制、竞争替代与护城河。适用于 SaaS、App、平台/Marketplace、实物、服务、媒体/内容、AI 产品、开源/生态型产品及混合业务。核心要求是区分事实、推断与未知，并根据产品类型选择不同分析结构，而不是强行套单一 Canvas。
version: 0.1.0
language: zh-CN
---

# Product Business Teardown（产品商业拆解）

## 0. 目标

给定一个产品、网站、App、服务、平台、公司中的某个产品线，回答：

> **它为什么存在？为谁创造什么价值？谁为哪一段价值付钱？钱最终流到哪里？哪些活动使产品持续运转？为什么它能增长、盈利或形成战略价值？**

最终必须让读者理解“这门生意的机器是怎么转的”，而不只是得到一张功能表或 Business Model Canvas。

## 1. 强制原则

1. **先定分析单位，再分析。** 产品、公司、产品线、平台生态不能混为一谈。
2. **User ≠ Payer ≠ Beneficiary。** 分别识别使用者、付款者、受益者、经济买家和供给侧参与者。
3. **Need ≠ Product.** 先解释用户原本要完成什么 Job，再解释产品为什么成为一种解决办法。
4. **Revenue ≠ Profit.** 收入来源与利润引擎分开；高收入模块可能低利润，免费模块也可能有战略价值。
5. **Create → Deliver → Capture.** 同时说明价值如何创造、交付、捕获。
6. **Do not force a linear value chain.** SaaS、服务、Marketplace、媒体、开源生态先按类型路由。
7. **Real alternatives include non-consumption.** 竞争者还包括手工方案、替代类别、内部团队和“什么都不做”。
8. **Evidence ≠ inference.** 公开事实、强推断、假设、未知显式区分。
9. **Private economics must not be invented.** 无公开证据时 CAC、毛利、利润率、内部成本只能给结构性判断或区间假设。
10. **Explain the mechanism.** 每个结论都回答“为什么”和“通过什么机制”。

## 2. 输入与分析单位 Gate

至少需要产品名称 / URL / App / 公司中的具体产品。若用户只给公司名，先选择并声明 `PRODUCT / PRODUCT_LINE / COMPANY / PLATFORM_ECOSYSTEM`。若市场/地区会显著影响价格、监管或竞争，再确定目标地区。若免费产品只是更大生态的一部分，同时说明产品自身价值与公司级战略角色。

详见 `references/01_UNIT_OF_ANALYSIS.md`。

## 3. Evidence Mode

真实产品默认研究官方产品/价格/帮助/开发者文档、财报/投资者材料、App Store/Marketplace/Reviews、客户案例、公开访谈、招聘/合作伙伴/渠道/生态、高质量第三方研究。社媒/社区主要用于用户语言、痛点与替代行为，不单独证明营收或利润。

标注 `FACT / INFERENCE / HYPOTHESIS / UNKNOWN / CONFLICT`。

详见 `references/02_EVIDENCE_PROTOCOL.md`。

## 4. Product Archetype Routing

主型从以下选择，可多选：`DIRECT_SALE / SUBSCRIPTION_SAAS / USAGE_BASED / SERVICE / MARKETPLACE_PLATFORM / MEDIA_ATTENTION / OPEN_SOURCE_ECOSYSTEM / HYBRID`。

详见 `references/03_ARCHETYPE_ROUTING.md`。

## 5. Core Teardown — 九层

### A. Product Identity
一句话定义、购买/使用核心对象、产品与公司边界、交付方式。

### B. Customer / Job Architecture
识别 Primary User、Payer/Economic Buyer、Beneficiary、Supply-side participant、Influencer/Gatekeeper；分析 Trigger、Functional/Emotional/Social Job、Before、Friction、After、Non-consumption。

详见 `references/04_CUSTOMER_JTBD.md`。

### C. Why It Exists / Why Now
拆成原本 Job、旧替代结构缺口、Enabler（技术/成本/供应链/法规/文化/分发/基础设施）、最初 Wedge、Why Now、Portfolio Role（获客/留存/交叉销售/生态控制/防御/数据反馈）。

详见 `references/05_WHY_EXISTS.md`。

### D. Value Architecture
用 `CREATE → DELIVER → CAPTURE` 描述输入、核心活动、输出、收益、成本与风险；说明产品压缩的是时间、金钱、复杂度、风险、协调、搜索、信任、身份或体验中的哪种摩擦。

详见 `references/06_VALUE_ARCHITECTURE.md`。

### E. Money Flow & Profit Engine
必须分 Revenue Engine 与 Profit Engine。回答谁付钱、为什么价值付钱、收费对象/单位/频率、免费或补贴层；判断哪条收入流更可能贡献毛利/利润、哪些模块高收入低利润、免费模块是否承担获客/留存/生态职责，以及公司占据利润池哪一段。用 `WTP → Price → Cost → WTS` 检查价值捕获。

详见 `references/07_MONEY_AND_PROFIT_ENGINE.md`。

### F. Operating System
输出运行闭环：`INPUT → TRANSFORMATION → DELIVERY → PAYMENT → FEEDBACK/DATA → REINVESTMENT → NEXT LOOP`，并根据 SaaS、Marketplace、实物、Media、Service、Open Source 改写。

详见 `references/08_OPERATING_LOOP.md`。

### G. Growth / Distribution Engine
区分 Paid、Search/SEO、Content、Sales-led、Product-led、Referral/Virality、Partnership、Network Effect、Ecosystem、Installed-base Cross-sell；解释增长是否自增强还是依赖持续买流量。

### H. Competition / Moat
竞争包括直接竞品、相邻品类、DIY、内部团队、旧习惯和 Non-consumption。检查 Scale、Network Effects、Switching Costs、Brand/Trust、Data/IP、Distribution、Ecosystem、Process Fit、Counter-positioning、Regulatory/Supply advantage。护城河必须解释机制。

### I. Fragility / What Must Be True
至少输出最大成本压力、需求风险、平台/供应/监管依赖、最容易被替代环节、一个让商业模式失效的条件和当前最关键 UNKNOWN。

## 6. Revenue ≠ Profit ≠ Strategic Value

可多选标签：`DIRECT_PROFIT_CENTER / REVENUE_CENTER_LOW_MARGIN / ACQUISITION_ENGINE / RETENTION_ANCHOR / CROSS_SELL_GATEWAY / LOSS_LEADER / ECOSYSTEM_CONTROL_POINT / SUPPLY_AGGREGATOR / ATTENTION_INVENTORY / DATA_FEEDBACK_ENGINE / STRATEGIC_DEFENSE`。无直接证据时写 INFERENCE。

## 7. Money Capture Taxonomy

映射用户付款理由：Ownership、Access、Convenience、Time Saved、Revenue Gain、Cost Reduction、Risk Reduction、Coordination、Trust、Speed、Customization、Status、Scarcity、IP/License、Attention、Transaction、Outcome、Support。

重点回答：**用户付的钱是在购买产品本体，还是购买围绕产品的便利、风险承担、分发、信任、访问权或结果？**

## 8. Output Modes

### Quick Teardown
固定输出：它是什么、服务谁、为什么需要、为什么会有、谁付钱、真正赚哪部分钱、运行闭环、最大优势、最大脆弱点、一句话商业本质。

### Full Teardown
使用九层 Core Teardown，并增加 Evidence Ledger、Money Flow Map、Operating Loop、Competition/Substitute Map、Fact vs Inference、可复制与不可复制部分。

### Compare Mode
比较 2–4 个产品时保持同一分析单位和市场口径，比较用户 Job、价值捕获、利润引擎、增长回路与防御性。

## 9. Copyability Lens

分为 `Copyable Mechanism / Context-dependent Advantage / Non-copyable or Dangerous to Copy`。不要把成功公司的表面功能当成成功原因。

## 10. Stop Rule

完成“理解商业机器”后停止。本 Skill 不自动承担选品、市场进入、开发、采购、广告执行、财务估值、法律税务意见。

## 11. Mandatory Final Summary

```text
这个产品服务：________
用户真正要完成的事：________
它出现是因为：________
它创造价值的机制：________
真正付款的人：________
付款买的是：________
收入引擎：________
利润引擎：________ / UNKNOWN
整体运行逻辑：________
增长引擎：________
最难复制的是：________
最大脆弱点：________
一句话商业本质：________
```

缺乏公开证据时明确写 `UNKNOWN` 或 `INFERENCE`。
