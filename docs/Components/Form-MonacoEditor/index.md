---
title: MonacoEditor
nav:
  title: react
group:
  title: 表单组件
---

# monaco-editor 摩纳哥代码编辑器

基于 微软的 的 <a href="https://microsoft.github.io/monaco-editor/" target="_blank">monaco-editor</a> 组件封装

因为官方原版太难用了，有各种配置与兼容问题，这里使用的是第三方封装好的，专用于 react 的 0 配置 <a href="https://www.npmjs.com/package/@monaco-editor/react" target="_blank">monaco-editor</a>

<code src='./MonacoEditor.tsx'>monaco 代码编辑器</code>

### Api：

| 参数            | 说明                                                                                                                                                          | 类型   | 默认值     |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | ---------- |
| value           | 组件值                                                                                                                                                        | string | ''         |
| onChange        | 用户选择后返回的值                                                                                                                                            | string | ''         |
| debounceOptions | 防抖配置。编辑器触发频率高，会有性能问题。默认加上防抖。配置参考<a href="https://ahooks.js.org/zh-CN/hooks/use-debounce-fn" target="_blank">useDebounceFn</a> | object | {wait:100} |

MonacoEditor 的其他 api 参考<a href="https://www.npmjs.com/package/@monaco-editor/react" target="_blank">monaco-editor</a>

<embed src="../index.md#L16-L20"></embed>
