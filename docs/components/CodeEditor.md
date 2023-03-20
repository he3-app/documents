---
title: CodeEditor
lang: zh-en
---
# CodeEditor

## 何时使用

在有需要文本输入且输入是代码时，该组件提供代码高亮、折叠、行号等功能

## 代码演示

<h-code-editor style='height: 300px' />

::: details 查看源代码

```vue
<template>
  <h-code-editor
    v-model='textInput'
    lang='TYPESCRIPT'
  />
</template>

<script setup lang='ts'>
import { ref } from 'vue'

const textInput = ref('')
</script>

```

:::

## API

### Props

| 属性               | 说明             | 类型                                                                                                                                                                                                                                                                                                                           | 默认值     |
| ------------------ | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------- |
| modelValue/v-model | 代码编辑器内容   | string                                                                                                                                                                                                                                                                                                                         |            |
| lang               | 编程语言         | ^[CodeEditorLanguagesUnio]`'HTML' \| 'PYTHON' \| 'RUST' \| 'C' \| 'CPP'  \| 'CSHARP' \| 'CRYSTAL' \| 'OBJECTIVE_C' \| 'KOTLIN' \| 'DART' \| 'PHP' \| 'PROPERTIES' \| 'JAVASCRIPT' \| 'TYPESCRIPT' \| 'JSX' \| 'TSX' \| 'SQL' \| 'SWIFT' \| 'SCALA' \| 'TSX' \| 'TYPESCRIPT' \| 'TOML' \| 'WEB_ASSEMBLY' \| 'XML' \| 'YAML' \|` | JAVASCRIPT |
| theme              | 窗口主题色       | ^[CodeEditorThemesUnio]`'ANDROID_STUDIO' \| 'ABCDEF' \| 'ATOMONE' \| 'BBEDIT' \| 'BESPIN' \| 'DARCULA' \| 'DRACULA' \| 'DUOTONE_LIGHT' \| 'DUOTONE_DARK' \| 'ECLIPSE' \| 'GITHUB_LIGHT' \| 'GITHUB_DARK' \| 'ONE_DARK' \| 'OKAIDIA' \| 'SUBLIME' \| 'X_CODE_LIGHT' \| 'X_CODE_DARK'`                                           |            |
| placeholder        | 输入空时代替文本 | string                                                                                                                                                                                                                                                                                                                         |            |
| autofocus          | 自动聚焦         | boolean                                                                                                                                                                                                                                                                                                                        | true       |
| disabled           | 是否禁用         | boolean                                                                                                                                                                                                                                                                                                                        | false      |
| copyable           | 是否可以复制     | boolean                                                                                                                                                                                                                                                                                                                        | true       |
| hiddenGutter       | 说明隐藏         | boolean                                                                                                                                                                                                                                                                                                                        | false      |
