---
title: Layout
lang: zh-en
---
# Layout

## 何时使用

在He3 App开发中使用约定的布局，可以更快上手

## 代码演示

### 水平两栏布局

#### 中等宽（默认）

<HLayoutHorizontal mode="middle">
  <template #left>
    <div style="background-color: #7dbcea; height: 400px"></div>
  </template>
  <template #right>
    <div style="background-color: rgba(16, 142, 233, 1); height: 400px"></div>
  </template>
</HLayoutHorizontal>

::: details 查看源代码

```vue
<template>
  <HLayoutHorizontal mode="middle">
    <template #left>
      <div style="background-color: #7dbcea; height: 400px"></div>
    </template>
    <template #right>
      <div style="background-color: rgba(16, 142, 233, 1); height: 400px"></div>
    </template>
  </HLayoutHorizontal>
</template>

```

:::

#### 左固定

<HLayoutHorizontal mode="left" :width="200">
  <template #left>
    <div style="background-color: #7dbcea; height: 400px"></div>
  </template>
  <template #right>
    <div style="background-color: rgba(16, 142, 233, 1); height: 400px"></div>
  </template>
</HLayoutHorizontal>

::: details 查看源代码

```vue
<template>
  <HLayoutHorizontal mode="left" :width="200">
    <template #left>
      <div style="background-color: #7dbcea; height: 400px"></div>
    </template>
    <template #right>
      <div style="background-color: rgba(16, 142, 233, 1); height: 400px"></div>
    </template>
  </HLayoutHorizontal>
</template>

```

:::

#### 右固定

<HLayoutHorizontal mode="right" :width="200">
  <template #left>
    <div style="background-color: #7dbcea; height: 400px"></div>
  </template>
  <template #right>
    <div style="background-color: rgba(16, 142, 233, 1); height: 400px"></div>
  </template>
</HLayoutHorizontal>

::: details 查看源代码

```vue
<template>
  <HLayoutHorizontal mode="right" :width="200">
    <template #left>
      <div style="background-color: #7dbcea; height: 400px"></div>
    </template>
    <template #right>
      <div style="background-color: rgba(16, 142, 233, 1); height: 400px"></div>
    </template>
  </HLayoutHorizontal>
</template>

```

:::

### 垂直两栏布局

#### 中等宽（默认）

<HLayoutVertical mode="middle">
  <template #above>
    <div style="background-color: #7dbcea; height: 400px"></div>
  </template>
  <template #below>
    <div style="background-color: rgba(16, 142, 233, 1); height: 400px"></div>
  </template>
</HLayoutVertical>

::: details 查看源代码

```vue
<template>
  <HLayoutVertical mode="middle">
    <template #above>
      <div style="background-color: #7dbcea; height: 400px"></div>
    </template>
    <template #below>
      <div style="background-color: rgba(16, 142, 233, 1); height: 400px"></div>
    </template>
  </HLayoutVertical>
</template>

```

:::

#### 上固定

<HLayoutVertical mode="above" :width="200">
  <template #above>
    <div style="background-color: #7dbcea; height: 100%"></div>
  </template>
  <template #below>
    <div style="background-color: rgba(16, 142, 233, 1); height: 400px"></div>
  </template>
</HLayoutVertical>

::: details 查看源代码

```vue
<template>
  <HLayoutVertical mode="above" :width="200">
    <template #above>
      <div style="background-color: #7dbcea; height: 100%"></div>
    </template>
    <template #below>
      <div style="background-color: rgba(16, 142, 233, 1); height: 400px"></div>
    </template>
  </HLayoutVertical>
</template>

```

:::

#### 下固定

<HLayoutVertical mode="below" :width="200">
  <template #above>
    <div style="background-color: #7dbcea; height: 400px"></div>
  </template>
  <template #below>
    <div style="background-color: rgba(16, 142, 233, 1); height: 100%"></div>
  </template>
</HLayoutVertical>

::: details 查看源代码

```vue
<template>
  <HLayoutVertical mode="below" :width="200">
    <template #above>
      <div style="background-color: #7dbcea;"></div>
    </template>
    <template #below>
      <div style="background-color: rgba(16, 142, 233, 1);"></div>
    </template>
  </HLayoutVertical>
</template>

```

:::

### 单栏布局

#### 居中（默认）

<HLayoutSingle mode="middle" :width="400">
  <div style="background-color: #7dbcea; height:400px; width:400px"></div>
</HLayoutSingle>

::: details 查看源代码

```vue
<template>
  <HLayoutSingle mode="middle" :width="400">
    <div style="background-color: #7dbcea; height:400px; width:400px"></div>
  </HLayoutSingle>
</template>

```

:::

#### 居左

<HLayoutSingle mode="left" :width="400">
  <div style="background-color: #7dbcea; height:400px; width:400px"></div>
</HLayoutSingle>

::: details 查看源代码

```vue
<template>
  <HLayoutSingle mode="middle" :width="400">
    <div style="background-color: #7dbcea; height:400px; width:400px"></div>
  </HLayoutSingle>
</template>

```

:::

#### 居右

<HLayoutSingle mode="right" :width="400">
  <div style="background-color: #7dbcea; height:400px; width:400px"></div>
</HLayoutSingle>

::: details 查看源代码

```vue
<template>
  <HLayoutSingle mode="middle" :width="400">
    <div style="background-color: #7dbcea; height:400px; width:400px"></div>
  </HLayoutSingle>
</template>

```

:::

### 可调节布局

<HLayoutSplitPane>
  <template #left>
    <div style="background-color: #7dbcea; height: 400px"></div>
  </template>
  <template #right>
    <div style="background-color: rgba(16, 142, 233, 1); height: 400px"></div>
  </template>
</HLayoutSplitPane>

::: details 查看源代码

```vue
<template>
  <HLayoutSplitPane>
    <template #left>
      <div style="background-color: #7dbcea; height: 400px"></div>
    </template>
    <template #right>
      <div style="background-color: rgba(16, 142, 233, 1); height: 400px"></div>
    </template>
  </HLayoutSplitPane>
</template>

```

:::

## API

| 属性 | 说明               | 类型   | 默认值 |
| ---- | ------------------ | ------ | ------ |
| mode | icones上的图标字段 | string |        |
| size | 图标大小           | number | 20     |
