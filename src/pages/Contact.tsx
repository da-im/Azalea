import { useState } from 'react';
import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { globalSettings } from '@/lib/data';
import { Mail, Phone, MapPin, Calendar, Send, Instagram } from 'lucide-react';

import weddingVenue from '@/assets/hero/wedding-venue.jpg';

const TikTokIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-2.883 2.88a2.896 2.896 0 0 1-2.884-2.88a2.896 2.896 0 0 1 2.884-2.881c.427 0 .835.093 1.205.257V9.524a6.309 6.309 0 0 0-1.205-.116A6.335 6.335 0 0 0 3.15 15.743a6.335 6.335 0 0 0 6.336 6.335 6.335 6.335 0 0 0 6.335-6.335V9.117a8.212 8.212 0 0 0 4.768 1.503V7.175a4.83 4.83 0 0 1-1.000-.489z" />
  </svg>
);

const Contact = () => {
  const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSeJexv2QT1t8WE8u8VanBlBGaQbO12Mp3xJFvmBRM_sqXrdcw/viewform';

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={weddingVenue}
            alt="Book a Consultation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/85" />
        </div>

        <div className="relative z-10 text-center px-6">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-sm tracking-[0.3em] uppercase text-primary mb-4"
          >
            Get In Touch
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="font-display text-4xl md:text-5xl"
          >
            Book a Paid Consultation
          </motion.h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-1"
            >
              <h2 className="font-display text-2xl mb-8">Contact Information</h2>

              <div className="space-y-6">
                <a
                  href={`mailto:${globalSettings.email}`}
                  className="flex items-start gap-4 p-4 rounded-lg bg-card hover:bg-muted transition-colors group"
                >
                  <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">{globalSettings.email}</p>
                  </div>
                </a>

                <a
                  href={`tel:${globalSettings.phone}`}
                  className="flex items-start gap-4 p-4 rounded-lg bg-card hover:bg-muted transition-colors group"
                >
                  <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium">{globalSettings.phone}</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-card">
                  <div className="p-3 rounded-full bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">{globalSettings.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-card">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Hours</p>
                    <p className="font-medium">{globalSettings.businessHours}</p>
                  </div>
                </div>

                <a
                  href={globalSettings.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-lg bg-card hover:bg-muted transition-colors group"
                >
                  <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Instagram className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Instagram</p>
                    <p className="font-medium">{globalSettings.instagramHandle}</p>
                  </div>
                </a>

                <a
                  href={globalSettings.tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-lg bg-card hover:bg-muted transition-colors group"
                >
                  <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <TikTokIcon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">TikTok</p>
                    <p className="font-medium">{globalSettings.tiktokHandle}</p>
                  </div>
                </a>
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="lg:col-span-2"
            >
              <div className="bg-card rounded-xl p-8 md:p-12 border border-border text-center h-full flex flex-col items-center justify-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-8">
                  <Calendar className="h-10 w-10 text-primary" />
                </div>
                <h2 className="font-display text-3xl mb-4">Book Your Consultation</h2>
                <p className="text-muted-foreground max-w-md mx-auto mb-10">
                  Ready to transform your vision into reality? Click the button below to fill out our booking enquiry form on Google Forms.
                </p>

                <Button
                  asChild
                  className="bg-primary hover:bg-primary/90 text-primary-foreground py-8 px-12 text-lg rounded-full"
                >
                  <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
                    Open Booking Form <Send className="ml-3 h-5 w-5" />
                  </a>
                </Button>

                <div className="mt-12 p-6 bg-primary/5 border border-primary/20 rounded-xl max-w-lg">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Note:</strong> Consultations are paid to ensure
                    dedicated time and expert guidance. We'll discuss consultation fees when we respond
                    to your enquiry.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
