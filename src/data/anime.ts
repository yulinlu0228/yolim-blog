// 本地番剧数据配置
export type AnimeItem = {
	title: string;
	status: "watching" | "completed" | "planned";
	rating: number;
	cover: string;
	description: string;
	episodes: string;
	year: string;
	genre: string[];
	studio: string;
	link: string;
	progress: number;
	totalEpisodes: number;
	startDate: string;
	endDate: string;
};

// 页面目前关闭；保留空数据结构，之后可以随时启用并添加真实记录。
const localAnimeList: AnimeItem[] = [];

export default localAnimeList;
