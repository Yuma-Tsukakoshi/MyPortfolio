import { Button, Stack, Text, Title } from "@mantine/core";
import { IconArrowDown } from "@tabler/icons-react";
import { motion } from "framer-motion";

import { LoadingAnimation } from "@/components/atoms/LoadingAnimation";
import { CatchPhraseContentProps } from "@/types/hero";

export const CatchPhraseContent = ({ onSkip }: CatchPhraseContentProps) => {
  return (
    <Stack align="center" className="gap-8">
      <LoadingAnimation />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <Title order={1} className="text-4xl md:text-6xl font-bold text-center">
          <span className="text-blue-600">技術</span>で
          <br />
          <span className="text-blue-600">未来</span>を
          <br />
          <span className="text-blue-600">創造</span>する
        </Title>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <Text size="xl" className="text-gray-600 text-center">
          フロントエンド開発 × バックエンド開発 × 研究
        </Text>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="mt-8"
      >
        <Button
          variant="light"
          size="lg"
          radius="xl"
          className="hover:bg-blue-50"
          onClick={onSkip}
        >
          <IconArrowDown size={24} className="animate-bounce" />
        </Button>
      </motion.div>
    </Stack>
  );
};
