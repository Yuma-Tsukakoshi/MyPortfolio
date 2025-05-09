import {
  Badge,
  Button,
  Card,
  Container,
  Group,
  Loader,
  Modal,
  SimpleGrid,
  Stack,
  Table,
  Text,
  Title,
} from "@mantine/core";
import {
  IconAward,
  IconFileText,
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
  date: string;
  venue: string;
  paperUrl?: string;
  videoUrl?: string;
  awards?: string[]; // 複数の賞に対応するため配列に変更
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
    title: "ヒューマンインタフェースシンポジウム2024",
    date: "2024年10月20日",
    venue: "京都",
    paperUrl: "",
    awards: ["優秀プレゼンテーション賞", "学術奨励賞"], // 複数の賞を配列で指定
  },
  {
    id: 2,
    title: "WISS 2024",
    date: "2024年12月13日",
    venue: "新潟",
    paperUrl: "",
    awards: ["対話発表賞"],
  },
  {
    id: 3,
    title: "INTERACTION 2025",
    date: "2025年3月2〜4日",
    venue: "一橋大学・東京",
    paperUrl: "",
    awards: ["優秀論文賞"],
  },
  // {
  //   id: 4,
  //   title: "UIST 2025 (ACM Symposium on User Interface Software and Technology)",
  //   date: "2025年9月28日〜10月1日",
  //   venue: "韓国・釜山",
  //   paperTitle: "",
  //   paperUrl: "",
  //   awards: ["Best Paper Award", "Honorable Mention"]
  // }
];

const projects: Project[] = [
  {
    id: 1,
    title: "SoilSense",
    description:
      "土壌水分センサとLoRa通信を活用した農業IoTシステムの開発。省力化と収量向上を実現。",
    tags: ["IoT", "LoRa", "農業", "Python"],
    image: "/research/iot-agri.png",
    paperUrl: "/papers/iot-agri.pdf",
    slideshareUrl: "https://www.slideshare.net/example2",
    notionPageId: "NOTION_PAGE_ID_1",
  },
  {
    id: 2,
    title: "SoilTile",
    description:
      "土壌水分センサとLoRa通信を活用した農業IoTシステムの開発。省力化と収量向上を実現。",
    tags: ["IoT", "LoRa", "農業", "Python"],
    image: "/research/iot-agri.png",
    paperUrl: "/papers/iot-agri.pdf",
    slideshareUrl: "https://www.slideshare.net/example2",
    notionPageId: "NOTION_PAGE_ID_1",
  },
  // 他のプロジェクトも同様に追加
];

export function Research() {
  const [opened, setOpened] = React.useState(false);
  const [notionContent, setNotionContent] = React.useState<string>("");
  const [loading, setLoading] = React.useState(false);

  const handleOpenModal = async (pageId: string) => {
    setOpened(true);
    setLoading(true);
    // Notion APIからデータ取得（仮実装）
    setTimeout(() => {
      setNotionContent(`Notionページの内容（ID: ${pageId}）`);
      setLoading(false);
    }, 1000);
  };

  const handleCloseModal = () => {
    setOpened(false);
    setNotionContent("");
  };

  return (
    <Container size="xl" className={styles.container}>
      <SectionTitle title="Research" subtitle="研究活動" />
      {/* プロジェクト概要 */}
      <Title order={3} className={styles.sectionTitle} mt="xl">
        研究プロジェクト
      </Title>
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
                <Button
                  variant="outline"
                  color="blue"
                  radius="xl"
                  size="xs"
                  onClick={() => handleOpenModal(project.notionPageId || "")}
                >
                  詳細を見る
                </Button>
              </div>
            </Stack>
          </Card>
        ))}
      </SimpleGrid>
      <Modal
        opened={opened}
        onClose={handleCloseModal}
        title="詳細"
        size="lg"
        centered
      >
        {loading ? <Loader /> : <div>{notionContent}</div>}
      </Modal>

      {/* 学会情報テーブル */}
      <Card className={styles.tableCard}>
        <Title order={3} className={styles.sectionTitle}>
          学会発表
        </Title>
        <Table className={styles.table} withTableBorder withColumnBorders>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>学会名</Table.Th>
              <Table.Th>日付</Table.Th>
              <Table.Th>会場</Table.Th>
              <Table.Th>資料</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {conferences.map((conference) => (
              <Table.Tr key={conference.id}>
                <Table.Td>{conference.title}</Table.Td>
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
                          key={award}
                          variant="gradient"
                          gradient={{ from: "yellow", to: "orange" }}
                          leftSection={<IconAward size={14} />}
                        >
                          {award}
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
