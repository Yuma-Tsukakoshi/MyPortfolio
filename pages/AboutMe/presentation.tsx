import { Text, Title } from "@mantine/core";
import { ReactNode } from "react";

import { AboutMeInfo } from "@/components/features/about/AboutMeInfo";
import { AboutMeSocial } from "@/components/features/about/AboutMeSocial";
import { AboutMeData } from "@/types/about";

interface AboutMeProps {
  aboutMe: AboutMeData | null;
  error: string | null;
  isLoading: boolean;
  renderLoading: () => ReactNode;
  renderError: () => ReactNode;
  renderEmpty: () => ReactNode;
}

export const AboutMe = ({
  aboutMe,
  error,
  isLoading,
  renderLoading,
  renderError,
  renderEmpty,
}: AboutMeProps) => {
  if (isLoading) {
    return renderLoading();
  }

  if (error) {
    return renderError();
  }

  if (!aboutMe) {
    return renderEmpty();
  }

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <Title order={2} className="text-center mb-2">
          {aboutMe.title}
        </Title>
        <Text c="dimmed" className="text-center mb-12">
          {aboutMe.subtitle}
        </Text>
        <div className="space-y-8">
          <AboutMeInfo
            description={aboutMe.description}
            education={aboutMe.education}
            certifications={aboutMe.certifications}
            hobbies={aboutMe.hobbies}
          />
          <AboutMeSocial socialLinks={aboutMe.socialLinks} />
        </div>
      </div>
    </div>
  );
};
