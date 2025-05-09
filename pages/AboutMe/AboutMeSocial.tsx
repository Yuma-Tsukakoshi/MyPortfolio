import { ActionIcon, Group, Paper, Text } from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
} from "@tabler/icons-react";

interface AboutMeSocialProps {
  socialLinks: {
    github: string;
    linkedin: string;
    twitter: string;
  };
}

export const AboutMeSocial = ({ socialLinks }: AboutMeSocialProps) => {
  return (
    <Paper className="p-6">
      <Text fw={700} mb="md">
        ソーシャルメディア
      </Text>
      <Group>
        <ActionIcon
          component="a"
          href={socialLinks.github}
          target="_blank"
          variant="light"
          size="lg"
          className="text-gray-700 hover:text-gray-900"
        >
          <IconBrandGithub size={24} />
        </ActionIcon>
        <ActionIcon
          component="a"
          href={socialLinks.linkedin}
          target="_blank"
          variant="light"
          size="lg"
          className="text-blue-600 hover:text-blue-700"
        >
          <IconBrandLinkedin size={24} />
        </ActionIcon>
        <ActionIcon
          component="a"
          href={socialLinks.twitter}
          target="_blank"
          variant="light"
          size="lg"
          className="text-blue-400 hover:text-blue-500"
        >
          <IconBrandTwitter size={24} />
        </ActionIcon>
      </Group>
    </Paper>
  );
};
