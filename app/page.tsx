"use client";
import Image from "next/image";
import background from "@/photos/background.jpg";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

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
    <main className="min-h-screen flex flex-col items-centry justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-white opacity-10 " />
      <Image
        src={background}
        alt="Travel Spots"
        fill
        className="object-cover opacity-30 "
        priority
      />
      <div className="z-40 text-center px-9 py-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-amber-500 text-center antialiased mb-4">
          Destination Sikkim
        </h1>
        <h2 className="text-xl md:text-2xl lg:text-3xl text--500 text-blue-400 antialiased placeholder-slate-900 text-center   font-extrabold mb-8">
          <TypewriterEffect words={words} />
        </h2>
      </div>
    </main>
  );
}
