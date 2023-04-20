# Dark Mode

When developing tools, the style of the page often needs to take into account the dark mode. This article will briefly introduce how to define the page style in the dark mode when developing he 3 tools

## css variable

You can set the root css variable in the style tag of the vue file, and use it when you need, like this

```vue
<script setup lang="ts">
</script>

<template>
  <div class="button"></div>
</template>

<!-- Note that the following style does not need to add the scoped attribute -->
<style>
:root {
  --my-color: #861fc2;
}
[mode='dark']:root {
  --my-color: #999bcc;
}
</style>

<style scoped>
.button{
  /* Use your variable, it will change the corresponding color according to the theme of the current He3 base */
  color: var(--my-color);
}
</style>

```

## He3 API

You can also use the api provided by He3 to judge whether it is currently in dark mode, so that you can make some logical judgments in js.

``` js
// Determine whether the current dark mode
const isDark = window.$he3.theme === 'dark'
// Subscribe to current topic state changes
window.$he3.subscribeThemeChange((theme) => {
  isDark = theme === 'dark'
})
```
