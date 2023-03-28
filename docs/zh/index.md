# 创建你的第一个工具

## Step 1: 安装 He3 客户端

如果你已经安装 He3 客户端，请忽略此步骤。如果还没有，可以到官网「[https://he3.app/](https://he3.app/)」下载。

![](/guide/1-1.png)

## Step 2: 创建工具

打开 He3 客户端，进入到开发工具菜单：

![](/guide/1.png)

点击「创建」按钮后，会打开浏览器 Portal 网站，登录后点击左侧「创建工具」菜单，按提示填写表单。

![](/guide/2.png)

提交后表单后点击「下载工程文件」。

![](/guide/3.png)

### Step 3: 安装依赖并进入开发

解压 zip 文件，进入工程目录，安装依赖。

```shell
npm install

npm run dev
```

打开 He3 客户端，在「开发工具」菜单里查看。

![](/guide/1-2.png)

### Step 4: 发布工具

回到工具的工程目录下，通过 npm 来发布工具。

```shell
npm run publish
```

### Step 5: 使用工具

返回 Portal，打开“我的工具”菜单栏，点击工具详情，点击“打开工具”按钮。

![](/guide/use-tools.png)
