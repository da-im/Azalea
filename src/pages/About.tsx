import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { Star, Heart, Award, Users } from 'lucide-react';

import weddingVenue from '@/assets/hero/wedding-venue.jpg';

const values = [
  {
    icon: Star,
    title: 'Excellence',
    description: 'We pursue perfection in every detail, ensuring each event exceeds expectations.',
  },
  {
    icon: Heart,
    title: 'Passion',
    description: 'Our love for creating beautiful spaces drives everything we do.',
  },
  {
    icon: Award,
    title: 'Quality',
    description: 'Premium materials, skilled craftsmanship, and attention to detail.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We work closely with you to bring your unique vision to life.',
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={weddingVenue}
            alt="Azalea Affairs"
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
            Our Story
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="font-display text-4xl md:text-6xl"
          >
            About Azalea Affairs
          </motion.h1>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="font-display text-3xl md:text-4xl mb-8">
                Creating Unforgettable <span className="text-primary">Moments</span>
              </h2>
              <div className="accent-line mb-8" />
              
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Azalea Affairs was born from a passion for transforming ordinary spaces into 
                  extraordinary experiences. Based in the United Kingdom, we specialise in luxury 
                  event decoration, planning, and rentals that leave lasting impressions.
                </p>
                <p>
                  Our team of dedicated professionals brings together creativity, precision, and 
                  an unwavering commitment to excellence. From intimate gatherings to grand 
                  celebrations, we approach each event with fresh eyes and boundless enthusiasm.
                </p>
                <p>
                  We believe that every event tells a story, and our role is to craft the 
                  perfect setting for your narrative to unfold. With meticulous attention to 
                  detail and a deep understanding of design principles, we create environments 
                  that captivate and inspire.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">
              What Guides Us
            </p>
            <h2 className="font-display text-3xl md:text-4xl">Our Values</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <value.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-display text-xl mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <blockquote className="font-display text-2xl md:text-4xl italic leading-relaxed text-foreground/90">
              "We don't just decorate spaces—we create <span className="text-primary">experiences</span> that 
              resonate with emotion, elegance, and unforgettable beauty."
            </blockquote>
            <div className="mt-8">
              <div className="w-16 h-px bg-primary mx-auto" />
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
