import { Button, Container, Stack, Text, Title } from "@mantine/core";
import { motion } from "framer-motion";

import { LoadingData, LoadingProps } from "@/types/loading";

interface LoadingPresentationProps extends LoadingProps {
  data: LoadingData;
}

export const LoadingPresentation = ({
  data,
  onSkip,
}: LoadingPresentationProps) => {
  return (
    <motion.div
      className="fixed inset-0 bg-white z-50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Container size="lg" className="py-20">
        <Stack align="center" spacing="xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Title
              order={1}
              className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4"
            >
              {data.title}
            </Title>
            <Text size="xl" className="text-gray-600 text-center mb-8">
              {data.subtitle}
            </Text>
          </motion.div>

          {/* ローディングアニメーション */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce" />
              <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce [animation-delay:0.2s]" />
              <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce [animation-delay:0.4s]" />
            </div>
          </motion.div>

          <Text size="lg" className="text-gray-600 text-center">
            {data.loadingText}
          </Text>

          <Button
            onClick={onSkip}
            variant="subtle"
            className="text-gray-600 hover:text-gray-900"
          >
            {data.skipButtonText}
          </Button>
        </Stack>
      </Container>
    </motion.div>
  );
};
