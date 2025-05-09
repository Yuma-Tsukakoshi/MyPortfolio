"use client";

import { AboutMe } from "@/pages/AboutMe";
import { Career } from "@/pages/Career";
import { Contact } from "@/pages/Contact";
import { Footer } from "@/pages/Footer";
import { Header } from "@/pages/Header";
import { Hero } from "@/pages/Hero";
import { ScrollToTop } from "@/pages/ScrollToTop";
import { SkillSet } from "@/pages/SkillSet";
import { Works } from "@/pages/Works";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <AboutMe />
        </section>
        <section id="career">
          <Career />
        </section>
        <section id="skills">
          <SkillSet />
        </section>
        <section id="works">
          <Works />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
