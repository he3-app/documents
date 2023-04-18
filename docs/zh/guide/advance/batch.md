# 批量工具

He3 支持在单个项目中一次性创建多个工具。

## 1. 改造 package.json

将 `he3` 字段改为数组，字段和单个工具一致（注意这里id要和文件名一致）：

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

## 2. 新建文件

配置文件中的工具id与工具组件文件名一致，文件可以是ts、tsx、vue文件

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

## 3. 开发

在文件中写入对应逻辑代码

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

执行 `npm run dev` 后，He3 客户端开发工具菜单会显示所有批量工具：

![](/guide/advance/2.png)

## 4. 上传

执行 `npm run publish` 会全量上传你的所有工具，当然你也可以指定上传的哪几个工具：

```shell
npm run publish --include=tool1,tool2
```

也可以排除不需要上传的工具：

```shell
npm run publish --exclude=tool3,tool4
```


