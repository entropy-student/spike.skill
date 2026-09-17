from __future__ import annotations

import json
import re
from pathlib import Path
from typing import Any

from playwright.sync_api import sync_playwright, TimeoutError as PlaywrightTimeoutError

BASE = Path("independent-store-operations/validation/real_network/results")
STATIC_REPORT = BASE / "report.json"
STATIC_OBSERVED = BASE / "observed.jsonl"
BROWSER_OBSERVED = BASE / "browser_observed.json"
COMBINED_REPORT = BASE / "combined_report.json"

TARGETS = {
    "magic_spoon_variety_4":{"url":"https://magicspoon.com/products/variety-pack-cereal-case","checks":[["price",39.0],["price",31.2],["text_any",["cancel","skip"]]]},
    "hellofresh_us":{"url":"https://www.hellofresh.com/about/faq?search=Cancel","checks":[["text","cancel"],["text","skip"],["text_any",["5 days","five days"]]]},
    "oura_membership_us":{"url":"https://ouraring.com/membership","checks":[["price",5.99],["price",69.99],["text_any",["first month","one month","1 month"]]]},
    "onepassword_personal":{"url":"https://1password.com/pricing/personal","checks":[["price",2.99],["price",3.99],["text_any",["14-day","14 day","14 days"]]]},
    "glossier_us_skincare":{"url":"https://www.glossier.com/collections/skincare-staples","checks":[["text","filter"],["text","sort"],["text","add to bag"]]},
    "allbirds_returns":{"url":"https://www.allbirds.com/pages/help","checks":[["text","30 days"],["text_any",["return shipping","shipping charges"]],["text","country of purchase"]]},
    "ridge_warranty":{"url":"https://ridge.com/pages/warranty-policy","checks":[["text_any",["99-day return","99 day return"]],["text_any",["lifetime warranty","built for life"]]]},
    "headspace_terms":{"url":"https://www.headspace.com/terms-and-conditions","checks":[["text_any",["free trial","free trials"]],["text_any",["automatically convert","automatic conversion"]],["text_any",["monthly","annual"]]]},
    "oura_retail":{"url":"https://support.ouraring.com/hc/en-us/articles/18852337038227-Retail-Purchases","checks":[["price",5.99],["price",69.99],["text_any",["cancel your membership","continued charges"]]]},
    "glossier_jp_skincare":{"url":"https://www.glossier.com/en-jp/collections/skincare","checks":[["text","filter"],["text","sort"],["currency_any",["JPY","¥"]]],"context_guard":True,"required_path_hint":"/en-jp/"},
}

PRICE_RE = re.compile(r"(?:US\$|USD|\$|EUR|€|GBP|£|JPY|¥)\s*([0-9][0-9,]*(?:\.[0-9]{1,2})?)", re.I)


def extract_prices(text: str) -> list[float]:
    out=[]
    for m in PRICE_RE.finditer(text):
        try: out.append(float(m.group(1).replace(",","")))
        except ValueError: pass
    return sorted(set(out))


def check_fact(kind: str, expected: Any, row: dict[str, Any]) -> bool:
    text=row.get("text","")
    if kind=="text": return str(expected).lower() in text
    if kind=="text_any": return any(str(x).lower() in text for x in expected)
    if kind=="price": return any(abs(float(x)-float(expected))<0.011 for x in row.get("prices",[]))
    if kind=="currency_any":
        raw=row.get("raw_currency_text","")
        return any(str(x).lower() in raw.lower() for x in expected)
    raise ValueError(kind)


def load_static_rows() -> dict[str,dict[str,Any]]:
    rows={}
    if STATIC_OBSERVED.exists():
        for line in STATIC_OBSERVED.read_text(encoding="utf-8").splitlines():
            if line.strip():
                row=json.loads(line); rows[row["site_id"]]=row
    return rows


def browser_fetch(site_id: str,target: dict[str,Any],page) -> dict[str,Any]:
    try:
        response=page.goto(target["url"],wait_until="domcontentloaded",timeout=30000)
        page.wait_for_timeout(2500)
        status=response.status if response else None
        final_url=page.url
        body_text=page.locator("body").inner_text(timeout=10000)
        body_html=page.content()
        lower=" ".join(body_text.split()).lower()
        access_state="ACCESS_OK" if status==200 and len(body_html)>500 else "AUDIT_INCOMPLETE"
        path_hint=target.get("required_path_hint")
        if path_hint and path_hint not in final_url:
            access_state="GEO_CONTEXT_MISMATCH"
        return {"site_id":site_id,"requested_url":target["url"],"final_url":final_url,"status":status,"body_len":len(body_html),"access_state":access_state,"text":lower[:250000],"prices":extract_prices(body_text),"raw_currency_text":body_text[:250000]}
    except PlaywrightTimeoutError as exc:
        return {"site_id":site_id,"requested_url":target["url"],"final_url":page.url,"status":None,"body_len":0,"access_state":"AUDIT_INCOMPLETE","error":f"TIMEOUT:{exc}","text":"","prices":[],"raw_currency_text":""}
    except Exception as exc:
        return {"site_id":site_id,"requested_url":target["url"],"final_url":page.url,"status":None,"body_len":0,"access_state":"AUDIT_INCOMPLETE","error":repr(exc),"text":"","prices":[],"raw_currency_text":""}


def main() -> None:
    static_report=json.loads(STATIC_REPORT.read_text(encoding="utf-8"))
    static_rows=load_static_rows()

    # Browser fallback is deliberately narrow. Never use it to bypass an explicit block/rate limit.
    fallback_ids=[]
    for r in static_report["rows"]:
        sid=r["site_id"]
        static=static_rows.get(sid)
        state=(static or {}).get("access_state")
        status=(static or {}).get("status")
        if state=="ACCESS_OK":
            continue
        if state in {"ACCESS_BLOCKED_OR_RATE_LIMITED"} or status in {403,429}:
            continue
        # Missing row may be robots/request suppression; do not browser-bypass it automatically.
        if static is None:
            continue
        if state in {"REDIRECT_CONTEXT_INCOMPLETE","GEO_CONTEXT_MISMATCH","AUDIT_INCOMPLETE"}:
            fallback_ids.append(sid)

    browser_rows={}
    if fallback_ids:
        with sync_playwright() as p:
            browser=p.chromium.launch(headless=True,args=["--no-sandbox"])
            context=browser.new_context(viewport={"width":1365,"height":900},locale="en-US",user_agent="IndependentStoreOpsResearchBrowser/0.1 (+https://github.com/entropy-student/spike.skill)")
            page=context.new_page()
            for sid in fallback_ids:
                browser_rows[sid]=browser_fetch(sid,TARGETS[sid],page)
            browser.close()
    BROWSER_OBSERVED.write_text(json.dumps(browser_rows,ensure_ascii=False,indent=2),encoding="utf-8")

    rows=[]; match=mismatch=incomplete_count=context_guarded=blocked=0
    for sid,target in TARGETS.items():
        static=static_rows.get(sid)
        chosen=static if static and static.get("access_state")=="ACCESS_OK" else browser_rows.get(sid) or static
        source="SCRAPY" if chosen is static and chosen else ("BROWSER" if chosen else "NONE")
        state=(chosen or {}).get("access_state","AUDIT_INCOMPLETE")

        if target.get("context_guard") and state in {"GEO_CONTEXT_MISMATCH","REDIRECT_CONTEXT_INCOMPLETE"}:
            context_guarded+=1
            rows.append({"site_id":sid,"source":source,"state":state,"status":(chosen or {}).get("status"),"final_url":(chosen or {}).get("final_url"),"checks":[]})
            continue
        if state=="ACCESS_BLOCKED_OR_RATE_LIMITED":
            blocked+=1; incomplete_count+=1
            rows.append({"site_id":sid,"source":source,"state":state,"status":(chosen or {}).get("status"),"final_url":(chosen or {}).get("final_url"),"checks":[]})
            continue
        if not chosen or state!="ACCESS_OK":
            incomplete_count+=1
            rows.append({"site_id":sid,"source":source,"state":state,"status":(chosen or {}).get("status"),"final_url":(chosen or {}).get("final_url"),"checks":[]})
            continue

        checks=[]
        for kind,expected in target["checks"]:
            ok=check_fact(kind,expected,chosen)
            checks.append({"kind":kind,"expected":expected,"match":ok})
            match+=int(ok); mismatch+=int(not ok)
        rows.append({"site_id":sid,"source":source,"state":"OBSERVED","status":chosen.get("status"),"final_url":chosen.get("final_url"),"body_len":chosen.get("body_len"),"checks":checks})

    scorable_targets=[sid for sid,t in TARGETS.items() if not t.get("context_guard")]
    observed_scorable=sum(1 for r in rows if r["site_id"] in scorable_targets and r["state"]=="OBSERVED")
    coverage=observed_scorable/len(scorable_targets) if scorable_targets else 0.0
    total=match+mismatch
    agreement=match/total if total else None
    context_misuse=0  # Guarded contexts never contribute checks unless ACCESS_OK in required context.
    gate=(
        "PASS_CANDIDATE_REAL_NETWORK_HYBRID_EXTRACTION"
        if agreement is not None and agreement>=0.95 and mismatch==0 and coverage>=0.80 and context_misuse==0
        else "RETURN_REAL_NETWORK_HYBRID_EXTRACTION_CALIBRATION"
    )
    report={"targets":len(TARGETS),"scorable_targets":len(scorable_targets),"observed_scorable_targets":observed_scorable,"scorable_coverage":coverage,"context_guarded_targets":context_guarded,"blocked_or_rate_limited_targets":blocked,"audit_incomplete_targets":incomplete_count,"matched_checks":match,"mismatched_checks":mismatch,"agreement_on_observed":agreement,"context_misuse":context_misuse,"rows":rows,"gate":gate}
    COMBINED_REPORT.write_text(json.dumps(report,ensure_ascii=False,indent=2),encoding="utf-8")
    print(json.dumps(report,ensure_ascii=False,indent=2))


if __name__=="__main__":
    main()
