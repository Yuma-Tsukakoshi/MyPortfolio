import { Grid, Text, Title } from "@mantine/core";
import { ReactNode } from "react";

import { WorkCard } from "@/components/features/works/WorkCard";
import { WorksData } from "@/types/works";

interface WorksProps {
  works: WorksData | null;
  error: string | null;
  isLoading: boolean;
  renderLoading: () => ReactNode;
  renderError: () => ReactNode;
  renderEmpty: () => ReactNode;
}

export const WorksPresentation = ({
  works,
  error,
  isLoading,
  renderLoading,
  renderError,
  renderEmpty,
}: WorksProps) => {
  if (isLoading) {
    return renderLoading();
  }

  if (error) {
    return renderError();
  }

  if (!works) {
    return renderEmpty();
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
