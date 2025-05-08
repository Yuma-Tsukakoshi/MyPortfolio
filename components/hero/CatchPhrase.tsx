import { Button, Container, Stack, Text, Title } from "@mantine/core";
import { IconArrowDown } from "@tabler/icons-react";
import { motion } from "framer-motion";

import styles from "./CatchPhrase.module.css";

export function CatchPhrase() {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("about");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Container size="lg" className={styles.container}>
      <Stack spacing="xl" align="center" className={styles.content}>
        {/* ローディングアニメーション */}
        <motion.div
          className={styles.loadingContainer}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.loadingCircle} />
          <div className={styles.loadingCircle} />
          <div className={styles.loadingCircle} />
        </motion.div>

        {/* キャッチコピー */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <Title order={1} className={styles.title}>
            <span className={styles.highlight}>技術</span>で
            <br />
            <span className={styles.highlight}>未来</span>を
            <br />
            <span className={styles.highlight}>創造</span>する
          </Title>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <Text size="xl" className={styles.subtitle}>
            フロントエンド開発 × バックエンド開発 × 研究
          </Text>
        </motion.div>

        {/* 下矢印ボタン */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className={styles.arrowContainer}
        >
          <Button
            variant="light"
            size="lg"
            radius="xl"
            className={styles.arrowButton}
            onClick={scrollToNextSection}
          >
            <IconArrowDown size={24} className={styles.arrowIcon} />
          </Button>
        </motion.div>
      </Stack>
    </Container>
  );
}
