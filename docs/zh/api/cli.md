---
title: He3 CLI
lang: zh-en
---

## 概述
He3 CLI 提供一个 NodeJS 编写的命令行工具，可以帮助你开发、翻译、发布工具。

## 安装

我们已经将该 CLI 作为项目工程文件的依赖，并且 `package.json` 运行脚本添加上了常用命令，你可以通过 `npm run <command>` 直接运行这些命令：

```json
...
  "scripts": {
    "dev": "he3 dev",
    "publish": "he3 publish",
    "i18n": "he3 i18n"
  },
...
```

当然你可以选择全局安装：

```shell
npm i -g he3
```

## 开发

He3 CLI 提供 `dev` 命令，你可以在工具项目中运行：

```shell
npm run dev
```

此时，客户端自动跳转到你正在开发的工具中。

## 上传

执行如下命令，你的工具就可以上传到 Portal 官网上:

```shell
npm run publish
```

上传之后，如果你的工具是公开状态，那么其他人就可以从 Tool Store 中下载你的工具。

## 翻译

翻译命令支持将你的工具名称、描述和关键词这几项元信息翻译成 11 种语言并写入根目录的 `meta.locale.json` 文件中，这样有助于你的工具被其他国家开发者检索得到并使用：

```shell
npm run i18n
```
