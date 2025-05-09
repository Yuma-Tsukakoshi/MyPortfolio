import { Loader, Text, Title } from "@mantine/core";

import { CareerData } from "@/types/career";

import { CareerInfo } from "./CareerInfo";
import { CareerTimeline } from "./CareerTimeline";

interface CareerProps {
  career: CareerData | null;
  error: string | null;
  isLoading: boolean;
}

export const Career = ({ career, error, isLoading }: CareerProps) => {
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <Loader size="lg" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <Text c="red" size="lg">
          Error: {error}
        </Text>
      </div>
    );
  }

  if (!career) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <Text c="dimmed" size="lg">
          No career data available
        </Text>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <Title order={2} mb="md">
          {career.title}
        </Title>
        <Text c="dimmed" size="lg" mb="xl">
          {career.subtitle}
        </Text>
      </div>
      <CareerInfo
        education={career.education}
        certifications={career.certifications}
      />
      <CareerTimeline events={career.events} />
    </div>
  );
};
