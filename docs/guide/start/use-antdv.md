---
title: Use Ant Design Vue
lang: en
---

# Use Ant Design Vue directly in development

He3 Platform has built-in support for Ant Design Vue, so you don't need to manually install `ant-design-vue`. You can develop your own He3 tool more efficiently with the following example. Note that the `message` method of Ant Design Vue is not available. Instead, you can use the `message` method provided by the He3 Platform, which is built-in `window.$he3`.

## Example

```vue
<template>
  <a-button type="primary">Primary Button</a-button>
  <a-button>Default Button</a-button>
  <a-button type="dashed">Dashed Button</a-button>
  <a-button type="text">Text Button</a-button>
  <a-button type="link">Link Button</a-button>
</template>

```

To use Ant Design Vue in a template, you need to use `a-xxx` template format. When the tool is built, the build tool will parse the template and generate Ant Design component product. In addition to the above examples, you can also use other components in ant design
