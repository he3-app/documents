---
title: NumberInput
lang: zh-en
---
# NumberInput

## 何时使用

在打开插件时需要自动选中文字的输入框时(有example情况下需要选中方便用户键入清空)，该输入框可以提供基本能力，

::: tip
该组件完全支持AntDV的a-input-number属性
:::

## 代码演示

<div>
  <h-number-input
    select-all-on-mount
    @blur="cronChange"
  />
</div>

::: details 查看源代码

```vue
<template>
  <h-number-input
    v-model:value="userInput"
    select-all-on-mount
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const userInput = ref('')
</script>

```

:::

## API

### Props

| 属性       | 说明                              | 类型    | 默认值 |
| ---------- | --------------------------------- | ------- | ------ |
| autoSelect | 组件挂载时自动选中input框中的内容 | boolean | false  |
