import { NextResponse } from "next/server";

import { ApiResponse } from "@/types/api";
import { WorksData } from "@/types/works";

export async function GET(): Promise<NextResponse<ApiResponse<WorksData>>> {
  // TODO: データベースからデータを取得する処理を実装
  const data: WorksData = {
    title: "Works",
    subtitle: "制作実績",
    items: [
      {
        id: "1",
        title: "ECサイト",
        description:
          "React、Next.js、TypeScriptを使用したECサイト。商品一覧、詳細、カート、決済機能を実装。",
        image: {
          src: "/images/works/ec-site.jpg",
          alt: "ECサイトのスクリーンショット",
        },
        technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
        links: [
          {
            name: "GitHub",
            url: "https://github.com/username/ec-site",
          },
          {
            name: "Live Demo",
            url: "https://ec-site.example.com",
          },
        ],
      },
      {
        id: "2",
        title: "ポートフォリオサイト",
        description:
          "Next.js、TypeScript、Mantineを使用した個人ポートフォリオサイト。アトミックデザインとコンテナ/プレゼンテーションパターンを採用。",
        image: {
          src: "/images/works/portfolio.jpg",
          alt: "ポートフォリオサイトのスクリーンショット",
        },
        technologies: ["Next.js", "TypeScript", "Mantine", "Tailwind CSS"],
        links: [
          {
            name: "GitHub",
            url: "https://github.com/username/portfolio",
          },
          {
            name: "Live Demo",
            url: "https://portfolio.example.com",
          },
        ],
      },
    ],
  };

  return NextResponse.json({
    status: 200,
    message: "Success",
    data,
  });
}
