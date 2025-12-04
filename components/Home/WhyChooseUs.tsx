"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Users, BadgeCheck, Hammer } from "lucide-react";

// High-end features
const features = [
  {
    title: "15+ Years Industry Experience",
    desc: "Delivering commercial, residential and industrial projects with perfection.",
    icon: ShieldCheck,
  },
  {
    title: "Skilled & Certified Team",
    desc: "Trained architects, engineers and technicians ensuring flawless execution.",
    icon: Users,
  },
  {
    title: "Quality & Compliance Guaranteed",
    desc: "We follow strict material, safety and structural standards on every project.",
    icon: BadgeCheck,
  },
  {
    title: "End-to-End Project Execution",
    desc: "From planning to handover, we manage everything with transparency.",
    icon: Hammer,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-24 bg-[#0B0F17] text-white overflow-hidden">

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-14"
      >
        Why Choose <span className="text-blue-500">Shreyaan Construction?</span>
      </motion.h2>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-10 px-6">

        {features.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.06,
                rotateX: 6,
                rotateY: -6,
                boxShadow: "0px 30px 60px rgba(0,0,0,0.45)",
              }}
              className="group relative bg-[#121722] p-8 rounded-2xl 
                         border border-white/10 hover:border-blue-500/40
                         transition-all duration-500 shadow-xl overflow-hidden"
            >
              {/* SHINE effect */}
              <div className="shine absolute inset-0 opacity-0 group-hover:opacity-100"></div>

              {/* Icon */}
              <div className="mb-6 p-4 w-fit rounded-xl bg-blue-600/20 border border-blue-500/20">
                <Icon size={38} className="text-blue-400" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>

              {/* Desc */}
              <p className="text-gray-300 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* SHINE CSS */}
      <style jsx>{`
        .shine {
          background: linear-gradient(
            120deg,
            transparent 0%,
            rgba(255, 255, 255, 0.25) 40%,
            transparent 100%
          );
          transform: translateX(-160%);
          transition: opacity 0.6s ease-out;
        }
        .group:hover .shine {
          animation: moveShine 1.1s ease-out forwards;
        }
        @keyframes moveShine {
          0% {
            transform: translateX(-160%);
          }
          100% {
            transform: translateX(160%);
          }
        }
      `}</style>
    </section>
  );
}
