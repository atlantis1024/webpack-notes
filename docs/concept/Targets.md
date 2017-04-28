# Targets

Because JavaScript can be written for both server and browser, webpack offers multiple deployment *targets* that you can set in your webpack [configuration](https://webpack.js.org/configuration).

因为 JavaScript 既可以在服务端运行，也可以在浏览器运行，所以，webpack 允许用户在 webpack 配置文件部署多个目标（`target`）。

> webpack 的 `target` 属性不要与 `output.libraryTarget` 属性混淆。更多信息参考 [our guide](https://webpack.js.org/concepts/output) 的 `output` 属性. 

## Usage

To set the `target` property, you simply set the target value in your webpack config:

**webpack.config.js**

```javascript
module.exports = {
  target: 'node'
};
```

上面的例子中，webpack 将会按照类似 Node.js 环境一样去进行编译（使用Node.js的 `require` 方法去加载模块，不接触任何内置的模块，如`fs`或`path`）。

webpack支持的目标环境可以参考： [targets are available](https://webpack.js.org/configuration/target)

## Multiple Targets

虽然webpack不支持将多个字符串传递给target属性，但您可以通过捆绑两个单独的配置来创建一个同构库：

**webpack.config.js**

```javascript
var path = require('path');
var serverConfig = {
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'lib.node.js'
  }
  //…
};

var clientConfig = {
  target: 'web', // <=== can be omitted as default is 'web'
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'lib.js'
  }
  //…
};

module.exports = [ serverConfig, clientConfig ];
```

上面的例子会在你项目的 `dist` 目录下创建 `lib.js` 和 `lib.node.js` 文件。

## Resources

从上面的选项可以看出，您可以选择多个不同的部署目标。以下是可以参考的示例和资源列表。

- **compare-webpack-target-bundles**: 用于测试和查看不同Webpack目标的极好资源。也可以生成很好的bug报告。
- **Build to both electron.js and browser targets using webpack**: 一个在电子和网络上使用多个部署目标来构建的示例。
