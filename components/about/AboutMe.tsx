import {
  Anchor,
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
  IconBrandGithub,
  IconBrandLinkedin,
  IconHeart,
  IconSchool,
  IconUser,
} from "@tabler/icons-react";

import styles from "./AboutMe.module.css";

const socialLinks = [
  {
    icon: IconBrandGithub,
    label: "GitHub",
    url: "https://github.com/tsukakoshiyuma",
    color: "gray",
  },
  {
    icon: IconBrandLinkedin,
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/tsukakoshiyuma/",
    color: "blue",
  },
  {
    icon: IconBrandGithub,
    label: "Qiita",
    url: "https://qiita.com/yukkun",
    color: "green",
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
            <Text>👨‍💻 筑波大学 情報学群 情報メディア創成学類</Text>
            <Text>🎓 2025年卒業予定</Text>
            <Text>📍 茨城県つくば市</Text>
          </Stack>
        </Card>

        {/* 資格 */}
        <Card className={styles.card}>
          <Group>
            <IconSchool size={24} className={styles.icon} />
            <Title order={3}>資格</Title>
          </Group>
          <Stack mt="md">
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
          </Stack>
        </Card>

        {/* SNSリンク */}
        <Card className={styles.card}>
          <Group>
            <IconUser size={24} className={styles.icon} />
            <Title order={3}>SNS</Title>
          </Group>
          <Stack mt="md">
            {socialLinks.map((link) => (
              <Anchor
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <link.icon
                  size={24}
                  color={`var(--mantine-color-${link.color}-6)`}
                />
                <Text ml="md">{link.label}</Text>
              </Anchor>
            ))}
          </Stack>
        </Card>
      </SimpleGrid>
    </Container>
  );
}
