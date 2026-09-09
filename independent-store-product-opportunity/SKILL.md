---
name: independent-store-product-opportunity
title: Independent Store Product Opportunity（独立站选品决策系统）
description: 面向独立站 / DTC 的通用产品机会发现、验证与优先级决策 Skill，支持实物、数字产品、个性化报告、AI Workflow 与微型 SaaS。核心不是找“爆款”，而是从大量弱信号中筛出最值得用真实用户、真实流量和真实付款继续测试的商业假设。
version: 2.1.0
language: zh-CN
---

# Independent Store Product Opportunity（独立站选品决策系统）

## 0. 任务边界

选品不是挑 SKU，而是选择一个商业假设：

> **Who × Job/Problem × Trigger × Current Alternative × Mechanism × Product Form × Price Hypothesis × Acquisition Wedge**

最终只输出：
- 1 个 `PRIORITY TEST`；
- 最多 2 个备选；
- 可复核证据；
- 最大 UNKNOWN / Kill evidence；
- Minimum Validation。

不负责最终供应商谈判、建站或广告执行。完成后：实物交给 sourcing；虚拟交给 delivery/trust/privacy；全部交给 `acquisition-growth-radar` 做真实行为验证。

---

# 1. 强制原则

1. **Discovery ≠ Decision**：趋势、社媒出镜、榜单只能产生候选，不能单独决定产品。
2. **Evidence before conclusion**：事实先进入 Evidence Ledger，再评分。
3. **Signal lineage**：同一底层事件造成的多平台上涨不得重复算独立证据。
4. **Market-specific**：中国证据不能直接证明美国付款；Marketplace 成交不能直接证明 DTC。
5. **Score ≠ Confidence**：Market Opportunity 与 Evidence Confidence 分开。
6. **Market ≠ Operator**：市场好坏与本次操盘者是否适合进入分开。
7. **Counterevidence required**：Top 3 必须独立做反证 / pre-mortem。
8. **Research serves decisions**：先补最可能改变结论的 Critical Unknown，不平均研究所有候选。
9. **No forced winner**：没有候选过门槛就输出 `NO PICK`。
10. **No built-in personal profile**：Skill 本体不得内置任何特定用户的项目、城市、预算、技能、偏好或历史胜出产品。

---

# 2. Pre-Selection Intake Gate｜正式筛选前先问用户

正式生成候选前，先检查当前对话是否已知以下信息。**只问缺失项，不重复问，默认最多 6 个问题。**

1. 目标市场 / 语言；
2. 允许的产品形态：实物 / 数字 / SaaS / OPEN；
3. 商业目标：`CASH_FLOW / LIFESTYLE / BRAND_ASSET / SCALABLE_SOFTWARE / LEARNING_TEST`；
4. 首轮测试预算 / 最大可接受损失 / 希望多久拿到第一轮证据；
5. 硬约束与风险容忍：库存、物流、售后、退款、强监管等；
6. 本轮可利用的受众、内容、技术、供应链、专业知识或获客优势。

### 问询纪律
- 不收集与决策无关的个人身份信息；
- 用户说“你决定/无偏好”时记为 `OPEN`；
- 用户不提供关键条件时记为 `UNKNOWN`，不能偷偷用历史画像补；
- 用户回答只属于本次 run，不写回通用 Skill / README / examples / references。

然后生成临时 Research Contract：
`target_market / product_forms / business_objective / test_budget / max_loss / time_horizon / hard_constraints / acquisition_assets / operator_assets / unknowns`。

详见 `references/01_RESEARCH_CONTRACT.md`、`references/18_PRE_SELECTION_INTAKE.md`、`templates/pre_selection_intake.md`。

---

# 3. Candidate Unit｜候选粒度

候选不是“宠物用品”也不是某个颜色 SKU，而是：

> **Target User × Job × Trigger × Alternative × Failure × Mechanism × Product Form × Price × Channel Wedge**

例：
- 太宽：Pilates 用品；
- 太窄：米白色中筒防滑袜；
- 合理：Reformer Pilates 用户 × 训练打滑且重视穿搭 × 普通防滑袜闷/掉胶/不好看 × 高抓地+透气+风格化 × Premium Grip Sock System × $24–36 × Creator-led。

数字产品例：
- 正在考虑转行的职场人 × 不知道技能是否可迁移 × 免费建议过于泛化 × 结构化差距分析 × 一次性 Career Decision Report × $19 × Search/Creator-led。

详见 `references/04_CANDIDATE_UNIT_JTBD.md`。

---

# 4. Discovery Loop｜先广泛发现

无垂直约束：生成 15–25 个候选，至少 5 个 Problem/Desire Cluster、3 种 Product Form。
有垂直约束：生成 10–15 个候选，至少 4 个 Situation / Mechanism。

六个 Discovery Engines：
1. **Behavior / Trend-first**：行为/生活方式 → 场景 → 高频工具 → 痛点 → exact-product 复核；
2. **Problem / Workaround-first**：重复问题 → 现有凑合方案 → 失败成本 → 新机制；
3. **Review-gap-first**：已有交易 → 1–3 星差评/退款 → Must Keep / Must Fix → 未服务细分；
4. **Transaction-structure-first**：持续花钱的类目 → 价格带/集中度/新品渗透/评论门槛 → 结构空缺；
5. **Service-to-Productization**：成熟人工服务 → 重复交付 → 可自动化核心 → 自助产品；
6. **Capability / Adjacency-first**：从本次明确提供的能力/资产找相邻需求，仅用于生成候选，不能证明市场。

Trend→Scene→Product 只是 #1 的一种路径，不是整个系统。

详见 `references/02_DISCOVERY_ENGINES.md`、`references/12_TREND_SCENE_PRODUCT_LOOP.md`。

---

# 5. Signal Ledger & Quick Kill

每条信号记录：
`signal_type / market / date_window / source / lineage_group / fact / supports_or_refutes / strength / confidence`。

常见误读：
- Google Trends ↑ ≠ 销量；
- TikTok 热度 ≠ DTC 利润；
- Amazon 销量 ≠ 独立站成立；
- 评论多 ≠ 当前增长；
- 低竞争 ≠ 有机会；
- Survey WTP ≠ 真实付款。

Quick Kill 优先砍：
- 只能靠夸大/违法 claim；
- 强监管/责任风险明显不匹配；
- 物流/退货/售后结构性吃掉利润；
- 完全商品化且无 DTC wedge；
- 只有 Attention，无 Problem/Payment 路径；
- 单一事件造成短峰；
- 价格无法容纳合理 CAC；
- 免费 AI 能完全替代数字产品；
- 交付不可复现；
- 时间窗口已错过。

剩余 4–7 个深挖。

详见 `references/03_SIGNAL_LEDGER_AND_LINEAGE.md`、`references/05_QUICK_KILL.md`。

---

# 6. Critical Unknown｜优先补最有信息价值的证据

每个 shortlist 列 3–5 个 Critical Unknown，并按以下定性排序：

> `Decision Impact × Uncertainty ÷ Cost-to-Learn`

例：
- 用户会不会付 $19 → 先测真实价格；
- Amazon 卖得多但不知道为什么 DTC 买 → 先测 DTC wedge；
- 已知需求强但不知道 3PL 成本 → 先补物流经济性。

不要先补低价值数据。

详见 `references/16_MINIMUM_VALIDATION_AND_EVI.md`。

---

# 7. Decision Evidence Stack｜9 层深研

对 4–7 个 shortlist 依次检查：

### E1 Job / Problem Reality
Severity、Frequency、Trigger、Functional/Emotional/Social job、现有 workaround 与其金钱/时间/情绪成本。

### E2 Payment Reality
强度优先：真实交易/预售 > 人工服务付费 > 多卖家长期交易 > 高商业意图 > 口头 WTP。

### E3 Reachable Market Depth
不是 TAM；看实际可触达细分、搜索/社区/creator 生态、可先占领的 wedge、1–3 年扩展空间。

### E4 Timing / Persistence
看 5y / 24m / 12m / 90d、季节性、broad vs exact product、相对品类增长、事件/广告驱动、lead/lag；标记 Emerging / Growing / Stable / Mature / Fading / Fad。

### E5 Competition / Market Structure
头部集中、新品渗透、Review moat、价格压缩、Clone density、广告密度、替代方案、切换成本、未满足属性组合。

### E6 Product Thesis / DTC Wedge
输出 Must Keep / Must Fix / Must Prove；解释为什么不是 Amazon / Temu / Etsy / ChatGPT / 免费方案；寻找 Bundle / System / Personalization / Identity / Trust / Exclusive Design。

### E7 Acquisition Fit
判断 Search / Discovery / Creator / Community / Mixed；要求 3–10 秒可理解、至少 5 个独立 Hook、约 50 条内容空间、可视化 Proof、Search intent / Creator density / Creative fatigue / Policy risk。

### E8 Economics
至少做 Base / Bad / Stress：
`Revenue - COGS/Delivery - Fulfillment - Payment - Refund/Chargeback - Commission - CAC = First-order Contribution`。
再看 break-even CAC、AOV/bundle、repeat/LTV、payback、实物现金周期，以及 CAC×2 是否还能活。

### E9 Delivery / Risk
实物：质量、破损、尺码、液体/电池、认证、MOQ、现金周期；
数字：AI/API 成本、隐私、版权、退款/chargeback、输出一致性、人工依赖。

详见 `references/06_DECISION_EVIDENCE_STACK.md` 及对应专题 reference。

---

# 8. Evidence Confidence & Market Opportunity

关键维度标 `A / B / C / U`：
- A：直接、近期、目标市场、交易/第一方；
- B：独立强代理、多来源一致；
- C：定性/间接；
- U：Unknown。

Problem / Payment / Acquisition / Economics 任一为 U，默认不能 `PRIORITY TEST`。

Market Opportunity 100 分：
- Problem 15
- Payment 12
- Reachable Market 8
- Timing 8
- Competition Gap 10
- Acquisition Fit 14
- DTC Wedge 10
- Economics 15
- Delivery/Risk 8

Problem / Payment / Acquisition / Economics 任一 <3/5，最多 HOLD/TEST。

**Market Opportunity 与 Evidence Confidence 分开展示。**

详见 `references/17_SCORING_AND_DECISION.md`、`templates/opportunity_scorecard.csv`。

---

# 9. Operator Fit、Business Objective、Time Horizon、Failure Cost

这些只决定**先测谁**，不得改写市场事实。

### Operator Fit /25
Audience access / Domain insight / Creative advantage / Supply or technical delivery / Capital-time-regulatory capacity，各 5 分。

### Business Objective
`CASH_FLOW / LIFESTYLE / BRAND_ASSET / SCALABLE_SOFTWARE / LEARNING_TEST`。

### Time Horizon
`0–6m / 6–24m / 2–5y`。短期趋势品不能自动当长期品牌机会；长期稳定品也不能因缺少爆发曲线被误杀。

### Cost of Being Wrong
单独评 `VERY LOW / LOW / MEDIUM / HIGH / VERY HIGH`：现金、时间、库存/营运资金、退款/声誉、合规/法律、机会成本。

市场机会接近时，优先验证 `Cost-to-Learn` 更低且 `Cost-of-Being-Wrong` 更低者。

详见 `references/11_OPERATOR_FIT.md`、`references/19_BUSINESS_OBJECTIVE_TIME_HORIZON.md`、`references/20_COST_OF_BEING_WRONG.md`。

---

# 10. Counterevidence / Pre-mortem

Top 3 必须回答：
1. 哪个信号可能同源假繁荣？
2. 需求为什么可能高估？
3. 竞争为什么可能低估？
4. 更便宜/简单替代是什么？
5. 为什么独立站会输给平台？
6. 最常见退款/差评是什么？
7. Hook 是否已疲劳？
8. CAC×2 会怎样？
9. 90 天后什么变化会让机会失效？
10. 哪条新证据会直接 KILL？

详见 `references/15_COUNTEREVIDENCE_PREMORTEM.md`。

---

# 11. Final Test Priority｜不要制造万能总分

最终至少并列展示：
- Market Opportunity；
- Evidence Confidence；
- Operator Fit；
- Business Objective fit；
- Time Horizon fit；
- Cost-to-Learn；
- Cost-of-Being-Wrong。

然后给：
- 1 个 `PRIORITY TEST`；
- 最多 2 个 Backup；
- Biggest Unknown；
- Kill Evidence；
- Minimum Validation。

允许：`PRIORITY TEST / LOW-COST TEST / HOLD / PARTNER / KILL / NO PICK`。

### Optional Portfolio Mode
只有用户明确希望并行测试或候选非常接近时启用。每个候选必须有独立假设、指标、预算上限和 Kill 条件，并保留 reserve。

详见 `references/21_TEST_PRIORITY_PORTFOLIO.md`、`templates/test_priority_scorecard.csv`。

---

# 12. Minimum Validation

按最大 UNKNOWN 设计最小真实验证：
- Problem → interviews / VOC；
- Message → 3–5 hooks；
- WTP → preorder / deposit / real-price fake door；
- Utility → prototype / concierge；
- DTC wedge → landing vs marketplace alternative；
- CAC → 小额真实流量；
- Fulfillment → 样品 / 物流测试。

行为证据优先级：
`payment > deposit > committed application/cart > click > stated preference`。

---

# 13. 输出格式

A. Pre-Selection Intake / Temporary Research Contract  
B. Discovery Map  
C. Candidate Pool  
D. Quick Kill  
E. Shortlist + Critical Unknowns  
F. Evidence Cards（E1–E9 + Lineage + Counterevidence）  
G. Market Opportunity + Evidence Confidence  
H. Test Priority（Operator / Objective / Horizon / Learning Cost / Failure Cost）  
I. Final Decision（1 主 + ≤2 备选 + Unknown + Kill + Minimum Validation）

使用 `templates/FINAL_REPORT_TEMPLATE.md`。

---

# 14. 工具与证据角色

### Discovery / Timing
Google Trends、Pinterest Trends/Predicts、TikTok Creative Center、Etsy Marketplace Insights、YouTube、小红书、B站、Reddit、Kickstarter/Indiegogo。

### Commerce / Payment
Amazon、Etsy、TikTok Shop、App marketplace、Gumroad-like stores、人工服务价格、独立站价格/评论/活跃广告、preorder/crowdfunding/real checkout。

### Competition
Google Shopping、Marketplace、Meta Ad Library、TikTok Creative Center/TikTok One、Similarweb、reverse image、competitor review/ad history。

### VOC
1–3 星 reviews、Reddit/论坛、评论区、第一方客服/退货原因。

工具只是证据来源，不自动替代判断。

---

# 15. 禁止行为

- 禁止“Top10 爆款榜 = 选品”；
- 禁止单条 Trends / 社媒出镜决定产品；
- 禁止同源多平台信号重复加分；
- 禁止把 Amazon 成交直接外推 DTC；
- 禁止把低竞争自动视为好机会；
- 禁止经济性忽略 CAC / refund / fulfillment；
- 禁止平均分掩盖 Problem / Payment / Acquisition / Economics 致命短板；
- 禁止跨国家、渠道、商业模式偷换证据；
- 禁止内置或偷偷使用任何特定用户历史画像；
- 禁止把 Market Opportunity、Operator Fit、Failure Cost 压成万能总分；
- 禁止强行选冠军；
- 禁止伪造搜索量、销量、广告、利润、评论或趋势。

数据不足：`UNKNOWN`；证据冲突：`CONFLICTED`；结构好但缺证：`HOLD`。

---

# 16. 最终原则

> **真正的好选品，不是“正在涨的商品”，而是一个真实任务正在变强或长期存在、用户已经用金钱或高成本 workaround 表达需求、市场仍有可进入的结构缺口、独立站能形成购买理由，并且获客与交付后仍有利润的商业假设。最终“先测哪个”，再由本次用户明确提供的目标、资源、时间窗与失败成本决定。**
