<template>
  <h-kv-input :modelValue="payload" @change="handleChange" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const payload = ref('');
function handleChange(obj: Record<string, string>[]) {
  const mergeResult = obj.reduce((total, cur) => {
    if (!cur.key) return total;
    return Object.assign(total, { [cur.key]: cur.value });
  }, {});
  payload.value = JSON.stringify(mergeResult, null, 4);
}
</script>
