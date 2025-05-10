import { Grid, Paper, Stack, Text } from "@mantine/core";

import { Hobby } from "@/types/about";

interface AboutMeInfoProps {
  description: string;
  education: {
    school: string;
    degree: string;
    field: string;
    period: string;
  };
  certifications: {
    name: string;
    issuer: string;
    date: string;
  }[];
  hobbies: Hobby[];
}

export const AboutMeInfo = ({
  description,
  education,
  certifications,
  hobbies,
}: AboutMeInfoProps) => {
  return (
    <Grid gutter="xl">
      <Grid.Col span={{ base: 12, md: 6 }}>
        <Paper className="p-6 h-full">
          <Stack>
            <Text size="lg">{description}</Text>
            <div>
              <Text fw={700} mb="xs">
                学歴
              </Text>
              <Text>
                {education.school} {education.degree}
              </Text>
              <Text>{education.field}</Text>
              <Text c="dimmed">{education.period}</Text>
            </div>
          </Stack>
        </Paper>
      </Grid.Col>
      <Grid.Col span={{ base: 12, md: 6 }}>
        <Paper className="p-6 h-full">
          <Stack>
            <div>
              <Text fw={700} mb="xs">
                資格
              </Text>
              {certifications.map((cert, index) => (
                <div key={index} className="mb-2">
                  <Text>{cert.name}</Text>
                  <Text size="sm" c="dimmed">
                    {cert.issuer} - {cert.date}
                  </Text>
                </div>
              ))}
            </div>
            <div>
              <Text fw={700} mb="xs">
                趣味
              </Text>
              <div className="flex flex-wrap gap-4">
                {hobbies.map((hobby, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-gray-100 rounded-lg p-2"
                  >
                    <div className="w-6 h-6 flex items-center justify-center">
                      {hobby.icon}
                    </div>
                    <Text size="sm">{hobby.label}</Text>
                  </div>
                ))}
              </div>
            </div>
          </Stack>
        </Paper>
      </Grid.Col>
    </Grid>
  );
};
