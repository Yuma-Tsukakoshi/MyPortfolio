"use client";
import { Box, Center, Stack, Title } from "@mantine/core";

import { AboutMe } from "@/components/about/AboutMe";
import { CatchPhrase } from "@/components/hero/CatchPhrase";
import { Profile } from "@/components/profile/Profile";
import { ComponentGrid } from "@/components/research/ComponentGrid";
import { TableReviews } from "@/components/research/TableReviews";
import { GridSkillsSection } from "@/components/skills/UserSkills";
import { CarouselForWorks } from "@/components/works/CarouselForWorks";
import { useScrollContext } from "@/context/ScrollContext";

export default function Home() {
  const { aboutMeRef, worksRef, researchRef, skillSetRef, profileRef } =
    useScrollContext();

  return (
    <>
      {/* Hero セクション*/}
      <CatchPhrase />

      {/* About Me */}
      <Center mt={160} h={"100vh"}>
        <Stack>
          <Title order={2} ta="center" ref={aboutMeRef}>
            About Me
          </Title>
          <AboutMe />
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
          <Profile />
        </Stack>
      </Center>
    </>
  );
}
