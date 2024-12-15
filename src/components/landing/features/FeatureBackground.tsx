interface FeatureBackgroundProps {
  image: string;
}

export const FeatureBackground = ({ image }: FeatureBackgroundProps) => {
  return (
    <div 
      className="absolute inset-0 opacity-50 mix-blend-overlay"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    />
  );
};