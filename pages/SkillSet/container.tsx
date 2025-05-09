"use client";

import { useEffect, useState } from "react";

import { SkillsData } from "@/types/skills";

import { SkillSet as SkillSetPresentation } from "./presentation";

export const SkillSet = () => {
  const [skills, setSkills] = useState<SkillsData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await fetch("/api/skills");
        if (!response.ok) {
          throw new Error("Failed to fetch skills data");
        }
        const data = await response.json();
        setSkills(data.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setIsLoading(false);
      }
    };

    fetchSkills();
  }, []);

  return (
    <SkillSetPresentation skills={skills} error={error} isLoading={isLoading} />
  );
};
