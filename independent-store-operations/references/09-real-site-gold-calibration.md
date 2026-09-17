# Real-site Gold Calibration v0.2

## Purpose

本数据集用于校准真实公网抓取的事实准确率。它不是品牌评分、CRO 排名或因果诊断。

## 2026-09-17 真实联网校准结果

当前联网自动化环境已经实际运行：

```text
10 个目标页面
9 个普通可评分目标
1 个地区上下文保护目标
普通目标覆盖率 = 9/9 = 100%
事实检查 = 26/26
事实不一致 = 0
观测一致率 = 100%
地区上下文误用 = 0
```

地区保护样本：

- 请求 Glossier 日本路径；
- 静态层得到 302，上下文未确认；
- 浏览器最终进入美国页面；
- 系统返回 `GEO_CONTEXT_MISMATCH`；
- 不使用美国页面事实评价日本站。

这证明当前流水线能够做到：

> 抓得到时按金标准提取公开事实；抓到错误地区时停止评分，而不是硬猜。

## Gate

静态层：

`PASS_CANDIDATE_REAL_NETWORK_STATIC_EXTRACTION`

混合层（Scrapy 优先 + 浏览器有限兜底）：

`PASS_CANDIDATE_REAL_NETWORK_HYBRID_EXTRACTION`

注意：仍然是 `PASS_CANDIDATE`，不是商业产品上线 PASS。

## 当前边界

已证明：

- Scrapy 真实公网请求可运行；
- 公开页面文本 / 价格类事实可稳定提取；
- 真实站样本中的事实与人工金标准一致；
- 地区重定向不会被当成同一上下文继续评分；
- 浏览器只用于技术性不完整，不用于绕过明确阻断。

尚未证明：

- 真实网页标准化事实进入 17 条规则后仍全部保持正确；
- 所有复杂 JavaScript 商店都能可靠提取；
- 真实站 Issue 精度达到产品要求；
- 规则与营收结果存在因果关系。

## 下一 Gate

`REAL_NETWORK_NORMALIZED_FACTS_TO_RULE_E2E`

目标：

```text
真实网页
→ Scrapy / 必要时浏览器
→ Normalized Facts
→ 17 条可信规则
→ PASS / ISSUE / NOT_APPLICABLE / CONTEXT_INSUFFICIENT
```

验收原则：

- 规则逻辑在本 Gate 期间冻结；
- 真实站只做证据充分的断言，不为了凑 ISSUE 主观挑刺；
- unavailable fact 必须降级，而不是推断；
- claim overreach = 0；
- context misuse = 0。
