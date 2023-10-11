# 暗黑模式和内置CSS变量

### 获取当前主题

你可以通过`window.$he3.theme`来获取当前主题, 返回 `dark` 或 `light`。

### 监听模式变化
subscribeThemeChange 接收一个回调函数，当主题变化时，会触发回调函数，回调函数会返回当前的主题， dark 或者 light。
开发者无需关注当前主题是跟随系统主题，还是用户自定义主题，只需要订阅该事件，然后根据主题变化来做相应的处理即可，我们会保持全局的主题相统一。

```js
window.$he3.subscribeThemeChange((data) => {
    console.log(data);
});
```

### 全局css变量
我们定义一些通用的全局样式，你可以在css里通过 var 使用这些变量，这些变量在dark模式和light 模式下会有不同的值，你可以通过这些变量来定义你的样式，从而实现暗黑模式和浅色模式的切换。

```css
:root {
    --border-radius-md: 8px;
    --code-font-family: Monaco, Andale Mono, Ubuntu Mono, monospace;
    --icon-color: #25314c;
    --primary-font-color: rgba(8, 23, 53, 0.85);
    --second-font-color: rgba(8, 23, 53, 0.45);
    --link-font-color: #1865E4;
    --primary-blue-font-color: #1865E4;
    --primary-bg-color: #fff;
    --second-bg-color: #feffff;
    --thirty-bg-color: #E6EAF0;
    --divider-color:#E6EAF0;
    --tools-bg-color-1: #f4f8fb;
    --tools-bg-color-2: #E9EFF3;
    --tools-bg-color-3: #E6EDF3;
}

[mode='dark']:root {
    --icon-color: #96a0b5;
    --primary-font-color: #ECEFF4;
    --second-font-color: rgba(171, 183, 201, 0.45);
    --link-font-color: #4D94FF;
    --primary-blue-font-color: #4D94FF;
    --primary-bg-color: #2A2C38;
    --second-bg-color: #292C38;
    --thirty-bg-color: #4C4F5F;
    --divider-color: rgba(76, 79, 95, 0.45);
    --tools-bg-color-1: #343744;
    --tools-bg-color-2: #3E4252;
    --tools-bg-color-3: #4C4F5F;
}
```

使用方法
    
```css
.header {
    color: var(--primary-font-color);
}
```

### 定义暗黑模式样式
dark 模式下会在跟标签自动添加 `mode="dark"` 属性，你可以通过该属性来定义暗黑模式下的样式。

```vue
<style scoped lang="less">
.header {
    color: #000;
}

[mode='dark'] .header {
  color: #fff;
}
</style>
```


