# Tool Development Config

## package.json

After reading this article, you can learn about the `package.json` related fields in the tool template file, so that you can better develop and debug tools

### scripts

#### npm run dev

Run the `dev` command with the He3 app base started to build your tool and run it on the base. When you change the tool code under src, the command does a hot reload and updates the tool view on the dock.

#### npm run publish

After the tool development is complete, you can run the `publish` command to push your tool to our server for other users to install and use. The prerequisite for successful push is that your base has successfully logged in to your account.

#### npm run version

After the tool is released, if it involves version update or patch repair, you can use this command to update your version number so that the tool can successfully push the update

-p：patch
-i：Minor version update
-a：Major version update

### he3

The He3 field is the specific configuration of an information of the He3 tool

```json
{
  "id": "sql-to-json-query", // Tool id
  "name": "SQL to JSON Query", // Tool name 
  "icon": "thunderbolt-outlined", // Tool Icon
  "version": "1.0.0", // version number
  "isPublic": true, // is public?
  "repository": "", // repository address
  "category": [
    "programming"
  ], // category
  "description": "SQL to ES Query", // tool description
  "keywords": [
    "query",
    "sql",
    "json"
  ], // Keywords, setting keywords can improve search accuracy
  "relatedToolId": [] // related tool, the related tool will appear in the related tool list on the right side of the tool
}
```
