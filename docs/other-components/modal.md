---
title: Modal
group:
  title: 自定义容器组件
---

# Modal 自定义弹窗容器

一个通用的自定义弹窗；可以直接声明式调用或使用命令式调用；
只提供基础的弹框动画与遮罩样式。弹框内容完全由外部传入；

<code src='./Modal/index.tsx'>自定义弹窗</code>

### Api：

| 参数       | 说明                                                      | 类型    | 默认值       |
| --------  | --------------------------------------------------------- | ------ | ------------ |
| show      | 控制显示隐藏                                                | boolean | false          |
| mask      | 控制是否显示遮罩                                             | boolean | true        |
| closeable | 控制是否显示关闭按钮                                          | boolean | false        |
| children  | 弹框内容                                                    | ReactNode | ''        |
| onClose   | 关闭弹窗后回调                                             | function | ''        |


<embed src="../guide.md#L16-L21"></embed>
