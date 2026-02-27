"use client";

import { Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

export default function ConnectSection() {
  return (
    <section
      className="relative py-14 md:py-20 bg-[#f3f3f3]"
      style={{
        backgroundImage: 'url("/img/s1.webp")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* overlay */}
      <div className="absolute z-10 inset-0 bg-black/30"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 z-20">
        {/* HEADER */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-6 mb-10 md:mb-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
              Connect With Us
            </h2>
            <p className="text-gray-200 text-base md:text-lg max-w-md">
              For any inquiries regarding our services, feel free to reach out
              to us using the details below.
            </p>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex gap-3 mt-4 lg:mt-0">
            <a className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-[#0f1f3a] flex items-center justify-center text-white">
              <Facebook size={18} />
            </a>
            <a className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-[#0f1f3a] flex items-center justify-center text-white">
              <Instagram size={18} />
            </a>
            <a className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-[#0f1f3a] flex items-center justify-center text-white">
              <Twitter size={18} />
            </a>
          </div>
        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
          {/* CONTACT FORM */}
          <div className="lg:col-span-2 bg-black/40 rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg">
            <form className="grid sm:grid-cols-2 gap-5 md:gap-6 text-white">
              <div>
                <label className="font-medium text-sm md:text-base">
                  Full Name
                </label>
                <input
                  type="text"
                  className="mt-2 w-full h-10 md:h-11 rounded-lg bg-gray-100 px-4 outline-none text-black"
                />
              </div>

              <div>
                <label className="font-medium text-sm md:text-base">
                  Email
                </label>
                <input
                  type="email"
                  className="mt-2 w-full h-10 md:h-11 rounded-lg bg-gray-100 px-4 outline-none text-black"
                />
              </div>

              <div>
                <label className="font-medium text-sm md:text-base">
                  Address
                </label>
                <input
                  type="text"
                  className="mt-2 w-full h-10 md:h-11 rounded-lg bg-gray-100 px-4 outline-none text-black"
                />
              </div>

              <div>
                <label className="font-medium text-sm md:text-base">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="mt-2 w-full h-10 md:h-11 rounded-lg bg-gray-100 px-4 outline-none text-black"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="font-medium text-sm md:text-base">
                  How May We Assist You?
                </label>
                <textarea
                  rows={4}
                  className="mt-2 w-full rounded-lg bg-gray-100 px-4 py-3 outline-none resize-none text-black"
                />
              </div>

              <div className="sm:col-span-2 flex justify-end">
                <button className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-full font-semibold flex items-center justify-center gap-2 transition">
                  Send →
                </button>
              </div>
            </form>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col gap-5 md:gap-6">
            {/* CALL CARD */}
            <div className="bg-white rounded-2xl p-5 md:p-6 shadow-lg text-center text-[#0f1f3a]">
              <Phone className="mx-auto mb-3" />
              <h4 className="font-semibold">CALL US</h4>
              <p className="text-gray-600 font-semibold mt-1 text-sm md:text-base">
               S Surya Kiran Verma <br/> +91 9083099999
              </p>
            </div>

            {/* VISIT CARD */}
            <div className="bg-white rounded-2xl p-5 md:p-6 shadow-lg text-center text-[#0f1f3a]">
              <MapPin className="mx-auto mb-3" />
              <h4 className="font-semibold">VISIT US</h4>
              <p className="text-gray-600 mt-1 text-sm font-semibold">
                 2-8-533, First Flo, Middle Shutter, Indiranag, Reddicolony, Warangal, Hanamkonda, 
                <br />
                Telangana, India, 506011
              </p>
            </div>

            {/* NEWSLETTER */}
            <div className="rounded-2xl bg-[#0f1f3a] p-5 md:p-6 text-white shadow-lg">
              <h4 className="font-semibold mb-2 text-sm md:text-base">
                OUR DAILY NEWSLETTER
              </h4>
              <p className="text-sm text-gray-300 mb-4">
                Subscribe to our Newsletter and get the latest updates!
              </p>

              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Email"
                  className="flex-1 h-10 py-3 rounded-lg px-3 bg-white text-black outline-none"
                />
                <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg font-semibold transition">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
