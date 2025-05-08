import {
  Badge,
  Card,
  Container,
  Group,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import {
  IconAward,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandQiita,
  IconCode,
  IconHeart,
  IconUser,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

import styles from "./AboutMe.module.css";

const socialLinks = [
  {
    icon: <IconBrandGithub size={24} />,
    label: "GitHub",
    url: "https://github.com/tsukakoshiyuma",
    color: "#333",
  },
  {
    icon: <IconBrandLinkedin size={24} />,
    label: "LinkedIn",
    url: "https://linkedin.com/in/tsukakoshiyuma",
    color: "#0077B5",
  },
  {
    icon: <IconBrandQiita size={24} />,
    label: "Qiita",
    url: "https://qiita.com/tsukakoshiyuma",
    color: "#55C500",
  },
];

export function AboutMe() {
  return (
    <Container size="lg" className={styles.container}>
      <Title order={2} className={styles.title}>
        About Me
      </Title>

      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xl" mt="xl">
        {/* 基本情報 */}
        <Card className={styles.card}>
          <Group>
            <IconUser size={24} className={styles.icon} />
            <Title order={3}>基本情報</Title>
          </Group>
          <Stack mt="md">
            <Text>名前: 塚越 優馬</Text>
            <Text>所属: 東京工業大学 情報理工学院</Text>
            <Text>専攻: 情報工学系</Text>
            <Text>学年: 学部4年</Text>
          </Stack>
        </Card>

        {/* 資格 */}
        <Card className={styles.card}>
          <Group>
            <IconAward size={24} className={styles.icon} />
            <Title order={3}>資格</Title>
          </Group>
          <Stack mt="md">
            <Badge
              size="lg"
              variant="gradient"
              gradient={{ from: "blue", to: "cyan" }}
            >
              応用情報技術者
            </Badge>
            <Badge
              size="lg"
              variant="gradient"
              gradient={{ from: "blue", to: "cyan" }}
            >
              基本情報技術者
            </Badge>
            <Badge
              size="lg"
              variant="gradient"
              gradient={{ from: "blue", to: "cyan" }}
            >
              AWS Certified Cloud Practitioner
            </Badge>
          </Stack>
        </Card>

        {/* 趣味 */}
        <Card className={styles.card}>
          <Group>
            <IconHeart size={24} className={styles.icon} />
            <Title order={3}>趣味</Title>
          </Group>
          <Stack mt="md">
            <Text>🏀 バスケットボール</Text>
            <Text>🎮 ゲーム開発</Text>
            <Text>📚 技術書読書</Text>
            <Text>🎵 音楽鑑賞</Text>
          </Stack>
        </Card>

        {/* SNSリンク */}
        <Card className={styles.card}>
          <Group>
            <IconCode size={24} className={styles.icon} />
            <Title order={3}>SNS</Title>
          </Group>
          <Stack mt="md">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.icon}
                <Text size="sm">{link.label}</Text>
              </motion.a>
            ))}
          </Stack>
        </Card>
      </SimpleGrid>
    </Container>
  );
}
