---
title: Use Ant Design Vue
lang: en
---

# Use Ant Design Vue directly in development

The He3 base has built-in support for Ant Design Vue, you can use the following examples to develop your own He3 gadgets better and faster

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
