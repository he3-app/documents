<script setup lang="ts">
defineProps<{
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

