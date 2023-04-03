---
title: Checkbox
lang: en
---
# Checkbox

## When To Use

- Used for selecting multiple values from several options.
- If you use only one checkbox, it is the same as using Switch to toggle between two states. The difference is that Switch will trigger the state change directly, but Checkbox just marks the state as changed and this needs to be submitted.

::: tip
This component fully supports Checkbox component attribute of ant design
:::

## Examples

:::demo
checkbox/basic

:::

## API

### Props

| Property    | Description                                                                                                                    | Type    | default               |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------ | ------- | --------------------- |
| saveOptions | Automatically upload and initialize component data.<br />Note ⚠️: Multiple key values under the same tool need to be unique. | object  | autoSave:false,key:"" |
