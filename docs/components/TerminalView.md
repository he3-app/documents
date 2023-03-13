---
title: TerminalView
lang: zh-en
---
# TerminalView

## 何时使用

在有需要展示终端代码时，该组件可以提供良好的终端展示效果

## 代码演示

<h-terminal-view :result="screen" />

<script setup lang="ts">
import { ref } from 'vue'
const screen = ref('He3')
</script>

::: details 查看源代码

```vue
<template>
  <h-terminal-view :result="screen" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
const screen = ref('请输入多行文本')
</script>

```

:::

## API

### Props

| 属性  | 说明     | 类型   | 默认值 |
| ----- | -------- | ------ | ------ |
| value | 结果展示 | string |        |

::: warning 参数修改
result -> value
:::
