"use client";

import { AboutMeContainer } from "@/components/features/about-me/container";
import { CareerContainer } from "@/components/features/career/container";
import { FooterContainer } from "@/components/features/footer/container";
import { HeroContainer } from "@/components/features/hero/container";
import { ScrollToTopContainer } from "@/components/features/scroll-to-top/container";
import { SkillSetContainer } from "@/components/features/skill-set/container";
import { WorksContainer } from "@/components/features/works/container";

export default function Home() {
  return (
    <div>
      <main className="min-h-screen bg-gray-50">
        <section id="hero">
          <HeroContainer />
        </section>
        <section id="about">
          <AboutMeContainer />
        </section>
        <section id="career">
          <CareerContainer />
        </section>
        <section id="skills">
          <SkillSetContainer />
        </section>
        <section id="works">
          <WorksContainer />
        </section>
      </main>
      <FooterContainer />
      <ScrollToTopContainer />
    </div>
  );
}
