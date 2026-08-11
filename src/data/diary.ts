/**
 * Yolim Blog short diary entries.
 * Add new entries at the top of this array.
 */

export interface DiaryMoment {
	id: number;
	content: string;
	date: string;
	images: string[];
}

export const moments: DiaryMoment[] = [
	{
		id: 3,
		content: "决定拥有一个自己的小网页。社交平台像热闹的广场，而我想留一间安静的小房间。",
		date: "2026-07-16T20:00:00+08:00",
		images: [],
	},
	{
		id: 2,
		content: "最近学会了给生活留一点空白。不把每个周末排满，空出来的部分，反而让真正喜欢的东西慢慢浮现。",
		date: "2026-07-10T20:00:00+08:00",
		images: [],
	},
	{
		id: 1,
		content: "夏夜散步时遇到一阵风。没有发生特别的事，只是路灯亮起来，耳机里的歌恰好唱到最喜欢的一句。",
		date: "2026-07-02T20:00:00+08:00",
		images: [],
	},
];
