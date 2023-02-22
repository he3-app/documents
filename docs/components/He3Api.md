---
title: He3 APi
lang: zh-en
---
# He3 Api

我们提供了一些通用能力，方便你在开发中使用。命名为 $he3, 您可以通过 window.$he3 访问。
如下是 api 列表，具体的调用方式请参考下方的代码演示。
* message 触发全局的消息提示
* getLastClipboard 获取当前的简体版内容
* copyText 复制一段文本
* getTheme 获取当前主题
* subscribeThemeChange 订阅主题变化
* getLang 获取当前语言
* downloadByUrl 通过url下载文件
* getToolInfo 获取工具参数（内部使用）

### 触发全局的消息提示
    
```js
$he3.message.success('成功');
$he3.message.error('失败');
$he3.message.info('提示');
$he3.message.warning('警告');
```
### 获取当前的简体版内容
        
```js
$he3.getLastClipboard().then((data) => {
  console.log(data);
});
```

### 复制一段文本

```js
$he3.copyText('copy text');
```

### 获取当前主题

获取当前的主题，返回 dark 或者 light

```js
$he3.getTheme().then((data) => {
  console.log(data);
});
```

### 订阅主题变化
subscribeThemeChange 接收一个回调函数，当主题变化时，会触发回调函数，回调函数会返回当前的主题， dark 或者 light。

开发者无需关注当前是主题是跟随系统主题，还是用户自定义主题，只需要订阅该事件，然后根据主题变化来做相应的处理即可，我们会保持全局的主题相统一。

```js
$he3.subscribeThemeChange((data) => {
  console.log(data);
});
```

### 获取当前语言

获取当前的语言，如下是我们当前支持的语言列表

* en 英文
* zh 简体中文
* zh-tw 繁体中文
* es 西班牙语
* ja 日语
* ko 韩语
* de 德语
* fr 法语
* it 意大利语
* ru 俄语
* pt 葡萄牙语

```js
$he3.getLang().then((data) => {
  console.log(data);
});
```

### 通过url下载文件

```js
$he3.downloadByUrl('https://www.baidu.com/img/bd_logo1.png');
```

### 获取工具参数（内部使用）

```js
$he3.getToolInfo().then((data) => {
  console.log(data);
});
```
