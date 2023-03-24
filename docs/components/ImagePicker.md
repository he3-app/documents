---
title: ImagePicker
lang: en
---
# ImagePicker

## When To Use

Use when there is a need to select a picture

## Examples

### single image selection

:::demo Select a single image
image/basic
:::

### Batch image selection

:::demo select multiple images
image/multi
:::

## API

### single image selection

#### Props

| Property    | Description      | Type   | default |
| ----------- | ---------------- | ------ | ------- |
| width       | container width  | string | 100%    |
| height      | container height | string | 100%    |
| imageHeight | image height     | string | 78vh    |

#### Events

| Events Name | Description                       | Type                           | default |
| ----------- | --------------------------------- | ------------------------------ | ------- |
| pick        | Image selection callback function | ^[Function]`(file:File)=>void` |         |
| load        | Image mount callback function     | ^[Function]`(file:File)=>void` |         |
| reset       | Image reset callback              | ^[Function]`(file:File)=>void` |         |

### 批量图像选择

#### Events

| Events Name | Description                       | Type                           | default |
| ----------- | --------------------------------- | ------------------------------ | ------- |
| pick        | Image selection callback function | ^[Function]`(file:File)=>void` |         |
| load        | Image mount callback function     | ^[Function]`(file:File)=>void` |         |
| remove      | Image removal callback function   | ^[Function]`(file:File)=>void` |         |
