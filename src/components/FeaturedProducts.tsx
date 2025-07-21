import { Button } from "@/components/ui/button";
import { Heart, Star } from "lucide-react";

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Pearl Drop Earrings",
      price: "₹2,499",
      originalPrice: "₹3,199",
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop",
      rating: 4.8,
      isNew: true
    },
    {
      id: 2,
      name: "Golden Chain Pendant",
      price: "₹3,299",
      originalPrice: "₹4,199",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop",
      rating: 4.9,
      isNew: false
    },
    {
      id: 3,
      name: "Silver Jhumka Set",
      price: "₹1,899",
      originalPrice: "₹2,599",
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop",
      rating: 4.7,
      isNew: true
    },
    {
      id: 4,
      name: "Delicate Chain Bracelet",
      price: "₹1,599",
      originalPrice: "₹2,199",
      image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&h=400&fit=crop",
      rating: 4.6,
      isNew: false
    }
  ];

  return (
    <section className="py-16 gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary mb-4">
            New Arrivals
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our latest collection of handcrafted jewelry pieces
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-background rounded-2xl shadow-soft hover:shadow-hover transition-smooth overflow-hidden"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                />
                {product.isNew && (
                  <div className="absolute top-3 left-3 bg-brand-purple text-primary text-xs font-medium px-2 py-1 rounded-full">
                    New
                  </div>
                )}
                <button className="absolute top-3 right-3 p-2 bg-background/80 rounded-full hover:bg-background transition-smooth">
                  <Heart size={16} className="text-muted-foreground hover:text-brand-purple transition-smooth" />
                </button>
              </div>
              
              <div className="p-4">
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    <Star size={14} className="text-brand-purple fill-current" />
                    <span className="text-sm text-muted-foreground ml-1">
                      {product.rating}
                    </span>
                  </div>
                </div>
                
                <h3 className="font-medium text-primary mb-2 group-hover:text-brand-purple transition-smooth">
                  {product.name}
                </h3>
                
                <div className="flex items-center space-x-2 mb-3">
                  <span className="text-lg font-semibold text-primary">
                    {product.price}
                  </span>
                  <span className="text-sm text-muted-foreground line-through">
                    {product.originalPrice}
                  </span>
                </div>
                
                <Button variant="soft" size="sm" className="w-full">
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;