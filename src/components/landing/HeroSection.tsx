import { HeroContent } from "./hero/HeroContent";
import { VideoSection } from "./hero/VideoSection";
import { PropertyCarousel } from "./hero/PropertyCarousel";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex items-center bg-kingdom-dark pt-20 pb-16">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-kingdom-primary/10 to-kingdom-secondary/10 animate-gradient-flow"></div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="flex flex-wrap items-center -mx-4">
          {/* Left Column */}
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <HeroContent />
          </div>
          
          {/* Right Column */}
          <div className="w-full lg:w-1/2 px-4">
            <div className="relative">
              <VideoSection />
              <div className="mt-8">
                <PropertyCarousel />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-kingdom-primary/20 rounded-full filter blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-kingdom-secondary/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};