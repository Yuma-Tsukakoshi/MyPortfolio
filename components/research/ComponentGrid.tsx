"use client";

import { Grid, Title } from "@mantine/core";

import ResearchGrid from "@/components/notion/ResearchGrid";

export function ComponentGrid() {
  return (
    // Research プロジェクトに合わせて可変にする → 3で割り切れる数にする
    <Grid>
      <Grid.Col span={6}>
        <Title order={4}>SoilSense</Title>
        <ResearchGrid />
      </Grid.Col>
      <Grid.Col span={6}>
        <Title order={4}>SoilTiles</Title>
        <ResearchGrid />
      </Grid.Col>
    </Grid>
  );
}
