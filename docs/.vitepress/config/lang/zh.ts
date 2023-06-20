export default {
  label: "简体中文",
  lang: "zh",
  head: [["link", { rel: "shortcut icon", href: "/logo.png" }]],
  themeConfig: {
    nav: [
      { text: "引导", link: "/zh/guide/advance/multi-form-component.md" },
      { text: "组件", link: "/zh/components/Button.md" },
      { text: "API", link: "/zh/api/api.md" },
      {
        text: "代码示例",
        link: "https://github.com/he3-app/tools-example",
      },
      { text: "Portal", link: "https://portal.he3app.com/" },
      { text: "Home", link: "https://he3.app/" },
    ],
    sidebar: {
      "/zh/guide": [
        {
          text: "构建你的第一个工具",
          link: "/zh/guide/index.md",
        },
        {
          text: "快速构建",
          items: [
            {
              text: "构建代码转换工具",
              link: "/zh/guide/start/transform-example.md",
            },
            {
              text: "构建文本转换工具",
              link: "/zh/guide/start/text-transform-example.md",
            },
            {
              text: "使用 Ant Design Vue",
              link: "/zh//guide/start/use-antdv.md",
            },
          ],
        },
        {
          text: "高级",
          items: [
            {
              text: "工具开发配置",
              link: "/zh/guide/advance/config.md",
            },
            {
              text: "工具国际化",
              link: "/zh/guide/advance/i18n.md",
            },
            {
              text: "多种形式组件",
              link: "/zh/guide/advance/multi-form-component.md",
            },
            {
              text: "批量工具",
              link: "/zh/guide/advance/batch.md",
            },
          ],
        },
      ],
      "/zh/components/": [
        {
          text: "通用",
          items: [
            { text: "Button 按钮", link: "/zh/components/Button.md" },
            { text: "Icon 图标", link: "/zh/components/Icon.md" },
            {
              text: "Layout 布局",
              link: "/zh/components/Layout.md",
            },
          ],
        },
        {
          text: "专用",
          items: [
            {
              text: "Transform 代码转换",
              link: "/zh/components/Transform.md",
            },
            {
              text: "TextTransform 文本转换",
              link: "/zh/components/TextTransform.md",
            },
            {
              text: "FileTransform 文件转换",
              link: "/components/FileTransform.md",
            },
          ],
        },
        {
          text: "数据录入",
          items: [
            {
              text: "CodeEditor 代码编辑器",
              link: "/zh/components/CodeEditor.md",
            },
            {
              text: "HighlightInput 高亮编辑器",
              link: "/zh/components/HighlightInput.md",
            },
            {
              text: "ColorPicker 取色器",
              link: "/zh/components/ColorPicker.md",
            },
            {
              text: "ColorInput 颜色输入",
              link: "/zh/components/ColorInput.md",
            },
            { text: "Checkbox 多选框", link: "/zh/components/Checkbox.md" },
            {
              text: "FileSizeView 文件大小",
              link: "/zh/components/FileSizeView.md",
            },
            {
              text: "ImagePicker 图片选择器",
              link: "/zh/components/ImagePicker.md",
            },
            { text: "Input 输入框", link: "/zh/components/Input.md" },
            {
              text: "NumberInput 数字输入框",
              link: "/zh/components/NumberInput.md",
            },
            {
              text: "KvInput 键值对输入框",
              link: "/zh/components/KvInput.md",
            },
            {
              text: "MultilineInput 多行输入框",
              link: "/zh/components/MultilineInput.md",
            },
            { text: "Select 选择器", link: "/zh/components/Select.md" },
            { text: "Switch 开关", link: "/zh/components/Switch.md" },
            { text: "Radio 单选框", link: "/zh/components/Radio.md" },
          ],
        },
        {
          text: "数据展示",
          items: [
            { text: "Code 代码展示", link: "/zh/components/Code.md" },
            { text: "Kv 键值对展示", link: "/zh/components/Kv.md" },
            {
              text: "Multiline 多行文本展示",
              link: "/zh/components/Multiline.md",
            },
            {
              text: "SingleLine 单行文本展示",
              link: "/zh/components/SingleLine.md",
            },
            {
              text: "TerminalView 终端文字展示",
              link: "/zh/components/TerminalView.md",
            },
          ],
        },
        // {
        //   text: '主题',
        //   items: [
        //     { text: '主题和样式', link: '/components/CommonCss.md' },
        //   ],
        // },
      ],
      "/zh/api": [
        {
          text: "API",
          items: [{ text: "通用能力", link: "/zh/api/api.md" }],
        },
        {
          text: "CLI",
          items: [
            { text: "基本能力", link: "/zh/api/cli.md" },
            {
              text: "高级能力",
              link: "/zh/api/cli-advanced.md",
            },
          ],
        },
      ],
    },
  },
};
