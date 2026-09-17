# MTRS Rule Engine Synthetic Fixture Validation

日期：2026-09-17

## 结论

```text
TOTAL=51
PASS=51
FAIL=0
```

Reviewer 状态：

`PASS_CANDIDATE_MTRS_RULE_ENGINE_SYNTHETIC_FIXTURES`

## 证明了什么

本轮只验证：

```text
Normalized Facts
→ 17 条首版可信规则
→ PASS / ISSUE / NOT_APPLICABLE / CONTEXT_INSUFFICIENT / AUDIT_INCOMPLETE
```

51 个 Fixture 覆盖：
- 正例；
- 反例；
- 边界例；
- 适用性抑制；
- 扫描不完整；
- 地域上下文；
- 直接购买 vs 询价；
- 实物配送/退货；
- 订阅首期/后续价；
- 扣费周期；
- 自动续费；
- 试用转付费；
- 取消核心条件。

## 没有证明什么

本轮没有证明：
- 真实网页事实提取准确；
- Scrapy / 浏览器抓取稳定；
- JavaScript 动态页面识别准确；
- 真实站 Precision >= 90%；
- 规则与销售结果存在因果关系；
- 商业产品已经可以开发或上线。

因此原商业项目继续 HOLD。

## 下一 Gate

`FACT_EXTRACTION_LAYER_PROTOTYPE`

架构固定为：

```text
Scrapy / Browser
→ Normalized Facts
→ 已通过 Fixture 的 Rule Engine
→ Issue / Pass / Suppress
```

下一阶段首先验证事实提取层，禁止同时修改规则逻辑来“迎合”真实网站结果。否则无法区分抓取错误与规则错误。
