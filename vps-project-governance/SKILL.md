# VPS Project Governance（VPS 项目管理规范） v0.1.6

> 用于管理 “Reviewer / Execution Agent / Evidence / PASS-RETURN” 闭环的工程交付治理 Skill。  
> Storage Layout Contract rev1 is an operational addendum to v0.1.6.

---

## 1. 什么时候调用

当任务涉及以下任一情况时，优先调用本 Skill：

- 新项目准备部署到 VPS / Docker / Shared VPS；
- 项目已有代码但真实状态不清楚；
- Reviewer 给 Codex / Executor 生成执行任务；
- 审核 Executor 的执行证据；
- 生产项目修 Bug、升级依赖、改配置、迁移数据、优化镜像；
- 自动化 / Browser Agent / Worker / 支付 / 数据库项目；
- 多项目共用 SSH、UFW、Docker daemon、80/443、Caddy、cloudflared、shared network；
- 换聊天、换 Reviewer、换 Executor 后继续推进；
- 希望减少 Owner 的技术判断、文件搬运和手工调度。

本 Skill 定义的是**治理方式**，不是某个具体业务项目。

---

## 2. 核心角色

### Owner / User

Owner 只负责必须由本人承担的动作：

- 真实付款、购买、订阅；
- 身份验证、账号授权、验证码；
- Secret 创建 / 安全录入 / 轮换；
- 不可逆删除；
- material production enablement；
- 重大产品、业务、法律、合规选择；
- Reviewer 明确判定为 Owner-only 的异常。

普通技术细节不要推回 Owner。

### Reviewer / Architect / Gatekeeper

Reviewer 是唯一技术决策与正式验收角色。

必须负责：

1. 理解项目并建立项目地图；
2. 区分事实 / UNKNOWN / 过时文档；
3. 定义架构、安全、数据、Shared Infra 边界；
4. 划分或压缩 Gate；
5. 明确允许 / 禁止动作；
6. 给 Executor 精确 Prompt；
7. 独立审核 Evidence；
8. 给出 `PASS` / `RETURN`；
9. 维护唯一 `REVIEWER_HANDOFF.md`。

Reviewer 不得：

- 因 Executor 自报 `PASS_CANDIDATE` 就自动 PASS；
- 把未经验证的计划写成已完成事实；
- 依赖聊天历史代替 Handoff；
- 为方便破坏 Shared VPS Contract；
- 把本可自行判断的技术问题反复交给 Owner。

### Execution Agent / Executor

Executor 是受限执行角色。

必须：

1. 完整读取 Reviewer 指定输入；
2. 严格执行当前 Gate；
3. 先 preflight，再写入；
4. 为关键写操作准备 rollback；
5. 记录实际动作、异常和证据；
6. 更新 `EXECUTION_EVIDENCE.md`；
7. 更新 `EXECUTOR_HANDOFF.md`；
8. 返回 `PASS_CANDIDATE_*` 或精确 `RETURN_*`；
9. 停止，等待 Reviewer。

不得：

- 自行改变架构或扩大 scope；
- 顺手重构；
- 自行进入下一 Gate；
- 自行修改 Shared Infra；
- 读取/输出与本轮无关的 Secret；
- 遇到命令失败就换架构绕过去；
- 未授权执行付款、账号权限、不可逆删除。

---

## 3. Source of Truth

发生冲突时按以下顺序：

1. Owner 当前最新明确指令；
2. Shared VPS Contract（如适用）；
3. 项目 `REVIEWER_HANDOFF.md`；
4. 当前 Reviewer Gate Prompt / decision；
5. `EXECUTION_EVIDENCE.md`；
6. `EXECUTOR_HANDOFF.md`；
7. README / 历史设计 / 聊天。

`PROJECT_HANDOFF.md` 仅作为 legacy compatibility name；current 项目统一收敛到 `REVIEWER_HANDOFF.md`，不得维护两份竞争的 Reviewer truth。

---

## 4. 没有可靠 Handoff：Gate P0 Discovery

任何没有可靠交接、文档严重过时、项目结构不完整的项目，都先进入 **P0 Discovery / Intake**，默认只读。

至少建立：

- 项目目标与当前运行状态；
- 入口、runtime、framework；
- frontend / backend / worker / scheduler；
- database / persistence；
- Secret 类型与存放；
- account / Cookie / Token；
- ports / domain；
- Docker / Compose；
- external APIs；
- browser automation；
- uploads / object storage；
- tests；
- backup / restore；
- 当前线上资源；
- 已知风险；
- license / third-party constraints；
- Shared Infra 冲突；
- Storage Layout / durable-data 位置（如部署到 VPS）。

未知项写 `UNKNOWN`，禁止猜。

完成后 Reviewer 先创建最小 `REVIEWER_HANDOFF.md`，才允许进入写操作。

---

## 5. 标准 Gate 闭环

```text
DISCOVER
  ↓
REVIEW
  ↓
PLAN / DEFINE GATE
  ↓
EXECUTOR PREFLIGHT
  ↓
EXECUTE
  ↓
RAW / REDACTED EVIDENCE
  ↓
CLEANUP / REGRESSION
  ↓
PASS_CANDIDATE
  ↓
REVIEWER INDEPENDENT REVIEW
  ├─ PASS   → next Gate / closeout
  └─ RETURN → remediation Gate
```

`PASS_CANDIDATE != PASS`。

一轮 Gate 应尽量满足：目标单一、可验证、可回滚、失败不会拖垮其他项目、证据能明确证明成败。

v0.1.6 允许在以下条件满足时压缩相邻 Gate：

- 同一 rollback domain；
- 同一 evidence boundary；
- 失败不会扩大风险；
- 允许动作与 STOP 条件写清楚。

压缩 Gate 不能降低证据标准。

---

## 6. 变更分级

### A — Project-local / Reversible

项目代码、Compose service 参数、项目 health check、项目 backup script、临时测试对象等。Reviewer Prompt 明确授权后，Executor 可执行。

### B — Shared Infrastructure

SSH、UFW、Docker daemon、宿主机 80/443、Shared Caddy、shared cloudflared、shared network、Shared Infra backup/monitoring。

业务项目不得自行修改。如确需修改：

```text
RETURN_SHARED_INFRA_CHANGE_REQUIRED
```

切换到独立 Infra Review。

### C — Owner-only / Consequential

付款、身份、Secret、不可逆删除、material production enablement 或重大业务/合规选择必须等待 Owner。

---

## 7. Evidence Standard

证据优先记录可复核事实，而不是长篇日志。按任务至少选择：

- command exit status；
- file permission / ownership；
- process/container state；
- restart count；
- ports / network membership；
- HTTP positive + negative checks；
- image/release identity；
- checksums；
- DB integrity；
- backup/restore compatibility；
- before/after counts；
- cleanup result；
- disk/resource delta。

安全边界要做正、反验证。例如：

- “Access 后能访问” + “匿名不能直达”；
- “目标 account 可动作” + “非目标 account delta=0”；
- “backup 可恢复” + “Secret 未进入 archive/log”。

Cleanup 是 Gate 的一部分。

---

## 8. Secret Policy

以下内容不得进入聊天、普通 Handoff、Evidence、README、源码或日志：

- private key；
- password；
- Cookie / Token；
- webhook URL；
- access credential；
- encryption key；
- buyer/order/account 私密标识；
- decrypted private data。

Evidence 只记录必要 metadata，例如：secret file exists、path、mode、read-only mount、compatibility PASS、value not recorded。

---

## 9. Data / Database 额外规则

- 测试不得直接写真实迁移 DB；
- writable rehearsal 使用工作副本；
- SQLite backup 优先使用 SQLite backup API，而不是 live file copy；
- PostgreSQL 等数据库使用其一致性备份机制；
- 加密 DB 的恢复集必须与匹配 encryption key 同步治理；
- backup 后验证 integrity / counts / decrypt compatibility（不得输出明文）；
- migration 前后保留可比较 baseline。

---

## 10. Frontend + Backend 额外规则

- public route 之前先证明 private app 可运行；
- 外部 route 创建后立即做匿名 negative test；
- private admin 不允许因为 convenience 直接发布随机 host port；
- HTTPS 页面涉及 WebSocket 时必须验证 `wss://` / protocol upgrade；
- frontend deployed != backend ready；两者分别验证。

---

## 11. 自动化 / Browser Agent 额外规则

自动化项目首次真实运行前必须具备 fail-closed SAFE_MODE 或等效中央安全开关。

至少证明：

- safe mode 实际 wiring 到 worker / scheduler / business actions；
- restart/recreate 后仍安全；
- browser profile / Cookie / session lifecycle 清晰；
- 幂等 / duplicate prevention；
- 首次真实动作可限制 target / count / expiry。

首次真实业务动作必须用 bounded Canary：single target、max action count、short expiry、central guard、Reviewer explicit authorization、完成后恢复安全状态、non-target delta=0、restart/duplicate prevention。

---

## 12. Auth / REAUTH 生命周期

```text
auth invalid
  → pause affected account only
  → persist REAUTH_REQUIRED
  → notify once per transition
  → notification failure must not resume
  → Owner full reauth on original account
  → identity match fail-closed
  → encrypted in-place credential update
  → read-only seller/session/order validation
  → reauth success != business resume
  → explicit controlled resume
```

不要因为 reauth 成功自动恢复业务。

---

## 13. Owner Operation Minimization

Owner 不是文件搬运员或技术调度员。

Reviewer 默认：

1. 安全可合并的相邻 Gate 优先合并；
2. 一个 execution package 尽量跨多个 checkpoint 使用；
3. 已 PASS Gate 不重复执行，除非 fresh preflight 发现 material drift；
4. 技术细节由 Reviewer 决定；
5. Executor 常规错误优先 rollback / RETURN；
6. 只有 Owner-only 事项才中断 Owner。

### Conditional Preauthorization

允许：

```text
IF Phase A PASS THEN authorize Phase B production enablement
```

前提：条件、允许动作、回滚、STOP 条件都明确且 bounded。

任一 prerequisite FAIL / RETURN / ambiguity / state drift 自动取消预授权；失败后的下一次 production-write retry 需要 fresh explicit authorization。

---

## 14. Canonical Deployment Manifest Invariant

生产 deploy / recreate 不依赖当前目录默认文件。

必须：

1. 显式指定 canonical manifest；Docker Compose 必须 `-f <production-compose>`；
2. 写操作前 render / validate resolved config；
3. sealed image 场景优先 `--no-build --pull never` 或等效约束；
4. recreate 后立即验证 running image / release identity；
5. manifest 或 image identity mismatch 立即 rollback / RETURN。

---

## 15. Resource / Disk Governance

功能 PASS 不等于资源 PASS。

Docker 项目至少记录：

- host root `df` baseline；
- project source / data / backups；
- production image size；
- BuildKit / cache；
- browser runtime；
- deployment before/after delta；
- cleanup actual reclaimed bytes。

默认禁止：

- `docker system prune -a`；
- `docker image prune -a`；
- volume/network broad prune。

Cleanup 必须 allowlist + reference check + before/after evidence + production/shared regression。

参考 host 容量线：60% 关注，70% 计划清理，80% 紧急处理；项目可定义更严格值。

---

## 16. Storage Layout Contract rev1

任何新项目进入 Shared VPS 前，必须先冻结数据位置，而不是上线后再整理。

Canonical layout：

```text
/srv/infra                  # Shared Infra only
/srv/apps/<project>         # 可重建代码 / Compose / 非秘密配置
/srv/data/<project>         # DB / uploads / durable state / secret files
/srv/backups/<project>      # 项目独立恢复材料
```

强制规则：

- one project → one apps/data/backups namespace；
- 不同项目不得共用 DB、uploads、secrets 或 backup directory；
- 用户可控的 durable data 优先显式 bind mount 到 `/srv/data/<project>/...`；
- named volume 允许，但必须 project-namespaced、登记、可备份/恢复；
- anonymous volume 不得保存唯一业务数据；
- build cache / temp / disposable logs 与 durable data 分离；
- `/srv/apps/<project>` 应是可从 Git/release 重建的 application layer；
- 项目上线前建立 `PROJECT_STORAGE_MANIFEST.md`；
- 历史生产项目不因本规则强制搬迁，迁移必须独立 Change Gate。

Storage Manifest 必须让 Reviewer 能回答：

> 如果明天换 VPS，这个项目真正需要搬走哪些东西？

若 durable-data location / backup / restore / secret metadata 无法确定：

```text
RETURN_STORAGE_LAYOUT_UNRESOLVED
```

详细契约：`references/STORAGE_LAYOUT_CONTRACT.md`  
模板：`templates/PROJECT_STORAGE_MANIFEST_TEMPLATE.md`

---

## 17. Production Change Gate

项目已经 production sealed 后：

```text
Owner change request
  ↓
Reviewer reads current REVIEWER_HANDOFF
  ↓
impact / risk / Shared Infra boundary
  ↓
Change Gate
  ↓
Executor
  ↓
Evidence
  ↓
Reviewer PASS / RETURN
  ↓
update REVIEWER_HANDOFF
```

小型低风险变更可以简化 Gate，但仍必须保留：current baseline、actual change、validation、rollback point。

Bug fix、dependency upgrade、image slimming、storage migration 等**不重新打开 initial onboarding**。

---

## 18. Handoff 模型

```text
GOVERNANCE_HANDOFF.md             # 通用治理自身
SHARED_VPS_HANDOFF.md             # 基础设施（如适用）
<project>/REVIEWER_HANDOFF.md     # Reviewer 当前项目真相
<project>/EXECUTOR_HANDOFF.md     # Executor 执行事实
<project>/EXECUTION_EVIDENCE.md   # 详细脱敏证据
<project>/PROJECT_STORAGE_MANIFEST.md # Shared VPS 项目存储地图（如适用）
```

规则：

- `REVIEWER_HANDOFF.md` 只由 Reviewer 更新；
- `EXECUTOR_HANDOFF.md` 只记录 Executor 实际事实；
- `EXECUTION_EVIDENCE.md` 保存详细 evidence；
- Storage Manifest 只记录位置/恢复/权限 metadata，不记录 Secret value；
- per-gate decision/prompt 是附件，不代替 continuity Handoff；
- 换聊天/Agent 时优先读这些文件，不要求 Owner 重述历史。

---

## 19. Reviewer 最低输出

每轮最少让 Owner 看清：

```text
整体进展
最终目标
当前 Gate
已确认事实
UNKNOWN
本轮完成
本轮允许 / 禁止
验收结果
风险 / rollback
下一步
注意事项
是否需要 Owner 介入
```

不要为了格式写得很长；状态必须清楚。

---

## 20. Executor 返回格式

成功：

```text
PASS_CANDIDATE_<GATE>
STOP_AT_REVIEWER: YES
```

失败必须精确，例如：

```text
RETURN_PREFLIGHT_DRIFT
RETURN_TEST_FAILURE
RETURN_DATA_MIGRATION_RISK
RETURN_SHARED_INFRA_CHANGE_REQUIRED
RETURN_STORAGE_LAYOUT_UNRESOLVED
RETURN_SECRET_RISK
RETURN_OWNER_ACTION_REQUIRED
```

不要只写 `FAILED`。

---

## 21. Governance 升级规则

不要因为每个小事故改 Governance。

只有重复出现、能跨项目复用、且经过真实项目验证的模式才进入下一版。

状态可标：

- `VALIDATED`：真实项目验证；
- `PROVISIONAL`：理由充分但未完整验证；
- `CANDIDATE`：单次观察，不急于固化。

当前 v0.1.6 是 Xianyu production-closeout validated baseline。Storage Layout Contract rev1 固化的是已经存在于 Shared VPS 的目录/隔离模式，作为 operational addendum，不单独升级主版本。

---

## 22. 加载顺序

真正执行本 Skill 时：

1. 先读本 `SKILL.md`；
2. 需要完整规则时读 `references/GOVERNANCE_V0_1_6.md`；
3. 只要项目将部署/已经部署到 Shared VPS，必须读 `references/STORAGE_LAYOUT_CONTRACT.md`；
4. 需要用户话术时读 `references/USAGE_SCENARIOS.md`；
5. 新项目按需使用 `templates/`，Shared VPS 项目必须建立 `PROJECT_STORAGE_MANIFEST.md`；
6. 若项目部署在 Shared VPS，再读 Shared VPS Contract / Handoff；
7. 最后读当前项目 Handoff 和当前 Gate Prompt。

不要先从聊天历史猜当前状态。
