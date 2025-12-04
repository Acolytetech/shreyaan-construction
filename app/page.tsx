import AboutSection from "@/components/Home/AboutSection";
import HeroSection from "@/components/Home/Hero";
import ProjectsSection from "@/components/Home/ProjectsSection";
import ServicesSection from "@/components/Home/ServicesSection";
import TestimonialsSection from "@/components/Home/TestimonialsSection";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
  <HeroSection />
  <AboutSection />
  <ServicesSection/>
  <ProjectsSection/>
  <WhyChooseUs/>
  <TestimonialsSection/>
    </div>
  );
}
