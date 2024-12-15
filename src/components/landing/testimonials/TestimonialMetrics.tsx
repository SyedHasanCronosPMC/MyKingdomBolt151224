import { motion } from "framer-motion";
import { Star, Users, Globe } from "lucide-react";

const metrics = [
  {
    icon: Star,
    value: "4.9/5",
    label: "Rating",
    color: "text-kingdom-accent"
  },
  {
    icon: Users,
    value: "10,000+",
    label: "Happy Users",
    color: "text-kingdom-primary"
  },
  {
    icon: Globe,
    value: "50+",
    label: "Countries",
    color: "text-kingdom-secondary"
  }
];

export const TestimonialMetrics = () => {
  return (
    <div className="flex flex-wrap justify-center gap-8">
      {metrics.map((metric, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-xl px-6 py-3"
        >
          <metric.icon className={`w-5 h-5 ${metric.color}`} />
          <div>
            <div className="text-lg font-bold text-white">{metric.value}</div>
            <div className="text-sm text-white/60">{metric.label}</div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};