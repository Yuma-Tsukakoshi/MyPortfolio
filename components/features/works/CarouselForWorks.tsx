"use client";

import { Carousel } from "@mantine/carousel";

import { BadgeCard } from "./BadgeCard";

const images = ["1.png", "2.png", "3.png", "4.png", "5.png"];

export function CarouselForWorks() {
  const slides = images.map((url) => (
    <Carousel.Slide key={url}>
      <BadgeCard />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      height={400}
      slideSize="33.3333%"
      slideGap={"lg"}
      controlSize={40}
      align="start"
    >
      {slides}
    </Carousel>
  );
}
