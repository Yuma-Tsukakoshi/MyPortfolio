import { Text, Title } from "@mantine/core";
import { ReactNode } from "react";

import { CareerInfo } from "@/components/features/career/CareerInfo";
import { CareerTimeline } from "@/components/features/career/CareerTimeline";
import { CareerData } from "@/types/career";

interface CareerProps {
  career: CareerData | null;
  error: string | null;
  isLoading: boolean;
  renderLoading: () => ReactNode;
  renderError: () => ReactNode;
  renderEmpty: () => ReactNode;
}

export const Career = ({
  career,
  error,
  isLoading,
  renderLoading,
  renderError,
  renderEmpty,
}: CareerProps) => {
  if (isLoading) {
    return renderLoading();
  }

  if (error) {
    return renderError();
  }

  if (!career) {
    return renderEmpty();
  }

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <Title order={2} className="text-center mb-2">
          {career.title}
        </Title>
        <Text c="dimmed" className="text-center mb-12">
          {career.subtitle}
        </Text>
        <div className="space-y-8">
          <CareerInfo
            education={career.education}
            certifications={career.certifications}
          />
          <CareerTimeline events={career.events} />
        </div>
      </div>
    </div>
  );
};
