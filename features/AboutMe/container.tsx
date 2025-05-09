"use client";

import { useEffect, useState } from "react";

import { AboutMeData } from "@/types/about";

import { AboutMe } from "./presentation";

export const AboutMeContainer = () => {
  const [aboutMe, setAboutMe] = useState<AboutMeData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAboutMe = async () => {
      try {
        const response = await fetch("/api/about");
        if (!response.ok) {
          throw new Error("Failed to fetch about me data");
        }
        const result = await response.json();
        setAboutMe(result.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setIsLoading(false);
      }
    };

    fetchAboutMe();
  }, []);

  return <AboutMe aboutMe={aboutMe} error={error} isLoading={isLoading} />;
};
