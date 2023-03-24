<template>
  <h-input v-model:value="userInput" autoSelect />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const userInput = ref('');
</script>
