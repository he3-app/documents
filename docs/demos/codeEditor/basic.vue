<template>
  <h-code-editor v-model="textInput" lang="TYPESCRIPT" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const textInput = ref('');
</script>
