import DefaultTheme from 'vitepress/theme';
import HeUI from '@he3-kit/ui/dist/index.umd.cjs';
import '@he3-kit/ui/dist/style.css';
import Antd from 'ant-design-vue';
import i18n from '../../locale';
import './style/global.less';
import { globals } from '../../VPComponents';
import { Demos } from '../../demos/index';
import 'prismjs/themes/prism-tomorrow.min.css';
import { setHe3 } from './utils/he3API';
import 'uno.css';

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    setHe3();
    ctx.app.use(Antd);
    ctx.app.use(HeUI);
    ctx.app.use(i18n);
    globals.forEach(([name, Comp]) => {
      ctx.app.component(name, Comp);
    });
    Demos.forEach(([name, Comp]) => {
      ctx.app.component(name, Comp);
    });
    DefaultTheme.enhanceApp(ctx);
  },
};
