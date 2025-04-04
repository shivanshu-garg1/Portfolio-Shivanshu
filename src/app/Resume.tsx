"use client";

import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams"; // Ensure correct import path
import HomePage from "@/Pages/HomePage";
import AboutPage from "@/Pages/AboutPage"
import ProjectPage from "@/Pages/ProjectPage"
import SkillsSection from "@/Pages/SkillSection";

import ContactPage from "@/Pages/ContactPage";

const Home = () => {
  return (
    <div className="">
      <section id="">
        <HomePage />
        <BackgroundBeams />
      </section>
      <section className="/about">
        <AboutPage />
      </section>
      <section className="/project">
        <ProjectPage />
      </section>
      <section className="/skills">
        <SkillsSection/>
      </section>
      <section className="/contact-me">
      <ContactPage/>
      </section>
    </div>
  );
};

export default Home;
