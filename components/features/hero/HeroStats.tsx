import { Group, Paper, Text } from "@mantine/core";

interface HeroStatsProps {
  stats: {
    label: string;
    value: string;
  }[];
}

export const HeroStats = ({ stats }: HeroStatsProps) => {
  return (
    <Paper className="p-6">
      <Group>
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <Text size="xl" fw={700}>
              {stat.value}
            </Text>
            <Text size="sm" c="dimmed">
              {stat.label}
            </Text>
          </div>
        ))}
      </Group>
    </Paper>
  );
};
