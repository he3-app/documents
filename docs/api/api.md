---
title: He3 APi
lang: zh-en
---
# API

We provide some common capabilities for easy use in development. Named `$he3`, you can access it through `window.$he3`.

The following is a list of APIs. Please refer to the demonstration code below for specific calling methods.

* `message` triggers global message prompts
* `copyText` copies a piece of text
* `subscribeThemeChange` subscribes to theme changes
* `downloadByUrl` downloads a file via URL
* `lang` current language
* `theme` current theme
* `shellOpenExternal` opens a URL with a system default protocol. The main scenario is to open a URL address through a browser.
* `isDev` whether the current environment is a development environment
* `isMacOS` whether the current device is Mac
* `isWindows` whether the current device is Windows
* `isLinux` whether the current device is Linux
* `getSearchValue` gets the content entered in the search input (only needs to be rendered in the search box)
* `getLastClipboard` gets the current contents of the clipboard
* `onUseClipboardValue` callback function triggered after using the clipboard, notifying the user

## Global message prompts

```js
$he3.message.success('Success');
$he3.message.error('Fail');
$he3.message.info('Tip');
$he3.message.warning('Warning');
```

## Get current clipboard content

```js
$he3.getLastClipboard().then((data) => {
    console.log(data);
});
```

## Copy text

```js
$he3.copyText('copy text');
```

## Get current theme

Gets the current theme, returns dark or light

```js
console.log($he3.theme)
```

## Subscribe theme changes

`subscribeThemeChange` accepts a callback function. When the theme changes, it will trigger the callback function, which will return the current theme, dark or light.

Developers don't need to pay attention to whether the current theme follows the system theme or the user-defined theme. Just subscribe to this event, and then make corresponding processing according to the theme change. We will keep the global themes consistent.

```js
$he3.subscribeThemeChange((data) => {
    console.log(data);
});
```

## Get current language

The following is a list of languages we currently support:

* en English
* zh Simplified Chinese
* zh-tw Traditional Chinese
* es Spanish
* ja Japanese
* ko Korean
* de German
* fr French
* it Italian
* ru Russian
* pt Portuguese

```js
console.log($he3.lang);
```

## Download file by URL

```js
$he3.downloadByUrl('https://www.baidu.com/img/bd_logo1.png');
```
