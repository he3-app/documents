# 高级能力

对于批量工具的开发，CLI 的 `dev`，`i18n` 命令和单工具开发一样，但对于 `publish` 命令，它提供另外两个额外的 flag:

指定想要上传的工具：

```shell
npm run publish --include=tool1,tool2
```

排除**不需要上传**的工具：

```shell
npm run publish --exclude=tool3,tool4
```
