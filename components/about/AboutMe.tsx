"use client";

import {
  Avatar,
  Container,
  Group,
  Paper,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconExternalLink,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

import styles from "./AboutMe.module.css";

export function AboutMe() {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Yuma-Tsukakoshi",
      icon: <IconBrandGithub size={24} />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/yuma-tsukakoshi-741646314/",
      icon: <IconBrandLinkedin size={24} />,
    },
    {
      name: "Qiita",
      url: "https://qiita.com/yukkun",
      icon: <IconExternalLink size={24} />,
    },
  ];

  return (
    <Container size="lg" className={styles.container}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Title
          order={2}
          className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-800 to-cyan-500 bg-clip-text text-transparent"
        >
          About Me
        </Title>

        <div className={styles.content}>
          {/* 左側：写真 */}
          <motion.div
            className={styles.imageContainer}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Avatar
              size={300}
              radius="md"
              src="/profile.jpg"
              alt="Profile"
              className={styles.avatar}
            />
          </motion.div>

          {/* 右側：情報 */}
          <motion.div
            className={styles.infoContainer}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Paper
              p="xl"
              radius="lg"
              className={styles.infoCard}
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(240,249,255,0.98) 100%)",
                border: "1px solid rgba(232,234,237,0.5)",
              }}
            >
              <Stack>
                {/* 基本情報 */}
                <div>
                  <Title order={3} className={styles.sectionTitle}>
                    基本情報
                  </Title>
                  <Text size="lg" className={styles.infoText}>
                    慶應義塾大学 理工学研究科 開放環境科学専攻 修士1年
                  </Text>
                  <Text size="lg" className={styles.infoText}>
                    2027年卒業予定
                  </Text>
                </div>

                {/* 資格 */}
                <div>
                  <Title order={3} className={styles.sectionTitle}>
                    資格
                  </Title>
                  <Text size="lg" className={styles.infoText}>
                    • 基本情報技術者
                  </Text>
                  <Text size="lg" className={styles.infoText}>
                    • 応用情報技術者
                  </Text>
                </div>

                {/* 趣味 */}
                <div>
                  <Title order={3} className={styles.sectionTitle}>
                    趣味
                  </Title>
                  <Text size="lg" className={styles.infoText}>
                    バスケットボール、スノボ、旅行
                  </Text>
                </div>

                {/* SNSリンク */}
                <div>
                  <Title order={3} className={styles.sectionTitle}>
                    Social Links
                  </Title>
                  <Group className={styles.socialLinks}>
                    {socialLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialLink}
                      >
                        {link.icon}
                        <Text size="sm">{link.name}</Text>
                      </a>
                    ))}
                  </Group>
                </div>
              </Stack>
            </Paper>
          </motion.div>
        </div>
      </motion.div>
    </Container>
  );
}
