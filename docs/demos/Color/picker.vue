<template>
  <h-color-picker v-model:pure-color="shadowColor" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const shadowColor = ref('#cccccc');
</script>
