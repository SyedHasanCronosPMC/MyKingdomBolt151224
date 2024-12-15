import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQCategoriesProps {
  categories: Array<{
    id: string;
    label: string;
    icon: string;
    questions: Array<{
      question: string;
      answer: string;
    }>;
  }>;
  expandedCategory: string | null;
  onCategoryClick: (id: string) => void;
}

export const FAQCategories = ({ categories, expandedCategory, onCategoryClick }: FAQCategoriesProps) => {
  return (
    <div className="space-y-4">
      {categories.map((category) => (
        <motion.div
          key={category.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden"
        >
          <button
            onClick={() => onCategoryClick(category.id)}
            className={`w-full flex items-center justify-between p-4 rounded-lg text-left transition-all duration-300 ${
              expandedCategory === category.id
                ? "bg-kingdom-primary/20 text-white"
                : "bg-white/5 text-white/80 hover:bg-white/10"
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">{category.icon}</span>
              <span className="text-lg font-medium">{category.label}</span>
            </div>
            <ChevronDown
              className={`w-5 h-5 transition-transform duration-300 ${
                expandedCategory === category.id ? "rotate-180" : ""
              }`}
            />
          </button>

          <AnimatePresence>
            {expandedCategory === category.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="space-y-4 p-4 pt-2">
                  {category.questions.map((faq, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10"
                    >
                      <h3 className="text-lg font-medium text-white mb-2">{faq.question}</h3>
                      <p className="text-white/80 leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
};