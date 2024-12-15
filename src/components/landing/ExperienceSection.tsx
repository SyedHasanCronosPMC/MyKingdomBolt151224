import { motion } from "framer-motion";
import { ExperienceCard } from "./experience/ExperienceCard";
import { ProcessCard } from "./experience/ProcessCard";
import { experienceFeatures, processSteps } from "./experience/experienceData";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const ExperienceSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 px-8 bg-[#002C73]">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Experience the Future of Property Management
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Transform your property portfolio with AI-powered automation and insights
          </p>
        </motion.div>

        {/* Feature Icons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {experienceFeatures.map((feature, index) => (
            <ExperienceCard 
              key={index}
              {...feature}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {processSteps.map((step, index) => (
            <ProcessCard 
              key={index}
              {...step}
              delay={index * 0.2}
            />
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