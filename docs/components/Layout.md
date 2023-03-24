---
title: Layout
lang: en
---
# Layout

## When To Use

Use the agreed layout in he 3 app development, you can get started faster

## Examples

### Horizontal two-column layout

#### medium width (default)

:::demo horizontal middle layout
layout/horizontal
:::

#### left fixed

:::demo Horizontal layout with fixed edge left
layout/horizontalLeft
:::

#### right fixed

:::demo Horizontal layout with fixed edge right
layout/horizontalRight
:::

### Vertical two-column layout

#### medium width (default)

:::demo Top and bottom middle layout
layout/vertical
:::

#### Top fixed

:::demo Vertical layout fixed on top
layout/verticalTop
:::

#### Lower fixed

:::demo Fixed vertical layout below
layout/verticalBottom
:::

### Single column layout

#### Middle (default)

:::demo Single Column Centered Layout
layout/single
:::

#### Left

:::demo Single Column Left Layout
layout/singleLeft
:::

#### Right

:::demo Single Column Right Layout
layout/singleRight
:::

### Split pane

:::demo Layout with adjustable ratio of left and right width
layout/splitPane
:::

## API

### Props

| Property       | Description           | Type                                 | default |
| -------------- | --------------------- | ------------------------------------ | ------- |
| mode           | layout mode           | ^[enum]`'left'\| 'middle'\| 'right'` | middle  |
| mode(vertical) | layout mode(vertical) | ^[enum]`'top'\| 'middle'\| 'bottom'` | middle  |
| width          | fixed local width     | number                               | 300     |
