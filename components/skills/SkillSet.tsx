"use client";

import { Container, Grid, Paper, Text, Title } from "@mantine/core";
import { motion } from "framer-motion";
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

  const skillCategories = [
    { title: "Frontend", skills: skills.frontend },
    { title: "Backend", skills: skills.backend },
    { title: "Database", skills: skills.database },
    { title: "Infrastructure", skills: skills.infrastructure },
    { title: "Tools", skills: skills.tools },
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
          className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-800 to-cyan-500 bg-clip-text text-transparent"
        >
          Skills
        </Title>

        <div className="space-y-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Title
                order={3}
                className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-800 to-cyan-500 bg-clip-text text-transparent"
              >
                {category.title}
              </Title>
              <Grid>
                {category.skills
                  .filter((skill) => skill.is_acquire)
                  .map((skill) => (
                    <Grid.Col
                      key={skill.label}
                      span={{ base: 6, sm: 4, md: 3 }}
                    >
                      <Paper
                        p="md"
                        radius="lg"
                        className="flex flex-col items-center justify-center h-40 shadow-lg transition-all duration-300"
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(240,249,255,0.95) 100%)",
                          border: "1px solid rgba(232,234,237,0.5)",
                        }}
                      >
                        <div className="relative w-16 h-16 mb-4">
                          <img
                            src={skill.image}
                            alt={skill.label}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <Text
                          size="lg"
                          className="text-center font-bold text-blue-800"
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
