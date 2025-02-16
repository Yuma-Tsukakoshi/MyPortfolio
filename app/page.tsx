"use client";
import { Box, Center, Stack, Title } from "@mantine/core";

import { ContactUs } from "@/components/contact/ContactUs";
import { HeroContentLeft } from "@/components/hero/HeroContentLeft";
import { ComponentGridForProfile } from "@/components/profile/ComponentGrid";
import { UserTimeline } from "@/components/profile/UserTimeline";
import { ComponentGrid } from "@/components/research/ComponentGrid";
import { TableReviews } from "@/components/research/TableReviews";
import { GridSkillsSection } from "@/components/skills/UserSkills";
import { UserInfoIcons } from "@/components/userInfo/UserInfoIcons";
import { CarouselForWorks } from "@/components/works/CarouselForWorks";
import { useScrollContext } from "@/context/ScrollContext";

export default function Home() {
  const {
    aboutMeRef,
    worksRef,
    researchRef,
    skillSetRef,
    profileRef,
    contactRef,
  } = useScrollContext();

  return (
    <>
      {/* Hero セクション*/}
      <HeroContentLeft />

      {/* About Me */}
      <Center mt={160} h={"100vh"}>
        <Stack>
          <Title order={2} ta="center" ref={aboutMeRef}>
            About Me
          </Title>
          <UserInfoIcons />
        </Stack>
      </Center>

      {/* Works */}
      <Center mt={160} mx={320} h={"100vh"}>
        <Stack>
          <Title order={2} ta="center" ref={worksRef}>
            Works
          </Title>
          <Box>
            <Title order={3}>インターン</Title>
            <CarouselForWorks />
          </Box>

          <Box mt={20}>
            <Title order={3}>個人・チーム開発</Title>
            <CarouselForWorks />
          </Box>
        </Stack>
      </Center>

      {/* Research セクション */}
      <Center mt={160} mx={320} h={"100vh"}>
        <Stack>
          <Title order={2} ta="center" ref={researchRef}>
            Research
          </Title>
          <TableReviews />
          <ComponentGrid />
        </Stack>
      </Center>

      {/* Skill Set セクション */}
      <Center mt={160} mx={320} h={"100vh"}>
        <Stack>
          <Title order={2} ta="center" ref={skillSetRef}>
            Skill Set
          </Title>
          <GridSkillsSection />
        </Stack>
      </Center>

      {/* Profile セクション */}
      <Center mt={160} mx={320} h={"100vh"}>
        <Stack>
          <Title order={2} ta="center" ref={profileRef}>
            Profile
          </Title>
          <UserTimeline />
          <Box mt={80}>
            <ComponentGridForProfile />
          </Box>
        </Stack>
      </Center>
      {/* Contact */}
      <Center mt={160} h={"100vh"}>
        <Stack>
          <Title order={2} ta="center" ref={contactRef}>
            Contact
          </Title>
          <ContactUs />
        </Stack>
      </Center>
    </>
  );
}
