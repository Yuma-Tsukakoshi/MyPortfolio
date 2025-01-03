import { Box, Center, Stack, Title } from "@mantine/core";

import { ContactUs } from "@/components/contact/ContactUs";
import { HeroContentLeft } from "@/components/hero/HeroContentLeft";
import { ComponentGridForProfile } from "@/components/profile/ComponentGrid";
import { UserTimeline } from "@/components/profile/UserTimeline";
import { ComponentGrid } from "@/components/research/ComponentGrid";
import { TableReviews } from "@/components/research/TableReviews";
import { UserInfoIcons } from "@/components/userInfo/UserInfoIcons";
import { CarouselForWorks } from "@/components/works/CarouselForWorks";

export default function Home() {
  return (
    <>
      {/* Hero セクション*/}
      <HeroContentLeft />

      {/* About me セクション*/}
      <Center my={160} h={"100vh"}>
        <Stack>
          <Title order={2} ta="center">
            About Me
          </Title>
          <UserInfoIcons />
        </Stack>
      </Center>

      {/* Works セクション */}
      <Center mt={160} mx={320} h={"100vh"}>
        <Stack>
          <Title order={2} ta="center">
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
          <Title order={2} ta="center">
            Research
          </Title>
          <TableReviews />
          <ComponentGrid />
        </Stack>
      </Center>

      {/* Skill Set セクション */}
      <Center mt={160} mx={320} h={"100vh"}>
        <Stack>
          <Title order={2} ta="center">
            Skill Set
          </Title>
        </Stack>
      </Center>

      {/* Profile セクション */}
      <Center mt={160} mx={320} h={"100vh"}>
        <Stack>
          <Title order={2} ta="center">
            Profile
          </Title>
          <UserTimeline />
          <Box mt={80}>
            <ComponentGridForProfile />
          </Box>
        </Stack>
      </Center>

      {/* Contact セクション */}
      <Center mt={160} h={"100vh"}>
        <Stack>
          <Title order={2} ta="center">
            Contact
          </Title>
          <ContactUs />
        </Stack>
      </Center>
    </>
  );
}
