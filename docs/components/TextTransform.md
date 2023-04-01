---
title: TextTransform
lang: en
---
# TextTransform

## When To Use

Special component for text conversion (with its own layout), which can be used directly to quickly generate ui layout and simple conversion logic

## Examples

### Common Transform

:::demo The general one-input-output form can be passed to the judgment function through the auto fill input condition property to automatically backfill the clipboard
transform/text
:::

### File Transform

:::demo Start the file conversion mode through property enableFile, you can directly import and export the content in the converted file
transform/file
:::

### Two-way Transform

:::demo Start the bidirectional conversion mode through property enableReverse, which can support bidirectional text conversion at the same time
transform/double
:::

## API

### Props

| Property               | Description                                    | Type                                          | default                                      |
| ---------------------- | ---------------------------------------------- | --------------------------------------------- | -------------------------------------------- |
| sampleData             | Input example                                  | string                                        | A Free, Modern Toolbox Built for Developers. |
| enableReverse          | Whether to use inverse conversion              | boolean                                       | false                                        |
| enableFile             | Whether to support file conversion             | boolean                                       | false                                        |
| fileOutputAlert        | Prompt text after file conversion              | string                                        |                                              |
| transform              | Conversion callback function                   | ^[Function]`(inputValue: string)=> void`      |                                              |
| reverseTransform       | Inverse conversion callback function           | ^[Function]`(inputValue: string)=> void`      |                                              |
| fileOutputName         | output file name                               | ^[Function]`(name: string) => string`         | false                                        |
| autoFillInputCondition | Clipboard automatic backfill judgment function | ^[Function]`(str: string) => boolean \| null` | null                                         |

### Expose

| Expose Property | Description                                                             | Type                    | default |
| --------------- | ----------------------------------------------------------------------- | ----------------------- | ------- |
| inputValue      | the value in the input box                                              | string                  |         |
| handleChange    | Conversion functions, which can be used to perform conversions manually | ^[Function]`() => void` |         |

### Slot

| Slot Name | Description                                           | Type      | default |
| --------- | ----------------------------------------------------- | --------- | ------- |
| option    | Transform options slot between input and output boxes | Component |         |
