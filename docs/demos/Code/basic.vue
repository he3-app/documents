<template>
  <h-code :code="textInput" lang="TYPESCRIPT" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const textInput = ref(`console.log('He3')`);
</script>
