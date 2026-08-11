/**
 * Yolim Blog playlist data.
 * Add only audio files that you are legally allowed to publish.
 */

export interface SongItem {
	index: string;
	title: string;
	artist: string;
	year: string;
	note: string;
	listenUrl?: string;
	audio?: string;
}

export const songs: SongItem[] = [
	{
		index: "01",
		title: "One Last Kiss",
		artist: "Hikaru Utada / 宇多田光",
		year: "2021",
		note: "像告别，也像终于学会好好记住。",
		listenUrl: "https://music.apple.com/us/song/1736077483",
	},
	{
		index: "02",
		title: "Come Back To Me",
		artist: "Utada / 宇多田光",
		year: "2009",
		note: "温柔的旋律里，藏着一句迟迟没有说完的话。",
		listenUrl: "https://music.apple.com/tw/song/1460622491",
	},
	{
		index: "03",
		title: "情歌",
		artist: "梁静茹 / Fish Leong",
		year: "2009",
		note: "有些旋律一响起，就把人带回某一段很远的时光。",
		listenUrl: "https://music.apple.com/tw/song/1095630246",
	},
];
