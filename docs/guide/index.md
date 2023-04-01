# Create your first tool

## Step 1: Install He3 client

If you have already installed the He3 client, please ignore this step. If not, you can go to the official website to download [https://he3.app/](https://he3.app/)

## Step 2: Login He3 client

Open the He3 client, and select the login account in the top right corner.

![](/guide/1.png)

### Step 3: Create a tool

There are two ways to create a tool:

- Fork the Demo repository
- Create through portal form

#### Option1: Fork demo repository

Fork [https://github.com/he3-app/he3-tool-demo](https://github.com/he3-app/he3-tool-demo) repository, and clone it to your local.

#### Option2: Create through portal

Open [https://portal.he3app.com/create-tools](https://portal.he3app.com/create-tools), Fill in the tool information in the form, and click "Download Tool Template" to download the tool template.

![](/guide/2.png)

### Step 4: Develop tool

Enter the project directory, install dependencies and develop tool with hot reload.

::: Notice
**npm** command needs to be executed in **node** environment, please click [nodejs](https://nodejs.org/) to install
:::

```shell
npm install
npm run dev
```

Then, open the He3 client and check it out.

![step3](/guide/3.png)

### Step 5: Publish tool

Once you are finished developing the tool, you can publish it to the He3 Store.

> Before publishing, He3 can also automatically help you handle the internationalization of metadata. Refer to [Internationalization](./advance/i18n.md)

You can publish tool by running the following command.

```shell
npm run publish
```

After publishing, you will get the tool's URL link, which you can use by opening tool or share with others.

In addition, You can see the tool in [My tools](https://portal.he3app.com/my-tools) menu and [He3 Store](https://portal.he3app.com/tools?page=1)
