"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const headerRef = useRef<HTMLDivElement>(null);

  // 🔥 Detect Navbar Height
  useEffect(() => {
    if (headerRef.current) {
      const height = headerRef.current.offsetHeight;
      window.dispatchEvent(new CustomEvent("headerHeight", { detail: height }));
    }

    const handleResize = () => {
      if (headerRef.current) {
        const height = headerRef.current.offsetHeight;
        window.dispatchEvent(new CustomEvent("headerHeight", { detail: height }));
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 🔥 Active Section Observer
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => sections.forEach((sec) => observer.unobserve(sec));
  }, []);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <header
      ref={headerRef}
      className="w-full fixed top-0 left-0 z-50 backdrop-blur-xl bg-white shadow-md transition-all"
    >
      {/* ----------- TOP BAR ----------- */}
      <div className="h-8 md:h-12 bg-blue-950 text-white text-sm md:text-base">
        <div className="max-w-7xl mx-auto px-4 md:px-10 h-full flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Phone size={14} /> <span>+91 9876543210</span>
            </div>
            <div className="flex items-center gap-1">
              <Mail size={14} /> <span>info@shreyaan.com</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a href="#"><Facebook size={16} /></a>
            <a href="#"><Instagram size={16} /></a>
            <a href="#"><Linkedin size={16} /></a>
          </div>
        </div>
      </div>

      {/* ----------- MAIN NAVBAR ----------- */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-10 py-4">
        <Link href="/">
          <img src="/img/logo1.png" className="h-20 md:h-24 w-auto" />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-gray-800 font-medium">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.id === "home" ? "/" : `#${item.id}`}
              className={`relative pb-1 transition ${
                activeSection === item.id ? "text-blue-700 font-semibold" : ""
              }`}
            >
              {item.name}

              {/* Underline animation */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-blue-600 transition-all duration-300 ${
                  activeSection === item.id ? "w-full" : "w-0"
                }`}
              ></span>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-3xl">
          ☰
        </button>
      </div>

      {/* ----------- MOBILE MENU ----------- */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-white/80 backdrop-blur-lg shadow-xl px-6 py-6 space-y-4"
          >
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.id === "home" ? "/" : `#${item.id}`}
                onClick={() => setOpen(false)}
                className={`block text-lg transition ${
                  activeSection === item.id ? "text-blue-700 font-semibold" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
