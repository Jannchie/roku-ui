# 通知（Notification）

内置的通知组件。具备动画和特效。

## 示例

为了能够正常渲染，我们需要在项目的任意位置挂载一个 `Notification` 组件。

然后，通过使用 `pushNotice` 函数，可以在任意组件中推送通知。

默认存在多条通知时会平铺为列表。我们预设了堆叠样式动画可以减少多条通知的空间占用。

<Demo name="Notification" />

另一种用法是，我们可以使用 push 方法，push 任意对象。然后，在 `Notifications` 组件中，我们可以使用 getNotice 属性，获取到 push 方法提供的数据，并转换成能够被渲染的 ReactNode 对象。

<Demo name="NotificationByData" />

这种方式适合对同一个数据在渲染成不同样式的场景。

需要注意的是，如果我们没有传入 getNotice 属性，则会直接试图渲染 push 方法提供的 object。这种情况下，如果该 object 不是一个能被渲染的 ReactNode，则会抛出一个错误。
