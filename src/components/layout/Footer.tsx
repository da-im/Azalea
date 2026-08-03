import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram } from 'lucide-react';
import { globalSettings, GOOGLE_FORM_URL } from '@/lib/data';
import logo from '@/assets/azalea-logo.png';

const TikTokIcon = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-2.883 2.88a2.896 2.896 0 0 1-2.884-2.88a2.896 2.896 0 0 1 2.884-2.881c.427 0 .835.093 1.205.257V9.524a6.309 6.309 0 0 0-1.205-.116A6.335 6.335 0 0 0 3.15 15.743a6.335 6.335 0 0 0 6.336 6.335 6.335 6.335 0 0 0 6.335-6.335V9.117a8.212 8.212 0 0 0 4.768 1.503V7.175a4.83 4.83 0 0 1-1.000-.489z" />
  </svg>
);

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
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Premium event planning, decoration, and rentals in the United Kingdom.
              Where elegance meets experience.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={globalSettings.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2.5 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href={globalSettings.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="p-2.5 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors flex items-center justify-center"
              >
                <TikTokIcon className="h-[18px] w-[18px]" />
              </a>
            </div>
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
                { label: 'Contact', href: GOOGLE_FORM_URL, isExternal: true },
              ].map((item) => (
                <li key={item.label}>
                  {item.isExternal ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      to={item.href}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {item.label}
                    </Link>
                  )}
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
                <Phone size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <a href={`tel:${globalSettings.phone}`} className="text-muted-foreground hover:text-foreground transition-colors">
                  {globalSettings.phone}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <MapPin size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">{globalSettings.address}</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Instagram size={18} className="text-primary flex-shrink-0" />
                <a
                  href={globalSettings.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {globalSettings.instagramHandle}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <TikTokIcon className="h-[18px] w-[18px] text-primary flex-shrink-0" />
                <a
                  href={globalSettings.tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {globalSettings.tiktokHandle}
                </a>
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
