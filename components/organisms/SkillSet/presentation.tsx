import { Card, Container } from "@mantine/core";
import { motion } from "framer-motion";

import { SectionTitle } from "@/components/common/SectionTitle";
import { SkillCategory } from "@/components/molecules/SkillCategory";
import { SkillsResponse } from "@/types/skills";

interface SkillSetPresentationProps {
  skills: SkillsResponse;
}

export const SkillSetPresentation = ({ skills }: SkillSetPresentationProps) => {
  return (
    <Container size="lg" style={{ maxWidth: 850 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-100 to-gray-300 rounded-3xl -z-10" />
        <SectionTitle title="Skills" subtitle="スキル" />
        <Card
          radius="xl"
          style={{
            background: "linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)",
            backdropFilter: "blur(10px)",
          }}
          className="transition-transform duration-300 hover:scale-105 hover:bg-gray-100 rounded-2xl"
        >
          <SkillCategory category="frontend" skills={skills.frontend} />
          <SkillCategory category="backend" skills={skills.backend} />
          <SkillCategory category="database" skills={skills.database} />
          <SkillCategory
            category="infrastructure"
            skills={skills.infrastructure}
          />
          <SkillCategory category="tools" skills={skills.tools} />
        </Card>
      </motion.div>
    </Container>
  );
};
