<template>
  <h-file-size-view :size="originalSize" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const originalSize = ref(0);
</script>
