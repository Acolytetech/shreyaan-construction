"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import Image from "next/image";
import "swiper/css";

const testimonials = [
  {
    name: "Rahul Verma",
    role: "Commercial Project Client",
    feedback:
      "Working with Shreyaan Constructions was a seamless experience. Their execution quality, commitment, and transparency exceeded expectations.",
    image: "/img/user1.webp",
  },
  {
    name: "Anjali Sharma",
    role: "Residential Project Client",
    feedback:
      "Beautiful planning, clean construction, and a team that really understands client requirements. Highly professional and reliable.",
    image: "/img/user1.webp",
  },
  {
    name: "Karan Mehta",
    role: "Industrial Project Client",
    feedback:
      "Their tender execution and documentation accuracy were remarkable. Project delivery was flawless and ahead of schedule.",
    image: "/img/user1.webp",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-28 bg-[#05070C] relative overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center text-white mb-20 tracking-wide"
      >
        Client Experiences
      </motion.h2>

      <Swiper
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        loop={true}
        modules={[Autoplay]}
        className="max-w-6xl mx-auto"
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 20 },
          1024: { slidesPerView: 2, spaceBetween: 35 },
        }}
      >
        {testimonials.map((item, i) => (
          <SwiperSlide key={i}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="relative mx-4 bg-white/5 backdrop-blur-xl border border-white/10 
                         p-10 rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.5)]
                         h-[340px] flex flex-col justify-center"
            >
              {/* Glow Overlay */}
              <div className="absolute -inset-1 bg-gradient-to-br from-blue-500/40 to-transparent 
                              blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

              {/* Card Content */}
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-[120px_auto] gap-8 items-center">

                <motion.div
                  whileHover={{ rotate: 4, scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  className="w-28 h-28 rounded-2xl overflow-hidden border border-white/20 shadow-xl mx-auto md:mx-0"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={200}
                    height={200}
                    className="object-cover"
                  />
                </motion.div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-1 text-center md:text-left">
                    {item.name}
                  </h3>
                  <p className="text-sm text-blue-400 mb-4 text-center md:text-left">
                    {item.role}
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed text-center md:text-left">
                    “{item.feedback}”
                  </p>
                </div>

              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
