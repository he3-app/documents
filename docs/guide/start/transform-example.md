---
title: Quickly build a transcoding tool
lang: en
---

# Quickly build a transcoding tool

This article will use a simple[official example JSON to CSV](https://github.com/he3-app/tools-example/blob/main/batch-json/src/json-to-csv.ts) to explain how to quickly write and build a code conversion tool.

## Example

In this example, in addition to using `@he3-kit/ui` as the ui library, `@he3-kit/utils` is also used as the tool library. We encapsulate it based on the `<h-transform>` component in hui, and provide the `transformTool` function for developers to better design and develop.

```TYPESCRIPT
// Because dozens of json files are processed in batches, in order to make the code well coupled, we first encapsulate it and simply configure the basic settings of json conversion
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
    inputLang: 'JSON', // The input language on the left is json
    outputLang: lang, // Output language to be determined
    inputHandler, // Conversion function to be determined
    resultHandler, // Inverse conversion function to be determined
    inputPlaceHolder: i18n.global.t('json.input.placeholder'), // Unite placeholder
    sampleData: example || JsonExample, // The example is to be determined, if there is no example, the unified example will be used by default
    autoFillInputCondition: isJson, // Automatic backfill unified judgment with json
    slot: {
      left: slot?.left,
      right: slot?.right,
    }, // Function button slot to be determined
  });
}
```

```TYPESCRIPT
// tool layer
import { revert } from './utils/json2Csv';
import register from './utils/register';

export default register({
  inputHandler: revert, // Pass the logic function of converting json to csv to the inputHandler parameter
  lang: 'CSV', // Output language selection CSV
});

```

```TYPESCRIPT
// CSV conversion logic
import { parse as csvParse } from 'json2csv/dist/json2csv.umd.js';

export function revert(str: string) {
  // The parameter str is the input value for the code editor on the left
  let value = '';
  // Return the code input value after processing, and return the processed result to be displayed in the code display box on the right side of the component
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

## Result

Such a tool and you're done! ! !

![1681461906766](/guide/example/1681461906766.png)
