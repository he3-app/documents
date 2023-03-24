<template>
  <h-terminal-view :value="screen" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
const screen = ref('He3');
</script>
