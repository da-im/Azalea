import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Send, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import weddingVenue from "@/assets/hero/wedding-venue.jpg";
import corporateGala from "@/assets/hero/corporate-gala.jpg";
import celebrationDecor from "@/assets/hero/celebration-decor.jpg";

const heroImages = [
  { src: weddingVenue, alt: "Luxury wedding reception" },
  { src: corporateGala, alt: "Corporate gala event" },
  { src: celebrationDecor, alt: "Birthday celebration" },
];

export const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % heroImages.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 8000); // 8 seconds per image
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Images with Cinematic Transition */}
      <div className="absolute inset-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1.05 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 1.5, ease: "easeInOut" },
              scale: { duration: 8, ease: "linear" },
            }}
            className="absolute inset-0"
          >
            <img
              src={heroImages[currentIndex].src}
              alt={heroImages[currentIndex].alt}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Dark Overlay */}
        <div className="hero-overlay absolute inset-0 z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-sm md:text-base tracking-[0.3em] uppercase text-foreground/70 mb-6"
          >
            Premium Event Decoration & Planning
          </motion.p>

          {/* Main Headline */}
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl leading-tight mb-6 text-glow">
            Where Elegance <br className="hidden md:block" />
            <span className="text-primary">Meets Experience</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-10 font-light">
            Premium event planning, decoration, and rentals in the UK. Creating
            unforgettable moments with unparalleled artistry.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base group animate-pulse-glow"
            >
              <Link to="/contact">
                <Send className="mr-2 h-5 w-5" />
                Book a Paid Consultation
              </Link>
            </Button>
            
          </div>
        </motion.div>

        {/* Image Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3"
        >
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-12 h-1 rounded-full transition-all duration-500 ${
                index === currentIndex
                  ? "bg-primary w-16"
                  : "bg-foreground/30 hover:bg-foreground/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
