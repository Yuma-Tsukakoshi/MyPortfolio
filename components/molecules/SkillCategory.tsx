import { Badge, Grid, Text } from "@mantine/core";

import { SkillIcon } from "@/components/atoms/SkillIcon";
import { categoryLabels, Skill } from "@/types/skills";

interface SkillCategoryProps {
  category: keyof typeof categoryLabels;
  skills: Skill[];
}

export const SkillCategory = ({ category, skills }: SkillCategoryProps) => {
  const acquiredSkills = skills.filter((skill) => skill.is_acquire);
  if (acquiredSkills.length === 0) return null;

  return (
    <div>
      <div className="flex items-center gap-2">
        <Badge size="lg" variant="filled" color="blue">
          {categoryLabels[category]}
        </Badge>
        <Text size="sm" c="dimmed">
          {acquiredSkills.length} スキル
        </Text>
      </div>
      <Grid gutter="md" justify="flex-start">
        {acquiredSkills.map((skill) => (
          <Grid.Col key={skill.label} span={{ base: 4, sm: 3, md: 1 }}>
            <SkillIcon skill={skill} />
          </Grid.Col>
        ))}
      </Grid>
    </div>
  );
};
