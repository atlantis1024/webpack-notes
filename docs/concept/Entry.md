# Entry

`entry`属性是`webpack.config.js`配置文件中的入口。

在`webpack.config.js`种有多种方式配置`entry`属性。

## 单一入口 (速记) 语法

语法： `entry: string|Array`

**webpack.config.js**

```javascript
const config = {
  entry: './path/to/my/entry/file.js'
};

module.exports = config;
```

上面的语法是下面的速写方式

```javascript
const config = {
  entry: {
    main: './path/to/my/entry/file.js'
  }
};
```

## 对象式的语法

语法： `entry: {[entryChunkName: string]: string|Array}`

**webpack.config.js**

```javascript
const config = {
  entry: {
    app: './src/app.js',
    vendors: './src/vendors.js'
  }
};
```

对象语法更冗长，然而，这种方式在应用中定义入口更容易扩展。

## 场景

下面是入口配置在现实场景中的应用：

### 单一app和vendor入口

**webpack.config.js**

```javascript
const config = {
  entry: {
    app: './src/app.js',
    vendors: './src/vendors.js'
  }
};
```

(未完成。。。)