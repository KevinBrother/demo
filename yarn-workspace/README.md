[参考链接](https://www.jianshu.com/p/990afa30b6fe)

## yarn workspaces 只需在根package.json中配置下面两个路径即可

"workspaces": ["project1", "project2"] // 也可以使用通配符设置为 ["project*"]
"workspaces": ["packages/*"] 的目录结构，这与 Lerna 的目录结构一致。

{
    "private": true,
    "workspaces": ["packages/*"]
}

##  不受 Yarn Workspace 管理，只需在此 workspace 目录下添加 .yarnrc 文件，并添加如下内容禁用即可：
workspaces-experimental false


## 当子模块的依赖版本不一样时，才会在子模块中产生node_modules文件夹

## 针对特定的 workspace 执行指定的 <command>，如：
$ yarn workspace project1 add vue --dev 《 往 project1 添加 vue 开发依赖
$ yarn workspace project1 remove vue    《 从 project1 移除 vue 依赖