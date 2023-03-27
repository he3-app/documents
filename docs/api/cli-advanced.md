# Advanced ability

对于批量工具的开发，CLI 的 `dev`，`i18n` 命令和单工具开发一样，但对于 `publish` 命令，它提供另外两个额外的 flag:
For the development of batch tools, the `dev` and `i18n` commands of the cli are the same as the single tool development, but for the `publish` command, it provides two additional flags

Specify the tools you want to upload:

```shell
npm run publish --include=tool1,tool2
```

Exclude tools that do **not need to be uploaded**:

```shell
npm run publish --exclude=tool3,tool4
```
