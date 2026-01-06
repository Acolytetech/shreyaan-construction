"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";

/* ---------------- VARIANTS ---------------- */

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1], // easeOut
    },
  },
};

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};
const services = [
  {
    id: "01",
    title: "Architecture Design",
    desc: "Modern, sustainable and functional architectural solutions.",
  },
  {
    id: "02",
    title: "New Buildings",
    desc: "Residential and commercial construction with precision.",
  },
  {
    id: "03",
    title: "Full Project",
    desc: "End-to-end project planning, execution and delivery.",
  },
  {
    id: "04",
    title: "Renovation",
    desc: "High-quality renovation and structural upgrades.",
  },
];

export default function HeroSection() {
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    const handleHeaderHeight = (e: any) => {
      setNavHeight(e.detail);
    };

    window.addEventListener("headerHeight", handleHeaderHeight);
    return () =>
      window.removeEventListener("headerHeight", handleHeaderHeight);
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ paddingTop: navHeight }}
    >
      {/* ===== BACKGROUND IMAGE (SLOW ZOOM) ===== */}
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.08 }}
        transition={{ duration: 20, ease: "linear" }}
        className="absolute inset-0 -z-10"
      >
        <Image
          src="/img/herobg1.avif"
          alt="Construction Background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </motion.div>

      {/* ===== HERO CONTENT ===== */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center pt-24 pb-36"
      >
        {/* LEFT CONTENT */}
        <motion.div variants={fadeLeft} className="text-white">
          <motion.p
            variants={fadeUp}
            className="uppercase text-sm tracking-widest text-orange-300 mb-3"
          >
            Let’s Build Your Dream House
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="text-3xl md:text-5xl font-bold leading-tight mb-6"
          >
            We’re The Best <br />
            <span className="text-orange-400">
              Construction Company
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-gray-200 text-lg mb-8 max-w-xl"
          >
            Shreyaan Constructions & Media Projects Pvt. Ltd. delivers
            excellence in civil works, infrastructure, tenders and media
            projects across Telangana.
          </motion.p>

          <motion.div variants={fadeUp}>
            <Link href="#contact">
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full font-semibold shadow-xl"
              >
                Contact Us
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE (FLOAT EFFECT) */}
        <motion.div
          variants={fadeRight}
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative w-full h-[520px] rounded-2xl overflow-hidden border border-white/20 shadow-xl shadow-white/30"
        >
          <Image
            src="/img/heroleft.webp"
            alt="Construction Site"
            fill
            priority
            className="object-cover"
          />
        </motion.div>
      </motion.div>

      {/* ===== SERVICE CARDS ===== */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative z-10 max-w-7xl mx-auto px-6 pb-24"
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, index) => (
            <motion.div
              key={item.id}
              variants={fadeUp}
              whileHover={{ y: -12, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
              className={`rounded-xl p-6 backdrop-blur-md border border-white/20 shadow-lg
                ${
                  index === 0
                    ? "bg-[#2e3a59] text-white"
                    : "bg-white/40 hover:bg-[#2e3a59] hover:text-white"
                }`}
            >
              <span className="text-4xl font-bold block mb-4 opacity-80">
                {item.id}
              </span>

              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>

              <p className="text-sm leading-relaxed mb-4 opacity-80">
                {item.desc}
              </p>

              <Link
                href="#services"
                className="text-sm font-semibold text-orange-400"
              >
                Learn More →
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
