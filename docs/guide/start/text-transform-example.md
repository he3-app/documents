---
title: Quickly build a text conversion tool
lang: en
---


# Quickly build a text conversion tool

This article will use a simple[官方示例 unicode 解码](https://github.com/he3-app/tools-example/blob/main/batch-utf/src/unicode-decode.ts) to explain how to quickly write and build a text conversion tool.

## Example

In this example, in addition to using`@he3-kit/ui` as the ui library,`@he3-kit/utils` is also used as the tool library. We encapsulate it based on the `<h-text-transform>` component in hui, and provide the `textTransformTool` function for developers to better design and develop.

```TYPESCRIPT
// tool layer
import { textTransformTool } from '@he3-kit/utils';
import { decode, encode, likeUnicode } from './unicode';

const sampleData = '\\u6c26\\u4e09\\u79d1\\u6280';

export default textTransformTool({
  inputHandler: decode, // conversion function
  resultHandler: encode, // inverse conversion function
  sampleData, // sample data
  autoFillInputCondition: likeUnicode, // Automatic backfill function, to judge whether the text in the current clipboard conforms to the judgment of the regular function, and return true to automatically fill in
});
```

```TYPESCRIPT
// unicode.ts
// Codec function and unicode inference function
export const decode = (str: string): string => {
  //The unicode encoding range is \u000 - \ufffff
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

## Result

Such a tool and you're done! ! !

![1681466107129](/guide/example/1681466107129.png)