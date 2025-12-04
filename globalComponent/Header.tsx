"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50 backdrop-blur-xl bg-black/30 shadow-md transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-10 py-4">

        {/* Logo / Brand */}
        <Link href="/" className="text-2xl md:text-3xl font-extrabold leading-tight tracking-tight">
          <span className="bg-gradient-to-r from-white to-white bg-clip-text text-transparent">
            Shreyaan Constructions
          </span>
          <br />
          <span className="text-white text-lg md:text-xl font-semibold">
            & Media Projects Pvt. Ltd.
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-white font-medium">
          {["Home", "About", "Services", "Projects", "Contact"].map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `#${item.toLowerCase()}`}
              className="relative group"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl text-gray-800"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white/65 backdrop-blur-lg shadow-xl px-6 py-6 space-y-4 text-gray-700 font-medium"
          >
            {["Home", "About", "Services", "Projects", "Contact"].map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : `#${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="block text-lg hover:text-blue-700 active:text-blue-700 transition"
              >
                {item}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
