---
title: KVInput
lang: zh-en
---
# KVInput

## 何时使用

在需要使用对象或者JSON的键值对输入时，该组件能够简化你的输入

## 代码演示

<h-k-v-input v-model="payload" @change="handleChange" />

<script setup lang="ts">
import { ref } from 'vue'
const payload = ref('')
function handleChange(obj: Record<string, string>[]) {
  const mergeResult = obj.reduce((total, cur) => {
    if (!cur.key) return total
    return Object.assign(total, { [cur.key]: cur.value })
  }, {})
  payload.value = JSON.stringify(mergeResult, null, 4)
}
</script>

::: details 查看源代码

```vue
<template>
  <h-k-v-input v-model="payload" @change="handleChange" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const payload = ref('')
function handleChange(obj: Record<string, string>[]) {
  const mergeResult = obj.reduce((total, cur) => {
    if (!cur.key) return total
    return Object.assign(total, { [cur.key]: cur.value })
  }, {})
  payload.value = JSON.stringify(mergeResult, null, 4)
}
</script>

```

:::

## API

### Props

| 属性        | 说明         | 类型                             | 默认值 |
| ----------- | ------------ | -------------------------------- | ------ |
| modelValue  | 绑定值       | string                           |        |
| defaultRow  | 默认键值对   | ^[Object]`Record<string,string>` |        |
| changeProps | 回调函数参数 | unknown[]                        |        |

### 事件

| 事件名 | 说明               | 类型                  | 默认值 |
| ------ | ------------------ | --------------------- | ------ |
| change | 键值对改变触发事件 | ^[Function]`()=>void` |        |
