# 07 — 自动扫描器能力边界

## 1. 扫描器正确定位

扫描器的任务：

> **发现公开可观察的问题 + 用研究标记合理风险 + 告诉用户下一步需要什么证据。**

不是：

> “访问一个网址就自动找到全部营收根因。”

## 2. PUBLIC_OBSERVABLE

可以从公开网站相对稳定检查：
- 页面是否存在；
- broken links；
- HTTPS；
- 关键 CTA 基础可操作性；
- 公开价格；
- Variant 状态；
- 联系 / 关于 / 配送 / 退货等政策入口；
- 搜索 / 筛选功能存在性；
- 表单基础；
- 可访问性基础；
- Core Web Vitals 实验室指标；
- structured data；
- noindex / canonical；
- mobile layout；
- 明显运行错误。

## 3. INFERRED_RISK

可以说：

> “配送时效在购买区域不易发现；外部研究显示配送不确定性属于常见购买摩擦，因此这是值得进一步核验的风险。”

不能说：

> “这就是你没订单的原因。”

## 4. PRIVATE_DATA_REQUIRED

必须依赖店铺内部数据才能判断：
- traffic quality；
- 真实漏斗掉点；
- payment decline；
- conversion by source/device；
- refund / return rate；
- shipping delay；
- inventory accuracy；
- cohort retention；
- contribution margin；
- review authenticity。

## 5. EXPERIMENT_REQUIRED

通常必须测试：
- price；
- discount；
- free shipping threshold；
- free returns；
- CTA wording；
- Hero；
- reviews placement；
- sticky CTA；
- popup；
- bundle；
- cross-sell；
- personalization。

## 6. 扫描环境状态

必须区分：
- `ACCESS_OK`
- `ACCESS_RATE_LIMITED`
- `ACCESS_BLOCKED`
- `ACCESS_GEO_REDIRECT`
- `ACCESS_LOGIN_REQUIRED`
- `ACCESS_JS_INCOMPLETE`
- `ACCESS_UNKNOWN_FAILURE`

任何非 `ACCESS_OK`：

> **不得把“没扫描到”写成“网站缺少”。**

扫描结果至少记录：
- requested URL；
- final URL；
- timestamp；
- region；
- locale；
- currency；
- viewport；
- user agent；
- login state；
- consent state。

## 7. 禁止虚假精确

公开扫描不得自动输出：
- “预计增加 12.4% 转化”；
- “每月损失 $3,421”；
- “问题置信度 97.3%”；
- “这是你销售低的真正原因”。

除非未来存在可解释、经过真实校准的数据模型。

## 8. 生产规则质量

规则进入生产前至少经历：

```text
Definition
→ Positive / Negative / Edge Fixture
→ Human Audit
→ Store Data（如涉及行为）
→ Experiment（如做因果 Claim）
```

早期目标：

> **Precision > Recall**

因为大量无关建议会直接摧毁这个诊断产品自身的信任。
