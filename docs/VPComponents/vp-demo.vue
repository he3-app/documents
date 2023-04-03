<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue';
import Example from './vp-example.vue';
import SourceCode from './vp-source-code.vue';
import { useClipboard, useToggle } from '@vueuse/core';
import { useData } from 'vitepress';
import { setDarkMode, setLightMode } from '../.vitepress/theme/utils/mode';
import { changeLocale } from '../locale';

const props = defineProps<{
  source: string;
  path: string;
  rawSource: string;
  description?: string;
}>();

const { isDark, lang } = useData();

watchEffect(() => {
  isDark.value ? setDarkMode() : setLightMode();
});
watchEffect(() => {
  lang.value === 'zh' ? changeLocale('zh') : changeLocale('en');
});

const decodedDescription = computed(() =>
  decodeURIComponent(props.description!)
);

const resoleComponent = (path: string) => `demo-${path.replace('/', '-')}`;
console.log('%cvp-demo.vue line:31 resoleComponent', 'color: #007acc;', resoleComponent(props.path));
const [sourceVisible, toggleSourceVisible] = useToggle();
const showCopySuccess = ref(false);
const { copy } = useClipboard({
  source: decodeURIComponent(props.rawSource),
  read: false,
});
console.log('%cvp-demo.vue line:38 path', 'color: #007acc;', props.path);

const handleCopy = () => {
  copy();
  showCopySuccess.value = true;
};
</script>

<template>
  <!-- <div
    class="scrollbar scrollbar-rounded scrollbar-w-4px scrollbar-radius-2 scrollbar-track-radius-4 scrollbar-thumb-radius-4"
  /> -->
  <a-card>
    <Example :file="path" :demo="resoleComponent(path)" />
    <a-divider />
    <p style="padding: 0 20px">{{ decodedDescription }}</p>
    <a-divider v-if="decodedDescription" />
    <div style="display: flex; flex-direction: row-reverse">
      <a-button
        type="text"
        size="small"
        @click="handleCopy"
        @mouseleave="
          () => {
            showCopySuccess = false;
          }
        "
      >
        <Transition mode="out-in" name="fade">
          <h-icon
            v-if="showCopySuccess"
            icon="ep:check"
            :size="16"
            style="cursor: pointer"
          />
          <h-icon
            v-else
            icon="ant-design:copy-outlined"
            :size="16"
            style="cursor: pointer"
          />
        </Transition>
      </a-button>
      <a-button
        type="text"
        size="small"
        @click="toggleSourceVisible(!sourceVisible)"
      >
        <h-icon
          icon="ant-design:code-outlined"
          :size="16"
          style="cursor: pointer"
        />
      </a-button>
    </div>
    <Transition name="move">
      <SourceCode v-show="sourceVisible" :source="source" />
    </Transition>
  </a-card>
</template>

<style>
.fade-enter-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.move-enter-active {
  transition: all 0.3s ease-in-out;
}

.move-enter-from,
.move-leave-to {
  transform: translateY(-30px);
  opacity: 0;
}
</style>
