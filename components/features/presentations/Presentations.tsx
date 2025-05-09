import { Container, Paper, Table } from "@mantine/core";
import { motion } from "framer-motion";

import { SectionTitle } from "@/components/common/SectionTitle";

import styles from "./Presentations.module.css";

interface Presentation {
  date: string;
  title: string;
  conference: string;
  type: "口頭発表" | "ポスター発表";
  location: string;
}

const presentations: Presentation[] = [
  {
    date: "2024/03",
    title: "AIを活用したソフトウェア開発の効率化に関する研究",
    conference: "第XX回情報処理学会全国大会",
    type: "口頭発表",
    location: "東京",
  },
  {
    date: "2023/12",
    title: "機械学習を用いたコード品質予測モデルの提案",
    conference: "第XX回ソフトウェア工学シンポジウム",
    type: "ポスター発表",
    location: "大阪",
  },
  // 他の発表データを追加
];

export function Presentations() {
  return (
    <Container size="lg" className={styles.container}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <SectionTitle title="Presentations" subtitle="学会発表" />

        <Paper className={styles.tableContainer}>
          <Table className={styles.table}>
            <Table.Thead>
              <Table.Tr>
                <Table.Th className={styles.headerCell}>日付</Table.Th>
                <Table.Th className={styles.headerCell}>タイトル</Table.Th>
                <Table.Th className={styles.headerCell}>学会名</Table.Th>
                <Table.Th className={styles.headerCell}>種別</Table.Th>
                <Table.Th className={styles.headerCell}>場所</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {presentations.map((presentation, index) => (
                <Table.Tr key={index} className={styles.tableRow}>
                  <Table.Td className={styles.dateCell}>
                    {presentation.date}
                  </Table.Td>
                  <Table.Td className={styles.titleCell}>
                    <span>{presentation.title}</span>
                  </Table.Td>
                  <Table.Td className={styles.conferenceCell}>
                    {presentation.conference}
                  </Table.Td>
                  <Table.Td className={styles.typeCell}>
                    <span className={styles.typeBadge}>
                      {presentation.type}
                    </span>
                  </Table.Td>
                  <Table.Td className={styles.locationCell}>
                    {presentation.location}
                  </Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </Paper>
      </motion.div>
    </Container>
  );
}
