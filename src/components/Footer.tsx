import { Instagram, MessageCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  const links = [
    { key: "home", href: "#home" },
    { key: "shop", href: "#shop" },
    { key: "customOrder", href: "#customorder" },
    { key: "contact", href: "#contact" },
  ];

  return (
    <footer className="bg-deep-black text-cream py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-display text-2xl font-bold text-gold">
              {t("footer.brand")}
            </h3>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold text-gold">
              {t("footer.quickLinks")}
            </h4>
            <ul className="space-y-2">
              {links.map((item) => (
                <li key={item.key}>
                  <a
                    href={item.href}
                    className="font-body text-sm text-cream/80 hover:text-gold transition-smooth"
                  >
                    {t(`footer.links.${item.key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold text-gold">
              {t("footer.followUs")}
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

        {/* Bottom Section */}
        <div className="border-t border-cream/20 pt-8 text-center">
          <p className="font-body text-sm text-cream/60">
            {t("footer.copyright")}
          </p>
          <p>
            {t("footer.createdBy")}{" "}
            <a
              href="https://umidjon.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold"
            >
              {t("footer.author")}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
