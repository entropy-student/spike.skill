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

## 4. 会话执行证据

后续受限实现阶段还记录了：
- Python Scanner V0；
- SQLite persistence；
- `/healthz`；
- job / report API；
- bounded page count / concurrency / browser fallback；
- 不持久化原始正文；
- ISSUE 必须具有 evidence reference；
- 本地行为 / 安全 / persistence tests：`31 / 31`；
- 加固后的真实事实：`26 / 26`；
- 加固后的真实规则：`28 / 28`；
- unexpected ISSUE = `0`；
- geo context misuse = `0`。

## 5. Source Persistence Gap

重新 Review GitHub main、提交历史和当前可检索 Library 后，没有找到包含以下全部能力的**完整 Scanner V0 产品源码持久化提交**：

- SQLite persistence；
- `/healthz`；
- job / report API；
- 完整 bounded orchestration；
- 对应 31 / 31 本地测试集合。

当前能够确认长期持久保存的是：
- 理论与规则契约；
- Fixture；
- real-network calibration code；
- rule engine validation code；
- G2 security snapshot；
- GitHub Actions real-network validation workflow。

因此进入 G4 前必须：

```text
CONFIRM_OR_RESTORE_SCANNER_V0_CANONICAL_SOURCE
```

如果完整实现仍存在于 Owner / Executor 本地目录，应直接固化；如果已经遗失，应根据现有冻结契约和验证资产恢复实现，但**不得重新发明规则或重新打开理论 Gate**。

## 6. 后续 Gate

```text
G1 WordPress Local Baseline      PASS
G2 Safe Scanner V0 Evidence      PASS
G3 Rule Engine V0                MERGED / CLOSED

BLOCKER BEFORE G4:
CONFIRM_OR_RESTORE_SCANNER_V0_CANONICAL_SOURCE

NEXT AFTER RECOVERY:
G4_WORDPRESS_SCANNER_TOP3_LOCAL_INTEGRATION
```

G4 仍然限制为：
- local only；
- no payment；
- no VPS；
- no production secret；
- no public production scanner。
