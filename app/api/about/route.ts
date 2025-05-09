import { NextResponse } from "next/server";

import { AboutMeData } from "@/types/about";
import { ApiResponse } from "@/types/api";

export async function GET(): Promise<NextResponse<ApiResponse<AboutMeData>>> {
  // TODO: データベースからデータを取得する処理を実装
  const data: AboutMeData = {
    title: "About Me",
    subtitle: "自己紹介",
    description:
      "フロントエンドエンジニアとして、ユーザー体験を重視したWebアプリケーションの開発に携わっています。React、TypeScript、Next.jsなどの最新技術を活用し、美しく使いやすいUIの実装を得意としています。",
    image: {
      src: "/images/about/profile.jpg",
      alt: "プロフィール画像",
    },
    skills: [
      {
        category: "フロントエンド",
        items: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
      },
      {
        category: "バックエンド",
        items: ["Node.js", "Express", "PostgreSQL", "MongoDB"],
      },
      {
        category: "その他",
        items: ["Git", "Docker", "AWS", "Figma"],
      },
    ],
    interests: [
      "UI/UXデザイン",
      "パフォーマンス最適化",
      "アクセシビリティ",
      "モダンな開発手法",
    ],
  };

  return NextResponse.json({
    data,
    status: 200,
    message: "Success",
  });
}
