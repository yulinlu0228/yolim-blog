/**
 * Yolim Blog skills and capabilities.
 * Modified in 2026 from the Mizuki skill data structure.
 */

export interface Skill {
	id: string;
	name: string;
	description: string;
	icon: string;
	category: "frontend" | "backend" | "database" | "tools" | "other";
	level: "beginner" | "intermediate" | "advanced" | "expert";
	experience: { years: number; months: number };
	projects?: string[];
	certifications?: string[];
	color?: string;
}

export const skillsData: Skill[] = [
	{
		id: "cet4",
		name: "CET-4 · 601",
		description: "大学英语四级成绩 601 分，具备较好的英文阅读与信息获取能力。",
		icon: "material-symbols:translate",
		category: "other",
		level: "advanced",
		experience: { years: 4, months: 0 },
		certifications: ["CET-4 601"],
		color: "#2563EB",
	},
	{
		id: "cet6",
		name: "CET-6 · 532",
		description: "大学英语六级成绩 532 分，可用于英文文献阅读和学术学习。",
		icon: "material-symbols:language",
		category: "other",
		level: "intermediate",
		experience: { years: 3, months: 0 },
		certifications: ["CET-6 532"],
		color: "#0F766E",
	},
	{
		id: "data-analysis",
		name: "科研数据分析",
		description: "围绕环境、冰冻圈与蓝冰研究整理数据、复核指标并形成可解释的分析结果。",
		icon: "material-symbols:analytics",
		category: "tools",
		level: "intermediate",
		experience: { years: 1, months: 0 },
		projects: ["altai-climate", "blue-ice-core"],
		color: "#7C3AED",
	},
	{
		id: "lab-work",
		name: "实验操作",
		description: "参与蓝冰冰芯相关实验，在规范记录与质量控制中积累实验经验。",
		icon: "material-symbols:science",
		category: "tools",
		level: "intermediate",
		experience: { years: 1, months: 0 },
		projects: ["blue-ice-core"],
		color: "#0284C7",
	},
	{
		id: "academic-writing",
		name: "论文写作",
		description: "参与研究资料整理、论证结构梳理与论文写作，持续训练学术表达。",
		icon: "material-symbols:edit-note",
		category: "other",
		level: "intermediate",
		experience: { years: 1, months: 0 },
		projects: ["altai-climate", "blue-ice-core"],
		color: "#EA580C",
	},
	{
		id: "chemistry",
		name: "化学基础",
		description: "完成化学专业本科培养，为环境与海洋科学研究提供实验和理论基础。",
		icon: "material-symbols:biotech",
		category: "other",
		level: "intermediate",
		experience: { years: 4, months: 0 },
		color: "#059669",
	},
];

export const getSkillStats = () => ({
	total: skillsData.length,
	byLevel: {
		beginner: skillsData.filter((skill) => skill.level === "beginner").length,
		intermediate: skillsData.filter((skill) => skill.level === "intermediate").length,
		advanced: skillsData.filter((skill) => skill.level === "advanced").length,
		expert: skillsData.filter((skill) => skill.level === "expert").length,
	},
	byCategory: {
		frontend: skillsData.filter((skill) => skill.category === "frontend").length,
		backend: skillsData.filter((skill) => skill.category === "backend").length,
		database: skillsData.filter((skill) => skill.category === "database").length,
		tools: skillsData.filter((skill) => skill.category === "tools").length,
		other: skillsData.filter((skill) => skill.category === "other").length,
	},
});

export const getSkillsByCategory = (category?: string) =>
	!category || category === "all"
		? skillsData
		: skillsData.filter((skill) => skill.category === category);

export const getAdvancedSkills = () =>
	skillsData.filter((skill) => skill.level === "advanced" || skill.level === "expert");

export const getTotalExperience = () => {
	const totalMonths = skillsData.reduce(
		(total, skill) => total + skill.experience.years * 12 + skill.experience.months,
		0,
	);
	return { years: Math.floor(totalMonths / 12), months: totalMonths % 12 };
};
