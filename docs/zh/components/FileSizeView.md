---
title: FileSizeView
lang: zh-en
---
# FileSizeView

::: warning
DigitalSizeView 改名后组件
:::

## 何时使用

在需要展示文件大小时，该组件可以提供一定的兼容性展示

## 代码演示

::: demo 合理显示文件大小
fileSizeView/basic

:::

## API

### Props

| 属性     | 说明                     | 类型                      | 默认值 |
| -------- | ------------------------ | ------------------------- | ------ |
| size     | 文件大小（byte）         | number                    |        |
| showMode | 展示1024进制还是1000进制 | ^[enum]`'1024'\| '1000'` | 1000   |
