"use client";

import { Container, Grid, Paper, Stack, Text, Title } from "@mantine/core";
import { motion } from "framer-motion";

import { SectionTitle } from "@/components/common/SectionTitle";

const personalityTraits = [
  {
    title: "リーダーシップ",
    value: 4.5,
    description: "チームを率いて目標達成に向けて導く力",
  },
  {
    title: "計画性",
    value: 4.2,
    description: "物事を計画的に進め、リスクを考慮する力",
  },
  {
    title: "論理的思考",
    value: 4.4,
    description: "物事の本質を深く理解し、論理的に解決する力",
  },
  {
    title: "本質重視",
    value: 4.6,
    description: "問題の本質を見極め、根本的な解決を図る力",
  },
  {
    title: "チームプレイ",
    value: 4.3,
    description: "チームの一員として協調的に活動する力",
  },
];

const RatingCircle = ({ value, index }: { value: number; index: number }) => {
  const isFilled = index < Math.floor(value);
  const isPartial = index === Math.floor(value) && value % 1 !== 0;
  const size = 16 + index * 4;

  return (
    <div
      className="relative flex items-center justify-center"
      style={{
        width: size,
        height: size,
      }}
    >
      <div
        className="absolute inset-0 rounded-full border-2"
        style={{
          background: isFilled
            ? "linear-gradient(135deg, #0ea5e9 0%, #22d3ee 100%)"
            : isPartial
              ? "linear-gradient(135deg, #0ea5e9 0%, #22d3ee 100%)"
              : "transparent",
          borderColor:
            isFilled || isPartial
              ? "rgba(14, 165, 233, 0.3)"
              : "rgba(14, 165, 233, 0.1)",
          opacity: isPartial ? (value % 1) * 0.8 + 0.2 : 1,
        }}
      />
    </div>
  );
};

const RatingDisplay = ({
  value,
  title,
  description,
}: {
  value: number;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex items-center justify-between gap-4 p-4">
      <div className="flex-1">
        <Text fw={500} size="lg" style={{ color: "#1e40af" }}>
          {title}
        </Text>
        <Text size="sm" c="dimmed">
          {description}
        </Text>
      </div>
      <div className="flex items-center gap-3">
        {[0, 1, 2, 3, 4].map((index) => (
          <RatingCircle key={index} value={value} index={index} />
        ))}
      </div>
    </div>
  );
};

const strengths = [
  {
    title: "リーダーシップ",
    description:
      "チームを率いて目標達成に向けて導く力が強く、メンバーのモチベーションを高めることができます。",
  },
  {
    title: "計画性",
    description:
      "物事を計画的に進め、リスクを考慮しながら確実に目標を達成することができます。",
  },
  {
    title: "論理的思考",
    description:
      "物事の本質を深く理解し、論理的に問題を解決することができます。",
  },
];

const weaknesses = [
  {
    title: "即興性",
    description:
      "計画を立てることに時間をかけすぎる傾向があり、状況に応じた柔軟な対応が必要な場合に課題があります。",
  },
  {
    title: "個人作業",
    description:
      "チームプレイを重視するあまり、個人での作業効率が低下する可能性があります。",
  },
];

const futureOutlook = [
  {
    title: "リーダーシップの強化",
    description:
      "より効果的なチームマネジメントスキルを身につけ、プロジェクトの成功確率を高めていきます。",
  },
  {
    title: "柔軟性の向上",
    description:
      "計画性を保ちながらも、状況に応じた柔軟な対応力を身につけていきます。",
  },
  {
    title: "個人作業の効率化",
    description:
      "チームプレイと個人作業のバランスを改善し、より効率的な作業スタイルを確立します。",
  },
];

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

        <div className="relative">
          <div className="relative bg-blue-50 rounded-t-3xl pb-16">
            <Paper
              radius="xl"
              p="xl"
              style={{
                background: "rgba(255, 255, 255, 0.9)",
              }}
            >
              <div className="max-w-4xl mx-auto">
                <Grid gutter="xl">
                  {personalityTraits.slice(0, 3).map((trait) => (
                    <Grid.Col key={trait.title} span={{ base: 12, md: 4 }}>
                      <Paper
                        radius="lg"
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
                  {personalityTraits.slice(3).map((trait) => (
                    <Grid.Col key={trait.title} span={{ base: 12, md: 6 }}>
                      <Paper
                        radius="lg"
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
              </div>
            </Paper>
          </div>

          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
            <div
              className="w-0 h-0 border-l-[30px] border-r-[30px] border-t-[30px] border-transparent border-t-blue-50"
              style={{
                filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))",
              }}
            />
          </div>
        </div>

        <div className="mt-8">
          <Grid gutter="xl">
            <Grid.Col span={{ base: 12, md: 4 }}>
              <Paper
                radius="xl"
                p="xl"
                className="h-full"
                style={{
                  background: "rgba(255, 255, 255, 0.9)",
                  border: "1px solid rgba(30, 64, 175, 0.1)",
                }}
              >
                <Title
                  order={3}
                  className="mb-4"
                  style={{
                    background:
                      "linear-gradient(135deg, #1e40af 0%, #22d3ee 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  強み
                </Title>
                <Stack gap="md">
                  {strengths.map((strength) => (
                    <div key={strength.title}>
                      <Text
                        fw={500}
                        size="lg"
                        style={{
                          color: "#1e40af",
                        }}
                      >
                        {strength.title}
                      </Text>
                      <Text size="sm" c="dimmed">
                        {strength.description}
                      </Text>
                    </div>
                  ))}
                </Stack>
              </Paper>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 4 }}>
              <Paper
                radius="xl"
                p="xl"
                className="h-full"
                style={{
                  background: "rgba(255, 255, 255, 0.9)",
                  border: "1px solid rgba(30, 64, 175, 0.1)",
                }}
              >
                <Title
                  order={3}
                  className="mb-4"
                  style={{
                    background:
                      "linear-gradient(135deg, #1e40af 0%, #22d3ee 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  弱み
                </Title>
                <Stack gap="md">
                  {weaknesses.map((weakness) => (
                    <div key={weakness.title}>
                      <Text
                        fw={500}
                        size="lg"
                        style={{
                          color: "#1e40af",
                        }}
                      >
                        {weakness.title}
                      </Text>
                      <Text size="sm" c="dimmed">
                        {weakness.description}
                      </Text>
                    </div>
                  ))}
                </Stack>
              </Paper>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 4 }}>
              <Paper
                radius="xl"
                p="xl"
                className="h-full"
                style={{
                  background: "rgba(255, 255, 255, 0.9)",
                  border: "1px solid rgba(30, 64, 175, 0.1)",
                }}
              >
                <Title
                  order={3}
                  className="mb-4"
                  style={{
                    background:
                      "linear-gradient(135deg, #1e40af 0%, #22d3ee 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  今後の展望
                </Title>
                <Stack gap="md">
                  {futureOutlook.map((outlook) => (
                    <div key={outlook.title}>
                      <Text
                        fw={500}
                        size="lg"
                        style={{
                          color: "#1e40af",
                        }}
                      >
                        {outlook.title}
                      </Text>
                      <Text size="sm" c="dimmed">
                        {outlook.description}
                      </Text>
                    </div>
                  ))}
                </Stack>
              </Paper>
            </Grid.Col>
          </Grid>
        </div>
      </motion.div>
    </Container>
  );
}
