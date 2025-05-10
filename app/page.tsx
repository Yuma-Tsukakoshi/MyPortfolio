"use client";

import { CareerContainer } from "@/components/features/career/container";
import { AboutMeContainer } from "@/components/pages/about/container";
import { FooterContainer } from "@/components/pages/footer/container";
import { HeroContainer } from "@/components/pages/hero/container";
import { ScrollToTopContainer } from "@/components/pages/scrollToTop/container";
import { SkillSetContainer } from "@/components/pages/skills/container";
import { WorksContainer } from "@/components/pages/works/container";

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
