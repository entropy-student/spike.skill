---
name: xianyu-xiaohongshu-virtual-product-opportunity
title: Xianyu & Xiaohongshu Virtual Product Opportunity（闲鱼/小红书虚拟产品选品决策系统）
description: 面向闲鱼与小红书的虚拟产品、数字服务、模板、报告、AI Workflow、微型工具与知识型产品机会发现、验证和优先级决策 Skill。核心不是找“热门资料”，而是从平台信号中筛出真实问题、真实付费、可分发、可建立信任、可稳定交付且合规的商业假设。
version: 1.0.0
language: zh-CN
---

# Xianyu & Xiaohongshu Virtual Product Opportunity

## 0. 任务边界

本 Skill 只解决：**闲鱼和小红书上，什么虚拟产品值得进入真实测试。**

候选不是“资料包/教程/模板”这种类目，而是：

> **Target User × Job/Problem × Trigger × Current Alternative × Failure × Mechanism × Deliverable × Price × Proof Artifact × Platform Wedge × Delivery Path**

最终只输出：
- 1 个 `PRIORITY TEST`；
- 最多 2 个 Backup；
- 推荐首测平台：`XIANYU_FIRST / XHS_FIRST / DUAL_TEST`；
- 可复核证据与 Signal Lineage；
- 最大 UNKNOWN / Kill Evidence；
- Minimum Validation。

允许 `NO PICK`。不负责实际发布、刷量、站外绕监管引流、账号自动化、违规规避、最终交付系统实现。

---

# 1. 强制原则

1. **Discovery ≠ Decision**：热帖、点赞、收藏、搜索结果、卖家数量只能产生候选，不能证明值得卖。
2. **Transaction > Intent > Attention**：真实付款 > 明确下单动作/有效询盘 > 搜索/收藏/点赞。
3. **双平台分开判断**：闲鱼成交证据不能直接证明小红书成立，反之亦然。
4. **Current Rules First**：每次正式 Run 都必须先确认当期平台规则、类目资格、交易/引流路径；观察到别人正在卖 ≠ 平台允许。
5. **Evidence before conclusion**：事实先进入 Evidence Ledger，再做综合判断。
6. **Signal Lineage**：同一卖家矩阵、同一热点、同一内容搬运链造成的多条信号不得重复计权。
7. **Score ≠ Confidence**：Opportunity Score 与 Evidence Confidence 分开。
8. **Market ≠ Operator**：市场机会与操盘者是否适合进入分开。
9. **Free substitute test**：免费 AI、免费模板、公开视频可完全替代时，默认降级或 KILL。
10. **Trust is part of product**：虚拟产品的样品、示例、证据、交付边界、退款边界和隐私说明属于 Offer 本体。
11. **Research serves decisions**：先补最可能改变结论的 Critical Unknown，不平均研究所有候选。
12. **Counterevidence required**：Top 3 必须独立做反方研究。
13. **No forced winner**：没有候选过门槛就 `NO PICK`。
14. **No built-in personal profile**：Skill 不写入任何特定用户历史项目、预算或偏好。

---

# 2. Pre-Selection Intake Gate

正式筛选前，只问当前对话缺失、且会显著改变结果的信息，默认最多 6 个问题：
1. 平台范围：闲鱼 / 小红书 / 双平台；
2. 允许产品形态：下载型 / 模板工具 / 个性化报告 / AI Workflow / 微型 SaaS / 服务产品化 / OPEN；
3. 商业目标：`CASH_FLOW / LOW_MAINTENANCE / BRAND_ASSET / SCALABLE_DIGITAL / LEARNING_TEST`；
4. 测试预算、最大可接受损失、希望多久拿到第一轮证据；
5. 硬约束：是否接受人工服务、售后、退款、敏感数据、账号资质或企业主体要求；
6. 本轮可利用的内容、技术、专业知识、账号、受众或交付能力。

未知项记为 `UNKNOWN`，不得偷偷用历史画像补全。

---

# 3. Current Rules Snapshot｜动态平台规则快照

在生成最终 shortlist 前必须检查当期官方规则：
- 产品/服务是否允许发布或推广；
- 当前账号主体/类目是否具备交易资格；
- 是否允许当前交付方式；
- 是否允许当前引流/联系路径；
- 是否涉及资质、知识产权、隐私、广告 claim、未成年人、金融、医疗、考试、账号交易等限制。

### 硬规则
- `POLICY_PASS`：可继续；
- `POLICY_CONDITIONAL`：说明缺什么资质/路径后 HOLD；
- `POLICY_UNKNOWN`：不得因“别人也在卖”推定允许，默认 HOLD；
- `POLICY_FAIL`：KILL。

禁止把规避审核、暗语引流、绕平台监管作为商业模型的一部分。

详见 `references/06_PLATFORM_POLICY_GATE.md`。

---

# 4. Candidate Unit｜正确候选粒度

候选格式：

> **Target User × Job × Trigger × Alternative × Failure × Mechanism × Deliverable × Price × Proof × Platform Wedge × Delivery**

例如：
- 太宽：求职资料；
- 太窄：某一份 PDF；
- 合理：准备第一次结构化面试的应届生 × 不知道回答是否具体 × 免费题库只有标准答案 × 基于岗位 JD 的逐题改写与评分 × 个性化面试答案诊断包 × ¥X × 前后对比样例 × 闲鱼关键词搜索/小红书求职内容入口 × 自动生成+有限人工复核。

候选必须描述“为什么现在会买”，而不是只描述文件内容。

---

# 5. Discovery Loop｜广泛遍历，不直接下结论

无垂直约束时：
- 先生成 **30–50 个 raw ideas**；
- 覆盖至少 6 个 Problem/Desire Cluster；
- 覆盖至少 5 种 Product Form；
- 双平台任务必须同时扫描闲鱼与小红书；
- 去重后形成 15–25 个标准 Candidate Units。

默认八个 Discovery Engines：
1. **Search-intent-first**：高意图关键词 → 搜索结果 → 买家语言 → 产品假设；
2. **Problem / Question-first**：重复困惑、求助、抱怨 → workaround → 失败成本；
3. **Transaction-structure-first**：持续卖家/价格带/商品结构 → 真实付费方向 → 结构缺口；
4. **Review / Dispute-gap-first**：差评、退款、投诉、售后问题 → Must Keep / Must Fix；
5. **Service-to-Productization**：成熟人工服务 → 重复步骤 → 可标准化交付；
6. **Content-to-Offer**：高频内容问题/收藏型主题 → 可执行结果 → 产品化；
7. **Workflow / Template-gap**：用户反复手工整理、填写、分析、生成 → 模板/自动化工具；
8. **Capability / Adjacency-first**：从本次明确提供的能力找相邻机会，只能生成候选，不能证明需求。

若某引擎不适用，必须记录 skip reason。

---

# 6. Signal Ledger & Lineage

每条信号至少记录：
`candidate_id / platform / signal_type / date_window / source / lineage_group / fact / supports_or_refutes / strength / confidence`。

Signal Type：
- Problem
- Attention
- Search Intent
- Purchase Intent
- Transaction
- Competition
- Trust
- Economics
- Delivery
- Policy

### 强度默认顺序
`真实平台内付款/订单 > 已验证服务付费 > 明确成交意图 > 有效询盘 > 搜索行为 > 收藏/点赞/曝光`。

典型误读：
- 小红书点赞/收藏高 ≠ 愿意付费；
- 评论“求资料” ≠ 已付款；
- 闲鱼卖家多 ≠ 买家多；
- 低价大量同款可能是商品化，不是机会；
- 同一卖家多个账号/多条商品 ≠ 多个独立交易来源；
- 热点词上涨可能来自事件，不等于持久需求。

---

# 7. Platform Eligibility + Quick Kill

在深研前先砍结构性差的候选：
- 当前规则明确不允许或需要无法满足的资质；
- 依赖盗版、破解、共享账号、代充、考试作弊、虚假认证、刷量、数据窃取、恶意爬取/绕过安全等；
- 核心价值只是“信息搬运”，公开搜索或免费 AI 可完整替代；
- 无法证明版权/授权；
- 只有 Attention，无 Problem/Payment 路径；
- 价格极低而售前售后人工很重；
- 交付结果不可复现或高度依赖无限人工；
- 高退款/争议/隐私风险无法控制；
- 需要站外违规引流才能成交；
- 单一热点/单一博主造成短峰；
- 平台上完全同质化、价格压缩严重且无差异化 Proof。

剩余 5–8 个进入深研。

---

# 8. Critical Unknown / Evidence Value

每个 shortlist 列 3–5 个 Critical Unknown：

> `Decision Impact × Uncertainty ÷ Cost-to-Learn`

优先补：
- 会不会付这个价格？
- 这个平台上的需求是购买需求还是内容兴趣？
- 能否用合规路径完成交易？
- 用户为什么不直接用免费 AI/免费模板？
- 售前沟通/人工交付会不会吃掉利润？
- 哪种 Proof 才足以形成信任？

先补最便宜、最可能推翻结论的证据。

---

# 9. Decision Evidence Stack｜E1–E10

### E1 Job / Problem Reality
严重度、频率、触发时刻、Functional/Emotional/Social Job、现有 workaround 及其时间/金钱/情绪成本。

### E2 Payment Reality
真实订单、同类付费服务、长期卖家交易、明确购买动作；口头 WTP/评论求资料只能作弱证据。

### E3 Reachable Platform Demand
不是泛市场 TAM，而是该平台上可触达的关键词、内容主题、人群、搜索入口和买家问题是否足够深。

### E4 Timing / Persistence
看长期/中期/近期窗口、季节性、事件驱动、考试季/求职季等周期；标记 `EMERGING / GROWING / STABLE / MATURE / FADING / FAD`。

### E5 Competition / Saturation
卖家/内容集中度、同款密度、价格压缩、新进入者可见度、信任壁垒、内容疲劳、替代方案、未满足组合。

### E6 Product Thesis / Free-Substitute Resistance
输出 `Must Keep / Must Fix / Must Prove`；解释用户为什么不直接使用免费 AI、B站/小红书免费教程、网盘资料、通用模板或人工服务。

### E7 Platform Distribution Fit
分别判断闲鱼和小红书：搜索意图、推荐/内容适配、关键词可表达性、3–10 秒理解度、Hook 空间、平台原生转化路径。

### E8 Trust / Proof Fit
是否能提供样例、前后对比、演示、可验证结果、透明交付边界、隐私说明、退款边界；信任教育是否过长。

### E9 Economics
至少 Base / Bad / Stress：
`Revenue - Platform/Payment - AI/API/Storage - Human Delivery - Refund/Dispute - Content/Listing Maintenance - Paid Acquisition(if any) = Contribution`。
额外计算：Support Minutes / Order、Break-even labor time、退款率 Stress、低价产品的人效上限。

### E10 Delivery / Compliance / Dispute Risk
交付一致性、自动化程度、版权、隐私、敏感数据、售后、退款、争议举证、账号/类目政策变化风险。

---

# 10. 双平台 Modifier

## 闲鱼
更重视：
- 明确搜索意图与即时需求；
- 标题/关键词能否直接表达结果；
- 同类成交/价格带；
- 询盘到付款的沟通成本；
- 低客单下的人效；
- 描述真实性、交付证明与争议风险；
- 是否适合平台内直接成交。

详见 `references/09_XIANYU_MODIFIER.md`。

## 小红书
更重视：
- 内容问题是否天然可种草；
- 搜索 + 推荐是否都能承接；
- Proof 是否视觉化；
- 是否有持续内容空间而非一次热点；
- 内容到产品的逻辑是否连续；
- 站内店铺/交易型小程序/合法线索路径是否可用；
- 平台审核、广告 claim、站外引流限制。

详见 `references/10_XIAOHONGSHU_MODIFIER.md`。

---

# 11. Platform Opportunity Score｜每个平台分别 100 分

同一个候选必须分别输出 `Xianyu Score` 与 `XHS Score`，不能混成一个总分。

| 维度 | 权重 |
|---|---:|
| Job / Problem Strength | 14 |
| Payment Reality | 14 |
| Reachable Platform Demand | 10 |
| Timing / Persistence | 7 |
| Competition Gap | 10 |
| Product Thesis / Free-Substitute Resistance | 10 |
| Platform Distribution Fit | 12 |
| Trust / Proof Fit | 8 |
| Economics | 10 |
| Delivery / Compliance / Dispute Risk | 5 |
| **Total** | **100** |

### Floor Rules
以下任一成立，不得 `PRIORITY TEST`：
- Policy Gate 非 PASS；
- Problem <3/5；
- Payment <3/5；
- Platform Distribution <3/5；
- Economics <3/5；
- Problem / Payment / Platform Path / Economics 中任一 Evidence Confidence = U。

---

# 12. Evidence Confidence

每个关键维度标：
- `A`：近期、直接、目标平台/目标市场、交易或第一方证据；
- `B`：多个独立强代理一致；
- `C`：定性或间接代理；
- `U`：Unknown。

Critical Confidence 看最弱关键项，不取平均。

---

# 13. Operator Fit / Objective / Horizon / Failure Cost

这些只决定**先测谁**，不得改写市场事实。

### Operator Fit /25
- Platform/account readiness 5
- Domain insight 5
- Content/listing creative ability 5
- Technical/delivery automation 5
- Time/support/compliance capacity 5

### Business Objective
`CASH_FLOW / LOW_MAINTENANCE / BRAND_ASSET / SCALABLE_DIGITAL / LEARNING_TEST`

### Time Horizon
`0–3m / 3–12m / 1–3y`

### Cost of Being Wrong
检查现金、时间、账号风险、退款/声誉、隐私/IP/合规、机会成本；标 `VERY LOW / LOW / MEDIUM / HIGH / VERY HIGH`。

### Cost-to-Learn
验证成本越低、能越快获得真实付款证据，优先级越高，但不能覆盖市场硬伤。

---

# 14. Counterevidence / Pre-mortem

Top 3 强制回答：
1. 哪些信号可能来自同一热点/同一卖家矩阵？
2. 内容兴趣为什么可能被误判成购买需求？
3. 交易证据为什么可能只是极低价或灰产？
4. 免费 AI / 免费教程 / 通用模板为什么足以替代？
5. 为什么用户不会信任一个新账号/新卖家？
6. 最常见退款、投诉、争议是什么？
7. 平台规则变化会不会直接摧毁成交路径？
8. 售前沟通和人工交付翻倍后是否仍盈利？
9. 90 天后什么变化会让机会失效？
10. 哪条新证据会直接 KILL？

---

# 15. Minimum Validation

研究终点必须落到真实行为测试。

### 闲鱼
- 在规则允许范围内测试清晰、非重复刷屏的 Offer；
- 观察：合格询盘、关键问题、价格异议、付款、退款/争议；
- 强度：`付款 > 明确下单/有效议价 > 高质量询盘 > 收藏/曝光`。

### 小红书
- 测试 3–5 个不同问题/Proof/Hook 的内容角度；
- 使用当前规则允许的站内交易、商品、交易型小程序或合法线索路径；
- 观察：原生订单/商品动作、合格私信、产品点击、搜索进入、收藏/点赞；
- 强度：`付款/原生订单 > 明确产品动作/合格私信 > 搜索点击 > 收藏 > 点赞/曝光`。

禁止用点赞量替代付款验证。

---

# 16. Final Test Priority

最终至少并列展示：
- Xianyu Opportunity Score；
- XHS Opportunity Score；
- Evidence Confidence；
- Policy Status；
- Operator Fit；
- Business Objective Fit；
- Time Horizon Fit；
- Cost-to-Learn；
- Cost-of-Being-Wrong；
- Biggest Unknown；
- Kill Evidence。

Decision 允许：
`PRIORITY TEST / LOW-COST TEST / HOLD / PLATFORM_MISMATCH / KILL / NO PICK`。

平台路由：
- `XIANYU_FIRST`：搜索/即时购买意图强，内容教育价值较低；
- `XHS_FIRST`：需要内容教育、信任和视觉 Proof 才能成交；
- `DUAL_TEST`：两端证据均强，但必须分别验证；
- `PLATFORM_MISMATCH`：产品本身可能成立，但不适合该平台。

---

# 17. 输出格式

A. Pre-Selection Intake + Temporary Research Contract  
B. Current Rules Snapshot  
C. Discovery Map（八引擎覆盖情况）  
D. Raw Candidate Universe（30–50）  
E. Normalized Candidate Pool（15–25）  
F. Policy Gate + Quick Kill  
G. Shortlist（5–8）+ Critical Unknowns  
H. Evidence Cards（E1–E10 + Lineage + Counterevidence）  
I. Xianyu / XHS 双平台 Score + Confidence  
J. Test Priority  
K. Final Decision：1 Priority Test + 最多2 Backup + Platform Route + Minimum Validation；无合格候选则 NO PICK。

---

# 18. 禁止行为

- 禁止“闲鱼卖家多 = 有需求”；
- 禁止“小红书收藏高 = 会付钱”；
- 禁止把评论求资料当真实付款；
- 禁止把同一卖家/矩阵号当独立市场证据；
- 禁止拿一个平台的数据证明另一个平台；
- 禁止把观察到的违规卖家当作规则允许证据；
- 禁止用灰产、盗版、破解、账号交易、考试作弊、刷量、隐私数据作为机会；
- 禁止默认站外引流或暗语规避平台监管；
- 禁止 Generic PDF / Prompt Bundle 因制作成本低而自动加分；
- 禁止忽略售前沟通与人工交付成本；
- 禁止用总分掩盖 Payment / Policy / Economics 致命短板；
- 禁止伪造销量、成交、搜索量、评论、收入或平台规则。

数据不足标 `UNKNOWN`；证据冲突标 `CONFLICTED`；结构好但缺关键证据标 `HOLD`。

---

# 19. 最终原则

> **适合闲鱼/小红书的虚拟产品，不是“资料看起来很多人要”，而是某个具体人群在具体时刻有真实任务，已经用钱或高成本 workaround 表达需求；产品能提供免费内容/免费 AI 无法轻易替代的可验证结果；平台能够合规触达和成交；信任、交付、退款与人工成本之后仍然成立。**
