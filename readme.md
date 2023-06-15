# Roku UI

已在这里消耗的时间：

[![CodeTime badge](https://img.shields.io/endpoint?style=social&url=https%3A%2F%2Fapi.codetime.dev%2Fshield%3Fid%3D2%26project%3Droku-ui%26in%3D0)](https://codetime.dev)

这是一个 [React](https://reactjs.org/) 组件库。基于 [Uno CSS](https://github.com/unocss/unocss)、[Vite](https://cn.vitejs.dev) 等项目，很潮。

> **Warning**
>
> 这是一个开发中的 React 组件库。所有 API 可能会有非常大的变化。

相对于现有的组件库，Ruku UI 试图实现以下目标：

- 内置丰富而不造作的动画。
- 内置开箱即用的高级组件。

## 为什么要做一个新的的组件库？

已经有许多优秀的组件库。他们都有不同的设计逻辑和依赖。而这些是我们所不能自由选择的。比如大量的组件库使用了 CSS in JS 的技术——而这一技术是否值得引入仍然存在争议。因为这存在潜在的性能问题，同时也会增加开发者的学习成本。

有一些组件库支持很多 Fancy 的写法和功能，能够深入进行定制，但是打包体积变得巨大，即使开启了 Tree Shaking，也不能显著减少包大小。

另一方面，许多组件库没有提供业务所需的独特组件，或者没有提供令人满意的动画和效果。这些组件库虽然支持定制，但是如果要大规模地改变样式，需要深入理解他们的代码是如何控制样式的，否则很容易造成冲突。

但实践中，从已有的组件上进行修改甚至不如自己从头做一套来得快。于是我搓了一堆自定义组件分散在自己维护的各个项目里。随着我技术的提升，我发现个人维护一个组件库项目也不是不可能的事情。

因此，为了能够复用这些自定义的动画效果和组件，我启动了这个项目。我希望至少在我的个人项目中，我不需要再魔改他们。它的可定制性肯定不够强，但我希望默认的组件配置足以覆盖我个人的全部需求。

也希望它能够覆盖你的需求。

## 使用案例

只有很少的一部分网站使用了 Roku UI，全部都是我做的。不过那又如何，至少只要我还在做网站，这个项目就会一直更新下去。

由 Roku UI 驱动的网站有：

- [Roku UI 官方文档](https://roku-ui.vercel.app/)：也就是你正在浏览的网站。
- [Zeroroku](https://zeroroku.com/)：一个数据观测站点。

如果你竟然真的敢于将这个项目用在了自己的网站中，那么非常欢迎向我提交 Issue，我会把你的网站追加在这里。

## 安装

可以朴实无华地使用 [pnpm](https://pnpm.io/)、[npm](https://www.npmjs.com/) 或 [yarn](https://yarnpkg.com/) 安装。开发时使用的是 pnpm，因此我更推荐你使用它。

```bash
pnpm install roku-ui
```
