"use client";

import { Title } from "@mantine/core";
import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
}

export function SectionTitle({ title }: SectionTitleProps) {
  return (
    <div className="relative py-8">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-gray-200"></div>
      </div>
      <div className="relative flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Title
            order={2}
            className="text-4xl font-bold bg-gradient-to-r from-blue-800 to-cyan-500 bg-clip-text text-transparent px-8"
          >
            {title}
          </Title>
        </motion.div>
      </div>
    </div>
  );
}
