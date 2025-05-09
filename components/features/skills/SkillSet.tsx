"use client";

import { Grid } from "@mantine/core";

import { SkillCategory } from "@/components/features/skills/SkillCategory";
import { SkillsData } from "@/types/skills";

interface SkillSetProps {
  skills: SkillsData | null;
  error: string | null;
  isLoading: boolean;
}

export const SkillSet = ({ skills, error, isLoading }: SkillSetProps) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!skills) {
    return <div>No skills data available</div>;
  }

  return (
    <Grid gutter="md">
      {skills.categories.map((category) => (
        <Grid.Col key={category.name} span={{ base: 12, md: 6, lg: 4 }}>
          <SkillCategory category={category} />
        </Grid.Col>
      ))}
    </Grid>
  );
};
