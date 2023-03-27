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

## 2. Retrofit `index.ts` entry file

The default export of `src.index.ts` needs to be an array, the element is an object, and the fields are directly taken from `package.json#he3`, and you can use `component` to specify your `vue` component:

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

## 3. Development

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
