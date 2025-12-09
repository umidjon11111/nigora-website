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
       <h4 className="font-display text-lg font-black text-gold uppercase">
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-telegram"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09" />
                </svg>
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
