"use client";

import { useEffect, useState } from "react";

import { SkillsResponse } from "@/types/skills";

import { SkillSet } from "./presentation";

export const SkillSetContainer = () => {
  const [skills, setSkills] = useState<SkillsResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await fetch("/api/skills");
        if (!response.ok) {
          throw new Error("Failed to fetch skills data");
        }
        const data = await response.json();
        setSkills(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      }
    };

    fetchSkills();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!skills) {
    return <div>Loading...</div>;
  }

  return <SkillSet skills={skills} />;
};
