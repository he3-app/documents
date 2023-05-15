---
title: 使用 Ant Design Vue
lang: zh
---

# 直接在开发中使用 Ant Design Vue

He3 底座中已经内置了对 Ant Design Vue 的支持，你可以通过下面的示例来更好更快地开发属于你的 He3 小工具

## 示例

```vue
<template>
  <a-button type="primary">Primary Button</a-button>
  <a-button>Default Button</a-button>
  <a-button type="dashed">Dashed Button</a-button>
  <a-button type="text">Text Button</a-button>
  <a-button type="link">Link Button</a-button>
</template>

```

在模板中使用 Ant Design Vue，需要使用 `a-xxx` 的模板格式，当工具构建时，构建工具会解析模板并生成 Ant Design 组件产物。除了上述示例，你还可以使用 Ant Design 中其他组件
