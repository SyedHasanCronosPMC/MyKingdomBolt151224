import { motion } from "framer-motion";
import { footerLinks } from "./footerData";

export const FooterLinks = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {footerLinks.map((section, index) => (
        <motion.div
          key={section.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
        >
          <h4 className="text-lg font-semibold text-white mb-6">
            {section.title}
          </h4>
          <ul className="space-y-4">
            {section.links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-white/70 hover:text-kingdom-primary transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
};