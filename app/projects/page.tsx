"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ProjectsPage() {
  // Simulate project data
  const projects = [
    {
      title: "Residential Construction",
      description: "We specialize in building luxurious residential properties.",
      image: "/img/project1.jpg",
      link: "/projects/residential",
    },
    {
      title: "Commercial Buildings",
      description: "Constructing modern office spaces and business parks.",
      image: "/img/project2.jpg",
      link: "/projects/commercial",
    },
    {
      title: "Architectural Design",
      description: "Transforming ideas into beautiful architectural designs.",
      image: "/img/project3.jpg",
      link: "/projects/architectural-design",
    },
  ];

  return (
    <div className="bg-gray-50">

      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-[60vh]" style={{ backgroundImage: 'url("/img/aboutbg.png")' }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex flex-col gap-6 items-center justify-center text-center text-white px-4 sm:px-10">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl font-semibold"
          >
            Our Projects
          </motion.h1>
          <p className="text-lg">
            Explore our diverse portfolio of construction and design projects.
          </p>
        </div>
      </section>

      {/* Project List Section */}
      <section className="py-24 px-6 sm:px-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 * index }}
            className="bg-white shadow-lg rounded-xl overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-blue-900 mb-4">{project.title}</h3>
              <p className="text-gray-700 text-lg mb-4">{project.description}</p>
              <Link href={project.link}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-900 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:bg-blue-950 transition-all"
                >
                  View Details
                </motion.button>
              </Link>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Featured Project Section */}
      <section className="py-24 px-6 sm:px-10 bg-blue-50">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-semibold text-center text-blue-900 mb-12"
        >
          Featured Project: Residential Construction
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12"
        >
          <div className="relative">
            <img
              src="/img/p1.jpg"
              alt="Featured Project"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h3 className="text-3xl font-semibold text-blue-900 mb-4">Residential Construction</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We specialize in constructing modern and luxurious residential buildings. Our attention to detail and quality ensures that every home is built to exceed expectations.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Our team works closely with clients to understand their unique needs, and we bring those ideas to life with careful planning, superior craftsmanship, and timely execution.
            </p>
            <Link href="/projects/residential">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-900 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:bg-blue-950 transition-all"
              >
                View Project
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
