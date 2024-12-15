interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  image: string;
  bgColor: string;
}

export const ProcessStep = ({ number, title, description, image, bgColor }: ProcessStepProps) => {
  return (
    <div className="relative group">
      <div 
        className="absolute inset-0 rounded-2xl transition-all duration-300 group-hover:opacity-90"
        style={{ backgroundColor: bgColor }}
      />
      <img 
        src={image} 
        alt={title}
        className="w-full h-full object-cover rounded-2xl mix-blend-overlay opacity-50"
      />
      <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-sm rounded-lg px-2 py-1">
        <span className="text-sm font-medium text-white">{number}</span>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-white/90">{description}</p>
      </div>
    </div>
  );
};