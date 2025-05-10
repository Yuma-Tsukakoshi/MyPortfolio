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
    education: {
      school: "〇〇大学",
      degree: "学士",
      field: "情報工学部",
      period: "2018-2022",
    },
    graduationYear: 2022,
    certifications: [
      {
        name: "AWS Certified Solutions Architect",
        issuer: "Amazon Web Services",
        date: "2023",
      },
    ],
    hobbies: [
      {
        icon: "📚",
        label: "読書",
      },
      {
        icon: "✈️",
        label: "旅行",
      },
      {
        icon: "📷",
        label: "写真撮影",
      },
    ],
    skills: [
      {
        category: "フロントエンド",
        items: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
      },
      {
        category: "バックエンド",
        items: ["Node.js", "Express", "PostgreSQL"],
      },
    ],
    interests: ["UI/UXデザイン", "パフォーマンス最適化", "アクセシビリティ"],
    socialLinks: {
      github: "https://github.com/yourusername",
      linkedin: "https://linkedin.com/in/yourusername",
      twitter: "https://twitter.com/yourusername",
    },
  };

  return NextResponse.json({
    status: 200,
    message: "Success",
    data,
  });
}
