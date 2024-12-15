import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export const HeaderNav = () => {
  const navigate = useNavigate();

  const scrollToFAQ = () => {
    const faqSection = document.getElementById('faq');
    if (faqSection) {
      faqSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="flex items-center gap-4"
    >
      <Button 
        variant="outline" 
        onClick={scrollToFAQ}
        className="relative group px-6 py-2 h-11 border-2 border-kingdom-primary/30 hover:border-kingdom-primary/60 bg-kingdom-dark/50 text-white hover:text-kingdom-accent transition-all duration-300"
      >
        <span className="relative z-10">FAQ</span>
        <div className="absolute inset-0 bg-gradient-to-r from-kingdom-primary/10 to-kingdom-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </Button>
      
      <Button 
        onClick={() => navigate("/login")}
        className="relative group overflow-hidden px-6 py-2 h-11 bg-gradient-to-r from-kingdom-primary via-kingdom-secondary to-kingdom-accent hover:shadow-lg hover:shadow-kingdom-primary/20 transition-all duration-300"
      >
        <span className="relative z-10 font-semibold">
          Get Started
          <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-kingdom-primary via-kingdom-secondary to-kingdom-accent opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
      </Button>
    </motion.nav>
  );
};