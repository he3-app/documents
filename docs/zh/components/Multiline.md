---
title: Multiline
lang: zh-en
---
# Multiline

## 何时使用

在有需要使用多行文本展示时，该展示框可以提供更强大功能

## 代码演示

:::demo
multiline/basic
:::

## API

### Props

| 属性             | 说明         | 类型                                                                            | 默认值 |
| ---------------- | ------------ | ------------------------------------------------------------------------------- | ------ |
| title            | 标题         | string                                                                          | result |
| value            | 结果展示     | string                                                                          |        |
| height           | 高度         | string                                                                          |        |
| fileType         | 导出文件类型 | [FileType](https://developer.mozilla.org/zh-CN/docs/Web/Media/Formats/Image_types) |        |
| enableOutputFile | 导出文件     | boolean                                                                             |        |

::: warning 参数修改
result -> value

outputFile -> enableOutputFile

result-desc  -> title  
:::
