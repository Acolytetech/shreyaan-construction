"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage("Submitting...");

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setStatusMessage("Thank you for your message. We will get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    }, 2000);
  };

  return (
    <div className="bg-gray-50">
        {/* Banner Section */}
        <section className="relative bg-cover  bg-center h-[50vh]" style={{ backgroundImage: 'url("/img/p1.jpg")' }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center text-white px-4 sm:px-10 pt-20">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-5xl font-semibold"
            >
              Contact Us
            </motion.h1>
        </div>
      </section>

      {/* Connect Section */}
        <section className="py-20 px-6 sm:px-10 max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-semibold text-center text-blue-900 mb-12"
        >
          Get in Touch
        </motion.h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          We would love to hear from you! Whether you have questions about our services, need a quote, or just want to say hello, feel free to reach out using the form below or through our contact information.
        </p>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 px-6 sm:px-10 max-w-7xl mx-auto grid gap-12 grid-cols-1 md:grid-cols-2">
        <div>
            <motion.img
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                src="/img/p2.jpg"
                alt="Contact Us"
                className="w-full h-auto rounded-xl shadow-lg"
            />
        </div>
        <div className=" text-left">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-semibold text-left text-blue-900 mb-12"
          >
          Get in Touch
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-8"
        >
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700 text-lg mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full p-4 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 text-lg mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full p-4 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 text-lg mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                className="w-full p-4 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={6}
                ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-blue-900 text-white rounded-lg font-semibold hover:bg-blue-950 transition-all disabled:bg-gray-400"
            >
              {isSubmitting ? "Submitting..." : "Send Message"}
            </motion.button>
          </form>

          {statusMessage && (
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mt-6 text-center text-gray-700"
            >
              <p>{statusMessage}</p>
            </motion.div>
          )}
        </motion.div>
          </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-24 px-6 sm:px-10 bg-blue-50">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-semibold text-center text-blue-900 mb-12"
          >
          Our Contact Information
        </motion.h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-12">
          <div className="text-left">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="text-lg text-gray-700 mb-6"
            >
              <h3 className="text-2xl font-semibold text-blue-900 mb-4">Visit Us</h3>
              <p>1234 Construction Lane, Building City, Telangana, India</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-lg text-gray-700 mb-6"
            >
              <h3 className="text-2xl font-semibold text-blue-900 mb-4">Call Us</h3>
              <p>+91 9876543210</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="text-lg text-gray-700"
            >
              <h3 className="text-2xl font-semibold text-blue-900 mb-4">Email Us</h3>
              <p>info@shreyaan.com</p>
            </motion.div>
          </div>

          {/* Google Map Embed */}
          <div className="relative w-full h-96">
            <motion.iframe
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.444412034419!2d78.473865!3d17.425289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb94c41a057d3d%3A0xb1695b5f9065b67b!2sShreyaan%20Constructions%20%26%20Media%20Projects%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1640627462747!5m2!1sen!2sin"
              className="w-full h-full border-0 rounded-lg"
              loading="lazy"
            ></motion.iframe>
          </div>
        </div>
      </section>

    </div>
  );
}
