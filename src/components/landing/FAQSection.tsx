import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { FAQCategories } from "./faq/FAQCategories";
import { faqData } from "./faq/faqData";

export const FAQSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedCategory, setExpandedCategory] = useState<string | null>("getting-started");

  const filteredFAQs = searchQuery
    ? faqData.flatMap(category =>
        category.questions.filter(q =>
          q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          q.answer.toLowerCase().includes(searchQuery.toLowerCase())
        ).map(q => ({ ...q, categoryId: category.id }))
      )
    : [];

  return (
    <section id="faq" className="py-20 px-8 bg-gradient-to-b from-[#001B44] to-[#002C73]">
      <div className="max-w-3xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-white/80">
            Everything you need to know about MyKingdom
          </p>
        </motion.div>

        {/* Search Bar */}
        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
          <Input
            type="text"
            placeholder="Search questions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-14 pl-12 bg-white/5 border-white/10 text-lg text-white placeholder:text-white/40 focus:border-kingdom-primary/50 focus:ring-1 focus:ring-kingdom-primary/50"
          />
        </div>

        {/* Search Results or Categories */}
        {searchQuery ? (
          <div className="space-y-4">
            {filteredFAQs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10"
              >
                <h3 className="text-lg font-medium text-white mb-2">{faq.question}</h3>
                <p className="text-white/80">{faq.answer}</p>
              </motion.div>
            ))}
            {filteredFAQs.length === 0 && (
              <div className="text-center text-white/60 py-8">
                No questions found matching your search.
              </div>
            )}
          </div>
        ) : (
          <FAQCategories
            categories={faqData}
            expandedCategory={expandedCategory}
            onCategoryClick={setExpandedCategory}
          />
        )}
      </div>
    </section>
  );
};