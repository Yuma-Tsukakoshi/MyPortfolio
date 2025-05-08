"use client";

import { Paper, Text, ThemeIcon } from "@mantine/core";
import { IconColorSwatch } from "@tabler/icons-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import classes from "./CardGradient.module.css";

export function CardGradient() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
    >
      <Paper withBorder radius="md" className={classes.card}>
        <ThemeIcon
          size="xl"
          radius="md"
          variant="gradient"
          gradient={{ deg: 0, from: "blue", to: "cyan" }}
        >
          <IconColorSwatch size={28} stroke={1.5} />
        </ThemeIcon>
        <Text size="xl" fw={500} mt="md">
          テーマ設定ドキュメント
        </Text>
        <Text size="sm" mt="sm" c="dimmed">
          デフォルトテーマを任意の数の追加カラーで拡張し、シャドウ、半径、スペーシング、
          フォント、その他多くのプロパティを置き換えて、デザイン要件に合わせることができます。
          Mantineのテーマは単なるオブジェクトであり、コンテキストを通じてアプリケーションの
          任意の部分でサブスクライブし、独自のコンポーネントを構築するために使用できます。
        </Text>
      </Paper>
    </motion.div>
  );
}
