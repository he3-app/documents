## Batch tools

He 3 supports creating multiple tools at once in a single project.

## 1. Retrofit package.json

Change the `he3` field to an array, and the field is consistent with a single tool:

```json
//...
"he3": [
    {
      "id": "my-tool1",
      "relatedToolId": ["my-tool2"],
      "version": "0.0.1",
      "name": "My Tool1",
      "description": "I am My Tool1",
      "category": [
        "yaml"
      ],
      "keywords": [
        "my-tool"
      ]
    },
    {
      "id": "my-tool2",
      "relatedToolId": ["my-tool1"],
      "version": "0.0.1",
      "name": "My Tool2",
      "description": "I am My Tool2",
      "category": [
        "json"
      ],
      "keywords": [
        "my-tool"
      ]
    },
    {
      "id": "my-tool3",
      "relatedToolId": ["my-tool1"],
      "version": "0.0.1",
      "name": "My Tool3",
      "description": "I am My Tool3",
      "category": [
        "json"
      ],
      "keywords": [
        "my-tool"
      ]
    }
  ],
//...
```

## 2. create a new file

The tool id in the configuration file is consistent with the tool component file name, and the file can be a ts, tsx, or vue file

![1681782327907](/batch/1681782327907.png)

```json
// package.json
{
  "id": "unicode-encode",
  "name": "Unicode Encoding",
  "icon": "block-outlined",
  "version": "1.0.0",
  "isPublic": true,
  "repository": "",
  "category": [
    "encode"
  ],
  "description": "Encodes text into unicode",
  "keywords": [
    "unicode",
    "encode"
  ],
  "relatedToolId": [
    "unicode-decode"
  ]
},
{
  "id": "unicode-decode",
  "name": "Unicode Decoding",
  "icon": "block-outlined",
  "version": "1.0.0",
  "isPublic": true,
  "repository": "",
  "category": [
    "encode"
  ],
  "description": "Decodes unicode into text",
  "keywords": [
    "unicode",
    "decode"
  ],
  "relatedToolId": [
    "unicode-encode"
  ]
}
```

## 3. Development

Write the corresponding logic code in the file

```TS
// unicode-encode
import { textTransformTool } from '@he3-kit/utils';
import { decode, encode, likeUnicode } from './unicode';

const sampleData = '\\u6c26\\u4e09\\u79d1\\u6280';

export default textTransformTool({
  inputHandler: decode,
  resultHandler: encode,
  sampleData,
  autoFillInputCondition: likeUnicode,
});
```

After executing `npm run dev`, the he 3 client development tool menu will display all batch tools:

![](/guide/advance/2.png)

## 4. Upload

Executing `npm run publish` will upload all your tools in full. Of course, you can also specify which tools to upload:

```shell
npm run publish --include=tool1,tool2
```

It is also possible to exclude tools that do not need to be uploaded:

```shell
npm run publish --exclude=tool3,tool4
```
