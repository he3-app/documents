# 工具开发配置文件

## package.json

阅读本文你可以了解到工具模板文件中的 `package.json` 相关字段，以便你更好地进行工具开发调试

### scripts

#### npm run dev

在保证 He3 app 底座启动的前提下运行 `dev` 命令，可以构建你的工具并运行在底座上。当你更改 src 下的工具代码时，该命令会进行热重载并更新底座上的工具视图。

#### npm run publish

在工具开发完成之后，你可以运行 `publish` 命令将你的工具推送至我们的服务器上供其他用户安装使用，推送成功的前提是你的底座成功登录账号。

#### npm run version

在工具发布之后，如果涉及到版本更新或是补丁修复，你可以使用该命令来更新你的版本号，以便工具能够成功推送更新

-p：补丁
-i：小版本更新
-a：大版本更新

### he3

he3 字段为 he3 工具的一个信息的具体配置

```json
{
  "id": "sql-to-json-query", // 工具id
  "name": "SQL to JSON Query", // 工具名称
  "icon": "thunderbolt-outlined", // 工具Icon
  "version": "1.0.0", // 版本号
  "isPublic": true, // 是否公开
  "repository": "", // 仓库地址
  "category": [
    "programming"
  ], // 工具分类
  "description": "SQL to ES Query", // 工具描述
  "keywords": [
    "query",
    "sql",
    "json"
  ], // 关键词，设置关键词能够提高搜索准确度
  "relatedToolId": [] // 关联工具，被关联到的工具会出现在工具右侧关联工具列表中
}
```
