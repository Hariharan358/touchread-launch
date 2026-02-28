import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SocialProofBar from "@/components/SocialProofBar";
import SolutionSection from "@/components/SolutionSection";
import ShowcaseSection from "@/components/ShowcaseSection";
import StructureSection from "@/components/StructureSection";
import AffordabilitySection from "@/components/AffordabilitySection";
import Footer from "@/components/Footer";

const Index = () => (
  <main className="noise-overlay">
    <Navbar />
    <HeroSection />
    
    <ShowcaseSection />
    <StructureSection />
    <AffordabilitySection />
    <SolutionSection />
    <Footer />
  </main>
);

export default Index;
