"use client";

import { Badge, Card, Container, Grid, Text } from "@mantine/core";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

import { SectionTitle } from "@/components/common/SectionTitle";

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

const categoryLabels = {
  frontend: "フロントエンド",
  backend: "バックエンド",
  database: "データベース",
  infrastructure: "インフラストラクチャ",
  tools: "ツール",
};

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

  // アイコンサイズ
  const iconSize = 80;
  const iconClass = `rounded-xl bg-gradient-to-br from-blue-600 via-blue-400 to-cyan-400 flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-200`;

  const renderSkillCategory = (category: string, categorySkills: Skill[]) => {
    const acquiredSkills = categorySkills.filter(
      (skill: Skill) => skill.is_acquire,
    );
    if (acquiredSkills.length === 0) return null;

    return (
      <div key={category}>
        <div className="flex items-center gap-2">
          <Badge size="lg" variant="filled" color="blue">
            {categoryLabels[category as keyof typeof categoryLabels]}
          </Badge>
          <Text size="sm" c="dimmed">
            {acquiredSkills.length} スキル
          </Text>
        </div>
        <Grid gutter="md" justify="flex-start">
          {acquiredSkills.map((skill: Skill) => (
            <Grid.Col key={skill.label} span={{ base: 4, sm: 3, md: 1 }}>
              <div
                className={iconClass}
                style={{ width: iconSize, height: iconSize }}
              >
                <Image
                  src={skill.image}
                  alt={skill.label}
                  width={iconSize - 20}
                  height={iconSize - 20}
                  className="object-contain"
                  unoptimized
                />
              </div>
            </Grid.Col>
          ))}
        </Grid>
      </div>
    );
  };

  return (
    <Container size="lg" style={{ maxWidth: 850 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-100 to-gray-300 rounded-3xl -z-10" />
        <SectionTitle title="Skills" subtitle="スキル" />
        <Card
          radius="xl"
          style={{
            background: "linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)",
            backdropFilter: "blur(10px)",
          }}
          className="transition-transform duration-300 hover:scale-105 hover:bg-gray-100 rounded-2xl"
        >
          {/* フロントエンドとバックエンド */}
          {renderSkillCategory("frontend", skills.frontend)}
          {renderSkillCategory("backend", skills.backend)}

          {/* データベース、インフラストラクチャ、ツールを横並びに */}
          <div className="grid grid-cols-3 gap-4">
            {renderSkillCategory("database", skills.database)}
            {renderSkillCategory("infrastructure", skills.infrastructure)}
            {renderSkillCategory("tools", skills.tools)}
          </div>
        </Card>
      </motion.div>
    </Container>
  );
}
