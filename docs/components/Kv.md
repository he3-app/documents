---
title: Kv
lang: en
---
# Kv

## When To Use

When you need to use objects or json key-value pairs to display, this component can display them well

## Examples

:::demo Including two display modes, json display and list display
kv/basic
:::

## API

### Props

| Property          | Description                       | Type                          | default |
| ----------------- | --------------------------------- | ----------------------------- | ------- |
| value             | object to be displayed            | ^[Object]`Record<string,any>` |         |
| width             | list item width                   | number                        |         |
| mode              | display mode                      | ^[enum]`'list'\| 'json'`      | list    |
| disableModeSwitch | Whether to disable mode switching | boolean                       |         |
