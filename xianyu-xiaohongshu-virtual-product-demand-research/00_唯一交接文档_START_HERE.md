# 唯一交接文档 — 闲鱼 / 小红书虚拟商品需求研究 v2.1

## 当前版本

- VERSION=`2.1.0`
- STATUS=`ACTIVE`
- 主入口：`SKILL.md`
- 默认模式：`MARKET_MAP`
- 可选模式：`TEST`

## v2.1 Reviewer Fix

独立 Reviewer 对 v2.0.1 的核心结论被接受：

1. 供给重复不能制度化地升级为需求；
2. 商品族证据不能向更细 SKU/Bundle 下传；
3. “可复核”需要最低 Observation 记录；
4. 需要轻量 Coverage / Refresh / Stop；
5. Demand 与 Risk 必须分列；
6. Test Mode 必须区分“继续补证”和“已经可真实测试”。

## 当前规则摘要

~~~text
Transaction > Intent > Attention > Supply
D4 = same-scope transaction
D3 = replicated independent buyer-side evidence
D2 = one buyer-side signal
D1 = supply/category only
U  = unknown
~~~

~~~text
CONFIRMED_DEMAND = D4
PROBABLE_DEMAND  = D3
WATCHLIST        = D2/D1/U
~~~

Risk 独立：
`NO_FLAG_OBSERVED / REVIEW_REQUIRED / HIGH_RISK / UNKNOWN`

## Test Mode

- `RESEARCH_NEXT`：值得继续补证，不代表该真实测试。
- `TEST_READY`：需求、规则、经济性、交付/权利风险等关键项已过门槛。
- `PRIORITY_TEST`：仅当用户明确要求只选一个时，从 TEST_READY 中选择。

## 历史

- `history/v1.0.0/`：完整 v1。
- `history/v2.0.1/`：独立 Reviewer 修订前的轻量版，原样归档。

日常不要读取 history，除非做设计追溯。
