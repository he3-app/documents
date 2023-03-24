---
title: CodeEditor
lang: en
---
# CodeEditor

## When To Use

When text input is required and the input is code, this component provides functions such as code highlighting, folding, and line numbers

## Examples

:::demo
codeEditor/basic
:::

## API

### Props

| Property           | Description           | Type                                                                                                                                                                                                                                                                                                                           | default    |
| ------------------ | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------- |
| modelValue/v-model | Code editor content   | string                                                                                                                                                                                                                                                                                                                         |            |
| lang               | Programming language  | ^[CodeEditorLanguagesUnio]`'HTML' \| 'PYTHON' \| 'RUST' \| 'C' \| 'CPP'  \| 'CSHARP' \| 'CRYSTAL' \| 'OBJECTIVE_C' \| 'KOTLIN' \| 'DART' \| 'PHP' \| 'PROPERTIES' \| 'JAVASCRIPT' \| 'TYPESCRIPT' \| 'JSX' \| 'TSX' \| 'SQL' \| 'SWIFT' \| 'SCALA' \| 'TSX' \| 'TYPESCRIPT' \| 'TOML' \| 'WEB_ASSEMBLY' \| 'XML' \| 'YAML' \|` | JAVASCRIPT |
| theme              | editor theme color    | ^[CodeEditorThemesUnio]`'ANDROID_STUDIO' \| 'ABCDEF' \| 'ATOMONE' \| 'BBEDIT' \| 'BESPIN' \| 'DARCULA' \| 'DRACULA' \| 'DUOTONE_LIGHT' \| 'DUOTONE_DARK' \| 'ECLIPSE' \| 'GITHUB_LIGHT' \| 'GITHUB_DARK' \| 'ONE_DARK' \| 'OKAIDIA' \| 'SUBLIME' \| 'X_CODE_LIGHT' \| 'X_CODE_DARK'`                                           |            |
| placeholder        | PlaceHolder of editor | string                                                                                                                                                                                                                                                                                                                         |            |
| autofocus          | Auto focus to editor  | boolean                                                                                                                                                                                                                                                                                                                        | true       |
| disabled           | Whether to disable    | boolean                                                                                                                                                                                                                                                                                                                        | false      |
| copyable           | Whether to copy       | boolean                                                                                                                                                                                                                                                                                                                        | true       |
| hiddenGutter       | hiddenGutter          | boolean                                                                                                                                                                                                                                                                                                                        | false      |
