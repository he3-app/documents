---
title: Button
lang: zh-en
---
# Button

## 何时使用

在有需要相关功能按钮时，可以直接使用下列按钮作为解决方案

## 代码演示

![1677218793655](image/Button/1677218793655.png)
![1677218814730](image/Button/1677218814730.png)
![1677218893583](image/Button/1677218893583.png)

::: details 查看源代码

```vue
<template>
  <h-text-copy-button copy-content="He3" />
  <h-file-upload-button />
  <h-content-save-button url="https://he3.app/" />
</template>

```

:::

## API

### Props

## common

| 属性  | 说明               | 类型                                    | 默认值  |
| ----- | ------------------ | --------------------------------------- | ------- |
| icon  | icones上的图标字段 | string                                  |         |
| size  | 图标大小           | number                                  |         |
| title | 按钮文字           | string                                  |         |
| type  | 按钮类型           | link /default/ primary / ghost / dashed | primary |
| size  | 按钮大小           | small / middle / large                  | small   |
| icon  | 是否显示按钮图标   | boolean                                 |         |

## TextCopy

| 属性        | 说明           | 类型    | 默认值 |
| ----------- | -------------- | ------- | ------ |
| copyContent | 需要复制的内容 | string  |        |
| successText | 成功信息       | string  |        |
| disabled    | 是否禁用       | boolean | false  |

## FileUpload

| 属性               | 说明             | 类型              | 默认值 |
| ------------------ | ---------------- | ----------------- | ------ |
| accept             | 接受文件类型     | string            |        |
| handleFileSelected | 文件选择回调函数 | (file:File)=>void |        |

## ContentSave

| 属性     | 说明         | 类型                             | 默认值 |
| -------- | ------------ | -------------------------------- | ------ |
| saveText | 保存文案     | string                           |        |
| fileType | 保存文件类型 | [BlobPropertyBag](#BlobPropertyBag) |        |
| url      | 文件链接     | string                           |        |
