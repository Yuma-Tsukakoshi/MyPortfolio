"use client";
import { Box, Center, Stack } from "@mantine/core";
import { useEffect, useState } from "react";

import { HeaderItems } from "@/components/common/header/headerItems";
import { useScrollContext } from "@/context/ScrollContext";

export const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const {
    aboutMeRef,
    worksRef,
    researchRef,
    skillSetRef,
    profileRef,
    contactRef,
    scrollToSection,
  } = useScrollContext();

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY <= lastScrollY);
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const HeaderList = [
    { name: "About Me", onClick: () => scrollToSection(aboutMeRef) },
    { name: "Works", onClick: () => scrollToSection(worksRef) },
    { name: "Research", onClick: () => scrollToSection(researchRef) },
    { name: "Skill Set", onClick: () => scrollToSection(skillSetRef) },
    { name: "Profile", onClick: () => scrollToSection(profileRef) },
    { name: "Contact", onClick: () => scrollToSection(contactRef) },
  ];

  return (
    <Box
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "64px",
        width: "100%",
        background: "rgba(255, 255, 255, 0.8)",
        backdropFilter: "blur(5px)",
        transition: "transform 0.3s ease-in-out",
        transform: isVisible ? "translateY(0)" : "translateY(-100%)",
        zIndex: 1000,
        padding: "10px 0",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Center style={{ width: "100%" }}>
        <Stack align="center" justify="center" style={{ height: "100%" }}>
          <HeaderItems items={HeaderList} />
        </Stack>
      </Center>
    </Box>
  );
};
