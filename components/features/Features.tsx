"use client";

import { Container, Grid, Paper, Stack, Text, Title } from "@mantine/core";
import {
  Chart as ChartJS,
  Filler,
  Legend,
  LineElement,
  PointElement,
  RadialLinearScale,
  Tooltip,
} from "chart.js";
import { motion } from "framer-motion";
import { Radar } from "react-chartjs-2";

import { SectionTitle } from "@/components/common/SectionTitle";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
);

const personalityData = {
  labels: ["リーダーシップ", "計画的", "論理的", "本質重視", "チームプレイ"],
  datasets: [
    {
      label: "あなたの特性",
      data: [90, 85, 88, 92, 87],
      backgroundColor: "rgba(30, 64, 175, 0.2)",
      borderColor: "rgba(30, 64, 175, 1)",
      borderWidth: 2,
      pointBackgroundColor: "rgba(30, 64, 175, 1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(30, 64, 175, 1)",
    },
  ],
};

const chartOptions = {
  scales: {
    r: {
      angleLines: {
        display: true,
      },
      suggestedMin: 0,
      suggestedMax: 100,
    },
  },
  plugins: {
    legend: {
      position: "top" as const,
    },
  },
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

        <Grid gutter="xl">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Paper
              radius="xl"
              p="xl"
              className="h-full"
              style={{
                background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
              }}
            >
              <Title order={3} className="mb-6 text-center">
                特性マトリクス
              </Title>
              <div className="aspect-square">
                <Radar data={personalityData} options={chartOptions} />
              </div>
            </Paper>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <Stack gap="xl">
              <Paper
                radius="xl"
                p="xl"
                style={{
                  background:
                    "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
                }}
              >
                <Title order={3} className="mb-4">
                  強み
                </Title>
                <Stack gap="md">
                  {strengths.map((strength) => (
                    <div key={strength.title}>
                      <Text fw={500} size="lg">
                        {strength.title}
                      </Text>
                      <Text size="sm" c="dimmed">
                        {strength.description}
                      </Text>
                    </div>
                  ))}
                </Stack>
              </Paper>

              <Paper
                radius="xl"
                p="xl"
                style={{
                  background:
                    "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
                }}
              >
                <Title order={3} className="mb-4">
                  弱み
                </Title>
                <Stack gap="md">
                  {weaknesses.map((weakness) => (
                    <div key={weakness.title}>
                      <Text fw={500} size="lg">
                        {weakness.title}
                      </Text>
                      <Text size="sm" c="dimmed">
                        {weakness.description}
                      </Text>
                    </div>
                  ))}
                </Stack>
              </Paper>

              <Paper
                radius="xl"
                p="xl"
                style={{
                  background:
                    "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
                }}
              >
                <Title order={3} className="mb-4">
                  今後の展望
                </Title>
                <Stack gap="md">
                  {futureOutlook.map((outlook) => (
                    <div key={outlook.title}>
                      <Text fw={500} size="lg">
                        {outlook.title}
                      </Text>
                      <Text size="sm" c="dimmed">
                        {outlook.description}
                      </Text>
                    </div>
                  ))}
                </Stack>
              </Paper>
            </Stack>
          </Grid.Col>
        </Grid>
      </motion.div>
    </Container>
  );
}
