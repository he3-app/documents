---
title: Multiline
lang: zh-en
---
# Multiline

## 何时使用

在有需要使用多行文本展示时，该展示框可以提供更强大功能

## 代码演示

<div>
  <h-multiline :value="text" result-desc="" />
</div>

<script setup lang="ts">
import { ref } from 'vue'

const text = ref('请输入多行文本')
</script>

::: details 查看源代码

```vue
<template>
  <h-multiline :value="text" result-desc="" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const text = ref('请输入多行文本')
</script>

```

:::

## API

### Props

| 属性             | 说明         | 类型                                                                            | 默认值 |
| ---------------- | ------------ | ------------------------------------------------------------------------------- | ------ |
| title            | 标题         | string                                                                          | result |
| value            | 结果展示     | string                                                                          |        |
| height           | 高度         | string                                                                          |        |
| fileType         | 导出文件类型 | [FileType](https://developer.mozilla.org/zh-CN/docs/Web/Media/Formats/Image_types) |        |
| enableOutputFile | 导出文件     | boolean                                                                             |        |

::: warning 参数修改
result -> value

outputFile -> enableOutputFile

result-desc  -> title  
:::
