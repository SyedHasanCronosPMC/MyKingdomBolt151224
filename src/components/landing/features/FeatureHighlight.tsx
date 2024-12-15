import { LucideIcon } from "lucide-react";

interface FeatureHighlightProps {
  icon: LucideIcon;
  title: string;
  description: string;
  iconBgColor: string;
}

export const FeatureHighlight = ({ icon: Icon, title, description, iconBgColor }: FeatureHighlightProps) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div 
        className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
        style={{ backgroundColor: iconBgColor }}
      >
        <Icon className="w-7 h-7 text-white" />
      </div>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-white/80 text-sm leading-relaxed">{description}</p>
    </div>
  );
};