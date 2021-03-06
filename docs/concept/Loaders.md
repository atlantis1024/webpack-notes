# Loaders

## 什么是加载器(Loader)

Webpack 本身只能处理 JavaScript 模块，如果要处理其他类型的文件，就需要使用 loader 进行转换。

Loader 可以理解为是模块和资源的转换器，它本身是一个函数，接受源文件作为参数，返回转换的结果。这样，我们就可以通过 `require` 来加载任何类型的模块或文件，比如 CoffeeScript、 JSX、 LESS 或图片。

### 加载器的特征

- Loader 可以通过管道方式链式调用，每个 loader 可以把资源转换成任意格式并传递给下一个 loader ，但是最后一个 loader 必须返回 JavaScript。
- Loader 可以同步或异步执行。
- Loader 运行在 node.js 环境中，所以可以做任何可能的事情。
- Loader 可以接受参数，以此来传递配置项给 loader。
- Loader 可以通过文件扩展名（或正则表达式）绑定给不同类型的文件。
- Loader 可以通过 `npm` 发布和安装。
- 除了通过 `package.json` 的 `main` 指定，通常的模块也可以导出一个 loader 来使用。
- Loader 可以访问配置。
- 插件可以让 loader 拥有更多特性。
- Loader 可以分发出附加的任意文件。

## 解析加载器

Loader 本身也是运行在 node.js 环境中的 JavaScript 模块，它通常会返回一个函数。大多数情况下，我们通过 npm 来管理 loader，但是你也可以在项目中自己写 loader 模块。

### 引用加载器

按照惯例，而非必须，加载器 一般以 `xxx-loader` 的方式命名，`xxx` 代表了这个 loader 要做的转换功能，比如 `json-loader`。

你可以通过使用加载器全名（实际名）来引用指定的加载器的时候（例： `json-loader`），或者使用缩略名（例： `json`）。

加载器的命名规则和搜索优先级顺序在 webpack 配置API的 `resolveLoader.moduleTemplates` 中定义。

装载器的命名规则可能有用，特别是在 `require` 语句中引用它们时。见下面的**用法**一节：

### 安装 loader

安装加载器，只需执行如下命令：

```sh
# 添加依赖到 dependencies
npm install xxx-loader --save
# 添加依赖到 devDependencies
npm install xxx-loader --save-dev
```

## 用法

有多种方式在你的app中使用加载器：

- 使用 `require` 来声明
- 通过配置文件（webpack.config.js）进行配置
- 通过命令行进行配置

### require 方式

> **注：**官方建议避免使用这种方式。
>
> 个人理解：这种方式会使得绑定加载器的位置变得分散，无法集中式管理。容易埋坑。

可以使用 require 声明来指定加载器。只需要用 `!` 将加载器和资源分隔开。每个部分相对于当前目录解析。

配置的任意加载器都可以使用这种方式覆盖。

```javascript
require("./loader!./dir/file.txt");
// => uses the file "loader.js" in the current directory to transform
//    "file.txt" in the folder "dir".

require("jade!./template.jade");
// => uses the "jade-loader" (that is installed from npm to "node_modules")
//    to transform the file "template.jade"
//    If configuration has some transforms bound to the file, they will still be applied.

require("!style!css!less!bootstrap/less/bootstrap.less");
// => the file "bootstrap.less" in the folder "less" in the "bootstrap"
//    module (that is installed from github to "node_modules") is
//    transformed by the "less-loader". The result is transformed by the
//    "css-loader" and then by the "style-loader".
//    If configuration has some transforms bound to the file, they will not be applied.
```

> **注：**当使用链式加载器时，它们的应用顺序是从右到左。
>

### 配置文件方式

你可以在配置文件中使用如下的表达式规则来绑定加载器：

```javascript
{
    module: {
        loaders: [
            { test: /\.jade$/, loader: "jade" },
            // => "jade" loader is used for ".jade" files

            { test: /\.css$/, loader: "style!css" },
            // => "style" and "css" loader is used for ".css" files
            // Alternative syntax:
            { test: /\.css$/, loaders: ["style", "css"] },
        ]
    }
}
```

### 命令行方式

你可以通过命令行方式将加载器和一个扩展进行绑定：

```sh
webpack --module-bind jade --module-bind 'css=style!css'
```

上面的例子将jade加载器和".jade"文件绑定；将style加载器和“.css”文件绑定。

### 查询参数

加载器可以通过查询字符串传递查询参数（就像在web中）。查询字符串通过 `?` 附加到加载器。例：`url-loader？mimetype = image / png`。

注：查询字符串的格式取决于加载程序。请参阅装入程序文档中的格式。大多数加载器的参数形式是普通查询格式（`? key = value＆key2 = value2`）或 JSON对象（`?{“key”：“value”，“key2”：“value2”}`）。

**`require` 声明**

```javascript
require("url-loader?mimetype=image/png!./file.png");
```

**Configuration**

```javascript
{ test: /\.png$/, loader: "url-loader?mimetype=image/png" }
```

或

```javascript
{
    test: /\.png$/,
    loader: "url-loader",
    query: { mimetype: "image/png" }
}
```

**CLI**

```sh
webpack --module-bind "png=url-loader?mimetype=image/png"
```
