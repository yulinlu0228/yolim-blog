# Yolim Blog

一个用于记录近况、知识、经历与歌单的个人博客。

网站使用 Astro 与 Markdown 构建，界面和博客结构参考并学习了 [LyraVoid/Mizuki](https://github.com/LyraVoid/Mizuki)。在 Mizuki 的基础上，本项目替换了演示身份与内容，加入个人时间线、科研项目、能力记录、Codex 工作周报和歌单页面，并为 GitHub Pages 的 `/yolim-blog/` 路径进行了配置。

## 当前栏目

- **浮光絮语**：近况、随想与工作周报
- **拾知成册**：科研、学习与工具知识
- **来时有迹**：教育背景、项目经历与能力记录
- **耳畔星河**：喜欢的音乐与合法音频播放位置

## 写作与更新

文章使用 Markdown，保存在 `src/content/posts/`。

日记、歌单、时间线、项目和能力记录分别保存在：

- `src/data/diary.ts`
- `src/data/music.ts`
- `src/data/timeline.ts`
- `src/data/projects.ts`
- `src/data/skills.ts`

创建文章后，提交到 GitHub 即可触发后续的自动构建和发布流程。

更详细的步骤见 [写作指南](docs/WRITING_GUIDE.md)。

## 本地运行

需要 Node.js 20 或更高版本，以及 pnpm。

```bash
pnpm install
pnpm dev
```

正式构建：

```bash
pnpm build
```

## 来源与致谢

本项目是一个个人化的学习与改造版本，主要参考：

- [Mizuki](https://github.com/LyraVoid/Mizuki)，Astro 博客模板
- [Fuwari](https://github.com/saicaca/fuwari)，Mizuki 的原始基础项目

完整说明见 [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md)。

## 许可证

本项目的修改部分采用 [Apache License 2.0](LICENSE)。继承自上游 MIT 项目的部分继续保留原始 [MIT License](LICENSE.MIT) 和相关版权声明。
