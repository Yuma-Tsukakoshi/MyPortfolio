import { Box, Center, Stack, Title } from "@mantine/core";

import { HeroContentLeft } from "@/components/hero/HeroContentLeft";
import { TableReviews } from "@/components/research/TableReviews";
import { UserInfoIcons } from "@/components/userInfo/UserInfoIcons";
import { CarouselForWorks } from "@/components/works/CarouselForWorks";

import { ComponentGrid } from "../components/research/ComponentGrid";

export default function Home() {
  return (
    <>
      {/* Hero セクション*/}
      <HeroContentLeft />

      {/* About me セクション*/}
      <Center my={40} h={"100vh"}>
        <Stack>
          <Title order={2} ta="center">
            About Me
          </Title>
          <UserInfoIcons />
        </Stack>
      </Center>

      {/* Works セクション */}
      <Center mt={40} mx={240} h={"100vh"}>
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
      <Center mt={40} h={"100vh"}>
        <Stack>
          <Title order={2} ta="center">
            Research
          </Title>
          <TableReviews />
          <ComponentGrid />
        </Stack>
      </Center>
    </>
  );
}
