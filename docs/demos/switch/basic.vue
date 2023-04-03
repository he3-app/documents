<template>
    <h-switch  v-model:checked="checked" :save-options="{autoSave:true,key:'checked'}" />
</template>
  
<script setup lang="ts">
    import { ref } from 'vue';
  
    const checked = ref<boolean>(false);
</script>
  