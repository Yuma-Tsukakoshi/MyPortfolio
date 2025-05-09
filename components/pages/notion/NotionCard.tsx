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
import { motion } from "framer-motion";
import { useState } from "react";

import NotionDialog from "@/components/pages/notion/NotionDialog";

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
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Card
          withBorder
          radius="md"
          p="md"
          style={{
            background: "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
            borderColor: "#e8eaed",
          }}
        >
          <Card.Section>
            {image && (
              <Image
                src={image}
                alt={title}
                height={180}
                style={{ objectFit: "cover" }}
              />
            )}
          </Card.Section>

          <Card.Section mt="md">
            <Group justify="apart">
              <Text
                fz="lg"
                fw={500}
                style={{
                  color: "#202124",
                }}
              >
                {title}
              </Text>
              <Badge
                size="sm"
                variant="light"
                style={{
                  backgroundColor: "#e8f0fe",
                  color: "#1a73e8",
                }}
              >
                Notion Page
              </Badge>
            </Group>
            {description && (
              <Text
                fz="sm"
                mt="xs"
                style={{
                  color: "#5f6368",
                }}
              >
                {description}
              </Text>
            )}
          </Card.Section>

          <Group mt="xs">
            <Button
              radius="md"
              style={{
                flex: 1,
                backgroundColor: "#1a73e8",
                "&:hover": {
                  backgroundColor: "#1557b0",
                },
              }}
              onClick={() => setSelectedPageId(pageId)}
            >
              Show details
            </Button>
            <ActionIcon
              variant="light"
              radius="md"
              size={36}
              style={{
                backgroundColor: "#e8f0fe",
                color: "#1a73e8",
                "&:hover": {
                  backgroundColor: "#d2e3fc",
                },
              }}
            >
              <IconHeart stroke={1.5} />
            </ActionIcon>
          </Group>
        </Card>
      </motion.div>

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
