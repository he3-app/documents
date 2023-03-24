import DefaultTheme from 'vitepress/theme';
import HeUI from '@he3-kit/ui';
import '@he3-kit/ui/dist/style.css';
import Antd from 'ant-design-vue';
import ApiTyping from '../../VPComponents/vp-api-typing.vue';
import i18n from '../../locale';
import './style/global.less';
import { useLocalStorage } from '@vueuse/core';
import { setDarkMode, setLightMode } from './utils/mode';
import { watchEffect } from 'vue';
import { globals } from '../../VPComponents';
import { Demos } from '../../demos/index';
import 'prismjs/themes/prism-tomorrow.min.css';
import 'uno.css';

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    ctx.app.use(Antd);
    ctx.app.use(HeUI);
    ctx.app.use(i18n);
    globals.forEach(([name, Comp]) => {
      ctx.app.component(name, Comp);
    });
    Demos.forEach(([name, Comp]) => {
      ctx.app.component(name, Comp);
    });
    ctx.app.component('ApiTyping', ApiTyping);
    DefaultTheme.enhanceApp(ctx);
    const theme = useLocalStorage('vitepress-theme-appearance', 'auto');
    watchEffect(() => {
      console.log(theme.value);
      theme.value === 'dark' ? setDarkMode() : setLightMode();
    });
  },
};
