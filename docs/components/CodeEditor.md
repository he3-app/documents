---
title: CodeEditor
lang: zh-en
---
# CodeEditor

## 何时使用

在有需要文本输入且输入是代码时，该组件提供代码高亮、折叠、行号等功能

## 代码演示

<HCodeEditor />

::: details 查看源代码

```vue
<template>
  <h-code-editor
    v-model="textInput"
    current-language="TYPESCRIPT"
    lang="TYPESCRIPT"
    theme="GITHUB_LIGHT"
    class="editor" 
  />
</template>

<script setup lang="ts">
const textInput = ref('')
</script>

```

:::

## API

### Props


| 属性            | 说明             | 类型                                                                                                                                                         | 默认值     |
| --------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------- |
| modelValue      | 代码编辑器内容   | string                                                                                                                                                       |            |
| lang            | 编程语言         | CodeEditorLanguagesUnio                                                                                                                                      | JAVASCRIPT |
| theme           | 窗口主题色       | CodeEditorThemesUnio                                                                                                                                         |            |
| placeholder     | 输入空时代替文本 | string                                                                                                                                                       |            |
| autofocus       | 自动聚焦         | boolean                                                                                                                                                      | true       |
| disabled        | 是否禁用         | boolean                                                                                                                                                      | false      |
| copyable        | 是否可以复制     | boolean                                                                                                                                                      | true       |
| copyBtnPosition | 复制按钮定位     | {<br />  top?: CSSProperties['top']<br />  right?: CSSProperties['right']<br />  bottom?: CSSProperties['bottom']<br />  left?: CSSProperties['left']<br />} |            |
| hiddenGutter    | 说明隐藏         | boolean                                                                                                                                                      | false      |
