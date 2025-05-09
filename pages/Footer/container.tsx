"use client";

import { FooterData } from "@/types/footer";

import { FooterPresentation } from "./presentation";

export const Footer = () => {
  // TODO: APIからデータを取得する処理を実装
  const data: FooterData = {
    sections: [
      {
        title: "About",
        links: [
          { label: "プロフィール", href: "#about" },
          { label: "経歴", href: "#career" },
          { label: "スキル", href: "#skills" },
        ],
      },
      {
        title: "Works",
        links: [
          { label: "ポートフォリオ", href: "#works" },
          { label: "ブログ", href: "/blog" },
        ],
      },
      {
        title: "Contact",
        links: [
          { label: "お問い合わせ", href: "#contact" },
          { label: "SNS", href: "#social" },
        ],
      },
      {
        title: "Legal",
        links: [
          { label: "プライバシーポリシー", href: "/privacy" },
          { label: "利用規約", href: "/terms" },
        ],
      },
    ],
    copyright: "© 2024 My Portfolio. All rights reserved.",
    socialLinks: {
      github: "https://github.com/example",
      linkedin: "https://linkedin.com/in/example",
      twitter: "https://twitter.com/example",
    },
  };

  return <FooterPresentation data={data} />;
};
