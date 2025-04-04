"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { TextAnimate } from "@/components/magicui/text-animate";
import { Button } from "../components/ui/button";
import { motion } from "framer-motion"; 

export default function HomePage() {
  const [animationPlayed, setAnimationPlayed] = useState(false);

  useEffect(() => {
    setAnimationPlayed(true);
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center text-center h-screen bg-gradient-to-r from-blue-900 via-black to-gray-900 text-white px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-800/30 to-black opacity-50 blur-3xl"></div>

      <motion.div
        initial={animationPlayed ? {} : { opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative w-40 h-40 sm:w-60 sm:h-60 mb-4 z-50"
      >
        <Image
          src="/Shivanshu.png"
          alt="Shivanshu Garg"
          width={240}
          height={240}
          className="rounded-full border-2 border-white shadow-lg object-cover transition-all duration-300 hover:scale-105"
        />
      </motion.div>

      <div className="z-50">
        <TextAnimate
          animation={animationPlayed ? undefined : "slideLeft"}
          as="h1"
          className="text-3xl sm:text-5xl font-bold drop-shadow-lg tracking-wide text-blue-400"
        >
          Hi, I’m Shivanshu Garg
        </TextAnimate>

        <TextAnimate
          animation={animationPlayed ? undefined : "slideLeft"}
          as="h2"
          className="mt-4 text-lg text-gray-300 max-w-2xl font-medium"
        >
          Full-Stack Developer | Engineering Student
        </TextAnimate>

        <TextAnimate
          animation={animationPlayed ? undefined : "slideLeft"}
          as="p"
          className="mt-4 text-md text-gray-400 max-w-xl leading-relaxed"
        >
          Engineering student specializing in full-stack development, passionate about building scalable web applications.
        </TextAnimate>
      </div>

      <motion.div
        className="mt-6 flex flex-wrap gap-4 z-50 justify-center"
        initial={animationPlayed ? {} : { opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Link href="#project">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-medium rounded-lg px-6 py-3 shadow-lg hover:shadow-blue-500/50 transition-all duration-300">
              View My Work
            </Button>
          </motion.div>
        </Link>

        <Link href="/ResumeShivanshu.pdf" target="_blank" rel="noopener noreferrer">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Button className="bg-white text-black font-medium rounded-lg px-6 py-3 shadow-lg hover:bg-gray-900 hover:text-white hover:shadow-gray-500/50 transition-all duration-300">
              Download Resume
            </Button>
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
}
