export default {
  title: 'He3SDK',
  description: 'Component from He3 help you create your own plugin fast',
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide/index.md' },
      { text: 'Components', link: '/components/index.md' },
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
          ],
        },
        {
          text: '数据展示',
          items: [
            { text: 'CodeResult', link: '/components/CodeResult.md' },
            { text: 'ImagePreview', link: '/components/ImagePreview.md' },
          ],
        },
        {
          text: '通用 Api',
          items: [
            { text: 'He3 Api', link: '/components/He3Api.md' },
          ],
        },
      ],
    },
  },
}
