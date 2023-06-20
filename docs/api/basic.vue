<template>
  <h-file-transform :transform="transform" />
</template>

<script setup lang="ts">
const transform = (file: any) => {
  // process files
  return file;
};
</script>
