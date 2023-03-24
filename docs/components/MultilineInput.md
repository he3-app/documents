---
title: MultilineInput
lang: en
---
# MultilineInput

## When To Use

This input box makes typing easier when multi-line input is required

## Examples

:::demo
multiline/input
:::

## API

### Props

| Property               | Description                                                                     | Type                                          | default   |
| ---------------------- | ------------------------------------------------------------------------------- | --------------------------------------------- | --------- |
| id                     | Used when getting dom                                                           | string                                        |           |
| title                  | title                                                                           | string                                        |           |
| modelValue             | input value                                                                     | string                                        |           |
| placeholder            | Placeholder of input                                                            | string                                        |           |
| autofocus              | auto focus input                                                                | boolean                                       | autofocus |
| autoSelect             | Automatically select the content in the input box when the component is mounted | boolean                                       | false     |
| noChangeOnMounted      | Change events are not triggered when the component is mounted                   | boolean                                       | false     |
| autoFillInputCondition | Clipboard automatic backfill judgment function                                  | ^[Function]`(str: string) => boolean \| null` | null      |

### Events

| Events Name | Description                                              | Type                  | default |
| ----------- | -------------------------------------------------------- | --------------------- | ------- |
| change      | The key-value pair change triggers the callback function | ^[Function]`()=>void` |         |
