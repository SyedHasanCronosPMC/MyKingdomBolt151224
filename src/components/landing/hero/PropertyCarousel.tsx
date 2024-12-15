import { useEffect } from "react";
import { properties } from "./propertyData";
import { PropertyCard } from "./PropertyCard";
import useEmblaCarousel from "embla-carousel-react";
import AutoPlay from "embla-carousel-autoplay";

export const PropertyCarousel = () => {
  const autoplayOptions = {
    delay: 4000,
    stopOnInteraction: false,
    rootNode: (emblaRoot: HTMLElement) => emblaRoot.parentElement,
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: "start",
      skipSnaps: false,
      dragFree: true
    },
    [AutoPlay(autoplayOptions)]
  );

  return (
    <div className="relative w-full overflow-hidden rounded-xl">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {properties.map((property) => (
            <div 
              key={property.id} 
              className="flex-[0_0_100%] min-w-0 pl-4 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
            >
              <PropertyCard {...property} />
            </div>
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
        <div className="h-full bg-kingdom-primary animate-progress"></div>
      </div>
    </div>
  );
};