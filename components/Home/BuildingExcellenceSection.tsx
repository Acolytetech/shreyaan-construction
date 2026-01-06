'use client';

import { motion } from "framer-motion";
import { CheckCircle, MoveRightIcon } from "lucide-react";

const BuildingExcellenceSection = () => {
  return (
    <section className="bg-[#022D4D] text-white py-20">
      <div className="container mx-auto px-6">
        <p className="text-4xl font-semibold text-center mb-12">
          Building Excellence With Precision
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className=" shadow-2xl rounded-2xl  overflow-hidden flex flex-col"
          >
            <div className="bg-blue-950 text-white py-6 px-8">
              <h3 className="text-2xl font-bold">FINDING YOUR NEW HOME MADE SIMPLE</h3>
              <p className="mt-4 text-lg">
                Lorem ipsum dolor sit amet consectetur. Dui convallis diam enim integer arcu molestie ridiculus tempus.
              </p>
            </div>
            <div className="p-6 flex-1 text-white">
              <h4 className="font-semibold text-xl mb-4">What to Expect:</h4>
              <ul className="space-y-2">
                <li className="flex gap-2"><CheckCircle/>Duis aute irure dolor in reprehenderit</li>
              <li className="flex gap-2"><CheckCircle/>Excepteur sint occaecat cupidatat non proident</li>
                <li className="flex gap-2"><CheckCircle/>Rhoncus adipiscing in vitae in malesuada augue</li>
              </ul>
            </div>
            <div className="p-6">
              <button className="bg-[#d45f04] text-white py-2 px-6 rounded-md w-full">
                Get Quote
              </button>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-fit"
          >
            {/* image  */}
            <div className="bg-gray-200 border border-gray-300 rounded-lg overflow-hidden">
              <img src="/img/p1.jpg" alt="Luxury Home" className="w-full h-60 object-cover" />
            </div>

            <div className=" text-black py-6 px-8  ">
              <h3 className="text-2xl font-bold">Luxury Homes</h3>
              <p className="mt-4 text-lg">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
            <div className="p-6 flex-1">
              <button className="bg-blue-950 text-white py-2 px-6 rounded-md w-full">
                Get Quote
              </button>
            </div>
          </motion.div>

          {/* Card 3 */}
           <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-fit"
          >
            {/* image  */}
            <div className="bg-gray-200 border border-gray-300 rounded-lg overflow-hidden">
              <img src="/img/p2.jpg" alt="Luxury Home" className="w-full h-60 object-cover" />
            </div>

            <div className=" text-black py-6 px-8  ">
              <h3 className="text-2xl font-bold">Luxury Homes</h3>
              <p className="mt-4 text-lg">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
            <div className="p-6 flex-1">
              <button className="bg-blue-950 text-white py-2 px-6 rounded-md w-full">
                Get Quote
              </button>
            </div>
          </motion.div>
          {/* Card 4 */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-fit"
          >
            {/* image  */}
            <div className="bg-gray-200 border border-gray-300 rounded-lg overflow-hidden">
              <img src="/img/p3.jpg" alt="Luxury Home" className="w-full h-60 object-cover" />
            </div>

            <div className=" text-black py-6 px-8  ">
              <h3 className="text-2xl font-bold">Luxury Homes</h3>
              <p className="mt-4 text-lg">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
            <div className="p-6 flex-1">
              <button className="bg-blue-950 text-white py-2 px-6 rounded-md w-full">
                Get Quote
              </button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <a href="#about-us" className="text-white font-bold text-lg">
            More About Us →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default BuildingExcellenceSection;
