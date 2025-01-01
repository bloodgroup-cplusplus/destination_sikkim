"use client";
import HeroImageSlider from "@/components/ui/heroimageslider";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { motion } from "framer-motion";
import Link from "next/link";

const words = [
  {
    text: "A",
  },
  {
    text: "travel",
  },
  {
    text: "agency",
  },
  {
    text: "coming",
  },
  {
    text: "for",
  },
  {
    text: "all",
  },
  {
    text: "your",
  },
  {
    text: "travel",
  },
  {
    text: "desires",
  },
  {
    text: "across",
  },
  {
    text: "Sikkim",
    className: "text-blue-500 dark:text-blue-500",
  },
];

export default function Home() {
  return (
    <>
      <div className="relative h-screen">
        <HeroImageSlider />
        <div className="absolute inset-0 bg-black/50">
          <div className="container mx-auto h-full flex flex-col justify-center items-center text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-amber-500 text-center antialiased mb-4">
              Destination Sikkim
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl text--500 text-blue-400 antialiased placeholder-slate-900 text-center font-extrabold mb-8">
              <TypewriterEffect words={words} />
            </h2>
            <Link href={"/destinations"}>
              <motion.button
                className="px-6 py-3 text-lg font-medium text-blue-400 border-2 border-fuchsia-100 rounded-full shadow-lg flex items-center gap-2 hover:bg-black/5 transition-colors backdrop-blur-sm mt-8"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  type: "spring",
                  stiffness: 500,
                  damping: 25,
                }}
              >
                <motion.span
                  initial={{ y: 0 }}
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  📍
                </motion.span>
                Destinations
                <motion.span
                  initial={{ y: 0 }}
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  🏞️
                </motion.span>
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
