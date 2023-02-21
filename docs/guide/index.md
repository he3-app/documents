## 快速开始（开发版）

### Step 1: 克隆 He3 Client 底座代码

```
git clone git@github.com:h8r-dev/he3-client.git
cd he3-client
git checkout v3/main
```

### Step 2: 安装依赖和启动底座

```
npm install
npm run dev
```

### Step 3: 创建工具

![](/guide/1.png)

点击“创建”按钮进入 Portal 页面，登录后点击左侧“创建工具”菜单，按提示填写表单。

![](/guide/2.png)

提交后表单后点击“下载工程文件”。

![](/guide/3.png)

### Step 4: 安装工具依赖并开发

解压 zip 文件，进入工程目录，安装依赖。

```
npm install

npm run dev
```

打开 He3 Client，在“开发工具”菜单里查看编码效果。

![](/guide/5.png)

### Step 5: 发布工具

回到工具的工程目录下，通过 npm 来发布工具。

```
npm run publish
```

### Step 6: 使用工具

返回 Portal，打开“我的工具”菜单栏，点击工具详情，点击“打开工具”按钮。

![](/guide/use-tools.png)
