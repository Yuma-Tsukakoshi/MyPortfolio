"use client";

import { Button, Container, Loader, Modal } from "@mantine/core";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

import { SectionTitle } from "@/components/common/SectionTitle";

import styles from "./Profile.module.css";

interface ProfileEvent {
  year: string;
  title: string;
  description: string;
  image?: string;
  notionPageId?: string;
}

export function Profile() {
  const events: ProfileEvent[] = [
    {
      year: "2021",
      title: "大学 入学",
      description: "情報理工学系研究科 コンピュータ科学専攻",
      image: "https://placehold.jp/400x180.png?text=大学+入学",
      notionPageId: "NOTION_PAGE_ID_1",
    },
    {
      year: "2022",
      title: "研究室配属",
      description: "情報理工学系研究科 コンピュータ科学専攻",
      image: "https://placehold.jp/400x180.png?text=研究室配属",
      notionPageId: "NOTION_PAGE_ID_2",
    },
    {
      year: "2023",
      title: "大学 卒業",
      description: "情報理工学系研究科 コンピュータ科学専攻",
      image: "https://placehold.jp/400x180.png?text=大学+卒業",
      notionPageId: "NOTION_PAGE_ID_3",
    },
    {
      year: "2024",
      title: "大学院修士課程 入学",
      description: "情報理工学系研究科 コンピュータ科学専攻",
      image: "https://placehold.jp/400x180.png?text=大学院修士課程+入学",
      notionPageId: "NOTION_PAGE_ID_4",
    },
  ];

  const [opened, setOpened] = React.useState(false);
  const [notionContent, setNotionContent] = React.useState<string>("");
  const [loading, setLoading] = React.useState(false);

  const handleOpenModal = async (pageId: string) => {
    setOpened(true);
    setLoading(true);
    // Notion APIからデータ取得（仮実装）
    // 実際はfetch(`/api/notion?pageId=${pageId}`)などで取得
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
    <Container size="lg" className={styles.container + " py-20"}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <SectionTitle>Profile</SectionTitle>
        <div className={styles.stylishTimeline}>
          <div className={styles.stylishTimelineLine} />
          {events.map((event, index) => (
            <motion.div
              key={event.year}
              className={styles.stylishTimelineItem}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              <div className={styles.stylishYearBadge}>{event.year}</div>
              <div className={styles.stylishEventCard}>
                {event.image && (
                  <Image
                    src={event.image}
                    alt={event.title}
                    width={400}
                    height={160}
                    className={styles.stylishEventImage}
                    style={{ objectFit: "cover" }}
                    unoptimized
                  />
                )}
                <div className={styles.stylishEventTitle}>{event.title}</div>
                <div className={styles.stylishEventDesc}>
                  {event.description}
                </div>
                <Button
                  mt="md"
                  variant="outline"
                  color="blue"
                  radius="xl"
                  onClick={() => handleOpenModal(event.notionPageId || "")}
                  style={{ marginTop: 16, alignSelf: "flex-end" }}
                >
                  詳細を見る
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
        <Modal
          opened={opened}
          onClose={handleCloseModal}
          title="詳細"
          size="lg"
          centered
        >
          {loading ? <Loader /> : <div>{notionContent}</div>}
        </Modal>
      </motion.div>
    </Container>
  );
}
