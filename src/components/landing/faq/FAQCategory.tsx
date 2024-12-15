import { motion } from "framer-motion";

interface FAQCategoryProps {
  id: string;
  label: string;
  icon: string;
  description: string;
  isSelected: boolean;
  onClick: () => void;
}

export const FAQCategory = ({ id, label, icon, description, isSelected, onClick }: FAQCategoryProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`
        w-full text-left p-4 rounded-xl transition-all duration-300
        ${isSelected 
          ? "bg-kingdom-primary/20 border-kingdom-primary" 
          : "bg-white/5 border-white/10 hover:bg-white/10"
        }
        border backdrop-blur-sm
      `}
    >
      <div className="flex items-center gap-3 mb-2">
        <span className="text-2xl">{icon}</span>
        <span className="text-lg font-semibold text-white">{label}</span>
      </div>
      <p className="text-sm text-white/60 pl-10">{description}</p>
    </motion.button>
  );
};