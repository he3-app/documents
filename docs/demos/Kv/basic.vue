<template>
  <h-kv :value="outputValue" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const outputValue = ref({
  key1: 'He3',
  key2: 'Development',
  key3: 'Tool'
});
</script>
