"use client";
import { ActionIcon, Badge, Container, Grid, Group, Text } from "@mantine/core";
import { Button } from "@mantine/core";
import {
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandYoutube,
} from "@tabler/icons-react";
import { IconArrowBigUpLines } from "@tabler/icons-react";

import { useScrollContext } from "@/context/ScrollContext";

import classes from "./FooterLinks.module.css";

export function FooterLinks() {
  const returnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const {
    aboutMeRef,
    worksRef,
    researchRef,
    skillSetRef,
    profileRef,
    contactRef,
    scrollToSection,
  } = useScrollContext();

  const FooterList = [
    { name: "About Me", onClick: () => scrollToSection(aboutMeRef) },
    { name: "Works", onClick: () => scrollToSection(worksRef) },
    { name: "Research", onClick: () => scrollToSection(researchRef) },
    { name: "Skill Set", onClick: () => scrollToSection(skillSetRef) },
    { name: "Profile", onClick: () => scrollToSection(profileRef) },
    { name: "Contact", onClick: () => scrollToSection(contactRef) },
  ];

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <Text size="xs" c="dimmed" className={classes.description}>
            Build fully functional accessible web applications faster than ever
          </Text>
        </div>
        <Grid>
          {FooterList.map((item, index) => (
            <Badge
              key={index}
              variant="transparent"
              color="dimmed"
              size="md"
              onClick={item.onClick}
            >
              {item.name}
            </Badge>
          ))}
        </Grid>
      </Container>
      <Container className={classes.afterFooter}>
        <Text c="dimmed" size="sm">
          My portfolio
        </Text>

        {/* githubやqiita等のリンクに差し替え */}
        <Group gap={0} justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandTwitter size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandYoutube size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandInstagram size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
      <Button
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        }}
        variant="filled"
        color="gray"
        onClick={returnTop}
      >
        <IconArrowBigUpLines size={24} />
      </Button>
    </footer>
  );
}
