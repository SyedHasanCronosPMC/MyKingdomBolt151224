import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  rating: number;
  quote: string;
  author: {
    name: string;
    title: string;
    location: string;
    avatar: string;
  };
}

export const TestimonialCard = ({ rating, quote, author }: TestimonialCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="h-full p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 relative group hover:bg-white/10 transition-colors duration-300"
    >
      {/* Rating Badge */}
      <div className="absolute -top-3 -right-3 bg-kingdom-primary text-white text-sm font-semibold px-3 py-1 rounded-full">
        {rating}
      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${i < rating ? "text-kingdom-accent fill-kingdom-accent" : "text-white/20"}`}
          />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-white/90 text-lg mb-6 italic">
        "{quote}"
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-kingdom-primary/30">
          <img 
            src={author.avatar} 
            alt={author.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <div className="font-semibold text-white">{author.name}</div>
          <div className="text-sm text-white/60">{author.title}</div>
          <div className="text-sm text-kingdom-primary">{author.location}</div>
        </div>
      </div>
    </motion.div>
  );
};