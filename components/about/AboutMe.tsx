"use client";

import { Container, Paper, Text, Title } from "@mantine/core";
import {
  IconBrandGit,
  IconBrandGithub,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

export function AboutMe() {
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
          About Me
        </Title>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Paper
            p="xl"
            radius="xl"
            className="hover:shadow-xl transition-all duration-300"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(240,249,255,0.95) 100%)",
              border: "1px solid rgba(232,234,237,0.5)",
            }}
          >
            <Title
              order={3}
              className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-800 to-cyan-500 bg-clip-text text-transparent"
            >
              Social Links
            </Title>
            <div className="flex flex-col space-y-6">
              <a
                href="https://github.com/Yuma-Tsukakoshi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 rounded-lg hover:bg-blue-50 transition-colors duration-300"
              >
                <IconBrandGithub size={48} className="text-blue-800" />
                <div>
                  <Text size="xl" className="font-semibold text-blue-800">
                    GitHub
                  </Text>
                  <Text size="sm" className="text-gray-600">
                    Check out my projects and contributions
                  </Text>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/yuma-tsukakoshi-741646314/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 rounded-lg hover:bg-blue-50 transition-colors duration-300"
              >
                <IconBrandLinkedin size={48} className="text-blue-800" />
                <div>
                  <Text size="xl" className="font-semibold text-blue-800">
                    LinkedIn
                  </Text>
                  <Text size="sm" className="text-gray-600">
                    Connect with me professionally
                  </Text>
                </div>
              </a>
              <a
                href="https://qiita.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 rounded-lg hover:bg-blue-50 transition-colors duration-300"
              >
                <IconBrandGit size={48} className="text-blue-800" />
                <div>
                  <Text size="xl" className="font-semibold text-blue-800">
                    Qiita
                  </Text>
                  <Text size="sm" className="text-gray-600">
                    Read my technical articles
                  </Text>
                </div>
              </a>
            </div>
          </Paper>

          <Paper
            p="xl"
            radius="xl"
            className="hover:shadow-xl transition-all duration-300"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(240,249,255,0.95) 100%)",
              border: "1px solid rgba(232,234,237,0.5)",
            }}
          >
            <Title
              order={3}
              className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-800 to-cyan-500 bg-clip-text text-transparent"
            >
              Certifications
            </Title>
            <div className="space-y-6">
              <div className="p-4 rounded-lg bg-gradient-to-r from-blue-50 to-cyan-50">
                <Text size="xl" className="font-bold text-blue-800 mb-2">
                  基本情報技術者
                </Text>
                <Text size="lg" className="text-gray-700">
                  取得時期: 2023年
                </Text>
              </div>
              <div className="p-4 rounded-lg bg-gradient-to-r from-blue-50 to-cyan-50">
                <Text size="xl" className="font-bold text-blue-800 mb-2">
                  応用情報技術者
                </Text>
                <Text size="lg" className="text-gray-700">
                  取得時期: 2024年
                </Text>
              </div>
            </div>
          </Paper>
        </div>
      </motion.div>
    </Container>
  );
}
