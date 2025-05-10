import { Container, Drawer, Group, Stack } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { ReactNode } from "react";

interface HeaderProps {
  renderLogo: () => ReactNode;
  renderNavItems: () => ReactNode;
  renderCta: () => ReactNode;
}

export const Header = ({
  renderLogo,
  renderNavItems,
  renderCta,
}: HeaderProps) => {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm">
      <Container size="xl">
        <Group justify="space-between" h={60}>
          {renderLogo()}
          <Group gap="xl">
            {renderNavItems()}
            {renderCta()}
          </Group>
        </Group>
      </Container>

      {/* モバイルナビゲーション */}
      <Drawer
        opened={opened}
        onClose={toggle}
        size="100%"
        padding="md"
        title={renderLogo()}
        className="md:hidden"
      >
        <Stack>
          {renderNavItems()}
          {renderCta()}
        </Stack>
      </Drawer>
    </header>
  );
};
