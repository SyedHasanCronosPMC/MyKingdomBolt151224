import { HeaderNav } from "./HeaderNav";
import { HeaderLogo } from "./HeaderLogo";
import { motion } from "framer-motion";

export const Header = () => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-kingdom-dark/95 via-kingdom-dark/90 to-kingdom-dark/95 backdrop-blur-lg border-b border-kingdom-primary/20 shadow-lg shadow-kingdom-primary/5"
    >
      <div className="container mx-auto px-4">
        <div className="h-20 flex items-center justify-between">
          <HeaderLogo />
          <HeaderNav />
        </div>
      </div>
    </motion.header>
  );
};