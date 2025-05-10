export interface Skill {
  name: string;
  level: number;
  icon: string;
  is_acquire: boolean;
  image: {
    src: string;
    alt: string;
  };
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface SkillsData {
  title: string;
  subtitle: string;
  categories: SkillCategory[];
}

export interface SkillsResponse {
  frontend: Skill[];
  backend: Skill[];
  database: Skill[];
  infrastructure: Skill[];
  tools: Skill[];
}

export const categoryLabels = {
  frontend: "フロントエンド",
  backend: "バックエンド",
  database: "データベース",
  infrastructure: "インフラストラクチャ",
  tools: "ツール",
} as const;
