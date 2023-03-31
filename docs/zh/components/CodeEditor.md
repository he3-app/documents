---
title: 代码编辑器
lang: zh-en
---
# 代码编辑器

## 何时使用

在有需要文本输入且输入是代码时，该组件提供代码高亮、折叠、行号等功能

## 代码演示

:::demo
codeEditor/basic
:::

## API

### 属性

| 属性               | 说明             | 类型                                                                                                                                                                                                                                                                                                                                                                                                                                                 | 默认值     |
| ------------------ | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| modelValue/v-model | 代码编辑器内容   | string                                                                                                                                                                                                                                                                                                                                                                                                                                               |            |
| lang               | 编程语言         | ^[CodeEditorLanguagesUnio]`'HTML' \| 'PYTHON' \| 'RUST' \| 'C' \| 'CPP'  \| 'CSHARP' \| 'CRYSTAL' \| 'OBJECTIVE_C' \| 'KOTLIN' \| 'DART' \| 'PHP' \| 'PROPERTIES' \| 'JAVASCRIPT' \| 'TYPESCRIPT' \| 'JSX' \| 'TSX' \| 'SQL' \| 'SWIFT' \| 'SCALA' \| 'TSX' \| 'TYPESCRIPT' \| 'TOML' \| 'WEB_ASSEMBLY' \| 'XML' \| 'YAML' \|`                                                                                                                       | JAVASCRIPT |
| theme              | 窗口主题色       | ^[CodeEditorLanguagesUnio]`'HTML' \| 'PYTHON' \| 'RUST' \| 'C' \| 'CPP'  \| 'CSS' \| 'CSHARP' \| 'CRYSTAL' \| 'OBJECTIVE_C' \| 'KOTLIN' \| 'DART' \| 'ELM' \| 'HASKELL' \|  'PHP' \| 'PROPERTIES' \| 'LUA' \| 'RUBY' \| 'R' \| 'JAVASCRIPT' \| 'JAVA'\| 'JSON' \| 'GO' \|  'TYPESCRIPT' \| 'JSX' \| 'TSX' \| 'MARKDOWN' \| 'SQL' \| 'SHELL' \| 'SWIFT' \| 'SCALA' \| 'TSX' \| 'TYPESCRIPT' \| 'TOML' \| 'WEB_ASSEMBLY' \| 'XML' \| 'YAML' \| 'TOML'` |            |
| placeholder        | 输入空时代替文本 | string                                                                                                                                                                                                                                                                                                                                                                                                                                               |            |
| autofocus          | 自动聚焦         | boolean                                                                                                                                                                                                                                                                                                                                                                                                                                              | true       |
| disabled           | 是否禁用         | boolean                                                                                                                                                                                                                                                                                                                                                                                                                                              | false      |
| copyable           | 是否可以复制     | boolean                                                                                                                                                                                                                                                                                                                                                                                                                                              | true       |
| hiddenGutter       | 说明隐藏         | boolean                                                                                                                                                                                                                                                                                                                                                                                                                                              | false      |
