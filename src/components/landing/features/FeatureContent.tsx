interface FeatureContentProps {
  title: string;
  description: string;
}

export const FeatureContent = ({ title, description }: FeatureContentProps) => {
  return (
    <div className="mt-auto">
      <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
      <p className="text-white/90 text-lg leading-relaxed">{description}</p>
    </div>
  );
};