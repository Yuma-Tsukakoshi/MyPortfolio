"use client";

import { Card, Container, Grid, Title } from "@mantine/core";
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

  // 並び順を維持
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
    .filter((s) => s && s.is_acquire) as Skill[];

  const middleSkills = [
    "aws",
    "docker",
    "mysql",
    "postgresql",
    "mongodb",
    "react",
    "javascript",
  ]
    .map(getSkillByName)
    .filter((s) => s && s.is_acquire) as Skill[];

  const otherSkills = [
    ...skills.frontend,
    ...skills.backend,
    ...skills.database,
    ...skills.infrastructure,
    ...skills.tools,
  ].filter(
    (skill) =>
      skill.is_acquire &&
      !topSkills.some((s) => s.label === skill.label) &&
      !middleSkills.some((s) => s.label === skill.label),
  );

  // アイコンサイズ
  const topIconSize = 88;
  const middleIconSize = 68;
  const otherIconSize = 36;
  const iconClass = `rounded-xl bg-gradient-to-br from-blue-600 via-blue-400 to-cyan-400 flex items-center justify-center mx-auto shadow-md`;

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
          className="text-5xl font-extrabold mb-8 text-center bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-400 bg-clip-text text-transparent tracking-tight drop-shadow-lg"
          style={{ letterSpacing: "0.02em" }}
        >
          Skill Set
        </Title>
        <Card
          shadow="xl"
          radius="xl"
          p="xl"
          style={{
            background: "#fff",
            border: "4px solid",
            borderImage: "linear-gradient(90deg, #2563eb 0%, #38bdf8 100%) 1",
            boxShadow: "0 8px 32px 0 rgba(31, 72, 180, 0.15)",
          }}
        >
          {/* 1段目 */}
          <Grid gutter={0} justify="center" align="center" className="mb-3">
            {topSkills.map((skill) => (
              <Grid.Col key={skill.label} span={{ base: 3, sm: 2, md: 1 }}>
                <div
                  className={iconClass}
                  style={{ width: topIconSize, height: topIconSize }}
                >
                  <Image
                    src={skill.image}
                    alt={skill.label}
                    width={topIconSize - 18}
                    height={topIconSize - 18}
                    className="object-contain"
                    unoptimized
                  />
                </div>
              </Grid.Col>
            ))}
          </Grid>
          {/* 2段目 */}
          <Grid gutter={0} justify="center" align="center" className="mb-3">
            {middleSkills.map((skill) => (
              <Grid.Col key={skill.label} span={{ base: 3, sm: 2, md: 1 }}>
                <div
                  className={iconClass}
                  style={{ width: middleIconSize, height: middleIconSize }}
                >
                  <Image
                    src={skill.image}
                    alt={skill.label}
                    width={middleIconSize - 12}
                    height={middleIconSize - 12}
                    className="object-contain"
                    unoptimized
                  />
                </div>
              </Grid.Col>
            ))}
          </Grid>
          {/* 3段目 */}
          <Grid gutter={1} justify="center" align="center">
            {otherSkills.map((skill) => (
              <Grid.Col key={skill.label} span={{ base: 3, sm: 2, md: 1 }}>
                <div
                  className={iconClass}
                  style={{ width: otherIconSize, height: otherIconSize }}
                >
                  <Image
                    src={skill.image}
                    alt={skill.label}
                    width={otherIconSize - 8}
                    height={otherIconSize - 8}
                    className="object-contain"
                    unoptimized
                  />
                </div>
              </Grid.Col>
            ))}
          </Grid>
        </Card>
      </motion.div>
    </Container>
  );
}
