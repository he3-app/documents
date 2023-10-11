export default {
  label: "English",
  lang: "en",
  head: [["link", { rel: "shortcut icon", href: "/logo.png" }]],
  themeConfig: {
    nav: [
      { text: "Guide", link: "/guide/index.md" },
      { text: "Components", link: "/components/Button.md" },
      { text: "API", link: "/api/api.md" },
      {
        text: "Examples",
        link: "https://github.com/he3-app/tools-example",
      },
      { text: "Portal", link: "https://portal.he3app.com/" },
      { text: "Home", link: "https://he3.app/" },
    ],
    sidebar: {
      "/guide": [
        {
          text: "Create your first tool",
          link: "/guide/index.md",
        },
        {
          text: "Quick build",
          items: [
            {
              text: "Build transcoding Tool",
              link: "/guide/start/transform-example.md",
            },
            {
              text: "Build text conversion tool",
              link: "/guide/start/text-transform-example.md",
            },
            {
              text: "Use Ant Design Vue",
              link: "/guide/start/use-antdv.md",
            },
            {
              text: "Dark mode and built-in CSS variables",
              link: "/guide/start/dark-mode.md",
            },
          ],
        },
        {
          text: "Advanced",
          items: [
            {
              text: "Tool Development Config",
              link: "/guide/advance/config.md",
            },
            {
              text: "Tool internationalization",
              link: "/guide/advance/i18n.md",
            },
            {
              text: "Various form components",
              link: "/guide/advance/multi-form-component.md",
            },
            // {
            //   text: 'Batch tools',
            //   link: '/guide/advance/index.md',
            // },
          ],
        },
      ],
      "/components/": [
        {
          text: "Common",
          items: [
            { text: "Button", link: "/components/Button.md" },
            { text: "Icon", link: "/components/Icon.md" },
            {
              text: "Layout",
              link: "/components/Layout.md",
            },
          ],
        },
        {
          text: "Dedicated",
          items: [
            { text: "Transform", link: "/components/Transform.md" },
            { text: "TextTransform", link: "/components/TextTransform.md" },
          ],
        },
        {
          text: "Data Entry",
          items: [
            { text: "CodeEditor", link: "/components/CodeEditor.md" },
            { text: "ColorPicker", link: "/components/ColorPicker.md" },
            { text: "ColorInput", link: "/components/ColorInput.md" },
            { text: "Checkbox", link: "/components/Checkbox.md" },
            { text: "FileSizeView", link: "/components/FileSizeView.md" },
            {
              text: "HighlightInput",
              link: "/components/HighlightInput.md",
            },
            { text: "ImagePicker", link: "/components/ImagePicker.md" },
            { text: "Input", link: "/components/Input.md" },
            { text: "NumberInput", link: "/components/NumberInput.md" },
            { text: "KvInput", link: "/components/KvInput.md" },
            { text: "Select", link: "/components/Select.md" },
            { text: "Switch", link: "/components/Switch.md" },
            { text: "Radio", link: "/components/Radio.md" },
            {
              text: "MultilineInput",
              link: "/components/MultilineInput.md",
            },
          ],
        },
        {
          text: "Data Display",
          items: [
            { text: "Code", link: "/components/Code.md" },
            { text: "Kv", link: "/components/Kv.md" },
            { text: "Multiline", link: "/components/Multiline.md" },
            {
              text: "SingleLine",
              link: "/components/SingleLine.md",
            },
            { text: "TerminalView", link: "/components/TerminalView.md" },
          ],
        },
        // {
        //   text: '主题',
        //   items: [
        //     { text: '主题和样式', link: '/components/CommonCss.md' },
        //   ],
        // },
      ],
      "/api": [
        {
          text: "API",
          items: [{ text: "General Ability", link: "/api/api.md" }],
        },
        {
          text: "CLI",
          items: [
            { text: "Basic Ability", link: "/api/cli.md" },
            {
              text: "Advanced Ability",
              link: "/api/cli-advanced.md",
            },
          ],
        },
      ],
    },
  },
};
