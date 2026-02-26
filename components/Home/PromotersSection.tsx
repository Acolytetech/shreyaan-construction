"use client";

import { motion } from "framer-motion";
import { UserCircle2 } from "lucide-react";

const promoters = [
  {
    name: "Suryakiran Varma Sangani",
    role: "Director",
  },
  {
    name: "Vamshi Bakki",
    role: "Director",
  },
];

const PromotersSection = () => {
  return (
    <section className="bg-gradient-to-b from-[#021B33] to-[#022D4D] py-24 text-white">
      <div className="container mx-auto px-6 text-center">

        {/* Heading Change Only */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold tracking-wider mb-16"
        >
          BOARD OF DIRECTORS
        </motion.h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {promoters.map((person, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center group"
            >
              {/* Icon Card */}
              <div className="w-72 h-72 rounded-2xl flex items-center justify-center
                              bg-blue-900 border border-blue-600
                              shadow-2xl group-hover:scale-105 transition duration-300">

                <UserCircle2 size={130} className="text-blue-300 opacity-90" />
              </div>

              {/* Name */}
              <h3 className="mt-8 text-xl md:text-2xl font-semibold tracking-wide">
                {person.name}
              </h3>

              {/* Role */}
              <p className="mt-2 text-blue-300 tracking-widest text-sm uppercase">
                {person.role}
              </p>

              {/* Accent Line */}
              <div className="w-20 h-1 bg-[#d45f04] mt-4 rounded-full"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromotersSection;