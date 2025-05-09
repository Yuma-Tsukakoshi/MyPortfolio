import { Grid, Loader, Text, Title } from "@mantine/core";

import { WorkCard } from "@/components/works/WorkCard";
import { WorksData } from "@/types/works";

interface WorksProps {
  works: WorksData | null;
  error: string | null;
  isLoading: boolean;
}

export const Works = ({ works, error, isLoading }: WorksProps) => {
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <Loader size="xl" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 min-h-[400px] flex items-center justify-center">
        <Text>{error}</Text>
      </div>
    );
  }

  if (!works) {
    return (
      <div className="text-center text-gray-500 min-h-[400px] flex items-center justify-center">
        <Text>No works data available</Text>
      </div>
    );
  }

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <Title order={2} className="text-center mb-2">
          {works.title}
        </Title>
        <Text c="dimmed" className="text-center mb-12">
          {works.subtitle}
        </Text>
        <Grid>
          {works.items.map((work) => (
            <Grid.Col key={work.id} span={{ base: 12, md: 6, lg: 4 }}>
              <WorkCard work={work} />
            </Grid.Col>
          ))}
        </Grid>
      </div>
    </div>
  );
};
