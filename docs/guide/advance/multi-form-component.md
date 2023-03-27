# Various form components

Vue components currently support three formats: sfc (single file component), jsx tsx, setup function

## SFC

[single file component](https://vuejs.org/guide/scaling-up/sfc.html) Encapsulating html, js, and css codes in one file is the most commonly used and most convenient way of writing vue:

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

[JSX/TSX](https://vuejs.org/guide/extras/render-function.html#jsx-tsx) It is an xml-like writing method that supports js code to directly operate components, such as:

```tsx
<ul>
  {this.items.map(({ id, text }) => {
    return <li key={id}>{text}</li>
  })}
</ul>
```

he 3 supports jsx tsx, just like sfc, just write an `index.tsx` file and export the component in the entry file `index.ts`

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

## Setup Function

If your tool is very lightweight and only needs one or two dom elements or reuse the `<h-transform>` component provided by he 3, you can consider using the setup function method and export an object containing the setup function in the entry file `index.ts`:

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

Vue is actually used in the setup function to generate virtual dom[`h` Function](https://vuejs.org/api/render-function.html#h), the above code will generate a conversion tool for converting lowercase characters to all uppercase for us:

![](/guide/advance/1.png)
