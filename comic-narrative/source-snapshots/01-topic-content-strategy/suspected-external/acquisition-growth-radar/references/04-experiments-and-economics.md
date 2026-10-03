# Experiments & Unit Economics｜实验与单位经济 v0.2

## 两种实验模式

### Lite Loop｜默认

用于日常快速推进：

```text
当前瓶颈：
我的假设：
本轮只改：
核心指标：
成功标准：
Kill 条件：
结果：
Learning：
Decision：KEEP / ITERATE / KILL / SCALE
```

目标：快速减少最大不确定性。

见 `../templates/lite-growth-loop.md`。

### Full Acquisition Cell｜重要实验

以下情况升级到 Full：

- 预算或资源投入较大
- 关键价格测试
- 多渠道/多素材比较
- 高风险 Claim
- 需要严格归因
- 结果会触发重要资源决策

Full Cell 至少记录：

- bottleneck
- validation_zone
- audience / situation
- channel
- message_or_creative
- proof_or_trust
- activation_position
- offer / price
- conversion_path
- hypothesis
- growth_lever
- changed_variable
- controlled_variables
- primary_metric
- secondary_metrics
- start/end time
- cost
- revenue/value
- success_condition
- kill_condition
- result
- learning
- decision

模板：`../templates/experiment-cells.csv`。

---

## 为什么不要同时改很多变量

如果同时改：

- 人群
- 价格
- Creative
- Proof
- Offer
- Conversion Path
- Channel

即使结果变好，也无法知道原因。

实验不是为了“做测试”，而是为了减少决策不确定性。

> **Lite 用来快速学习；Full 用来严格归因。**

---

## Information Value

优先选择：

> **最便宜、最快、最能改变决策的实验。**

不是优先做最容易完成或看起来最忙的任务。

---

## Unit Economics

统一问题：

> **一个符合目标质量的新增客户，最多值得花多少钱获取？**

常见变量：

- Revenue / Contract Value
- Variable Delivery Cost
- Payment / Platform Cost
- Commission
- Refund / Churn / Failure Reserve
- Other Variable Cost
- Contribution Before CAC
- CAC
- Contribution After CAC
- LTV
- Payback Period

## 口径纪律

不要混淆：

- Revenue 与 Profit
- Gross Margin 与 Contribution Margin
- Blended CAC 与 New Customer CAC
- First-order ROAS 与 LTV
- 固定成本与边际成本
- 税费、运费收入和成本

成本口径不清楚时标记 `UNKNOWN`，不制造假精确。

---

## Repeatability 与 Economics

二者不强制线性排序。

出现真实 Transaction 后，可以并行问：

```text
这件事能不能重复？
        +
每次重复是否经济成立？
```

只有两者都达到足够证据，才真正接近 Scale Eligibility。

---

## Scale 前最低检查

- Solution / Core Value 有足够 Proof
- 出现真实 Transaction Evidence
- 多个独立转化出现
- Repeatability 不再只是一次偶然
- CAC 可定义并可追踪
- 贡献利润 / Payback 口径清楚
- 退款 / 流失 / 交付失败风险可控
- 扩量后仍能观察边际结果

不要因为：

- 单条爆款
- 第一单
- 一次高 ROAS
- 短期盈利

就自动进入 SCALE。

---

## 四种决策

- **KILL**：当前假设/组合不值得继续
- **ITERATE**：修改一个核心 Lever 后再测
- **KEEP**：有正信号但证据不足
- **SCALE**：Proof、商业行为、Repeatability 与 Economics 支持放大
