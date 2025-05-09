import { Badge, Button, Card, Group, Image, Stack, Text } from "@mantine/core";
import { IconExternalLink } from "@tabler/icons-react";
import Image from "next/image";

import { WorkItem } from "@/types/works";

interface WorkCardProps {
  work: WorkItem;
}

export const WorkCard = ({ work }: WorkCardProps) => {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <div className="relative aspect-video">
          <Image
            src={work.image.src}
            alt={work.image.alt}
            fill
            className="object-cover"
          />
        </div>
      </Card.Section>

      <Stack mt="md" mb="xs">
        <Text fw={500} size="lg">
          {work.title}
        </Text>
        <Text size="sm" c="dimmed">
          {work.description}
        </Text>
      </Stack>

      <Group gap="xs" mb="md">
        {work.technologies.map((tech) => (
          <Badge key={tech} variant="light">
            {tech}
          </Badge>
        ))}
      </Group>

      <Group>
        {work.links.map((link) => (
          <Button
            key={link.name}
            component="a"
            href={link.url}
            target="_blank"
            variant="light"
            leftSection={<IconExternalLink size={16} />}
          >
            {link.name}
          </Button>
        ))}
      </Group>
    </Card>
  );
};
