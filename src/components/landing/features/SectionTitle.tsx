interface SectionTitleProps {
  title: string;
  subtitle: string;
}

export const SectionTitle = ({ title, subtitle }: SectionTitleProps) => {
  return (
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
        {title}
      </h2>
      <p className="text-xl text-white/80 max-w-3xl mx-auto">
        {subtitle}
      </p>
    </div>
  );
};