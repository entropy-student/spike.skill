# Part X — 最终素材包归档

`comic-narrative/partX/` 用于长期整理已经由 Owner 确认、可作为后续生产输入的最终素材包。

## 归档规则

- 每个选题使用独立目录：`Hxxx_选题名/`。
- 最终执行包放在 `01_最终执行包/`。
- 根目录 `INDEX.json` 是当前有效包索引；`LIBRARY_MANIFEST.json` 记录归档级事实。
- 草稿、测试残留、已 RETURN 或已被新版替代的包不进入当前有效索引。
- 支持两种归档格式：
  - `ZIP`：跨 Agent transport snapshot；
  - `EDITABLE_DIRECTORY`：Owner 明确要求保持可编辑时使用。
- `EDITABLE_DIRECTORY` 必须包含 `总清单.json` 与 `PACKAGE_DIGEST.txt`，后者记录目录聚合 SHA-256。
- GitHub 归档优先避免重复存储仓库中已经存在的 canonical binary；repo-native 包可通过 `REFERENCE_RESOLUTION.md` 解析到 canonical Character Master / Style Plate。
- 若存在原始完整 transport ZIP，其名称与 SHA-256 保留在每个选题的 `PACKAGE_RECORD.md` 中；无 ZIP 时必须显式记录 `NONE`。

## 当前条目

- H003 — 家庭食谱
- H013 — 抢票锁票
