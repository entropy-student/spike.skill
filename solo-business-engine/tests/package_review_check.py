#!/usr/bin/env python3
"""Cross-file and provenance audit. It does not simulate customers or model responses."""
from pathlib import Path
import re,csv,json
root=Path(__file__).resolve().parents[1]
mds=list(root.rglob('*.md'))
bad=[]
for p in mds:
 t=p.read_text(encoding='utf-8')
 if not t.strip() or '\x00' in t:bad.append(('EMPTY_OR_NUL',p.as_posix()))
 # only Markdown file links to paths, not external URLs; skip anchors
 for candidate in re.findall(r'\]\(([^)]+)\)',t):
  candidate=candidate.split('#')[0]
  if not candidate or '://' in candidate or candidate.startswith(('mailto:', 'data:')):continue
  dest=(p.parent/candidate)
  if not dest.exists(): bad.append(('BROKEN_LINK',str(p.relative_to(root)),candidate))
required_sections=['## 4.1 公开线索时效','## 7.1 付款与履约','## 11.1 v0.3 历史 Review','## 11.2 v0.4','## 12.1 v0.3 历史验证资料']
skill=(root/'SKILL.md').read_text(encoding='utf-8')
for needle in required_sections:
 if needle not in skill:bad.append(('MISSING_SECTION',needle))
# public sample must not encode paid buyer outcome as our transaction
with (root/'templates/public_market_events.csv').open(encoding='utf-8',newline='') as f:
 events=list(csv.DictReader(f))
for event in events:
 if not event['source_url'].startswith('https://'):bad.append(('INVALID_URL',event['event_id']))
 if event['our_transaction_status']!='NOT_VALIDATED':bad.append(('FALSE_PAYMENT',event['event_id']))
 if event['amount_type']=='ACTUAL_BUYER_PAYMENT_TO_US':bad.append(('FALSE_AMOUNT',event['event_id']))
 if event['event_date'] and event['event_date']>'2026-10-08':bad.append(('FUTURE_DATE',event['event_id']))
assert not bad, bad
print('MARKDOWN_FILES_AUDITED',len(mds))
print('BROKEN_RELATIVE_LINKS',0)
print('MARKET_EVENTS_AUDITED',len(events))
print('RESULT PACKAGE_REVIEW_PASS')
print('LIMITATION public web pages audited manually elsewhere; commercial results NOT tested')
