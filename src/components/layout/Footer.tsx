import { Link } from 'react-router-dom';
import { Mail, MapPin } from 'lucide-react';
import { globalSettings } from '@/lib/data';
import logo from '@/assets/azalea-logo.png';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/">
              <img src={logo} alt="Azalea Affairs" className="h-14 w-auto mb-6" />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Premium event planning, decoration, and rentals in the United Kingdom. 
              Where elegance meets experience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'About', href: '/about' },
                { label: 'Services', href: '/services' },
                { label: 'Gallery', href: '/gallery' },
                { label: 'Promos', href: '/promos' },
                { label: 'Contact', href: '/contact' },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              {['Event Planning', 'Event Decoration', 'Premium Rentals', 'Consultation'].map((item) => (
                <li key={item}>
                  <Link
                    to="/services"
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg mb-6">Get In Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <Mail size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <a href={`mailto:${globalSettings.email}`} className="text-muted-foreground hover:text-foreground transition-colors">
                  {globalSettings.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <MapPin size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">{globalSettings.address}</span>
              </li>
               <li className="flex items-start gap-3 text-sm">
                <className="text-primary mt-0.5 flex-shrink-0" />
                07707211799 
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Azalea Affairs. All rights reserved.
            </p>
            <p className="text-muted-foreground text-xs">
              Premium Event Decoration & Planning • United Kingdom
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
