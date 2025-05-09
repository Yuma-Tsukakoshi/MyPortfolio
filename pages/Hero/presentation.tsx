import { Button, Loader, Text, Title } from "@mantine/core";
import Image from "next/image";

import { HeroData } from "@/types/hero";

import { HeroStats } from "./HeroStats";

interface HeroProps {
  hero: HeroData | null;
  error: string | null;
  isLoading: boolean;
}

export const Hero = ({ hero, error, isLoading }: HeroProps) => {
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <Loader size="lg" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <Text c="red" size="lg">
          Error: {error}
        </Text>
      </div>
    );
  }

  if (!hero) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <Text c="dimmed" size="lg">
          No hero data available
        </Text>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div className="space-y-6">
        <div>
          <Title order={1} mb="md">
            {hero.title}
          </Title>
          <Text c="dimmed" size="xl" mb="xl">
            {hero.subtitle}
          </Text>
          <Text size="lg" mb="xl">
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
  );
};
