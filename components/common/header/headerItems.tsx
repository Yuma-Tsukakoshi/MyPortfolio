import { Group, Text } from "@mantine/core";

interface HeaderItemsProps {
  items: {
    name: string;
    onClick: () => void;
  }[];
}

export function HeaderItems({ items }: HeaderItemsProps) {
  return (
    <Group gap={40}>
      {items.map((item) => (
        <Text
          key={item.name}
          onClick={item.onClick}
          style={{ cursor: "pointer" }}
          fw={500}
          size="sm"
        >
          {item.name}
        </Text>
      ))}
    </Group>
  );
}
