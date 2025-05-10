"use client";

import { useTheme } from "next-themes";

import { ThemeToggle } from "./presentation";

export const ThemeToggleContainer = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return <ThemeToggle isDarkMode={theme === "dark"} onToggle={toggleTheme} />;
};
