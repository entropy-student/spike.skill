# Target Host Reality Contract rev2

> Operational addendum to VPS Project Governance v0.1.6.
>
> Status: `ACTIVE / VALIDATED-ON-DUJIAONEXT-WINDOWS-HOST`

## 1. Purpose

Execution Agent、sandbox、container、WSL、remote runner 与 Owner 真实宿主机可能拥有不同的文件系统、用户、权限和进程空间。

因此：

> **“Agent 看到某路径存在” 不等于 “目标宿主机上该路径存在”。**

任何涉及宿主机绝对路径、ACL、服务、端口、Docker daemon、systemd、Windows service、真实 Secret staging 目录或其他 host-local state 的 Gate，都必须先证明执行发生在目标宿主机，或由目标宿主机自身返回验证证据。

本规则用于避免“执行环境路径同名，但真实目标主机未发生变更”的假 PASS。

---

## 2. Target Host Reality Invariant

当 Executor 声称以下任一事实时，必须有来自**目标宿主机本身**的证据：

- 创建 / 修改 / 删除了宿主机绝对路径；
- 修改了文件权限、ownership 或 ACL；
- 修改了 Windows service / systemd / cron / scheduled task；
- 修改了宿主机 Docker daemon、network、volume、port binding；
- 创建了 Secret staging / backup / recovery 目录；
- 改变了宿主机 firewall、reverse proxy、SSH、80/443；
- 对生产宿主机做了任何 write。

以下均**不足以单独证明目标宿主机写入成功**：

- Agent sandbox 内同名绝对路径存在；
- container 内存在 `C:\...` 或 `/srv/...`；
- WSL / VM / remote runner 中存在同名目录；
- Executor 自报 `PASS` / `PASS_CANDIDATE`；
- 仅有写命令 exit 0，但没有目标宿主机 identity 与 read-back；
- 文档写着“应该存在”或“已创建”，但目标宿主机 `Test-Path/Get-Item/stat` 没有证明；
- 截图或日志无法证明来自目标宿主机。

---

## 3. Preflight: prove the execution boundary

写宿主机前，Executor 至少要确认：

1. 当前命令运行在哪个 machine / runtime；
2. 当前 user / effective privilege；
3. 目标 host identity；
4. 目标路径是否从当前 runtime 真实可见；
5. write 后能否从同一目标 host read-back；
6. 当前 shell/runtime 版本是否支持脚本所用 API/语法；
7. native executable 的 exit-status 是否会被显式检查。

可使用的 host-local evidence 示例：

### Windows

```powershell
$PSVersionTable.PSVersion
[Environment]::MachineName
[Security.Principal.WindowsIdentity]::GetCurrent().Name
Test-Path -LiteralPath 'C:\target\path'
Get-Item -LiteralPath 'C:\target\path'
Get-Acl -LiteralPath 'C:\target\path'
icacls.exe 'C:\target\path'
```

### Linux

```bash
hostname
id
sudo -n id -u
test -e /target/path
stat /target/path
ls -ld /target/path
```

Evidence 不要求暴露 Secret 内容；只证明 host identity、path、metadata、ACL/permission、service/container state 等必要事实。

---

## 4. If target-host execution cannot be proven

如果 Executor 无法可靠证明当前执行环境就是目标宿主机：

```text
RETURN_TARGET_HOST_EXECUTION_UNAVAILABLE
STOP_AT_REVIEWER: YES
```

不得：

- 假设 sandbox 就是 Owner 主机；
- 在 sandbox 创建同名路径后宣称宿主机已完成；
- 为了绕过边界，把 Secret 让 Owner 粘贴进聊天；
- 把未经目标宿主机 read-back 的状态写成 PASS。

如果该动作本身必须由 Owner 本机完成，Reviewer / Executor 应生成**一次性、最小、可验证**的本机命令，让 Owner 执行一次；Owner 不负责自己设计命令或判断技术细节。

---

## 5. Owner-local checkpoint pattern

当真实宿主机只有 Owner 可以访问，而动作又属于安全 staging / Secret preparation / recovery 等必要 checkpoint 时：

```text
Executor prepares exact host-local command
  ↓
STOP_AT_OWNER_CHECKPOINT
  ↓
Owner runs once on real host
  ↓
Host-local command emits bounded non-secret evidence
  ↓
Reviewer / Executor consumes only the result metadata
  ↓
continue Gate
```

Owner 只执行一次，不承担排错、架构判断、脚本设计或 Secret 回传。

如果命令失败，返回失败输出；不要让 Owner 自行“继续往下跑”。

### Phase-split rule

当一个 Owner-local script 同时包含本地文件/ACL、SSH 远程动作、应用验证、恢复文件晋升等多个 failure domain 时，应拆成可判定阶段或至少输出阶段性证据：

```text
LOCAL_PREP
REMOTE_EXECUTION
APPLICATION_VERIFY
FINAL_HOST_READBACK
```

必须能区分：

- `FAILED_BEFORE_REMOTE_EXECUTION`；
- `REMOTE_OUTCOME_AMBIGUOUS`；
- `REMOTE_EXECUTION_CONFIRMED_FAILED`；
- `REMOTE_EXECUTION_PASS_BUT_LOCAL_FINALIZATION_FAILED`。

否则 Reviewer 无法安全决定是否重试。

---

## 6. Windows ACL rule

Windows 上对 Owner-owned Secret staging 目录收紧 ACL 时：

1. 默认**不要为了收紧 ACL 而强行修改 Owner**；
2. `SetOwner()` / 某些 `Set-Acl` 组合可能触发 `SeSecurityPrivilege`，即使当前用户本来就是目录 Owner；
3. 对已由当前 Owner 持有的目录，优先只处理 DACL / inheritance；
4. 可使用 `icacls` 或等效 host-native ACL 工具；
5. 目录规则应明确是否对子文件 / 子目录继承；
6. 写后必须 `Get-Acl` / `icacls` read-back；
7. Secret staging 目录不得因 convenience 给 `Everyone`、`Users`、`Authenticated Users` 等宽泛主体写权限。

典型模式：

```powershell
icacls.exe <root> /inheritance:r
icacls.exe <root> /grant:r "<current-user>:(OI)(CI)F"
```

这只是模式示例，不是无条件复制命令。执行前仍要验证：目标目录确由当前 Owner 管理、没有业务所需的其他 ACL 主体、不会破坏服务账号访问。

如果服务账号确实需要访问 Secret，必须由 Reviewer 明确列出允许主体，而不是套用“Owner-only”模板。

### ACL scope rule

不要因为一个更高层、并非当前 Gate 管理对象的父目录 ACL 较宽，就自动判定目标叶子目录失败。

对目标 protected subtree，应验证：

- 目标 leaf/file 自身 inheritance 是否按设计关闭；
- 实际 allow principals 是否符合 allowlist；
- 父目录较宽 ACL 是否仍会继承/影响目标 leaf；
- 当前 Gate 是否拥有修改父目录的授权。

只有当父 ACL 实际流入或破坏目标 protected subtree 时，它才是当前 Gate 的 blocker。

---

## 7. Fail-closed script result

脚本不得在发生异常后继续无条件打印 PASS。

必须满足：

- native command non-zero exit → FAIL/RETURN；
- PowerShell exception → FAIL/RETURN；
- verification mismatch → FAIL/RETURN；
- PASS 只在所有 required checks 完成后输出；
- 之前失败过的步骤不能被后续静态字符串 `PASS` 覆盖；
- 捕获异常时应保留足够的非敏感 failure class，不能只剩一个模糊 `FAIL`。

推荐：

```powershell
$ErrorActionPreference = 'Stop'
try {
    # write
    # read-back
    # negative checks
    'TARGET_HOST_REALITY=PASS'
}
catch {
    'TARGET_HOST_REALITY=FAIL'
    throw
}
```

对于 native executable，还要显式检查 `$LASTEXITCODE`。

---

## 8. Partial execution / target collision

Host-local command 可能在中途失败，留下部分目录、空文件、`.pending` artifact 或 ACL 已变但内容未完成的中间状态。

再次执行时：

- 先 classify existing state；
- 不因 `Target collision` 就自动删除；
- 如果 existing objects 正是上一轮已知 partial state，可做 bounded repair；
- 如果来源不明或内容非空，立即 STOP / RETURN；
- Secret 路径存在未知内容时不得 overwrite、打印、hash 或读出其值，除非当前 Gate 明确授权安全处理；
- canonical/final artifact 不应在远程 consequential action 仍未验证时提前发布。

---

## 9. Recovery artifact reality rule

对于 DPAPI / password manager export / local encrypted recovery 等 Owner-host artifact：

```text
intended path
≠ created
≠ verified usable
```

正式 Evidence 至少区分：

```text
RECOVERY_ARTIFACT_PATH_PLANNED
RECOVERY_ARTIFACT_CREATED
RECOVERY_ARTIFACT_EXISTS_HOST_LOCAL
RECOVERY_ARTIFACT_ROUNDTRIP_VERIFIED
```

如果真实 Owner host 的 recursive search / `Test-Path` 返回不存在，它立即 supersede 任何旧文档中的“artifact exists”声明。

不得继续尝试解密一个被真实主机证明不存在的 artifact。

---

## 10. Payload/parser reality rule

一个加密 artifact 可以成功解密，但业务 parser 仍然失败。例如 Windows CRLF 与 LF、字段尾部 `\r`、编码/BOM 差异都可能造成“artifact 存在但格式无效”。

因此：

- serialization format 必须明确；
- parser 必须与实际 host serialization 兼容；
- 创建后立即做 in-memory round-trip + parser validation；
- parser 未通过时不得继续 consequential remote action；
- 不要把 parser failure 误诊为 DPAPI、SSH 或 Provider failure。

---

## 11. Required Evidence fields

涉及 target-host write 的 Gate，Evidence 至少记录：

```text
TARGET_HOST_IDENTITY: <redacted / non-secret machine identity>
TARGET_HOST_EXECUTION_PROVEN: PASS
TARGET_RUNTIME_VERSION_CHECK: PASS / N-A
TARGET_PATH_READBACK: PASS
TARGET_PERMISSION_OR_ACL_READBACK: PASS / N-A
NATIVE_EXIT_STATUS_CHECKED: YES / N-A
SANDBOX_ONLY_WRITE_USED_AS_HOST_EVIDENCE: NO
SECRET_VALUES_EMITTED: 0
```

如不能证明：

```text
TARGET_HOST_EXECUTION_PROVEN: FAIL
RETURN_TARGET_HOST_EXECUTION_UNAVAILABLE
```

---

## 12. Reviewer acceptance rule

Reviewer 不得仅凭 Executor 的“已创建 / 已配置 / 已部署”文字描述正式 PASS。

对于 target-host fact，Reviewer 必须确认至少存在：

- 目标 host identity；
- write 后 read-back；
- 与目标 host 一致的权限 / service / container / path evidence；
- 没有把 sandbox-local state 当作 target-host state；
- 如果存在多阶段脚本，能定位失败发生在哪个 execution boundary。

如果 Evidence 只能证明 sandbox 内成功，则该事实仍为 `UNKNOWN` 或 `RETURN_TARGET_HOST_EXECUTION_UNAVAILABLE`。

---

## 13. Validated incident patterns

### Incident A — Agent-side path != Owner-host path

DujiaoNext / Unified Pay 的 Windows Secret-staging checkpoint 中，Executor 曾在自身执行环境声明创建：

```text
C:\Users\...\AppData\Local\DujiaoNext\D16
```

但 Owner 在真实 Windows PowerShell 执行 host-local read-back 后证明对应状态与 Executor 环境不同。后续改为一次性 Owner-host PowerShell + host-native read-back。

### Incident B — documented DPAPI artifact did not exist

项目文档曾记录一个 Owner-local DPAPI recovery artifact 为“存在”，但真实 Owner Windows 的 recursive search / `Test-Path` 证明它不存在。

真实主机证据立即 supersede 文档，后续流程改为受控 credential reset + Owner-host artifact creation + existence verification；没有继续尝试解密不存在的文件。

### Incident C — local phase / remote phase confusion

一次大型 Owner script 的本地 DPAPI、ACL、payload parsing、SSH remote reset 混在同一 failure path 内，导致需要多轮判定实际失败位置。

后续通过本地 DPAPI round-trip、payload parser validation、SSH preflight、remote execution 和 final artifact read-back分阶段验证，减少了盲目重跑。

这些模式共同证明：**执行环境真实性、阶段边界和 read-back 本身就是 Evidence boundary 的一部分。**

---

## 14. Relationship to existing Governance

本 Contract 不改变：

- Owner / Reviewer / Executor 角色；
- PASS / RETURN 权限；
- Shared VPS Contract；
- Secret Policy；
- Gate compression；
- canonical deployment manifest；
- Storage Layout Contract。

它补充的是一个更底层的 invariant：

> **在证明“改了什么”之前，先证明“到底改的是哪台机器”；在决定“能不能重试”之前，先证明上一轮到底执行到了哪一层。**
