## 批量工具

He3 支持在单个项目中一次性创建多个工具。

## 1. 改造 package.json

将 `he3` 字段改为数组，字段和单个工具一致：

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

## 2. 改造 `index.ts` 入口文件

`src/index.ts` 默认导出的需要为一个数组，元素为一个对象，字段直接取自 `package.json#he3`，同时用 `component` 去指定你的 `vue` 组件即可：

```typescript
import config from '../package.json'
import { Ref, h, resolveComponent } from 'vue'
import SFC from './index.vue'
import TSX from './index.tsx'

export default config.he3.map((tool) => {
  switch(tool.id) {
    // 1. Use SFC.
    case 'my-tool1':
      return {
        ...tool,
        component: SFC
      }
    // 2. Use TSX.
    case 'my-tool2':
      return {
        ...tool,
        component: TSX
      }
    // 3. Or directly use `setup` function.
    case 'my-tool3':
      return {
        ...tool,
        component: {
          setup() {
          return () => h(resolveComponent('h-transform'), {
            onChange:  (inputValue: Ref<string>):string => {
              if(typeof inputValue.value === 'string') {
                return inputValue.value.toUpperCase()
              }

              return inputValue.value
            },
            onMounted:  (inputValue: Ref<string>) => {
              inputValue.value = 'Hello He3!'
            }
          })
        }}
      }
  }
})
```

## 3. 开发

执行 `npm run dev` 后，He3 客户端开发工具菜单会显示所有批量工具：

![](/public/guide/advance/2.png)

## 4. 上传

执行 `npm run publish` 会全量上传你的所有工具，当然你也可以指定上传的哪几个工具：

```shell
npm run publish --include=tool1,tool2
```

也可以排除不需要上传的工具：

```shell
npm run publish --exclude=tool3,tool4
```
