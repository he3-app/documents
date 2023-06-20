---
title: FileTransform
lang: en
---
# FileTransform

## When To Use

When you need to process certain files, this component can help you complete the import and export of files, you only need to complete the conversion

## Examples

::: demo file conversion
fileTransform/basic

:::

## API

### Props

| Property  | Description               | Type                                 | default |
| --------- | ------------------------- | ------------------------------------ | ------- |
| transform | file conversion  function | (file:File)=>File \| Promise\<File\> |         |
