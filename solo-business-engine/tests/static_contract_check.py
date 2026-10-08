#!/usr/bin/env python3
"""Static contract and packaging checks; not a real market or LLM scenario benchmark."""
from pathlib import Path
import json, csv, sys
base = Path(__file__).resolve().parents[1]
required = [
'SKILL.md','README.md','RESEARCH_REPORT.md','SOURCE_LEDGER.md',
'METHOD_COMPARISON.md','OPERATING_MANUAL.md','INDEPENDENT_REVIEW_PROTOCOL.md',
'references/01_reasoning_model.md','references/02_opportunity_framework.md',
'references/03_buyer_money_trails.md','references/04_channels.md',
'references/05_sales_offer.md','references/06_economics.md',
'references/07_experiments.md','references/08_compliance.md',
'references/09_adversarial.md', 'templates/lead_ledger.csv',
 'templates/opportunity_ledger.csv','templates/channel_experiments.csv',
 'templates/economics.csv','templates/owner_profile.md','templates/lite_experiment.md',
 'tests/fixtures.json','examples/FOUR_MODEL_WALKTHROUGHS.md'
]
missing = [x for x in required if not (base/x).is_file()]
assert not missing, f'missing files: {missing}'
for p in (base/'templates').glob('*.csv'):
    with p.open(encoding='utf-8-sig',newline='') as f:
        cols=next(csv.reader(f))
    assert len(cols)>=8 and len(cols)==len(set(cols)), (p,cols)
fix=json.loads((base/'tests/fixtures.json').read_text(encoding='utf-8'))
assert len(fix)>=18 and len(fix)==len({x['id'] for x in fix})
for x in fix:
    assert x['signal'] and x['must_include'] and x['forbid_claims']
skill=(base/'SKILL.md').read_text(encoding='utf-8')
for needle in ['DISCOVER','FIRST_MONEY','OPERATE','PORTFOLIO','G0','G1','G2','G3','G4','G5','Why Us','BLOCKED_BY_REAL_INPUT','INCONCLUSIVE','付款人','退款','人工','Owner']:
    assert needle in skill, needle
for p in base.rglob('*.md'):
    text=p.read_text(encoding='utf-8')
    assert len(text.strip())>90, f'empty or too small: {p}'
print('FILES_OK',len(required),'CSV_SCHEMAS_OK',len(list((base/'templates').glob('*.csv'))),'SYNTHETIC_FIXTURES_PRESENT',len(fix),'STATIC_CONTRACT_OK')
print('NOTE: structural test only, no real Agent behavioral testing or commercial validation performed')
