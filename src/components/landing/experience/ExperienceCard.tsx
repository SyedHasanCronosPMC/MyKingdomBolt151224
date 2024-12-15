import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ExperienceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  iconColor: string;
  delay?: number;
}

export const ExperienceCard = ({ icon: Icon, title, description, iconColor, delay = 0 }: ExperienceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="flex flex-col items-center text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
    >
      <div className={`w-14 h-14 ${iconColor} rounded-xl flex items-center justify-center mb-4`}>
        <Icon className="w-7 h-7 text-white" />
      </div>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-white/80 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
};