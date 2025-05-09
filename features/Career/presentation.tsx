import { Carousel } from "@mantine/carousel";
import { Container } from "@mantine/core";
import { motion } from "framer-motion";

import { CareerSlide } from "@/components/atoms/CareerSlide";
import { SectionTitle } from "@/components/common/SectionTitle";
import { CareerInfo } from "@/components/molecules/CareerInfo";
import { CareerData } from "@/types/career";

interface CareerPresentationProps {
  data: CareerData;
}

export const CareerPresentation = ({ data }: CareerPresentationProps) => {
  return (
    <Container size="lg" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <SectionTitle title="Career" subtitle="経歴" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 左側：カルーセル */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Carousel
              withIndicators
              height={400}
              slideSize="100%"
              slideGap="md"
              loop
              align="start"
              slidesToScroll={1}
              className="rounded-lg overflow-hidden"
            >
              {data.events.map((event, index) => (
                <Carousel.Slide key={index}>
                  <CareerSlide event={event} />
                </Carousel.Slide>
              ))}
            </Carousel>
          </motion.div>

          {/* 右側：情報 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <CareerInfo data={data} />
          </motion.div>
        </div>
      </motion.div>
    </Container>
  );
};
