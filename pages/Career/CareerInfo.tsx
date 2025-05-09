import { Grid, Paper, Stack, Text } from "@mantine/core";

interface CareerInfoProps {
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
}

export const CareerInfo = ({ education, certifications }: CareerInfoProps) => {
  return (
    <Grid gutter="xl">
      <Grid.Col span={{ base: 12, md: 6 }}>
        <Paper className="p-6 h-full">
          <Stack>
            <Text fw={700} mb="xs">
              学歴
            </Text>
            <Text>
              {education.school} {education.degree}
            </Text>
            <Text>{education.field}</Text>
            <Text c="dimmed">{education.period}</Text>
          </Stack>
        </Paper>
      </Grid.Col>
      <Grid.Col span={{ base: 12, md: 6 }}>
        <Paper className="p-6 h-full">
          <Stack>
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
          </Stack>
        </Paper>
      </Grid.Col>
    </Grid>
  );
};
