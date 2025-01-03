import { Box, Center, Stack, Title } from "@mantine/core";

import { HeroContentLeft } from "@/components/hero/HeroContentLeft";
import { UserInfoIcons } from "@/components/userInfo/UserInfoIcons";
import { CarouselForWorks } from "@/components/works/CarouselForWorks";

export default function Home() {
  return (
    <>
      {/* Hero セクション*/}
      <HeroContentLeft />

      {/* About me セクション*/}
      <Title order={2} ta="center">
        About Me
      </Title>
      <Center my={40} h={"100vh"}>
        <Stack>
          <UserInfoIcons />
        </Stack>
      </Center>

      {/* Works セクション */}
      <Title order={2} ta="center">
        Works
      </Title>
      <Center mt={40} mx={240} h={"100vh"}>
        <Stack>
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
    </>
  );
}
