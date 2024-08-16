---
title: SimpleCodeEditor
group:
  title: 编辑器
---

# SimpleCodeEditor 简易代码编辑器

基于 <a href="https://www.npmjs.com/package/react-simple-code-editor" target="_blank">react-simple-code-editor</a> 组件封装

只提供语法高亮的简易代码编辑器，轻量级，占用小，可以方便的嵌入各种环境。

<code src='./SimpleCodeEditor/index.tsx'>简易代码编辑器</code>

### Api：

| 参数     | 说明                                                                                                                                         | 类型   | 默认值       |
| -------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ------ | ------------ |
| value    | 组件值                                                                                                                                       | string | ''           |
| onChange | 更改后返回的值                                                                                                                           | string | ''           |
| language | 需要语法高亮的语言。支持的语言列表<a href="https://prismjs.com/#supported-languages" target="_blank">supported-languages</a>，名称全部小写。 | string | 'javascript' |

SimpleCodeEditor 的其他 api 参考<a href="https://www.npmjs.com/package/react-simple-code-editor" target="_blank">react-simple-code-editor</a>

<embed src="../guide.md#L16-L21"></embed>
