import { CareerData } from "@/types/career";

import { CareerPresentation } from "./presentation";

export const Career = () => {
  // TODO: APIからデータを取得する処理を実装
  const data: CareerData = {
    education: {
      school: "〇〇大学",
      department: "情報工学部",
      graduationYear: 2023,
    },
    certifications: [
      {
        name: "AWS Certified Solutions Architect",
        image: "/images/certifications/aws-saa.png",
      },
      {
        name: "応用情報技術者",
        image: "/images/certifications/ap.png",
      },
    ],
    events: [
      {
        title: "新卒入社",
        description: "大手IT企業に新卒として入社",
        date: "2023年4月",
        image: "/images/career/entry.jpg",
      },
      {
        title: "プロジェクトリーダー",
        description: "大規模システム開発プロジェクトのリーダーを担当",
        date: "2024年1月",
        image: "/images/career/leader.jpg",
      },
    ],
  };

  return <CareerPresentation data={data} />;
};
