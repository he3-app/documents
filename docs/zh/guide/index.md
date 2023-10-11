# 创建你的第一个工具

## Step 1: 安装客户端

如果你已经安装了最新的 He3 客户端，请忽略。如果没有，请前往 [https://he3app.com](https://he3app.com) 下载。

## Step 2: 登录客户端

打开 He3 客户端，在右上角选择登录账户。

![](/guide/login.png)

## Step 3: 创建工具

::: tip 注意
工具的开发依赖 node 和 npm 环境，安装请点击 [nodejs](https://nodejs.org/)
:::

有两种方法可以创建工具：

- Fork 示例仓库
- 通过 Portal 表单创建

#### Option1: Fork 示例仓库

Fork [https://github.com/he3-app/he3-tool-demo](https://github.com/he3-app/he3-tool-demo) 仓库，并将其克隆到本地。

修改 **package.json** 中的工具元信息

* name 定义工具的名称，请定义为英文
* id 定义工具的唯一标识符，全局唯一的，如果是重复的将无法发布，推荐定义一个语义化的id，比如： json-diff
* isPublic: 定义工具的可见性，如果是私有的，只有开发者可以看到，如果是公开的，经过官方审核后任何用户都可用
* description: 工具的描述信息，尽可能一句话简短的描述工具的功能，定义为英文
* version: 工具的版本，每次publish需要升级版本，否则无法发布
* category：工具的分类，目前支持： json、yaml、datetime、text、image、color、encode、cryptography、network、programming、web、math、miscellaneous、media、ai
* keywords：工具的关键字，用于方便搜索工具，定义为英文

工具元信息定义好后，执行 npm install 下载依赖，执行 npm run i18，在根目录生成 mate.lodal.json，这是工具的元信息的国际化文件，可以根据需要修改。

#### Option2: 通过 Portal 表单创建

打开： [https://portal.he3app.com/createTool](https://portal.he3app.com/createTool)，在表单中填写工具信息，然后点击 "Download Tool Template" 下载工具模板。

![](/guide/2.png)

> 同时，我们准备了一部分开源工具供你参考：[tools-example](https://github.com/he3-app/tools-example)

## Step 4: 开发工具

进入在步骤 3 下载的工具目录，安装依赖项并开发工具。

```shell
npm run dev
```

打开 He3 客户端并查看正在开发中的工具。

![step3](/guide/dev.png)

## Step 5: 发布工具

完成工具开发后，通过运行以下命令发布该工具

```shell
npm run publish
```

发布后，您将获得工具的 URL 链接，可以通过打开它使用工具或分享。

此外，您可以在 [My tools](https://portal.he3app.com/myTool) 菜单栏以及 [He3 Store](https://portal.he3app.com) 找到你发布的工具。
