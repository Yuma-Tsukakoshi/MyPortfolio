import {
  Anchor,
  Badge,
  Button,
  Card,
  Container,
  Group,
  SimpleGrid,
  Stack,
  Table,
  Text,
  Title,
} from "@mantine/core";
import {
  IconAward,
  IconFileText,
  IconLink,
  IconPresentation,
  IconVideo,
} from "@tabler/icons-react";
import Image from "next/image";
import React from "react";

import { SectionTitle } from "@/components/common/SectionTitle";

import styles from "./Research.module.css";

interface Conference {
  id: number;
  title: string;
  conferenceUrl?: string;
  date: string;
  venue: string;
  paperUrl?: string;
  videoUrl?: string;
  awards?: {
    name: string;
    url?: string;
  }[];
  slideshareUrl?: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  paperUrl?: string;
  slideshareUrl?: string;
  notionPageId?: string;
}

const conferences: Conference[] = [
  {
    id: 1,
    title: "HIS 2024",
    conferenceUrl: "https://jp.his.gr.jp/events/symposium2024/",
    date: "2024年9月18~20日",
    venue: "京都",
    paperUrl: "",
    awards: [
      {
        name: "優秀プレゼンテーション賞",
        url: "https://jp.his.gr.jp/guide/awards/",
      },
      {
        name: "学術奨励賞",
        url: "https://jp.his.gr.jp/guide/awards/",
      },
    ],
  },
  {
    id: 2,
    title: "WISS 2024",
    conferenceUrl: "https://www.wiss.org/WISS2024/",
    date: "2024年12月11~13日",
    venue: "新潟",
    paperUrl: "",
    awards: [
      {
        name: "対話発表賞",
        url: "https://www.wiss.org/WISS2024/award.html",
      },
    ],
  },
  {
    id: 3,
    title: "INTERACTION 2025",
    conferenceUrl:
      "https://www.interaction-ipsj.org/proceedings/2025/index.html",
    date: "2025年3月2〜4日",
    venue: "東京",
    paperUrl: "",
    awards: [
      {
        name: "優秀論文賞",
        url: "https://www.interaction-ipsj.org/2025/award",
      },
    ],
  },
  // {
  //   id: 4,
  //   title: "UIST 2025",
  //   date: "2025年9月28日〜10月1日",
  //   venue: "韓国",
  //   paperUrl: "",
  //   awards: []
  // }
];

const projects: Project[] = [
  {
    id: 1,
    title: "SoilSense",
    description:
      "土壌を利用した柔らかいセンサ開発に関するものだ。センサーは、MFCと呼ばれる技術を利用し、土壌内の微生物が化学反応を通じて電気を生成することで動作する。土壌を柔らかいセンサーとして利用し、土壌の変化から電圧の変化を検知することで異なる容器の形状にも適応できる柔軟なセンサーシステムの開発を目的としている。",
    tags: ["SMFC", "Tangible Interface", "Sutainability"],
    image: "/images/research/SoilSense.png",
    paperUrl:
      "https://www.interaction-ipsj.org/proceedings/2025/data/bib/INT25010.html",
    slideshareUrl:
      "https://www.slideshare.net/slideshow/soilsense-a2e1/276261739",
  },
  {
    id: 2,
    title: "SoilTile",
    description:
      "SoilTileは、土壌微生物燃料電池（Soil-based Microbial Fuel Cell, SMFC）を用いた自己発電型力覚センサを応用し、圧力入力を検知するインタラクティブな床型インタフェースである。人がタイルを踏むことで、カソードと土壌の接触が変化し、電圧が変動する。この電圧変化を検知し、圧力や位置情報を取得可能である。土壌という持続可能な素材を活用し、環境に優れたインタフェース設計を目指している。応用例としては、教育用途やインタラクティブ展示、屋外での人流検知などが挙げられる。",
    tags: ["SMFC", "Floor Sensing"],
    image: "/images/research/SoilTile.png",
    paperUrl: "",
    slideshareUrl: "",
  },
];

export function Research() {
  return (
    <Container size="xl" className={styles.container}>
      <SectionTitle title="Research" subtitle="研究活動" />
      {/* プロジェクト概要 */}
      <Title order={3} className={styles.sectionTitle} mt="xl">
        研究プロジェクト
      </Title>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "400px",
          overflow: "hidden",
          borderRadius: "16px",
          marginBottom: "32px",
        }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        >
          <source src="/video/SoilSense.mp4" type="video/mp4" />
          お使いのブラウザは動画の再生に対応していません。
        </video>
      </div>
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xl" mt="md">
        {projects.map((project) => (
          <Card
            key={project.id}
            className={styles.projectCard}
            style={{ minHeight: 220, borderRadius: 24 }}
            radius="xl"
            p="xl"
          >
            <Card.Section>
              <Image
                src={project.image}
                width={400}
                height={200}
                alt={project.title}
                className={styles.image}
              />
            </Card.Section>
            <Stack mt="md" gap="xs">
              <Title order={3} className={styles.projectTitle}>
                {project.title}
              </Title>
              <Text size="sm" c="dimmed" className={styles.description}>
                {project.description}
              </Text>
              <div className={styles.tags}>
                {project.tags.map((tag) => (
                  <Badge key={tag} size="sm" variant="light">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className={styles.links} style={{ marginTop: 16 }}>
                {project.paperUrl && (
                  <Button
                    variant="light"
                    leftSection={<IconFileText size={16} />}
                    component="a"
                    href={project.paperUrl}
                    target="_blank"
                    size="xs"
                    style={{ marginRight: 8 }}
                  >
                    論文
                  </Button>
                )}
                {project.slideshareUrl && (
                  <Button
                    variant="light"
                    leftSection={<IconPresentation size={16} />}
                    component="a"
                    href={project.slideshareUrl}
                    target="_blank"
                    size="xs"
                    style={{ marginRight: 8 }}
                  >
                    スライド
                  </Button>
                )}
              </div>
            </Stack>
          </Card>
        ))}
      </SimpleGrid>

      {/* 学会情報テーブル */}
      <Card className={styles.tableCard}>
        <Title order={3} className={styles.sectionTitle}>
          学会発表
        </Title>
        <Table className={styles.table} withTableBorder withColumnBorders>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>学会名</Table.Th>
              <Table.Th>開催日</Table.Th>
              <Table.Th>開催地</Table.Th>
              <Table.Th>表彰</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {conferences.map((conference) => (
              <Table.Tr key={conference.id}>
                <Table.Td>
                  <Group gap="xs">
                    <IconLink size={14} />
                    <Anchor href={conference.conferenceUrl} target="_blank">
                      {conference.title}
                    </Anchor>
                  </Group>
                </Table.Td>
                <Table.Td>{conference.date}</Table.Td>
                <Table.Td>{conference.venue}</Table.Td>
                <Table.Td>
                  <Group gap="xs">
                    {conference.paperUrl && (
                      <Button
                        variant="light"
                        size="xs"
                        leftSection={<IconFileText size={14} />}
                        component="a"
                        href={conference.paperUrl}
                        target="_blank"
                      >
                        論文
                      </Button>
                    )}
                    {conference.videoUrl && (
                      <Button
                        variant="light"
                        size="xs"
                        leftSection={<IconVideo size={14} />}
                        component="a"
                        href={conference.videoUrl}
                        target="_blank"
                      >
                        動画
                      </Button>
                    )}
                    {conference.slideshareUrl && (
                      <Button
                        variant="light"
                        size="xs"
                        leftSection={<IconPresentation size={14} />}
                        component="a"
                        href={conference.slideshareUrl}
                        target="_blank"
                      >
                        スライド
                      </Button>
                    )}
                    {conference.awards &&
                      conference.awards.map((award) => (
                        <Badge
                          key={award.name}
                          variant="gradient"
                          gradient={{ from: "yellow", to: "orange" }}
                          leftSection={<IconAward size={14} />}
                          rightSection={<IconLink size={14} />}
                          component="a"
                          href={award.url}
                          target="_blank"
                          style={{ cursor: "pointer" }}
                        >
                          {award.name}
                        </Badge>
                      ))}
                  </Group>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </Card>
    </Container>
  );
}
