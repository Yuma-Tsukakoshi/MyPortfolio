import { ActionIcon, Container, Grid, Group, Stack, Text } from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
} from "@tabler/icons-react";
import Link from "next/link";

import { FooterData } from "@/types/footer";

interface FooterPresentationProps {
  data: FooterData;
}

export const FooterPresentation = ({ data }: FooterPresentationProps) => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <Container size="lg">
        <Grid>
          {/* フッターセクション */}
          {data.sections.map((section, index) => (
            <Grid.Col key={index} span={{ base: 6, sm: 3 }}>
              <Stack gap="xs">
                <Text size="lg" fw={700} className="mb-4">
                  {section.title}
                </Text>
                {section.links.map((link, linkIndex) => (
                  <Link
                    key={linkIndex}
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </Stack>
            </Grid.Col>
          ))}
        </Grid>

        {/* ソーシャルリンクとコピーライト */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <Text size="sm" className="text-gray-400">
              {data.copyright}
            </Text>
            <Group>
              <ActionIcon
                component="a"
                href={data.socialLinks.github}
                target="_blank"
                variant="subtle"
                size="lg"
                className="text-gray-400 hover:text-white"
              >
                <IconBrandGithub size={24} />
              </ActionIcon>
              <ActionIcon
                component="a"
                href={data.socialLinks.linkedin}
                target="_blank"
                variant="subtle"
                size="lg"
                className="text-gray-400 hover:text-white"
              >
                <IconBrandLinkedin size={24} />
              </ActionIcon>
              <ActionIcon
                component="a"
                href={data.socialLinks.twitter}
                target="_blank"
                variant="subtle"
                size="lg"
                className="text-gray-400 hover:text-white"
              >
                <IconBrandTwitter size={24} />
              </ActionIcon>
            </Group>
          </div>
        </div>
      </Container>
    </footer>
  );
};
