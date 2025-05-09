"use client";

import { useEffect, useState } from "react";

import { HeroData } from "@/types/hero";

import { Hero } from "./presentation";

export const HeroContainer = () => {
  const [hero, setHero] = useState<HeroData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchHero = async () => {
      try {
        const response = await fetch("/api/hero");
        if (!response.ok) {
          throw new Error("Failed to fetch hero data");
        }
        const result = await response.json();
        setHero(result.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setIsLoading(false);
      }
    };

    fetchHero();
  }, []);

  return <Hero hero={hero} error={error} isLoading={isLoading} />;
};
