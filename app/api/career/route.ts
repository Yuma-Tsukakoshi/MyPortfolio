import { NextResponse } from "next/server";

import { ApiResponse } from "@/types/api";
import { CareerData } from "@/types/career";

export async function GET(): Promise<NextResponse<ApiResponse<CareerData>>> {
  // TODO: データベースからデータを取得する処理を実装
  const data: CareerData = {
    title: "Career",
    subtitle: "経歴",
    events: [
      {
        title: "フロントエンドエンジニア",
        company: "株式会社テック",
        period: "2022年4月 - 現在",
        description:
          "React、TypeScriptを使用したWebアプリケーションの開発。パフォーマンス最適化とUI/UX改善に注力。",
        image: {
          src: "/images/career/tech.jpg",
          alt: "テック社での業務風景",
        },
      },
      {
        title: "Webデベロッパー",
        company: "株式会社ウェブ",
        period: "2020年4月 - 2022年3月",
        description:
          "HTML、CSS、JavaScriptを使用したWebサイトの開発。レスポンシブデザインとアクセシビリティの実装。",
        image: {
          src: "/images/career/web.jpg",
          alt: "ウェブ社での業務風景",
        },
      },
    ],
    education: {
      school: "〇〇大学",
      degree: "情報工学部 情報工学科",
      graduationYear: "2020年",
    },
    certifications: [
      {
        name: "AWS認定ソリューションアーキテクト",
        image: {
          src: "/images/career/aws.jpg",
          alt: "AWS認定バッジ",
        },
        year: "2023",
      },
      {
        name: "Google Cloud Professional Developer",
        image: {
          src: "/images/career/gcp.jpg",
          alt: "GCP認定バッジ",
        },
        year: "2022",
      },
    ],
  };

  return NextResponse.json({
    data,
    status: 200,
    message: "Success",
  });
}
