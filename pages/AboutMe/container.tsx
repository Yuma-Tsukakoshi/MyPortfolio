"use client";

import { useEffect, useState } from "react";

import { AboutMeData } from "@/types/about";

import { AboutMe as AboutMePresentation } from "./presentation";

export const AboutMe = () => {
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
        const data = await response.json();
        setAboutMe(data.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setIsLoading(false);
      }
    };

    fetchAboutMe();
  }, []);

  return (
    <AboutMePresentation
      aboutMe={aboutMe}
      error={error}
      isLoading={isLoading}
    />
  );
};
