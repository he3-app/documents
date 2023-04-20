# 暗黑模式

在开发工具时，页面的样式往往需要考虑到暗黑模式，本文将简单介绍如何在开发 He3 工具时定义暗黑模式下的页面样式

## CSS变量

你可以在 vue 文件的 style 标签中设置根 css 变量，并且在你需要的时候使用它，像下面这样

```vue
<script setup lang="ts">
</script>

<template>
  <div class="button"></div>
</template>

<!-- 注意下面的style不需要添加scoped属性 -->
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
  /* 使用你的变量，它会根据当前He3底座的主题改变对应颜色 */
  color: var(--my-color);
}
</style>

```

## He3 API

你还可以通过 He3 提供的 API 来判断当前是否为暗黑模式，以便你能在 JS 中进行某些逻辑的判断。

``` js
// 判断当前是否为暗黑模式
const isDark = window.$he3.theme === 'dark'
// 订阅当前的主题状态变化
window.$he3.subscribeThemeChange((theme) => {
  isDark = theme === 'dark'
})
```
