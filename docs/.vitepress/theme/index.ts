import DefaultTheme from 'vitepress/theme';
import HeUI from '@he3-kit/ui';
import '@he3-kit/ui/dist/style.css';

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx);
    ctx.app.use(HeUI);
  },
};
