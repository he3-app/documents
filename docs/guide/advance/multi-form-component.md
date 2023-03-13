# 多种形式组件
Vue 组件目前支持三种格式：SFC（单文件组件）、JSX/TSX、Setup 函数

## SFC
[单文件组件](https://vuejs.org/guide/scaling-up/sfc.html) 将 HTML、JS、CSS 代码封装在一个文件里去写，是 Vue 最常用的一种写法，也是最方便的一种写法：

```vue
<script>
export default {
  data() {
    return {
      greeting: 'Hello World!'
    }
  }
}
</script>

<template>
  <p class="greeting">{{ greeting }}</p>
</template>

<style>
.greeting {
  color: red;
  font-weight: bold;
}
</style>
```

## JSX/TSX

[JSX/TSX](https://vuejs.org/guide/extras/render-function.html#jsx-tsx) 是一种类 XML 写法，支持 JS 代码直接操作组件，比如：

```tsx
<ul>
  {this.items.map(({ id, text }) => {
    return <li key={id}>{text}</li>
  })}
</ul>
```

He3 支持 JSX/TSX，如同 SFC 一样，写一个 `index.tsx` 文件，并在入口文件 `index.ts` 导出该组件即可:

`src/index.tsx`

```tsx
import { defineComponent } from 'vue'

export default defineComponent({
  render() {
    return <div>Hello He3!</div>
  }
})
```

`src/index.ts`

```ts
import Index from './index.tsx'
export default Index
```

## Setup 函数

如果你的工具非常轻量，仅需一两个 DOM 元素或者复用 He3 提供的 `<h-transform>` 组件，可以考虑用 Setup 函数方式，在入口文件 `index.ts` 导出一个含有 setup 函数的对象即可：

```ts
import { Ref, h, resolveComponent } from 'vue'

export default {
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
```

Setup 函数中实际用到了 vue 用于生成虚拟 DOM 的 [`h` 函数](https://vuejs.org/api/render-function.html#h)，如上代码就为我们生成一个将小写字符转为全大写的转换工具：

![](/guide/advance/1.png)
