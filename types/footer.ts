export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface FooterData {
  sections: FooterSection[];
  copyright: string;
  socialLinks: {
    github: string;
    linkedin: string;
    twitter: string;
  };
}
