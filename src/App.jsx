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
      <Hero />
      <DemoSection />
      <FeatureSection />
      <UseCasesSection />
      <div className="self-stretch max-md:max-w-full">
        <div className=" max-md:max-w-full">
          <DevSection />
        </div>
      </div>

      <FightFraudSection />
      <Fringerprintlibrary />
      <StatsSection />
      <CTASection />
      <div className="flex shrink-0 max-w-full h-24 border-t border-r border-l border-dashed border-neutral-200 w-[1248px]" />
      <Footer />
    </div>
  );
}

export default App;
