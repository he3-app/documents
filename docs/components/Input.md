---
title: Input
lang: en
---
# Input

## When To Use

When opening the plug-in, the content needs to be automatically selected. In the case of an example, it needs to be selected to facilitate the user to type and clear. This input box can provide basic capabilities

::: tip
This component fully supports the input attribute of ant design
:::

## Examples

:::demo
input/basic
:::

## API

### Props

| Property               | Description                                                                                                                    | Type                                           | default               |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------- | --------------------- |
| autoSelect             | Automatically select the content of the input box when the component is mounted                                                | boolean                                        | false                 |
| autoFillInputCondition | Clipboard automatic backfill judgment function                                                                                 | ^[Function]`(str: string) => boolean \| null` | null                  |
| saveOptions            | Automatically upload and initialize component data.<br />Note ⚠️: Multiple key values under the same tool need to be unique. | object                                         | autoSave:false,key:"" |
