---
title: SingleLine
lang: zh-en
---
# SingleLine

## 何时使用

在有需要使用单行输展示时，该展示框可提供更强大的功能

## 代码演示

<h-singleline :value="text" result-desc="" />

<script setup lang="ts">
import { ref } from 'vue'

const text = ref('可复制单行输出')
</script>

::: details 查看源代码

```vue
<template>
  <h-singleline :value="text" result-desc="" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
const text = ref('请输入多行文本')
</script>

```

:::

## API

### Props

| 属性     | 说明             | 类型    | 默认值 |
| -------- | ---------------- | ------- | ------ |
| title    | 标题             | string  |        |
| value    | 结果展示         | string  |        |
| size     | 复制按钮大小     | string  | middle |
| copyable | 是否显示复制按钮 | boolean | true   |

::: warning 参数修改
result -> value

showCopyButton -> copyable
:::
