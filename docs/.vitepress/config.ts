import { mdPlugin } from './config/plugins';

export default {
  title: 'He3SDK',
  description: 'Component from He3 help you create your own plugin fast',
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide/index.md' },
      { text: 'Components', link: '/components/index.md' },
      { text: 'API', link: '/api/He3Api.md' },
      { text: 'Changelog', link: 'https://he3.app/' },
    ],
    sidebar: {
      '/guide': [
        {
          text: 'introduce',
          // items: [{ text: 'what is He3?', link: '/components/CodeEditor.md' }],
        },
      ],
      '/components/': [
        {
          text: '通用',
          items: [
            { text: 'Button', link: '/components/Button.md' },
            { text: 'Icon', link: '/components/Icon.md' },
            {
              text: 'Layout',
              link: '/components/Layout.md',
            },
          ],
        },
        {
          text: '数据录入',
          items: [
            { text: 'CodeEditor', link: '/components/CodeEditor.md' },
            { text: 'HighlightInput', link: '/components/HighlightInput.md' },
            { text: 'ColorPicker', link: '/components/ColorPicker.md' },
            { text: 'ColorInput', link: '/components/ColorInput.md' },
            { text: 'ImagePicker', link: '/components/ImagePicker.md' },
            { text: 'KVInput', link: '/components/KVInput.md' },
            { text: 'MultilineInput', link: '/components/MultilineInput.md' },
            { text: 'Transform', link: '/components/Transform.md' },
          ],
        },
        {
          text: '数据展示',
          items: [
            { text: 'CodeResult', link: '/components/CodeResult.md' },
            { text: 'ImagePreview', link: '/components/ImagePreview.md' },
            { text: 'KVResult', link: '/components/KVResult.md' },
            { text: 'MultilineResult', link: '/components/MultilineResult.md' },
            {
              text: 'SinglelineResult',
              link: '/components/SinglelineResult.md',
            },
            { text: 'TerminalView', link: '/components/TerminalView.md' },
          ],
        },
        // {
        //   text: '主题',
        //   items: [
        //     { text: '主题和样式', link: '/components/CommonCss.md' },
        //   ],
        // },
      ],
      '/api': [
        {
          text: 'API',
          items: [{ text: 'He3 API', link: '/api/He3Api.md' }],
        },
      ],
    },
  },
  markdown: {
    config: (md) => mdPlugin(md),
  },
};
