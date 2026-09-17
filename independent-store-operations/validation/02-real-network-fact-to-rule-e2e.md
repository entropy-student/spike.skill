# 真实网络事实提取 → 规则判断端到端验证

日期：2026-09-17

## 目的

验证开发前最关键的链路：

```text
真实公开网站
→ Scrapy 静态抓取
→ 必要时浏览器兜底
→ 标准化事实
→ 冻结的 17 条首版可信规则
→ PASS / ISSUE / NOT_APPLICABLE / CONTEXT_INSUFFICIENT
```

本验证不证明商业因果，也不评价参与校准的网站好坏。

## 前置验证

### 规则判断层

- 17 条规则；
- 每条正例 / 反例 / 边界例；
- 合计 51 个 Fixture；
- 结果：`51 / 51 PASS`。

Gate：

`PASS_CANDIDATE_MTRS_RULE_ENGINE_SYNTHETIC_FIXTURES`

### 真实网络事实层

真实联网校准集：10 个目标，其中：

- 9 个普通可评分目标；
- 1 个地区上下文保护目标。

结果：

```text
普通目标覆盖率        9 / 9 = 100%
事实检查              26 / 26
事实不一致            0
观测一致率            100%
地区上下文误用        0
```

静态层 Gate：

`PASS_CANDIDATE_REAL_NETWORK_STATIC_EXTRACTION`

混合层 Gate：

`PASS_CANDIDATE_REAL_NETWORK_HYBRID_EXTRACTION`

## 真实网络规则端到端结果

使用真实抓取结果生成标准化事实，并送入冻结规则判断器。

```text
真实规则断言          28
通过                  28
失败                  0
意外 ISSUE            0
地区上下文误用        0
```

Gate：

`PASS_CANDIDATE_REAL_NETWORK_FACT_TO_RULE_E2E`

## 地区上下文保护

Glossier 日本路径校准样本：

1. 静态层收到 302，无法确认日本上下文；
2. 浏览器最终进入美国页面；
3. 系统标记 `GEO_CONTEXT_MISMATCH`；
4. 不用美国页面事实评价日本页面；
5. 规则层输出 `CONTEXT_INSUFFICIENT`。

这一行为是正确结果，不应为了“100% 抓取成功”而绕开。

## Reviewer 解读

本轮已经证明：

1. 规则判断边界在合成正反例上稳定；
2. 真实公网抓取能够提取当前校准集中的关键事实；
3. 静态抓取不足时可以有限升级浏览器；
4. 地区上下文错误时会停止判断；
5. 真实事实进入规则层后没有产生意外 ISSUE。

仍未证明：

1. 17 条规则在所有网站技术栈上都具有同等覆盖率；
2. 真实世界所有 ISSUE 的 Precision 已达到生产标准；
3. 页面风险等于营收根因；
4. 当前实现已经满足生产网络隔离、队列、并发、成本和可观测性要求。

因此本 Gate 的含义是：

> **开发前理论 / 规则 / 事实接口已经足够稳定，可以进入受限扫描器 V0 实现；不等于商业产品可以直接上线。**

## 后续要求

真实开发阶段必须保持回归：

- synthetic rules：51 / 51；
- real fact assertions：26 / 26（Gold Set 未发生真实变化时）；
- real rule assertions：28 / 28；
- context misuse：0；
- unexpected ISSUE：0；
- 发现网页真实变化时先更新 Gold Set，不把变化硬算成爬虫错误。
