<template>
  <h-checkbox  v-model:value="value1" :options="options"  :save-options="{autoSave:true,key:'checkbox-input'}" />
</template>
  
<script setup lang="ts">
  import { ref } from 'vue';
  
  const value1 = ref([]);
  const options = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange' },
  ];
</script>
  