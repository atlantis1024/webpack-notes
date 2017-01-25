# 02.try-configuraion

本例是 `01.try-cli` 的下一个示例。最终输出的 bundle 与  `01.try-cli`  相同。

## 动机

本例展示了如何使用 webpack 的配置文件将源文件打包为 bundle 。

## 运行环境

> **注：**请先确保运行环境满足以下条件：
>
> - 已经安装了 [Node.js](https://nodejs.org/en/download/) （建议使用最新版），Node.js 自带了软件包管理器 npm 。
> - 使用 npm 在全局安装了 webpack

## 使用方法

本例相对于  `01.try-cli` ，添加了一个 `webpack.config.js` 文件，这是 webpack 的配置文件。

执行下面的命令：

```sh
webpack
```

当前目录会生成 `app.bundle.js` 文件。

现在，你的 bundle 已经可以运行了。运行以下命令看看结果吧：

```sh
node app.bundle.js
```


