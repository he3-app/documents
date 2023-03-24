---
title: ColorPicker
lang: en
---
# ColorPicker

## When To Use

When there is a color input, the color input box can provide a color input box and a color selector

## Examples

:::demo Click on the color block to choose a color
color/picker
:::

## API

### Props

| Property       | Description                           | Type                                                                  | default    |
| -------------- | ------------------------------------- | --------------------------------------------------------------------- | ---------- |
| pureColor      | color binding                         | string                                                                | rgb(0,0,0) |
| gradientColor  | gradient binding                      | string                                                                |            |
| activeKey      |                                       | ^[enum]`'pure' \| 'gradient'`                                         | pure       |
| isWidget       |                                       | boolean                                                               | false      |
| pickerType     | color Picker type                     | ^[enum]`'fk' \| 'chrome'`                                             | fk         |
| useType        |                                       | ^[enum]`'pure' \| 'gradient' \| 'both'`                               | false      |
| disableHistory | Whether to disable history            | boolean                                                               | false      |
| roundHistory   |                                       | boolean                                                               | false      |
| disableAlpha   | Whether to disable transparent values | boolean                                                               |            |
| closeBtnCorner | close button position                 | ^[enum]`'TOP_LEFT' \| 'TOP_RIGHT' \| 'BOTTOM_LEFT' \| 'BOTTOM_RIGHT'` | TOP_RIGHT  |
| position       | selector position                     | ^[Object]`Record<top\|right\|bottom\|left,CSSProperties>`             |            |

## Events

| Events Name         | Description                     | Type                                 | default |
| ------------------- | ------------------------------- | ------------------------------------ | ------- |
| pureColorChange     | Color change callback           | ^[Function]`(value: string) => void` |         |
| gradientColorChange | Gradient color change callback  | ^[Function]`(value: string) => void` |         |
| activeKeyChange     | Color selection change callback | ^[Function]`(value: string) => void` |         |
