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
          setTimeout(() => {
            const aboutSection = document.getElementById("about");
            aboutSection?.scrollIntoView({ behavior: "smooth" });
          }, 1000);
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
        <motion.div
          className={styles.scrollButton}
          onClick={() => {
            const aboutSection = document.getElementById("about");
            aboutSection?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <div className={styles.scrollArrow} />
        </motion.div>
      </Container>
    </div>
  );
}
