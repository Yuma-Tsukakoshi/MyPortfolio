"use client";

import React from "react";

import { SkillsResponse } from "@/types/skills";

import { SkillSetPresentation } from "./SkillSetPresentation";

export const SkillSetContainer = () => {
  const [skills, setSkills] = React.useState<SkillsResponse | null>(null);

  React.useEffect(() => {
    const fetchSkills = async () => {
      const response = await fetch("/api/skills");
      const data = await response.json();
      setSkills(data);
    };
    fetchSkills();
  }, []);

  if (!skills) return null;

  return <SkillSetPresentation skills={skills} />;
};
