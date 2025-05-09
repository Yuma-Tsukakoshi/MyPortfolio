import { Button, Container, Grid, Group, Text, Title } from "@mantine/core";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { HeroData } from "@/types/hero";

interface HeroPresentationProps {
  data: HeroData;
}

export const HeroPresentation = ({ data }: HeroPresentationProps) => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white">
      <Container size="lg">
        <Grid gutter="xl" align="center">
          {/* 左側：テキストコンテンツ */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Text size="lg" className="text-blue-600 font-semibold mb-4">
                {data.subtitle}
              </Text>
              <Title
                order={1}
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              >
                {data.title}
              </Title>
              <Text size="xl" className="text-gray-600 mb-8">
                {data.description}
              </Text>
              <Button
                component={Link}
                href={data.ctaButton.href}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700"
              >
                {data.ctaButton.label}
              </Button>

              {/* 統計情報 */}
              <Group className="mt-12 gap-8">
                {data.stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <Text size="xl" fw={700} className="text-blue-600">
                      {stat.value}
                    </Text>
                    <Text size="sm" className="text-gray-600">
                      {stat.label}
                    </Text>
                  </div>
                ))}
              </Group>
            </motion.div>
          </Grid.Col>

          {/* 右側：画像 */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={data.image.src}
                  alt={data.image.alt}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </Grid.Col>
        </Grid>
      </Container>
    </section>
  );
};
