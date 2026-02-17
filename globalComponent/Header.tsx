"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Facebook, Instagram, Linkedin, Mail, Phone, Menu, X } from "lucide-react";
import { usePopup } from "./PopupContext";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [activePath, setActivePath] = useState("/");
  const { openPopup } = usePopup();
  const headerRef = useRef<HTMLDivElement>(null);

  // Dispatch header height
  const dispatchHeaderHeight = () => {
    if (!headerRef.current) return;
    requestAnimationFrame(() => {
      const height = headerRef.current!.offsetHeight;
      window.dispatchEvent(new CustomEvent("headerHeight", { detail: height }));
    });
  };

  useEffect(() => {
    dispatchHeaderHeight();
    window.addEventListener("resize", dispatchHeaderHeight);
    return () => window.removeEventListener("resize", dispatchHeaderHeight);
  }, []);

  useEffect(() => {
    dispatchHeaderHeight();
  }, [open]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 w-full z-50 bg-white shadow-md"
    >
      {/* ---------- TOP BAR ---------- */}
      <div className="hidden md:block bg-blue-950 text-white text-sm">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Phone size={14} /> +91 9876543210
            </span>
            <span className="flex items-center gap-2">
              <Mail size={14} /> info@shreyaan.com
            </span>
          </div>

          <div className="flex items-center gap-4">
            <Facebook size={16} />
            <Instagram size={16} />
            <Linkedin size={16} />
          </div>
        </div>
      </div>

      {/* ---------- MAIN NAV ---------- */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">

        {/* Logo */}
        <Link href="/">
          <img src="/img/logo1.png" className="h-16 md:h-20 w-auto" />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-gray-800 font-medium">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              onClick={() => setActivePath(item.path)}
              className={`relative pb-1 transition ${
                activePath === item.path
                  ? "text-blue-700 font-semibold"
                  : ""
              }`}
            >
              {item.name}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-blue-600 transition-all duration-300 ${
                  activePath === item.path ? "w-full" : "w-0"
                }`}
              />
            </Link>
          ))}
        </nav>

        {/* Desktop Contact Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={openPopup}
          className="hidden md:block bg-blue-900 hover:bg-blue-950 text-white px-6 py-2 rounded-full font-semibold shadow-lg"
        >
          Contact Us
        </motion.button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* ---------- MOBILE MENU ---------- */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-xl px-6 py-6 space-y-5"
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => {
                  setActivePath(item.path);
                  setOpen(false);
                }}
                className={`block text-lg ${
                  activePath === item.path
                    ? "text-blue-700 font-semibold"
                    : ""
                }`}
              >
                {item.name}
              </Link>
            ))}

            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setOpen(false);
                openPopup();
              }}
              className="w-full bg-blue-900 text-white py-2 rounded-full font-semibold"
            >
              Contact Us
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
