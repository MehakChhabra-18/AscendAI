import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

import Hero from "@/components/landing/Hero";
import CompanyMarquee from "@/components/landing/CompanyMarquee";
import FeatureSection from "@/components/landing/FeatureSection";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="overflow-x-hidden">
        <Hero />

        <CompanyMarquee />

        <FeatureSection />
      </main>

      <Footer />
    </>
  );
}