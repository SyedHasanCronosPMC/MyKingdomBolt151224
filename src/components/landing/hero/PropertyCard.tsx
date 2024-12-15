import { AspectRatio } from "@/components/ui/aspect-ratio";

interface PropertyCardProps {
  image: string;
  title: string;
  location: string;
  price: string;
}

export const PropertyCard = ({ image, title, location, price }: PropertyCardProps) => {
  return (
    <div className="group relative">
      <AspectRatio ratio={4 / 3} className="overflow-hidden rounded-lg">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
          <div className="flex justify-between items-center">
            <span className="text-sm text-white/90">{location}</span>
            <span className="text-sm font-medium text-kingdom-accent">{price}</span>
          </div>
        </div>
      </AspectRatio>
    </div>
  );
};