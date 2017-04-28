# Output

`output` 是影响编译输出的属性。`output` 属性告诉 webpack 如何将编译文件写入磁盘。注意，在配置文件中，虽然允许多个 `entry` 属性，但是 `output` 属性却只能有一个。

## 使用

webpack 配置中的 `output` 属性的最低要求是将其值设置为一个对象，包括以下两件事情：

`filename` 表示推荐的编译文件名，如：`// main.js || bundle.js || index.js`

[`output.path`](https://webpack.js.org/concepts/output/#output-path) 表示webpack要将资源绑定为一个文件时，用户选择的绝对路径。

**webpack.config.js**

```javascript
const config = {
  output: {
    filename: 'bundle.js',
    path: '/home/proj/public/assets'
  }
};

module.exports = config;
```

## 选项

下面是允许传递给 `output` 属性的数据值清单：

### `output.chunkFilename`

The filename of non-entry chunks as a relative path inside the `output.path` directory.

`[id]` is replaced by the id of the chunk.

`[name]` is replaced by the name of the chunk (or with the id when the chunk has no name).

`[hash]` is replaced by the hash of the compilation.

`[chunkhash]` is replaced by the hash of the chunk.

### `output.crossOriginLoading`

此选项允许交叉（cross-origin）加载块。

Possible values are:

`false` - Disable cross-origin loading.

`"anonymous"` - Cross-origin loading is enabled. When using `anonymous` no credentials will be sent with the request.

`"use-credentials"` - Cross-origin loading is enabled and credentials will be sent with the request.

For more information on cross-origin loading see [MDN](https://developer.mozilla.org/en/docs/Web/HTML/Element/script#attr-crossorigin)

> Default: `false`
>
> see also [library](https://webpack.js.org/guides/author-libraries/)
>
> see also [Development Tools](https://webpack.js.org/guides/development/#choosing-a-tool)

### `output.devtoolLineToLine`

启用所有/指定模块的线对线映射模式。线对线映射模式使用简单的 SourceMap，其中生成的源的每一行都映射到原始源的同一行。这是一个性能优化。只有当您需要更好的性能的时候才需要使用它，并且要确保输入行匹配生成的行。

`true` enables it for all modules (not recommended)

An object `{test, include, exclude}` similar to `module.loaders` enables it for specific files.

> Default: `false`

### `output.filename`

指定磁盘上每个输出文件的名称。你不能在这里指定绝对路径！ `output.path` 选项确定磁盘上写入文件的位置。`filename`  仅用于命名单个文件。

**single entry**

```javascript
{
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/build'
  }
}

// writes to disk: ./build/bundle.js
```

**multiple entries**

If your configuration creates more than a single "chunk" (as with multiple entry points or when using plugins like CommonsChunkPlugin), you should use substitutions to ensure that each file has a unique name.

`[name]` is replaced by the name of the chunk.

`[hash]` is replaced by the hash of the compilation.

`[chunkhash]` is replaced by the hash of the chunk.

```javascript
{
  entry: {
    app: './src/app.js',
    search: './src/search.js'
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/build'
  }
}

// writes to disk: ./build/app.js, ./build/search.js
```

### `output.hotUpdateChunkFilename`

热更新块的文件名。它们位于 `output.path` 目录中。

`[id]` is replaced by the id of the chunk.

`[hash]` is replaced by the hash of the compilation. (The last hash stored in the records)

> Default: `"[id].[hash].hot-update.js"`

### `output.hotUpdateFunction`

webpack用于异步加载热更新块的JSONP函数。

> Default: `"webpackHotUpdate"`

### `output.hotUpdateMainFilename`

热更新主文件的文件名。它在 `output.path` 目录下。

`[hash]` is replaced by the hash of the compilation. (The last hash stored in the records)

> Default: `"[hash].hot-update.json"`

### `output.jsonpFunction`

webpack用于异步加载块的JSONP函数。

较短的函数可能会减少文件大小。在单个页面上具有多个webpack实例时，请使用其他标识符。

> Default: `"webpackJsonp"`

### `output.library`

如果设置，则将捆绑包导出为库。 `output.library`  是这个库的名字。

如果您正在编写一个库并想将其作为单个文件发布，请使用此选项。

### `output.libraryTarget`

哪种形式导出库：

`"var"` - Export by setting a variable: `var Library = xxx` (default)

`"this"` - Export by setting a property of `this`: `this["Library"] = xxx`

`"commonjs"` - Export by setting a property of `exports`: `exports["Library"] = xxx`

`"commonjs2"` - Export by setting `module.exports`: `module.exports = xxx`

`"amd"` - Export to AMD (optionally named - set the name via the library option)

`"umd"` - Export to AMD, CommonJS2 or as property in root

> Default: `"var"`

If `output.library` is not set, but `output.libraryTarget` is set to a value other than `var`, every property of the exported object is copied (Except `amd`, `commonjs2` and `umd`).

### `output.path`

输出目录为绝对路径（必填）。

`[hash]`是被编译的哈希值所替换

**config.js**

```javascript
output: {
    path: "/home/proj/public/assets",
    publicPath: "/assets/"
}
```

**index.html**

```
<head>
  <link href="/assets/spinner.gif"/>
</head>

```

And a more complicated example of using a CDN and hashes for assets.

**config.js**

```javascript
output: {
    path: "/home/proj/cdn/assets/[hash]",
    publicPath: "http://cdn.example.com/assets/[hash]/"
}
```

**Note:** In cases when the eventual `publicPath` of output files isn't known at compile time, it can be left blank and set dynamically at runtime in the entry point file. If you don't know the `publicPath` while compiling, you can omit it and set `__webpack_public_path__` on your entry point.

```
 __webpack_public_path__ = myRuntimePublicPath

// rest of your application entry
```

### `output.sourceMapFilename`

JavaScript文件的SourceMaps的文件名。它们位于`output.path` 目录中。

`[file]` is replaced by the filename of the JavaScript file.

`[id]` is replaced by the id of the chunk.

`[hash]` is replaced by the hash of the compilation.

> Default: `"[file].map"`