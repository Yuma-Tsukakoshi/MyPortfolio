"use client";

import { useEffect } from "react";

import { Hero } from "@/components/hero/Hero";
import { Profile } from "@/components/profile/Profile";
import { Research } from "@/components/research/Research";
import SkillSet from "@/components/skills/SkillSet";
import { UserInfo } from "@/components/userInfo/UserInfo";
import Works from "@/components/works/Works";
import { useScrollContext } from "@/context/ScrollContext";

export default function Home() {
  const { setActiveSection } = useScrollContext();

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
    <main>
      <section id="hero">
        <Hero />
      </section>
      <section id="user-info">
        <UserInfo />
      </section>
      <section id="skills">
        <SkillSet />
      </section>
      <section id="works">
        <Works />
      </section>
      <section id="research">
        <Research />
      </section>
      <section id="profile">
        <Profile />
      </section>
    </main>
  );
}
