from __future__ import annotations

import json
import re
from pathlib import Path
from typing import Any

import scrapy
from scrapy.crawler import CrawlerProcess

OUT = Path("independent-store-operations/validation/real_network/results")
OUT.mkdir(parents=True, exist_ok=True)
RAW = OUT / "observed.jsonl"
REPORT = OUT / "report.json"

TARGETS = [
    {
        "site_id": "magic_spoon_variety_4",
        "url": "https://magicspoon.com/products/variety-pack-cereal-case",
        "checks": [
            ["price", 39.0],
            ["price", 31.2],
            ["text_any", ["cancel", "skip"]],
        ],
    },
    {
        "site_id": "hellofresh_us",
        "url": "https://www.hellofresh.com/about/faq?search=Cancel",
        "checks": [
            ["text", "cancel"],
            ["text", "skip"],
            ["text_any", ["5 days", "five days"]],
        ],
    },
    {
        "site_id": "oura_membership_us",
        "url": "https://ouraring.com/membership",
        "checks": [
            ["price", 5.99],
            ["price", 69.99],
            ["text_any", ["first month", "one month", "1 month"]],
        ],
    },
    {
        "site_id": "onepassword_personal",
        "url": "https://1password.com/pricing/personal",
        "checks": [
            ["price", 2.99],
            ["price", 3.99],
            ["text_any", ["14-day", "14 day", "14 days"]],
        ],
    },
    {
        "site_id": "glossier_jp_skincare",
        "url": "https://www.glossier.com/en-jp/collections/skincare",
        "checks": [
            ["text", "filter"],
            ["text", "sort"],
            ["currency_any", ["JPY", "¥"]],
        ],
    },
]

PRICE_RE = re.compile(r"(?:US\$|USD|\$|EUR|€|GBP|£|JPY|¥)\s*([0-9][0-9,]*(?:\.[0-9]{1,2})?)", re.I)


def normalize_text(text: str) -> str:
    return " ".join(text.split()).lower()


def extract_prices(text: str) -> list[float]:
    vals: list[float] = []
    for m in PRICE_RE.finditer(text):
        try:
            vals.append(float(m.group(1).replace(",", "")))
        except ValueError:
            pass
    return sorted(set(vals))


def check_fact(kind: str, expected: Any, observed: dict[str, Any]) -> bool:
    text = observed.get("text", "")
    if kind == "text":
        return str(expected).lower() in text
    if kind == "text_any":
        return any(str(x).lower() in text for x in expected)
    if kind == "price":
        return any(abs(float(x) - float(expected)) < 0.011 for x in observed.get("prices", []))
    if kind == "currency_any":
        raw = observed.get("raw_currency_text", "")
        return any(str(x).lower() in raw.lower() for x in expected)
    raise ValueError(kind)


class GoldSpider(scrapy.Spider):
    name = "independent_store_ops_gold"
    custom_settings = {
        "ROBOTSTXT_OBEY": True,
        "CONCURRENT_REQUESTS": 2,
        "CONCURRENT_REQUESTS_PER_DOMAIN": 1,
        "DOWNLOAD_DELAY": 1.0,
        "RANDOMIZE_DOWNLOAD_DELAY": True,
        "DOWNLOAD_TIMEOUT": 20,
        "RETRY_TIMES": 1,
        "REDIRECT_MAX_TIMES": 5,
        "COOKIES_ENABLED": False,
        "TELNETCONSOLE_ENABLED": False,
        "LOG_LEVEL": "INFO",
        "USER_AGENT": "IndependentStoreOpsResearchBot/0.1 (+https://github.com/entropy-student/spike.skill)",
        "FEEDS": {str(RAW): {"format": "jsonlines", "overwrite": True}},
    }

    def start_requests(self):
        for target in TARGETS:
            yield scrapy.Request(
                target["url"],
                callback=self.parse_target,
                errback=self.err_target,
                cb_kwargs={"target": target},
                meta={"handle_httpstatus_all": True},
                dont_filter=True,
            )

    def parse_target(self, response: scrapy.http.Response, target: dict[str, Any]):
        text_original = " ".join(response.css("body ::text").getall())
        normalized = normalize_text(text_original)
        raw_html = response.text
        status = int(response.status)
        body_len = len(raw_html)
        access_state = "ACCESS_OK" if status == 200 and body_len > 500 else "AUDIT_INCOMPLETE"
        if status in (403, 429):
            access_state = "ACCESS_BLOCKED_OR_RATE_LIMITED"
        yield {
            "site_id": target["site_id"],
            "requested_url": target["url"],
            "final_url": response.url,
            "status": status,
            "body_len": body_len,
            "access_state": access_state,
            "text": normalized[:250000],
            "prices": extract_prices(text_original),
            "raw_currency_text": text_original[:250000],
        }

    def err_target(self, failure):
        req = failure.request
        target = next(t for t in TARGETS if t["url"] == req.url)
        yield {
            "site_id": target["site_id"],
            "requested_url": target["url"],
            "final_url": req.url,
            "status": None,
            "body_len": 0,
            "access_state": "AUDIT_INCOMPLETE",
            "error": repr(failure.value),
            "text": "",
            "prices": [],
            "raw_currency_text": "",
        }


def build_report() -> dict[str, Any]:
    observed = {}
    if RAW.exists():
        for line in RAW.read_text(encoding="utf-8").splitlines():
            if line.strip():
                row = json.loads(line)
                observed[row["site_id"]] = row

    rows = []
    match = mismatch = incomplete = 0
    for target in TARGETS:
        row = observed.get(target["site_id"])
        if not row or row.get("access_state") != "ACCESS_OK":
            incomplete += 1
            rows.append({
                "site_id": target["site_id"],
                "state": "AUDIT_INCOMPLETE",
                "status": None if not row else row.get("status"),
                "final_url": None if not row else row.get("final_url"),
                "checks": [],
            })
            continue
        checks = []
        for kind, expected in target["checks"]:
            ok = check_fact(kind, expected, row)
            checks.append({"kind": kind, "expected": expected, "match": ok})
            if ok:
                match += 1
            else:
                mismatch += 1
        rows.append({
            "site_id": target["site_id"],
            "state": "OBSERVED",
            "status": row.get("status"),
            "final_url": row.get("final_url"),
            "body_len": row.get("body_len"),
            "checks": checks,
        })

    total_scorable = match + mismatch
    agreement = match / total_scorable if total_scorable else None
    result = {
        "targets": len(TARGETS),
        "observed_targets": len(TARGETS) - incomplete,
        "audit_incomplete_targets": incomplete,
        "matched_checks": match,
        "mismatched_checks": mismatch,
        "agreement_on_observed": agreement,
        "rows": rows,
        "gate": (
            "PASS_CANDIDATE_REAL_NETWORK_STATIC_EXTRACTION"
            if total_scorable and agreement is not None and agreement >= 0.95 and mismatch == 0
            else "RETURN_REAL_NETWORK_STATIC_EXTRACTION_CALIBRATION"
        ),
    }
    REPORT.write_text(json.dumps(result, ensure_ascii=False, indent=2), encoding="utf-8")
    print(json.dumps(result, ensure_ascii=False, indent=2))
    return result


if __name__ == "__main__":
    process = CrawlerProcess()
    process.crawl(GoldSpider)
    process.start()
    report = build_report()
    # A calibration RETURN is not a CI infrastructure failure; preserve artifact and logs.
    raise SystemExit(0)
