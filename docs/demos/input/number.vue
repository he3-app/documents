<template>
  <h-number-input v-model:value="userInput" select-all-on-mount />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const userInput = ref('');
</script>
