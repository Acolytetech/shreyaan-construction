"use client";

import { motion } from "framer-motion";
import {
  Home,
  Hammer,
  ShieldCheck,
  Layers,
  Paintbrush,
  Ruler,
  Trees,
  Building2,
} from "lucide-react";

const services = [
  {
    title: "Building Renovation",
    desc: "Transforming outdated spaces into modern, functional, and aesthetically pleasing environments.",
    icon: Hammer,
    featured: true,
  },
  {
    title: "Interior Finishing",
    desc: "Delivering impeccable craftsmanship to enhance the beauty, comfort, and value of interiors.",
    icon: Paintbrush,
  },
  {
    title: "Roofing Solutions",
    desc: "Providing durable and innovative roofing systems designed to protect.",
    icon: Home,
  },
  {
    title: "Foundation Repair",
    desc: "Ensuring structural stability and safety with expert solutions for foundation.",
    icon: ShieldCheck,
  },
  {
    title: "Site Preparation",
    desc: "Delivering impeccable craftsmanship to enhance the beauty, comfort.",
    icon: Layers,
  },
  {
    title: "Building Design",
    desc: "Providing durable and innovative roofing systems designed to protect.",
    icon: Ruler,
  },
  {
    title: "Landscaping Solutions",
    desc: "Providing durable and innovative roofing systems designed to protect.",
    icon: Trees,
  },
  {
    title: "Custom Builds",
    desc: "Ensuring structural stability and safety with expert solutions for foundation.",
    icon: Building2,
  },
];

export default function ServicesSectionnew() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            See Our All Service
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            To provide exceptional construction services that exceed client
            expectations through innovation, quality craftsmanship, and a
            commitment to sustainability.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 200 }}
                className={`rounded-xl p-6 border transition-all group
                  ${
                    service.featured
                      ? "bg-[#3b3a36] text-white"
                      : "bg-white hover:shadow-xl hover:bg-[#3b3a36] hover:text-white"
                  }`}
              >
                {/* Icon */}
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center mb-4
                    ${
                      service.featured
                        ? "bg-white/20"
                        : "bg-green-50 group-hover:bg-white/20"
                    }`}
                >
                  <Icon
                    size={20}
                    className={
                      service.featured
                        ? "text-white"
                        : "text-blue-600 group-hover:text-white"
                    }
                  />
                </div>

                {/* Title */}
                <h3
                  className={`text-lg font-semibold mb-2
                    ${
                      service.featured
                        ? "text-white"
                        : "text-gray-900 group-hover:text-white"
                    }`}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className={`text-sm leading-relaxed mb-4
                    ${
                      service.featured
                        ? "text-gray-200"
                        : "text-gray-600 group-hover:text-white"
                    }`}
                >
                  {service.desc}
                </p>

                {/* Link */}
                <a
                  href="#"
                  className={`text-sm font-semibold inline-flex items-center gap-1
                    ${
                      service.featured
                        ? "text-blue-300"
                        : "text-blue-600 group-hover:text-blue-300"
                    }`}
                >
                  Learn More →
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
