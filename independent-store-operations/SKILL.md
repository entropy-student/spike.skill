---
name: independent-store-operations
title: Independent Store Operations（独立站运营系统）
description: 面向独立站 / DTC 的运营诊断、站内转化、信任、商品决策、结账、履约、留存、内容与经济性 Skill。先定位运营阶段与证据等级，再决定 FIX / MEASURE / RESEARCH / EXPERIMENT。
version: 0.5.0
language: zh-CN
---

# 0. 任务边界

本 Skill 用于：

- 有流量没订单；
- 商品页高浏览低加购；
- 加购高、结账低；
- 结账高、购买低；
- 移动端明显更差；
- 退款 / 退货高；
- 客单低；
- 复购低；
- 营收上涨但利润下降；
- 页面 / 功能扫描；
- 独立站内容选题；
- 运营复盘；
- 自动诊断规则设计。

本 Skill 不负责：

- 重新做选品；
- 直接执行广告；
- 支付工程；
- VPS 部署；
- 法律 / 税务 / 会计专业意见；
- 把行业平均值当成单店正确答案。

---

# 1. 核心哲学

独立站真正要优化的不是“转化率最大化”，而是：

> **可重复、可信任、可盈利的价值交换。**

所以始终记住：

```text
更多访问 ≠ 更多合格需求
更高转化率 ≠ 更高利润
更多评论 ≠ 更可信
更低免邮门槛 ≠ 更优经济性
更多功能 ≠ 更好的购买体验
```

---

# 2. 独立站八段运营链

## S1 Audience & Entry｜人群与入口

问：
- 来的人是不是目标用户？
- 为什么现在来？
- 来源 / 素材 / 搜索意图与落地页是否匹配？

## S2 Findability｜商品发现

问：
- 用户知道这个站卖什么吗？
- 能快速找到正确商品吗？
- 导航、分类、搜索、筛选是否与目录规模匹配？

## S3 Product Decision｜商品决策

用户需要回答：
1. 这是什么？
2. 适不适合我？
3. 为什么值得？
4. 能不能相信？
5. 买下去会发生什么？

## S4 Trust & Risk｜信任与风险

拆成：
- 商家身份信任；
- 商品质量信任；
- 交易 / 价格信任；
- 履约 / 售后信任；
- 数据 / 隐私信任。

## S5 Offer & Basket｜报价与购物篮

检查：
- 价格；
- 套餐；
- 数量；
- 折扣；
- 赠品；
- 免邮门槛；
- 购物篮价值结构。

## S6 Checkout & Payment｜结账与支付

检查：
- 总价；
- 配送；
- 字段；
- 账号要求；
- 支付方式；
- 错误恢复；
- 最终确认。

## S7 Fulfillment & Post-purchase｜履约与购买后

检查：
- 发货；
- 状态通知；
- 客服；
- 退换；
- 期待是否兑现。

## S8 Retention & Advocacy｜留存与传播

检查：
- 补货；
- 复购；
- 互补商品；
- 生命周期；
- 社区；
- 推荐。

横向系统：
- Data
- Economics
- Content
- Technical Experience
- SEO / Discovery
- Compliance / Integrity

---

# 3. 双证据体系

## 店铺证据 L0–L3

### L0 — Observable Fact
页面 / 技术事实。

### L1 — Research-backed Risk
事实 + 外部研究，只说明这是合理风险。

### L2 — Store-specific Behavioral Evidence
本店漏斗 / 订单 / 客服 / 退货等行为数据。

### L3 — Causal Proof
受控实验或可靠因果设计。

禁止：

> `L0/L1 → 直接声称本店根因`

## 外部研究强度 R-A–R-U

- `R-A`：系统综述、元分析、标准、大规模长期研究；
- `R-B`：大型 benchmark、多案例实践研究；
- `R-C`：局部实验、案例；
- `R-U`：不足。

注意：

> `R-A 一般机制` 不能冒充 `L3 本店因果`。

---

# 4. 三类规则

## H1 — 基础卫生规则

明确技术 / 可用性 / 一致性缺陷。

默认：`FIX`

例：
- 关键页面 4xx/5xx；
- CTA 失效；
- 表单无可访问标签；
- 结构化价格与页面价格矛盾。

## C1 — 条件规则

只有满足店型 / 商品 / 页面条件才启用。

默认：`CHECK APPLICABILITY → FIX / MEASURE`

例：
- 大目录搜索；
- 服饰尺码；
- 跨境税费；
- 订阅透明度。

## E1 — 商业实验规则

没有通用最优答案。

默认：`MEASURE / EXPERIMENT`

例：
- 定价；
- 折扣；
- 免邮门槛；
- 免费退货；
- CTA 文案；
- 套装；
- 弹窗；
- 交叉销售。

---

# 5. 店型 Gate

基础店型：

- `SINGLE_OFFER`
- `NARROW_CATALOG`
- `BROAD_CATALOG`
- `HIGH_CONSIDERATION`
- `REPLENISHMENT`
- `DIGITAL_SERVICE`
- `SUBSCRIPTION`
- `MIXED`

修饰：

- `PHYSICAL / DIGITAL / SERVICE`
- `HIGH_AOV`
- `SIZE_SENSITIVE`
- `COMPATIBILITY_SENSITIVE`
- `INTERNATIONAL`
- `MOBILE_HEAVY`
- `NEW_BRAND`
- `REGULATED`
- `HYBRID_TRANSACTION`

店型不确定：

`STORE_ARCHETYPE_UNCERTAIN`

此时抑制高条件化规则。

---

# 6. 信息距离 P0–P4

不只检查“有没有”，还检查用户做决定时离信息多远。

- `P0`：当前决策区；
- `P1`：一次明显点击；
- `P2`：全站导航 / 页脚可发现；
- `P3`：帮助中心 / 多跳；
- `P4`：未发现。

越接近：
- 金钱；
- 自动续费；
- 配送；
- 退货；
- 尺码；
- 兼容；
- 关键限制；

越应该靠近当前决策。

---

# 7. 交易拓扑 T1–T6

- `T1 ONE_TIME`：一次性；
- `T2 RECURRING`：周期订阅；
- `T3 PHYSICAL_PLUS_MEMBERSHIP`：实物 + 会员；
- `T4 TRIAL_TO_PAID`：试用 → 付费；
- `T5 PROMO_TO_STANDARD`：首期优惠 → 标准价；
- `T6 MARKETPLACE_DEPENDENT`：第三方平台管理。

订阅 / 混合交易至少理解：
- 首次价格；
- 后续价格；
- 周期；
- 自动续费；
- 试用结束；
- 取消；
- 暂停 / 跳过；
- 第三方管理；
- 跨交易依赖。

---

# 8. 强制诊断协议

收到独立站问题时，不先给“十大建议”。

按顺序：

1. **定义商业对象**：市场、商品、店型、客单、主要流量、当前目标；
2. **检查数据可信度**；
3. **分群**：source / landing / product / device / geo / new-returning；
4. **定位 S1–S8**；
5. **至少提出多个候选原因**；
6. **标 L0–L3**；
7. **检查信息距离 P0–P4**；
8. **检查交易拓扑 T1–T6**；
9. **找最高信息价值的下一条证据**；
10. 选择：`FIX / MEASURE / RESEARCH / EXPERIMENT / HOLD / ESCALATE`。

原则：

> `Decision Impact × Uncertainty ÷ Cost-to-Learn`

优先补最能改变判断、成本最低的证据。

---

# 9. 数据漏斗

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

原则：
- event count / item count / session / user 不混算；
- 漏斗回答“哪里异常”；
- 页面 / 用户研究回答“为什么可能异常”；
- 实验回答“哪个改变真的有效”。

---

# 10. Trust 不是徽章

始终问：

> 用户现在承担的主要不确定性是什么？什么可信证据能降低它？

Proof 可以是：
- 评论；
- UGC；
- 第三方测试；
- 认证；
- 规格；
- 演示；
- 试用；
- 质保；
- 退款保证；
- 案例；
- 清楚限制。

“没有评论”不自动等于“没有 Proof”。

---

# 11. 内容运营

内容优先从真实运营信号中产生：

1. 搜索词；
2. 站内搜索；
3. 售前问题；
4. 客服；
5. 评论；
6. 差评；
7. 退货原因；
8. 漏斗掉点；
9. 实验结果。

形成：

`Audience × Situation × Exact Language × Insight × Proof × Claim Boundary × CTA`

再交给 `acquisition-growth-radar` 测：

`Problem × Situation × Hook × Proof Format × CTA`

---

# 12. 经济护栏

至少考虑：

```text
Revenue
- Discounts
- COGS / Delivery cost
- Fulfillment
- Shipping subsidy
- Payment fee
- Return / Refund
- Commission
= Contribution before CAC
- CAC
= Contribution after CAC
```

禁止因为转化率上涨就自动判断实验成功。

---

# 13. 自动扫描边界

公开扫描输出分：

- `PUBLIC_OBSERVABLE`
- `INFERRED_RISK`
- `PRIVATE_DATA_REQUIRED`
- `EXPERIMENT_REQUIRED`

公开扫描不得声称：
- “每月损失 X 美元”；
- “一定提升 X%”；
- “这是真正根因”；
- “评论一定是假”；
- “流量质量一定差”；
- “应该把价格改成 X”。

---

# 14. 扫描环境状态

必须区分：

- `ACCESS_OK`
- `ACCESS_RATE_LIMITED`
- `ACCESS_BLOCKED`
- `ACCESS_GEO_REDIRECT`
- `ACCESS_LOGIN_REQUIRED`
- `ACCESS_JS_INCOMPLETE`
- `ACCESS_UNKNOWN_FAILURE`

任何非 `ACCESS_OK`：

> 不得把“没扫描到”解释成“网站缺少”。

---

# 15. 规则校准

生产规则至少经历：

```text
Definition
→ Fixture
→ Human Audit
→ Store Data（如涉及行为）
→ Experiment（如做因果 Claim）
```

早期扫描器优先：

> **Precision > Recall**

原因：这是一个 Trust Product。

---

# 16. 默认输出协议

## 独立站运营诊断

1. 商业对象 / 店型
2. 当前目标
3. 症状
4. S1–S8 定位
5. 已知事实
6. UNKNOWN
7. 候选原因
8. L0–L3
9. 信息距离 / 交易拓扑（如适用）
10. 当前最大瓶颈
11. 下一条最高信息价值证据
12. FIX / MEASURE / RESEARCH / EXPERIMENT / HOLD
13. 经济副作用
14. 下一步
15. 是否转交获客 Skill

## 内容创作前

1. 购买旅程阶段
2. 用户场景
3. 用户原话 / 异议
4. 运营问题
5. 核心洞察
6. Allowed Claim
7. Proof
8. CTA
9. 交给内容 Skill 的 Brief

---

# 17. 与其他 Skill 路由

- 卖什么 → `independent-store-product-opportunity`
- Hook / Channel / Offer / Scale → `acquisition-growth-radar`
- 内容表达 → `short-form-spoken-script`
- 支付 → `payment-integration-governance`
- VPS → `vps-project-governance`

---

# 18. 当前成熟度

当前：`v0.5.0 — Theory Frozen / Calibrating`

框架已冻结；后续通过真实站、正反样本和实际数据继续校准。

不要因为增加更多规则会让报告更长，就扩张规则库。

目标始终是：

> **更高决策密度，而不是更多建议。**
