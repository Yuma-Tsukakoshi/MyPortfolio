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
            image: {
              src: "/images/skills/react.svg",
              alt: "React Logo",
            },
          },
          {
            name: "TypeScript",
            level: 85,
            icon: "typescript",
            image: {
              src: "/images/skills/typescript.svg",
              alt: "TypeScript Logo",
            },
          },
          {
            name: "Next.js",
            level: 80,
            icon: "nextjs",
            image: {
              src: "/images/skills/nextjs.svg",
              alt: "Next.js Logo",
            },
          },
          {
            name: "Tailwind CSS",
            level: 85,
            icon: "tailwind",
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
            image: {
              src: "/images/skills/nodejs.svg",
              alt: "Node.js Logo",
            },
          },
          {
            name: "Express",
            level: 70,
            icon: "express",
            image: {
              src: "/images/skills/express.svg",
              alt: "Express Logo",
            },
          },
          {
            name: "PostgreSQL",
            level: 65,
            icon: "postgresql",
            image: {
              src: "/images/skills/postgresql.svg",
              alt: "PostgreSQL Logo",
            },
          },
          {
            name: "MongoDB",
            level: 60,
            icon: "mongodb",
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
            image: {
              src: "/images/skills/git.svg",
              alt: "Git Logo",
            },
          },
          {
            name: "Docker",
            level: 70,
            icon: "docker",
            image: {
              src: "/images/skills/docker.svg",
              alt: "Docker Logo",
            },
          },
          {
            name: "AWS",
            level: 65,
            icon: "aws",
            image: {
              src: "/images/skills/aws.svg",
              alt: "AWS Logo",
            },
          },
          {
            name: "Figma",
            level: 75,
            icon: "figma",
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
