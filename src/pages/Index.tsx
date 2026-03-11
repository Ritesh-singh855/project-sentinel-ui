import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SolutionsSection from "@/components/SolutionsSection";
import IndustriesSection from "@/components/IndustriesSection";
import TechnologySection from "@/components/TechnologySection";
import GlobalPresenceSection from "@/components/GlobalPresenceSection";
import ProductShowcase from "@/components/ProductShowcase";
import StatsSection from "@/components/StatsSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <SolutionsSection />
      <IndustriesSection />
      <TechnologySection />
      <GlobalPresenceSection />
      <ProductShowcase />
      <StatsSection />
      <FooterSection />
    </div>
  );
};

export default Index;
