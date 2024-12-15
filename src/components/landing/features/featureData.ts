import { Building2, Clock, Shield, TrendingUp } from "lucide-react";
import type { Feature } from "./types";

export const features: Feature[] = [
  {
    icon: Building2,
    title: "Smart Portfolio Management",
    description: "Leverage AI-powered insights to optimize your property portfolio performance in real-time.",
    metric: "45% ROI Increase",
    bgImage: "/lovable-uploads/301626db-f380-428d-8ad0-c5b2ba823b2b.png",
    bgColor: "from-blue-500/80 to-blue-600/80"
  },
  {
    icon: Clock,
    title: "Automated Excellence",
    description: "Save 15+ hours weekly with intelligent automation for tenant management and maintenance.",
    metric: "60% Time Saved",
    bgImage: "/lovable-uploads/53dbc70b-bc62-46c0-aa67-78ce7a7e4acb.png",
    bgColor: "from-emerald-500/80 to-emerald-600/80"
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description: "Bank-level encryption and compliance measures to protect your valuable property data.",
    metric: "99.9% Uptime",
    bgImage: "/lovable-uploads/630eaf05-f528-45e4-b54f-1fc8e034637f.png",
    bgColor: "from-purple-500/80 to-purple-600/80"
  },
  {
    icon: TrendingUp,
    title: "Revenue Maximization",
    description: "Boost property returns by 23% with predictive analytics and market insights.",
    metric: "23% Higher Returns",
    bgImage: "/lovable-uploads/d13ae473-1fa7-4510-8484-f4658a03a62d.png",
    bgColor: "from-orange-500/80 to-orange-600/80"
  }
];