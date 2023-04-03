---
title: Select
lang: en
---
# Select

## When To Use

- A dropdown menu for displaying choices - an elegant alternative to the native `<select>` element.
- Utilizing [Radio] is recommended when there are fewer total options (less than 5).

::: tip
This component fully supports Select component attribute of ant design
:::

## Examples

:::demo
select/basic

:::

## API

### Props

| Property    | Description                                                                                                                    | Type    | default               |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------ | ------- | --------------------- |
| saveOptions | Automatically upload and initialize component data.<br />Note ⚠️: Multiple key values under the same tool need to be unique. | object  | autoSave:false,key:"" |
