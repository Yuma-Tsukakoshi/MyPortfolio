"use client";

import {
  ActionIcon,
  Burger,
  Container,
  Group,
  Menu,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconChevronDown } from "@tabler/icons-react";

import { useScrollContext } from "@/context/ScrollContext";

const links = [
  { link: "#profile", label: "Profile" },
  { link: "#skills", label: "Skills" },
  { link: "#works", label: "Works" },
  { link: "#research", label: "Research" },
];

export function Header() {
  const [opened, { toggle }] = useDisclosure(false);
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

  const items = links.map((link) => (
    <Menu.Item
      key={link.label}
      onClick={() => scrollToSection(link.link.replace("#", ""))}
      style={{
        color: "#5f6368",
        "&:hover": {
          backgroundColor: "#e8f0fe",
          color: "#1a73e8",
        },
      }}
    >
      {link.label}
    </Menu.Item>
  ));

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid #e8eaed",
      }}
    >
      <Container size="lg">
        <div className="flex items-center h-16">
          <Text
            size="xl"
            fw={700}
            className="mr-auto"
            style={{
              color: "#1a73e8",
            }}
          >
            Portfolio
          </Text>

          <Group
            gap={5}
            visibleFrom="sm"
            className="ml-auto"
            style={{ justifyContent: "flex-end" }}
          >
            {links.map((link) => (
              <Text
                key={link.label}
                size="sm"
                style={{
                  color: "#5f6368",
                  cursor: "pointer",
                  "&:hover": {
                    color: "#1a73e8",
                  },
                }}
                onClick={() => scrollToSection(link.link.replace("#", ""))}
              >
                {link.label}
              </Text>
            ))}
          </Group>

          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />

          <Menu
            shadow="md"
            width={200}
            opened={opened}
            onClose={toggle}
            position="bottom-end"
          >
            <Menu.Target>
              <ActionIcon
                variant="subtle"
                color="gray"
                size="lg"
                hiddenFrom="sm"
              >
                <IconChevronDown size={20} />
              </ActionIcon>
            </Menu.Target>
            <Menu.Dropdown>{items}</Menu.Dropdown>
          </Menu>
        </div>
      </Container>
    </header>
  );
}
