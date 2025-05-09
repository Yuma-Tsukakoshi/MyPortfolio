"use client";

import { Title } from "@mantine/core";
import { motion } from "framer-motion";

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionTitle({ children, className }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className={className}
    >
      <Title
        order={2}
        style={{
          textAlign: "center",
          fontWeight: 900,
          fontSize: "2.2rem",
          marginBottom: "2.5rem",
          background: "linear-gradient(90deg, #1e40af 0%, #3b82f6 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {children}
      </Title>
    </motion.div>
  );
}
