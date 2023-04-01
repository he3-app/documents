import { mdPlugin } from "./config/plugins";

export default {
  title: "He3 Documents",
  description: "Component from He3 help you create your own plugin fast",
  locales: {
    root: {
      label: "English",
      lang: "en",
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
              text: "advanced",
              items: [
                {
<<<<<<< HEAD
                  text: 'Tool internationalization',
                  link: '/guide/advance/i18n.md',
                },
                {
                  text: 'Various form components',
                  link: '/guide/advance/multi-form-component.md',
=======
                  text: "Various form components",
                  link: "/guide/advance/multi-form-component.md",
>>>>>>> ce65239ff8b1b4bd6fffa58d5ba7fe005f3a0d03
                },
                // {
                //   text: 'Batch tools',
                //   link: '/guide/advance/index.md',
                // },
<<<<<<< HEAD
=======
                {
                  text: "Tool meta information internationalization",
                  link: "/guide/advance/i18n.md",
                },
>>>>>>> ce65239ff8b1b4bd6fffa58d5ba7fe005f3a0d03
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
                {
                  text: "HighlightInput",
                  link: "/components/HighlightInput.md",
                },
                { text: "ColorPicker", link: "/components/ColorPicker.md" },
                { text: "ColorInput", link: "/components/ColorInput.md" },
                { text: "FileSizeView", link: "/components/FileSizeView.md" },
                { text: "ImagePicker", link: "/components/ImagePicker.md" },
                { text: "Input", link: "/components/Input.md" },
                { text: "NumberInput", link: "/components/NumberInput.md" },
                { text: "KvInput", link: "/components/KvInput.md" },
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
    },
    zh: {
      label: "简体中文",
      lang: "zh",
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
              text: "高级",
              items: [
                {
<<<<<<< HEAD
                  text: '工具国际化',
                  link: '/zh/guide/advance/i18n.md',
                },
                {
                  text: '多种形式组件',
                  link: '/zh/guide/advance/multi-form-component.md',
=======
                  text: "多种形式组件",
                  link: "/zh/guide/advance/multi-form-component.md",
>>>>>>> ce65239ff8b1b4bd6fffa58d5ba7fe005f3a0d03
                },
                // {
                //   text: '批量工具',
                //   link: '/zh/guide/advance/index.md',
                // },
<<<<<<< HEAD
=======
                {
                  text: "工具元信息国际化",
                  link: "/zh/guide/advance/i18n.md",
                },
>>>>>>> ce65239ff8b1b4bd6fffa58d5ba7fe005f3a0d03
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
    },
  },

  markdown: {
    config: (md) => mdPlugin(md),
  },
};
