"use client";

import { useEffect, useState } from "react";

import { CareerData } from "@/types/career";

import { Career as CareerPresentation } from "./presentation";

export const Career = () => {
  const [career, setCareer] = useState<CareerData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCareer = async () => {
      try {
        const response = await fetch("/api/career");
        if (!response.ok) {
          throw new Error("Failed to fetch career data");
        }
        const data = await response.json();
        setCareer(data.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setIsLoading(false);
      }
    };

    fetchCareer();
  }, []);

  return (
    <CareerPresentation career={career} error={error} isLoading={isLoading} />
  );
};
