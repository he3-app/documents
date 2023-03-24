<template>
  <h-color-input v-model:pure-color="shadowColor" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const shadowColor = ref('#cccccc');
</script>
