---
title: Transform
lang: zh-en
---
# Transform

## 何时使用

代码转换专用组件（自带布局），直接使用可快速生成ui布局以及简单的转换逻辑，适用于大多数代码转换的情况，如JSON转YAML

## 代码演示

:::demo 开箱即用的插件方案，开发者只需要关注转换逻辑即可
transform/basic
:::

## API

### Props

| 属性                   | 说明                   | 类型                                          | 默认值 |
| ---------------------- | ---------------------- | --------------------------------------------- | ------ |
| leftConfig             | 左编辑器配置           | [Config](#config)                             |        |
| rightConfig            | 右编辑器配置           | [Config](#config)                             |        |
| canChooseFile          | 是否支持选择文件       | boolean                                       | true   |
| onMounted              | 挂载时回调函数               | ^[Function]`(inputValue:Ref<string>)=> void`  |        |
| onChange               | 输入框改变时回调函数       | ^[Function]`(inputValue:Ref<string>)=> void`  |        |
| onResultChange         | 结果改变时回调函数         | ^[Function]`(inputValue:Ref<string>)=> void`  |        |
| autoFillInputCondition | 剪切板自动回填判断函数 | ^[Function]`(str: string) => boolean \| null` | null   |

#### Config

| 属性        | 说明               | 类型                                                                                                                                                                                                                                                                                                                           | 默认值 |
| ----------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------ |
| placeholder | 空输入占位         | string                                                                                                                                                                                                                                                                                                                         |        |
| lang        | 编辑器编程语言     | ^[CodeEditorLanguagesUnio]`'HTML' \| 'PYTHON' \| 'RUST' \| 'C' \| 'CPP'  \| 'CSHARP' \| 'CRYSTAL' \| 'OBJECTIVE_C' \| 'KOTLIN' \| 'DART' \| 'PHP' \| 'PROPERTIES' \| 'JAVASCRIPT' \| 'TYPESCRIPT' \| 'JSX' \| 'TSX' \| 'SQL' \| 'SWIFT' \| 'SCALA' \| 'TSX' \| 'TYPESCRIPT' \| 'TOML' \| 'WEB_ASSEMBLY' \| 'XML' \| 'YAML' \|` |        |
| theme       | 编辑器主题         | ^[CodeEditorThemesUnio]`'ANDROID_STUDIO' \| 'ABCDEF' \| 'ATOMONE' \| 'BBEDIT' \| 'BESPIN' \| 'DARCULA' \| 'DRACULA' \| 'DUOTONE_LIGHT' \| 'DUOTONE_DARK' \| 'ECLIPSE' \| 'GITHUB_LIGHT' \| 'GITHUB_DARK' \| 'ONE_DARK' \| 'OKAIDIA' \| 'SUBLIME' \| 'X_CODE_LIGHT' \| 'X_CODE_DARK'`                                           |        |
| title       | 编辑器标题         | string                                                                                                                                                                                                                                                                                                                         |        |
| isTitleShow | 是否展示编辑器标题 | boolean                                                                                                                                                                                                                                                                                                                        |

::: warning 参数修改
editorLang -> lang

editorTheme -> theme
:::

### Slot

| 插槽名 | 说明         | 类型   | 默认值 |
| ------ | ------------ | ------ | ------ |
| left   | 左侧按钮插槽 | Button |        |
| right  | 右侧按钮插槽 | Button |        |
