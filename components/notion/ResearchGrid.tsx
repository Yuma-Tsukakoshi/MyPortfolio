"use client";

import NotionCard from "@/components/notion/NotionCard";

const projects = [
  {
    id: "19c7add2-a039-8118-a951-ef8d2719e731",
    title: "Project Alpha",
    description: "This is an AI-driven research project.",
    image: "https://placehold.jp/300x200.png",
  },
];

export default function ResearchGrid() {
  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {projects.map((project) => (
        <NotionCard
          key={project.id}
          pageId={project.id}
          title={project.title}
          description={project.description}
          image={project.image}
        />
      ))}
    </div>
  );
}
