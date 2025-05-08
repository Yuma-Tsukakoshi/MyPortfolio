import {
  Badge,
  Card,
  Container,
  Group,
  Image,
  Stack,
  Text,
  Timeline,
  Title,
} from "@mantine/core";
import {
  IconBasketball,
  IconBriefcase,
  IconMicroscope,
  IconSchool,
  IconTarget,
  IconUsers,
} from "@tabler/icons-react";

import styles from "./Profile.module.css";

interface TimelineEvent {
  id: number;
  icon: React.ReactNode;
  title: string;
  period: string;
  description: string;
  tags?: string[];
  image?: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    id: 1,
    icon: <IconBasketball size={24} />,
    title: "バスケットボール",
    period: "小学生〜現在",
    description:
      "小学生から続けているバスケットボール。チームプレーを通じて、コミュニケーション能力とリーダーシップを培いました。",
    tags: ["スポーツ", "チームワーク", "リーダーシップ"],
    image: "/profile/basketball.jpg",
  },
  {
    id: 2,
    icon: <IconSchool size={24} />,
    title: "中学校時代",
    period: "2015-2018",
    description:
      "バスケットボール部と駅伝部を兼部。3年間続けた経験から、時間管理と自己管理の重要性を学びました。",
    tags: ["部活動", "時間管理", "自己管理"],
    image: "/profile/school.jpg",
  },
  {
    id: 3,
    icon: <IconUsers size={24} />,
    title: "POSSE",
    period: "2020-2022",
    description:
      "テック局の運営とハッカソン運営を担当。インターン試験の失敗を機に、個人開発に取り組み、技術力を向上させました。",
    tags: ["コミュニティ", "イベント運営", "個人開発"],
    image: "/profile/posse.jpg",
  },
  {
    id: 4,
    icon: <IconBriefcase size={24} />,
    title: "インターンシップ",
    period: "2022-2023",
    description:
      "JOBer、PlusZero、ハイクリでのインターン経験。実務を通じて、チーム開発の進め方と技術スタックを学びました。",
    tags: ["実務経験", "チーム開発", "技術スタック"],
    image: "/profile/intern.jpg",
  },
  {
    id: 5,
    icon: <IconMicroscope size={24} />,
    title: "研究活動",
    period: "2022-現在",
    description:
      "土の研究と先輩方との出会いを通じて、研究の楽しさと重要性を学びました。",
    tags: ["研究", "学術", "イノベーション"],
    image: "/profile/research.jpg",
  },
];

export function Profile() {
  return (
    <Container size="lg" className={styles.container}>
      <Title order={2} className={styles.title}>
        Profile
      </Title>

      {/* タイムライン */}
      <Timeline
        active={timelineEvents.length - 1}
        lineWidth={2}
        className={styles.timeline}
      >
        {timelineEvents.map((event) => (
          <Timeline.Item
            key={event.id}
            bullet={event.icon}
            title={
              <Group>
                <Text fw={700}>{event.title}</Text>
                <Badge variant="light" color="blue">
                  {event.period}
                </Badge>
              </Group>
            }
          >
            <Card className={styles.eventCard}>
              {event.image && (
                <Card.Section>
                  <Image
                    src={event.image}
                    height={200}
                    alt={event.title}
                    className={styles.eventImage}
                  />
                </Card.Section>
              )}
              <Stack mt="md">
                <Text>{event.description}</Text>
                {event.tags && (
                  <Group className={styles.tags}>
                    {event.tags.map((tag) => (
                      <Badge key={tag} size="sm" variant="light">
                        {tag}
                      </Badge>
                    ))}
                  </Group>
                )}
              </Stack>
            </Card>
          </Timeline.Item>
        ))}
      </Timeline>

      {/* 強み・弱み・展望 */}
      <Card className={styles.summaryCard}>
        <Stack spacing="xl">
          <div>
            <Title order={3} className={styles.summaryTitle}>
              <IconTarget size={24} className={styles.summaryIcon} />
              強み
            </Title>
            <Text>• フロントエンドとバックエンドの両方の開発経験</Text>
            <Text>• チーム開発でのコミュニケーション能力</Text>
            <Text>• 研究と実務の両面からの問題解決アプローチ</Text>
          </div>

          <div>
            <Title order={3} className={styles.summaryTitle}>
              <IconTarget size={24} className={styles.summaryIcon} />
              弱み
            </Title>
            <Text>• 大規模システムの設計経験が不足</Text>
            <Text>• クラウドインフラの知識をさらに深める必要</Text>
            <Text>• 英語でのコミュニケーション能力の向上</Text>
          </div>

          <div>
            <Title order={3} className={styles.summaryTitle}>
              <IconTarget size={24} className={styles.summaryIcon} />
              今後の展望
            </Title>
            <Text>• フルスタックエンジニアとしての成長</Text>
            <Text>• 研究と実務を融合させた新しい価値の創造</Text>
            <Text>• 技術を通じた社会課題の解決</Text>
          </div>
        </Stack>
      </Card>
    </Container>
  );
}
