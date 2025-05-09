import { NextResponse } from "next/server";

import { ApiResponse } from "@/types/api";
import { HeroData } from "@/types/hero";

export async function GET(): Promise<NextResponse<ApiResponse<HeroData>>> {
  // TODO: データベースからデータを取得する処理を実装
  const data: HeroData = {
    title: "フロントエンドエンジニア",
    subtitle: "Welcome to My Portfolio",
    description:
      "ユーザー体験を重視した、美しく使いやすいWebアプリケーションの開発を得意としています。最新の技術を活用し、クリエイティブな解決策を提供します。",
    ctaButton: {
      label: "プロジェクトを見る",
      href: "#works",
    },
    image: {
      src: "/images/hero/profile.jpg",
      alt: "プロフィール画像",
    },
    stats: [
      {
        label: "プロジェクト数",
        value: "50+",
      },
      {
        label: "クライアント数",
        value: "30+",
      },
      {
        label: "経験年数",
        value: "5年",
      },
    ],
  };

  return NextResponse.json({
    data,
    status: 200,
    message: "Success",
  });
}
