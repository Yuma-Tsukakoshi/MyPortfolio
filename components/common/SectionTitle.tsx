"use client";

import { Title } from "@mantine/core";
import { motion } from "framer-motion";

import styles from "./SectionTitle.module.css";

interface SectionTitleProps {
  title: string;
  subtitle: string;
}

export function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className={styles.container}
    >
      <Title order={2} className={styles.title}>
        {title}
      </Title>
      <Title order={3} className={styles.subtitle}>
        {subtitle}
      </Title>
    </motion.div>
  );
}
