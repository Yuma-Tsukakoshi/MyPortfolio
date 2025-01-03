import { Grid, Title } from "@mantine/core";

import { ResearchGridCard } from "./ResearchGridCard";

export function ComponentGrid() {
  return (
    // Research プロジェクトに合わせて可変にする → 3で割り切れる数にする
    <Grid>
      <Grid.Col span={6}>
        <Title order={4}>SoilSense</Title>
        <ResearchGridCard />
      </Grid.Col>
      <Grid.Col span={6}>
        <Title order={4}>SoilTiles</Title>
        <ResearchGridCard />
      </Grid.Col>
    </Grid>
  );
}
