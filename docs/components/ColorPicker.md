---
title: ColorPicker
lang: zh-en
---
# ColorPicker

## 何时使用

在有颜色输入时，该颜色输入框可提供颜色的Input框和颜色选择器

## 代码演示

<!-- <h-color-picker pure-color="#cccccc" /> -->
![1677218966566](image/ColorPicker/1677218966566.png)

::: details 查看源代码

```vue
<template>
  <h-color-picker v-model:pure-color="shadowColor" />
</template>

<script setup lang="ts">
const shadowColor = ref(isDark() ? '#cccccc' : '#6D2ACA')
</script>

```

:::

## API

### Props

| 属性           | 说明             | 类型                                              | 默认值    |
| -------------- | ---------------- | ------------------------------------------------- | --------- |
| pureColor      | 颜色绑定         | string                                            |           |
| gradientColor  | 渐变色绑定       | string                                            |           |
| activeKey      |                  | pure / gradient                                   | pure      |
| isWidget       |                  | boolean                                           |           |
| pickerType     | 颜色选择类型     | fk / chrome                                       | fk        |
| useType        |                  | pure / gradient / both                            |           |
| disableHistory | 是否禁用历史记录 | boolean                                           |           |
| roundHistory   |                  | boolean                                           |           |
| disableAlpha   | 是否禁用透明值   | boolean                                           |           |
| closeBtnCorner | 关闭按钮位置     | TOP_LEFT / TOP_RIGHT / BOTTOM_LEFT / BOTTOM_RIGHT | TOP_RIGHT |
| position       | 选择器位置       | CSSProperties[top                                 | bottom    |
| colorCallBack  | 颜色改变时回调   |                                                   |           |

## 事件

| 事件名              | 说明             | 类型                    | 默认值 |
| ------------------- | ---------------- | ----------------------- | ------ |
| pureColorChange     | 颜色改变回调     | (value: string) => void |        |
| gradientColorChange | 渐变色改变回调   | (value: string) => void |        |
| activeKeyChange     | 颜色选择改变回调 | (value: string) => void |        |

(value: string) => void
