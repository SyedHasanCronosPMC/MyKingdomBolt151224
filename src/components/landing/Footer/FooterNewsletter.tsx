import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export const FooterNewsletter = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for subscribing!",
      description: "You'll receive our latest updates and news.",
    });
    setEmail("");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-xl mx-auto text-center"
    >
      <h3 className="text-2xl font-bold text-white mb-3">
        Stay Updated with MyKingdom
      </h3>
      <p className="text-lg text-white/70 mb-6">
        Subscribe to our newsletter for the latest property management insights
      </p>
      
      <form onSubmit={handleSubmit} className="flex gap-3 max-w-md mx-auto">
        <div className="relative flex-1">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full pl-12 bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-kingdom-primary/50 focus:ring-1 focus:ring-kingdom-primary/50"
            required
          />
        </div>
        <Button 
          type="submit"
          className="bg-gradient-to-r from-kingdom-primary to-kingdom-secondary text-white hover:shadow-lg hover:shadow-kingdom-primary/20 transition-all duration-300"
        >
          Subscribe
        </Button>
      </form>
    </motion.div>
  );
};