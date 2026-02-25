import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SocialProofBar from "@/components/SocialProofBar";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import ShowcaseSection from "@/components/ShowcaseSection";
import FeaturesGrid from "@/components/FeaturesGrid";
import ImpactSection from "@/components/ImpactSection";
import TechnicalSection from "@/components/TechnicalSection";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => (
  <main className="noise-overlay">
    <Navbar />
    <HeroSection />
    <SocialProofBar />
    <ProblemSection />
    <SolutionSection />
    <ShowcaseSection />
    <FeaturesGrid />
    <ImpactSection />
    <TechnicalSection />
    <PricingSection />
    <CTASection />
    <Footer />
  </main>
);

export default Index;
