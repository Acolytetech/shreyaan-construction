import AboutSection from "@/components/Home/AboutSection";
import BuildingExcellenceSection from "@/components/Home/BuildingExcellenceSection";
import ConnectSection from "@/components/Home/ConnectSection";
import HeroSection from "@/components/Home/Hero";
import ProjectsSection from "@/components/Home/ProjectsSection";
import ServicesSectionnew from "@/components/Home/ServicesSectionnew";
import TestimonialsSection from "@/components/Home/TestimonialsSection";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="overflow-hidden">
  <HeroSection />
  <AboutSection />
  <BuildingExcellenceSection/>
  <ServicesSectionnew/>
  <ProjectsSection/>
  <WhyChooseUs/>
  <TestimonialsSection/>
  <ConnectSection/>
    </div>
  );
}
