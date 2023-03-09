---
title: DigitalSizeView
lang: zh-en
---
# DigitalSizeView

## 何时使用

在需要展示文件大小时，该组件可以提供一定的兼容性展示

## 代码演示

<div>
  <h-digital-size-view :size="originalSize" />
</div>

::: details 查看源代码

```vue
<template>
  <h-digital-size-view :size="originalSize" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const originalSize = ref(0)
</script>

```

:::

## API

### Props

| 属性     | 说明                     | 类型   | 默认值 |
| -------- | ------------------------ | ------ | ------ |
| size     | 文件大小（byte）         | number |        |
| showMode | 展示1024进制还是1000进制 | 1024   | 1000   |  |
