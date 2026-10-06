# Part X — 最终素材包归档

`comic-narrative/partX/` 用于长期整理已经由 Owner 确认、可作为后续生产输入的最终素材包。

## 归档规则

- 每个选题使用独立目录：`Hxxx_选题名/`。
- 最终执行包放在 `01_最终执行包/`。
- 根目录 `INDEX.json` 是当前有效包索引；`LIBRARY_MANIFEST.json` 记录归档级事实。
- 草稿、测试残留、已 RETURN 或已被新版替代的包不进入当前有效索引。
- GitHub 归档优先避免重复存储仓库中已经存在的 canonical binary；repo-native ZIP 可通过包内 `REFERENCE_RESOLUTION.md` 解析到 canonical Character Master / Style Plate。
- 原始完整 transport ZIP 的名称与 SHA-256 仍保留在每个选题的 `PACKAGE_RECORD.md` 中用于追溯。

## 当前条目

- H013 — 抢票锁票
