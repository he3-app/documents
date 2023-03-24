---
title: HighlightInput
lang: en
---
# HighlightInput

## When To Use

When it is necessary to highlight the text in the input box, this component can highlight the incoming string array, and automatically highlight when the characters in the input box match it

## Examples

:::demo
highlightInput/basic
:::

## API

### Props

| Property      | Description      | Type            | default |
| ------------- | ---------------- | --------------- | ------- |
| modelValue    | bind text        | string          |         |
| title         | title            | string          |         |
| highlightText | highlight text   | Array\<string\> |         |
| regexModifier | regular modifier | string          |         |
