# 插件

插件所提供的功能通常与 webpack 中的 bundle 有关。例如： [BellOnBundlerErrorPlugin](https://github.com/senotrusov/bell-on-bundler-error-plugin) 插件可以在你的 bundle 构建的过程中通知发生的错误。

## 内置插件

通过使用 webpack 配置中的 plugins 属性，将插件包含在模块中。

```javascript
// webpack should be in the node_modules directory, install if not.
var webpack = require("webpack");

module.exports = {
    plugins: [
        new webpack.ResolverPlugin([
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
        ], ["normal", "loader"])
    ]
};
```

## 其它插件

非内置插件可以通过npm来安装：

```sh
npm install component-webpack-plugin
```

安装后，就可以按如下方式来使用：

```javascript
var ComponentPlugin = require("component-webpack-plugin");
module.exports = {
    plugins: [
        new ComponentPlugin()
    ]
}
```

通过npm 安装第三方插件时，建议使用这个工具： [https://www.npmjs.com/package/webpack-load-plugins](https://www.npmjs.com/package/webpack-load-plugins)

它可以检查所有安装的第三方插件，并在你真正需要用到插件时，以 lazyloads 方式加载。

## 引申阅读

- [list of plugins](http://webpack.github.io/docs/list-of-plugins.html)