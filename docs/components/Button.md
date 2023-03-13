---
title: Button
lang: zh-en
---
# Button

## 何时使用

在有需要相关功能按钮时，可以直接使用下列按钮作为解决方案

## 代码演示

<a-space>
  <h-text-copy-button content="He3" icon />
  <h-file-upload-button />
  <h-content-save-button url="https://he3.app/" icon />
</a-space>

::: details 查看源代码

```vue
<template>
  <h-text-copy-button content="He3" icon />
  <h-file-upload-button />
  <h-content-save-button url="https://he3.app/" icon />
</template>
```

:::

## API

### Props

#### common

| 属性     | 说明             | 类型                                                       | 默认值  |
| -------- | ---------------- | ---------------------------------------------------------- | ------- |
| title    | 按钮文字         | string                                                     |         |
| type     | 按钮类型         | ^[enum]`'default'\| 'link'\| 'primary'\| 'ghost'\| 'dashed'` | primary |
| size     | 按钮大小         | ^[enum]`'large'\| 'middle'\| 'small'`                      | small   |
| icon     | 是否显示按钮图标 | boolean                                                    |         |
| disabled | 是否禁用         | boolean                                                    | false   |

#### TextCopy

| 属性           | 说明           | 类型   | 默认值 |
| -------------- | -------------- | ------ | ------ |
| content        | 需要复制的内容 | string |        |
| successMessage | 成功信息       | string |        |

::: warning
copy-content -> content
successText -> successMessage
:::

#### FileUpload

| 属性   | 说明                                                                                                                   | 类型   | 默认值 |
| ------ | ---------------------------------------------------------------------------------------------------------------------- | ------ | ------ |
| accept | 接受的文件类型，详见[input accept Attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept) | string |        |

#### ContentSave

| 属性     | 说明         | 类型                                                                            | 默认值 |
| -------- | ------------ | ------------------------------------------------------------------------------- | ------ |
| content  | 保存文案     | string                                                                          |        |
| fileType | 保存文件类型 | [FileType](https://developer.mozilla.org/zh-CN/docs/Web/Media/Formats/Image_types) |        |
| url      | 文件链接     | string                                                                          |        |

::: warning
saveText -> content
:::

### 事件

#### FileUpload

| 属性               | 说明             | 类型                             | 默认值 |
| ------------------ | ---------------- | -------------------------------- | ------ |
| afterSelected | 文件选择回调函数 | ^[Function]`(file:File)=>void` |        |

::: warning
url与saveText两个参数选择其中一个传入，前者保存链接中的文件，后者保存传入文本为文本文件
:::
