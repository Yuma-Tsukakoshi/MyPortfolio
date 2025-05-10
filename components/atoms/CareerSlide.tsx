import { Badge, Text } from "@mantine/core";
import Image from "next/image";

import { CareerEvent } from "@/types/career";

interface CareerSlideProps {
  event: CareerEvent;
}

export const CareerSlide = ({ event }: CareerSlideProps) => {
  return (
    <div className="relative h-full">
      <Image
        src={event.image.src}
        alt={event.image.alt}
        width={600}
        height={400}
        className="w-full h-full object-cover rounded-lg"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
        <Text size="xl" fw={700} className="text-white mb-2">
          {event.title}
        </Text>
        <Text size="lg" className="text-white/90 mb-4">
          {event.description}
        </Text>
        <Badge size="lg" className="bg-blue-600 text-white">
          {event.date}
        </Badge>
      </div>
    </div>
  );
};
