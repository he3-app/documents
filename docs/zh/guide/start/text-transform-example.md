---
title: 快速构建文本转换工具
lang: zh
---


# 快速构建文本转换工具

本文将用简单的[官方示例 unicode 解码](https://github.com/he3-app/start-sample/blob/main/src/unicode-decode.ts)来讲解如何如何快速编写构建一个文本转换类工具。你可以点击上面链接 fork 相关代码进行本地开发调试。

## 示例

::: tip
本示例使用 `@he3-kit/ui` 中的 [TextTransform](../../components/TextTransform.md) 组件进行开发，为了方便我们对其进行二次封装，你可以直接使用我们封装好的函数 `textTransformTool` 进行开发。该函数在 `@he3-kit/utils` 中，运行 `npm i @he3-kit/utils` 添加到您的本地项目中。
:::

```TYPESCRIPT
import { textTransformTool } from '@he3-kit/utils';
import { decode, encode, likeUnicode } from './unicode';

const sampleData = '\\u6c26\\u4e09\\u79d1\\u6280';

// unicode 解码函数
export const decode = (str: string): string => {
  // unicode 编码范围为 \u000 - \ufffff
  const unicodeReg = /\\u([0-9a-fA-F]{3,5})/g;
  return str.replaceAll(unicodeReg, (match, dec) => {
    // 循环判断输出，如果不存在自动减位
    for (let i = dec.length; i > 2; i--) {
      const string = String.fromCodePoint(Number.parseInt(dec.slice(0, i), 16));
      if (string) {
        return string + dec.slice(i, dec.length);
      }
    }
    return match;
  });
};
// unicode 编码函数
export const encode = (str: string): string => {
  let result = '';
  for (const char of str) {
    const code = char.charCodeAt(0);
    if (code < 128) {
      result += char;
      continue;
    }
    result += `\\u${String(code.toString(16)).padStart(4, '0')}`;
  }
  return result;
};
// 推断当前剪切板数据是否为 unicode 或者和 unicode 类似
export function likeUnicode(text: string) {
  return text.split('\\u').length >= 5;
}

export default textTransformTool({
  inputHandler: decode, // 转换函数
  resultHandler: encode, // 逆转换函数
  sampleData, // 示例
  autoFillInputCondition: likeUnicode, // 自动回填函数，判断当前剪切板中的文本是否符合正则函数的判断，返回true则自动填入
});
```

## 展示

这样一个工具就大功告成了！！！

![1681799731782](/guide/example/1681799731782.png)

:::tip
如果你不希望工具进行逆转换，也可以将 `resultHandler` 字段置空，这样你会得到一个纯输入输出工具
:::
