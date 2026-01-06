'use client';

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import Image from "next/image";
import "swiper/css";
import { nav } from "framer-motion/client";

// Testimonial data with star ratings
const testimonials = [
  {
    name: "Renne Lannister",
    role: "Customer",
    feedback:
      "Lorem ipsum dolor sit amet consectetur. At sapien duis bibendum ac vitae pellentesque augue consequat vulputate.",
    image: "/img/user1.webp",
    rating: 5,
  },
  {
    name: "Grace Jones",
    role: "Client",
    feedback:
      "Pellentesque risus viverra molestie tellus neque vel donec facilisis. Morbi sit id vitae dolor fames.",
    image: "/img/user1.webp",
    rating: 5,
  },
  {
    name: "Micky Logan",
    role: "Client",
    feedback:
      "Enim lectus consectetur vitae egestas scelerisque morbi integer tellus. Lorem ipsum dolor sit amet consectetur.",
    image: "/img/user1.webp",
    rating: 5,
  },
   {
    name: "Renne Lannister",
    role: "Customer",
    feedback:
      "Lorem ipsum dolor sit amet consectetur. At sapien duis bibendum ac vitae pellentesque augue consequat vulputate.",
    image: "/img/user1.webp",
    rating: 5,
  },
  {
    name: "Grace Jones",
    role: "Client",
    feedback:
      "Pellentesque risus viverra molestie tellus neque vel donec facilisis. Morbi sit id vitae dolor fames.",
    image: "/img/user1.webp",
    rating: 5,
  },
  {
    name: "Micky Logan",
    role: "Client",
    feedback:
      "Enim lectus consectetur vitae egestas scelerisque morbi integer tellus. Lorem ipsum dolor sit amet consectetur.",
    image: "/img/user1.webp",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section
      className="py-28 relative overflow-hidden bg-blue-950 "
      // style={{
      //   backgroundImage:
      //     'url("/img/p4.jpg"), radial-gradient(circle at top left, rgba(0, 123, 255, 0.2), transparent 70%), radial-gradient(circle at bottom right, rgba(0, 255, 221, 0.2), transparent 20%)',
      //   backgroundSize: 'cover',
      //   backgroundPosition: 'center',
      // }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center text-white mb-16 tracking-wide"
      >
        What Our Satisfied Customers Say About Us
      </motion.h2>

      <Swiper
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        loop={true}
       modules={[Autoplay, Navigation]}
navigation={{
  nextEl: ".swiper-button-next-custom",
  prevEl: ".swiper-button-prev-custom",
}}
        className="max-w-7xl mx-auto"
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 35 },
        }}
      >
     
        {testimonials.map((item, i) => (
          <SwiperSlide key={i}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="relative mx-4 overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 p-12 rounded-xl shadow-xl flex flex-col justify-center"
            >
              {/* Glow Overlay */}
              <div className="absolute -inset-1 bg-gradient-to-br from-blue-500/40 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

              {/* Card Content */}
              <div className="relative z-10 grid grid-cols-1 gap-6 items-center">

               

                {/* Text Content */}
                <div>
                
                  
                  
                  <p className="text-gray-300 text-lg max-h-20 overflow-hidden leading-relaxed text-center md:text-left">
                    “{item.feedback}”
                  </p>

                  {/* Star Rating */}
                  <div className="flex items-center justify-center md:justify-start mt-3">
                    {[...Array(item.rating)].map((_, index) => (
                      <span key={index} className="text-yellow-400">★</span>
                    ))}
                  </div>   {/* Avatar */}
                <motion.div
                  whileHover={{ rotate: 4, scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  className="w-fit flex flex-row gap-2 items-center mx-auto md:mx-0 mt-3"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={60}
                    height={40}
                    className="object-cover rounded-full w-16 h-16"
                  />
                  <div>
 <h3 className="text-xl font-semibold text-white  text-center md:text-left">
                    {item.name}
                  </h3>
                  <p className="text-sm text-blue-400  text-center md:text-left">
                    {item.role}
                  </p>
                  </div>
                 
                </motion.div>

                </div>

              </div>
            </motion.div>
          </SwiperSlide>
        ))}
           {/* Navigation Buttons */}
<div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-6 z-20 pointer-events-none">
  <button className="swiper-button-prev-custom pointer-events-auto w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xl hover:bg-white/30 transition">
    ‹
  </button>

  <button className="swiper-button-next-custom pointer-events-auto w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xl hover:bg-white/30 transition">
    ›
  </button>
</div>
      </Swiper>
    </section>
  );
}
