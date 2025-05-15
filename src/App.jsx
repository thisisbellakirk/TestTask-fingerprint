import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import React from "react";
import DemoSection from "./components/ErrorDisplay";
import FeatureSection from "./components/FeatureSection";
import UseCasesSection from "./components/UseCaseItem";
import DevSection from "./components/AccuracyChart";
import StatsSection from "./components/StatItem";
import CTASection from "./components/CTASection";
import Footer from "./components/FooterColumn";
import Fringerprintlibrary from "./components/Fringerprintlibrary";
import FightFraudSection from "./components/FightFraudSection";
function App() {
  return (
    <div className="flex flex-col items-center pb-3 bg-white">
      <Navbar />
      <div className="relative hero_section w-full z-20">
        <Hero />
        <DemoSection />
      </div>
      <div className="border-l-1  border-r-1 border-dashed  border-[#e4e5e1] container mx-auto px-2 lg:px-0">
        <FeatureSection />
        <UseCasesSection />
      </div>
      <div className="relative AccuracyChart w-full z-20">
        <div className="border-l-1  border-r-1 border-dashed  border-[#e4e5e1] container mx-auto px-2 lg:px-0">
          <div className="self-stretch max-md:max-w-full">
            <div className=" max-md:max-w-full">
              <DevSection />
            </div>
          </div>
          <FightFraudSection />
        </div>
      </div>
      <div className="border-l-1  border-r-1 border-dashed  border-[#e4e5e1] container mx-auto px-2 lg:px-0">
        <Fringerprintlibrary />
        <StatsSection />
        <CTASection />
        <div className="flex shrink-0 max-w-full h-24 border-t  border-dashed border-[#e4e5e1] " />
      </div>
      <Footer />
    </div>
  );
}

export default App;
