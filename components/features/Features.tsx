"use client";

import { Container, Grid, Paper, Text } from "@mantine/core";
import { motion } from "framer-motion";

import { SectionTitle } from "@/components/common/SectionTitle";

interface PersonalityTrait {
  title: string;
  value: number;
  description: string;
}

const personalityTraits: PersonalityTrait[] = [
  {
    title: "リーダーシップ",
    value: 4,
    description: "チームを率いて目標達成に向けて導く力",
  },
  {
    title: "計画性",
    value: 5,
    description: "物事を計画的に進め、リスクを考慮する力",
  },
  {
    title: "論理的思考",
    value: 4,
    description: "物事の本質を深く理解し、論理的に解決する力",
  },
  {
    title: "本質重視",
    value: 3,
    description: "問題の本質を見極め、根本的な解決を図る力",
  },
  {
    title: "チームプレイ",
    value: 4,
    description: "チームの一員として協調的に活動する力",
  },
];

interface RatingCircleProps {
  value: number;
  index: number;
  maxIndex: number;
}

const RatingCircle = ({ value, index, maxIndex }: RatingCircleProps) => {
  const isFilled = index < Math.floor(value);
  const isPartial = index === Math.floor(value) && value % 1 !== 0;
  const baseSize = 24 - Math.abs(index - maxIndex / 2) * 3;

  return (
    <div
      style={{ width: baseSize, height: baseSize, marginRight: "4px" }}
      className="inline-block"
    >
      <div
        className="rounded-full border-2"
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: isFilled ? "#0ea5e9" : "transparent",
          borderColor: "#0ea5e9",
          borderRadius: "50%",
          opacity: isPartial ? (value % 1) * 0.8 + 0.2 : 1,
          display: "inline-block",
        }}
      />
    </div>
  );
};

interface RatingDisplayProps {
  value: number;
  title: string;
  description: string;
}

const RatingDisplay = ({ value, title, description }: RatingDisplayProps) => {
  return (
    <div className="flex flex-col gap-2 p-4">
      <Text fw={500} size="lg" style={{ color: "#0ea5e9" }}>
        {title}
      </Text>
      <div className="flex items-center space-x-2">
        {[0, 1, 2, 3, 4].map((index) => (
          <RatingCircle key={index} value={value} index={index} maxIndex={4} />
        ))}
      </div>
      <Text size="sm" c="dimmed">
        {description}
      </Text>
    </div>
  );
};

export function Features() {
  return (
    <Container size="lg" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <SectionTitle
          title="Personality Features"
          subtitle="適性検査結果に基づく特性分析"
        />
        <Grid gutter="xl">
          {personalityTraits.map((trait) => (
            <Grid.Col key={trait.title} span={{ base: 12, md: 4 }}>
              <Paper
                radius="lg"
                p="xl"
                style={{
                  background: "rgba(255, 255, 255, 0.9)",
                  border: "1px solid rgba(14, 165, 233, 0.1)",
                }}
              >
                <RatingDisplay
                  value={trait.value}
                  title={trait.title}
                  description={trait.description}
                />
              </Paper>
            </Grid.Col>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
}
