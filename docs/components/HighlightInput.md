---
title: HighlightInput
lang: zh-en
---
# HighlightInput

## 何时使用

在有需要将输入框中的文字高亮时，该组件可以高亮传入的字符串数组，当输入框中字符与之匹配时自动高亮

## 代码演示

<script setup>
const page = 'He3 is a free, modern developer toolbox. Check it out: https://he3.app'
</script>

<HHighlightInput
  v-model="page"
  title="标题"
  :highlight-text="['He3','https://he3.app']"
  regex-modifier="g"
/>

::: details 查看源代码

```vue
<template>
  <h-highlight-input
    v-model="testStr"
    title="标题"
    :highlight-text="matchArray"
    :regex-modifier="rightRegex"
  />
</template>

<script setup lang="ts">
const testStr = ref(
  'He3 is a free, modern developer toolbox. Check it out: https://he3.app',
)
const matchArray = reactive<string[]>(['He3','https://he3.app'])
const rightRegex = ref('gi')
</script>

```

:::

## API

### Props

| 属性          | 说明       | 类型   | 默认值 |
| ------------- | ---------- | ------ | ------ |
| modelValue    | 绑定文本   | string |        |
| title         | 标题       | string |        |
| highlightText | 高亮文字   | Array  |        |
| regexModifier | 正则修饰符 | string |        |
