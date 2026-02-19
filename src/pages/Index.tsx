import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhatIsSection from "@/components/WhatIsSection";
import FeaturesSection from "@/components/FeaturesSection";
import UseCasesSection from "@/components/UseCasesSection";
import VariantsSection from "@/components/VariantsSection";
import DemosSection from "@/components/DemosSection";
import WhySection from "@/components/WhySection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <div id="features">
          <WhatIsSection />
          <FeaturesSection />
        </div>
        <div id="use-cases">
          <UseCasesSection />
        </div>
        <VariantsSection />
        <DemosSection />
        <WhySection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
