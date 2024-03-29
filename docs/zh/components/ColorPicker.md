---
title: ColorPicker
lang: zh-en
---
# ColorPicker

## 何时使用

在有颜色输入时，该颜色输入框可提供颜色的Input框和颜色选择器

## 代码演示

:::demo 点击色块选择颜色
color/picker
:::

## API

### Props

| 属性           | 说明             | 类型                                                                     | 默认值     |
| -------------- | ---------------- | ------------------------------------------------------------------------ | ---------- |
| pureColor      | 颜色绑定         | string                                                                   | rgb(0,0,0) |
| gradientColor  | 渐变色绑定       | string                                                                   |            |
| colorType      | 选择颜色类型     | ^[enum]`'HEX' \| 'HEXA' \| 'RGB' \| 'RGBA' \| 'HSL' \| 'HSLA' \| 'CMYK'` | 'RGB'      |
| activeKey      |                  | ^[enum]`'pure' \| 'gradient'`                                            | pure       |
| isWidget       |                  | boolean                                                                  | false      |
| pickerType     | 颜色选择类型     | ^[enum]`'fk' \| 'chrome'`                                                | fk         |
| useType        |                  | ^[enum]`'pure' \| 'gradient' \| 'both'`                                  | false      |
| disableHistory | 是否禁用历史记录 | boolean                                                                  | false      |
| roundHistory   |                  | boolean                                                                  | false      |
| disableAlpha   | 是否禁用透明值   | boolean                                                                  |            |
| closeBtnCorner | 关闭按钮位置     | ^[enum]`'TOP_LEFT' \| 'TOP_RIGHT' \| 'BOTTOM_LEFT' \| 'BOTTOM_RIGHT'`    | TOP_RIGHT  |
| position       | 选择器位置       | ^[Object]`Record<top\|right\|bottom\|left,CSSProperties>`                |            |

## 事件

| 事件名              | 说明             | 类型                                 | 默认值 |
| ------------------- | ---------------- | ------------------------------------ | ------ |
| pureColorChange     | 颜色改变回调     | ^[Function]`(value: string) => void` |        |
| gradientColorChange | 渐变色改变回调   | ^[Function]`(value: string) => void` |        |
| activeKeyChange     | 颜色选择改变回调 | ^[Function]`(value: string) => void` |        |

::: warning
移除colorCallBack props，请使用pureColorChange事件
:::
