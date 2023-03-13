---
title: Layout
lang: zh-en
---
# Layout

## 何时使用

在He3 App开发中使用约定的布局，可以更快上手

::: warning
所有布局名称都改成\<h-xxx-layout\>形式
:::


## 代码演示

### 水平两栏布局

#### 中等宽（默认）

<h-horizontal-layout mode="middle">
  <template #left>
    <div style="background-color: #7dbcea; height: 400px"></div>`
  </template>`
  <template #right>
    <div style="background-color: rgba(16, 142, 233, 1); height: 400px"></div>
  </template>
</h-horizontal-layout>

::: details 查看源代码

```vue
<template>
  <h-horizontal-layout mode="middle">
    <template #left>
      <div style="background-color: #7dbcea; height: 400px"></div>
    </template>
    <template #right>
      <div style="background-color: rgba(16, 142, 233, 1); height: 400px"></div>
    </template>
  </h-horizontal-layout>
</template>

```

:::

#### 左固定

<h-horizontal-layout mode="left" :width="200">
  <template #left>
    <div style="background-color: #7dbcea; height: 400px"></div>
  </template>
  <template #right>
    <div style="background-color: rgba(16, 142, 233, 1); height: 400px"></div>
  </template>
</h-horizontal-layout>

::: details 查看源代码

```vue
<template>
  <h-horizontal-layout mode="left" :width="200">
    <template #left>
      <div style="background-color: #7dbcea; height: 400px"></div>
    </template>
    <template #right>
      <div style="background-color: rgba(16, 142, 233, 1); height: 400px"></div>
    </template>
  </h-horizontal-layout>
</template>

```

:::

#### 右固定

<h-horizontal-layout mode="right" :width="200">
  <template #left>
    <div style="background-color: #7dbcea; height: 400px"></div>
  </template>
  <template #right>
    <div style="background-color: rgba(16, 142, 233, 1); height: 400px"></div>
  </template>
</h-horizontal-layout>

::: details 查看源代码

```vue
<template>
  <h-horizontal-layout mode="right" :width="200">
    <template #left>
      <div style="background-color: #7dbcea; height: 400px"></div>
    </template>
    <template #right>
      <div style="background-color: rgba(16, 142, 233, 1); height: 400px"></div>
    </template>
  </h-horizontal-layout>
</template>

```

:::

### 垂直两栏布局

#### 中等宽（默认）

<h-vertical-layout mode="middle">
  <template #top>
    <div style="background-color: #7dbcea; height: 400px"></div>
  </template>
  <template #bottom>
    <div style="background-color: rgba(16, 142, 233, 1); height: 400px"></div>
  </template>
</h-vertical-layout>

::: details 查看源代码

```vue
<template>
  <h-vertical-layout mode="middle">
    <template #top>
      <div style="background-color: #7dbcea; height: 400px"></div>
    </template>
    <template #bottom>
      <div style="background-color: rgba(16, 142, 233, 1); height: 400px"></div>
    </template>
  </h-vertical-layout>
</template>

```

:::

#### 上固定

<h-vertical-layout mode="top" :width="200">
  <template #top>
    <div style="background-color: #7dbcea; height: 100%"></div>
  </template>
  <template #bottom>
    <div style="background-color: rgba(16, 142, 233, 1); height: 400px"></div>
  </template>
</h-vertical-layout>

::: details 查看源代码

```vue
<template>
  <h-vertical-layout mode="top" :width="200">
    <template #top>
      <div style="background-color: #7dbcea; height: 100%"></div>
    </template>
    <template #bottom>
      <div style="background-color: rgba(16, 142, 233, 1); height: 400px"></div>
    </template>
  </h-vertical-layout>
</template>

```

:::

#### 下固定

<h-vertical-layout mode="bottom" :width="200">
  <template #top>
    <div style="background-color: #7dbcea; height: 400px"></div>
  </template>
  <template #bottom>
    <div style="background-color: rgba(16, 142, 233, 1); height: 100%"></div>
  </template>
</h-vertical-layout>

::: details 查看源代码

```vue
<template>
  <h-vertical-layout mode="bottom" :width="200">
    <template #top>
      <div style="background-color: #7dbcea;"></div>
    </template>
    <template #bottom>
      <div style="background-color: rgba(16, 142, 233, 1);"></div>
    </template>
  </h-vertical-layout>
</template>

```

:::

### 单栏布局

#### 居中（默认）

<H-single-layout mode="middle" :width="400">
  <div style="background-color: #7dbcea; height:400px; width:400px"></div>
</H-single-layout>

::: details 查看源代码

```vue
<template>
  <H-single-layout mode="middle" :width="400">
    <div style="background-color: #7dbcea; height:400px; width:400px"></div>
  </H-single-layout>
</template>

```

:::

#### 居左

<H-single-layout mode="left" :width="400">
  <div style="background-color: #7dbcea; height:400px; width:400px"></div>
</H-single-layout>

::: details 查看源代码

```vue
<template>
  <H-single-layout mode="left" :width="400">
    <div style="background-color: #7dbcea; height:400px; width:400px"></div>
  </H-single-layout>
</template>

```

:::

#### 居右

<H-single-layout mode="right" :width="400">
  <div style="background-color: #7dbcea; height:400px; width:400px"></div>
</H-single-layout>

::: details 查看源代码

```vue
<template>
  <H-single-layout mode="right" :width="400">
    <div style="background-color: #7dbcea; height:400px; width:400px"></div>
  </H-single-layout>
</template>

```

:::

### 可调节布局

<h-layout-split-pane>
  <template #left>
    <div style="background-color: #7dbcea; height: 400px"></div>
  </template>
  <template #right>
    <div style="background-color: rgba(16, 142, 233, 1); height: 400px"></div>
  </template>
</h-layout-split-pane>

::: details 查看源代码

```vue
<template>
  <h-layout-split-pane>
    <template #left>
      <div style="background-color: #7dbcea; height: 400px"></div>
    </template>
    <template #right>
      <div style="background-color: rgba(16, 142, 233, 1); height: 400px"></div>
    </template>
  </h-layout-split-pane>
</template>

```

:::

## API

### Props

| 属性           | 说明                 | 类型                                  | 默认值 |
| -------------- | -------------------- | ------------------------------------- | ------ |
| mode           | 模式选择             | ^[enum]`'left'\| 'middle'\| 'right'`  | middle |
| mode(vertical) | 模式选择（垂直布局） | ^[enum]`'top'\| 'middle'\| 'bottom'` | middle |
| width          | 固定局部宽度         | number                                | 300    |
