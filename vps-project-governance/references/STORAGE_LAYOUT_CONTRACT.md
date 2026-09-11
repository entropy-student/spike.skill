# Storage Layout Contract（VPS 存储与项目隔离契约）

> Governance: VPS Project Governance v0.1.6 operational addendum  
> Revision: 1  
> Status: ACTIVE / VALIDATED-BY-SHARED-VPS-PATTERN  
> Scope: Shared VPS 上所有新项目与后续生产迁移

本契约解决一个问题：**项目越来越多后，代码、数据库、上传文件、Secret、备份、缓存不能混在一起，否则后续备份、迁移、清理、下线都会变得危险。**

它不要求现在迁移所有历史项目；新项目从第一次 VPS onboarding 开始遵守，历史项目只在独立 Change Gate 中迁移。

---

## 1. Canonical top-level layout

Shared VPS 的项目级持久化目录统一为：

```text
/srv/
├── infra/                 # Shared Infra only
├── apps/                  # 可重建的项目代码 / Compose / 非秘密配置
│   └── <project>/
├── data/                  # 项目真实持久数据
│   └── <project>/
└── backups/               # 项目备份 / 恢复材料
    └── <project>/
```

核心规则：

```text
程序       → /srv/apps/<project>
持久业务数据 → /srv/data/<project>
恢复材料    → /srv/backups/<project>
公共基础设施 → /srv/infra
```

不得因为方便在 `/srv` 根目录新增 `db/`、`uploads/`、`backup2/`、`old/` 等跨项目散落目录。

---

## 2. `/srv/apps/<project>` — reconstructible application layer

这里放：

- project source / release files；
- Docker Compose manifest；
- Dockerfile；
- scripts；
- non-secret config templates；
- migration code；
- project-local operational docs。

这里**不应作为业务数据唯一副本**。

原则上，删除 `/srv/apps/<project>` 后，只要 Git/release artifact 与 `/srv/data/<project>`、必要 Secret/recovery material 仍然存在，项目应可重新部署。

禁止放：

- live database；
- user uploads；
- encryption key；
- payment Secret；
- persistent browser profile；
- 唯一订单/业务附件副本。

---

## 3. `/srv/data/<project>` — durable project state

推荐子结构：

```text
/srv/data/<project>/
├── db/                    # database files / database bind data when applicable
├── uploads/               # user/project-owned files
├── state/                 # durable application state not belonging to db/uploads
└── secrets/               # secret files when file-mount pattern is used
```

并非每个项目必须创建四个目录；**只创建实际需要的子目录**，但新增持久数据类别必须归属到项目目录中并记录在 Storage Manifest。

`secrets/`：

- 默认 `0700` directory；
- secret file 默认 `0600`，除非应用运行身份需要更严格/不同的最小权限；
- 不进入 Git；
- 不输出到 chat / Evidence / ordinary Handoff；
- 备份方式必须单独标明，不能假设普通项目备份会安全包含 Secret。

---

## 4. `/srv/backups/<project>` — recovery layer

每个项目独立备份目录，不建立跨项目混杂的“大 backup 文件夹”。

至少区分：

- scheduled backups；
- pre-change recovery points；
- final/decommission backup（如适用）。

备份必须记录：

- source data scope；
- timestamp；
- integrity / restore validation；
- Secret 是否包含；
- encryption key / matching recovery material 是否需要配对；
- retention policy。

数据库优先使用数据库自身安全备份机制：

- SQLite：backup API / verified safe snapshot；
- PostgreSQL：`pg_dump` / agreed physical backup strategy；
- 其他数据库：使用其一致性备份机制。

不要把“复制正在写入的数据库文件”默认当成可恢复备份。

---

## 5. Docker volume policy

对于用户可控、需要明确迁移/备份的持久数据：**优先显式 bind mount 到 `/srv/data/<project>/...`。**

Named volume 不是禁止项，但只有满足以下条件才允许：

1. upstream/runtime 确有合理原因；
2. volume name 明确带 project namespace；
3. 在 `PROJECT_STORAGE_MANIFEST.md` 中登记；
4. 有明确 backup / restore / migration 方法；
5. 删除项目时不会被误认为可随手 prune 的匿名对象。

禁止依赖匿名 volume 保存唯一业务数据。

禁止通过 broad prune 清理持久卷。

---

## 6. Project isolation invariant

每个项目必须满足：

```text
one project
→ one /srv/apps/<project>
→ one /srv/data/<project>
→ one /srv/backups/<project>
→ one independent Compose project
```

不同项目不得共享：

- database data directory；
- uploads directory；
- secrets directory；
- project backup directory。

如果确实需要共享某个数据服务，该服务必须升级为明确的 **Shared Infrastructure / Shared Service**，不能通过两个业务项目偷偷共用同一个目录实现。

---

## 7. Ephemeral data classification

以下默认视为可重建/可清理数据，而不是 durable business data：

- build cache；
- package cache；
- temporary files；
- rendered artifacts that can be regenerated；
- disposable test data；
- container logs beyond agreed retention；
- browser download/cache when not business state。

它们不得和真实 DB/uploads/secrets 混在同一个目录，避免未来无法安全清理。

如某个“cache”实际上承担不可重建业务状态，则必须重新分类为 durable state。

---

## 8. Mandatory `PROJECT_STORAGE_MANIFEST.md`

任何进入 Shared VPS 的新项目，在 production/private VPS deployment Gate 前必须建立项目存储清单。

至少记录：

```text
Project
Apps path
Data paths
Backup path
Compose project name
Persistent mounts / named volumes
Database type + location
Uploads location
Secret locations (metadata only, never values)
Backup method
Restore method
Retention
Migration unit
Deletion / decommission rule
Expected disk footprint
```

Reviewer 必须能回答：

> “如果明天换 VPS，真正需要搬走哪些东西？”

如果回答不清楚，不允许把 Storage Gate 判为 PASS。

模板见：`templates/PROJECT_STORAGE_MANIFEST_TEMPLATE.md`。

---

## 9. Migration invariant

项目应该被设计成可按以下单位迁移：

```text
reconstructible app/release
+
/srv/data/<project>
+
validated backup/recovery material
+
secret inventory / secure secret transfer procedure
+
project deployment manifest
```

迁移验证至少包括：

- fresh target restore；
- database integrity/read-back；
- uploads/state availability；
- secret compatibility（不输出值）；
- project health；
- old and new target identity is unambiguous。

不要等到服务器快满或准备搬家时才第一次搞清楚数据在哪里。

---

## 10. Decommission / deletion invariant

项目下线时，必须先分类：

```text
REBUILDABLE      → code/image/cache，可按策略删除
DURABLE          → DB/uploads/state，必须明确保留/迁移/销毁决定
SECRET           → 单独安全处理
BACKUP           → 按 retention / legal/business requirement 处理
SHARED           → 不属于业务项目，禁止顺手删除
```

含真实业务数据的不可逆删除属于 Owner-only consequential action。

不得因为“容器已经删了”就推断项目数据可以删除。

---

## 11. Capacity / cleanup relation

本契约继承 Governance 的资源规则：

- 60%：关注增长趋势；
- 70%：规划 allowlisted cleanup；
- 80%：紧急容量处理；
- 禁止 casual broad prune。

Storage Manifest 的存在就是为了让 cleanup 可以精确回答：

- 哪些是 durable；
- 哪些是 rebuildable；
- 哪些是 rollback material；
- 哪些已经 unreferenced；
- 删除能回收多少空间。

---

## 12. Existing-project migration policy

本契约**不授权直接搬迁已经运行的生产数据**。

历史项目如当前路径不符合契约：

1. 先记录现状；
2. 判断是否真的值得迁；
3. 单独建立 Storage Migration Change Gate；
4. 创建 verified backup / rollback；
5. 迁移一个项目；
6. restore/read-back/regression；
7. Reviewer PASS 后才清理旧路径。

因此：规范现在冻结，历史项目不做“为了整齐而整齐”的危险搬迁。

---

## 13. Current canonical examples

```text
/srv/apps/xianyu
/srv/data/xianyu
/srv/backups/xianyu

/srv/apps/dujiao-next
/srv/data/dujiao-next
/srv/backups/dujiao-next

/srv/apps/wordpress
/srv/data/wordpress
/srv/backups/wordpress
```

以上是路径契约，不代表 Dujiao-Next 或 WordPress 已经部署到生产。

---

## 14. Gate requirement

以后任何新项目进入 Shared VPS 时，Reviewer 的 onboarding/preflight 必须增加：

```text
STORAGE_LAYOUT_CONTRACT_READ=YES
PROJECT_STORAGE_MANIFEST_EXISTS=YES
DURABLE_DATA_PATHS_EXPLICIT=YES
SECRET_PATHS_EXPLICIT_METADATA_ONLY=YES
BACKUP_PATH_EXPLICIT=YES
RESTORE_METHOD_DEFINED=YES
ANONYMOUS_DURABLE_VOLUME=NO
CROSS_PROJECT_DATA_SHARING=NO (unless separately approved Shared Service)
```

其中任一关键项无法确定时：

```text
RETURN_STORAGE_LAYOUT_UNRESOLVED
```

不得先上线后补数据地图。
