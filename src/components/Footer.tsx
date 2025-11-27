import { Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-deep-black text-cream py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-display text-2xl font-bold text-gold">
              SARA SILVERS
            </h3>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold text-gold">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["Home", "Shop", "Custom Order", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(" ", "")}`}
                    className="font-body text-sm text-cream/80 hover:text-gold transition-smooth"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold text-gold">
              Follow Us
            </h4>
            <div className="flex items-center space-x-4">
              <a
                href="https://instagram.com/sara_silvers925"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-cream/10 hover:bg-primary flex items-center justify-center transition-smooth"
              >
                <Instagram className="w-5 h-5 text-cream" />
              </a>

              <a
                href="https://t.me/saraslvers"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#25D366] hover:bg-[#20BA5A] flex items-center justify-center transition-smooth"
              >
                <MessageCircle className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-cream/20 pt-8 text-center">
          <p className="font-body text-sm text-cream/60">
            © 2025 SARA SILVERS Jewelry. All rights reserved. Crafted with love.
          </p>
          <p>
            Created by{" "}
            <a
              href="https://umidjon.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold"
            >
              Umidjon
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
