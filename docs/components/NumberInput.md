---
title: NumberInput
lang: en
---
# NumberInput

## When To Use

When the plug-in needs to be automatically selected when the text input box is opened, in the case of an example, it needs to be selected to facilitate the user to type and clear. This input box can provide basic capabilities

::: tip
This component fully supports the input number attribute of ant design
:::

## Examples

:::demo
input/number

:::

## API

### Props

| Property    | Description                                                                                                                    | Type    | default               |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------ | ------- | --------------------- |
| autoSelect  | Automatically select the content in the input box when the component is mounted                                                | boolean | false                 |
| saveOptions | Automatically upload and initialize component data.<br />Note ⚠️: Multiple key values under the same tool need to be unique. | object  | autoSave:false,key:"" |
