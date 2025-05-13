# AMD

## 核心原理

AMD 通过动态脚本注入 + 事件监听 + 依赖缓存实现了高效的异步模块加载：

- 动态创建 <script>：避免阻塞页面渲染。
- 事件监听：通过 onload 确保依赖按序加载。
- 依赖图管理：跟踪模块状态，避免重复加载。
- 回调机制：所有依赖就绪后执行模块定义。

## requirejs 实现

### define 函数：定义模块

- define(id?: string, dependencies?: string[], factory: Function | Object)

### require 函数：加载模块

require(dependencies: string[], callback: Function)

### require.config：配置加载器

require.config(config: Object)

### require.toUrl：获取模块路径

require.toUrl(moduleName: string)

## doc

[amdjs-api](https://github.com/amdjs/amdjs-api)
[RequireJS](https://requirejs.org/docs/whyamd.html)
