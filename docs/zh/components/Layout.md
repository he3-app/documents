---
title: Layout
lang: zh-en
---
# Layout

## 何时使用

在He3 App开发中使用约定的布局，可以更快上手

::: warning
所有布局名称都改成\<h-xxx-layout\>形式
:::

## 代码演示

### 水平两栏布局

#### 中等宽（默认）

:::demo 水平中分布局
layout/horizontal
:::

#### 左固定

:::demo 固定边居左的水平布局
layout/horizontalLeft
:::

#### 右固定

:::demo 固定边居右的水平布局
layout/horizontalRight
:::

### 垂直两栏布局

#### 中等宽（默认）

:::demo 上下中分布局
layout/vertical
:::

#### 上固定

:::demo 上边固定的垂直布局
layout/verticalTop
:::

#### 下固定

:::demo 下边固定的垂直布局
layout/verticalBottom
:::

### 单栏布局

#### 居中（默认）

:::demo 单栏居中布局
layout/single
:::

#### 居左

:::demo 单栏居左布局
layout/singleLeft
:::

#### 居右

:::demo 单栏居右布局
layout/singleRight
:::

### 可调节布局

:::demo 可调节左右宽度占比的布局
layout/splitPane
:::

## API

### Props

| 属性           | 说明                 | 类型                                  | 默认值 |
| -------------- | -------------------- | ------------------------------------- | ------ |
| mode           | 模式选择             | ^[enum]`'left'\| 'middle'\| 'right'`  | middle |
| mode(vertical) | 模式选择（垂直布局） | ^[enum]`'top'\| 'middle'\| 'bottom'` | middle |
| width          | 固定局部宽度         | number                                | 300    |
