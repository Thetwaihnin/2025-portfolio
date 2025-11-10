export type SkillItem = {
  name: string;
  percentage: number;
  src: string
};

export type SkillCategory = {
  category: string;
  items: SkillItem[];
};
