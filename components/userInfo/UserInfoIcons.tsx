import { Avatar, Box, Group, Text } from "@mantine/core";
import { IconAt, IconPhoneCall } from "@tabler/icons-react";

import classes from "./UserInfoIcons.module.css";

export function UserInfoIcons() {
  return (
    <div>
      <Group wrap="nowrap" gap={64}>
        <Avatar
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png"
          size={500}
          radius="md"
        />
        <Box w={500}>
          <Text fz="xl" tt="uppercase" fw={700} c="dimmed">
            Software engineer
          </Text>

          <Text fz="xl" fw={500} className={classes.name}>
            塚越 雄真
          </Text>

          <Group wrap="nowrap" gap={10} mt={3}>
            <IconAt stroke={1.5} size={16} className={classes.icon} />
            <Text fz="xs" c="dimmed">
              robert@glassbreaker.io
            </Text>
          </Group>

          <Group wrap="nowrap" gap={10} mt={5}>
            <IconPhoneCall stroke={1.5} size={16} className={classes.icon} />
            <Text fz="xs" c="dimmed">
              +11 (876) 890 56 23
            </Text>
          </Group>
        </Box>
      </Group>
    </div>
  );
}
