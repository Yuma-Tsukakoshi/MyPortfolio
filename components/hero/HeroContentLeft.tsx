"use client";

import { Button, Container, Overlay, Text, Title } from "@mantine/core";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import classes from "./HeroContentLeft.module.css";

export function HeroContentLeft() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className={classes.hero} ref={ref}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      />
      <Container className={classes.container} size="md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <Title className={classes.title}>
            完全な機能を備えたReactコンポーネントライブラリ
          </Title>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Text className={classes.description} size="xl" mt="xl">
            これまでにない速さで完全に機能するアクセシブルなWebアプリケーションを構築
            –
            Mantineは120以上のカスタマイズ可能なコンポーネントとフックを提供し、
            あらゆる状況に対応します
          </Text>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button
            variant="gradient"
            size="xl"
            radius="xl"
            className={classes.control}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            始める
          </Button>
        </motion.div>
      </Container>
    </div>
  );
}
