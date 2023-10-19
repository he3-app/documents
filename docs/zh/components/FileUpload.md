---
title: FileUpload
lang: zh-en
---
# FileUpload

## 何时使用

进行文件选择上传

## 代码演示


:::demo
fileUpload/basic
:::

## API

### Props

| 属性      | 说明           | 类型      | 默认值 |
|---------|--------------|---------| ------ |
| text    | title        | string  |        |
| hint    | 提示           | string  |        |
| loading | 是否是loading状态 | boolean |        |
| acdept  | 文件上传接收的类型    | string  |    .mp3,.aac,.m4a,.ogg,.flac,wma,.ac3,.wmv,.opus,.mp4,.gif,.mov,.avi,.mpg,.mpeg,.wav,.wma,.midi    |

### 事件

| 事件名    | 说明     | 类型                             |
|--------|--------| -------------------------------- |
| pick   | 选择文件钩子 | ^[Function]`(file:File)=>void` |
| remove | 移除文件钩子 | ^[Function]`(file:File)=>void` |
