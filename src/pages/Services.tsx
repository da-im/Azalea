import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { services } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Check, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

import weddingVenue from '@/assets/hero/wedding-venue.jpg';
import celebrationDecor from '@/assets/hero/celebration-decor.jpg';
import corporateGala from '@/assets/hero/corporate-gala.jpg';

const serviceImages: Record<string, string> = {
  'event-planning': weddingVenue,
  'event-decoration': celebrationDecor,
  'rentals': corporateGala,
};

const serviceFeatures: Record<string, string[]> = {
  'event-planning': [
    'Full event coordination',
    'Venue sourcing & liaison',
    'Vendor management',
    'Timeline & logistics planning',
    'On-the-day coordination',
    'Budget management',
  ],
  'event-decoration': [
    'Custom design concepts',
    'Balloon installations',
    'Floral arrangements',
    'Table styling',
    'Backdrop design',
    'Themed setups',
  ],
  'rentals': [
    'Premium furniture',
    'Decorative props',
    'Lighting equipment',
    'Linens & draping',
    'Centrepieces',
    'Signage & displays',
  ],
};

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={corporateGala}
            alt="Our Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/80" />
        </div>
        
        <div className="relative z-10 text-center px-6">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-sm tracking-[0.3em] uppercase text-primary mb-4"
          >
            What We Offer
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="font-display text-4xl md:text-6xl"
          >
            Our Services
          </motion.h1>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                    <img
                      src={serviceImages[service.id]}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h2 className="font-display text-3xl md:text-4xl mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {serviceFeatures[service.id]?.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button
                    asChild
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <Link to="/contact">
                      <Send className="mr-2 h-4 w-4" />
                      Book Consultation
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Note */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-muted-foreground text-sm">
              * Final quote provided after a paid consultation where we discuss your specific 
              requirements, venue, and vision in detail.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
