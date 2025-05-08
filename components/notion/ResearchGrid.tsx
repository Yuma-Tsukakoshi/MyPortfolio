"use client";

import { Carousel } from "@mantine/carousel";
import { Container, Paper, Title } from "@mantine/core";
import { motion } from "framer-motion";

import NotionCard from "@/components/notion/NotionCard";

const projects = [
  {
    id: "19c7add2a039804fba92cb02bc611e51",
    title: "Project Alpha",
    description: "This is an AI-driven research project.",
    image: "https://placehold.jp/300x200.png",
  },
];

export default function ResearchGrid() {
  const slides = projects.map((project) => (
    <Carousel.Slide key={project.id}>
      <Paper
        p="xl"
        radius="md"
        style={{
          background: "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
          border: "1px solid #e8eaed",
          height: "100%",
        }}
      >
        <NotionCard
          pageId={project.id}
          title={project.title}
          description={project.description}
          image={project.image}
        />
      </Paper>
    </Carousel.Slide>
  ));

  return (
    <Container size="lg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Title
          order={2}
          className="text-3xl font-bold mb-8 text-center"
          style={{ color: "#202124" }}
        >
          Research Projects
        </Title>

        <Carousel
          withIndicators
          height={500}
          slideSize="33.3333%"
          slideGap="lg"
          controlSize={40}
          align="start"
          loop
          styles={{
            indicator: {
              width: 12,
              height: 4,
              transition: "width 250ms ease",
              backgroundColor: "#1a73e8",
              "&[data-active]": {
                width: 40,
              },
            },
            control: {
              "&[data-inactive]": {
                opacity: 0,
                cursor: "default",
              },
              backgroundColor: "#1a73e8",
              borderColor: "#1a73e8",
              "&:hover": {
                backgroundColor: "#1557b0",
              },
            },
          }}
        >
          {slides}
        </Carousel>
      </motion.div>
    </Container>
  );
}
