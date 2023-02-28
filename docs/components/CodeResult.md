---
title: CodeResult
lang: zh-en
---
# CodeResult

## 何时使用

在有需要进行文字展示且文字内容是代码时，使用该组件可以提供代码高亮、行号、复制

## 代码演示

<h-code-result code="console.log('He3')" style="height: 300px" />

::: details 查看源代码

```vue
<template>
  <h-code-result :code="textInput" lang="TYPESCRIPT" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const textInput = ref(`console.log('He3')`)
</script>

```

:::

## API

### Props

| 属性  | 说明                   | 类型   | 默认值 |
| ----- | ---------------------- | ------ | ------ |
| title | 展示一段可复制的代码段 | string |        |
