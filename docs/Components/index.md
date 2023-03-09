---
title: 简介
order: 0
nav:
  title: 组件
---

# 简介

这里的组件，大多基于 antd 的组件，进行封装。多数 api 可直接参考 antd 官方文档的 api

所有封装后新增的 api，都会在组件文档的 demo 中展示并说明。

特别说明：所有封装后的组件，都新增了一个`styled`字段，用于单独自定义当前组件样式

### 共享的 Api：

| 参数   | 说明                                                                                                                       | 类型   | 默认值 |
| ------ | -------------------------------------------------------------------------------------------------------------------------- | ------ | ------ |
| styled | 当前组件单独的自定义样式：css-in-js 的写法.<a href="https://emotion.sh/docs/introduction" target="_blank">emotion 文档</a> | string | ''     |

| 参数     | 说明               | 类型                           | 默认值   |
| -------- | ------------------ | ------------------------------ | -------- |
| value    | 组件值             | string[]                       | []       |
| onChange | 用户选择后返回的值 | string[]                       | []       |
| size     | 子组件大小         | `large` \| `middle` \| `small` | `middle` |