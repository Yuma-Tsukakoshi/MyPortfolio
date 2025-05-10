import { Paper, Stack, Text, Title } from "@mantine/core";

import { CertificationBadge } from "@/components/atoms/CertificationBadge";
import { CareerData } from "@/types/career";

interface CareerInfoProps {
  data: CareerData;
}

export const CareerInfo = ({ data }: CareerInfoProps) => {
  return (
    <Paper className="p-6 rounded-xl bg-white shadow-md">
      <Stack>
        {/* 基本情報 */}
        <div>
          <Title order={3} className="text-xl font-bold mb-4">
            基本情報
          </Title>
          <Text size="lg" className="text-gray-700 mb-2">
            {data.education.school} {data.education.degree}
          </Text>
          <Text size="lg" className="text-gray-700 mb-2">
            {data.education.field}
          </Text>
          <Text size="lg" className="text-gray-700">
            {data.education.period}
          </Text>
        </div>

        {/* 資格 */}
        <div>
          <Title order={3} className="text-xl font-bold mb-4">
            資格
          </Title>
          <div className="flex gap-4">
            {data.certifications.map((cert, index) => (
              <CertificationBadge key={index} certification={cert} />
            ))}
          </div>
        </div>
      </Stack>
    </Paper>
  );
};
