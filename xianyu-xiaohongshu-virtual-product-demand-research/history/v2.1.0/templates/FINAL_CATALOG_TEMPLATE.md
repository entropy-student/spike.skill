# Final Catalog Template v2.1

## Research Contract

~~~text
PLATFORM=
SCOPE=
MODE=MARKET_MAP
DATE_WINDOW=
LEDGER=
IMPORTANT_UNKNOWN=
~~~

## Coverage Boundary

| Market Surface | Coverage | Limitation |
|---|---|---|
|  | SCANNED / PARTIAL / BLOCKED / EXCLUDED |  |

## Final Catalog

| 商品类型 / SKU | 平台 | 价格带 | Buyer Evidence | Supply Observation | Scope | D-Level | Confidence | Demand Status | Risk Status | Counterevidence | Source IDs |
|---|---|---:|---|---|---|---|---|---|---|---|---|
|  |  |  |  |  | FAMILY / PRODUCT_TYPE / SKU / BUNDLE | D4/D3/D2/D1/U | HIGH/MEDIUM/LOW | CONFIRMED_DEMAND / PROBABLE_DEMAND / WATCHLIST | NO_FLAG_OBSERVED / REVIEW_REQUIRED / HIGH_RISK / UNKNOWN |  |  |

## Interpretation

- CONFIRMED_DEMAND = D4 only.
- PROBABLE_DEMAND = D3.
- WATCHLIST = D2/D1/U.
- Risk Status 独立于 Demand Status。
- Supply repetition 不可单独升级 Demand。
- Evidence 不得向更细 Scope 下传。

## Key Limitations

必须说明：
- 哪些只是 Supply / Attention / Intent；
- 哪些来源动态或无法稳定复现；
- 哪些是 DERIVED_ADJACENT；
- 哪些 Critical Unknown 仍未解决；
- 本轮没有覆盖到哪些市场面。

## Optional Test Mode

只有用户明确要求实际售卖/测试决策时，再追加：
- TEST_READY
- RESEARCH_NEXT
- HOLD / KILL / NO_PICK
- 必要时 PRIORITY_TEST / BACKUP
