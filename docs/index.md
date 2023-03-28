# Create your first tool

## Step 1: Install he 3 client

If you have already installed the he 3 client, please ignore this step. If not, you can go to the official website to download「[https://he3.app/](https://he3.app/)」

![step1](/guide/1-1.png)

## Step 2: build tool

Open the he 3 client and enter the development tool menu:

![step2](/guide/1.png)

After clicking the "Create" button, the browser portal website will open. After logging in, click the "Create Tools" menu on the left, and fill in the form according to the prompts.

![step2](/guide/2.png)

After submitting the form, click 「"Download Project File"」.

![step2](/guide/3.png)

### Step 3: Install dependencies and enter development

Unzip the zip file, enter the project directory, and install dependencies.

```shell
npm install

npm run dev
```

Open the he 3 client and check it in the 「"Developer"」 menu.

![step3](/guide/1-2.png)

### Step 4: publishing tool

Go back to the project directory of the tool and publish the tool through npm.

```shell
npm run publish
```

### Step 5: use tools

Return to the portal, open the My Tools menu bar, click Tool Details, and click the Open Tool button.

![step5](/guide/use-tools.png)
