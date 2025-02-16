"use client";

import { Card, Container, SimpleGrid, Title } from "@mantine/core";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export type Skill = {
  label: string;
  image: string;
  is_acquire: boolean;
};

export type SkillsData = {
  frontend: Skill[];
  backend: Skill[];
  database: Skill[];
  infrastructure: Skill[];
  tools: Skill[];
};

export function GridSkillsSection() {
  const [skills, setSkills] = useState<SkillsData>({
    frontend: [],
    backend: [],
    database: [],
    infrastructure: [],
    tools: [],
  });

  // API Routesからデータを取得
  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await fetch("/api/skills");
        const data: SkillsData = await response.json();

        setSkills({
          frontend: data.frontend.filter((skill: Skill) => skill.is_acquire),
          backend: data.backend.filter((skill: Skill) => skill.is_acquire),
          database: data.database.filter((skill: Skill) => skill.is_acquire),
          infrastructure: data.infrastructure.filter(
            (skill: Skill) => skill.is_acquire,
          ),
          tools: data.tools.filter((skill: Skill) => skill.is_acquire),
        });
      } catch (error) {
        console.error("Error fetching skills:", error);
      }
    };
    fetchSkills();
  }, []);

  return (
    <Container my="md" className="bg-white p-8 pt-2 rounded-2xl shadow-lg">
      {Object.entries(skills).map(
        ([category, skillList]) =>
          (skillList as Skill[]).length > 0 && (
            <Card key={category} className="mb-6 p-4 rounded-lg shadow-md">
              <Title order={5} className="mb-4">
                {category.toUpperCase()}
              </Title>
              <SimpleGrid cols={{ base: 2, sm: 3, md: 4, lg: 8 }} spacing="lg">
                {(skillList as Skill[]).map((skill, index) => (
                  <Image
                    key={index}
                    src={skill.image}
                    alt={skill.label}
                    width={100}
                    height={100}
                  />
                ))}
              </SimpleGrid>
            </Card>
          ),
      )}
    </Container>
  );
}
