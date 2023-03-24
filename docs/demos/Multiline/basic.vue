<template>
  <h-multiline :value="text" title="结果" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const text = ref('请输入多行文本');
</script>
