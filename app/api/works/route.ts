import { NextResponse } from "next/server";

import { ApiResponse } from "@/types/api";
import { WorksData } from "@/types/works";

export async function GET(): Promise<NextResponse<ApiResponse<WorksData>>> {
  // TODO: データベースからデータを取得する処理を実装
  const data: WorksData = {
    title: "Works",
    subtitle: "制作実績",
    projects: [
      {
        title: "ECサイト",
        description:
          "React、TypeScript、Next.jsを使用したモダンなECサイト。レスポンシブデザインとパフォーマンス最適化を実装。",
        image: {
          src: "/images/works/ec-site.jpg",
          alt: "ECサイトのスクリーンショット",
        },
        technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
        links: {
          demo: "https://example.com/demo",
          github: "https://github.com/username/ec-site",
        },
      },
      {
        title: "タスク管理アプリ",
        description:
          "React、Firebaseを使用したリアルタイムタスク管理アプリ。ドラッグ&ドロップ機能とリアルタイム同期を実装。",
        image: {
          src: "/images/works/task-app.jpg",
          alt: "タスク管理アプリのスクリーンショット",
        },
        technologies: ["React", "Firebase", "Material-UI"],
        links: {
          demo: "https://example.com/demo",
          github: "https://github.com/username/task-app",
        },
      },
    ],
  };

  return NextResponse.json({
    data,
    status: 200,
    message: "Success",
  });
}
