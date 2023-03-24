<template>
  <h-text-transform
    :sampleData="sampleData"
    :transform="transform"
    :autoFillInputCondition="isJWT"
  />
</template>

<script setup lang="ts">
const sampleData = 'Example';
const transform = (inputValue: string): string => {
  // do something
  // 将转换结果返回即可在右边进行展示，注意返回结果必须是字符串
  return '';
};
const isJWT = (text: string) => {
  const reg = /^e([A-Za-z0-9_-]+)\.e([A-Za-z0-9_-]+)\.([A-Za-z0-9_-]+)$/;
  return reg.test(text);
};
</script>
