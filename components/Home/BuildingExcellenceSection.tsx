"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, X } from "lucide-react";

const BuildingExcellenceSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const openForm = (property:any) => {
    setSelectedProperty(property);
    setIsOpen(true);
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();

    const whatsappNumber = "919999999999"; // 👉 apna WhatsApp number yaha dalna (91 ke sath)
    const text = `Hello, I am interested in ${selectedProperty}.
Name: ${formData.name}
Phone: ${formData.phone}
Message: ${formData.message}`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      text
    )}`;

    window.open(url, "_blank");
    setIsOpen(false);
  };

  return (
    <>
      <section className="bg-[#022D4D] text-white py-20">
        <div className="container mx-auto px-6">
          <p className="text-4xl font-semibold text-center mb-12">
            Building Excellence With Precision
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Main Info Card */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="shadow-2xl rounded-2xl overflow-hidden flex flex-col"
            >
              <div className="bg-blue-950 py-6 px-8">
                <h3 className="text-2xl font-bold">
                  Smart Property Investment Made Easy
                </h3>
                <p className="mt-4 text-lg">
                  We help you discover premium properties with complete legal
                  transparency and trusted advisory support.
                </p>
              </div>

              <div className="p-6 flex-1">
                <h4 className="font-semibold text-xl mb-4">
                  What You’ll Get:
                </h4>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <CheckCircle size={18} /> Verified Listings & Clear Titles
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle size={18} /> Expert Consultation & Site Visits
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle size={18} /> Transparent Pricing & Zero Hidden Charges
                  </li>
                </ul>
              </div>

              <div className="p-6">
                <button
                  onClick={() => openForm("Property Consultation")}
                  className="bg-[#d45f04] py-2 px-6 rounded-md w-full"
                >
                  Get Quote
                </button>
              </div>
            </motion.div>

            {/* Property Cards */}
            {[
              { title: "Luxury Villas", img: "/img/p1.jpg" },
              { title: "Premium Apartments", img: "/img/p2.jpg" },
              { title: "Commercial Spaces", img: "/img/p3.jpg" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-fit"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-60 object-cover"
                />

                <div className="text-black py-6 px-8">
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                  <p className="mt-4 text-lg">
                    Explore modern design, prime location, and world-class amenities.
                  </p>
                </div>

                <div className="p-6">
                  <button
                    onClick={() => openForm(item.title)}
                    className="bg-blue-950 text-white py-2 px-6 rounded-md w-full"
                  >
                    Get Quote
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Form */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-md p-8 rounded-xl relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4"
            >
              <X />
            </button>

            <h3 className="text-2xl font-bold mb-6 text-black">
              Get Quote - {selectedProperty}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full border p-3 rounded-md"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />

              <input
                type="tel"
                placeholder="Your Phone Number"
                required
                className="w-full border p-3 rounded-md"
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />

              <textarea
                placeholder="Your Message"
                className="w-full border p-3 rounded-md"
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />

              <button
                type="submit"
                className="bg-[#d45f04] text-white py-3 rounded-md w-full"
              >
                Submit on WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default BuildingExcellenceSection;