# Modules

在模块化编程中，开发人员将程序分解成多个被称为模块的独立功能块。

相比于完整的程序，每个模块只是完整程序的一部分，这样使得验证，调试和测试变得简单。精心编写的模块提供了稳定的的抽象和封装边界，使得每个模块在整体应用中具有一致的设计和明确的目的。

Node.js几乎已经开始支持模块化编程。然而，在网络上，对模块的支持一直很慢。网上存在多种支持模块化的工具，各有优劣。webpack 吸取了这些工具的经验教训，并进一步将模块的概念应用于项目中的任何文件。

## 什么是 webpack 模块

与 Node.js 模块相反，webpack模块可以通过各种方式表达其依赖关系。例如：

- [ES2015 `import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) 声明
- [CommonJS](http://www.commonjs.org/specs/modules/1.0/) `require()` 声明
- [AMD](https://github.com/amdjs/amdjs-api/blob/master/AMD.md) `define` 和  `require` 声明
- [`@import` statement](https://developer.mozilla.org/en-US/docs/Web/CSS/@import) 内置一个 a css/sass/less 文件
- stylesheet 中的一个图片文件的url (`url(...)`) 或 html文件 (``)
>  webpack 1需要一个特定的加载程序来转换ES2015 import，但是 webpack 2 直接就不需要加载程序了。

## Supported Module Types

webpack 编写模块时，可以通过 `loaders` 来支持多种语言和处理器。`loaders` 描述了 webpack 如何处理非JavaScript模块，并将这些依赖项包含在您的捆绑包中。Webpack社区已经为各种流行的语言和语言处理器构建了装载程序，其中包括：

- [CoffeeScript](http://coffeescript.org)
- [TypeScript](https://www.typescriptlang.org)
- [ESNext (Babel)](https://babeljs.io)
- [Sass](http://sass-lang.com)
- [Less](http://lesscss.org)
- [Stylus](http://stylus-lang.com)

总的来说，Webpack提供了一个功能强大且丰富的API，让用户可以进行定制。webpack 可以使用于任何堆栈，同时可以将开发，测试和生产工作流独立开来。
