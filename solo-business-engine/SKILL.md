---
name: solo-business-engine
version: 0.4.0-business-model-candidate
language: zh-CN
title: Solo Business Engine｜个人商业机会发现与经营闭环
description: 独立发现机会、识别真实付款人、验证可达与胜出路径、具体 Offer 和渠道、付费成交、交付经济性和长期资产化。适用于个人/极小团队从零获客到可重复经营。既有 acquisition-growth-radar 仅作为可审子模块，不得预设其结论。
status: MODEL_ARCHITECTURE_REVIEWED_NOT_REAL_MARKET_VALIDATED
---

# 0. 最终目标
让 Owner 在可承受的资金/工作时间内**持续发现、验证、建立和经营可盈利项目，并逐步使获客渠道、价值交付与经营资产可复制，降低每单位真实利润对 Owner 时间的依赖**。不把搜索结果、阅读量、线索数、口头 WTP、试用报名或第一单冒充 PMF/可放大获利。

## 0.1 十项不可违背
1. 研究的候选≠市场机会真实；竞争者盈利≠本人的 Offer 可卖；第一单≠可重复；收款≠净利润。
2. 证据记录 `source_url/source_date/observed_at/original_claim/evidence_type/distance/independence/contra/limitation`；同源传播只算一条事件。
3. 永远列出使用者、受益人、触发者、影响者、决策者、付款人；无法对应时 UNKNOWN。
4. 对每个方向必须回答 **Why This Buyer / Why Now / Why Pay / Why Us / Why This Channel / Why Sustainable**。
5. 机会可来自减少痛苦、履行任务，也可来自礼物、情绪、身份、审美或全新体验；两类分开验证。
6. 默认无长期自动订阅；真实需求周期决定一次性/次数/订阅。一次性产品的持续经营可以来自连续新增客户，不强制相同用户复购。
7. 免费和人工版都不是必要步骤；按可信验证、履约可能性与损失上限选择 MVP、样例、预售、付费试点或模拟。
8. 任何对外收益、功能、安全、成本节省声明不得超越实际证据；不伪造案例、顾客、销售额或满意度。
9. 无风险审查不做陌生人规模群发、平台限制规避、个人数据抓取、不适当的预售；法规/平台政策按目标地区核验。
10. AI 负责信息收集/归类/证据审查/方案草拟；实名触达、付费、承诺、合规、交付验收必须以真实事件为准。缺失输出 `BLOCKED_BY_REAL_INPUT`。

# 1. 六种运行模式
- `DISCOVER`：方向未知。至少扫描 2 种相互独立的需求机制 + 2 类来源，**探索性产出最多 6 张候选卡**，有付费证据的与新需求创造分池；推荐 1 个最便宜的下一实验而非盲选 Top 1。
- `FIRST_MONEY`：一个客户/触发/任务/报价的组合已清楚但未收款。主指标是**合格付款承诺/真实净收款**；产出 1 个渠道-人群-Offer 的首钱试验及详尽买家触达路径。
- `OPERATE`：已有订单。首先检查能否按承诺交付、反悔/退款、实际现金贡献及 Owner 人工时数，随后才评估可重复获客和自动化。
- `PORTFOLIO`：几个并行机会，先核对不可逆损失、已证事实、商业模式结构、下一步信息价值；默认一次只推进一个核心付费实验，可持续维护的既有订单不得牺牲。
- `MODEL_DESIGN`：方向初步成立或多种盈利模式可选时，比较一次性、项目、标准化服务、许可/数字品、订阅、使用量、分销等，必须给出更优下一实验及反例；不凭主观喜好强制选 SaaS。
- `PRODUCTIZE`：发现重复需求/重复交付，定位可标准化模块、异常、质量控制、自动化收益及渠道资产，按可逆试验逐步降低 Owner 时耗。

# 2. 单人经营约束与起步参数
读取 `templates/owner_profile.md`。已知：**现阶段用户愿将约 70–80% 工作时间集中在市场研究、获客、销售与付费验证；先以 75/25 作为分配假设，按订单履约和实测结果调整。** 具体每周小时数、现金风险上限、实际经营地点、语言、交付负担 UNKNOWN，不得自填。没有预算值时，优先以现金零/低成本的研究及可逆的验证方案继续；达到必须付费或签约的节点时只问会改变结论的一个问题。

# 3. 首要决策对象：六问卡（最小业务假设）
```
Buyer (who pays/approves):
Trigger (why now):
Desired progress (functional/emotional/social job):
Alternative + already spent (cash, time, risk):
Why us / switching path:
Reachable route / acquisition unit:
Offer (result, scope, price, delivery, warranty):
Owner downside / fulfillment load / payback:
Strongest supporting source and strongest contradiction:
```
若付款人、进入路径、竞争替代、可交付范围等关键项未知，不进行长周期开发。产品化/可复制路径也必须至少给出可检验假设；未知时只允许低成本验证，不以“未来肯定能自动化”作决策。需要探索时仍可 `HOLD/TEST`，不是强制直接 KILL。

# 4. 交易机会与买家入口
先看 **Money Trails**：公开采购/招标/付费外包、替代品付费、明确询价、已采购待替换、已在组织内指派人工任务。然后搜索 **Desire Trails**：购买时刻、身份礼物/体验、愿意排队/预订/购买的文化场景。不得以搜索量/差评/招聘岗位单独认定现金预算。`references/02_opportunity_framework.md` / `03_buyer_money_trails.md` 给出分层和核对。

## 4.0 商业模式与可产品化前置审查（v0.4 必检）
**不能只验证有人愿付钱。** 在任何候选进入大规模获客/长期研发前，最少写清：
- `VALUE`: 客户实际买的结果、谁付款、在哪个时机；`CAPTURE`: 如何收费（一次/项目/固定范围服务/许可/使用量/订阅/交易佣金等），付款是否与价值交付频率匹配；
- `DELIVERY`: 工作可以分成稳定核心和变动模块吗？输入、交付、验收和例外处理能否界定？
- `DISTRIBUTION`: 是否能重复找到新客户？能否积累自有或可迁移的流量、信誉、客户允许使用的关系资产？平台依赖与复购机制如何？
- `ECONOMICS`: 单次净现金贡献、服务/售后/退款、客户获取现金成本、Owner 总工时以及未来规模上升时的边际变化；
- `DEFENSIBILITY`: 竞争者优势、切换阻力及我们可证的差异化；`RISK`: 法务、数据、库存、维护、单平台、买家集中、个人过劳。
给 `BUSINESS_MODEL_FIT = TEST / HOLD / REJECT / INCONCLUSIVE` 和下一项最高信息价值实验；不设全行业统一数字分数或准入分值。详见 `references/10_business_model_architecture.md` 与 `11_productization_automation.md`。

**明确反例**：一单净收款高但需要每次 30 小时独立定制，不可据此推荐为长期主业；也不得把可定制的高客单业务简单标为失败，只能要求其客单、能力瓶颈、利润/时、授权/转包风险可证明。一次性礼品如新客户源可持续也成立，不强制同一买家续订。

## 4.1 公开线索时效与状态（v0.3 必检）
- 每条公开需求同时记录 `published_date, observed_at, page_state, buyer_purchase_authority, listing_budget_type, qualification, allowed_contact_route, eligibility, independent_event_id`。
- 浏览器看到帖子只算 `PUBLIC_LISTING_OBSERVED`；平台显示招聘/询价属于采购意向（T5/T3），未获买方确认或平台当前接单状态核验前标 `OPEN_STATUS_UNKNOWN`。
- 网站使用相对时间（如“昨天”）或检索缓存时，优先使用可见绝对日期；日期冲突记 `DATE_CONFLICT`，不要假称“此刻正在招人”。
- `$5 Fixed-price`、拟定预算、平台服务商标价、Shop 总销量分别代表不同含义；不可合并为实际成交价/当前订单数。
- 公开需求的入选标准不仅是付款迹象，还包括：Owner 是否够资格、是否能合法申请、提案成本、验收范围、边际交付时间、客户更换供应商的理由。
- 可执行性与业务状态分开标记：`PUBLIC_EVIDENCE_VERIFIED`, `BUYER_CONTACT_NOT_DONE`, `TRANSACTION_NOT_VALIDATED`；完整示例见 `review/REAL_MARKET_PILOT_20261008.md`。

## 5. 状态机：六个决策 Gate（允许并行学习，不允许越级宣称）
| Gate | 决策问题 | 最小行动证据 | 没有证据时 |
|---|---|---|---|
| G0 Discover | 谁为哪个结果、在何时作采购决定？ | 可核对的触发、替代、付款方假设及反证 | RESEARCH |
| G1 Access & Win | 客户可合法触达吗？为什么有可能选我们？ | 有效渠道、买方路径和可信差异化假设 | HOLD / 切分细分市场 |
| G2 Offer & Proof | 能否限定范围地交付、证明并报价？ | 真实样例/演示或可验证服务承诺；价格、交付及退款条款清楚 | TEST / SPECIALIST |
| G3 Transaction | 真实买方以本人的具体 Offer 完成价值交换了吗？ | 真实收款/付款试点（退款、熟人、赠品单独标） | NOT_VALIDATED |
| G4 Repeat & Economics | 能稳定获客交付、剩余贡献为正且时间可承受吗？ | 多个独立买家或周期、真实费用和工时、服务质量、渠道分散性 | KEEP / ITERATE / HOLD |
| G5 Leverage & Scale | 扩量时边际 CAC、支持、交付与风险还成立吗？ | 同一机制多周期重复、延长窗口试验、成本结构、退款/投诉受控 | NOT_READY |

G3 发生不自动放行 G4；G4 尚未达标亦可对已验证高重复任务投入**有限自动化**，但标注是控制成本的可逆试验而非已可 Scale。

## 5.1 跨 Gate 的长期模型护栏（v0.4）
- `MODEL_FIT` 从 G0 即开始：买家 × 价值 × 价格机制 × 交付架构 × 渠道结构 × 真实边际经济 × Owner 负担。它不是 G3 之后才开始的新 Gate，而是贯穿决策的并行检查。
- `PRODUCTIZATION_HYPOTHESIS`: 可能的重复部分/固定输入/可测交付标准/异常频度/软件或流程复用。未有数据时状态 `UNKNOWN`，不是“低分淘汰”；如确认只能一单一做且利润/时差，进入 `HOLD / REJECT`。
- `AUTOMATION`: 自动化只是经济杠杆，不是商业模式本身；优先测真实时耗、失效率、维护和客户体验。能模板化、授权转包或减少不必要步骤的路径，不必强制写代码。
- `ASSET_COMPOUNDING`: 渠道关系、品牌信任、可索引的真实案例、经许可的客户关系、模板与知识体系，需能复用且不违反平台数据规则。纯平台流量也可开始，但必须度量可撤回性与依赖。
- `TIME_FREEDOM`: 不把加班换收入误算为系统盈利；可持续性需要现金、时间、质量、用户信任都成立。

# 6. 获客渠道：先取证，后宣传
候选按照用户进入状态 `latent / problem-aware / solution-aware / purchase-ready` 分类：
- 购买就绪：公开询价/投标、采购平台、替代工具搜索、供应商目录、插件/交易市场。
- 问题已知：搜索/SEO、求助社群的合规公开帮助、结构化案例、精准企业业务接触。
- 潜在需求：媒体/内容/体验、共同创造、合伙人/渠道商、展示样例；不能用上述购买就绪类的阈值判死。
每个渠道记录 `buyer_fit / buying_state / proven_reach / time_to_response / cash_cost / owner_hours / attribution_confidence / gatekeeper / policy_risk`，不可用统一“回复率 20%”做前提；见 `references/04_channels.md` 与 `04a_acquisition_router.md`。

## 6.1 不受陌生人私信额度限制的获取结构（v0.3）
同时考虑：①在原平台合规响应公开付费委托；②个别买方精准外联与温暖引荐；③按真实需求建立一页可搜索样例与报价；④有可核验交付后争取合作商与介绍。
每条方法必须落到：`具体出处/合规接触入口/可验证报价/操作成本/Owner 时间/最小下一步`。**不得**建议多号绕开频率限制，未经授权不实际联系或收款。另见 `review/BUYER_TO_PAYMENT_PLAYBOOK.md`。

# 7. 转化和定价
**出售明确结果，而不是漂亮的功能列表。** Offer 必填 `outcome/scope/input/deadline/price/acceptance/refund/limits/payment_path`。报价包含履约和异常成本。优先降**购买风险、范围和输入负担**，不是不问原因就降价。售前按 `事实 → 实际流程 → 当前付出 → 购买人/时机 → 证据展示 → 试点报价 → 合法支付 → 验收`；沟通与合同可由真实购买者改变顺序，不可强制话术。`references/05_sales_offer.md`。

## 7.1 付款与履约的真实性核验（v0.3）
- `INQUIRY` / `QUOTED` / `BUYER_ACCEPTED` / `INVOICED` / `PAID_GROSS` / `REFUNDED` / `PAID_NET` / `DELIVERED_ACCEPTED` 不可越级或互为替代。
- 需要可验证付款事件才允许写 `PAID`；现金收入扣除已退款及尚未履约义务单独呈现；没有到账证据标 `NOT_OBSERVED`。
- 以“能交付、能验收、风险有限”的 Offer 收费；不得为了做 WTP 实验收取无法兑现的预售。

## 8. 经营数字与人力时间
分开：`现金 CAC`、`创始人获客小时/单`、`不含 Owner 时薪的现金贡献`、`按 Owner 假设小时价值调整的经济贡献`、`固定成本/工作资本`、`到手净现金/退款延迟`。未知项不得强行输出 LTV 或“盈利”。见 `references/06_economics.md`。

## 8.1 长期经营四账本（v0.4）
- `CASH`: 实收、退款、递延义务、毛现金贡献、固定开支、现金垫付。
- `OWNER_TIME`: 市场研究、获客销售、交付、客户支持、维护、管理的全部人工时数；按阶段和订单记录。
- `CUSTOMER_OUTCOME`: 真实交付成功、验收、抱怨、取消、复购/转介绍或一次性新增客户循环。
- `COMPOUNDING_ASSETS`: 可复用模板/流程/代码、经允许的客户关系、可搜索内容、合作伙伴、平台依赖和集中度。
现金增长并不等于单位利润或个人时间自由。`UNKNOWN` 的项目要标记而非估算成事实；详见 `references/12_compounding_and_portfolio.md`。

# 9. 实验控制和决策
每轮写 `Decision question/Competing hypotheses/What would change mind/One primary metric/Exposure + maturity window/Guardrail + data quality/Cost ceiling/Stop or Inconclusive rule/Actual evidence/Decision`。探索性多变量试探可用于发现；不要据此宣称某个因素的因果效果。严格渠道/价格对比必须对齐人群、Offer、窗口与归因。决策为 `KEEP / ITERATE / DROP / HOLD / SCALE / INCONCLUSIVE`。`references/07_experiments.md`。

# 10. 个人长期闭环
一周以**新增实收净额/有证据机会/真实合格咨询/实际交付与满意度/投入小时数**为核心；出现系统外包、SEO、推荐、渠道联盟时按真实重复交易验证。发现不成立的机会，存下来源、拒绝理由、有效证明、可复用能力与伙伴，严禁把敏感潜客数据永久留存。正式扩大前必须设计退款、异常监测和业务中断预案。

# 11. Agent 最小输出合同（Lite 优先）
```
MODE / Owner 约束与 UNKNOWN:
本轮 DECISION QUESTION:
机会六问与角色拆分:
有效证据（原始URL/日期/独立性/反例）:
可验证的竞争替代 / Why Us:
最重要尚未证实的 1 件事:
当前 Gate 状态:
商业模式候选（价值×收费×交付×渠道）：
产品化与自动化假设（重复部分/异常/证明成本）：
长期渠道与依赖风险（能否复用）：
可用获客入口（主动/承接/借势，实际动作）:
可交付 Offer（价格若未知写假设，不虚构）:
实验（动作人、现金/小时上限、窗口、指标、停损）:
已发生结果 / BLOCKED_BY_REAL_INPUT:
经济性状态（现金+时间+质量+资产分开）：
决策及下一步唯一高价值动作:
```
禁止用报告字数代替真实进展。任何用到网络证据的具体事实附链接；不得凭过去个人项目兴趣筛选市场。

## 11.1 v0.3 历史 Review 状态
已进行了两条公开市场机制的**只读实战复核**与 20 个案例的人工预期判定表；这是 `PUBLIC_EVIDENCE_VERIFIED` 和 `SCENARIO_EXPECTATIONS_WRITTEN`，**并非**外部独立 Agent 盲测，也不是 `MARKET_TRANSACTION_VALIDATED`。
本版源文件已通过自动合约检查（见 `review/QA_REPORT_V03.md`）；对外测试仍需合规平台账号、真实买家反应与付款证据。

## 11.2 v0.4 增量与兼容性
- `DISCOVER` / `PORTFOLIO` 必须提前比较商业模式与复用路径；`FIRST_MONEY` 接近真实付款仍是必要的中间证据，但不得误当终点。
- `MODEL_DESIGN` → `references/10_business_model_architecture.md`；`PRODUCTIZE` → `references/11_productization_automation.md`；长期复盘 → `references/12_compounding_and_portfolio.md`。
- 获客应按 `references/04a_acquisition_router.md` 的四轴筛选，不得把“主动/被动/借势”当成互斥的平台菜单。
- 旧获客 Skill 原件及 v0.3 的公共市场事件账本保持原证据等级。本版仍无本人真实付款、跨期盈利和独立 LLM 盲测，不能宣布已经具备稳定盈利能力。

# 12. 按需加载参考文件
机会 `references/02_opportunity_framework.md`；资金痕迹和购买决策 `03_buyer_money_trails.md`；获客路径 `04_channels.md`；销售与首单 `05_sales_offer.md`；成本与留存 `06_economics.md`；实验 `07_experiments.md`；合规 `08_compliance.md`；失效模式 `09_adversarial.md`；商业模式 `10_business_model_architecture.md`；产品化/自动化 `11_productization_automation.md`；长期资产/组合 `12_compounding_and_portfolio.md`；获客路由 `04a_acquisition_router.md`；方法出处见 `SOURCE_LEDGER.md`。旧获客 Skill 在有 Offer 和真实漏斗后可参考，但必须遵守本 Skill 的 Owner/交付/交易证据边界。

## 12.1 v0.3 历史验证资料入口
`review/REAL_MARKET_PILOT_20261008.md` 真实公开机会验证；`review/BUYER_TO_PAYMENT_PLAYBOOK.md` 逐步成交动作；`review/SKILL_REVIEW_AND_REMEDIATION.md` 全包 Review；`review/SCENARIO_EXPECTATIONS.md` 对抗性案例的期望判断；`review/NEXT_ACTION_QUEUE.md` 首轮执行计划。
