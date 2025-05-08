import {
  Avatar,
  Card,
  Container,
  Group,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import {
  IconBrandGit,
  IconBrandGithub,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/Yuma-Tsukakoshi",
    icon: IconBrandGithub,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/yuma-tsukakoshi-741646314/",
    icon: IconBrandLinkedin,
  },
  {
    name: "Qiita",
    url: "https://qiita.com/yukkun",
    icon: IconBrandGit,
  },
];

const qualifications = ["基本情報技術者", "応用情報技術者"];

const hobbies = ["バスケットボール", "スノボ", "旅行"];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function AboutMe() {
  return (
    <Container size="lg" py="xl">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <Title order={2} ta="center" mb="xl">
          About Me
        </Title>

        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
          {/* 左側：写真とSNSリンク */}
          <motion.div variants={itemVariants}>
            <Stack>
              <Card p="md" radius="md" withBorder>
                <Avatar
                  src="/images/profile.jpg"
                  alt="塚越 雄真"
                  size={300}
                  radius="xl"
                  mx="auto"
                />
              </Card>

              <Group justify="center" gap="md">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      color: "var(--mantine-color-cyan-6)",
                      transition: "color 0.2s ease",
                    }}
                  >
                    <link.icon size={24} />
                  </motion.a>
                ))}
              </Group>
            </Stack>
          </motion.div>

          {/* 右側：基本情報 */}
          <motion.div variants={itemVariants}>
            <Stack>
              <Card p="xl" radius="md" withBorder>
                <Stack gap="md">
                  <motion.div variants={itemVariants}>
                    <Title order={3} mb="md">
                      基本情報
                    </Title>
                    <Text>
                      慶應義塾大学 理工学研究科 開放環境科学専攻 修士1年
                    </Text>
                    <Text>2027年卒業予定</Text>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <Title order={3} mb="md">
                      資格
                    </Title>
                    <Group gap="md">
                      {qualifications.map((qualification) => (
                        <Text key={qualification}>{qualification}</Text>
                      ))}
                    </Group>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <Title order={3} mb="md">
                      趣味
                    </Title>
                    <Group gap="md">
                      {hobbies.map((hobby) => (
                        <Text key={hobby}>{hobby}</Text>
                      ))}
                    </Group>
                  </motion.div>
                </Stack>
              </Card>
            </Stack>
          </motion.div>
        </SimpleGrid>
      </motion.div>
    </Container>
  );
}
