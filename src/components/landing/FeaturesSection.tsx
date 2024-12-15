import { useNavigate } from "react-router-dom";
import { FeatureCard } from "./features/FeatureCard";
import { SectionTitle } from "./features/SectionTitle";
import { features } from "./features/featureData";
import { Button } from "@/components/ui/button";

export const FeaturesSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 px-8 bg-[#001B44]">
      <div className="max-w-7xl mx-auto">
        <SectionTitle 
          title="Why Choose Our Platform"
          subtitle="Experience the future of property management with our innovative features"
        />
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            onClick={() => navigate("/login")}
            className="bg-gradient-to-r from-kingdom-primary via-kingdom-secondary to-kingdom-accent text-white hover:shadow-lg hover:shadow-kingdom-primary/20 transition-all duration-300 font-semibold px-8"
          >
            Start Your Journey →
          </Button>
        </div>
      </div>
    </section>
  );
};