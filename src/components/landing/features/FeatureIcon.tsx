import { LucideIcon } from "lucide-react";

interface FeatureIconProps {
  icon: LucideIcon;
}

export const FeatureIcon = ({ icon: Icon }: FeatureIconProps) => {
  return (
    <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm">
      <Icon className="w-6 h-6 text-white" />
    </div>
  );
};