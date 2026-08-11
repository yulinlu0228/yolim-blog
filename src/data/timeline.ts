/**
 * Yolim Blog timeline data.
 * Modified in 2026 from the Mizuki timeline data structure.
 */

export interface TimelineItem {
	id: string;
	title: string;
	description: string;
	type: "education" | "work" | "project" | "achievement";
	startDate: string;
	endDate?: string;
	location?: string;
	organization?: string;
	position?: string;
	skills?: string[];
	achievements?: string[];
	links?: {
		name: string;
		url: string;
		type: "website" | "certificate" | "project" | "other";
	}[];
	icon?: string;
	color?: string;
	featured?: boolean;
}

export const timelineData: TimelineItem[] = [
	{
		id: "sjtu-master",
		title: "海洋科学硕士在读",
		description: "继续沿着海洋科学与环境研究的方向学习，参与冰冻圈、水资源与蓝冰冰芯相关研究。",
		type: "education",
		startDate: "2025-09-01",
		location: "上海",
		organization: "上海交通大学",
		position: "硕士研究生",
		skills: ["实验操作", "数据分析", "论文写作"],
		icon: "material-symbols:school",
		color: "#2563EB",
		featured: true,
	},
	{
		id: "blue-ice-project",
		title: "蓝冰冰芯中轨道尺度气候信号的识别与恢复",
		description: "参与国家重点研发项目，围绕蓝冰冰芯中的气候信号开展实验和数据研究。",
		type: "project",
		startDate: "2025-09-01",
		organization: "国家重点研发项目",
		skills: ["实验操作", "数据分析", "论文写作"],
		icon: "material-symbols:science",
		color: "#7C3AED",
		featured: true,
	},
	{
		id: "altai-project",
		title: "中蒙阿尔泰山典型流域气候变化研究",
		description: "参与气候变化对冰冻圈及水资源影响与模拟评估研究。",
		type: "project",
		startDate: "2025-09-01",
		organization: "国家重点研发项目",
		skills: ["数据分析", "论文写作"],
		icon: "material-symbols:landscape",
		color: "#0F766E",
		featured: true,
	},
	{
		id: "ouc-bachelor",
		title: "化学学士",
		description: "完成化学专业本科阶段学习，并逐步把研究兴趣延伸到海洋与环境方向。",
		type: "education",
		startDate: "2021-09-01",
		endDate: "2025-06-30",
		location: "青岛",
		organization: "中国海洋大学",
		position: "本科生",
		icon: "material-symbols:school",
		color: "#2563EB",
		featured: true,
	},
	{
		id: "wanhua-internship",
		title: "烟台万华公司认知实习",
		description: "通过企业认知与实践了解化工行业的生产流程和实际工作环境。",
		type: "work",
		startDate: "2023-09-01",
		endDate: "2023-09-30",
		location: "烟台",
		organization: "万华化学",
		position: "认知实习",
		icon: "material-symbols:factory",
		color: "#EA580C",
	},
	{
		id: "estuary-field-practice",
		title: "海洋科学野外实践基地联合实习",
		description: "参加长江口及邻近海域调查，在真实海洋环境中完成野外实践。",
		type: "project",
		startDate: "2023-07-01",
		endDate: "2023-08-31",
		location: "长江口及邻近海域",
		organization: "海洋科学野外实践基地",
		icon: "material-symbols:sailing",
		color: "#0284C7",
	},
];

export const getTimelineStats = () => ({
	total: timelineData.length,
	byType: {
		education: timelineData.filter((item) => item.type === "education").length,
		work: timelineData.filter((item) => item.type === "work").length,
		project: timelineData.filter((item) => item.type === "project").length,
		achievement: timelineData.filter((item) => item.type === "achievement").length,
	},
});

export const getTimelineByType = (type?: string) => {
	const items = type && type !== "all"
		? timelineData.filter((item) => item.type === type)
		: [...timelineData];
	return items.sort(
		(a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
	);
};

export const getFeaturedTimeline = () =>
	timelineData
		.filter((item) => item.featured)
		.sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime());

export const getCurrentItems = () => timelineData.filter((item) => !item.endDate);

export const getTotalWorkExperience = () => {
	const totalMonths = timelineData
		.filter((item) => item.type === "work")
		.reduce((sum, item) => {
			const start = new Date(item.startDate);
			const end = item.endDate ? new Date(item.endDate) : new Date();
			return sum + Math.max(1, (end.getFullYear() - start.getFullYear()) * 12 + end.getMonth() - start.getMonth());
		}, 0);
	return { years: Math.floor(totalMonths / 12), months: totalMonths % 12 };
};
