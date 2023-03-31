---
title: Code
lang: en
---
# Code

## When To Use

When it is necessary to display text and the text content is code, use this component to provide code highlighting, line number, copy

## Examples

:::demo
code/basic
:::

## API

### Props

| Property | Description                                         | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                 | default |
| -------- | --------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| code     | Show a reproducible code snippet                    | string                                                                                                                                                                                                                                                                                                                                                                                                                                               |         |
| lang     | Programming language, letters must be all uppercase | ^[CodeEditorLanguagesUnio]`'HTML' \| 'PYTHON' \| 'RUST' \| 'C' \| 'CPP'  \| 'CSS' \| 'CSHARP' \| 'CRYSTAL' \| 'OBJECTIVE_C' \| 'KOTLIN' \| 'DART' \| 'ELM' \| 'HASKELL' \|  'PHP' \| 'PROPERTIES' \| 'LUA' \| 'RUBY' \| 'R' \| 'JAVASCRIPT' \| 'JAVA'\| 'JSON' \| 'GO' \|  'TYPESCRIPT' \| 'JSX' \| 'TSX' \| 'MARKDOWN' \| 'SQL' \| 'SHELL' \| 'SWIFT' \| 'SCALA' \| 'TSX' \| 'TYPESCRIPT' \| 'TOML' \| 'WEB_ASSEMBLY' \| 'XML' \| 'YAML' \| 'TOML'` |         |
