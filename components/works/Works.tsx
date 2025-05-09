"use client";

import {
  Badge,
  Container,
  Grid,
  Group,
  Paper,
  Text,
  Title,
} from "@mantine/core";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import { motion } from "framer-motion";

import { SectionTitle } from "@/components/common/SectionTitle";

import styles from "./Works.module.css";

export function Works() {
  const blogPosts = [
    {
      title: "AWS SAA取得までの道のり",
      description:
        "AWSソリューションアーキテクトアソシエイトの取得に向けた学習方法と対策を紹介します。",
      platform: "Qiita",
      date: "2024-03-15",
      url: "https://qiita.com/yukkun/items/example1",
      tags: ["AWS", "資格", "クラウド"],
      icon: <IconBrandGithub size={24} />,
    },
    {
      title: "Next.jsでポートフォリオサイトを作る",
      description:
        "Next.jsとMantineを使用したモダンなポートフォリオサイトの構築方法を解説します。",
      platform: "Zenn",
      date: "2024-03-10",
      url: "https://zenn.dev/yukkun/articles/example1",
      tags: ["Next.js", "React", "TypeScript"],
      icon: <IconBrandLinkedin size={24} />,
    },
    {
      title: "Dockerで開発環境を構築する",
      description:
        "Dockerを使用した効率的な開発環境の構築方法とベストプラクティスを紹介します。",
      platform: "Qiita",
      date: "2024-03-05",
      url: "https://qiita.com/yukkun/items/example2",
      tags: ["Docker", "開発環境", "DevOps"],
      icon: <IconBrandGithub size={24} />,
    },
  ];

  return (
    <Container size="lg" className={styles.container + " py-20"}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <SectionTitle title="Works" subtitle="技術ブログ" />

        <Grid gutter="xl">
          {blogPosts.map((post, index) => (
            <Grid.Col key={index} span={{ base: 12, sm: 6, md: 4 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Paper className={styles.blogCard}>
                  <div className={styles.blogHeader}>
                    <Group>
                      {post.icon}
                      <Text size="sm" fw={500} c="dimmed">
                        {post.platform}
                      </Text>
                    </Group>
                    <Text size="sm" c="dimmed">
                      {post.date}
                    </Text>
                  </div>

                  <Title order={3} className={styles.blogTitle}>
                    {post.title}
                  </Title>

                  <Text className={styles.blogDescription}>
                    {post.description}
                  </Text>

                  <div className={styles.blogTags}>
                    {post.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        size="sm"
                        className={styles.blogTag}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.blogLink}
                  >
                    記事を読む →
                  </a>
                </Paper>
              </motion.div>
            </Grid.Col>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
}
