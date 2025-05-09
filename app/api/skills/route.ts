import { NextResponse } from "next/server";

import { ApiResponse } from "@/types/api";
import { SkillsData } from "@/types/skills";

export async function GET(): Promise<NextResponse<ApiResponse<SkillsData>>> {
  // TODO: データベースからデータを取得する処理を実装
  const data: SkillsData = {
    title: "Skills",
    subtitle: "スキルセット",
    categories: [
      {
        name: "フロントエンド",
        skills: [
          {
            name: "React",
            level: 90,
            icon: "react",
          },
          {
            name: "TypeScript",
            level: 85,
            icon: "typescript",
          },
          {
            name: "Next.js",
            level: 80,
            icon: "nextjs",
          },
          {
            name: "Tailwind CSS",
            level: 85,
            icon: "tailwind",
          },
        ],
      },
      {
        name: "バックエンド",
        skills: [
          {
            name: "Node.js",
            level: 75,
            icon: "nodejs",
          },
          {
            name: "Express",
            level: 70,
            icon: "express",
          },
          {
            name: "PostgreSQL",
            level: 65,
            icon: "postgresql",
          },
          {
            name: "MongoDB",
            level: 60,
            icon: "mongodb",
          },
        ],
      },
      {
        name: "その他",
        skills: [
          {
            name: "Git",
            level: 85,
            icon: "git",
          },
          {
            name: "Docker",
            level: 70,
            icon: "docker",
          },
          {
            name: "AWS",
            level: 65,
            icon: "aws",
          },
          {
            name: "Figma",
            level: 75,
            icon: "figma",
          },
        ],
      },
    ],
  };

  return NextResponse.json({
    data,
    status: 200,
    message: "Success",
  });
}
