"use client";

import { useEffect, useState } from "react";

import { SkillsData } from "@/types/skills";

import { SkillSet } from "./SkillSet";

export const SkillSetContainer = () => {
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
        const result = await response.json();
        setSkills(result.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setIsLoading(false);
      }
    };

    fetchSkills();
  }, []);

  return <SkillSet skills={skills} error={error} isLoading={isLoading} />;
};
