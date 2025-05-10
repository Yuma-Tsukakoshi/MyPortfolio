import { ActionIcon, Tooltip } from "@mantine/core";
import { IconArrowUp } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";

import { ScrollToTopData } from "@/types/scrollToTop";

interface ScrollToTopPresentationProps {
  data?: ScrollToTopData;
  isVisible: boolean;
  onClick: () => void;
}

export const ScrollToTopPresentation = ({
  data = { buttonText: "トップへ戻る", threshold: 300 },
  isVisible,
  onClick,
}: ScrollToTopPresentationProps) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <Tooltip label={data.buttonText} position="left">
            <ActionIcon
              onClick={onClick}
              size="xl"
              radius="xl"
              variant="filled"
              className="bg-blue-600 hover:bg-blue-700"
            >
              <IconArrowUp size={24} />
            </ActionIcon>
          </Tooltip>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
