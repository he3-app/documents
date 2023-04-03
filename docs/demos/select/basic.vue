<template>
    <h-select  v-model:value="value1" :save-options="{autoSave:true,key:'value1'}" >
        <a-select-option value="jack">Jack</a-select-option>
        <a-select-option value="lucy">Lucy</a-select-option>
    </h-select>
</template>
  
<script setup lang="ts">
    import { ref } from 'vue';
  
    const value1 = ref('lucy');
</script>
  