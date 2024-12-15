import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WaitlistDialog } from "./WaitlistDialog";

export const CTASection = () => {
  const [showWaitlist, setShowWaitlist] = useState(false);

  return (
    <section className="py-20 px-8 bg-gradient-to-r from-kingdom-primary to-kingdom-secondary text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Transform Your Property Management?
        </h2>
        <p className="text-xl mb-8 text-white/90">
          Join thousands of property owners who are already saving time and maximizing returns with MyKingdom.ai
        </p>
        <Button 
          size="lg" 
          onClick={() => setShowWaitlist(true)}
          className="bg-white text-kingdom-primary hover:bg-white/90 font-bold py-6 px-8 text-lg shadow-xl hover:shadow-white/20 transition-all duration-300"
        >
          Book Your Free Demo Today <ArrowRight className="ml-2" />
        </Button>
      </div>

      <WaitlistDialog 
        open={showWaitlist} 
        onOpenChange={setShowWaitlist} 
      />
    </section>
  );
};