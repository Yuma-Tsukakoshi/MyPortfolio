"use client";

import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconExternalLink,
} from "@tabler/icons-react";

import { AboutMeData } from "@/types/about";

import { AboutMePresentation } from "./presentation";

export const AboutMeContainer = () => {
  const data: AboutMeData = {
    education: "慶應義塾大学 理工学研究科 開放環境科学専攻 修士1年",
    graduationYear: "2027年卒業予定",
    certifications: ["基本情報技術者", "応用情報技術者"],
    hobbies: [
      { icon: "🎮", label: "ゲーム" },
      { icon: "🎵", label: "音楽鑑賞" },
      { icon: "📚", label: "読書" },
    ],
    socialLinks: [
      {
        name: "GitHub",
        url: "https://github.com/Yuma-Tsukakoshi",
        icon: <IconBrandGithub size={24} />,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/yuma-tsukakoshi-741646314/",
        icon: <IconBrandLinkedin size={24} />,
      },
      {
        name: "Qiita",
        url: "https://qiita.com/yukkun",
        icon: <IconExternalLink size={24} />,
      },
    ],
  };

  return <AboutMePresentation data={data} />;
};
