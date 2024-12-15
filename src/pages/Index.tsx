import { HeroSection } from "@/components/landing/HeroSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { ExperienceSection } from "@/components/landing/ExperienceSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { FAQSection } from "@/components/landing/FAQSection";
import { CTASection } from "@/components/landing/CTASection";
import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/layout";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-kingdom-dark to-black">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ExperienceSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
        <Footer />
      </main>
    </div>
  );
};

export default Index;