import { useState } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import goldPearlSet from "@/assets/images/1.png";
import nameNecklaceMariam from "@/assets/images/2.jpg";
import crescentHeartNecklace from "@/assets/images/3.jpg";
import goldLongRings from "@/assets/images/4.png";
import goldGreenLargePendant from "@/assets/images/5.png";
import goldDetailedEarrings from "@/assets/images/6.png";
import goldRedSet from "@/assets/images/7.png";
import goldMultiBeadNecklace from "@/assets/images/8.png";

const Products = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { key: "all", label: t("products.all") },

    // Jewelry Sets
    { key: "jewelrySet", label: t("products.categories.jewelrySet") },

    // Necklaces / Pendants
    { key: "necklace", label: t("products.categories.necklace") },

    // Rings
    { key: "rings", label: t("products.categories.rings") },

    // Earrings
    { key: "earrings", label: t("products.categories.earrings") },
  ];

  const products = [
    {
      image: goldPearlSet,
      title: t("products.goldPearlSetTitle"),
      description: t("products.goldPearlSetDesc"),
      price: "250.000 ming",
      category: "jewelrySet", // ✔ Komplet
    },
    {
      image: nameNecklaceMariam,
      title: t("products.nameNecklaceTitle"),
      description: t("products.nameNecklaceDesc"),
      price: "1.500.000 ming",
      category: "necklace", // ✔ Marjon
    },
    {
      image: crescentHeartNecklace,
      title: t("products.crescentTitle"),
      description: t("products.crescentDesc"),
      price: "1.100.000 ming",
      category: "necklace", // ✔ Pendant / Marjon
    },
    {
      image: goldLongRings,
      title: t("products.longRingsTitle"),
      description: t("products.longRingsDesc"),
      price: "1.200.000 ming",
      category: "rings", // ✔ Uzuklar
    },
    {
      image: goldGreenLargePendant,
      title: t("products.greenPendantTitle"),
      description: t("products.greenPendantDesc"),
      price: "1.500.000 ming",
      category: "necklace", // ✔ Pendant
    },
    {
      image: goldDetailedEarrings,
      title: t("products.detailedEarringsTitle"),
      description: t("products.detailedEarringsDesc"),
      price: "1.800.000 ming",
      category: "earrings", // ✔ Sirg'alar
    },
    {
      image: goldRedSet,
      title: t("products.redSetTitle"),
      description: t("products.redSetDesc"),
      price: "450.000 ming",
      category: "jewelrySet", // ✔ To‘liq set
    },
    {
      image: goldMultiBeadNecklace,
      title: t("products.multiBeadTitle"),
      description: t("products.multiBeadDesc"),
      price: "450.000 ming",
      category: "necklace", // ✔ Marjon
    },
  ];

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center space-y-4 mb-16 animate-fade-in">
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground">
              {t("products.title")}
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("products.subtitle")}
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 animate-slide-up">
            {categories.map((category) => (
              <Button
                key={category.key}
                variant={
                  activeCategory === category.key ? "default" : "outline"
                }
                onClick={() => setActiveCategory(category.key)}
                className="rounded-full font-body transition-smooth"
              >
                {category.label}
              </Button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <ProductCard key={index} {...product} delay={index * 0.1} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="font-body text-muted-foreground text-lg">
                No products found in this category
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Products;
