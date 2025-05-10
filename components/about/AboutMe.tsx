"use client";

import {
  Badge,
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
import Image from "next/image";

import { SectionTitle } from "@/components/common/SectionTitle";

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
    <Container size="lg" className={styles.container + " py-20"}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <SectionTitle title="About me" subtitle="私について" />

        <div className={styles.content}>
          {/* 左側：写真 */}
          <motion.div
            className={styles.imageContainer}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/profile.jpg"
              alt="プロフィール画像"
              width={300}
              height={300}
              className={styles.avatar}
            />
            <div className={styles.socialLinks}>
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* 右側：情報 */}
          <motion.div
            className={styles.infoContainer}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Paper className={styles.infoCard}>
              <Stack>
                {/* 基本情報 */}
                <div>
                  <Title order={3} className={styles.sectionTitle}>
                    基本情報
                  </Title>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true }}
                    className={styles.introduction}
                  >
                    <Text size="lg" className={styles.introText}>
                      慶應義塾大学 理工学研究科
                      開放環境科学専攻の塚越雄真である。エンジニアとして、技術だけでなくビジネス視点も重視し、クライアントと連携しながら価値を提供することを目指している。
                    </Text>
                    <Text size="lg" className={styles.introText}>
                      大学時代はプログラミングコミュニティPOSSEでPM・PdMを経験し、チームをリードしながらプロダクトを完成させた。その後はインターンで法人向けSaaSや業務自動化システムの開発に携わり、要件定義から設計、開発まで幅広く経験を積んだ。技術力だけでなく、顧客の課題を理解し、最適なソリューションを提案する力を磨いた。
                    </Text>
                    <Text size="lg" className={styles.introText}>
                      現在は、チームが最大限のパフォーマンスを発揮できる環境を整えることにやりがいを感じている。技術とビジネスの両方を活かし、価値あるプロダクトを作り続けていきたい。
                    </Text>
                  </motion.div>
                </div>

                {/* 趣味 */}
                <div>
                  <Title order={3} className={styles.sectionTitle}>
                    趣味
                  </Title>
                  <div className={styles.hobbiesContainer}>
                    <div className={styles.hobbyItem}>
                      <span className={styles.hobbyIcon}>🏀</span>
                      <span>バスケ</span>
                    </div>
                    <div className={styles.hobbyItem}>
                      <span className={styles.hobbyIcon}>🏃</span>
                      <span>ランニング</span>
                    </div>
                    <div className={styles.hobbyItem}>
                      <span className={styles.hobbyIcon}>✈️</span>
                      <span>旅行</span>
                    </div>
                  </div>
                </div>
                <div>
                  <Title order={3} className={styles.sectionTitle}>
                    資格
                  </Title>
                  <Group mt="sm">
                    <Badge
                      size="lg"
                      style={{
                        background:
                          "linear-gradient(135deg, #1e40af 0%, #22d3ee 100%)",
                        color: "white",
                      }}
                    >
                      基本情報技術者(2022年11月 取得)
                    </Badge>
                    <Badge
                      size="lg"
                      style={{
                        background:
                          "linear-gradient(135deg, #1e40af 0%, #22d3ee 100%)",
                        color: "white",
                      }}
                    >
                      応用情報技術者(2023年10月 取得)
                    </Badge>
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
