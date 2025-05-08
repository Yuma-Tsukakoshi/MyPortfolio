"use client";

import { Container, Grid, Paper, Text, Title } from "@mantine/core";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

interface Skill {
  label: string;
  image: string;
  is_acquire: boolean;
}

interface SkillsResponse {
  frontend: Skill[];
  backend: Skill[];
  database: Skill[];
  infrastructure: Skill[];
  tools: Skill[];
}

export default function SkillSet() {
  const [skills, setSkills] = React.useState<SkillsResponse | null>(null);

  React.useEffect(() => {
    const fetchSkills = async () => {
      const response = await fetch("/api/skills");
      const data = await response.json();
      setSkills(data);
    };
    fetchSkills();
  }, []);

  if (!skills) return null;

  // スキルを優先度順に並び替え
  const getSkillByName = (name: string) => {
    const allSkills = [
      ...skills.frontend,
      ...skills.backend,
      ...skills.database,
      ...skills.infrastructure,
      ...skills.tools,
    ];
    return allSkills.find(
      (skill) => skill.label.toLowerCase() === name.toLowerCase(),
    );
  };

  const topSkills = [
    "laravel",
    "php",
    "flask",
    "python",
    "nextjs",
    "typescript",
    "git",
    "github",
  ]
    .map(getSkillByName)
    .filter(Boolean) as Skill[];

  const middleSkills = [
    "aws",
    "docker",
    "postgresql",
    "mysql",
    "mongodb",
    "react",
    "javascript",
  ]
    .map(getSkillByName)
    .filter(Boolean) as Skill[];

  const otherSkills = [
    ...skills.frontend,
    ...skills.backend,
    ...skills.database,
    ...skills.infrastructure,
    ...skills.tools,
  ].filter(
    (skill) =>
      !topSkills.some((s) => s.label === skill.label) &&
      !middleSkills.some((s) => s.label === skill.label),
  );

  const skillRows = [
    { title: "主要スキル", skills: topSkills, iconSize: "w-24 h-24" },
    { title: "中級スキル", skills: middleSkills, iconSize: "w-20 h-20" },
    { title: "その他のスキル", skills: otherSkills, iconSize: "w-16 h-16" },
  ];

  return (
    <Container size="lg" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Title
          order={2}
          className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-800 to-cyan-500 bg-clip-text text-transparent"
        >
          スキルセット
        </Title>

        <div className="space-y-12">
          {skillRows.map((row, index) => (
            <motion.div
              key={row.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Title
                order={3}
                className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-800 to-cyan-500 bg-clip-text text-transparent"
              >
                {row.title}
              </Title>
              <Grid>
                {row.skills
                  .filter((skill) => skill.is_acquire)
                  .map((skill) => (
                    <Grid.Col
                      key={skill.label}
                      span={{ base: 4, sm: 3, md: 2 }}
                    >
                      <Paper
                        p="md"
                        radius="lg"
                        className={`flex flex-col items-center justify-center shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl ${
                          index === 0 ? "h-48" : index === 1 ? "h-40" : "h-32"
                        }`}
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(240,249,255,0.98) 100%)",
                          border: "1px solid rgba(232,234,237,0.5)",
                        }}
                      >
                        <div className={`relative ${row.iconSize} mb-3`}>
                          <Image
                            src={skill.image}
                            alt={skill.label}
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 64px, (max-width: 1200px) 80px, 96px"
                          />
                        </div>
                        <Text
                          size="sm"
                          className="text-center font-semibold text-blue-800"
                        >
                          {skill.label}
                        </Text>
                      </Paper>
                    </Grid.Col>
                  ))}
              </Grid>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Container>
  );
}
