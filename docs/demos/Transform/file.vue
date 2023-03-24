<template>
  <h-text-transform
    enableFile
    fileOutputAlert="导出成功"
    :transform="transform"
  />
</template>

<script setup lang="ts">
const transform = (inputValue: string): string => {
  // do something
  // 将转换结果返回即可在右边进行展示，注意返回结果必须是字符串
  return '';
};
</script>
