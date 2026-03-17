import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { GOOGLE_FORM_URL } from '@/lib/data';

export const CTASection = () => {
  return (
    <section className="py-24 md:py-32 bg-card relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">
            Start Your Journey
          </p>
          <h2 className="font-display text-3xl md:text-5xl mb-6">
            Ready to Create Something <br className="hidden md:block" />
            <span className="text-primary">Extraordinary?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Book a paid consultation with our expert team. We'll bring your vision to life
            with meticulous attention to detail and uncompromising quality.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base"
            >
              <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
                <Send className="mr-2 h-5 w-5" />
                Get In Touch
              </a>
            </Button>


          </div>

          <p className="mt-8 text-sm text-muted-foreground">
            * Consultations are paid to ensure dedicated time and expert guidance
          </p>
        </motion.div>
      </div>
    </section>
  );
};
