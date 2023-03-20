<script setup lang="ts">
const props = defineProps<{
  type: string;
  details: string;
}>();
</script>

<template>
  <a-popover class="font">
    <template #content>
      <code>{{ details }}</code>
    </template>
    <a-tag style="cursor: pointer" color="blue">{{ type }}</a-tag>
  </a-popover>
</template>

<style>
.font {
  font-family: 'JetBrains Mono';
}
code {
  font-family: 'JetBrains Mono';
}
</style>
