import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

import safariBirthday1 from '@/assets/gallery/safari-birthday-1.jpg';
import weddingReception from '@/assets/gallery/wedding-reception.jpg';
import babyShowerBloom from '@/assets/gallery/baby-shower-bloom.jpg';
import goldBirthday from '@/assets/gallery/gold-birthday.jpg';

const galleryImages = [
  { src: safariBirthday1, title: "Safari Themed Birthday", type: 'Birthday', price: 450 },
  { src: weddingReception, title: 'Elegant Wedding Reception', type: 'Wedding', price: 1200 },
  { src: babyShowerBloom, title: 'Beautiful Baby Shower', type: 'Baby Shower', price: 380 },
  { src: goldBirthday, title: 'Gold & Black Celebration', type: 'Birthday', price: 520 },
];

export const GalleryPreview = () => {
  return (
    <section className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">
            Our Work
          </p>
          <h2 className="font-display text-3xl md:text-5xl mb-6">
            Featured Projects
          </h2>
          <div className="accent-line" />
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {galleryImages.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                <span className="text-xs tracking-[0.2em] uppercase text-primary mb-2">
                  {item.type}
                </span>
                <h3 className="font-display text-xl md:text-2xl text-center px-6">
                  {item.title}
                </h3>
                <div className="mt-3 px-4 py-2 bg-primary/90 backdrop-blur-sm rounded-full">
                  <span className="text-primary-foreground font-semibold">
                    From £{item.price.toLocaleString()}
                  </span>
                </div>
                <div className="mt-3 p-2 rounded-full bg-background/30 backdrop-blur-sm">
                  <Eye className="h-4 w-4 text-foreground" />
                </div>
              </div>

              {/* Badge */}
              <div className="absolute top-4 right-4 px-3 py-1 bg-background/80 backdrop-blur-sm rounded-full text-xs">
                {item.type}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link to="/gallery">
              View Full Gallery
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
