import { Loader, Text, Title } from "@mantine/core";

import { AboutMeData } from "@/types/about";

import { AboutMeInfo } from "./AboutMeInfo";
import { AboutMeSocial } from "./AboutMeSocial";

interface AboutMeProps {
  aboutMe: AboutMeData | null;
  error: string | null;
  isLoading: boolean;
}

export const AboutMe = ({ aboutMe, error, isLoading }: AboutMeProps) => {
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

  if (!aboutMe) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <Text c="dimmed" size="lg">
          No about me data available
        </Text>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <Title order={2} mb="md">
          {aboutMe.title}
        </Title>
        <Text c="dimmed" size="lg" mb="xl">
          {aboutMe.subtitle}
        </Text>
      </div>
      <AboutMeInfo
        description={aboutMe.description}
        education={aboutMe.education}
        graduationYear={aboutMe.graduationYear}
        certifications={aboutMe.certifications}
        hobbies={aboutMe.hobbies}
      />
      <AboutMeSocial socialLinks={aboutMe.socialLinks} />
    </div>
  );
};
