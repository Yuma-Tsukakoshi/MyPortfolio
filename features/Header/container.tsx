import { HeaderData } from "@/types/header";

import { HeaderPresentation } from "./presentation";

export const Header = () => {
  // TODO: APIからデータを取得する処理を実装
  const data: HeaderData = {
    logo: {
      text: "My Portfolio",
      href: "/",
    },
    navItems: [
      { label: "About", href: "#about" },
      { label: "Works", href: "#works" },
      { label: "Skills", href: "#skills" },
      { label: "Career", href: "#career" },
      { label: "Contact", href: "#contact" },
    ],
    ctaButton: {
      label: "お問い合わせ",
      href: "#contact",
    },
  };

  return <HeaderPresentation data={data} />;
};
