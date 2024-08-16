---
title: VideoViewer
group:
  title: 播放器
---

# VideoViewer video播放器

基于 <a href="https://github.com/videojs/video.js" target="_blank">video.js</a> 封装的视频播放器。

<code src='./VideoViewer/index.tsx'>视频播放器</code>

### Api：

| 参数            | 说明                                                                                                                                                          | 类型   | 默认值     |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | ---------- |
| url           | 视频文件的链接                                                                                                                                                     | string | ''         |
| options    | video的相关配置 <a href="https://videojs.com/guides/options/" target="_blank">options</a>                                                                       | object | {}         |
| onReady    | 返回video实例，可通过此实例，使用video的api，操作video播放器                                                                                                         | object | {}         |

<embed src="../guide.md#L16-L21"></embed>
