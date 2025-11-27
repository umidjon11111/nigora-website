import { useTranslation } from "react-i18next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ExternalLink } from "lucide-react";

const Market = () => {
  const { t } = useTranslation();

  const marketplaces = [
    {
      name: "Uzum",
      logo: "https://images.uzum.uz/cfq8gvjmscrqjmkup05g/original.svg",
      url: "https://uzum.uz",
      description: "Leading marketplace in Uzbekistan"
    },
    {
      name: "Ozon",
      logo: "https://cdn1.ozone.ru/s3/fs-common-prod/10000/logo-ozon.svg",
      url: "https://ozon.ru",
      description: "Russia's largest online retailer"
    },
    {
      name: "Yandex Market",
      logo: "https://yastatic.net/s3/home/logos/market-logo.svg",
      url: "https://market.yandex.ru",
      description: "Trusted Russian marketplace"
    },
    {
      name: "Wildberries",
      logo: "https://static-basket-01.wbbasket.ru/vol0/i/v1/wb_logo_light_ru.svg",
      url: "https://wildberries.ru",
      description: "Major online fashion retailer"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center space-y-6 mb-20 animate-fade-in max-w-3xl mx-auto">
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground">
              {t("market.title")}
            </h1>
            <p className="font-body text-lg text-muted-foreground">
              {t("market.subtitle")}
            </p>
            <p className="font-body text-base text-muted-foreground">
              {t("market.description")}
            </p>
          </div>

          {/* Marketplaces Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {marketplaces.map((marketplace, index) => (
              <a
                key={index}
                href={marketplace.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-card rounded-2xl p-8 shadow-card hover-lift cursor-pointer animate-fade-in border border-border"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="h-16 flex items-center">
                    <img
                      src={marketplace.logo}
                      alt={marketplace.name}
                      className="max-h-12 max-w-[180px] object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement!.innerHTML = `<span class="font-display text-2xl font-bold text-gold">${marketplace.name}</span>`;
                      }}
                    />
                  </div>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-smooth" />
                </div>
                
                <p className="font-body text-sm text-muted-foreground">
                  {marketplace.description}
                </p>
                
                <div className="mt-6 inline-flex items-center gap-2 font-body text-sm font-medium text-primary">
                  {t("market.visitStore")}
                  <ExternalLink className="w-4 h-4" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Market;
