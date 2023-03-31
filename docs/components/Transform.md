---
title: Transform
lang: en
---
# Transform

## When To Use

Special component for code conversion (with its own layout), which can be used directly to quickly generate ui layout and simple conversion logic, suitable for most code conversion situations, such as json to yaml

## Examples

:::demo Out-of-the-box plug-in solution, developers only need to pay attention to the conversion logic
transform/basic
:::

## API

### Props

| Property               | Description                                    | Type                                          | default |
| ---------------------- | ---------------------------------------------- | --------------------------------------------- | ------- |
| leftConfig             | left editor configuration                      | [Config](#config)                             |         |
| rightConfig            | Right editor configuration                     | [Config](#config)                             |         |
| canChooseFile          | Whether to support file selection              | boolean                                       | true    |
| onMounted              | Callback function when mounted                 | ^[Function]`(inputValue:Ref<string>)=> void`  |         |
| onChange               | Callback function when the input box changes   | ^[Function]`(inputValue:Ref<string>)=> void`  |         |
| onResultChange         | Callback function when the result changes      | ^[Function]`(inputValue:Ref<string>)=> void`  |         |
| autoFillInputCondition | Clipboard automatic backfill judgment function | ^[Function]`(str: string) => boolean \| null` | null    |

#### Config

| Property    | Description                      | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                 | default |
| ----------- | -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| placeholder | Placeholder of input             | string                                                                                                                                                                                                                                                                                                                                                                                                                                               |         |
| lang        | editor programming language      | ^[CodeEditorLanguagesUnio]`'HTML' \| 'PYTHON' \| 'RUST' \| 'C' \| 'CPP'  \| 'CSS' \| 'CSHARP' \| 'CRYSTAL' \| 'OBJECTIVE_C' \| 'KOTLIN' \| 'DART' \| 'ELM' \| 'HASKELL' \|  'PHP' \| 'PROPERTIES' \| 'LUA' \| 'RUBY' \| 'R' \| 'JAVASCRIPT' \| 'JAVA'\| 'JSON' \| 'GO' \|  'TYPESCRIPT' \| 'JSX' \| 'TSX' \| 'MARKDOWN' \| 'SQL' \| 'SHELL' \| 'SWIFT' \| 'SCALA' \| 'TSX' \| 'TYPESCRIPT' \| 'TOML' \| 'WEB_ASSEMBLY' \| 'XML' \| 'YAML' \| 'TOML'` |         |
| theme       | editor theme                     | ^[CodeEditorThemesUnio]`'ANDROID_STUDIO' \| 'ABCDEF' \| 'ATOMONE' \| 'BBEDIT' \| 'BESPIN' \| 'DARCULA' \| 'DRACULA' \| 'DUOTONE_LIGHT' \| 'DUOTONE_DARK' \| 'ECLIPSE' \| 'GITHUB_LIGHT' \| 'GITHUB_DARK' \| 'ONE_DARK' \| 'OKAIDIA' \| 'SUBLIME' \| 'X_CODE_LIGHT' \| 'X_CODE_DARK'`                                                                                                                                                                 |         |
| title       | editor title                     | string                                                                                                                                                                                                                                                                                                                                                                                                                                               |         |
| isTitleShow | Whether to show the editor title | boolean                                                                                                                                                                                                                                                                                                                                                                                                                                              |

### Slot

| Slot Name | Description       | Type   | default |
| --------- | ----------------- | ------ | ------- |
| left      | left button slot  | Button |         |
| right     | right button slot | Button |         |
