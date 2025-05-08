"use client";

import { ActionIcon, Group, Text } from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";

import { useScrollContext } from "@/context/ScrollContext";

export function FooterLinks() {
  const { setActiveSection } = useScrollContext();

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 100,
        behavior: "smooth",
      });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <Group>
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
          onClick={() => scrollToSection("profile")}
        >
          <IconMail stroke={1.5} />
        </ActionIcon>
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
          onClick={() => scrollToSection("skills")}
        >
          <IconBrandGithub stroke={1.5} />
        </ActionIcon>
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
          onClick={() => scrollToSection("works")}
        >
          <IconBrandLinkedin stroke={1.5} />
        </ActionIcon>
      </Group>
      <Text size="sm" c="#5f6368">
        © 2024 Your Name. All rights reserved.
      </Text>
    </div>
  );
}
