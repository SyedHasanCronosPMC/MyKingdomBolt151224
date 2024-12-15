import { motion } from "framer-motion";
import { socialLinks } from "./footerData";

export const FooterSocial = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 mb-8">
      {socialLinks.map((social, index) => (
        <motion.a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-kingdom-primary transition-all duration-300"
        >
          <social.icon className="w-5 h-5" />
          <span className="text-sm font-medium hidden md:inline">{social.label}</span>
        </motion.a>
      ))}
    </div>
  );
};