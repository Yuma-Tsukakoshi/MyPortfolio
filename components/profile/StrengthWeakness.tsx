"use client";

import { Container, Grid, Paper, Text, Title } from "@mantine/core";
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
      className="py-4"
      style={{ maxWidth: 1200, margin: "8rem auto" }}
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
              <Paper
                radius="xl"
                p="md"
                className="relative overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
                  color: "#1e293b",
                }}
              >
                <div
                  className="absolute top-0 left-0 w-full h-2"
                  style={{
                    background: `linear-gradient(90deg, ${item.gradient.split(" ")[1]} 0%, ${item.gradient.split(" ")[3]} 100%)`,
                  }}
                />
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-3xl">{item.icon}</div>
                  <Title order={3} className="m-0">
                    {item.title}
                  </Title>
                </div>
                <Text size="sm" className="text-gray-600">
                  {item.description}
                </Text>
              </Paper>
            </Grid.Col>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
}
