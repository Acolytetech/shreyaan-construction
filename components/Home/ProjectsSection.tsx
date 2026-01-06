// "use client";

// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";

// const projects = [
//   {
//     title: "Residential Construction",
//     image: "/img/p1.jpg",
//     tint: "from-blue-900/70 to-blue-800/10",
//   },
//   {
//     title: "Commercial Buildings",
//     image: "/img/p2.jpg",
//     tint: "from-green-900/70 to-green-800/10",
//   },
//   {
//     title: "Interior & Fit-out",
//     image: "/img/p3.jpg",
//     tint: "from-pink-900/70 to-pink-800/10",
//   },
//   {
//     title: "Industrial Facilities",
//     image: "/img/p4.jpg",
//     tint: "from-red-900/70 to-red-800/10",
//   },
// ];

// export default function ProjectsSection() {
//   return (
//     <section id="projects" className="py-24 bg-[#061529]">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Heading */}
//         <h2 className="text-4xl font-bold text-white mb-14 text-center">
//           Our Projects
//         </h2>

//         {/* Swiper Slider */}
//         <Swiper
//           modules={[Autoplay]}
//           loop={true}
//           autoplay={{
//             delay: 0,
//             disableOnInteraction: false,
//             pauseOnMouseEnter: true,
//           }}
//           speed={6000} // smooth continuous scroll feel
//           grabCursor={true}
//           spaceBetween={24}
//           breakpoints={{
//             0: { slidesPerView: 1.15 },
//             640: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 },
//             1280: { slidesPerView: 3 },
//           }}
//           className="projects-swiper"
//         >
//           {projects.map((project, index) => (
//             <SwiperSlide key={index}>
//               <div className="relative w-full h-[420px] rounded-2xl overflow-hidden shadow-xl cursor-pointer group">
//                 {/* Background Image */}
//                 <Image
//                   src={project.image}
//                   alt={project.title}
//                   fill
//                   className="object-cover transition-transform duration-[2500ms] group-hover:scale-110"
//                 />

//                 {/* Gradient Overlay */}
//                 <div
//                   className={`absolute inset-0 bg-gradient-to-b ${project.tint} mix-blend-multiply`}
//                 />

//                 {/* Centered Glass Text */}
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <div className="px-6 py-3 bg-white/15 backdrop-blur-md rounded-xl border border-white/20">
//                     <h3 className="text-white text-xl font-semibold text-center drop-shadow-lg">
//                       {project.title}
//                     </h3>
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// }
"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

interface Project {
  title: string;
  subtitle: string;
  description: string;
  rating: number;
  image: string;
}

const projects: Project[] = [
  {
    title: "Residential Construction",
    subtitle: "Luxury Homes & Apartments",
    description:
      "We specialize in high-quality residential construction delivering modern, durable, and aesthetically designed homes. From planning to execution, every detail is crafted with precision, ensuring comfort, safety, and long-term value for homeowners.",
    rating: 5,
    image: "/img/p1.jpg",
  },
  {
    title: "Commercial Buildings",
    subtitle: "Smart Business Spaces",
    description:
      "Our commercial projects focus on functionality, scalability, and brand presence. We build offices, malls, and complexes that enhance productivity while maintaining architectural excellence.",
    rating: 4,
    image: "/img/p2.jpg",
  },
  {
    title: "Interior & Fit-out",
    subtitle: "Modern Interior Solutions",
    description:
      "From corporate interiors to luxury home fit-outs, we deliver premium interior solutions that combine creativity, comfort, and efficiency with world-class materials.",
    rating: 5,
    image: "/img/p3.jpg",
  },
  {
    title: "Industrial Facilities",
    subtitle: "Strong & Scalable Infrastructure",
    description:
      "We design and construct industrial facilities with a focus on safety, efficiency, and future expansion, meeting all regulatory and operational requirements.",
    rating: 4,
    image: "/img/p4.jpg",
  },
];

export default function ProjectsSection() {
  const [open, setOpen] = useState<boolean>(false);
  const [activeProject, setActiveProject] = useState<string | null>(null);

  return (
    <section id="projects" className="py-24 bg-[#061529] text-white relative">
      <div className="mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Our Featured Projects
        </h2>

        {/* Navigation */}
        <div className="absolute right-16 bottom-30 z-50 flex gap-4">
          <button className="swiper-button-prev-custom w-12 h-12 bg-blue-950 border border-white/30 rounded-full">
            ↑
          </button>
          <button className="swiper-button-next-custom w-12 h-12 bg-blue-950 border border-white/30 rounded-full">
            ↓
          </button>
        </div>

        <Swiper
          direction="vertical"
          slidesPerView={1}
          spaceBetween={40}
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{ delay: 4500 }}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          loop
          className="h-[75vh]"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-[75vh] rounded-3xl overflow-hidden">

                {/* Image */}
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40" />

                {/* LEFT CONTENT */}
                <div className="relative z-10 h-full flex items-center max-w-7xl mx-auto">
                  <div className="ml-10 max-w-xl bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-10">

                    <span className="uppercase tracking-widest text-sm text-blue-300">
                      Our Expertise
                    </span>

                    <h3 className="text-4xl font-bold mt-2 mb-2">
                      {project.title}
                    </h3>

                    <p className="text-blue-300 text-xl mb-4">
                      {project.subtitle}
                    </p>

                    {/* Rating */}
                    <div className="flex mb-5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span
                          key={i}
                          className={`text-2xl ${
                            i < project.rating
                              ? "text-yellow-400"
                              : "text-gray-500"
                          }`}
                        >
                          ★
                        </span>
                      ))}
                    </div>

                    <p className="text-gray-200 text-lg leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Feature Points */}
                    <ul className="space-y-2 text-gray-300 mb-6">
                      <li>✔ Premium Materials & Finish</li>
                      <li>✔ On-time Project Delivery</li>
                      <li>✔ Experienced Engineering Team</li>
                    </ul>

                    <button
                      onClick={() => {
                        setActiveProject(project.title);
                        setOpen(true);
                      }}
                      className="px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition font-semibold"
                    >
                      Inquiry Now
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 z-[999] bg-black/70 flex items-center justify-center px-4">
          <div className="bg-white text-black rounded-2xl w-full max-w-lg p-8 relative">
            <button
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 text-xl"
            >
              ✕
            </button>

            <h3 className="text-2xl font-bold mb-2">
              Project Inquiry
            </h3>

            <p className="text-sm text-gray-600 mb-6">
              Interested in <b>{activeProject}</b>? Fill the form below.
            </p>

            <form className="space-y-4">
              <input className="w-full border rounded-lg px-4 py-2" placeholder="Full Name" />
              <input className="w-full border rounded-lg px-4 py-2" placeholder="Email Address" />
              <input className="w-full border rounded-lg px-4 py-2" placeholder="Phone Number" />
              <textarea className="w-full border rounded-lg px-4 py-2" rows={4} placeholder="Your Requirement" />

              <button className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700">
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
