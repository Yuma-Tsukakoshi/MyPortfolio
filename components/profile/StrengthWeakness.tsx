"use client";

import { Card, Container, Grid, Text, Title } from "@mantine/core";
import { motion } from "framer-motion";

const items = [
  {
    title: "強み",
    description:
      "LaravelとNext.jsを中心としたフルスタック開発の経験。チーム開発でのコミュニケーション能力と、新しい技術への積極的な学習意欲。",
    gradient: "from-blue-500 to-cyan-400",
    icon: "💪",
  },
  {
    title: "弱み",
    description:
      "大規模システムの設計経験がまだ少ない。クラウドインフラの深い知識が必要。パフォーマンス最適化の経験を積む必要がある。",
    gradient: "from-orange-500 to-red-400",
    icon: "🎯",
  },
  {
    title: "展望",
    description:
      "クラウドネイティブアーキテクチャの習得。AI/MLの実装経験の獲得。オープンソースへの貢献。チームリーダーとしての成長。",
    gradient: "from-purple-500 to-pink-400",
    icon: "🚀",
  },
];

export function StrengthWeakness() {
  return (
    <Container
      size="lg"
      className="my-12 py-4"
      style={{ maxWidth: 900, margin: "0 auto" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Grid gutter="xl">
          {items.map((item) => (
            <Grid.Col key={item.title} span={{ base: 12, md: 4 }}>
              <Card
                radius="xl"
                padding="xl"
                className={`text-white`}
                style={{
                  background:
                    "linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)",
                  color: "#1e293b",
                  backdropFilter: "blur(10px)",
                }}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <Title order={3} className="text-white mb-4">
                  {item.title}
                </Title>
                <Text size="lg" className="text-white/90">
                  {item.description}
                </Text>
              </Card>
            </Grid.Col>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
}
