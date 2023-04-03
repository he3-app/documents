---
title: Input
lang: zh-en
---
# Input

## 何时使用

- 在打开插件需要自动选中内容时(有example情况下需要选中方便用户键入清空)，该输入框可以提供基本能力，
- 在打开插件时需要保留上一次操作的值时(保留上一次操作值方便切换插件的情况下快速得到输出)

::: tip
该组件完全支持AntDV的a-input属性
:::

## 代码演示

:::demo
input/basic

:::

## API

### Props

| 属性                   | 说明                                                                              | 类型                                           | 默认值                |
| ---------------------- | --------------------------------------------------------------------------------- | ---------------------------------------------- | --------------------- |
| autoSelect             | 组件挂载时自动选中input框中的内容                                                 | boolean                                        | false                 |
| autoFillInputCondition | 剪切板自动回填判断函数                                                            | ^[Function]`(str: string) => boolean \| null` | null                  |
| saveOptions            | 自动上传和初始化组件数据。<br />注意⚠️：同一个工具下的多个key值需要保证唯一性。 | object                                         | autoSave:false,key:"" |
