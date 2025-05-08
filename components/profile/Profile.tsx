"use client";

import { Card, Container, Paper, Stack, Text, Title } from "@mantine/core";
import { IconTarget } from "@tabler/icons-react";
import { motion } from "framer-motion";
import React from "react";

import styles from "./Profile.module.css";

interface ProfileEvent {
  year: string;
  title: string;
  description: string;
}

export function Profile() {
  const events: ProfileEvent[] = [
    {
      year: "2024",
      title: "大学院修士課程 入学",
      description: "情報理工学系研究科 コンピュータ科学専攻",
    },
    {
      year: "2023",
      title: "大学 卒業",
      description: "情報理工学系研究科 コンピュータ科学専攻",
    },
    {
      year: "2022",
      title: "研究室配属",
      description: "情報理工学系研究科 コンピュータ科学専攻",
    },
    {
      year: "2021",
      title: "大学 入学",
      description: "情報理工学系研究科 コンピュータ科学専攻",
    },
  ];

  return (
    <Container size="lg" className={styles.container}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Title
          order={2}
          className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-800 to-cyan-500 bg-clip-text text-transparent"
        >
          Profile
        </Title>

        <div className={styles.timeline}>
          {events.map((event, index) => (
            <motion.div
              key={event.year}
              className={`${styles.timelineItem} ${
                index % 2 === 0 ? styles.left : styles.right
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className={styles.timelineContent}>
                <Paper
                  p="xl"
                  radius="lg"
                  className={styles.card}
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(240,249,255,0.98) 100%)",
                    border: "1px solid rgba(232,234,237,0.5)",
                  }}
                >
                  <Text
                    size="sm"
                    className={styles.year}
                    style={{
                      color: "#2563eb",
                      fontWeight: 600,
                    }}
                  >
                    {event.year}
                  </Text>
                  <Title order={3} className={styles.title}>
                    {event.title}
                  </Title>
                  <Text size="md" className={styles.description}>
                    {event.description}
                  </Text>
                </Paper>
              </div>
            </motion.div>
          ))}
          <div className={styles.timelineLine} />
        </div>

        {/* 強み・弱み・展望 */}
        <Card className={styles.summaryCard}>
          <Stack>
            <div>
              <Title order={3} className={styles.summaryTitle}>
                <IconTarget size={32} className={styles.summaryIcon} />
                強み
              </Title>
              <Text>• フロントエンドとバックエンドの両方の開発経験</Text>
              <Text>• チーム開発でのコミュニケーション能力</Text>
              <Text>• 研究と実務の両面からの問題解決アプローチ</Text>
            </div>

            <div>
              <Title order={3} className={styles.summaryTitle}>
                <IconTarget size={32} className={styles.summaryIcon} />
                弱み
              </Title>
              <Text>• 大規模システムの設計経験が不足</Text>
              <Text>• クラウドインフラの知識をさらに深める必要</Text>
              <Text>• 英語でのコミュニケーション能力の向上</Text>
            </div>

            <div>
              <Title order={3} className={styles.summaryTitle}>
                <IconTarget size={32} className={styles.summaryIcon} />
                今後の展望
              </Title>
              <Text>• フルスタックエンジニアとしての成長</Text>
              <Text>• 研究と実務を融合させた新しい価値の創造</Text>
              <Text>• 技術を通じた社会課題の解決</Text>
            </div>
          </Stack>
        </Card>
      </motion.div>
    </Container>
  );
}
