import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import GraphicDesignSection from "@/components/GraphicDesignSection";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialSection from "@/components/TestimonialSection";
import SoftwareSection from "@/components/SoftwareSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import EditingSection from "@/components/EditingSection";
import ShowWork from "@/components/ShowWork";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* <Navbar /> */}
      {/* <HeroSection /> */}
      <AboutSection />
      <ShowWork></ShowWork>
      {/* <SoftwareSection /> */}
      {/* <ServicesSection /> */}
      {/* <GraphicDesignSection /> */}
      {/* <EditingSection></EditingSection> */}
      {/* <PortfolioSection /> */}
      {/* <TestimonialSection /> */}
      {/* <FaqSection /> */}
      <Footer />
    </div>
  );
};

export default Index;
