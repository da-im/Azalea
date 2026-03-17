// Static data - ready to be replaced with CMS (Sanity.io) integration
import encorePackageImg from '@/assets/promos/encore-package.png';
import decorCakeImg from '@/assets/promos/decor-cake.png';
import decorCakeChopsImg from '@/assets/promos/decor-cake-chops.png';
import mollisPackageImg from '@/assets/promos/mollis-package.png';
import mollisCakeChopsImg from '@/assets/promos/mollis-cake-chops.png';

import weddingVenueImg from '@/assets/hero/wedding-venue.jpg';
import corporateGalaImg from '@/assets/hero/corporate-gala.jpg';
import celebrationDecorImg from '@/assets/hero/celebration-decor.jpg';

import event1 from '@/assets/portfolio/event-1.jpeg';
import event2 from '@/assets/portfolio/event-2.jpeg';
import event3 from '@/assets/portfolio/event-3.jpeg';
import event4 from '@/assets/portfolio/event-4.jpeg';

import birthdayBalloonArch from '@/assets/gallery/birthday-balloon-arch.jpg';
import artPartyActivity from '@/assets/gallery/art-party-activity.jpg';
import traditionalBride from '@/assets/gallery/traditional-bride.jpg';
import pinkReceptionHall from '@/assets/gallery/pink-reception-hall.jpg';
import traditionalAccessories from '@/assets/gallery/traditional-accessories.jpg';
import traditionalCouple from '@/assets/gallery/traditional-couple.jpg';
import weddingFirstDance from '@/assets/gallery/wedding-first-dance.jpg';
import elegantBride from '@/assets/gallery/elegant-bride.jpg';

export interface Service {
  id: string;
  title: string;
  description: string;
  startingPrice: number;
  image: string;
  featured: boolean;
  features?: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  eventType: string;
  serviceType: string;
  images: string[];
  promoTag?: string;
}

export interface Promo {
  id: string;
  title: string;
  description: string;
  offerDetail: string;
  price: number;
  image: string;
  active: boolean;
  features?: string[];
  addOns?: string[];
  note?: string;
}

export interface HeroImage {
  id: string;
  src: string;
  alt: string;
  order: number;
  active: boolean;
}

export interface GlobalSettings {
  email: string;
  phone: string;
  address: string;
  businessHours: string;
}

// Hero Images
export const heroImages: HeroImage[] = [
  {
    id: '1',
    src: weddingVenueImg,
    alt: 'Luxury wedding reception with crystal chandeliers',
    order: 1,
    active: true,
  },
  {
    id: '2',
    src: corporateGalaImg,
    alt: 'Elegant corporate gala with purple accent lighting',
    order: 2,
    active: true,
  },
  {
    id: '3',
    src: celebrationDecorImg,
    alt: 'Stunning birthday celebration setup',
    order: 3,
    active: true,
  },
];

// Services
export const services: Service[] = [
  {
    id: 'event-planning',
    title: 'Event Planning',
    description: 'From concept to execution, we craft seamless experiences that exceed expectations. Our meticulous planning ensures every detail aligns with your vision.',
    startingPrice: 500,
    image: weddingVenueImg,
    featured: true,
  },
  {
    id: 'event-decoration',
    title: 'Event Decoration',
    description: 'Transform any space into an unforgettable setting. Our bespoke decorations combine artistry with elegance to create stunning visual narratives.',
    startingPrice: 300,
    image: celebrationDecorImg,
    featured: true,
  },
  {
    id: 'rentals',
    title: 'Premium Rentals',
    description: 'Access our curated collection of luxury décor items, furniture, and accessories. From statement pieces to subtle accents.',
    startingPrice: 150,
    image: corporateGalaImg,
    featured: true,
  },
];

// Gallery Items
export const galleryItems: GalleryItem[] = [
  {
    id: '1',
    title: 'Safari-Themed Birthday Celebration',
    eventType: 'Birthday',
    serviceType: 'Event Decoration',
    images: [event4],
  },
  {
    id: '2',
    title: 'Elegant Wine-Themed Adult Party',
    eventType: 'Birthday',
    serviceType: 'Event Decoration',
    images: [event2],
  },
  {
    id: '3',
    title: 'Travel Adventure Birthday',
    eventType: 'Birthday',
    serviceType: 'Full Service',
    images: [event3],
  },
  {
    id: '4',
    title: 'Construction Theme Party',
    eventType: 'Birthday',
    serviceType: 'Event Decoration',
    images: [event1],
  },
  {
    id: '5',
    title: 'Red & White Birthday Balloon Arch',
    eventType: 'Birthday',
    serviceType: 'Event Decoration',
    images: [birthdayBalloonArch],
  },
  {
    id: '6',
    title: 'Kids Art Party Activity',
    eventType: 'Birthday',
    serviceType: 'Full Service',
    images: [artPartyActivity],
  },
  {
    id: '7',
    title: 'Traditional Bridal Elegance',
    eventType: 'Wedding',
    serviceType: 'Bridal Styling',
    images: [traditionalBride],
  },
  {
    id: '8',
    title: 'Pink Paradise Reception Hall',
    eventType: 'Wedding',
    serviceType: 'Event Decoration',
    images: [pinkReceptionHall],
  },
  {
    id: '9',
    title: 'Traditional Wedding Accessories',
    eventType: 'Wedding',
    serviceType: 'Styling',
    images: [traditionalAccessories],
  },
  {
    id: '10',
    title: 'Traditional Couple Portrait',
    eventType: 'Wedding',
    serviceType: 'Styling',
    images: [traditionalCouple],
  },
  {
    id: '11',
    title: 'Magical First Dance',
    eventType: 'Wedding',
    serviceType: 'Event Decoration',
    images: [weddingFirstDance],
  },
  {
    id: '12',
    title: 'Golden Bridal Portrait',
    eventType: 'Wedding',
    serviceType: 'Bridal Styling',
    images: [elegantBride],
  },
];

// Promos - New Year 2026 Packages
export const promos: Promo[] = [
  {
    id: 'encore-package',
    title: 'Encore Package',
    description: 'New Year Promo 2026 - Perfect starter package for your celebration',
    offerDetail: 'Complete decoration setup with add-ons',
    price: 180,
    image: encorePackageImg,
    active: true,
    features: [
      'Single sailboard/circle stand',
      'Two colour balloon',
      '1-Themed accessories',
      'Cake stand',
    ],
    addOns: [
      'Ambience light (for backdrop)',
      'Extra coloured balloon',
      'Four Helium inflated balloons',
      'Number light',
      'Table runners and place mat (5 tables max)',
    ],
    note: 'Choose any 2 add-on items. Travel cost not included. T&Cs apply.',
  },
  {
    id: 'decor-cake',
    title: 'Decor & Cake Package',
    description: 'New Year Promo 2026 - Encore Package with a delicious 6-inch cake',
    offerDetail: 'Encore Package + 6-inch cake with 2 flavours and cake topper',
    price: 240,
    image: decorCakeImg,
    active: true,
    features: [
      'Full Encore Package included',
      '6-inch cake',
      'Any two flavours',
      '1 cake topper',
    ],
    note: 'Travel cost not included. T&Cs apply.',
  },
  {
    id: 'decor-cake-chops',
    title: 'Decor, Cake & Small Chops',
    description: 'New Year Promo 2026 - Complete party package with food for 50 guests',
    offerDetail: 'Encore Package + 6-inch cake + Small Chops for 50 guests',
    price: 840,
    image: decorCakeChopsImg,
    active: true,
    features: [
      'Full Encore Package included',
      '6-inch cake',
      'Small Chops for 50 guests',
      'Setup included',
    ],
    addOns: [
      'Veggie Spring Rolls',
      'Prawn Rolls',
      'Samosa',
      'Hot Honey Wings',
      'Puff Puff',
      'Mosa balls',
    ],
    note: 'Travel cost not included. T&Cs apply.',
  },
  {
    id: 'mollis-package',
    title: 'Mollis Package',
    description: 'New Year Promo 2026 - Premium decoration package with more features',
    offerDetail: 'Double sailboard setup with 3 add-ons included',
    price: 320,
    image: mollisPackageImg,
    active: true,
    features: [
      'Double sailboard',
      'Three colour balloon',
      '1-Themed accessories',
      'Cake stand',
    ],
    addOns: [
      'Ambience light (for backdrop)',
      'Extra coloured balloon',
      'Four Helium inflated balloons',
      'Welcome signage',
      'Number light',
      'Table runners and place mat (10 tables max)',
    ],
    note: 'Choose any 3 add-on items. Travel cost not included. T&Cs apply.',
  },
  {
    id: 'mollis-cake-chops',
    title: 'Mollis Premium Bundle',
    description: 'New Year Promo 2026 - Ultimate party package with 8-inch cake and small chops',
    offerDetail: 'Mollis Package + 8-inch cake + Small Chops for 50 guests',
    price: 995,
    image: mollisCakeChopsImg,
    active: true,
    features: [
      'Full Mollis Package included',
      '8-inch cake',
      'Small Chops for 50 guests',
      'Setup included',
    ],
    addOns: [
      'Veggie Spring Rolls',
      'Prawn Rolls',
      'Samosa',
      'Hot Honey Wings',
      'Puff Puff',
      'Mosa balls',
    ],
    note: 'Travel cost not included. T&Cs apply.',
  },
];
export const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSeJexv2QT1t8WE8u8VanBlBGaQbO12Mp3xJFvmBRM_sqXrdcw/viewform';


// Global Settings
export const globalSettings: GlobalSettings = {
  email: 'azaleaaffairs@gmail.com',
  phone: '07707211799',
  address: 'United Kingdom',
  businessHours: 'Mon-Sat: 9am - 6pm',
};
