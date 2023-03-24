import VpApiTyping from './vp-api-typing.vue';
import VpDemo from './vp-demo.vue';
import type { Component } from 'vue';

export const globals: [string, Component][] = [
  ['Demo', VpDemo],
  ['ApiTyping', VpApiTyping],
];
