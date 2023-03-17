---
title: MultilineInput
lang: zh-en
---
# MultilineInput

## 何时使用

在有需要使用多行输入时，该输入框使输入更加简单

## 代码演示

<h-multiline-input v-model="text" autofocus title="标题" />

<script setup lang="ts">
import { ref } from 'vue'
const text = ref('请输入多行文本')
</script>

::: details 查看源代码

```vue
<template>
  <h-multiline-input v-model="text" autofocus title="标题" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
const text = ref('请输入多行文本')
</script>

```

:::

## API

### Props

::: danger

MultilineInput不支持code输入，请使用CodeEditor

:::

| 属性                   | 说明                              | 类型                                          | 默认值    |
| ---------------------- | --------------------------------- | --------------------------------------------- | --------- |
| id                     | 用于获取DOM时使用                 | string                                        |           |
| title                  | 标题                              | string                                        |           |
| modelValue             | 绑定ref                           | string                                        |           |
| placeholder            | 占位文字                          | string                                        |           |
| autofocus              | 自动聚焦                          | boolean                                       | autofocus |
| autoSelect             | 组件挂载时自动选中input框中的内容 | boolean                                       | false     |
| autoFillInputCondition | 剪切板自动回填判断函数            | ^[Function]`(str: string) => boolean \| null` | null      |

### 事件

| 事件名 | 说明               | 类型                  | 默认值 |
| ------ | ------------------ | --------------------- | ------ |
| change | 键值对改变触发事件 | ^[Function]`()=>void` |        |

::: warning 参数修改
selectAllOnMount -> autoSelect
:::
