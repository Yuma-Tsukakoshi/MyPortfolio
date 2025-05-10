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
        title: "シニアフロントエンドエンジニア",
        company: "テック株式会社",
        period: "2022年4月 - 現在",
        date: "2022年4月",
        description:
          "React、TypeScriptを使用したWebアプリケーションの開発。パフォーマンス最適化とUI/UX改善に注力。",
        image: {
          src: "/images/career/tech.jpg",
          alt: "テック社での業務風景",
        },
      },
      {
        title: "フロントエンドエンジニア",
        company: "スタートアップ株式会社",
        period: "2020年4月 - 2022年3月",
        date: "2020年4月",
        description:
          "Vue.jsを使用したWebアプリケーションの開発。新機能の実装とコードレビューを担当。",
        image: {
          src: "/images/career/startup.jpg",
          alt: "スタートアップ社での業務風景",
        },
      },
    ],
    education: {
      school: "〇〇大学",
      degree: "学士",
      field: "情報工学部 情報工学科",
      period: "2016年4月 - 2020年3月",
    },
    certifications: [
      {
        name: "AWS認定ソリューションアーキテクト",
        issuer: "Amazon Web Services",
        date: "2023年5月",
        image: {
          src: "/images/certifications/aws-sa.png",
          alt: "AWS認定ソリューションアーキテクト",
        },
      },
      {
        name: "情報処理安全確保支援士",
        issuer: "IPA",
        date: "2022年4月",
        image: {
          src: "/images/certifications/security-specialist.png",
          alt: "情報処理安全確保支援士",
        },
      },
    ],
  };

  return NextResponse.json({
    status: 200,
    message: "Success",
    data,
  });
}
