---
title: MultilineInput
lang: zh-en
---
# MultilineInput

## 何时使用

在有需要使用多行输入时，该输入框使输入更加简单

## 代码演示

:::demo
multiline/input
:::

## API

### Props

::: danger

MultilineInput不支持code输入，请使用CodeEditor

:::

| 属性                   | 说明                              | 类型                                          | 默认值    |
| ---------------------- | --------------------------------- | --------------------------------------------- | --------- |
| id                     | 用于获取DOM时使用                 | string                                        |           |
| title                  | 标题                              | string                                        |           |
| modelValue             | 绑定ref                           | string                                        |           |
| placeholder            | 占位文字                          | string                                        |           |
| autofocus              | 自动聚焦                          | boolean                                       | autofocus |
| autoSelect             | 组件挂载时自动选中input框中的内容 | boolean                                       | false     |
| noChangeOnMounted      | 组件挂载时不触发change事件        | boolean                                       | false     |
| autoFillInputCondition | 剪切板自动回填判断函数            | ^[Function]`(str: string) => boolean \| null` | null      |
| saveOptions | 自动上传和初始化组件数据。<br />注意⚠️：同一个工具下的多个key值需要保证唯一性。 | object  | autoSave:false,key:"" |

### 事件

| 事件名 | 说明               | 类型                  | 默认值 |
| ------ | ------------------ | --------------------- | ------ |
| change | 键值对改变触发回调函数 | ^[Function]`()=>void` |        |

::: warning 参数修改
selectAllOnMount -> autoSelect
:::
