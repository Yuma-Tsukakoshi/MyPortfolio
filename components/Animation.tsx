"use client";

import { motion } from "framer-motion";

interface AnimationProps {
  children: React.ReactNode;
  delay?: number;
}

export default function Animation({ children, delay = 0 }: AnimationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
