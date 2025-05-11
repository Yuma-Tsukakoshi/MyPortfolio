import {
  Badge,
  Card,
  Group,
  Image,
  Stack,
  Text,
  Title,
  Tooltip,
  UnstyledButton,
} from "@mantine/core";
import {
  IconBrandGithub,
  IconBuilding,
  IconCalendar,
  IconExternalLink,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  title: string;
  period: string;
  description: string;
  role: string;
  achievement: string;
  techStack: string[];
  imageUrl?: string;
  githubUrl?: string;
  externalUrl?: string;
  company: string;
}

export function ProjectCard({
  title,
  period,
  description,
  role,
  achievement,
  techStack,
  imageUrl,
  githubUrl,
  externalUrl,
  company,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={styles.cardWrapper}
    >
      <Card className={styles.card} padding="lg" radius="md" withBorder>
        <Card.Section>
          {imageUrl && (
            <div className={styles.imageWrapper}>
              <Image
                src={imageUrl}
                height={200}
                alt={title}
                className={styles.image}
              />
              <div className={styles.imageOverlay}>
                <Group gap="xs">
                  {githubUrl || externalUrl ? (
                    <>
                      {githubUrl && (
                        <Tooltip label="GitHubリポジトリ">
                          <UnstyledButton
                            component="a"
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.iconButton}
                          >
                            <IconBrandGithub size={24} />
                          </UnstyledButton>
                        </Tooltip>
                      )}
                      {externalUrl && (
                        <Tooltip label="プロジェクトページ">
                          <UnstyledButton
                            component="a"
                            href={externalUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.iconButton}
                          >
                            <IconExternalLink />
                          </UnstyledButton>
                        </Tooltip>
                      )}
                    </>
                  ) : (
                    <Text size="lg" c="white">
                      No Link
                    </Text>
                  )}
                </Group>
              </div>
            </div>
          )}
        </Card.Section>

        <Stack mt="md" gap="xs" className={styles.content}>
          <Group justify="space-between" wrap="nowrap">
            <Group gap="xs" wrap="nowrap">
              <IconBuilding size={16} className={styles.icon} />
              <Badge
                size="xs"
                variant="light"
                color="blue"
                className={styles.companyBadge}
              >
                {company}
              </Badge>
            </Group>
            <Group gap="xs" wrap="nowrap">
              <IconCalendar size={16} className={styles.icon} />
              <Text size="xs" c="dimmed">
                {period}
              </Text>
            </Group>
          </Group>

          <Title order={3} className={styles.title}>
            {title}
          </Title>

          <Text size="sm" c="dimmed">
            {description}
          </Text>

          <div className={styles.section}>
            <Text size="sm" fw={700} className={styles.sectionTitle}>
              担当業務
            </Text>
            <Text size="sm" className={styles.sectionContent}>
              {role}
            </Text>
          </div>

          <div className={styles.section}>
            <Text size="sm" fw={700} className={styles.sectionTitle}>
              成果
            </Text>
            <Text size="sm" className={styles.sectionContent}>
              {achievement}
            </Text>
          </div>

          <div className={styles.techStack}>
            {techStack.map((tech, index) => (
              <Badge
                key={index}
                size="sm"
                variant="light"
                className={styles.techBadge}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </Stack>
      </Card>
    </motion.div>
  );
}
