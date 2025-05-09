"use client";

import { useEffect, useState } from "react";

import { CareerData } from "@/types/career";

import { Career } from "./presentation";

export const CareerContainer = () => {
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
        const result = await response.json();
        setCareer(result.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setIsLoading(false);
      }
    };

    fetchCareer();
  }, []);

  return <Career career={career} error={error} isLoading={isLoading} />;
};
