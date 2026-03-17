import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { promos, GOOGLE_FORM_URL } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Sparkles, ArrowRight, Clock, Check, Gift } from 'lucide-react';
import { Link } from 'react-router-dom';

import celebrationDecor from '@/assets/hero/celebration-decor.jpg';

const Promos = () => {
  const activePromos = promos.filter((p) => p.active);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={celebrationDecor}
            alt="Current Promotions"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/80" />
        </div>

        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full mb-6"
          >
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm text-primary">New Year 2026 Promos</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="font-display text-4xl md:text-6xl"
          >
            Exclusive Packages
          </motion.h1>
        </div>
      </section>

      {/* Promos Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          {activePromos.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {activePromos.map((promo, index) => (
                <motion.div
                  key={promo.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-xl border border-primary/30 bg-card flex flex-col"
                >
                  {/* Image */}
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={promo.image}
                      alt={promo.title}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />

                    {/* Promo Badge */}
                    <div className="absolute top-4 left-4 flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
                      <Gift className="h-4 w-4" />
                      New Year Promo
                    </div>

                    {/* Limited Time */}
                    <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 bg-background/90 backdrop-blur-sm text-xs rounded-full">
                      <Clock className="h-3 w-3 text-primary" />
                      Limited Time
                    </div>

                    {/* Price Badge */}
                    <div className="absolute bottom-4 left-4 px-5 py-3 bg-accent text-accent-foreground text-2xl font-bold rounded-lg shadow-xl">
                      £{promo.price}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col flex-1">
                    <h2 className="font-display text-2xl mb-3">{promo.title}</h2>
                    <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                      {promo.description}
                    </p>

                    {/* Features */}
                    {promo.features && promo.features.length > 0 && (
                      <div className="mb-6">
                        <h4 className="text-xs uppercase tracking-wider text-muted-foreground mb-3">
                          What's Included
                        </h4>
                        <ul className="space-y-2">
                          {promo.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm">
                              <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Add-ons */}
                    {promo.addOns && promo.addOns.length > 0 && (
                      <div className="mb-6 p-4 bg-primary/5 border border-primary/20 rounded-lg">
                        <h4 className="text-xs uppercase tracking-wider text-primary mb-3">
                          {promo.id.includes('chops') ? 'Small Chops Menu' : 'Available Add-ons'}
                        </h4>
                        <ul className="grid grid-cols-2 gap-1">
                          {promo.addOns.map((addon, idx) => (
                            <li key={idx} className="text-xs text-muted-foreground">
                              • {addon}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Note */}
                    {promo.note && (
                      <p className="text-xs text-muted-foreground italic mb-6">
                        {promo.note}
                      </p>
                    )}

                    <div className="mt-auto">
                      {/* CTA */}
                      <Button
                        asChild
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6"
                      >
                        <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
                          Book This Package
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <Sparkles className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h2 className="font-display text-2xl mb-4">No Active Promotions</h2>
              <p className="text-muted-foreground">
                Check back soon for our latest offers and special deals.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Custom Package CTA */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="font-display text-2xl mb-4">Need a Custom Package?</h3>
            <p className="text-muted-foreground mb-6">
              Can't find the perfect package? Contact us to create a bespoke package tailored to your event needs.
            </p>
            <Button
              asChild
              variant="outline"
              className="border-primary/50 hover:border-primary text-foreground hover:bg-primary/10"
            >
              <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
                Request Custom Package
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Promos;
