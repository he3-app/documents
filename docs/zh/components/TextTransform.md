---
title: TextTransform
lang: zh-en
---
# TextTransform

## 何时使用

文本转换专用组件（自带布局），直接使用可快速生成ui布局以及简单的转换逻辑

## 代码演示

### 普通转换

:::demo 通用的一输入一输出形式，可以通过 autoFillInputCondition 属性传入判断函数进行剪切板自动回填
transform/text
:::

### 文件转换

:::demo 通过属性 enableFile 启动文件转换模式，可以直接导入导出转换文件中的内容
transform/file
:::

### 双向转换

:::demo 通过属性 enableReverse 启动双向转换模式，可以同时支持双向文本转换
transform/double
:::

## API

### Props

| 属性                   | 说明                   | 类型                                                        | 默认值                                       |
| ---------------------- | ---------------------- | ----------------------------------------------------------- | -------------------------------------------- |
| sampleData             | 输入示例               | string                                                      | A Free, Modern Toolbox Built for Developers. |
| enableReverse          | 是否使用反转换         | boolean                                                     | false                                        |
| enableFile             | 是否支持文件转换       | boolean                                                     | false                                        |
| fileOutputAlert        | 文件转换后提示文字     | string                                                      |                                              |
| transform              | 转换回调函数               | ^[Function]`(inputValue: string)=> void`                    |                                              |
| reverseTransform       | 反转换回调函数             | ^[Function]`(inputValue: string)=> void`                    |                                              |
| fileOutputName         | 输出文件名字           | ^[Function]`(name: string) => string`                       | false                                        |
| autoFillInputCondition | 剪切板自动回填判断函数 | ^[Function]`(str: string) => boolean \| null` | null                                         |
| saveOptions | 自动上传和初始化组件数据。<br />注意⚠️：同一个工具下的多个key值需要保证唯一性。 | object  | autoSave:false,key:"" |

### Expose

| 暴露属性名       | 说明                         | 类型                                                        | 默认值 |
| ------------ | ---------------------------- | ----------------------------------------------------------- | ------ |
| inputValue   | 输入框中的值                 | string                                                      |        |
| handleChange | 转换函数，可用于手动执行转换 | ^[Function]`() => void` |        |

### Slot

| 插槽名 | 说明                               | 类型      | 默认值 |
| ------ | ---------------------------------- | --------- | ------ |
| option | 介于输入和输出框之间的转换选项插槽 | Component |        |
