import { defineConfig } from 'vite';
import UnoCSS from 'unocss/vite';
import { presetUno, transformerDirectives } from 'unocss';
import { presetScrollbar } from 'unocss-preset-scrollbar';

export default defineConfig({
  plugins: [
    UnoCSS({
      presets: [presetUno(), presetScrollbar()],
      transformers: [transformerDirectives()],
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {},
      },
    },
  },
});
