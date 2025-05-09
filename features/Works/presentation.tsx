import { Container, Grid } from "@mantine/core";
import { motion } from "framer-motion";

import { BlogCard } from "@/components/atoms/BlogCard";
import { SectionTitle } from "@/components/common/SectionTitle";
import { WorksResponse } from "@/types/works";

interface WorksPresentationProps {
  works: WorksResponse;
}

export const WorksPresentation = ({ works }: WorksPresentationProps) => {
  return (
    <Container size="lg" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <SectionTitle title="Works" subtitle="開発経験" />

        <Grid gutter="xl">
          {works.blogPosts.map((post, index) => (
            <Grid.Col key={index} span={{ base: 12, sm: 6, md: 4 }}>
              <BlogCard post={post} index={index} />
            </Grid.Col>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
};
