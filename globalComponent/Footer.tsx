"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden text-white">
      {/* ===== BACKGROUND IMAGE ===== */}
      <div className="absolute inset-0 -z-10">
        {/* <Image
          src="/img/herobg3.avif" // 👈 add your footer background image
          alt="Footer Background"
          fill
          className="object-cover"
        /> */}
        {/* Overlay */}
        <div className="absolute inset-0 bg-blue-950" />
      </div>

      {/* ===== CONTENT ===== */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
          className="grid md:grid-cols-3 gap-10 py-8"
        >
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link href="/" className="flex flex-row gap-2 items-center justify-center">
              <img
                src="/img/logo1.png"
                className="h-20 md:h-24 md:w-24 w-auto mb-4 bg-white rounded-full"
                alt="Logo"
              />
              <h2 className="text-xl font-bold">
                Shreyaan Constructions & Media Projects Pvt. Ltd.
              </h2>
            </Link>

            <p className="text-gray-300 leading-relaxed">
              Providing construction, civil works, tender execution, media and
              advertising solutions across Telangana.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="md:mx-auto"
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="#about" className="hover:text-orange-400 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-orange-400 transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-orange-400 transition">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-orange-400 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="md:mx-auto"
          >
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-gray-300 mb-2">
              Email:{" "}
              <span className="text-white">
                vamshibakki33@gmail.com
              </span>
            </p>
            <p className="text-gray-300 flex text-lg">
              <Phone/> : {" "}
              <span className="text-white">
                 +91 9876543210
              </span>
            </p>
             <p className="text-gray-300 flex text-lg">
             <Phone/>:{" "}
              <span className="text-white">
                +91 9083099999
              </span>
            </p>
          </motion.div>
        </motion.div>

     {/* ===== BOTTOM BAR ===== */}
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 1.2 }}
  className="text-center text-gray-400 mt-12 border-t border-white/20 pt-6 text-sm space-y-2"
>
  <p>
    © {new Date().getFullYear()} Shreyaan Constructions & Media Projects Pvt.
    Ltd. All rights reserved.
  </p>

  <p>
    Designed & Developed by{" "}
    <a
      href="https://startupflora.com"
      target="_blank"
      rel="noopener noreferrer"
      className="text-orange-400 hover:text-orange-300 transition font-medium"
    >
      StartupFlora
    </a>
  </p>
</motion.div>
      </div>
    </footer>
  );
}
