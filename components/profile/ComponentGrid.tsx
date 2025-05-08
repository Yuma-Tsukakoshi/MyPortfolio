"use client";

import { Grid, Title } from "@mantine/core";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import { CardGradient } from "./CardGradient";

export function ComponentGridForProfile() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Grid>
        <Grid.Col span={6}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Title order={4}>強み</Title>
            <CardGradient />
          </motion.div>
        </Grid.Col>
        <Grid.Col span={6}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Title order={4}>弱み</Title>
            <CardGradient />
          </motion.div>
        </Grid.Col>
        <Grid.Col span={12}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Title order={4}>今後の展望</Title>
            <CardGradient />
          </motion.div>
        </Grid.Col>
      </Grid>
    </motion.div>
  );
}
