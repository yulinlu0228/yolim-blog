# Yolim Blog 写作指南

## 新建文章

在 `src/content/posts/` 新建一个以英文、数字和短横线命名的 `.md` 文件，例如：

```text
src/content/posts/2026-summer-notes.md
```

文章开头使用下面的格式：

```yaml
---
title: "文章标题"
published: 2026-08-11
description: "用于首页卡片和搜索结果的简短介绍"
tags: [生活, 随想]
category: "浮光絮语"
draft: false
author: "Yolim"
---
```

在第二个 `---` 后面写正文即可。

## 栏目分类

- `浮光絮语`：近况、随想、周报
- `拾知成册`：知识、科研与工具笔记
- `来时有迹`：重要经历的长文记录

## 草稿与发布

写作时可以设置：

```yaml
draft: true
```

草稿不会出现在正式构建的网站中。准备发布时改为：

```yaml
draft: false
```

## 更新其他页面

- 日记：`src/data/diary.ts`
- 歌单：`src/data/music.ts`
- 时间线：`src/data/timeline.ts`
- 项目：`src/data/projects.ts`
- 能力：`src/data/skills.ts`

## 音频规则

只有在你拥有发布许可时，才把音频放入网站。建议统一存放在 `public/audio/`，再在 `src/data/music.ts` 中填写相对路径。
