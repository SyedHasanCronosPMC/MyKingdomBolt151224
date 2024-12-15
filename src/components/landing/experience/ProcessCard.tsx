import { motion } from "framer-motion";

interface ProcessCardProps {
  number: string;
  title: string;
  description: string;
  image: string;
  bgColor: string;
  delay?: number;
}

export const ProcessCard = ({ number, title, description, image, bgColor, delay = 0 }: ProcessCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="relative h-[300px] rounded-2xl overflow-hidden group"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${bgColor}`} />
      <img 
        src={image} 
        alt={title}
        className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50"
      />
      <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-1">
        <span className="text-sm font-medium text-white">{number}</span>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/50 to-transparent">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-white/90">{description}</p>
      </div>
    </motion.div>
  );
};