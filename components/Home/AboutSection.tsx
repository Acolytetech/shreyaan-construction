"use client";

import Link from "next/link";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-gray-50 relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT IMAGE BLOCK */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative group  w-full h-80 md:h-[430px] rounded-xl overflow-hidden shadow-xl"
        >
          {/* Gradient Border Left Line */}

          {/* Image */}
          {/* <Image
            src="/img/about1.png"
            alt="About Shreyaan Constructions"
            fill
            className="object-cover transform group-hover:scale-105 transition-all duration-700"
          /> */}
<iframe src="https://lottie.host/embed/443913a5-1f10-4381-b3f1-abce6bec3f57/4gb2gNlvQX.lottie" className="!bg-white w-full h-full scale-125"></iframe>
          {/* Overlay Glass Effect */}
          {/* <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all"></div> */}
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-extrabold text-blue-900 mb-6 leading-tight">
            About Us
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Shreyaan Constructions and Media Projects Pvt. Ltd. is a fast-growing
            startup based in Telangana, providing end-to-end solutions in construction,
            civil works, infrastructure development, and media execution.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            We undertake both government and private projects including building
            construction, architectural design, roadwork, modular structures,
            broadcasting, outdoor advertising, and tender execution.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            Our mission is to deliver high-quality, reliable, and cost-effective
            construction and media services that contribute to regional development
            and large-scale job creation across Telangana and nearby states.
          </p>

          <Link href="#contact">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-900 text-white px-10 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-2xl transition-all"
            >
              Contact Us
            </motion.button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
