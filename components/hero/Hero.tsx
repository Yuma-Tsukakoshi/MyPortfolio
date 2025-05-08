"use client";

import { Container, Text, Title } from "@mantine/core";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <Container size="lg" className="py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Title
          order={1}
          className="text-5xl font-bold mb-6 text-center"
          style={{ color: "#202124" }}
        >
          Welcome to My Portfolio
        </Title>
        <Text
          size="xl"
          className="text-center max-w-2xl mx-auto"
          style={{ color: "#5f6368" }}
        >
          Test
        </Text>
      </motion.div>
    </Container>
  );
}
