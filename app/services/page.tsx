"use client";

import ServicesSectionnew from "@/components/Home/ServicesSectionnew";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Services() {
  return (
    <div className="bg-gray-50">

      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-[60vh]" style={{ backgroundImage: 'url("/img/herobg2.webp")' }}>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="absolute flex-col pt-20 inset-0 flex items-center justify-center text-center text-white px-4 sm:px-10">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl font-semibold"
          >
            Our Services
          </motion.h1>
          <p className="text-lg mt-4 text-gray-200">
            We provide high-quality services designed to meet your needs.
          </p>
        </div>
      </section>

      {/* Services List Section */}
      <section className="py-24 px-6 sm:px-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white p-6 rounded-xl shadow-lg text-center"
        >
          <div className="text-4xl mb-4 text-blue-950">
            <i className="fas fa-construction"></i> {/* You can replace with an icon or image */}
          </div>
          <h3 className="text-2xl font-semibold text-blue-900 mb-2">Construction</h3>
          <p className="text-gray-700 mb-4">
            We offer comprehensive construction services, from project planning to completion. Our team ensures timely delivery with exceptional quality.
          </p>
          <Link href="/services/construction">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-900 text-white px-6 py-2 rounded-full font-semibold shadow-md hover:shadow-lg transition-all"
            >
              Learn More
            </motion.button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white p-6 rounded-xl shadow-lg text-center"
        >
          <div className="text-4xl mb-4 text-green-950">
            <i className="fas fa-building"></i> {/* Replace with an icon or image */}
          </div>
          <h3 className="text-2xl font-semibold text-blue-900 mb-2">Architectural Design</h3>
          <p className="text-gray-700 mb-4">
            Our architectural design services ensure that every project is unique, functional, and aesthetically pleasing, built to your specifications.
          </p>
          <Link href="/services/architectural-design">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-900 text-white px-6 py-2 rounded-full font-semibold shadow-md hover:shadow-lg transition-all"
            >
              Learn More
            </motion.button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white p-6 rounded-xl shadow-lg text-center"
        >
          <div className="text-4xl mb-4 text-yellow-950">
            <i className="fas fa-tools"></i> {/* Replace with an icon or image */}
          </div>
          <h3 className="text-2xl font-semibold text-blue-900 mb-2">Maintenance</h3>
          <p className="text-gray-700 mb-4">
            We offer reliable and timely maintenance services to ensure the long-term functionality of your buildings and infrastructure.
          </p>
          <Link href="/services/maintenance">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-900 text-white px-6 py-2 rounded-full font-semibold shadow-md hover:shadow-lg transition-all"
            >
              Learn More
            </motion.button>
          </Link>
        </motion.div>
      </section>
      <ServicesSectionnew />

      {/* Detailed Service Section */}
      <section className="py-24 px-6 sm:px-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl font-semibold text-blue-900 mb-6">Our Expertise</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6 max-w-2xl mx-auto">
            At Shreyaan Constructions, we pride ourselves on delivering the highest quality construction, design, and maintenance services. Our team has experience in large-scale infrastructure, commercial spaces, residential homes, and more.
          </p>
          <Link href="#contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-900 text-white px-10 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-2xl transition-all"
            >
              Contact Us
            </motion.button>
          </Link>
        </motion.div>
      </section>

    </div>
  );
}
