[参考文档](https://www.jianshu.com/p/db3ee301af47)

## 全局安装
    npm i -g lerna
    

## 初始化
   lerna init
   // TODO 还没看懂有啥用
    可单独发布 lerna init --independent

## 全部安装
    lerna add lodash 

## 安装到某个包里
    lerna add lodash --scope=moduleA

## 给 moduleA 移除一个依赖 lodash
    lerna exec --scope=moduleA  npm uninstall lodash

## 批量运行 npm script 脚本
    lerna run test # 运行所有包的 test 命令
    lerna run --scope my-component test # 运行 my-component 模块下的 test
    lerna run --parallel watch # 观看所有包并在更改时发报，流式处理前缀输出

##  抽离公共模块 
    lerna bootstrap --hoist  // 应该在子package.json中写依赖，然后用 --hoist提取出来

## 更新公共依赖 （不需要到各个子package中升级）
npm install --save-dev lerna-update-wizard
./node_modules/.bin/lernaupdate

## 全包发布
    lerna publish