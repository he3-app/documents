---
title: He3 CLI
lang: en
---

## overview

He3 CLI provide a command-line tool written in nodeJs, which can help you develop, translate, and publish tools.

## Install

We have made the cli a dependency of the project project file, and the `package.json` running script has added common commands, you can run these commands directly through `npm run command`:

```json
...
  "scripts": {
    "dev": "he3 dev",
    "publish": "he3 publish",
    "i18n": "he3 i18n"
  },
...
```

Of course you can choose to install globally:

```shell
npm i -g he3
```

## Develop

He3 CLI Provides a `dev` command that you can run in a tools project:

```shell
npm run dev
```

At this point, the client automatically jumps to the tool you are developing.

## Upload

Execute the following command, and your tool can be uploaded to the portal official website

```shell
npm run publish
```

After uploading, if your tool is public, others can download your tool from the tool store.

## Translate

The translation command supports translating the meta information of your tool name, description, and keywords into 11 languages ​​and writing it into the `meta.locale.json` file in the root directory, which will help your tools be retrieved by developers in other countries and use:

```shell
npm run i18n
```
