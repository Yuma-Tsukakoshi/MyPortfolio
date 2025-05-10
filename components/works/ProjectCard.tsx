import { Badge, Card, Group, Image, Stack, Text, Title } from "@mantine/core";
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";
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
    >
      <Card className={styles.card} padding="lg" radius="md" withBorder>
        <Card.Section>
          {imageUrl && (
            <Image
              src={imageUrl}
              height={160}
              alt={title}
              className={styles.image}
            />
          )}
        </Card.Section>

        <Stack mt="md" gap="xs">
          <Group justify="space-between">
            <Badge size="sm" variant="light" color="blue">
              {company}
            </Badge>
            <Text size="sm" c="dimmed">
              {period}
            </Text>
          </Group>

          <Title order={3} className={styles.title}>
            {title}
          </Title>

          <Text size="sm" c="dimmed" className={styles.description}>
            {description}
          </Text>

          <div>
            <Text size="sm" fw={700}>
              担当業務
            </Text>
            <Text size="sm">{role}</Text>
          </div>

          <div>
            <Text size="sm" fw={700}>
              成果
            </Text>
            <Text size="sm">{achievement}</Text>
          </div>

          <div className={styles.techStack}>
            {techStack.map((tech, index) => (
              <Badge key={index} size="sm" variant="light">
                {tech}
              </Badge>
            ))}
          </div>

          <Group gap="xs" mt="md">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                <IconBrandGithub size={20} />
              </a>
            )}
            {externalUrl && (
              <a
                href={externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                <IconExternalLink size={20} />
              </a>
            )}
          </Group>
        </Stack>
      </Card>
    </motion.div>
  );
}
