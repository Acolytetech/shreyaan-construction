"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HeroSection() {
   const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    // Listen for header height event
    const handleHeaderHeight = (e: any) => {
      setNavHeight(e.detail);
    };

    window.addEventListener("headerHeight", handleHeaderHeight);

    return () => {
      window.removeEventListener("headerHeight", handleHeaderHeight);
    };
  }, []);
  return (
    <section className="relative w-full h-[90vh] flex items-center justify-center text-center overflow-hidden">

      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        className="fixed inset-0"
      >
        <Image
          src="/img/hero1.avif"
          alt="Construction site"
          fill
          priority
          className="object-cover brightness-50 "
        />
      </motion.div>

      {/* Overlay Fade */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.45 }}
        transition={{ duration: 1.4 }}
        className="absolute inset-0 bg-black"
      />

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-4 "
      style={{ marginTop: navHeight + 0 }}
      >
        
        {/* Heading Animation */}
      <motion.h1
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, ease: "easeOut" }}
  className="text-3xl md:text-5xl font-bold mb-4 leading-snug drop-shadow-lg
             text-transparent bg-clip-text animate-gradient"
>
  Shreyaan Constructions & Media Projects Pvt. Ltd.{navHeight}
</motion.h1>

        {/* Subheading Animation */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="text-lg md:text-xl text-gray-200 mb-6 drop-shadow"
        >
          Delivering excellence in construction, civil works, tender execution, and media projects across Telangana.
        </motion.p>

        {/* Button Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.6 }}
        >
          <Link href="#contact">
            <motion.button
              whileHover={{
                scale: 1.08,
                boxShadow: "0px 0px 18px rgba(0,0,0, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-600 hover:bg-black/80 text-white px-8 py-3 rounded-xl text-lg font-semibold transition-all"
            >
              Contact Us
            </motion.button>
          </Link>
        </motion.div>

      </div>

    </section>
  );
}
