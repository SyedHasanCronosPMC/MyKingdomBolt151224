import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

interface FAQ {
  question: string;
  answer: string;
  categoryId: string;
}

interface FAQAccordionProps {
  faqs: FAQ[];
}

export const FAQAccordion = ({ faqs }: FAQAccordionProps) => {
  return (
    <Accordion type="single" collapsible className="space-y-4">
      {faqs.map((faq, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <AccordionItem
            value={`item-${index}`}
            className="border border-white/10 rounded-lg bg-white/5 backdrop-blur-sm px-6 overflow-hidden group hover:bg-white/10 transition-colors duration-300"
          >
            <AccordionTrigger className="text-lg md:text-xl font-medium text-white hover:text-kingdom-primary text-left py-6">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-base md:text-lg text-white/80 leading-relaxed pb-6">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        </motion.div>
      ))}
    </Accordion>
  );
};