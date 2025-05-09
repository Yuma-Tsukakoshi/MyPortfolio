"use client";

import { ActionIcon, Container, Group, Stack } from "@mantine/core";
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
    <footer className="w-full py-20 bg-gradient-to-b from-transparent via-blue-50 to-blue-100">
      <Container size="lg">
        <Stack gap="xl" align="center">
          <Group gap="xl" className="mt-4">
            <ActionIcon
              variant="light"
              radius="xl"
              size={56}
              className="transition-all duration-300 hover:scale-110 hover:rotate-12"
              style={{
                background: "linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)",
                color: "#1a73e8",
                boxShadow: "0 4px 12px rgba(31, 72, 180, 0.1)",
              }}
              onClick={() => scrollToSection("profile")}
            >
              <IconMail stroke={1.5} size={28} />
            </ActionIcon>
            <ActionIcon
              variant="light"
              radius="xl"
              size={56}
              className="transition-all duration-300 hover:scale-110 hover:rotate-12"
              style={{
                background: "linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)",
                color: "#1a73e8",
                boxShadow: "0 4px 12px rgba(31, 72, 180, 0.1)",
              }}
              onClick={() => scrollToSection("skills")}
            >
              <IconBrandGithub stroke={1.5} size={28} />
            </ActionIcon>
            <ActionIcon
              variant="light"
              radius="xl"
              size={56}
              className="transition-all duration-300 hover:scale-110 hover:rotate-12"
              style={{
                background: "linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)",
                color: "#1a73e8",
                boxShadow: "0 4px 12px rgba(31, 72, 180, 0.1)",
              }}
              onClick={() => scrollToSection("works")}
            >
              <IconBrandLinkedin stroke={1.5} size={28} />
            </ActionIcon>
          </Group>
        </Stack>
      </Container>
    </footer>
  );
}
