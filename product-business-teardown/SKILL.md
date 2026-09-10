---
name: product-business-teardown
title: Product Business Teardown（产品商业拆解）
description: 对任意已有或拟议产品进行证据驱动的商业拆解：识别它服务谁、用户为什么需要、为什么这个产品会存在、价值如何被创造/交付/捕获、谁付钱、真正赚的是哪一部分钱、成本与利润集中在哪里、整体运行逻辑、增长机制、竞争替代与护城河。支持 SaaS、App、平台/Marketplace、实物、小商品/单一 SKU、服务、媒体/内容、AI 产品、开源/生态型产品及混合业务。核心要求是区分事实、推断与未知，并根据产品类型和证据丰富度选择不同分析结构。
version: 0.2.0
language: zh-CN
---

# Product Business Teardown（产品商业拆解）

## 0. 目标

给定一个产品、单一 SKU / 商品链接 / 商品图片、网站、App、服务、平台、公司中的某个产品线，回答：

> **它为什么存在？为谁创造什么价值？谁为哪一段价值付钱？钱最终流到哪里？哪些活动使产品持续运转？为什么它能增长、盈利或形成战略价值？**

最终必须让读者理解“这门生意的机器是怎么转的”，而不只是得到功能表或 Business Model Canvas。

## 1. 强制原则

1. **先定分析单位，再分析。** SKU、产品、产品线、公司、平台生态不能混为一谈。
2. **User ≠ Payer ≠ Beneficiary。** 分别识别使用者、付款者、受益者、经济买家、供给侧参与者和购买影响者。
3. **Need ≠ Product.** 先解释用户原本要完成什么 Job，再解释产品为何成为一种解决办法。
4. **Revenue ≠ Profit ≠ Strategic Value.** 收入、利润层级和战略角色必须分开。
5. **Create → Deliver → Capture.** 同时说明价值如何创造、交付、捕获。
6. **Do not force a linear value chain.** SaaS、服务、Marketplace、媒体、开源生态、实物小商品使用不同运行结构。
7. **Real alternatives include non-consumption.** 竞争者还包括手工方案、相邻类别、内部团队、旧习惯和“什么都不做”。
8. **Evidence ≠ inference.** 事实、推断、假设、未知和冲突显式区分。
9. **Private economics must not be invented.** 没有证据时 CAC、毛利、利润率、内部成本写 `UNKNOWN` 或结构性假设。
10. **Explain the mechanism.** 每个关键结论都回答“为什么”和“通过什么机制”。

## 2. Unit & Evidence Gate

任一输入即可开始：
- 产品名称 / URL / App；
- 单一 SKU、Marketplace / 独立站 Listing；
- 一张可识别用途的商品图片；
- 一个拟议产品概念；
- 公司或平台名称。

先选择分析单位：
`SKU_OR_LISTING / PRODUCT / PRODUCT_LINE / COMPANY / PLATFORM_ECOSYSTEM`

再选择证据环境：
`DISCLOSURE_RICH / PUBLIC_PRODUCT / MARKETPLACE_LISTING / IMAGE_OR_CONCEPT_ONLY`

如果地区会显著改变价格、监管、使用场景或竞争，再确定目标市场。只有边界会实质改变结论时才追问；否则声明当前选择并继续。

**不得因为产品太小或没有公司财报而拒绝拆解。** 单一小商品进入 Small Product / Sparse Evidence Mode。详见 `references/01_UNIT_OF_ANALYSIS.md`、`references/18_SMALL_PRODUCT_SPARSE_EVIDENCE.md`。

## 3. Evidence Mode

真实产品默认研究：官方产品/价格/帮助文档、财报/监管披露（如适用）、Marketplace/Reviews、客户案例、公开访谈、渠道/合作伙伴/生态、高质量第三方研究。社区/社媒主要用于用户语言、痛点和替代行为，不单独证明收入或利润。

关键结论标注：
- `FACT`：直接证据；
- `INFERENCE`：事实支持的合理解释；
- `HYPOTHESIS`：待验证；
- `UNKNOWN`：公开信息不足；
- `CONFLICT`：来源矛盾。

## 4. Product Archetype Routing

允许多选，但指出主型：
1. `DIRECT_SALE`：实物/数字商品直接销售；小商品再识别 `DURABLE / CONSUMABLE / REPLACEMENT / ACCESSORY / GIFT_IDENTITY / BUNDLE`；
2. `SUBSCRIPTION_SAAS`；
3. `USAGE_BASED`；
4. `SERVICE`；
5. `MARKETPLACE_PLATFORM`；
6. `MEDIA_ATTENTION`；
7. `OPEN_SOURCE_ECOSYSTEM`；
8. `HYBRID`。

## 5. Core Teardown｜九层

### A. Product Identity
回答它是什么、核心交付对象、它不是什么、产品与公司的边界、主要交付方式。

### B. Customer / JTBD
识别 Primary User、Payer/Economic Buyer、Beneficiary、Supply-side participant、Influencer/Gatekeeper。继续回答 Trigger、Functional/Emotional/Social Job、Before、Friction、After、Non-consumption。

### C. Why It Exists / Why Now
拆：原本 Job/痛点 → 旧替代缺口 → 技术/成本/供应链/法规/文化/分发 Enabler → 初始 Wedge → Why now → 产品在更大公司中的 Portfolio Role（如适用）。

### D. Value Architecture
用 `CREATE → DELIVER → CAPTURE` 解释：谁贡献输入、核心活动如何改变价值、谁得到收益、谁承担成本/风险、产品压缩了哪种摩擦（时间/金钱/复杂度/风险/搜索/协调/信任/体验等）。

### E. Money Flow & Profit Engine

**Revenue Engine**：谁付钱、为哪一段价值付钱、收费对象是什么（商品/访问权/席位/使用量/交易/结果/广告库存/授权/服务/耗材等）、多久付一次、是否有免费层或补贴层。

**Profit Engine**：必须先声明利润层级：
`Revenue → Gross Profit → Contribution Profit → Operating Profit → Net Income → Cash Flow/FCF`

- 高毛利不自动等于高营业利润；
- 多渠道产品区分 DTC / Marketplace / Wholesale / Retail 的毛利与渠道特定成本；
- Marketplace 区分 GMV/GBV、代收代付、Take Rate、Recognized Revenue 与利润；
- 小商品没有卖家成本数据时，只分析价值捕获点与成本栈，不伪造真实利润率。

详见 `references/13_FINANCIAL_LADDER.md`、`references/14_MARKETPLACE_VOLUME_TO_REVENUE.md`、`references/16_CHANNEL_ECONOMICS.md`。

**Value Capture Test**：用 `WTP → Price → Cost → WTS` 思考企业通过什么提高愿付价格、降低成本、改善供应侧条件或改变分成。

### F. Operating System
输出可读运行闭环：
`INPUT → TRANSFORMATION → DELIVERY → PAYMENT → FEEDBACK/DATA → REINVESTMENT → NEXT LOOP`

按类型换结构：SaaS 看 Acquire→Activate→Repeated Use→Renew/Expand；Marketplace 看 Supply+Demand→Match→Trust→Transaction→Fee→Liquidity；实物看 Source/Build→Inventory→Distribution→Purchase→Fulfillment→Repeat/Upsell；Media、Service、Open Source 分别按自己的循环。

### G. Growth / Distribution Engine
区分 Paid、Search/SEO、Content、Sales-led、Product-led、Referral/Virality、Partnership/Channel、Network effects、Ecosystem distribution、Cross-sell。必须说明增长是否自增强，还是持续依赖买流量。

### H. Competition / Moat
真实替代包括直接竞品、相邻品类、DIY/手工、内部团队、旧习惯、Non-consumption。检查 Scale、Network、Switching Costs、Brand/Trust、Proprietary Data/IP、Distribution、Ecosystem、Process Fit、Counter-positioning、Regulatory/Certification/Supply advantage。

### I. Fragility / What Must Be True
至少输出最大成本压力、最大需求风险、最大平台/供应/监管依赖、最容易被替代环节、一个会让商业模式失效的条件、当前最关键 `UNKNOWN`。

## 6. Packaging / Free / Dependency Checks

对 Freemium / Open Source / Hybrid 产品，必须拆：
`什么免费 → 哪个痛点触发付费 → 哪项能力被收费 → 什么价值指标让账单增长 → 免费层承担什么战略角色`。详见 `references/15_PACKAGING_AND_CROSS_SUBSIDY.md`。

对版权、供应商、App Store、Marketplace、云/API/模型、支付、创作者/商家/司机等关键依赖，画出：
`Customer WTP → Company Revenue → Partner Claims → Infrastructure Claims → Retained Economics`。详见 `references/17_CRITICAL_DEPENDENCY_AND_VALUE_CLAIMS.md`。

## 7. Small Product Teardown

当分析单位是 `SKU_OR_LISTING` 或证据环境为 `MARKETPLACE_LISTING / IMAGE_OR_CONCEPT_ONLY` 时，不要求公司级财务。固定覆盖：
1. 使用场景 / 购买触发；
2. 谁用 / 谁买 / 谁影响购买；
3. 原来的替代办法；
4. 物理/功能机制如何创造价值；
5. 为什么是这种产品形态；
6. 观察到的价格带与廉价替代；
7. 商家能在哪些位置捕获价值；
8. 材料/制造/包装/物流/平台/支付/退货/获客成本栈；
9. DTC / Marketplace / Wholesale / Studio/Salon/Gym/Retail 等渠道逻辑；
10. 复购、损耗、耗材、替换、收藏、礼赠或 Bundle 逻辑；
11. 最容易复制和最难复制的部分；
12. 卖家真实 Revenue / Profit：有证据则写，无证据 `UNKNOWN`。

使用 `templates/small_product_teardown.md`。

## 8. Money Capture Taxonomy

用户付款通常是在购买一种或多种价值：Ownership、Access、Convenience、Time Saved、Revenue Gain、Cost Reduction、Risk Reduction、Coordination、Trust、Speed、Customization、Status/Brand、Scarcity、IP/License、Attention、Transaction、Outcome、Support。

重点回答：**用户是在购买产品本体，还是围绕产品的便利、风险承担、分发、信任、访问权、身份或结果？**

## 9. Output Modes

### Quick Teardown
固定回答：它是什么、服务谁、用户为何需要、为何存在、谁付钱、真正赚哪部分钱、运行闭环、最大优势、最大脆弱点、一句话商业本质。

### Small Product Teardown
按第 7 节执行。

### Full Teardown
九层全部执行，并增加 Evidence Ledger、Money Flow、Operating Loop、替代/竞争图、Fact vs Inference、可复制/不可复制部分。

### Compare Mode
比较 2–4 个产品时保持同一分析单位/市场口径，比较谁服务的 Job 更清楚、价值捕获更高效、利润引擎更健康、增长更自增强、替代风险更低。

## 10. Copyability Lens

最后分三层：
- `Copyable Mechanism`：收费、免费→付费、交付、定位、包装、渠道等可学习结构；
- `Context-dependent Advantage`：依赖品牌、市场、渠道、供应关系、规模；
- `Non-copyable / Dangerous to Copy`：网络密度、牌照、历史品牌、专有数据、资本规模、独家协议、既有分发。

不要把成功产品的表面功能当成成功原因。

## 11. Stop Rule

本 Skill 停止在“理解商业机器”层，不自动承担选品、完整市场进入决策、开发、供应商采购、广告执行、估值或法律/税务意见。用户若问“这个模式能否变成我的机会”，再交给机会筛选/产品战略 Skill。

## 12. Mandatory Final Summary

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

对于小商品，允许公司级收入、净利润、CAC 整项为 `UNKNOWN`；只要用户任务、产品机制、价值捕获、成本栈、渠道和重复购买逻辑解释清楚，拆解就成立。
