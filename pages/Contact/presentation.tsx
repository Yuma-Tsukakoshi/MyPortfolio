import {
  ActionIcon,
  Button,
  Container,
  Grid,
  Group,
  Loader,
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
import { useState } from "react";

import { SectionTitle } from "@/components/common/SectionTitle";
import { ContactData, ContactFormData } from "@/types/contact";

interface ContactProps {
  contact: ContactData | null;
  error: string | null;
  isLoading: boolean;
}

export const Contact = ({ contact, error, isLoading }: ContactProps) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleFormChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      // フォームをリセット
      setFormData({
        name: "",
        email: "",
        message: "",
      });

      // 成功メッセージを表示
      alert("メッセージを送信しました");
    } catch (err) {
      console.error(err);
      alert("メッセージの送信に失敗しました");
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <Loader size="lg" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <Text c="red" size="lg">
          Error: {error}
        </Text>
      </div>
    );
  }

  if (!contact) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <Text c="dimmed" size="lg">
          No contact data available
        </Text>
      </div>
    );
  }

  return (
    <Container size="lg" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <SectionTitle title={contact.title} subtitle={contact.subtitle} />

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
                    onChange={(e) => handleFormChange("name", e.target.value)}
                    required
                  />
                  <TextInput
                    label="メールアドレス"
                    placeholder="example@example.com"
                    value={formData.email}
                    onChange={(e) => handleFormChange("email", e.target.value)}
                    required
                  />
                  <Textarea
                    label="メッセージ"
                    placeholder="お問い合わせ内容をご記入ください"
                    value={formData.message}
                    onChange={(e) =>
                      handleFormChange("message", e.target.value)
                    }
                    required
                    minRows={5}
                  />
                  <Button
                    onClick={handleSubmit}
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
                    <Text>{contact.email}</Text>
                  </Group>

                  <Group>
                    <IconPhone size={24} className="text-blue-600" />
                    <Text>{contact.phone}</Text>
                  </Group>

                  <Group>
                    <IconMapPin size={24} className="text-blue-600" />
                    <Text>{contact.location}</Text>
                  </Group>

                  <div className="mt-8">
                    <Text size="lg" fw={700} className="mb-4">
                      ソーシャルメディア
                    </Text>
                    <Group>
                      <ActionIcon
                        component="a"
                        href={contact.socialLinks.github}
                        target="_blank"
                        variant="light"
                        size="lg"
                        className="text-gray-700 hover:text-gray-900"
                      >
                        <IconBrandGithub size={24} />
                      </ActionIcon>
                      <ActionIcon
                        component="a"
                        href={contact.socialLinks.linkedin}
                        target="_blank"
                        variant="light"
                        size="lg"
                        className="text-blue-600 hover:text-blue-700"
                      >
                        <IconBrandLinkedin size={24} />
                      </ActionIcon>
                      <ActionIcon
                        component="a"
                        href={contact.socialLinks.twitter}
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
