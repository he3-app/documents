---
title: NumberInput
lang: en
---
# NumberInput

## When To Use

When the plug-in needs to be automatically selected when the text input box is opened, in the case of an example, it needs to be selected to facilitate the user to type and clear. This input box can provide basic capabilities

::: tip
This component fully supports the input number attribute of ant design
:::

## Examples

:::demo
input/number

:::

## API

### Props

| Property   | Description                       | Type    | default |
| ---------- | --------------------------------- | ------- | ------- |
| autoSelect | 组件挂载时自动选中input框中的内容 | boolean | false   |
| saveOptions | 自动保存组件数据，在组件挂载时自动同步数据作为input框中的初始值，在input输入改变时，自动同步该值到数据库（只有在登录后并且开启了自动同步功能之后才能生效）注意⚠️：同一个工具下多个使用该能力的组件的key值不可重复。 | object | {autoSave:false,key:""}   |

