---
title:  主题与样式
lang: zh-en
---

# 主题与样式

### 通用 Css 变量

为了保持全局的设计风格一致，我们内置了一系列 Css 变量，如果您使用了 Hui，则无需关注样式的一致性问题，Hui 会根据主题的变化保持全局的风格一致。
如果您自定义了一些样式，我们建议优先使用如下的 Css 变量。

* `--code-font-family` 定义代码的字体
* `--base-border-radius` 全局通用的圆角

如下为颜色相关变量，在 light 和 dark 下，被定义为了不同的值

* `--base-color` 主色
* `--border-color` 边框颜色
* `--bg-color` 背景颜色
* `--text-color` 文本颜色

在 css 代码中通过 var 来使用变量

```css
.class {
    color: var(--base-color);
}
```

### 获取当前主题

获取当前的主题，返回 `dark` 或者 `light`

```js
console.log($he3.theme)
```

### 订阅主题变化

`subscribeThemeChange` 接收一个回调函数，当主题变化时，会触发回调函数，回调函数会返回当前的主题， `dark` 或者 `light`。

开发者无需关注当前主题是跟随系统主题，还是用户自定义主题，只需要订阅该事件，然后根据主题变化来做相应的处理即可，我们会保持全局的主题相统一。

```js
$he3.subscribeThemeChange((data) => {
    console.log(data);
});
```

### 定义暗黑模式下的样式

暗黑模式我们会为根标签添加一个 mode 为 dark的 attribute，开发者可以通过这个 attribute 来定义暗黑模式下的样式。

```css
.class {
    color: #fff;
}

[mode="dark"] .class {
    color: #000;
}
```



