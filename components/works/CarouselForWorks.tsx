"use client";

import { Carousel } from "@mantine/carousel";

import { BadgeCard } from "./BadgeCard";

const images = [
  "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png",
  "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png",
  "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png",
  "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png",
  "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png",
];

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
