# Real-site Gold Calibration v0.1

## Purpose

This dataset provides public-page ground-truth facts for future Scrapy/browser precision calibration. It is not a CRO score, brand ranking, or causal diagnosis.

## Current coverage

- 11 public sites/pages
- 52 fact assertions
- One-time + subscription dual offers
- Auto-renewal / cancellation deadlines
- Trial → paid
- Promo → standard pricing
- Region / currency differences
- Physical product + separate membership relationships
- Returns policies
- Catalog filter / sort behavior

## Current Gate

`PASS_REAL_SITE_GOLDSET_PREPARATION`

This does **not** mean the crawler has passed real-network precision calibration. The current execution environment cannot install/run Scrapy against the public internet.

## Next Gate

`REAL_NETWORK_FACT_EXTRACTION_PRECISION`

When a network-enabled runner is available:

1. Crawl the exact URLs in `real-site-gold-v0.1.json`.
2. Record final URL, region, currency, timestamp, viewport, and access state.
3. Normalize facts using the same fact schema used by local fixtures.
4. Compare observed facts with the gold assertions.
5. Treat page changes as gold-set drift, not automatically as crawler errors.

Acceptance targets remain:
- fact extraction agreement >= 95% on scorable assertions;
- crawler/access failure misreported as site issue = 0;
- claim overreach = 0.

## Sources

The dataset records the exact public URLs used as ground truth. Because commercial pages change over time, every future calibration run must re-check date, region, final URL, and currency before scoring discrepancies.
