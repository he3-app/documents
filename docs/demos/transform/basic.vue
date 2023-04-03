<template>
  <div style="height: 500px">
    <h-transform  :onChange="handleChange" :onMounted="handleMounted" :save-options="{autoSave:true,key:'input1'}"/>
  </div>
</template>

<script setup lang="ts">
import { Ref } from 'vue';

const handleChange = (inputValue: Ref<string>) => {
  // do something
  return '';
};

const handleMounted = (inputValue: Ref<string>) => {
  // Mounted hook
};
</script>
