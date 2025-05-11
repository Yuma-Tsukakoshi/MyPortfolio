"use client";

import { Container, Text } from "@mantine/core";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import styles from "./Hero.module.css";

export function Hero() {
  const [name, setName] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [isTypingName, setIsTypingName] = useState(true);
  const [isTypingSubtitle, setIsTypingSubtitle] = useState(false);

  useEffect(() => {
    const nameText = "YUMA TSUKAKOSHI";
    const subtitleText = "ENGINEER PORTFOLIO.";
    let nameIndex = 0;
    let subtitleIndex = 0;
    let isNameComplete = false;

    const typingInterval = setInterval(() => {
      if (!isNameComplete) {
        if (nameIndex <= nameText.length) {
          setName(nameText.slice(0, nameIndex));
          nameIndex++;
        } else {
          isNameComplete = true;
          setIsTypingName(false);
          setIsTypingSubtitle(true);
        }
      } else {
        if (subtitleIndex <= subtitleText.length) {
          setSubtitle(subtitleText.slice(0, subtitleIndex));
          subtitleIndex++;
        } else {
          setIsTypingSubtitle(false);
          clearInterval(typingInterval);
          console.log("タイプライター完了");
          setTimeout(() => {
            const currentScrollY = window.scrollY;
            const heroSection = document.querySelector(`.${styles.container}`);
            const heroBottom = heroSection
              ? heroSection.getBoundingClientRect().bottom + window.scrollY
              : 0;

            console.log("現在のスクロール位置:", currentScrollY);
            console.log("Heroセクションの下端:", heroBottom);

            if (currentScrollY < heroBottom) {
              const aboutSection = document.getElementById("about");
              console.log("Aboutセクション:", aboutSection);
              if (aboutSection) {
                const headerOffset = 80;
                const elementPosition =
                  aboutSection.getBoundingClientRect().top;
                const offsetPosition =
                  elementPosition + window.pageYOffset - headerOffset;

                console.log("スクロール位置:", offsetPosition);

                const scrollToAbout = () => {
                  const currentPosition = window.pageYOffset;
                  const targetPosition = offsetPosition;
                  const distance = targetPosition - currentPosition;
                  const duration = 1000;
                  const startTime = performance.now();

                  const easeInOutQuad = (t: number) => {
                    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
                  };

                  const animateScroll = (currentTime: number) => {
                    const elapsed = currentTime - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    const easedProgress = easeInOutQuad(progress);

                    window.scrollTo(
                      0,
                      currentPosition + distance * easedProgress,
                    );

                    if (progress < 1) {
                      requestAnimationFrame(animateScroll);
                    }
                  };

                  requestAnimationFrame(animateScroll);
                };

                scrollToAbout();
              }
            }
          }, 2000);
        }
      }
    }, 150);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.shootingStars}>
        {[...Array(20)].map((_, i) => (
          <div key={i} className={styles.shootingStar} />
        ))}
      </div>
      <Container size="lg" className={styles.content}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className={styles.catchPhraseContainer}
        >
          <Text className={styles.name}>
            {name}
            {isTypingName && <span className={styles.cursor}>|</span>}
          </Text>
          <Text className={styles.subtitle}>
            {subtitle}
            {isTypingSubtitle && <span className={styles.cursor}>|</span>}
          </Text>
        </motion.div>
      </Container>
    </div>
  );
}
