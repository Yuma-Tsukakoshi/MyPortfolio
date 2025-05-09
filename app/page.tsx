"use client";

import { useEffect, useState } from "react";

import { AboutMe } from "@/components/pages/about/AboutMe";
import { Features } from "@/components/pages/features/Features";
import { CatchPhrase } from "@/components/pages/hero/CatchPhrase";
import { Profile } from "@/components/pages/profile/Profile";
import { Research } from "@/components/pages/research/Research";
import { SkillSet } from "@/components/pages/skills/SkillSet";
import { Works } from "@/components/pages/works/Works";
import { useScrollContext } from "@/context/ScrollContext";

export default function Home() {
  const { setActiveSection } = useScrollContext();
  const [showMainContent, setShowMainContent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId || "");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setActiveSection]);

  return (
    <>
      <CatchPhrase onAnimationComplete={() => setShowMainContent(true)} />
      {showMainContent && (
        <main className="space-y-40 bg-gradient-to-br from-white via-blue-50 to-blue-100">
          <section id="about">
            <AboutMe />
          </section>
          <section id="career">
            <Profile />
          </section>
          <section id="features">
            <Features />
          </section>
          <section id="works">
            <Works />
          </section>
          <section id="research">
            <Research />
          </section>
          <section id="skills">
            <SkillSet />
          </section>
        </main>
      )}
    </>
  );
}
