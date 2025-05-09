import { ReactNode } from "react";

export interface BlogPost {
  title: string;
  description: string;
  platform: string;
  date: string;
  url: string;
  tags: string[];
  icon: ReactNode;
}

export interface WorksResponse {
  blogPosts: BlogPost[];
}

export interface WorkItem {
  id: string;
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  technologies: string[];
  links: {
    name: string;
    url: string;
  }[];
}

export interface WorksData {
  title: string;
  subtitle: string;
  items: WorkItem[];
}
