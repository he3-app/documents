---
title: TextTransform
lang: zh-en
---
# TextTransform

## 何时使用

文本转换专用组件（自带布局），直接使用可快速生成ui布局以及简单的转换逻辑

## 代码演示

### 普通转换

<a-card>
  <div style="height:500px">
    <h-text-transform sampleData="Example" :transform="transform" />
  </div>
</a-card>

<script setup lang="ts">

const sampleData = 'Example'
const transform = (inputValue: string) => {
  // do something
  return ''
}

const reverseTransform = () => {
  // do something
  // 将转换结果返回即可在左边进行展示，注意返回结果必须是字符串
}

const isJWT = () => {
  const reg = /^e([A-Za-z0-9_-]+)\.e([A-Za-z0-9_-]+)\.([A-Za-z0-9_-]+)$/
  return reg.test(text)
}

</script>

::: details 查看源代码

```vue
<template>
  <h-text-transform :sampleData="sampleData" :transform="transform" :autoFillInputCondition="isJWT" />
</template>

<script setup lang="ts">

const sampleData = 'Example'
const transform = (inputValue: string):string => {
  // do something
  // 将转换结果返回即可在右边进行展示，注意返回结果必须是字符串
  return ''
}
const isJWT = () => {
  const reg = /^e([A-Za-z0-9_-]+)\.e([A-Za-z0-9_-]+)\.([A-Za-z0-9_-]+)$/
  return reg.test(text)
}

</script>

```

:::

### 文件转换

<a-card>
  <div style="height:500px">
    <h-text-transform enableFile fileOutputAlert="导出成功" sampleData="Example" :transform="transform" />
  </div>
</a-card>

::: details 查看源代码

```vue
<template>
  <h-text-transform enableFile fileOutputAlert="导出成功" :transform="transform"  />
</template>

<script setup lang="ts">

const sampleData = 'Example'
const transform = (inputValue: string):string => {
  // do something
  // 将转换结果返回即可在右边进行展示，注意返回结果必须是字符串
  return ''
}

</script>

```

:::

### 双向转换

<a-card>
  <h-text-transform
    enableReverse
    :transform="transform"
    :sampleData="sampleData"
    :reverseTransform="reverseTransform"
  />
</a-card>

::: details 查看源代码

```vue
<template>
  <h-text-transform
    enableReverse
    :transform="transform"
    :sampleData="sampleData"
    :reverseTransform="reverseTransform"
  />
</template>

<script setup lang="ts">

const transform = (inputValue: string) => {
  // do something
  return ''
}

const transform = () => {
  // do something
  // 将转换结果返回即可在右边进行展示，注意返回结果必须是字符串
}
const reverseTransform = () => {
  // do something
  // 将转换结果返回即可在左边进行展示，注意返回结果必须是字符串
}

</script>

```

:::

## API

### Props

| 属性                   | 说明                   | 类型                                                        | 默认值                                       |
| ---------------------- | ---------------------- | ----------------------------------------------------------- | -------------------------------------------- |
| sampleData             | 输入示例               | string                                                      | A Free, Modern Toolbox Built for Developers. |
| enableReverse          | 是否使用反转换         | boolean                                                     | false                                        |
| enableFile             | 是否支持文件转换       | boolean                                                     | false                                        |
| fileOutputAlert        | 文件转换后提示文字     | string                                                      |                                              |
| transform              | 转换函数               | ^[Function]`(inputValue: string)=> void`                    |                                              |
| reverseTransform       | 反转换函数             | ^[Function]`(inputValue: string)=> void`                    |                                              |
| fileOutputName         | 输出文件名字           | ^[Function]`(name: string) => string`                       | false                                        |
| autoFillInputCondition | 剪切板自动回填判断函数 | ^[Function]`isSomething?: (str: string) => boolean \| null` | null                                         |

### Expose

| 插槽名       | 说明                         | 类型      | 默认值 |
| ------------ | ---------------------------- | --------- | ------ |
| inputValue   | 输入框中的值                 | string    |        |
| handleChange | 转换函数，可用于手动执行转换 | Component |        |

### Slot

| 插槽名 | 说明                               | 类型      | 默认值 |
| ------ | ---------------------------------- | --------- | ------ |
| option | 介于输入和输出框之间的转换选项插槽 | Component |        |
