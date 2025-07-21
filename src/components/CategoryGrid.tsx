import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const CategoryGrid = () => {
  const navigate = useNavigate();
  
  const categories = [
    {
      name: "Pendants",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop",
      description: "Elegant statement pieces",
      path: "/pendants"
    },
    {
      name: "Earrings", 
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop",
      description: "From studs to chandeliers",
      path: "/earrings"
    },
    {
      name: "Jhumkas",
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop", 
      description: "Traditional with a modern twist",
      path: "/jhumkas"
    },
    {
      name: "Bracelets",
      image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&h=400&fit=crop",
      description: "Delicate wrist adornments",
      path: "/bracelets"
    },
    {
      name: "Hair Accessories",
      image: "https://images.unsplash.com/photo-1596944924616-7b35e04f7156?w=400&h=400&fit=crop",
      description: "Beautiful hair embellishments",
      path: "/hair-accessories"
    },
    {
      name: "Hampers",
      image: "https://images.unsplash.com/photo-1549062572-544a64fb0c56?w=400&h=400&fit=crop",
      description: "Curated jewelry collections",
      path: "/hampers"
    },
    {
      name: "Customized Hampers",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=400&fit=crop",
      description: "Personalized gift sets",
      path: "/customized-hampers"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our curated collection of jewelry designed to complement your unique style
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div
              key={category.name}
              className="group cursor-pointer"
              onClick={() => navigate(category.path)}
            >
              <div className="relative overflow-hidden rounded-3xl shadow-elegant hover:shadow-hover transition-smooth group-hover:scale-105 group-hover:-translate-y-2 bg-gradient-to-br from-background to-secondary/30">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-medium text-primary mb-2 group-hover:text-brand-purple-dark transition-smooth">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {category.description}
                  </p>
                  <div className="flex items-center text-brand-purple group-hover:text-brand-purple-dark transition-smooth">
                    <span className="text-sm font-medium">Explore Collection</span>
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-smooth" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;