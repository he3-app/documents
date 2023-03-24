<script setup lang="ts">
defineProps<{
  file: string;
  demo: string;
}>();
</script>

<template>
  <div class="example-showcase">
    <component :is="demo" v-if="demo" v-bind="$attrs" />
  </div>
</template>

<style scoped>
.example-showcase {
  padding: 1.5rem;
  margin: 0.5px;
  /* background-color: var(--primary-bg-color); */
}
</style>
