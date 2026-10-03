# Research & Design Audit v1.0

## 1. 上游完整吸收范围

本 Skill 不是从零发明，而是基于 `independent-store-product-opportunity v2.1` 全量迁移后重构。

已阅读并吸收：
- 主 `SKILL.md`；
- README / handoff / Research & Design Audit；
- 21 个 references：Research Contract、Discovery Engines、Signal Ledger、Candidate Unit、Quick Kill、Decision Evidence、Timing、Competition、Acquisition、Economics、Operator Fit、Trend→Scene→Product、Digital/Physical Modifier、Counterevidence、Minimum Validation、Scoring、Pre-Selection Intake、Business Objective & Time Horizon、Cost of Being Wrong、Test Priority / Portfolio；
- 全部 templates：Final Report、Candidate Pool、Critical Unknowns、Evidence Ledger、Opportunity Scorecard、Pre-Selection Intake、Signal Lineage、Test Priority、Trend Scene Corpus；
- Calibration Examples / Trend Scene Example。

## 2. 保留的核心方法

1. Discovery 与 Decision 分离；
2. 每次重新生成候选，不继承历史赢家；
3. Evidence Ledger 与 Signal Lineage 去重；
4. Quick Kill 先砍结构性差机会；
5. Critical Unknown / Evidence Value 决定研究优先级；
6. Opportunity Score 与 Evidence Confidence 分离；
7. Market Opportunity 与 Operator Fit 分离；
8. Top 3 强制 Counterevidence / Pre-mortem；
9. Cost-to-Learn 与 Cost-of-Being-Wrong 进入 Test Priority；
10. 无合格候选允许 NO PICK。

## 3. 针对闲鱼/小红书的结构重构

### 独立站原框架中被替换/扩展的部分
- `DTC Wedge` → `Platform Distribution Fit + Trust/Proof Fit + Transaction/Policy Path`；
- `CAC` → 平台内搜索/内容获客成本、内容生产成本、询盘沟通成本、必要付费流量；
- `Delivery Risk` → 数字交付一致性 + 退款/争议举证 + 隐私/IP + 平台政策变化；
- 一个 Market Score → **闲鱼和小红书分别评分**；
- `Trend→Scene→Product` → 降为 Content-to-Offer / Search-intent 等 Discovery Engine 之一。

## 4. 平台公开资料带来的设计约束

### 闲鱼
官方用户/卖家协议明确：平台提供关键词检索、筛选、收藏、商品/服务信息发布与交易能力；同时要求发布者拥有合法权利，并遵守禁止性信息、商品/服务范围和交易保障要求。因此 Skill 将闲鱼定义为偏搜索/明确需求/平台内成交的渠道，但任何虚拟产品都必须先做当期 `Policy Eligibility Gate`，不能用“别人也在卖”证明允许。

### 小红书
官方商业化与开放平台资料表明：小红书同时具备浏览/搜索种草、产品推广、线索与站内闭环转化能力；交易型小程序可提供商品购买和担保支付。官方商业规则同时明确限制规避平台监管的站外引流，并对部分虚拟服务、资质、知识产权与宣传内容设有限制。因此 Skill 把内容兴趣与付款证据分离，并把“合规转化路径”设为硬 Gate。

## 5. 新增的虚拟产品专用判断

1. Free-AI / Free-Content Substitution；
2. Proof Artifact 是否可视化；
3. Trust Education Length；
4. Support Minutes / Order；
5. Refund / Dispute Evidence；
6. IP / Copyright Ownership；
7. Personal-data / Privacy Risk；
8. Delivery Repeatability；
9. Platform Route Fragility；
10. Cross-platform fit 不得混分。

## 6. 设计目标

本 Skill 的目标不是找“最火的资料”，而是找：

> **在具体平台上存在真实任务和真钱信号、免费替代不充分、分发与信任结构成立、能合法成交、低成本验证且交付后仍有利润的虚拟产品商业假设。**
