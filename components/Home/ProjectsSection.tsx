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

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const projects = [
  {
    title: "Residential Construction",
    image: "/img/p1.jpg",
  },
  {
    title: "Commercial Buildings",
    image: "/img/p2.jpg",
  },
  {
    title: "Interior & Fit-out",
    image: "/img/p3.jpg",
  },
  {
    title: "Industrial Facilities",
    image: "/img/p4.jpg",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-[#061529] text-white relative">
      <div className=" mx-auto px-6 ">

        <h2 className="text-4xl font-bold text-center mb-10">Our Projects</h2>

        {/* Navigation Buttons */}
        <div className="absolute right-10 top-1/2 z-50 flex flex-col gap-4 -translate-y-1/2">
          <button className="swiper-button-prev-custom w-12 h-12 bg-blue-950 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/40 transition">
            ↑
          </button>

          <button className="swiper-button-next-custom w-12 h-12 bg-blue-950 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/40 transition">
            ↓
          </button>
        </div>

        {/* Swiper Slider */}
        <Swiper
          direction="vertical"
          slidesPerView={1}
          spaceBetween={30}
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          loop={true}
          className="h-[70vh] relative"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-[70vh] rounded-2xl overflow-hidden shadow-xl group">

                {/* Background Image */}
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                />

                {/* Text Container */}
                <div className="absolute bottom-8 left-0 right-0 flex justify-center">
                  <div className="px-6 py-3 bg-white/20 backdrop-blur-lg border border-white/30 rounded-xl">
                    <h3 className="text-2xl font-semibold drop-shadow-lg">
                      {project.title}
                    </h3>
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}
