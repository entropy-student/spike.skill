# 09 — MTRS v0 首版可信规则检测契约

> MTRS = Minimum Trusted Ruleset（最小可信规则集）。
>
> 本文件把首版 17 条规则从“运营判断”转换成未来检测器可执行的契约。它不是扫描器代码。

## 0. 共通原则

所有规则必须先经过两个扫描 Gate。

### Gate A — 访问完整性

允许状态：

- `ACCESS_OK`
- `ACCESS_OK_WITH_GEO_CONTEXT`

以下状态不得继续生成“缺少某信息 / 某功能”的 Issue：

- `ACCESS_RATE_LIMITED`
- `ACCESS_BLOCKED`
- `ACCESS_LOGIN_REQUIRED`
- `ACCESS_JS_INCOMPLETE`
- `ACCESS_UNKNOWN_FAILURE`

此时统一返回：

`AUDIT_INCOMPLETE`

### Gate B — 扫描上下文

每次扫描最少记录：

- `requested_url`
- `final_url`
- `timestamp`
- `region`
- `locale`
- `currency`
- `viewport`
- `user_agent`
- `login_state`
- `consent_state`

若地区、货币或最终网址会影响事实，但上下文缺失，则相关规则返回：

`CONTEXT_INSUFFICIENT`

而不是 `ISSUE`。

---

# 1. 统一规则输出

每条规则只能返回以下之一：

- `PASS`
- `ISSUE`
- `NOT_APPLICABLE`
- `CONTEXT_INSUFFICIENT`
- `AUDIT_INCOMPLETE`
- `MANUAL_REVIEW_REQUIRED`

每条 Issue 必须附：

- `rule_id`
- `fact`
- `page_url`
- `source_locator`
- `evidence_level`
- `information_proximity`（适用时）
- `applicability`
- `confidence`
- `allowed_claim`
- `forbidden_claim`

禁止输出：

- 预计提升百分比；
- 预计损失收入；
- “这就是转化低的真正原因”；
- 未被证据支持的用户心理结论。

---

# 2. 首版 17 条规则

## GATE-001 — 扫描访问状态

**目的**：区分网站事实与扫描器失败。

输入：HTTP 状态、最终 DOM、重定向、浏览器加载状态、WAF / 限流特征。

触发：

- 429 → `ACCESS_RATE_LIMITED`
- 明确 WAF / bot block → `ACCESS_BLOCKED`
- 登录墙 → `ACCESS_LOGIN_REQUIRED`
- 必要脚本未完成 → `ACCESS_JS_INCOMPLETE`

允许 Claim：
> 本次审计未完整获得页面事实。

禁止 Claim：
> 网站缺少价格 / 政策 / 商品内容。

---

## GATE-002 — 扫描上下文完整性

**目的**：让报告可复现。

必须记录地区、货币、最终 URL、视口与扫描时间。

如果网站发生地区跳转：
- 记录 `ACCESS_OK_WITH_GEO_CONTEXT`；
- 后续配送、价格、货币规则只评价当前地区版本。

---

## CORE-001 — 关键商业页面可访问

适用：已被识别为核心商业页面的 Home / Collection / Product / 可安全访问的 Cart。

`ISSUE`：正常访问状态下稳定返回 4xx/5xx 或明确错误页。

抑制：
- WAF；
- 登录要求；
- 地区跳转；
- 有意私有页面。

---

## CORE-002 — 主购买动作可操作

前置：
- `DIRECT_PURCHASE=true`
- `PURCHASABLE=true`

`ISSUE`：主购买动作存在，但在正常可购买状态下无法执行到预期的下一安全状态（例如加入购物车 / 打开购买面板）。

不得完成真实支付。

抑制：
- 缺货；
- 预售尚未开放；
- Request Quote / Contact Sales；
- 明确依赖尚未选择的必选 Variant。

---

## CORE-003 — 移动端核心任务未被严重阻断

固定测试视口，页面稳定后检查：

- 主 CTA 是否持续被 Overlay 遮挡；
- 是否存在严重横向溢出导致核心内容不可达；
- 模态框是否没有可操作关闭路径。

只报告“测试视口中任务被阻断”。

---

## CORE-004 — 关键表单控件可识别

关键输入控件必须拥有可访问名称，例如：

- `<label>`
- `aria-label`
- `aria-labelledby`

`placeholder` 不作为唯一充分依据。

只对影响主要交易 / 联系 / 登录任务的表单报告。

---

## CORE-006 — 核心内部导航链接有效

只检查项目定义的核心内部链接集合。

`ISSUE`：链接稳定指向 4xx/5xx / 明确错误页。

不把第三方社媒 / 外部资源故障算本站核心导航问题。

---

## CORE-007 — 直接购买价格可见

适用：`DIRECT_PURCHASE=true`。

`ISSUE`：页面正常加载完成后，在进入不可逆购买行为之前仍无法确定价格或明确的价格计算方式。

`NOT_APPLICABLE`：
- Request Quote；
- Contact Sales；
- 合法定制报价服务。

---

## CORE-009 — 商业页面未被意外 noindex

只对：

`INTENDED_INDEXABLE_COMMERCIAL_PAGE=true`

检查：
- meta robots；
- X-Robots-Tag。

购物车、结账、账户、私人报告等 noindex 不报问题。

---

## CORE-010 — 商品结构化数据与页面事实一致

适用：直接销售商品页。

优先比较：
- price；
- priceCurrency；
- availability。

只有明确矛盾才 `ISSUE`。

缺少可选字段不是本规则 Issue。

---

## PHYS-001 — 退货信息可发现

适用：`PHYSICAL=true`。

搜索顺序：

1. P0 当前购买区域；
2. P1 一步明显链接；
3. P2 全站导航 / Footer；
4. P3 帮助中心 / 多跳；
5. P4 未发现。

默认：
- P4 → `ISSUE`；
- P3 → 高考虑 / 高客单时 `ISSUE`，否则可降级；
- P0–P2 → 通常 `PASS`。

本规则只判断透明度，不判断“是否免费退货”。

---

## PHYS-002 — 配送成本 / 时效可发现

适用：`PHYSICAL=true`。

至少尝试确认：
- shipping cost / free threshold；
- estimated delivery timing；
- major region restrictions。

按 P0–P4 记录信息距离。

国际站必须与当前 region / currency 绑定。

---

## SUB-001 — 首期优惠与后续标准价格透明

适用：
- `PROMO_TO_STANDARD=true`；或
- 订阅突出 Intro / First month / First year 优惠。

若突出首期优惠，但在合理距离无法找到后续标准价：`ISSUE`。

不判断折扣是否“足够大”。

---

## SUB-002 — 扣费周期透明

适用：`RECURRING=true`。

必须能合理确认周期，例如：
- weekly；
- monthly；
- annually；
- every 30 days；
- per delivery。

无法确认 → `ISSUE`。

---

## SUB-003 — 自动续费事实透明

适用：周期收费或试用转收费。

如果交易事实上是周期收费，但购买路径无法合理确认 auto-renew / recurring / continues until cancelled 等事实：`ISSUE`。

---

## SUB-004 — 免费试用转付费透明

适用：`TRIAL_TO_PAID=true`。

至少需要能确认：
- 试用时长；
- 试用后收费金额 / 对应计划；
- 是否自动转付费。

关键事实缺失 → `ISSUE`。

---

## SUB-005 — 取消核心条款透明

适用：`RECURRING=true`。

至少尝试确认：
- 如何取消；
- 是否有取消 / 下一计费截止时间；
- 第三方平台购买由谁管理（若适用）。

本规则只评价核心条件是否能合理发现。

不得判断：
> 这个取消策略商业上是否最好。

---

# 3. 首版明确不检测

以下保留在运营 Skill，但不进入首版自动可信规则：

- 最优价格；
- 折扣力度；
- 免邮门槛；
- 免费退货；
- 评论数量 / 评论位置；
- CTA 文案优劣；
- 弹窗策略；
- 交叉销售强度；
- 商品图片应该有几张；
- 总体 Trust Score；
- 收入损失估算。

原因：这些问题的商业价值很高，但当前自动系统没有资格给出通用答案。
