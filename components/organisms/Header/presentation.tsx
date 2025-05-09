import { Burger, Button, Container, Drawer, Group, Stack } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";

import { HeaderData } from "@/types/header";

interface HeaderPresentationProps {
  data: HeaderData;
}

export const HeaderPresentation = ({ data }: HeaderPresentationProps) => {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <Container size="lg">
        <div className="h-16 flex items-center justify-between">
          {/* ロゴ */}
          <Link
            href={data.logo.href}
            className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
          >
            {data.logo.text}
          </Link>

          {/* デスクトップナビゲーション */}
          <Group className="hidden md:flex items-center gap-8">
            {data.navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Button
              component={Link}
              href={data.ctaButton.href}
              className="bg-blue-600 hover:bg-blue-700"
            >
              {data.ctaButton.label}
            </Button>
          </Group>

          {/* モバイルメニューボタン */}
          <Burger
            opened={opened}
            onClick={toggle}
            className="md:hidden"
            aria-label="メニュー"
          />
        </div>
      </Container>

      {/* モバイルナビゲーション */}
      <Drawer
        opened={opened}
        onClose={toggle}
        size="100%"
        padding="md"
        title={data.logo.text}
        className="md:hidden"
      >
        <Stack>
          {data.navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-gray-600 hover:text-blue-600 transition-colors py-2"
              onClick={toggle}
            >
              {item.label}
            </Link>
          ))}
          <Button
            component={Link}
            href={data.ctaButton.href}
            className="bg-blue-600 hover:bg-blue-700"
            onClick={toggle}
          >
            {data.ctaButton.label}
          </Button>
        </Stack>
      </Drawer>
    </header>
  );
};
