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
            is_acquire: true,
            image: {
              src: "/images/skills/react.svg",
              alt: "React Logo",
            },
          },
          {
            name: "TypeScript",
            level: 85,
            icon: "typescript",
            is_acquire: true,
            image: {
              src: "/images/skills/typescript.svg",
              alt: "TypeScript Logo",
            },
          },
          {
            name: "Next.js",
            level: 80,
            icon: "nextjs",
            is_acquire: true,
            image: {
              src: "/images/skills/nextjs.svg",
              alt: "Next.js Logo",
            },
          },
          {
            name: "Tailwind CSS",
            level: 85,
            icon: "tailwind",
            is_acquire: true,
            image: {
              src: "/images/skills/tailwind.svg",
              alt: "Tailwind CSS Logo",
            },
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
            is_acquire: false,
            image: {
              src: "/images/skills/nodejs.svg",
              alt: "Node.js Logo",
            },
          },
          {
            name: "Express",
            level: 70,
            icon: "express",
            is_acquire: false,
            image: {
              src: "/images/skills/express.svg",
              alt: "Express Logo",
            },
          },
          {
            name: "PostgreSQL",
            level: 65,
            icon: "postgresql",
            is_acquire: true,
            image: {
              src: "/images/skills/postgresql.svg",
              alt: "PostgreSQL Logo",
            },
          },
          {
            name: "MongoDB",
            level: 60,
            icon: "mongodb",
            is_acquire: true,
            image: {
              src: "/images/skills/mongodb.svg",
              alt: "MongoDB Logo",
            },
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
            is_acquire: true,
            image: {
              src: "/images/skills/git.svg",
              alt: "Git Logo",
            },
          },
          {
            name: "Docker",
            level: 70,
            icon: "docker",
            is_acquire: true,
            image: {
              src: "/images/skills/docker.svg",
              alt: "Docker Logo",
            },
          },
          {
            name: "AWS",
            level: 65,
            icon: "aws",
            is_acquire: true,
            image: {
              src: "/images/skills/aws.svg",
              alt: "AWS Logo",
            },
          },
          {
            name: "Figma",
            level: 75,
            icon: "figma",
            is_acquire: true,
            image: {
              src: "/images/skills/figma.svg",
              alt: "Figma Logo",
            },
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
