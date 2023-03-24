---
title: KvInput
lang: en
---
# KvInput

## When To Use

When you need to use object or json key-value pair input, this component can simplify your input

## Examples

:::demo
kv/input
:::

## API

### Props

| Property     | Description            | Type                             | default |
| ------------ | ---------------------- | -------------------------------- | ------- |
| modelValue   | input value            | string                           |         |
| defaultValue | default key-value pair | ^[Object]`Record<string,string>` |         |
| mode         | show mode              | ^[enum]`'list'\| 'json'`         | list    |

### Events

| Events Name | Description                                          | Type                             | default |
| ----------- | ---------------------------------------------------- | -------------------------------- | ------- |
| change      | Callback function triggered by key-value pair change | ^[Function]`(changeProps)=>void` |         |

::: warning 参数修改
defaultRow -> defaultValue

changeProps 已废弃，请在changeEvents中传入参数
:::
