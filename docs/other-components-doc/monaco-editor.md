---
title: MonacoEditor
group:
  title: 编辑器
---

# MonacoEditor 摩纳哥代码编辑器

基于 微软的 的 <a href="https://microsoft.github.io/monaco-editor/" target="_blank">monaco-editor</a> 组件封装

因为官方原版太难用了，有各种配置与兼容问题，这里使用的是第三方封装好的，专用于 react 的 0 配置 <a href="https://www.npmjs.com/package/@monaco-editor/react" target="_blank">monaco-editor</a>

<code src='../components/MonacoEditor.tsx'>monaco 代码编辑器</code>

### Api：

| 参数            | 说明                                                                                                                                                          | 类型   | 默认值     |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | ---------- |
| value           | 组件值                                                                                                                                                        | string | ''         |
| onChange        | 用户选择后返回的值                                                                                                                                            | string | ''         |

MonacoEditor 的其他 api 参考<a href="https://www.npmjs.com/package/@monaco-editor/react" target="_blank">monaco-editor</a>

<embed src="../guide.md#L16-L21"></embed>
