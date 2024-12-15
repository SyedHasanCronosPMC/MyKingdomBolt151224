import { Feature } from "./types";
import { motion } from "framer-motion";
import { FeatureIcon } from "./FeatureIcon";
import { FeatureMetric } from "./FeatureMetric";
import { FeatureContent } from "./FeatureContent";
import { FeatureBackground } from "./FeatureBackground";

export const FeatureCard = ({
  icon,
  title,
  description,
  metric,
  bgImage,
  bgColor,
}: Feature) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden rounded-2xl bg-gradient-to-br transition-all duration-300 hover:scale-[1.02] group"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 bg-gradient-to-br ${bgColor}`} />
        <FeatureBackground image={bgImage} />
      </div>

      {/* Content */}
      <div className="relative z-10 p-8">
        <div className="flex justify-between items-start mb-6">
          <FeatureIcon icon={icon} />
          <FeatureMetric value={metric} />
        </div>
        <FeatureContent title={title} description={description} />
      </div>
    </motion.div>
  );
};