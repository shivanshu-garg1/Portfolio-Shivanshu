'use client';
import React from "react";
import Grid from "@/components/Grid";

export default function AboutPage() {
  return (
    <section 
      id="about" 
      className="bg-gradient-to-r from-blue-900 via-black to-gray-900 flex flex-col items-center justify-center text-center min-h-screen px-4 sm:px-8 py-12"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-400">About Me</h1>

        <p className="text-base sm:text-lg text-gray-300 mt-6 leading-relaxed">
          I&apos;m a passionate full-stack developer with expertise in  
          <span className="text-blue-400 font-semibold"> React, Next.js, Node.js,</span> and  
          <span className="text-blue-400 font-semibold"> MongoDB.</span>  
          I love creating scalable, performant, and user-friendly applications.  
          Constantly exploring new technologies, I aim to build impactful solutions.
        </p>
      </div>

      <div className="mt-12 w-full max-w-6xl">
        <Grid />
      </div>
    </section>
  );
}
