---
title: Kv
lang: zh-en
---
# Kv

## 何时使用

在需要使用对象或者JSON的键值对展示时，该组件能够很好地将其进行展示

## 代码演示

<div> <h-kv :value="outputValue"/> </div>

<script setup lang="ts">
import {ref} from 'vue'

const outputValue = ref({
  key1: 1,
  key2: 2
})
</script>

::: details 查看源代码

```vue
<template>
  <h-kv :value="outputValue"  />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const outputValue = ref({
  key1: 1,
  key2: 2,
})
</script>
```

:::

## API

### Props

| 属性              | 说明             | 类型                          | 默认值 |
| ----------------- | ---------------- | ----------------------------- | ------ |
| value             | 需要展示的对象   | ^[Object]`Record<string,any>` |        |
| width             | 宽度             | number                        |        |
| mode              | 展示模式         | ^[enum]`'list'\| 'json'`      | list   |
| disableModeSwitch | 是否禁用模式切换 | boolean                       |        |

::: warning
result -> value
model -> mode
modelSwitch -> disableModeSwitch (注意这里是禁用)
:::
