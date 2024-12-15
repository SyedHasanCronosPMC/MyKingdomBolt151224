interface FeatureMetricProps {
  value: string;
}

export const FeatureMetric = ({ value }: FeatureMetricProps) => {
  return (
    <div className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm">
      <span className="text-sm font-medium text-white">{value}</span>
    </div>
  );
};