import { motion } from "framer-motion";

interface LoadingAnimationProps {
  delay?: number;
}

export const LoadingAnimation = ({ delay = 0 }: LoadingAnimationProps) => {
  return (
    <motion.div
      className="flex gap-2"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
    >
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          className="w-3 h-3 rounded-full bg-blue-500"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [1, 0.8, 1],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            delay: index * 0.2,
          }}
        />
      ))}
    </motion.div>
  );
};
