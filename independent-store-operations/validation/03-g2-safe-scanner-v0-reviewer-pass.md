# G2 Safe Scanner V0 — Reviewer Evidence PASS

日期：2026-09-17

## 1. Reviewer 结论

```text
PASS_G2_SAFE_SCANNER_V0_EVIDENCE_2026-09-17
```

该结论表示：

> Scanner V0 的开发前规则、真实网络事实、规则端到端、安全边界与连接时固定解析证据已经闭合到 Reviewer 可接受水平。

该结论**不表示**：
- 已生产上线；
- 已允许公开用户无限扫描；
- 已完成多租户生产隔离；
- 已完成 VPS 部署；
- 已完成支付；
- 已证明所有真实网站 Precision；
- 已找到任意商店营收根因。

## 2. 冻结规则与回归基线

Scanner V0 使用 17 条冻结规则：

```text
规则 Fixture          51 / 51
真实普通目标           9 / 9 可审计
真实事实断言           26 / 26
真实规则断言           28 / 28
意外 ISSUE             0
地区上下文误用         0
```

相关证据：
- `01-mtrs-rule-engine-synthetic-fixtures.md`
- `02-real-network-fact-to-rule-e2e.md`
- `../references/09-real-site-gold-calibration.md`
- `../references/10-pre-development-scope-freeze.md`

## 3. 网络安全验证资产

当前仓库持久保存：

```text
validation/g2_security/
├── app/security.py
├── app/crawlers/pinned_resolver.py
├── app/crawlers/pinning.py
├── app/crawlers/safety_middleware.py
├── test_scrapy_connection_pinning.py
└── test_browser_connection_pinning.py
```

已验证方向包括：
- public URL only；
- localhost / private / link-local / metadata blocking；
- scheme / port allowlist；
- DNS 解析检查；
- connection-time IP pinning；
- redirect re-validation；
- same-origin boundary；
- fail-closed；
- 浏览器不用于绕过明确 block / rate-limit；
- geo-context mismatch 时停止评分。

## 4. 完整 Scanner V0 实现证据

中断后 Recovery Review 重新检查当前项目工作目录，完整实现已找回并纳入项目交接包的 canonical snapshot：

`scanner/`

包含：
- FastAPI service；
- SQLite persistence；
- `/healthz`；
- job / report API；
- Scrapy static-first；
- Playwright bounded fallback；
- bounded orchestration；
- 17-rule engine / coordinator；
- evidence contract；
- regression tests。

Recovery Review 当前实际重跑：

```text
Python 3.13.5
pytest 9.0.2
Scanner tests = 55 / 55 PASS
```

此外仍保持：
- real facts `26 / 26`；
- real rules `28 / 28`；
- unexpected ISSUE = `0`；
- geo context misuse = `0`。

## 5. Source Persistence Resolution

此前只检索 GitHub main / commit history / Library 时，没有找到完整产品实现，因此一度记录 `SOURCE_PERSISTENCE_GAP`。

后续直接检查当前 sandbox 项目目录后，完整 Scanner V0 已确认存在，故该 UNKNOWN 已解除。

当前规则：
- Skill 仓库长期保存理论、Fixture、真实网络校准与 G2 security validation；
- 完整产品实现以项目交接包中的 `scanner/` 为当前 canonical snapshot；
- 后续如建立独立产品 Git 仓库，应从该目录迁移，不得从旧 validation snapshot 重新发明实现。

## 6. 后续 Gate

```text
G1 WordPress Local Baseline      PASS
G2 Safe Scanner V0 Evidence      PASS
G3 Rule Engine V0                MERGED / CLOSED
SOURCE RECOVERY                  PASS

NEXT:
G4_WORDPRESS_SCANNER_TOP3_LOCAL_INTEGRATION
```

G4 仍然限制为：
- local only；
- no payment；
- no VPS；
- no production secret；
- no public production scanner。
