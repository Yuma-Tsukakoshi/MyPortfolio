"use client";

import { Avatar, Container, Group, Paper, Text, Title } from "@mantine/core";
import { motion } from "framer-motion";

export function UserInfo() {
  return (
    <Container size="lg" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Paper
          p="xl"
          radius="md"
          style={{
            background: "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
            border: "1px solid #e8eaed",
          }}
        >
          <Group>
            <Avatar size={120} radius="md" src="/avatar.jpg" alt="Your Name" />
            <div>
              <Title order={2} style={{ color: "#202124" }}>
                Your Name
              </Title>
              <Text size="lg" c="#5f6368" mt="xs">
                Software Engineer
              </Text>
              <Text c="#5f6368" mt="md">
                Based in Tokyo, Japan
              </Text>
            </div>
          </Group>
        </Paper>
      </motion.div>
    </Container>
  );
}
