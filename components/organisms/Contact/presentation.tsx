import {
  ActionIcon,
  Button,
  Container,
  Grid,
  Group,
  Paper,
  Stack,
  Text,
  Textarea,
  TextInput,
} from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconMail,
  IconMapPin,
  IconPhone,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

import { SectionTitle } from "@/components/common/SectionTitle";
import { ContactFormData, ContactInfo } from "@/types/contact";

interface ContactPresentationProps {
  contactInfo: ContactInfo;
  formData: ContactFormData;
  onFormChange: (field: keyof ContactFormData, value: string) => void;
  onSubmit: () => void;
}

export const ContactPresentation = ({
  contactInfo,
  formData,
  onFormChange,
  onSubmit,
}: ContactPresentationProps) => {
  return (
    <Container size="lg" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <SectionTitle title="Contact" subtitle="お問い合わせ" />

        <Grid gutter="xl">
          {/* 左側：お問い合わせフォーム */}
          <Grid.Col span={{ base: 12, md: 7 }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Paper className="p-8 rounded-xl bg-white shadow-md">
                <Stack>
                  <TextInput
                    label="お名前"
                    placeholder="山田 太郎"
                    value={formData.name}
                    onChange={(e) => onFormChange("name", e.target.value)}
                    required
                  />
                  <TextInput
                    label="メールアドレス"
                    placeholder="example@example.com"
                    value={formData.email}
                    onChange={(e) => onFormChange("email", e.target.value)}
                    required
                  />
                  <Textarea
                    label="メッセージ"
                    placeholder="お問い合わせ内容をご記入ください"
                    value={formData.message}
                    onChange={(e) => onFormChange("message", e.target.value)}
                    required
                    minRows={5}
                  />
                  <Button
                    onClick={onSubmit}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    送信する
                  </Button>
                </Stack>
              </Paper>
            </motion.div>
          </Grid.Col>

          {/* 右側：連絡先情報 */}
          <Grid.Col span={{ base: 12, md: 5 }}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Paper className="p-8 rounded-xl bg-white shadow-md h-full">
                <Stack>
                  <Text size="xl" fw={700} className="mb-6">
                    連絡先情報
                  </Text>

                  <Group>
                    <IconMail size={24} className="text-blue-600" />
                    <Text>{contactInfo.email}</Text>
                  </Group>

                  <Group>
                    <IconPhone size={24} className="text-blue-600" />
                    <Text>{contactInfo.phone}</Text>
                  </Group>

                  <Group>
                    <IconMapPin size={24} className="text-blue-600" />
                    <Text>{contactInfo.location}</Text>
                  </Group>

                  <div className="mt-8">
                    <Text size="lg" fw={700} className="mb-4">
                      ソーシャルメディア
                    </Text>
                    <Group>
                      <ActionIcon
                        component="a"
                        href={contactInfo.socialLinks.github}
                        target="_blank"
                        variant="light"
                        size="lg"
                        className="text-gray-700 hover:text-gray-900"
                      >
                        <IconBrandGithub size={24} />
                      </ActionIcon>
                      <ActionIcon
                        component="a"
                        href={contactInfo.socialLinks.linkedin}
                        target="_blank"
                        variant="light"
                        size="lg"
                        className="text-blue-600 hover:text-blue-700"
                      >
                        <IconBrandLinkedin size={24} />
                      </ActionIcon>
                      <ActionIcon
                        component="a"
                        href={contactInfo.socialLinks.twitter}
                        target="_blank"
                        variant="light"
                        size="lg"
                        className="text-blue-400 hover:text-blue-500"
                      >
                        <IconBrandTwitter size={24} />
                      </ActionIcon>
                    </Group>
                  </div>
                </Stack>
              </Paper>
            </motion.div>
          </Grid.Col>
        </Grid>
      </motion.div>
    </Container>
  );
};
