import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { X } from 'lucide-react';

import event1 from '@/assets/portfolio/event-1.jpeg';
import event2 from '@/assets/portfolio/event-2.jpeg';
import event3 from '@/assets/portfolio/event-3.jpeg';
import event4 from '@/assets/portfolio/event-4.jpeg';
import weddingVenue from '@/assets/hero/wedding-venue.jpg';
import celebrationDecor from '@/assets/hero/celebration-decor.jpg';
import corporateGala from '@/assets/hero/corporate-gala.jpg';

import birthdayArtParty from '@/assets/gallery/birthday-art-party.jpg';
import safariBirthday1 from '@/assets/gallery/safari-birthday-1.jpg';
import safariBirthday2 from '@/assets/gallery/safari-birthday-2.jpg';
import babyShowerBloom from '@/assets/gallery/baby-shower-bloom.jpg';
import princessBirthday from '@/assets/gallery/princess-birthday.jpg';
import weddingReception from '@/assets/gallery/wedding-reception.jpg';
import enchantedReception from '@/assets/gallery/enchanted-reception.jpg';
import goldBlackParty from '@/assets/gallery/gold-black-party.jpg';
import proposalSetup from '@/assets/gallery/proposal-setup.jpg';
import goldBirthday from '@/assets/gallery/gold-birthday.jpg';
import stageLight from '@/assets/gallery/180W 60LED PAR Stage light - £25.jpg';
import rug  from '@/assets/gallery/Bohemian vintage hollow out semicircle rug - £10.jpg';
import clrstand  from '@/assets/gallery/Clear cake stand £25.jpg';
import gldstand  from '@/assets/gallery/Gold cake stand - £20.jpg';
import goldmats  from '@/assets/gallery/Gold placemats - £1.jpg';
import centrepieces from '@/assets/gallery/Gold_crystal centre pieces - £10 each.jpg';
import Ballonhoop from '@/assets/gallery/Golden ballon hoop - £22.jpg';
import shelf from '@/assets/gallery/Rustic themed display shelf - £40.jpg';
import Tags  from '@/assets/gallery/Table tags - £1.jpg';
import WallWasher from '@/assets/gallery/336 LED stage wall washer - £35.jpg';



const galleryItems = [
  { id: '1', src: safariBirthday1, title: "Safari Themed birthday", eventType: 'Birthday', serviceType: 'Full Service' },
  { id: '2', src: safariBirthday2, title: 'Single sailboard, themed setup with three coloured ballons - £250', eventType: 'Birthday', serviceType: 'Decoration' },
  { id: '3', src: weddingReception, title: 'Elegant Wedding Reception', eventType: 'Wedding', serviceType: 'Full Service' },
  { id: '4', src: enchantedReception, title: 'Enchanted Forest Reception', eventType: 'Wedding', serviceType: 'Full Service' },
  { id: '5', src: babyShowerBloom, title: 'Circle stand with one sailboard, three coloured balloons and accessories - £380', eventType: 'Baby Shower', serviceType: 'Decoration' },
  { id: '6', src: princessBirthday, title: 'Bow themed birthday with 2 layered cake from - £450', eventType: 'Birthday', serviceType: 'Full Service' },
  { id: '7', src: proposalSetup, title: 'Will You Marry Me? - Proposal Setup', eventType: 'Proposal', serviceType: 'Decoration' },
  { id: '8', src: goldBirthday, title: 'Gold & Black Birthday Celebration', eventType: 'Birthday', serviceType: 'Decoration' },
  { id: '9', src: goldBlackParty, title: 'Elegant Black & Gold Party', eventType: 'Birthday', serviceType: 'Decoration' },
  { id: '10', src: birthdayArtParty, title: 'Art Party Birthday', eventType: 'Birthday', serviceType: 'Decoration' },
  { id: '11', src: event4, title: 'Safari-Themed Birthday', eventType: 'Birthday', serviceType: 'Decoration' },
  { id: '12', src: event2, title: 'Single sailboard,three coloured balloons with accessories - £230', eventType: 'Birthday', serviceType: 'Decoration' },
  { id: '13', src: weddingVenue, title: 'Classic Wedding Venue', eventType: 'Wedding', serviceType: 'Full Service' },
  { id: '14', src: event3, title: '2m x 3m themed setup - from £600', eventType: 'Birthday', serviceType: 'Decoration' },
  { id: '15', src: corporateGala, title: 'Corporate Gala Night', eventType: 'Corporate', serviceType: 'Full Service' },
  { id: '16', src: event1, title: 'Three coloured themed balloon setup without sailboard - from £80', eventType: 'Birthday', serviceType: 'Decoration' },
  { id: '17', src: celebrationDecor, title: 'Luxury Birthday Setup', eventType: 'Birthday', serviceType: 'Decoration' },
  { id: '18', src: stageLight, title: '180W 60LED PAR Stage light - £25.jpg', eventType: 'Rentals', serviceType: 'Decoration' },
  { id: '19', src: rug, title: 'Bohemian vintage hollow out semicircle rug - £10', eventType: 'Rentals', serviceType: 'Decoration' },
  { id: '20', src: clrstand, title: 'Clear cake stand £25', eventType: 'Rentals', serviceType: 'Decoration' },
  { id: '21', src: gldstand, title: 'Gold cake stand - £20.jpg', eventType: 'Rentals', serviceType: 'Decoration' },
  { id: '22', src: centrepieces, title: 'Gold_crystal centre pieces - £10 each', eventType: 'Rentals', serviceType: 'Decoration' },
  { id: '23', src: Ballonhoop, title: 'Golden ballon hoop - £22', eventType: 'Rentals', serviceType: 'Decoration' },
  { id: '24', src: shelf, title: 'Rustic themed display shelf - £40', eventType: 'Rentals', serviceType: 'Decoration' },
  { id: '25', src: Tags, title: 'Table tags - £1', eventType: 'Rentals', serviceType: 'Decoration' },
  { id: '26', src: WallWasher, title: '336 LED stage wall washer - £35', eventType: 'Rentals', serviceType: 'Decoration' },
  { id: '27', src: goldmats, title: 'Gold placemats - £1', eventType: 'Rentals', serviceType: 'Decoration' },


];

const eventTypes = ['All', 'Birthday', 'Wedding', 'Baby Shower', 'Proposal', 'Rentals', 'Corporate'];

const Gallery = () => {
  const [filter, setFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);

  const filteredItems = filter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.eventType === filter);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={weddingReception}
            alt="Our Gallery"
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
            Our Work
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="font-display text-4xl md:text-6xl"
          >
            Gallery
          </motion.h1>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-card border-b border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {eventTypes.map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-6 py-2 text-sm rounded-full transition-all duration-300 ${
                  filter === type
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  onClick={() => setSelectedImage(item)}
                  className="group relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer"
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="text-xs tracking-[0.2em] uppercase text-primary">
                      {item.eventType}
                    </span>
                    <h3 className="font-display text-lg mt-1">{item.title}</h3>
                  </div>

                  {/* Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-background/80 backdrop-blur-sm rounded-full text-xs">
                    {item.serviceType}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-6"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-2 hover:bg-muted rounded-full transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl w-full"
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              <div className="mt-4 text-center">
                <span className="text-sm text-primary tracking-wider uppercase">
                  {selectedImage.eventType}
                </span>
                <h3 className="font-display text-2xl mt-1">{selectedImage.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Gallery;
