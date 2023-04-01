<template>
  <h-code :code="textInput" lang="TYPESCRIPT" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const textInput = ref(`function likeUserAgent(str: string): boolean {
  return (
    str.includes('Mozilla') ||
    str.includes('Opera') ||
    str.includes('Dalvik') ||
    str.includes('AppleTV') ||
    str.includes('Windows') ||
    str.includes('Mac') ||
    str.includes('Linux') ||
    str.includes('Android') ||
    str.includes('Chromium') ||
    str.includes('Electron') ||
    str.includes('Gecko')
  );
}
export function isUserAgent(value) {
  return likeUserAgent(value);
}`);
</script>
