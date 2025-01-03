import { Center } from "@mantine/core";

import { HeroContentLeft } from "@/components/hero/HeroContentLeft";
import { UserInfoIcons } from "@/components/userInfo/UserInfoIcons";

export default function Home() {
  return (
    <>
      {/* Hero セクション*/}
      <HeroContentLeft />

      {/* About me セクション*/}
      <Center m={40}>
        <UserInfoIcons />
      </Center>
    </>
  );
}
