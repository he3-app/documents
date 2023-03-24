---
title: HighlightInput
lang: zh-en
---
# HighlightInput

## 何时使用

在有需要将输入框中的文字高亮时，该组件可以高亮传入的字符串数组，当输入框中字符与之匹配时自动高亮

## 代码演示

:::demo
highlightInput/basic
:::

## API

### Props

| 属性          | 说明       | 类型   | 默认值 |
| ------------- | ---------- | ------ | ------ |
| modelValue    | 绑定文本   | string |        |
| title         | 标题       | string |        |
| highlightText | 高亮文字   | Array\<string\>  |        |
| regexModifier | 正则修饰符 | string |        |
