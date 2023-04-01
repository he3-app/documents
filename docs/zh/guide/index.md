# 创建你的第一个工具

## Step 1: 安装客户端

如果你已经安装了最新的 He3 客户端，请忽略。如果没有，请前往 [https://he3.app/](https://he3.app/) 下载。

> He3 客户端版本要求：v1.3.0+

## Step 2: 登录客户端

打开 He3 客户端，在右上角选择登录账户。

![](/guide/1.png)

### Step 3: 创建工具

有两种方法可以创建工具：

- Fork 示例仓库
- 通过 Portal 表单创建

#### Option1: Fork 示例仓库

Fork [https://github.com/he3-app/he3-tool-demo](https://github.com/he3-app/he3-tool-demo) 仓库，并将其克隆到本地。

#### Option2: 通过 Portal 表单创建

Open [https://portal.he3app.com/create-tools](https://portal.he3app.com/create-tools)，在表单中填写工具信息，然后点击 "Download Tool Template" 下载工具模板。

![](/guide/2.png)

### Step 4: 开发工具

进入项目目录，安装依赖项并开发工具。

```shell
npm install
npm run dev
```

打开 He3 客户端并查看正在开发中的工具。

![step3](/guide/3.png)

### Step 5: 发布工具

完成工具开发后，您可以将其发布到 He3 商店。

> 在发布前，He3 还可以自动帮你处理元信息的国际化，参考[国际化](./advance/i18n.md)

您可以通过运行以下命令发布工具。

```shell
npm run publish
```

发布后，您将获得工具的 URL 链接，可以通过打开它使用工具或分享。

此外，您可以在 [My tools](https://portal.he3app.com/my-tools) 菜单栏以及 [He3 Store](https://portal.he3app.com/tools?page=1)找到你发布的工具。
