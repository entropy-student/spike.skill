
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
10. **首次真实业务动作必须 Canary**：单 target、动作上限、短 expiry、central guard、restart/idempotency 验证。
11. **REAUTH success ≠ 自动恢复业务**：重新认证后还要 read-only 验证与显式 controlled resume。
12. **上线后的优化进入 Change Gate**，不重开整套 onboarding。

---

## Source of Truth 顺序

发生冲突时：

1. Owner 最新明确指令；
2. Shared VPS Contract（如适用）；
3. 当前项目 `REVIEWER_HANDOFF.md`；
4. Reviewer 当前 Gate Prompt / decision；
5. `EXECUTION_EVIDENCE.md`；
6. `EXECUTOR_HANDOFF.md`；
7. README / 历史文档 / 聊天。

Governance 管规则；Handoff 属于具体项目或基础设施。

---

## Skill 结构

```text
vps-project-governance/
├── README.md
├── README_EN.md
├── SKILL.md
├── metadata.yml
├── references/
│   ├── GOVERNANCE_V0_1_6.md
│   └── USAGE_SCENARIOS.md
└── templates/
    ├── REVIEWER_HANDOFF_TEMPLATE.md
    ├── EXECUTOR_HANDOFF_TEMPLATE.md
    └── EXECUTION_EVIDENCE_TEMPLATE.md
```

---

## 从原规范整理时做的两处规范化

原始 v0.1.6 已经在后段规则中把 `REVIEWER_HANDOFF.md` 定义为项目 Reviewer 唯一当前真相，但早期章节仍残留 `PROJECT_HANDOFF.md` 旧称；本 Skill 统一使用 `REVIEWER_HANDOFF.md`，`PROJECT_HANDOFF.md` 仅视为 legacy alias。

同时，原 Protocol 文件头残留 `DRAFT / EVOLVING`，而 `GOVERNANCE_HANDOFF.md` 已明确 v0.1.6 为 `ACTIVE / VALIDATED-ON-XIANYU / EVOLVING`。本 Skill 以 Governance Handoff 的状态为准。

这两处是**术语/状态一致性修正，不改变治理语义，也不升级 Governance 版本**。

---

## 当前验证程度

```text
Shared VPS Infrastructure  I0-I7 PASS / SEALED
Xianyu                     X0-X7 FINAL PASS / PRODUCTION SEALED
Post-X7 Image Slimming     Change Gate PASS
Governance v0.1.6          ACTIVE
```

v0.1.6 暂作为当前基线。不要因为每个小事故频繁改 Governance；先收集跨项目可复用、经过真实验证的模式，再批量升级。
