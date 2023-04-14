---
title: 快速构建文本转换工具
lang: zh
---


# 快速构建文本转换工具

本文将用简单的[官方示例 unicode 解码](https://github.com/he3-app/tools-example/blob/main/batch-utf/src/unicode-decode.ts)来讲解如何如何快速编写构建一个文本转换类工具。

## 示例

本示例中除了使用`@he3-kit/ui`作为UI库外，还用到`@he3-kit/utils`作为工具库，我们基于HUI中的`<h-text-transform>`组件进行封装，提供`textTransformTool`函数供开发者们更好地进行设计开发。

```TYPESCRIPT
// 工具层
import { textTransformTool } from '@he3-kit/utils';
import { decode, encode, likeUnicode } from './unicode';

const sampleData = '\\u6c26\\u4e09\\u79d1\\u6280';

export default textTransformTool({
  inputHandler: decode, // 转换函数
  resultHandler: encode, // 逆转换函数
  sampleData, // 示例
  autoFillInputCondition: likeUnicode, // 自动回填函数，判断当前剪切板中的文本是否符合正则函数的判断，返回true则自动填入
});
```

```TYPESCRIPT
// unicode.ts
// 编解码函数以及unicode推断函数
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

export function likeUnicode(text: string) {
  return text.split('\\u').length >= 5;
}

```

## 展示

这样一个工具就大功告成了！！！

![1681466107129](/guide/example/1681466107129.png)
