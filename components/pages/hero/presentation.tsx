import { Button, Text, Title } from "@mantine/core";
import Image from "next/image";
import { ReactNode } from "react";

import { HeroStats } from "@/components/features/hero/HeroStats";
import { HeroData } from "@/types/hero";

interface HeroProps {
  hero: HeroData | null;
  error: string | null;
  isLoading: boolean;
  renderLoading: () => ReactNode;
  renderError: () => ReactNode;
  renderEmpty: () => ReactNode;
}

export const HeroPresentation = ({
  hero,
  error,
  isLoading,
  renderLoading,
  renderError,
  renderEmpty,
}: HeroProps) => {
  if (isLoading) {
    return renderLoading();
  }

  if (error) {
    return renderError();
  }

  if (!hero) {
    return renderEmpty();
  }

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div>
              <Title order={1} className="mb-4">
                {hero.title}
              </Title>
              <Text c="dimmed" size="xl" className="mb-8">
                {hero.subtitle}
              </Text>
              <Text size="lg" className="mb-8">
                {hero.description}
              </Text>
            </div>
            <Button
              component="a"
              href={hero.ctaButton.href}
              size="lg"
              variant="filled"
              color="blue"
            >
              {hero.ctaButton.label}
            </Button>
            <HeroStats stats={hero.stats} />
          </div>
          <div className="relative aspect-square">
            <Image
              src={hero.image.src}
              alt={hero.image.alt}
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};
