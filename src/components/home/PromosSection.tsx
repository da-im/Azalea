import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { promos } from '@/lib/data';
import { Button } from '@/components/ui/button';

export const PromosSection = () => {
  const activePromos = promos.filter((p) => p.active).slice(0, 3);

  if (activePromos.length === 0) return null;

  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm text-primary">New Year 2026 Promos</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl mb-6">
            Current Promotions
          </h2>
          <div className="accent-line" />
        </motion.div>

        {/* Promos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {activePromos.map((promo, index) => (
            <motion.div
              key={promo.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="group relative overflow-hidden rounded-lg border border-primary/20 bg-card flex flex-col"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={promo.image}
                  alt={promo.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                
                {/* Price Badge */}
                <div className="absolute bottom-4 left-4 px-4 py-2 bg-accent text-accent-foreground text-lg font-bold rounded-full shadow-lg">
                  £{promo.price}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display text-xl mb-2">{promo.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {promo.offerDetail}
                </p>
                
                {/* Features Preview */}
                {promo.features && promo.features.length > 0 && (
                  <ul className="text-xs text-muted-foreground mb-4 space-y-1">
                    {promo.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-primary rounded-full" />
                        {feature}
                      </li>
                    ))}
                    {promo.features.length > 3 && (
                      <li className="text-primary">+ {promo.features.length - 3} more</li>
                    )}
                  </ul>
                )}

                <div className="mt-auto">
                  {/* CTA */}
                  <Button
                    asChild
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <Link to="/contact">
                      Book Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to="/promos"
            className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
          >
            View All {promos.filter(p => p.active).length} Packages
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
