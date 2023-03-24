---
title:  Themes and Styles
lang: en
---

# Themes and Styles

## Common css variables

In order to keep the overall design style consistent, we built a series of css variables. If you use hui, you don’t need to pay attention to the consistency of the style. hui will keep the global style consistent according to the change of the theme.
If you have customized some styles, we recommend using the following css variables first.

* `--code-font-family`  Define the font of the code
* `--base-border-radius` Global rounded corners

The following are color-related variables, which are defined as different values ​​under light and dark

* `--base-color` main color
* `--border-color` border color
* `--bg-color` background color
* `--text-color` text color

Using variables in css code through var

```css
.class {
    color: var(--base-color);
}
```

## Get the current theme

Get the current theme, return `dark` or `light`

```js
console.log($he3.theme)
```

## Subscribe to topic changes

`subscribeThemeChange` receives a callback function, when the theme changes, the callback function will be triggered, and the callback function will return the current theme, `dark` or `light`.

Developers don't need to pay attention to whether the current theme follows the system theme or a user-defined theme. They only need to subscribe to the event, and then do corresponding processing according to the theme change. We will keep the global theme unified.

```js
$he3.subscribeThemeChange((data) => {
    console.log(data);
});
```

## Define styles in dark mode

In dark mode, we will add an attribute with mode as dark to the root tag. Developers can use this attribute to define the style in dark mode.

```css
.class {
    color: #fff;
}

[mode="dark"] .class {
    color: #000;
}
```
