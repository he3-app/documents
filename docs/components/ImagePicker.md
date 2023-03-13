---
title: ImagePicker
lang: zh-en
---
# ImagePicker

## 何时使用

在有选择图片需求时使用

## 代码演示

### 单张选择

<h-image-picker />

::: details 查看源代码

```vue
<template>
  <h-image-picker />
</template>

```

:::

### 批量选择

<h-multi-image-picker />

::: details 查看源代码

```vue
<template>
  <h-multi-image-picker />
</template>

```

:::

## API

## 单张选择

### Props

| 属性                    | 说明     | 类型   | 默认值 |
| ----------------------- | -------- | ------ | ------ |
| width（单张选择）       | 容器宽度     | string | 100%   |
| height（单张选择）      | 容器高度     | string | 100%   |
| imageHeight（单张选择） | 图片高度 | string | 78vh   |

### 事件

| 事件名 | 说明         | 类型                             | 默认值 |
| ------ | ------------ | -------------------------------- | ------ |
| pick   | 图片选择钩子 | ^[Function]`(file:File)=>void` |        |
| load   | 图片挂载钩子 | ^[Function]`(file:File)=>void` |        |
| reset  | 图片重置钩子 | ^[Function]`(file:File)=>void` |        |

#### 批量选择

### 事件

| 事件名 | 说明         | 类型                             | 默认值 |
| ------ | ------------ | -------------------------------- | ------ |
| pick   | 图片选择钩子 | ^[Function]`(file:File)=>void` |        |
| load   | 图片挂载钩子 | ^[Function]`(file:File)=>void` |        |
| remove | 图片重置钩子 | ^[Function]`(file:File)=>void` |        |
