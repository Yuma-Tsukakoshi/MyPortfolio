"use client";

import {
  Badge,
  Button,
  Card,
  Container,
  Grid,
  Paper,
  Text,
} from "@mantine/core";
import { motion } from "framer-motion";
import { useState } from "react";

import { SectionTitle } from "@/components/common/SectionTitle";

import styles from "./Features.module.css";

interface PersonalityTrait {
  title: string;
  value: number;
  description: string;
  category: string;
  highLabel: string;
  lowLabel: string;
  isPickUp: boolean;
}

const personalityTraits: PersonalityTrait[] = [
  // 行動特性
  {
    title: "社交性",
    value: 1,
    description: "人と積極的に交流し、情報を共有する傾向",
    category: "行動特性",
    highLabel: "外向的",
    lowLabel: "内向的",
    isPickUp: false,
  },
  {
    title: "内省性",
    value: 0,
    description: "深く考え、自己を振り返る傾向",
    category: "行動特性",
    highLabel: "深く考える",
    lowLabel: "表面的",
    isPickUp: false,
  },
  {
    title: "持続性",
    value: 1,
    description: "忍耐強く、最後まで取り組む傾向",
    category: "行動特性",
    highLabel: "忍耐強い",
    lowLabel: "短期的",
    isPickUp: false,
  },
  {
    title: "身体的活動性",
    value: 0,
    description: "活動的でエネルギッシュに行動する傾向",
    category: "行動特性",
    highLabel: "活動的",
    lowLabel: "静的",
    isPickUp: false,
  },
  {
    title: "慎重性",
    value: 2,
    description: "計画的でリスクを回避し、確実に進める傾向",
    category: "行動特性",
    highLabel: "計画的",
    lowLabel: "衝動的",
    isPickUp: true,
  },
  // 意欲
  {
    title: "達成意欲",
    value: 2,
    description: "高い目標に向かって努力する傾向",
    category: "意欲",
    highLabel: "挑戦的",
    lowLabel: "現状維持",
    isPickUp: true,
  },
  {
    title: "活動意欲",
    value: 0,
    description: "積極的に新しいことに挑戦し、自ら行動する傾向",
    category: "意欲",
    highLabel: "積極的",
    lowLabel: "消極的",
    isPickUp: false,
  },
  // 情緒
  {
    title: "敏感性",
    value: 1,
    description: "環境や他者の感情に敏感で、気づきが早い傾向",
    category: "情緒",
    highLabel: "敏感",
    lowLabel: "鈍感",
    isPickUp: false,
  },
  {
    title: "自責性",
    value: 2,
    description: "自分の責任を重視し、失敗を受け止める傾向",
    category: "情緒",
    highLabel: "自責的",
    lowLabel: "他責的",
    isPickUp: true,
  },
  {
    title: "気分性",
    value: -1,
    description: "感情の起伏が激しく、状況に応じて変化する傾向",
    category: "情緒",
    highLabel: "変化的",
    lowLabel: "安定的",
    isPickUp: false,
  },
  {
    title: "独自性",
    value: 1,
    description: "独自の視点を持ち、創造的に考える傾向",
    category: "情緒",
    highLabel: "創造的",
    lowLabel: "従順的",
    isPickUp: false,
  },
  {
    title: "自信性",
    value: 0,
    description: "自分の能力に自信を持ち、積極的に行動する傾向",
    category: "情緒",
    highLabel: "自信的",
    lowLabel: "不安的",
    isPickUp: false,
  },
  {
    title: "高揚性",
    value: 1,
    description: "明るく前向きで、ポジティブな感情を維持する傾向",
    category: "情緒",
    highLabel: "前向き",
    lowLabel: "現実的",
    isPickUp: false,
  },
  // ライスケール
  {
    title: "虚偽尺度",
    value: 1,
    description: "回答の一貫性と信頼性",
    category: "ライスケール",
    highLabel: "信頼性高",
    lowLabel: "信頼性低",
    isPickUp: false,
  },
];

interface RatingCircleProps {
  value: number;
  index: number;
}

const RatingCircle = ({ value, index }: RatingCircleProps) => {
  const normalizedIndex = index - 2;
  const isFilled = (() => {
    if (value === -2) return normalizedIndex >= -2 && normalizedIndex <= 0;
    if (value === -1) return normalizedIndex >= -1 && normalizedIndex <= 0;
    if (value === 0) return normalizedIndex === 0;
    if (value === 1) return normalizedIndex >= 0 && normalizedIndex <= 1;
    if (value === 2) return normalizedIndex >= 0 && normalizedIndex <= 2;
    return false;
  })();
  const baseSize =
    index === 0 || index === 4 ? 36 : index === 1 || index === 3 ? 24 : 12;

  return (
    <div style={{ width: baseSize, height: baseSize, marginRight: "4px" }}>
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: isFilled ? "#0ea5e9" : "#e5e5e5",
          borderColor: "#0ea5e9",
          borderRadius: "50%",
          opacity: 1,
        }}
      ></div>
    </div>
  );
};

interface RatingDisplayProps {
  value: number;
  title: string;
  description: string;
  highLabel: string;
  lowLabel: string;
  category: string;
}

const RatingDisplay = ({
  value,
  title,
  description,
  highLabel,
  lowLabel,
  category,
}: RatingDisplayProps) => {
  return (
    <div className="flex items-center flex-col gap-2 p-4">
      <div className="flex items-center justify-between w-full">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingBottom: "16px",
          }}
        >
          <Text fw={500} size="lg" style={{ color: "#0ea5e9" }}>
            {title}
          </Text>
          <Badge size="sm" variant="light" color="blue">
            {category}
          </Badge>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          {[0, 1, 2, 3, 4].map((index) => (
            <RatingCircle key={index} value={value} index={index} />
          ))}
        </div>
      </div>
      <div className="flex justify-between w-full text-xs text-gray-500">
        <span>{lowLabel}</span>
        <span>ー</span>
        <span>{highLabel}</span>
      </div>
      <Text size="sm" c="dimmed">
        {description}
      </Text>
    </div>
  );
};

export function Features() {
  const categories = Array.from(
    new Set(personalityTraits.map((trait) => trait.category)),
  );

  const pickUpTraits = personalityTraits.filter((trait) => trait.isPickUp);
  const otherTraits = personalityTraits.filter((trait) => !trait.isPickUp);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container size="lg" className={styles.container}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <SectionTitle title="Personality Features" subtitle="特性分析" />

        {/* 特性セクション（背景色付き） */}
        <div className={styles.featuresContainer}>
          {/* PICK UP Personality */}
          <Container>
            <Text fw={700} size="md" className={styles.cardTitle}>
              特筆すべき特性
            </Text>
            <Grid gutter="xl" justify="center">
              {pickUpTraits.map((trait) => (
                <Grid.Col key={trait.title} span={{ base: 12, md: 3 }}>
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
                      highLabel={trait.highLabel}
                      lowLabel={trait.lowLabel}
                      category={trait.category}
                    />
                  </Paper>
                </Grid.Col>
              ))}
            </Grid>
          </Container>

          {/* その他の特性（ボタン） */}
          <div className={styles.otherTraitsContainer}>
            <Button
              variant="light"
              color="blue"
              size="lg"
              className={styles.otherTraitsButton}
              onClick={() => setIsOpen(!isOpen)}
            >
              その他の特性
            </Button>

            {isOpen && (
              <div className={styles.otherTraitsContent}>
                {categories.map((category) => (
                  <div key={category} className="mb-8">
                    <Text
                      fw={700}
                      size="xl"
                      mb="md"
                      style={{ color: "#0ea5e9" }}
                    >
                      {category}
                    </Text>
                    <Grid gutter="xl">
                      {otherTraits
                        .filter((trait) => trait.category === category)
                        .map((trait) => (
                          <Grid.Col
                            key={trait.title}
                            span={{ base: 12, md: 3 }}
                          >
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
                                highLabel={trait.highLabel}
                                lowLabel={trait.lowLabel}
                                category={trait.category}
                              />
                            </Paper>
                          </Grid.Col>
                        ))}
                    </Grid>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* 三角形の矢印 */}
        <div className={styles.arrowContainer}>
          <div className={styles.triangle}></div>
          <div className={styles.triangle}></div>
          <div className={styles.triangle}></div>
        </div>

        {/* 強みと弱みのカード */}
        <Grid gutter="xl" justify="center" className={styles.cardsContainer}>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Card className={styles.featureCard}>
              <Card.Section>
                <Text fw={700} size="xl" className={styles.cardTitle}>
                  強み
                </Text>
                <div className={styles.cardContent}>
                  <div className={styles.strengthItem}>
                    <Text size="sm">
                      計画的でリスクを回避し、確実に進める傾向
                    </Text>
                  </div>
                  <div className={styles.strengthItem}>
                    <Text size="sm">
                      高い目標を設定し、それに向かって努力する傾向
                    </Text>
                  </div>
                  <div className={styles.strengthItem}>
                    <Text size="sm">
                      自分の責任を重視し、失敗を自分で受け止める傾向
                    </Text>
                  </div>
                </div>
              </Card.Section>
            </Card>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <Card className={styles.featureCard}>
              <Card.Section>
                <Text fw={700} size="xl" className={styles.cardTitle}>
                  弱み
                </Text>
                <div className={styles.cardContent}>
                  <div className={styles.weaknessItem}>
                    <Text size="sm">
                      感情の起伏が激しく、状況に応じて変化する傾向
                    </Text>
                  </div>
                  <div className={styles.weaknessItem}>
                    <Text size="sm">
                      活動的でエネルギッシュに行動する傾向が低い
                    </Text>
                  </div>
                  <div className={styles.weaknessItem}>
                    <Text size="sm">
                      積極的に新しいことに挑戦する傾向が低い
                    </Text>
                  </div>
                </div>
              </Card.Section>
            </Card>
          </Grid.Col>
        </Grid>
      </motion.div>
    </Container>
  );
}
