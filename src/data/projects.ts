/**
 * Yolim Blog project records.
 * Modified in 2026 from the Mizuki project data structure.
 */

export interface Project {
	id: string;
	title: string;
	description: string;
	image: string;
	category: "web" | "mobile" | "desktop" | "other";
	techStack: string[];
	status: "completed" | "in-progress" | "planned";
	liveDemo?: string;
	sourceCode?: string;
	startDate: string;
	endDate?: string;
	featured?: boolean;
	tags?: string[];
	visitUrl?: string;
}

export const projectsData: Project[] = [
	{
		id: "altai-climate",
		title: "中蒙阿尔泰山典型流域气候变化研究",
		description: "研究气候变化对冰冻圈及水资源的影响，并参与模拟评估、数据分析与论文写作。",
		image: "",
		category: "other",
		techStack: ["数据分析", "文献研究", "论文写作"],
		status: "in-progress",
		startDate: "2025-09-01",
		featured: true,
		tags: ["国家重点研发项目", "冰冻圈", "水资源"],
	},
	{
		id: "blue-ice-core",
		title: "蓝冰冰芯中轨道尺度气候信号的识别与恢复",
		description: "围绕蓝冰冰芯中的轨道尺度气候信息开展实验操作、指标分析与论文写作。",
		image: "",
		category: "other",
		techStack: ["实验操作", "数据分析", "论文写作"],
		status: "in-progress",
		startDate: "2025-09-01",
		featured: true,
		tags: ["国家重点研发项目", "蓝冰", "冰芯"],
	},
	{
		id: "yolim-blog",
		title: "Yolim Blog",
		description: "基于 Astro 与 Mizuki 学习构建的个人博客，用于记录近况、知识、经历与歌单。",
		image: "",
		category: "web",
		techStack: ["Astro", "Markdown", "GitHub Pages"],
		status: "in-progress",
		sourceCode: "https://github.com/yulinlu0228/yolim-blog",
		startDate: "2026-08-11",
		featured: true,
		tags: ["个人博客", "开源学习"],
	},
];

export const getProjectStats = () => ({
	total: projectsData.length,
	byStatus: {
		completed: projectsData.filter((project) => project.status === "completed").length,
		inProgress: projectsData.filter((project) => project.status === "in-progress").length,
		planned: projectsData.filter((project) => project.status === "planned").length,
	},
});

export const getProjectsByCategory = (category?: string) =>
	!category || category === "all"
		? projectsData
		: projectsData.filter((project) => project.category === category);

export const getFeaturedProjects = () => projectsData.filter((project) => project.featured);

export const getAllTechStack = () =>
	Array.from(new Set(projectsData.flatMap((project) => project.techStack))).sort();
