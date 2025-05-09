"use client";

import { Container, Grid, Paper, Stack, Text, Title } from "@mantine/core";
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title as ChartTitle,
  Tooltip,
} from "chart.js";
import { motion } from "framer-motion";
import { Scatter } from "react-chartjs-2";

import { SectionTitle } from "@/components/common/SectionTitle";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ChartTitle,
  Tooltip,
  Legend,
);

const personalityTraits = [
  {
    title: "リーダーシップ vs サポート",
    xLabel: "サポート志向",
    yLabel: "リーダーシップ",
    data: {
      datasets: [
        {
          label: "あなたの特性",
          data: [{ x: 30, y: 90 }],
          backgroundColor: "rgba(34, 211, 238, 1)",
          pointRadius: 8,
          borderColor: "rgba(30, 64, 175, 1)",
          borderWidth: 2,
        },
      ],
    },
    options: {
      scales: {
        x: {
          min: 0,
          max: 100,
          title: {
            display: true,
            text: "サポート志向",
            color: "#1e40af",
            font: {
              weight: "bold" as const,
            },
          },
          grid: {
            color: "rgba(30, 64, 175, 0.1)",
          },
          ticks: {
            color: "#1e40af",
          },
        },
        y: {
          min: 0,
          max: 100,
          title: {
            display: true,
            text: "リーダーシップ",
            color: "#1e40af",
            font: {
              weight: "bold" as const,
            },
          },
          grid: {
            color: "rgba(30, 64, 175, 0.1)",
          },
          ticks: {
            color: "#1e40af",
          },
        },
      },
      plugins: {
        legend: {
          labels: {
            color: "#1e40af",
            font: {
              weight: "bold" as const,
            },
          },
        },
      },
    },
  },
  {
    title: "計画的 vs 即興的",
    xLabel: "即興的",
    yLabel: "計画的",
    data: {
      datasets: [
        {
          label: "あなたの特性",
          data: [{ x: 25, y: 85 }],
          backgroundColor: "rgba(34, 211, 238, 1)",
          pointRadius: 8,
          borderColor: "rgba(30, 64, 175, 1)",
          borderWidth: 2,
        },
      ],
    },
    options: {
      scales: {
        x: {
          min: 0,
          max: 100,
          title: {
            display: true,
            text: "即興的",
            color: "#1e40af",
            font: {
              weight: "bold" as const,
            },
          },
          grid: {
            color: "rgba(30, 64, 175, 0.1)",
          },
          ticks: {
            color: "#1e40af",
          },
        },
        y: {
          min: 0,
          max: 100,
          title: {
            display: true,
            text: "計画的",
            color: "#1e40af",
            font: {
              weight: "bold" as const,
            },
          },
          grid: {
            color: "rgba(30, 64, 175, 0.1)",
          },
          ticks: {
            color: "#1e40af",
          },
        },
      },
      plugins: {
        legend: {
          labels: {
            color: "#1e40af",
            font: {
              weight: "bold" as const,
            },
          },
        },
      },
    },
  },
  {
    title: "論理的 vs 感覚的",
    xLabel: "感覚的",
    yLabel: "論理的",
    data: {
      datasets: [
        {
          label: "あなたの特性",
          data: [{ x: 20, y: 88 }],
          backgroundColor: "rgba(34, 211, 238, 1)",
          pointRadius: 8,
          borderColor: "rgba(30, 64, 175, 1)",
          borderWidth: 2,
        },
      ],
    },
    options: {
      scales: {
        x: {
          min: 0,
          max: 100,
          title: {
            display: true,
            text: "感覚的",
            color: "#1e40af",
            font: {
              weight: "bold" as const,
            },
          },
          grid: {
            color: "rgba(30, 64, 175, 0.1)",
          },
          ticks: {
            color: "#1e40af",
          },
        },
        y: {
          min: 0,
          max: 100,
          title: {
            display: true,
            text: "論理的",
            color: "#1e40af",
            font: {
              weight: "bold" as const,
            },
          },
          grid: {
            color: "rgba(30, 64, 175, 0.1)",
          },
          ticks: {
            color: "#1e40af",
          },
        },
      },
      plugins: {
        legend: {
          labels: {
            color: "#1e40af",
            font: {
              weight: "bold" as const,
            },
          },
        },
      },
    },
  },
  {
    title: "本質重視 vs 表面解決",
    xLabel: "表面解決",
    yLabel: "本質重視",
    data: {
      datasets: [
        {
          label: "あなたの特性",
          data: [{ x: 15, y: 92 }],
          backgroundColor: "rgba(34, 211, 238, 1)",
          pointRadius: 8,
          borderColor: "rgba(30, 64, 175, 1)",
          borderWidth: 2,
        },
      ],
    },
    options: {
      scales: {
        x: {
          min: 0,
          max: 100,
          title: {
            display: true,
            text: "表面解決",
            color: "#1e40af",
            font: {
              weight: "bold" as const,
            },
          },
          grid: {
            color: "rgba(30, 64, 175, 0.1)",
          },
          ticks: {
            color: "#1e40af",
          },
        },
        y: {
          min: 0,
          max: 100,
          title: {
            display: true,
            text: "本質重視",
            color: "#1e40af",
            font: {
              weight: "bold" as const,
            },
          },
          grid: {
            color: "rgba(30, 64, 175, 0.1)",
          },
          ticks: {
            color: "#1e40af",
          },
        },
      },
      plugins: {
        legend: {
          labels: {
            color: "#1e40af",
            font: {
              weight: "bold" as const,
            },
          },
        },
      },
    },
  },
  {
    title: "チームプレイ vs 個人完結",
    xLabel: "個人完結",
    yLabel: "チームプレイ",
    data: {
      datasets: [
        {
          label: "あなたの特性",
          data: [{ x: 22, y: 87 }],
          backgroundColor: "rgba(34, 211, 238, 1)",
          pointRadius: 8,
          borderColor: "rgba(30, 64, 175, 1)",
          borderWidth: 2,
        },
      ],
    },
    options: {
      scales: {
        x: {
          min: 0,
          max: 100,
          title: {
            display: true,
            text: "個人完結",
            color: "#1e40af",
            font: {
              weight: "bold" as const,
            },
          },
          grid: {
            color: "rgba(30, 64, 175, 0.1)",
          },
          ticks: {
            color: "#1e40af",
          },
        },
        y: {
          min: 0,
          max: 100,
          title: {
            display: true,
            text: "チームプレイ",
            color: "#1e40af",
            font: {
              weight: "bold" as const,
            },
          },
          grid: {
            color: "rgba(30, 64, 175, 0.1)",
          },
          ticks: {
            color: "#1e40af",
          },
        },
      },
      plugins: {
        legend: {
          labels: {
            color: "#1e40af",
            font: {
              weight: "bold" as const,
            },
          },
        },
      },
    },
  },
];

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
          <Grid.Col span={{ base: 12 }}>
            <Paper
              radius="xl"
              p="xl"
              style={{
                background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
              }}
            >
              <Title order={3} className="mb-6 text-center">
                特性マトリクス
              </Title>
              <Grid gutter="xl">
                {personalityTraits.map((trait) => (
                  <Grid.Col key={trait.title} span={{ base: 12, md: 6, lg: 4 }}>
                    <Paper
                      radius="lg"
                      p="md"
                      style={{
                        background: "rgba(255, 255, 255, 0.9)",
                        border: "1px solid rgba(30, 64, 175, 0.1)",
                      }}
                    >
                      <Text
                        fw={500}
                        size="lg"
                        className="mb-4 text-center"
                        style={{
                          background:
                            "linear-gradient(135deg, #1e40af 0%, #22d3ee 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        {trait.title}
                      </Text>
                      <div className="aspect-square">
                        <Scatter data={trait.data} options={trait.options} />
                      </div>
                    </Paper>
                  </Grid.Col>
                ))}
              </Grid>
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

              <Paper
                radius="xl"
                p="xl"
                style={{
                  background:
                    "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
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

              <Paper
                radius="xl"
                p="xl"
                style={{
                  background:
                    "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
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
            </Stack>
          </Grid.Col>
        </Grid>
      </motion.div>
    </Container>
  );
}
