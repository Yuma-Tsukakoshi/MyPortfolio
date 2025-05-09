import { Badge, Group, Paper, Stack, Text, Title } from "@mantine/core";

import { HobbyItem } from "@/components/atoms/HobbyItem";
import { AboutMeData } from "@/types/about";

interface ProfileInfoProps {
  data: AboutMeData;
}

export const ProfileInfo = ({ data }: ProfileInfoProps) => {
  return (
    <Paper className="p-6 rounded-xl bg-white shadow-md">
      <Stack>
        {/* 基本情報 */}
        <div>
          <Title order={3} className="text-xl font-bold mb-4">
            基本情報
          </Title>
          <Text size="lg" className="text-gray-700 mb-2">
            {data.education}
          </Text>
          <Text size="lg" className="text-gray-700 mb-4">
            {data.graduationYear}
          </Text>
          <Group>
            {data.certifications.map((cert, index) => (
              <Badge
                key={index}
                size="lg"
                className="bg-gradient-to-r from-blue-800 to-cyan-400 text-white"
              >
                {cert}
              </Badge>
            ))}
          </Group>
        </div>

        {/* 趣味 */}
        <div>
          <Title order={3} className="text-xl font-bold mb-4">
            趣味
          </Title>
          <div className="grid grid-cols-2 gap-4">
            {data.hobbies.map((hobby, index) => (
              <HobbyItem key={index} hobby={hobby} />
            ))}
          </div>
        </div>
      </Stack>
    </Paper>
  );
};
