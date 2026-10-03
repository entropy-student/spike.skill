# Research Ledger Template

一轮研究只需要这一张轻量底稿。已有底稿时优先更新，不要每次从零开始。

## A. Run

~~~text
RUN_ID=
RUN_DATE=
PLATFORM=
SCOPE=
MODE=MARKET_MAP
PREVIOUS_RUN=
REFRESH_REASON=
CRITICAL_UNKNOWN=
~~~

## B. Coverage

| Market Surface | Status | Entry points / Queries | Last checked | New candidate / evidence | Stop / limitation | Refresh trigger |
|---|---|---|---|---|---|---|
|  | SCANNED / PARTIAL / BLOCKED / EXCLUDED |  |  |  |  |  |

## C. Observations

| ID | Date | Platform | Query/Surface | URL / Item ID | Seller/Source | Raw fact | Signal type | Value | Supported unit | Scope | Provenance | Lineage ID | Access limitation |
|---|---|---|---|---|---|---|---|---:|---|---|---|---|---|
| O-001 |  |  |  |  |  |  | TRANSACTION / INTENT / ATTENTION / SUPPLY |  |  | FAMILY / PRODUCT_TYPE / SKU / BUNDLE |  |  |  |

## D. Candidate State

| Candidate | Buyer evidence summary | Supply observation | D-Level | Confidence | Demand Status | Risk Status | Counterevidence | Critical Unknown | Next action |
|---|---|---|---|---|---|---|---|---|---|
|  |  |  | D4/D3/D2/D1/U | HIGH/MEDIUM/LOW | CONFIRMED/PROBABLE/WATCHLIST | NO_FLAG_OBSERVED/REVIEW_REQUIRED/HIGH_RISK/UNKNOWN |  |  |  |

## E. Stop Check

- [ ] Relevant market surfaces all have coverage status.
- [ ] Critical Unknowns that could change top candidate status are resolved or explicitly blocked.
- [ ] At least two materially different remaining search/entry paths produced no new candidate or status-changing buyer evidence.
- [ ] Access limitations are explicit.
- [ ] No supply-only pattern was promoted to D3/D4.
- [ ] No family evidence was inherited downward to a narrower SKU/Bundle.
