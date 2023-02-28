---
title: He3 APi
lang: zh-en
---

# He3 Api

我们提供了一些通用能力，方便在开发中使用。命名为 `$he3`, 您可以通过 `window.$he3` 访问。

如下是 api 列表，具体的调用方式请参考下方的演示代码。

* 对外提供
  * `message` 触发全局的消息提示
  * `copyText` 复制一段文本
  * `subscribeThemeChange` 订阅主题变化
  * `downloadByUrl` 通过url下载文件
  * `lang` 当前语言
  * `theme` 当前主题
  * `isDev` 当前是否是开发环境
  * `shellOpenExternal` 系统默认的协议打开URL
  * `isMacOS` 当前设备是否是 Mac
  * `isWindows` 当前设备是否是 Windows
  * `isLinux` 当前设备是否是 Linux
* 内部使用的能力，不对外
  * `getLastClipboard` 获取当前的简体版内容（考虑用户信息安全，确认是否对外暴露）
  * `getToolInfo` 获取工具参数
  * `isPublish` 当前工具是否是公开的
  * `getLang` 异步获取当前语言
  * `getTheme` 异步获取当前主题
* 非通用能力，不对外，给工具使用
  * getJwtToken,
  * SCryptKDF,
  * PasetoDecode,
  * LocalPasetoDecode,
  * generatePaseto,
  * SCryptVerify,
  * readFileByUrl,
  * readFileAsArrayBuffer,
  * getCurlConverter,
  * jsonToOther,
  * jsonToCSType,
  * detectFileType,
  * ntlmHash,
  * decodeToString,
  * encodeString,
  * generateRSAKeyPair,
  * getRSAPublicKeyFromPrivateKey,
  * idnEncode,
  * idnDecode,
  * getBaseNConvertMethod,
  * getMinifiers,
  * compareVersion,
  * semverCompare,
  * machineIdSync,
  * whoiser,
  * getCpuManufacturer,
  * getOSArch,
  * domainPing,
  * domainLookup,
  * domainResolve,
  * getSystemHosts,
  * setSystemHosts,
  * guessLang,
  * traceroute,
  * zipDecode,
  * zipEncode,
  * utf7Decode,
  * utf7Encode,
  * readExactlyByFile,
  * getEncoding,
  * htmlToCsv,
  * isIP,
  * formulaParse,
  * imageResize,

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

### 获取当前语言

如下是我们当前支持的语言列表

* `en` 英文
* `zh` 简体中文
* `zh-tw` 繁体中文
* `es` 西班牙语
* `ja` 日语
* `ko` 韩语
* `de` 德语
* `fr` 法语
* `it` 意大利语
* `ru` 俄语
* `pt` 葡萄牙语

```js
console.log($he3.lang);
```

### 通过url下载文件

```js
$he3.downloadByUrl('https://www.baidu.com/img/bd_logo1.png');
```
