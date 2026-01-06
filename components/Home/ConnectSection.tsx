"use client";

import { Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

export default function ConnectSection() {
  return (
    <section className="relative py-20 bg-[#f3f3f3]">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-6 mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2 text-[#0f1f3a]">Connect With Us</h2>
            <p className="text-gray-600 max-w-md">
              For any inquiries regarding our services, feel free to reach out
              to us using the details below.
            </p>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex gap-3">
            <a className="w-10 h-10 rounded-full bg-[#0f1f3a] flex items-center justify-center text-white">
              <Facebook size={18} />
            </a>
            <a className="w-10 h-10 rounded-full bg-[#0f1f3a] flex items-center justify-center text-white">
              <Instagram size={18} />
            </a>
            <a className="w-10 h-10 rounded-full bg-[#0f1f3a] flex items-center justify-center text-white">
              <Twitter size={18} />
            </a>
          </div>
        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* CONTACT FORM */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-lg">
            <form className="grid sm:grid-cols-2 gap-6 text-[#0f1f3a] ">
              <div>
                <label className="font-medium">Full Name</label>
                <input
                  type="text"
                  className="mt-2 w-full h-11 rounded-lg bg-gray-100 px-4 outline-none"
                />
              </div>

              <div>
                <label className=" font-medium">Email</label>
                <input
                  type="email"
                  className="mt-2 w-full h-11 rounded-lg bg-gray-100 px-4 outline-none"
                />
              </div>

              <div>
                <label className=" font-medium">Address</label>
                <input
                  type="text"
                  className="mt-2 w-full h-11 rounded-lg bg-gray-100 px-4 outline-none"
                />
              </div>

              <div>
                <label className="font-medium">Phone Number</label>
                <input
                  type="tel"
                  className="mt-2 w-full h-11 rounded-lg bg-gray-100 px-4 outline-none"
                />
              </div>

              <div className="sm:col-span-2">
                <label className=" font-medium">
                  How May We Assist You?
                </label>
                <textarea
                  rows={5}
                  className="mt-2 w-full rounded-lg bg-gray-100 px-4 py-3 outline-none resize-none"
                />
              </div>

              <div className="sm:col-span-2 flex justify-end">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-semibold flex items-center gap-2">
                  Send →
                </button>
              </div>
            </form>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col gap-6">
            {/* CALL CARD */}
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center text-[#0f1f3a]">
              <Phone className="mx-auto mb-3 text-[#0f1f3a]" />
              <h4 className="font-semibold ">CALL US</h4>
              <p className="text-gray-600 mt-1">+639-2145-251</p>
            </div>

            {/* VISIT CARD */}
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center text-[#0f1f3a]">
              <MapPin className="mx-auto mb-3 text-[#0f1f3a]" />
              <h4 className="font-semibold">VISIT US</h4>
              <p className="text-gray-600 mt-1 text-sm">
                13 43rd Ave. San Mateo,
                <br />
                California
              </p>
            </div>

            {/* NEWSLETTER */}
            <div className="rounded-2xl bg-[#0f1f3a] p-6 text-white shadow-lg">
              <h4 className="font-semibold mb-2">OUR DAILY NEWSLETTER</h4>
              <p className="text-sm text-gray-300 mb-4">
                Subscribe to our Newsletter and get the latest updates!
              </p>

              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Email"
                  className="flex-1 h-10 rounded-lg px-3 text-black outline-none"
                />
                <button className="bg-orange-500 hover:bg-orange-600 px-4 rounded-lg font-semibold">
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
