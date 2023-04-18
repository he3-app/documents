---
title: 快速构建代码转换工具
lang: zh
---

# 快速构建代码转换工具

本文将用简单的[官方示例 Less转CSS](https://github.com/he3-app/start-sample/blob/main/src/less-to-css.ts) 来讲解如何如何快速编写构建一个代码转换类工具。你可以点击上面链接 fork 相关代码进行本地开发调试。

## 示例

::: tip
本示例使用 `@he3-kit/ui` 中的 [Transform](../../components/Transform.md) 组件进行开发，为了方便我们对其进行二次封装，你可以直接使用我们封装好的函数 `transformTool` 进行开发。该函数在 `@he3-kit/utils` 中，运行 `npm i @he3-kit/utils` 添加到您的本地项目中。
:::

```TYPESCRIPT
import { transformTool } from '@he3-kit/utils';
import less from 'less';

// less 转 css 逻辑函数
const lessToCSS = async (input: string): Promise<string> => {
  try {
    const { css } = await less.render(input);
    return css;
  } catch (error) {
    return Promise.reject(error);
  }
};
// 示例代码
const sampleData = `.units {
  cancels-to-nothing: (1px / 1px);
  cancels: ((((10px / 5em) / 1px) * 3em) * 1px);
}
`;

export default transformTool({
  inputLang: 'CSS', // 左侧编辑器语言
  outputLang: 'CSS', // 右侧编辑器语言
  sampleData, // 示例代码
  inputHandler: lessToCSS, // 转换逻辑
});

```

你也可以使用 `resultHandler` 字段来支持双向转换,如 [css prettify](https://github.com/he3-app/start-sample/blob/main/src/css-prettify.ts)，代码如下

```TS
import { transformTool } from '@he3-kit/utils';
import beautify from 'js-beautify';
import { minify } from 'csso';
const prettifyCSS = (inputValue: string) =>
  beautify.css(inputValue, {
    indent_size: 2,
  });

const minifyCSS = (inputValue: string) => minify(inputValue).css;

const sampleData = `:root {
  --surface-color: #e9e9e9;
  --curve: 40;
}

* {
  box-sizing: border-box;
}

body {
  font-family: 'Noto Sans JP', sans-serif;
  background-color: #fef8f8;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 4rem 5vw;
  padding: 0;
  list-style-type: none;
}

.card {
  position: relative;
  display: block;
  height: 100%;
  border-radius: calc(var(--curve) * 1px);
  overflow: hidden;
  text-decoration: none;
}`;

export default transformTool({
  inputLang: 'CSS',
  outputLang: 'CSS',
  sampleData: sampleData,
  inputHandler: prettifyCSS,
  resultHandler: minifyCSS, // 逆转换函数
});

```

## 展示

这样一个工具就大功告成了！！！

![1681789027870](/guide/example/1681789027870.png)
