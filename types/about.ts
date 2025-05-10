import { ReactNode } from "react";

export interface SocialLink {
  name: string;
  url: string;
  icon: ReactNode;
}

export interface Hobby {
  icon: string;
  label: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface AboutMeData {
  title: string;
  subtitle: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  education: {
    school: string;
    degree: string;
    field: string;
    period: string;
  };
  graduationYear: number;
  certifications: {
    name: string;
    issuer: string;
    date: string;
  }[];
  hobbies: Hobby[];
  skills: Skill[];
  interests: string[];
  socialLinks: {
    github: string;
    linkedin: string;
    twitter: string;
  };
}
