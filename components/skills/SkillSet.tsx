"use client";

import { Container, Paper, Text, Title } from "@mantine/core";
import { motion } from "framer-motion";

import { skills } from "@/data/skills";

export default function SkillSet() {
  return (
    <Container size="lg" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Title
          order={2}
          className="text-3xl font-bold mb-8 text-center"
          style={{ color: "#202124" }}
        >
          Skills
        </Title>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Paper
                p="xl"
                radius="md"
                style={{
                  background:
                    "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
                  border: "1px solid #e8eaed",
                }}
              >
                <div className="flex items-center space-x-4">
                  <skill.icon size={32} style={{ color: "#1a73e8" }} />
                  <div>
                    <Title order={3} style={{ color: "#202124" }}>
                      {skill.name}
                    </Title>
                    <Text c="#5f6368" mt="xs">
                      {skill.level}
                    </Text>
                  </div>
                </div>
                <Text c="#5f6368" mt="md">
                  {skill.description}
                </Text>
              </Paper>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Container>
  );
}
