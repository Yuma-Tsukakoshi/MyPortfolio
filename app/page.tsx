"use client";

import { AboutMe } from "@/components/pages/about";
import { Footer } from "@/components/pages/footer";
import { Hero } from "@/components/pages/hero";
import { ScrollToTop } from "@/components/pages/scrollToTop";
import { Works } from "@/components/pages/works";

export default function Home() {
  return (
    <div>
      <main className="min-h-screen bg-gray-50">
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <AboutMe />
        </section>
        {/* <section id="career">
          <Career />
        </section> */}
        {/* <section id="skills">
          <SkillSet />
        </section> */}
        <section id="works">
          <Works />
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
