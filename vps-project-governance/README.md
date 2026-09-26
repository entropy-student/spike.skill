# VPS Project Governance（VPS 项目管理规范） v0.1.6

> 把“Owner 提需求 → Reviewer 定边界 → Executor 执行 → Evidence 回传 → Reviewer PASS/RETURN”固化成一套可跨聊天、跨 Agent、跨项目复用的交付治理 Skill。

**当前状态：Active / Validated on Xianyu / Evolving**

这不是一套“如何写 Docker 命令”的教程，而是一套用于控制**项目交付、生产变更、Shared VPS 多项目边界、证据、回滚、Secret、数据与 Owner 介入时机**的治理方法。

---
<img width="785" height="982" alt="个人开发流程一览图" src="https://github.com/user-attachments/assets/c19a3750-9850-413e-8324-9a46366624ca" />
---

## 什么时候用

适合：

- 把新项目部署到 VPS / Docker / Shared VPS；
- 接手一个已有但文档混乱的项目；
- Reviewer 给 Codex / Execution Agent 下发任务；
- 已上线项目修 Bug、升级依赖、改配置、做镜像瘦身；
- 自动化 / Browser Agent / Worker / 支付后台 / 数据库项目；
- 多项目共用 SSH、UFW、Docker daemon、80/443、Caddy、cloudflared、shared network；
- 换聊天、换 Reviewer、换 Executor 后继续推进；
- 希望尽量减少 Owner 反复复制文件、判断技术细节和手工调度。

不适合把它当作：

- 云厂商/VPS 产品选型教程；
- 某个框架的开发文档；
- 法律、合规、财税判断；
- “允许 Agent 任意改生产”的授权书。

---

## 一句话理解

```text
Governance
= 所有项目应该怎么工作

REVIEWER_HANDOFF.md
= 这个具体项目现在是什么状态

Execution Prompt
= 这一轮 Executor 允许做什么

EXECUTION_EVIDENCE.md
= 这一轮实际上发生了什么
```

标准闭环：

```text
Owner
  ↓
Reviewer / Architect / Gatekeeper
  ↓
Execution Agent
  ↓
Evidence
  ↓
Reviewer PASS / RETURN
```

**PASS_CANDIDATE ≠ PASS。只有 Reviewer 可以正式 PASS。**

---

## 最快调用

### 新项目

```text
按 VPS Project Governance v0.1.6 接管这个项目。
先进入 P0 Discovery，只读，不执行。
建立项目地图、真实状态、风险、Shared VPS 冲突，并创建唯一 REVIEWER_HANDOFF.md。
技术细节你自行判断，只有 Owner-only 事项再找我。
```

### 老项目继续推进

```text
按 VPS Project Governance v0.1.6 继续这个项目。
先读当前 REVIEWER_HANDOFF.md 和最新 Evidence。
已 PASS Gate 不重复跑，除非 fresh preflight 发现 material drift。
直接推进可自行处理的部分。
```

### 已上线项目修改

```text
这是 Production Change Gate。
按 VPS Project Governance v0.1.6 处理，不重新跑 initial onboarding。
保护当前 production baseline，先定义 rollback，再修改、验证、回归；失败自动 RETURN/rollback。
```

更多场景话术见 [`references/USAGE_SCENARIOS.md`](./references/USAGE_SCENARIOS.md)。

---

## 核心原则

1. **Evidence before PASS**：Executor 自报成功不等于 Reviewer 验收成功。
2. **先读后写**：未知项目先 P0 Discovery，未知项写 `UNKNOWN`，不猜。
3. **Shared Infra 隔离**：业务项目不得顺手改 SSH、UFW、Docker daemon、Caddy、cloudflared、80/443 或 shared network。
4. **Owner 最小介入**：Owner 只处理付款/购买、身份或账号授权、Secret、安全敏感录入、不可逆删除、重大生产开启及重大业务/合规决策。
5. **相邻 Gate 可压缩，但不降低证据标准**。
6. **已 PASS Gate 不因换聊天/换 Agent 重跑**，除非发现 material drift。
7. **生产部署显式选择 canonical manifest**，Docker Compose 不依赖默认文件；写前 render/validate，写后验证 running image/release identity。
8. **功能 PASS ≠ 资源 PASS**：记录磁盘、镜像、BuildKit/cache、browser runtime、backup 的 before/after。
9. **禁止 casual broad prune**：默认禁止 `docker system prune -a`、`docker image prune -a` 以及 volume/network broad prune。
10. **首次真实业务动作必须 Canary**：单 target、动作上限、短 expiry、central guard、restart/idempotency 验证；真实支付/恢复还必须遵守 Provider Canary & Recovery Contract rev2，禁止 ambiguous/partial commit 后盲目重放。
11. **REAUTH success ≠ 自动恢复业务**：重新认证后还要 read-only 验证与显式 controlled resume。
12. **上线后的优化进入 Change Gate**，不重开整套 onboarding。
13. **Storage Layout 必须先冻结再上线**：程序、持久数据、备份与 Shared Infra 分层；任何新项目进入 Shared VPS 前建立 `PROJECT_STORAGE_MANIFEST.md`。
14. **SSH trust 可复用，但凭据值不可搬运**：已有 Shared VPS 连接优先从 `SHARED_VPS_HANDOFF.md` 恢复，host-key 漂移 fail-closed。
15. **Secret 委托只能 exact + explicit**：默认 Secret 仍由 Owner 控制；只有 Owner 明确授权 exact allowlist 时才允许 Executor 在受保护目标生成/安装。
16. **先证明改的是哪台机器，再证明改了什么**：sandbox/container/WSL/remote runner 中的同名绝对路径不能代替目标宿主机 evidence；host-local write 必须有目标主机 identity + write 后 read-back。

---

## Shared VPS Storage Layout

Storage Contract rev1 已纳入本 Skill，固定以下顶层约束：

```text
/srv/infra                 Shared Infrastructure only
/srv/apps/<project>        可重建程序 / Compose / 非秘密配置
/srv/data/<project>        DB / uploads / state / secrets
/srv/backups/<project>     项目独立恢复材料
```

核心目标不是“目录好看”，而是保证以后能明确回答：

> 如果明天换 VPS，这个项目真正需要搬走哪些数据？

详细规则：[`references/STORAGE_LAYOUT_CONTRACT.md`](./references/STORAGE_LAYOUT_CONTRACT.md)  
项目模板：[`templates/PROJECT_STORAGE_MANIFEST_TEMPLATE.md`](./templates/PROJECT_STORAGE_MANIFEST_TEMPLATE.md)

历史生产项目不会因为这个规则被强制搬迁；需要迁移时必须另开 Storage Migration Change Gate。

---

## SSH Connection & Delegated Secret Operations

Shared VPS 的连接方式不应依赖 Owner 记忆。`SHARED_VPS_HANDOFF.md` 只登记 host/user/port、identity-file reference、public/host-key fingerprint、privilege model 与 bounded read-only probe，绝不记录 private key/password/token。Host-key mismatch 必须 `RETURN_SSH_TRUST_DRIFT`。

默认 Secret 创建/录入/轮换仍由 Owner 控制；如果 Owner 无技术能力，可以显式委托 exact allowlist 给 Executor，但必须 fail-on-existing、CSPRNG、原子写入、zero value output、least-privilege runtime read，并建立异 failure-domain 的加密恢复。DPAPI CurrentUser 仅作为 Windows 上低操作的第一份恢复副本，具有 profile-bound 限制，不是唯一长期灾备。

详细规则：[`references/SSH_AND_DELEGATED_SECRET_OPERATIONS.md`](./references/SSH_AND_DELEGATED_SECRET_OPERATIONS.md)  
Shared VPS 模板：[`templates/SHARED_VPS_HANDOFF_TEMPLATE.md`](./templates/SHARED_VPS_HANDOFF_TEMPLATE.md)

---

## Target Host Reality

Target Host Reality Contract rev2 用来约束一个容易被忽略的风险：**Execution Agent 所在环境不一定就是 Owner 的真实宿主机。**

例如 Agent 在 sandbox 内创建了 `C:\Users\...\D16`，并不能证明 Owner 的真实 Windows 主机上已经存在该目录。涉及真实宿主机路径、ACL、service、Docker daemon、端口、Secret staging 等 host-local state 时，必须先证明 target host identity，再在写入后从同一目标主机 read-back。

如果 Executor 无法证明自己真的能操作目标宿主机，必须返回 `RETURN_TARGET_HOST_EXECUTION_UNAVAILABLE`，而不是在自身环境创建同名路径后宣称 PASS。Windows Owner-owned Secret staging 收紧 ACL 时默认不要强行 `SetOwner()`；优先只处理 DACL/inheritance，并用 `Get-Acl` / `icacls` 做真实主机 read-back。任何异常或 native command non-zero 后都不得继续打印 PASS。

详细规则：[`references/TARGET_HOST_REALITY_CONTRACT.md`](./references/TARGET_HOST_REALITY_CONTRACT.md)

---

## Source of Truth 顺序

先区分规则和项目事实。

### Governance 规则

默认唯一 canonical source：

```text
GitHub: entropy-student/spike.skill
Path: /vps-project-governance
```

冲突优先级：

1. Owner 最新明确指令；
2. active Reviewer 当前明确 override / pinned addendum；
3. GitHub canonical Governance latest；
4. 本地 Skill / 项目包里的历史 Governance copy；
5. README snapshot / 历史聊天。

Reviewer override 是临时的；结束后自动恢复 GitHub latest。本地 copy 只作为 cache，不作为第二个 Source of Truth。
详见 [`references/GOVERNANCE_SOURCE_POLICY.md`](./references/GOVERNANCE_SOURCE_POLICY.md)。

### 项目事实

项目现在“实际发生了什么”以当前 Reviewer decision/Handoff、fresh authoritative read-back、
accepted Evidence、Executor Handoff 的证据链为准。Evidence 比 Handoff 更新时，下一次 consequential Gate
前由 Reviewer reconcile/synchronize，不删除历史 Evidence。

Governance 管规则；Handoff/Evidence 管具体项目或基础设施事实。

---

## Skill 结构

```text
vps-project-governance/
├── README.md
├── README_EN.md
├── SKILL.md
├── GOVERNANCE_HANDOFF.md
├── metadata.yml
├── references/
│   ├── GOVERNANCE_V0_1_6.md
│   ├── SSH_AND_DELEGATED_SECRET_OPERATIONS.md
│   ├── STORAGE_LAYOUT_CONTRACT.md
│   ├── TARGET_HOST_REALITY_CONTRACT.md
│   ├── PRODUCTION_PROVIDER_CANARY_AND_RECOVERY_CONTRACT.md
│   ├── GOVERNANCE_SOURCE_POLICY.md
│   └── USAGE_SCENARIOS.md
└── templates/
    ├── REVIEWER_HANDOFF_TEMPLATE.md
    ├── SHARED_VPS_HANDOFF_TEMPLATE.md
    ├── EXECUTOR_HANDOFF_TEMPLATE.md
    ├── EXECUTION_EVIDENCE_TEMPLATE.md
    └── PROJECT_STORAGE_MANIFEST_TEMPLATE.md
```

---

## 从原规范整理时做的两处规范化

原始 v0.1.6 已经在后段规则中把 `REVIEWER_HANDOFF.md` 定义为项目 Reviewer 唯一当前真相，但早期章节仍残留 `PROJECT_HANDOFF.md` 旧称；本 Skill 统一使用 `REVIEWER_HANDOFF.md`，`PROJECT_HANDOFF.md` 仅视为 legacy alias。

同时，原 Protocol 文件头残留 `DRAFT / EVOLVING`，而 `GOVERNANCE_HANDOFF.md` 已明确 v0.1.6 为 `ACTIVE / VALIDATED-ON-XIANYU / EVOLVING`。本 Skill 以 Governance Handoff 的状态为准。

这两处是**术语/状态一致性修正，不改变治理语义，也不升级 Governance 版本**。

Storage Layout Contract rev1 是 v0.1.6 的 operational addendum：它把 Shared VPS 已采用的 `/srv/apps`、`/srv/data`、`/srv/backups` 分层正式固化，但不改变 Owner/Reviewer/Executor、PASS/RETURN 等核心治理语义，因此当前不单独升级 Governance 主版本。

SSH/Delegated Secret Operations rev1 也是 operational addendum：它登记可复用
SSH trust metadata，并允许无命令操作能力的 Owner 对 exact allowlist 做显式委托。
SSH contract 已验证；delegated Secret provisioning 与 DPAPI CurrentUser recovery 已在 Unified Pay production-like Gate 验证，但前者仍需 explicit Owner authorization，后者仍受 Windows profile failure-domain 限制。

Target Host Reality Contract rev2 同样作为 operational addendum：它来自 DujiaoNext / Unified Pay Windows host 的真实反例，补上 execution-environment 与 target-host 真实性的 Evidence boundary，不改变既有角色与 PASS/RETURN 语义。

---

## 当前验证程度

```text
Shared VPS Infrastructure  I0-I7 PASS / SEALED
Xianyu                     X0-X7 FINAL PASS / PRODUCTION SEALED
Post-X7 Image Slimming     Change Gate PASS
Storage Layout Contract    rev1 ACTIVE
SSH Connection Contract    rev2 ACTIVE / VALIDATED
Delegated Secret Provision rev2 VALIDATED-ON-UNIFIED-PAY / EXPLICIT-AUTH-ONLY
DPAPI Recovery Pattern     VALIDATED-ON-UNIFIED-PAY / PROFILE-BOUND
Target Host Reality        rev2 ACTIVE / VALIDATED-ON-DUJIAONEXT-WINDOWS-HOST
Provider Canary/Recovery   rev2 ACTIVE / VALIDATED-ON-DUJIAONEXT-ALIPAY-R16
Governance Source Policy   rev1 ACTIVE / GITHUB-CANONICAL
Governance core v0.1.6     ACTIVE
```

v0.1.6 暂作为当前基线。不要因为每个小事故频繁改 Governance；先收集跨项目可复用、经过真实验证的模式，再批量升级。
