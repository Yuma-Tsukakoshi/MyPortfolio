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
