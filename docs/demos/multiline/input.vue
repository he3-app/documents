<template>
  <h-multiline-input v-model="text" autofocus title="标题" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
const text = ref('请输入多行文本');
</script>
