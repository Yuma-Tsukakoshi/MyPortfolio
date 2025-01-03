"use client";

import { Grid, Title } from "@mantine/core";

import { CardGradient } from "./CardGradient";

export function ComponentGridForProfile() {
  return (
    <Grid>
      <Grid.Col span={6}>
        <Title order={4}>Strength</Title>
        <CardGradient />
      </Grid.Col>
      <Grid.Col span={6}>
        <Title order={4}>Weakness</Title>
        <CardGradient />
      </Grid.Col>
      <Grid.Col span={12}>
        <Title order={4}>Future Work</Title>
        <CardGradient />
      </Grid.Col>
    </Grid>
  );
}
