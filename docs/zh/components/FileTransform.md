---
title: FileTransform
lang: zh
---
# FileTransform

## 何时使用

当你需要处理某些文件时，该组件可以帮你完成文件的导入导出工作，你只需要完成转换即可

## 代码演示

::: demo 文件转换
fileTransform/basic

:::

## API

### Props

| 属性      | 说明         | 类型              | 默认值          |
| --------- | ------------ | ----------------- | --------------- |
| transform | 文件转换函数 | (file:File)=>File \| Promise\<File\> |  |
