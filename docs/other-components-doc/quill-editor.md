---
title: QuillEditor
group:
  title: 编辑器
---

# QuillEditor 富文本编辑器

基于 <a href="https://github.com/slab/quill" target="_blank">quill</a> 封装的富文本编辑器

<code src='../components/QuillEditor.tsx'>富文本编辑器</code>

### Api：

| 参数     | 说明                                                                                                                                         | 类型   | 默认值       |
| -------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ------ | ------------ |
| value    | 组件值                                                                                                                                       | string | ''           |
| options | quill的配置参数 <a href="https://quilljs.com/docs/configuration" target="_blank">options</a>                                                   | QuillOptionsType | ''           |
| onChange | 更改后返回的值                                                                                                                                 | string | ''           |
| onReady | 返回quill实例，可通过此实例，使用quill的api，操作quill编辑器；                                                                                        | string | ''           |


<embed src="../guide.md#L16-L21"></embed>
