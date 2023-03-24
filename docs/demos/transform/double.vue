<template>
  <h-text-transform
    enableReverse
    :transform="transform"
    :sampleData="sampleData"
    :reverseTransform="reverseTransform"
  />
</template>

<script setup lang="ts">

const sampleData = 'Example';
const transform = (inputValue: string) => {
  // do something
  return ''
}


const reverseTransform = () => {
  // do something
  // 将转换结果返回即可在左边进行展示，注意返回结果必须是字符串
}

</script>