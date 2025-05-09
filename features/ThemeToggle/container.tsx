import { useMantineColorScheme } from "@mantine/core";

import { ThemeToggleData } from "@/types/themeToggle";

import { ThemeTogglePresentation } from "./presentation";

export const ThemeToggle = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const isDarkMode = colorScheme === "dark";

  const data: ThemeToggleData = {
    lightModeTooltip: "ライトモードに切り替え",
    darkModeTooltip: "ダークモードに切り替え",
  };

  return (
    <ThemeTogglePresentation
      data={data}
      isDarkMode={isDarkMode}
      onToggle={() => toggleColorScheme()}
    />
  );
};
