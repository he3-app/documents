---
title: FileUpload
lang: en
---
# FileUpload

## When To Use

Perform file selection and upload

## Examples

:::demo
fileUpload/basic
:::

## API

### Props

| Property    | Description  | Type    | default |
|---------|--------------|---------| ------ |
| text    | title        | string  |        |
| hint    | 提示           | string  |        |
| loading | 是否是loading状态 | boolean |        |
| acdept  | 文件上传接收的类型    | string  |    .mp3,.aac,.m4a,.ogg,.flac,wma,.ac3,.wmv,.opus,.mp4,.gif,.mov,.avi,.mpg,.mpeg,.wav,.wma,.midi    |

### Events

| Events Name | Description | Type  |
|--------|--------| -------------------------------- |
| pick   | 选择文件钩子 | ^[Function]`(file:File)=>void` |
| remove | 移除文件钩子 | ^[Function]`(file:File)=>void` |
