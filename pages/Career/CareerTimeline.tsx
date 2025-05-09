import { Paper, Text, Timeline } from "@mantine/core";
import { IconBriefcase } from "@tabler/icons-react";
import Image from "next/image";

interface CareerTimelineProps {
  events: {
    title: string;
    company: string;
    period: string;
    description: string;
    image: {
      src: string;
      alt: string;
    };
  }[];
}

export const CareerTimeline = ({ events }: CareerTimelineProps) => {
  return (
    <Paper className="p-6">
      <Text fw={700} mb="xl">
        職歴
      </Text>
      <Timeline active={events.length - 1} bulletSize={24} lineWidth={2}>
        {events.map((event, index) => (
          <Timeline.Item
            key={index}
            bullet={<IconBriefcase size={12} />}
            title={event.title}
          >
            <Text size="sm" c="dimmed">
              {event.company} | {event.period}
            </Text>
            <Text size="sm" mt="xs">
              {event.description}
            </Text>
            <div className="relative w-full h-48 mt-4 rounded-lg overflow-hidden">
              <Image
                src={event.image.src}
                alt={event.image.alt}
                fill
                className="object-cover"
              />
            </div>
          </Timeline.Item>
        ))}
      </Timeline>
    </Paper>
  );
};
