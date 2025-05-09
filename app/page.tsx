"use client";

import { useEffect, useState } from "react";

import { AboutMe } from "@/components/about/AboutMe";
import { CatchPhrase } from "@/components/hero/CatchPhrase";
import { Profile } from "@/components/profile/Profile";
import { StrengthWeakness } from "@/components/profile/StrengthWeakness";
import { Research } from "@/components/research/Research";
import SkillSet from "@/components/skills/SkillSet";
import Works from "@/components/works/Works";
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
          <section id="profile" className="mb-40">
            <Profile />
          </section>
          <section id="strength">
            <StrengthWeakness />
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
