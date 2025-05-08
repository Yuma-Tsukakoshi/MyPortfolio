"use client";

import { Container, Text, Title } from "@mantine/core";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <Container size="lg" className="py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="relative">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute -top-20 -left-20 w-40 h-40 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
          />
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="absolute -bottom-20 -right-20 w-40 h-40 bg-cyan-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"
          />
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="absolute top-20 left-1/2 w-40 h-40 bg-blue-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"
          />
        </div>

        <Title
          order={1}
          className="text-6xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"
        >
          Software Engineer
        </Title>
        <Text
          size="xl"
          className="text-center max-w-3xl mx-auto leading-relaxed"
          style={{ color: "#5f6368" }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            Passionate about creating elegant solutions to complex problems.
            Specializing in full-stack development with a focus on user
            experience and performance.
          </motion.span>
        </Text>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-12 flex justify-center space-x-4"
        >
          <a
            href="#works"
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 bg-white text-blue-600 rounded-full font-medium border-2 border-blue-600 hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>
    </Container>
  );
}
