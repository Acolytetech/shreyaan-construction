"use client";

import { motion, Variants } from "framer-motion";
import { Hammer, Building2, FileText, PenTool } from "lucide-react";

// SERVICES DATA
const services = [
  {
    title: "Construction & Civil Works",
    desc: "Execution of commercial, residential, industrial and infrastructure projects with precision.",
    icon: Hammer,
  },
  {
    title: "Architectural Design & Planning",
    desc: "Smart building layouts, structural modeling, 3D visualization and efficient project design.",
    icon: Building2,
  },
  {
    title: "Tender Management & Execution",
    desc: "Government & private tender documentation, BOQ creation, compliance and complete project execution.",
    icon: FileText,
  },
  {
    title: "Media & Advertising Solutions",
    desc: "Outdoor branding, digital promotions, media production and corporate marketing solutions.",
    icon: PenTool,
  },
];

// TEXT ANIMATION VARIANT
export const textVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.2,
      ease: [0.42, 0, 0.58, 1],
    },
  }),
};

// CARD ANIMATION VARIANT
const cardVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.15,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-24 text-white">

      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/img/p1.jpg)" }}
      ></div>
      <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/60 to-black/80"></div>

      {/* Content Wrapper */}
      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial="hidden"
          whileInView="show"
          variants={textVariant}
          custom={0}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-center mb-14 tracking-tight"
        >
          Our Core Services
        </motion.h2>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-10 relative z-10">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                className="group relative bg-black/40 backdrop-blur-md p-10 rounded-xl 
                           border border-white/20 hover:border-blue-500/70 transition-all 
                           shadow-xl overflow-hidden"

                variants={cardVariant}
                initial="hidden"
                whileInView="show"
                custom={index}
                viewport={{ once: true }}

                // FLOATING EFFECT
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}

                // HOVER 3D EFFECT
                whileHover={{
                  scale: 1.05,
                  rotateX: 5,
                  rotateY: -5,
                  boxShadow: "0px 25px 50px rgba(0,0,0,0.55)",
                  transition: { type: "spring", stiffness: 120, damping: 10 },
                }}
              >

                {/* SHINE EFFECT */}
                <div className="shine-effect absolute inset-0"></div>

                {/* ICON + TITLE */}
                <div className="flex items-center gap-4 mb-4">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="p-4 rounded-xl bg-blue-600/20 border border-blue-500/20"
                  >
                    <Icon size={40} className="text-blue-400" strokeWidth={1.5} />
                  </motion.div>

                  <h3 className="text-2xl font-semibold">{service.title}</h3>
                </div>

                <p className="text-gray-200 leading-relaxed text-xl">{service.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* SHINE ANIMATION CSS */}
      <style jsx>{`
        .shine-effect {
          background: linear-gradient(
            120deg,
            transparent 0%,
            rgba(255, 255, 255, 0.35) 40%,
            transparent 100%
          );
          transform: translateX(-180%);
          opacity: 0;
          transition: opacity 0.5s ease-out;
        }

        .group:hover .shine-effect {
          animation: shineMove 1.2s ease-out forwards;
          opacity: 1;
        }

        @keyframes shineMove {
          0% {
            transform: translateX(-180%);
          }
          100% {
            transform: translateX(180%);
          }
        }
      `}</style>
    </section>
  );
}
