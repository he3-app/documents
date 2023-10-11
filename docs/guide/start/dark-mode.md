# Dark mode and built-in CSS variables

### Accessing the Current Theme

You can use `window.$he3.theme` to access the current theme, which returns either `dark` or `light`.

### Listening for Theme Changes
`subscribeThemeChange` accepts a callback function that is triggered when the theme changes. The callback function will receive the current theme (`dark` or `light`). 
As a developer, you don't need to worry about whether the current theme follows the system theme or is a user-defined theme. Simply subscribe to this event and handle the changes accordingly. We will maintain global theme consistency.


```js
window.$he3.subscribeThemeChange((data) => {
    console.log(data);
});
```

### Global CSS Variables
We define some common global styles that you can use in CSS by using variables. These variables have different values in the dark mode and light mode. You can define your styles using these variables to achieve the switching between dark and light modes.
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

Usage

```css
.header {
    color: var(--primary-font-color);
}
```

### Defining Dark Mode Styles

In dark mode, the root tag will automatically have the mode="dark" attribute added. You can use this attribute to define styles specifically for dark mode.


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


