"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import background from "@/photos/background.jpg";
import chardham from "@/photos/chardham.jpg";
import gangtok from "@/photos/gangtok.jpg";
import mgmarg from "@/photos/mgmarg.jpg";
import pelling from "@/photos/pelling.jpg";
import ranka from "@/photos/ranka.jpg";
import ropeway from "@/photos/ropeway.jpg";
import rumtekmonastry from "@/photos/rumtekmonastry.jpg";
import zuluk from "@/photos/zuluk.jpg";
import samduptse from "@/photos/samduptse.jpg";

const images = [
  background,
  chardham,
  gangtok,
  mgmarg,
  pelling,
  ranka,
  ropeway,
  rumtekmonastry,
  zuluk,
  samduptse,
];

export default function HeroImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <AnimatePresence initial={false} custom={currentIndex}>
        <motion.img
          key={currentIndex}
          src={images[currentIndex].src}
          alt={`Slide ${currentIndex + 1}`}
          className="absolute w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>
    </div>
  );
}
