import { Crown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { motion } from "framer-motion";

export const HeaderLogo = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      setIsAuthenticated(!!session);
    });
  }, []);

  const handleLogoClick = () => {
    if (isAuthenticated) {
      navigate("/home");
    } else {
      navigate("/");
    }
  };

  return (
    <motion.button
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      onClick={handleLogoClick}
      className="group flex items-center gap-3 hover:opacity-90 transition-all duration-300"
    >
      <div className="relative">
        <Crown className="h-9 w-9 text-kingdom-accent animate-glow" />
        <div className="absolute inset-0 bg-kingdom-accent/20 blur-lg rounded-full animate-pulse" />
      </div>
      <span className="text-2xl font-bold bg-gradient-to-r from-kingdom-primary via-kingdom-secondary to-kingdom-accent bg-clip-text text-transparent group-hover:from-kingdom-accent group-hover:via-kingdom-primary group-hover:to-kingdom-secondary transition-all duration-500">
        MyKingdom
      </span>
    </motion.button>
  );
};