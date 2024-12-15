import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { WaitlistDialog } from "../WaitlistDialog";

export const HeroContent = () => {
  const [showWaitlist, setShowWaitlist] = useState(false);

  return (
    <div className="space-y-8 pt-16 lg:pt-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative group"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-kingdom-primary via-kingdom-secondary to-kingdom-accent rounded-full blur-md group-hover:blur-lg transition-all duration-300"></div>
        <span className="relative inline-block px-6 py-3 rounded-full bg-gradient-to-r from-kingdom-dark/90 to-kingdom-dark/80 text-lg font-semibold border border-kingdom-primary/20 shadow-xl backdrop-blur-sm">
          <span className="bg-gradient-to-r from-kingdom-primary via-kingdom-secondary to-kingdom-accent bg-clip-text text-transparent animate-gradient-flow">
            Welcome to MyKingdom
          </span>
        </span>
      </motion.div>
      
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-kingdom-primary to-kingdom-secondary">
          AI-Powered Property
        </span>
        <br />
        <span className="text-white">
          Management Platform
        </span>
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-xl md:text-2xl text-kingdom-text/80 max-w-2xl leading-relaxed"
      >
        Transform your property management experience with cutting-edge AI technology. 
        Streamline operations, maximize ROI, and deliver exceptional service to your tenants.
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <Button
          size="lg"
          onClick={() => setShowWaitlist(true)}
          className="relative group overflow-hidden px-8 py-6 bg-gradient-to-r from-kingdom-primary via-kingdom-secondary to-kingdom-accent hover:shadow-lg hover:shadow-kingdom-primary/20 transition-all duration-300"
        >
          <span className="relative z-10 text-lg font-semibold">
            Join the Waitlist
            <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-kingdom-primary via-kingdom-secondary to-kingdom-accent opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
        </Button>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="flex items-center space-x-4"
      >
        <div className="flex -space-x-2">
          {[1, 2, 3, 4].map((i) => (
            <div 
              key={i}
              className="w-10 h-10 rounded-full bg-gradient-to-r from-kingdom-primary to-kingdom-secondary p-[2px] shadow-lg hover:scale-105 transition-transform duration-200"
            >
              <div className="w-full h-full rounded-full bg-kingdom-dark flex items-center justify-center">
                <span className="text-xs text-kingdom-text/80">★</span>
              </div>
            </div>
          ))}
        </div>
        <p className="text-base font-medium bg-gradient-to-r from-kingdom-primary to-kingdom-secondary bg-clip-text text-transparent">
          Trusted by 1000+ property managers worldwide
        </p>
      </motion.div>

      <WaitlistDialog 
        open={showWaitlist} 
        onOpenChange={setShowWaitlist} 
      />
    </div>
  );
};