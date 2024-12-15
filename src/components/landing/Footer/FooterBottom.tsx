import { motion } from "framer-motion";

export const FooterBottom = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60"
    >
      <p>© {currentYear} MyKingdom.ai. All rights reserved.</p>
      <div className="flex flex-wrap justify-center gap-6">
        <a href="#" className="hover:text-kingdom-primary transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-kingdom-primary transition-colors">Terms of Service</a>
        <a href="#" className="hover:text-kingdom-primary transition-colors">Cookie Policy</a>
        <a href="#" className="hover:text-kingdom-primary transition-colors">Sitemap</a>
      </div>
    </motion.div>
  );
};