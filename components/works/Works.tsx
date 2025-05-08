import {
  Badge,
  Button,
  Card,
  Container,
  Group,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import {
  IconBrandGithub,
  IconExternalLink,
  IconStar,
} from "@tabler/icons-react";

import styles from "./Works.module.css";

interface Work {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  isPickup?: boolean;
}

const works: Work[] = [
  {
    id: 1,
    title: "MyPortfolio",
    description:
      "Next.jsとTypeScriptを使用したポートフォリオサイト。Framer Motionによるアニメーションと、モダンなUIデザインを実装。",
    image: "/works/portfolio.png",
    tags: ["Next.js", "TypeScript", "Framer Motion", "TailwindCSS"],
    githubUrl: "https://github.com/tsukakoshiyuma/MyPortfolio",
    demoUrl: "https://tsukakoshiyuma.com",
    isPickup: true,
  },
  {
    id: 2,
    title: "matmeru",
    description:
      "就活生向けのマッチングアプリケーション。React Nativeを使用したクロスプラットフォーム開発。",
    image: "/works/matmeru.png",
    tags: ["React Native", "TypeScript", "Firebase"],
    githubUrl: "https://github.com/tsukakoshiyuma/matmeru",
    isPickup: true,
  },
  {
    id: 3,
    title: "mercury",
    description:
      "AWSを使用したサーバーレスアーキテクチャの実装。Lambda、DynamoDB、API Gatewayを活用。",
    image: "/works/mercury.png",
    tags: ["AWS", "Serverless", "TypeScript"],
    githubUrl: "https://github.com/tsukakoshiyuma/mercury",
    isPickup: true,
  },
  // 他の作品も同様に追加
];

export function Works() {
  return (
    <Container size="lg" className={styles.container}>
      <Title order={2} className={styles.title}>
        Works
      </Title>

      <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="xl" mt="xl">
        {works.map((work) => (
          <Card
            key={work.id}
            className={`${styles.card} ${work.isPickup ? styles.pickup : ""}`}
          >
            {work.isPickup && (
              <Badge
                className={styles.pickupBadge}
                variant="gradient"
                gradient={{ from: "yellow", to: "orange" }}
              >
                <IconStar size={14} /> Pick Up
              </Badge>
            )}

            <Card.Section>
              <Image
                src={work.image}
                height={200}
                alt={work.title}
                className={styles.image}
              />
            </Card.Section>

            <Stack mt="md" spacing="xs">
              <Title order={3} className={styles.workTitle}>
                {work.title}
              </Title>
              <Text size="sm" c="dimmed" className={styles.description}>
                {work.description}
              </Text>

              <Group mt="md" className={styles.tags}>
                {work.tags.map((tag) => (
                  <Badge key={tag} size="sm" variant="light">
                    {tag}
                  </Badge>
                ))}
              </Group>

              <Group mt="md" className={styles.links}>
                {work.githubUrl && (
                  <Button
                    variant="light"
                    leftSection={<IconBrandGithub size={16} />}
                    component="a"
                    href={work.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </Button>
                )}
                {work.demoUrl && (
                  <Button
                    variant="light"
                    leftSection={<IconExternalLink size={16} />}
                    component="a"
                    href={work.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo
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
