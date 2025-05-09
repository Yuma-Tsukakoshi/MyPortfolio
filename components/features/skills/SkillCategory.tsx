import { Badge, Card, Grid, Text } from "@mantine/core";
import Image from "next/image";

import { SkillCategory as SkillCategoryType } from "@/types/skills";

interface SkillCategoryProps {
  category: SkillCategoryType;
}

export const SkillCategory = ({ category }: SkillCategoryProps) => {
  // アイコンサイズ
  const iconSize = 80;
  const iconClass = `rounded-xl bg-gradient-to-br from-blue-600 via-blue-400 to-cyan-400 flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-200`;

  return (
    <Card
      radius="xl"
      style={{
        background: "linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)",
        backdropFilter: "blur(10px)",
      }}
      className="transition-transform duration-300 hover:scale-105 hover:bg-gray-100 rounded-2xl"
    >
      <div className="flex items-center gap-2 mb-4">
        <Badge size="lg" variant="filled" color="blue">
          {category.name}
        </Badge>
        <Text size="sm" c="dimmed">
          {category.skills.length} スキル
        </Text>
      </div>
      <Grid gutter="md" justify="flex-start">
        {category.skills.map((skill) => (
          <Grid.Col key={skill.name} span={{ base: 4, sm: 3, md: 1 }}>
            <div
              className={iconClass}
              style={{ width: iconSize, height: iconSize }}
            >
              <Image
                src={`https://skillicons.dev/icons?i=${skill.icon}`}
                alt={skill.name}
                width={iconSize - 20}
                height={iconSize - 20}
                className="object-contain"
                unoptimized
              />
            </div>
          </Grid.Col>
        ))}
      </Grid>
    </Card>
  );
};
