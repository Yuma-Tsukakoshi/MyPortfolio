"use client";

import { Carousel } from "@mantine/carousel";
import { Badge, Container, Paper, Stack, Text, Title } from "@mantine/core";
import { motion } from "framer-motion";
import Image from "next/image";

import { SectionTitle } from "@/components/common/SectionTitle";

import styles from "./Career.module.css";

export function CareerHero() {
  const events = [
    {
      title: "慶應義塾大学 理工学研究科 入学",
      description: "開放環境科学専攻に入学し、AI・機械学習の研究を開始",
      date: "2024年4月",
      image: "/images/keio.jpg",
    },
    {
      title: "AWS ソリューションアーキテクト アソシエイト 取得",
      description: "クラウドアーキテクチャの設計と実装の基礎を習得",
      date: "2024年3月",
      image: "/images/aws-saa.jpg",
    },
    {
      title: "AWS デベロッパー アソシエイト 取得",
      description: "AWSの開発とデプロイメントの実践的なスキルを習得",
      date: "2024年2月",
      image: "/images/aws-dva.jpg",
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
        <SectionTitle title="Career" subtitle="経歴" />

        <div className={styles.content}>
          {/* 左側：カルーセル */}
          <motion.div
            className={styles.carouselContainer}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Carousel
              withIndicators
              height={400}
              slideSize="100%"
              slideGap="md"
              loop
              align="start"
              slidesToScroll={1}
              className={styles.carousel}
            >
              {events.map((event, index) => (
                <Carousel.Slide key={index}>
                  <div className={styles.carouselSlide}>
                    <Image
                      src={event.image}
                      alt={event.title}
                      width={600}
                      height={400}
                      className={styles.carouselImage}
                    />
                    <div className={styles.carouselContent}>
                      <Text size="xl" fw={700} className={styles.carouselTitle}>
                        {event.title}
                      </Text>
                      <Text size="lg" className={styles.carouselDescription}>
                        {event.description}
                      </Text>
                      <Badge size="lg" className={styles.carouselDate}>
                        {event.date}
                      </Badge>
                    </div>
                  </div>
                </Carousel.Slide>
              ))}
            </Carousel>
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
                  <div className={styles.certifications}>
                    <div className={styles.certificationBadge}>
                      <Image
                        src="/images/aws-saa.png"
                        alt="AWS SAA"
                        width={48}
                        height={48}
                      />
                    </div>
                    <div className={styles.certificationBadge}>
                      <Image
                        src="/images/aws-dva.png"
                        alt="AWS DVA"
                        width={48}
                        height={48}
                      />
                    </div>
                  </div>
                </div>
              </Stack>
            </Paper>
          </motion.div>
        </div>
      </motion.div>
    </Container>
  );
}
