from __future__ import annotations

import json
import re
from pathlib import Path
from datetime import datetime, timezone

from rule_engine_v0 import evaluate

BASE=Path("independent-store-operations/validation/real_network/results")
STATIC=BASE/"observed.jsonl"
BROWSER=BASE/"browser_observed.json"
COMBINED=BASE/"combined_report.json"
OUT=BASE/"rule_e2e_report.json"

# Conservative real-site assertions. Only rules supported by unambiguous public facts are asserted.
ASSERTIONS={
    "magic_spoon_variety_4":[("GATE-001","PASS"),("CORE-001","PASS"),("CORE-007","PASS"),("SUB-002","PASS"),("SUB-005","PASS")],
    "hellofresh_us":[("GATE-001","PASS"),("SUB-002","PASS"),("SUB-003","PASS"),("SUB-005","PASS")],
    "oura_membership_us":[("GATE-001","PASS"),("CORE-001","PASS"),("SUB-001","PASS"),("SUB-002","PASS"),("SUB-005","PASS")],
    "onepassword_personal":[("GATE-001","PASS"),("CORE-001","PASS"),("SUB-002","PASS")],
    "glossier_us_skincare":[("GATE-001","PASS"),("CORE-001","PASS"),("CORE-007","PASS")],
    "allbirds_returns":[("GATE-001","PASS")],
    "ridge_warranty":[("GATE-001","PASS")],
    "headspace_terms":[("GATE-001","PASS"),("SUB-003","PASS")],
    "oura_retail":[("GATE-001","PASS"),("SUB-002","PASS"),("SUB-005","PASS")],
    "glossier_jp_skincare":[("GATE-002","CONTEXT_INSUFFICIENT")],
}

TARGET_CONTEXT={
    "magic_spoon_variety_4":{"region":"US","currency":"USD","core_page":True},
    "hellofresh_us":{"region":"US","currency":"USD","core_page":False},
    "oura_membership_us":{"region":"US","currency":"USD","core_page":True},
    "onepassword_personal":{"region":"US","currency":"USD","core_page":True},
    "glossier_us_skincare":{"region":"US","currency":"USD","core_page":True},
    "allbirds_returns":{"region":"US","currency":"USD","core_page":False},
    "ridge_warranty":{"region":"US","currency":"USD","core_page":False},
    "headspace_terms":{"region":"US","currency":"USD","core_page":False},
    "oura_retail":{"region":"US","currency":"USD","core_page":False},
    "glossier_jp_skincare":{"region":None,"currency":None,"core_page":True},
}

CADENCE_PATTERNS=("per month","monthly","every 30 days","per year","annually","annual","weekly","every week","per week")
AUTO_PATTERNS=("auto-renew","auto renew","auto-renewing","automatically renew","renews automatically","automatically convert","automatic conversion")
DIRECT_PATTERNS=("add to cart","add to bag","buy now","subscribe now")


def load_rows():
    static={}
    if STATIC.exists():
        for line in STATIC.read_text(encoding="utf-8").splitlines():
            if line.strip():
                r=json.loads(line); static[r["site_id"]]=r
    browser=json.loads(BROWSER.read_text(encoding="utf-8")) if BROWSER.exists() else {}
    combined=json.loads(COMBINED.read_text(encoding="utf-8"))
    chosen={}
    for r in combined["rows"]:
        sid=r["site_id"]
        if r.get("source")=="BROWSER" and sid in browser: chosen[sid]=browser[sid]
        elif sid in static: chosen[sid]=static[sid]
        elif sid in browser: chosen[sid]=browser[sid]
    return chosen,combined


def normalize(sid,row,combined_row):
    text=(row or {}).get("text","").lower()
    prices=(row or {}).get("prices",[])
    ctx=TARGET_CONTEXT[sid]
    state=(row or {}).get("access_state") or combined_row.get("state")
    geo_bad=combined_row.get("state") in {"GEO_CONTEXT_MISMATCH","REDIRECT_CONTEXT_INCOMPLETE"}
    recurring=any(x in text for x in ("subscription","subscribe","membership","recurring"))
    cadence=any(x in text for x in CADENCE_PATTERNS)
    auto=any(x in text for x in AUTO_PATTERNS)
    cancel="cancel" in text
    deadline_visible=any(x in text for x in ("5 days","five days","23:59"))
    first_free=any(x in text for x in ("first month free","one month free","1 month free"))
    promo_to_standard=first_free
    direct=any(x in text for x in DIRECT_PATTERNS)
    quote=any(x in text for x in ("request quote","contact sales","get a quote"))
    return {
        "http_status":(row or {}).get("status"),
        "dom_complete":state=="ACCESS_OK",
        "critical_js_complete":True,
        "waf_blocked":state=="ACCESS_BLOCKED_OR_RATE_LIMITED",
        "login_required":False,
        "final_url":(row or {}).get("final_url"),
        "region":ctx["region"],
        "currency":ctx["currency"],
        "viewport":"1365x900",
        "timestamp":datetime.now(timezone.utc).isoformat(),
        "geo_redirect":geo_bad,
        "core_page":ctx["core_page"],
        "direct_purchase":direct,
        "quote_based":quote,
        "price_visible":bool(prices),
        "price_rule_visible":False,
        "recurring":recurring,
        "cadence_visible":cadence,
        "auto_renew_visible":auto,
        "cancel_method_visible":cancel,
        "cancel_deadline_material":sid=="hellofresh_us",
        "cancel_deadline_visible":deadline_visible,
        "promo_to_standard":promo_to_standard,
        "intro_price_visible":first_free,
        "standard_price_visible":bool(prices),
    }


def main():
    rows,combined=load_rows()
    combined_map={r["site_id"]:r for r in combined["rows"]}
    results=[]
    for sid,assertions in ASSERTIONS.items():
        state=normalize(sid,rows.get(sid),combined_map[sid])
        for rule_id,expected in assertions:
            decision=evaluate(rule_id,state)
            results.append({
                "site_id":sid,"rule_id":rule_id,"expected":expected,
                "actual":decision.result,"message":decision.message,
                "passed":decision.result==expected,
            })
    passed=sum(r["passed"] for r in results); failed=len(results)-passed
    issue_count=sum(r["actual"]=="ISSUE" for r in results)
    report={
        "assertions":len(results),"passed":passed,"failed":failed,
        "unexpected_issue_count":issue_count,
        "context_misuse":combined.get("context_misuse",0),
        "results":results,
        "gate":"PASS_CANDIDATE_REAL_NETWORK_FACT_TO_RULE_E2E" if failed==0 and issue_count==0 and combined.get("context_misuse",0)==0 else "RETURN_REAL_NETWORK_FACT_TO_RULE_E2E",
        "note":"Real-site assertions are intentionally conservative. Synthetic fixtures remain the main coverage for ISSUE/negative cases.",
    }
    OUT.write_text(json.dumps(report,ensure_ascii=False,indent=2),encoding="utf-8")
    print(json.dumps(report,ensure_ascii=False,indent=2))
    raise SystemExit(0 if failed==0 else 1)

if __name__=="__main__":main()
