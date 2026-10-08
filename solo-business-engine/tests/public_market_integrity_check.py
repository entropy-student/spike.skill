#!/usr/bin/env python3
"""Verify public-record schema, no recorded outreach/payment, gates, unique source events. NOT an LLM or commercial test."""
from pathlib import Path
import csv,json,subprocess,sys
root=Path(__file__).resolve().parents[1]
with (root/'templates/public_market_events.csv').open(encoding='utf-8',newline='') as f:
 records=list(csv.DictReader(f))
assert len(records)>=6
assert len({x['event_id'] for x in records})==len(records)
assert len({x['independent_event_id'] for x in records})==len(records)
assert {x['market'] for x in records}=={'B2B_SHOPIFY','B2C_WEDDING_VOWS'}
assert all(x['source_url'].startswith('https://') and x['observed_date']=='2026-10-08' for x in records)
assert all(x['our_contact_status']=='NOT_CONTACTED' and x['our_transaction_status']=='NOT_VALIDATED' for x in records)
assert all(x['amount_type']!='ACTUAL_BUYER_PAYMENT_TO_US' for x in records)
assert all(x['active_status']!='CONFIRMED_OPEN_NOW' for x in records)
fix=json.loads((root/'tests/fixtures.json').read_text(encoding='utf-8'))
expected=(root/'review/SCENARIO_EXPECTATIONS.md').read_text(encoding='utf-8')
assert len(fix)==20 and all(x['id'] in expected for x in fix)
for name in ['review/REAL_MARKET_PILOT_20261008.md','review/BUYER_TO_PAYMENT_PLAYBOOK.md','review/PUBLIC_SOURCE_VERIFICATION.md','review/SKILL_REVIEW_AND_REMEDIATION.md']:
 assert (root/name).is_file()
skill=(root/'SKILL.md').read_text(encoding='utf-8')
for token in ['PUBLIC_LISTING_OBSERVED','OPEN_STATUS_UNKNOWN','DATE_CONFLICT','PAID_NET','BLOCKED_BY_REAL_INPUT']:
 assert token in skill,token
print('PUBLIC_MARKET_EVENTS_OK',len(records))
print('PUBLIC_MARKET_UNIQUE_EVENTS_OK',len({x['independent_event_id'] for x in records}))
print('ALL_UNCONTACTED_AND_UNPAID_OK')
print('SCENARIO_EXPECTATIONS_PRESENT',len(fix))
print('CONTRACT_AND_REVIEW_DOCS_OK')
print('NOTE: does not verify source webpage availability or model reasoning or actual payments')
