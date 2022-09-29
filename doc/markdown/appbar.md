# 应用栏（Appbar）

应用栏往往位于整个网页的最上端。它通常包含了网站的 Logo、标题、导航栏、搜索框等。

## 基本用法

应用栏的基本用法如下：

<Demo name="AppbarBase" />

## 变体

作为一个特色功能，Appbar 拥有三种额外的变体。分别为 `pattern`, `**blur**` 和 `transparent`。

`transparent` 变体会使应用栏背景透明。

`blur` 变体的背景会有一个模糊的效果。

`pattern` 变体会在 Appbar 的背景上添加一个波点纹理，再加上模糊效果，很酷炫。该文档使用的就是这种变体。这并不是首创，我在其他很多网站上看到了这样的设计。

<Demo name="AppbarVarient" />

## 颜色

我们也可以自定义颜色，但是颜色目前在 `pattern` 变体上不会生效。

<Demo name="AppbarColor" />

## 搜索

应用栏可以包含搜索框。一种最简单的实现是，给 Appbar 添加一个 `searchCallback` 属性。

这是牺牲了灵活性的——因为你无法定制搜索框的样式。如果你想要更多的控制，可以使用 `tailing` 属性添加自定义的搜索组件。

<Demo name="AppbarSearch" />

## 头尾追加组件

应用栏的头部和尾部都可以追加组件。这些组件会被放置在 Appbar 的左侧和右侧。

一般来说我们会在头部追加 Menu 按钮，使得我们由此打开菜单抽屉。而在尾部追加用户信息、通知之类的组件。

<Demo name="AppbarTailingAndLeading" />
