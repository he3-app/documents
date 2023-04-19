---
title: Quickly build a transcoding tool
lang: en
---

# Quickly Building Code Conversion Tool

This article explains how to quickly build a code conversion tool using a simple official example [Less to CSS](https://github.com/he3-app/start-sample/blob/main/src/less-to-css.ts). You can click the link above to fork the related code for local development and debugging.

## Example

::: tip
This example uses the  [Transform](../../components/Transform.md)  component in `@he3-kit/ui` for development. To facilitate secondary encapsulation, you can use our pre-encapsulated `transformTool` function for development. This function is in `@he3-kit/utils`. Run `npm i @he3-kit/utils` to add it to your local project.
:::

```TYPESCRIPT
import { transformTool } from '@he3-kit/utils';
import less from 'less';

// less to css logic function
const lessToCSS = async (input: string): Promise<string> => {
  try {
    const { css } = await less.render(input);
    return css;
  } catch (error) {
    return Promise.reject(error);
  }
};
// sample code
const sampleData = `.units {
  cancels-to-nothing: (1px / 1px);
  cancels: ((((10px / 5em) / 1px) * 3em) * 1px);
}
`;

export default transformTool({
  inputLang: 'CSS', // Left editor language
  outputLang: 'CSS', // Right editor language
  sampleData, // Sample code
  inputHandler: lessToCSS, // Conversion logic
});

```

You can also use the result handler field to support two-way conversion, such as [css prettify](https://github.com/he3-app/start-sample/blob/main/src/css-prettify.ts), the code is as follows

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
  resultHandler: minifyCSS, // inverse conversion function
});

```

## Display

That's it! You've built a simple-to-use code conversion tool using the `Transform` component in `@he3-kit/ui` and the pre-encapsulated `transformTool` function. In this example, we used Less to CSS conversion as an example, wrote a `lessToCSS` function as the conversion logic, and passed it to the `transformTool` function for configuration, resulting in a simple and easy-to-use code conversion tool.

![1681789027870](/guide/example/1681789027870.png)

::: tip
If you don't want the tool to perform inverse conversion, you can also leave the `resultHandler` param empty, so you will get a pure input and output tool
:::
