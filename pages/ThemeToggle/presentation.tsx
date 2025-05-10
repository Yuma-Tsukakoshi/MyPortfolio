import { ActionIcon, Tooltip } from "@mantine/core";
import { IconMoon, IconSun } from "@tabler/icons-react";

import { ThemeToggleData } from "@/types/themeToggle";

interface ThemeTogglePresentationProps {
  data: ThemeToggleData;
  isDarkMode: boolean;
  onToggle: () => void;
}

export const ThemeTogglePresentation = ({
  data,
  isDarkMode,
  onToggle,
}: ThemeTogglePresentationProps) => {
  return (
    <Tooltip
      label={isDarkMode ? data.lightModeTooltip : data.darkModeTooltip}
      position="left"
    >
      <ActionIcon
        onClick={onToggle}
        size="lg"
        variant="subtle"
        className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
      >
        {isDarkMode ? <IconSun size={20} /> : <IconMoon size={20} />}
      </ActionIcon>
    </Tooltip>
  );
};
