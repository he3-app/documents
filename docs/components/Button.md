---
title: Button
lang: en
---
# Button

## When To Use

When there is a need for related function buttons, you can directly use the following buttons as a solution

## Examples

:::demo Button functions are text copy, file upload and file save
button/basic
:::

## API

### Props

#### Common

| Property | Description                        | Type                                                         | Default |
| -------- | ---------------------------------- | ------------------------------------------------------------ | ------- |
| type     | button type                        | ^[enum]`'default'\| 'link'\| 'primary'\| 'ghost'\| 'dashed'` | primary |
| size     | button size                        | ^[enum]`'large'\| 'middle'\| 'small'`                        | small   |
| icon     | Whether to display the button icon | boolean                                                      |         |
| disabled | Whether to disable                 | boolean                                                      | false   |

#### TextCopy

| Property       | Description             | Type   | default |
| -------------- | ----------------------- | ------ | ------- |
| content        | what needs to be copied | string |         |
| successMessage | success message         | string |         |

#### FileUpload

| Property | Description                                                                                                                   | Type   | default |
| -------- | ----------------------------------------------------------------------------------------------------------------------------- | ------ | ------- |
| accept   | Accepted file types, see[input accept Attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept) | string |         |

#### ContentSave

| Property | Description   | Type                                                                               | default |
| -------- | ------------- | ---------------------------------------------------------------------------------- | ------- |
| content  | save content  | string                                                                             |         |
| fileType | save fileType | [FileType](https://developer.mozilla.org/zh-CN/docs/Web/Media/Formats/Image_types) |         |
| url      | file link     | string                                                                             |         |

### Event

#### FileUpload

| Events Name      | Description                      | Type                           | default |
| ------------- | -------------------------------- | ------------------------------ | ------- |
| afterSelected | File selection callback function | ^[Function]`(file:File)=>void` |         |

::: warning
Select one of the two parameters url and content to pass in, the former saves the file in the link, and the latter saves the incoming text as a text file
:::

### Slot

| Property | Description  | Type      | default |
| -------- | ------------ | --------- | ------- |
| default  | Default slot | component |         |
