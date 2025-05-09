"use client";

import { useColorScheme } from "@mantine/hooks";

import { ThemeToggle as ThemeTogglePresentation } from "./presentation";

export const ThemeToggle = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <ThemeTogglePresentation
      colorScheme={colorScheme}
      onToggle={toggleColorScheme}
    />
  );
};
