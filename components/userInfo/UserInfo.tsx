"use client";

import { Avatar, Container, Group, Paper, Text, Title } from "@mantine/core";
import { motion } from "framer-motion";

import { SectionTitle } from "@/components/common/SectionTitle";

export function UserInfo() {
  return (
    <Container size="lg" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Paper
          p="xl"
          radius="xl"
          style={{
            background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
            border: "1px solid rgba(232,234,237,0.5)",
            backdropFilter: "blur(10px)",
          }}
          className="hover:shadow-xl transition-all duration-300"
        >
          <Group className="flex flex-col sm:flex-row items-center sm:items-start space-y-6 sm:space-y-0 sm:space-x-8">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Avatar
                size={160}
                radius="xl"
                src="/avatar.jpg"
                alt="Your Name"
                className="border-4 border-white shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center sm:text-left"
            >
              <SectionTitle>User Info</SectionTitle>
              <Title
                order={2}
                className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"
              >
                Your Name
              </Title>
              <Text size="xl" className="text-blue-600 font-medium mb-4">
                Software Engineer
              </Text>
              <Text className="text-gray-600 max-w-xl leading-relaxed">
                Based in Tokyo, Japan. Specializing in full-stack development
                with expertise in React, Node.js, and cloud technologies.
                Passionate about creating scalable and maintainable
                applications.
              </Text>
              <div className="mt-6 flex flex-wrap gap-4 justify-center sm:justify-start">
                <motion.a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full text-sm font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  GitHub
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-white text-blue-600 rounded-full text-sm font-medium border-2 border-blue-600 hover:shadow-lg transition-all duration-300 hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  LinkedIn
                </motion.a>
              </div>
            </motion.div>
          </Group>
        </Paper>
      </motion.div>
    </Container>
  );
}
