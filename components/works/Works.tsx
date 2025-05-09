"use client";

import { Carousel } from "@mantine/carousel";
import { Container, Paper, Text, Title } from "@mantine/core";
import { IconBuilding, IconCode, IconSchool } from "@tabler/icons-react";
import { motion } from "framer-motion";

import { SectionTitle } from "@/components/common/SectionTitle";

const works = [
  {
    title: "フロントエンド・バックエンドエンジニア",
    company: "株式会社アンチパターン",
    icon: IconBuilding,
    projects: [
      {
        title: "公式ホームページの作成",
        period: "2023年11月〜2024年1月",
        description: "HTML, tailwind cssを用いて自社サイトをリニューアルし公開",
      },
      {
        title: "お祝い花の贈答システム「matomeru」の開発",
        period: "2024年4月〜現在",
        description:
          "Next.jsとLaravelのサブモージュル構成で、機能開発・保守を担当。CI/CD環境にはGitHub Actionsを使用",
      },
    ],
  },
  {
    title: "機械学習エンジニア",
    company: "株式会社Pluszero",
    icon: IconCode,
    projects: [
      {
        title: "社内OCRライブラリ開発",
        period: "2024年8月〜2024年12月",
        description:
          "Python、OpenCV、を用いて社内文書のPDFから情報を抽出し画面上に出力するライブラリを実装",
      },
    ],
  },
  {
    title: "学生コミュニティ",
    icon: IconSchool,
    projects: [
      {
        title: "就活エージェント比較サイト",
        period: "2023年3月〜2023年5月",
        description:
          "Next.jsとLaravelを用いて、エージェント情報を集約・比較できるWebサービスを設計・開発",
      },
      {
        title: "人事向けAI施策提案サービス",
        period: "2024年2月〜2024年4月",
        description:
          "Next.jsとLaravelを用いて、従業員データから組織改善施策を提案するAIシステムを開発",
      },
    ],
  },
  {
    title: "個人開発",
    icon: IconCode,
    projects: [
      {
        title: "新入生歓迎用アプリ",
        period: "2024年10月",
        description:
          "TypeScriptとGASで、大学新入生向けのイベント紹介・通知アプリを企画・実装・公開",
      },
    ],
  },
  {
    title: "インフラエンジニア",
    company: "株式会社アンチパターン",
    icon: IconBuilding,
    projects: [
      {
        title: "AWSインフラ構築",
        period: "2025年1月〜2025年4月",
        description:
          "AWS（EC2, S3, RDS, CloudFront等）を用いてインフラを設計・構築し、GitHub ActionsによるCI/CD環境を整備",
      },
    ],
  },
];

export default function Works() {
  const slides = works.map((work, index) => (
    <Carousel.Slide key={index}>
      <Paper
        p="xl"
        radius="md"
        style={{
          background: "linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)",
          height: "100%",
        }}
      >
        <div className="flex flex-col h-full">
          <div className="flex-1">
            <Title order={3} style={{ color: "#202124" }}>
              {work.title}
            </Title>
            {work.company && (
              <Text c="#5f6368" mt="xs">
                {work.company}
              </Text>
            )}
            <div className="mt-4 space-y-4">
              {work.projects.map((project, idx) => (
                <div key={idx}>
                  <Text fw={500} style={{ color: "#202124" }}>
                    {project.title}
                  </Text>
                  <Text size="sm" c="#1a73e8">
                    {project.period}
                  </Text>
                  <Text size="sm" c="#5f6368" mt="xs">
                    {project.description}
                  </Text>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Paper>
    </Carousel.Slide>
  ));

  return (
    <Container
      size="lg"
      className="my-12 py-4"
      style={{ maxWidth: 900, margin: "0 auto" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <SectionTitle>Works</SectionTitle>

        <Carousel
          withIndicators
          height={500}
          slideSize="33.3333%"
          slideGap="lg"
          controlSize={40}
          align="start"
          loop
          styles={{
            indicator: {
              width: 12,
              height: 4,
              transition: "width 250ms ease",
              backgroundColor: "#1a73e8",
            },
            control: {
              backgroundColor: "#1a73e8",
              borderColor: "#1a73e8",
              "&:hover": {
                backgroundColor: "#1557b0",
              },
            },
          }}
        >
          {slides}
        </Carousel>
      </motion.div>
    </Container>
  );
}
