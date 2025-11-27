import { Button } from "@/components/ui/button";
import { ShoppingCart, Eye } from "lucide-react";

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
  delay?: number;
}

const ProductCard = ({
  image,
  title,
  description,
  price,
  delay = 0,
}: ProductCardProps) => {
  return (
    <div
      className="group bg-card rounded-2xl overflow-hidden shadow-card hover-lift cursor-pointer animate-fade-in"
      style={{ animationDelay: `${delay}s` }}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden aspect-square">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-elegant"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-elegant" />

        {/* Quick Actions */}
        <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-elegant">
          <Button
            size="sm"
            className="bg-card text-foreground hover:bg-primary hover:text-white shadow-elegant rounded-full"
          >
            <Eye className="w-4 h-4" />
          </Button>
          <Button
            size="sm"
            className="gradient-gold text-white shadow-elegant rounded-full"
          >
            <ShoppingCart className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-3">
        <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-smooth">
          {title}
        </h3>
        <p className="font-body text-sm text-muted-foreground line-clamp-2">
          {description}
        </p>
        <div className="flex items-center justify-between pt-2">
          <span className="font-display text-2xl font-bold text-gold">
            {price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
