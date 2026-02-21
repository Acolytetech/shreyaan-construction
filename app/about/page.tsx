"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AboutPage() {
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
    <div className="bg-[#f9f9f9]">

      {/* Banner Section */}
      <section className="relative bg-cover bg-center h-[60vh]" style={{ backgroundImage: 'url("/img/p2.jpg")' }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center text-white px-4 sm:px-10" style={{ paddingTop: navHeight }}>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl font-semibold"
          >
            About Us
          </motion.h1>
        </div>
      </section>

      {/* Left and Right Content Section 1 */}
      <section className="py-20 px-6 sm:px-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="text-left">
          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl font-semibold text-blue-950 mb-4"
          >
            Who We Are
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg text-gray-700 leading-relaxed mb-6"
          >
            We are a dynamic and innovative company, specializing in delivering the best solutions across various industries. Our core values revolve around integrity, quality, and customer satisfaction.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-lg text-gray-700 leading-relaxed"
          >
            With years of experience and a passion for excellence, we have built strong relationships with clients and partners alike. Our team is dedicated to making a meaningful impact in everything we do.
          </motion.p>
        </div>
        
        {/* Image Section */}
        <div className="flex items-center justify-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            src="/img/p3.jpg"
            alt="About Us Image"
            className="rounded-lg shadow-lg max-w-full h-auto"
          />
        </div>
      </section>

      {/* Left and Right Content Section 2 */}
      <section className="py-20 px-6 sm:px-10 max-w-7xl mx-auto flex md:grid flex-col-reverse md:grid-cols-2 gap-12">
        {/* Image Section */}
        <div className="flex items-center justify-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            src="/img/p2.jpg"
            alt="About Us Image"
            className="rounded-lg shadow-lg max-w-full h-auto "
          />
        </div>


        {/* Text Section */}
        <div className="text-left">
          <motion.h2
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl font-semibold mb-4 text-blue-950"
          >
            Our Approach
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg text-gray-700 leading-relaxed mb-6"
          >
            We believe in a collaborative approach, working hand-in-hand with our clients to understand their unique needs and challenges. Our team then crafts tailor-made solutions designed to meet and exceed expectations.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-lg text-gray-700 leading-relaxed"
          >
            Our goal is to create lasting partnerships that are built on trust, transparency, and shared success.
          </motion.p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-[#022D4D] text-white py-20 px-6 sm:px-10">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl font-semibold mb-6"
          >
            Our Vision
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg text-gray-200 leading-relaxed max-w-2xl mx-auto"
          >
            To be a global leader in our industry, recognized for our commitment to excellence, sustainability, and innovation. We aim to empower businesses and communities by providing transformative solutions that foster growth, efficiency, and success.
          </motion.p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6 sm:px-10 max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-semibold mb-6 text-blue-950"
        >
          Our Mission
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto"
        >
          Our mission is to deliver high-quality, sustainable solutions to our clients, while fostering an environment that encourages innovation, creativity, and continuous improvement. We are committed to making a positive impact on the world by driving change and delivering results that matter.
        </motion.p>
      </section>

    </div>
  );
}
