<template>
    <h-radio  v-model:value="value1" :save-options="{autoSave:true,key:'value1'}" >
        <a-radio-button value="a">Hi</a-radio-button>
        <a-radio-button value="b">He3</a-radio-button>
    </h-radio>
</template>
  
<script setup lang="ts">
    import { ref } from 'vue';
  
    const value1 = ref('a');
</script>
  