import { useTranslation } from "react-i18next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";

import heroImage from "@/assets/images/1.png";
import goldNecklace from "@/assets/images/2.jpg";
import pearlSet from "@/assets/images/3.jpg";
import nameNecklace from "@/assets/images/4.png";
import moonNecklace from "@/assets/images/6.png";
import heroImage2 from "@/assets/images/7.png";

import VideoCarousel from "@/components/About-Carousel";

const About = () => {
  const { t } = useTranslation();

  const galleryImages = [
    heroImage,
    goldNecklace,
    pearlSet,
    nameNecklace,
    moonNecklace,
    heroImage2,
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Story Section */}
          <div className="max-w-4xl mx-auto text-center space-y-6 mb-24 animate-fade-in">
            <Badge
              variant="secondary"
              className="rounded-full px-6 py-2 font-body text-sm"
            >
              {t("about.badge")}
            </Badge>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground">
              {t("about.title")}
            </h1>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              {t("about.description")}
            </p>
          </div>

          {/* Video Carousel */}
          <VideoCarousel />

          {/* Gallery Section */}
          <div
            className="space-y-8 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <h2 className="font-display text-3xl font-bold text-foreground text-center">
              {t("about.galleryTitle")}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="aspect-square rounded-2xl overflow-hidden shadow-card hover-lift cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <img
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-110 transition-elegant"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
