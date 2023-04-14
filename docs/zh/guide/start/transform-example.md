---
title: 快速构建代码转换工具
lang: zh
---

# 快速构建代码转换工具

本文将用简单的[官方示例 JSON转CSV](https://github.com/he3-app/tools-example/blob/main/batch-json/src/json-to-csv.ts)来讲解如何如何快速编写构建一个代码转换类工具。

## 示例

本示例中除了使用`@he3-kit/ui`作为UI库外，还用到`@he3-kit/utils`作为工具库，我们基于HUI中的`<h-transform>`组件进行封装，提供`transformTool`函数供开发者们更好地进行设计开发。

```TYPESCRIPT
// 因为批量处理几十个JSON文件，为了让代码有很好的耦合性，我们先将其封装，简单配置一下JSON转换的基础设置
import { transformTool } from '@he3-kit/utils';
import { JsonExample } from '../example';
import { i18n } from '../locale';
import { isJson } from './isJson';

export default function register({
  lang,
  inputHandler,
  resultHandler,
  slot,
  example,
}: {
  lang: string;
  inputHandler: Function;
  resultHandler?: Function;
  slot?: {
    left?: unknown;
    right?: unknown;
  };
  example?: string;
}) {
  return transformTool({
    inputLang: 'JSON', // 左侧输入语言为JSON
    outputLang: lang, // 输出语言待定
    inputHandler, // 转换函数待定
    resultHandler, // 逆转换函数待定
    inputPlaceHolder: i18n.global.t('json.input.placeholder'), // 统一placeholder
    sampleData: example || JsonExample, // 示例待定，如果无示例则默认用统一示例
    autoFillInputCondition: isJson, // 自动回填统一用 JSON 的判断
    slot: {
      left: slot?.left,
      right: slot?.right,
    }, // 功能按钮插槽待定
  });
}
```

```TYPESCRIPT
// 工具层
import { revert } from './utils/json2Csv';
import register from './utils/register';

export default register({
  inputHandler: revert, // 将JSON 转 CSV 的逻辑函数传给inputHandler参数
  lang: 'CSV', // 输出语言选择 CSV
});

```

```TYPESCRIPT
// CSV转换逻辑
import { parse as csvParse } from 'json2csv/dist/json2csv.umd.js';

export function revert(str: string) {
  // 参数str为左侧代码编辑器输入值
  let value = '';
  // 将代码输入值进行处理后返回，将处理后结果返回即可呈现在组件右侧代码展示框中
  try {
    value = JSON.parse(str);
  } catch {
    return str;
  }
  try {
    const csv = csvParse(value, {});
    return csv.replace(/\"/g, '');
  } catch {
    return str;
  }
}
```

## 展示

这样一个工具就大功告成了！！！

![1681461906766](/guide/example/1681461906766.png)
