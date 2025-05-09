export interface Skill {
  label: string;
  image: string;
  is_acquire: boolean;
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
