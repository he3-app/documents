<template>
  <h-input v-model:value="userInput" autoSelect :save-options="{autoSave:true,key:'user-input'}"/>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const userInput = ref('');
</script>
