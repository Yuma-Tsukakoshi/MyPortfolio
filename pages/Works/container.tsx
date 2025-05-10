"use client";

import { useEffect, useState } from "react";

import { WorksData } from "@/types/works";

import { WorksPresentation } from "./presentation";
export const WorksContainer = () => {
  const [works, setWorks] = useState<WorksData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchWorks = async () => {
      try {
        const response = await fetch("/api/works");
        if (!response.ok) {
          throw new Error("Failed to fetch works data");
        }
        const data = await response.json();
        setWorks(data.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setIsLoading(false);
      }
    };

    fetchWorks();
  }, []);

  return (
    <WorksPresentation works={works} error={error} isLoading={isLoading} />
  );
};
