# Acquisition Growth Radar v0.2 — 实战升级观察记录

> 状态：**OBSERVATION ONLY / 仅记录，不修改现有规则**  
> 日期：2026-09-11  
> 来源：关系分析报告、约会资料诊断、Mini Craft Night Kit 三产品获客规划实战  
> 当前正式版本：`Acquisition Growth Radar v0.2`

---

## 0. 本文目的

本文只记录在真实执行 `Acquisition Growth Radar v0.2` 时暴露出的不足、边界模糊点和潜在升级方向。

**本次不修改：**

- `SKILL.md`
- `README.md` / `README_EN.md`
- `references/*`
- `templates/*`
- 当前 v0.2 的任何正式规则

本文不是 v0.3 规范，也不代表以下建议已经批准进入 Skill。

目的只有两个：

1. 防止实战中发现的问题丢失；
2. 为后续是否升级 v0.3 提供可追溯依据。

---

# 1. 本次实战背景

本轮同时规划三个不同类型产品：

1. **关系分析报告**：数字产品，计划通过免费小分析 → 完整付费报告完成转化；
2. **约会资料诊断**：数字诊断服务，用户上传资料后获得分析；
3. **Mini Craft Night Kit**：实物手工套装，核心方向是“无屏幕夜晚 / Craft Night”体验。

执行过程中需要回答：

- 三个产品的目标用户在哪里；
- TikTok、Google、Reddit、Pinterest 等渠道分别是否适合；
- 独立站应该如何承接；
- 是否需要持续大量生产内容；
- 广告什么时候进入；
- 什么数据可以证明需求、价值、购买意愿和可放大性。

正是在把 v0.2 从“单一产品增长诊断”扩展到“多产品 × 多渠道 × 独立站验证”时，以下不足开始暴露。

---

# 2. 发现一：`Observed Bottleneck` 与 `Critical Unknown` 需要区分

## 当前不足

v0.2 强调：

> 找当前最大瓶颈 → 选择 Growth Lever → 设计最小实验。

这对于**已经有真实行为数据**的产品非常有效。

但对于尚未正式跑量的新产品，很多时候并不存在可观察到的行为断点。

此时如果直接写：

- “Activation 是瓶颈”
- “Channel 是瓶颈”
- “Offer 是瓶颈”

实际上是在把**未知**误写成**已观察事实**。

## 本次如何发现

在关系分析报告规划中，曾将“Activation”直接写成当前瓶颈。

复核后发现：

- 真实用户尚未大规模进入免费体验；
- 尚未观察到“Interest PASS、Activation FAIL”的行为数据；
- 因此不能严谨地说 Activation 已经是 Observed Bottleneck。

更准确的表达应该是：

> **Critical Unknown：免费个性化洞察能否产生真实 Aha，并推动付费意向？**

## 潜在升级方向

未来可考虑把诊断入口分成两类：

```text
DIAGNOSIS
├─ Observed Bottleneck
│  已有真实行为数据，可观察断点
└─ Critical Unknown
   尚无足够行为数据，但这是最能改变下一步决策的未知
```

核心思想不变：仍然进入最小实验。

---

# 3. 发现二：证据等级之外，还需要考虑“证据距离”

## 当前不足

v0.2 已经很好地区分：

- Problem Evidence
- Attention
- Interest
- Intent
- Transaction
- Repeatability
- Economics

但现实中，同一个高等级证据与“我们的具体 Offer”之间可能距离很远。

例如：

> Amazon 上 Book Nook 有大量真实交易。

这是强 Transaction Evidence。

但它只能证明：

> **这个品类有人购买。**

不能直接证明：

> 用户会购买我们的 `Screen-Free Craft Night` 独立站 Offer。

## 本次如何发现

Mini Craft Night Kit 已经存在很强的外部品类交易证据。

如果只看 Evidence Level，很容易误写成：

> “Transaction 已验证。”

但实际上：

- 品类交易已验证；
- 我们的品牌未验证；
- 我们的定位未验证；
- 我们的 SKU 未验证；
- 我们的价格未验证；
- 我们的独立站交易未验证。

## 潜在升级方向

未来可考虑增加 `Evidence Distance`：

- `DIRECT`：我们的目标用户 × 我们的 Offer × 真实行为
- `NEAR`：目标用户 × 高度相似 Offer
- `ADJACENT`：相似用户或相似场景
- `ANALOG`：其他品牌 / 平台 / 类似品类
- `OPINION`：态度或自报意愿

形成二维证据：

```text
Evidence Level × Evidence Distance
```

例如：

```text
Book Nook Amazon Sales
Evidence Level: Transaction
Evidence Distance: Analog
```

---

# 4. 发现三：Activation 定义正确，但执行层容易把代理行为误当成 Aha

## 当前不足

v0.2 对 Activation 的定义本身是正确的：

> 用户第一次亲自体验到核心价值。

但在实际规划时，非常容易把以下行为直接当成 Activation：

- 完成测评
- 上传资料
- 注册
- 留邮箱
- 加入 Early Access

这些很多时候只是：

- Intent
- Onboarding
- Value Exposure
- Proxy Metric

而不一定意味着用户真正体验到了价值。

## 本次如何发现

### 关系分析报告

错误倾向：

> 完成 Mini Check = Activation

更严谨：

> 用户看到个性化洞察，并真实认为“这说中了 / 对我有帮助”才接近 Activation。

### 约会资料诊断

错误倾向：

> 上传 Profile = Activation

更严谨：

> 上传属于 Intent / Onboarding；用户看到诊断并认可其价值，才接近 Activation。

### Mini Craft

错误倾向：

> Early Access = Activation

更严谨：

> Early Access 是 Intent；真正制作、完成作品并获得“无屏幕手作体验”通常发生在交易后。

## 潜在升级方向

未来可考虑给 Activation 增加三个执行字段：

- `activation_event`
- `activation_proxy`
- `activation_evidence`

原则：

> **Proxy ≠ Proof。**

---

# 5. 发现四：多渠道严格比较应更明确地触发 Full Acquisition Cell

## 当前不足

v0.2 已经规定：多渠道比较、严格归因时应使用 Full Acquisition Cell。

但实战规划中，仍容易出现：

> TikTok / Google / Pinterest 一起跑，然后用 Lite Loop 总结谁最好。

这会弱化归因。

## 本次如何发现

三产品渠道规划中出现了：

- Relationship：TikTok / Reels / Google
- Dating：Google / Reddit / TikTok
- Mini Craft：TikTok / Pinterest / Google

如果同时改变：

- Channel
- Creative
- Message
- Audience State
- CTA

即使转化差异明显，也无法知道到底是什么导致。

## 潜在升级方向

未来可在 SKILL 中增加更强提示：

> **一旦问题变成“哪个渠道更好”，且结果会改变资源配置，默认升级 Full Cell。**

并要求显式记录控制变量。

---

# 6. 发现五：统一固定样本阈值容易制造假精确

## 当前不足

实战规划中曾提出：

> “约 100 个 Landing Visitors 或 30 个 Activation 后必须决策。”

这不是 v0.2 的正式规则，也不适用于所有业务。

## 本次如何发现

三个产品的：

- 单价
- 转化路径
- 决策周期
- 流量质量
- Activation 位置
- 购买频率

完全不同。

统一写一个人数阈值，会制造不真实的确定感。

## 潜在升级方向

未来实验开始前，可考虑预先记录：

- `minimum_exposure`
- `minimum_runtime`
- `maturity_window`
- `success_condition`
- `kill_condition`
- `inconclusive_condition`

即：

> 不使用全局固定人数；每个实验单独定义“何时数据足以做当前决策”。

---

# 7. 发现六：Claim Gate 在获客文案阶段需要更强提醒

## 当前不足

v0.2 已有非常好的 Claim Gate：

`HYPOTHESIS → OBSERVED → REPEATABLE → APPROVED`

但在设计广告 Hook / Landing Copy 时，很容易无意中使用因果性过强的表达。

## 本次如何发现

约会资料诊断中曾使用类似：

> “Your first photo is costing you matches.”

如果当前没有足够 Solution Proof，这句话已经暗示：

> 第一张照片导致匹配减少。

这超出了当前证据范围。

更安全的早期表达应类似：

> “Your first photo is the first thing I’d review.”

或：

> “This may be one reason your profile is underperforming.”

## 潜在升级方向

未来可考虑在 Message / Creative 实验中增加：

```text
claim_status
claim_scope
```

并明确：

> **Hook 也受 Claim Gate 约束。**

---

# 8. 发现七：Channel Scorecard 缺少“渠道角色”

## 当前不足

当前 Channel Scorecard 主要评估：

- Audience Fit
- Message / Medium Fit
- Tracking Quality
- Test Cost
- Scale Potential

这些维度有用，但还没有明确：

> **这个渠道在客户旅程里负责什么？**

## 本次如何发现

TikTok、Google Search、Reddit、Pinterest 并不是相同功能的渠道。

例如：

- TikTok 可能负责让用户第一次意识到问题；
- Google Search 可能承接已经主动寻找解决方案的人；
- Reddit 可能负责问题研究、社区信任和用户语言；
- Pinterest 可能负责长期灵感发现；
- Email 可能负责回访、恢复和复购。

如果只比较“谁转化高”，会把不同任务的渠道错误放在一起排名。

## 潜在升级方向

未来可考虑增加：

`channel_role`

例如：

- `DISCOVER`
- `CREATE_DEMAND`
- `CAPTURE_DEMAND`
- `PROVE`
- `RETARGET`
- `CONVERT`
- `RETAIN`
- `REFER`

核心思想：

> 不一定存在一个“总体最强渠道”；不同渠道可能负责不同阶段。

---

# 9. 发现八：需要考虑用户进入渠道时的需求成熟度

## 当前不足

不同渠道来的用户，进入实验前的购买意图可能完全不同。

## 本次如何发现

例如：

TikTok 用户可能只是刷视频时第一次看到：

> “为什么一段没有明显问题的关系仍然让人疲惫？”

而 Google 用户可能主动搜索：

> `hinge profile review`

两者即使最终 Landing Page 相同，也不是同一种初始状态。

如果直接比较最终转化率，会低估上游“创造需求”的渠道。

## 潜在升级方向

未来可考虑记录 `demand_state`：

- `LATENT`
- `PROBLEM_AWARE`
- `SOLUTION_AWARE`
- `HIGH_INTENT`

与 Channel Role 配合使用。

---

# 10. 发现九：实验指标需要 Guardrail 与 Data Quality Gate

## 当前不足

现有 Full Cell 已有：

- primary_metric
- secondary_metrics

但还没有单独强调：

- 保护性指标
- 数据质量指标

## 本次如何发现

例如免费关系洞察给得更丰富，可能让：

> Paid CTA Click ↑

但也可能同时导致：

- 用户误解产品能力；
- 投诉或退款上升；
- 付费后满意度下降；
- 免费层吞掉付费价值。

同样，如果埋点漏记或重复触发，即使分析逻辑正确，也会基于错误数据做错误结论。

## 潜在升级方向

未来 Full Cell 可考虑将指标拆成：

- `primary_metric`
- `diagnostic_metrics`
- `guardrail_metrics`
- `data_quality_metrics`

并增加简单数据检查：

- 事件是否完整；
- 是否重复触发；
- 分母是否可靠；
- 内部 / Bot 流量是否排除；
- 归因窗口是否明确。

原则：

> **Data Quality FAIL → 不做商业结论。**

---

# 11. 发现十：多产品并行时缺少 Portfolio Router

## 当前不足

v0.2 很适合：

> 一个产品 → 一个最大瓶颈 → 一个实验。

但当同时有多个产品机会时，没有正式定义：

> 有限时间和预算优先测试哪个？

## 本次如何发现

本轮有三个候选：

- Relationship Report
- Dating Profile Audit
- Mini Craft Night Kit

曾使用 `60% / 30% / 10%` 做资源分配。

这个方向可能合理，但比例本身缺乏正式规则支持。

## 潜在升级方向

未来可考虑增加 `Portfolio Router`，优先比较：

- Information Value：实验能减少多少关键不确定性；
- Test Cost：成本；
- Time to Signal：多久得到有效信号；
- Decision Impact：结果会不会改变重大决策；
- Reversibility：失败后是否容易撤回；
- Strategic Reuse：实验资产能否复用。

原则：

> **优先做低成本、快反馈、高信息价值、可逆性高的实验。**

---

# 12. 发现十一：Attribution 与 Incrementality 需要区分

## 当前不足

独立站进入多渠道后，渠道后台“记到一单”不一定等于该渠道真正创造了这单。

## 本次如何发现

可能出现：

```text
TikTok 首次看到
↓
之后 Google 搜品牌
↓
Organic Search 下单
```

归因系统可能把订单记给 Search，但需求可能是 TikTok 创造的。

反过来，Search Ads 也可能只是承接一个本来就要买的用户。

## 潜在升级方向

未来可明确区分：

- **Attribution**：系统把转化记给谁；
- **Incrementality**：没有这个渠道时，这个结果是否仍会发生。

早期不要求复杂增量实验，但至少避免把后台归因报告直接解释成因果证明。

---

# 13. 发现十二：Transaction 之后仍需要验证“价值是否真的交付”

## 当前不足

Transaction 能证明真实经济交换发生，但不能自动证明：

- 产品有效；
- 用户成功体验价值；
- 用户满意；
- 产品值得继续 Scale。

## 本次如何发现

### 关系分析报告

用户可以付款，但报告可能质量不足。

### Dating Profile Audit

用户可以付款，但建议可能没有帮助。

### Mini Craft

用户可以付款，但可能：

- 收货破损；
- 难度过高；
- 用户中途放弃；
- 成品与展示不一致。

## 潜在升级方向

未来可在 Transaction 后明确观察：

- Delivery Success
- Post-Transaction Activation
- Satisfaction
- Refund / Chargeback
- Referral / UGC

注意：这些不一定要重新变成新的线性 Evidence Ladder。

---

# 14. 本次同时发现的执行纠正

以下不是 v0.2 本身错误，而是本轮执行时发生的偏离：

1. 不应在证据不足时提前认定“TikTok / Google / Pinterest 是最佳渠道”；
2. 不应把上传、完成测评、Early Access 自动当作 Activation；
3. 不应自行增加统一 `100 visitors / 30 activations` 阈值；
4. 多渠道严格比较应进入 Full Cell；
5. 获客文案必须继续遵守 Claim Gate；
6. 外部品类交易只能证明相应范围，不能越级证明我们的独立站 Offer；
7. 资源分配比例不应拍脑袋，未来应由信息价值和测试成本等因素支持。

---

# 15. 建议的 v0.3 候选升级优先级

## S 级：优先考虑

1. `Critical Unknown` vs `Observed Bottleneck`
2. `Evidence Distance`
3. Activation 的 `Event / Proxy / Evidence`
4. Full Experiment 的 Guardrail + Data Quality
5. Channel Role + Demand State

## A 级：有价值，但可以后加

6. Portfolio Router
7. Attribution vs Incrementality
8. Post-Transaction Delivery Evidence
9. `INCONCLUSIVE` / 数据不足状态

---

# 16. 不建议做的升级

本次不建议因为发现这些问题，就把 Skill 扩展成大型营销知识百科。

暂不建议机械加入：

- AIDA
- AARRR
- 4P
- STP
- RACE
- 大量传统营销模型

原因：

当前 v0.2 最大优势是：

> **简单、可执行、证据纪律强。**

升级应继续服务于核心主干，而不是增加术语数量。

建议保留核心：

```text
Evidence → Diagnosis → Lever → Experiment → Decision
```

未来所有扩展都应回答：

> **它是否能减少错误判断，或让下一步实验更便宜、更快、更有信息价值？**

如果不能，则不应加入。

---

# 17. 当前状态

```text
Acquisition Growth Radar v0.2      ✅ 正式版本，未修改
本次实战 Review                    ✅ 完成
升级观察记录                       ✅ 本文
v0.3 正式设计                      ⏳ 未开始
v0.3 修改现有 Skill               ⏳ 未授权 / 未执行
```

## 后续触发条件

只有在以下情况之一发生时，再正式设计 v0.3：

1. 用户明确要求升级；
2. 后续真实实验再次重复暴露相同问题；
3. 某个缺口已经实际导致错误决策；
4. 新增内容能够明显提升执行质量而不显著增加复杂度。

在此之前：

> **继续使用 v0.2 作为正式规则，本文仅作为升级观察日志。**
