import {
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
  IconPresentation,
  IconVideo,
} from "@tabler/icons-react";
import Image from "next/image";

import styles from "./Research.module.css";

interface Conference {
  id: number;
  title: string;
  date: string;
  venue: string;
  paperTitle: string;
  paperUrl?: string;
  videoUrl?: string;
  award?: string;
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
}

const conferences: Conference[] = [
  {
    id: 1,
    title: "情報処理学会 第85回全国大会",
    date: "2023年3月",
    venue: "オンライン",
    paperTitle: "土壌水分センサを用いた農業IoTシステムの開発",
    paperUrl: "/papers/ipsj85.pdf",
    videoUrl: "https://example.com/video1",
    award: "学生奨励賞",
    slideshareUrl: "https://www.slideshare.net/example1",
  },
  // 他の学会情報も同様に追加
];

const projects: Project[] = [
  {
    id: 1,
    title: "農業IoTシステム",
    description:
      "土壌水分センサとLoRa通信を活用した農業IoTシステムの開発。省力化と収量向上を実現。",
    tags: ["IoT", "LoRa", "農業", "Python"],
    image: "/research/iot-agri.png",
    paperUrl: "/papers/iot-agri.pdf",
    slideshareUrl: "https://www.slideshare.net/example2",
  },
  // 他のプロジェクトも同様に追加
];

export function Research() {
  return (
    <Container size="lg" className={styles.container}>
      <Title order={2} className={styles.title}>
        Research
      </Title>

      {/* 学会情報テーブル */}
      <Card className={styles.tableCard}>
        <Title order={3} className={styles.sectionTitle}>
          学会発表
        </Title>
        <Table className={styles.table}>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>学会名</Table.Th>
              <Table.Th>日付</Table.Th>
              <Table.Th>会場</Table.Th>
              <Table.Th>論文タイトル</Table.Th>
              <Table.Th>資料</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {conferences.map((conference) => (
              <Table.Tr key={conference.id}>
                <Table.Td>{conference.title}</Table.Td>
                <Table.Td>{conference.date}</Table.Td>
                <Table.Td>{conference.venue}</Table.Td>
                <Table.Td>{conference.paperTitle}</Table.Td>
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
                    {conference.award && (
                      <Badge
                        variant="gradient"
                        gradient={{ from: "yellow", to: "orange" }}
                        leftSection={<IconAward size={14} />}
                      >
                        {conference.award}
                      </Badge>
                    )}
                  </Group>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </Card>

      {/* プロジェクト概要 */}
      <Title order={3} className={styles.sectionTitle} mt="xl">
        研究プロジェクト
      </Title>
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xl" mt="md">
        {projects.map((project) => (
          <Card key={project.id} className={styles.projectCard}>
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

              <Group mt="md" className={styles.tags}>
                {project.tags.map((tag) => (
                  <Badge key={tag} size="sm" variant="light">
                    {tag}
                  </Badge>
                ))}
              </Group>

              <Group mt="md" className={styles.links}>
                {project.paperUrl && (
                  <Button
                    variant="light"
                    leftSection={<IconFileText size={16} />}
                    component="a"
                    href={project.paperUrl}
                    target="_blank"
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
                  >
                    スライド
                  </Button>
                )}
              </Group>
            </Stack>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  );
}
