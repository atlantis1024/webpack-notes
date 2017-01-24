# 01.try-cli

本例是 webpack 的第一个示例。

## 动机

本例展示了如何使用 webpack 命令行将源文件打包为 bundle 。

## 运行环境

> **注：**请先确保运行环境满足以下条件：
>
> - 已经安装了 [Node.js](https://nodejs.org/en/download/) （建议使用最新版），Node.js 自带了软件包管理器 npm 。
> - 使用 npm 在全局安装了 webpack

## 使用方法

执行下面的命令：

```sh
webpack ./app.js app.bundle.js
```

当前目录会生成 `app.bundle.js` 文件。

现在，你的 bundle 已经可以运行了。运行以下命令看看结果吧：

```sh
node app.bundle.js
```


