"use client";

import { ActionIcon, Stack, Text } from "@mantine/core";
import { IconArrowUp } from "@tabler/icons-react";
import { useEffect, useState } from "react";

import styles from "./PageNav.module.css";

const sections = [
  { id: "about", label: "About", jpLabel: "自己紹介" },
  { id: "career", label: "Career", jpLabel: "経歴" },
  { id: "works", label: "Works", jpLabel: "開発経験" },
  { id: "research", label: "Research", jpLabel: "研究" },
  { id: "skills", label: "Skills", jpLabel: "スキル" },
];

export function PageNav() {
  const [activeSection, setActiveSection] = useState<string>("");
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      const sections = document.querySelectorAll(
        "section[id]",
      ) as NodeListOf<HTMLElement>;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id") || "";

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });

      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100; // ヘッダーの高さ分を考慮
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={styles.navContainer}>
      <Stack gap="md" align="center">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={`${styles.navLink} ${
              activeSection === section.id ? styles.active : ""
            }`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(section.id);
            }}
          >
            <Text size="sm" fw={500} className={styles.navLabel}>
              {section.label}
            </Text>
            <Text size="xs" c="white" className={styles.navSubLabel}>
              {section.jpLabel}
            </Text>
          </a>
        ))}

        {showScrollTop && (
          <ActionIcon
            variant="light"
            size="lg"
            radius="xl"
            onClick={scrollToTop}
            className={styles.scrollTop}
          >
            <IconArrowUp size={20} />
          </ActionIcon>
        )}
      </Stack>
    </div>
  );
}
