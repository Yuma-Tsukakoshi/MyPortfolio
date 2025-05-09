import { Badge, Group, Paper, Text, Title } from "@mantine/core";
import { motion } from "framer-motion";

import { BlogPost } from "@/types/works";

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

export const BlogCard = ({ post, index }: BlogCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Paper className="p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
        <div className="flex justify-between items-center mb-4">
          <Group>
            {post.icon}
            <Text size="sm" fw={500} c="dimmed">
              {post.platform}
            </Text>
          </Group>
          <Text size="sm" c="dimmed">
            {post.date}
          </Text>
        </div>

        <Title order={3} className="mb-2 text-xl font-bold">
          {post.title}
        </Title>

        <Text className="mb-4 text-gray-600">{post.description}</Text>

        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag, tagIndex) => (
            <Badge
              key={tagIndex}
              size="sm"
              className="bg-blue-100 text-blue-800"
            >
              {tag}
            </Badge>
          ))}
        </div>

        <a
          href={post.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
        >
          記事を読む →
        </a>
      </Paper>
    </motion.div>
  );
};
