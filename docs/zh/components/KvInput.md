---
title: KvInput
lang: zh-en
---
# KvInput

## 何时使用

在需要使用对象或者JSON的键值对输入时，该组件能够简化你的输入

## 代码演示

:::demo
kv/input
:::

## API

### Props

| 属性         | 说明       | 类型                             | 默认值 |
| ------------ | ---------- | -------------------------------- | ------ |
| modelValue   | 绑定值     | string                           |        |
| defaultValue | 默认键值对 | ^[Object]`Record<string,string>` |        |
| mode         | 展示模式   | ^[enum]`'list'\| 'json'`         | list   |

### 事件

| 事件名 | 说明               | 类型                             | 默认值 |
| ------ | ------------------ | -------------------------------- | ------ |
| change | 键值对改变触发的回调函数 | ^[Function]`(changeProps)=>void` |        |

::: warning 参数修改
defaultRow -> defaultValue

changeProps 已废弃，请在change事件中传入参数
:::
