# 10 — MTRS 可执行 Fixture Gate

## 1. Gate 目标

把首版 17 条可信规则从“文档规则”推进为未来可以被程序稳定验证的测试契约。

本 Gate 仍属于**开发前准备**。

它不授权：
- 正式扫描器产品开发；
- WordPress 项目开发；
- 支付接入；
- VPS 部署。

---

# 2. 当前 Fixture 结构

每条首版规则至少拥有：

- 1 个应通过案例；
- 1 个应触发案例；
- 1 个边界 / 抑制案例。

当前基线：

- 17 条规则；
- 51 个 Fixture；
- 统一结果枚举；
- 统一允许 / 禁止输出；
- JSON Schema 用于未来测试运行器。

---

# 3. 原型进入真实网站前的硬门槛

未来只要开始写最小检测原型，必须先对合成 Fixture 运行回归测试。

## Gate A — 结果正确性

要求：

- 51 / 51 Fixture 结果状态正确；
- 不能把 `NOT_APPLICABLE` 判成 `ISSUE`；
- 不能把 `AUDIT_INCOMPLETE` 判成站点缺陷；
- 不能在地区上下文不足时强行给配送 / 价格结论。

任何失败：

`RETURN_FIXTURE_RESULT_MISMATCH`

## Gate B — Claim 边界

即使检测状态正确，输出文案如果越界，也算失败。

例如：

事实：
> 退货信息只能从帮助中心多跳找到。

允许：
> 退货信息存在，但离当前购买决策较远。

禁止：
> 这就是你转化率低的原因。

任何越界：

`RETURN_CLAIM_OVERREACH`

## Gate C — Applicability

所有条件规则必须先证明适用性。

例如：
- 一次性购买不能启用订阅规则；
- Request Quote 不能触发“缺少价格”；
- Cart / Checkout noindex 不能触发商业页 SEO 问题；
- 数字商品不能启用实物配送 / 退货规则。

任何跨店型误报：

`RETURN_APPLICABILITY_FAILURE`

## Gate D — Scanner Fail-Closed

以下情况必须停止“缺失型”判断：

- 429；
- WAF；
- 登录墙；
- 关键脚本未加载；
- 无法确认地区上下文。

任何把扫描失败转成站点 Issue：

`RETURN_FAIL_CLOSED_VIOLATION`

---

# 4. 进入真实网站 Dry Run 的门槛

只有合成 Fixture 全部通过，才允许：

`PASS_CANDIDATE_MTRS_EXECUTABLE_FIXTURE`

然后才能进入：

`MTRS_PUBLIC_SITE_DRY_RUN`

真实站阶段重点不再看“测试能不能跑”，而看：

- Precision；
- Applicability Accuracy；
- Claim Calibration；
- Audit Incomplete Handling。

---

# 5. 真实站校准后的建议门槛

这是未来 Gate 的预设，不代表当前已经达到。

首轮建议：

### Precision

> 自动报出的 Issue 中，人工 Reviewer 认可为“真实且值得看”的比例。

目标：`>= 90%`

### Applicability Accuracy

> 被启用的条件规则中，实际适用于该店的比例。

目标：`>= 95%`

### Claim Overreach

> 检测事实正确但解释过强的比例。

目标：`0%`

### Fail-closed Violation

> 扫描不完整时仍输出缺失型结论的次数。

目标：`0`

这些门槛优先保护“报告可信度”，而不是覆盖率。

---

# 6. 为什么不先追 Recall

当前产品的价值主张依赖用户相信：

> 报告中的每个问题都有根据。

因此早期：

`Precision > Recall`

允许：
> 某些低确定性问题暂时不报。

不允许：
> 为了看起来全面，生成大量泛化建议。

---

# 7. 当前 Reviewer 结论

截至本文件建立：

- 理论框架：已冻结进入校准；
- 首版规则范围：已冻结为 17 条；
- 检测契约：已完成；
- 51 个 Fixture：已定义；
- 自动检测代码：尚未存在；
- 自动 Precision：尚不可声称；
- 原商业项目：继续 HOLD。

下一 Gate：

`MTRS_MINIMAL_DETECTOR_PROTOTYPE`

它仍然只能是**测试工具**，不是商业扫描器。
