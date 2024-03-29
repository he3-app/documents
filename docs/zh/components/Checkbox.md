---
title: Checkbox
lang: zh-en
---
# Checkbox

## 何时使用

- 在一组可选项中进行多项选择时；
- 单独使用可以表示两种状态之间的切换，和 switch 类似。区别在于切换 switch 会直接触发状态改变，而 checkbox 一般用于状态标记，需要和提交操作配合。
- 在打开插件时需要保留上一次操作的值时，该组件可以提供基本能力。

::: tip
该组件完全支持AntDV的a-checkbox-group属性
:::

## 代码演示

:::demo
checkbox/basic

:::

## API

### Props

| 属性        | 说明                                                                              | 类型    | 默认值                |
| ----------- | --------------------------------------------------------------------------------- | ------- | --------------------- |
| saveOptions | 自动上传和初始化组件数据。<br />注意⚠️：同一个工具下的多个key值需要保证唯一性。 | object  | autoSave:false,key:"" |
