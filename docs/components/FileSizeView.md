---
title: FileSizeView
lang: en
---
# FileSizeView

## When To Use

When the file size needs to be displayed, this component can provide a certain compatibility display

## Examples

::: demo Show file size reasonably
fileSizeView/basic

:::

## API

### Props

| Property | Description                 | Type                     | default |
| -------- | --------------------------- | ------------------------ | ------- |
| size     | File Size(byte)             | number                   |         |
| showMode | Show 1024 base or 1000 base | ^[enum]`'1024'\| '1000'` | 1000    |
