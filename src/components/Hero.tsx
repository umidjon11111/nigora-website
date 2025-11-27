import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-jewelry.jpg";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 gradient-hero overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-accent/50 px-4 py-2 rounded-full">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="font-body text-sm font-medium text-foreground">
                {t("home.badge")}
              </span>
            </div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              {t("home.title")}
            </h1>

            <p className="font-body text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              {t("home.subtitle")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/products">
                <Button
                  size="lg"
                  className="gradient-gold text-white shadow-elegant hover:scale-105 transition-smooth text-base px-8 py-6 rounded-full"
                >
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  {t("home.shopNow")}
                </Button>
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div
            className="relative animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-elegant">
              <img
                src={heroImage}
                alt="Luxury jewelry collection"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-black/30 to-transparent" />
            </div>
            {/* Floating Badge */}
            <div
              className="absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-elegant p-6 animate-scale-in"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-display text-2xl font-bold text-gold">
                    500+
                  </p>
                  <p className="font-body text-sm text-muted-foreground">
                    {t("home.stats")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
