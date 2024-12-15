import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { motion } from "framer-motion";

interface WaitlistFormProps {
  onSuccess?: () => void;
}

export const WaitlistForm = ({ onSuccess }: WaitlistFormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    country: "",
    mobileNumber: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error } = await supabase.from("waitlist").insert([
        {
          full_name: formData.fullName,
          email: formData.email,
          country: formData.country,
          mobile_number: formData.mobileNumber,
        },
      ]);

      if (error) throw error;

      toast({
        title: "Success!",
        description: "You've been added to our waitlist. We'll be in touch soon!",
      });
      
      onSuccess?.();
      
      setFormData({
        fullName: "",
        email: "",
        country: "",
        mobileNumber: "",
      });
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "Something went wrong. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-2"
      >
        <Label htmlFor="fullName" className="text-white">Full Name</Label>
        <Input
          id="fullName"
          required
          value={formData.fullName}
          onChange={(e) =>
            setFormData({ ...formData, fullName: e.target.value })
          }
          className="futuristic-input"
        />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="space-y-2"
      >
        <Label htmlFor="email" className="text-white">Email</Label>
        <Input
          id="email"
          type="email"
          required
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
          className="futuristic-input"
        />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="space-y-2"
      >
        <Label htmlFor="country" className="text-white">Country</Label>
        <Input
          id="country"
          required
          value={formData.country}
          onChange={(e) =>
            setFormData({ ...formData, country: e.target.value })
          }
          className="futuristic-input"
        />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="space-y-2"
      >
        <Label htmlFor="mobileNumber" className="text-white">Mobile Number</Label>
        <Input
          id="mobileNumber"
          required
          value={formData.mobileNumber}
          onChange={(e) =>
            setFormData({ ...formData, mobileNumber: e.target.value })
          }
          className="futuristic-input"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-kingdom-accent via-kingdom-primary to-kingdom-secondary text-white font-semibold py-4 hover:shadow-lg transition-all duration-300"
          disabled={isLoading}
        >
          {isLoading ? "Submitting..." : "Join Waitlist"}
        </Button>
      </motion.div>
    </form>
  );
};