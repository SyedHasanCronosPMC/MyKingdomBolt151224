import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import AutoPlay from "embla-carousel-autoplay";
import { Star } from "lucide-react";
import { testimonials } from "./testimonials/testimonialsData";
import { TestimonialCard } from "./testimonials/TestimonialCard";
import { TestimonialMetrics } from "./testimonials/TestimonialMetrics";

export const TestimonialsSection = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: "center",
      skipSnaps: false,
      startIndex: 0
    },
    [AutoPlay({ delay: 5000, stopOnInteraction: false })]
  );

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on('select', () => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
      });
    }
  }, [emblaApi]);

  return (
    <section className="py-20 px-8 bg-gradient-to-b from-[#001B44] to-[#002C73]">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-white/80">
            Join thousands of satisfied property managers worldwide
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative mb-12">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="flex-[0_0_100%] min-w-0 pl-4 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
                >
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === selectedIndex 
                    ? "bg-kingdom-primary w-8" 
                    : "bg-white/20 hover:bg-white/40"
                }`}
                onClick={() => emblaApi?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Metrics */}
        <TestimonialMetrics />
      </div>
    </section>
  );
};