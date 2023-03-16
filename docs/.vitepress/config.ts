import { mdPlugin } from './config/plugins';

export default {
  title: 'He3SDK',
  description: 'Component from He3 help you create your own plugin fast',
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide/index.md' },
      { text: 'Components', link: '/components/index.md' },
      { text: 'API', link: '/api/api.md' },
      { text: 'Official', link: 'https://he3.app/' },
    ],
    sidebar: {
      '/guide': [
        {
          text: '入门',
        },
        {
          text: '高级',
          items: [
            {
              text: '多种形式组件',
              link: '/guide/advance/multi-form-component.md',
            },
            {
              text: '批量工具',
              link: '/guide/advance/index.md',
            },
            {
              text: '工具元信息国际化',
              link: '/guide/advance/i18n.md',
            },
          ],
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
          text: '专用',
          items: [
            { text: 'Transform', link: '/components/Transform.md' },
            { text: 'TextTransform', link: '/components/TextTransform.md' },
          ],
        },
        {
          text: '数据录入',
          items: [
            { text: 'CodeEditor', link: '/components/CodeEditor.md' },
            { text: 'HighlightInput', link: '/components/HighlightInput.md' },
            { text: 'ColorPicker', link: '/components/ColorPicker.md' },
            { text: 'ColorInput', link: '/components/ColorInput.md' },
            { text: 'FileSizeView', link: '/components/FileSizeView.md' },
            { text: 'ImagePicker', link: '/components/ImagePicker.md' },
            { text: 'Input', link: '/components/Input.md' },
            { text: 'NumberInput', link: '/components/NumberInput.md' },
            { text: 'KvInput', link: '/components/KvInput.md' },
            { text: 'MultilineInput', link: '/components/MultilineInput.md' },
          ],
        },
        {
          text: '数据展示',
          items: [
            { text: 'Code', link: '/components/Code.md' },
            { text: 'Kv', link: '/components/Kv.md' },
            { text: 'Multiline', link: '/components/Multiline.md' },
            {
              text: 'SingleLine',
              link: '/components/SingleLine.md',
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
          items: [{ text: '通用能力', link: '/api/api.md' }],
        },
        {
          text: 'CLI',
          items: [
            { text: '基本能力', link: '/api/cli.md' },
            {
              text: '高级能力',
              link: '/api/cli-advanced.md',
            },
          ],
        },
      ],
    },
  },
  markdown: {
    config: (md) => mdPlugin(md),
  },
};
