import DefaultTheme from 'vitepress/theme';
import HeUI from '@he3-kit/ui';
import '@he3-kit/ui/dist/style.css';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import ApiTyping from '../../VPComponents/vp-api-typing.vue';
import i18n from '../../locale';

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx);
    ctx.app.use(Antd);
    ctx.app.use(HeUI);
    ctx.app.component('ApiTyping', ApiTyping);
    ctx.app.use(i18n);
  },
};
