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

export interface AboutMeData {
  education: string;
  graduationYear: string;
  certifications: string[];
  hobbies: Hobby[];
  socialLinks: SocialLink[];
}
