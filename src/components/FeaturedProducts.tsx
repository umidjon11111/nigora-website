import { useTranslation } from "react-i18next";
import ProductCard from "./ProductCard";
import goldNecklace from "@/assets/product-gold-necklace.jpg";
import pearlSet from "@/assets/product-pearl-set.jpg";
import nameNecklace from "@/assets/product-name-necklace.jpg";
import moonNecklace from "@/assets/product-moon-necklace.jpg";

const FeaturedProducts = () => {
  const { t } = useTranslation();
  
  const products = [
    {
      image: goldNecklace,
      title: t("products.traditional"),
      description: "Elegant 18K gold with intricate traditional patterns",
      price: "$899",
    },
    {
      image: pearlSet,
      title: t("products.pearl"),
      description: "Complete set with necklace, earrings, and bracelet",
      price: "$1,299",
    },
    {
      image: nameNecklace,
      title: t("products.personalized"),
      description: "Custom name in your choice of metal and font",
      price: "$599",
    },
    {
      image: moonNecklace,
      title: t("products.crescent"),
      description: "Delicate crescent design with diamond accents",
      price: "$749",
    },
  ];

  return (
    <section id="shop" className="py-24 bg-gradient-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground">
            {t("home.featuredTitle")} <span className="text-gold">{t("home.featuredSubtitle")}</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("home.featuredDesc")}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={product.title}
              {...product}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <button className="font-body text-primary hover:text-primary/80 font-medium inline-flex items-center transition-smooth group">
            View All Products
            <svg
              className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-smooth"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
