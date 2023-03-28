# Advanced ability

For the development of batch tools, the `dev` and `i18n` commands of the cli are the same as the single tool development, but for the `publish` command, it provides two additional flags

Specify the tools you want to upload:

```shell
npm run publish --include=tool1,tool2
```

Exclude tools that do **not need to be uploaded**:

```shell
npm run publish --exclude=tool3,tool4
```
