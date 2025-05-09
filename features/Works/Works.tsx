import { Grid, Loader, Text } from "@mantine/core";

import { WorksData } from "@/types/works";

import { WorkCard } from "../WorkCard";

interface WorksProps {
  works: WorksData | null;
  error: string | null;
  isLoading: boolean;
}

export const Works = ({ works, error, isLoading }: WorksProps) => {
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

  if (!works) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <Text c="dimmed" size="lg">
          No works data available
        </Text>
      </div>
    );
  }

  return (
    <Grid gutter="md">
      {works.items.map((work) => (
        <Grid.Col key={work.id} span={{ base: 12, md: 6, lg: 4 }}>
          <WorkCard work={work} />
        </Grid.Col>
      ))}
    </Grid>
  );
};
