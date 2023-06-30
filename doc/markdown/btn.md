# 按钮（Button）

不必多说，每个组件库都会实现的组件。

<Demo name="Button" />

## 基础用法

这个组件已经提供了非常多的属性，让我们能够快速的实现不同用途的按钮。

<Demo name="ButtonAll" />

## 使用其他元素

默认情况下，`Btn` 会渲染成 `button` 元素。但是，我们也可以通过 `as` 属性来指定渲染成其他元素。如果我们要将按钮用于导航，我们可以将其渲染成 `a` 元素，使用 `href` 字段以支持浏览器的前进、后退、在新的标签页打开等导航特性。

我们还可以将其渲染成 `Link` 组件，以支持 `react-router` 或是 `next.js` 的导航特性。

<Demo name="ButtonAs" />

## 计数按钮

这个组件是基于 `Button` 组件实现的，在 `Button` 组件的基础上添加了一个计数器。非常适合用于记录点赞、收藏等操作。

抄自推特。

<Demo name="ButtonCounter" />

## 按钮加载

在 `Button` 组件的基础上添加了一个加载动画。用于提高提交表单等操作的用户体验。

<Demo name="ButtonLoading" />
