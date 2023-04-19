---
title: Quickly build a text conversion tool
lang: en
---


# Quickly build a text conversion tool

This article will use a simple [official example unicode decode](https://github.com/he3-app/start-sample/blob/main/src/unicode-decode.ts) to explain how to quickly write and build a text conversion tool.

## Example

::: tip
This example uses the  [TextTransform](../../components/TextTransform.md)  component in `@he3-kit/ui` for development. To facilitate secondary encapsulation, you can use our pre-encapsulated `textTransformTool` function for development. This function is in `@he3-kit/utils`. Run `npm i @he3-kit/utils` to add it to your local project.
:::

```TYPESCRIPT
import { textTransformTool } from '@he3-kit/utils';
import { decode, encode, likeUnicode } from './unicode';

const sampleData = '\\u6c26\\u4e09\\u79d1\\u6280';

// unicode decoding function
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
// unicode encoding function
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
// Infer whether the current clipboard data is unicode or similar to unicode
export function likeUnicode(text: string) {
  return text.split('\\u').length >= 5;
}

export default textTransformTool({
  inputHandler: decode, // conversion function
  resultHandler: encode, // inverse conversion function
  sampleData, // sample data
  autoFillInputCondition: likeUnicode, // Automatic backfill function, to judge whether the text in the current clipboard conforms to the judgment of the regular function, and return true to automatically fill in
});
```

## Result

Such a tool and you're done! ! !

![1681799731782](/guide/example/1681799731782.png)

::: tip
If you don't want the tool to perform inverse conversion, you can also leave the `resultHandler` param empty, so you will get a pure input and output tool
:::
