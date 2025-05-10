"use client";

import { Container } from "@mantine/core";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";

import styles from "./CatchPhrase.module.css";

interface CatchPhraseProps {
  onAnimationComplete: () => void;
}

export function CatchPhrase({ onAnimationComplete }: CatchPhraseProps) {
  const [isVisible, setIsVisible] = useState(true);
  const controls = useAnimationControls();
  const [showHighlight, setShowHighlight] = useState(false);
  const [showArrow, setShowArrow] = useState(false);
  const [shootingStars, setShootingStars] = useState<
    Array<{
      id: number;
      top: string;
      left: string;
      delay: string;
    }>
  >([]);

  useEffect(() => {
    // クライアントサイドでのみ実行
    const stars = Array.from({ length: 10 }, (_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 3}s`,
    }));
    setShootingStars(stars);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
      controls.start({
        opacity: 0,
        transition: { duration: 1.2, ease: "easeInOut" },
      });
      setTimeout(() => {
        setIsVisible(false);
        onAnimationComplete();
      }, 1200);
    }, 3000);

    return () => clearTimeout(timer);
  }, [controls, onAnimationComplete]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHighlight(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowArrow(true);
    }, 1.2);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={styles.fullscreenContainer}>
      <div className={styles.backgroundEffect} />
      {shootingStars.map((star) => (
        <div
          key={star.id}
          className={styles.shootingStar}
          style={{
            top: star.top,
            left: star.left,
            animationDelay: star.delay,
          }}
        />
      ))}
      <Container size="lg" className={styles.container}>
        <div className={styles.content}>
          <div className={styles.catchPhraseContainer}>
            <motion.div
              className={`${styles.catchPhrase} ${styles.purposeDriven}`}
              initial={{ opacity: 0, x: -200, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, x: 0, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, x: -100, scale: 0.9 }}
              transition={{
                duration: 1,
                ease: [0.6, -0.05, 0.01, 0.99],
                delay: 0.2,
              }}
            >
              <span
                className={`${styles.highlight} ${showHighlight ? styles.animate : ""}`}
              >
                Purpose - Driven
              </span>
            </motion.div>

            <div className={styles.arrowContainer}>
              <svg
                className={`${styles.flowingArrow} ${showArrow ? styles.animate : ""}`}
                viewBox="0 0 200 100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20,50 C50,50 80,50 140,50" strokeLinecap="round" />
                <path
                  d="M140,50 L130,40 M140,50 L130,60"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <motion.div
              className={`${styles.catchPhrase} ${styles.deliverValue}`}
              initial={{ opacity: 0, x: 200, scale: 0.8, rotate: 5 }}
              animate={{ opacity: 1, x: 0, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, x: 100, scale: 0.9 }}
              transition={{
                duration: 1,
                ease: [0.6, -0.05, 0.01, 0.99],
                delay: 1.5,
              }}
            >
              <span
                className={`${styles.highlight} ${showHighlight ? styles.animate : ""}`}
              >
                Deliver Value
              </span>
            </motion.div>
          </div>
        </div>
      </Container>
    </div>
  );
}
