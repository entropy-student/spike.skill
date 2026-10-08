#!/usr/bin/env python3
"""Deterministic guard checks, NOT independent LLM behavioral testing or market proof."""
from pathlib import Path
import json, csv
root=Path(__file__).resolve().parents[1]
cases=json.loads((root/'tests/business_model_cases.json').read_text(encoding='utf-8'))
assert len(cases)>=18
assert len({x['id'] for x in cases})==len(cases)
for x in cases:
    assert x['scenario'] and x['candidate_model'] and x['must_note']
    assert x['expected_rule_decision'] in {'TEST','HOLD','REJECT','INCONCLUSIVE'}
    assert x['evidence_scope']=='SYNTHETIC_RULE_EXAMPLE'
    assert ('可规模化' not in x['must_note'] or '不宣称' in x['must_note'])
main=(root/'SKILL.md').read_text(encoding='utf-8')
for s in ['MODEL_DESIGN','PRODUCTIZE','G0','G5','BUSINESS_MODEL_FIT','PRODUCTIZATION_HYPOTHESIS','ASSET_COMPOUNDING','TIME_FREEDOM','Owner','INCONCLUSIVE']:
    assert s in main, f'missing essential contract {s}'
for n in ['04a_acquisition_router.md','10_business_model_architecture.md','11_productization_automation.md','12_compounding_and_portfolio.md']:
    assert (root/'references'/n).exists()
    assert n in main
for n in ['business_model_comparison.csv','leverage_economics.csv']:
    with (root/'templates'/n).open(encoding='utf-8',newline='') as f:
        cols=next(csv.reader(f))
    assert len(cols)>=12 and len(cols)==len(set(cols)),(n,cols)
print('BUSINESS_MODEL_SCENARIOS_CONTRACT_PASS',len(cases))
print('BUSINESS_MODEL_MODES_MODULES_AND_CSV_PASS')
print('LIMITATION scenarios are authored expected outcomes, NOT independent agent trial')
