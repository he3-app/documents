<template>
  <h-highlight-input
    v-model="testStr"
    title="标题"
    :highlight-text="matchArray"
    :regex-modifier="rightRegex"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const testStr = ref(
  'He3 is a free, modern developer toolbox. Check it out: https://he3.app'
);
const matchArray = ref<string[]>(['He3', 'https://he3.app']);
const rightRegex = ref('g');
</script>
