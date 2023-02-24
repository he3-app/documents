---
title: Icon
lang: zh-en
---
# Icon

## 何时使用

在有需要使用图标时，该组件可以提供各种icon支持,配合[icones](https://icones.js.org/)使用

## 代码演示

<HIcon icon="ant-design:bell-twotone" />
<HIcon icon="ant-design:alert-twotone" :size="30" />
<HIcon icon="ant-design:bulb-twotone" :size="40" />

::: details 查看源代码

```vue
<template>
  <h-icon icon="ant-design:bell-twotone" />
  <h-icon icon="ant-design:alert-twotone" :size="30" />
  <h-icon icon="ant-design:bulb-twotone" :size="40" />
</template>

```

:::

## API

### Props

| 属性 | 说明               | 类型   | 默认值 |
| ---- | ------------------ | ------ | ------ |
| icon | icones上的图标字段 | string |        |
| size | 图标大小           | number | 20     |
