"use client";

import {
  ActionIcon,
  Badge,
  Button,
  Card,
  Group,
  Image,
  Text,
} from "@mantine/core";
import { IconHeart } from "@tabler/icons-react";
import { useState } from "react";

import NotionDialog from "@/components/notion/NotionDialog";

export default function NotionCard({
  pageId,
  title,
  description,
  image,
}: {
  pageId: string;
  title: string;
  description?: string;
  image?: string;
}) {
  const [selectedPageId, setSelectedPageId] = useState<string | null>(null);

  return (
    <>
      <Card withBorder radius="md" p="md">
        <Card.Section>
          {image && <Image src={image} alt={title} height={180} />}
        </Card.Section>

        <Card.Section mt="md">
          <Group justify="apart">
            <Text fz="lg" fw={500}>
              {title}
            </Text>
            <Badge size="sm" variant="light">
              Notion Page
            </Badge>
          </Group>
          {description && (
            <Text fz="sm" mt="xs">
              {description}
            </Text>
          )}
        </Card.Section>

        <Group mt="xs">
          <Button
            radius="md"
            style={{ flex: 1 }}
            onClick={() => setSelectedPageId(pageId)}
          >
            Show details
          </Button>
          <ActionIcon variant="default" radius="md" size={36}>
            <IconHeart stroke={1.5} />
          </ActionIcon>
        </Group>
      </Card>

      {/* Notion の Dialog を表示 */}
      {selectedPageId && (
        <NotionDialog
          pageId={selectedPageId}
          onClose={() => setSelectedPageId(null)}
        />
      )}
    </>
  );
}
